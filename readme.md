# udhr [![Build Status][build-badge]][build-status] [![Coverage Status][coverage-badge]][coverage-status]

The most translated document, the [Universal Declaration of Human
Rights][index], in [Unicode][], in JavaScript.

## Installation

[npm][]:

```sh
npm install udhr
```

## Usage

```javascript
var udhr = require('udhr');
var json = udhr.json();

console.log(json.eng);
```

## API

### `udhr.information()`

Returns an array of information objects.  Gets information about the
documents: their stage, if a plain text version is available, if an
accessible JSON document is available, language regions and lat-long
locations, etcetera.

```javascript
var info = require('udhr').information();

console.log(info.eng);
```

Yields:

```javascript
{ region: 'Europe',
  country: null,
  ISO: 'eng',
  ULI: null,
  BCP47: 'en',
  OHCHR: 'eng',
  code: 'eng',
  name: 'English',
  stage: 5,
  version: null,
  namedVersion: null,
  hasNotes: false,
  hasPDF: false,
  latitude: 53,
  longitude: -1,
  hasTXT: true,
  hasJSON: true,
  hasXML: true,
  filename: 'eng' }
```

### udhr.json()

Returns an array of marked-up declaration objects.

```javascript
var json = require('udhr').json();

console.log(json.eng);
```

Yields:

```javascript
{ 'iso639-3': 'eng',
  key: 'eng',
  xmlns: 'http://www.unhchr.ch/udhr',
  title: 'Universal Declaration of Human Rights',
  preamble:
   { title: 'Preamble',
     para: 'Whereas recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world,' ... },
  article:
   [ { title: 'Article 1',
       para: 'All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.' },
     ...
  lang: 'en',
  language: 'English',
  note: [] }
```

### udhr.text()

Returns an array of plain-text declaration objects.

```javascript
var text = require('udhr').text();

console.log(text.eng);
```

Yields:

```text
Universal Declaration of Human Rights - English
© 1996 – 2009 The Office of the High Commissioner for Human Rights
This plain text version prepared by the “UDHR in Unicode”
project, http://www.unicode.org/udhr.
---

Universal Declaration of Human Rights
      Preamble
      Whereas recognition of the inherent dignity and of the equal and ...
```

## Supported declarations

See [Supported-declarations.md][declarations].

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)

<!--Definitions-->

[build-badge]: https://img.shields.io/travis/wooorm/udhr.svg

[build-status]: https://travis-ci.org/wooorm/udhr

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/udhr.svg

[coverage-status]: https://codecov.io/github/wooorm/udhr

[npm]: https://docs.npmjs.com/cli/install

[index]: http://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx

[unicode]: http://www.unicode.org/udhr/

[declarations]: supported-declarations.md
