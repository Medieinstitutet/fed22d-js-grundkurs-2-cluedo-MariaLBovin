const horseKillersArray = [
  {
    id: 1,
    name: 'Fru Guldhov',
    age: 65,
    color: 'Blå',
    image: [{
      src: './images/killers/fru_guldhov.jpg',
      alt: 'Svartvit tecknad bild av äldre kvinna',
    }],
    about:
      'Fru Guldhov, ägare till stall Guldhoven. <br> 65 år gammal, går alltid klädd i blå ridkläder och ridstövlar.<br> Sträng men rättvis.',
  },
  {
    id: 2,
    name: 'Herr Guldhov',
    age: 69,
    color: 'Gul',
    image: [{
      src: './images/killers/herr_guldhov.jpg',
      alt: 'Svartvit tecknad bild av äldre man',
    }],
    about: 'Herr Guldhov, gift med fru Guldhov. 69 år gammal, har en gul jacka som han är mycket stolt över. Snål.',
  },
  {
    id: 3,
    name: 'Kalle Knackare',
    age: 39,
    color: 'Grön',
    image: [{
      src: 'images/killers/kalle_knackare.jpg',
      alt: 'Svartvit tecknad bild av medelålders man',
    }],
    about:
      'Kalle Knackare, hovslagare. 40 år gammal, har gröna jägarkläder när han jobbar.Ett riktigt råskinn men snäll innerst inne.',
  },
  {
    id: 4,
    name: 'Anna La Rouge',
    age: 23,
    color: 'Röd',
    image: [{
      src: './images/killers/anna_la_rouge.jpg',
      alt: 'Svartvit tecknad bild av ung kvinna',
    }],
    about:
      'Anna La Rouge, ryttaren som tävlar med Silverhof. 25 år gammal, rider i en röd ridjacka. En riktig surpuppa. ',
  },
  {
    id: 5,
    name: 'Rosa Rosando',
    age: 18,
    color: 'Rosa',
    image: [{
      src: './images/killers/rosa_rosando.jpg',
      alt: 'Svartvit tecknad bild av ung kvinna',
    }],
    about:
    'Rosa Rosando, stalltjej som hjälper till på stallet för att få rida. 18 år gammal, har knallrosa hår. Genomsnäll',
  },
  {
    id: 6,
    name: 'Pjotr Plum',
    age: 42,
    color: 'Plommon',
    image: [{
      src: './images/killers/pjotr_plum.jpg',
      alt: 'Svartvit tecknad bild av medelålders man',
    }],
    about:
    'Pjotr Plum, veterinär. 42 år gammel, har en mörklila veterinärväska som han alltid bär på. Manipulativ och girig.',
  },
];

const horsePlacesArray = [
  {
    place: 'I boxen',
    image: [{
      src: './images/places/hastbox.jpg',
      alt: 'Svartvit bild av en hästbox',
    }],
  },
  {
    place: 'I hagen',
    image: [{
      src: './images/places/hasthage.jpg',
      alt: 'Svartvit bild av en hästhage',
    }],
  },
  {
    place: 'I paddocken',
    image: [{
      src: './images/places/paddock.jpg',
      alt: 'Svartvit bild av en paddock',
    }],
  },
  {
    place: 'I höladan',
    image: [{
      src: './images/places/holada.jpg',
      alt: 'Svartvit bild av en hölada',
    }],
  },
  {
    place: 'I ridhuset',
    image: [{
      src: './images/places/ridhus.jpg',
      alt: 'Svartvit bild av ett ridhus',
    }],
  },
  {
    place: 'I hästtransporten',
    image: [{
      src: './images/places/transport.jpg',
      alt: 'Svartvit bild av en hästtransport',
    }],
  },
];
const horseWeaponsArray = [
  {
    id: 1,
    weapon: 'Ett grimskaft',
    image: [{
      src: './images/weapons/grimskaft.jpg',
      alt: 'Svarvit bild av ett grimskaft',
    }],
  },
  {
    id: 2,
    weapon: 'En hovkrats',
    image: [{
      src: './images/weapons/hovkrats.jpg',
      alt: 'Svartvit bild av en hovkrats',
    }],
  },
  {
    id: 3,
    weapon: 'En hoppbom',
    image: [{
      src: './images/weapons/hoppbom.jpg',
      alt: 'Svartvit bild av en hoppbom',
    }],
  },
  {
    id: 4,
    weapon: 'En bedövningsspruta',
    image: [{
      src: './images/weapons/bedovningspistol.jpg',
      alt: 'Svartvit bild av en bedövningsspruta',
    }],
  },
  {
    id: 5,
    weapon: 'En hammare',
    image: [{
      src: './images/weapons/hammare.jpg',
      alt: 'Svartvit bild av en hammare',
    }],
  },
  {
    id: 6,
    weapon: 'Ett ridspö',
    image: [{
      src: './images/weapons/ridspo.jpg',
      alt: 'Svartvit bild av ett ridspö',
    }],
  },
];

const ghostKillerArray = [
  {
    id: 1,
    name: 'Frankenstein',
    color: 'Blå',
    image: [{
      src: './images/personer/frankenstein.png',
      alt: 'tecknad bild av Frankensteins monster',
    }],
    about:
      'Frankensteins monster, en mycket skrämmande typ som blir arg av allt blått.',
  },
  {
    id: 2,
    name: 'Dracula',
    age: 69,
    color: 'Gul',
    image: [{
      src: './images/personer/dracula.png',
      alt: 'tecknad bild av dracula',
    }],
    about: 'Greve Dracula, en riktigt blodtörstig typ som älskar rött och hatar gult.',
  },
  {
    id: 3,
    name: 'Beelsebub',
    age: 39,
    color: 'Grön',
    image: [{
      src: 'images/personer/djavul.png',
      alt: 'tecknad bild av en djävul',
    }],
    about:
      'Beelsebud, också kallad Lucifer, blir på riktigt dåligt humör av gröna saker.',
  },
  {
    id: 4,
    name: 'Trollpackan',
    age: 23,
    color: 'Röd',
    image: [{
      src: './images/personer/haxa.png',
      alt: 'tecknad bild av en häxa',
    }],
    about:
      'Trollpackan som inte gillar att kallas för häxa. Det är nästan det värsta hon vet, näst efter färgen röd.',
  },
  {
    id: 5,
    name: 'Mumien',
    age: 18,
    color: 'Rosa',
    image: [{
      src: './images/personer/mumie.png',
      alt: 'tecknad bild av en mumie',
    }],
    about:
    'Mumien, en riktigt stel typ. Blir på riktigt tokig av att man säger att dess lindor är rosa.',
  },
  {
    id: 6,
    name: 'Spöket',
    age: 42,
    color: 'Plommon',
    image: [{
      src: './images/personer/spoke.png',
      alt: 'tecknad bild av ett spöke',
    }],
    about:
    'Spöket som gillar att spöka runt, gillar att rassla med kedjor och blir arg av färgen plommon.',
  },
];

const ghostPlacesArray = [
  {
    place: 'Biblioteket',
    image: [{
      src: './images/platser/bibliotek.png',
      alt: 'tecknad bild av ett bibliotek',
    }],
  },
  {
    place: 'Experimentsalen',
    image: [{
      src: './images/platser/experimentsal.png',
      alt: 'tecknad bild av en experimentsal',
    }],
  },
  {
    place: 'Hallen',
    image: [{
      src: './images/platser/hall.png',
      alt: 'tecknad bild av en hall',
    }],
  },
  {
    place: 'Köket',
    image: [{
      src: './images/platser/kok.png',
      alt: 'tecknad bild av ett kök',
    }],
  },
  {
    place: 'Laboratorium',
    image: [{
      src: './images/platser/laboratorium.png',
      alt: 'tecknad bild av laboratorium',
    }],
  },
  {
    place: 'Vardagsrum',
    image: [{
      src: './images/platser/vardagsrum.png',
      alt: 'tecknad bild av vardagsrum',
    }],
  },
];

const ghostWeaponsArray = [
  {
    id: 1,
    weapon: 'Dödshand',
    image: [{
      src: './images/vapen/dodshand.png',
      alt: 'tecknad bild av hand',
    }],
  },
  {
    id: 2,
    weapon: 'Gift',
    image: [{
      src: './images/vapen/gift.png',
      alt: 'tecknad bild av en gryta med gift',
    }],
  },
  {
    id: 3,
    weapon: 'Förgiftat godis',
    image: [{
      src: './images/vapen/godis.png',
      alt: 'teckand bild av förgiftat godis',
    }],
  },
  {
    id: 4,
    weapon: 'Gravsten',
    image: [{
      src: './images/vapen/gravsten.png',
      alt: 'tecknad bild av gravsten',
    }],
  },
  {
    id: 5,
    weapon: 'Häxhatt',
    image: [{
      src: './images/vapen/hatt.png',
      alt: 'tecknad bild av en häxhatt',
    }],
  },
  {
    id: 6,
    weapon: 'Häxkvast',
    image: [{
      src: './images/vapen/kvast.png',
      alt: 'tecknad bild av en häxkvast',
    }],
  },
];

export {
  horseKillersArray,
  horsePlacesArray,
  horseWeaponsArray,
  ghostKillerArray,
  ghostPlacesArray,
  ghostWeaponsArray,
};
