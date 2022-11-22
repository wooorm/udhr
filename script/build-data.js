/**
 * @typedef {import('xast').Text} XastText
 * @typedef {import('xast').Element} XastElement
 * @typedef {import('hast').Text} HastText
 * @typedef {import('hast').Element} HastElement
 *
 * @typedef Context
 * @property {number} rank
 * @property {(node: XastElement) => () => void} enter
 *
 * Note: Please keep `Info` in sync with `index.js` generated below.
 * Do remove `hasXml` though.
 *
 * @typedef Info
 * @property {string} code
 * @property {string} name
 * @property {string|null} bcp47
 * @property {string|null} ohchr
 * @property {string|null} iso6393
 * @property {'ltr'|'rtl'|'ttb'|null} direction
 * @property {1|2|3|4|5} stage
 * @property {number} latitude
 * @property {number} longitude
 * @property {boolean} hasXml
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
  elements.map(async (element) => {
    const {attributes = {}} = element
    const location = (attributes.loc || '')
      .split(',')
      .map((d) => Number.parseFloat(d))

    let exists = false

    try {
      await fs.access(
        new URL('../xml/udhr_' + attributes.f + '.xml', import.meta.url),
        fs.constants.R_OK
      )
      exists = true
    } catch {}

    const direction = attributes.dir
    const stage = Number.parseInt(attributes.stage || '', 10)

    assert(typeof attributes.f === 'string')
    assert(typeof attributes.n === 'string')
    assert(
      direction === 'ltr' ||
        direction === 'rtl' ||
        direction === 'ttb' ||
        direction === undefined
    )
    assert(
      stage === 1 || stage === 2 || stage === 3 || stage === 4 || stage === 5
    )

    /** @type {Info} */
    const info = {
      code: attributes.f,
      name: attributes.n,
      bcp47: attributes.bcp47 || null,
      ohchr: attributes.ohchr || null,
      iso6393: attributes['iso639-3'] || null,
      direction: direction || null,
      stage,
      latitude: location[0],
      longitude: location[1],
      hasXml: exists
    }

    return info
  })
)

const udhr = udhrs.filter((d) => d.hasXml).map(({hasXml, ...rest}) => rest)

await fs.writeFile(
  new URL('../index.js', import.meta.url),
  // Note: Please keep `Info` in sync with above type generated below.
  // Do remove `hasXml` though.
  [
    '/**',
    ' * @typedef Info',
    ' * @property {string} code',
    ' * @property {string} name',
    ' * @property {string|null} bcp47',
    ' * @property {string|null} ohchr',
    ' * @property {string|null} iso6393',
    " * @property {'ltr'|'rtl'|'ttb'|null} direction",
    ' * @property {1|2|3|4|5} stage',
    ' * @property {number} latitude',
    ' * @property {number} longitude',
    ' */',
    '',
    '/**',
    ' * Universal Declaration of Human Rights (Unicode)',
    ' *',
    ' * @type {Array<Info>}',
    ' */',
    'export const udhr = ' + JSON.stringify(udhr, null, 2),
    ''
  ].join('\n')
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
  const attributes = main.attributes || {}

  console.log('%s (%s)', attributes.n, attributes.key)

  const doc = processor.stringify(
    await processor.run(
      u('root', [
        u('doctype', {name: 'html'}),
        h(
          'html',
          {
            lang: attributes['xml:lang'],
            dir: attributes.dir,
            dataCode: attributes.key,
            dataIso6393: attributes['iso639-3']
          },
          [
            h('head', [h('title', attributes.n)]),
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
  assert.deepStrictEqual(Object.keys(d.attributes || {}), [])
  return h('h' + this.rank, value ? u('text', value) : [])
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement|undefined}
 */
function para(d) {
  const value = cleanString(toString(d))
  assert.deepStrictEqual(Object.keys(d.attributes || {}), [])
  return value ? h('p', [u('text', value)]) : undefined
}

/**
 * @this {Context}
 * @param {XastElement} d
 */
function note(d) {
  assert.deepStrictEqual(Object.keys(d.attributes || {}), [])
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function preamble(d) {
  assert.deepStrictEqual(Object.keys(d.attributes || {}), [])
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
  assert.deepStrictEqual(Object.keys(d.attributes || {}), [])
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
    Object.keys(d.attributes || {}).filter((x) => !ignore.has(x)),
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
  const attributes = d.attributes || {}
  assert.deepStrictEqual(Object.keys(attributes), ['number'])
  const exit = this.enter(d)
  const node = h('article', {dataNumber: attributes.number}, all.call(this, d))
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
 * @returns {never}
 */
function invalidElement(d) {
  throw new Error('Cannot handle invalid element `' + d + '`')
}

/**
 * @this {Context}
 * @param {unknown} d
 * @returns {never}
 */
function unknownElement(d) {
  // @ts-expect-error: it’s an element.
  throw new Error('Cannot handle unknown element w/ name `' + d.name + '`')
}

/**
 * @this {Context}
 * @param {unknown} d
 * @returns {never}
 */
function invalid(d) {
  throw new Error('Cannot handle invalid node `' + d + '`')
}

/**
 * @this {Context}
 * @param {unknown} d
 * @returns {never}
 */
function unknown(d) {
  // @ts-expect-error: it’s a node.
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
