'use strict'

var fs = require('fs')
var join = require('path').join
var eol = require('eol')
var bail = require('bail')

var fp = join('data', 'udhr-txt', 'index.xml')

fs.readFile(fp, 'utf8', function (error, doc) {
  bail(error)
  fs.writeFile(fp, eol.lf(doc), bail)
})
