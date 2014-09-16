'use strict';

function getDeclarations() {
    var map = {};

    require('../data/information.json').forEach(function (declaration) {
        map[declaration.filename] = declaration;
    });

    return map;
}


module.exports = getDeclarations;
