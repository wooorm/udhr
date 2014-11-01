'use strict';

var fs, xmlToJSON, readFile, writeFile, exists;

fs = require('fs');
xmlToJSON = require('xml-to-json');
readFile = fs.readFileSync;
writeFile = fs.writeFileSync;
exists = fs.existsSync;

function cleanData(data) {
    return data.udhrs.udhr.map(function (declaration) {
        return declaration.$;
    }).map(function (declaration) {
        var cleanDeclaration,
            location,
            filename;

        cleanDeclaration = {};

        cleanDeclaration.region = declaration.region || null;
        cleanDeclaration.country = declaration.country || null;
        cleanDeclaration.ISO = declaration['iso639-3'] || null;
        cleanDeclaration.ULI = declaration.uli || null;
        cleanDeclaration.BCP47 = declaration.bcp47 || null;
        cleanDeclaration.OHCHR = declaration.ohchr || null;
        cleanDeclaration.code = declaration.l;
        cleanDeclaration.name = declaration.n;
        cleanDeclaration.stage = parseFloat(declaration.stage);
        cleanDeclaration.version = declaration.v || null;
        cleanDeclaration.namedVersion = declaration.nv || null;

        cleanDeclaration.hasNotes = declaration.notes === 'y';
        cleanDeclaration.hasPDF = declaration.pdf === 'y';

        location = declaration.loc.split(',').map(parseFloat);

        cleanDeclaration.latitude = location[0] || null;
        cleanDeclaration.longitude = location[1] || null;

        filename = cleanDeclaration.code;

        if (cleanDeclaration.version) {
            filename += '_' + cleanDeclaration.version;
        }

        if (cleanDeclaration.code === 'nku') {
            cleanDeclaration.hasTXT =
                Boolean(
                    readFile(
                        'data/udhr-txt/udhr_' + filename + '.txt', 'utf-8'
                    )
                );

            /* istanbul ignore if: warning when unicode fixes things. */
            if (cleanDeclaration.hasTXT) {
                console.log(
                    'Warning: NKU error was fixed. The special code (see ' +
                    'warning) should be removed.'
                );
            }
        } else {
            cleanDeclaration.hasTXT =
                exists('data/udhr-txt/udhr_' + filename + '.txt');
        }

        cleanDeclaration.hasXML = cleanDeclaration.hasJSON =
            exists('data/udhr-xml/udhr_' + filename + '.xml');

        cleanDeclaration.filename = filename;

        // Not sure what the `demo` property means.

        return cleanDeclaration;
    });
}

function writeTXTData(data) {
    var keys;

    data = data.filter(function (declaration) {
        return declaration.hasTXT;
    });

    keys = data.map(function (declaration) {
        return declaration.filename;
    });

    writeFile('data/index-txt.json', JSON.stringify(keys, null, 2));
}

function shouldIgnore(value, key) {
    return key === 'number';
}

var BLACKLIST = /by sprat|missing|^(\?\??)$/i;

function cleanString(value, key, allowDirty) {
    var newValue,
        first,
        last;

    value = value.split(/(?:\r?\n|\r)+/).join('\n');

    if (key === 'language' || key === 'tag') {
        return value;
    }

    first = value.charAt(0);
    last = value.charAt(value.length - 1);

    if (
        (first === '[' && last === ']') ||
        (first === '(' && last === ')')
    ) {
        if (key === 'title' && !(/preamble/i.test(value))) {
            newValue = value.slice(1, -1);

            console.log(
                'Unwrapping title:            "' +
                value + '" > "' + newValue + '"'
            );

            value = newValue;
        } else if (!allowDirty) {
            console.log(
                'Removing string:             "' + value + '"'
            );

            value = '';
        }
    }

    if (BLACKLIST.test(value)) {
        if (!allowDirty) {
            console.log(
                'Removing blacklisted string: "' + value + '"'
            );

            return '';
        } else {
            console.log(
                'Allowing blacklisted string: "' + value + '"'
            );
        }
    }

    return value;
}

function cleanXMLJSON(object, key, allowDirty) {
    var clean,
        property,
        value,
        nestedProperty;

    allowDirty = allowDirty === true || key === 'note';

    if (typeof object !== 'object') {
        if (key === 'para') {
            object = [object];
        } else {
            return cleanString(object, key, allowDirty);
        }
    }

    if (key === 'para') {
        return cleanString(object.join('\n'), key, allowDirty);
    }

    if ('length' in object) {
        clean = [];
    } else {
        clean = {};
    }

    for (property in object) {
        value = object[property];

        if (property === '$') {
            for (nestedProperty in value) {
                if (shouldIgnore(value[nestedProperty], nestedProperty)) {
                    continue;
                }

                clean[nestedProperty] = cleanXMLJSON(
                    value[nestedProperty], nestedProperty, allowDirty
                );
            }
        } else {
            clean[property] = cleanXMLJSON(value, property, allowDirty);
        }
    }

    return clean;
}

function writeJSONData(data) {
    var keys;

    data = data.filter(function (declaration) {
        return declaration.hasJSON;
    });

    keys = data.map(function (declaration) {
        return declaration.filename;
    });

    writeFile('data/index-json.json', JSON.stringify(keys, null, 2));

    data.forEach(function (declaration) {
        var input = 'data/udhr-xml/udhr_' + declaration.filename + '.xml',
            output = 'data/udhr-json/' + declaration.filename + '.json';

        xmlToJSON({
            'input': input
        }, function (error, data) {
            /* istanbul ignore if: won't error. */
            if (error) {
                throw error;
            }

            console.log(data.udhr.$.lang);

            data = cleanXMLJSON(data.udhr);

            if (!data.title) {
                data.title = '';
            }

            if (!data.note) {
                data.note = [];
            } else if (!Array.isArray(data.note)) {
                data.note = [data.note];
            }

            if (!data.preamble) {
                data.preamble = {};
            }

            if (!data.preamble.title) {
                data.preamble.title = '';
            }

            if (!data.preamble.para) {
                data.preamble.para = '';
            }

            if (!Array.isArray(data.article)) {
                data.article = [data.article];
            }

            data.article.forEach(function (article) {
                if (!article.title) {
                    article.title = '';
                }
            });

            data.article.forEach(function (article) {
                var firstDigit;

                if (!('para' in article) || article.para || !article.title) {
                    return;
                }

                /* Very short; probably just no translation yet. */
                if (article.title.length < 50) {
                    return;
                }

                firstDigit = article.title.match(/\d/);

                /* istanbul ignore if: future... */
                if (!firstDigit) {
                    return;
                }

                firstDigit = firstDigit.index + 1;

                article.para = article.title.slice(firstDigit);
                article.title = article.title.slice(0, firstDigit);

                console.log(
                    '  splitting article title: "' +
                    article.title + '" from article "' + article.para + '"'
                );
            });

            writeFile(output, JSON.stringify(data, null, 2));

            console.log('');
        });
    });
}

xmlToJSON({
    'input': 'data/udhr-txt/index.xml'
}, function (error, data) {
    var udhr;

    /* istanbul ignore if: won't error. */
    if (error) {
        throw error;
    }

    udhr = cleanData(data);

    writeFile('data/information.json', JSON.stringify(udhr, null, 2));
    writeJSONData(udhr);
    writeTXTData(udhr);
});
