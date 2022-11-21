/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 */

import {zone} from 'mdast-zone'
import {u} from 'unist-builder'
import {udhr} from '../index.js'

const ohchrBase = 'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID='
const isoBase = 'https://iso639-3.sil.org/code/'
const locationBase = 'https://www.openstreetmap.org/#map=5/'

const own = {}.hasOwnProperty

/** @type {import('unified').Plugin<[], Root>} */
export default function support() {
  return function (tree) {
    zone(tree, 'support', function (start, _, end) {
      return [start, table(), end]
    })
  }
}

/** @returns {Table} */
function table() {
  const header = [
    'Name',
    'BCP 47',
    'OHCHR',
    'ISO 639-3',
    'Direction',
    'Location'
  ]
  const content = [
    u(
      'tableRow',
      header.map((d) => cell(d))
    )
  ]
  /** @type {string} */
  let key

  for (key in udhr) {
    if (!own.call(udhr, key)) continue

    /** @type {string|PhrasingContent|null} */
    let ohchr = udhr[key].ohchr
    /** @type {string|PhrasingContent|null} */
    let iso = udhr[key].iso6393
    /** @type {string|PhrasingContent|null} */
    let loc = 'No'

    if (ohchr) {
      ohchr = u('link', {url: ohchrBase + ohchr}, [u('text', ohchr)])
    }

    if (iso) {
      iso = u('link', {url: isoBase + iso}, [u('text', iso)])
    }

    if (udhr[key].latitude || udhr[key].longitude) {
      loc = u(
        'link',
        {url: locationBase + udhr[key].latitude + '/' + udhr[key].longitude},
        [
          u(
            'text',
            [
              udhr[key].latitude.toFixed(1),
              udhr[key].longitude.toFixed(1)
            ].join(', ')
          )
        ]
      )
    }

    content.push(
      u('tableRow', [
        cell(udhr[key].name || ''),
        cell(udhr[key].bcp47 || ''),
        cell(ohchr || ''),
        cell(iso || ''),
        cell(udhr[key].direction || ''),
        cell(loc)
      ])
    )
  }

  return u('table', {align: []}, content)

  /**
   * @param {string|PhrasingContent} value
   * @returns {TableCell}
   */
  function cell(value) {
    /** @type {Array<PhrasingContent>} */
    const children = []
    const child = value
      ? typeof value === 'string'
        ? u('text', value)
        : value
      : null
    if (child) children.push(child)
    return u('tableCell', children)
  }
}
