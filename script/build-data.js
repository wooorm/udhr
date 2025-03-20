/* eslint-disable no-await-in-loop, unicorn/no-this-assignment */

/**
 * @import {Element as HastElement, Root as HastRoot, Text as HastText} from 'hast'
 * @import {Element as XastElement, Text as XastText} from 'xast'
 */

/**
 * @typedef Context
 * @property {number} rank
 * @property {(node: XastElement) => () => undefined} enter
 */

// To do: `undefined`.
/**
 * @typedef Info
 * @property {string | null} bcp47
 * @property {string} code
 * @property {'ltr' | 'rtl' | 'ttb' | null} direction
 * @property {string | null} iso6393
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} name
 * @property {string | null} ohchr
 * @property {1 | 2 | 3 | 4 | 5} stage
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import {h} from 'hastscript'
import {format} from 'hast-util-format'
import {toHtml} from 'hast-util-to-html'
import {mapz} from 'mapz'
import {selectAll, select} from 'unist-util-select'
import {fromXml} from 'xast-util-from-xml'
import {toString} from 'xast-util-to-string'
import {zwitch} from 'zwitch'

const xml = fromXml(
  await fs.readFile(new URL('../xml/index.xml', import.meta.url), 'utf8')
)

const elements = /** @type {Array<XastElement>} */ (
  selectAll('element[name=udhr]', xml)
)

/** @type {Array<Info>} */
const udhr = []

for (const element of elements) {
  try {
    await fs.access(
      new URL('../xml/udhr_' + element.attributes.f + '.xml', import.meta.url),
      fs.constants.R_OK
    )
  } catch {
    continue
  }

  /** @type {Array<number>} */
  const location = []

  // To do: remove when released: `https://github.com/eric-muller/udhr/commit/a28b68b`
  const loc =
    element.attributes.loc === '36.41,f4.76'
      ? '36.41,4.76'
      : element.attributes.loc || ''

  for (const d of loc.split(',')) {
    location.push(Number.parseFloat(d))
  }

  const direction = element.attributes.dir
  const stage = Number.parseInt(element.attributes.stage || '', 10)

  assert(typeof element.attributes.f === 'string')
  assert(typeof element.attributes.n === 'string')
  assert(
    direction === 'ltr' ||
      direction === 'rtl' ||
      direction === 'ttb' ||
      direction === undefined
  )
  assert(
    stage === 1 || stage === 2 || stage === 3 || stage === 4 || stage === 5
  )
  // To do: perhaps allow `0`.
  assert(location.length === 2)

  udhr.push({
    code: element.attributes.f,
    name: element.attributes.n,
    bcp47: element.attributes.bcp47 || null,
    ohchr: element.attributes.ohchr || null,
    iso6393: element.attributes['iso639-3'] || null,
    direction: direction || null,
    stage,
    latitude: location[0],
    longitude: location[1]
  })
}

await fs.writeFile(
  new URL('../index.js', import.meta.url),
  // Note: Please keep `Info` in sync with above type generated below.
  // To do: sort type; `ReadonlyArray`, `null`.
  [
    '/**',
    ' * @typedef Info',
    ' * @property {string} code',
    ' * @property {string} name',
    ' * @property {string | null} bcp47',
    ' * @property {string | null} ohchr',
    ' * @property {string | null} iso6393',
    " * @property {'ltr' | 'rtl' | 'ttb' | null} direction",
    ' * @property {1 | 2 | 3 | 4 | 5} stage',
    ' * @property {number} latitude',
    ' * @property {number} longitude',
    ' */',
    '',
    '/**',
    ' * Universal Declaration of Human Rights.',
    ' *',
    ' * @type {Array<Info>}',
    ' */',
    'export const udhr = ' + JSON.stringify(udhr, undefined, 2),
    ''
  ].join('\n')
)

const element = zwitch('name', {
  handlers: {
    article,
    listitem,
    note,
    orderedlist,
    para,
    preamble,
    title,
    udhr: root
  },
  invalid: invalidElement,
  unknown: unknownElement
})

const one = zwitch('type', {
  handlers: {comment, element, text},
  invalid,
  unknown
})

const all = mapz(one, {gapless: true, key: 'children'})

for (const info of udhr) {
  const tree = fromXml(
    await fs.readFile(
      new URL('../xml/udhr_' + info.code + '.xml', import.meta.url)
    )
  )
  const main = /** @type {XastElement} */ (select('element[name=udhr]', tree))

  console.log('%s (%s)', main.attributes.n, main.attributes.key)

  /** @type {HastRoot} */
  const hastRoot = {
    type: 'root',
    children: [
      {type: 'doctype'},
      h(
        'html',
        {
          // To do: sort.
          lang: main.attributes['xml:lang'],
          dir: main.attributes.dir,
          dataCode: main.attributes.key,
          dataIso6393: main.attributes['iso639-3']
        },
        [
          h('head', [h('title', main.attributes.n)]),
          // To do: clean.
          one.call({enter, rank: 0}, main)
        ]
      )
    ]
  }

  format(hastRoot)

  await fs.writeFile(
    new URL('../declaration/' + info.code + '.html', import.meta.url),
    toHtml(hastRoot)
  )
}

/**
 * @param {XastElement} node
 * @this {Context}
 */
function enter(node) {
  const context = this
  const rank = context.rank

  for (const child of node.children) {
    if (child.type === 'element' && child.name === 'title') {
      context.rank++
      // To do: should be possible to always return `restore`?
      return restore
    }
  }

  return noop

  function noop() {}

  function restore() {
    context.rank = rank
  }
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function title(d) {
  const value = cleanString(toString(d))
  assert.deepEqual(Object.keys(d.attributes), [])
  return h('h' + this.rank, value ? [{type: 'text', value}] : [])
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement | undefined}
 */
function para(d) {
  const value = cleanString(toString(d))
  assert.deepEqual(Object.keys(d.attributes), [])
  return value ? h('p', [{type: 'text', value}]) : undefined
}

/**
 * @this {Context}
 * @param {XastElement} d
 */
function note(d) {
  assert.deepEqual(Object.keys(d.attributes), [])
}

/**
 * @this {Context}
 * @param {XastElement} d
 * @returns {HastElement}
 */
function preamble(d) {
  assert.deepEqual(Object.keys(d.attributes), [])
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
  assert.deepEqual(Object.keys(d.attributes), [])
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
  // Some list items are marked with their index as a word, such as `first`,
  // `second`.
  /** @type {Array<string>} */
  const keys = []

  for (const key of Object.keys(d.attributes)) {
    if (key !== 'label' && key !== 'tag') {
      keys.push(key)
    }
  }

  assert.deepEqual(keys, [])
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
  assert.deepEqual(Object.keys(d.attributes), ['number'])
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
  return {type: 'text', value: d.value.replace(/\r\n?/g, '\n')}
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
