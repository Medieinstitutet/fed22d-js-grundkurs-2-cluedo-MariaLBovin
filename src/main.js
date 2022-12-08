import './style.scss';
//import {killersArray} from '.arrays.js';

const beginGameBtn = document.querySelector('.begin-game');
console.log(beginGameBtn)
beginGameBtn.addEventListener('click', startGame);

function startGame(){
/**
 * Vad ska hända: Man ska klicka på knappen och då ska spelsidan med alla kort
 * öppnas.
 * Längst upp ska det finnas en text där det står vad man ska göra, 
 * längst ner ska det finnas en knapp där man kan testa sitt val.
 * 
*/
}
startGame ()
const killersArray = [
  {
    id: 1,
    name: 'Fru Guldhov',
    age: 65,
    color: 'Röd',
    image: 'public/images/killers/fru_guldhov.jpg',
  },
  {
    id: 2,
    name: 'Herr Guldhov',
    age: 69,
    color: 'Gul',
    image: 'public/images/killers/herr_guldhov.jpg',
  },
  {
    id: 3,
    name: 'Kalle Knackare',
    age: 39,
    color: 'Grön',
    image: 'public/images/killers/kalle_knackare.jpg',
  },
  {
    id: 4,
    name: 'Anna La Rouge',
    age: 23,
    color: 'Röd',
    image: 'public/images/killers/anna_la_rouge.jpg',
  },
  {
    id: 5,
    name: 'Rosa Rosando',
    age: 18,
    color: 'Rosa',
    image: 'public/images/killers/rosa_rosando.jpg',
  },
  {
    id: 6,
    name: 'Pjotr Plum',
    age: 42,
    color: 'Plommon',
    image: 'public/images/killers/pjotr_plum.jpg',
  },
];

function displayKillers() {
  const killersPlacement = document.querySelectorAll('.killer');

  for (let i = 0; i < killersArray.length; i++) {
    let killerNr = 'killer-' + i;
    const printKillers = `<div class="${killerNr}">
                <img id="img-${i}" src="${killersArray[i].image}" alt="" width="50" height="100">
            <h2>${killersArray[i].name}</h2>`;
    killersPlacement[i].innerHTML = printKillers;
  }
}
displayKillers();

const placesArray = [
    {
    place: 'I boxen',
    image: 'public/images/places/hastbox.jpg',
    },
    {
    place: 'I hagen',
    image: 'public/images/places/hasthage.jpg',
    },
    {
    place: 'I paddocken',
    image: 'public/images/places/paddock.jpg',
    },
    {
    place: 'I höladan',
    image: 'public/images/places/holada.jpg',
    },
    {
    place: 'I ridhuset',
    image: 'public/images/places/ridhus.jpg',
    },
    {
    place: 'I hästtransporten',
    image: 'public/images/places/transport.jpg',
    },
]
function displayPlaces() {
    const placesPlacement = document.querySelectorAll('.place');
      console.log(placesPlacement)
    for (let i = 0; i < placesArray.length; i++) {
      console.log(placesArray)
      let placeNr = 'place-' + i;
      const printPlaces = `<div class="${placeNr}">
                    <img id="img-${i}" src="${placesArray[i].image}" alt="" width="50" height="100">
                <h2>${placesArray[i].place}</h2>`;
      placesPlacement[i].innerHTML = printPlaces;
    }
  }
  displayPlaces();

const weaponsArray = [
  {
    id: 1,
    weapon: 'Ett grimskaft',
    image: 'public/images/weapons/grimskaft.jpg',
  },
  {
    id: 2,
    weapon: 'En hovkrats',
    image: 'public/images/weapons/hovkrats.jpg',
  },
  {
    id: 3,
    weapon: 'En hoppbom',
    image: 'public/images/weapons/hoppbom.jpg',
  },
  {
    id: 4,
    weapon: 'En bedövningsspruta',
    image: 'public/images/weapons/bedovningspistol.jpg',
  },
  {
    id: 5,
    weapon: 'En hammare',
    image: 'public/images/weapons/hammare.jpg',
  },
  {
    id: 6,
    weapon: 'Ett ridspö',
    image: 'public/images/weapons/ridspo.jpg',
  },
];
function displayWeapons() {
  const weaponsPlacement = document.querySelectorAll('.weapon');
    console.log(weaponsPlacement)
  for (let i = 0; i < weaponsArray.length; i++) {
    console.log(weaponsArray)
    let weaponNr = 'weapon-' + i;
    const printWeapons = `<div class="${weaponNr}">
                  <img id="img-${i}" src="${weaponsArray[i].image}" alt="" width="50" height="100">
              <h2>${weaponsArray[i].weapon}</h2>`;
    weaponsPlacement[i].innerHTML = printWeapons;
  }
}
displayWeapons();
