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

function cleanXMLJSON(object, key) {
    var clean, property, value, nestedProperty;

    if (typeof object !== 'object') {
        if (key === 'para') {
            object = [object];
        } else {
            return object;
        }
    }

    if (key === 'para') {
        object = object.join('\n').split(/(?:\r?\n|\r)+/).join('\n');

        if (
            object.toLowerCase().indexOf('missing') !== -1 ||
            object === '[?]' ||
            object.indexOf('by SPRAT, Ahmedabad') !== -1 ||
            object.toLowerCase().indexOf('not available') !== -1
        ) {
            console.log(
                '  removing paragraph: "' + object + '"'
            );

            object = '';
        }

        return object;
    }

    if ('length' in object) {
        clean = [];
    } else {
        clean = {};
    }

    for (property in object) {
        value = object[property];

        if (property === 'number') {
            continue;
        }

        if (property === '$') {
            for (nestedProperty in value) {
                if (nestedProperty === 'number') {
                    continue;
                }

                clean[nestedProperty] = cleanXMLJSON(
                    value[nestedProperty], nestedProperty
                );
            }
        } else {
            clean[property] = cleanXMLJSON(value, property);
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
            'input' : input
        }, function (error, data) {
            if (error) {
                throw error;
            }

            console.log(data.udhr.$.lang);

            data = cleanXMLJSON(data.udhr);

            if (!data.title) {
                data.title = '';
            }

            if (
                data.title.indexOf('?') !== -1 ||
                data.title.toLowerCase().indexOf('missing') !== -1
            ) {
                console.log(
                    '  removing title: "' + data.title + '"'
                );

                data.title = '';
            }

            if (
                data.title.charAt(0) === '[' &&
                data.title.charAt(data.title.length - 1) === ']'
            ) {
                console.log(
                    '  removing square brackets: "' + data.title + '"'
                );

                data.title = data.title.slice(1, -1);
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
            } else if (
                data.preamble.title.toLowerCase() === '[Preamble]' ||
                data.preamble.title.toLowerCase() === '[missing]'
            ) {
                console.log(
                    '  removing preamble title: "' +
                    data.preamble.title + '"'
                );

                data.preamble.title = '';
            }

            if (!data.preamble.para) {
                data.preamble.para = '';
            } else if (
                data.preamble.para.toLowerCase() === '(preamble missing)' ||
                data.preamble.para.toLowerCase() === '[missing]'
            ) {
                console.log(
                    '  removing preamble paragraph: "' +
                    data.preamble.title + '"'
                );

                data.preamble.para = '';
            }

            if (!Array.isArray(data.article)) {
                data.article = [data.article];
            }

            data.article.forEach(function (article) {
                if (!article.title) {
                    article.title = '';
                } else if (
                    article.title.indexOf('?') !== -1 ||
                    article.title.toLowerCase().indexOf('missing') !== -1
                ) {
                    console.log(
                        '  removing article title: "' + article.title + '"'
                    );

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
    'input' : 'data/udhr-txt/index.xml'
}, function (error, data) {
    var udhr;

    if (error) {
        throw error;
    }

    udhr = cleanData(data);

    writeFile('data/information.json', JSON.stringify(udhr, null, 2));
    writeJSONData(udhr);
    writeTXTData(udhr);
});
