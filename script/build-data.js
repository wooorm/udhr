import fs from 'fs'
import path from 'path'
import assert from 'assert'
import fromXml from 'xast-util-from-xml'
import toString from 'xast-util-to-string'
import $ from 'unist-util-select'
import h from 'hastscript'
import u from 'unist-builder'
import {mapz} from 'mapz'
import {zwitch} from 'zwitch'
import unified from 'unified'
import rehypeFormat from 'rehype-format'
import rehypeSerialize from 'rehype-stringify'

var xml = fromXml(fs.readFileSync(path.join('xml', 'index.xml')))

var udhr = $.selectAll('element[name=udhr]', xml)
  .map(({attributes}) => {
    var location = attributes.loc.split(',').map((d) => Number.parseFloat(d))

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
      hasXml: fs.existsSync(path.join('xml', 'udhr_' + attributes.f + '.xml'))
    }
  })
  .filter((d) => d.hasXml)
  .map(({hasXml, ...rest}) => rest)

fs.writeFileSync(
  path.join('index.js'),
  'export var udhr = ' + JSON.stringify(udhr, null, 2) + '\n'
)

var element = zwitch('name', {
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

var one = zwitch('type', {
  invalid,
  unknown,
  handlers: {element, text, comment}
})

var all = mapz(one, {key: 'children', gapless: true})

var processor = unified().use(rehypeFormat).use(rehypeSerialize)

var index = -1
var main
var doc

while (++index < udhr.length) {
  main = $.select(
    'element[name=udhr]',
    fromXml(
      fs.readFileSync(path.join('xml', 'udhr_' + udhr[index].code + '.xml'))
    )
  )

  console.log('%s (%s)', main.attributes.n, main.attributes.key)

  doc = processor.stringify(
    processor.runSync(
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
            one.call({rank: 1, enter}, main)
          ]
        )
      ])
    )
  )

  fs.writeFileSync(path.join('declaration', udhr[index].code + '.html'), doc)
}

function enter(node) {
  var rank = this.rank

  if (node.children.some((d) => d.type === 'element' && d.name === 'title')) {
    this.rank++
    return () => {
      this.rank = rank
    }
  }

  return () => {}
}

function title(d) {
  var value = cleanString(toString(d))
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  return h('h' + this.rank, value ? u('text', value) : [])
}

function para(d) {
  var value = cleanString(toString(d))
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  return value ? h('p', [u('text', value)]) : undefined
}

function note(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), [])
}

function preamble(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  var exit = this.enter(d)
  var node = h('header', all.call(this, d))
  exit()
  return node
}

function orderedlist(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), [])
  var exit = this.enter(d)
  var node = h('ol', all.call(this, d))
  exit()
  return node
}

function listitem(d) {
  var ignore = new Set(['tag', 'label'])
  // Some list items are marked with their index as a word, such as `first`,
  // `second`.
  assert.deepStrictEqual(
    Object.keys(d.attributes).filter((x) => !ignore.has(x)),
    []
  )
  var exit = this.enter(d)
  var node = h('li', all.call(this, d))
  exit()
  return node
}

function article(d) {
  assert.deepStrictEqual(Object.keys(d.attributes), ['number'])
  var exit = this.enter(d)
  var node = h('article', {dataNumber: d.attributes.number}, all.call(this, d))
  exit()
  return node
}

function root(d) {
  var exit = this.enter(d)
  var node = h('body', all.call(this, d))
  exit()
  return node
}

function text(d) {
  return u('text', d.value.replace(/\r\n?/g, '\n'))
}

function comment() {}

function invalidElement(d) {
  throw new Error('Cannot handle invalid element `' + d + '`')
}

function unknownElement(d) {
  throw new Error('Cannot handle unknown element w/ name `' + d.name + '`')
}

function invalid(d) {
  throw new Error('Cannot handle invalid node `' + d + '`')
}

function unknown(d) {
  throw new Error('Cannot handle unknown node w/ type `' + d.type + '`')
}

function cleanString(raw) {
  var value = raw.replace(/^\s*\[\s*(.*)\s*]\s*$/, '&1')
  return /by sprat|missing|^(\?\??)$/i.test(value) ? '' : value
}
