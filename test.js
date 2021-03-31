import assert from 'assert'
import test from 'tape'
import {udhr} from './index.js'

test('udhr', function (t) {
  t.equal(typeof udhr, 'object', 'should be an object')
  t.end()
})

test('udhr[]', function (t) {
  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index], 'object')
    }
  }, 'should be an object')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].iso6393, 'string')
    }
  }, 'should have an iso')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].bcp47, 'string')
    }
  }, 'should have a bcp')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert(
        typeof udhr[index].ohchr === 'string' || udhr[index].ohchr === null
      )
    }
  }, 'should have an ohchr')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].code, 'string')
    }
  }, 'should have a code')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].name, 'string')
    }
  }, 'should have a name')

  t.doesNotThrow(function () {
    var index = -1
    /** @type {number} */
    var stage

    while (++index < udhr.length) {
      stage = udhr[index].stage
      assert(typeof stage === 'number')
      assert(Math.round(stage) === stage)
      assert(stage > 0)
      assert(stage < 6)
    }
  }, 'should have a stage')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert(
        typeof udhr[index].latitude === 'number' ||
          udhr[index].latitude === null
      )
    }
  }, 'should have a `latitude`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < udhr.length) {
      assert(
        typeof udhr[index].longitude === 'number' ||
          udhr[index].longitude === null
      )
    }
  }, 'should have a `longitude`')

  t.end()
})
