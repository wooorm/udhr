'use strict'

module.exports = getDeclarations

function getDeclarations() {
  var map = {}

  require('../data/information.json').forEach(function (declaration) {
    map[declaration.filename] = declaration
  })

  return map
}
