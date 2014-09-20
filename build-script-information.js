'use strict';

var fs,
    information,
    declarations,
    unicode,
    expressions,
    scripts,
    writeFile;

fs = require('fs');
information = require('./index.js').information();
declarations = require('./index.js').json();
unicode = require('unicode-7.0.0').scripts;
writeFile = fs.writeFileSync;

scripts = {};

expressions = {};

unicode.forEach(function (script) {
    var expression;

    expression = require('unicode-7.0.0/scripts/' + script + '/regex.js');

    expressions[script] = new RegExp(expression.source, 'g');
});

function round(value) {
    return Math.round(value * 100) / 100;
}

function all(object, key) {
    var results = [],
        property,
        value;

    for (property in object) {
        value = object[property];

        if (property === key) {
            results.push(value);
        } else if (typeof value === 'object') {
            results = results.concat(all(value, key));
        }
    }

    return results;
}

Object.keys(declarations).forEach(function (code) {
    var declaration,
        content,
        info,
        length,
        name;

    info = information[code];
    declaration = declarations[code];
    content = all(declaration, 'para').join('');
    length = content.length;

    name = info.name;

    if (info.namedVersion) {
        name += ' ' + info.namedVersion;
    }

    Object.keys(expressions).forEach(function (script) {
        var count;

        count = content.match(expressions[script]);

        count = (count ? count.length : 0) / length;

        count = round(count * 100);

        if (count) {
            if (!scripts[script]) {
                scripts[script] = [];
            }

            scripts[script].push(name + ' [' + count + '%]');
        }
    });
});

writeFile('Script-information.md',
    'Script Information\n' +
    '=================\n' +
    '\n' +

    '| Script | Declarations |\n' +
    '| -----: | :----------- |\n' +

    Object.keys(scripts).map(function (script) {
        return '| ' +
            script + ' | ' +
            scripts[script].join('; ') +
            ' |';
    }).join('\n') +

    '\n'
);
