'use strict';

/**
 * Dependencies.
 */

var fs = require('fs');
var table = require('markdown-table');
var declarations = require('../lib/information')();

fs.writeFileSync('Supported-declarations.md',
    'Supported Declarations\n' +
    '======================\n' +
    '\n' +
    'Tip: See the [Unicode website](http://www.unicode.org/udhr/index.html)' +
    ' for more information.\n' +
    '\n' +
    'Description\n' +
    '-----------\n' +
    '\n' +
    table([
            ['Name', 'Description'],
            ['name', 'Human readable name'],
            ['named version', 'Human readable version for a declaration'],
            ['code', 'Language identifier: UUDHL'],
            ['version', 'Declaration identifier: UUDHL'],
            ['ULI', 'Language identifier: Unicode'],
            ['BCP 47', 'Language identifier: BCP 47'],
            ['OHCHR', 'Language identifier: OHCHR'],
            ['ISO 639-3', 'Language identifier: ISO 639-3 (ethnologue.com)'],
            ['stage', '[Stage](#stages) a declaration is in'],
            ['location', 'Language latitude / longitude (OpenStreetMap)'],
            ['region', 'Language region'],
            ['country', 'Language country'],
            ['TXT', 'If a TXT file is available'],
            ['JSON', 'If a JSON file is available'],
            ['PDF', 'If a PDF file is available (unicode.org)'],
            ['notes', 'If notes are available (unicode.org)']
        ],
        {
            'align': ['r', 'l']
        }
    ) +
    '\n' +
    '\n' +
    'Stages\n' +
    '------\n' +
    '\n' +
    table([
            ['Stage', 'Count', 'Description'],
            ['1', '4', 'No known complete translation'],
            ['2', '45', 'No conversion to Unicode started'],
            ['3', '3', 'partially converted to Unicode'],
            ['4', '376', 'fully converted to Unicode, to be reviewed'],
            ['5', '4', 'complete and reviewed']
        ],
        {
            'align': ['c', 'r', 'l']
        }
    ) +
    '\n' +
    '\n' +
    'Information\n' +
    '-----------\n' +
    '\n' +
    'Note: The below table is really big. You might need to scroll.\n' +
    '\n' +
    table([
            [
                'Name', 'Named version', 'Code', 'Version', 'ULI', 'BCP 47',
                'OHCHR', 'ISO 639-3', 'Stage', 'Location', 'Region',
                'Country', 'TXT', 'JSON', 'PDF', 'Notes'
            ]
        ].concat(Object.keys(declarations).map(function (key) {
            var declaration = declarations[key];
            var ohchr = '';
            var iso = '';
            var location = '';
            var text = '';
            var json = '';
            var pdf = '';
            var notes = '';

            if (declaration.OHCHR) {
                ohchr = '[' + declaration.OHCHR + ']' +
                    '(http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?' +
                    'LangID=' + declaration.OHCHR + ')';
            }

            if (declaration.ISO) {
                iso = '[' + declaration.ISO + ']' +
                    '(http://www.ethnologue.com/language/' +
                    declaration.ISO +
                    ')';
            }

            if (declaration.latitude || declaration.longitude) {
                location = '[yes]' +
                    '(http://www.openstreetmap.org/#map=5/' +
                    declaration.latitude + '/' +
                    declaration.longitude + ')';
            }

            if (declaration.hasTXT) {
                text = '[Yes](data/udhr-txt/udhr_' +
                    declaration.filename + '.txt)';
            }

            if (declaration.hasJSON) {
                json = '[Yes](data/udhr-json/' + declaration.filename +
                    '.json)';
            }

            if (declaration.hasPDF) {
                pdf = '[Yes](http://www.unicode.org/udhr/d/udhr_' +
                    declaration.filename + '.pdf)';
            }

            if (declaration.hasNotes) {
                notes = '[Yes](http://www.unicode.org/udhr/n/notes_' +
                    declaration.filename + '.html)';
            }

            return [
                (declaration.name || ''),
                (declaration.namedVersion || ''),
                declaration.code,
                (declaration.version || ''),
                (declaration.ULI || ''),
                (declaration.BCP47 || ''),
                ohchr,
                iso,
                declaration.stage,
                location,
                (declaration.region || ''),
                (declaration.country || ''),
                text,
                json,
                pdf,
                notes
            ];
        })
    )) +
    '\n'
);
