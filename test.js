'use strict'

var assert = require('assert')
var test = require('tape')
var udhr = require('.')

test('udhr', function (t) {
  t.equal(typeof udhr, 'object', 'should be an object')
  t.end()
})

test('udhr[]', function (t) {
  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      assert.strictEqual(typeof declaration, 'object')
    })
  }, 'should be an object')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      assert(typeof declaration.iso6393 === 'string')
    })
  }, 'should have an iso')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      assert(typeof declaration.bcp47 === 'string')
    })
  }, 'should have a bcp')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      var value = declaration.ohchr
      assert(typeof value === 'string' || value === null)
    })
  }, 'should have an ohchr')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      assert(typeof declaration.code === 'string')
    })
  }, 'should have a code')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      assert(typeof declaration.name === 'string')
    })
  }, 'should have a name')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      var value = declaration.stage

      assert(typeof value === 'number')
      assert(Math.round(value) === value)
      assert(value > 0)
      assert(value < 6)
    })
  }, 'should have a stage')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      var value = declaration.latitude
      assert(typeof value === 'number' || value === null)
    })
  }, 'should have a `latitude`')

  t.doesNotThrow(function () {
    each(udhr, function (declaration) {
      var value = declaration.longitude
      assert(typeof value === 'number' || value === null)
    })
  }, 'should have a `longitude`')

  t.end()
})

function each(values, callback) {
  Object.keys(values).forEach(function (key) {
    callback(values[key], key)
  })
}
