'use strict';

var readFile = require('fs').readFileSync;

/**
 * Get plain text.
 *
 * @return {Object}
 */
function getDeclarations() {
    var map = {};

    require('../data/index-txt.json').forEach(function (filename) {
        map[filename] = readFile(
            'data/udhr-txt/udhr_' + filename + '.txt', 'utf8'
        );
    });

    return map;
}

module.exports = getDeclarations;
