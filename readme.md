# udhr

[![Build][badge-build-image]][badge-build-url]
[![Coverage][badge-coverage-image]][badge-coverage-url]
[![Downloads][badge-downloads-image]][badge-downloads-url]

The most translated copyright-free document on this planet:
the [universal declaration of human rights][ohchr-index] in
[unicode][efele-udhr] in JavaScript.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`udhr`](#udhr-1)
  * [`Info`](#info)
* [Data](#data)
* [Compatibility](#compatibility)
* [Contribute](#contribute)
* [Security](#security)
* [License](#license)

## What is this?

This package exposes all UDHRs.

## When should I use this?

Perhaps when you are dealing with natural language detection?

## Install

This package is [ESM only][esm].
In Node.js (version 14+),
install with [npm][]:

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

for (const d of udhr) {
  if (d.code === 'bod') {
    console.log(d)
    break
  }
}

const base = await resolve('udhr', import.meta.url)
// Declarations are stored as `declaration/$code.html`.
const url = new URL('declaration/bod.html', base)

console.log(await fs.readFile(url, 'utf8'))
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

This package exports the identifier [`udhr`][api-udhr].
It exports the [TypeScript][] type [`Info`][api-info].
There is no default export.

### `udhr`

Universal Declaration of Human Rights ([`Array<Info>`][api-info]).

The actual declarations are available in HTML at `declaration/$code.html`.

### `Info`

Info (TypeScript type).

###### Type

```ts
interface Info {
  bcp47: string
  code: string
  direction?: 'ltr' | 'rtl' | 'ttb'
  iso6393: string
  latitude: number
  longitude: number
  name: string
  ohchr?: string
  stage: 1 | 2 | 3 | 4 | 5
}
```

## Data

<!--support start-->

| Name | BCP 47 | ISO 639-3 | Direction | Location |
| - | - | - | - | - |
| [Sãotomense](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) | cri | [cri](https://en.wikipedia.org/wiki/ISO_639:cri) | ltr | [6.7, 0.3](https://www.openstreetmap.org/?mlat=6.68\&mlon=0.33#map=5/6.68/0.33) |
| Crioulo, Upper Guinea (008) | pov | [pov](https://en.wikipedia.org/wiki/ISO_639:pov) | ltr | [13.2, -15.3](https://www.openstreetmap.org/?mlat=13.23\&mlon=-15.33#map=5/13.23/-15.33) |
| Mbundu (009) | kmb | [kmb](https://en.wikipedia.org/wiki/ISO_639:kmb) | ltr | [-9.0, 14.9](https://www.openstreetmap.org/?mlat=-8.98\&mlon=14.89#map=5/-8.98/14.89) |
| Tetun Dili | tdt | [tdt](https://en.wikipedia.org/wiki/ISO_639:tdt) | ltr | [-8.5, 125.5](https://www.openstreetmap.org/?mlat=-8.5\&mlon=125.5#map=5/-8.5/125.5) |
| Umbundu (011) | umb | [umb](https://en.wikipedia.org/wiki/ISO_639:umb) | ltr | [-12.5, 14.4](https://www.openstreetmap.org/?mlat=-12.48\&mlon=14.41#map=5/-12.48/14.41) |
| [(Mijisa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Maiunan)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Minjiang, spoken)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Minjiang, written)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [Drung](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) | duu | [duu](https://en.wikipedia.org/wiki/ISO_639:duu) | ltr | [28.0, 98.0](https://www.openstreetmap.org/?mlat=28\&mlon=98#map=5/28/98) |
| [(Muzzi)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mz1) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Klau)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kl1) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Jinan)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ji1) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Bizisa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Bz1) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [(Yeonbyeon)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ye1) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [Gumuz](https://www.ohchr.org/en/human-rights/universal-declaration/translations/gumuz) | guk | [guk](https://en.wikipedia.org/wiki/ISO_639:guk) | ltr | [11.1, 35.9](https://www.openstreetmap.org/?mlat=11.05\&mlon=35.93#map=5/11.05/35.93) |
| [Kafa](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kafi-noono) | kbr | [kbr](https://en.wikipedia.org/wiki/ISO_639:kbr) | ltr | [7.3, 36.2](https://www.openstreetmap.org/?mlat=7.34\&mlon=36.17#map=5/7.34/36.17) |
| [Sidamo](https://www.ohchr.org/en/human-rights/universal-declaration/translations/sidaamu-afoo) | sid | [sid](https://en.wikipedia.org/wiki/ISO_639:sid) | ltr | [6.7, 38.4](https://www.openstreetmap.org/?mlat=6.74\&mlon=38.37#map=5/6.74/38.37) |
| [Kituba (2)](https://www.ohchr.org/en/node/104406) | ktu | [ktu](https://en.wikipedia.org/wiki/ISO_639:ktu) | ltr | [-2.3, 17.1](https://www.openstreetmap.org/?mlat=-2.3\&mlon=17.15#map=5/-2.3/17.15) |
| [South Azerbaijani](https://www.ohchr.org/en/node/104397) | azb | [azb](https://en.wikipedia.org/wiki/ISO_639:azb) | ltr | [36.5, 48.4](https://www.openstreetmap.org/?mlat=36.51\&mlon=48.43#map=5/36.51/48.43) |
| [Latvian (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | lv | [lvs](https://en.wikipedia.org/wiki/ISO_639:lvs) | ltr | [56.8, 24.3](https://www.openstreetmap.org/?mlat=56.83\&mlon=24.31#map=5/56.83/24.31) |
| Spanish (resolution) | es | [spa](https://en.wikipedia.org/wiki/ISO_639:spa) | ltr | [40.4, -1.1](https://www.openstreetmap.org/?mlat=40.44\&mlon=-1.12#map=5/40.44/-1.12) |
| [Zarma](https://www.ohchr.org/en/human-rights/universal-declaration/translations/zarma) | dje | [dje](https://en.wikipedia.org/wiki/ISO_639:dje) | ltr | [12.9, 2.4](https://www.openstreetmap.org/?mlat=12.86\&mlon=2.41#map=5/12.86/2.41) |
| [Mirandese](https://www.ohchr.org/en/human-rights/universal-declaration/translations/mirandes) | mwl | [mwl](https://en.wikipedia.org/wiki/ISO_639:mwl) | ltr | [41.5, -6.4](https://www.openstreetmap.org/?mlat=41.54\&mlon=-6.38#map=5/41.54/-6.38) |
| [Maasai](https://www.ohchr.org/en/human-rights/universal-declaration/translations/maa) | mas | [mas](https://en.wikipedia.org/wiki/ISO_639:mas) | ltr | [-3.1, 36.5](https://www.openstreetmap.org/?mlat=-3.14\&mlon=36.46#map=5/-3.14/36.46) |
| [Malay, Papuan](https://www.ohchr.org/en/human-rights/universal-declaration/translations/papuan) | pmy | [pmy](https://en.wikipedia.org/wiki/ISO_639:pmy) | ltr | [-2.5, 139.7](https://www.openstreetmap.org/?mlat=-2.53\&mlon=139.65#map=5/-2.53/139.65) |
| [Malay, Ambonese](https://www.ohchr.org/en/human-rights/universal-declaration/translations/ambonese) | abs | [abs](https://en.wikipedia.org/wiki/ISO_639:abs) | ltr | [-3.7, 128.2](https://www.openstreetmap.org/?mlat=-3.71\&mlon=128.18#map=5/-3.71/128.18) |
| [Minangkabau (2)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/minangnese) | min | [min](https://en.wikipedia.org/wiki/ISO_639:min) | ltr | [-0.9, 100.4](https://www.openstreetmap.org/?mlat=-0.9\&mlon=100.44#map=5/-0.9/100.44) |
| [Banjar](https://www.ohchr.org/en/human-rights/universal-declaration/translations/banjarnese) | bjn | [bjn](https://en.wikipedia.org/wiki/ISO_639:bjn) | ltr | [0.8, 115.8](https://www.openstreetmap.org/?mlat=0.75\&mlon=115.79#map=5/0.75/115.79) |
| [(Bataknese)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/bataknese) | und | [und](https://en.wikipedia.org/wiki/ISO_639:und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/?mlat=-75\&mlon=30#map=5/-75/30) |
| [Morisyen](https://www.ohchr.org/en/human-rights/universal-declaration/translations/mauritian-kreol) | mfe | [mfe](https://en.wikipedia.org/wiki/ISO_639:mfe) | ltr | [-20.3, 57.5](https://www.openstreetmap.org/?mlat=-20.26\&mlon=57.55#map=5/-20.26/57.55) |
| [Hausa (2)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/haoussa) | hau | [hau](https://en.wikipedia.org/wiki/ISO_639:hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/?mlat=11.15\&mlon=8.78#map=5/11.15/8.78) |
| [Catalan (2)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/valencian) | cat | [cat](https://en.wikipedia.org/wiki/ISO_639:cat) | ltr | [41.5, 1.6](https://www.openstreetmap.org/?mlat=41.45\&mlon=1.57#map=5/41.45/1.57) |
| [Jamaican Creole English](https://www.ohchr.org/en/human-rights/universal-declaration/translations/patwa) | jam | [jam](https://en.wikipedia.org/wiki/ISO_639:jam) | ltr | [18.1, -77.3](https://www.openstreetmap.org/?mlat=18.13\&mlon=-77.26#map=5/18.13/-77.26) |
| [Saint Lucian Creole French](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kweyol) | acf | [acf](https://en.wikipedia.org/wiki/ISO_639:acf) | ltr | [15.4, -61.4](https://www.openstreetmap.org/?mlat=15.39\&mlon=-61.36#map=5/15.39/-61.36) |
| [Maay](https://www.ohchr.org/en/human-rights/universal-declaration/translations/maay) | ymm | [ymm](https://en.wikipedia.org/wiki/ISO_639:ymm) | ltr | [3.2, 43.6](https://www.openstreetmap.org/?mlat=3.22\&mlon=43.62#map=5/3.22/43.62) |
| [Somali (Af Marka)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/af-marka) | so | [som](https://en.wikipedia.org/wiki/ISO_639:som) | ltr | [1.7, 44.8](https://www.openstreetmap.org/?mlat=1.71\&mlon=44.77#map=5/1.71/44.77) |
| [North Saami (2)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/north-saami) | se | [sme](https://en.wikipedia.org/wiki/ISO_639:sme) | ltr | [68.7, 22.1](https://www.openstreetmap.org/?mlat=68.72\&mlon=22.11#map=5/68.72/22.11) |
| [Inari Saami](https://www.ohchr.org/en/human-rights/universal-declaration/translations/inari-saami) | smn | [smn](https://en.wikipedia.org/wiki/ISO_639:smn) | ltr | [69.4, 27.9](https://www.openstreetmap.org/?mlat=69.42\&mlon=27.87#map=5/69.42/27.87) |
| [Skolt Saami](https://www.ohchr.org/en/human-rights/universal-declaration/translations/skolt-saami) | sms | [sms](https://en.wikipedia.org/wiki/ISO_639:sms) | ltr | [68.8, 29.7](https://www.openstreetmap.org/?mlat=68.83\&mlon=29.72#map=5/68.83/29.72) |
| [Swahili (Chimwiini)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/chimwiini) | sw | [swh](https://en.wikipedia.org/wiki/ISO_639:swh) | ltr | [1.1, 44.0](https://www.openstreetmap.org/?mlat=1.11\&mlon=44.03#map=5/1.11/44.03) |
| [Swahili (Kibajuni)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kibajuni) | sw | [swh](https://en.wikipedia.org/wiki/ISO_639:swh) | ltr | [1.1, 44.0](https://www.openstreetmap.org/?mlat=1.11\&mlon=44.03#map=5/1.11/44.03) |
| [Dabarre](https://www.ohchr.org/en/human-rights/universal-declaration/translations/dabarre) | dbr | [dbr](https://en.wikipedia.org/wiki/ISO_639:dbr) | ltr | [1.2, 43.3](https://www.openstreetmap.org/?mlat=1.22\&mlon=43.33#map=5/1.22/43.33) |
| [Garre](https://www.ohchr.org/en/human-rights/universal-declaration/translations/garre) | gex | [gex](https://en.wikipedia.org/wiki/ISO_639:gex) | ltr | [2.3, 44.7](https://www.openstreetmap.org/?mlat=2.3\&mlon=44.69#map=5/2.3/44.69) |
| [Jiiddu](https://www.ohchr.org/en/human-rights/universal-declaration/translations/jiiddu) | jii | [jii](https://en.wikipedia.org/wiki/ISO_639:jii) | ltr | [1.8, 44.1](https://www.openstreetmap.org/?mlat=1.84\&mlon=44.13#map=5/1.84/44.13) |
| [Finnish (2)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/finnish) | fi | [fin](https://en.wikipedia.org/wiki/ISO_639:fin) | ltr | [64.8, 25.6](https://www.openstreetmap.org/?mlat=64.76\&mlon=25.56#map=5/64.76/25.56) |
| [French (Welche)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/welche) | fr | [fra](https://en.wikipedia.org/wiki/ISO_639:fra) | ltr | [48.5, 7.2](https://www.openstreetmap.org/?mlat=48.49\&mlon=7.19#map=5/48.49/7.19) |
| [Maori (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) | mi | [mri](https://en.wikipedia.org/wiki/ISO_639:mri) | ltr | [-38.3, 176.5](https://www.openstreetmap.org/?mlat=-38.29\&mlon=176.54#map=5/-38.29/176.54) |
| Kabyle | kab | [kab](https://en.wikipedia.org/wiki/ISO_639:kab) | ltr | [36.4, 4.8](https://www.openstreetmap.org/?mlat=36.41\&mlon=4.76#map=5/36.41/4.76) |
| [Afar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aar) | aa | [aar](https://en.wikipedia.org/wiki/ISO_639:aar) | ltr | [12.2, 41.8](https://www.openstreetmap.org/?mlat=12.23\&mlon=41.81#map=5/12.23/41.81) |
| [Abkhaz](https://www.ohchr.org/en/human-rights/universal-declaration/translations/abkhaz) | ab | [abk](https://en.wikipedia.org/wiki/ISO_639:abk) | ltr | [42.2, 41.3](https://www.openstreetmap.org/?mlat=42.23\&mlon=41.3#map=5/42.23/41.3) |
| [Aceh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) | ace | [ace](https://en.wikipedia.org/wiki/ISO_639:ace) | ltr | [3.9, 96.6](https://www.openstreetmap.org/?mlat=3.91\&mlon=96.6#map=5/3.91/96.6) |
| [Achuar-Shiwiar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) | acu | [acu](https://en.wikipedia.org/wiki/ISO_639:acu) | ltr | [-2.8, -77.3](https://www.openstreetmap.org/?mlat=-2.83\&mlon=-77.26#map=5/-2.83/-77.26) |
| [Achuar-Shiwiar (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) | acu | [acu](https://en.wikipedia.org/wiki/ISO_639:acu) | ltr | [-2.8, -77.3](https://www.openstreetmap.org/?mlat=-2.83\&mlon=-77.26#map=5/-2.83/-77.26) |
| [Dangme](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) | ada | [ada](https://en.wikipedia.org/wiki/ISO_639:ada) | ltr | [5.9, 0.1](https://www.openstreetmap.org/?mlat=5.94\&mlon=0.13#map=5/5.94/0.13) |
| [Adyghe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) | ady | [ady](https://en.wikipedia.org/wiki/ISO_639:ady) | ltr | [44.0, 39.3](https://www.openstreetmap.org/?mlat=44\&mlon=39.33#map=5/44/39.33) |
| [Afrikaans](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) | af | [afr](https://en.wikipedia.org/wiki/ISO_639:afr) | ltr | [-22.0, 30.0](https://www.openstreetmap.org/?mlat=-22\&mlon=30#map=5/-22/30) |
| [Aguaruna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) | agr | [agr](https://en.wikipedia.org/wiki/ISO_639:agr) | ltr | [-5.3, -77.9](https://www.openstreetmap.org/?mlat=-5.3\&mlon=-77.92#map=5/-5.3/-77.92) |
| [Assyrian Neo-Aramaic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) | aii | [aii](https://en.wikipedia.org/wiki/ISO_639:aii) | rtl | [36.8, 43.0](https://www.openstreetmap.org/?mlat=36.75\&mlon=43#map=5/36.75/43) |
| [Aja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) | ajg | [ajg](https://en.wikipedia.org/wiki/ISO_639:ajg) | ltr | [7.1, 1.6](https://www.openstreetmap.org/?mlat=7.07\&mlon=1.65#map=5/7.07/1.65) |
| [Twi (Akuapem)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) | ak-akuapem | [twi](https://en.wikipedia.org/wiki/ISO_639:twi) | ltr | [6.3, -1.3](https://www.openstreetmap.org/?mlat=6.35\&mlon=-1.33#map=5/6.35/-1.33) |
| [Twi (Asante)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) | ak-asante | [twi](https://en.wikipedia.org/wiki/ISO_639:twi) | ltr | [6.3, -1.3](https://www.openstreetmap.org/?mlat=6.35\&mlon=-1.33#map=5/6.35/-1.33) |
| [Fante](https://www.ohchr.org/en/node/102556) | ak | [fat](https://en.wikipedia.org/wiki/ISO_639:fat) | ltr | [6.3, -1.3](https://www.openstreetmap.org/?mlat=6.35\&mlon=-1.33#map=5/6.35/-1.33) |
| [Albanian, Tosk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) | als | [als](https://en.wikipedia.org/wiki/ISO_639:als) | ltr | [41.0, 20.0](https://www.openstreetmap.org/?mlat=41\&mlon=20#map=5/41/20) |
| [Altai, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) | alt | [alt](https://en.wikipedia.org/wiki/ISO_639:alt) | ltr | [50.1, 86.9](https://www.openstreetmap.org/?mlat=50.13\&mlon=86.87#map=5/50.13/86.87) |
| [Amahuaca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) | amc | [amc](https://en.wikipedia.org/wiki/ISO_639:amc) | ltr | [-10.2, -72.3](https://www.openstreetmap.org/?mlat=-10.2\&mlon=-72.32#map=5/-10.2/-72.32) |
| [Yaneshaʼ](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) | ame | [ame](https://en.wikipedia.org/wiki/ISO_639:ame) | ltr | [-10.6, -75.3](https://www.openstreetmap.org/?mlat=-10.55\&mlon=-75.31#map=5/-10.55/-75.31) |
| [Amharic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) | am | [amh](https://en.wikipedia.org/wiki/ISO_639:amh) | ltr | [11.7, 39.5](https://www.openstreetmap.org/?mlat=11.71\&mlon=39.54#map=5/11.71/39.54) |
| [Amis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ami) | ami | [ami](https://en.wikipedia.org/wiki/ISO_639:ami) | ltr | [23.5, 121.5](https://www.openstreetmap.org/?mlat=23.5\&mlon=121.5#map=5/23.5/121.5) |
| [Amarakaeri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) | amr | [amr](https://en.wikipedia.org/wiki/ISO_639:amr) | ltr | [-12.5, -70.5](https://www.openstreetmap.org/?mlat=-12.49\&mlon=-70.55#map=5/-12.49/-70.55) |
| [Arabic, Standard](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) | ar | [arb](https://en.wikipedia.org/wiki/ISO_639:arb) | rtl | [28.0, 43.9](https://www.openstreetmap.org/?mlat=27.96\&mlon=43.85#map=5/27.96/43.85) |
| [Arabela](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) | arl | [arl](https://en.wikipedia.org/wiki/ISO_639:arl) | ltr | [-2.0, -75.1](https://www.openstreetmap.org/?mlat=-1.96\&mlon=-75.06#map=5/-1.96/-75.06) |
| [Mapudungun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) | arn | [arn](https://en.wikipedia.org/wiki/ISO_639:arn) | ltr | [-38.7, -71.3](https://www.openstreetmap.org/?mlat=-38.74\&mlon=-71.28#map=5/-38.74/-71.28) |
| [Asturian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) | ast | [ast](https://en.wikipedia.org/wiki/ISO_639:ast) | ltr | [42.4, -6.0](https://www.openstreetmap.org/?mlat=42.42\&mlon=-6.02#map=5/42.42/-6.02) |
| [Waorani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) | auc | [auc](https://en.wikipedia.org/wiki/ISO_639:auc) | ltr | [-1.1, -76.7](https://www.openstreetmap.org/?mlat=-1.12\&mlon=-76.68#map=5/-1.12/-76.68) |
| [Occitan (Auvergnat)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) | oc | [oci](https://en.wikipedia.org/wiki/ISO_639:oci) | ltr | [45.1, 3.1](https://www.openstreetmap.org/?mlat=45.13\&mlon=3.13#map=5/45.13/3.13) |
| [Ayoreo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ayo) | ayo | [ayo](https://en.wikipedia.org/wiki/ISO_639:ayo) | ltr | [-18.0, -62.0](https://www.openstreetmap.org/?mlat=-18\&mlon=-62#map=5/-18/-62) |
| [Aymara, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) | ay | [ayr](https://en.wikipedia.org/wiki/ISO_639:ayr) | ltr | [-17.0, -68.5](https://www.openstreetmap.org/?mlat=-17\&mlon=-68.5#map=5/-17/-68.5) |
| [Azerbaijani, North (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) | az-Cyrl | [azj](https://en.wikipedia.org/wiki/ISO_639:azj) | ltr | [41.0, 46.5](https://www.openstreetmap.org/?mlat=40.98\&mlon=46.47#map=5/40.98/46.47) |
| [Azerbaijani, North (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) | az-Latn | [azj](https://en.wikipedia.org/wiki/ISO_639:azj) | ltr | [41.0, 46.5](https://www.openstreetmap.org/?mlat=40.98\&mlon=46.47#map=5/40.98/46.47) |
| [Bamanankan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) | bm | [bam](https://en.wikipedia.org/wiki/ISO_639:bam) | ltr | [12.0, -10.0](https://www.openstreetmap.org/?mlat=12.04\&mlon=-9.99#map=5/12.04/-9.99) |
| [Bali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) | ban | [ban](https://en.wikipedia.org/wiki/ISO_639:ban) | ltr | [-8.4, 115.1](https://www.openstreetmap.org/?mlat=-8.36\&mlon=115.08#map=5/-8.36/115.08) |
| [Bamun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bax) | bax | [bax](https://en.wikipedia.org/wiki/ISO_639:bax) | ltr | [9.6, 3.0](https://www.openstreetmap.org/?mlat=9.63\&mlon=3#map=5/9.63/3) |
| [Baatonum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) | bba | [bba](https://en.wikipedia.org/wiki/ISO_639:bba) | ltr | [9.6, 3.0](https://www.openstreetmap.org/?mlat=9.63\&mlon=3#map=5/9.63/3) |
| [Baoulé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) | bci | [bci](https://en.wikipedia.org/wiki/ISO_639:bci) | ltr | [5.4, -4.8](https://www.openstreetmap.org/?mlat=5.43\&mlon=-4.77#map=5/5.43/-4.77) |
| [Bicolano, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) | bik | [bcl](https://en.wikipedia.org/wiki/ISO_639:bcl) | ltr | [13.8, 123.4](https://www.openstreetmap.org/?mlat=13.76\&mlon=123.4#map=5/13.76/123.4) |
| [Belarusan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) | be | [bel](https://en.wikipedia.org/wiki/ISO_639:bel) | ltr | [53.2, 25.6](https://www.openstreetmap.org/?mlat=53.23\&mlon=25.6#map=5/53.23/25.6) |
| [Bemba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) | bem | [bem](https://en.wikipedia.org/wiki/ISO_639:bem) | ltr | [-10.6, 29.3](https://www.openstreetmap.org/?mlat=-10.61\&mlon=29.3#map=5/-10.61/29.3) |
| [Bengali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) | bn | [ben](https://en.wikipedia.org/wiki/ISO_639:ben) | ltr | [24.0, 90.0](https://www.openstreetmap.org/?mlat=24\&mlon=90#map=5/24/90) |
| [Bari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) | bfa | [bfa](https://en.wikipedia.org/wiki/ISO_639:bfa) | ltr | [4.2, 31.1](https://www.openstreetmap.org/?mlat=4.2\&mlon=31.07#map=5/4.2/31.07) |
| [Bhojpuri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) | bho | [bho](https://en.wikipedia.org/wiki/ISO_639:bho) | ltr | [26.5, 84.8](https://www.openstreetmap.org/?mlat=26.46\&mlon=84.82#map=5/26.46/84.82) |
| [Edo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) | bin | [bin](https://en.wikipedia.org/wiki/ISO_639:bin) | ltr | [6.4, 5.7](https://www.openstreetmap.org/?mlat=6.41\&mlon=5.7#map=5/6.41/5.7) |
| [Bislama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) | bi | [bis](https://en.wikipedia.org/wiki/ISO_639:bis) | ltr | [-20.0, 167.4](https://www.openstreetmap.org/?mlat=-19.99\&mlon=167.37#map=5/-19.99/167.37) |
| Tai Dam | blt | [blt](https://en.wikipedia.org/wiki/ISO_639:blt) | ltr | [21.5, 102.7](https://www.openstreetmap.org/?mlat=21.47\&mlon=102.7#map=5/21.47/102.7) |
| [Hmong Njua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) | hnj | [hnj](https://en.wikipedia.org/wiki/ISO_639:hnj) | ltr | [22.6, 102.0](https://www.openstreetmap.org/?mlat=22.56\&mlon=101.95#map=5/22.56/101.95) |
| [Bora](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) | boa | [boa](https://en.wikipedia.org/wiki/ISO_639:boa) | ltr | [-2.9, -68.9](https://www.openstreetmap.org/?mlat=-2.91\&mlon=-68.91#map=5/-2.91/-68.91) |
| [Tibetan, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) | bo | [bod](https://en.wikipedia.org/wiki/ISO_639:bod) | ltr | [28.4, 90.2](https://www.openstreetmap.org/?mlat=28.37\&mlon=90.19#map=5/28.37/90.19) |
| [Bosnian (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) | bs-Cyrl | [bos](https://en.wikipedia.org/wiki/ISO_639:bos) | ltr | [42.9, 17.7](https://www.openstreetmap.org/?mlat=42.93\&mlon=17.67#map=5/42.93/17.67) |
| [Bosnian (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) | bs-Latn | [bos](https://en.wikipedia.org/wiki/ISO_639:bos) | ltr | [42.9, 17.7](https://www.openstreetmap.org/?mlat=42.93\&mlon=17.67#map=5/42.93/17.67) |
| [Breton](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) | br | [bre](https://en.wikipedia.org/wiki/ISO_639:bre) | ltr | [48.3, -3.8](https://www.openstreetmap.org/?mlat=48.25\&mlon=-3.79#map=5/48.25/-3.79) |
| [Bulu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) | bum | [bum](https://en.wikipedia.org/wiki/ISO_639:bum) | ltr | [3.2, 11.6](https://www.openstreetmap.org/?mlat=3.16\&mlon=11.64#map=5/3.16/11.64) |
| [Bushi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) | buc | [buc](https://en.wikipedia.org/wiki/ISO_639:buc) | ltr | [-13.0, 45.1](https://www.openstreetmap.org/?mlat=-12.97\&mlon=45.14#map=5/-12.97/45.14) |
| [Bugis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) | bug | [bug](https://en.wikipedia.org/wiki/ISO_639:bug) | ltr | [-0.3, 119.3](https://www.openstreetmap.org/?mlat=-0.25\&mlon=119.25#map=5/-0.25/119.25) |
| [Bulgarian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) | bg | [bul](https://en.wikipedia.org/wiki/ISO_639:bul) | ltr | [43.4, 25.1](https://www.openstreetmap.org/?mlat=43.36\&mlon=25.05#map=5/43.36/25.05) |
| [Belanda Viri](https://www.ohchr.org/en/human-rights/universal-declaration/translations/balanda-viri) | bvi | [bvi](https://en.wikipedia.org/wiki/ISO_639:bvi) | ltr | [7.4, 27.7](https://www.openstreetmap.org/?mlat=7.41\&mlon=27.7#map=5/7.41/27.7) |
| [Garifuna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) | cab | [cab](https://en.wikipedia.org/wiki/ISO_639:cab) | ltr | [15.3, -86.9](https://www.openstreetmap.org/?mlat=15.35\&mlon=-86.91#map=5/15.35/-86.91) |
| [Kaqchikel, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) | cak | [cak](https://en.wikipedia.org/wiki/ISO_639:cak) | ltr | [14.5, -91.0](https://www.openstreetmap.org/?mlat=14.47\&mlon=-90.99#map=5/14.47/-90.99) |
| [Tsimané](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cas) | cas | [cas](https://en.wikipedia.org/wiki/ISO_639:cas) | ltr | [-14.0, -68.0](https://www.openstreetmap.org/?mlat=-14\&mlon=-68#map=5/-14/-68) |
| [Catalan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) | ca | [cat](https://en.wikipedia.org/wiki/ISO_639:cat) | ltr | [41.5, 1.6](https://www.openstreetmap.org/?mlat=41.45\&mlon=1.57#map=5/41.45/1.57) |
| [Chachi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) | cbi | [cbi](https://en.wikipedia.org/wiki/ISO_639:cbi) | ltr | [0.7, -79.0](https://www.openstreetmap.org/?mlat=0.71\&mlon=-79.05#map=5/0.71/-79.05) |
| [Cashibo-Cacataibo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) | cbr | [cbr](https://en.wikipedia.org/wiki/ISO_639:cbr) | ltr | [-8.7, -75.4](https://www.openstreetmap.org/?mlat=-8.7\&mlon=-75.42#map=5/-8.7/-75.42) |
| [Cashinahua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) | cbs | [cbs](https://en.wikipedia.org/wiki/ISO_639:cbs) | ltr | [-9.7, -71.2](https://www.openstreetmap.org/?mlat=-9.72\&mlon=-71.17#map=5/-9.72/-71.17) |
| [Chayahuita](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) | cbt | [cbt](https://en.wikipedia.org/wiki/ISO_639:cbt) | ltr | [-5.6, -76.8](https://www.openstreetmap.org/?mlat=-5.64\&mlon=-76.83#map=5/-5.64/-76.83) |
| [Candoshi-Shapra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) | cbu | [cbu](https://en.wikipedia.org/wiki/ISO_639:cbu) | ltr | [-4.2, -76.9](https://www.openstreetmap.org/?mlat=-4.24\&mlon=-76.93#map=5/-4.24/-76.93) |
| Chakma | ccp | [ccp](https://en.wikipedia.org/wiki/ISO_639:ccp) | ltr | [23.0, 92.0](https://www.openstreetmap.org/?mlat=23\&mlon=92#map=5/23/92) |
| [Zhuang, Yongbei](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) | za | [zyb](https://en.wikipedia.org/wiki/ISO_639:zyb) | ltr | [23.7, 107.2](https://www.openstreetmap.org/?mlat=23.68\&mlon=107.18#map=5/23.68/107.18) |
| [Cebuano](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) | ceb | [ceb](https://en.wikipedia.org/wiki/ISO_639:ceb) | ltr | [8.4, 124.4](https://www.openstreetmap.org/?mlat=8.39\&mlon=124.37#map=5/8.39/124.37) |
| [Czech](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) | cs | [ces](https://en.wikipedia.org/wiki/ISO_639:ces) | ltr | [49.9, 15.1](https://www.openstreetmap.org/?mlat=49.87\&mlon=15.1#map=5/49.87/15.1) |
| [Chamorro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) | ch | [cha](https://en.wikipedia.org/wiki/ISO_639:cha) | ltr | [14.3, 145.3](https://www.openstreetmap.org/?mlat=14.33\&mlon=145.28#map=5/14.33/145.28) |
| [Chinantec, Ojitlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) | chj | [chj](https://en.wikipedia.org/wiki/ISO_639:chj) | ltr | [18.1, -96.3](https://www.openstreetmap.org/?mlat=18.07\&mlon=-96.34#map=5/18.07/-96.34) |
| [Chuukese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) | chk | [chk](https://en.wikipedia.org/wiki/ISO_639:chk) | ltr | [7.3, 151.6](https://www.openstreetmap.org/?mlat=7.34\&mlon=151.6#map=5/7.34/151.6) |
| Cherokee (cased) | chr | [chr](https://en.wikipedia.org/wiki/ISO_639:chr) | ltr | [35.5, -83.2](https://www.openstreetmap.org/?mlat=35.47\&mlon=-83.16#map=5/35.47/-83.16) |
| Cherokee (uppercase) | chr | [chr](https://en.wikipedia.org/wiki/ISO_639:chr) | ltr | [35.5, -83.2](https://www.openstreetmap.org/?mlat=35.47\&mlon=-83.16#map=5/35.47/-83.16) |
| [Chuvash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chv) | cv | [chv](https://en.wikipedia.org/wiki/ISO_639:chv) | ltr | [55.0, 47.0](https://www.openstreetmap.org/?mlat=55\&mlon=47#map=5/55/47) |
| [Chickasaw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) | cic | [cic](https://en.wikipedia.org/wiki/ISO_639:cic) | ltr | [34.0, -97.1](https://www.openstreetmap.org/?mlat=33.95\&mlon=-97.13#map=5/33.95/-97.13) |
| [Chokwe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | cjk | [cjk](https://en.wikipedia.org/wiki/ISO_639:cjk) | ltr | [-9.7, 21.4](https://www.openstreetmap.org/?mlat=-9.66\&mlon=21.4#map=5/-9.66/21.4) |
| [Chokwe (Angola)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | cjk | [cjk](https://en.wikipedia.org/wiki/ISO_639:cjk) | ltr | [-9.7, 21.4](https://www.openstreetmap.org/?mlat=-9.66\&mlon=21.4#map=5/-9.66/21.4) |
| [Shor](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) | cjs | [cjs](https://en.wikipedia.org/wiki/ISO_639:cjs) | ltr | [52.3, 88.4](https://www.openstreetmap.org/?mlat=52.33\&mlon=88.43#map=5/52.33/88.43) |
| [Chinese, Jinyu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjy) | cjy | [cjy](https://en.wikipedia.org/wiki/ISO_639:cjy) | ltr | [38.0, 111.0](https://www.openstreetmap.org/?mlat=38\&mlon=111#map=5/38/111) |
| [Kurdish, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) | ckb-Latn | [ckb](https://en.wikipedia.org/wiki/ISO_639:ckb) | ltr | [35.6, 45.8](https://www.openstreetmap.org/?mlat=35.65\&mlon=45.81#map=5/35.65/45.81) |
| [Chinese, Mandarin (Simplified)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chn) | zh | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [40.0, 116.2](https://www.openstreetmap.org/?mlat=40.02\&mlon=116.23#map=5/40.02/116.23) |
| [Chinese, Mandarin (Beijing)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=be1) | zh | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [39.9, 116.4](https://www.openstreetmap.org/?mlat=39.91\&mlon=116.38#map=5/39.91/116.38) |
| [Chinese, Mandarin (Guiyang)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gu1) | zh | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [26.6, 106.6](https://www.openstreetmap.org/?mlat=26.65\&mlon=106.63#map=5/26.65/106.63) |
| [Chinese, Mandarin (Harbin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha2) | zh | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [45.8, 126.6](https://www.openstreetmap.org/?mlat=45.75\&mlon=126.63#map=5/45.75/126.63) |
| [Chinese, Mandarin (Nanjing)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=na1) | zh | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [32.0, 118.8](https://www.openstreetmap.org/?mlat=32.05\&mlon=118.76#map=5/32.05/118.76) |
| [Chinese, Mandarin (Tianjin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ti1) | zh | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [39.1, 117.2](https://www.openstreetmap.org/?mlat=39.13\&mlon=117.18#map=5/39.13/117.18) |
| Chinese, Mandarin (Traditional) | zh-Hant | [cmn](https://en.wikipedia.org/wiki/ISO_639:cmn) | ltr | [40.0, 116.2](https://www.openstreetmap.org/?mlat=40.02\&mlon=116.23#map=5/40.02/116.23) |
| [Chin, Haka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) | cnh | [cnh](https://en.wikipedia.org/wiki/ISO_639:cnh) | ltr | [22.9, 92.8](https://www.openstreetmap.org/?mlat=22.87\&mlon=92.82#map=5/22.87/92.82) |
| [Asháninka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) | cni | [cni](https://en.wikipedia.org/wiki/ISO_639:cni) | ltr | [-11.9, -73.9](https://www.openstreetmap.org/?mlat=-11.93\&mlon=-73.91#map=5/-11.93/-73.91) |
| [Montenegrin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cnr) | cnr | [cnr](https://en.wikipedia.org/wiki/ISO_639:cnr) | ltr | [42.8, 19.5](https://www.openstreetmap.org/?mlat=42.78\&mlon=19.47#map=5/42.78/19.47) |
| [Colorado](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) | cof | [cof](https://en.wikipedia.org/wiki/ISO_639:cof) | ltr | [-0.2, -79.2](https://www.openstreetmap.org/?mlat=-0.21\&mlon=-79.23#map=5/-0.21/-79.23) |
| [Corsican](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) | co | [cos](https://en.wikipedia.org/wiki/ISO_639:cos) | ltr | [41.7, 9.3](https://www.openstreetmap.org/?mlat=41.7\&mlon=9.26#map=5/41.7/9.26) |
| [Caquinte](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) | cot | [cot](https://en.wikipedia.org/wiki/ISO_639:cot) | ltr | [-11.5, -73.5](https://www.openstreetmap.org/?mlat=-11.48\&mlon=-73.45#map=5/-11.48/-73.45) |
| [Ashéninka, Pichis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) | cpu | [cpu](https://en.wikipedia.org/wiki/ISO_639:cpu) | ltr | [-10.5, -74.6](https://www.openstreetmap.org/?mlat=-10.47\&mlon=-74.6#map=5/-10.47/-74.6) |
| [Crimean Tatar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crh) | crh | [crh](https://en.wikipedia.org/wiki/ISO_639:crh) | ltr | [45.0, 34.1](https://www.openstreetmap.org/?mlat=45\&mlon=34.08#map=5/45/34.08) |
| [Seselwa Creole French](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) | crs | [crs](https://en.wikipedia.org/wiki/ISO_639:crs) | ltr | [-4.6, 55.5](https://www.openstreetmap.org/?mlat=-4.62\&mlon=55.45#map=5/-4.62/55.45) |
| [Chinantec, Chiltepec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) | csa | [csa](https://en.wikipedia.org/wiki/ISO_639:csa) | ltr | [18.1, -96.2](https://www.openstreetmap.org/?mlat=18.06\&mlon=-96.22#map=5/18.06/-96.22) |
| [Cree, Swampy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) | csw | [csw](https://en.wikipedia.org/wiki/ISO_639:csw) | ltr | [56.0, -95.0](https://www.openstreetmap.org/?mlat=56\&mlon=-95#map=5/56/-95) |
| [Chin, Tedim](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) | ctd | [ctd](https://en.wikipedia.org/wiki/ISO_639:ctd) | ltr | [23.6, 93.5](https://www.openstreetmap.org/?mlat=23.61\&mlon=93.52#map=5/23.61/93.52) |
| [Welsh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) | cy | [cym](https://en.wikipedia.org/wiki/ISO_639:cym) | ltr | [52.0, -4.0](https://www.openstreetmap.org/?mlat=52\&mlon=-4#map=5/52/-4) |
| [Dagbani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) | dag | [dag](https://en.wikipedia.org/wiki/ISO_639:dag) | ltr | [9.7, -0.4](https://www.openstreetmap.org/?mlat=9.65\&mlon=-0.43#map=5/9.65/-0.43) |
| [Danish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) | da | [dan](https://en.wikipedia.org/wiki/ISO_639:dan) | ltr | [54.9, 9.4](https://www.openstreetmap.org/?mlat=54.87\&mlon=9.36#map=5/54.87/9.36) |
| [Dendi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) | ddn | [ddn](https://en.wikipedia.org/wiki/ISO_639:ddn) | ltr | [11.7, 3.5](https://www.openstreetmap.org/?mlat=11.67\&mlon=3.49#map=5/11.67/3.49) |
| [German, Standard (1901)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) | de-1901 | [deu](https://en.wikipedia.org/wiki/ISO_639:deu) | ltr | [48.6, 12.5](https://www.openstreetmap.org/?mlat=48.65\&mlon=12.47#map=5/48.65/12.47) |
| German, Standard (1996) | de-1996 | [deu](https://en.wikipedia.org/wiki/ISO_639:deu) | ltr | [48.6, 12.5](https://www.openstreetmap.org/?mlat=48.65\&mlon=12.47#map=5/48.65/12.47) |
| [Dagaare, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) | dga | [dga](https://en.wikipedia.org/wiki/ISO_639:dga) | ltr | [10.4, -2.5](https://www.openstreetmap.org/?mlat=10.42\&mlon=-2.52#map=5/10.42/-2.52) |
| [Dinka, Northeastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) | dip | [dip](https://en.wikipedia.org/wiki/ISO_639:dip) | ltr | [9.3, 31.8](https://www.openstreetmap.org/?mlat=9.28\&mlon=31.84#map=5/9.28/31.84) |
| [Maldivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) | dv | [div](https://en.wikipedia.org/wiki/ISO_639:div) | rtl | [3.8, 73.1](https://www.openstreetmap.org/?mlat=3.83\&mlon=73.07#map=5/3.83/73.07) |
| [Jola-Fonyi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) | dyo | [dyo](https://en.wikipedia.org/wiki/ISO_639:dyo) | ltr | [12.8, -15.7](https://www.openstreetmap.org/?mlat=12.76\&mlon=-15.74#map=5/12.76/-15.74) |
| [Jula](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) | dyu | [dyu](https://en.wikipedia.org/wiki/ISO_639:dyu) | ltr | [10.4, -4.7](https://www.openstreetmap.org/?mlat=10.45\&mlon=-4.72#map=5/10.45/-4.72) |
| [Dzongkha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) | dz | [dzo](https://en.wikipedia.org/wiki/ISO_639:dzo) | ltr | [27.4, 89.6](https://www.openstreetmap.org/?mlat=27.41\&mlon=89.58#map=5/27.41/89.58) |
| [Greek (monotonic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) | el-monoton | [ell](https://en.wikipedia.org/wiki/ISO_639:ell) | ltr | [42.3, 24.9](https://www.openstreetmap.org/?mlat=42.32\&mlon=24.87#map=5/42.32/24.87) |
| Greek (polytonic) | el-polyton | [ell](https://en.wikipedia.org/wiki/ISO_639:ell) | ltr | [42.3, 24.9](https://www.openstreetmap.org/?mlat=42.32\&mlon=24.87#map=5/42.32/24.87) |
| [Maninkakan, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) | man | [emk](https://en.wikipedia.org/wiki/ISO_639:emk) | ltr | [9.3, -10.5](https://www.openstreetmap.org/?mlat=9.33\&mlon=-10.54#map=5/9.33/-10.54) |
| [Romagnolo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) | rgn | [rgn](https://en.wikipedia.org/wiki/ISO_639:rgn) | ltr | [44.2, 11.7](https://www.openstreetmap.org/?mlat=44.23\&mlon=11.72#map=5/44.23/11.72) |
| [English](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) | en | [eng](https://en.wikipedia.org/wiki/ISO_639:eng) | ltr | [53.0, -1.0](https://www.openstreetmap.org/?mlat=53\&mlon=-1#map=5/53/-1) |
| [Esperanto](https://www.ohchr.org/en/human-rights/universal-declaration/translations/esperanto) | eo | [epo](https://en.wikipedia.org/wiki/ISO_639:epo) | ltr | [49.3, 2.8](https://www.openstreetmap.org/?mlat=49.33\&mlon=2.81#map=5/49.33/2.81) |
| [Ese Ejja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ese) | ese | [ese](https://en.wikipedia.org/wiki/ISO_639:ese) | ltr | [-11.0, -66.0](https://www.openstreetmap.org/?mlat=-11\&mlon=-66#map=5/-11/-66) |
| [Estonian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) | et | [ekk](https://en.wikipedia.org/wiki/ISO_639:ekk) | ltr | [58.5, 25.8](https://www.openstreetmap.org/?mlat=58.55\&mlon=25.82#map=5/58.55/25.82) |
| [Basque](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) | eu | [eus](https://en.wikipedia.org/wiki/ISO_639:eus) | ltr | [43.3, -1.3](https://www.openstreetmap.org/?mlat=43.28\&mlon=-1.32#map=5/43.28/-1.32) |
| [Even](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) | eve | [eve](https://en.wikipedia.org/wiki/ISO_639:eve) | ltr | [70.7, 130.9](https://www.openstreetmap.org/?mlat=70.67\&mlon=130.91#map=5/70.67/130.91) |
| [Evenki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) | evn | [evn](https://en.wikipedia.org/wiki/ISO_639:evn) | ltr | [53.9, 108.6](https://www.openstreetmap.org/?mlat=53.85\&mlon=108.63#map=5/53.85/108.63) |
| [Éwé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) | ee | [ewe](https://en.wikipedia.org/wiki/ISO_639:ewe) | ltr | [6.5, 0.8](https://www.openstreetmap.org/?mlat=6.46\&mlon=0.81#map=5/6.46/0.81) |
| [Faroese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) | fo | [fao](https://en.wikipedia.org/wiki/ISO_639:fao) | ltr | [62.1, -6.9](https://www.openstreetmap.org/?mlat=62.07\&mlon=-6.88#map=5/62.07/-6.88) |
| [Fijian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) | fj | [fij](https://en.wikipedia.org/wiki/ISO_639:fij) | ltr | [-18.0, 178.3](https://www.openstreetmap.org/?mlat=-18\&mlon=178.33#map=5/-18/178.33) |
| [Finnish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) | fi | [fin](https://en.wikipedia.org/wiki/ISO_639:fin) | ltr | [64.8, 25.6](https://www.openstreetmap.org/?mlat=64.76\&mlon=25.56#map=5/64.76/25.56) |
| [Finnish, Kven](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fkv) | fkv | [fkv](https://en.wikipedia.org/wiki/ISO_639:fkv) | ltr | [69.7, 21.2](https://www.openstreetmap.org/?mlat=69.7\&mlon=21.21#map=5/69.7/21.21) |
| [Chin, Falam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) | cfm | [cfm](https://en.wikipedia.org/wiki/ISO_639:cfm) | ltr | [23.8, 92.3](https://www.openstreetmap.org/?mlat=23.79\&mlon=92.33#map=5/23.79/92.33) |
| [Fon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) | fon | [fon](https://en.wikipedia.org/wiki/ISO_639:fon) | ltr | [7.2, 1.7](https://www.openstreetmap.org/?mlat=7.15\&mlon=1.66#map=5/7.15/1.66) |
| [French](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) | fr | [fra](https://en.wikipedia.org/wiki/ISO_639:fra) | ltr | [48.0, 2.0](https://www.openstreetmap.org/?mlat=48\&mlon=2#map=5/48/2) |
| [Frisian, Western](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) | fy | [fry](https://en.wikipedia.org/wiki/ISO_639:fry) | ltr | [53.1, 5.9](https://www.openstreetmap.org/?mlat=53.14\&mlon=5.86#map=5/53.14/5.86) |
| [Pular](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) | fuf | [fuf](https://en.wikipedia.org/wiki/ISO_639:fuf) | ltr | [12.2, -12.7](https://www.openstreetmap.org/?mlat=12.18\&mlon=-12.73#map=5/12.18/-12.73) |
| Pular (Adlam) | fuf-Adlm | [fuf](https://en.wikipedia.org/wiki/ISO_639:fuf) | rtl | [12.2, -12.7](https://www.openstreetmap.org/?mlat=12.18\&mlon=-12.73#map=5/12.18/-12.73) |
| [Friulian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) | fur | [fur](https://en.wikipedia.org/wiki/ISO_639:fur) | ltr | [46.1, 13.1](https://www.openstreetmap.org/?mlat=46.15\&mlon=13.05#map=5/46.15/13.05) |
| [Fulfulde, Nigerian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) | fuv | [fuv](https://en.wikipedia.org/wiki/ISO_639:fuv) | ltr | [11.0, 11.1](https://www.openstreetmap.org/?mlat=11\&mlon=11.12#map=5/11/11.12) |
| [Fulfulde, Nigerian (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuv) | fuv | [fuv](https://en.wikipedia.org/wiki/ISO_639:fuv) | ltr | [11.0, 11.1](https://www.openstreetmap.org/?mlat=11\&mlon=11.12#map=5/11/11.12) |
| [Fur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fvr) | fvr | [fvr](https://en.wikipedia.org/wiki/ISO_639:fvr) | ltr | [13.0, 25.0](https://www.openstreetmap.org/?mlat=13\&mlon=25#map=5/13/25) |
| [Ga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) | gaa | [gaa](https://en.wikipedia.org/wiki/ISO_639:gaa) | ltr | [5.7, -0.2](https://www.openstreetmap.org/?mlat=5.65\&mlon=-0.19#map=5/5.65/-0.19) |
| [Gagauz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) | gag | [gag](https://en.wikipedia.org/wiki/ISO_639:gag) | ltr | [44.6, 28.0](https://www.openstreetmap.org/?mlat=44.6\&mlon=28.03#map=5/44.6/28.03) |
| [Chinese, Gan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gan) | gan | [gan](https://en.wikipedia.org/wiki/ISO_639:gan) | ltr | [28.0, 105.0](https://www.openstreetmap.org/?mlat=28\&mlon=105#map=5/28/105) |
| [Oromo, Borana-Arsi-Guji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) | om | [gaz](https://en.wikipedia.org/wiki/ISO_639:gaz) | ltr | [1.1, 37.9](https://www.openstreetmap.org/?mlat=1.06\&mlon=37.88#map=5/1.06/37.88) |
| [Gonja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) | gjn | [gjn](https://en.wikipedia.org/wiki/ISO_639:gjn) | ltr | [8.5, -0.7](https://www.openstreetmap.org/?mlat=8.49\&mlon=-0.73#map=5/8.49/-0.73) |
| [Kpelle, Guinea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pke) | gkp | [gkp](https://en.wikipedia.org/wiki/ISO_639:gkp) | ltr | [7.9, -9.0](https://www.openstreetmap.org/?mlat=7.93\&mlon=-8.99#map=5/7.93/-8.99) |
| [Gaelic, Scottish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) | gd | [gla](https://en.wikipedia.org/wiki/ISO_639:gla) | ltr | [56.8, -5.2](https://www.openstreetmap.org/?mlat=56.76\&mlon=-5.24#map=5/56.76/-5.24) |
| [Nanai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) | gld | [gld](https://en.wikipedia.org/wiki/ISO_639:gld) | ltr | [48.4, 134.8](https://www.openstreetmap.org/?mlat=48.43\&mlon=134.8#map=5/48.43/134.8) |
| [Gaelic, Irish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) | ga | [gle](https://en.wikipedia.org/wiki/ISO_639:gle) | ltr | [53.2, -7.6](https://www.openstreetmap.org/?mlat=53.22\&mlon=-7.62#map=5/53.22/-7.62) |
| [Galician](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) | gl | [glg](https://en.wikipedia.org/wiki/ISO_639:glg) | ltr | [42.2, -7.5](https://www.openstreetmap.org/?mlat=42.24\&mlon=-7.53#map=5/42.24/-7.53) |
| Manx | gv | [glv](https://en.wikipedia.org/wiki/ISO_639:glv) | ltr | [54.2, -4.8](https://www.openstreetmap.org/?mlat=54.23\&mlon=-4.85#map=5/54.23/-4.85) |
| [Guarani, Western Bolivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gnw) | gnw | [gnw](https://en.wikipedia.org/wiki/ISO_639:gnw) | ltr | [-18.0, -62.0](https://www.openstreetmap.org/?mlat=-18\&mlon=-62#map=5/-18/-62) |
| [Alemannisch (Elsassisch)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gsw) | gsw | [gsw](https://en.wikipedia.org/wiki/ISO_639:gsw) | ltr | [48.6, 7.5](https://www.openstreetmap.org/?mlat=48.61\&mlon=7.49#map=5/48.61/7.49) |
| [Wayuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) | guc | [guc](https://en.wikipedia.org/wiki/ISO_639:guc) | ltr | [10.2, -71.8](https://www.openstreetmap.org/?mlat=10.23\&mlon=-71.81#map=5/10.23/-71.81) |
| [Guaraní, Paraguayan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) | gn | [gug](https://en.wikipedia.org/wiki/ISO_639:gug) | ltr | [-25.6, -57.1](https://www.openstreetmap.org/?mlat=-25.61\&mlon=-57.09#map=5/-25.61/-57.09) |
| [Gujarati](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) | gu | [guj](https://en.wikipedia.org/wiki/ISO_639:guj) | ltr | [22.7, 71.1](https://www.openstreetmap.org/?mlat=22.69\&mlon=71.1#map=5/22.69/71.1) |
| [Yanomamö](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) | guu | [guu](https://en.wikipedia.org/wiki/ISO_639:guu) | ltr | [1.7, -64.9](https://www.openstreetmap.org/?mlat=1.68\&mlon=-64.88#map=5/1.68/-64.88) |
| [Guarayu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) | gyr | [gyr](https://en.wikipedia.org/wiki/ISO_639:gyr) | ltr | [-15.8, -61.7](https://www.openstreetmap.org/?mlat=-15.82\&mlon=-61.69#map=5/-15.82/-61.69) |
| [Chinese, Hakka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha1) | hak | [hak](https://en.wikipedia.org/wiki/ISO_639:hak) | ltr | [25.0, 115.0](https://www.openstreetmap.org/?mlat=25\&mlon=115#map=5/25/115) |
| [Haitian Creole French (Kreyol)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) | ht | [hat](https://en.wikipedia.org/wiki/ISO_639:hat) | ltr | [19.0, -73.3](https://www.openstreetmap.org/?mlat=19\&mlon=-73.33#map=5/19/-73.33) |
| [Haitian Creole French (Popular)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) | ht | [hat](https://en.wikipedia.org/wiki/ISO_639:hat) | ltr | [19.0, -73.3](https://www.openstreetmap.org/?mlat=19\&mlon=-73.33#map=5/19/-73.33) |
| [Hausa (Niger)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | ha-NE | [hau](https://en.wikipedia.org/wiki/ISO_639:hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/?mlat=11.15\&mlon=8.78#map=5/11.15/8.78) |
| [Hausa (Nigeria)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | ha-NG | [hau](https://en.wikipedia.org/wiki/ISO_639:hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/?mlat=11.15\&mlon=8.78#map=5/11.15/8.78) |
| [Hausa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hau) | ha | [hau](https://en.wikipedia.org/wiki/ISO_639:hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/?mlat=11.15\&mlon=8.78#map=5/11.15/8.78) |
| [Hawaiian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) | haw | [haw](https://en.wikipedia.org/wiki/ISO_639:haw) | ltr | [19.6, -155.4](https://www.openstreetmap.org/?mlat=19.63\&mlon=-155.43#map=5/19.63/-155.43) |
| [Hmong, Northern Qiandong](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) | hmn | [hea](https://en.wikipedia.org/wiki/ISO_639:hea) | ltr | [26.6, 108.2](https://www.openstreetmap.org/?mlat=26.63\&mlon=108.16#map=5/26.63/108.16) |
| [Hebrew](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) | he | [heb](https://en.wikipedia.org/wiki/ISO_639:heb) | rtl | [31.1, 35.0](https://www.openstreetmap.org/?mlat=31.11\&mlon=35.02#map=5/31.11/35.02) |
| [Hiligaynon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) | hil | [hil](https://en.wikipedia.org/wiki/ISO_639:hil) | ltr | [10.4, 123.0](https://www.openstreetmap.org/?mlat=10.4\&mlon=122.97#map=5/10.4/122.97) |
| [Hindi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) | hi | [hin](https://en.wikipedia.org/wiki/ISO_639:hin) | ltr | [25.0, 77.0](https://www.openstreetmap.org/?mlat=25\&mlon=77#map=5/25/77) |
| [Chin, Matu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) | hlt | [hlt](https://en.wikipedia.org/wiki/ISO_639:hlt) | ltr | [23.3, 92.8](https://www.openstreetmap.org/?mlat=23.31\&mlon=92.83#map=5/23.31/92.83) |
| [Hmong, Southern Qiandong](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) | hms | [hms](https://en.wikipedia.org/wiki/ISO_639:hms) | ltr | [25.7, 108.5](https://www.openstreetmap.org/?mlat=25.66\&mlon=108.53#map=5/25.66/108.53) |
| [Gen](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) | gej | [gej](https://en.wikipedia.org/wiki/ISO_639:gej) | ltr | [6.3, 1.7](https://www.openstreetmap.org/?mlat=6.26\&mlon=1.68#map=5/6.26/1.68) |
| [Hani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) | hni | [hni](https://en.wikipedia.org/wiki/ISO_639:hni) | ltr | [22.7, 102.8](https://www.openstreetmap.org/?mlat=22.68\&mlon=102.85#map=5/22.68/102.85) |
| [Hindustani, Sarnami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) | hns | [hns](https://en.wikipedia.org/wiki/ISO_639:hns) | ltr | [7.7, -58.6](https://www.openstreetmap.org/?mlat=7.67\&mlon=-58.57#map=5/7.67/-58.57) |
| [Croatian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) | hr | [hrv](https://en.wikipedia.org/wiki/ISO_639:hrv) | ltr | [45.2, 16.8](https://www.openstreetmap.org/?mlat=45.2\&mlon=16.83#map=5/45.2/16.83) |
| [Sorbian, Upper](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) | hsb | [hsb](https://en.wikipedia.org/wiki/ISO_639:hsb) | ltr | [51.2, 14.4](https://www.openstreetmap.org/?mlat=51.24\&mlon=14.41#map=5/51.24/14.41) |
| [Huastec (Sierra de Otontepec)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) | hus | [hus](https://en.wikipedia.org/wiki/ISO_639:hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/?mlat=21.62\&mlon=-98.5#map=5/21.62/-98.5) |
| [Chinese, Xiang](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hsn) | hsn | [hsn](https://en.wikipedia.org/wiki/ISO_639:hsn) | ltr | [28.1, 113.0](https://www.openstreetmap.org/?mlat=28.11\&mlon=112.98#map=5/28.11/112.98) |
| [Hungarian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) | hu | [hun](https://en.wikipedia.org/wiki/ISO_639:hun) | ltr | [46.9, 19.7](https://www.openstreetmap.org/?mlat=46.91\&mlon=19.66#map=5/46.91/19.66) |
| [Huastec (Veracruz)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/tenek-huasteco) | hus | [hus](https://en.wikipedia.org/wiki/ISO_639:hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/?mlat=21.62\&mlon=-98.5#map=5/21.62/-98.5) |
| [Huitoto, Murui](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) | huu | [huu](https://en.wikipedia.org/wiki/ISO_639:huu) | ltr | [-1.1, -73.8](https://www.openstreetmap.org/?mlat=-1.14\&mlon=-73.83#map=5/-1.14/-73.83) |
| [Huastec (San Luís Potosí)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) | hus | [hus](https://en.wikipedia.org/wiki/ISO_639:hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/?mlat=21.62\&mlon=-98.5#map=5/21.62/-98.5) |
| [Armenian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) | hy | [hye](https://en.wikipedia.org/wiki/ISO_639:hye) | ltr | [40.0, 45.0](https://www.openstreetmap.org/?mlat=40\&mlon=45#map=5/40/45) |
| [Ibibio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) | ibb | [ibb](https://en.wikipedia.org/wiki/ISO_639:ibb) | ltr | [5.2, 7.9](https://www.openstreetmap.org/?mlat=5.15\&mlon=7.87#map=5/5.15/7.87) |
| [Igbo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) | ig | [ibo](https://en.wikipedia.org/wiki/ISO_639:ibo) | ltr | [4.6, 7.2](https://www.openstreetmap.org/?mlat=4.63\&mlon=7.23#map=5/4.63/7.23) |
| [Ido](https://www.ohchr.org/en/human-rights/universal-declaration/translations/ido) | io | [ido](https://en.wikipedia.org/wiki/ISO_639:ido) | ltr | [-75.0, 20.0](https://www.openstreetmap.org/?mlat=-75\&mlon=20#map=5/-75/20) |
| [Idoma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=idu) | idu | [idu](https://en.wikipedia.org/wiki/ISO_639:idu) | ltr | [7.2, 8.2](https://www.openstreetmap.org/?mlat=7.19\&mlon=8.15#map=5/7.19/8.15) |
| [Nuosu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=iii) | ii | [iii](https://en.wikipedia.org/wiki/ISO_639:iii) | ltr | [28.2, 102.1](https://www.openstreetmap.org/?mlat=28.19\&mlon=102.12#map=5/28.19/102.12) |
| [Ijo, Southeast](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ijs) | ijs | [ijs](https://en.wikipedia.org/wiki/ISO_639:ijs) | ltr | [5.0, 6.3](https://www.openstreetmap.org/?mlat=5.03\&mlon=6.33#map=5/5.03/6.33) |
| [Inuktitut, Eastern Canadian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) | iu | [ike](https://en.wikipedia.org/wiki/ISO_639:ike) | ltr | [62.2, -75.6](https://www.openstreetmap.org/?mlat=62.17\&mlon=-75.61#map=5/62.17/-75.61) |
| [Ilocano](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) | ilo | [ilo](https://en.wikipedia.org/wiki/ISO_639:ilo) | ltr | [15.9, 121.0](https://www.openstreetmap.org/?mlat=15.94\&mlon=120.99#map=5/15.94/120.99) |
| [Interlingua](https://www.ohchr.org/en/human-rights/universal-declaration/translations/interlingua) | ia | [ina](https://en.wikipedia.org/wiki/ISO_639:ina) | ltr | [48.2, 2.6](https://www.openstreetmap.org/?mlat=48.2\&mlon=2.62#map=5/48.2/2.62) |
| [Indonesian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) | id | [ind](https://en.wikipedia.org/wiki/ISO_639:ind) | ltr | [-7.3, 109.7](https://www.openstreetmap.org/?mlat=-7.33\&mlon=109.72#map=5/-7.33/109.72) |
| [Icelandic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) | is | [isl](https://en.wikipedia.org/wiki/ISO_639:isl) | ltr | [63.5, -19.0](https://www.openstreetmap.org/?mlat=63.48\&mlon=-19.02#map=5/63.48/-19.02) |
| [Italian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) | it | [ita](https://en.wikipedia.org/wiki/ISO_639:ita) | ltr | [43.0, 12.7](https://www.openstreetmap.org/?mlat=43.05\&mlon=12.65#map=5/43.05/12.65) |
| [Javanese (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) | jv | [jav](https://en.wikipedia.org/wiki/ISO_639:jav) | ltr | [-0.6, 110.9](https://www.openstreetmap.org/?mlat=-0.57\&mlon=110.89#map=5/-0.57/110.89) |
| Javanese (Javanese) | jv-Java | [jav](https://en.wikipedia.org/wiki/ISO_639:jav) | ltr | [-0.6, 110.9](https://www.openstreetmap.org/?mlat=-0.57\&mlon=110.89#map=5/-0.57/110.89) |
| [Shuar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) | jiv | [jiv](https://en.wikipedia.org/wiki/ISO_639:jiv) | ltr | [-3.5, -78.2](https://www.openstreetmap.org/?mlat=-3.45\&mlon=-78.19#map=5/-3.45/-78.19) |
| [Japanese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) | ja | [jpn](https://en.wikipedia.org/wiki/ISO_639:jpn) | ltr | [35.0, 135.0](https://www.openstreetmap.org/?mlat=35\&mlon=135#map=5/35/135) |
| [Japanese (Osaka)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=obe) | ja | [jpn](https://en.wikipedia.org/wiki/ISO_639:jpn) | ltr | [34.7, 135.5](https://www.openstreetmap.org/?mlat=34.69\&mlon=135.5#map=5/34.69/135.5) |
| [Japanese (Tokyo)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=to1) | ja | [jpn](https://en.wikipedia.org/wiki/ISO_639:jpn) | ltr | [35.7, 139.7](https://www.openstreetmap.org/?mlat=35.68\&mlon=139.68#map=5/35.68/139.68) |
| [Karakalpak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaa) | kaa | [kaa](https://en.wikipedia.org/wiki/ISO_639:kaa) | ltr | [42.5, 59.6](https://www.openstreetmap.org/?mlat=42.47\&mlon=59.6#map=5/42.47/59.6) |
| [Inuktitut, Greenlandic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) | kl | [kal](https://en.wikipedia.org/wiki/ISO_639:kal) | ltr | [69.4, -52.9](https://www.openstreetmap.org/?mlat=69.38\&mlon=-52.86#map=5/69.38/-52.86) |
| [Kannada](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) | kn | [kan](https://en.wikipedia.org/wiki/ISO_639:kan) | ltr | [13.6, 76.1](https://www.openstreetmap.org/?mlat=13.59\&mlon=76.12#map=5/13.59/76.12) |
| [Georgian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) | ka | [kat](https://en.wikipedia.org/wiki/ISO_639:kat) | ltr | [39.4, 45.8](https://www.openstreetmap.org/?mlat=39.37\&mlon=45.81#map=5/39.37/45.81) |
| [Kazakh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) | kk | [kaz](https://en.wikipedia.org/wiki/ISO_639:kaz) | ltr | [41.9, 65.8](https://www.openstreetmap.org/?mlat=41.87\&mlon=65.77#map=5/41.87/65.77) |
| [Kabardian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) | kbd | [kbd](https://en.wikipedia.org/wiki/ISO_639:kbd) | ltr | [43.5, 43.4](https://www.openstreetmap.org/?mlat=43.51\&mlon=43.39#map=5/43.51/43.39) |
| [Kabiyé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) | kbp | [kbp](https://en.wikipedia.org/wiki/ISO_639:kbp) | ltr | [9.0, 0.5](https://www.openstreetmap.org/?mlat=8.97\&mlon=0.5#map=5/8.97/0.5) |
| [Makonde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) | kde | [kde](https://en.wikipedia.org/wiki/ISO_639:kde) | ltr | [-11.0, 39.5](https://www.openstreetmap.org/?mlat=-10.99\&mlon=39.51#map=5/-10.99/39.51) |
| [Tem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) | kdh | [kdh](https://en.wikipedia.org/wiki/ISO_639:kdh) | ltr | [8.0, 1.0](https://www.openstreetmap.org/?mlat=8\&mlon=1#map=5/8/1) |
| [Kabuverdianu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) | kea | [kea](https://en.wikipedia.org/wiki/ISO_639:kea) | ltr | [15.1, -23.6](https://www.openstreetmap.org/?mlat=15.06\&mlon=-23.61#map=5/15.06/-23.61) |
| [Q'eqchi'](https://www.ohchr.org/en/human-rights/universal-declaration/translations/qechikekchi) | kek | [kek](https://en.wikipedia.org/wiki/ISO_639:kek) | ltr | [15.4, -89.3](https://www.openstreetmap.org/?mlat=15.38\&mlon=-89.25#map=5/15.38/-89.25) |
| [Khasi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) | kha | [kha](https://en.wikipedia.org/wiki/ISO_639:kha) | ltr | [25.0, 92.0](https://www.openstreetmap.org/?mlat=24.98\&mlon=92#map=5/24.98/92) |
| [Mongolian, Halh (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) | mn-Cyrl | [khk](https://en.wikipedia.org/wiki/ISO_639:khk) | ltr | [48.3, 106.3](https://www.openstreetmap.org/?mlat=48.32\&mlon=106.29#map=5/48.32/106.29) |
| Mongolian, Halh (Mongolian) | mn-Mong | [khk](https://en.wikipedia.org/wiki/ISO_639:khk) | ltr | [48.3, 106.3](https://www.openstreetmap.org/?mlat=48.32\&mlon=106.29#map=5/48.32/106.29) |
| [Khmer, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) | km | [khm](https://en.wikipedia.org/wiki/ISO_639:khm) | ltr | [12.1, 105.0](https://www.openstreetmap.org/?mlat=12.05\&mlon=105.02#map=5/12.05/105.02) |
| [Rwanda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) | rw | [kin](https://en.wikipedia.org/wiki/ISO_639:kin) | ltr | [-1.6, 29.6](https://www.openstreetmap.org/?mlat=-1.57\&mlon=29.64#map=5/-1.57/29.64) |
| [Kirghiz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) | ky | [kir](https://en.wikipedia.org/wiki/ISO_639:kir) | ltr | [42.0, 74.0](https://www.openstreetmap.org/?mlat=42\&mlon=74#map=5/42/74) |
| [Khakas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) | kjh | [kjh](https://en.wikipedia.org/wiki/ISO_639:kjh) | ltr | [50.7, 107.2](https://www.openstreetmap.org/?mlat=50.74\&mlon=107.17#map=5/50.74/107.17) |
| Khün | kkh-Lana | [kkh](https://en.wikipedia.org/wiki/ISO_639:kkh) | ltr | [20.7, 99.5](https://www.openstreetmap.org/?mlat=20.7\&mlon=99.5#map=5/20.7/99.5) |
| [Mbundu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) | kmb | [kmb](https://en.wikipedia.org/wiki/ISO_639:kmb) | ltr | [-9.0, 14.9](https://www.openstreetmap.org/?mlat=-8.98\&mlon=14.89#map=5/-8.98/14.89) |
| [Kurdish, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | ku | [kmr](https://en.wikipedia.org/wiki/ISO_639:kmr) | ltr | [37.0, 43.0](https://www.openstreetmap.org/?mlat=37\&mlon=43#map=5/37/43) |
| [Kanuri, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) | kr | [knc](https://en.wikipedia.org/wiki/ISO_639:knc) | ltr | [11.9, 16.4](https://www.openstreetmap.org/?mlat=11.89\&mlon=16.39#map=5/11.89/16.39) |
| [Koongo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) | kg | [kng](https://en.wikipedia.org/wiki/ISO_639:kng) | ltr | [-5.6, 14.5](https://www.openstreetmap.org/?mlat=-5.58\&mlon=14.48#map=5/-5.58/14.48) |
| [Koongo (Angola)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) | kg-AO | [kng](https://en.wikipedia.org/wiki/ISO_639:kng) | ltr | [-5.6, 14.5](https://www.openstreetmap.org/?mlat=-5.58\&mlon=14.48#map=5/-5.58/14.48) |
| [Komi-Permyak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) | koi | [koi](https://en.wikipedia.org/wiki/ISO_639:koi) | ltr | [59.7, 54.8](https://www.openstreetmap.org/?mlat=59.66\&mlon=54.8#map=5/59.66/54.8) |
| [Konjo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) | koo | [koo](https://en.wikipedia.org/wiki/ISO_639:koo) | ltr | [0.3, 29.9](https://www.openstreetmap.org/?mlat=0.32\&mlon=29.87#map=5/0.32/29.87) |
| [Korean](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) | ko | [kor](https://en.wikipedia.org/wiki/ISO_639:kor) | ltr | [37.5, 128.0](https://www.openstreetmap.org/?mlat=37.5\&mlon=128#map=5/37.5/128) |
| [Kaonde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) | kqn | [kqn](https://en.wikipedia.org/wiki/ISO_639:kqn) | ltr | [-12.4, 25.8](https://www.openstreetmap.org/?mlat=-12.41\&mlon=25.76#map=5/-12.41/25.76) |
| [Kissi, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqs) | kqs | [kqs](https://en.wikipedia.org/wiki/ISO_639:kqs) | ltr | [9.2, -10.1](https://www.openstreetmap.org/?mlat=9.183333\&mlon=-10.1#map=5/9.183333/-10.1) |
| [Krio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) | kri | [kri](https://en.wikipedia.org/wiki/ISO_639:kri) | ltr | [10.9, -14.3](https://www.openstreetmap.org/?mlat=10.88\&mlon=-14.32#map=5/10.88/-14.32) |
| [Karelian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) | krl | [krl](https://en.wikipedia.org/wiki/ISO_639:krl) | ltr | [65.2, 30.9](https://www.openstreetmap.org/?mlat=65.17\&mlon=30.87#map=5/65.17/30.87) |
| [Kituba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) | ktu | [ktu](https://en.wikipedia.org/wiki/ISO_639:ktu) | ltr | [-2.3, 17.1](https://www.openstreetmap.org/?mlat=-2.3\&mlon=17.15#map=5/-2.3/17.15) |
| [Awa-Cuaiquer](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) | kwi | [kwi](https://en.wikipedia.org/wiki/ISO_639:kwi) | ltr | [1.2, -78.3](https://www.openstreetmap.org/?mlat=1.22\&mlon=-78.34#map=5/1.22/-78.34) |
| [Ladino](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) | lad | [lad](https://en.wikipedia.org/wiki/ISO_639:lad) | ltr | [41.2, 28.7](https://www.openstreetmap.org/?mlat=41.2\&mlon=28.66#map=5/41.2/28.66) |
| [Lao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) | lo | [lao](https://en.wikipedia.org/wiki/ISO_639:lao) | ltr | [16.1, 104.6](https://www.openstreetmap.org/?mlat=16.07\&mlon=104.57#map=5/16.07/104.57) |
| [Latin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) | la | [lat](https://en.wikipedia.org/wiki/ISO_639:lat) | ltr | [41.9, 12.4](https://www.openstreetmap.org/?mlat=41.9\&mlon=12.45#map=5/41.9/12.45) |
| [Latin (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) | la | [lat](https://en.wikipedia.org/wiki/ISO_639:lat) | ltr | [41.9, 12.4](https://www.openstreetmap.org/?mlat=41.9\&mlon=12.45#map=5/41.9/12.45) |
| [Latvian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | lv | [lvs](https://en.wikipedia.org/wiki/ISO_639:lvs) | ltr | [56.8, 24.3](https://www.openstreetmap.org/?mlat=56.83\&mlon=24.31#map=5/56.83/24.31) |
| [Limba, West-Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) | lia | [lia](https://en.wikipedia.org/wiki/ISO_639:lia) | ltr | [9.5, -12.3](https://www.openstreetmap.org/?mlat=9.52\&mlon=-12.31#map=5/9.52/-12.31) |
| [Ligurian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) | lij | [lij](https://en.wikipedia.org/wiki/ISO_639:lij) | ltr | [44.1, 7.9](https://www.openstreetmap.org/?mlat=44.08\&mlon=7.91#map=5/44.08/7.91) |
| [Lingala](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) | ln | [lin](https://en.wikipedia.org/wiki/ISO_639:lin) | ltr | [1.4, 19.8](https://www.openstreetmap.org/?mlat=1.4\&mlon=19.78#map=5/1.4/19.78) |
| Lingala (tones) | ln | [lin](https://en.wikipedia.org/wiki/ISO_639:lin) | ltr | [1.4, 19.8](https://www.openstreetmap.org/?mlat=1.4\&mlon=19.78#map=5/1.4/19.78) |
| [Lithuanian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) | lt | [lit](https://en.wikipedia.org/wiki/ISO_639:lit) | ltr | [55.1, 24.0](https://www.openstreetmap.org/?mlat=55.14\&mlon=23.96#map=5/55.14/23.96) |
| [Ladin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) | lld | [lld](https://en.wikipedia.org/wiki/ISO_639:lld) | ltr | [46.6, 11.9](https://www.openstreetmap.org/?mlat=46.61\&mlon=11.89#map=5/46.61/11.89) |
| [Occitan (Languedocien)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) | oc | [oci](https://en.wikipedia.org/wiki/ISO_639:oci) | ltr | [43.9, 2.5](https://www.openstreetmap.org/?mlat=43.89\&mlon=2.54#map=5/43.89/2.54) |
| [Lamnso'](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) | lns | [lns](https://en.wikipedia.org/wiki/ISO_639:lns) | ltr | [6.4, 11.1](https://www.openstreetmap.org/?mlat=6.4\&mlon=11.07#map=5/6.4/11.07) |
| [Lobi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) | lob | [lob](https://en.wikipedia.org/wiki/ISO_639:lob) | ltr | [10.0, -3.3](https://www.openstreetmap.org/?mlat=9.96\&mlon=-3.34#map=5/9.96/-3.34) |
| [Otuho](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) | lot | [lot](https://en.wikipedia.org/wiki/ISO_639:lot) | ltr | [4.2, 32.7](https://www.openstreetmap.org/?mlat=4.16\&mlon=32.66#map=5/4.16/32.66) |
| [Lozi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) | loz | [loz](https://en.wikipedia.org/wiki/ISO_639:loz) | ltr | [-17.7, 24.7](https://www.openstreetmap.org/?mlat=-17.71\&mlon=24.74#map=5/-17.71/24.74) |
| [Luxembourgeois](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) | lb | [ltz](https://en.wikipedia.org/wiki/ISO_639:ltz) | ltr | [49.7, 6.2](https://www.openstreetmap.org/?mlat=49.68\&mlon=6.15#map=5/49.68/6.15) |
| [Luba-Kasai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) | lua | [lua](https://en.wikipedia.org/wiki/ISO_639:lua) | ltr | [-5.7, 22.4](https://www.openstreetmap.org/?mlat=-5.73\&mlon=22.44#map=5/-5.73/22.44) |
| [Luvale](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) | lue | [lue](https://en.wikipedia.org/wiki/ISO_639:lue) | ltr | [-13.5, 22.3](https://www.openstreetmap.org/?mlat=-13.54\&mlon=22.29#map=5/-13.54/22.29) |
| [Ganda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) | lg | [lug](https://en.wikipedia.org/wiki/ISO_639:lug) | ltr | [0.7, 32.1](https://www.openstreetmap.org/?mlat=0.67\&mlon=32.15#map=5/0.67/32.15) |
| [Lunda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) | lun | [lun](https://en.wikipedia.org/wiki/ISO_639:lun) | ltr | [-11.2, 23.9](https://www.openstreetmap.org/?mlat=-11.18\&mlon=23.87#map=5/-11.18/23.87) |
| [Mizo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) | lus | [lus](https://en.wikipedia.org/wiki/ISO_639:lus) | ltr | [22.6, 92.6](https://www.openstreetmap.org/?mlat=22.61\&mlon=92.62#map=5/22.61/92.62) |
| [Madura](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) | mad | [mad](https://en.wikipedia.org/wiki/ISO_639:mad) | ltr | [-7.0, 113.0](https://www.openstreetmap.org/?mlat=-7\&mlon=113#map=5/-7/113) |
| [Magahi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) | mag | [mag](https://en.wikipedia.org/wiki/ISO_639:mag) | ltr | [25.1, 85.3](https://www.openstreetmap.org/?mlat=25.09\&mlon=85.33#map=5/25.09/85.33) |
| [Marshallese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) | mh | [mah](https://en.wikipedia.org/wiki/ISO_639:mah) | ltr | [3.1, 170.5](https://www.openstreetmap.org/?mlat=3.13\&mlon=170.46#map=5/3.13/170.46) |
| Maithili | mai | [mai](https://en.wikipedia.org/wiki/ISO_639:mai) | ltr | [26.4, 86.2](https://www.openstreetmap.org/?mlat=26.38\&mlon=86.22#map=5/26.38/86.22) |
| [Malayalam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | ml | [mal](https://en.wikipedia.org/wiki/ISO_639:mal) | ltr | [9.6, 76.8](https://www.openstreetmap.org/?mlat=9.59\&mlon=76.77#map=5/9.59/76.77) |
| [Malayalam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | ml | [mal](https://en.wikipedia.org/wiki/ISO_639:mal) | ltr | [9.6, 76.8](https://www.openstreetmap.org/?mlat=9.59\&mlon=76.77#map=5/9.59/76.77) |
| [Mam, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) | mam | [mam](https://en.wikipedia.org/wiki/ISO_639:mam) | ltr | [14.8, -91.7](https://www.openstreetmap.org/?mlat=14.8\&mlon=-91.72#map=5/14.8/-91.72) |
| [Marathi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) | mr | [mar](https://en.wikipedia.org/wiki/ISO_639:mar) | ltr | [17.9, 76.7](https://www.openstreetmap.org/?mlat=17.93\&mlon=76.67#map=5/17.93/76.67) |
| [Mazahua Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) | maz | [maz](https://en.wikipedia.org/wiki/ISO_639:maz) | ltr | [19.7, -100.0](https://www.openstreetmap.org/?mlat=19.74\&mlon=-100.02#map=5/19.74/-100.02) |
| [Sharanahua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) | mcd | [mcd](https://en.wikipedia.org/wiki/ISO_639:mcd) | ltr | [-9.9, -71.1](https://www.openstreetmap.org/?mlat=-9.86\&mlon=-71.12#map=5/-9.86/-71.12) |
| [Matsés](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) | mcf | [mcf](https://en.wikipedia.org/wiki/ISO_639:mcf) | ltr | [-5.7, -72.6](https://www.openstreetmap.org/?mlat=-5.74\&mlon=-72.63#map=5/-5.74/-72.63) |
| [Mende](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) | men | [men](https://en.wikipedia.org/wiki/ISO_639:men) | ltr | [7.9, -11.0](https://www.openstreetmap.org/?mlat=7.91\&mlon=-10.99#map=5/7.91/-10.99) |
| [Moba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfq) | mfq | [mfq](https://en.wikipedia.org/wiki/ISO_639:mfq) | ltr | [8.0, 1.0](https://www.openstreetmap.org/?mlat=8\&mlon=1#map=5/8/1) |
| [Micmac](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) | mic | [mic](https://en.wikipedia.org/wiki/ISO_639:mic) | ltr | [46.0, -65.6](https://www.openstreetmap.org/?mlat=45.99\&mlon=-65.58#map=5/45.99/-65.58) |
| [Minangkabau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) | min | [min](https://en.wikipedia.org/wiki/ISO_639:min) | ltr | [-0.9, 100.4](https://www.openstreetmap.org/?mlat=-0.9\&mlon=100.44#map=5/-0.9/100.44) |
| [Mískito](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) | miq | [miq](https://en.wikipedia.org/wiki/ISO_639:miq) | ltr | [15.2, -84.3](https://www.openstreetmap.org/?mlat=15.16\&mlon=-84.29#map=5/15.16/-84.29) |
| [Macedonian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) | mk | [mkd](https://en.wikipedia.org/wiki/ISO_639:mkd) | ltr | [41.6, 21.8](https://www.openstreetmap.org/?mlat=41.6\&mlon=21.79#map=5/41.6/21.79) |
| [Maltese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) | mt | [mlt](https://en.wikipedia.org/wiki/ISO_639:mlt) | ltr | [35.9, 14.4](https://www.openstreetmap.org/?mlat=35.89\&mlon=14.45#map=5/35.89/14.45) |
| Malay (Arabic) | zlm-Arab | [zlm](https://en.wikipedia.org/wiki/ISO_639:zlm) | rtl | [1.9, 103.0](https://www.openstreetmap.org/?mlat=1.86\&mlon=103#map=5/1.86/103) |
| [Malay (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) | zlm-Latn | [zlm](https://en.wikipedia.org/wiki/ISO_639:zlm) | ltr | [1.9, 103.0](https://www.openstreetmap.org/?mlat=1.86\&mlon=103#map=5/1.86/103) |
| Mon | mnw | [mnw](https://en.wikipedia.org/wiki/ISO_639:mnw) | ltr | [10.0, 100.0](https://www.openstreetmap.org/?mlat=10\&mlon=100#map=5/10/100) |
| [Moro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mor) | mor | [mor](https://en.wikipedia.org/wiki/ISO_639:mor) | ltr | [11.0, 30.0](https://www.openstreetmap.org/?mlat=11\&mlon=30#map=5/11/30) |
| [Mòoré](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) | mos | [mos](https://en.wikipedia.org/wiki/ISO_639:mos) | ltr | [10.4, -1.2](https://www.openstreetmap.org/?mlat=10.45\&mlon=-1.17#map=5/10.45/-1.17) |
| [Maori](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) | mi | [mri](https://en.wikipedia.org/wiki/ISO_639:mri) | ltr | [-38.3, 176.5](https://www.openstreetmap.org/?mlat=-38.29\&mlon=176.54#map=5/-38.29/176.54) |
| [Mixe, Totontepec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) | mto | [mto](https://en.wikipedia.org/wiki/ISO_639:mto) | ltr | [17.2, -96.0](https://www.openstreetmap.org/?mlat=17.22\&mlon=-96.02#map=5/17.22/-96.02) |
| [Wichí Lhamtés Nocten](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mtp) | mtp | [mtp](https://en.wikipedia.org/wiki/ISO_639:mtp) | ltr | [-22.0, -64.0](https://www.openstreetmap.org/?mlat=-22\&mlon=-64#map=5/-22/-64) |
| [Mozarabic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) | mxi | [mxi](https://en.wikipedia.org/wiki/ISO_639:mxi) | ltr | [37.9, -1.8](https://www.openstreetmap.org/?mlat=37.88\&mlon=-1.8#map=5/37.88/-1.8) |
| [Mixtec, Metlatónoc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) | mxv | [mxv](https://en.wikipedia.org/wiki/ISO_639:mxv) | ltr | [17.1, -98.3](https://www.openstreetmap.org/?mlat=17.05\&mlon=-98.35#map=5/17.05/-98.35) |
| [Burmese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) | my | [mya](https://en.wikipedia.org/wiki/ISO_639:mya) | ltr | [20.8, 94.0](https://www.openstreetmap.org/?mlat=20.79\&mlon=93.97#map=5/20.79/93.97) |
| [Mazatec, Ixcatlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) | mzi | [mzi](https://en.wikipedia.org/wiki/ISO_639:mzi) | ltr | [18.1, -96.6](https://www.openstreetmap.org/?mlat=18.15\&mlon=-96.57#map=5/18.15/-96.57) |
| [Chinese, Min Nan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nan) | nan | [nan](https://en.wikipedia.org/wiki/ISO_639:nan) | ltr | [25.0, 116.0](https://www.openstreetmap.org/?mlat=25\&mlon=116#map=5/25/116) |
| [Navajo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) | nv | [nav](https://en.wikipedia.org/wiki/ISO_639:nav) | ltr | [36.2, -110.1](https://www.openstreetmap.org/?mlat=36.21\&mlon=-110.08#map=5/36.21/-110.08) |
| [Nyemba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) | nba | [nba](https://en.wikipedia.org/wiki/ISO_639:nba) | ltr | [-15.7, 18.3](https://www.openstreetmap.org/?mlat=-15.71\&mlon=18.25#map=5/-15.71/18.25) |
| [Ndebele](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) | nr | [nbl](https://en.wikipedia.org/wiki/ISO_639:nbl) | ltr | [-25.6, 29.1](https://www.openstreetmap.org/?mlat=-25.63\&mlon=29.05#map=5/-25.63/29.05) |
| [Ndonga](https://www.ohchr.org/en/human-rights/universal-declaration/translations/oshiwambo-ndonga) | ng | [ndo](https://en.wikipedia.org/wiki/ISO_639:ndo) | ltr | [-17.6, 19.2](https://www.openstreetmap.org/?mlat=-17.64\&mlon=19.16#map=5/-17.64/19.16) |
| [Saxon, Low](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) | nds | [nds](https://en.wikipedia.org/wiki/ISO_639:nds) | ltr | [50.8, 6.1](https://www.openstreetmap.org/?mlat=50.77\&mlon=6.09#map=5/50.77/6.09) |
| [Nepali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) | ne | [npi](https://en.wikipedia.org/wiki/ISO_639:npi) | ltr | [27.5, 85.0](https://www.openstreetmap.org/?mlat=27.5\&mlon=85#map=5/27.5/85) |
| [Nahuatl, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) | nhn | [nhn](https://en.wikipedia.org/wiki/ISO_639:nhn) | ltr | [19.1, -98.3](https://www.openstreetmap.org/?mlat=19.12\&mlon=-98.3#map=5/19.12/-98.3) |
| [Nganasan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) | nio | [nio](https://en.wikipedia.org/wiki/ISO_639:nio) | ltr | [73.1, 86.2](https://www.openstreetmap.org/?mlat=73.14\&mlon=86.21#map=5/73.14/86.21) |
| [Niue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=niu) | niu | [niu](https://en.wikipedia.org/wiki/ISO_639:niu) | ltr | [-19.1, -169.9](https://www.openstreetmap.org/?mlat=-19.05\&mlon=-169.92#map=5/-19.05/-169.92) |
| [Gilyak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Nivkh) | niv | [niv](https://en.wikipedia.org/wiki/ISO_639:niv) | ltr | [52.6, 140.7](https://www.openstreetmap.org/?mlat=52.59\&mlon=140.68#map=5/52.59/140.68) |
| [Naga, Ao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) | njo | [njo](https://en.wikipedia.org/wiki/ISO_639:njo) | ltr | [26.3, 94.4](https://www.openstreetmap.org/?mlat=26.32\&mlon=94.38#map=5/26.32/94.38) |
| [Kulango, Bouna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) | nku | [nku](https://en.wikipedia.org/wiki/ISO_639:nku) | ltr | [8.5, -2.8](https://www.openstreetmap.org/?mlat=8.46\&mlon=-2.75#map=5/8.46/-2.75) |
| [Dutch](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) | nl | [nld](https://en.wikipedia.org/wiki/ISO_639:nld) | ltr | [52.0, 5.0](https://www.openstreetmap.org/?mlat=52\&mlon=5#map=5/52/5) |
| [Norwegian, Nynorsk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) | nn | [nno](https://en.wikipedia.org/wiki/ISO_639:nno) | ltr | [61.0, 11.0](https://www.openstreetmap.org/?mlat=61\&mlon=11#map=5/61/11) |
| [Norwegian, Bokmål](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) | nb | [nob](https://en.wikipedia.org/wiki/ISO_639:nob) | ltr | [61.0, 8.0](https://www.openstreetmap.org/?mlat=61\&mlon=8#map=5/61/8) |
| [Nomatsiguenga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) | not | [not](https://en.wikipedia.org/wiki/ISO_639:not) | ltr | [-11.5, -74.4](https://www.openstreetmap.org/?mlat=-11.53\&mlon=-74.44#map=5/-11.53/-74.44) |
| [Sotho, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) | nso | [nso](https://en.wikipedia.org/wiki/ISO_639:nso) | ltr | [-24.8, 29.5](https://www.openstreetmap.org/?mlat=-24.8\&mlon=29.47#map=5/-24.8/29.47) |
| [Nyanja (Chechewa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) | ny | [nya](https://en.wikipedia.org/wiki/ISO_639:nya) | ltr | [-14.8, 32.8](https://www.openstreetmap.org/?mlat=-14.8\&mlon=32.81#map=5/-14.8/32.81) |
| [Nyanja (Chinyanja)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) | ny | [nya](https://en.wikipedia.org/wiki/ISO_639:nya) | ltr | [-14.8, 32.8](https://www.openstreetmap.org/?mlat=-14.8\&mlon=32.81#map=5/-14.8/32.81) |
| [Nyamwezi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) | nym | [nym](https://en.wikipedia.org/wiki/ISO_639:nym) | ltr | [-5.1, 32.9](https://www.openstreetmap.org/?mlat=-5.09\&mlon=32.94#map=5/-5.09/32.94) |
| [Nyankore](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) | nyn | [nyn](https://en.wikipedia.org/wiki/ISO_639:nyn) | ltr | [-0.5, 30.6](https://www.openstreetmap.org/?mlat=-0.46\&mlon=30.55#map=5/-0.46/30.55) |
| [Nzema](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) | nzi | [nzi](https://en.wikipedia.org/wiki/ISO_639:nzi) | ltr | [5.2, -2.8](https://www.openstreetmap.org/?mlat=5.18\&mlon=-2.81#map=5/5.18/-2.81) |
| [Orok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) | oaa | [oaa](https://en.wikipedia.org/wiki/ISO_639:oaa) | ltr | [49.4, 143.1](https://www.openstreetmap.org/?mlat=49.36\&mlon=143.13#map=5/49.36/143.13) |
| [Francoprovençal (Fribourg)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) | frp | [frp](https://en.wikipedia.org/wiki/ISO_639:frp) | ltr | [46.8, 7.2](https://www.openstreetmap.org/?mlat=46.8\&mlon=7.17#map=5/46.8/7.17) |
| [Francoprovençal (Savoie)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) | frp | [frp](https://en.wikipedia.org/wiki/ISO_639:frp) | ltr | [45.6, 6.8](https://www.openstreetmap.org/?mlat=45.59\&mlon=6.76#map=5/45.59/6.76) |
| [Francoprovençal (Vaud)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) | frp | [frp](https://en.wikipedia.org/wiki/ISO_639:frp) | ltr | [46.4, 7.1](https://www.openstreetmap.org/?mlat=46.36\&mlon=7.08#map=5/46.36/7.08) |
| [Francoprovençal (Valais)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) | frp | [frp](https://en.wikipedia.org/wiki/ISO_639:frp) | ltr | [46.2, 7.4](https://www.openstreetmap.org/?mlat=46.18\&mlon=7.4#map=5/46.18/7.4) |
| [Ojibwa, Northwestern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) | ojb | [ojb](https://en.wikipedia.org/wiki/ISO_639:ojb) | ltr | [51.6, -87.8](https://www.openstreetmap.org/?mlat=51.62\&mlon=-87.79#map=5/51.62/-87.79) |
| [Okiek](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) | oki | [oki](https://en.wikipedia.org/wiki/ISO_639:oki) | ltr | [-2.8, 36.6](https://www.openstreetmap.org/?mlat=-2.78\&mlon=36.6#map=5/-2.78/36.6) |
| [Oroqen](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) | orh | [orh](https://en.wikipedia.org/wiki/ISO_639:orh) | ltr | [50.0, 125.0](https://www.openstreetmap.org/?mlat=50\&mlon=125#map=5/50/125) |
| [Osetin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) | os | [oss](https://en.wikipedia.org/wiki/ISO_639:oss) | ltr | [41.8, 43.3](https://www.openstreetmap.org/?mlat=41.79\&mlon=43.27#map=5/41.79/43.27) |
| [Otomi, Mezquital](https://www.ohchr.org/en/human-rights/universal-declaration/translations/nahnu-otomi) | ote | [ote](https://en.wikipedia.org/wiki/ISO_639:ote) | ltr | [20.2, -99.6](https://www.openstreetmap.org/?mlat=20.23\&mlon=-99.56#map=5/20.23/-99.56) |
| [Pampangan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) | pam | [pam](https://en.wikipedia.org/wiki/ISO_639:pam) | ltr | [15.0, 120.5](https://www.openstreetmap.org/?mlat=14.96\&mlon=120.5#map=5/14.96/120.5) |
| [Panjabi, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) | pa | [pan](https://en.wikipedia.org/wiki/ISO_639:pan) | ltr | [30.0, 75.7](https://www.openstreetmap.org/?mlat=30.04\&mlon=75.67#map=5/30.04/75.67) |
| [Papiamentu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) | pap | [pap](https://en.wikipedia.org/wiki/ISO_639:pap) | ltr | [12.5, -69.9](https://www.openstreetmap.org/?mlat=12.48\&mlon=-69.94#map=5/12.48/-69.94) |
| [Palauan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) | pau | [pau](https://en.wikipedia.org/wiki/ISO_639:pau) | ltr | [7.2, 134.5](https://www.openstreetmap.org/?mlat=7.17\&mlon=134.5#map=5/7.17/134.5) |
| [Páez](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) | pbb | [pbb](https://en.wikipedia.org/wiki/ISO_639:pbb) | ltr | [2.6, -76.3](https://www.openstreetmap.org/?mlat=2.62\&mlon=-76.31#map=5/2.62/-76.31) |
| [Pashto, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) | ps | [pbu](https://en.wikipedia.org/wiki/ISO_639:pbu) | rtl | [35.0, 71.3](https://www.openstreetmap.org/?mlat=35\&mlon=71.33#map=5/35/71.33) |
| [Picard](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) | pcd | [pcd](https://en.wikipedia.org/wiki/ISO_639:pcd) | ltr | [50.3, 3.3](https://www.openstreetmap.org/?mlat=50.28\&mlon=3.25#map=5/50.28/3.25) |
| [Pidgin, Nigerian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) | pcm | [pcm](https://en.wikipedia.org/wiki/ISO_639:pcm) | ltr | [9.7, 4.2](https://www.openstreetmap.org/?mlat=9.66\&mlon=4.21#map=5/9.66/4.21) |
| [Farsi, Western](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) | fa | [pes](https://en.wikipedia.org/wiki/ISO_639:pes) | rtl | [28.7, 55.2](https://www.openstreetmap.org/?mlat=28.66\&mlon=55.16#map=5/28.66/55.16) |
| [Dari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) | fa-AF | [prs](https://en.wikipedia.org/wiki/ISO_639:prs) | rtl | [28.7, 55.2](https://www.openstreetmap.org/?mlat=28.66\&mlon=55.16#map=5/28.66/55.16) |
| [Pijin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) | pis | [pis](https://en.wikipedia.org/wiki/ISO_639:pis) | ltr | [-9.6, 160.1](https://www.openstreetmap.org/?mlat=-9.57\&mlon=160.14#map=5/-9.57/160.14) |
| [Pintupi-Luritja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) | piu | [piu](https://en.wikipedia.org/wiki/ISO_639:piu) | ltr | [-20.1, 128.0](https://www.openstreetmap.org/?mlat=-20.14\&mlon=127.98#map=5/-20.14/127.98) |
| [Malagasy, Plateau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) | mg | [plt](https://en.wikipedia.org/wiki/ISO_639:plt) | ltr | [-19.6, 47.1](https://www.openstreetmap.org/?mlat=-19.59\&mlon=47.12#map=5/-19.59/47.12) |
| Panjabi, Western | lah | [pnb](https://en.wikipedia.org/wiki/ISO_639:pnb) | rtl | [30.1, 75.3](https://www.openstreetmap.org/?mlat=30.09\&mlon=75.35#map=5/30.09/75.35) |
| [Polish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) | pl | [pol](https://en.wikipedia.org/wiki/ISO_639:pol) | ltr | [51.8, 18.6](https://www.openstreetmap.org/?mlat=51.84\&mlon=18.63#map=5/51.84/18.63) |
| [Pohnpeian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) | pon | [pon](https://en.wikipedia.org/wiki/ISO_639:pon) | ltr | [6.9, 158.2](https://www.openstreetmap.org/?mlat=6.87\&mlon=158.22#map=5/6.87/158.22) |
| Portuguese (Brazil) | pt-BR | [por](https://en.wikipedia.org/wiki/ISO_639:por) | ltr | [-15.0, -47.0](https://www.openstreetmap.org/?mlat=-15\&mlon=-47#map=5/-15/-47) |
| [Portuguese (Portugal)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) | pt-PT | [por](https://en.wikipedia.org/wiki/ISO_639:por) | ltr | [39.9, -8.1](https://www.openstreetmap.org/?mlat=39.91\&mlon=-8.1#map=5/39.91/-8.1) |
| [Crioulo, Upper Guinea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) | pov | [pov](https://en.wikipedia.org/wiki/ISO_639:pov) | ltr | [13.2, -15.3](https://www.openstreetmap.org/?mlat=13.23\&mlon=-15.33#map=5/13.23/-15.33) |
| [Pipil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) | ppl | [ppl](https://en.wikipedia.org/wiki/ISO_639:ppl) | ltr | [13.9, -89.4](https://www.openstreetmap.org/?mlat=13.89\&mlon=-89.44#map=5/13.89/-89.44) |
| [Occitan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) | oc | [oci](https://en.wikipedia.org/wiki/ISO_639:oci) | ltr | [44.0, 6.0](https://www.openstreetmap.org/?mlat=44\&mlon=6#map=5/44/6) |
| [K'iche', Central](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kiche-quiche) | quc | [quc](https://en.wikipedia.org/wiki/ISO_639:quc) | ltr | [14.5, -91.2](https://www.openstreetmap.org/?mlat=14.53\&mlon=-91.17#map=5/14.53/-91.17) |
| [Quechua (Unified Quichua, old Hispanic orthography)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) | qu | [que](https://en.wikipedia.org/wiki/ISO_639:que) | ltr | [-0.5, -78.5](https://www.openstreetmap.org/?mlat=-0.5\&mlon=-78.5#map=5/-0.5/-78.5) |
| [Quichua, Chimborazo Highland](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) | qug | [qug](https://en.wikipedia.org/wiki/ISO_639:qug) | ltr | [-1.4, -78.8](https://www.openstreetmap.org/?mlat=-1.37\&mlon=-78.85#map=5/-1.37/-78.85) |
| [Quechua, North Bolivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qul) | qul | [qul](https://en.wikipedia.org/wiki/ISO_639:qul) | ltr | [-14.0, -68.0](https://www.openstreetmap.org/?mlat=-14\&mlon=-68#map=5/-14/-68) |
| [Quechua, Ayacucho](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) | quy | [quy](https://en.wikipedia.org/wiki/ISO_639:quy) | ltr | [-13.8, -74.3](https://www.openstreetmap.org/?mlat=-13.85\&mlon=-74.32#map=5/-13.85/-74.32) |
| [Quechua, Cusco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) | qu | [quz](https://en.wikipedia.org/wiki/ISO_639:quz) | ltr | [-14.1, -71.8](https://www.openstreetmap.org/?mlat=-14.09\&mlon=-71.77#map=5/-14.09/-71.77) |
| [Quechua, Ambo-Pasco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) | qva | [qva](https://en.wikipedia.org/wiki/ISO_639:qva) | ltr | [-10.5, -76.1](https://www.openstreetmap.org/?mlat=-10.51\&mlon=-76.11#map=5/-10.51/-76.11) |
| [Quechua, Cajamarca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) | qvc | [qvc](https://en.wikipedia.org/wiki/ISO_639:qvc) | ltr | [-7.1, -78.3](https://www.openstreetmap.org/?mlat=-7.09\&mlon=-78.32#map=5/-7.09/-78.32) |
| [Quechua, Huamalíes-Dos de Mayo Huánuco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) | qvh | [qvh](https://en.wikipedia.org/wiki/ISO_639:qvh) | ltr | [-9.2, -76.3](https://www.openstreetmap.org/?mlat=-9.16\&mlon=-76.34#map=5/-9.16/-76.34) |
| [Quechua, Margos-Yarowilca-Lauricocha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) | qvm | [qvm](https://en.wikipedia.org/wiki/ISO_639:qvm) | ltr | [-9.8, -76.5](https://www.openstreetmap.org/?mlat=-9.84\&mlon=-76.5#map=5/-9.84/-76.5) |
| [Quechua, North Junín](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) | qvn | [qvn](https://en.wikipedia.org/wiki/ISO_639:qvn) | ltr | [-11.2, -75.8](https://www.openstreetmap.org/?mlat=-11.21\&mlon=-75.81#map=5/-11.21/-75.81) |
| [Quechua, Huaylas Ancash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) | qwh | [qwh](https://en.wikipedia.org/wiki/ISO_639:qwh) | ltr | [-9.4, -77.8](https://www.openstreetmap.org/?mlat=-9.39\&mlon=-77.78#map=5/-9.39/-77.78) |
| [Quechua, South Bolivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) | quh | [quh](https://en.wikipedia.org/wiki/ISO_639:quh) | ltr | [-20.9, -66.3](https://www.openstreetmap.org/?mlat=-20.92\&mlon=-66.33#map=5/-20.92/-66.33) |
| [Quechua, Northern Conchucos Ancash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) | qxn | [qxn](https://en.wikipedia.org/wiki/ISO_639:qxn) | ltr | [-9.0, -77.4](https://www.openstreetmap.org/?mlat=-8.97\&mlon=-77.41#map=5/-8.97/-77.41) |
| [Quechua, Arequipa-La Unión](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) | qxu | [qxu](https://en.wikipedia.org/wiki/ISO_639:qxu) | ltr | [-15.2, -72.6](https://www.openstreetmap.org/?mlat=-15.18\&mlon=-72.63#map=5/-15.18/-72.63) |
| [Rarotongan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) | rar | [rar](https://en.wikipedia.org/wiki/ISO_639:rar) | ltr | [-20.0, -158.0](https://www.openstreetmap.org/?mlat=-20\&mlon=-158#map=5/-20/-158) |
| [Romani, Balkan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) | rmn | [rmn](https://en.wikipedia.org/wiki/ISO_639:rmn) | ltr | [42.7, 21.2](https://www.openstreetmap.org/?mlat=42.67\&mlon=21.17#map=5/42.67/21.17) |
| [Romani, Balkan (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) | rmn | [rmn](https://en.wikipedia.org/wiki/ISO_639:rmn) | ltr | [42.7, 21.2](https://www.openstreetmap.org/?mlat=42.67\&mlon=21.17#map=5/42.67/21.17) |
| [Aromanian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) | rup | [rup](https://en.wikipedia.org/wiki/ISO_639:rup) | ltr | [42.1, 22.6](https://www.openstreetmap.org/?mlat=42.06\&mlon=22.65#map=5/42.06/22.65) |
| Romansch | rm | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| Romansch (Puter) | rm-puter | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| [Romansch (Grischun)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) | rm-rumgr | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| Romansch (Surmiran) | rm-surmiran | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| Romansch (Sursilvan) | rm-sursilv | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| Romansch (Sutsilvan) | rm-sutsilv | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| Romansch (Vallader) | rm-vallader | [roh](https://en.wikipedia.org/wiki/ISO_639:roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/?mlat=46.55\&mlon=9.93#map=5/46.55/9.93) |
| [Romanian (1953)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) | ro | [ron](https://en.wikipedia.org/wiki/ISO_639:ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/?mlat=46.39\&mlon=24.23#map=5/46.39/24.23) |
| Romanian (1993) | ro | [ron](https://en.wikipedia.org/wiki/ISO_639:ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/?mlat=46.39\&mlon=24.23#map=5/46.39/24.23) |
| Romanian (2006) | ro | [ron](https://en.wikipedia.org/wiki/ISO_639:ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/?mlat=46.39\&mlon=24.23#map=5/46.39/24.23) |
| [Rundi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) | rn | [run](https://en.wikipedia.org/wiki/ISO_639:run) | ltr | [-1.4, 31.3](https://www.openstreetmap.org/?mlat=-1.44\&mlon=31.32#map=5/-1.44/31.32) |
| [Russian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) | ru | [rus](https://en.wikipedia.org/wiki/ISO_639:rus) | ltr | [59.0, 50.0](https://www.openstreetmap.org/?mlat=59\&mlon=50#map=5/59/50) |
| [Sango](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) | sg | [sag](https://en.wikipedia.org/wiki/ISO_639:sag) | ltr | [6.8, 20.2](https://www.openstreetmap.org/?mlat=6.79\&mlon=20.17#map=5/6.79/20.17) |
| [Yakut](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) | sah | [sah](https://en.wikipedia.org/wiki/ISO_639:sah) | ltr | [61.7, 134.0](https://www.openstreetmap.org/?mlat=61.7\&mlon=133.98#map=5/61.7/133.98) |
| [Sanskrit](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) | sa | [san](https://en.wikipedia.org/wiki/ISO_639:san) | ltr | [20.0, 77.0](https://www.openstreetmap.org/?mlat=20\&mlon=77#map=5/20/77) |
| Sanskrit (Grantha) | sa-Gran | [san](https://en.wikipedia.org/wiki/ISO_639:san) | ltr | [20.0, 77.0](https://www.openstreetmap.org/?mlat=20\&mlon=77#map=5/20/77) |
| [Scots](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) | sco | [sco](https://en.wikipedia.org/wiki/ISO_639:sco) | ltr | [55.5, -6.0](https://www.openstreetmap.org/?mlat=55.54\&mlon=-6#map=5/55.54/-6) |
| [Secoya](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) | sey | [sey](https://en.wikipedia.org/wiki/ISO_639:sey) | ltr | [0.5, -75.5](https://www.openstreetmap.org/?mlat=0.46\&mlon=-75.55#map=5/0.46/-75.55) |
| [Shilluk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) | shk | [shk](https://en.wikipedia.org/wiki/ISO_639:shk) | ltr | [9.8, 31.8](https://www.openstreetmap.org/?mlat=9.85\&mlon=31.79#map=5/9.85/31.79) |
| [Shan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) | shn | [shn](https://en.wikipedia.org/wiki/ISO_639:shn) | ltr | [21.6, 98.0](https://www.openstreetmap.org/?mlat=21.6\&mlon=98.03#map=5/21.6/98.03) |
| [Shipibo-Conibo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) | shp | [shp](https://en.wikipedia.org/wiki/ISO_639:shp) | ltr | [-7.2, -74.8](https://www.openstreetmap.org/?mlat=-7.17\&mlon=-74.82#map=5/-7.17/-74.82) |
| [Sinhala](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) | si | [sin](https://en.wikipedia.org/wiki/ISO_639:sin) | ltr | [7.0, 81.0](https://www.openstreetmap.org/?mlat=7\&mlon=81#map=5/7/81) |
| [Seraiki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) | skr | [skr](https://en.wikipedia.org/wiki/ISO_639:skr) | rtl | [29.6, 71.9](https://www.openstreetmap.org/?mlat=29.55\&mlon=71.91#map=5/29.55/71.91) |
| [Slovak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) | sk | [slk](https://en.wikipedia.org/wiki/ISO_639:slk) | ltr | [48.5, 18.8](https://www.openstreetmap.org/?mlat=48.55\&mlon=18.78#map=5/48.55/18.78) |
| [Salar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slr) | slr | [slr](https://en.wikipedia.org/wiki/ISO_639:slr) | ltr | [35.0, 95.0](https://www.openstreetmap.org/?mlat=35\&mlon=95#map=5/35/95) |
| [Slovenian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) | sl | [slv](https://en.wikipedia.org/wiki/ISO_639:slv) | ltr | [46.3, 14.8](https://www.openstreetmap.org/?mlat=46.25\&mlon=14.78#map=5/46.25/14.78) |
| [North Saami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) | se | [sme](https://en.wikipedia.org/wiki/ISO_639:sme) | ltr | [68.7, 22.1](https://www.openstreetmap.org/?mlat=68.72\&mlon=22.11#map=5/68.72/22.11) |
| [Samoan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) | sm | [smo](https://en.wikipedia.org/wiki/ISO_639:smo) | ltr | [-13.9, -171.8](https://www.openstreetmap.org/?mlat=-13.92\&mlon=-171.83#map=5/-13.92/-171.83) |
| [Shona](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) | sn | [sna](https://en.wikipedia.org/wiki/ISO_639:sna) | ltr | [-17.2, 29.8](https://www.openstreetmap.org/?mlat=-17.21\&mlon=29.76#map=5/-17.21/29.76) |
| [Soninke](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) | snk | [snk](https://en.wikipedia.org/wiki/ISO_639:snk) | ltr | [13.1, -11.7](https://www.openstreetmap.org/?mlat=13.13\&mlon=-11.72#map=5/13.13/-11.72) |
| [Siona](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) | snn | [snn](https://en.wikipedia.org/wiki/ISO_639:snn) | ltr | [0.3, -76.0](https://www.openstreetmap.org/?mlat=0.32\&mlon=-76.02#map=5/0.32/-76.02) |
| [Somali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) | so | [som](https://en.wikipedia.org/wiki/ISO_639:som) | ltr | [4.8, 45.1](https://www.openstreetmap.org/?mlat=4.78\&mlon=45.15#map=5/4.78/45.15) |
| [Sotho, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) | st | [sot](https://en.wikipedia.org/wiki/ISO_639:sot) | ltr | [-30.4, 27.9](https://www.openstreetmap.org/?mlat=-30.44\&mlon=27.9#map=5/-30.44/27.9) |
| [Spanish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) | es | [spa](https://en.wikipedia.org/wiki/ISO_639:spa) | ltr | [40.4, -1.1](https://www.openstreetmap.org/?mlat=40.44\&mlon=-1.12#map=5/40.44/-1.12) |
| [Sardinian, Logudorese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) | sc | [src](https://en.wikipedia.org/wiki/ISO_639:src) | ltr | [40.5, 9.1](https://www.openstreetmap.org/?mlat=40.49\&mlon=9.1#map=5/40.49/9.1) |
| [Serbian (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) | sr-Cyrl | [srp](https://en.wikipedia.org/wiki/ISO_639:srp) | ltr | [44.3, 21.9](https://www.openstreetmap.org/?mlat=44.32\&mlon=21.92#map=5/44.32/21.92) |
| [Serbian (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) | sr-Latn | [srp](https://en.wikipedia.org/wiki/ISO_639:srp) | ltr | [44.3, 21.9](https://www.openstreetmap.org/?mlat=44.32\&mlon=21.92#map=5/44.32/21.92) |
| [Sirionó](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srq) | srq | [srq](https://en.wikipedia.org/wiki/ISO_639:srq) | ltr | [-15.0, -63.0](https://www.openstreetmap.org/?mlat=-15\&mlon=-63#map=5/-15/-63) |
| [Serer-Sine](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) | srr | [srr](https://en.wikipedia.org/wiki/ISO_639:srr) | ltr | [13.9, -16.4](https://www.openstreetmap.org/?mlat=13.89\&mlon=-16.39#map=5/13.89/-16.39) |
| [Swati](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) | ss | [ssw](https://en.wikipedia.org/wiki/ISO_639:ssw) | ltr | [-26.0, 31.5](https://www.openstreetmap.org/?mlat=-26\&mlon=31.5#map=5/-26/31.5) |
| [Sukuma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) | suk | [suk](https://en.wikipedia.org/wiki/ISO_639:suk) | ltr | [-3.2, 32.9](https://www.openstreetmap.org/?mlat=-3.16\&mlon=32.88#map=5/-3.16/32.88) |
| [Sunda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) | su | [sun](https://en.wikipedia.org/wiki/ISO_639:sun) | ltr | [-6.9, 107.1](https://www.openstreetmap.org/?mlat=-6.9\&mlon=107.11#map=5/-6.9/107.11) |
| [Susu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) | sus | [sus](https://en.wikipedia.org/wiki/ISO_639:sus) | ltr | [10.4, -13.4](https://www.openstreetmap.org/?mlat=10.4\&mlon=-13.36#map=5/10.4/-13.36) |
| [Comorian, Maore](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) | swb | [swb](https://en.wikipedia.org/wiki/ISO_639:swb) | ltr | [-13.0, 45.1](https://www.openstreetmap.org/?mlat=-12.97\&mlon=45.14#map=5/-12.97/45.14) |
| [Swedish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) | sv | [swe](https://en.wikipedia.org/wiki/ISO_639:swe) | ltr | [59.8, 17.4](https://www.openstreetmap.org/?mlat=59.8\&mlon=17.39#map=5/59.8/17.39) |
| [Swahili](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) | sw | [swh](https://en.wikipedia.org/wiki/ISO_639:swh) | ltr | [-8.3, 37.6](https://www.openstreetmap.org/?mlat=-8.26\&mlon=37.62#map=5/-8.26/37.62) |
| [Tahitian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) | ty | [tah](https://en.wikipedia.org/wiki/ISO_639:tah) | ltr | [-17.6, -149.4](https://www.openstreetmap.org/?mlat=-17.65\&mlon=-149.45#map=5/-17.65/-149.45) |
| [Tamang, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taj) | taj | [taj](https://en.wikipedia.org/wiki/ISO_639:taj) | ltr | [27.3, 87.1](https://www.openstreetmap.org/?mlat=27.32\&mlon=87.08#map=5/27.32/87.08) |
| [Tamil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) | ta | [tam](https://en.wikipedia.org/wiki/ISO_639:tam) | ltr | [10.5, 78.8](https://www.openstreetmap.org/?mlat=10.52\&mlon=78.83#map=5/10.52/78.83) |
| Tamil (Sri Lanka) | ta-LK | [tam](https://en.wikipedia.org/wiki/ISO_639:tam) | ltr | [9.0, 80.0](https://www.openstreetmap.org/?mlat=9\&mlon=80#map=5/9/80) |
| [Tatar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) | tt | [tat](https://en.wikipedia.org/wiki/ISO_639:tat) | ltr | [55.0, 50.0](https://www.openstreetmap.org/?mlat=55\&mlon=50#map=5/55/50) |
| [Ditammari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) | tbz | [tbz](https://en.wikipedia.org/wiki/ISO_639:tbz) | ltr | [10.2, 1.2](https://www.openstreetmap.org/?mlat=10.16\&mlon=1.18#map=5/10.16/1.18) |
| [Ticuna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) | tca | [tca](https://en.wikipedia.org/wiki/ISO_639:tca) | ltr | [-3.7, -69.9](https://www.openstreetmap.org/?mlat=-3.66\&mlon=-69.87#map=5/-3.66/-69.87) |
| [Telugu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) | te | [tel](https://en.wikipedia.org/wiki/ISO_639:tel) | ltr | [16.4, 78.7](https://www.openstreetmap.org/?mlat=16.45\&mlon=78.7#map=5/16.45/78.7) |
| [Themne](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) | tem | [tem](https://en.wikipedia.org/wiki/ISO_639:tem) | ltr | [8.9, -12.3](https://www.openstreetmap.org/?mlat=8.9\&mlon=-12.33#map=5/8.9/-12.33) |
| [Tetun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) | tet | [tet](https://en.wikipedia.org/wiki/ISO_639:tet) | ltr | [-9.1, 125.5](https://www.openstreetmap.org/?mlat=-9.11\&mlon=125.53#map=5/-9.11/125.53) |
| [Tajiki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) | tg | [tgk](https://en.wikipedia.org/wiki/ISO_639:tgk) | ltr | [38.8, 68.5](https://www.openstreetmap.org/?mlat=38.82\&mlon=68.55#map=5/38.82/68.55) |
| [Tagalog](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) | tl | [tgl](https://en.wikipedia.org/wiki/ISO_639:tgl) | ltr | [14.1, 121.8](https://www.openstreetmap.org/?mlat=14.06\&mlon=121.75#map=5/14.06/121.75) |
| Tagalog (Tagalog) | tl-Tglg | [tgl](https://en.wikipedia.org/wiki/ISO_639:tgl) | ltr | [14.1, 121.8](https://www.openstreetmap.org/?mlat=14.06\&mlon=121.75#map=5/14.06/121.75) |
| [Thai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) | th | [tha](https://en.wikipedia.org/wiki/ISO_639:tha) | ltr | [14.2, 100.7](https://www.openstreetmap.org/?mlat=14.19\&mlon=100.67#map=5/14.19/100.67) |
| Thai (2) | th | [tha](https://en.wikipedia.org/wiki/ISO_639:tha) | ltr | [14.2, 100.7](https://www.openstreetmap.org/?mlat=14.19\&mlon=100.67#map=5/14.19/100.67) |
| [Tigrigna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) | ti | [tir](https://en.wikipedia.org/wiki/ISO_639:tir) | ltr | [15.3, 38.9](https://www.openstreetmap.org/?mlat=15.34\&mlon=38.93#map=5/15.34/38.93) |
| [Tiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) | tiv | [tiv](https://en.wikipedia.org/wiki/ISO_639:tiv) | ltr | [6.9, 9.3](https://www.openstreetmap.org/?mlat=6.88\&mlon=9.26#map=5/6.88/9.26) |
| [Tujia, Nothern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tji) | tji | [tji](https://en.wikipedia.org/wiki/ISO_639:tji) | ltr | [32.0, 110.0](https://www.openstreetmap.org/?mlat=32\&mlon=110#map=5/32/110) |
| [Talysh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) | tly | [tly](https://en.wikipedia.org/wiki/ISO_639:tly) | ltr | [38.5, 48.6](https://www.openstreetmap.org/?mlat=38.46\&mlon=48.63#map=5/38.46/48.63) |
| [Tacana](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tna) | tna | [tna](https://en.wikipedia.org/wiki/ISO_639:tna) | ltr | [-13.0, -68.0](https://www.openstreetmap.org/?mlat=-13\&mlon=-68#map=5/-13/-68) |
| [Toba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) | tob | [tob](https://en.wikipedia.org/wiki/ISO_639:tob) | ltr | [-24.4, -60.5](https://www.openstreetmap.org/?mlat=-24.4\&mlon=-60.45#map=5/-24.4/-60.45) |
| [Tonga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) | toi | [toi](https://en.wikipedia.org/wiki/ISO_639:toi) | ltr | [-17.4, 27.1](https://www.openstreetmap.org/?mlat=-17.42\&mlon=27.1#map=5/-17.42/27.1) |
| [Tojolabal](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) | toj | [toj](https://en.wikipedia.org/wiki/ISO_639:toj) | ltr | [16.3, -91.8](https://www.openstreetmap.org/?mlat=16.26\&mlon=-91.78#map=5/16.26/-91.78) |
| [Tongan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) | to | [ton](https://en.wikipedia.org/wiki/ISO_639:ton) | ltr | [-21.2, -175.3](https://www.openstreetmap.org/?mlat=-21.17\&mlon=-175.25#map=5/-21.17/-175.25) |
| [Totonac, Papantla](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) | top | [top](https://en.wikipedia.org/wiki/ISO_639:top) | ltr | [20.6, -97.3](https://www.openstreetmap.org/?mlat=20.57\&mlon=-97.26#map=5/20.57/-97.26) |
| [Tok Pisin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) | tpi | [tpi](https://en.wikipedia.org/wiki/ISO_639:tpi) | ltr | [-9.4, 147.3](https://www.openstreetmap.org/?mlat=-9.42\&mlon=147.3#map=5/-9.42/147.3) |
| [Trinitario](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trn) | trn | [trn](https://en.wikipedia.org/wiki/ISO_639:trn) | ltr | [-15.0, -65.0](https://www.openstreetmap.org/?mlat=-15\&mlon=-65#map=5/-15/-65) |
| [Tswana](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) | tn | [tsn](https://en.wikipedia.org/wiki/ISO_639:tsn) | ltr | [-24.4, 24.8](https://www.openstreetmap.org/?mlat=-24.37\&mlon=24.76#map=5/-24.37/24.76) |
| [Tsonga (Mozambique)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) | ts | [tso](https://en.wikipedia.org/wiki/ISO_639:tso) | ltr | [-23.6, 31.8](https://www.openstreetmap.org/?mlat=-23.58\&mlon=31.81#map=5/-23.58/31.81) |
| [Tsonga (Zimbabwe)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso1) | ts | [tso](https://en.wikipedia.org/wiki/ISO_639:tso) | ltr | [-23.6, 31.8](https://www.openstreetmap.org/?mlat=-23.58\&mlon=31.81#map=5/-23.58/31.81) |
| [Purepecha](https://www.ohchr.org/en/human-rights/universal-declaration/translations/purhepecha) | tsz | [tsz](https://en.wikipedia.org/wiki/ISO_639:tsz) | ltr | [19.3, -101.6](https://www.openstreetmap.org/?mlat=19.25\&mlon=-101.63#map=5/19.25/-101.63) |
| [Turkmen (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) | tk-Cyrl | [tuk](https://en.wikipedia.org/wiki/ISO_639:tuk) | ltr | [37.1, 59.2](https://www.openstreetmap.org/?mlat=37.09\&mlon=59.18#map=5/37.09/59.18) |
| Turkmen (Latin) | tk-Latn | [tuk](https://en.wikipedia.org/wiki/ISO_639:tuk) | ltr | [37.1, 59.2](https://www.openstreetmap.org/?mlat=37.09\&mlon=59.18#map=5/37.09/59.18) |
| [Turkish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) | tr | [tur](https://en.wikipedia.org/wiki/ISO_639:tur) | ltr | [39.9, 32.9](https://www.openstreetmap.org/?mlat=39.87\&mlon=32.87#map=5/39.87/32.87) |
| [Tuva](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) | tyv | [tyv](https://en.wikipedia.org/wiki/ISO_639:tyv) | ltr | [48.4, 92.7](https://www.openstreetmap.org/?mlat=48.44\&mlon=92.67#map=5/48.44/92.67) |
| [Tzotzil (Chamula)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) | tzo | [tzo](https://en.wikipedia.org/wiki/ISO_639:tzo) | ltr | [16.6, -92.7](https://www.openstreetmap.org/?mlat=16.64\&mlon=-92.74#map=5/16.64/-92.74) |
| [Tzeltal, Oxchuc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) | tzh | [tzh](https://en.wikipedia.org/wiki/ISO_639:tzh) | ltr | [16.6, -92.3](https://www.openstreetmap.org/?mlat=16.64\&mlon=-92.28#map=5/16.64/-92.28) |
| [Tamazight, Central Atlas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) | tzm | [tzm](https://en.wikipedia.org/wiki/ISO_639:tzm) | ltr | [32.7, -2.4](https://www.openstreetmap.org/?mlat=32.74\&mlon=-2.41#map=5/32.74/-2.41) |
| Tamazight, Central Atlas (Tifinagh) | tzm-Tfng | [tzm](https://en.wikipedia.org/wiki/ISO_639:tzm) | ltr | [32.7, -2.4](https://www.openstreetmap.org/?mlat=32.74\&mlon=-2.41#map=5/32.74/-2.41) |
| [Uduk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=udu) | udu | [udu](https://en.wikipedia.org/wiki/ISO_639:udu) | ltr | [8.3, 34.5](https://www.openstreetmap.org/?mlat=8.25\&mlon=34.5#map=5/8.25/34.5) |
| [Uyghur (Arabic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) | ug-Arab | [uig](https://en.wikipedia.org/wiki/ISO_639:uig) | rtl | [43.7, 79.8](https://www.openstreetmap.org/?mlat=43.67\&mlon=79.75#map=5/43.67/79.75) |
| Uyghur (Latin) | ug-Latn | [uig](https://en.wikipedia.org/wiki/ISO_639:uig) | ltr | [43.7, 79.8](https://www.openstreetmap.org/?mlat=43.67\&mlon=79.75#map=5/43.67/79.75) |
| [Ukrainian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) | uk | [ukr](https://en.wikipedia.org/wiki/ISO_639:ukr) | ltr | [48.2, 24.4](https://www.openstreetmap.org/?mlat=48.18\&mlon=24.4#map=5/48.18/24.4) |
| [Umbundu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) | umb | [umb](https://en.wikipedia.org/wiki/ISO_639:umb) | ltr | [-12.5, 14.4](https://www.openstreetmap.org/?mlat=-12.48\&mlon=14.41#map=5/-12.48/14.41) |
| [Urarina](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) | ura | [ura](https://en.wikipedia.org/wiki/ISO_639:ura) | ltr | [-4.4, -75.4](https://www.openstreetmap.org/?mlat=-4.44\&mlon=-75.42#map=5/-4.44/-75.42) |
| [Urdu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | ur | [urd](https://en.wikipedia.org/wiki/ISO_639:urd) | rtl | [25.0, 67.0](https://www.openstreetmap.org/?mlat=25\&mlon=67#map=5/25/67) |
| [Urdu (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | ur | [urd](https://en.wikipedia.org/wiki/ISO_639:urd) | rtl | [25.0, 67.0](https://www.openstreetmap.org/?mlat=25\&mlon=67#map=5/25/67) |
| [Uzbek, Northern (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) | uz-Cyrl | [uzn](https://en.wikipedia.org/wiki/ISO_639:uzn) | ltr | [43.8, 59.2](https://www.openstreetmap.org/?mlat=43.75\&mlon=59.23#map=5/43.75/59.23) |
| [Uzbek, Northern (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) | uz-Latn | [uzn](https://en.wikipedia.org/wiki/ISO_639:uzn) | ltr | [43.8, 59.2](https://www.openstreetmap.org/?mlat=43.75\&mlon=59.23#map=5/43.75/59.23) |
| [Vai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) | vai | [vai](https://en.wikipedia.org/wiki/ISO_639:vai) | ltr | [7.0, -11.3](https://www.openstreetmap.org/?mlat=7.05\&mlon=-11.33#map=5/7.05/-11.33) |
| [Venetian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) | vec | [vec](https://en.wikipedia.org/wiki/ISO_639:vec) | ltr | [45.4, 13.0](https://www.openstreetmap.org/?mlat=45.41\&mlon=13.03#map=5/45.41/13.03) |
| [Venda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) | ve | [ven](https://en.wikipedia.org/wiki/ISO_639:ven) | ltr | [-22.2, 29.9](https://www.openstreetmap.org/?mlat=-22.19\&mlon=29.95#map=5/-22.19/29.95) |
| [Venda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ven) | ve | [ven](https://en.wikipedia.org/wiki/ISO_639:ven) | ltr | [-22.2, 29.9](https://www.openstreetmap.org/?mlat=-22.19\&mlon=29.95#map=5/-22.19/29.95) |
| [Veps](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) | vep | [vep](https://en.wikipedia.org/wiki/ISO_639:vep) | ltr | [60.3, 34.8](https://www.openstreetmap.org/?mlat=60.34\&mlon=34.79#map=5/60.34/34.79) |
| [Vietnamese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) | vi | [vie](https://en.wikipedia.org/wiki/ISO_639:vie) | ltr | [18.4, 106.8](https://www.openstreetmap.org/?mlat=18.39\&mlon=106.76#map=5/18.39/106.76) |
| Vietnamese (Han nom) | vi-Hani | [vie](https://en.wikipedia.org/wiki/ISO_639:vie) | ltr | [18.4, 106.8](https://www.openstreetmap.org/?mlat=18.39\&mlon=106.76#map=5/18.39/106.76) |
| [Makhuwa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) | vmw | [vmw](https://en.wikipedia.org/wiki/ISO_639:vmw) | ltr | [-14.8, 38.8](https://www.openstreetmap.org/?mlat=-14.85\&mlon=38.81#map=5/-14.85/38.81) |
| [Waray-Waray](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) | war | [war](https://en.wikipedia.org/wiki/ISO_639:war) | ltr | [11.5, 125.0](https://www.openstreetmap.org/?mlat=11.49\&mlon=125.01#map=5/11.49/125.01) |
| [Walloon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) | wa | [wln](https://en.wikipedia.org/wiki/ISO_639:wln) | ltr | [50.2, 5.2](https://www.openstreetmap.org/?mlat=50.22\&mlon=5.15#map=5/50.22/5.15) |
| [Wolof](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) | wo | [wol](https://en.wikipedia.org/wiki/ISO_639:wol) | ltr | [15.3, -15.4](https://www.openstreetmap.org/?mlat=15.25\&mlon=-15.38#map=5/15.25/-15.38) |
| [Chinese, Wu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wuu) | wuu | [wuu](https://en.wikipedia.org/wiki/ISO_639:wuu) | ltr | [31.2, 121.5](https://www.openstreetmap.org/?mlat=31.23\&mlon=121.47#map=5/31.23/121.47) |
| [Waama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) | wwa | [wwa](https://en.wikipedia.org/wiki/ISO_639:wwa) | ltr | [10.6, 1.6](https://www.openstreetmap.org/?mlat=10.6\&mlon=1.65#map=5/10.6/1.65) |
| [Xhosa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) | xh | [xho](https://en.wikipedia.org/wiki/ISO_639:xho) | ltr | [-31.0, 28.1](https://www.openstreetmap.org/?mlat=-31.04\&mlon=28.08#map=5/-31.04/28.08) |
| [Kasem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) | xsm | [xsm](https://en.wikipedia.org/wiki/ISO_639:xsm) | ltr | [11.1, -1.4](https://www.openstreetmap.org/?mlat=11.08\&mlon=-1.39#map=5/11.08/-1.39) |
| [Yagua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) | yad | [yad](https://en.wikipedia.org/wiki/ISO_639:yad) | ltr | [-3.4, -72.2](https://www.openstreetmap.org/?mlat=-3.43\&mlon=-72.22#map=5/-3.43/-72.22) |
| [Yao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) | yao | [yao](https://en.wikipedia.org/wiki/ISO_639:yao) | ltr | [-13.6, 35.2](https://www.openstreetmap.org/?mlat=-13.61\&mlon=35.24#map=5/-13.61/35.24) |
| [Yapese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) | yap | [yap](https://en.wikipedia.org/wiki/ISO_639:yap) | ltr | [9.6, 138.1](https://www.openstreetmap.org/?mlat=9.56\&mlon=138.12#map=5/9.56/138.12) |
| [Yiddish, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) | yi | [ydd](https://en.wikipedia.org/wiki/ISO_639:ydd) | rtl | [51.8, 19.4](https://www.openstreetmap.org/?mlat=51.75\&mlon=19.42#map=5/51.75/19.42) |
| [Yukaghir, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) | ykg | [ykg](https://en.wikipedia.org/wiki/ISO_639:ykg) | ltr | [65.4, 151.3](https://www.openstreetmap.org/?mlat=65.39\&mlon=151.32#map=5/65.39/151.32) |
| [Yoruba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) | yo | [yor](https://en.wikipedia.org/wiki/ISO_639:yor) | ltr | [7.2, 3.7](https://www.openstreetmap.org/?mlat=7.15\&mlon=3.67#map=5/7.15/3.67) |
| [Nenets](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yrk) | yrk | [yrk](https://en.wikipedia.org/wiki/ISO_639:yrk) | ltr | [66.2, 71.0](https://www.openstreetmap.org/?mlat=66.18\&mlon=71.02#map=5/66.18/71.02) |
| [Maya, Yucatán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) | yua | [yua](https://en.wikipedia.org/wiki/ISO_639:yua) | ltr | [18.8, -89.0](https://www.openstreetmap.org/?mlat=18.78\&mlon=-88.96#map=5/18.78/-88.96) |
| [Chinese, Yue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yue) | yue | [yue](https://en.wikipedia.org/wiki/ISO_639:yue) | ltr | [31.1, 121.3](https://www.openstreetmap.org/?mlat=31.13\&mlon=121.29#map=5/31.13/121.29) |
| [Yuracare](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yuz) | yuz | [yuz](https://en.wikipedia.org/wiki/ISO_639:yuz) | ltr | [-17.0, -65.0](https://www.openstreetmap.org/?mlat=-17\&mlon=-65#map=5/-17/-65) |
| [Zapotec, Miahuatlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) | zam | [zam](https://en.wikipedia.org/wiki/ISO_639:zam) | ltr | [16.2, -96.7](https://www.openstreetmap.org/?mlat=16.22\&mlon=-96.66#map=5/16.22/-96.66) |
| [Comorian, Ngazidja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) | zdj | [zdj](https://en.wikipedia.org/wiki/ISO_639:zdj) | ltr | [-12.0, 44.0](https://www.openstreetmap.org/?mlat=-12\&mlon=44#map=5/-12/44) |
| [Tamazight, Standard Morocan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) | zgh | [zgh](https://en.wikipedia.org/wiki/ISO_639:zgh) | ltr | [14.2, -2.4](https://www.openstreetmap.org/?mlat=14.2\&mlon=-2.41#map=5/14.2/-2.41) |
| [Záparo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) | zro | [zro](https://en.wikipedia.org/wiki/ISO_639:zro) | ltr | [-2.0, -76.4](https://www.openstreetmap.org/?mlat=-2\&mlon=-76.36#map=5/-2/-76.36) |
| [Zapotec, Güilá](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) | ztu | [ztu](https://en.wikipedia.org/wiki/ISO_639:ztu) | ltr | [16.9, -96.5](https://www.openstreetmap.org/?mlat=16.88\&mlon=-96.46#map=5/16.88/-96.46) |
| [Zulu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) | zu | [zul](https://en.wikipedia.org/wiki/ISO_639:zul) | ltr | [-25.3, 31.4](https://www.openstreetmap.org/?mlat=-25.33\&mlon=31.35#map=5/-25.33/31.35) |

<!--support end-->

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now,
that is Node.js 14+ and 16+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][opensource-guide-contribute].

## Security

This package is safe.

## License

[MIT][file-license] © [Titus Wormer][wooorm]

<!--Definitions-->

[api-info]: #info

[api-udhr]: #udhr

[badge-build-image]: https://github.com/wooorm/udhr/workflows/main/badge.svg

[badge-build-url]: https://github.com/wooorm/udhr/actions

[badge-coverage-image]: https://img.shields.io/codecov/c/github/wooorm/udhr.svg

[badge-coverage-url]: https://codecov.io/github/wooorm/udhr

[badge-downloads-image]: https://img.shields.io/npm/dm/udhr.svg

[badge-downloads-url]: https://www.npmjs.com/package/udhr

[efele-udhr]: http://efele.net/udhr/

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[file-license]: license

[npm]: https://www.npmjs.com

[ohchr-index]: https://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx

[opensource-guide-contribute]: https://opensource.guide/how-to-contribute/

[typescript]: https://www.typescriptlang.org

[wooorm]: https://wooorm.com
