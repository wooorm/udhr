/* eslint-disable no-await-in-loop */

/**
 * @import {ElementContent as HastElementContent, Element as HastElement, Root as HastRoot, Text as HastText} from 'hast'
 * @import {Element as XastElement, Nodes as XastNodes, Parent as XastParent, Text as XastText} from 'xast'
 */

/**
 * @typedef State
 *   Info passed around.
 * @property {number} rank
 *   Current heading rank.
 */

/**
 * @typedef Info
 * @property {string} bcp47
 * @property {string} code
 * @property {'ltr' | 'rtl' | 'ttb'} direction
 * @property {string} iso6393
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} name
 * @property {string | undefined} ohchr
 * @property {1 | 2 | 3 | 4 | 5} stage
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import {h} from 'hastscript'
import {format} from 'hast-util-format'
import {toHtml} from 'hast-util-to-html'
import {selectAll, select} from 'unist-util-select'
import {fromXml} from 'xast-util-from-xml'
import {toString} from 'xast-util-to-string'

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

  const stage = Number.parseInt(element.attributes.stage || '', 10)

  assert(typeof element.attributes.bcp47 === 'string')
  assert(typeof element.attributes.f === 'string')
  assert(typeof element.attributes['iso639-3'] === 'string')
  assert(typeof element.attributes.n === 'string')
  assert(
    element.attributes.dir === 'ltr' ||
      element.attributes.dir === 'rtl' ||
      element.attributes.dir === 'ttb'
  )
  assert(
    stage === 1 || stage === 2 || stage === 3 || stage === 4 || stage === 5
  )
  assert(location.length === 2)

  udhr.push({
    bcp47: element.attributes.bcp47,
    code: element.attributes.f,
    direction: element.attributes.dir,
    iso6393: element.attributes['iso639-3'],
    latitude: location[0],
    longitude: location[1],
    name: element.attributes.n,
    ohchr: element.attributes.ohchr || undefined,
    stage
  })
}

await fs.writeFile(
  new URL('../index.js', import.meta.url),
  // Note: Please keep `Info` in sync with above type generated below.
  [
    '/**',
    ' * @typedef Info',
    ' * @property {string} bcp47',
    ' *   BCP 47 language tag.',
    ' * @property {string} code',
    ' *   Code of encoding.',
    " * @property {'ltr' | 'rtl' | 'ttb'} direction",
    ' *   Direction.',
    ' * @property {string} iso6393',
    ' *   ISO 639-3 code.',
    ' * @property {number} latitude',
    ' *   Latitude.',
    ' * @property {number} longitude',
    ' *   Longitude.',
    ' * @property {string} name',
    ' *   Name of language.',
    ' * @property {string} [ohchr]',
    ' *   Link or code.',
    ' * @property {1 | 2 | 3 | 4 | 5} stage',
    ' *   Stage of encoding.',
    ' */',
    '',
    '/**',
    ' * Universal Declaration of Human Rights.',
    ' *',
    ' * @type {ReadonlyArray<Info>}',
    ' */',
    'export const udhr = ' + JSON.stringify(udhr, undefined, 2),
    ''
  ].join('\n')
)

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
          dataCode: main.attributes.key,
          dataIso6393: main.attributes['iso639-3'],
          dir: main.attributes.dir,
          lang: main.attributes['xml:lang']
        },
        [h('head', [h('title', main.attributes.n)]), one({rank: 0}, main)]
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
 * @param {State} state
 *   Info passed around.
 * @param {XastParent} node
 *   Node.
 * @returns {Array<HastElementContent>}
 *   Results.
 */
function all(state, node) {
  /** @type {Array<HastElementContent>} */
  const results = []
  let increment = false

  for (const child of node.children) {
    if (child.type === 'element' && child.name === 'title') {
      increment = true
      break
    }
  }

  if (increment) state.rank++

  for (const child of node.children) {
    const result = one(state, child)
    if (result) results.push(result)
  }

  if (increment) state.rank--

  return results
}

/**
 * @param {State} state
 *   Info passed around.
 * @param {XastNodes} node
 *   Node.
 * @returns {HastElementContent | undefined}
 *   Result.
 */
function one(state, node) {
  if (node.type === 'element') {
    if (node.name === 'article') return article(state, node)
    if (node.name === 'listitem') return listitem(state, node)
    if (node.name === 'note') return note(state, node)
    if (node.name === 'orderedlist') return orderedlist(state, node)
    if (node.name === 'para') return para(state, node)
    if (node.name === 'preamble') return preamble(state, node)
    if (node.name === 'title') return title(state, node)
    if (node.name === 'udhr') return root(state, node)
  }

  if (node.type === 'text') {
    return text(state, node)
  }
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement}
 */
function title(state, d) {
  const value = cleanString(toString(d))
  assert.deepEqual(d.attributes, {})
  return h('h' + state.rank, value ? [{type: 'text', value}] : [])
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement | undefined}
 */
function para(state, d) {
  const value = cleanString(toString(d))
  assert.deepEqual(d.attributes, {})
  return value ? h('p', [{type: 'text', value}]) : undefined
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {undefined}
 */
function note(state, d) {
  assert.deepEqual(d.attributes, {})
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement}
 */
function preamble(state, d) {
  assert.deepEqual(d.attributes, {})
  return h('header', all(state, d))
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement}
 */
function orderedlist(state, d) {
  assert.deepEqual(d.attributes, {})
  return h('ol', all(state, d))
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement}
 */
function listitem(state, d) {
  const {label, tag, ...rest} = d.attributes
  assert.deepEqual(rest, {})
  return h('li', all(state, d))
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement}
 */
function article(state, d) {
  assert.deepEqual(Object.keys(d.attributes), ['number'])
  return h('article', {dataNumber: d.attributes.number}, all(state, d))
}

/**
 * @param {State} state
 * @param {XastElement} d
 * @returns {HastElement}
 */
function root(state, d) {
  return h('body', all(state, d))
}

/**
 * @param {State} state
 * @param {XastText} d
 * @returns {HastText}
 */
function text(state, d) {
  return {type: 'text', value: d.value.replace(/\r\n?/g, '\n')}
}

/**
 * @param {string} raw
 * @returns {string}
 */
function cleanString(raw) {
  const value = raw.replace(/^\s*\[\s*(.*)\s*]\s*$/, '&1')
  return /by sprat|missing|^(\?\??)$/i.test(value) ? '' : value
}
