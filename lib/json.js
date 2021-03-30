'use strict'

module.exports = getDeclarations

function getDeclarations() {
  var map = {}

  require('../data/index.json').forEach(function (code) {
    map[code] = require('../data/udhr-json/' + code + '.json')
  })

  return map
}
