'use strict'

var fs = require('fs')
var xmlToJSON = require('xml-to-json')
var bail = require('bail')

var readFile = fs.readFileSync
var writeFile = fs.writeFileSync
var exists = fs.existsSync

var BLACKLIST = /by sprat|missing|^(\?\??)$/i

xmlToJSON({input: 'data/udhr-txt/index.xml'}, function (err, data) {
  var udhr

  bail(err)

  udhr = cleanData(data)

  writeFile('data/information.json', JSON.stringify(udhr, null, 2) + '\n')
  writeJSONData(udhr)
  writeTXTData(udhr)
})

function cleanXMLJSON(object, key, allowDirty) {
  var clean
  var property
  var value
  var nestedProperty

  allowDirty = allowDirty === true || key === 'note'

  if (typeof object !== 'object') {
    if (key !== 'para') {
      return cleanString(object, key, allowDirty)
    }

    object = [object]
  }

  if (key === 'para') {
    return cleanString(object.join('\n'), key, allowDirty)
  }

  clean = 'length' in object ? [] : {}

  for (property in object) {
    value = object[property]

    if (property === '$') {
      for (nestedProperty in value) {
        if (shouldIgnore(value[nestedProperty], nestedProperty)) {
          continue
        }

        clean[nestedProperty] = cleanXMLJSON(
          value[nestedProperty],
          nestedProperty,
          allowDirty
        )
      }
    } else {
      clean[property] = cleanXMLJSON(value, property, allowDirty)
    }
  }

  return clean
}

function writeJSONData(data) {
  var keys

  data = data.filter(function (declaration) {
    return declaration.hasJSON
  })

  keys = data.map(function (declaration) {
    return declaration.filename
  })

  writeFile('data/index-json.json', JSON.stringify(keys, null, 2) + '\n')

  data.forEach(function (declaration) {
    var input = 'data/udhr-xml/udhr_' + declaration.filename + '.xml'
    var output = 'data/udhr-json/' + declaration.filename + '.json'

    xmlToJSON({input: input}, function (err, json) {
      bail(err)

      console.log(json.udhr.$.n)

      json = cleanXMLJSON(json.udhr)

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

      writeFile(output, JSON.stringify(json, null, 2) + '\n')

      console.log('')
    })
  })
}

function cleanString(value, key, allowDirty) {
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
    } else if (!allowDirty) {
      console.log('Removing string:             "' + value + '"')

      value = ''
    }
  }

  if (BLACKLIST.test(value)) {
    if (!allowDirty) {
      console.log('Removing blacklisted string: "' + value + '"')

      return ''
    }

    console.log('Allowing blacklisted string: "' + value + '"')
  }

  return value
}

function shouldIgnore(value, key) {
  return key === 'number'
}

function writeTXTData(data) {
  var keys = data
    .filter(function (declaration) {
      return declaration.hasTXT
    })
    .map(function (declaration) {
      return declaration.filename
    })

  writeFile('data/index-txt.json', JSON.stringify(keys, null, 2) + '\n')
}

function cleanData(data) {
  return data.udhrs.udhr
    .map(function (declaration) {
      console.log('dec:', declaration)
      return declaration.$
    })
    .map(function (declaration) {
      var cleanDeclaration = {}
      var location
      var filename

      cleanDeclaration.ISO = declaration['iso639-3'] || null
      cleanDeclaration.BCP47 = declaration.bcp47 || null
      cleanDeclaration.OHCHR = declaration.ohchr || null
      cleanDeclaration.direction = declaration.dir || null
      cleanDeclaration.code = declaration.f
      cleanDeclaration.name = declaration.n
      cleanDeclaration.stage = parseFloat(declaration.stage)

      cleanDeclaration.hasNotes = declaration.notes === 'y'

      location = declaration.loc.split(',').map(parseFloat)

      cleanDeclaration.latitude = location[0] || null
      cleanDeclaration.longitude = location[1] || null

      filename = cleanDeclaration.code

      if (cleanDeclaration.code === 'nku') {
        cleanDeclaration.hasTXT = Boolean(
          readFile('data/udhr-txt/udhr_' + filename + '.txt', 'utf-8')
        )

        if (cleanDeclaration.hasTXT) {
          console.log(
            'Warning: NKU error was fixed. The special code (see warning) should be removed.'
          )
        }
      } else {
        cleanDeclaration.hasTXT = exists(
          'data/udhr-txt/udhr_' + filename + '.txt'
        )
      }

      cleanDeclaration.hasJSON = exists(
        'data/udhr-xml/udhr_' + filename + '.xml'
      )
      cleanDeclaration.hasXML = cleanDeclaration.hasJSON

      cleanDeclaration.filename = filename

      // Not sure what the `demo` property means.

      return cleanDeclaration
    })
}
