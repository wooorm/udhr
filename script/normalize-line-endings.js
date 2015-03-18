'use strict';

var fs = require('fs');
var eol = require('eol');

fs.readFile('data/udhr-txt/index.xml', 'utf-8', function (err, contents) {
    if (err) {
        throw err;
    }

    contents = eol.lf(contents);

    fs.writeFile('data/udhr-txt/index.xml', contents, function (exception) {
        if (exception) {
            throw exception;
        }
    });
});
