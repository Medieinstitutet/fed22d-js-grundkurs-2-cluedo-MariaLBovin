import './style.scss';
//import {killersArray} from '.arrays.js';

/************************************************************************    
*                           Globala variabler 
*************************************************************************/
const startPage = document.querySelector('.startpage');
const selectionPage = document.querySelector('#selectionpage');

/***********************************************************************
 *                         Funktioner
 ***********************************************************************/

//Starta spelet. När man klickar på knappen döljs startsidan spelsidan öppnas.
const beginGameBtn = document.querySelector('.begin-game');
beginGameBtn.addEventListener('click', () => {
  startPage.style.display = 'none';
  selectionPage.classList.remove('toggle-hidden');
});

// Alla mördare. Informationen används av display-killers-funktionen
const killersArray = [
  {
    id: 1,
    name: 'Fru Guldhov',
    age: 65,
    color: 'Röd',
    about:
      'Fru Guldhov, ägare till stall Guldhoven. <br> 65 år gammal, går alltid klädd i blå ridkläder och ridstövlar.<br> Sträng men rättvis.',
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

//Skriver ut alla mördare till spelsidan
function displayKillers() {
  const killersPlacement = document.querySelectorAll('.killer');

  for (let i = 0; i < killersArray.length; i++) {
    let killerNr = 'killer-' + i;
    let killerTxt = 'killertxt' + i;
    const printKillers = `<div class="${killerNr}">
        <img id="img-${i}" src="${killersArray[i].image}" alt="" width="50" height="100">
        <h2>${killersArray[i].name}</h2>
        <button id="killerbutton-${i}" class="select-killer">Välj</button>
        </div>`;
    killersPlacement[i].innerHTML = printKillers;
  }
}

displayKillers();

/*
Funktion för att kunna klicka på ett spelkort och läsa mer om personen
const killerTextLong = document.querySelectorAll('.read-more');

const readMore = document.querySelectorAll('img');
console.log(readMore)
readMore.addEventListener('click', () => {
  killerTextLong.classList.remove('toggle-hidden');
});
*/

//Alla platser. Används av funktionen displayPlaces

const pickKillerBtn = document.querySelectorAll('.select-killer');
  pickKillerBtn.forEach ((btn) => {
    btn.addEventListener('click', pickKiller)
    
  })

function pickKiller (btn){
  let currentBtn = btn.currentTarget.id
  console.log(currentBtn)
  currentBtn.classList.add('.active')
  
}

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
];

//Skriver ut alla platser till spelsidan
function displayPlaces() {
  const placesPlacement = document.querySelectorAll('.place');
  for (let i = 0; i < placesArray.length; i++) {
    let placeNr = 'place-' + i;
    const printPlaces = `<div class="${placeNr}">
        <img id="img-${i}" src="${placesArray[i].image}" alt="" width="50" height="100">
        <h2>${placesArray[i].place}</h2>
        
      </div>`;
    placesPlacement[i].innerHTML = printPlaces;
  }
}
displayPlaces();

//Alla vapen. Används av funktionen displayWeapons
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

//Skriver ut alla vapen till spelsidan.
function displayWeapons() {
  const weaponsPlacement = document.querySelectorAll('.weapon');
  for (let i = 0; i < weaponsArray.length; i++) {
    let weaponNr = 'weapon-' + i;
    const printWeapons = `<div class="${weaponNr}">
                  <img id="img-${i}" src="${weaponsArray[i].image}" alt="" width="50" height="100">
              <h2>${weaponsArray[i].weapon}</h2>`;
    weaponsPlacement[i].innerHTML = printWeapons;
  }
}
displayWeapons();
