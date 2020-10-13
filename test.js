'use strict'

var assert = require('assert')
var test = require('tape')
var udhr = require('.')

var json = udhr.json()
var text = udhr.text()
var information = udhr.information()

test('udhr', function (t) {
  t.equal(typeof udhr, 'object', 'should be an object')
  t.end()
})

test('udhr.information', function (t) {
  t.equal(typeof udhr.information, 'function', 'should be a function')
  t.equal(typeof information, 'object', 'should return an object')
  t.end()
})

test('udhr.information.n', function (t) {
  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert.strictEqual(typeof declaration, 'object')
    })
  }, 'should be an object')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.ISO === 'string')
    })
  }, 'should have an iso')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.BCP47 === 'string')
    })
  }, 'should have a bcp')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      var value = declaration.OHCHR
      assert(typeof value === 'string' || value === null)
    })
  }, 'should have an ohchr')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.code === 'string')
    })
  }, 'should have a code')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.code === 'string')
    })
  }, 'should have a name')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      var value = declaration.stage

      assert(typeof value === 'number')
      assert(Math.round(value) === value)
      assert(value > 0)
      assert(value < 6)
    })
  }, 'should have a stage')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.hasNotes === 'boolean')
    })
  }, 'should have a `hasNotes`')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.hasTXT === 'boolean')
    })
  }, 'should have a `hasTXT`')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.hasJSON === 'boolean')
    })
  }, 'should have a `hasJSON`')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      assert(typeof declaration.filename === 'string')
    })
  }, 'should have a `filename`')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      var value = declaration.latitude
      assert(typeof value === 'number' || value === null)
    })
  }, 'should have a `latitude`')

  t.doesNotThrow(function () {
    each(information, function (declaration) {
      var value = declaration.longitude
      assert(typeof value === 'number' || value === null)
    })
  }, 'should have a `longitude`')

  t.end()
})

test('udhr.json()', function (t) {
  t.equal(typeof udhr.json, 'function', 'should be a function')
  t.equal(typeof json, 'object', 'should return an object')
  t.end()
})

test('udhr.json().n', function (t) {
  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration, 'object')
    })
  }, 'should be an object')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration.lang, 'string')
    })
  }, 'should have a `lang`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration.language, 'string')
    })
  }, 'should have a `language`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(declaration.xmlns, 'http://www.unhchr.ch/udhr')
    })
  }, 'should have an `xmlns`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration.title, 'string')
    })
  }, 'should have a `title`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration.preamble, 'object')
    })
  }, 'should have a `preamble`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration.preamble.title, 'string')
    })
  }, 'should have a `preamble.title`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      assert.strictEqual(typeof declaration.preamble.para, 'string')
    })
  }, 'should have a `preamble.para`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      var value = declaration.article
      assert(Array.isArray(value))
      assert(value.length > 0)
    })
  }, 'should have an `article`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      var value = declaration.article
      assert(Array.isArray(value))
      assert(value.length > 0)
    })
  }, 'should have an `article`')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      each(declaration.article, function (article) {
        assert(typeof article === 'object')
      })
    })
  }, 'each article should be an object')

  t.doesNotThrow(function () {
    each(json, function (declaration) {
      each(declaration.article, function (article) {
        assert(typeof article.title === 'string')
      })
    })
  }, 'each article should have a `title`')

  t.doesNotThrow(function () {
    all(json, 'para').forEach(function (value) {
      assert(typeof value === 'string')
    })
  }, 'each value at a `para` key should be string')

  t.end()
})

test('udhr.text()', function (t) {
  t.equal(typeof udhr.text, 'function', 'should be a function')
  t.equal(typeof text, 'object', 'should return an object')
  t.end()
})

test('udhr.text().n', function (t) {
  t.doesNotThrow(function () {
    each(text, function (declaration) {
      assert.strictEqual(typeof declaration, 'string')
    })
  }, 'should be a string')

  t.end()
})

function each(values, callback) {
  Object.keys(values).forEach(function (key) {
    callback(values[key], key)
  })
}

function all(object, key) {
  var results = []
  var property
  var value

  for (property in object) {
    value = object[property]

    if (property === key) {
      results.push(value)
    } else if (typeof value === 'object') {
      results = results.concat(all(value, key))
    }
  }

  return results
}
