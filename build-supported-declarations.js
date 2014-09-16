var fs = require('fs'),
    declarations = require('./lib/information');

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
    '| Name          | Description                                     |\n' +
    '| ------------: | ----------------------------------------------- |\n' +
    '| Name          | Human readable name                             |\n' +
    '| Named version | Human readable version for a declaration        |\n' +
    '| Code          | Language identifier: UUDHL                      |\n' +
    '| Version       | Declaration identifier: UUDHL                   |\n' +
    '| ULI           | Language identifier: Unicode                    |\n' +
    '| BCP 47        | Language identifier: BCP 47                     |\n' +
    '| OHCHR         | Language identifier: OHCHR                      |\n' +
    '| ISO 639-3     | Language identifier: ISO 639-3 (ethnologue.com) |\n' +
    '| Stage         | [Stage](#stages) a declaration is in            |\n' +
    '| Location      | Language latitude / longitude (OpenStreetMap)   |\n' +
    '| Region        | Language region                                 |\n' +
    '| Country       | Language country                                |\n' +
    '| TXT           | If a TXT file is available                      |\n' +
    '| JSON          | If a JSON file is available                     |\n' +
    '| PDF           | If a PDF file is available (unicode.org)        |\n' +
    '| Notes         | If notes are available (unicode.org)            |\n' +
    '\n' +
    'Stages\n' +
    '------\n' +
    '\n' +
    '| Stage | Count | Description                                |\n' +
    '| :---: | ----: | ------------------------------------------ |\n' +
    '|   1   |     4 | No known complete translation              |\n' +
    '|   2   |    45 | No conversion to Unicode started           |\n' +
    '|   3   |     3 | partially converted to Unicode             |\n' +
    '|   4   |   376 | fully converted to Unicode, to be reviewed |\n' +
    '|   5   |     4 | complete and reviewed                      |\n' +
    '\n' +
    'Information\n' +
    '-----------\n' +
    '\n' +
    'Note: The below table is really big. You might need to scroll.\n' +
    '\n' +
    '| Name | Named version | Code | Version | ULI | BCP 47 | OHCHR ' +
    '| ISO 639-3 | Stage | Location | Region | Country | TXT | JSON ' +
    '| PDF | Notes |\n' +
    '| ---: | ------------- | ---- | ------- | --- | ------ | ----- ' +
    '| --------- | ----- | -------- | ------ | ------- | --- | ---- ' +
    '| --- | ----- |\n' +

    Object.keys(declarations).map(function (key) {
        var declaration, ohchr, iso, location, text, json, pdf, notes;

        declaration = declarations[key];

        ohchr = iso = location = text = json = pdf = notes = '';

        if (declaration.OHCHR) {
            ohchr = '[' + declaration.OHCHR + ']' +
                '(http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
                declaration.OHCHR + ')';
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
            text = '[Yes](data/udhr-txt/' + declaration.filename + '.txt)';
        }

        if (declaration.hasJSON) {
            json = '[Yes](data/udhr-json/' + declaration.filename + '.json)';
        }

        if (declaration.hasPDF) {
            pdf = '[Yes](http://www.unicode.org/udhr/d/' +
                declaration.filename + '.pdf)';
        }

        if (declaration.hasNotes) {
            notes = '[Yes](http://www.unicode.org/udhr/n/notes_' +
                declaration.filename + '.html)';
        }

        return '| ' + [
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
        ].join(' | ') + ' |';
    }).join('\n') +

    '.\n'
);
