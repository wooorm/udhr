'use strict'

module.exports = getDeclarations

function getDeclarations() {
  var map = {}

  require('../data/information.json').forEach(function (declaration) {
    map[declaration.code] = declaration
  })

  return map
}
