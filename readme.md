# udhr

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]

The most translated document, the [universal declaration of human
rights][index], in [unicode][], in JavaScript.

## Install

[npm][]:

```sh
npm install udhr
```

## Use

```js
var udhr = require('udhr')

var json = udhr.json()

console.log(json.eng)
```

## API

### `udhr.information()`

Returns an array of information objects.
Gets information about the documents: their stage, if an accessible JSON
document is available, language regions and lat-long locations, etcetera.

```js
var info = require('udhr').information()

console.log(info.eng)
```

Yields:

```js
{ iso6393: 'eng',
  bcp47: 'en',
  ohchr: 'eng',
  direction: 'ltr',
  code: 'eng',
  name: 'English',
  stage: 5,
  notes: false,
  latitude: 53,
  longitude: -1,
  hasJson: true }
```

### udhr.json()

Returns an array of marked-up declaration objects.

```js
var json = require('udhr').json()

console.log(json.eng)
```

Yields:

```javascript
{ 'iso639-3': 'eng',
  key: 'eng',
  dir: 'ltr',
  iso15924: 'Latn',
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

## Supported declarations

<!--support start-->

| Name | BCP 47 | OHCHR | ISO 639-3 | Direction | Location |
| - | - | - | - | - | - |
| Sãotomense | cri | [1128](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) | [cri](https://iso639-3.sil.org/code/cri) | ltr | [6.7, 0.3](https://www.openstreetmap.org/#map=5/6.68/0.33) |
| Crioulo, Upper Guinea (008) | pov | | [pov](https://iso639-3.sil.org/code/pov) | ltr | [13.2, -15.3](https://www.openstreetmap.org/#map=5/13.23/-15.33) |
| Mbundu (009) | kmb | | [kmb](https://iso639-3.sil.org/code/kmb) | ltr | [-9.0, 14.9](https://www.openstreetmap.org/#map=5/-8.98/14.89) |
| Tetun Dili | tdt | | [tdt](https://iso639-3.sil.org/code/tdt) | ltr | [125.5, -8.5](https://www.openstreetmap.org/#map=5/125.5/-8.5) |
| Umbundu (011) | umb | | [umb](https://iso639-3.sil.org/code/umb) | ltr | [-12.5, 14.4](https://www.openstreetmap.org/#map=5/-12.48/14.41) |
| (Bizisa) | und | [bz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Mijisa) | und | [bz2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Maiunan) | und | [ma1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Magar / Dhut) | und | [ma2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma2) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Minjiang, spoken) | und | [mi1_spok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Minjiang, written) | und | [mi1_written](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Tajpuriya) | und | [ta1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ta1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Tokpegola, Devanagari) | und | [tok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tok) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Tokpegola, Tibetan) | und | [tok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tok) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| Drung | duu | [ty1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) | [duu](https://iso639-3.sil.org/code/duu) | ltr | [28.0, 98.0](https://www.openstreetmap.org/#map=5/28/98) |
| (Muzzi) | und | [mz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mz1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Klau) | und | [kl1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kl1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Jinan) | und | [ji1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ji1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Tajpuriya) | und | [Ta1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Ta1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Bizisa) | und | [Bz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Bz1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| (Yeonbyeon) | und | [ye1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ye1) | [und](https://iso639-3.sil.org/code/und) | ltr | [-75.0, 30.0](https://www.openstreetmap.org/#map=5/-75/30) |
| Afar | aa | [aar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aar) | [aar](https://iso639-3.sil.org/code/aar) | ltr | [12.2, 41.8](https://www.openstreetmap.org/#map=5/12.23/41.81) |
| Abkhaz | ab | [abk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=abk) | [abk](https://iso639-3.sil.org/code/abk) | ltr | [42.2, 41.3](https://www.openstreetmap.org/#map=5/42.23/41.3) |
| Aceh | ace | [atj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) | [ace](https://iso639-3.sil.org/code/ace) | ltr | [3.9, 96.6](https://www.openstreetmap.org/#map=5/3.91/96.6) |
| Achuar-Shiwiar | acu | [acu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) | [acu](https://iso639-3.sil.org/code/acu) | ltr | [-2.8, -77.3](https://www.openstreetmap.org/#map=5/-2.83/-77.26) |
| Achuar-Shiwiar (1) | acu | [jiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) | [acu](https://iso639-3.sil.org/code/acu) | ltr | [-2.8, -77.3](https://www.openstreetmap.org/#map=5/-2.83/-77.26) |
| Dangme | ada | [gac1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) | [ada](https://iso639-3.sil.org/code/ada) | ltr | [5.9, 0.1](https://www.openstreetmap.org/#map=5/5.94/0.13) |
| Adyghe | ady | [ady](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) | [ady](https://iso639-3.sil.org/code/ady) | ltr | [44.0, 39.3](https://www.openstreetmap.org/#map=5/44/39.33) |
| Afrikaans | af | [afk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) | [afr](https://iso639-3.sil.org/code/afr) | ltr | [-22.0, 30.0](https://www.openstreetmap.org/#map=5/-22/30) |
| Aguaruna | agr | [agr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) | [agr](https://iso639-3.sil.org/code/agr) | ltr | [-5.3, -77.9](https://www.openstreetmap.org/#map=5/-5.3/-77.92) |
| Assyrian Neo-Aramaic | aii | [aii](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) | [aii](https://iso639-3.sil.org/code/aii) | rtl | [36.8, 43.0](https://www.openstreetmap.org/#map=5/36.75/43) |
| Aja | ajg | [ajg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) | [ajg](https://iso639-3.sil.org/code/ajg) | ltr | [7.1, 1.6](https://www.openstreetmap.org/#map=5/7.07/1.65) |
| Twi (Akuapem) | ak-akuapem | [tws1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) | [twi](https://iso639-3.sil.org/code/twi) | ltr | [6.3, -1.3](https://www.openstreetmap.org/#map=5/6.35/-1.33) |
| Twi (Asante) | ak-asante | [ass](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) | [twi](https://iso639-3.sil.org/code/twi) | ltr | [6.3, -1.3](https://www.openstreetmap.org/#map=5/6.35/-1.33) |
| Fante | ak | [tws3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws3) | [fat](https://iso639-3.sil.org/code/fat) | ltr | [6.3, -1.3](https://www.openstreetmap.org/#map=5/6.35/-1.33) |
| Albanian, Tosk | als | [aln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) | [als](https://iso639-3.sil.org/code/als) | ltr | [41.0, 20.0](https://www.openstreetmap.org/#map=5/41/20) |
| Altai, Southern | alt | [alt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) | [alt](https://iso639-3.sil.org/code/alt) | ltr | [50.1, 86.9](https://www.openstreetmap.org/#map=5/50.13/86.87) |
| Amahuaca | amc | [amc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) | [amc](https://iso639-3.sil.org/code/amc) | ltr | [-10.2, -72.3](https://www.openstreetmap.org/#map=5/-10.2/-72.32) |
| Yaneshaʼ | ame | [ame](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) | [ame](https://iso639-3.sil.org/code/ame) | ltr | [-10.6, -75.3](https://www.openstreetmap.org/#map=5/-10.55/-75.31) |
| Amharic | am | [amh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) | [amh](https://iso639-3.sil.org/code/amh) | ltr | [11.7, 39.5](https://www.openstreetmap.org/#map=5/11.71/39.54) |
| Amis | ami | [ami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ami) | [ami](https://iso639-3.sil.org/code/ami) | ltr | [23.5, 121.5](https://www.openstreetmap.org/#map=5/23.5/121.5) |
| Amarakaeri | amr | [amr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) | [amr](https://iso639-3.sil.org/code/amr) | ltr | [-12.5, -70.5](https://www.openstreetmap.org/#map=5/-12.49/-70.55) |
| Arabic, Standard | ar | [arz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) | [arb](https://iso639-3.sil.org/code/arb) | rtl | [28.0, 43.9](https://www.openstreetmap.org/#map=5/27.96/43.85) |
| Arabela | arl | [arl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) | [arl](https://iso639-3.sil.org/code/arl) | ltr | [-2.0, -75.1](https://www.openstreetmap.org/#map=5/-1.96/-75.06) |
| Mapudungun | arn | [aru](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) | [arn](https://iso639-3.sil.org/code/arn) | ltr | [-38.7, -71.3](https://www.openstreetmap.org/#map=5/-38.74/-71.28) |
| Assamese | as | [asm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=asm) | [asm](https://iso639-3.sil.org/code/asm) | ltr | [26.1, 91.3](https://www.openstreetmap.org/#map=5/26.09/91.29) |
| Asturian | ast | [aub](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) | [ast](https://iso639-3.sil.org/code/ast) | ltr | [42.4, -6.0](https://www.openstreetmap.org/#map=5/42.42/-6.02) |
| Waorani | auc | [1127](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) | [auc](https://iso639-3.sil.org/code/auc) | ltr | [-1.1, -76.7](https://www.openstreetmap.org/#map=5/-1.12/-76.68) |
| Occitan (Auvergnat) | oc | [auv1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Awadhi | awa | [awa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=awa) | [awa](https://iso639-3.sil.org/code/awa) | ltr | [27.6, 82.5](https://www.openstreetmap.org/#map=5/27.59/82.47) |
| Ayoreo | ayo | [ayo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ayo) | [ayo](https://iso639-3.sil.org/code/ayo) | ltr | [-18.0, -62.0](https://www.openstreetmap.org/#map=5/-18/-62) |
| Aymara, Central | ay | [aym](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) | [ayr](https://iso639-3.sil.org/code/ayr) | ltr | [-17.0, -68.5](https://www.openstreetmap.org/#map=5/-17/-68.5) |
| Azerbaijani, North (Cyrillic) | az-Cyrl | [azb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) | [azj](https://iso639-3.sil.org/code/azj) | ltr | [41.0, 46.5](https://www.openstreetmap.org/#map=5/40.98/46.47) |
| Azerbaijani, North (Latin) | az-Latn | [azb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) | [azj](https://iso639-3.sil.org/code/azj) | ltr | [41.0, 46.5](https://www.openstreetmap.org/#map=5/40.98/46.47) |
| Bamanankan | bm | [bra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) | [bam](https://iso639-3.sil.org/code/bam) | ltr | [12.0, -10.0](https://www.openstreetmap.org/#map=5/12.04/-9.99) |
| Bali | ban | [bzc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) | [ban](https://iso639-3.sil.org/code/ban) | ltr | [-8.4, 115.1](https://www.openstreetmap.org/#map=5/-8.36/115.08) |
| Bantawa | bap | [bap](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bap) | [bap](https://iso639-3.sil.org/code/bap) | ltr | [27.2, 87.1](https://www.openstreetmap.org/#map=5/27.2/87.1) |
| Bamun | bax | [bax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bax) | [bax](https://iso639-3.sil.org/code/bax) | ltr | [9.6, 3.0](https://www.openstreetmap.org/#map=5/9.63/3) |
| Baatonum | bba | [bba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) | [bba](https://iso639-3.sil.org/code/bba) | ltr | [9.6, 3.0](https://www.openstreetmap.org/#map=5/9.63/3) |
| Baoulé | bci | [bci](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) | [bci](https://iso639-3.sil.org/code/bci) | ltr | [5.4, -4.8](https://www.openstreetmap.org/#map=5/5.43/-4.77) |
| Bicolano, Central | bik | [bkl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) | [bcl](https://iso639-3.sil.org/code/bcl) | ltr | [13.8, 123.4](https://www.openstreetmap.org/#map=5/13.76/123.4) |
| Belarusan | be | [ruw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) | [bel](https://iso639-3.sil.org/code/bel) | ltr | [53.2, 25.6](https://www.openstreetmap.org/#map=5/53.23/25.6) |
| Bemba | bem | [bem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) | [bem](https://iso639-3.sil.org/code/bem) | ltr | [-10.6, 29.3](https://www.openstreetmap.org/#map=5/-10.61/29.3) |
| Bengali | bn | [bng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) | [ben](https://iso639-3.sil.org/code/ben) | ltr | [24.0, 90.0](https://www.openstreetmap.org/#map=5/24/90) |
| Bari | bfa | [bfa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) | [bfa](https://iso639-3.sil.org/code/bfa) | ltr | [4.2, 31.1](https://www.openstreetmap.org/#map=5/4.2/31.07) |
| Balochi, Eastern | bgp | [bgp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bgp) | [bgp](https://iso639-3.sil.org/code/bgp) | rtl | [28.0, 62.0](https://www.openstreetmap.org/#map=5/28/62) |
| Bhojpuri | bho | [bhj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) | [bho](https://iso639-3.sil.org/code/bho) | ltr | [26.5, 84.8](https://www.openstreetmap.org/#map=5/26.46/84.82) |
| Edo | bin | [edo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) | [bin](https://iso639-3.sil.org/code/bin) | ltr | [6.4, 5.7](https://www.openstreetmap.org/#map=5/6.41/5.7) |
| Bislama | bi | [bcy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) | [bis](https://iso639-3.sil.org/code/bis) | ltr | [-20.0, 167.4](https://www.openstreetmap.org/#map=5/-19.99/167.37) |
| Kanauji | bjj | [bjj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bjj) | [bjj](https://iso639-3.sil.org/code/bjj) | ltr | [27.1, 79.3](https://www.openstreetmap.org/#map=5/27.11/79.29) |
| Tai Dam | blt | | [blt](https://iso639-3.sil.org/code/blt) | ltr | [21.5, 102.7](https://www.openstreetmap.org/#map=5/21.47/102.7) |
| Hmong Njua | hnj | [blu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) | [hnj](https://iso639-3.sil.org/code/hnj) | ltr | [22.6, 102.0](https://www.openstreetmap.org/#map=5/22.56/101.95) |
| Bote | bmj | [bmj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bmj) | [bmj](https://iso639-3.sil.org/code/bmj) | ltr | [27.6, 84.3](https://www.openstreetmap.org/#map=5/27.6/84.3) |
| Bora | boa | [boa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) | [boa](https://iso639-3.sil.org/code/boa) | ltr | [-2.9, -68.9](https://www.openstreetmap.org/#map=5/-2.91/-68.91) |
| Tibetan, Central | bo | [tic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) | [bod](https://iso639-3.sil.org/code/bod) | ltr | [28.4, 90.2](https://www.openstreetmap.org/#map=5/28.37/90.19) |
| Bosnian (Cyrillic) | bs-Cyrl | [src4](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) | [bos](https://iso639-3.sil.org/code/bos) | ltr | [42.9, 17.7](https://www.openstreetmap.org/#map=5/42.93/17.67) |
| Bosnian (Latin) | bs-Latn | [src1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) | [bos](https://iso639-3.sil.org/code/bos) | ltr | [42.9, 17.7](https://www.openstreetmap.org/#map=5/42.93/17.67) |
| Bishnupriya | bpy | [bpy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpy) | [bpy](https://iso639-3.sil.org/code/bpy) | ltr | [24.5, 92.0](https://www.openstreetmap.org/#map=5/24.46/92.02) |
| Baram | brd | [brd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brd) | [brd](https://iso639-3.sil.org/code/brd) | ltr | [28.5, 85.0](https://www.openstreetmap.org/#map=5/28.5/85) |
| Breton | br | [brt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) | [bre](https://iso639-3.sil.org/code/bre) | ltr | [48.3, -3.8](https://www.openstreetmap.org/#map=5/48.25/-3.79) |
| Bodo | brx | [brx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brx) | [brx](https://iso639-3.sil.org/code/brx) | ltr | [26.8, 88.2](https://www.openstreetmap.org/#map=5/26.83/88.2) |
| Bulu | bum | [btb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) | [bum](https://iso639-3.sil.org/code/bum) | ltr | [3.2, 11.6](https://www.openstreetmap.org/#map=5/3.16/11.64) |
| Bushi | buc | [buc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) | [buc](https://iso639-3.sil.org/code/buc) | ltr | [-13.0, 45.1](https://www.openstreetmap.org/#map=5/-12.97/45.14) |
| Bugis | bug | [bpr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) | [bug](https://iso639-3.sil.org/code/bug) | ltr | [-0.3, 119.3](https://www.openstreetmap.org/#map=5/-0.25/119.25) |
| Bulgarian | bg | [blg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) | [bul](https://iso639-3.sil.org/code/bul) | ltr | [43.4, 25.1](https://www.openstreetmap.org/#map=5/43.36/25.05) |
| Belanda Viri | bvi | [bvi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bvi) | [bvi](https://iso639-3.sil.org/code/bvi) | ltr | [7.4, 27.7](https://www.openstreetmap.org/#map=5/7.41/27.7) |
| Bhujel | byh | [byh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=byh) | [byh](https://iso639-3.sil.org/code/byh) | ltr | [28.0, 84.5](https://www.openstreetmap.org/#map=5/28/84.5) |
| Garifuna | cab | [cab](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) | [cab](https://iso639-3.sil.org/code/cab) | ltr | [15.3, -86.9](https://www.openstreetmap.org/#map=5/15.35/-86.91) |
| Kaqchikel, Central | cak | [cak1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) | [cak](https://iso639-3.sil.org/code/cak) | ltr | [14.5, -91.0](https://www.openstreetmap.org/#map=5/14.47/-90.99) |
| Tsimané | cas | [cas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cas) | [cas](https://iso639-3.sil.org/code/cas) | ltr | [-14.0, -68.0](https://www.openstreetmap.org/#map=5/-14/-68) |
| Catalan-Valencian-Balear | ca | [cln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) | [cat](https://iso639-3.sil.org/code/cat) | ltr | [41.9, 3.4](https://www.openstreetmap.org/#map=5/41.9/3.39) |
| Chiquitano | cax | [cax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cax) | [cax](https://iso639-3.sil.org/code/cax) | ltr | [-17.6, -59.9](https://www.openstreetmap.org/#map=5/-17.64/-59.92) |
| Chachi | cbi | [1122](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) | [cbi](https://iso639-3.sil.org/code/cbi) | ltr | [0.7, -79.0](https://www.openstreetmap.org/#map=5/0.71/-79.05) |
| Cashibo-Cacataibo | cbr | [cbr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) | [cbr](https://iso639-3.sil.org/code/cbr) | ltr | [-8.7, -75.4](https://www.openstreetmap.org/#map=5/-8.7/-75.42) |
| Cashinahua | cbs | [cbs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) | [cbs](https://iso639-3.sil.org/code/cbs) | ltr | [-9.7, -71.2](https://www.openstreetmap.org/#map=5/-9.72/-71.17) |
| Chayahuita | cbt | [cbt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) | [cbt](https://iso639-3.sil.org/code/cbt) | ltr | [-5.6, -76.8](https://www.openstreetmap.org/#map=5/-5.64/-76.83) |
| Candoshi-Shapra | cbu | [cbu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) | [cbu](https://iso639-3.sil.org/code/cbu) | ltr | [-4.2, -76.9](https://www.openstreetmap.org/#map=5/-4.24/-76.93) |
| Chakma | ccp | | [ccp](https://iso639-3.sil.org/code/ccp) | ltr | [23.0, 92.0](https://www.openstreetmap.org/#map=5/23/92) |
| Zhuang, Yongbei | za | [ccx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) | [zyb](https://iso639-3.sil.org/code/zyb) | ltr | [23.7, 107.2](https://www.openstreetmap.org/#map=5/23.68/107.18) |
| Chepang | cdm | [cdm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cdm) | [cdm](https://iso639-3.sil.org/code/cdm) | ltr | [27.8, 84.5](https://www.openstreetmap.org/#map=5/27.8/84.5) |
| Cebuano | ceb | [ceb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) | [ceb](https://iso639-3.sil.org/code/ceb) | ltr | [8.4, 124.4](https://www.openstreetmap.org/#map=5/8.39/124.37) |
| Czech | cs | [czc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) | [ces](https://iso639-3.sil.org/code/ces) | ltr | [49.9, 15.1](https://www.openstreetmap.org/#map=5/49.87/15.1) |
| Chamorro | ch | [cjd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) | [cha](https://iso639-3.sil.org/code/cha) | ltr | [14.3, 145.3](https://www.openstreetmap.org/#map=5/14.33/145.28) |
| Chinantec, Ojitlán | chj | [chj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) | [chj](https://iso639-3.sil.org/code/chj) | ltr | [18.1, -96.3](https://www.openstreetmap.org/#map=5/18.07/-96.34) |
| Chuukese | chk | [tru1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) | [chk](https://iso639-3.sil.org/code/chk) | ltr | [7.3, 151.6](https://www.openstreetmap.org/#map=5/7.34/151.6) |
| Cherokee (cased) | chr | | [chr](https://iso639-3.sil.org/code/chr) | ltr | [35.5, -83.2](https://www.openstreetmap.org/#map=5/35.47/-83.16) |
| Cherokee (uppercase) | chr | | [chr](https://iso639-3.sil.org/code/chr) | ltr | [35.5, -83.2](https://www.openstreetmap.org/#map=5/35.47/-83.16) |
| Chuvash | cv | [chv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chv) | [chv](https://iso639-3.sil.org/code/chv) | ltr | [55.0, 47.0](https://www.openstreetmap.org/#map=5/55/47) |
| Chantyal | chx | [chx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chx) | [chx](https://iso639-3.sil.org/code/chx) | ltr | [28.7, 83.5](https://www.openstreetmap.org/#map=5/28.7/83.5) |
| Chickasaw | cic | [cic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) | [cic](https://iso639-3.sil.org/code/cic) | ltr | [34.0, -97.1](https://www.openstreetmap.org/#map=5/33.95/-97.13) |
| Chokwe | cjk | [cjk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | [cjk](https://iso639-3.sil.org/code/cjk) | ltr | [-9.7, 21.4](https://www.openstreetmap.org/#map=5/-9.66/21.4) |
| Chokwe (Angola) | cjk | [cjk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | [cjk](https://iso639-3.sil.org/code/cjk) | ltr | [-9.7, 21.4](https://www.openstreetmap.org/#map=5/-9.66/21.4) |
| Shor | cjs | [cjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) | [cjs](https://iso639-3.sil.org/code/cjs) | ltr | [52.3, 88.4](https://www.openstreetmap.org/#map=5/52.33/88.43) |
| Chinese, Jinyu | cjy | [cjy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjy) | [cjy](https://iso639-3.sil.org/code/cjy) | ltr | [38.0, 111.0](https://www.openstreetmap.org/#map=5/38/111) |
| Kurdish, Central | ckb-Latn | [kdb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) | [ckb](https://iso639-3.sil.org/code/ckb) | ltr | [35.6, 45.8](https://www.openstreetmap.org/#map=5/35.65/45.81) |
| Chinese, Mandarin (Simplified) | zh-Hans | [chn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chn) | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [40.0, 116.2](https://www.openstreetmap.org/#map=5/40.02/116.23) |
| Chinese, Mandarin (Beijing) | zh-Hans | [be1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=be1) | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [39.9, 116.4](https://www.openstreetmap.org/#map=5/39.91/116.38) |
| Chinese, Mandarin (Guiyang) | zh-Hans | [gu1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gu1) | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [26.6, 106.6](https://www.openstreetmap.org/#map=5/26.65/106.63) |
| Chinese, Mandarin (Harbin) | zh-Hans | [ha2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha2) | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [45.8, 126.6](https://www.openstreetmap.org/#map=5/45.75/126.63) |
| Chinese, Mandarin (Nanjing) | zh-Hans | [na1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=na1) | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [32.0, 118.8](https://www.openstreetmap.org/#map=5/32.05/118.76) |
| Chinese, Mandarin (Tianjin) | zh-Hans | [ti1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ti1) | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [39.1, 117.2](https://www.openstreetmap.org/#map=5/39.13/117.18) |
| Chinese, Mandarin (Traditional) | zh-Hant | | [cmn](https://iso639-3.sil.org/code/cmn) | ltr | [40.0, 116.2](https://www.openstreetmap.org/#map=5/40.02/116.23) |
| Chin, Haka | cnh | [hak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) | [cnh](https://iso639-3.sil.org/code/cnh) | ltr | [22.9, 92.8](https://www.openstreetmap.org/#map=5/22.87/92.82) |
| Asháninka | cni | [cni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) | [cni](https://iso639-3.sil.org/code/cni) | ltr | [-11.9, -73.9](https://www.openstreetmap.org/#map=5/-11.93/-73.91) |
| Montenegrin | cnr | [cnr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cnr) | [cnr](https://iso639-3.sil.org/code/cnr) | ltr | [42.8, 19.5](https://www.openstreetmap.org/#map=5/42.78/19.47) |
| Colorado | cof | [cof](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) | [cof](https://iso639-3.sil.org/code/cof) | ltr | [-0.2, -79.2](https://www.openstreetmap.org/#map=5/-0.21/-79.23) |
| Cofán | con | [ccc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccc) | [con](https://iso639-3.sil.org/code/con) | ltr | [0.3, -77.1](https://www.openstreetmap.org/#map=5/0.28/-77.06) |
| Corsican | co | [coi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) | [cos](https://iso639-3.sil.org/code/cos) | ltr | [41.7, 9.3](https://www.openstreetmap.org/#map=5/41.7/9.26) |
| Caquinte | cot | [cot](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) | [cot](https://iso639-3.sil.org/code/cot) | ltr | [-11.5, -73.5](https://www.openstreetmap.org/#map=5/-11.48/-73.45) |
| Ashéninka, Pichis | cpu | [cpu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) | [cpu](https://iso639-3.sil.org/code/cpu) | ltr | [-10.5, -74.6](https://www.openstreetmap.org/#map=5/-10.47/-74.6) |
| Crimean Tatar | crh | [crh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crh) | [crh](https://iso639-3.sil.org/code/crh) | ltr | [45.0, 34.1](https://www.openstreetmap.org/#map=5/45/34.08) |
| Seselwa Creole French | crs | [crs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) | [crs](https://iso639-3.sil.org/code/crs) | ltr | [-4.6, 55.5](https://www.openstreetmap.org/#map=5/-4.62/55.45) |
| Chinantec, Chiltepec | csa | [csa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) | [csa](https://iso639-3.sil.org/code/csa) | ltr | [18.1, -96.2](https://www.openstreetmap.org/#map=5/18.06/-96.22) |
| Cree, Swampy | csw | [crm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) | [csw](https://iso639-3.sil.org/code/csw) | ltr | [56.0, -95.0](https://www.openstreetmap.org/#map=5/56/-95) |
| Chin, Tedim | ctd | [tid](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) | [ctd](https://iso639-3.sil.org/code/ctd) | ltr | [23.6, 93.5](https://www.openstreetmap.org/#map=5/23.61/93.52) |
| Welsh | cy | [wls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) | [cym](https://iso639-3.sil.org/code/cym) | ltr | [52.0, -4.0](https://www.openstreetmap.org/#map=5/52/-4) |
| Dagbani | dag | [dag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) | [dag](https://iso639-3.sil.org/code/dag) | ltr | [9.7, -0.4](https://www.openstreetmap.org/#map=5/9.65/-0.43) |
| Danish | da | [dns](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) | [dan](https://iso639-3.sil.org/code/dan) | ltr | [54.9, 9.4](https://www.openstreetmap.org/#map=5/54.87/9.36) |
| Dendi | ddn | [den](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) | [ddn](https://iso639-3.sil.org/code/ddn) | ltr | [11.7, 3.5](https://www.openstreetmap.org/#map=5/11.67/3.49) |
| German, Standard (1901) | de-1901 | [ger](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) | [deu](https://iso639-3.sil.org/code/deu) | ltr | [48.6, 12.5](https://www.openstreetmap.org/#map=5/48.65/12.47) |
| German, Standard (1996) | de-1996 | | [deu](https://iso639-3.sil.org/code/deu) | ltr | [48.6, 12.5](https://www.openstreetmap.org/#map=5/48.65/12.47) |
| Dagaare, Southern | dga | [dga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) | [dga](https://iso639-3.sil.org/code/dga) | ltr | [10.4, -2.5](https://www.openstreetmap.org/#map=5/10.42/-2.52) |
| Dhimal | dhi | [dhi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dhi) | [dhi](https://iso639-3.sil.org/code/dhi) | ltr | [26.5, 87.8](https://www.openstreetmap.org/#map=5/26.5/87.8) |
| Danuwar | dhw | [dhw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dhw) | [dhw](https://iso639-3.sil.org/code/dhw) | ltr | [27.6, 85.0](https://www.openstreetmap.org/#map=5/27.55/85.01) |
| Dinka, Northeastern | dip | [dinka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) | [dip](https://iso639-3.sil.org/code/dip) | ltr | [9.3, 31.8](https://www.openstreetmap.org/#map=5/9.28/31.84) |
| Maldivian | dv | [div](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) | [div](https://iso639-3.sil.org/code/div) | rtl | [3.8, 73.1](https://www.openstreetmap.org/#map=5/3.83/73.07) |
| Darai | dry | [dry](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dry) | [dry](https://iso639-3.sil.org/code/dry) | ltr | [27.8, 84.1](https://www.openstreetmap.org/#map=5/27.8/84.1) |
| Jola-Fonyi | dyo | [dyo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) | [dyo](https://iso639-3.sil.org/code/dyo) | ltr | [12.8, -15.7](https://www.openstreetmap.org/#map=5/12.76/-15.74) |
| Jula | dyu | [dyu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) | [dyu](https://iso639-3.sil.org/code/dyu) | ltr | [10.4, -4.7](https://www.openstreetmap.org/#map=5/10.45/-4.72) |
| Dzongkha | dz | [dzo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) | [dzo](https://iso639-3.sil.org/code/dzo) | ltr | [27.4, 89.6](https://www.openstreetmap.org/#map=5/27.41/89.58) |
| Greek (monotonic) | el-monoton | [grk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) | [ell](https://iso639-3.sil.org/code/ell) | ltr | [42.3, 24.9](https://www.openstreetmap.org/#map=5/42.32/24.87) |
| Greek (polytonic) | el-polyton | | [ell](https://iso639-3.sil.org/code/ell) | ltr | [42.3, 24.9](https://www.openstreetmap.org/#map=5/42.32/24.87) |
| Maninkakan, Eastern | man | [mni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) | [emk](https://iso639-3.sil.org/code/emk) | ltr | [9.3, -10.5](https://www.openstreetmap.org/#map=5/9.33/-10.54) |
| Romagnolo | rgn | [eml](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) | [rgn](https://iso639-3.sil.org/code/rgn) | ltr | [44.2, 11.7](https://www.openstreetmap.org/#map=5/44.23/11.72) |
| English | en | [eng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) | [eng](https://iso639-3.sil.org/code/eng) | ltr | [53.0, -1.0](https://www.openstreetmap.org/#map=5/53/-1) |
| Esperanto | eo | [1115](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1115) | [epo](https://iso639-3.sil.org/code/epo) | ltr | [49.3, 2.8](https://www.openstreetmap.org/#map=5/49.33/2.81) |
| Ese Ejja | ese | [ese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ese) | [ese](https://iso639-3.sil.org/code/ese) | ltr | [-11.0, -66.0](https://www.openstreetmap.org/#map=5/-11/-66) |
| Estonian | et | [est](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) | [ekk](https://iso639-3.sil.org/code/ekk) | ltr | [58.5, 25.8](https://www.openstreetmap.org/#map=5/58.55/25.82) |
| Basque | eu | [bsq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) | [eus](https://iso639-3.sil.org/code/eus) | ltr | [43.3, -1.3](https://www.openstreetmap.org/#map=5/43.28/-1.32) |
| Even | eve | [eve](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) | [eve](https://iso639-3.sil.org/code/eve) | ltr | [70.7, 130.9](https://www.openstreetmap.org/#map=5/70.67/130.91) |
| Evenki | evn | [evn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) | [evn](https://iso639-3.sil.org/code/evn) | ltr | [53.9, 108.6](https://www.openstreetmap.org/#map=5/53.85/108.63) |
| Éwé | ee | [ewe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) | [ewe](https://iso639-3.sil.org/code/ewe) | ltr | [6.5, 0.8](https://www.openstreetmap.org/#map=5/6.46/0.81) |
| Faroese | fo | [fae](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) | [fao](https://iso639-3.sil.org/code/fao) | ltr | [62.1, -6.9](https://www.openstreetmap.org/#map=5/62.07/-6.88) |
| Fijian | fj | [fji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) | [fij](https://iso639-3.sil.org/code/fij) | ltr | [-18.0, 178.3](https://www.openstreetmap.org/#map=5/-18/178.33) |
| Finnish | fi | [fin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) | [fin](https://iso639-3.sil.org/code/fin) | ltr | [64.8, 25.6](https://www.openstreetmap.org/#map=5/64.76/25.56) |
| Finnish, Kven | fkv | [fkv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fkv) | [fkv](https://iso639-3.sil.org/code/fkv) | ltr | [69.7, 21.2](https://www.openstreetmap.org/#map=5/69.7/21.21) |
| Chin, Falam | cfm | [fal](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) | [cfm](https://iso639-3.sil.org/code/cfm) | ltr | [23.8, 92.3](https://www.openstreetmap.org/#map=5/23.79/92.33) |
| Fon | fon | [foa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) | [fon](https://iso639-3.sil.org/code/fon) | ltr | [7.2, 1.7](https://www.openstreetmap.org/#map=5/7.15/1.66) |
| French | fr | [frn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) | [fra](https://iso639-3.sil.org/code/fra) | ltr | [48.0, 2.0](https://www.openstreetmap.org/#map=5/48/2) |
| Frisian, Western | fy | [fri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) | [fry](https://iso639-3.sil.org/code/fry) | ltr | [53.1, 5.9](https://www.openstreetmap.org/#map=5/53.14/5.86) |
| Pular | fuf | [fuf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) | [fuf](https://iso639-3.sil.org/code/fuf) | ltr | [12.2, -12.7](https://www.openstreetmap.org/#map=5/12.18/-12.73) |
| Pular (Adlam) | fuf-Adlm | | [fuf](https://iso639-3.sil.org/code/fuf) | rtl | [12.2, -12.7](https://www.openstreetmap.org/#map=5/12.18/-12.73) |
| Friulian | fur | [frl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) | [fur](https://iso639-3.sil.org/code/fur) | ltr | [46.1, 13.1](https://www.openstreetmap.org/#map=5/46.15/13.05) |
| Fulfulde, Nigerian | fuv | [fum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) | [fuv](https://iso639-3.sil.org/code/fuv) | ltr | [11.0, 11.1](https://www.openstreetmap.org/#map=5/11/11.12) |
| Fulfulde, Nigerian (2) | fuv | [fuv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuv) | [fuv](https://iso639-3.sil.org/code/fuv) | ltr | [11.0, 11.1](https://www.openstreetmap.org/#map=5/11/11.12) |
| Ga | gaa | [gac2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) | [gaa](https://iso639-3.sil.org/code/gaa) | ltr | [5.7, -0.2](https://www.openstreetmap.org/#map=5/5.65/-0.19) |
| Gagauz | gag | [gag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) | [gag](https://iso639-3.sil.org/code/gag) | ltr | [44.6, 28.0](https://www.openstreetmap.org/#map=5/44.6/28.03) |
| Chinese, Gan | gan | [gan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gan) | [gan](https://iso639-3.sil.org/code/gan) | ltr | [28.0, 105.0](https://www.openstreetmap.org/#map=5/28/105) |
| Oromo, Borana-Arsi-Guji | om | [gax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) | [gaz](https://iso639-3.sil.org/code/gaz) | ltr | [1.1, 37.9](https://www.openstreetmap.org/#map=5/1.06/37.88) |
| Garhwali | gbm | [gbm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbm) | [gbm](https://iso639-3.sil.org/code/gbm) | ltr | [30.5, 78.7](https://www.openstreetmap.org/#map=5/30.51/78.72) |
| Gonja | gjn | [dum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) | [gjn](https://iso639-3.sil.org/code/gjn) | ltr | [8.5, -0.7](https://www.openstreetmap.org/#map=5/8.49/-0.73) |
| Kpelle, Guinea | gkp | [pke](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pke) | [gkp](https://iso639-3.sil.org/code/gkp) | ltr | [7.9, -9.0](https://www.openstreetmap.org/#map=5/7.93/-8.99) |
| Gaelic, Scottish | gd | [gls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) | [gla](https://iso639-3.sil.org/code/gla) | ltr | [56.8, -5.2](https://www.openstreetmap.org/#map=5/56.76/-5.24) |
| Nanai | gld | [gld](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) | [gld](https://iso639-3.sil.org/code/gld) | ltr | [48.4, 134.8](https://www.openstreetmap.org/#map=5/48.43/134.8) |
| Gaelic, Irish | ga | [gli1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) | [gle](https://iso639-3.sil.org/code/gle) | ltr | [53.2, -7.6](https://www.openstreetmap.org/#map=5/53.22/-7.62) |
| Galician | gl | [gln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) | [glg](https://iso639-3.sil.org/code/glg) | ltr | [42.2, -7.5](https://www.openstreetmap.org/#map=5/42.24/-7.53) |
| Manx | gv | | [glv](https://iso639-3.sil.org/code/glv) | ltr | [54.2, -4.8](https://www.openstreetmap.org/#map=5/54.23/-4.85) |
| Gondi, Northern | gno | [gno](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gno) | [gno](https://iso639-3.sil.org/code/gno) | ltr | [18.2, 81.4](https://www.openstreetmap.org/#map=5/18.16/81.38) |
| Guarani, Western Bolivian | gnw | [gnw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gnw) | [gnw](https://iso639-3.sil.org/code/gnw) | ltr | [-18.0, -62.0](https://www.openstreetmap.org/#map=5/-18/-62) |
| Wayuu | guc | [guc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) | [guc](https://iso639-3.sil.org/code/guc) | ltr | [10.2, -71.8](https://www.openstreetmap.org/#map=5/10.23/-71.81) |
| Guaraní, Paraguayan | gn | [gun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) | [gug](https://iso639-3.sil.org/code/gug) | ltr | [-25.6, -57.1](https://www.openstreetmap.org/#map=5/-25.61/-57.09) |
| Gujarati | gu | [gjr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) | [guj](https://iso639-3.sil.org/code/guj) | ltr | [22.7, 71.1](https://www.openstreetmap.org/#map=5/22.69/71.1) |
| Yanomamö | guu | [guu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) | [guu](https://iso639-3.sil.org/code/guu) | ltr | [1.7, -64.9](https://www.openstreetmap.org/#map=5/1.68/-64.88) |
| Gurung, Western | gvr | [gvr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gvr) | [gvr](https://iso639-3.sil.org/code/gvr) | ltr | [27.4, 86.3](https://www.openstreetmap.org/#map=5/27.42/86.29) |
| Guarayu | gyr | [gua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) | [gyr](https://iso639-3.sil.org/code/gyr) | ltr | [-15.8, -61.7](https://www.openstreetmap.org/#map=5/-15.82/-61.69) |
| Chinese, Hakka | hak | [ha1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha1) | [hak](https://iso639-3.sil.org/code/hak) | ltr | [25.0, 115.0](https://www.openstreetmap.org/#map=5/25/115) |
| Haitian Creole French (Kreyol) | ht | [hat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) | [hat](https://iso639-3.sil.org/code/hat) | ltr | [19.0, -73.3](https://www.openstreetmap.org/#map=5/19/-73.33) |
| Haitian Creole French (Popular) | ht | [hat1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) | [hat](https://iso639-3.sil.org/code/hat) | ltr | [19.0, -73.3](https://www.openstreetmap.org/#map=5/19/-73.33) |
| Hausa (Niger) | ha-NE | [gej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | [hau](https://iso639-3.sil.org/code/hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/#map=5/11.15/8.78) |
| Hausa (Nigeria) | ha-NG | [gej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | [hau](https://iso639-3.sil.org/code/hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/#map=5/11.15/8.78) |
| Hausa | ha | [hau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hau) | [hau](https://iso639-3.sil.org/code/hau) | ltr | [11.2, 8.8](https://www.openstreetmap.org/#map=5/11.15/8.78) |
| Hawaiian | haw | [hwi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) | [haw](https://iso639-3.sil.org/code/haw) | ltr | [19.6, -155.4](https://www.openstreetmap.org/#map=5/19.63/-155.43) |
| Hmong, Northern Qiandong | hmn | [hea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) | [hea](https://iso639-3.sil.org/code/hea) | ltr | [26.6, 108.2](https://www.openstreetmap.org/#map=5/26.63/108.16) |
| Hebrew | he | [hbr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) | [heb](https://iso639-3.sil.org/code/heb) | rtl | [31.1, 35.0](https://www.openstreetmap.org/#map=5/31.11/35.02) |
| Hiligaynon | hil | [hil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) | [hil](https://iso639-3.sil.org/code/hil) | ltr | [10.4, 123.0](https://www.openstreetmap.org/#map=5/10.4/122.97) |
| Hindi | hi | [hnd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) | [hin](https://iso639-3.sil.org/code/hin) | ltr | [25.0, 77.0](https://www.openstreetmap.org/#map=5/25/77) |
| Chin, Matu | hlt | [hlt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) | [hlt](https://iso639-3.sil.org/code/hlt) | ltr | [23.3, 92.8](https://www.openstreetmap.org/#map=5/23.31/92.83) |
| Hmong, Southern Qiandong | hms | [hms](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) | [hms](https://iso639-3.sil.org/code/hms) | ltr | [25.7, 108.5](https://www.openstreetmap.org/#map=5/25.66/108.53) |
| Mina | hna | [hna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) | [hna](https://iso639-3.sil.org/code/hna) | ltr | [10.4, 13.8](https://www.openstreetmap.org/#map=5/10.38/13.84) |
| Chhattisgarhi | hne | [hne](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hne) | [hne](https://iso639-3.sil.org/code/hne) | ltr | [20.4, 82.0](https://www.openstreetmap.org/#map=5/20.36/82.05) |
| Hani | hni | [hni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) | [hni](https://iso639-3.sil.org/code/hni) | ltr | [22.7, 102.8](https://www.openstreetmap.org/#map=5/22.68/102.85) |
| Hindustani, Sarnami | hns | [hns](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) | [hns](https://iso639-3.sil.org/code/hns) | ltr | [7.7, -58.6](https://www.openstreetmap.org/#map=5/7.67/-58.57) |
| Ho | hoc | [Hoc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Hoc) | [hoc](https://iso639-3.sil.org/code/hoc) | ltr | [87.1, 24.0](https://www.openstreetmap.org/#map=5/87.12/23.96) |
| Croatian | hr | [src2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) | [hrv](https://iso639-3.sil.org/code/hrv) | ltr | [45.2, 16.8](https://www.openstreetmap.org/#map=5/45.2/16.83) |
| Sorbian, Upper | hsb | [wee](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) | [hsb](https://iso639-3.sil.org/code/hsb) | ltr | [51.2, 14.4](https://www.openstreetmap.org/#map=5/51.24/14.41) |
| Huastec (Sierra de Otontepec) | hus | [hus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) | [hus](https://iso639-3.sil.org/code/hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/#map=5/21.62/-98.5) |
| Chinese, Xiang | hsn | [hsn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hsn) | [hsn](https://iso639-3.sil.org/code/hsn) | ltr | [28.1, 113.0](https://www.openstreetmap.org/#map=5/28.11/112.98) |
| Hungarian | hu | [hng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) | [hun](https://iso639-3.sil.org/code/hun) | ltr | [46.9, 19.7](https://www.openstreetmap.org/#map=5/46.91/19.66) |
| Huastec (Veracruz) | hus | [1118](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1118) | [hus](https://iso639-3.sil.org/code/hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/#map=5/21.62/-98.5) |
| Huitoto, Murui | huu | [huu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) | [huu](https://iso639-3.sil.org/code/huu) | ltr | [-1.1, -73.8](https://www.openstreetmap.org/#map=5/-1.14/-73.83) |
| Huastec (San Luís Potosí) | hus | [hva](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) | [hus](https://iso639-3.sil.org/code/hus) | ltr | [21.6, -98.5](https://www.openstreetmap.org/#map=5/21.62/-98.5) |
| Armenian | hy | [arm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) | [hye](https://iso639-3.sil.org/code/hye) | ltr | [40.0, 45.0](https://www.openstreetmap.org/#map=5/40/45) |
| Ibibio | ibb | [ibb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) | [ibb](https://iso639-3.sil.org/code/ibb) | ltr | [5.2, 7.9](https://www.openstreetmap.org/#map=5/5.15/7.87) |
| Igbo | ig | [igr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) | [ibo](https://iso639-3.sil.org/code/ibo) | ltr | [4.6, 7.2](https://www.openstreetmap.org/#map=5/4.63/7.23) |
| Ido | io | [1120](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1120) | [ido](https://iso639-3.sil.org/code/ido) | ltr | [-75.0, 20.0](https://www.openstreetmap.org/#map=5/-75/20) |
| Idoma | idu | [idu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=idu) | [idu](https://iso639-3.sil.org/code/idu) | ltr | [7.2, 8.2](https://www.openstreetmap.org/#map=5/7.19/8.15) |
| Nuosu | ii | [iii](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=iii) | [iii](https://iso639-3.sil.org/code/iii) | ltr | [28.2, 102.1](https://www.openstreetmap.org/#map=5/28.19/102.12) |
| Ijo, Southeast | ijs | [ijs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ijs) | [ijs](https://iso639-3.sil.org/code/ijs) | ltr | [5.0, 6.3](https://www.openstreetmap.org/#map=5/5.03/6.33) |
| Inuktitut, Eastern Canadian | iu | [esb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) | [ike](https://iso639-3.sil.org/code/ike) | ltr | [62.2, -75.6](https://www.openstreetmap.org/#map=5/62.17/-75.61) |
| Ilocano | ilo | [ilo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) | [ilo](https://iso639-3.sil.org/code/ilo) | ltr | [15.9, 121.0](https://www.openstreetmap.org/#map=5/15.94/120.99) |
| Interlingua | ia | [1119](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1119) | [ina](https://iso639-3.sil.org/code/ina) | ltr | [48.2, 2.6](https://www.openstreetmap.org/#map=5/48.2/2.62) |
| Indonesian | id | [inz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) | [ind](https://iso639-3.sil.org/code/ind) | ltr | [-7.3, 109.7](https://www.openstreetmap.org/#map=5/-7.33/109.72) |
| Icelandic | is | [ice](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) | [isl](https://iso639-3.sil.org/code/isl) | ltr | [63.5, -19.0](https://www.openstreetmap.org/#map=5/63.48/-19.02) |
| Italian | it | [itn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) | [ita](https://iso639-3.sil.org/code/ita) | ltr | [43.0, 12.7](https://www.openstreetmap.org/#map=5/43.05/12.65) |
| Javanese (Latin) | jv | [jan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) | [jav](https://iso639-3.sil.org/code/jav) | ltr | [-0.6, 110.9](https://www.openstreetmap.org/#map=5/-0.57/110.89) |
| Javanese (Javanese) | jv-Java | | [jav](https://iso639-3.sil.org/code/jav) | ltr | [-0.6, 110.9](https://www.openstreetmap.org/#map=5/-0.57/110.89) |
| Shuar | jiv | [1125](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) | [jiv](https://iso639-3.sil.org/code/jiv) | ltr | [-3.5, -78.2](https://www.openstreetmap.org/#map=5/-3.45/-78.19) |
| Japanese | ja | [jpn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) | [jpn](https://iso639-3.sil.org/code/jpn) | ltr | [35.0, 135.0](https://www.openstreetmap.org/#map=5/35/135) |
| Japanese (Tokyo) | ja | [to1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=to1) | [jpn](https://iso639-3.sil.org/code/jpn) | ltr | [35.7, 139.7](https://www.openstreetmap.org/#map=5/35.68/139.68) |
| Japanese (Osaka) | ja | [obe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=obe) | [jpn](https://iso639-3.sil.org/code/jpn) | ltr | [34.7, 135.5](https://www.openstreetmap.org/#map=5/34.69/135.5) |
| Jirel | jul | [jul](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jul) | [jul](https://iso639-3.sil.org/code/jul) | ltr | [27.7, 86.3](https://www.openstreetmap.org/#map=5/27.69/86.32) |
| Karakalpak | kaa | [kaa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaa) | [kaa](https://iso639-3.sil.org/code/kaa) | ltr | [42.5, 59.6](https://www.openstreetmap.org/#map=5/42.47/59.6) |
| Inuktitut, Greenlandic | kl | [esg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) | [kal](https://iso639-3.sil.org/code/kal) | ltr | [69.4, -52.9](https://www.openstreetmap.org/#map=5/69.38/-52.86) |
| Kannada | kn | [kjv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) | [kan](https://iso639-3.sil.org/code/kan) | ltr | [13.6, 76.1](https://www.openstreetmap.org/#map=5/13.59/76.12) |
| Kashmiri | ks | [ksh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ksh) | [kas](https://iso639-3.sil.org/code/kas) | rtl | [34.2, 74.3](https://www.openstreetmap.org/#map=5/34.17/74.33) |
| Georgian | ka | [geo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) | [kat](https://iso639-3.sil.org/code/kat) | ltr | [39.4, 45.8](https://www.openstreetmap.org/#map=5/39.37/45.81) |
| Kazakh | kk | [kaz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) | [kaz](https://iso639-3.sil.org/code/kaz) | ltr | [41.9, 65.8](https://www.openstreetmap.org/#map=5/41.87/65.77) |
| Kabardian | kbd | [kbd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) | [kbd](https://iso639-3.sil.org/code/kbd) | ltr | [43.5, 43.4](https://www.openstreetmap.org/#map=5/43.51/43.39) |
| Kabiyé | kbp | [kbp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) | [kbp](https://iso639-3.sil.org/code/kbp) | ltr | [9.0, 0.5](https://www.openstreetmap.org/#map=5/8.97/0.5) |
| Makonde | kde | [kde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) | [kde](https://iso639-3.sil.org/code/kde) | ltr | [-11.0, 39.5](https://www.openstreetmap.org/#map=5/-10.99/39.51) |
| Tem | kdh | [kdh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) | [kdh](https://iso639-3.sil.org/code/kdh) | ltr | [8.0, 1.0](https://www.openstreetmap.org/#map=5/8/1) |
| Kabuverdianu | kea | [kea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) | [kea](https://iso639-3.sil.org/code/kea) | ltr | [15.1, -23.6](https://www.openstreetmap.org/#map=5/15.06/-23.61) |
| Q'eqchi' | kek | [1116](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1116) | [kek](https://iso639-3.sil.org/code/kek) | ltr | [15.4, -89.3](https://www.openstreetmap.org/#map=5/15.38/-89.25) |
| Kodava | kfa | [kfa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kfa) | [kfa](https://iso639-3.sil.org/code/kfa) | ltr | [12.2, 75.9](https://www.openstreetmap.org/#map=5/12.24/75.92) |
| Pahari, Kullu | kfx | [kfx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kfx) | [kfx](https://iso639-3.sil.org/code/kfx) | ltr | [27.3, 87.1](https://www.openstreetmap.org/#map=5/27.3/87.1) |
| Kusunda | kgg | [kgg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kgg) | [kgg](https://iso639-3.sil.org/code/kgg) | ltr | [27.5, 85.0](https://www.openstreetmap.org/#map=5/27.5/85) |
| Khasi | kha | [kha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) | [kha](https://iso639-3.sil.org/code/kha) | ltr | [25.0, 92.0](https://www.openstreetmap.org/#map=5/24.98/92) |
| Mongolian, Halh (Cyrillic) | mn-Cyrl | [khk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) | [khk](https://iso639-3.sil.org/code/khk) | ltr | [48.3, 106.3](https://www.openstreetmap.org/#map=5/48.32/106.29) |
| Mongolian, Halh (Mongolian) | mn-Mong | | [khk](https://iso639-3.sil.org/code/khk) | ltr | [48.3, 106.3](https://www.openstreetmap.org/#map=5/48.32/106.29) |
| Khmer, Central | km | [khm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) | [khm](https://iso639-3.sil.org/code/khm) | ltr | [12.1, 105.0](https://www.openstreetmap.org/#map=5/12.05/105.02) |
| Kharia | khr | [khr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khr) | [khr](https://iso639-3.sil.org/code/khr) | ltr | [22.4, 84.4](https://www.openstreetmap.org/#map=5/22.36/84.39) |
| Rwanda | rw | [rua1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) | [kin](https://iso639-3.sil.org/code/kin) | ltr | [-1.6, 29.6](https://www.openstreetmap.org/#map=5/-1.57/29.64) |
| Kirghiz | ky | [kdo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) | [kir](https://iso639-3.sil.org/code/kir) | ltr | [42.0, 74.0](https://www.openstreetmap.org/#map=5/42/74) |
| Khakas | kjh | [kjh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) | [kjh](https://iso639-3.sil.org/code/kjh) | ltr | [50.7, 107.2](https://www.openstreetmap.org/#map=5/50.74/107.17) |
| Khün | kkh-Lana | | [kkh](https://iso639-3.sil.org/code/kkh) | ltr | [20.7, 99.5](https://www.openstreetmap.org/#map=5/20.7/99.5) |
| Mbundu | kmb | [mlo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) | [kmb](https://iso639-3.sil.org/code/kmb) | ltr | [-9.0, 14.9](https://www.openstreetmap.org/#map=5/-8.98/14.89) |
| Kurdish, Northern | ku | [kur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | [kmr](https://iso639-3.sil.org/code/kmr) | ltr | [37.0, 43.0](https://www.openstreetmap.org/#map=5/37/43) |
| Kurdish, Northern (Arabic) | ku-Arab | [kur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | [kmr](https://iso639-3.sil.org/code/kmr) | rtl | [37.0, 43.0](https://www.openstreetmap.org/#map=5/37/43) |
| Kanuri, Central | kr | [kph](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) | [knc](https://iso639-3.sil.org/code/knc) | ltr | [11.9, 16.4](https://www.openstreetmap.org/#map=5/11.89/16.39) |
| Koongo | kg | [kon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) | [kng](https://iso639-3.sil.org/code/kng) | ltr | [-5.6, 14.5](https://www.openstreetmap.org/#map=5/-5.58/14.48) |
| Koongo (Angola) | kg-AO | [kng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) | [kng](https://iso639-3.sil.org/code/kng) | ltr | [-5.6, 14.5](https://www.openstreetmap.org/#map=5/-5.58/14.48) |
| Komi-Permyak | koi | [koi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) | [koi](https://iso639-3.sil.org/code/koi) | ltr | [59.7, 54.8](https://www.openstreetmap.org/#map=5/59.66/54.8) |
| Konjo | koo | [koo1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) | [koo](https://iso639-3.sil.org/code/koo) | ltr | [0.3, 29.9](https://www.openstreetmap.org/#map=5/0.32/29.87) |
| Korean | ko | [kkn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) | [kor](https://iso639-3.sil.org/code/kor) | ltr | [37.5, 128.0](https://www.openstreetmap.org/#map=5/37.5/128) |
| Kaonde | kqn | [kqn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) | [kqn](https://iso639-3.sil.org/code/kqn) | ltr | [-12.4, 25.8](https://www.openstreetmap.org/#map=5/-12.41/25.76) |
| Kissi, Northern | kqs | [kqs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqs) | [kqs](https://iso639-3.sil.org/code/kqs) | ltr | [9.2, -10.1](https://www.openstreetmap.org/#map=5/9.183333/-10.1) |
| Kumhali | kra | [kra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kra) | [kra](https://iso639-3.sil.org/code/kra) | ltr | [27.8, 84.1](https://www.openstreetmap.org/#map=5/27.8/84.1) |
| Krio | kri | [kri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) | [kri](https://iso639-3.sil.org/code/kri) | ltr | [10.9, -14.3](https://www.openstreetmap.org/#map=5/10.88/-14.32) |
| Karelian | krl | [krl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) | [krl](https://iso639-3.sil.org/code/krl) | ltr | [65.2, 30.9](https://www.openstreetmap.org/#map=5/65.17/30.87) |
| Karen, S'gaw | ksw | [ksw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ksw) | [ksw](https://iso639-3.sil.org/code/ksw) | ltr | [18.0, 97.7](https://www.openstreetmap.org/#map=5/17.99/97.71) |
| Kituba | ktu | [ktu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) | [ktu](https://iso639-3.sil.org/code/ktu) | ltr | [-2.3, 17.1](https://www.openstreetmap.org/#map=5/-2.3/17.15) |
| Awa-Cuaiquer | kwi | [kwi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) | [kwi](https://iso639-3.sil.org/code/kwi) | ltr | [1.2, -78.3](https://www.openstreetmap.org/#map=5/1.22/-78.34) |
| Kurux, Nepali | kxl | [kxl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kxl) | [kxl](https://iso639-3.sil.org/code/kxl) | ltr | [26.7, 86.0](https://www.openstreetmap.org/#map=5/26.72/86) |
| Ladino | lad | [lad](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) | [lad](https://iso639-3.sil.org/code/lad) | ltr | [41.2, 28.7](https://www.openstreetmap.org/#map=5/41.2/28.66) |
| Lao | lo | [nol](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) | [lao](https://iso639-3.sil.org/code/lao) | ltr | [16.1, 104.6](https://www.openstreetmap.org/#map=5/16.07/104.57) |
| Latin | la | [ltn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) | [lat](https://iso639-3.sil.org/code/lat) | ltr | [41.9, 12.4](https://www.openstreetmap.org/#map=5/41.9/12.45) |
| Latin (1) | la | [ltn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) | [lat](https://iso639-3.sil.org/code/lat) | ltr | [41.9, 12.4](https://www.openstreetmap.org/#map=5/41.9/12.45) |
| Latvian | lv | [lat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | [lvs](https://iso639-3.sil.org/code/lvs) | ltr | [56.8, 24.3](https://www.openstreetmap.org/#map=5/56.83/24.31) |
| Lepcha | lep | [lep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lep) | [lep](https://iso639-3.sil.org/code/lep) | ltr | [27.0, 87.8](https://www.openstreetmap.org/#map=5/27/87.8) |
| Lhomi | lhm | [lhm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lhm) | [lhm](https://iso639-3.sil.org/code/lhm) | ltr | [27.6, 87.7](https://www.openstreetmap.org/#map=5/27.59/87.72) |
| Limba, West-Central | lia | [lia](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) | [lia](https://iso639-3.sil.org/code/lia) | ltr | [9.5, -12.3](https://www.openstreetmap.org/#map=5/9.52/-12.31) |
| Limbu | lif | [lif](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lif) | [lif](https://iso639-3.sil.org/code/lif) | ltr | [27.3, 87.9](https://www.openstreetmap.org/#map=5/27.27/87.89) |
| Ligurian | lij | [lij](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) | [lij](https://iso639-3.sil.org/code/lij) | ltr | [44.1, 7.9](https://www.openstreetmap.org/#map=5/44.08/7.91) |
| Lingala | ln | [lin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) | [lin](https://iso639-3.sil.org/code/lin) | ltr | [1.4, 19.8](https://www.openstreetmap.org/#map=5/1.4/19.78) |
| Lingala (tones) | ln | | [lin](https://iso639-3.sil.org/code/lin) | ltr | [1.4, 19.8](https://www.openstreetmap.org/#map=5/1.4/19.78) |
| Lithuanian | lt | [lit](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) | [lit](https://iso639-3.sil.org/code/lit) | ltr | [55.1, 24.0](https://www.openstreetmap.org/#map=5/55.14/23.96) |
| Ladin | lld | [lld](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) | [lld](https://iso639-3.sil.org/code/lld) | ltr | [46.6, 11.9](https://www.openstreetmap.org/#map=5/46.61/11.89) |
| Occitan (Languedocien) | oc | [prv1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Lamnso' | lns | [nso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) | [lns](https://iso639-3.sil.org/code/lns) | ltr | [6.4, 11.1](https://www.openstreetmap.org/#map=5/6.4/11.07) |
| Lobi | lob | [lob](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) | [lob](https://iso639-3.sil.org/code/lob) | ltr | [10.0, -3.3](https://www.openstreetmap.org/#map=5/9.96/-3.34) |
| Otuho | lot | [lot](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) | [lot](https://iso639-3.sil.org/code/lot) | ltr | [4.2, 32.7](https://www.openstreetmap.org/#map=5/4.16/32.66) |
| Lozi | loz | [lbm1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) | [loz](https://iso639-3.sil.org/code/loz) | ltr | [-17.7, 24.7](https://www.openstreetmap.org/#map=5/-17.71/24.74) |
| Luxembourgeois | lb | [lux](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) | [ltz](https://iso639-3.sil.org/code/ltz) | ltr | [49.7, 6.2](https://www.openstreetmap.org/#map=5/49.68/6.15) |
| Luba-Kasai | lua | [lub](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) | [lua](https://iso639-3.sil.org/code/lua) | ltr | [-5.7, 22.4](https://www.openstreetmap.org/#map=5/-5.73/22.44) |
| Luvale | lue | [lue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) | [lue](https://iso639-3.sil.org/code/lue) | ltr | [-13.5, 22.3](https://www.openstreetmap.org/#map=5/-13.54/22.29) |
| Ganda | lg | [lap1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) | [lug](https://iso639-3.sil.org/code/lug) | ltr | [0.7, 32.1](https://www.openstreetmap.org/#map=5/0.67/32.15) |
| Lunda | lun | [mlo1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) | [lun](https://iso639-3.sil.org/code/lun) | ltr | [-11.2, 23.9](https://www.openstreetmap.org/#map=5/-11.18/23.87) |
| Mizo | lus | [lus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) | [lus](https://iso639-3.sil.org/code/lus) | ltr | [22.6, 92.6](https://www.openstreetmap.org/#map=5/22.61/92.62) |
| Madura | mad | [mhj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) | [mad](https://iso639-3.sil.org/code/mad) | ltr | [-7.0, 113.0](https://www.openstreetmap.org/#map=5/-7/113) |
| Magahi | mag | [mqm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) | [mag](https://iso639-3.sil.org/code/mag) | ltr | [25.1, 85.3](https://www.openstreetmap.org/#map=5/25.09/85.33) |
| Marshallese | mh | [mzm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) | [mah](https://iso639-3.sil.org/code/mah) | ltr | [3.1, 170.5](https://www.openstreetmap.org/#map=5/3.13/170.46) |
| Maithili | mai | | [mai](https://iso639-3.sil.org/code/mai) | ltr | [26.4, 86.2](https://www.openstreetmap.org/#map=5/26.38/86.22) |
| Maithili (2) | mai | [mai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mai) | [mai](https://iso639-3.sil.org/code/mai) | ltr | [26.4, 86.2](https://www.openstreetmap.org/#map=5/26.38/86.22) |
| Malayalam | ml | [mjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | [mal](https://iso639-3.sil.org/code/mal) | ltr | [9.6, 76.8](https://www.openstreetmap.org/#map=5/9.59/76.77) |
| Malayalam | ml | [mjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | [mal](https://iso639-3.sil.org/code/mal) | ltr | [9.6, 76.8](https://www.openstreetmap.org/#map=5/9.59/76.77) |
| Mam, Northern | mam | [mam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) | [mam](https://iso639-3.sil.org/code/mam) | ltr | [14.8, -91.7](https://www.openstreetmap.org/#map=5/14.8/-91.72) |
| Marathi | mr | [mrt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) | [mar](https://iso639-3.sil.org/code/mar) | ltr | [17.9, 76.7](https://www.openstreetmap.org/#map=5/17.93/76.67) |
| Mazahua Central | maz | [maz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) | [maz](https://iso639-3.sil.org/code/maz) | ltr | [19.7, -100.0](https://www.openstreetmap.org/#map=5/19.74/-100.02) |
| Sharanahua | mcd | [mcd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) | [mcd](https://iso639-3.sil.org/code/mcd) | ltr | [-9.9, -71.1](https://www.openstreetmap.org/#map=5/-9.86/-71.12) |
| Matsés | mcf | [mcf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) | [mcf](https://iso639-3.sil.org/code/mcf) | ltr | [-5.7, -72.6](https://www.openstreetmap.org/#map=5/-5.74/-72.63) |
| Mende | men | [mfy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) | [men](https://iso639-3.sil.org/code/men) | ltr | [7.9, -11.0](https://www.openstreetmap.org/#map=5/7.91/-10.99) |
| Moba | mfq | [mfq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfq) | [mfq](https://iso639-3.sil.org/code/mfq) | ltr | [8.0, 1.0](https://www.openstreetmap.org/#map=5/8/1) |
| Maga, Eastern | mgp | [mag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mag) | [mgp](https://iso639-3.sil.org/code/mgp) | ltr | [27.4, 87.1](https://www.openstreetmap.org/#map=5/27.41/87.06) |
| Micmac | mic | [mic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) | [mic](https://iso639-3.sil.org/code/mic) | ltr | [46.0, -65.6](https://www.openstreetmap.org/#map=5/45.99/-65.58) |
| Minangkabau | min | [mpu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) | [min](https://iso639-3.sil.org/code/min) | ltr | [4.2, 96.3](https://www.openstreetmap.org/#map=5/4.17/96.25) |
| Mískito | miq | [miq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) | [miq](https://iso639-3.sil.org/code/miq) | ltr | [15.2, -84.3](https://www.openstreetmap.org/#map=5/15.16/-84.29) |
| Mahji | mjz | [mjz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjz) | [mjz](https://iso639-3.sil.org/code/mjz) | ltr | [29.5, 80.4](https://www.openstreetmap.org/#map=5/29.46/80.38) |
| Macedonian | mk | [mkj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) | [mkd](https://iso639-3.sil.org/code/mkd) | ltr | [41.6, 21.8](https://www.openstreetmap.org/#map=5/41.6/21.79) |
| Maltese | mt | [mls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) | [mlt](https://iso639-3.sil.org/code/mlt) | ltr | [35.9, 14.4](https://www.openstreetmap.org/#map=5/35.89/14.45) |
| Malay (Arabic) | zlm-Arab | | [zlm](https://iso639-3.sil.org/code/zlm) | rtl | [1.9, 103.0](https://www.openstreetmap.org/#map=5/1.86/103) |
| Malay (Latin) | zlm-Latn | [mli](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) | [zlm](https://iso639-3.sil.org/code/zlm) | ltr | [1.9, 103.0](https://www.openstreetmap.org/#map=5/1.86/103) |
| Mon | mnw | | [mnw](https://iso639-3.sil.org/code/mnw) | ltr | [10.0, 100.0](https://www.openstreetmap.org/#map=5/10/100) |
| Mòoré | mos | [mhm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) | [mos](https://iso639-3.sil.org/code/mos) | ltr | [10.4, -1.2](https://www.openstreetmap.org/#map=5/10.45/-1.17) |
| Maori | mi | [mbf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) | [mri](https://iso639-3.sil.org/code/mri) | ltr | [-38.3, 176.5](https://www.openstreetmap.org/#map=5/-38.29/176.54) |
| Mixe, Totontepec | mto | [mto](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) | [mto](https://iso639-3.sil.org/code/mto) | ltr | [17.2, -96.0](https://www.openstreetmap.org/#map=5/17.22/-96.02) |
| Wichí Lhamtés Nocten | mtp | [mtp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mtp) | [mtp](https://iso639-3.sil.org/code/mtp) | ltr | [-22.0, -64.0](https://www.openstreetmap.org/#map=5/-22/-64) |
| Marwari | rwr | [mkd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkd) | [rwr](https://iso639-3.sil.org/code/rwr) | ltr | [28.3, 71.6](https://www.openstreetmap.org/#map=5/28.32/71.57) |
| Mongolian, Peripheral (Mongolian) | mvf-Mong | [mvf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mvf) | [mvf](https://iso639-3.sil.org/code/mvf) | ttb | [42.0, 115.0](https://www.openstreetmap.org/#map=5/42/115) |
| Mozarabic | mxi | [moz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) | [mxi](https://iso639-3.sil.org/code/mxi) | ltr | [37.9, -1.8](https://www.openstreetmap.org/#map=5/37.88/-1.8) |
| Mixtec, Metlatónoc | mxv | [mxv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) | [mxv](https://iso639-3.sil.org/code/mxv) | ltr | [17.1, -98.3](https://www.openstreetmap.org/#map=5/17.05/-98.35) |
| Burmese | my | [bms](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) | [mya](https://iso639-3.sil.org/code/mya) | ltr | [20.8, 94.0](https://www.openstreetmap.org/#map=5/20.79/93.97) |
| Mazatec, Ixcatlán | mzi | [mao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) | [mzi](https://iso639-3.sil.org/code/mzi) | ltr | [18.1, -96.6](https://www.openstreetmap.org/#map=5/18.15/-96.57) |
| Chinese, Min Nan | nan | [nan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nan) | [nan](https://iso639-3.sil.org/code/nan) | ltr | [25.0, 116.0](https://www.openstreetmap.org/#map=5/25/116) |
| Navajo | nv | [nav](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) | [nav](https://iso639-3.sil.org/code/nav) | ltr | [36.2, -110.1](https://www.openstreetmap.org/#map=5/36.21/-110.08) |
| Nyemba | nba | [nba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) | [nba](https://iso639-3.sil.org/code/nba) | ltr | [-15.7, 18.3](https://www.openstreetmap.org/#map=5/-15.71/18.25) |
| Ndebele | nr | [nel](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) | [nbl](https://iso639-3.sil.org/code/nbl) | ltr | [-25.6, 29.1](https://www.openstreetmap.org/#map=5/-25.63/29.05) |
| Ndonga | ng | [1114](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1114) | [ndo](https://iso639-3.sil.org/code/ndo) | ltr | [-17.6, 19.2](https://www.openstreetmap.org/#map=5/-17.64/19.16) |
| Saxon, Low | nds | [ige](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) | [nds](https://iso639-3.sil.org/code/nds) | ltr | [50.8, 6.1](https://www.openstreetmap.org/#map=5/50.77/6.09) |
| Nepali | ne | [nep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) | [npi](https://iso639-3.sil.org/code/npi) | ltr | [27.5, 85.0](https://www.openstreetmap.org/#map=5/27.5/85) |
| Newar | new | [new](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=new) | [new](https://iso639-3.sil.org/code/new) | ltr | [27.3, 85.0](https://www.openstreetmap.org/#map=5/27.26/84.96) |
| Nahuatl, Central | nhn | [nhn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) | [nhn](https://iso639-3.sil.org/code/nhn) | ltr | [19.1, -98.3](https://www.openstreetmap.org/#map=5/19.12/-98.3) |
| Nganasan | nio | [nio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) | [nio](https://iso639-3.sil.org/code/nio) | ltr | [73.1, 86.2](https://www.openstreetmap.org/#map=5/73.14/86.21) |
| Niue | niu | [niu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=niu) | [niu](https://iso639-3.sil.org/code/niu) | ltr | [-19.1, -169.9](https://www.openstreetmap.org/#map=5/-19.05/-169.92) |
| Gilyak | niv | [Nivkh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Nivkh) | [niv](https://iso639-3.sil.org/code/niv) | ltr | [52.6, 140.7](https://www.openstreetmap.org/#map=5/52.59/140.68) |
| Naga, Ao | njo | [njo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) | [njo](https://iso639-3.sil.org/code/njo) | ltr | [26.3, 94.4](https://www.openstreetmap.org/#map=5/26.32/94.38) |
| Kulango, Bouna | nku | [kou](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) | [nku](https://iso639-3.sil.org/code/nku) | ltr | [8.5, -2.8](https://www.openstreetmap.org/#map=5/8.46/-2.75) |
| Dutch | nl | [dut](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) | [nld](https://iso639-3.sil.org/code/nld) | ltr | [52.0, 5.0](https://www.openstreetmap.org/#map=5/52/5) |
| Norwegian, Nynorsk | nn | [nrn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) | [nno](https://iso639-3.sil.org/code/nno) | ltr | [61.0, 11.0](https://www.openstreetmap.org/#map=5/61/11) |
| Norwegian, Bokmål | nb | [nrr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) | [nob](https://iso639-3.sil.org/code/nob) | ltr | [61.0, 8.0](https://www.openstreetmap.org/#map=5/61/8) |
| Nomatsiguenga | not | [not](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) | [not](https://iso639-3.sil.org/code/not) | ltr | [-11.5, -74.4](https://www.openstreetmap.org/#map=5/-11.53/-74.44) |
| Sotho, Northern | nso | [srt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) | [nso](https://iso639-3.sil.org/code/nso) | ltr | [-24.8, 29.5](https://www.openstreetmap.org/#map=5/-24.8/29.47) |
| Nuer | nus | [nus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nus) | [nus](https://iso639-3.sil.org/code/nus) | ltr | [8.1, 32.4](https://www.openstreetmap.org/#map=5/8.14/32.38) |
| Nyanja (Chechewa) | ny | [nyj1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) | [nya](https://iso639-3.sil.org/code/nya) | ltr | [-14.8, 32.8](https://www.openstreetmap.org/#map=5/-14.8/32.81) |
| Nyanja (Chinyanja) | ny | [nyj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) | [nya](https://iso639-3.sil.org/code/nya) | ltr | [-14.8, 32.8](https://www.openstreetmap.org/#map=5/-14.8/32.81) |
| Nyamwezi | nym | [nyz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) | [nym](https://iso639-3.sil.org/code/nym) | ltr | [-5.1, 32.9](https://www.openstreetmap.org/#map=5/-5.09/32.94) |
| Nyankore | nyn | [nyn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) | [nyn](https://iso639-3.sil.org/code/nyn) | ltr | [-0.5, 30.6](https://www.openstreetmap.org/#map=5/-0.46/30.55) |
| Nzema | nzi | [nze](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) | [nzi](https://iso639-3.sil.org/code/nzi) | ltr | [5.2, -2.8](https://www.openstreetmap.org/#map=5/5.18/-2.81) |
| Orok | oaa | [oaa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) | [oaa](https://iso639-3.sil.org/code/oaa) | ltr | [49.4, 143.1](https://www.openstreetmap.org/#map=5/49.36/143.13) |
| Occitan (Francoprovençal, Fribourg) | oc | [Fr3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Occitan (Francoprovençal, Savoie) | oc | [fr2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Occitan (Francoprovençal, Vaud) | oc | [fr4](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Occitan (Francoprovençal, Valais) | oc | [frp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Ojibwa, Northwestern | ojb | [ojb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) | [ojb](https://iso639-3.sil.org/code/ojb) | ltr | [51.6, -87.8](https://www.openstreetmap.org/#map=5/51.62/-87.79) |
| Okiek | oki | [oki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) | [oki](https://iso639-3.sil.org/code/oki) | ltr | [-2.8, 36.6](https://www.openstreetmap.org/#map=5/-2.78/36.6) |
| Oroqen | orh | [orh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) | [orh](https://iso639-3.sil.org/code/orh) | ltr | [50.0, 125.0](https://www.openstreetmap.org/#map=5/50/125) |
| Odia | or | [ory](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ory) | [ory](https://iso639-3.sil.org/code/ory) | ltr | [21.7, 86.9](https://www.openstreetmap.org/#map=5/21.66/86.86) |
| Osetin | os | [ose](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) | [oss](https://iso639-3.sil.org/code/oss) | ltr | [41.8, 43.3](https://www.openstreetmap.org/#map=5/41.79/43.27) |
| Otomi, Mezquital | ote | [1111](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1111) | [ote](https://iso639-3.sil.org/code/ote) | ltr | [20.2, -99.6](https://www.openstreetmap.org/#map=5/20.23/-99.56) |
| Pampangan | pam | [pmp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) | [pam](https://iso639-3.sil.org/code/pam) | ltr | [15.0, 120.5](https://www.openstreetmap.org/#map=5/14.96/120.5) |
| Panjabi, Eastern | pa | [pnj1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) | [pan](https://iso639-3.sil.org/code/pan) | ltr | [30.0, 75.7](https://www.openstreetmap.org/#map=5/30.04/75.67) |
| Papiamentu | pap | [pap](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) | [pap](https://iso639-3.sil.org/code/pap) | ltr | [12.5, -69.9](https://www.openstreetmap.org/#map=5/12.48/-69.94) |
| Palauan | pau | [plu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) | [pau](https://iso639-3.sil.org/code/pau) | ltr | [7.2, 134.5](https://www.openstreetmap.org/#map=5/7.17/134.5) |
| Páez | pbb | [pbb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) | [pbb](https://iso639-3.sil.org/code/pbb) | ltr | [2.6, -76.3](https://www.openstreetmap.org/#map=5/2.62/-76.31) |
| Pashto, Northern | ps | [pbu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) | [pbu](https://iso639-3.sil.org/code/pbu) | rtl | [35.0, 71.3](https://www.openstreetmap.org/#map=5/35/71.33) |
| Picard | pcd | [frn2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) | [pcd](https://iso639-3.sil.org/code/pcd) | ltr | [50.3, 3.3](https://www.openstreetmap.org/#map=5/50.28/3.25) |
| Pidgin, Nigerian | pcm | [pcm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) | [pcm](https://iso639-3.sil.org/code/pcm) | ltr | [9.7, 4.2](https://www.openstreetmap.org/#map=5/9.66/4.21) |
| Farsi, Western | fa | [prs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) | [pes](https://iso639-3.sil.org/code/pes) | rtl | [28.7, 55.2](https://www.openstreetmap.org/#map=5/28.66/55.16) |
| Dari | fa-AF | [prs1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) | [prs](https://iso639-3.sil.org/code/prs) | rtl | [28.7, 55.2](https://www.openstreetmap.org/#map=5/28.66/55.16) |
| Pijin | pis | [pis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) | [pis](https://iso639-3.sil.org/code/pis) | ltr | [-9.6, 160.1](https://www.openstreetmap.org/#map=5/-9.57/160.14) |
| Pintupi-Luritja | piu | [piu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) | [piu](https://iso639-3.sil.org/code/piu) | ltr | [-20.1, 128.0](https://www.openstreetmap.org/#map=5/-20.14/127.98) |
| Malagasy, Plateau | mg | [mex](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) | [plt](https://iso639-3.sil.org/code/plt) | ltr | [-19.6, 47.1](https://www.openstreetmap.org/#map=5/-19.59/47.12) |
| Panjabi, Western | lah | | [pnb](https://iso639-3.sil.org/code/pnb) | rtl | [30.1, 75.3](https://www.openstreetmap.org/#map=5/30.09/75.35) |
| Polish | pl | [pql](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) | [pol](https://iso639-3.sil.org/code/pol) | ltr | [51.8, 18.6](https://www.openstreetmap.org/#map=5/51.84/18.63) |
| Pohnpeian | pon | [pnf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) | [pon](https://iso639-3.sil.org/code/pon) | ltr | [6.9, 158.2](https://www.openstreetmap.org/#map=5/6.87/158.22) |
| Portuguese (Brazil) | pt-BR | | [por](https://iso639-3.sil.org/code/por) | ltr | [-15.0, -47.0](https://www.openstreetmap.org/#map=5/-15/-47) |
| Portuguese (Portugal) | pt-PT | [por](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) | [por](https://iso639-3.sil.org/code/por) | ltr | [39.9, -8.1](https://www.openstreetmap.org/#map=5/39.91/-8.1) |
| Crioulo, Upper Guinea | pov | [gbc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) | [pov](https://iso639-3.sil.org/code/pov) | ltr | [13.2, -15.3](https://www.openstreetmap.org/#map=5/13.23/-15.33) |
| Pipil | ppl | [ppl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) | [ppl](https://iso639-3.sil.org/code/ppl) | ltr | [13.9, -89.4](https://www.openstreetmap.org/#map=5/13.89/-89.44) |
| Ashéninka Perené | prq | [cpp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpp) | [prq](https://iso639-3.sil.org/code/prq) | ltr | [-11.0, -74.9](https://www.openstreetmap.org/#map=5/-10.98/-74.92) |
| Occitan | oc | [pro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) | [oci](https://iso639-3.sil.org/code/oci) | ltr | [44.1, 6.8](https://www.openstreetmap.org/#map=5/44.14/6.83) |
| Karen, Pwo Western | pwo | [pwo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pwo) | [pwo](https://iso639-3.sil.org/code/pwo) | ltr | [17.4, 97.7](https://www.openstreetmap.org/#map=5/17.36/97.7) |
| K'iche', Central | quc | [1117](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1117) | [quc](https://iso639-3.sil.org/code/quc) | ltr | [14.5, -91.2](https://www.openstreetmap.org/#map=5/14.53/-91.17) |
| Quechua (Unified Quichua, old Hispanic orthography) | qu | [qud1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) | [que](https://iso639-3.sil.org/code/que) | ltr | [-0.5, -78.5](https://www.openstreetmap.org/#map=5/-0.5/-78.5) |
| Quichua, Chimborazo Highland | qug | [qug](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) | [qug](https://iso639-3.sil.org/code/qug) | ltr | [-1.4, -78.8](https://www.openstreetmap.org/#map=5/-1.37/-78.85) |
| Quechua, North Bolivian | qul | [qul](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qul) | [qul](https://iso639-3.sil.org/code/qul) | ltr | [-14.0, -68.0](https://www.openstreetmap.org/#map=5/-14/-68) |
| Quechua, Ayacucho | quy | [quy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) | [quy](https://iso639-3.sil.org/code/quy) | ltr | [-13.8, -74.3](https://www.openstreetmap.org/#map=5/-13.85/-74.32) |
| Quechua, Cusco | qu | [quz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) | [quz](https://iso639-3.sil.org/code/quz) | ltr | [-14.1, -71.8](https://www.openstreetmap.org/#map=5/-14.09/-71.77) |
| Quechua, Ambo-Pasco | qva | [qeg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) | [qva](https://iso639-3.sil.org/code/qva) | ltr | [-10.5, -76.1](https://www.openstreetmap.org/#map=5/-10.51/-76.11) |
| Quechua, Cajamarca | qvc | [qnt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) | [qvc](https://iso639-3.sil.org/code/qvc) | ltr | [-7.1, -78.3](https://www.openstreetmap.org/#map=5/-7.09/-78.32) |
| Quechua, Huamalíes-Dos de Mayo Huánuco | qvh | [qej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) | [qvh](https://iso639-3.sil.org/code/qvh) | ltr | [-9.2, -76.3](https://www.openstreetmap.org/#map=5/-9.16/-76.34) |
| Quechua, Margos-Yarowilca-Lauricocha | qvm | [qei](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) | [qvm](https://iso639-3.sil.org/code/qvm) | ltr | [-9.8, -76.5](https://www.openstreetmap.org/#map=5/-9.84/-76.5) |
| Quechua, North Junín | qvn | [qju](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) | [qvn](https://iso639-3.sil.org/code/qvn) | ltr | [-11.2, -75.8](https://www.openstreetmap.org/#map=5/-11.21/-75.81) |
| Quechua, Huaylas Ancash | qwh | [qan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) | [qwh](https://iso639-3.sil.org/code/qwh) | ltr | [-9.4, -77.8](https://www.openstreetmap.org/#map=5/-9.39/-77.78) |
| Quechua, South Bolivian | quh | [qec1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) | [quh](https://iso639-3.sil.org/code/quh) | ltr | [-20.9, -66.3](https://www.openstreetmap.org/#map=5/-20.92/-66.33) |
| Quechua, Northern Conchucos Ancash | qxn | [qed](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) | [qxn](https://iso639-3.sil.org/code/qxn) | ltr | [-9.0, -77.4](https://www.openstreetmap.org/#map=5/-8.97/-77.41) |
| Quechua, Arequipa-La Unión | qxu | [qar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) | [qxu](https://iso639-3.sil.org/code/qxu) | ltr | [-15.2, -72.6](https://www.openstreetmap.org/#map=5/-15.18/-72.63) |
| Chamling | rab | [rab](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rab) | [rab](https://iso639-3.sil.org/code/rab) | ltr | [27.3, 86.8](https://www.openstreetmap.org/#map=5/27.3/86.8) |
| Malvi | raj | [raj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=raj) | [mup](https://iso639-3.sil.org/code/mup) | ltr | [23.5, 75.6](https://www.openstreetmap.org/#map=5/23.49/75.56) |
| Rarotongan | rar | [rrt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) | [rar](https://iso639-3.sil.org/code/rar) | ltr | [-20.0, -158.0](https://www.openstreetmap.org/#map=5/-20/-158) |
| Rohingya | rhg | [rhg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhg) | [rhg](https://iso639-3.sil.org/code/rhg) | rtl | [20.8, 92.4](https://www.openstreetmap.org/#map=5/20.83/92.39) |
| Raji | rji | [rji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rji) | [rji](https://iso639-3.sil.org/code/rji) | ltr | [28.5, 81.3](https://www.openstreetmap.org/#map=5/28.5/81.3) |
| Rajbanshi | rjs | [rjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rjs) | [rjs](https://iso639-3.sil.org/code/rjs) | ltr | [26.4, 88.5](https://www.openstreetmap.org/#map=5/26.38/88.45) |
| Romani, Balkan | rmn | [rmn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) | [rmn](https://iso639-3.sil.org/code/rmn) | ltr | [42.7, 21.2](https://www.openstreetmap.org/#map=5/42.67/21.17) |
| Romani, Balkan (1) | rmn | [rmn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) | [rmn](https://iso639-3.sil.org/code/rmn) | ltr | [42.7, 21.2](https://www.openstreetmap.org/#map=5/42.67/21.17) |
| Aromanian | rup | [rmy1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) | [rup](https://iso639-3.sil.org/code/rup) | ltr | [42.1, 22.6](https://www.openstreetmap.org/#map=5/42.06/22.65) |
| Romansch | rm | | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Puter) | rm-puter | | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Grischun) | rm-rumgr | [rhe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Surmiran) | rm-surmiran | | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Sursilvan) | rm-sursilv | | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Sutsilvan) | rm-sutsilv | | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romansch (Vallader) | rm-vallader | | [roh](https://iso639-3.sil.org/code/roh) | ltr | [46.5, 9.9](https://www.openstreetmap.org/#map=5/46.55/9.93) |
| Romanian (1953) | ro | [rum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) | [ron](https://iso639-3.sil.org/code/ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/#map=5/46.39/24.23) |
| Romanian (1993) | ro | | [ron](https://iso639-3.sil.org/code/ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/#map=5/46.39/24.23) |
| Romanian (2006) | ro | | [ron](https://iso639-3.sil.org/code/ron) | ltr | [46.4, 24.2](https://www.openstreetmap.org/#map=5/46.39/24.23) |
| Rundi | rn | [rud1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) | [run](https://iso639-3.sil.org/code/run) | ltr | [-1.4, 31.3](https://www.openstreetmap.org/#map=5/-1.44/31.32) |
| Russian | ru | [rus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) | [rus](https://iso639-3.sil.org/code/rus) | ltr | [59.0, 50.0](https://www.openstreetmap.org/#map=5/59/50) |
| Sango | sg | [saj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) | [sag](https://iso639-3.sil.org/code/sag) | ltr | [6.8, 20.2](https://www.openstreetmap.org/#map=5/6.79/20.17) |
| Yakut | sah | [sah](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) | [sah](https://iso639-3.sil.org/code/sah) | ltr | [61.7, 134.0](https://www.openstreetmap.org/#map=5/61.7/133.98) |
| Sanskrit | sa | [skt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) | [san](https://iso639-3.sil.org/code/san) | ltr | [20.0, 77.0](https://www.openstreetmap.org/#map=5/20/77) |
| Sanskrit (Grantha) | sa-Gran | | [san](https://iso639-3.sil.org/code/san) | ltr | [20.0, 77.0](https://www.openstreetmap.org/#map=5/20/77) |
| Santhali | sat | [sat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sat) | [sat](https://iso639-3.sil.org/code/sat) | ltr | [25.0, 87.8](https://www.openstreetmap.org/#map=5/25.03/87.82) |
| Sadri | sck | [kis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kis) | [sck](https://iso639-3.sil.org/code/sck) | ltr | [23.7, 84.8](https://www.openstreetmap.org/#map=5/23.66/84.81) |
| Scots | sco | [sco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) | [sco](https://iso639-3.sil.org/code/sco) | ltr | [55.5, -6.0](https://www.openstreetmap.org/#map=5/55.54/-6) |
| Helambu Sherpa | scp | [scp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=scp) | [scp](https://iso639-3.sil.org/code/scp) | ltr | [27.9, 85.6](https://www.openstreetmap.org/#map=5/27.92/85.63) |
| Secoya | sey | [1123](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) | [sey](https://iso639-3.sil.org/code/sey) | ltr | [0.5, -75.5](https://www.openstreetmap.org/#map=5/0.46/-75.55) |
| Shilluk | shk | [shk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) | [shk](https://iso639-3.sil.org/code/shk) | ltr | [9.8, 31.8](https://www.openstreetmap.org/#map=5/9.85/31.79) |
| Shan | shn | [sjn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) | [shn](https://iso639-3.sil.org/code/shn) | ltr | [21.6, 98.0](https://www.openstreetmap.org/#map=5/21.6/98.03) |
| Shipibo-Conibo | shp | [shp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) | [shp](https://iso639-3.sil.org/code/shp) | ltr | [-7.2, -74.8](https://www.openstreetmap.org/#map=5/-7.17/-74.82) |
| Sinhala | si | [snh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) | [sin](https://iso639-3.sil.org/code/sin) | ltr | [7.0, 81.0](https://www.openstreetmap.org/#map=5/7/81) |
| Epena | sja | [1126](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1126) | [sja](https://iso639-3.sil.org/code/sja) | ltr | [4.3, -77.4](https://www.openstreetmap.org/#map=5/4.26/-77.36) |
| Seke | skj | [skj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skj) | [skj](https://iso639-3.sil.org/code/skj) | ltr | [28.9, 83.8](https://www.openstreetmap.org/#map=5/28.9/83.8) |
| Seraiki | skr | [skr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) | [skr](https://iso639-3.sil.org/code/skr) | rtl | [29.6, 71.9](https://www.openstreetmap.org/#map=5/29.55/71.91) |
| Slovak | sk | [slo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) | [slk](https://iso639-3.sil.org/code/slk) | ltr | [48.5, 18.8](https://www.openstreetmap.org/#map=5/48.55/18.78) |
| Salar | slr | [slr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slr) | [slr](https://iso639-3.sil.org/code/slr) | ltr | [35.0, 95.0](https://www.openstreetmap.org/#map=5/35/95) |
| Slovenian | sl | [slv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) | [slv](https://iso639-3.sil.org/code/slv) | ltr | [46.3, 14.8](https://www.openstreetmap.org/#map=5/46.25/14.78) |
| Saami, North | se | [lpi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) | [sme](https://iso639-3.sil.org/code/sme) | ltr | [68.7, 22.1](https://www.openstreetmap.org/#map=5/68.72/22.11) |
| Samoan | sm | [smy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) | [smo](https://iso639-3.sil.org/code/smo) | ltr | [-13.9, -171.8](https://www.openstreetmap.org/#map=5/-13.92/-171.83) |
| Shona | sn | [shd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) | [sna](https://iso639-3.sil.org/code/sna) | ltr | [-17.2, 29.8](https://www.openstreetmap.org/#map=5/-17.21/29.76) |
| Sindhi | sd | [snd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snd) | [snd](https://iso639-3.sil.org/code/snd) | rtl | [26.0, 69.0](https://www.openstreetmap.org/#map=5/26/69) |
| Soninke | snk | [snn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) | [snk](https://iso639-3.sil.org/code/snk) | ltr | [13.1, -11.7](https://www.openstreetmap.org/#map=5/13.13/-11.72) |
| Siona | snn | [1121](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) | [snn](https://iso639-3.sil.org/code/snn) | ltr | [0.3, -76.0](https://www.openstreetmap.org/#map=5/0.32/-76.02) |
| Somali | so | [som](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) | [som](https://iso639-3.sil.org/code/som) | ltr | [4.8, 45.1](https://www.openstreetmap.org/#map=5/4.78/45.15) |
| Sotho, Southern | st | [sso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) | [sot](https://iso639-3.sil.org/code/sot) | ltr | [-30.4, 27.9](https://www.openstreetmap.org/#map=5/-30.44/27.9) |
| Spanish | es | [spn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) | [spa](https://iso639-3.sil.org/code/spa) | ltr | [40.4, -1.1](https://www.openstreetmap.org/#map=5/40.44/-1.12) |
| Sardinian, Logudorese | sc | [srd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) | [src](https://iso639-3.sil.org/code/src) | ltr | [40.5, 9.1](https://www.openstreetmap.org/#map=5/40.49/9.1) |
| Serbian (Cyrillic) | sr-Cyrl | [src5](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) | [srp](https://iso639-3.sil.org/code/srp) | ltr | [44.3, 21.9](https://www.openstreetmap.org/#map=5/44.32/21.92) |
| Serbian (Latin) | sr-Latn | [src3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) | [srp](https://iso639-3.sil.org/code/srp) | ltr | [44.3, 21.9](https://www.openstreetmap.org/#map=5/44.32/21.92) |
| Sirionó | srq | [srq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srq) | [srq](https://iso639-3.sil.org/code/srq) | ltr | [-15.0, -63.0](https://www.openstreetmap.org/#map=5/-15/-63) |
| Serer-Sine | srr | [ses](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) | [srr](https://iso639-3.sil.org/code/srr) | ltr | [13.9, -16.4](https://www.openstreetmap.org/#map=5/13.89/-16.39) |
| Swati | ss | [swz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) | [ssw](https://iso639-3.sil.org/code/ssw) | ltr | [-26.0, 31.5](https://www.openstreetmap.org/#map=5/-26/31.5) |
| Sukuma | suk | [sua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) | [suk](https://iso639-3.sil.org/code/suk) | ltr | [-3.2, 32.9](https://www.openstreetmap.org/#map=5/-3.16/32.88) |
| Sunda | su | [suo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) | [sun](https://iso639-3.sil.org/code/sun) | ltr | [-6.9, 107.1](https://www.openstreetmap.org/#map=5/-6.9/107.11) |
| Susu | sus | [sus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) | [sus](https://iso639-3.sil.org/code/sus) | ltr | [10.4, -13.4](https://www.openstreetmap.org/#map=5/10.4/-13.36) |
| Sunwar | suz | [suz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suz) | [suz](https://iso639-3.sil.org/code/suz) | ltr | [27.5, 86.3](https://www.openstreetmap.org/#map=5/27.52/86.25) |
| Sunwar (2) | suz | [suz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suz1) | [suz](https://iso639-3.sil.org/code/suz) | ltr | [27.5, 86.3](https://www.openstreetmap.org/#map=5/27.52/86.25) |
| Comorian, Maore | swb | [swb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) | [swb](https://iso639-3.sil.org/code/swb) | ltr | [-13.0, 45.1](https://www.openstreetmap.org/#map=5/-12.97/45.14) |
| Swedish | sv | [swd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) | [swe](https://iso639-3.sil.org/code/swe) | ltr | [59.8, 17.4](https://www.openstreetmap.org/#map=5/59.8/17.39) |
| Swahili | sw | [swa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) | [swh](https://iso639-3.sil.org/code/swh) | ltr | [-8.3, 37.6](https://www.openstreetmap.org/#map=5/-8.26/37.62) |
| Tahitian | ty | [tht](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) | [tah](https://iso639-3.sil.org/code/tah) | ltr | [-17.6, -149.4](https://www.openstreetmap.org/#map=5/-17.65/-149.45) |
| Tamang, Eastern | taj | [taj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taj) | [taj](https://iso639-3.sil.org/code/taj) | ltr | [27.3, 87.1](https://www.openstreetmap.org/#map=5/27.32/87.08) |
| Tamil | ta | [tcv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) | [tam](https://iso639-3.sil.org/code/tam) | ltr | [10.5, 78.8](https://www.openstreetmap.org/#map=5/10.52/78.83) |
| Tamil (Sri Lanka) | ta-LK | | [tam](https://iso639-3.sil.org/code/tam) | ltr | [9.0, 80.0](https://www.openstreetmap.org/#map=5/9/80) |
| Tamasheq | taq | [taq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taq) | [taq](https://iso639-3.sil.org/code/taq) | ltr | [14.2, -2.4](https://www.openstreetmap.org/#map=5/14.2/-2.41) |
| Tamasheq (Tifinagh) | taq-Tfng | [taq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taq) | [taq](https://iso639-3.sil.org/code/taq) | ltr | [14.2, -2.4](https://www.openstreetmap.org/#map=5/14.2/-2.41) |
| Tatar | tt | [ttr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) | [tat](https://iso639-3.sil.org/code/tat) | ltr | [55.0, 50.0](https://www.openstreetmap.org/#map=5/55/50) |
| Ditammari | tbz | [tbz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) | [tbz](https://iso639-3.sil.org/code/tbz) | ltr | [10.2, 1.2](https://www.openstreetmap.org/#map=5/10.16/1.18) |
| Ticuna | tca | [tca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) | [tca](https://iso639-3.sil.org/code/tca) | ltr | [-3.7, -69.9](https://www.openstreetmap.org/#map=5/-3.66/-69.87) |
| Telugu | te | [tcw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) | [tel](https://iso639-3.sil.org/code/tel) | ltr | [16.4, 78.7](https://www.openstreetmap.org/#map=5/16.45/78.7) |
| Themne | tem | [tej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) | [tem](https://iso639-3.sil.org/code/tem) | ltr | [8.9, -12.3](https://www.openstreetmap.org/#map=5/8.9/-12.33) |
| Tetun | tet | [ttm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) | [tet](https://iso639-3.sil.org/code/tet) | ltr | [-9.1, 125.5](https://www.openstreetmap.org/#map=5/-9.11/125.53) |
| Tajiki | tg | [pet](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) | [tgk](https://iso639-3.sil.org/code/tgk) | ltr | [38.8, 68.5](https://www.openstreetmap.org/#map=5/38.82/68.55) |
| Tagalog | tl | [tgl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) | [tgl](https://iso639-3.sil.org/code/tgl) | ltr | [14.1, 121.8](https://www.openstreetmap.org/#map=5/14.06/121.75) |
| Tagalog (Tagalog) | tl-Tglg | | [tgl](https://iso639-3.sil.org/code/tgl) | ltr | [14.1, 121.8](https://www.openstreetmap.org/#map=5/14.06/121.75) |
| Thai | th | [thj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) | [tha](https://iso639-3.sil.org/code/tha) | ltr | [14.2, 100.7](https://www.openstreetmap.org/#map=5/14.19/100.67) |
| Thai (2) | th | | [tha](https://iso639-3.sil.org/code/tha) | ltr | [14.2, 100.7](https://www.openstreetmap.org/#map=5/14.19/100.67) |
| Thangmi | thf | [thf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thf) | [thf](https://iso639-3.sil.org/code/thf) | ltr | [28.8, 85.8](https://www.openstreetmap.org/#map=5/28.76/85.77) |
| Tharu, Dangaura | thl | [thl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thl) | [thl](https://iso639-3.sil.org/code/thl) | ltr | [27.9, 81.8](https://www.openstreetmap.org/#map=5/27.88/81.78) |
| Thakali | ths | [ths](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ths) | [ths](https://iso639-3.sil.org/code/ths) | ltr | [28.7, 83.7](https://www.openstreetmap.org/#map=5/28.7/83.65) |
| Tigrigna | ti | [tgn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) | [tir](https://iso639-3.sil.org/code/tir) | ltr | [15.3, 38.9](https://www.openstreetmap.org/#map=5/15.34/38.93) |
| Tiv | tiv | [tiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) | [tiv](https://iso639-3.sil.org/code/tiv) | ltr | [6.9, 9.3](https://www.openstreetmap.org/#map=5/6.88/9.26) |
| Tujia, Nothern | tji | [tji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tji) | [tji](https://iso639-3.sil.org/code/tji) | ltr | [32.0, 110.0](https://www.openstreetmap.org/#map=5/32/110) |
| Talysh | tly | [tly](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) | [tly](https://iso639-3.sil.org/code/tly) | ltr | [38.5, 48.6](https://www.openstreetmap.org/#map=5/38.46/48.63) |
| Tacana | tna | [tna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tna) | [tna](https://iso639-3.sil.org/code/tna) | ltr | [-13.0, -68.0](https://www.openstreetmap.org/#map=5/-13/-68) |
| Toba | tob | [tob](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) | [tob](https://iso639-3.sil.org/code/tob) | ltr | [-24.4, -60.5](https://www.openstreetmap.org/#map=5/-24.4/-60.45) |
| Tonga | toi | [toi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) | [toi](https://iso639-3.sil.org/code/toi) | ltr | [-17.4, 27.1](https://www.openstreetmap.org/#map=5/-17.42/27.1) |
| Tojolabal | toj | [toj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) | [toj](https://iso639-3.sil.org/code/toj) | ltr | [16.3, -91.8](https://www.openstreetmap.org/#map=5/16.26/-91.78) |
| Tongan | to | [tov](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) | [ton](https://iso639-3.sil.org/code/ton) | ltr | [-21.2, -175.3](https://www.openstreetmap.org/#map=5/-21.17/-175.25) |
| Totonac, Papantla | top | [top](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) | [top](https://iso639-3.sil.org/code/top) | ltr | [20.6, -97.3](https://www.openstreetmap.org/#map=5/20.57/-97.26) |
| Tok Pisin | tpi | [pdg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) | [tpi](https://iso639-3.sil.org/code/tpi) | ltr | [-9.4, 147.3](https://www.openstreetmap.org/#map=5/-9.42/147.3) |
| Trinitario | trn | [trn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trn) | [trn](https://iso639-3.sil.org/code/trn) | ltr | [-15.0, -65.0](https://www.openstreetmap.org/#map=5/-15/-65) |
| Tswana | tn | [tsw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) | [tsn](https://iso639-3.sil.org/code/tsn) | ltr | [-24.4, 24.8](https://www.openstreetmap.org/#map=5/-24.37/24.76) |
| Tsonga (Mozambique) | ts | [tso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) | [tso](https://iso639-3.sil.org/code/tso) | ltr | [-23.6, 31.8](https://www.openstreetmap.org/#map=5/-23.58/31.81) |
| Tsonga (Zimbabwe) | ts | [tso1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso1) | [tso](https://iso639-3.sil.org/code/tso) | ltr | [-23.6, 31.8](https://www.openstreetmap.org/#map=5/-23.58/31.81) |
| Purepecha | tsz | [1112](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1112) | [tsz](https://iso639-3.sil.org/code/tsz) | ltr | [19.3, -101.6](https://www.openstreetmap.org/#map=5/19.25/-101.63) |
| Turkmen (Cyrillic) | tk-Cyrl | [tck](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) | [tuk](https://iso639-3.sil.org/code/tuk) | ltr | [37.1, 59.2](https://www.openstreetmap.org/#map=5/37.09/59.18) |
| Turkmen (Latin) | tk-Latn | | [tuk](https://iso639-3.sil.org/code/tuk) | ltr | [37.1, 59.2](https://www.openstreetmap.org/#map=5/37.09/59.18) |
| Turkish | tr | [trk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) | [tur](https://iso639-3.sil.org/code/tur) | ltr | [39.9, 32.9](https://www.openstreetmap.org/#map=5/39.87/32.87) |
| Tuva | tyv | [tyv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) | [tyv](https://iso639-3.sil.org/code/tyv) | ltr | [48.4, 92.7](https://www.openstreetmap.org/#map=5/48.44/92.67) |
| Tzotzil (Chamula) | tzo | [tzc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) | [tzo](https://iso639-3.sil.org/code/tzo) | ltr | [16.6, -92.7](https://www.openstreetmap.org/#map=5/16.64/-92.74) |
| Tzeltal, Oxchuc | tzh | [tzc1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) | [tzh](https://iso639-3.sil.org/code/tzh) | ltr | [16.6, -92.3](https://www.openstreetmap.org/#map=5/16.64/-92.28) |
| Tamazight, Central Atlas | tzm | [tzm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) | [tzm](https://iso639-3.sil.org/code/tzm) | ltr | [32.7, -2.4](https://www.openstreetmap.org/#map=5/32.74/-2.41) |
| Tamazight, Central Atlas (Tifinagh) | tzm-Tfng | | [tzm](https://iso639-3.sil.org/code/tzm) | ltr | [32.7, -2.4](https://www.openstreetmap.org/#map=5/32.74/-2.41) |
| Uyghur (Arabic) | ug-Arab | [uig](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) | [uig](https://iso639-3.sil.org/code/uig) | rtl | [43.7, 79.8](https://www.openstreetmap.org/#map=5/43.67/79.75) |
| Uyghur (Latin) | ug-Latn | | [uig](https://iso639-3.sil.org/code/uig) | ltr | [43.7, 79.8](https://www.openstreetmap.org/#map=5/43.67/79.75) |
| Ukrainian | uk | [ukr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) | [ukr](https://iso639-3.sil.org/code/ukr) | ltr | [48.2, 24.4](https://www.openstreetmap.org/#map=5/48.18/24.4) |
| Umbundu | umb | [mnf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) | [umb](https://iso639-3.sil.org/code/umb) | ltr | [-12.5, 14.4](https://www.openstreetmap.org/#map=5/-12.48/14.41) |
| Mundari | unr | [unr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=unr) | [unr](https://iso639-3.sil.org/code/unr) | ltr | [25.0, 87.2](https://www.openstreetmap.org/#map=5/25.04/87.18) |
| Urarina | ura | [ura](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) | [ura](https://iso639-3.sil.org/code/ura) | ltr | [-4.4, -75.4](https://www.openstreetmap.org/#map=5/-4.44/-75.42) |
| Urdu | ur | [urd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | [urd](https://iso639-3.sil.org/code/urd) | rtl | [25.0, 67.0](https://www.openstreetmap.org/#map=5/25/67) |
| Urdu (2) | ur | [urd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | [urd](https://iso639-3.sil.org/code/urd) | rtl | [25.0, 67.0](https://www.openstreetmap.org/#map=5/25/67) |
| Uzbek, Northern (Cyrillic) | uz-Cyrl | [uzb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) | [uzn](https://iso639-3.sil.org/code/uzn) | ltr | [43.8, 59.2](https://www.openstreetmap.org/#map=5/43.75/59.23) |
| Uzbek, Northern (Latin) | uz-Latn | [uzb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) | [uzn](https://iso639-3.sil.org/code/uzn) | ltr | [43.8, 59.2](https://www.openstreetmap.org/#map=5/43.75/59.23) |
| Vai | vai | [vai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) | [vai](https://iso639-3.sil.org/code/vai) | ltr | [7.0, -11.3](https://www.openstreetmap.org/#map=5/7.05/-11.33) |
| Wayu | vay | [vay](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vay) | [vay](https://iso639-3.sil.org/code/vay) | ltr | [27.5, 85.0](https://www.openstreetmap.org/#map=5/27.5/85) |
| Venetian | vec | [vec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) | [vec](https://iso639-3.sil.org/code/vec) | ltr | [45.4, 13.0](https://www.openstreetmap.org/#map=5/45.41/13.03) |
| Venda | ve | [tsh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) | [ven](https://iso639-3.sil.org/code/ven) | ltr | [-22.2, 29.9](https://www.openstreetmap.org/#map=5/-22.19/29.95) |
| Venda | ve | [ven](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ven) | [ven](https://iso639-3.sil.org/code/ven) | ltr | [-22.2, 29.9](https://www.openstreetmap.org/#map=5/-22.19/29.95) |
| Veps | vep | [vep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) | [vep](https://iso639-3.sil.org/code/vep) | ltr | [60.3, 34.8](https://www.openstreetmap.org/#map=5/60.34/34.79) |
| Vietnamese | vi | [vie](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) | [vie](https://iso639-3.sil.org/code/vie) | ltr | [18.4, 106.8](https://www.openstreetmap.org/#map=5/18.39/106.76) |
| Vietnamese (Han nom) | vi-Hani | | [vie](https://iso639-3.sil.org/code/vie) | ltr | [18.4, 106.8](https://www.openstreetmap.org/#map=5/18.39/106.76) |
| Makhuwa | vmw | [vmw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) | [vmw](https://iso639-3.sil.org/code/vmw) | ltr | [-14.8, 38.8](https://www.openstreetmap.org/#map=5/-14.85/38.81) |
| Waray-Waray | war | [wry](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) | [war](https://iso639-3.sil.org/code/war) | ltr | [11.5, 125.0](https://www.openstreetmap.org/#map=5/11.49/125.01) |
| Walloon | wa | [frn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) | [wln](https://iso639-3.sil.org/code/wln) | ltr | [50.2, 5.2](https://www.openstreetmap.org/#map=5/50.22/5.15) |
| Wolof | wo | [wol](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) | [wol](https://iso639-3.sil.org/code/wol) | ltr | [15.3, -15.4](https://www.openstreetmap.org/#map=5/15.25/-15.38) |
| Chinese, Wu | wuu | [wuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wuu) | [wuu](https://iso639-3.sil.org/code/wuu) | ltr | [31.2, 121.5](https://www.openstreetmap.org/#map=5/31.23/121.47) |
| Waama | wwa | [ako](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) | [wwa](https://iso639-3.sil.org/code/wwa) | ltr | [10.6, 1.6](https://www.openstreetmap.org/#map=5/10.6/1.65) |
| Xhosa | xh | [xos](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) | [xho](https://iso639-3.sil.org/code/xho) | ltr | [-31.0, 28.1](https://www.openstreetmap.org/#map=5/-31.04/28.08) |
| Kasem | xsm | [kas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) | [xsm](https://iso639-3.sil.org/code/xsm) | ltr | [11.1, -1.4](https://www.openstreetmap.org/#map=5/11.08/-1.39) |
| Sherpa | xsr | [xsr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xsr) | [xsr](https://iso639-3.sil.org/code/xsr) | ltr | [27.7, 87.0](https://www.openstreetmap.org/#map=5/27.67/87) |
| Yagua | yad | [yad](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) | [yad](https://iso639-3.sil.org/code/yad) | ltr | [-3.4, -72.2](https://www.openstreetmap.org/#map=5/-3.43/-72.22) |
| Yao | yao | [yao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) | [yao](https://iso639-3.sil.org/code/yao) | ltr | [-13.6, 35.2](https://www.openstreetmap.org/#map=5/-13.61/35.24) |
| Yapese | yap | [yps](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) | [yap](https://iso639-3.sil.org/code/yap) | ltr | [9.6, 138.1](https://www.openstreetmap.org/#map=5/9.56/138.12) |
| Yakkha | ybh | [ybh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ybh) | [ybh](https://iso639-3.sil.org/code/ybh) | ltr | [27.4, 87.9](https://www.openstreetmap.org/#map=5/27.37/87.93) |
| Yiddish, Eastern | yi | [ydd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) | [ydd](https://iso639-3.sil.org/code/ydd) | rtl | [51.8, 19.4](https://www.openstreetmap.org/#map=5/51.75/19.42) |
| Yukaghir, Northern | ykg | [ykg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) | [ykg](https://iso639-3.sil.org/code/ykg) | ltr | [65.4, 151.3](https://www.openstreetmap.org/#map=5/65.39/151.32) |
| Yoruba | yo | [yor](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) | [yor](https://iso639-3.sil.org/code/yor) | ltr | [7.2, 3.7](https://www.openstreetmap.org/#map=5/7.15/3.67) |
| Nenets | yrk | [yrk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yrk) | [yrk](https://iso639-3.sil.org/code/yrk) | ltr | [66.2, 71.0](https://www.openstreetmap.org/#map=5/66.18/71.02) |
| Maya, Yucatán | yua | [yua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) | [yua](https://iso639-3.sil.org/code/yua) | ltr | [18.8, -89.0](https://www.openstreetmap.org/#map=5/18.78/-88.96) |
| Chinese, Yue | yue | [yue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yue) | [yue](https://iso639-3.sil.org/code/yue) | ltr | [31.1, 121.3](https://www.openstreetmap.org/#map=5/31.13/121.29) |
| Yuracare | yuz | [yuz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yuz) | [yuz](https://iso639-3.sil.org/code/yuz) | ltr | [-17.0, -65.0](https://www.openstreetmap.org/#map=5/-17/-65) |
| Zapotec, Miahuatlán | zam | [zam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) | [zam](https://iso639-3.sil.org/code/zam) | ltr | [16.2, -96.7](https://www.openstreetmap.org/#map=5/16.22/-96.66) |
| Comorian, Ngazidja | zdj | [zdj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) | [zdj](https://iso639-3.sil.org/code/zdj) | ltr | [-12.0, 44.0](https://www.openstreetmap.org/#map=5/-12/44) |
| Tamazight, Standard Morocan | zgh | [ama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) | [zgh](https://iso639-3.sil.org/code/zgh) | ltr | [14.2, -2.4](https://www.openstreetmap.org/#map=5/14.2/-2.41) |
| Záparo | zro | [1124](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) | [zro](https://iso639-3.sil.org/code/zro) | ltr | [-2.0, -76.4](https://www.openstreetmap.org/#map=5/-2/-76.36) |
| Zapotec, Güilá | ztu | [ztu1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) | [ztu](https://iso639-3.sil.org/code/ztu) | ltr | [16.9, -96.5](https://www.openstreetmap.org/#map=5/16.88/-96.46) |
| Zulu | zu | [zuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) | [zul](https://iso639-3.sil.org/code/zul) | ltr | [-25.3, 31.4](https://www.openstreetmap.org/#map=5/-25.33/31.35) |

<!--support end-->

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

<!--Definitions-->

[build-badge]: https://img.shields.io/travis/wooorm/udhr.svg

[build]: https://travis-ci.org/wooorm/udhr

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/udhr.svg

[coverage]: https://codecov.io/github/wooorm/udhr

[downloads-badge]: https://img.shields.io/npm/dm/udhr.svg

[downloads]: https://www.npmjs.com/package/udhr

[npm]: https://docs.npmjs.com/cli/install

[index]: https://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx

[unicode]: https://www.unicode.org/udhr/
