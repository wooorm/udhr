'use strict'

/* eslint-disable import/no-dynamic-require */

module.exports = getDeclarations

function getDeclarations() {
  var map = {}

  require('../data/index-json.json').forEach(function(filename) {
    map[filename] = require('../data/udhr-json/' + filename + '.json')
  })

  return map
}
