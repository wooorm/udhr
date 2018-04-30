'use strict';

var zone = require('mdast-zone');
var u = require('unist-builder');
var info = require('../lib/information')();

var ohchrBase = 'http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=';
var isoBase = 'http://www-01.sil.org/iso639-3/documentation.asp?id=';
var locationBase = 'http://www.openstreetmap.org/#map=5/';

module.exports = support;

function support() {
  return transformer;
}

function transformer(tree) {
  zone(tree, 'support', replace);
}

function replace(start, nodes, end) {
  return [start, table(), end];
}

function table() {
  var header = ['Name', 'BCP 47', 'OHCHR', 'ISO 639-3', 'Direction', 'Location'];

  return u('table', {align: []}, [
    u('tableRow', header.map(cell))
  ].concat(Object.keys(info).map(function (code) {
    var value = info[code];
    var ohchr = value.OHCHR;
    var iso = value.ISO;
    var loc = 'No';

    if (ohchr) {
      ohchr = u('link', {url: ohchrBase + ohchr}, [u('text', ohchr)]);
    }

    if (iso) {
      iso = u('link', {url: isoBase + iso}, [u('text', iso)]);
    }

    if (value.latitude || value.longitude) {
      loc = u('link', {url: locationBase + value.latitude + '/' + value.longitude}, [
        u('text', [
          value.latitude.toFixed(1),
          value.longitude.toFixed(1)
        ].join(', '))
      ]);
    }

    return u('tableRow', [
      cell(value.name || ''),
      cell(value.BCP47 || ''),
      cell(ohchr || ''),
      cell(iso || ''),
      cell(value.direction || ''),
      cell(loc)
    ]);
  })));

  function cell(value) {
    var val = typeof value === 'string' ? u('text', value) : value;
    return u('tableCell', [val]);
  }
}
