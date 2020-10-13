'use strict'

var fs = require('fs')
var join = require('path').join
var eol = require('eol')
var bail = require('bail')

var fp = join('data', 'udhr-txt', 'index.xml')

fs.readFile(fp, 'utf8', function (err, doc) {
  bail(err)
  fs.writeFile(fp, eol.lf(doc), bail)
})
