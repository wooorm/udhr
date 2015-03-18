# udhr [![Build Status](https://img.shields.io/travis/wooorm/udhr.svg?style=flat)](https://travis-ci.org/wooorm/udhr) [![Coverage Status](https://img.shields.io/coveralls/wooorm/udhr.svg?style=flat)](https://coveralls.io/r/wooorm/udhr?branch=master)

The most translated document, the [Universal Declaration of Human Rights](http://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx), in [Unicode](http://www.unicode.org/udhr/), in JavaScript.

## Installation

[npm](https://docs.npmjs.com/cli/install):
```bash
$ npm install udhr
```

## Usage

```javascript
var udhr = require('udhr');
var json = udhr.json();

console.log(json.eng);
```

## API

### udhr.information()

Returns an array of information objects. Gets information about the documents: their stage, if a plain text version is available, if an accessible JSON document is available, language regions and lat-long locations, &c.

```javascript
var information = udhr.information();

console.log(information.eng);
/**
 * {
 *   region: 'Europe',
 *   country: 'UK',
 *   ISO: 'eng',
 *   ULI: 'en',
 *   BCP47: 'en',
 *   OHCHR: 'eng',
 *   code: 'eng',
 *   name: 'English',
 *   stage: 5,
 *   version: null,
 *   namedVersion: null,
 *   hasNotes: false,
 *   hasPDF: true,
 *   latitude: 52,
 *   longitude: null,
 *   hasTXT: true,
 *   hasJSON: true,
 *   filename: 'udhr_eng'
 * }
 */
```

### udhr.json()

Returns an array of marked up declaration objects.

```javascript
var declarations = udhr.json();

console.log(declarations.eng);
/**
 * {
 *   lang: 'eng',
 *   language: 'English',
 *   xmlns: 'http://www.unhchr.ch/udhr',
 *   title: 'Universal Declaration of Human Rights',
 *   preamble: {
 *     title: 'Preamble',
 *     para: 'Whereas recognition of the inherent'...
 *   },
 *   article: [
 *     {
 *       title: 'Article 1',
 *       para: 'All human beings are'...
 *     },
 *     {
 *       title: 'Article 2',
 *       para: 'Everyone is entitled to'...
 *     },
 *     ...
 *   ],
 *   note: []
 * }
 */
```

### udhr.text()

Returns an array of plain-text declaration objects.

```javascript
var plainDeclarations = udhr.text();

console.log(plainDeclarations.eng);
/**
 * 'Universal Declaration of Human Rights - English\n© 1996 –'...
 */
```

## Building

`npm run build` will scrape the sources from [unicode.org](http://www.unicode.org/udhr/downloads.html), build and clean the information and JSON files, and create a new Supported-declarations file.

Please push any (by this process created) changes back with a fork!

## Supported declarations

See [Supported-declarations.md](Supported-declarations.md).

## Script information

There’s also a file on which scripts (according to unicode scripts) are used in each declaration. See [Script-information.md](Script-information.md).

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
