'use strict';

function getDeclarations() {
    var map;

    map = {};

    require('../data/information.json').forEach(function (declaration) {
        map[declaration.filename] = declaration;
    });

    return map;
}


module.exports = getDeclarations;
