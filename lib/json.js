'use strict';

/**
 * Get JSON.
 *
 * @return {Object}
 */
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
