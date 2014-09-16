'use strict';

function getDeclarations() {
    var map = {};

    require('../data/index-json.json').forEach(function (filename) {
        map[filename] = require(
            '../data/udhr-json/' + filename + '.json'
        );
    });

    return map;
}

module.exports = getDeclarations;
