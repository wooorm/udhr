/**
 * @typedef {import('xast').Text} XastText
 * @typedef {import('xast').Element} XastElement
 * @typedef {import('xast').Node} XastNode
 * @typedef {import('hast').Text} HastText
 * @typedef {import('hast').Element} HastElement
 */

/**
 * @typedef {Object} Context
 * @property {number} rank
 * @property {(node: XastElement) => () => void} enter
 */

/* eslint-disable no-await-in-loop */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import {fromXml} from 'xast-util-from-xml'
import {toString} from 'xast-util-to-string'
import {select, selectAll} from 'unist-util-select'
import {h} from 'hastscript'
import {u} from 'unist-builder'
import {mapz} from 'mapz'
import {zwitch} from 'zwitch'
import {unified} from 'unified'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

const xml = fromXml(
  String(await fs.readFile(new URL('../xml/index.xml', import.meta.url)))
)

const elements = /** @type {Array<XastElement>} */ (
  selectAll('element[name=udhr]', xml)
)

const udhrs = await Promise.all(
  elements.map(async (/** @type {XastElement} */ element) => {
    const {attributes} = element
    const location = attributes.loc.split(',').map((d) => Number.parseFloat(d))

    let exists = false

    try {
      await fs.access(
        new URL('../xml/udhr_' + attributes.f + '.xml', import.meta.url),
        fs.constants.R_OK
      )
      exists = true
    } catch {}

    return {
      code: attributes.f,
      name: attributes.n,
      bcp47: attributes.bcp47 || null,
      ohchr: attributes.ohchr || null,
      iso6393: attributes['iso639-3'] || null,
      direction: attributes.dir || null,
      stage: Number.parseInt(attributes.stage, 10),
      latitude: location[0] || null,
      longitude: location[1] || null,
      hasXml: exists
    }
  })
)

const udhr = udhrs.filter((d) => d.hasXml).map(({hasXml, ...rest}) => rest)

await fs.writeFile(
  new URL('../index.js', import.meta.url),
  'export const udhr = ' + JSON.stringify(udhr, null, 2) + '\n'
)

const element = zwitch('name', {
  invalid: invalidElement,
  unknown: unknownElement,
  handlers: {
    udhr: root,
    title,
    para,
    orderedlist,
    listitem,
    note,
    article,
    preamble
  }
})

const one = zwitch('type', {
  invalid,
  unknown,
  handlers: {element, text, comment}
})

const all = mapz(one, {key: 'children', gapless: true})

const processor = unified().use(rehypeFormat).use(rehypeStringify)

let index = -1

while (++index < udhr.length) {
  const tree = fromXml(
    await fs.readFile(
      new URL('../xml/udhr_' + udhr[index].code + '.xml', import.meta.url)
    )
  )
  const main = /** @type {XastElement} */ (select('element[name=udhr]', tree))

  console.log('%s (%s)', main.attributes.n, main.attributes.key)

  const doc = processor.stringify(
    await processor.run(
      u('root', [
        u('doctype', {name: 'html'}),
        h(
          'html',
          {
            lang: main.attributes['xml:lang'],
            dir: main.attributes.dir,
            dataCode: main.attributes.key,
            dataIso6393: main.attributes['iso639-3']
          },
          [
            h('head', [h('title', main.attributes.n)]),
            one.call({rank: 0, enter}, main)
          ]
        )
      ])
    )
  )

  await fs.writeFile(
    new URL('../declaration/' + udhr[index].code + '.html', import.meta.url),
    doc
  )
}

/**
 * @param {XastElement} node
 * @this {Context}
 */
function enter(node) {
  const rank = this.rank

  if (node.children.some((d) => d.type === 'element' && d.name === 'title')) {
    this.rank++
    return () => {
      this.rank = rank
    }
  }

  return () => {}
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function title(d) {
  const value = cleanString(toString(d))
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  return h('h' + this.rank, value ? u('text', value) : [])
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function para(d) {
  const value = cleanString(toString(d))
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  return value ? h('p', [u('text', value)]) : undefined
}

/**
 * @this {Context}
 * @param {XastElement} d
 */
function note(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), [])
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function preamble(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  const exit = this.enter(d)
  const node = h('header', all.call(this, d))
  exit()
  return node
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function orderedlist(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  const exit = this.enter(d)
  const node = h('ol', all.call(this, d))
  exit()
  return node
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function listitem(d) {
  const ignore = new Set(['tag', 'label'])
  // Some list items are marked with their index as a word, such as `first`,
  // `second`.
  assert.deepStrictEqual(
    Object.keys(d.attributes).filter((x) => !ignore.has(x)),
    []
  )
  const exit = this.enter(d)
  const node = h('li', all.call(this, d))
  exit()
  return node
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function article(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), ['number'])
  const exit = this.enter(d)
  const node = h(
    'article',
    {dataNumber: d.attributes.number},
    all.call(this, d)
  )
  exit()
  return node
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function root(d) {
  const exit = this.enter(d)
  const node = h('body', all.call(this, d))
  exit()
  return node
}

/**
 * @this {Context}
 * @param {XastText} d
 * @returns {HastText}
 */
function text(d) {
  return u('text', d.value.replace(/\r\n?/g, '\n'))
}

function comment() {}

/**
 * @this {Context}
 * @param {unknown} d
 * @never
 */
function invalidElement(d) {
  throw new Error('Cannot handle invalid element `' + d + '`')
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @never
 */
function unknownElement(d) {
  throw new Error('Cannot handle unknown element w/ name `' + d.name + '`')
}

/**
 * @this {Context}
 * @param {unknown} d
 * @never
 */
function invalid(d) {
  throw new Error('Cannot handle invalid node `' + d + '`')
}

/**
 * @this {Context}
 * @param {XastNode} d
 * @never
 */
function unknown(d) {
  throw new Error('Cannot handle unknown node w/ type `' + d.type + '`')
}

/**
 * @param {string} raw
 * @returns {string}
 */
function cleanString(raw) {
  const value = raw.replace(/^\s*\[\s*(.*)\s*]\s*$/, '&1')
  return /by sprat|missing|^(\?\??)$/i.test(value) ? '' : value
}

/* eslint-enable no-await-in-loop */
