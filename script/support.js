'use strict'

var zone = require('mdast-zone')
var u = require('unist-builder')
var info = require('..')

var ohchrBase = 'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID='
var isoBase = 'https://iso639-3.sil.org/code/'
var locationBase = 'https://www.openstreetmap.org/#map=5/'

module.exports = support

function support() {
  return transformer
}

function transformer(tree) {
  zone(tree, 'support', replace)
}

function replace(start, _, end) {
  return [start, table(), end]
}

function table() {
  var header = ['Name', 'BCP 47', 'OHCHR', 'ISO 639-3', 'Direction', 'Location']

  return u(
    'table',
    {align: []},
    [
      u(
        'tableRow',
        header.map((d) => cell(d))
      )
    ].concat(
      Object.keys(info).map(function (code) {
        var value = info[code]
        var ohchr = value.ohchr
        var iso = value.iso6393
        var loc = 'No'

        if (ohchr) {
          ohchr = u('link', {url: ohchrBase + ohchr}, [u('text', ohchr)])
        }

        if (iso) {
          iso = u('link', {url: isoBase + iso}, [u('text', iso)])
        }

        if (value.latitude || value.longitude) {
          loc = u(
            'link',
            {url: locationBase + value.latitude + '/' + value.longitude},
            [
              u(
                'text',
                [value.latitude.toFixed(1), value.longitude.toFixed(1)].join(
                  ', '
                )
              )
            ]
          )
        }

        return u('tableRow', [
          cell(value.name || ''),
          cell(value.bcp47 || ''),
          cell(ohchr || ''),
          cell(iso || ''),
          cell(value.direction || ''),
          cell(loc)
        ])
      })
    )
  )

  function cell(value) {
    return u('tableCell', [
      typeof value === 'string' ? u('text', value) : value
    ])
  }
}
