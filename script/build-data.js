'use strict'

var fs = require('fs')
var xmlToJson = require('xml-to-json')
var bail = require('bail')

var disallow = /by sprat|missing|^(\?\??)$/i

xmlToJson({input: 'data/udhr-xml/index.xml'}, function (error, data) {
  bail(error)
  var udhr = cleanData(data)

  fs.writeFileSync(
    'data/information.json',
    JSON.stringify(udhr, null, 2) + '\n'
  )

  writeJsonData(udhr)
})

function cleanXmlJson(object, key, allowDirty) {
  var dirty = allowDirty === true || key === 'note'
  var clean
  var property
  var value
  var nestedProperty

  if (typeof object !== 'object') {
    if (key !== 'para') {
      return cleanString(object, key, dirty)
    }

    object = [object]
  }

  if (key === 'para') {
    return cleanString(object.join('\n'), key, dirty)
  }

  clean = 'length' in object ? [] : {}

  for (property in object) {
    value = object[property]

    if (property === '$') {
      for (nestedProperty in value) {
        if (shouldIgnore(value[nestedProperty], nestedProperty)) {
          continue
        }

        clean[nestedProperty] = cleanXmlJson(
          value[nestedProperty],
          nestedProperty,
          dirty
        )
      }
    } else {
      clean[property] = cleanXmlJson(value, property, dirty)
    }
  }

  return clean
}

function writeJsonData(data) {
  var json = data.filter((d) => d.hasJson)
  var keys = json.map((d) => d.code)

  fs.writeFileSync('data/index.json', JSON.stringify(keys, null, 2) + '\n')

  json.forEach(function (declaration) {
    var input = 'data/udhr-xml/udhr_' + declaration.code + '.xml'
    var output = 'data/udhr-json/' + declaration.code + '.json'

    xmlToJson({input: input}, function (error, json) {
      bail(error)

      console.log(json.udhr.$.n)

      json = cleanXmlJson(json.udhr)

      if (!json.title) {
        json.title = ''
      }

      json.lang = json['xml:lang']
      json.language = json.n

      delete json['xml:lang']
      delete json.n

      if (!json.note) {
        json.note = []
      } else if (!Array.isArray(json.note)) {
        json.note = [json.note]
      }

      if (!json.preamble) {
        json.preamble = {}
      }

      if (!json.preamble.title) {
        json.preamble.title = ''
      }

      if (!json.preamble.para) {
        json.preamble.para = ''
      }

      if (!Array.isArray(json.article)) {
        json.article = [json.article]
      }

      json.article.forEach(function (article) {
        if (!article.title) {
          article.title = ''
        }

        if (typeof article.title !== 'string' && '_' in article.title) {
          article.title = article.title._
        }

        if (typeof article.title !== 'string' && article.title[0]) {
          article.title = article.title[0]
        }
      })

      json.article.forEach(function (article) {
        var firstDigit

        if (!('para' in article) || article.para || !article.title) {
          return
        }

        // Very short; probably just no translation yet.
        if (article.title.length < 50) {
          return
        }

        firstDigit = article.title.match(/\d/)

        if (!firstDigit) {
          return
        }

        firstDigit = firstDigit.index + 1

        article.para = article.title.slice(firstDigit)
        article.title = article.title.slice(0, firstDigit)

        console.log(
          '  splitting article title: "' +
            article.title +
            '" from article "' +
            article.para +
            '"'
        )
      })

      fs.writeFileSync(output, JSON.stringify(json, null, 2) + '\n')

      console.log('')
    })
  })
}

function cleanString(value, key, dirty) {
  var newValue
  var first
  var last

  value = value.split(/(?:\r?\n|\r)+/).join('\n')

  if (key === 'language' || key === 'tag') {
    return value
  }

  first = value.charAt(0)
  last = value.charAt(value.length - 1)

  if ((first === '[' && last === ']') || (first === '(' && last === ')')) {
    if (key === 'title' && !/preamble/i.test(value)) {
      newValue = value.slice(1, -1)
      console.log(
        'Unwrapping title:            "' + value + '" > "' + newValue + '"'
      )
      value = newValue
    } else if (!dirty) {
      console.log('Removing string:             "' + value + '"')

      value = ''
    }
  }

  if (disallow.test(value)) {
    if (!dirty) {
      console.log('Removing disallowed string: "' + value + '"')

      return ''
    }

    console.log('Allowing disallowed string: "' + value + '"')
  }

  return value
}

function shouldIgnore(value, key) {
  return key === 'number'
}

function cleanData(data) {
  return data.udhrs.udhr
    .map(function (declaration) {
      console.log('dec:', declaration)
      return declaration.$
    })
    .map(function (d) {
      var location = d.loc.split(',').map((d) => parseFloat(d))

      // Not sure what the `demo` property means.

      return {
        iso6393: d['iso639-3'] || null,
        bcp47: d.bcp47 || null,
        ohchr: d.ohchr || null,
        direction: d.dir || null,
        code: d.f,
        name: d.n,
        stage: parseFloat(d.stage),
        notes: d.notes === 'y',
        latitude: location[0] || null,
        longitude: location[1] || null,
        hasJson: fs.existsSync('data/udhr-xml/udhr_' + d.f + '.xml')
      }
    })
}
