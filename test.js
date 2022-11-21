import assert from 'node:assert/strict'
import test from 'node:test'
import {udhr} from './index.js'

test('udhr', function () {
  assert.equal(typeof udhr, 'object', 'should be an object')
})

test('udhr[]', function () {
  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index], 'object')
    }
  }, 'should be an object')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].iso6393, 'string')
    }
  }, 'should have an iso')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].bcp47, 'string')
    }
  }, 'should have a bcp')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert(
        typeof udhr[index].ohchr === 'string' || udhr[index].ohchr === null
      )
    }
  }, 'should have an ohchr')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].code, 'string')
    }
  }, 'should have a code')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert.strictEqual(typeof udhr[index].name, 'string')
    }
  }, 'should have a name')

  assert.doesNotThrow(function () {
    let index = -1

    while (++index < udhr.length) {
      const stage = udhr[index].stage
      assert(typeof stage === 'number')
      assert(Math.round(stage) === stage)
      assert(stage > 0)
      assert(stage < 6)
    }
  }, 'should have a stage')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert(
        typeof udhr[index].latitude === 'number' ||
          udhr[index].latitude === null
      )
    }
  }, 'should have a `latitude`')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < udhr.length) {
      assert(
        typeof udhr[index].longitude === 'number' ||
          udhr[index].longitude === null
      )
    }
  }, 'should have a `longitude`')
})
