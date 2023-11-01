# udhr

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]

The most translated copyright-free document on this planet:
the [universal declaration of human rights][index], in [unicode][],
in JavaScript.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`udhr`](#udhr-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes all UDHRs.

## When should I use this?

Perhaps when you are dealing with natural language detection?

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install udhr
```

In Deno with [`esm.sh`][esmsh]:

```js
import {udhr} from 'https://esm.sh/udhr@5'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {udhr} from 'https://esm.sh/udhr@5?bundle'
</script>
```

## Use

```js
import fs from 'node:fs/promises'
import {resolve} from 'import-meta-resolve'
import {udhr} from 'udhr'

const bod = udhr.find((d) => d.code === 'bod')
console.log(bod)

const base = await resolve('udhr', import.meta.url)
// Declarations are stored as `declaration/$code.html`.
const url = new URL('declaration/' + bod.code + '.html', base)

console.log(String(await fs.readFile(url)))
```

Yields:

```js
{
  code: 'bod',
  name: 'Tibetan, Central',
  bcp47: 'bo',
  ohchr: 'tic',
  iso6393: 'bod',
  direction: 'ltr',
  stage: 4,
  latitude: 28.37,
  longitude: 90.19
}
```

```html
<!doctype html>
<html lang="bo" dir="ltr" data-code="bod" data-iso6393="bod">
  <head>
    <title>Tibetan, Central</title>
  </head>
  <body>
    <h1>༄༅༎ ཡོངས་ཁྱབ་གསལ་བསྒྲགས་འགྲོ་བ་མིའི་ཐོབ་ཐང༌།</h1>
    <header>
      <h2>སྔོན་བརྗོད།</h2>
      <p>༈ འགྲོ་བ་མིའི་ཁྱིམ་ཚང་ཁག་གི་ནང་མི་ཡོངས་ལ་རང་བཞིན་ཉིད་ནས་ཡོད་པའི་ཆེ་མཐོངས་དང་འདྲ་མཉམ། སུས་ཀྱང་འཕྲོག་ཏུ་མི་རུང་བའི་ཐོབ་ཐང་བཅས་ཀྱི་གནད་དོན་རྟོགས པར་བྱེད་པ་ནི། འཛམ་གླིང་ནང་གི་རང་དབང་དང༌། དྲང་བདེན། ཞི་བདེ་བཅས་ཀྱི་རྣང་གཞི་ལྟེ་བ་ཡིན།</p>
…
```

## API

This package exports the identifier `udhr`.
There is no default export.

### `udhr`

List of info objects.
Gets info about the documents: their stage, language regions and lat/lng
locations, \&c.

```js
console.log(udhr.find((d) => d.code === 'nob'))
```

Yields:

```js
{
  code: 'nob',
  name: 'Norwegian, Bokmål',
  bcp47: 'nb',
  ohchr: 'nrr',
  iso6393: 'nob',
  direction: 'ltr',
  stage: 4,
  latitude: 61,
  longitude: 8
}
```

The actual declarations are available in semantic HTML as
`udhr/declaration/$code.html`.

## Data

<!--support start-->

| Name | BCP 47 | ISO 639-3 | Direction | Location |
| - | - | - | - | - |
| [Sãotomense](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) | cri | [cri](https://iso639-3.sil.org/code/cri) | ltr | [6.7, 0.3](https://www.openstreetmap.org/#map=5/6.68/0.33) |
| Crioulo, Upper Guinea (008) | pov | [pov](https://iso639-3.sil.org/code/pov) | ltr | [13.2, -15.3](https://www.openstreetmap.org/#map=5/13.23/-15.33) |
| Mbundu (009) | kmb | [kmb](https://iso639-3.sil.org/code/kmb) | ltr | [-9.0, 14.9](https://www.openstreetmap.org/#map=5/-8.98/14.89) |
| Tetun Dili | tdt | [tdt](https://iso639-3.sil.org/code/tdt) | ltr | [-8.5, 125.5](https://www.openstreetmap.org/#map=5/-8.5/125.5) |
| Umbundu (011) | umb | [umb](https://iso639-3.sil.org/code/umb) | ltr | [-12.5, 14.4](https://www.openstreetmap.org/#map=5/-12.48/14.41) |
| [(Mijisa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Maiunan)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Minjiang, spoken)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Minjiang, written)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [Drung](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) | duu | [duu](https://iso639-3.sil.org/code/duu) | ltr | [28.0, 98.0](https://www.openstreetmap.org/#map=5/28/98) |
| [(Muzzi)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mz1) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Klau)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kl1) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Jinan)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ji1) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Bizisa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Bz1) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [(Yeonbyeon)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ye1) | und | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| [Gumuz](https://www.ohchr.org/en/human-rights/universal-declaration/translations/gumuz) | guk | [guk](https://iso639-3.sil.org/code/guk) | ltr | [11.1, 35.9](https://www.openstreetmap.org/#map=5/11.05/35.93) |
| [Kafa](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kafi-noono) | kbr | [kbr](https://iso639-3.sil.org/code/kbr) | ltr | [7.3, 36.2](https://www.openstreetmap.org/#map=5/7.34/36.17) |
| [Sidamo](https://www.ohchr.org/en/human-rights/universal-declaration/translations/sidaamu-afoo) | sid | [sid](https://iso639-3.sil.org/code/sid) | ltr | [6.7, 38.4](https://www.openstreetmap.org/#map=5/6.74/38.37) |
| [Kituba (2)](https://www.ohchr.org/en/node/104406) | ktu | [ktu](https://iso639-3.sil.org/code/ktu) | ltr | [-2.3, 17.1](https://www.openstreetmap.org/#map=5/-2.3/17.15) |
| [South Azerbaijani](https://www.ohchr.org/en/node/104397) | azb | [azb](https://iso639-3.sil.org/code/azb) | ltr | [36.5, 48.4](https://www.openstreetmap.org/#map=5/36.51/48.43) |
| [Latvian (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | lv | [lvs](https://iso639-3.sil.org/code/lvs) | ltr | [56.8, 24.3](https://www.openstreetmap.org/#map=5/56.83/24.31) |
| Spanish (resolution) | es | [spa](https://iso639-3.sil.org/code/spa) | ltr | [40.4, -1.1](https://www.openstreetmap.org/#map=5/40.44/-1.12) |
| [Zarma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zarma) | dje | [dje](https://iso639-3.sil.org/code/dje) | ltr | [12.9, 2.4](https://www.openstreetmap.org/#map=5/12.86/2.41) |
| [Afar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aar) | aa | [aar](https://iso639-3.sil.org/code/aar) | ltr | [12.2, 41.8](https://www.openstreetmap.org/#map=5/12.23/41.81) |
| [Abkhaz](https://www.ohchr.org/en/human-rights/universal-declaration/translations/abkhaz) | ab | [abk](https://iso639-3.sil.org/code/abk) | ltr | [42.2, 41.3](https://www.openstreetmap.org/#map=5/42.23/41.3) |
| [Aceh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) | ace | [ace](https://iso639-3.sil.org/code/ace) | ltr | [3.9, 96.6](https://www.openstreetmap.org/#map=5/3.91/96.6) |
| [Achuar-Shiwiar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) | acu | [acu](https://iso639-3.sil.org/code/acu) | ltr | [-2.8, -77.3](https://www.openstreetmap.org/#map=5/-2.83/-77.26) |
| [Achuar-Shiwiar (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) | acu | [acu](https://iso639-3.sil.org/code/acu) | ltr | [-2.8, -77.3](https://www.openstreetmap.org/#map=5/-2.83/-77.26) |
| [Dangme](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) | ada | [ada](https://iso639-3.sil.org/code/ada) | ltr | [5.9, 0.1](https://www.openstreetmap.org/#map=5/5.94/0.13) |
| [Adyghe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) | ady | [ady](https://iso639-3.sil.org/code/ady) | ltr | [44.0, 39.3](https://www.openstreetmap.org/#map=5/44/39.33) |
| [Afrikaans](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) | af | [afr](https://iso639-3.sil.org/code/afr) | ltr | [-22.0, 30.0](https://www.openstreetmap.org/#map=5/-22/30) |
| [Aguaruna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) | agr | [agr](https://iso639-3.sil.org/code/agr) | ltr | [-5.3, -77.9](https://www.openstreetmap.org/#map=5/-5.3/-77.92) |
| [Assyrian Neo-Aramaic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) | aii | [aii](https://iso639-3.sil.org/code/aii) | rtl | [36.8, 43.0](https://www.openstreetmap.org/#map=5/36.75/43) |
| [Aja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) | ajg | [ajg](https://iso639-3.sil.org/code/ajg) | ltr | [7.1, 1.6](https://www.openstreetmap.org/#map=5/7.07/1.65) |
| [Twi (Akuapem)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) | ak-akuapem | [twi](https://iso639-3.sil.org/code/twi) | ltr | [6.3, -1.3](https://www.openstreetmap.org/#map=5/6.35/-1.33) |
| [Twi (Asante)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) | ak-asante | [twi](https://iso639-3.sil.org/code/twi) | ltr | [6.3, -1.3](https://www.openstreetmap.org/#map=5/6.35/-1.33) |
| [Fante](https://www.ohchr.org/en/node/102556) | ak | [fat](https://iso639-3.sil.org/code/fat) | ltr | [6.3, -1.3](https://www.openstreetmap.org/#map=5/6.35/-1.33) |
| [Albanian, Tosk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) | als | [als](https://iso639-3.sil.org/code/als) | ltr | [41.0, 20.0](https://www.openstreetmap.org/#map=5/41/20) |
| [Altai, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) | alt | [alt](https://iso639-3.sil.org/code/alt) | ltr | [50.1, 86.9](https://www.openstreetmap.org/#map=5/50.13/86.87) |
| [Amahuaca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) | amc | [amc](https://iso639-3.sil.org/code/amc) | ltr | [-10.2, -72.3](https://www.openstreetmap.org/#map=5/-10.2/-72.32) |
| [Yaneshaʼ](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) | ame | [ame](https://iso639-3.sil.org/code/ame) | ltr | [-10.6, -75.3](https://www.openstreetmap.org/#map=5/-10.55/-75.31) |
| [Amharic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) | am | [amh](https://iso639-3.sil.org/code/amh) | ltr | [11.7, 39.5](https://www.openstreetmap.org/#map=5/11.71/39.54) |
| [Amis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ami) | ami | [ami](https://iso639-3.sil.org/code/ami) | ltr | [23.5, 121.5](https://www.openstreetmap.org/#map=5/23.5/121.5) |
| [Amarakaeri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) | amr | [amr](https://iso639-3.sil.org/code/amr) | ltr | [-12.5, -70.5](https://www.openstreetmap.org/#map=5/-12.49/-70.55) |
| [Arabic, Standard](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) | ar | [arb](https://iso639-3.sil.org/code/arb) | rtl | [28.0, 43.9](https://www.openstreetmap.org/#map=5/27.96/43.85) |
| [Arabela](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) | arl | [arl](https://iso639-3.sil.org/code/arl) | ltr | [-2.0, -75.1](https://www.openstreetmap.org/#map=5/-1.96/-75.06) |
| [Mapudungun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) | arn | [arn](https://iso639-3.sil.org/code/arn) | ltr | [-38.7, -71.3](https://www.openstreetmap.org/#map=5/-38.74/-71.28) |
| [Asturian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) | ast | [ast](https://iso639-3.sil.org/code/ast) | ltr | [42.4, -6.0](https://www.openstreetmap.org/#map=5/42.42/-6.02) |
| [Waorani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) | auc | [auc](https://iso639-3.sil.org/code/auc) | ltr | [-1.1, -76.7](https://www.openstreetmap.org/#map=5/-1.12/-76.68) |
| [Occitan (Auvergnat)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [Aymara, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) | ay | [ayr](https://iso639-3.sil.org/code/ayr) | ltr | [-17.0, -68.5](https://www.openstreetmap.org/#map=5/-17/-68.5) |
| [Azerbaijani, North (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) | az-Cyrl | [azj](https://iso639-3.sil.org/code/azj) | ltr | [41.0, 46.5](https://www.openstreetmap.org/#map=5/40.98/46.47) |
| [Azerbaijani, North (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) | az-Latn | [azj](https://iso639-3.sil.org/code/azj) | ltr | [41.0, 46.5](https://www.openstreetmap.org/#map=5/40.98/46.47) |
| [Bamanankan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) | bm | [bam](https://iso639-3.sil.org/code/bam) | ltr | [12.0, -10.0](https://www.openstreetmap.org/#map=5/12.04/-9.99) |
| [Bali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) | ban | [ban](https://iso639-3.sil.org/code/ban) | ltr | [-8.4, 115.1](https://www.openstreetmap.org/#map=5/-8.36/115.08) |
| [Bamun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bax) | bax | [bax](https://iso639-3.sil.org/code/bax) | ltr | [9.6, 3.0](https://www.openstreetmap.org/#map=5/9.63/3) |
| [Baatonum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) | bba | [bba](https://iso639-3.sil.org/code/bba) | ltr | [9.6, 3.0](https://www.openstreetmap.org/#map=5/9.63/3) |
| [Baoulé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) | bci | [bci](https://iso639-3.sil.org/code/bci) | ltr | [5.4, -4.8](https://www.openstreetmap.org/#map=5/5.43/-4.77) |
| [Bicolano, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) | bik | [bcl](https://iso639-3.sil.org/code/bcl) | ltr | [13.8, 123.4](https://www.openstreetmap.org/#map=5/13.76/123.4) |
| [Belarusan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) | be | [bel](https://iso639-3.sil.org/code/bel) | ltr | [53.2, 25.6](https://www.openstreetmap.org/#map=5/53.23/25.6) |
| [Bemba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) | bem | [bem](https://iso639-3.sil.org/code/bem) | ltr | [-10.6, 29.3](https://www.openstreetmap.org/#map=5/-10.61/29.3) |
| [Bengali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) | bn | [ben](https://iso639-3.sil.org/code/ben) | ltr | [24.0, 90.0](https://www.openstreetmap.org/#map=5/24/90) |
| [Bari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) | bfa | [bfa](https://iso639-3.sil.org/code/bfa) | ltr | [4.2, 31.1](https://www.openstreetmap.org/#map=5/4.2/31.07) |
| [Bhojpuri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) | bho | [bho](https://iso639-3.sil.org/code/bho) | ltr | [26.5, 84.8](https://www.openstreetmap.org/#map=5/26.46/84.82) |
| [Edo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) | bin | [bin](https://iso639-3.sil.org/code/bin) | ltr | [6.4, 5.7](https://www.openstreetmap.org/#map=5/6.41/5.7) |
| [Bislama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) | bi | [bis](https://iso639-3.sil.org/code/bis) | ltr | [-20.0, 167.4](https://www.openstreetmap.org/#map=5/-19.99/167.37) |
| Tai Dam | blt | [blt](https://iso639-3.sil.org/code/blt) | ltr | [21.5, 102.7](https://www.openstreetmap.org/#map=5/21.47/102.7) |
| [Hmong Njua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) | hnj | [hnj](https://iso639-3.sil.org/code/hnj) | ltr | [22.6, 102.0](https://www.openstreetmap.org/#map=5/22.56/101.95) |
| [Bora](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) | boa | [boa](https://iso639-3.sil.org/code/boa) | ltr | [-2.9, -68.9](https://www.openstreetmap.org/#map=5/-2.91/-68.91) |
| [Tibetan, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) | bo | [bod](https://iso639-3.sil.org/code/bod) | ltr | [28.4, 90.2](https://www.openstreetmap.org/#map=5/28.37/90.19) |
| [Bosnian (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) | bs-Cyrl | [bos](https://iso639-3.sil.org/code/bos) | ltr | [42.9, 17.7](https://www.openstreetmap.org/#map=5/42.93/17.67) |
| [Bosnian (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) | bs-Latn | [bos](https://iso639-3.sil.org/code/bos) | ltr | [42.9, 17.7](https://www.openstreetmap.org/#map=5/42.93/17.67) |
| [Breton](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) | br | [bre](https://iso639-3.sil.org/code/bre) | ltr | [48.3, -3.8](https://www.openstreetmap.org/#map=5/48.25/-3.79) |
| [Bulu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) | bum | [bum](https://iso639-3.sil.org/code/bum) | ltr | [3.2, 11.6](https://www.openstreetmap.org/#map=5/3.16/11.64) |
| [Bushi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) | buc | [buc](https://iso639-3.sil.org/code/buc) | ltr | [-13.0, 45.1](https://www.openstreetmap.org/#map=5/-12.97/45.14) |
| [Bugis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) | bug | [bug](https://iso639-3.sil.org/code/bug) | ltr | [-0.3, 119.3](https://www.openstreetmap.org/#map=5/-0.25/119.25) |
| [Bulgarian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) | bg | [bul](https://iso639-3.sil.org/code/bul) | ltr | [43.4, 25.1](https://www.openstreetmap.org/#map=5/43.36/25.05) |
| [Garifuna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) | cab | [cab](https://iso639-3.sil.org/code/cab) | ltr | [15.3, -86.9](https://www.openstreetmap.org/#map=5/15.35/-86.91) |
| [Kaqchikel, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) | cak | [cak](https://iso639-3.sil.org/code/cak) | ltr | [14.5, -91.0](https://www.openstreetmap.org/#map=5/14.47/-90.99) |
| [Catalan-Valencian-Balear](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) | ca | [cat](https://iso639-3.sil.org/code/cat) | ltr | [41.9, 3.4](https://www.openstreetmap.org/#map=5/41.9/3.39) |
| [Chachi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) | cbi | [cbi](https://iso639-3.sil.org/code/cbi) | ltr | [0.7, -79.0](https://www.openstreetmap.org/#map=5/0.71/-79.05) |
| [Cashibo-Cacataibo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) | cbr | [cbr](https://iso639-3.sil.org/code/cbr) | ltr | [-8.7, -75.4](https://www.openstreetmap.org/#map=5/-8.7/-75.42) |
| [Cashinahua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) | cbs | [cbs](https://iso639-3.sil.org/code/cbs) | ltr | [-9.7, -71.2](https://www.openstreetmap.org/#map=5/-9.72/-71.17) |
| [Chayahuita](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) | cbt | [cbt](https://iso639-3.sil.org/code/cbt) | ltr | [-5.6, -76.8](https://www.openstreetmap.org/#map=5/-5.64/-76.83) |
| [Candoshi-Shapra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) | cbu | [cbu](https://iso639-3.sil.org/code/cbu) | ltr | [-4.2, -76.9](https://www.openstreetmap.org/#map=5/-4.24/-76.93) |
| Chakma | ccp | [ccp](https://iso639-3.sil.org/code/ccp) | ltr | [23.0, 92.0](https://www.openstreetmap.org/#map=5/23/92) |
| [Zhuang, Yongbei](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) | za | [zyb](https://iso639-3.sil.org/code/zyb) | ltr | [23.7, 107.2](https://www.openstreetmap.org/#map=5/23.68/107.18) |
| [Cebuano](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) | ceb | [ceb](https://iso639-3.sil.org/code/ceb) | ltr | [8.4, 124.4](https://www.openstreetmap.org/#map=5/8.39/124.37) |
| [Czech](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) | cs | [ces](https://iso639-3.sil.org/code/ces) | ltr | [49.9, 15.1](https://www.openstreetmap.org/#map=5/49.87/15.1) |
| [Chamorro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) | ch | [cha](https://iso639-3.sil.org/code/cha) | ltr | [14.3, 145.3](https://www.openstreetmap.org/#map=5/14.33/145.28) |
| [Chinantec, Ojitlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) | chj | [chj](https://iso639-3.sil.org/code/chj) | ltr | [18.1, -96.3](https://www.openstreetmap.org/#map=5/18.07/-96.34) |
| [Chuukese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) | chk | [chk](https://iso639-3.sil.org/code/chk) | ltr | [7.3, 151.6](https://www.openstreetmap.org/#map=5/7.34/151.6) |
| Cherokee (cased) | chr | [chr](https://iso639-3.sil.org/code/chr) | ltr | [35.5, -83.2](https://www.openstreetmap.org/#map=5/35.47/-83.16) |
| Cherokee (uppercase) | chr | [chr](https://iso639-3.sil.org/code/chr) | ltr | [35.5, -83.2](https://www.openstreetmap.org/#map=5/35.47/-83.16) |
| [Chuvash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chv) | cv | [chv](https://iso639-3.sil.org/code/chv) | ltr | [55.0, 47.0](https://www.openstreetmap.org/#map=5/55/47) |
| [Chickasaw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) | cic | [cic](https://iso639-3.sil.org/code/cic) | ltr | [34.0, -97.1](https://www.openstreetmap.org/#map=5/33.95/-97.13) |
| [Chokwe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | cjk | [cjk](https://iso639-3.sil.org/code/cjk) | ltr | [-9.7, 21.4](https://www.openstreetmap.org/#map=5/-9.66/21.4) |
| [Chokwe (Angola)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | cjk | [cjk](https://iso639-3.sil.org/code/cjk) | ltr | [-9.7, 21.4](https://www.openstreetmap.org/#map=5/-9.66/21.4) |
| [Shor](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) | cjs | [cjs](https://iso639-3.sil.org/code/cjs) | ltr | [52.3, 88.4](https://www.openstreetmap.org/#map=5/52.33/88.43) |
| [Chinese, Jinyu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjy) | cjy | [cjy](https://iso639-3.sil.org/code/cjy) | ltr | [38.0, 111.0](https://www.openstreetmap.org/#map=5/38/111) |
| [Kurdish, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) | ckb-Latn | [ckb](https://iso639-3.sil.org/code/ckb) | ltr | [35.6, 45.8](https://www.openstreetmap.org/#map=5/35.65/45.81) |
| [Chinese, Mandarin (Simplified)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chn) | zh | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [40.0, 116.2](https://www.openstreetmap.org/#map=5/40.02/116.23) |
| [Chinese, Mandarin (Beijing)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=be1) | zh | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [39.9, 116.4](https://www.openstreetmap.org/#map=5/39.91/116.38) |
| [Chinese, Mandarin (Guiyang)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gu1) | zh | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [26.6, 106.6](https://www.openstreetmap.org/#map=5/26.65/106.63) |
| [Chinese, Mandarin (Harbin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha2) | zh | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [45.8, 126.6](https://www.openstreetmap.org/#map=5/45.75/126.63) |
| [Chinese, Mandarin (Nanjing)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=na1) | zh | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [32.0, 118.8](https://www.openstreetmap.org/#map=5/32.05/118.76) |
| [Chinese, Mandarin (Tianjin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ti1) | zh | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [39.1, 117.2](https://www.openstreetmap.org/#map=5/39.13/117.18) |
| Chinese, Mandarin (Traditional) | zh-Hant | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [40.0, 116.2](https://www.openstreetmap.org/#map=5/40.02/116.23) |
| [Chin, Haka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) | cnh | [cnh](https://iso639-3.sil.org/code/cnh) | ltr | [22.9, 92.8](https://www.openstreetmap.org/#map=5/22.87/92.82) |
| [Asháninka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) | cni | [cni](https://iso639-3.sil.org/code/cni) | ltr | [-11.9, -73.9](https://www.openstreetmap.org/#map=5/-11.93/-73.91) |
| [Montenegrin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cnr) | cnr | [cnr](https://iso639-3.sil.org/code/cnr) | ltr | [42.8, 19.5](https://www.openstreetmap.org/#map=5/42.78/19.47) |
| [Colorado](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) | cof | [cof](https://iso639-3.sil.org/code/cof) | ltr | [-0.2, -79.2](https://www.openstreetmap.org/#map=5/-0.21/-79.23) |
| [Corsican](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) | co | [cos](https://iso639-3.sil.org/code/cos) | ltr | [41.7, 9.3](https://www.openstreetmap.org/#map=5/41.7/9.26) |
| [Caquinte](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) | cot | [cot](https://iso639-3.sil.org/code/cot) | ltr | [-11.5, -73.5](https://www.openstreetmap.org/#map=5/-11.48/-73.45) |
| [Ashéninka, Pichis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) | cpu | [cpu](https://iso639-3.sil.org/code/cpu) | ltr | [-10.5, -74.6](https://www.openstreetmap.org/#map=5/-10.47/-74.6) |
| [Crimean Tatar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crh) | crh | [crh](https://iso639-3.sil.org/code/crh) | ltr | [45.0, 34.1](https://www.openstreetmap.org/#map=5/45/34.08) |
| [Seselwa Creole French](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) | crs | [crs](https://iso639-3.sil.org/code/crs) | ltr | [-4.6, 55.5](https://www.openstreetmap.org/#map=5/-4.62/55.45) |
| [Chinantec, Chiltepec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) | csa | [csa](https://iso639-3.sil.org/code/csa) | ltr | [18.1, -96.2](https://www.openstreetmap.org/#map=5/18.06/-96.22) |
| [Cree, Swampy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) | csw | [csw](https://iso639-3.sil.org/code/csw) | ltr | [56.0, -95.0](https://www.openstreetmap.org/#map=5/56/-95) |
| [Chin, Tedim](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) | ctd | [ctd](https://iso639-3.sil.org/code/ctd) | ltr | [23.6, 93.5](https://www.openstreetmap.org/#map=5/23.61/93.52) |
| [Welsh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) | cy | [cym](https://iso639-3.sil.org/code/cym) | ltr | [52.0, -4.0](https://www.openstreetmap.org/#map=5/52/-4) |
| [Dagbani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) | dag | [dag](https://iso639-3.sil.org/code/dag) | ltr | [9.7, -0.4](https://www.openstreetmap.org/#map=5/9.65/-0.43) |
| [Danish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) | da | [dan](https://iso639-3.sil.org/code/dan) | ltr | [54.9, 9.4](https://www.openstreetmap.org/#map=5/54.87/9.36) |
| [Dendi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) | ddn | [ddn](https://iso639-3.sil.org/code/ddn) | ltr | [11.7, 3.5](https://www.openstreetmap.org/#map=5/11.67/3.49) |
| [German, Standard (1901)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) | de-1901 | [deu](https://iso639-3.sil.org/code/deu) | ltr | [48.6, 12.5](https://www.openstreetmap.org/#map=5/48.65/12.47) |
| German, Standard (1996) | de-1996 | [deu](https://iso639-3.sil.org/code/deu) | ltr | [48.6, 12.5](https://www.openstreetmap.org/#map=5/48.65/12.47) |
| [Dagaare, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) | dga | [dga](https://iso639-3.sil.org/code/dga) | ltr | [10.4, -2.5](https://www.openstreetmap.org/#map=5/10.42/-2.52) |
| [Dinka, Northeastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) | dip | [dip](https://iso639-3.sil.org/code/dip) | ltr | [9.3, 31.8](https://www.openstreetmap.org/#map=5/9.28/31.84) |
| [Maldivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) | dv | [div](https://iso639-3.sil.org/code/div) | rtl | [3.8, 73.1](https://www.openstreetmap.org/#map=5/3.83/73.07) |
| [Jola-Fonyi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) | dyo | [dyo](https://iso639-3.sil.org/code/dyo) | ltr | [12.8, -15.7](https://www.openstreetmap.org/#map=5/12.76/-15.74) |
| [Jula](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) | dyu | [dyu](https://iso639-3.sil.org/code/dyu) | ltr | [10.4, -4.7](https://www.openstreetmap.org/#map=5/10.45/-4.72) |
| [Dzongkha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) | dz | [dzo](https://iso639-3.sil.org/code/dzo) | ltr | [27.4, 89.6](https://www.openstreetmap.org/#map=5/27.41/89.58) |
| [Greek (monotonic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) | el-monoton | [ell](https://iso639-3.sil.org/code/ell) | ltr | [42.3, 24.9](https://www.openstreetmap.org/#map=5/42.32/24.87) |
| Greek (polytonic) | el-polyton | [ell](https://iso639-3.sil.org/code/ell) | ltr | [42.3, 24.9](https://www.openstreetmap.org/#map=5/42.32/24.87) |
| [Maninkakan, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) | man | [emk](https://iso639-3.sil.org/code/emk) | ltr | [9.3, -10.5](https://www.openstreetmap.org/#map=5/9.33/-10.54) |
| [Romagnolo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) | rgn | [rgn](https://iso639-3.sil.org/code/rgn) | ltr | [44.2, 11.7](https://www.openstreetmap.org/#map=5/44.23/11.72) |
| [English](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) | en | [eng](https://iso639-3.sil.org/code/eng) | ltr | [53.0, -1.0](https://www.openstreetmap.org/#map=5/53/-1) |
| [Esperanto](https://www.ohchr.org/en/human-rights/universal-declaration/translations/esperanto) | eo | [epo](https://iso639-3.sil.org/code/epo) | ltr | [49.3, 2.8](https://www.openstreetmap.org/#map=5/49.33/2.81) |
| [Ese Ejja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ese) | ese | [ese](https://iso639-3.sil.org/code/ese) | ltr | [-11.0, -66.0](https://www.openstreetmap.org/#map=5/-11/-66) |
| [Estonian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) | et | [ekk](https://iso639-3.sil.org/code/ekk) | ltr | [58.5, 25.8](https://www.openstreetmap.org/#map=5/58.55/25.82) |
| [Basque](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) | eu | [eus](https://iso639-3.sil.org/code/eus) | ltr | [43.3, -1.3](https://www.openstreetmap.org/#map=5/43.28/-1.32) |
| [Even](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) | eve | [eve](https://iso639-3.sil.org/code/eve) | ltr | [70.7, 130.9](https://www.openstreetmap.org/#map=5/70.67/130.91) |
| [Evenki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) | evn | [evn](https://iso639-3.sil.org/code/evn) | ltr | [53.9, 108.6](https://www.openstreetmap.org/#map=5/53.85/108.63) |
| [Éwé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) | ee | [ewe](https://iso639-3.sil.org/code/ewe) | ltr | [6.5, 0.8](https://www.openstreetmap.org/#map=5/6.46/0.81) |
| [Faroese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) | fo | [fao](https://iso639-3.sil.org/code/fao) | ltr | [62.1, -6.9](https://www.openstreetmap.org/#map=5/62.07/-6.88) |
| [Fijian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) | fj | [fij](https://iso639-3.sil.org/code/fij) | ltr | [-18.0, 178.3](https://www.openstreetmap.org/#map=5/-18/178.33) |
| [Finnish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) | fi | [fin](https://iso639-3.sil.org/code/fin) | ltr | [64.8, 25.6](https://www.openstreetmap.org/#map=5/64.76/25.56) |
| [Finnish, Kven](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fkv) | fkv | [fkv](https://iso639-3.sil.org/code/fkv) | ltr | [69.7, 21.2](https://www.openstreetmap.org/#map=5/69.7/21.21) |
| [Chin, Falam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) | cfm | [cfm](https://iso639-3.sil.org/code/cfm) | ltr | [23.8, 92.3](https://www.openstreetmap.org/#map=5/23.79/92.33) |
| [Fon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) | fon | [fon](https://iso639-3.sil.org/code/fon) | ltr | [7.2, 1.7](https://www.openstreetmap.org/#map=5/7.15/1.66) |
| [French](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) | fr | [fra](https://iso639-3.sil.org/code/fra) | ltr | [48.0, 2.0](https://www.openstreetmap.org/#map=5/48/2) |
| [Frisian, Western](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) | fy | [fry](https://iso639-3.sil.org/code/fry) | ltr | [53.1, 5.9](https://www.openstreetmap.org/#map=5/53.14/5.86) |
| [Pular](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) | fuf | [fuf](https://iso639-3.sil.org/code/fuf) | ltr | [12.2, -12.7](https://www.openstreetmap.org/#map=5/12.18/-12.73) |
| Pular (Adlam) | fuf-Adlm | [fuf](https://iso639-3.sil.org/code/fuf) | rtl | [12.2, -12.7](https://www.openstreetmap.org/#map=5/12.18/-12.73) |
| [Friulian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) | fur | [fur](https://iso639-3.sil.org/code/fur) | ltr | [46.1, 13.1](https://www.openstreetmap.org/#map=5/46.15/13.05) |
| [Fulfulde, Nigerian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) | fuv | [fuv](https://iso639-3.sil.org/code/fuv) | ltr | [11.0, 11.1](https://www.openstreetmap.org/#map=5/11/11.12) |
| [Fulfulde, Nigerian (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuv) | fuv | [fuv](https://iso639-3.sil.org/code/fuv) | ltr | [11.0, 11.1](https://www.openstreetmap.org/#map=5/11/11.12) |
| [Fur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fvr) | fvr | [fvr](https://iso639-3.sil.org/code/fvr) | ltr | [13.0, 25.0](https://www.openstreetmap.org/#map=5/13/25) |
| [Ga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) | gaa | [gaa](https://iso639-3.sil.org/code/gaa) | ltr | [5.7, -0.2](https://www.openstreetmap.org/#map=5/5.65/-0.19) |
| [Gagauz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) | gag | [gag](https://iso639-3.sil.org/code/gag) | ltr | [44.6, 28.0](https://www.openstreetmap.org/#map=5/44.6/28.03) |
| [Chinese, Gan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gan) | gan | [gan](https://iso639-3.sil.org/code/gan) | ltr | [28.0, 105.0](https://www.openstreetmap.org/#map=5/28/105) |
| [Oromo, Borana-Arsi-Guji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) | om | [gaz](https://iso639-3.sil.org/code/gaz) | ltr | [1.1, 37.9](https://www.openstreetmap.org/#map=5/1.06/37.88) |
| [Gonja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) | gjn | [gjn](https://iso639-3.sil.org/code/gjn) | ltr | [8.5, -0.7](https://www.openstreetmap.org/#map=5/8.49/-0.73) |
| [Kpelle, Guinea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pke) | gkp | [gkp](https://iso639-3.sil.org/code/gkp) | ltr | [7.9, -9.0](https://www.openstreetmap.org/#map=5/7.93/-8.99) |
| [Gaelic, Scottish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) | gd | [gla](https://iso639-3.sil.org/code/gla) | ltr | [56.8, -5.2](https://www.openstreetmap.org/#map=5/56.76/-5.24) |
| [Nanai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) | gld | [gld](https://iso639-3.sil.org/code/gld) | ltr | [48.4, 134.8](https://www.openstreetmap.org/#map=5/48.43/134.8) |
| [Gaelic, Irish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) | ga | [gle](https://iso639-3.sil.org/code/gle) | ltr | [53.2, -7.6](https://www.openstreetmap.org/#map=5/53.22/-7.62) |
| [Galician](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) | gl | [glg](https://iso639-3.sil.org/code/glg) | ltr | [42.2, -7.5](https://www.openstreetmap.org/#map=5/42.24/-7.53) |
| Manx | gv | [glv](https://iso639-3.sil.org/code/glv) | ltr | [54.2, -4.8](https://www.openstreetmap.org/#map=5/54.23/-4.85) |
| [Alemannisch (Elsassisch)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gsw) | gsw | [gsw](https://iso639-3.sil.org/code/gsw) | ltr | [48.6, 7.5](https://www.openstreetmap.org/#map=5/48.61/7.49) |
| [Wayuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) | guc | [guc](https://iso639-3.sil.org/code/guc) | ltr | [10.2, -71.8](https://www.openstreetmap.org/#map=5/10.23/-71.81) |
| [Guaraní, Paraguayan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) | gn | [gug](https://iso639-3.sil.org/code/gug) | ltr | [-25.6, -57.1](https://www.openstreetmap.org/#map=5/-25.61/-57.09) |
| [Gujarati](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) | gu | [guj](https://iso639-3.sil.org/code/guj) | ltr | [22.7, 71.1](https://www.openstreetmap.org/#map=5/22.69/71.1) |
| [Yanomamö](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) | guu | [guu](https://iso639-3.sil.org/code/guu) | ltr | [1.7, -64.9](https://www.openstreetmap.org/#map=5/1.68/-64.88) |
| [Guarayu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) | gyr | [gyr](https://iso639-3.sil.org/code/gyr) | ltr | [-15.8, -61.7](https://www.openstreetmap.org/#map=5/-15.82/-61.69) |
| [Chinese, Hakka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha1) | hak | [hak](https://iso639-3.sil.org/code/hak) | ltr | [25.0, 115.0](https://www.openstreetmap.org/#map=5/25/115) |
| [Haitian Creole French (Kreyol)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) | ht | [hat](https://iso639-3.sil.org/code/hat) | ltr | [19.0, -73.3](https://www.openstreetmap.org/#map=5/19/-73.33) |
| [Haitian Creole French (Popular)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) | ht | [hat](https://iso639-3.sil.org/code/hat) | ltr | [19.0, -73.3](https://www.openstreetmap.org/#map=5/19/-73.33) |
| [Hausa (Niger)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | ha-NE | [hau](https://iso639-3.sil.org/code/hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/#map=5/11.15/8.78) |
| [Hausa (Nigeria)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | ha-NG | [hau](https://iso639-3.sil.org/code/hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/#map=5/11.15/8.78) |
| [Hausa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hau) | ha | [hau](https://iso639-3.sil.org/code/hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/#map=5/11.15/8.78) |
| [Hawaiian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) | haw | [haw](https://iso639-3.sil.org/code/haw) | ltr | [19.6, -155.4](https://www.openstreetmap.org/#map=5/19.63/-155.43) |
| [Hmong, Northern Qiandong](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) | hmn | [hea](https://iso639-3.sil.org/code/hea) | ltr | [26.6, 108.2](https://www.openstreetmap.org/#map=5/26.63/108.16) |
| [Hebrew](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) | he | [heb](https://iso639-3.sil.org/code/heb) | rtl | [31.1, 35.0](https://www.openstreetmap.org/#map=5/31.11/35.02) |
| [Hiligaynon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) | hil | [hil](https://iso639-3.sil.org/code/hil) | ltr | [10.4, 123.0](https://www.openstreetmap.org/#map=5/10.4/122.97) |
| [Hindi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) | hi | [hin](https://iso639-3.sil.org/code/hin) | ltr | [25.0, 77.0](https://www.openstreetmap.org/#map=5/25/77) |
| [Chin, Matu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) | hlt | [hlt](https://iso639-3.sil.org/code/hlt) | ltr | [23.3, 92.8](https://www.openstreetmap.org/#map=5/23.31/92.83) |
| [Hmong, Southern Qiandong](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) | hms | [hms](https://iso639-3.sil.org/code/hms) | ltr | [25.7, 108.5](https://www.openstreetmap.org/#map=5/25.66/108.53) |
| [Gen](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) | gej | [gej](https://iso639-3.sil.org/code/gej) | ltr | [6.3, 1.7](https://www.openstreetmap.org/#map=5/6.26/1.68) |
| [Hani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) | hni | [hni](https://iso639-3.sil.org/code/hni) | ltr | [22.7, 102.8](https://www.openstreetmap.org/#map=5/22.68/102.85) |
| [Hindustani, Sarnami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) | hns | [hns](https://iso639-3.sil.org/code/hns) | ltr | [7.7, -58.6](https://www.openstreetmap.org/#map=5/7.67/-58.57) |
| [Croatian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) | hr | [hrv](https://iso639-3.sil.org/code/hrv) | ltr | [45.2, 16.8](https://www.openstreetmap.org/#map=5/45.2/16.83) |
| [Sorbian, Upper](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) | hsb | [hsb](https://iso639-3.sil.org/code/hsb) | ltr | [51.2, 14.4](https://www.openstreetmap.org/#map=5/51.24/14.41) |
| [Huastec (Sierra de Otontepec)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) | hus | [hus](https://iso639-3.sil.org/code/hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/#map=5/21.62/-98.5) |
| [Chinese, Xiang](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hsn) | hsn | [hsn](https://iso639-3.sil.org/code/hsn) | ltr | [28.1, 113.0](https://www.openstreetmap.org/#map=5/28.11/112.98) |
| [Hungarian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) | hu | [hun](https://iso639-3.sil.org/code/hun) | ltr | [46.9, 19.7](https://www.openstreetmap.org/#map=5/46.91/19.66) |
| [Huastec (Veracruz)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/tenek-huasteco) | hus | [hus](https://iso639-3.sil.org/code/hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/#map=5/21.62/-98.5) |
| [Huitoto, Murui](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) | huu | [huu](https://iso639-3.sil.org/code/huu) | ltr | [-1.1, -73.8](https://www.openstreetmap.org/#map=5/-1.14/-73.83) |
| [Huastec (San Luís Potosí)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) | hus | [hus](https://iso639-3.sil.org/code/hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/#map=5/21.62/-98.5) |
| [Armenian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) | hy | [hye](https://iso639-3.sil.org/code/hye) | ltr | [40.0, 45.0](https://www.openstreetmap.org/#map=5/40/45) |
| [Ibibio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) | ibb | [ibb](https://iso639-3.sil.org/code/ibb) | ltr | [5.2, 7.9](https://www.openstreetmap.org/#map=5/5.15/7.87) |
| [Igbo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) | ig | [ibo](https://iso639-3.sil.org/code/ibo) | ltr | [4.6, 7.2](https://www.openstreetmap.org/#map=5/4.63/7.23) |
| [Ido](https://www.ohchr.org/en/human-rights/universal-declaration/translations/ido) | io | [ido](https://iso639-3.sil.org/code/ido) | ltr | [-75.0, 20.0](https://www.openstreetmap.org/#map=5/-75/20) |
| [Idoma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=idu) | idu | [idu](https://iso639-3.sil.org/code/idu) | ltr | [7.2, 8.2](https://www.openstreetmap.org/#map=5/7.19/8.15) |
| [Nuosu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=iii) | ii | [iii](https://iso639-3.sil.org/code/iii) | ltr | [28.2, 102.1](https://www.openstreetmap.org/#map=5/28.19/102.12) |
| [Ijo, Southeast](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ijs) | ijs | [ijs](https://iso639-3.sil.org/code/ijs) | ltr | [5.0, 6.3](https://www.openstreetmap.org/#map=5/5.03/6.33) |
| [Inuktitut, Eastern Canadian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) | iu | [ike](https://iso639-3.sil.org/code/ike) | ltr | [62.2, -75.6](https://www.openstreetmap.org/#map=5/62.17/-75.61) |
| [Ilocano](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) | ilo | [ilo](https://iso639-3.sil.org/code/ilo) | ltr | [15.9, 121.0](https://www.openstreetmap.org/#map=5/15.94/120.99) |
| [Interlingua](https://www.ohchr.org/en/human-rights/universal-declaration/translations/interlingua) | ia | [ina](https://iso639-3.sil.org/code/ina) | ltr | [48.2, 2.6](https://www.openstreetmap.org/#map=5/48.2/2.62) |
| [Indonesian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) | id | [ind](https://iso639-3.sil.org/code/ind) | ltr | [-7.3, 109.7](https://www.openstreetmap.org/#map=5/-7.33/109.72) |
| [Icelandic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) | is | [isl](https://iso639-3.sil.org/code/isl) | ltr | [63.5, -19.0](https://www.openstreetmap.org/#map=5/63.48/-19.02) |
| [Italian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) | it | [ita](https://iso639-3.sil.org/code/ita) | ltr | [43.0, 12.7](https://www.openstreetmap.org/#map=5/43.05/12.65) |
| [Javanese (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) | jv | [jav](https://iso639-3.sil.org/code/jav) | ltr | [-0.6, 110.9](https://www.openstreetmap.org/#map=5/-0.57/110.89) |
| Javanese (Javanese) | jv-Java | [jav](https://iso639-3.sil.org/code/jav) | ltr | [-0.6, 110.9](https://www.openstreetmap.org/#map=5/-0.57/110.89) |
| [Shuar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) | jiv | [jiv](https://iso639-3.sil.org/code/jiv) | ltr | [-3.5, -78.2](https://www.openstreetmap.org/#map=5/-3.45/-78.19) |
| [Japanese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) | ja | [jpn](https://iso639-3.sil.org/code/jpn) | ltr | [35.0, 135.0](https://www.openstreetmap.org/#map=5/35/135) |
| [Japanese (Osaka)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=obe) | ja | [jpn](https://iso639-3.sil.org/code/jpn) | ltr | [34.7, 135.5](https://www.openstreetmap.org/#map=5/34.69/135.5) |
| [Japanese (Tokyo)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=to1) | ja | [jpn](https://iso639-3.sil.org/code/jpn) | ltr | [35.7, 139.7](https://www.openstreetmap.org/#map=5/35.68/139.68) |
| [Karakalpak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaa) | kaa | [kaa](https://iso639-3.sil.org/code/kaa) | ltr | [42.5, 59.6](https://www.openstreetmap.org/#map=5/42.47/59.6) |
| [Inuktitut, Greenlandic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) | kl | [kal](https://iso639-3.sil.org/code/kal) | ltr | [69.4, -52.9](https://www.openstreetmap.org/#map=5/69.38/-52.86) |
| [Kannada](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) | kn | [kan](https://iso639-3.sil.org/code/kan) | ltr | [13.6, 76.1](https://www.openstreetmap.org/#map=5/13.59/76.12) |
| [Georgian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) | ka | [kat](https://iso639-3.sil.org/code/kat) | ltr | [39.4, 45.8](https://www.openstreetmap.org/#map=5/39.37/45.81) |
| [Kazakh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) | kk | [kaz](https://iso639-3.sil.org/code/kaz) | ltr | [41.9, 65.8](https://www.openstreetmap.org/#map=5/41.87/65.77) |
| [Kabardian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) | kbd | [kbd](https://iso639-3.sil.org/code/kbd) | ltr | [43.5, 43.4](https://www.openstreetmap.org/#map=5/43.51/43.39) |
| [Kabiyé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) | kbp | [kbp](https://iso639-3.sil.org/code/kbp) | ltr | [9.0, 0.5](https://www.openstreetmap.org/#map=5/8.97/0.5) |
| [Makonde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) | kde | [kde](https://iso639-3.sil.org/code/kde) | ltr | [-11.0, 39.5](https://www.openstreetmap.org/#map=5/-10.99/39.51) |
| [Tem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) | kdh | [kdh](https://iso639-3.sil.org/code/kdh) | ltr | [8.0, 1.0](https://www.openstreetmap.org/#map=5/8/1) |
| [Kabuverdianu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) | kea | [kea](https://iso639-3.sil.org/code/kea) | ltr | [15.1, -23.6](https://www.openstreetmap.org/#map=5/15.06/-23.61) |
| [Q'eqchi'](https://www.ohchr.org/en/human-rights/universal-declaration/translations/qechikekchi) | kek | [kek](https://iso639-3.sil.org/code/kek) | ltr | [15.4, -89.3](https://www.openstreetmap.org/#map=5/15.38/-89.25) |
| [Khasi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) | kha | [kha](https://iso639-3.sil.org/code/kha) | ltr | [25.0, 92.0](https://www.openstreetmap.org/#map=5/24.98/92) |
| [Mongolian, Halh (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) | mn-Cyrl | [khk](https://iso639-3.sil.org/code/khk) | ltr | [48.3, 106.3](https://www.openstreetmap.org/#map=5/48.32/106.29) |
| Mongolian, Halh (Mongolian) | mn-Mong | [khk](https://iso639-3.sil.org/code/khk) | ltr | [48.3, 106.3](https://www.openstreetmap.org/#map=5/48.32/106.29) |
| [Khmer, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) | km | [khm](https://iso639-3.sil.org/code/khm) | ltr | [12.1, 105.0](https://www.openstreetmap.org/#map=5/12.05/105.02) |
| [Rwanda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) | rw | [kin](https://iso639-3.sil.org/code/kin) | ltr | [-1.6, 29.6](https://www.openstreetmap.org/#map=5/-1.57/29.64) |
| [Kirghiz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) | ky | [kir](https://iso639-3.sil.org/code/kir) | ltr | [42.0, 74.0](https://www.openstreetmap.org/#map=5/42/74) |
| [Khakas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) | kjh | [kjh](https://iso639-3.sil.org/code/kjh) | ltr | [50.7, 107.2](https://www.openstreetmap.org/#map=5/50.74/107.17) |
| Khün | kkh-Lana | [kkh](https://iso639-3.sil.org/code/kkh) | ltr | [20.7, 99.5](https://www.openstreetmap.org/#map=5/20.7/99.5) |
| [Mbundu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) | kmb | [kmb](https://iso639-3.sil.org/code/kmb) | ltr | [-9.0, 14.9](https://www.openstreetmap.org/#map=5/-8.98/14.89) |
| [Kurdish, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | ku | [kmr](https://iso639-3.sil.org/code/kmr) | ltr | [37.0, 43.0](https://www.openstreetmap.org/#map=5/37/43) |
| [Kanuri, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) | kr | [knc](https://iso639-3.sil.org/code/knc) | ltr | [11.9, 16.4](https://www.openstreetmap.org/#map=5/11.89/16.39) |
| [Koongo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) | kg | [kng](https://iso639-3.sil.org/code/kng) | ltr | [-5.6, 14.5](https://www.openstreetmap.org/#map=5/-5.58/14.48) |
| [Koongo (Angola)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) | kg-AO | [kng](https://iso639-3.sil.org/code/kng) | ltr | [-5.6, 14.5](https://www.openstreetmap.org/#map=5/-5.58/14.48) |
| [Komi-Permyak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) | koi | [koi](https://iso639-3.sil.org/code/koi) | ltr | [59.7, 54.8](https://www.openstreetmap.org/#map=5/59.66/54.8) |
| [Konjo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) | koo | [koo](https://iso639-3.sil.org/code/koo) | ltr | [0.3, 29.9](https://www.openstreetmap.org/#map=5/0.32/29.87) |
| [Korean](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) | ko | [kor](https://iso639-3.sil.org/code/kor) | ltr | [37.5, 128.0](https://www.openstreetmap.org/#map=5/37.5/128) |
| [Kaonde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) | kqn | [kqn](https://iso639-3.sil.org/code/kqn) | ltr | [-12.4, 25.8](https://www.openstreetmap.org/#map=5/-12.41/25.76) |
| [Kissi, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqs) | kqs | [kqs](https://iso639-3.sil.org/code/kqs) | ltr | [9.2, -10.1](https://www.openstreetmap.org/#map=5/9.183333/-10.1) |
| [Krio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) | kri | [kri](https://iso639-3.sil.org/code/kri) | ltr | [10.9, -14.3](https://www.openstreetmap.org/#map=5/10.88/-14.32) |
| [Karelian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) | krl | [krl](https://iso639-3.sil.org/code/krl) | ltr | [65.2, 30.9](https://www.openstreetmap.org/#map=5/65.17/30.87) |
| [Kituba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) | ktu | [ktu](https://iso639-3.sil.org/code/ktu) | ltr | [-2.3, 17.1](https://www.openstreetmap.org/#map=5/-2.3/17.15) |
| [Awa-Cuaiquer](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) | kwi | [kwi](https://iso639-3.sil.org/code/kwi) | ltr | [1.2, -78.3](https://www.openstreetmap.org/#map=5/1.22/-78.34) |
| [Ladino](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) | lad | [lad](https://iso639-3.sil.org/code/lad) | ltr | [41.2, 28.7](https://www.openstreetmap.org/#map=5/41.2/28.66) |
| [Lao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) | lo | [lao](https://iso639-3.sil.org/code/lao) | ltr | [16.1, 104.6](https://www.openstreetmap.org/#map=5/16.07/104.57) |
| [Latin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) | la | [lat](https://iso639-3.sil.org/code/lat) | ltr | [41.9, 12.4](https://www.openstreetmap.org/#map=5/41.9/12.45) |
| [Latin (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) | la | [lat](https://iso639-3.sil.org/code/lat) | ltr | [41.9, 12.4](https://www.openstreetmap.org/#map=5/41.9/12.45) |
| [Latvian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | lv | [lvs](https://iso639-3.sil.org/code/lvs) | ltr | [56.8, 24.3](https://www.openstreetmap.org/#map=5/56.83/24.31) |
| [Limba, West-Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) | lia | [lia](https://iso639-3.sil.org/code/lia) | ltr | [9.5, -12.3](https://www.openstreetmap.org/#map=5/9.52/-12.31) |
| [Ligurian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) | lij | [lij](https://iso639-3.sil.org/code/lij) | ltr | [44.1, 7.9](https://www.openstreetmap.org/#map=5/44.08/7.91) |
| [Lingala](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) | ln | [lin](https://iso639-3.sil.org/code/lin) | ltr | [1.4, 19.8](https://www.openstreetmap.org/#map=5/1.4/19.78) |
| Lingala (tones) | ln | [lin](https://iso639-3.sil.org/code/lin) | ltr | [1.4, 19.8](https://www.openstreetmap.org/#map=5/1.4/19.78) |
| [Lithuanian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) | lt | [lit](https://iso639-3.sil.org/code/lit) | ltr | [55.1, 24.0](https://www.openstreetmap.org/#map=5/55.14/23.96) |
| [Ladin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) | lld | [lld](https://iso639-3.sil.org/code/lld) | ltr | [46.6, 11.9](https://www.openstreetmap.org/#map=5/46.61/11.89) |
| [Occitan (Languedocien)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [Lamnso'](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) | lns | [lns](https://iso639-3.sil.org/code/lns) | ltr | [6.4, 11.1](https://www.openstreetmap.org/#map=5/6.4/11.07) |
| [Lobi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) | lob | [lob](https://iso639-3.sil.org/code/lob) | ltr | [10.0, -3.3](https://www.openstreetmap.org/#map=5/9.96/-3.34) |
| [Otuho](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) | lot | [lot](https://iso639-3.sil.org/code/lot) | ltr | [4.2, 32.7](https://www.openstreetmap.org/#map=5/4.16/32.66) |
| [Lozi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) | loz | [loz](https://iso639-3.sil.org/code/loz) | ltr | [-17.7, 24.7](https://www.openstreetmap.org/#map=5/-17.71/24.74) |
| [Luxembourgeois](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) | lb | [ltz](https://iso639-3.sil.org/code/ltz) | ltr | [49.7, 6.2](https://www.openstreetmap.org/#map=5/49.68/6.15) |
| [Luba-Kasai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) | lua | [lua](https://iso639-3.sil.org/code/lua) | ltr | [-5.7, 22.4](https://www.openstreetmap.org/#map=5/-5.73/22.44) |
| [Luvale](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) | lue | [lue](https://iso639-3.sil.org/code/lue) | ltr | [-13.5, 22.3](https://www.openstreetmap.org/#map=5/-13.54/22.29) |
| [Ganda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) | lg | [lug](https://iso639-3.sil.org/code/lug) | ltr | [0.7, 32.1](https://www.openstreetmap.org/#map=5/0.67/32.15) |
| [Lunda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) | lun | [lun](https://iso639-3.sil.org/code/lun) | ltr | [-11.2, 23.9](https://www.openstreetmap.org/#map=5/-11.18/23.87) |
| [Mizo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) | lus | [lus](https://iso639-3.sil.org/code/lus) | ltr | [22.6, 92.6](https://www.openstreetmap.org/#map=5/22.61/92.62) |
| [Madura](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) | mad | [mad](https://iso639-3.sil.org/code/mad) | ltr | [-7.0, 113.0](https://www.openstreetmap.org/#map=5/-7/113) |
| [Magahi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) | mag | [mag](https://iso639-3.sil.org/code/mag) | ltr | [25.1, 85.3](https://www.openstreetmap.org/#map=5/25.09/85.33) |
| [Marshallese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) | mh | [mah](https://iso639-3.sil.org/code/mah) | ltr | [3.1, 170.5](https://www.openstreetmap.org/#map=5/3.13/170.46) |
| Maithili | mai | [mai](https://iso639-3.sil.org/code/mai) | ltr | [26.4, 86.2](https://www.openstreetmap.org/#map=5/26.38/86.22) |
| [Malayalam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | ml | [mal](https://iso639-3.sil.org/code/mal) | ltr | [9.6, 76.8](https://www.openstreetmap.org/#map=5/9.59/76.77) |
| [Malayalam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | ml | [mal](https://iso639-3.sil.org/code/mal) | ltr | [9.6, 76.8](https://www.openstreetmap.org/#map=5/9.59/76.77) |
| [Mam, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) | mam | [mam](https://iso639-3.sil.org/code/mam) | ltr | [14.8, -91.7](https://www.openstreetmap.org/#map=5/14.8/-91.72) |
| [Marathi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) | mr | [mar](https://iso639-3.sil.org/code/mar) | ltr | [17.9, 76.7](https://www.openstreetmap.org/#map=5/17.93/76.67) |
| [Mazahua Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) | maz | [maz](https://iso639-3.sil.org/code/maz) | ltr | [19.7, -100.0](https://www.openstreetmap.org/#map=5/19.74/-100.02) |
| [Sharanahua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) | mcd | [mcd](https://iso639-3.sil.org/code/mcd) | ltr | [-9.9, -71.1](https://www.openstreetmap.org/#map=5/-9.86/-71.12) |
| [Matsés](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) | mcf | [mcf](https://iso639-3.sil.org/code/mcf) | ltr | [-5.7, -72.6](https://www.openstreetmap.org/#map=5/-5.74/-72.63) |
| [Mende](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) | men | [men](https://iso639-3.sil.org/code/men) | ltr | [7.9, -11.0](https://www.openstreetmap.org/#map=5/7.91/-10.99) |
| [Moba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfq) | mfq | [mfq](https://iso639-3.sil.org/code/mfq) | ltr | [8.0, 1.0](https://www.openstreetmap.org/#map=5/8/1) |
| [Micmac](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) | mic | [mic](https://iso639-3.sil.org/code/mic) | ltr | [46.0, -65.6](https://www.openstreetmap.org/#map=5/45.99/-65.58) |
| [Minangkabau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) | min | [min](https://iso639-3.sil.org/code/min) | ltr | [4.2, 96.3](https://www.openstreetmap.org/#map=5/4.17/96.25) |
| [Mískito](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) | miq | [miq](https://iso639-3.sil.org/code/miq) | ltr | [15.2, -84.3](https://www.openstreetmap.org/#map=5/15.16/-84.29) |
| [Macedonian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) | mk | [mkd](https://iso639-3.sil.org/code/mkd) | ltr | [41.6, 21.8](https://www.openstreetmap.org/#map=5/41.6/21.79) |
| [Maltese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) | mt | [mlt](https://iso639-3.sil.org/code/mlt) | ltr | [35.9, 14.4](https://www.openstreetmap.org/#map=5/35.89/14.45) |
| Malay (Arabic) | zlm-Arab | [zlm](https://iso639-3.sil.org/code/zlm) | rtl | [1.9, 103.0](https://www.openstreetmap.org/#map=5/1.86/103) |
| [Malay (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) | zlm-Latn | [zlm](https://iso639-3.sil.org/code/zlm) | ltr | [1.9, 103.0](https://www.openstreetmap.org/#map=5/1.86/103) |
| Mon | mnw | [mnw](https://iso639-3.sil.org/code/mnw) | ltr | [10.0, 100.0](https://www.openstreetmap.org/#map=5/10/100) |
| [Moro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mor) | mor | [mor](https://iso639-3.sil.org/code/mor) | ltr | [11.0, 30.0](https://www.openstreetmap.org/#map=5/11/30) |
| [Mòoré](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) | mos | [mos](https://iso639-3.sil.org/code/mos) | ltr | [10.4, -1.2](https://www.openstreetmap.org/#map=5/10.45/-1.17) |
| [Maori](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) | mi | [mri](https://iso639-3.sil.org/code/mri) | ltr | [-38.3, 176.5](https://www.openstreetmap.org/#map=5/-38.29/176.54) |
| [Mixe, Totontepec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) | mto | [mto](https://iso639-3.sil.org/code/mto) | ltr | [17.2, -96.0](https://www.openstreetmap.org/#map=5/17.22/-96.02) |
| [Mozarabic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) | mxi | [mxi](https://iso639-3.sil.org/code/mxi) | ltr | [37.9, -1.8](https://www.openstreetmap.org/#map=5/37.88/-1.8) |
| [Mixtec, Metlatónoc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) | mxv | [mxv](https://iso639-3.sil.org/code/mxv) | ltr | [17.1, -98.3](https://www.openstreetmap.org/#map=5/17.05/-98.35) |
| [Burmese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) | my | [mya](https://iso639-3.sil.org/code/mya) | ltr | [20.8, 94.0](https://www.openstreetmap.org/#map=5/20.79/93.97) |
| [Mazatec, Ixcatlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) | mzi | [mzi](https://iso639-3.sil.org/code/mzi) | ltr | [18.1, -96.6](https://www.openstreetmap.org/#map=5/18.15/-96.57) |
| [Chinese, Min Nan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nan) | nan | [nan](https://iso639-3.sil.org/code/nan) | ltr | [25.0, 116.0](https://www.openstreetmap.org/#map=5/25/116) |
| [Navajo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) | nv | [nav](https://iso639-3.sil.org/code/nav) | ltr | [36.2, -110.1](https://www.openstreetmap.org/#map=5/36.21/-110.08) |
| [Nyemba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) | nba | [nba](https://iso639-3.sil.org/code/nba) | ltr | [-15.7, 18.3](https://www.openstreetmap.org/#map=5/-15.71/18.25) |
| [Ndebele](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) | nr | [nbl](https://iso639-3.sil.org/code/nbl) | ltr | [-25.6, 29.1](https://www.openstreetmap.org/#map=5/-25.63/29.05) |
| [Ndonga](https://www.ohchr.org/en/human-rights/universal-declaration/translations/oshiwambo-ndonga) | ng | [ndo](https://iso639-3.sil.org/code/ndo) | ltr | [-17.6, 19.2](https://www.openstreetmap.org/#map=5/-17.64/19.16) |
| [Saxon, Low](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) | nds | [nds](https://iso639-3.sil.org/code/nds) | ltr | [50.8, 6.1](https://www.openstreetmap.org/#map=5/50.77/6.09) |
| [Nepali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) | ne | [npi](https://iso639-3.sil.org/code/npi) | ltr | [27.5, 85.0](https://www.openstreetmap.org/#map=5/27.5/85) |
| [Nahuatl, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) | nhn | [nhn](https://iso639-3.sil.org/code/nhn) | ltr | [19.1, -98.3](https://www.openstreetmap.org/#map=5/19.12/-98.3) |
| [Nganasan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) | nio | [nio](https://iso639-3.sil.org/code/nio) | ltr | [73.1, 86.2](https://www.openstreetmap.org/#map=5/73.14/86.21) |
| [Niue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=niu) | niu | [niu](https://iso639-3.sil.org/code/niu) | ltr | [-19.1, -169.9](https://www.openstreetmap.org/#map=5/-19.05/-169.92) |
| [Gilyak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Nivkh) | niv | [niv](https://iso639-3.sil.org/code/niv) | ltr | [52.6, 140.7](https://www.openstreetmap.org/#map=5/52.59/140.68) |
| [Naga, Ao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) | njo | [njo](https://iso639-3.sil.org/code/njo) | ltr | [26.3, 94.4](https://www.openstreetmap.org/#map=5/26.32/94.38) |
| [Kulango, Bouna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) | nku | [nku](https://iso639-3.sil.org/code/nku) | ltr | [8.5, -2.8](https://www.openstreetmap.org/#map=5/8.46/-2.75) |
| [Dutch](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) | nl | [nld](https://iso639-3.sil.org/code/nld) | ltr | [52.0, 5.0](https://www.openstreetmap.org/#map=5/52/5) |
| [Norwegian, Nynorsk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) | nn | [nno](https://iso639-3.sil.org/code/nno) | ltr | [61.0, 11.0](https://www.openstreetmap.org/#map=5/61/11) |
| [Norwegian, Bokmål](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) | nb | [nob](https://iso639-3.sil.org/code/nob) | ltr | [61.0, 8.0](https://www.openstreetmap.org/#map=5/61/8) |
| [Nomatsiguenga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) | not | [not](https://iso639-3.sil.org/code/not) | ltr | [-11.5, -74.4](https://www.openstreetmap.org/#map=5/-11.53/-74.44) |
| [Sotho, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) | nso | [nso](https://iso639-3.sil.org/code/nso) | ltr | [-24.8, 29.5](https://www.openstreetmap.org/#map=5/-24.8/29.47) |
| [Nyanja (Chechewa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) | ny | [nya](https://iso639-3.sil.org/code/nya) | ltr | [-14.8, 32.8](https://www.openstreetmap.org/#map=5/-14.8/32.81) |
| [Nyanja (Chinyanja)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) | ny | [nya](https://iso639-3.sil.org/code/nya) | ltr | [-14.8, 32.8](https://www.openstreetmap.org/#map=5/-14.8/32.81) |
| [Nyamwezi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) | nym | [nym](https://iso639-3.sil.org/code/nym) | ltr | [-5.1, 32.9](https://www.openstreetmap.org/#map=5/-5.09/32.94) |
| [Nyankore](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) | nyn | [nyn](https://iso639-3.sil.org/code/nyn) | ltr | [-0.5, 30.6](https://www.openstreetmap.org/#map=5/-0.46/30.55) |
| [Nzema](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) | nzi | [nzi](https://iso639-3.sil.org/code/nzi) | ltr | [5.2, -2.8](https://www.openstreetmap.org/#map=5/5.18/-2.81) |
| [Orok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) | oaa | [oaa](https://iso639-3.sil.org/code/oaa) | ltr | [49.4, 143.1](https://www.openstreetmap.org/#map=5/49.36/143.13) |
| [Occitan (Francoprovençal, Fribourg)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [Occitan (Francoprovençal, Savoie)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [Occitan (Francoprovençal, Vaud)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [Occitan (Francoprovençal, Valais)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [Ojibwa, Northwestern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) | ojb | [ojb](https://iso639-3.sil.org/code/ojb) | ltr | [51.6, -87.8](https://www.openstreetmap.org/#map=5/51.62/-87.79) |
| [Okiek](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) | oki | [oki](https://iso639-3.sil.org/code/oki) | ltr | [-2.8, 36.6](https://www.openstreetmap.org/#map=5/-2.78/36.6) |
| [Oroqen](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) | orh | [orh](https://iso639-3.sil.org/code/orh) | ltr | [50.0, 125.0](https://www.openstreetmap.org/#map=5/50/125) |
| [Osetin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) | os | [oss](https://iso639-3.sil.org/code/oss) | ltr | [41.8, 43.3](https://www.openstreetmap.org/#map=5/41.79/43.27) |
| [Otomi, Mezquital](https://www.ohchr.org/en/human-rights/universal-declaration/translations/nahnu-otomi) | ote | [ote](https://iso639-3.sil.org/code/ote) | ltr | [20.2, -99.6](https://www.openstreetmap.org/#map=5/20.23/-99.56) |
| [Pampangan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) | pam | [pam](https://iso639-3.sil.org/code/pam) | ltr | [15.0, 120.5](https://www.openstreetmap.org/#map=5/14.96/120.5) |
| [Panjabi, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) | pa | [pan](https://iso639-3.sil.org/code/pan) | ltr | [30.0, 75.7](https://www.openstreetmap.org/#map=5/30.04/75.67) |
| [Papiamentu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) | pap | [pap](https://iso639-3.sil.org/code/pap) | ltr | [12.5, -69.9](https://www.openstreetmap.org/#map=5/12.48/-69.94) |
| [Palauan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) | pau | [pau](https://iso639-3.sil.org/code/pau) | ltr | [7.2, 134.5](https://www.openstreetmap.org/#map=5/7.17/134.5) |
| [Páez](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) | pbb | [pbb](https://iso639-3.sil.org/code/pbb) | ltr | [2.6, -76.3](https://www.openstreetmap.org/#map=5/2.62/-76.31) |
| [Pashto, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) | ps | [pbu](https://iso639-3.sil.org/code/pbu) | rtl | [35.0, 71.3](https://www.openstreetmap.org/#map=5/35/71.33) |
| [Picard](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) | pcd | [pcd](https://iso639-3.sil.org/code/pcd) | ltr | [50.3, 3.3](https://www.openstreetmap.org/#map=5/50.28/3.25) |
| [Pidgin, Nigerian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) | pcm | [pcm](https://iso639-3.sil.org/code/pcm) | ltr | [9.7, 4.2](https://www.openstreetmap.org/#map=5/9.66/4.21) |
| [Farsi, Western](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) | fa | [pes](https://iso639-3.sil.org/code/pes) | rtl | [28.7, 55.2](https://www.openstreetmap.org/#map=5/28.66/55.16) |
| [Dari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) | fa-AF | [prs](https://iso639-3.sil.org/code/prs) | rtl | [28.7, 55.2](https://www.openstreetmap.org/#map=5/28.66/55.16) |
| [Pijin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) | pis | [pis](https://iso639-3.sil.org/code/pis) | ltr | [-9.6, 160.1](https://www.openstreetmap.org/#map=5/-9.57/160.14) |
| [Pintupi-Luritja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) | piu | [piu](https://iso639-3.sil.org/code/piu) | ltr | [-20.1, 128.0](https://www.openstreetmap.org/#map=5/-20.14/127.98) |
| [Malagasy, Plateau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) | mg | [plt](https://iso639-3.sil.org/code/plt) | ltr | [-19.6, 47.1](https://www.openstreetmap.org/#map=5/-19.59/47.12) |
| Panjabi, Western | lah | [pnb](https://iso639-3.sil.org/code/pnb) | rtl | [30.1, 75.3](https://www.openstreetmap.org/#map=5/30.09/75.35) |
| [Polish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) | pl | [pol](https://iso639-3.sil.org/code/pol) | ltr | [51.8, 18.6](https://www.openstreetmap.org/#map=5/51.84/18.63) |
| [Pohnpeian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) | pon | [pon](https://iso639-3.sil.org/code/pon) | ltr | [6.9, 158.2](https://www.openstreetmap.org/#map=5/6.87/158.22) |
| Portuguese (Brazil) | pt-BR | [por](https://iso639-3.sil.org/code/por) | ltr | [-15.0, -47.0](https://www.openstreetmap.org/#map=5/-15/-47) |
| [Portuguese (Portugal)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) | pt-PT | [por](https://iso639-3.sil.org/code/por) | ltr | [39.9, -8.1](https://www.openstreetmap.org/#map=5/39.91/-8.1) |
| [Crioulo, Upper Guinea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) | pov | [pov](https://iso639-3.sil.org/code/pov) | ltr | [13.2, -15.3](https://www.openstreetmap.org/#map=5/13.23/-15.33) |
| [Pipil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) | ppl | [ppl](https://iso639-3.sil.org/code/ppl) | ltr | [13.9, -89.4](https://www.openstreetmap.org/#map=5/13.89/-89.44) |
| [Occitan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) | oc | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| [K'iche', Central](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kiche-quiche) | quc | [quc](https://iso639-3.sil.org/code/quc) | ltr | [14.5, -91.2](https://www.openstreetmap.org/#map=5/14.53/-91.17) |
| [Quechua (Unified Quichua, old Hispanic orthography)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) | qu | [que](https://iso639-3.sil.org/code/que) | ltr | [-0.5, -78.5](https://www.openstreetmap.org/#map=5/-0.5/-78.5) |
| [Quichua, Chimborazo Highland](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) | qug | [qug](https://iso639-3.sil.org/code/qug) | ltr | [-1.4, -78.8](https://www.openstreetmap.org/#map=5/-1.37/-78.85) |
| [Quechua, Ayacucho](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) | quy | [quy](https://iso639-3.sil.org/code/quy) | ltr | [-13.8, -74.3](https://www.openstreetmap.org/#map=5/-13.85/-74.32) |
| [Quechua, Cusco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) | qu | [quz](https://iso639-3.sil.org/code/quz) | ltr | [-14.1, -71.8](https://www.openstreetmap.org/#map=5/-14.09/-71.77) |
| [Quechua, Ambo-Pasco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) | qva | [qva](https://iso639-3.sil.org/code/qva) | ltr | [-10.5, -76.1](https://www.openstreetmap.org/#map=5/-10.51/-76.11) |
| [Quechua, Cajamarca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) | qvc | [qvc](https://iso639-3.sil.org/code/qvc) | ltr | [-7.1, -78.3](https://www.openstreetmap.org/#map=5/-7.09/-78.32) |
| [Quechua, Huamalíes-Dos de Mayo Huánuco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) | qvh | [qvh](https://iso639-3.sil.org/code/qvh) | ltr | [-9.2, -76.3](https://www.openstreetmap.org/#map=5/-9.16/-76.34) |
| [Quechua, Margos-Yarowilca-Lauricocha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) | qvm | [qvm](https://iso639-3.sil.org/code/qvm) | ltr | [-9.8, -76.5](https://www.openstreetmap.org/#map=5/-9.84/-76.5) |
| [Quechua, North Junín](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) | qvn | [qvn](https://iso639-3.sil.org/code/qvn) | ltr | [-11.2, -75.8](https://www.openstreetmap.org/#map=5/-11.21/-75.81) |
| [Quechua, Huaylas Ancash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) | qwh | [qwh](https://iso639-3.sil.org/code/qwh) | ltr | [-9.4, -77.8](https://www.openstreetmap.org/#map=5/-9.39/-77.78) |
| [Quechua, South Bolivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) | quh | [quh](https://iso639-3.sil.org/code/quh) | ltr | [-20.9, -66.3](https://www.openstreetmap.org/#map=5/-20.92/-66.33) |
| [Quechua, Northern Conchucos Ancash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) | qxn | [qxn](https://iso639-3.sil.org/code/qxn) | ltr | [-9.0, -77.4](https://www.openstreetmap.org/#map=5/-8.97/-77.41) |
| [Quechua, Arequipa-La Unión](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) | qxu | [qxu](https://iso639-3.sil.org/code/qxu) | ltr | [-15.2, -72.6](https://www.openstreetmap.org/#map=5/-15.18/-72.63) |
| [Rarotongan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) | rar | [rar](https://iso639-3.sil.org/code/rar) | ltr | [-20.0, -158.0](https://www.openstreetmap.org/#map=5/-20/-158) |
| [Romani, Balkan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) | rmn | [rmn](https://iso639-3.sil.org/code/rmn) | ltr | [42.7, 21.2](https://www.openstreetmap.org/#map=5/42.67/21.17) |
| [Romani, Balkan (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) | rmn | [rmn](https://iso639-3.sil.org/code/rmn) | ltr | [42.7, 21.2](https://www.openstreetmap.org/#map=5/42.67/21.17) |
| [Aromanian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) | rup | [rup](https://iso639-3.sil.org/code/rup) | ltr | [42.1, 22.6](https://www.openstreetmap.org/#map=5/42.06/22.65) |
| Romansch | rm | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Puter) | rm-puter | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| [Romansch (Grischun)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) | rm-rumgr | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Surmiran) | rm-surmiran | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Sursilvan) | rm-sursilv | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Sutsilvan) | rm-sutsilv | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Vallader) | rm-vallader | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| [Romanian (1953)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) | ro | [ron](https://iso639-3.sil.org/code/ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/#map=5/46.39/24.23) |
| Romanian (1993) | ro | [ron](https://iso639-3.sil.org/code/ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/#map=5/46.39/24.23) |
| Romanian (2006) | ro | [ron](https://iso639-3.sil.org/code/ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/#map=5/46.39/24.23) |
| [Rundi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) | rn | [run](https://iso639-3.sil.org/code/run) | ltr | [-1.4, 31.3](https://www.openstreetmap.org/#map=5/-1.44/31.32) |
| [Russian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) | ru | [rus](https://iso639-3.sil.org/code/rus) | ltr | [59.0, 50.0](https://www.openstreetmap.org/#map=5/59/50) |
| [Sango](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) | sg | [sag](https://iso639-3.sil.org/code/sag) | ltr | [6.8, 20.2](https://www.openstreetmap.org/#map=5/6.79/20.17) |
| [Yakut](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) | sah | [sah](https://iso639-3.sil.org/code/sah) | ltr | [61.7, 134.0](https://www.openstreetmap.org/#map=5/61.7/133.98) |
| [Sanskrit](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) | sa | [san](https://iso639-3.sil.org/code/san) | ltr | [20.0, 77.0](https://www.openstreetmap.org/#map=5/20/77) |
| Sanskrit (Grantha) | sa-Gran | [san](https://iso639-3.sil.org/code/san) | ltr | [20.0, 77.0](https://www.openstreetmap.org/#map=5/20/77) |
| [Scots](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) | sco | [sco](https://iso639-3.sil.org/code/sco) | ltr | [55.5, -6.0](https://www.openstreetmap.org/#map=5/55.54/-6) |
| [Secoya](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) | sey | [sey](https://iso639-3.sil.org/code/sey) | ltr | [0.5, -75.5](https://www.openstreetmap.org/#map=5/0.46/-75.55) |
| [Shilluk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) | shk | [shk](https://iso639-3.sil.org/code/shk) | ltr | [9.8, 31.8](https://www.openstreetmap.org/#map=5/9.85/31.79) |
| [Shan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) | shn | [shn](https://iso639-3.sil.org/code/shn) | ltr | [21.6, 98.0](https://www.openstreetmap.org/#map=5/21.6/98.03) |
| [Shipibo-Conibo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) | shp | [shp](https://iso639-3.sil.org/code/shp) | ltr | [-7.2, -74.8](https://www.openstreetmap.org/#map=5/-7.17/-74.82) |
| [Sinhala](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) | si | [sin](https://iso639-3.sil.org/code/sin) | ltr | [7.0, 81.0](https://www.openstreetmap.org/#map=5/7/81) |
| [Seraiki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) | skr | [skr](https://iso639-3.sil.org/code/skr) | rtl | [29.6, 71.9](https://www.openstreetmap.org/#map=5/29.55/71.91) |
| [Slovak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) | sk | [slk](https://iso639-3.sil.org/code/slk) | ltr | [48.5, 18.8](https://www.openstreetmap.org/#map=5/48.55/18.78) |
| [Salar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slr) | slr | [slr](https://iso639-3.sil.org/code/slr) | ltr | [35.0, 95.0](https://www.openstreetmap.org/#map=5/35/95) |
| [Slovenian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) | sl | [slv](https://iso639-3.sil.org/code/slv) | ltr | [46.3, 14.8](https://www.openstreetmap.org/#map=5/46.25/14.78) |
| [Saami, North](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) | se | [sme](https://iso639-3.sil.org/code/sme) | ltr | [68.7, 22.1](https://www.openstreetmap.org/#map=5/68.72/22.11) |
| [Samoan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) | sm | [smo](https://iso639-3.sil.org/code/smo) | ltr | [-13.9, -171.8](https://www.openstreetmap.org/#map=5/-13.92/-171.83) |
| [Shona](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) | sn | [sna](https://iso639-3.sil.org/code/sna) | ltr | [-17.2, 29.8](https://www.openstreetmap.org/#map=5/-17.21/29.76) |
| [Soninke](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) | snk | [snk](https://iso639-3.sil.org/code/snk) | ltr | [13.1, -11.7](https://www.openstreetmap.org/#map=5/13.13/-11.72) |
| [Siona](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) | snn | [snn](https://iso639-3.sil.org/code/snn) | ltr | [0.3, -76.0](https://www.openstreetmap.org/#map=5/0.32/-76.02) |
| [Somali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) | so | [som](https://iso639-3.sil.org/code/som) | ltr | [4.8, 45.1](https://www.openstreetmap.org/#map=5/4.78/45.15) |
| [Sotho, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) | st | [sot](https://iso639-3.sil.org/code/sot) | ltr | [-30.4, 27.9](https://www.openstreetmap.org/#map=5/-30.44/27.9) |
| [Spanish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) | es | [spa](https://iso639-3.sil.org/code/spa) | ltr | [40.4, -1.1](https://www.openstreetmap.org/#map=5/40.44/-1.12) |
| [Sardinian, Logudorese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) | sc | [src](https://iso639-3.sil.org/code/src) | ltr | [40.5, 9.1](https://www.openstreetmap.org/#map=5/40.49/9.1) |
| [Serbian (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) | sr-Cyrl | [srp](https://iso639-3.sil.org/code/srp) | ltr | [44.3, 21.9](https://www.openstreetmap.org/#map=5/44.32/21.92) |
| [Serbian (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) | sr-Latn | [srp](https://iso639-3.sil.org/code/srp) | ltr | [44.3, 21.9](https://www.openstreetmap.org/#map=5/44.32/21.92) |
| [Serer-Sine](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) | srr | [srr](https://iso639-3.sil.org/code/srr) | ltr | [13.9, -16.4](https://www.openstreetmap.org/#map=5/13.89/-16.39) |
| [Swati](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) | ss | [ssw](https://iso639-3.sil.org/code/ssw) | ltr | [-26.0, 31.5](https://www.openstreetmap.org/#map=5/-26/31.5) |
| [Sukuma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) | suk | [suk](https://iso639-3.sil.org/code/suk) | ltr | [-3.2, 32.9](https://www.openstreetmap.org/#map=5/-3.16/32.88) |
| [Sunda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) | su | [sun](https://iso639-3.sil.org/code/sun) | ltr | [-6.9, 107.1](https://www.openstreetmap.org/#map=5/-6.9/107.11) |
| [Susu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) | sus | [sus](https://iso639-3.sil.org/code/sus) | ltr | [10.4, -13.4](https://www.openstreetmap.org/#map=5/10.4/-13.36) |
| [Comorian, Maore](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) | swb | [swb](https://iso639-3.sil.org/code/swb) | ltr | [-13.0, 45.1](https://www.openstreetmap.org/#map=5/-12.97/45.14) |
| [Swedish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) | sv | [swe](https://iso639-3.sil.org/code/swe) | ltr | [59.8, 17.4](https://www.openstreetmap.org/#map=5/59.8/17.39) |
| [Swahili](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) | sw | [swh](https://iso639-3.sil.org/code/swh) | ltr | [-8.3, 37.6](https://www.openstreetmap.org/#map=5/-8.26/37.62) |
| [Tahitian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) | ty | [tah](https://iso639-3.sil.org/code/tah) | ltr | [-17.6, -149.4](https://www.openstreetmap.org/#map=5/-17.65/-149.45) |
| [Tamang, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taj) | taj | [taj](https://iso639-3.sil.org/code/taj) | ltr | [27.3, 87.1](https://www.openstreetmap.org/#map=5/27.32/87.08) |
| [Tamil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) | ta | [tam](https://iso639-3.sil.org/code/tam) | ltr | [10.5, 78.8](https://www.openstreetmap.org/#map=5/10.52/78.83) |
| Tamil (Sri Lanka) | ta-LK | [tam](https://iso639-3.sil.org/code/tam) | ltr | [9.0, 80.0](https://www.openstreetmap.org/#map=5/9/80) |
| [Tatar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) | tt | [tat](https://iso639-3.sil.org/code/tat) | ltr | [55.0, 50.0](https://www.openstreetmap.org/#map=5/55/50) |
| [Ditammari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) | tbz | [tbz](https://iso639-3.sil.org/code/tbz) | ltr | [10.2, 1.2](https://www.openstreetmap.org/#map=5/10.16/1.18) |
| [Ticuna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) | tca | [tca](https://iso639-3.sil.org/code/tca) | ltr | [-3.7, -69.9](https://www.openstreetmap.org/#map=5/-3.66/-69.87) |
| [Telugu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) | te | [tel](https://iso639-3.sil.org/code/tel) | ltr | [16.4, 78.7](https://www.openstreetmap.org/#map=5/16.45/78.7) |
| [Themne](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) | tem | [tem](https://iso639-3.sil.org/code/tem) | ltr | [8.9, -12.3](https://www.openstreetmap.org/#map=5/8.9/-12.33) |
| [Tetun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) | tet | [tet](https://iso639-3.sil.org/code/tet) | ltr | [-9.1, 125.5](https://www.openstreetmap.org/#map=5/-9.11/125.53) |
| [Tajiki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) | tg | [tgk](https://iso639-3.sil.org/code/tgk) | ltr | [38.8, 68.5](https://www.openstreetmap.org/#map=5/38.82/68.55) |
| [Tagalog](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) | tl | [tgl](https://iso639-3.sil.org/code/tgl) | ltr | [14.1, 121.8](https://www.openstreetmap.org/#map=5/14.06/121.75) |
| Tagalog (Tagalog) | tl-Tglg | [tgl](https://iso639-3.sil.org/code/tgl) | ltr | [14.1, 121.8](https://www.openstreetmap.org/#map=5/14.06/121.75) |
| [Thai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) | th | [tha](https://iso639-3.sil.org/code/tha) | ltr | [14.2, 100.7](https://www.openstreetmap.org/#map=5/14.19/100.67) |
| Thai (2) | th | [tha](https://iso639-3.sil.org/code/tha) | ltr | [14.2, 100.7](https://www.openstreetmap.org/#map=5/14.19/100.67) |
| [Tigrigna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) | ti | [tir](https://iso639-3.sil.org/code/tir) | ltr | [15.3, 38.9](https://www.openstreetmap.org/#map=5/15.34/38.93) |
| [Tiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) | tiv | [tiv](https://iso639-3.sil.org/code/tiv) | ltr | [6.9, 9.3](https://www.openstreetmap.org/#map=5/6.88/9.26) |
| [Talysh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) | tly | [tly](https://iso639-3.sil.org/code/tly) | ltr | [38.5, 48.6](https://www.openstreetmap.org/#map=5/38.46/48.63) |
| [Toba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) | tob | [tob](https://iso639-3.sil.org/code/tob) | ltr | [-24.4, -60.5](https://www.openstreetmap.org/#map=5/-24.4/-60.45) |
| [Tonga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) | toi | [toi](https://iso639-3.sil.org/code/toi) | ltr | [-17.4, 27.1](https://www.openstreetmap.org/#map=5/-17.42/27.1) |
| [Tojolabal](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) | toj | [toj](https://iso639-3.sil.org/code/toj) | ltr | [16.3, -91.8](https://www.openstreetmap.org/#map=5/16.26/-91.78) |
| [Tongan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) | to | [ton](https://iso639-3.sil.org/code/ton) | ltr | [-21.2, -175.3](https://www.openstreetmap.org/#map=5/-21.17/-175.25) |
| [Totonac, Papantla](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) | top | [top](https://iso639-3.sil.org/code/top) | ltr | [20.6, -97.3](https://www.openstreetmap.org/#map=5/20.57/-97.26) |
| [Tok Pisin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) | tpi | [tpi](https://iso639-3.sil.org/code/tpi) | ltr | [-9.4, 147.3](https://www.openstreetmap.org/#map=5/-9.42/147.3) |
| [Tswana](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) | tn | [tsn](https://iso639-3.sil.org/code/tsn) | ltr | [-24.4, 24.8](https://www.openstreetmap.org/#map=5/-24.37/24.76) |
| [Tsonga (Mozambique)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) | ts | [tso](https://iso639-3.sil.org/code/tso) | ltr | [-23.6, 31.8](https://www.openstreetmap.org/#map=5/-23.58/31.81) |
| [Tsonga (Zimbabwe)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso1) | ts | [tso](https://iso639-3.sil.org/code/tso) | ltr | [-23.6, 31.8](https://www.openstreetmap.org/#map=5/-23.58/31.81) |
| [Purepecha](https://www.ohchr.org/en/human-rights/universal-declaration/translations/purhepecha) | tsz | [tsz](https://iso639-3.sil.org/code/tsz) | ltr | [19.3, -101.6](https://www.openstreetmap.org/#map=5/19.25/-101.63) |
| [Turkmen (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) | tk-Cyrl | [tuk](https://iso639-3.sil.org/code/tuk) | ltr | [37.1, 59.2](https://www.openstreetmap.org/#map=5/37.09/59.18) |
| Turkmen (Latin) | tk-Latn | [tuk](https://iso639-3.sil.org/code/tuk) | ltr | [37.1, 59.2](https://www.openstreetmap.org/#map=5/37.09/59.18) |
| [Turkish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) | tr | [tur](https://iso639-3.sil.org/code/tur) | ltr | [39.9, 32.9](https://www.openstreetmap.org/#map=5/39.87/32.87) |
| [Tuva](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) | tyv | [tyv](https://iso639-3.sil.org/code/tyv) | ltr | [48.4, 92.7](https://www.openstreetmap.org/#map=5/48.44/92.67) |
| [Tzotzil (Chamula)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) | tzo | [tzo](https://iso639-3.sil.org/code/tzo) | ltr | [16.6, -92.7](https://www.openstreetmap.org/#map=5/16.64/-92.74) |
| [Tzeltal, Oxchuc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) | tzh | [tzh](https://iso639-3.sil.org/code/tzh) | ltr | [16.6, -92.3](https://www.openstreetmap.org/#map=5/16.64/-92.28) |
| [Tamazight, Central Atlas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) | tzm | [tzm](https://iso639-3.sil.org/code/tzm) | ltr | [32.7, -2.4](https://www.openstreetmap.org/#map=5/32.74/-2.41) |
| Tamazight, Central Atlas (Tifinagh) | tzm-Tfng | [tzm](https://iso639-3.sil.org/code/tzm) | ltr | [32.7, -2.4](https://www.openstreetmap.org/#map=5/32.74/-2.41) |
| [Uduk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=udu) | udu | [udu](https://iso639-3.sil.org/code/udu) | ltr | [8.3, 34.5](https://www.openstreetmap.org/#map=5/8.25/34.5) |
| [Uyghur (Arabic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) | ug-Arab | [uig](https://iso639-3.sil.org/code/uig) | rtl | [43.7, 79.8](https://www.openstreetmap.org/#map=5/43.67/79.75) |
| Uyghur (Latin) | ug-Latn | [uig](https://iso639-3.sil.org/code/uig) | ltr | [43.7, 79.8](https://www.openstreetmap.org/#map=5/43.67/79.75) |
| [Ukrainian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) | uk | [ukr](https://iso639-3.sil.org/code/ukr) | ltr | [48.2, 24.4](https://www.openstreetmap.org/#map=5/48.18/24.4) |
| [Umbundu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) | umb | [umb](https://iso639-3.sil.org/code/umb) | ltr | [-12.5, 14.4](https://www.openstreetmap.org/#map=5/-12.48/14.41) |
| [Urarina](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) | ura | [ura](https://iso639-3.sil.org/code/ura) | ltr | [-4.4, -75.4](https://www.openstreetmap.org/#map=5/-4.44/-75.42) |
| [Urdu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | ur | [urd](https://iso639-3.sil.org/code/urd) | rtl | [25.0, 67.0](https://www.openstreetmap.org/#map=5/25/67) |
| [Urdu (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | ur | [urd](https://iso639-3.sil.org/code/urd) | rtl | [25.0, 67.0](https://www.openstreetmap.org/#map=5/25/67) |
| [Uzbek, Northern (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) | uz-Cyrl | [uzn](https://iso639-3.sil.org/code/uzn) | ltr | [43.8, 59.2](https://www.openstreetmap.org/#map=5/43.75/59.23) |
| [Uzbek, Northern (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) | uz-Latn | [uzn](https://iso639-3.sil.org/code/uzn) | ltr | [43.8, 59.2](https://www.openstreetmap.org/#map=5/43.75/59.23) |
| [Vai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) | vai | [vai](https://iso639-3.sil.org/code/vai) | ltr | [7.0, -11.3](https://www.openstreetmap.org/#map=5/7.05/-11.33) |
| [Venetian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) | vec | [vec](https://iso639-3.sil.org/code/vec) | ltr | [45.4, 13.0](https://www.openstreetmap.org/#map=5/45.41/13.03) |
| [Venda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) | ve | [ven](https://iso639-3.sil.org/code/ven) | ltr | [-22.2, 29.9](https://www.openstreetmap.org/#map=5/-22.19/29.95) |
| [Venda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ven) | ve | [ven](https://iso639-3.sil.org/code/ven) | ltr | [-22.2, 29.9](https://www.openstreetmap.org/#map=5/-22.19/29.95) |
| [Veps](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) | vep | [vep](https://iso639-3.sil.org/code/vep) | ltr | [60.3, 34.8](https://www.openstreetmap.org/#map=5/60.34/34.79) |
| [Vietnamese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) | vi | [vie](https://iso639-3.sil.org/code/vie) | ltr | [18.4, 106.8](https://www.openstreetmap.org/#map=5/18.39/106.76) |
| Vietnamese (Han nom) | vi-Hani | [vie](https://iso639-3.sil.org/code/vie) | ltr | [18.4, 106.8](https://www.openstreetmap.org/#map=5/18.39/106.76) |
| [Makhuwa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) | vmw | [vmw](https://iso639-3.sil.org/code/vmw) | ltr | [-14.8, 38.8](https://www.openstreetmap.org/#map=5/-14.85/38.81) |
| [Waray-Waray](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) | war | [war](https://iso639-3.sil.org/code/war) | ltr | [11.5, 125.0](https://www.openstreetmap.org/#map=5/11.49/125.01) |
| [Walloon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) | wa | [wln](https://iso639-3.sil.org/code/wln) | ltr | [50.2, 5.2](https://www.openstreetmap.org/#map=5/50.22/5.15) |
| [Wolof](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) | wo | [wol](https://iso639-3.sil.org/code/wol) | ltr | [15.3, -15.4](https://www.openstreetmap.org/#map=5/15.25/-15.38) |
| [Chinese, Wu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wuu) | wuu | [wuu](https://iso639-3.sil.org/code/wuu) | ltr | [31.2, 121.5](https://www.openstreetmap.org/#map=5/31.23/121.47) |
| [Waama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) | wwa | [wwa](https://iso639-3.sil.org/code/wwa) | ltr | [10.6, 1.6](https://www.openstreetmap.org/#map=5/10.6/1.65) |
| [Xhosa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) | xh | [xho](https://iso639-3.sil.org/code/xho) | ltr | [-31.0, 28.1](https://www.openstreetmap.org/#map=5/-31.04/28.08) |
| [Kasem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) | xsm | [xsm](https://iso639-3.sil.org/code/xsm) | ltr | [11.1, -1.4](https://www.openstreetmap.org/#map=5/11.08/-1.39) |
| [Yagua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) | yad | [yad](https://iso639-3.sil.org/code/yad) | ltr | [-3.4, -72.2](https://www.openstreetmap.org/#map=5/-3.43/-72.22) |
| [Yao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) | yao | [yao](https://iso639-3.sil.org/code/yao) | ltr | [-13.6, 35.2](https://www.openstreetmap.org/#map=5/-13.61/35.24) |
| [Yapese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) | yap | [yap](https://iso639-3.sil.org/code/yap) | ltr | [9.6, 138.1](https://www.openstreetmap.org/#map=5/9.56/138.12) |
| [Yiddish, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) | yi | [ydd](https://iso639-3.sil.org/code/ydd) | rtl | [51.8, 19.4](https://www.openstreetmap.org/#map=5/51.75/19.42) |
| [Yukaghir, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) | ykg | [ykg](https://iso639-3.sil.org/code/ykg) | ltr | [65.4, 151.3](https://www.openstreetmap.org/#map=5/65.39/151.32) |
| [Yoruba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) | yo | [yor](https://iso639-3.sil.org/code/yor) | ltr | [7.2, 3.7](https://www.openstreetmap.org/#map=5/7.15/3.67) |
| [Nenets](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yrk) | yrk | [yrk](https://iso639-3.sil.org/code/yrk) | ltr | [66.2, 71.0](https://www.openstreetmap.org/#map=5/66.18/71.02) |
| [Maya, Yucatán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) | yua | [yua](https://iso639-3.sil.org/code/yua) | ltr | [18.8, -89.0](https://www.openstreetmap.org/#map=5/18.78/-88.96) |
| [Chinese, Yue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yue) | yue | [yue](https://iso639-3.sil.org/code/yue) | ltr | [31.1, 121.3](https://www.openstreetmap.org/#map=5/31.13/121.29) |
| [Zapotec, Miahuatlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) | zam | [zam](https://iso639-3.sil.org/code/zam) | ltr | [16.2, -96.7](https://www.openstreetmap.org/#map=5/16.22/-96.66) |
| [Comorian, Ngazidja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) | zdj | [zdj](https://iso639-3.sil.org/code/zdj) | ltr | [-12.0, 44.0](https://www.openstreetmap.org/#map=5/-12/44) |
| [Tamazight, Standard Morocan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) | zgh | [zgh](https://iso639-3.sil.org/code/zgh) | ltr | [14.2, -2.4](https://www.openstreetmap.org/#map=5/14.2/-2.41) |
| [Záparo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) | zro | [zro](https://iso639-3.sil.org/code/zro) | ltr | [-2.0, -76.4](https://www.openstreetmap.org/#map=5/-2/-76.36) |
| [Zapotec, Güilá](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) | ztu | [ztu](https://iso639-3.sil.org/code/ztu) | ltr | [16.9, -96.5](https://www.openstreetmap.org/#map=5/16.88/-96.46) |
| [Zulu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) | zu | [zul](https://iso639-3.sil.org/code/zul) | ltr | [-25.3, 31.4](https://www.openstreetmap.org/#map=5/-25.33/31.35) |

<!--support end-->

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Info`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!--Definitions-->

[build-badge]: https://github.com/wooorm/udhr/workflows/main/badge.svg

[build]: https://github.com/wooorm/udhr/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/udhr.svg

[coverage]: https://codecov.io/github/wooorm/udhr

[downloads-badge]: https://img.shields.io/npm/dm/udhr.svg

[downloads]: https://www.npmjs.com/package/udhr

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[npm]: https://www.npmjs.com

[index]: https://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx

[unicode]: https://www.unicode.org/udhr/
