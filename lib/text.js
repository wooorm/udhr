'use strict';

module.exports = getDeclarations;

var join = require('path').join;
var readFile = require('fs').readFileSync;

var base = join('data', 'udhr-txt');

function getDeclarations() {
  var map = {};

  require('../data/index-txt.json').forEach(function (fp) {
    map[fp] = readFile(join(base, 'udhr_' + fp + '.txt'), 'utf8');
  });

  return map;
}
