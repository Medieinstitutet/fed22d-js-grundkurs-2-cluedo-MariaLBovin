const killersArray = [
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

const placesArray = [
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
const weaponsArray = [
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
export { killersArray, placesArray, weaponsArray };
