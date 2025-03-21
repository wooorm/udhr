/**
 * @import {Root, Table} from 'mdast'
 */

import {zone} from 'mdast-zone'
import {udhr} from '../index.js'

/**
 * @returns
 *   Transform.
 */
export default function remarkInjectSupport() {
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    zone(tree, 'support', function (start, _, end) {
      /** @type {Table} */
      const table = {
        type: 'table',
        align: [],
        children: [
          {
            type: 'tableRow',
            children: [
              {type: 'tableCell', children: [{type: 'text', value: 'Name'}]},
              {type: 'tableCell', children: [{type: 'text', value: 'BCP 47'}]},
              {
                type: 'tableCell',
                children: [{type: 'text', value: 'ISO 639-3'}]
              },
              {
                type: 'tableCell',
                children: [{type: 'text', value: 'Direction'}]
              },
              {type: 'tableCell', children: [{type: 'text', value: 'Location'}]}
            ]
          }
        ]
      }

      for (const info of Object.values(udhr)) {
        const ohchrUrl = info.ohchr
          ? /^https?:/.test(info.ohchr)
            ? info.ohchr
            : 'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
              info.ohchr
          : undefined

        table.children.push({
          type: 'tableRow',
          children: [
            {
              type: 'tableCell',
              children: ohchrUrl
                ? [
                    {
                      type: 'link',
                      url: ohchrUrl,
                      children: [{type: 'text', value: info.name}]
                    }
                  ]
                : [{type: 'text', value: info.name}]
            },
            {
              type: 'tableCell',
              children: [{type: 'text', value: info.bcp47}]
            },
            {
              type: 'tableCell',
              children: [
                {
                  type: 'link',
                  url: 'https://en.wikipedia.org/wiki/ISO_639:' + info.iso6393,
                  children: [{type: 'text', value: info.iso6393}]
                }
              ]
            },
            {
              type: 'tableCell',
              children: [{type: 'text', value: info.direction}]
            },
            {
              type: 'tableCell',
              children: [
                {
                  type: 'link',
                  url:
                    'https://www.openstreetmap.org/#map=5/' +
                    info.latitude +
                    '/' +
                    info.longitude,
                  children: [
                    {
                      type: 'text',
                      value:
                        info.latitude.toFixed(1) +
                        ', ' +
                        info.longitude.toFixed(1)
                    }
                  ]
                }
              ]
            }
          ]
        })
      }

      return [start, table, end]
    })
  }
}
