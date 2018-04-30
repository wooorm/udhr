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
{ ISO: 'eng',
  BCP47: 'en',
  OHCHR: 'eng',
  direction: 'ltr',
  code: 'eng',
  name: 'English',
  stage: 5,
  hasNotes: false,
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

<!--support start-->

| Name | BCP 47 | OHCHR | ISO 639-3 | Direction | Location | Region |
| ---- | ------ | ----- | --------- | --------- | -------- | ------ |
| Sãotomense | cri | [1128](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) | [cri](http://www-01.sil.org/iso639-3/documentation.asp?id=cri) | ltr | [6.7, 0.3](http://www.openstreetmap.org/#map=5/6.68/0.33) | Africa |
| Crioulo, Upper Guinea (008) | pov |  | [pov](http://www-01.sil.org/iso639-3/documentation.asp?id=pov) | ltr | [13.2, -15.3](http://www.openstreetmap.org/#map=5/13.23/-15.33) | Africa |
| Mbundu (009) | kmb |  | [kmb](http://www-01.sil.org/iso639-3/documentation.asp?id=kmb) | ltr | [-9.0, 14.9](http://www.openstreetmap.org/#map=5/-8.98/14.89) | Africa |
| Tetun Dili | tdt |  | [tdt](http://www-01.sil.org/iso639-3/documentation.asp?id=tdt) | ltr | [125.5, -8.5](http://www.openstreetmap.org/#map=5/125.5/-8.5) | Asia |
| Umbundu (011) | umb |  | [umb](http://www-01.sil.org/iso639-3/documentation.asp?id=umb) | ltr | [-12.5, 14.4](http://www.openstreetmap.org/#map=5/-12.48/14.41) | Africa |
| (Bizisa) | und | [bz1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz1) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Mijisa) | und | [bz2](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Maiunan) | und | [ma1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Magar / Dhut) | und | [ma2](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma2) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Minjiang, spoken) | und | [mi1_spok](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Minjiang, written) | und | [mi1_written](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Tajpuriya) | und | [ta1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ta1) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Tokpegola, Devanagari) | und | [tok](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tok) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| (Tokpegola, Tibetan) | und | [tok](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tok) | [und](http://www-01.sil.org/iso639-3/documentation.asp?id=und) | ltr | [-75.0, 30.0](http://www.openstreetmap.org/#map=5/-75/30) |  |
| Drung | duu | [ty1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) | [duu](http://www-01.sil.org/iso639-3/documentation.asp?id=duu) | ltr | [28.0, 98.0](http://www.openstreetmap.org/#map=5/28/98) | Asia |
| Abkhaz | ab | [abk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=abk) | [abk](http://www-01.sil.org/iso639-3/documentation.asp?id=abk) | ltr | [42.2, 41.3](http://www.openstreetmap.org/#map=5/42.23/41.3) | Asia |
| Aceh | ace | [atj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) | [ace](http://www-01.sil.org/iso639-3/documentation.asp?id=ace) | ltr | [3.9, 96.6](http://www.openstreetmap.org/#map=5/3.91/96.6) | Asia |
| Achuar-Shiwiar | acu | [acu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) | [acu](http://www-01.sil.org/iso639-3/documentation.asp?id=acu) | ltr | [-2.8, -77.3](http://www.openstreetmap.org/#map=5/-2.83/-77.26) | Americas |
| Achuar-Shiwiar (1) | acu | [jiv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) | [acu](http://www-01.sil.org/iso639-3/documentation.asp?id=acu) | ltr | [-2.8, -77.3](http://www.openstreetmap.org/#map=5/-2.83/-77.26) | Americas |
| Dangme | ada | [gac1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) | [ada](http://www-01.sil.org/iso639-3/documentation.asp?id=ada) | ltr | [5.9, 0.1](http://www.openstreetmap.org/#map=5/5.94/0.13) | Africa |
| Adyghe | ady | [ady](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) | [ady](http://www-01.sil.org/iso639-3/documentation.asp?id=ady) | ltr | [44.0, 39.3](http://www.openstreetmap.org/#map=5/44/39.33) | Asia |
| Afrikaans | af | [afk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) | [afr](http://www-01.sil.org/iso639-3/documentation.asp?id=afr) | ltr | [-22.0, 30.0](http://www.openstreetmap.org/#map=5/-22/30) | Africa |
| Aguaruna | agr | [agr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) | [agr](http://www-01.sil.org/iso639-3/documentation.asp?id=agr) | ltr | [-5.3, -77.9](http://www.openstreetmap.org/#map=5/-5.3/-77.92) | Americas |
| Assyrian Neo-Aramaic | aii | [aii](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) | [aii](http://www-01.sil.org/iso639-3/documentation.asp?id=aii) | rtl | [36.8, 43.0](http://www.openstreetmap.org/#map=5/36.75/43) | Asia |
| Aja | ajg | [ajg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) | [ajg](http://www-01.sil.org/iso639-3/documentation.asp?id=ajg) | ltr | [7.1, 1.6](http://www.openstreetmap.org/#map=5/7.07/1.65) | Africa |
| Twi (Akuapem) | tw-akuapem | [tws1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) | [twi](http://www-01.sil.org/iso639-3/documentation.asp?id=twi) | ltr | [6.3, -1.3](http://www.openstreetmap.org/#map=5/6.35/-1.33) | Africa |
| Twi (Asante) | tw-asante | [ass](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) | [twi](http://www-01.sil.org/iso639-3/documentation.asp?id=twi) | ltr | [6.3, -1.3](http://www.openstreetmap.org/#map=5/6.35/-1.33) | Africa |
| Fante | fat | [tws3](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws3) | [fat](http://www-01.sil.org/iso639-3/documentation.asp?id=fat) | ltr | [6.3, -1.3](http://www.openstreetmap.org/#map=5/6.35/-1.33) | Africa |
| Albanian, Tosk | sq | [aln](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) | [als](http://www-01.sil.org/iso639-3/documentation.asp?id=als) | ltr | [41.0, 20.0](http://www.openstreetmap.org/#map=5/41/20) | Europe |
| Altai, Southern | alt | [alt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) | [alt](http://www-01.sil.org/iso639-3/documentation.asp?id=alt) | ltr | [50.1, 86.9](http://www.openstreetmap.org/#map=5/50.13/86.87) | Asia |
| Amahuaca | amc | [amc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) | [amc](http://www-01.sil.org/iso639-3/documentation.asp?id=amc) | ltr | [-10.2, -72.3](http://www.openstreetmap.org/#map=5/-10.2/-72.32) | Americas |
| Yaneshaʼ | ame | [ame](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) | [ame](http://www-01.sil.org/iso639-3/documentation.asp?id=ame) | ltr | [-10.6, -75.3](http://www.openstreetmap.org/#map=5/-10.55/-75.31) | Americas |
| Amharic | am | [amh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) | [amh](http://www-01.sil.org/iso639-3/documentation.asp?id=amh) | ltr | [11.7, 39.5](http://www.openstreetmap.org/#map=5/11.71/39.54) | Africa |
| Amarakaeri | amr | [amr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) | [amr](http://www-01.sil.org/iso639-3/documentation.asp?id=amr) | ltr | [-12.5, -70.5](http://www.openstreetmap.org/#map=5/-12.49/-70.55) | Americas |
| Arabic, Standard | ar | [arz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) | [arb](http://www-01.sil.org/iso639-3/documentation.asp?id=arb) | rtl | [28.0, 43.9](http://www.openstreetmap.org/#map=5/27.96/43.85) | Asia |
| Arabela | arl | [arl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) | [arl](http://www-01.sil.org/iso639-3/documentation.asp?id=arl) | ltr | [-2.0, -75.1](http://www.openstreetmap.org/#map=5/-1.96/-75.06) | Americas |
| Mapudungun | arn | [aru](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) | [arn](http://www-01.sil.org/iso639-3/documentation.asp?id=arn) | ltr | [-38.7, -71.3](http://www.openstreetmap.org/#map=5/-38.74/-71.28) | Americas |
| Assamese | as | [asm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=asm) | [asm](http://www-01.sil.org/iso639-3/documentation.asp?id=asm) | ltr | [26.1, 91.3](http://www.openstreetmap.org/#map=5/26.09/91.29) | Asia |
| Asturian | ast | [aub](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) | [ast](http://www-01.sil.org/iso639-3/documentation.asp?id=ast) | ltr | [42.4, -6.0](http://www.openstreetmap.org/#map=5/42.42/-6.02) | Europe |
| Waorani | auc | [1127](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) | [auc](http://www-01.sil.org/iso639-3/documentation.asp?id=auc) | ltr | [-1.1, -76.7](http://www.openstreetmap.org/#map=5/-1.12/-76.68) | Americas |
| Occitan (Auvergnat) | oc | [auv1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Awadhi | awa | [awa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=awa) | [awa](http://www-01.sil.org/iso639-3/documentation.asp?id=awa) | ltr | [27.6, 82.5](http://www.openstreetmap.org/#map=5/27.59/82.47) | Asia |
| Aymara, Central | ay | [aym](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) | [ayr](http://www-01.sil.org/iso639-3/documentation.asp?id=ayr) | ltr | [-17.0, -68.5](http://www.openstreetmap.org/#map=5/-17/-68.5) | Americas |
| Azerbaijani, North (Cyrillic) | az-Cyrl | [azb1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) | [azj](http://www-01.sil.org/iso639-3/documentation.asp?id=azj) | ltr | [41.0, 46.5](http://www.openstreetmap.org/#map=5/40.98/46.47) | Asia |
| Azerbaijani, North (Latin) | az-Latn | [azb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) | [azj](http://www-01.sil.org/iso639-3/documentation.asp?id=azj) | ltr | [41.0, 46.5](http://www.openstreetmap.org/#map=5/40.98/46.47) | Asia |
| Bamanankan | bm | [bra](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) | [bam](http://www-01.sil.org/iso639-3/documentation.asp?id=bam) | ltr | [12.0, -10.0](http://www.openstreetmap.org/#map=5/12.04/-9.99) | Africa |
| Bali | ban | [bzc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) | [ban](http://www-01.sil.org/iso639-3/documentation.asp?id=ban) | ltr | [-8.4, 115.1](http://www.openstreetmap.org/#map=5/-8.36/115.08) | Asia |
| Bantawa | bap | [bap](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bap) | [bap](http://www-01.sil.org/iso639-3/documentation.asp?id=bap) | ltr | [27.2, 87.1](http://www.openstreetmap.org/#map=5/27.2/87.1) | Asia |
| Baatonum | bba | [bba](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) | [bba](http://www-01.sil.org/iso639-3/documentation.asp?id=bba) | ltr | [9.6, 3.0](http://www.openstreetmap.org/#map=5/9.63/3) | Africa |
| Baoulé | bci | [bci](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) | [bci](http://www-01.sil.org/iso639-3/documentation.asp?id=bci) | ltr | [5.4, -4.8](http://www.openstreetmap.org/#map=5/5.43/-4.77) | Africa |
| Bicolano, Central | bik | [bkl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) | [bcl](http://www-01.sil.org/iso639-3/documentation.asp?id=bcl) | ltr | [13.8, 123.4](http://www.openstreetmap.org/#map=5/13.76/123.4) | Asia |
| Belarusan | be | [ruw](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) | [bel](http://www-01.sil.org/iso639-3/documentation.asp?id=bel) | ltr | [53.2, 25.6](http://www.openstreetmap.org/#map=5/53.23/25.6) | Europe |
| Bemba | bem | [bem](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) | [bem](http://www-01.sil.org/iso639-3/documentation.asp?id=bem) | ltr | [-10.6, 29.3](http://www.openstreetmap.org/#map=5/-10.61/29.3) | Africa |
| Bengali | bn | [bng](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) | [ben](http://www-01.sil.org/iso639-3/documentation.asp?id=ben) | ltr | [24.0, 90.0](http://www.openstreetmap.org/#map=5/24/90) | Asia |
| Bari | bfa | [bfa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) | [bfa](http://www-01.sil.org/iso639-3/documentation.asp?id=bfa) | ltr | [4.2, 31.1](http://www.openstreetmap.org/#map=5/4.2/31.07) | Africa |
| Balochi, Eastern | bgp | [bgp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bgp) | [bgp](http://www-01.sil.org/iso639-3/documentation.asp?id=bgp) | ltr | [28.0, 62.0](http://www.openstreetmap.org/#map=5/28/62) | Asia |
| Bhojpuri | bho | [bhj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) | [bho](http://www-01.sil.org/iso639-3/documentation.asp?id=bho) | ltr | [26.5, 84.8](http://www.openstreetmap.org/#map=5/26.46/84.82) | Asia |
| Edo | bin | [edo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) | [bin](http://www-01.sil.org/iso639-3/documentation.asp?id=bin) | ltr | [6.4, 5.7](http://www.openstreetmap.org/#map=5/6.41/5.7) | Africa |
| Bislama | bi | [bcy](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) | [bis](http://www-01.sil.org/iso639-3/documentation.asp?id=bis) | ltr | [-20.0, 167.4](http://www.openstreetmap.org/#map=5/-19.99/167.37) | Pacific |
| Kanauji | bjj | [bjj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bjj) | [bjj](http://www-01.sil.org/iso639-3/documentation.asp?id=bjj) | ltr | [27.1, 79.3](http://www.openstreetmap.org/#map=5/27.11/79.29) | Asia |
| Tai Dam | blt |  | [blt](http://www-01.sil.org/iso639-3/documentation.asp?id=blt) | ltr | [21.5, 102.7](http://www.openstreetmap.org/#map=5/21.47/102.7) | Asia |
| Hmong Njua | hnj | [blu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) | [hnj](http://www-01.sil.org/iso639-3/documentation.asp?id=hnj) | ltr | [22.6, 102.0](http://www.openstreetmap.org/#map=5/22.56/101.95) | Asia |
| Bote | bmj | [bmj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bmj) | [bmj](http://www-01.sil.org/iso639-3/documentation.asp?id=bmj) | ltr | [27.6, 84.3](http://www.openstreetmap.org/#map=5/27.6/84.3) | Asia |
| Bora | boa | [boa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) | [boa](http://www-01.sil.org/iso639-3/documentation.asp?id=boa) | ltr | [-2.9, -68.9](http://www.openstreetmap.org/#map=5/-2.91/-68.91) | Americas |
| Tibetan, Central | bo | [tic](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) | [bod](http://www-01.sil.org/iso639-3/documentation.asp?id=bod) | ltr | [28.4, 90.2](http://www.openstreetmap.org/#map=5/28.37/90.19) | Asia |
| Bosnian (Cyrillic) | bs-Cyrl | [src4](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) | [bos](http://www-01.sil.org/iso639-3/documentation.asp?id=bos) | ltr | [42.9, 17.7](http://www.openstreetmap.org/#map=5/42.93/17.67) | Europe |
| Bosnian (Latin) | bs-Latn | [src1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) | [bos](http://www-01.sil.org/iso639-3/documentation.asp?id=bos) | ltr | [42.9, 17.7](http://www.openstreetmap.org/#map=5/42.93/17.67) | Europe |
| Bishnupriya | bpy | [bpy](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpy) | [bpy](http://www-01.sil.org/iso639-3/documentation.asp?id=bpy) | ltr | [24.5, 92.0](http://www.openstreetmap.org/#map=5/24.46/92.02) | Asia |
| Baram | brd | [brd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brd) | [brd](http://www-01.sil.org/iso639-3/documentation.asp?id=brd) | ltr | [28.5, 85.0](http://www.openstreetmap.org/#map=5/28.5/85) | Asia |
| Breton | br | [brt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) | [bre](http://www-01.sil.org/iso639-3/documentation.asp?id=bre) | ltr | [48.3, -3.8](http://www.openstreetmap.org/#map=5/48.25/-3.79) | Europe |
| Bodo | brx | [brx](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brx) | [brx](http://www-01.sil.org/iso639-3/documentation.asp?id=brx) | ltr | [26.8, 88.2](http://www.openstreetmap.org/#map=5/26.83/88.2) | Asia |
| Bulu | bum | [btb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) | [bum](http://www-01.sil.org/iso639-3/documentation.asp?id=bum) | ltr | [3.2, 11.6](http://www.openstreetmap.org/#map=5/3.16/11.64) | Africa |
| Bushi | buc | [buc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) | [buc](http://www-01.sil.org/iso639-3/documentation.asp?id=buc) | ltr | [-13.0, 45.1](http://www.openstreetmap.org/#map=5/-12.97/45.14) | Africa |
| Bugis | bug | [bpr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) | [bug](http://www-01.sil.org/iso639-3/documentation.asp?id=bug) | ltr | [-0.3, 119.3](http://www.openstreetmap.org/#map=5/-0.25/119.25) | Asia |
| Bulgarian | bg | [blg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) | [bul](http://www-01.sil.org/iso639-3/documentation.asp?id=bul) | ltr | [43.4, 25.1](http://www.openstreetmap.org/#map=5/43.36/25.05) | Europe |
| Belanda Viri | bvi | [bvi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bvi) | [bvi](http://www-01.sil.org/iso639-3/documentation.asp?id=bvi) | ltr | [7.4, 27.7](http://www.openstreetmap.org/#map=5/7.41/27.7) | Africa |
| Bhujel | byh | [byh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=byh) | [byh](http://www-01.sil.org/iso639-3/documentation.asp?id=byh) | ltr | [28.0, 84.5](http://www.openstreetmap.org/#map=5/28/84.5) | Asia |
| Garifuna | cab | [cab](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) | [cab](http://www-01.sil.org/iso639-3/documentation.asp?id=cab) | ltr | [15.3, -86.9](http://www.openstreetmap.org/#map=5/15.35/-86.91) | Americas |
| Kaqchikel, Central | cak | [cak1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) | [cak](http://www-01.sil.org/iso639-3/documentation.asp?id=cak) | ltr | [14.5, -91.0](http://www.openstreetmap.org/#map=5/14.47/-90.99) | Americas |
| Catalan-Valencian-Balear | ca | [cln](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) | [cat](http://www-01.sil.org/iso639-3/documentation.asp?id=cat) | ltr | [41.9, 3.4](http://www.openstreetmap.org/#map=5/41.9/3.39) | Europe |
| Chiquitano | cax | [cax](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cax) | [cax](http://www-01.sil.org/iso639-3/documentation.asp?id=cax) | ltr | [-17.6, -59.9](http://www.openstreetmap.org/#map=5/-17.64/-59.92) | Americas |
| Chachi | cbi | [1122](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) | [cbi](http://www-01.sil.org/iso639-3/documentation.asp?id=cbi) | ltr | [0.7, -79.0](http://www.openstreetmap.org/#map=5/0.71/-79.05) | Americas |
| Cashibo-Cacataibo | cbr | [cbr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) | [cbr](http://www-01.sil.org/iso639-3/documentation.asp?id=cbr) | ltr | [-8.7, -75.4](http://www.openstreetmap.org/#map=5/-8.7/-75.42) | Americas |
| Cashinahua | cbs | [cbs](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) | [cbs](http://www-01.sil.org/iso639-3/documentation.asp?id=cbs) | ltr | [-9.7, -71.2](http://www.openstreetmap.org/#map=5/-9.72/-71.17) | Americas |
| Chayahuita | cbt | [cbt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) | [cbt](http://www-01.sil.org/iso639-3/documentation.asp?id=cbt) | ltr | [-5.6, -76.8](http://www.openstreetmap.org/#map=5/-5.64/-76.83) | Americas |
| Candoshi-Shapra | cbu | [cbu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) | [cbu](http://www-01.sil.org/iso639-3/documentation.asp?id=cbu) | ltr | [-4.2, -76.9](http://www.openstreetmap.org/#map=5/-4.24/-76.93) | Americas |
| Chakma | ccp |  | [ccp](http://www-01.sil.org/iso639-3/documentation.asp?id=ccp) | ltr | [23.0, 92.0](http://www.openstreetmap.org/#map=5/23/92) | Asia |
| Zhuang, Yongbei | za | [ccx](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) | [zyb](http://www-01.sil.org/iso639-3/documentation.asp?id=zyb) | ltr | [23.7, 107.2](http://www.openstreetmap.org/#map=5/23.68/107.18) | Asia |
| Chepang | cdm | [cdm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cdm) | [cdm](http://www-01.sil.org/iso639-3/documentation.asp?id=cdm) | ltr | [27.8, 84.5](http://www.openstreetmap.org/#map=5/27.8/84.5) | Asia |
| Cebuano | ceb | [ceb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) | [ceb](http://www-01.sil.org/iso639-3/documentation.asp?id=ceb) | ltr | [8.4, 124.4](http://www.openstreetmap.org/#map=5/8.39/124.37) | Asia |
| Czech | cs | [czc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) | [ces](http://www-01.sil.org/iso639-3/documentation.asp?id=ces) | ltr | [49.9, 15.1](http://www.openstreetmap.org/#map=5/49.87/15.1) | Europe |
| Chamorro | ch | [cjd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) | [cha](http://www-01.sil.org/iso639-3/documentation.asp?id=cha) | ltr | [14.3, 145.3](http://www.openstreetmap.org/#map=5/14.33/145.28) | Pacific |
| Chinantec, Ojitlán | chj | [chj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) | [chj](http://www-01.sil.org/iso639-3/documentation.asp?id=chj) | ltr | [18.1, -96.3](http://www.openstreetmap.org/#map=5/18.07/-96.34) | Americas |
| Chuukese | chk | [tru1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) | [chk](http://www-01.sil.org/iso639-3/documentation.asp?id=chk) | ltr | [7.3, 151.6](http://www.openstreetmap.org/#map=5/7.34/151.6) | Pacific |
| Cherokee (cased) | chr |  | [chr](http://www-01.sil.org/iso639-3/documentation.asp?id=chr) | ltr | [35.5, -83.2](http://www.openstreetmap.org/#map=5/35.47/-83.16) | Americas |
| Cherokee (uppercase) | chr |  | [chr](http://www-01.sil.org/iso639-3/documentation.asp?id=chr) | ltr | [35.5, -83.2](http://www.openstreetmap.org/#map=5/35.47/-83.16) | Americas |
| Chantyal | chx | [chx](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chx) | [chx](http://www-01.sil.org/iso639-3/documentation.asp?id=chx) | ltr | [28.7, 83.5](http://www.openstreetmap.org/#map=5/28.7/83.5) | Asia |
| Chickasaw | cic | [cic](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) | [cic](http://www-01.sil.org/iso639-3/documentation.asp?id=cic) | ltr | [34.0, -97.1](http://www.openstreetmap.org/#map=5/33.95/-97.13) | Americas |
| Chokwe | cjk | [cjk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | [cjk](http://www-01.sil.org/iso639-3/documentation.asp?id=cjk) | ltr | [-9.7, 21.4](http://www.openstreetmap.org/#map=5/-9.66/21.4) | Africa |
| Chokwe (Angola) | cjk | [cjk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | [cjk](http://www-01.sil.org/iso639-3/documentation.asp?id=cjk) | ltr | [-9.7, 21.4](http://www.openstreetmap.org/#map=5/-9.66/21.4) | Africa |
| Shor | cjs | [cjs](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) | [cjs](http://www-01.sil.org/iso639-3/documentation.asp?id=cjs) | ltr | [52.3, 88.4](http://www.openstreetmap.org/#map=5/52.33/88.43) | Asia |
| Kurdish, Central | ku | [kdb1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) | [ckb](http://www-01.sil.org/iso639-3/documentation.asp?id=ckb) | ltr | [35.6, 45.8](http://www.openstreetmap.org/#map=5/35.65/45.81) | Asia |
| Chinese, Mandarin (Simplified) | zh-Hans | [chn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chn) | [cmn](http://www-01.sil.org/iso639-3/documentation.asp?id=cmn) | ltr | [40.0, 116.2](http://www.openstreetmap.org/#map=5/40.02/116.23) | Asia |
| Chinese, Mandarin (Traditional) | zh-Hant |  | [cmn](http://www-01.sil.org/iso639-3/documentation.asp?id=cmn) | ltr | [40.0, 116.2](http://www.openstreetmap.org/#map=5/40.02/116.23) | Asia |
| Chin, Haka | cnh | [hak](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) | [cnh](http://www-01.sil.org/iso639-3/documentation.asp?id=cnh) | ltr | [22.9, 92.8](http://www.openstreetmap.org/#map=5/22.87/92.82) | Asia |
| Asháninka | cni | [cni](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) | [cni](http://www-01.sil.org/iso639-3/documentation.asp?id=cni) | ltr | [-11.9, -73.9](http://www.openstreetmap.org/#map=5/-11.93/-73.91) | Americas |
| Colorado | cof | [cof](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) | [cof](http://www-01.sil.org/iso639-3/documentation.asp?id=cof) | ltr | [-0.2, -79.2](http://www.openstreetmap.org/#map=5/-0.21/-79.23) | Americas |
| Cofán | con | [ccc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccc) | [con](http://www-01.sil.org/iso639-3/documentation.asp?id=con) | ltr | [0.3, -77.1](http://www.openstreetmap.org/#map=5/0.28/-77.06) | Americas |
| Corsican | co | [coi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) | [cos](http://www-01.sil.org/iso639-3/documentation.asp?id=cos) | ltr | [41.7, 9.3](http://www.openstreetmap.org/#map=5/41.7/9.26) | Europe |
| Caquinte | cot | [cot](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) | [cot](http://www-01.sil.org/iso639-3/documentation.asp?id=cot) | ltr | [-11.5, -73.5](http://www.openstreetmap.org/#map=5/-11.48/-73.45) | Americas |
| Ashéninka, Pichis | cpu | [cpu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) | [cpu](http://www-01.sil.org/iso639-3/documentation.asp?id=cpu) | ltr | [-10.5, -74.6](http://www.openstreetmap.org/#map=5/-10.47/-74.6) | Americas |
| Seselwa Creole French | crs | [crs](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) | [crs](http://www-01.sil.org/iso639-3/documentation.asp?id=crs) | ltr | [-4.6, 55.5](http://www.openstreetmap.org/#map=5/-4.62/55.45) | Africa |
| Chinantec, Chiltepec | csa | [csa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) | [csa](http://www-01.sil.org/iso639-3/documentation.asp?id=csa) | ltr | [18.1, -96.2](http://www.openstreetmap.org/#map=5/18.06/-96.22) | Americas |
| Cree, Swampy | csw | [crm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) | [csw](http://www-01.sil.org/iso639-3/documentation.asp?id=csw) | ltr | [56.0, -95.0](http://www.openstreetmap.org/#map=5/56/-95) | Americas |
| Chin, Tedim | ctd | [tid](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) | [ctd](http://www-01.sil.org/iso639-3/documentation.asp?id=ctd) | ltr | [23.6, 93.5](http://www.openstreetmap.org/#map=5/23.61/93.52) | Asia |
| Welsh | cy | [wls](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) | [cym](http://www-01.sil.org/iso639-3/documentation.asp?id=cym) | ltr | [52.0, -4.0](http://www.openstreetmap.org/#map=5/52/-4) | Europe |
| Dagbani | dag | [dag](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) | [dag](http://www-01.sil.org/iso639-3/documentation.asp?id=dag) | ltr | [9.7, -0.4](http://www.openstreetmap.org/#map=5/9.65/-0.43) | Africa |
| Danish | da | [dns](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) | [dan](http://www-01.sil.org/iso639-3/documentation.asp?id=dan) | ltr | [54.9, 9.4](http://www.openstreetmap.org/#map=5/54.87/9.36) | Europe |
| Dendi | ddn | [den](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) | [ddn](http://www-01.sil.org/iso639-3/documentation.asp?id=ddn) | ltr | [11.7, 3.5](http://www.openstreetmap.org/#map=5/11.67/3.49) | Africa |
| German, Standard (1901) | de-1901 | [ger](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) | [deu](http://www-01.sil.org/iso639-3/documentation.asp?id=deu) | ltr | [48.6, 12.5](http://www.openstreetmap.org/#map=5/48.65/12.47) | Europe |
| German, Standard (1996) | de-1996 |  | [deu](http://www-01.sil.org/iso639-3/documentation.asp?id=deu) | ltr | [48.6, 12.5](http://www.openstreetmap.org/#map=5/48.65/12.47) | Europe |
| Dagaare, Southern | dga | [dga](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) | [dga](http://www-01.sil.org/iso639-3/documentation.asp?id=dga) | ltr | [10.4, -2.5](http://www.openstreetmap.org/#map=5/10.42/-2.52) | Africa |
| Dhimal | dhi | [dhi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dhi) | [dhi](http://www-01.sil.org/iso639-3/documentation.asp?id=dhi) | ltr | [26.5, 87.8](http://www.openstreetmap.org/#map=5/26.5/87.8) | Asia |
| Danuwar | dhw | [dhw](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dhw) | [dhw](http://www-01.sil.org/iso639-3/documentation.asp?id=dhw) | ltr | [27.6, 85.0](http://www.openstreetmap.org/#map=5/27.55/85.01) | Asia |
| Dinka, Northeastern | dip | [dinka](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) | [dip](http://www-01.sil.org/iso639-3/documentation.asp?id=dip) | ltr | [9.3, 31.8](http://www.openstreetmap.org/#map=5/9.28/31.84) | Africa |
| Maldivian | dv | [div](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) | [div](http://www-01.sil.org/iso639-3/documentation.asp?id=div) | rtl | [3.8, 73.1](http://www.openstreetmap.org/#map=5/3.83/73.07) | Asia |
| Darai | dry | [dry](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dry) | [dry](http://www-01.sil.org/iso639-3/documentation.asp?id=dry) | ltr | [27.8, 84.1](http://www.openstreetmap.org/#map=5/27.8/84.1) | Asia |
| Jola-Fonyi | dyo | [dyo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) | [dyo](http://www-01.sil.org/iso639-3/documentation.asp?id=dyo) | ltr | [12.8, -15.7](http://www.openstreetmap.org/#map=5/12.76/-15.74) | Africa |
| Jula | dyu | [dyu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) | [dyu](http://www-01.sil.org/iso639-3/documentation.asp?id=dyu) | ltr | [10.4, -4.7](http://www.openstreetmap.org/#map=5/10.45/-4.72) | Africa |
| Dzongkha | dz | [dzo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) | [dzo](http://www-01.sil.org/iso639-3/documentation.asp?id=dzo) | ltr | [27.4, 89.6](http://www.openstreetmap.org/#map=5/27.41/89.58) | Asia |
| Greek (monotonic) | el-monoton | [grk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) | [ell](http://www-01.sil.org/iso639-3/documentation.asp?id=ell) | ltr | [42.3, 24.9](http://www.openstreetmap.org/#map=5/42.32/24.87) | Europe |
| Greek (polytonic) | el-polyton |  | [ell](http://www-01.sil.org/iso639-3/documentation.asp?id=ell) | ltr | [42.3, 24.9](http://www.openstreetmap.org/#map=5/42.32/24.87) | Europe |
| Maninkakan, Eastern | emk | [mni](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) | [emk](http://www-01.sil.org/iso639-3/documentation.asp?id=emk) | ltr | [9.3, -10.5](http://www.openstreetmap.org/#map=5/9.33/-10.54) | Africa |
| Emiliano-Romagnolo | eml | [eml](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) | [rgn](http://www-01.sil.org/iso639-3/documentation.asp?id=rgn) | ltr | [44.2, 11.7](http://www.openstreetmap.org/#map=5/44.23/11.72) | Europe |
| English | en | [eng](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) | [eng](http://www-01.sil.org/iso639-3/documentation.asp?id=eng) | ltr | [53.0, -1.0](http://www.openstreetmap.org/#map=5/53/-1) | Europe |
| Esperanto | eo | [1115](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1115) | [epo](http://www-01.sil.org/iso639-3/documentation.asp?id=epo) | ltr | [49.3, 2.8](http://www.openstreetmap.org/#map=5/49.33/2.81) | Other |
| Estonian | et | [est](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) | [est](http://www-01.sil.org/iso639-3/documentation.asp?id=est) | ltr | [58.5, 25.8](http://www.openstreetmap.org/#map=5/58.55/25.82) | Europe |
| Basque | eu | [bsq](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) | [eus](http://www-01.sil.org/iso639-3/documentation.asp?id=eus) | ltr | [43.3, -1.3](http://www.openstreetmap.org/#map=5/43.28/-1.32) | Europe |
| Even | eve | [eve](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) | [eve](http://www-01.sil.org/iso639-3/documentation.asp?id=eve) | ltr | [70.7, 130.9](http://www.openstreetmap.org/#map=5/70.67/130.91) | Asia |
| Evenki | evn | [evn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) | [evn](http://www-01.sil.org/iso639-3/documentation.asp?id=evn) | ltr | [53.9, 108.6](http://www.openstreetmap.org/#map=5/53.85/108.63) | Asia |
| Éwé | ee | [ewe](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) | [ewe](http://www-01.sil.org/iso639-3/documentation.asp?id=ewe) | ltr | [6.5, 0.8](http://www.openstreetmap.org/#map=5/6.46/0.81) | Africa |
| Faroese | fo | [fae](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) | [fao](http://www-01.sil.org/iso639-3/documentation.asp?id=fao) | ltr | [62.1, -6.9](http://www.openstreetmap.org/#map=5/62.07/-6.88) | Europe |
| Fijian | fj | [fji](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) | [fij](http://www-01.sil.org/iso639-3/documentation.asp?id=fij) | ltr | [-18.0, 178.3](http://www.openstreetmap.org/#map=5/-18/178.33) | Pacific |
| Finnish | fi | [fin](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) | [fin](http://www-01.sil.org/iso639-3/documentation.asp?id=fin) | ltr | [64.8, 25.6](http://www.openstreetmap.org/#map=5/64.76/25.56) | Europe |
| Chin, Falam | cfm | [fal](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) | [cfm](http://www-01.sil.org/iso639-3/documentation.asp?id=cfm) | ltr | [23.8, 92.3](http://www.openstreetmap.org/#map=5/23.79/92.33) | Asia |
| Fon | fon | [foa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) | [fon](http://www-01.sil.org/iso639-3/documentation.asp?id=fon) | ltr | [7.2, 1.7](http://www.openstreetmap.org/#map=5/7.15/1.66) | Africa |
| French | fr | [frn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) | [fra](http://www-01.sil.org/iso639-3/documentation.asp?id=fra) | ltr | [48.0, 2.0](http://www.openstreetmap.org/#map=5/48/2) | Europe |
| Frisian | fy | [fri](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) | [fry](http://www-01.sil.org/iso639-3/documentation.asp?id=fry) | ltr | [53.1, 5.9](http://www.openstreetmap.org/#map=5/53.14/5.86) | Europe |
| Pular | fuf | [fuf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) | [fuf](http://www-01.sil.org/iso639-3/documentation.asp?id=fuf) | ltr | [12.2, -12.7](http://www.openstreetmap.org/#map=5/12.18/-12.73) | Africa |
| Friulian | fur | [frl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) | [fur](http://www-01.sil.org/iso639-3/documentation.asp?id=fur) | ltr | [46.1, 13.1](http://www.openstreetmap.org/#map=5/46.15/13.05) | Europe |
| Fulfulde, Nigerian | fuv | [fum](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) | [fuv](http://www-01.sil.org/iso639-3/documentation.asp?id=fuv) | ltr | [11.0, 11.1](http://www.openstreetmap.org/#map=5/11/11.12) | Africa |
| Ga | gaa | [gac2](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) | [gaa](http://www-01.sil.org/iso639-3/documentation.asp?id=gaa) | ltr | [5.7, -0.2](http://www.openstreetmap.org/#map=5/5.65/-0.19) | Africa |
| Gagauz | gag | [gag](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) | [gag](http://www-01.sil.org/iso639-3/documentation.asp?id=gag) | ltr | [44.6, 28.0](http://www.openstreetmap.org/#map=5/44.6/28.03) | Europe |
| Oromo, Borana-Arsi-Guji | om | [gax](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) | [gax](http://www-01.sil.org/iso639-3/documentation.asp?id=gax) | ltr | [1.1, 37.9](http://www.openstreetmap.org/#map=5/1.06/37.88) | Africa |
| Garhwali | gbm | [gbm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbm) | [gbm](http://www-01.sil.org/iso639-3/documentation.asp?id=gbm) | ltr | [30.5, 78.7](http://www.openstreetmap.org/#map=5/30.51/78.72) | Asia |
| Gonja | gjn | [dum](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) | [gjn](http://www-01.sil.org/iso639-3/documentation.asp?id=gjn) | ltr | [8.5, -0.7](http://www.openstreetmap.org/#map=5/8.49/-0.73) | Africa |
| Kpelle, Guinea | kpe | [gkp1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gkp1) | [gkp](http://www-01.sil.org/iso639-3/documentation.asp?id=gkp) | ltr | [7.9, -9.0](http://www.openstreetmap.org/#map=5/7.93/-8.99) | Africa |
| Gaelic, Scottish | gd | [gls](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) | [gla](http://www-01.sil.org/iso639-3/documentation.asp?id=gla) | ltr | [56.8, -5.2](http://www.openstreetmap.org/#map=5/56.76/-5.24) | Europe |
| Nanai | gld | [gld](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) | [gld](http://www-01.sil.org/iso639-3/documentation.asp?id=gld) | ltr | [48.4, 134.8](http://www.openstreetmap.org/#map=5/48.43/134.8) | Asia |
| Gaelic, Irish | ga | [gli1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) | [gle](http://www-01.sil.org/iso639-3/documentation.asp?id=gle) | ltr | [53.2, -7.6](http://www.openstreetmap.org/#map=5/53.22/-7.62) | Europe |
| Galician | gl | [gln](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) | [glg](http://www-01.sil.org/iso639-3/documentation.asp?id=glg) | ltr | [42.2, -7.5](http://www.openstreetmap.org/#map=5/42.24/-7.53) | Europe |
| Manx | gv |  | [glv](http://www-01.sil.org/iso639-3/documentation.asp?id=glv) | ltr | [54.2, -4.8](http://www.openstreetmap.org/#map=5/54.23/-4.85) | Europe |
| Gondi, Northern | gno | [gno](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gno) | [gno](http://www-01.sil.org/iso639-3/documentation.asp?id=gno) | ltr | [18.2, 81.4](http://www.openstreetmap.org/#map=5/18.16/81.38) | Asia |
| Wayuu | guc | [guc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) | [guc](http://www-01.sil.org/iso639-3/documentation.asp?id=guc) | ltr | [10.2, -71.8](http://www.openstreetmap.org/#map=5/10.23/-71.81) | Americas |
| Guaraní, Paraguayan | gn | [gun](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) | [gug](http://www-01.sil.org/iso639-3/documentation.asp?id=gug) | ltr | [-25.6, -57.1](http://www.openstreetmap.org/#map=5/-25.61/-57.09) | Americas |
| Gujarati | gu | [gjr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) | [guj](http://www-01.sil.org/iso639-3/documentation.asp?id=guj) | ltr | [22.7, 71.1](http://www.openstreetmap.org/#map=5/22.69/71.1) | Asia |
| Yanomamö | guu | [guu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) | [guu](http://www-01.sil.org/iso639-3/documentation.asp?id=guu) | ltr | [1.7, -64.9](http://www.openstreetmap.org/#map=5/1.68/-64.88) | Americas |
| Gurung, Western | gvr | [gvr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gvr) | [gvr](http://www-01.sil.org/iso639-3/documentation.asp?id=gvr) | ltr | [27.4, 86.3](http://www.openstreetmap.org/#map=5/27.42/86.29) | Asia |
| Guarayu | gyr | [gua](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) | [gyr](http://www-01.sil.org/iso639-3/documentation.asp?id=gyr) | ltr | [-15.8, -61.7](http://www.openstreetmap.org/#map=5/-15.82/-61.69) | Americas |
| Haitian Creole French (Kreyol) | ht | [hat](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) | [hat](http://www-01.sil.org/iso639-3/documentation.asp?id=hat) | ltr | [19.0, -73.3](http://www.openstreetmap.org/#map=5/19/-73.33) | Americas |
| Haitian Creole French (Popular) | ht | [hat1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) | [hat](http://www-01.sil.org/iso639-3/documentation.asp?id=hat) | ltr | [19.0, -73.3](http://www.openstreetmap.org/#map=5/19/-73.33) | Americas |
| Hausa (Niger) | ha-NE | [gej](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | [hau](http://www-01.sil.org/iso639-3/documentation.asp?id=hau) | ltr | [11.2, 8.8](http://www.openstreetmap.org/#map=5/11.15/8.78) | Africa |
| Hausa (Nigeria) | ha-NG | [gej](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | [hau](http://www-01.sil.org/iso639-3/documentation.asp?id=hau) | ltr | [11.2, 8.8](http://www.openstreetmap.org/#map=5/11.15/8.78) | Africa |
| Hawaiian | haw | [hwi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) | [haw](http://www-01.sil.org/iso639-3/documentation.asp?id=haw) | ltr | [19.6, -155.4](http://www.openstreetmap.org/#map=5/19.63/-155.43) | Pacific |
| Hmong, Northern Qiandong | hea | [hea](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) | [hea](http://www-01.sil.org/iso639-3/documentation.asp?id=hea) | ltr | [26.6, 108.2](http://www.openstreetmap.org/#map=5/26.63/108.16) | Asia |
| Hebrew | he | [hbr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) | [heb](http://www-01.sil.org/iso639-3/documentation.asp?id=heb) | rtl | [31.1, 35.0](http://www.openstreetmap.org/#map=5/31.11/35.02) | Asia |
| Hiligaynon | hil | [hil](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) | [hil](http://www-01.sil.org/iso639-3/documentation.asp?id=hil) | ltr | [10.4, 123.0](http://www.openstreetmap.org/#map=5/10.4/122.97) | Asia |
| Hindi | hi | [hnd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) | [hin](http://www-01.sil.org/iso639-3/documentation.asp?id=hin) | ltr | [25.0, 77.0](http://www.openstreetmap.org/#map=5/25/77) | Asia |
| Chin, Matu | hlt | [hlt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) | [hlt](http://www-01.sil.org/iso639-3/documentation.asp?id=hlt) | ltr | [23.3, 92.8](http://www.openstreetmap.org/#map=5/23.31/92.83) | Asia |
| Hmong, Southern Qiandong | hms | [hms](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) | [hms](http://www-01.sil.org/iso639-3/documentation.asp?id=hms) | ltr | [25.7, 108.5](http://www.openstreetmap.org/#map=5/25.66/108.53) | Asia |
| Mina | hna | [hna](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) | [hna](http://www-01.sil.org/iso639-3/documentation.asp?id=hna) | ltr | [10.4, 13.8](http://www.openstreetmap.org/#map=5/10.38/13.84) | Africa |
| Chhattisgarhi | hne | [hne](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hne) | [hne](http://www-01.sil.org/iso639-3/documentation.asp?id=hne) | ltr | [20.4, 82.0](http://www.openstreetmap.org/#map=5/20.36/82.05) | Asia |
| Hani | hni | [hni](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) | [hni](http://www-01.sil.org/iso639-3/documentation.asp?id=hni) | ltr | [22.7, 102.8](http://www.openstreetmap.org/#map=5/22.68/102.85) | Asia |
| Hindustani, Sarnami | hns | [hns](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) | [hns](http://www-01.sil.org/iso639-3/documentation.asp?id=hns) | ltr | [7.7, -58.6](http://www.openstreetmap.org/#map=5/7.67/-58.57) | Americas |
| Ho | hoc | [Hoc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Hoc) | [hoc](http://www-01.sil.org/iso639-3/documentation.asp?id=hoc) | ltr | [87.1, 24.0](http://www.openstreetmap.org/#map=5/87.12/23.96) | Asia |
| Croatian | hr | [src2](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) | [hrv](http://www-01.sil.org/iso639-3/documentation.asp?id=hrv) | ltr | [45.2, 16.8](http://www.openstreetmap.org/#map=5/45.2/16.83) | Europe |
| Sorbian, Upper | hsb | [wee](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) | [hsb](http://www-01.sil.org/iso639-3/documentation.asp?id=hsb) | ltr | [51.2, 14.4](http://www.openstreetmap.org/#map=5/51.24/14.41) | Europe |
| Huastec (Sierra de Otontepec) | hus | [hus](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) | [hus](http://www-01.sil.org/iso639-3/documentation.asp?id=hus) | ltr | [21.6, -98.5](http://www.openstreetmap.org/#map=5/21.62/-98.5) | Americas |
| Hungarian | hu | [hng](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) | [hun](http://www-01.sil.org/iso639-3/documentation.asp?id=hun) | ltr | [46.9, 19.7](http://www.openstreetmap.org/#map=5/46.91/19.66) | Europe |
| Huastec, Veracruz | hus | [1118](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1118) | [hus](http://www-01.sil.org/iso639-3/documentation.asp?id=hus) | ltr | [21.6, -98.5](http://www.openstreetmap.org/#map=5/21.62/-98.5) | Americas |
| Huitoto, Murui | huu | [huu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) | [huu](http://www-01.sil.org/iso639-3/documentation.asp?id=huu) | ltr | [-1.1, -73.8](http://www.openstreetmap.org/#map=5/-1.14/-73.83) | Americas |
| Huastec | hus | [hva](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) | [hus](http://www-01.sil.org/iso639-3/documentation.asp?id=hus) | ltr | [21.6, -98.5](http://www.openstreetmap.org/#map=5/21.62/-98.5) | Americas |
| Armenian | hy | [arm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) | [hye](http://www-01.sil.org/iso639-3/documentation.asp?id=hye) | ltr | [40.0, 45.0](http://www.openstreetmap.org/#map=5/40/45) | Asia |
| Ibibio | ibb | [ibb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) | [ibb](http://www-01.sil.org/iso639-3/documentation.asp?id=ibb) | ltr | [5.2, 7.9](http://www.openstreetmap.org/#map=5/5.15/7.87) | Africa |
| Igbo | ig | [igr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) | [ibo](http://www-01.sil.org/iso639-3/documentation.asp?id=ibo) | ltr | [4.6, 7.2](http://www.openstreetmap.org/#map=5/4.63/7.23) | Africa |
| Ido | io | [1120](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1120) | [ido](http://www-01.sil.org/iso639-3/documentation.asp?id=ido) | ltr | [-75.0, 20.0](http://www.openstreetmap.org/#map=5/-75/20) | Other |
| Nuosu | ii | [iii](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=iii) | [iii](http://www-01.sil.org/iso639-3/documentation.asp?id=iii) | ltr | [28.2, 102.1](http://www.openstreetmap.org/#map=5/28.19/102.12) | Asia |
| Inuktitut, Eastern Canadian | iu | [esb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) | [ike](http://www-01.sil.org/iso639-3/documentation.asp?id=ike) | ltr | [62.2, -75.6](http://www.openstreetmap.org/#map=5/62.17/-75.61) | Americas |
| Ilocano | ilo | [ilo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) | [ilo](http://www-01.sil.org/iso639-3/documentation.asp?id=ilo) | ltr | [15.9, 121.0](http://www.openstreetmap.org/#map=5/15.94/120.99) | Asia |
| Interlingua | ia | [1119](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1119) | [ina](http://www-01.sil.org/iso639-3/documentation.asp?id=ina) | ltr | [48.2, 2.6](http://www.openstreetmap.org/#map=5/48.2/2.62) | Other |
| Indonesian | id | [inz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) | [ind](http://www-01.sil.org/iso639-3/documentation.asp?id=ind) | ltr | [-7.3, 109.7](http://www.openstreetmap.org/#map=5/-7.33/109.72) | Asia |
| Icelandic | is | [ice](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) | [isl](http://www-01.sil.org/iso639-3/documentation.asp?id=isl) | ltr | [63.5, -19.0](http://www.openstreetmap.org/#map=5/63.48/-19.02) | Europe |
| Italian | it | [itn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) | [ita](http://www-01.sil.org/iso639-3/documentation.asp?id=ita) | ltr | [43.0, 12.7](http://www.openstreetmap.org/#map=5/43.05/12.65) | Europe |
| Javanese | jv | [jan](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) | [jav](http://www-01.sil.org/iso639-3/documentation.asp?id=jav) | ltr | [-0.6, 110.9](http://www.openstreetmap.org/#map=5/-0.57/110.89) | Asia |
| Shuar | jiv | [1125](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) | [jiv](http://www-01.sil.org/iso639-3/documentation.asp?id=jiv) | ltr | [-3.5, -78.2](http://www.openstreetmap.org/#map=5/-3.45/-78.19) | Americas |
| Japanese | ja | [jpn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) | [jpn](http://www-01.sil.org/iso639-3/documentation.asp?id=jpn) | ltr | [35.0, 135.0](http://www.openstreetmap.org/#map=5/35/135) | Asia |
| Jirel | jul | [jul](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jul) | [jul](http://www-01.sil.org/iso639-3/documentation.asp?id=jul) | ltr | [27.7, 86.3](http://www.openstreetmap.org/#map=5/27.69/86.32) | Asia |
| Inuktitut, Greenlandic | kl | [esg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) | [kal](http://www-01.sil.org/iso639-3/documentation.asp?id=kal) | ltr | [69.4, -52.9](http://www.openstreetmap.org/#map=5/69.38/-52.86) | Americas |
| Kannada | kn | [kjv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) | [kan](http://www-01.sil.org/iso639-3/documentation.asp?id=kan) | ltr | [13.6, 76.1](http://www.openstreetmap.org/#map=5/13.59/76.12) | Asia |
| Kashmiri | ks | [ksh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ksh) | [kas](http://www-01.sil.org/iso639-3/documentation.asp?id=kas) | ltr | [34.2, 74.3](http://www.openstreetmap.org/#map=5/34.17/74.33) | Asia |
| Georgian | ka | [geo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) | [kat](http://www-01.sil.org/iso639-3/documentation.asp?id=kat) | ltr | [39.4, 45.8](http://www.openstreetmap.org/#map=5/39.37/45.81) | Asia |
| Kazakh | kk | [kaz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) | [kaz](http://www-01.sil.org/iso639-3/documentation.asp?id=kaz) | ltr | [41.9, 65.8](http://www.openstreetmap.org/#map=5/41.87/65.77) | Asia |
| Kabardian | kbd | [kbd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) | [kbd](http://www-01.sil.org/iso639-3/documentation.asp?id=kbd) | ltr | [43.5, 43.4](http://www.openstreetmap.org/#map=5/43.51/43.39) | Asia |
| Kabiyé | kbp | [kbp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) | [kbp](http://www-01.sil.org/iso639-3/documentation.asp?id=kbp) | ltr | [9.0, 0.5](http://www.openstreetmap.org/#map=5/8.97/0.5) | Africa |
| Makonde | kde | [kde](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) | [kde](http://www-01.sil.org/iso639-3/documentation.asp?id=kde) | ltr | [-11.0, 39.5](http://www.openstreetmap.org/#map=5/-10.99/39.51) | Africa |
| Tem | kdh | [kdh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) | [kdh](http://www-01.sil.org/iso639-3/documentation.asp?id=kdh) | ltr | [8.0, 1.0](http://www.openstreetmap.org/#map=5/8/1) | Africa |
| Kabuverdianu | kea | [kea](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) | [kea](http://www-01.sil.org/iso639-3/documentation.asp?id=kea) | ltr | [15.1, -23.6](http://www.openstreetmap.org/#map=5/15.06/-23.61) | Africa |
| Q'eqchi' | kek | [1116](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1116) | [kek](http://www-01.sil.org/iso639-3/documentation.asp?id=kek) | ltr | [15.4, -89.3](http://www.openstreetmap.org/#map=5/15.38/-89.25) | Americas |
| Kodava | kfa | [kfa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kfa) | [kfa](http://www-01.sil.org/iso639-3/documentation.asp?id=kfa) | ltr | [12.2, 75.9](http://www.openstreetmap.org/#map=5/12.24/75.92) | Asia |
| Pahari, Kullu | kfx | [kfx](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kfx) | [kfx](http://www-01.sil.org/iso639-3/documentation.asp?id=kfx) | ltr | [27.3, 87.1](http://www.openstreetmap.org/#map=5/27.3/87.1) | Asia |
| Kusunda | kgg | [kgg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kgg) | [kgg](http://www-01.sil.org/iso639-3/documentation.asp?id=kgg) | ltr | [27.5, 85.0](http://www.openstreetmap.org/#map=5/27.5/85) | Asia |
| Khasi | kha | [kha](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) | [kha](http://www-01.sil.org/iso639-3/documentation.asp?id=kha) | ltr | [25.0, 92.0](http://www.openstreetmap.org/#map=5/24.98/92) | Asia |
| Mongolian, Halh (Cyrillic) | mn-Cyrl | [khk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) | [khk](http://www-01.sil.org/iso639-3/documentation.asp?id=khk) | ltr | [48.3, 106.3](http://www.openstreetmap.org/#map=5/48.32/106.29) | Asia |
| Mongolian, Halh (Mongolian) | mn-Mong |  | [khk](http://www-01.sil.org/iso639-3/documentation.asp?id=khk) | ltr | [48.3, 106.3](http://www.openstreetmap.org/#map=5/48.32/106.29) | Asia |
| Khmer, Central | km | [khm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) | [khm](http://www-01.sil.org/iso639-3/documentation.asp?id=khm) | ltr | [12.1, 105.0](http://www.openstreetmap.org/#map=5/12.05/105.02) | Asia |
| Kharia | khr | [khr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khr) | [khr](http://www-01.sil.org/iso639-3/documentation.asp?id=khr) | ltr | [22.4, 84.4](http://www.openstreetmap.org/#map=5/22.36/84.39) | Asia |
| Rwanda | rw | [rua1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) | [kin](http://www-01.sil.org/iso639-3/documentation.asp?id=kin) | ltr | [-1.6, 29.6](http://www.openstreetmap.org/#map=5/-1.57/29.64) | Africa |
| Kirghiz | ky | [kdo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) | [kir](http://www-01.sil.org/iso639-3/documentation.asp?id=kir) | ltr | [42.0, 74.0](http://www.openstreetmap.org/#map=5/42/74) | Asia |
| Khakas | kjh | [kjh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) | [kjh](http://www-01.sil.org/iso639-3/documentation.asp?id=kjh) | ltr | [50.7, 107.2](http://www.openstreetmap.org/#map=5/50.74/107.17) | Asia |
| Khün | kkh-Lana |  | [kkh](http://www-01.sil.org/iso639-3/documentation.asp?id=kkh) | ltr | [20.7, 99.5](http://www.openstreetmap.org/#map=5/20.7/99.5) | Asia |
| Mbundu | kmb | [mlo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) | [kmb](http://www-01.sil.org/iso639-3/documentation.asp?id=kmb) | ltr | [-9.0, 14.9](http://www.openstreetmap.org/#map=5/-8.98/14.89) | Africa |
| Kurdish, Northern | kmr | [kur](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | [kmr](http://www-01.sil.org/iso639-3/documentation.asp?id=kmr) | ltr | [37.0, 43.0](http://www.openstreetmap.org/#map=5/37/43) | Asia |
| Kanuri, Central | knc | [kph](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) | [knc](http://www-01.sil.org/iso639-3/documentation.asp?id=knc) | ltr | [11.9, 16.4](http://www.openstreetmap.org/#map=5/11.89/16.39) | Africa |
| Koongo | kg | [kon](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) | [kng](http://www-01.sil.org/iso639-3/documentation.asp?id=kng) | ltr | [-5.6, 14.5](http://www.openstreetmap.org/#map=5/-5.58/14.48) | Africa |
| Koongo (Angola) | kg | [kng](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) | [kng](http://www-01.sil.org/iso639-3/documentation.asp?id=kng) | ltr | [-5.6, 14.5](http://www.openstreetmap.org/#map=5/-5.58/14.48) | Africa |
| Komi-Permyak | koi | [koi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) | [koi](http://www-01.sil.org/iso639-3/documentation.asp?id=koi) | ltr | [59.7, 54.8](http://www.openstreetmap.org/#map=5/59.66/54.8) | Europe |
| Konjo | koo | [koo1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) | [koo](http://www-01.sil.org/iso639-3/documentation.asp?id=koo) | ltr | [0.3, 29.9](http://www.openstreetmap.org/#map=5/0.32/29.87) | Africa |
| Korean | ko | [kkn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) | [kor](http://www-01.sil.org/iso639-3/documentation.asp?id=kor) | ltr | [37.5, 128.0](http://www.openstreetmap.org/#map=5/37.5/128) | Asia |
| Kaonde | kqn | [kqn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) | [kqn](http://www-01.sil.org/iso639-3/documentation.asp?id=kqn) | ltr | [-12.4, 25.8](http://www.openstreetmap.org/#map=5/-12.41/25.76) | Africa |
| Kumhali | kra | [kra](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kra) | [kra](http://www-01.sil.org/iso639-3/documentation.asp?id=kra) | ltr | [27.8, 84.1](http://www.openstreetmap.org/#map=5/27.8/84.1) | Asia |
| Krio | kri | [kri](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) | [kri](http://www-01.sil.org/iso639-3/documentation.asp?id=kri) | ltr | [10.9, -14.3](http://www.openstreetmap.org/#map=5/10.88/-14.32) | Africa |
| Karelian | krl | [krl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) | [krl](http://www-01.sil.org/iso639-3/documentation.asp?id=krl) | ltr | [65.2, 30.9](http://www.openstreetmap.org/#map=5/65.17/30.87) | Asia |
| Karen, S'gaw | ksw | [ksw](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ksw) | [ksw](http://www-01.sil.org/iso639-3/documentation.asp?id=ksw) | ltr | [18.0, 97.7](http://www.openstreetmap.org/#map=5/17.99/97.71) | Asia |
| Kituba | ktu | [ktu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) | [ktu](http://www-01.sil.org/iso639-3/documentation.asp?id=ktu) | ltr | [-2.3, 17.1](http://www.openstreetmap.org/#map=5/-2.3/17.15) | Africa |
| Awa-Cuaiquer | kwi | [kwi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) | [kwi](http://www-01.sil.org/iso639-3/documentation.asp?id=kwi) | ltr | [1.2, -78.3](http://www.openstreetmap.org/#map=5/1.22/-78.34) | Americas |
| Kurux, Nepali | kxl | [kxl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kxl) | [kxl](http://www-01.sil.org/iso639-3/documentation.asp?id=kxl) | ltr | [26.7, 86.0](http://www.openstreetmap.org/#map=5/26.72/86) | Asia |
| Ladino | lad | [lad](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) | [lad](http://www-01.sil.org/iso639-3/documentation.asp?id=lad) | ltr | [41.2, 28.7](http://www.openstreetmap.org/#map=5/41.2/28.66) | Asia |
| Lao | lo | [nol](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) | [lao](http://www-01.sil.org/iso639-3/documentation.asp?id=lao) | ltr | [16.1, 104.6](http://www.openstreetmap.org/#map=5/16.07/104.57) | Asia |
| Latin | la | [ltn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) | [lat](http://www-01.sil.org/iso639-3/documentation.asp?id=lat) | ltr | [41.9, 12.4](http://www.openstreetmap.org/#map=5/41.9/12.45) | Europe |
| Latin (1) | la | [ltn1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) | [lat](http://www-01.sil.org/iso639-3/documentation.asp?id=lat) | ltr | [41.9, 12.4](http://www.openstreetmap.org/#map=5/41.9/12.45) | Europe |
| Latvian | lv | [lat](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | [lav](http://www-01.sil.org/iso639-3/documentation.asp?id=lav) | ltr | [56.8, 24.3](http://www.openstreetmap.org/#map=5/56.83/24.31) | Europe |
| Lepcha | lep | [lep](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lep) | [lep](http://www-01.sil.org/iso639-3/documentation.asp?id=lep) | ltr | [27.0, 87.8](http://www.openstreetmap.org/#map=5/27/87.8) | Asia |
| Lhomi | lhm | [lhm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lhm) | [lhm](http://www-01.sil.org/iso639-3/documentation.asp?id=lhm) | ltr | [27.6, 87.7](http://www.openstreetmap.org/#map=5/27.59/87.72) | Asia |
| Limba, West-Central | lia | [lia](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) | [lia](http://www-01.sil.org/iso639-3/documentation.asp?id=lia) | ltr | [9.5, -12.3](http://www.openstreetmap.org/#map=5/9.52/-12.31) | Africa |
| Limbu | lif | [lif](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lif) | [lif](http://www-01.sil.org/iso639-3/documentation.asp?id=lif) | ltr | [27.3, 87.9](http://www.openstreetmap.org/#map=5/27.27/87.89) | Asia |
| Ligurian | lij | [lij](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) | [lij](http://www-01.sil.org/iso639-3/documentation.asp?id=lij) | ltr | [44.1, 7.9](http://www.openstreetmap.org/#map=5/44.08/7.91) | Europe |
| Lingala | ln | [lin](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) | [lin](http://www-01.sil.org/iso639-3/documentation.asp?id=lin) | ltr | [1.4, 19.8](http://www.openstreetmap.org/#map=5/1.4/19.78) | Africa |
| Lingala (tones) | ln |  | [lin](http://www-01.sil.org/iso639-3/documentation.asp?id=lin) | ltr | [1.4, 19.8](http://www.openstreetmap.org/#map=5/1.4/19.78) | Africa |
| Lithuanian | lt | [lit](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) | [lit](http://www-01.sil.org/iso639-3/documentation.asp?id=lit) | ltr | [55.1, 24.0](http://www.openstreetmap.org/#map=5/55.14/23.96) | Europe |
| Ladin | lld | [lld](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) | [lld](http://www-01.sil.org/iso639-3/documentation.asp?id=lld) | ltr | [46.6, 11.9](http://www.openstreetmap.org/#map=5/46.61/11.89) | Europe |
| Occitan (Languedocien) | oc | [prv1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Lamnso' | lns | [nso](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) | [lns](http://www-01.sil.org/iso639-3/documentation.asp?id=lns) | ltr | [6.4, 11.1](http://www.openstreetmap.org/#map=5/6.4/11.07) | Africa |
| Lobi | lob | [lob](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) | [lob](http://www-01.sil.org/iso639-3/documentation.asp?id=lob) | ltr | [10.0, -3.3](http://www.openstreetmap.org/#map=5/9.96/-3.34) | Africa |
| Otuho | lot | [lot](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) | [lot](http://www-01.sil.org/iso639-3/documentation.asp?id=lot) | ltr | [4.2, 32.7](http://www.openstreetmap.org/#map=5/4.16/32.66) | Africa |
| Lozi | loz | [lbm1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) | [loz](http://www-01.sil.org/iso639-3/documentation.asp?id=loz) | ltr | [-17.7, 24.7](http://www.openstreetmap.org/#map=5/-17.71/24.74) | Africa |
| Luxembourgeois | lb | [lux](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) | [ltz](http://www-01.sil.org/iso639-3/documentation.asp?id=ltz) | ltr | [49.7, 6.2](http://www.openstreetmap.org/#map=5/49.68/6.15) | Europe |
| Luba-Kasai | lua | [lub](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) | [lua](http://www-01.sil.org/iso639-3/documentation.asp?id=lua) | ltr | [-5.7, 22.4](http://www.openstreetmap.org/#map=5/-5.73/22.44) | Africa |
| Luvale | lue | [lue](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) | [lue](http://www-01.sil.org/iso639-3/documentation.asp?id=lue) | ltr | [-13.5, 22.3](http://www.openstreetmap.org/#map=5/-13.54/22.29) | Africa |
| Ganda | lg | [lap1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) | [lug](http://www-01.sil.org/iso639-3/documentation.asp?id=lug) | ltr | [0.7, 32.1](http://www.openstreetmap.org/#map=5/0.67/32.15) | Africa |
| Lunda | lun | [mlo1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) | [lun](http://www-01.sil.org/iso639-3/documentation.asp?id=lun) | ltr | [-11.2, 23.9](http://www.openstreetmap.org/#map=5/-11.18/23.87) | Africa |
| Mizo | lus | [lus](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) | [lus](http://www-01.sil.org/iso639-3/documentation.asp?id=lus) | ltr | [22.6, 92.6](http://www.openstreetmap.org/#map=5/22.61/92.62) | Asia |
| Madura | mad | [mhj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) | [mad](http://www-01.sil.org/iso639-3/documentation.asp?id=mad) | ltr | [-7.0, 113.0](http://www.openstreetmap.org/#map=5/-7/113) | Asia |
| Magahi | mag | [mqm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) | [mag](http://www-01.sil.org/iso639-3/documentation.asp?id=mag) | ltr | [25.1, 85.3](http://www.openstreetmap.org/#map=5/25.09/85.33) | Asia |
| Marshallese | mh | [mzm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) | [mah](http://www-01.sil.org/iso639-3/documentation.asp?id=mah) | ltr | [3.1, 170.5](http://www.openstreetmap.org/#map=5/3.13/170.46) | Pacific |
| Maithili | mai |  | [mai](http://www-01.sil.org/iso639-3/documentation.asp?id=mai) | ltr | [26.4, 86.2](http://www.openstreetmap.org/#map=5/26.38/86.22) | Asia |
| Maithili (2) | mai | [mai](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mai) | [mai](http://www-01.sil.org/iso639-3/documentation.asp?id=mai) | ltr | [26.4, 86.2](http://www.openstreetmap.org/#map=5/26.38/86.22) | Asia |
| Malayalam | ml | [mjs](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | [mal](http://www-01.sil.org/iso639-3/documentation.asp?id=mal) | ltr | [9.6, 76.8](http://www.openstreetmap.org/#map=5/9.59/76.77) | Asia |
| Mam, Northern | mam | [mam](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) | [mam](http://www-01.sil.org/iso639-3/documentation.asp?id=mam) | ltr | [14.8, -91.7](http://www.openstreetmap.org/#map=5/14.8/-91.72) | Americas |
| Marathi | mr | [mrt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) | [mar](http://www-01.sil.org/iso639-3/documentation.asp?id=mar) | ltr | [17.9, 76.7](http://www.openstreetmap.org/#map=5/17.93/76.67) | Asia |
| Mazahua Central | maz | [maz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) | [maz](http://www-01.sil.org/iso639-3/documentation.asp?id=maz) | ltr | [19.7, -100.0](http://www.openstreetmap.org/#map=5/19.74/-100.02) | Americas |
| Sharanahua | mcd | [mcd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) | [mcd](http://www-01.sil.org/iso639-3/documentation.asp?id=mcd) | ltr | [-9.9, -71.1](http://www.openstreetmap.org/#map=5/-9.86/-71.12) | Americas |
| Matsés | mcf | [mcf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) | [mcf](http://www-01.sil.org/iso639-3/documentation.asp?id=mcf) | ltr | [-5.7, -72.6](http://www.openstreetmap.org/#map=5/-5.74/-72.63) | Americas |
| Mende | men | [mfy](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) | [men](http://www-01.sil.org/iso639-3/documentation.asp?id=men) | ltr | [7.9, -11.0](http://www.openstreetmap.org/#map=5/7.91/-10.99) | Africa |
| Maga, Eastern | mgp | [mag](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mag) | [mgp](http://www-01.sil.org/iso639-3/documentation.asp?id=mgp) | ltr | [27.4, 87.1](http://www.openstreetmap.org/#map=5/27.41/87.06) | Asia |
| Micmac | mic | [mic](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) | [mic](http://www-01.sil.org/iso639-3/documentation.asp?id=mic) | ltr | [46.0, -65.6](http://www.openstreetmap.org/#map=5/45.99/-65.58) | Americas |
| Minangkabau | min | [mpu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) | [min](http://www-01.sil.org/iso639-3/documentation.asp?id=min) | ltr | [4.2, 96.3](http://www.openstreetmap.org/#map=5/4.17/96.25) | Asia |
| Mískito | miq | [miq](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) | [miq](http://www-01.sil.org/iso639-3/documentation.asp?id=miq) | ltr | [15.2, -84.3](http://www.openstreetmap.org/#map=5/15.16/-84.29) | Americas |
| Mahji | mjz | [mjz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjz) | [mjz](http://www-01.sil.org/iso639-3/documentation.asp?id=mjz) | ltr | [29.5, 80.4](http://www.openstreetmap.org/#map=5/29.46/80.38) | Asia |
| Macedonian | mk | [mkj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) | [mkd](http://www-01.sil.org/iso639-3/documentation.asp?id=mkd) | ltr | [41.6, 21.8](http://www.openstreetmap.org/#map=5/41.6/21.79) | Europe |
| Maltese | mt | [mls](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) | [mlt](http://www-01.sil.org/iso639-3/documentation.asp?id=mlt) | ltr | [35.9, 14.4](http://www.openstreetmap.org/#map=5/35.89/14.45) | Europe |
| Malay (Arabic) | ms-Arab |  | [zlm](http://www-01.sil.org/iso639-3/documentation.asp?id=zlm) | rtl | [1.9, 103.0](http://www.openstreetmap.org/#map=5/1.86/103) | Asia |
| Malay (Latin) | ms-Latn | [mli](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) | [zlm](http://www-01.sil.org/iso639-3/documentation.asp?id=zlm) | ltr | [1.9, 103.0](http://www.openstreetmap.org/#map=5/1.86/103) | Asia |
| Mon | mnw |  | [mnw](http://www-01.sil.org/iso639-3/documentation.asp?id=mnw) | ltr | [10.0, 100.0](http://www.openstreetmap.org/#map=5/10/100) | Asia |
| Mòoré | mos | [mhm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) | [mos](http://www-01.sil.org/iso639-3/documentation.asp?id=mos) | ltr | [10.4, -1.2](http://www.openstreetmap.org/#map=5/10.45/-1.17) | Africa |
| Maori | mi | [mbf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) | [mri](http://www-01.sil.org/iso639-3/documentation.asp?id=mri) | ltr | [-38.3, 176.5](http://www.openstreetmap.org/#map=5/-38.29/176.54) | Pacific |
| Mixe, Totontepec | mto | [mto](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) | [mto](http://www-01.sil.org/iso639-3/documentation.asp?id=mto) | ltr | [17.2, -96.0](http://www.openstreetmap.org/#map=5/17.22/-96.02) | Americas |
| Marwari | mwr | [mkd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkd) | [mve](http://www-01.sil.org/iso639-3/documentation.asp?id=mve) | ltr | [28.3, 71.6](http://www.openstreetmap.org/#map=5/28.32/71.57) | Asia |
| Mongolian, Peripheral (Mongolian) | mvf-Mong | [mvf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mvf) | [mvf](http://www-01.sil.org/iso639-3/documentation.asp?id=mvf) | ttb | [42.0, 115.0](http://www.openstreetmap.org/#map=5/42/115) | Asia |
| Mozarabic | mxi | [moz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) | [mxi](http://www-01.sil.org/iso639-3/documentation.asp?id=mxi) | ltr | [37.9, -1.8](http://www.openstreetmap.org/#map=5/37.88/-1.8) | Europe |
| Mixtec, Metlatónoc | mxv | [mxv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) | [mxv](http://www-01.sil.org/iso639-3/documentation.asp?id=mxv) | ltr | [17.1, -98.3](http://www.openstreetmap.org/#map=5/17.05/-98.35) | Americas |
| Burmese | my | [bms](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) | [mya](http://www-01.sil.org/iso639-3/documentation.asp?id=mya) | ltr | [20.8, 94.0](http://www.openstreetmap.org/#map=5/20.79/93.97) | Asia |
| Mazatec, Ixcatlán | mzi | [mao](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) | [mzi](http://www-01.sil.org/iso639-3/documentation.asp?id=mzi) | ltr | [18.1, -96.6](http://www.openstreetmap.org/#map=5/18.15/-96.57) | Americas |
| Navajo | nv | [nav](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) | [nav](http://www-01.sil.org/iso639-3/documentation.asp?id=nav) | ltr | [36.2, -110.1](http://www.openstreetmap.org/#map=5/36.21/-110.08) | Americas |
| Nyemba | nba | [nba](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) | [nba](http://www-01.sil.org/iso639-3/documentation.asp?id=nba) | ltr | [-15.7, 18.3](http://www.openstreetmap.org/#map=5/-15.71/18.25) | Africa |
| Ndebele | nr | [nel](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) | [nbl](http://www-01.sil.org/iso639-3/documentation.asp?id=nbl) | ltr | [-25.6, 29.1](http://www.openstreetmap.org/#map=5/-25.63/29.05) | Africa |
| Ndonga | ng | [1114](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1114) | [ndo](http://www-01.sil.org/iso639-3/documentation.asp?id=ndo) | ltr | [-17.6, 19.2](http://www.openstreetmap.org/#map=5/-17.64/19.16) | Africa |
| Saxon, Low | nds | [ige](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) | [nds](http://www-01.sil.org/iso639-3/documentation.asp?id=nds) | ltr | [50.8, 6.1](http://www.openstreetmap.org/#map=5/50.77/6.09) | Europe |
| Nepali | ne | [nep](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) | [npi](http://www-01.sil.org/iso639-3/documentation.asp?id=npi) | ltr | [27.5, 85.0](http://www.openstreetmap.org/#map=5/27.5/85) | Asia |
| Newar | new | [new](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=new) | [new](http://www-01.sil.org/iso639-3/documentation.asp?id=new) | ltr | [27.3, 85.0](http://www.openstreetmap.org/#map=5/27.26/84.96) | Asia |
| Nahuatl, Central | nah | [nhn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) | [nhn](http://www-01.sil.org/iso639-3/documentation.asp?id=nhn) | ltr | [19.1, -98.3](http://www.openstreetmap.org/#map=5/19.12/-98.3) | Americas |
| Nganasan | nio | [nio](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) | [nio](http://www-01.sil.org/iso639-3/documentation.asp?id=nio) | ltr | [73.1, 86.2](http://www.openstreetmap.org/#map=5/73.14/86.21) | Asia |
| Gilyak | niv | [Nivkh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Nivkh) | [niv](http://www-01.sil.org/iso639-3/documentation.asp?id=niv) | ltr | [52.6, 140.7](http://www.openstreetmap.org/#map=5/52.59/140.68) | Asia |
| Naga, Ao | njo | [njo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) | [njo](http://www-01.sil.org/iso639-3/documentation.asp?id=njo) | ltr | [26.3, 94.4](http://www.openstreetmap.org/#map=5/26.32/94.38) | Asia |
| Kulango, Bouna | nku | [kou](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) | [nku](http://www-01.sil.org/iso639-3/documentation.asp?id=nku) | ltr | [8.5, -2.8](http://www.openstreetmap.org/#map=5/8.46/-2.75) | Africa |
| Dutch | nl | [dut](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) | [nld](http://www-01.sil.org/iso639-3/documentation.asp?id=nld) | ltr | [52.0, 5.0](http://www.openstreetmap.org/#map=5/52/5) | Europe |
| Norwegian, Nynorsk | nn | [nrn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) | [nno](http://www-01.sil.org/iso639-3/documentation.asp?id=nno) | ltr | [61.0, 11.0](http://www.openstreetmap.org/#map=5/61/11) | Europe |
| Norwegian, Bokmål | nb | [nrr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) | [nob](http://www-01.sil.org/iso639-3/documentation.asp?id=nob) | ltr | [61.0, 8.0](http://www.openstreetmap.org/#map=5/61/8) | Europe |
| Nomatsiguenga | not | [not](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) | [not](http://www-01.sil.org/iso639-3/documentation.asp?id=not) | ltr | [-11.5, -74.4](http://www.openstreetmap.org/#map=5/-11.53/-74.44) | Americas |
| Sotho, Northern | nso | [srt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) | [nso](http://www-01.sil.org/iso639-3/documentation.asp?id=nso) | ltr | [-24.8, 29.5](http://www.openstreetmap.org/#map=5/-24.8/29.47) | Africa |
| Nuer | nus | [nus](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nus) | [nus](http://www-01.sil.org/iso639-3/documentation.asp?id=nus) | ltr | [8.1, 32.4](http://www.openstreetmap.org/#map=5/8.14/32.38) | Africa |
| Nyanja (Chechewa) | ny | [nyj1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) | [nya](http://www-01.sil.org/iso639-3/documentation.asp?id=nya) | ltr | [-14.8, 32.8](http://www.openstreetmap.org/#map=5/-14.8/32.81) | Africa |
| Nyanja (Chinyanja) | ny | [nyj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) | [nya](http://www-01.sil.org/iso639-3/documentation.asp?id=nya) | ltr | [-14.8, 32.8](http://www.openstreetmap.org/#map=5/-14.8/32.81) | Africa |
| Nyamwezi | nym | [nyz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) | [nym](http://www-01.sil.org/iso639-3/documentation.asp?id=nym) | ltr | [-5.1, 32.9](http://www.openstreetmap.org/#map=5/-5.09/32.94) | Africa |
| Nyankore | nyn | [nyn1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) | [nyn](http://www-01.sil.org/iso639-3/documentation.asp?id=nyn) | ltr | [-0.5, 30.6](http://www.openstreetmap.org/#map=5/-0.46/30.55) | Africa |
| Nzema | nzi | [nze](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) | [nzi](http://www-01.sil.org/iso639-3/documentation.asp?id=nzi) | ltr | [5.2, -2.8](http://www.openstreetmap.org/#map=5/5.18/-2.81) | Africa |
| Orok | oaa | [oaa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) | [oaa](http://www-01.sil.org/iso639-3/documentation.asp?id=oaa) | ltr | [49.4, 143.1](http://www.openstreetmap.org/#map=5/49.36/143.13) | Asia |
| Occitan (Francoprovençal, Fribourg) | oc | [Fr3](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Occitan (Francoprovençal, Savoie) | oc | [fr2](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Occitan (Francoprovençal, Vaud) | oc | [fr4](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Occitan (Francoprovençal, Valais) | oc | [frp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Ojibwa, Northwestern | oj | [ojb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) | [ojb](http://www-01.sil.org/iso639-3/documentation.asp?id=ojb) | ltr | [51.6, -87.8](http://www.openstreetmap.org/#map=5/51.62/-87.79) | Americas |
| Okiek | oki | [oki](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) | [oki](http://www-01.sil.org/iso639-3/documentation.asp?id=oki) | ltr | [-2.8, 36.6](http://www.openstreetmap.org/#map=5/-2.78/36.6) | Africa |
| Oroqen | orh | [orh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) | [orh](http://www-01.sil.org/iso639-3/documentation.asp?id=orh) | ltr | [50.0, 125.0](http://www.openstreetmap.org/#map=5/50/125) | Asia |
| Oriya | or | [ory](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ory) | [ori](http://www-01.sil.org/iso639-3/documentation.asp?id=ori) | ltr | [21.7, 86.9](http://www.openstreetmap.org/#map=5/21.66/86.86) | Asia |
| Osetin | os | [ose](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) | [oss](http://www-01.sil.org/iso639-3/documentation.asp?id=oss) | ltr | [41.8, 43.3](http://www.openstreetmap.org/#map=5/41.79/43.27) | Asia |
| Otomi, Mezquital | ote | [1111](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1111) | [ote](http://www-01.sil.org/iso639-3/documentation.asp?id=ote) | ltr | [20.2, -99.6](http://www.openstreetmap.org/#map=5/20.23/-99.56) | Americas |
| Pampangan | pam | [pmp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) | [pam](http://www-01.sil.org/iso639-3/documentation.asp?id=pam) | ltr | [15.0, 120.5](http://www.openstreetmap.org/#map=5/14.96/120.5) | Asia |
| Panjabi, Eastern | pa | [pnj1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) | [pan](http://www-01.sil.org/iso639-3/documentation.asp?id=pan) | ltr | [30.0, 75.7](http://www.openstreetmap.org/#map=5/30.04/75.67) | Asia |
| Papiamentu | pap | [pap](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) | [pap](http://www-01.sil.org/iso639-3/documentation.asp?id=pap) | ltr | [12.5, -69.9](http://www.openstreetmap.org/#map=5/12.48/-69.94) | Americas |
| Palauan | pau | [plu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) | [pau](http://www-01.sil.org/iso639-3/documentation.asp?id=pau) | ltr | [7.2, 134.5](http://www.openstreetmap.org/#map=5/7.17/134.5) | Pacific |
| Páez | pbb | [pbb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) | [pbb](http://www-01.sil.org/iso639-3/documentation.asp?id=pbb) | ltr | [2.6, -76.3](http://www.openstreetmap.org/#map=5/2.62/-76.31) | Americas |
| Pashto, Northern | ps | [pbu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) | [pbu](http://www-01.sil.org/iso639-3/documentation.asp?id=pbu) | rtl | [35.0, 71.3](http://www.openstreetmap.org/#map=5/35/71.33) | Asia |
| Picard | pcd | [frn2](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) | [pcd](http://www-01.sil.org/iso639-3/documentation.asp?id=pcd) | ltr | [50.3, 3.3](http://www.openstreetmap.org/#map=5/50.28/3.25) | Europe |
| Pidgin, Nigerian | pcm | [pcm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) | [pcm](http://www-01.sil.org/iso639-3/documentation.asp?id=pcm) | ltr | [9.7, 4.2](http://www.openstreetmap.org/#map=5/9.66/4.21) | Africa |
| Farsi, Western | fa | [prs](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) | [pes](http://www-01.sil.org/iso639-3/documentation.asp?id=pes) | rtl | [28.7, 55.2](http://www.openstreetmap.org/#map=5/28.66/55.16) | Asia |
| Dari | fa-AF | [prs1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) | [prs](http://www-01.sil.org/iso639-3/documentation.asp?id=prs) | rtl | [28.7, 55.2](http://www.openstreetmap.org/#map=5/28.66/55.16) | Asia |
| Pijin | pis | [pis](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) | [pis](http://www-01.sil.org/iso639-3/documentation.asp?id=pis) | ltr | [-9.6, 160.1](http://www.openstreetmap.org/#map=5/-9.57/160.14) | Pacific |
| Pintupi-Luritja | piu | [piu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) | [piu](http://www-01.sil.org/iso639-3/documentation.asp?id=piu) | ltr | [-20.1, 128.0](http://www.openstreetmap.org/#map=5/-20.14/127.98) | Pacific |
| Malagasy, Plateau | mg | [mex](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) | [plt](http://www-01.sil.org/iso639-3/documentation.asp?id=plt) | ltr | [-19.6, 47.1](http://www.openstreetmap.org/#map=5/-19.59/47.12) | Africa |
| Panjabi, Western | pnb |  | [pnb](http://www-01.sil.org/iso639-3/documentation.asp?id=pnb) | rtl | [30.1, 75.3](http://www.openstreetmap.org/#map=5/30.09/75.35) | Asia |
| Polish | pl | [pql](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) | [pol](http://www-01.sil.org/iso639-3/documentation.asp?id=pol) | ltr | [51.8, 18.6](http://www.openstreetmap.org/#map=5/51.84/18.63) | Europe |
| Pohnpeian | pon | [pnf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) | [pon](http://www-01.sil.org/iso639-3/documentation.asp?id=pon) | ltr | [6.9, 158.2](http://www.openstreetmap.org/#map=5/6.87/158.22) | Pacific |
| Portuguese (Brazil) | pt-BR |  | [por](http://www-01.sil.org/iso639-3/documentation.asp?id=por) | ltr | [-15.0, -47.0](http://www.openstreetmap.org/#map=5/-15/-47) | Americas |
| Portuguese (Portugal) | pt-PT | [por](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) | [por](http://www-01.sil.org/iso639-3/documentation.asp?id=por) | ltr | [39.9, -8.1](http://www.openstreetmap.org/#map=5/39.91/-8.1) | Europe |
| Crioulo, Upper Guinea | pov | [gbc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) | [pov](http://www-01.sil.org/iso639-3/documentation.asp?id=pov) | ltr | [13.2, -15.3](http://www.openstreetmap.org/#map=5/13.23/-15.33) | Africa |
| Pipil | ppl | [ppl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) | [ppl](http://www-01.sil.org/iso639-3/documentation.asp?id=ppl) | ltr | [13.9, -89.4](http://www.openstreetmap.org/#map=5/13.89/-89.44) | Americas |
| Ashéninka Perené | prq | [cpp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpp) | [prq](http://www-01.sil.org/iso639-3/documentation.asp?id=prq) | ltr | [-11.0, -74.9](http://www.openstreetmap.org/#map=5/-10.98/-74.92) | Americas |
| Occitan | oc | [pro](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) | [oci](http://www-01.sil.org/iso639-3/documentation.asp?id=oci) | ltr | [44.1, 6.8](http://www.openstreetmap.org/#map=5/44.14/6.83) | Europe |
| Karen, Pwo Western | pwo | [pwo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pwo) | [pwo](http://www-01.sil.org/iso639-3/documentation.asp?id=pwo) | ltr | [17.4, 97.7](http://www.openstreetmap.org/#map=5/17.36/97.7) | Asia |
| K'iche', Central | quc | [1117](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1117) | [quc](http://www-01.sil.org/iso639-3/documentation.asp?id=quc) | ltr | [14.5, -91.2](http://www.openstreetmap.org/#map=5/14.53/-91.17) | Americas |
| Quechua (Unified Quichua, old Hispanic orthography) | qu | [qud1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) | [que](http://www-01.sil.org/iso639-3/documentation.asp?id=que) | ltr | [-0.5, -78.5](http://www.openstreetmap.org/#map=5/-0.5/-78.5) | Americas |
| Quichua, Chimborazo Highland | qug | [qug](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) | [qug](http://www-01.sil.org/iso639-3/documentation.asp?id=qug) | ltr | [-1.4, -78.8](http://www.openstreetmap.org/#map=5/-1.37/-78.85) | Americas |
| Quechua, Ayacucho | quy | [quy](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) | [quy](http://www-01.sil.org/iso639-3/documentation.asp?id=quy) | ltr | [-13.8, -74.3](http://www.openstreetmap.org/#map=5/-13.85/-74.32) | Americas |
| Quechua, Cusco | quz | [quz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) | [quz](http://www-01.sil.org/iso639-3/documentation.asp?id=quz) | ltr | [-14.1, -71.8](http://www.openstreetmap.org/#map=5/-14.09/-71.77) | Americas |
| Quechua, Ambo-Pasco | qva | [qeg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) | [qva](http://www-01.sil.org/iso639-3/documentation.asp?id=qva) | ltr | [-10.5, -76.1](http://www.openstreetmap.org/#map=5/-10.51/-76.11) | Americas |
| Quechua, Cajamarca | qvc | [qnt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) | [qvc](http://www-01.sil.org/iso639-3/documentation.asp?id=qvc) | ltr | [-7.1, -78.3](http://www.openstreetmap.org/#map=5/-7.09/-78.32) | Americas |
| Quechua, Huamalíes-Dos de Mayo Huánuco | qvh | [qej](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) | [qvh](http://www-01.sil.org/iso639-3/documentation.asp?id=qvh) | ltr | [-9.2, -76.3](http://www.openstreetmap.org/#map=5/-9.16/-76.34) | Americas |
| Quechua, Margos-Yarowilca-Lauricocha | qvm | [qei](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) | [qvm](http://www-01.sil.org/iso639-3/documentation.asp?id=qvm) | ltr | [-9.8, -76.5](http://www.openstreetmap.org/#map=5/-9.84/-76.5) | Americas |
| Quechua, North Junín | qvn | [qju](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) | [qvn](http://www-01.sil.org/iso639-3/documentation.asp?id=qvn) | ltr | [-11.2, -75.8](http://www.openstreetmap.org/#map=5/-11.21/-75.81) | Americas |
| Quechua, Huaylas Ancash | qwh | [qan](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) | [qwh](http://www-01.sil.org/iso639-3/documentation.asp?id=qwh) | ltr | [-9.4, -77.8](http://www.openstreetmap.org/#map=5/-9.39/-77.78) | Americas |
| Quechua, South Bolivian | quh | [qec1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) | [quh](http://www-01.sil.org/iso639-3/documentation.asp?id=quh) | ltr | [-20.9, -66.3](http://www.openstreetmap.org/#map=5/-20.92/-66.33) | Americas |
| Quechua, Northern Conchucos Ancash | qxn | [qed](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) | [qxn](http://www-01.sil.org/iso639-3/documentation.asp?id=qxn) | ltr | [-9.0, -77.4](http://www.openstreetmap.org/#map=5/-8.97/-77.41) | Americas |
| Quechua, Arequipa-La Unión | qxu | [qar](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) | [qxu](http://www-01.sil.org/iso639-3/documentation.asp?id=qxu) | ltr | [-15.2, -72.6](http://www.openstreetmap.org/#map=5/-15.18/-72.63) | Americas |
| Chamling | rab | [rab](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rab) | [rab](http://www-01.sil.org/iso639-3/documentation.asp?id=rab) | ltr | [27.3, 86.8](http://www.openstreetmap.org/#map=5/27.3/86.8) | Asia |
| Malvi | mup | [raj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=raj) | [mup](http://www-01.sil.org/iso639-3/documentation.asp?id=mup) | ltr | [23.5, 75.6](http://www.openstreetmap.org/#map=5/23.49/75.56) | Asia |
| Rarotongan | rar | [rrt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) | [rar](http://www-01.sil.org/iso639-3/documentation.asp?id=rar) | ltr | [-20.0, -158.0](http://www.openstreetmap.org/#map=5/-20/-158) | Pacific |
| Raji | rji | [rji](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rji) | [rji](http://www-01.sil.org/iso639-3/documentation.asp?id=rji) | ltr | [28.5, 81.3](http://www.openstreetmap.org/#map=5/28.5/81.3) | Asia |
| Rajbanshi | rjs | [rjs](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rjs) | [rjs](http://www-01.sil.org/iso639-3/documentation.asp?id=rjs) | ltr | [26.4, 88.5](http://www.openstreetmap.org/#map=5/26.38/88.45) | Asia |
| Romani, Balkan | rom | [rmn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) | [rmn](http://www-01.sil.org/iso639-3/documentation.asp?id=rmn) | ltr | [42.7, 21.2](http://www.openstreetmap.org/#map=5/42.67/21.17) | Europe |
| Romani, Balkan (1) | rom | [rmn1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) | [rmn](http://www-01.sil.org/iso639-3/documentation.asp?id=rmn) | ltr | [42.7, 21.2](http://www.openstreetmap.org/#map=5/42.67/21.17) | Europe |
| Aromanian | rup | [rmy1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) | [rup](http://www-01.sil.org/iso639-3/documentation.asp?id=rup) | ltr | [42.1, 22.6](http://www.openstreetmap.org/#map=5/42.06/22.65) | Europe |
| Romansch | rm |  | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romansch (Puter) | rm-puter |  | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romansch (Grischun) | rm-rumgr | [rhe](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romansch (Surmiran) | rm-surmiran |  | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romansch (Sursilvan) | rm-survilv |  | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romansch (Sutsilvan) | rm-sutsilv |  | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romansch (Vallader) | rm-vallader |  | [roh](http://www-01.sil.org/iso639-3/documentation.asp?id=roh) | ltr | [46.5, 9.9](http://www.openstreetmap.org/#map=5/46.55/9.93) | Europe |
| Romanian (1953) | ro | [rum](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) | [ron](http://www-01.sil.org/iso639-3/documentation.asp?id=ron) | ltr | [46.4, 24.2](http://www.openstreetmap.org/#map=5/46.39/24.23) | Europe |
| Romanian (1993) | ro |  | [ron](http://www-01.sil.org/iso639-3/documentation.asp?id=ron) | ltr | [46.4, 24.2](http://www.openstreetmap.org/#map=5/46.39/24.23) | Europe |
| Romanian (2006) | ro |  | [ron](http://www-01.sil.org/iso639-3/documentation.asp?id=ron) | ltr | [46.4, 24.2](http://www.openstreetmap.org/#map=5/46.39/24.23) | Europe |
| Rundi | rn | [rud1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) | [run](http://www-01.sil.org/iso639-3/documentation.asp?id=run) | ltr | [-1.4, 31.3](http://www.openstreetmap.org/#map=5/-1.44/31.32) | Africa |
| Russian | ru | [rus](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) | [rus](http://www-01.sil.org/iso639-3/documentation.asp?id=rus) | ltr | [59.0, 50.0](http://www.openstreetmap.org/#map=5/59/50) | Europe |
| Sango | sg | [saj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) | [sag](http://www-01.sil.org/iso639-3/documentation.asp?id=sag) | ltr | [6.8, 20.2](http://www.openstreetmap.org/#map=5/6.79/20.17) | Africa |
| Yakut | sah | [sah](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) | [sah](http://www-01.sil.org/iso639-3/documentation.asp?id=sah) | ltr | [61.7, 134.0](http://www.openstreetmap.org/#map=5/61.7/133.98) | Asia |
| Sanskrit | sa | [skt](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) | [san](http://www-01.sil.org/iso639-3/documentation.asp?id=san) | ltr | [20.0, 77.0](http://www.openstreetmap.org/#map=5/20/77) | Asia |
| Santhali | sat | [sat](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sat) | [sat](http://www-01.sil.org/iso639-3/documentation.asp?id=sat) | ltr | [25.0, 87.8](http://www.openstreetmap.org/#map=5/25.03/87.82) | Asia |
| Sadri | sck | [kis](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kis) | [sck](http://www-01.sil.org/iso639-3/documentation.asp?id=sck) | ltr | [23.7, 84.8](http://www.openstreetmap.org/#map=5/23.66/84.81) | Asia |
| Scots | sco | [sco](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) | [sco](http://www-01.sil.org/iso639-3/documentation.asp?id=sco) | ltr | [55.5, -6.0](http://www.openstreetmap.org/#map=5/55.54/-6) | Europe |
| Helambu Sherpa | scp | [scp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=scp) | [scp](http://www-01.sil.org/iso639-3/documentation.asp?id=scp) | ltr | [27.9, 85.6](http://www.openstreetmap.org/#map=5/27.92/85.63) | Asia |
| Secoya | sey | [1123](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) | [sey](http://www-01.sil.org/iso639-3/documentation.asp?id=sey) | ltr | [0.5, -75.5](http://www.openstreetmap.org/#map=5/0.46/-75.55) | Americas |
| Shilluk | shk | [shk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) | [shk](http://www-01.sil.org/iso639-3/documentation.asp?id=shk) | ltr | [9.8, 31.8](http://www.openstreetmap.org/#map=5/9.85/31.79) | Africa |
| Shan | shn | [sjn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) | [shn](http://www-01.sil.org/iso639-3/documentation.asp?id=shn) | ltr | [21.6, 98.0](http://www.openstreetmap.org/#map=5/21.6/98.03) | Asia |
| Shipibo-Conibo | shp | [shp](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) | [shp](http://www-01.sil.org/iso639-3/documentation.asp?id=shp) | ltr | [-7.2, -74.8](http://www.openstreetmap.org/#map=5/-7.17/-74.82) | Americas |
| Sinhala | si | [snh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) | [sin](http://www-01.sil.org/iso639-3/documentation.asp?id=sin) | ltr | [8.0, 81.0](http://www.openstreetmap.org/#map=5/8/81) | Asia |
| Epena | sja | [1126](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1126) | [sja](http://www-01.sil.org/iso639-3/documentation.asp?id=sja) | ltr | [4.3, -77.4](http://www.openstreetmap.org/#map=5/4.26/-77.36) | Americas |
| Seke | skj | [skj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skj) | [skj](http://www-01.sil.org/iso639-3/documentation.asp?id=skj) | ltr | [28.9, 83.8](http://www.openstreetmap.org/#map=5/28.9/83.8) | Asia |
| Seraiki | skr | [skr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) | [skr](http://www-01.sil.org/iso639-3/documentation.asp?id=skr) | rtl | [29.6, 71.9](http://www.openstreetmap.org/#map=5/29.55/71.91) | Asia |
| Slovak | sk | [slo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) | [slk](http://www-01.sil.org/iso639-3/documentation.asp?id=slk) | ltr | [48.5, 18.8](http://www.openstreetmap.org/#map=5/48.55/18.78) | Europe |
| Slovenian | sl | [slv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) | [slv](http://www-01.sil.org/iso639-3/documentation.asp?id=slv) | ltr | [46.3, 14.8](http://www.openstreetmap.org/#map=5/46.25/14.78) | Europe |
| Saami, North | se | [lpi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) | [sme](http://www-01.sil.org/iso639-3/documentation.asp?id=sme) | ltr | [68.7, 22.1](http://www.openstreetmap.org/#map=5/68.72/22.11) | Europe |
| Samoan | sm | [smy](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) | [smo](http://www-01.sil.org/iso639-3/documentation.asp?id=smo) | ltr | [-13.9, -171.8](http://www.openstreetmap.org/#map=5/-13.92/-171.83) | Pacific |
| Shona | sn | [shd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) | [sna](http://www-01.sil.org/iso639-3/documentation.asp?id=sna) | ltr | [-17.2, 29.8](http://www.openstreetmap.org/#map=5/-17.21/29.76) | Africa |
| Sindhi | sd | [snd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snd) | [snd](http://www-01.sil.org/iso639-3/documentation.asp?id=snd) | ltr | [26.0, 69.0](http://www.openstreetmap.org/#map=5/26/69) | Asia |
| Soninke | snk | [snn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) | [snk](http://www-01.sil.org/iso639-3/documentation.asp?id=snk) | ltr | [13.1, -11.7](http://www.openstreetmap.org/#map=5/13.13/-11.72) | Africa |
| Siona | snn | [1121](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) | [snn](http://www-01.sil.org/iso639-3/documentation.asp?id=snn) | ltr | [0.3, -76.0](http://www.openstreetmap.org/#map=5/0.32/-76.02) | Americas |
| Somali | so | [som](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) | [som](http://www-01.sil.org/iso639-3/documentation.asp?id=som) | ltr | [4.8, 45.1](http://www.openstreetmap.org/#map=5/4.78/45.15) | Africa |
| Sotho, Southern | st | [sso](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) | [sot](http://www-01.sil.org/iso639-3/documentation.asp?id=sot) | ltr | [-30.4, 27.9](http://www.openstreetmap.org/#map=5/-30.44/27.9) | Africa |
| Spanish | es | [spn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) | [spa](http://www-01.sil.org/iso639-3/documentation.asp?id=spa) | ltr | [40.4, -1.1](http://www.openstreetmap.org/#map=5/40.44/-1.12) | Europe |
| Sardinian, Logudorese | sc | [srd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) | [src](http://www-01.sil.org/iso639-3/documentation.asp?id=src) | ltr | [40.5, 9.1](http://www.openstreetmap.org/#map=5/40.49/9.1) | Europe |
| Serbian (Cyrillic) | sr-Cyrl | [src5](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) | [srp](http://www-01.sil.org/iso639-3/documentation.asp?id=srp) | ltr | [44.3, 21.9](http://www.openstreetmap.org/#map=5/44.32/21.92) | Europe |
| Serbian (Latin) | sr-Latn | [src3](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) | [srp](http://www-01.sil.org/iso639-3/documentation.asp?id=srp) | ltr | [44.3, 21.9](http://www.openstreetmap.org/#map=5/44.32/21.92) | Europe |
| Serer-Sine | srr | [ses](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) | [srr](http://www-01.sil.org/iso639-3/documentation.asp?id=srr) | ltr | [13.9, -16.4](http://www.openstreetmap.org/#map=5/13.89/-16.39) | Africa |
| Swati | ss | [swz1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) | [ssw](http://www-01.sil.org/iso639-3/documentation.asp?id=ssw) | ltr | [-26.0, 31.5](http://www.openstreetmap.org/#map=5/-26/31.5) | Africa |
| Sukuma | suk | [sua](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) | [suk](http://www-01.sil.org/iso639-3/documentation.asp?id=suk) | ltr | [-3.2, 32.9](http://www.openstreetmap.org/#map=5/-3.16/32.88) | Africa |
| Sunda | su | [suo](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) | [sun](http://www-01.sil.org/iso639-3/documentation.asp?id=sun) | ltr | [-6.9, 107.1](http://www.openstreetmap.org/#map=5/-6.9/107.11) | Asia |
| Susu | sus | [sus](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) | [sus](http://www-01.sil.org/iso639-3/documentation.asp?id=sus) | ltr | [10.4, -13.4](http://www.openstreetmap.org/#map=5/10.4/-13.36) | Africa |
| Sunwar | suz | [suz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suz) | [suz](http://www-01.sil.org/iso639-3/documentation.asp?id=suz) | ltr | [27.5, 86.3](http://www.openstreetmap.org/#map=5/27.52/86.25) | Asia |
| Sunwar (2) | suz | [suz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suz) | [suz](http://www-01.sil.org/iso639-3/documentation.asp?id=suz) | ltr | [27.5, 86.3](http://www.openstreetmap.org/#map=5/27.52/86.25) | Asia |
| Comorian, Maore | swb | [swb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) | [swb](http://www-01.sil.org/iso639-3/documentation.asp?id=swb) | ltr | [-13.0, 45.1](http://www.openstreetmap.org/#map=5/-12.97/45.14) | Africa |
| Swedish | sv | [swd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) | [swe](http://www-01.sil.org/iso639-3/documentation.asp?id=swe) | ltr | [59.8, 17.4](http://www.openstreetmap.org/#map=5/59.8/17.39) | Europe |
| Swahili | sw | [swa](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) | [swh](http://www-01.sil.org/iso639-3/documentation.asp?id=swh) | ltr | [-8.3, 37.6](http://www.openstreetmap.org/#map=5/-8.26/37.62) | Africa |
| Tahitian | ty | [tht](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) | [tah](http://www-01.sil.org/iso639-3/documentation.asp?id=tah) | ltr | [-17.6, -149.4](http://www.openstreetmap.org/#map=5/-17.65/-149.45) | Pacific |
| Tamang, Eastern | taj | [taj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taj) | [taj](http://www-01.sil.org/iso639-3/documentation.asp?id=taj) | ltr | [27.3, 87.1](http://www.openstreetmap.org/#map=5/27.32/87.08) | Asia |
| Tamil | ta | [tcv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) | [tam](http://www-01.sil.org/iso639-3/documentation.asp?id=tam) | ltr | [10.5, 78.8](http://www.openstreetmap.org/#map=5/10.52/78.83) | Asia |
| Tamasheq | taq | [taq](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taq) | [taq](http://www-01.sil.org/iso639-3/documentation.asp?id=taq) | ltr | [14.2, -2.4](http://www.openstreetmap.org/#map=5/14.2/-2.41) | Africa |
| Tamasheq (Tifinagh) | taq-Tfng | [taq](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taq) | [taq](http://www-01.sil.org/iso639-3/documentation.asp?id=taq) | ltr | [14.2, -2.4](http://www.openstreetmap.org/#map=5/14.2/-2.41) | Africa |
| Tatar | tt | [ttr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) | [tat](http://www-01.sil.org/iso639-3/documentation.asp?id=tat) | ltr | [55.0, 50.0](http://www.openstreetmap.org/#map=5/55/50) | Europe |
| Ditammari | tbz | [tbz](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) | [tbz](http://www-01.sil.org/iso639-3/documentation.asp?id=tbz) | ltr | [10.2, 1.2](http://www.openstreetmap.org/#map=5/10.16/1.18) | Africa |
| Ticuna | tca | [tca](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) | [tca](http://www-01.sil.org/iso639-3/documentation.asp?id=tca) | ltr | [-3.7, -69.9](http://www.openstreetmap.org/#map=5/-3.66/-69.87) | Americas |
| Telugu | te | [tcw](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) | [tel](http://www-01.sil.org/iso639-3/documentation.asp?id=tel) | ltr | [16.4, 78.7](http://www.openstreetmap.org/#map=5/16.45/78.7) | Asia |
| Themne | tem | [tej](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) | [tem](http://www-01.sil.org/iso639-3/documentation.asp?id=tem) | ltr | [8.9, -12.3](http://www.openstreetmap.org/#map=5/8.9/-12.33) | Africa |
| Tetun | tet | [ttm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) | [tet](http://www-01.sil.org/iso639-3/documentation.asp?id=tet) | ltr | [-9.1, 125.5](http://www.openstreetmap.org/#map=5/-9.11/125.53) | Asia |
| Tajiki | tg | [pet](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) | [tgk](http://www-01.sil.org/iso639-3/documentation.asp?id=tgk) | ltr | [38.8, 68.5](http://www.openstreetmap.org/#map=5/38.82/68.55) | Asia |
| Tagalog | tl | [tgl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) | [tgl](http://www-01.sil.org/iso639-3/documentation.asp?id=tgl) | ltr | [14.1, 121.8](http://www.openstreetmap.org/#map=5/14.06/121.75) | Asia |
| Tagalog (Tagalog) | tl-Tglg |  | [tgl](http://www-01.sil.org/iso639-3/documentation.asp?id=tgl) | ltr | [14.1, 121.8](http://www.openstreetmap.org/#map=5/14.06/121.75) | Asia |
| Thai | th | [thj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) | [tha](http://www-01.sil.org/iso639-3/documentation.asp?id=tha) | ltr | [14.2, 100.7](http://www.openstreetmap.org/#map=5/14.19/100.67) | Asia |
| Thai (2) | th |  | [tha](http://www-01.sil.org/iso639-3/documentation.asp?id=tha) | ltr | [14.2, 100.7](http://www.openstreetmap.org/#map=5/14.19/100.67) | Asia |
| Thangmi | thf | [thf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thf) | [thf](http://www-01.sil.org/iso639-3/documentation.asp?id=thf) | ltr | [28.8, 85.8](http://www.openstreetmap.org/#map=5/28.76/85.77) | Asia |
| Tharu, Dangaura | thl | [thl](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thl) | [thl](http://www-01.sil.org/iso639-3/documentation.asp?id=thl) | ltr | [27.9, 81.8](http://www.openstreetmap.org/#map=5/27.88/81.78) | Asia |
| Thakali | ths | [ths](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ths) | [ths](http://www-01.sil.org/iso639-3/documentation.asp?id=ths) | ltr | [28.7, 83.7](http://www.openstreetmap.org/#map=5/28.7/83.65) | Asia |
| Tigrigna | ti | [tgn](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) | [tir](http://www-01.sil.org/iso639-3/documentation.asp?id=tir) | ltr | [15.3, 38.9](http://www.openstreetmap.org/#map=5/15.34/38.93) | Africa |
| Tiv | tiv | [tiv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) | [tiv](http://www-01.sil.org/iso639-3/documentation.asp?id=tiv) | ltr | [6.9, 9.3](http://www.openstreetmap.org/#map=5/6.88/9.26) | Africa |
| Talysh | tly | [tly](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) | [tly](http://www-01.sil.org/iso639-3/documentation.asp?id=tly) | ltr | [38.5, 48.6](http://www.openstreetmap.org/#map=5/38.46/48.63) | Asia |
| Toba | tob | [tob](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) | [tob](http://www-01.sil.org/iso639-3/documentation.asp?id=tob) | ltr | [-24.4, -60.5](http://www.openstreetmap.org/#map=5/-24.4/-60.45) | Americas |
| Tonga | toi | [toi](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) | [toi](http://www-01.sil.org/iso639-3/documentation.asp?id=toi) | ltr | [-17.4, 27.1](http://www.openstreetmap.org/#map=5/-17.42/27.1) | Africa |
| Tojolabal | toj | [toj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) | [toj](http://www-01.sil.org/iso639-3/documentation.asp?id=toj) | ltr | [16.3, -91.8](http://www.openstreetmap.org/#map=5/16.26/-91.78) | Americas |
| Tongan | to | [tov](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) | [ton](http://www-01.sil.org/iso639-3/documentation.asp?id=ton) | ltr | [-21.2, -175.3](http://www.openstreetmap.org/#map=5/-21.17/-175.25) | Pacific |
| Totonac, Papantla | top | [top](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) | [top](http://www-01.sil.org/iso639-3/documentation.asp?id=top) | ltr | [20.6, -97.3](http://www.openstreetmap.org/#map=5/20.57/-97.26) | Americas |
| Tok Pisin | tpi | [pdg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) | [tpi](http://www-01.sil.org/iso639-3/documentation.asp?id=tpi) | ltr | [-9.4, 147.3](http://www.openstreetmap.org/#map=5/-9.42/147.3) | Pacific |
| Tswana | tn | [tsw](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) | [tsn](http://www-01.sil.org/iso639-3/documentation.asp?id=tsn) | ltr | [-24.4, 24.8](http://www.openstreetmap.org/#map=5/-24.37/24.76) | Africa |
| Tsonga (Mozambique) | ts | [tso](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) | [tso](http://www-01.sil.org/iso639-3/documentation.asp?id=tso) | ltr | [-23.6, 31.8](http://www.openstreetmap.org/#map=5/-23.58/31.81) | Africa |
| Purepecha | tsz | [1112](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1112) | [tsz](http://www-01.sil.org/iso639-3/documentation.asp?id=tsz) | ltr | [19.3, -101.6](http://www.openstreetmap.org/#map=5/19.25/-101.63) | Americas |
| Turkmen (Cyrillic) | tk-Cyrl | [tck](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) | [tuk](http://www-01.sil.org/iso639-3/documentation.asp?id=tuk) | ltr | [37.1, 59.2](http://www.openstreetmap.org/#map=5/37.09/59.18) | Asia |
| Turkmen (Latin) | tk-Latn |  | [tuk](http://www-01.sil.org/iso639-3/documentation.asp?id=tuk) | ltr | [37.1, 59.2](http://www.openstreetmap.org/#map=5/37.09/59.18) | Asia |
| Turkish | tr | [trk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) | [tur](http://www-01.sil.org/iso639-3/documentation.asp?id=tur) | ltr | [39.9, 32.9](http://www.openstreetmap.org/#map=5/39.87/32.87) | Asia |
| Tuva | tyv | [tyv](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) | [tyv](http://www-01.sil.org/iso639-3/documentation.asp?id=tyv) | ltr | [48.4, 92.7](http://www.openstreetmap.org/#map=5/48.44/92.67) | Asia |
| Tzotzil | tzo | [tzc](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) | [tzo](http://www-01.sil.org/iso639-3/documentation.asp?id=tzo) | ltr | [16.6, -92.7](http://www.openstreetmap.org/#map=5/16.64/-92.74) | Americas |
| Tzeltal, Oxchuc | tzh | [tzc1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) | [tzh](http://www-01.sil.org/iso639-3/documentation.asp?id=tzh) | ltr | [16.6, -92.3](http://www.openstreetmap.org/#map=5/16.64/-92.28) | Americas |
| Tamazight, Central Atlas | tzm | [tzm](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) | [tzm](http://www-01.sil.org/iso639-3/documentation.asp?id=tzm) | ltr | [32.7, -2.4](http://www.openstreetmap.org/#map=5/32.74/-2.41) | Africa |
| Uyghur (Arabic) | ug-Arab | [uig](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) | [uig](http://www-01.sil.org/iso639-3/documentation.asp?id=uig) | rtl | [43.7, 79.8](http://www.openstreetmap.org/#map=5/43.67/79.75) | Asia |
| Uyghur (Latin) | ug-Latn |  | [uig](http://www-01.sil.org/iso639-3/documentation.asp?id=uig) | ltr | [43.7, 79.8](http://www.openstreetmap.org/#map=5/43.67/79.75) | Asia |
| Ukrainian | uk | [ukr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) | [ukr](http://www-01.sil.org/iso639-3/documentation.asp?id=ukr) | ltr | [48.2, 24.4](http://www.openstreetmap.org/#map=5/48.18/24.4) | Europe |
| Umbundu | umb | [mnf](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) | [umb](http://www-01.sil.org/iso639-3/documentation.asp?id=umb) | ltr | [-12.5, 14.4](http://www.openstreetmap.org/#map=5/-12.48/14.41) | Africa |
| Mundari | unr | [unr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=unr) | [unr](http://www-01.sil.org/iso639-3/documentation.asp?id=unr) | ltr | [25.0, 87.2](http://www.openstreetmap.org/#map=5/25.04/87.18) | Asia |
| Urarina | ura | [ura](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) | [ura](http://www-01.sil.org/iso639-3/documentation.asp?id=ura) | ltr | [-4.4, -75.4](http://www.openstreetmap.org/#map=5/-4.44/-75.42) | Americas |
| Urdu | ur | [urd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | [urd](http://www-01.sil.org/iso639-3/documentation.asp?id=urd) | rtl | [25.0, 67.0](http://www.openstreetmap.org/#map=5/25/67) | Asia |
| Urdu (2) | ur | [urd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | [urd](http://www-01.sil.org/iso639-3/documentation.asp?id=urd) | rtl | [25.0, 67.0](http://www.openstreetmap.org/#map=5/25/67) | Asia |
| Uzbek, Northern (Cyrillic) | uzn-Cyrl | [uzb1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) | [uzn](http://www-01.sil.org/iso639-3/documentation.asp?id=uzn) | ltr | [43.8, 59.2](http://www.openstreetmap.org/#map=5/43.75/59.23) | Asia |
| Uzbek, Northern (Latin) | uzn-Latn | [uzb](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) | [uzn](http://www-01.sil.org/iso639-3/documentation.asp?id=uzn) | ltr | [43.8, 59.2](http://www.openstreetmap.org/#map=5/43.75/59.23) | Asia |
| Vai | vai | [vai](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) | [vai](http://www-01.sil.org/iso639-3/documentation.asp?id=vai) | ltr | [7.0, -11.3](http://www.openstreetmap.org/#map=5/7.05/-11.33) | Africa |
| Wayu | vay | [vay](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vay) | [vay](http://www-01.sil.org/iso639-3/documentation.asp?id=vay) | ltr | [27.5, 85.0](http://www.openstreetmap.org/#map=5/27.5/85) | Asia |
| Venetian | vec | [vec](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) | [vec](http://www-01.sil.org/iso639-3/documentation.asp?id=vec) | ltr | [45.4, 13.0](http://www.openstreetmap.org/#map=5/45.41/13.03) | Europe |
| Venda | ve | [tsh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) | [ven](http://www-01.sil.org/iso639-3/documentation.asp?id=ven) | ltr | [-22.2, 29.9](http://www.openstreetmap.org/#map=5/-22.19/29.95) | Africa |
| Veps | vep | [vep](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) | [vep](http://www-01.sil.org/iso639-3/documentation.asp?id=vep) | ltr | [60.3, 34.8](http://www.openstreetmap.org/#map=5/60.34/34.79) | Asia |
| Vietnamese | vi | [vie](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) | [vie](http://www-01.sil.org/iso639-3/documentation.asp?id=vie) | ltr | [18.4, 106.8](http://www.openstreetmap.org/#map=5/18.39/106.76) | Asia |
| Vietnamese (Han nom) | vi-Hani |  | [vie](http://www-01.sil.org/iso639-3/documentation.asp?id=vie) | ltr | [18.4, 106.8](http://www.openstreetmap.org/#map=5/18.39/106.76) | Asia |
| Makhuwa | vmw | [vmw](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) | [vmw](http://www-01.sil.org/iso639-3/documentation.asp?id=vmw) | ltr | [-14.8, 38.8](http://www.openstreetmap.org/#map=5/-14.85/38.81) | Africa |
| Waray-Waray | war | [wry](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) | [war](http://www-01.sil.org/iso639-3/documentation.asp?id=war) | ltr | [11.5, 125.0](http://www.openstreetmap.org/#map=5/11.49/125.01) | Asia |
| Walloon | wa | [frn1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) | [wln](http://www-01.sil.org/iso639-3/documentation.asp?id=wln) | ltr | [50.2, 5.2](http://www.openstreetmap.org/#map=5/50.22/5.15) | Europe |
| Wolof | wo | [wol](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) | [wol](http://www-01.sil.org/iso639-3/documentation.asp?id=wol) | ltr | [15.3, -15.4](http://www.openstreetmap.org/#map=5/15.25/-15.38) | Africa |
| Waama | wwa | [ako](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) | [wwa](http://www-01.sil.org/iso639-3/documentation.asp?id=wwa) | ltr | [10.6, 1.6](http://www.openstreetmap.org/#map=5/10.6/1.65) | Africa |
| Xhosa | xh | [xos](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) | [xho](http://www-01.sil.org/iso639-3/documentation.asp?id=xho) | ltr | [-31.0, 28.1](http://www.openstreetmap.org/#map=5/-31.04/28.08) | Africa |
| Kasem | xsm | [kas](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) | [xsm](http://www-01.sil.org/iso639-3/documentation.asp?id=xsm) | ltr | [11.1, -1.4](http://www.openstreetmap.org/#map=5/11.08/-1.39) | Africa |
| Sherpa | xsr | [xsr](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xsr) | [xsr](http://www-01.sil.org/iso639-3/documentation.asp?id=xsr) | ltr | [27.7, 87.0](http://www.openstreetmap.org/#map=5/27.67/87) | Asia |
| Yagua | yad | [yad](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) | [yad](http://www-01.sil.org/iso639-3/documentation.asp?id=yad) | ltr | [-3.4, -72.2](http://www.openstreetmap.org/#map=5/-3.43/-72.22) | Americas |
| Yao | yao | [yao](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) | [yao](http://www-01.sil.org/iso639-3/documentation.asp?id=yao) | ltr | [-13.6, 35.2](http://www.openstreetmap.org/#map=5/-13.61/35.24) | Africa |
| Yapese | yap | [yps](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) | [yap](http://www-01.sil.org/iso639-3/documentation.asp?id=yap) | ltr | [9.6, 138.1](http://www.openstreetmap.org/#map=5/9.56/138.12) | Pacific |
| Yakkha | ybh | [ybh](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ybh) | [ybh](http://www-01.sil.org/iso639-3/documentation.asp?id=ybh) | ltr | [27.4, 87.9](http://www.openstreetmap.org/#map=5/27.37/87.93) | Asia |
| Yiddish, Eastern | yi | [ydd](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) | [ydd](http://www-01.sil.org/iso639-3/documentation.asp?id=ydd) | rtl | [51.8, 19.4](http://www.openstreetmap.org/#map=5/51.75/19.42) | Asia |
| Yukaghir, Northern | ykg | [ykg](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) | [ykg](http://www-01.sil.org/iso639-3/documentation.asp?id=ykg) | ltr | [65.4, 151.3](http://www.openstreetmap.org/#map=5/65.39/151.32) | Asia |
| Yoruba | yo | [yor](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) | [yor](http://www-01.sil.org/iso639-3/documentation.asp?id=yor) | ltr | [7.2, 3.7](http://www.openstreetmap.org/#map=5/7.15/3.67) | Africa |
| Nenets | yrk | [yrk](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yrk) | [yrk](http://www-01.sil.org/iso639-3/documentation.asp?id=yrk) | ltr | [66.2, 71.0](http://www.openstreetmap.org/#map=5/66.18/71.02) | Asia |
| Maya, Yucatán | yua | [yua](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) | [yua](http://www-01.sil.org/iso639-3/documentation.asp?id=yua) | ltr | [18.8, -89.0](http://www.openstreetmap.org/#map=5/18.78/-88.96) | Americas |
| Chinese, Yue | yue | [yue](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yue) | [yue](http://www-01.sil.org/iso639-3/documentation.asp?id=yue) | ltr | [31.1, 121.3](http://www.openstreetmap.org/#map=5/31.13/121.29) | Asia |
| Zapotec, Miahuatlán | zam | [zam](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) | [zam](http://www-01.sil.org/iso639-3/documentation.asp?id=zam) | ltr | [16.2, -96.7](http://www.openstreetmap.org/#map=5/16.22/-96.66) | Americas |
| Comorian, Ngazidja | zdj | [zdj](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) | [zdj](http://www-01.sil.org/iso639-3/documentation.asp?id=zdj) | ltr | [-12.0, 44.0](http://www.openstreetmap.org/#map=5/-12/44) | Africa |
| Tamazight, Standard Morocan | zgh | [ama](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) | [zgh](http://www-01.sil.org/iso639-3/documentation.asp?id=zgh) | ltr | [14.2, -2.4](http://www.openstreetmap.org/#map=5/14.2/-2.41) | Africa |
| Záparo | zro | [1124](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) | [zro](http://www-01.sil.org/iso639-3/documentation.asp?id=zro) | ltr | [-2.0, -76.4](http://www.openstreetmap.org/#map=5/-2/-76.36) | Americas |
| Zapotec, Güilá | ztu | [ztu1](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) | [ztu](http://www-01.sil.org/iso639-3/documentation.asp?id=ztu) | ltr | [16.9, -96.5](http://www.openstreetmap.org/#map=5/16.88/-96.46) | Americas |
| Zulu | zu | [zuu](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) | [zul](http://www-01.sil.org/iso639-3/documentation.asp?id=zul) | ltr | [-25.3, 31.4](http://www.openstreetmap.org/#map=5/-25.33/31.35) | Africa |

<!--support end-->

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
