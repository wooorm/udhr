import assert from 'node:assert/strict'
import test from 'node:test'
import {udhr} from './index.js'

test('udhr', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), ['udhr'])
  })
})

test('udhr[]', async function (t) {
  await t.test('should be an object', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert.strictEqual(typeof info, 'object')
      }
    })
  })

  await t.test('should have an iso', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert.strictEqual(typeof info.iso6393, 'string')
      }
    })
  })

  await t.test('should have a bcp', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert.strictEqual(typeof info.bcp47, 'string')
      }
    })
  })

  await t.test('should have an ohchr', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert(typeof info.ohchr === 'string' || info.ohchr === null)
      }
    })
  })

  await t.test('should have a code', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert.strictEqual(typeof info.code, 'string')
      }
    })
  })

  await t.test('should have a name', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert.strictEqual(typeof info.name, 'string')
      }
    })
  })

  await t.test('should have a stage', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        const stage = info.stage
        assert(typeof stage === 'number')
        assert(Math.round(stage) === stage)
        assert(stage > 0)
        assert(stage < 6)
      }
    })
  })

  await t.test('should have a `latitude`', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert(typeof info.latitude === 'number' || info.latitude === null)
      }
    })
  })

  await t.test('should have a `longitude`', async function () {
    assert.doesNotThrow(function () {
      for (const info of udhr) {
        assert(typeof info.longitude === 'number' || info.longitude === null)
      }
    })
  })
})
