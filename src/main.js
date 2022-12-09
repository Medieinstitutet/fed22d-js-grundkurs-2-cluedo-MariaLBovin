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
    image: '/images/killers/fru_guldhov.jpg',
  },
  {
    id: 2,
    name: 'Herr Guldhov',
    age: 69,
    color: 'Gul',
    image: '/images/killers/herr_guldhov.jpg',
  },
  {
    id: 3,
    name: 'Kalle Knackare',
    age: 39,
    color: 'Grön',
    image: '/images/killers/kalle_knackare.jpg',
  },
  {
    id: 4,
    name: 'Anna La Rouge',
    age: 23,
    color: 'Röd',
    image: '/images/killers/anna_la_rouge.jpg',
  },
  {
    id: 5,
    name: 'Rosa Rosando',
    age: 18,
    color: 'Rosa',
    image: '/images/killers/rosa_rosando.jpg',
  },
  {
    id: 6,
    name: 'Pjotr Plum',
    age: 42,
    color: 'Plommon',
    image: '/images/killers/pjotr_plum.jpg',
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
        <button id="killerbutton-${i}" class="select-killer selectbutton">Välj</button>
        </div>`;
    killersPlacement[i].innerHTML = printKillers;
  }
}

displayKillers();

//Funktion för att välja mördare
const pickKillerBtn = document.querySelectorAll('.select-killer');
pickKillerBtn.forEach(btn => {
  btn.addEventListener('click', pickKiller);
});

function pickKiller(btn) {
  let selectedKilllerBtn = btn.currentTarget;
  selectedKilllerBtn.classList.add('active');

  pickKillerBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });
}

//Alla platser. Används av funktionen displayPlaces
const placesArray = [
  {
    place: 'I boxen',
    image: '/images/places/hastbox.jpg',
  },
  {
    place: 'I hagen',
    image: '/images/places/hasthage.jpg',
  },
  {
    place: 'I paddocken',
    image: '/images/places/paddock.jpg',
  },
  {
    place: 'I höladan',
    image: '/images/places/holada.jpg',
  },
  {
    place: 'I ridhuset',
    image: '/images/places/ridhus.jpg',
  },
  {
    place: 'I hästtransporten',
    image: '/images/places/transport.jpg',
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
        <button id="placesbutton-${i}" class="select-place selectbutton ">Välj</button>
      </div>`;
    placesPlacement[i].innerHTML = printPlaces;
  }
}
displayPlaces();

//Funktion för att välja plats
const pickPlacesBtn = document.querySelectorAll('.select-place');
pickPlacesBtn.forEach(btn => {
  btn.addEventListener('click', pickPlace);
});

function pickPlace(btn) {
  let selectedPlace = btn.currentTarget;
  console.log(selectedPlace);
  selectedPlace.classList.add('active');

  pickPlacesBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });
}

//Alla vapen. Används av funktionen displayWeapons
const weaponsArray = [
  {
    id: 1,
    weapon: 'Grimskaft',
    image: '/images/weapons/grimskaft.jpg',
  },
  {
    id: 2,
    weapon: 'Hovkrats',
    image: '/images/weapons/hovkrats.jpg',
  },
  {
    id: 3,
    weapon: 'Hoppbom',
    image: '/images/weapons/hoppbom.jpg',
  },
  {
    id: 4,
    weapon: 'Bedövningsspruta',
    image: '/images/weapons/bedovningspistol.jpg',
  },
  {
    id: 5,
    weapon: 'Hammare',
    image: '/images/weapons/hammare.jpg',
  },
  {
    id: 6,
    weapon: 'Ridspö',
    image: '/images/weapons/ridspo.jpg',
  },
];

//Skriver ut alla vapen till spelsidan.
function displayWeapons() {
  const weaponsPlacement = document.querySelectorAll('.weapon');
  for (let i = 0; i < weaponsArray.length; i++) {
    let weaponNr = 'weapon-' + i;
    const printWeapons = `<div class="${weaponNr}">
                  <img id="img-${i}" src="${weaponsArray[i].image}" alt="" width="50" height="100">
              <h2>${weaponsArray[i].weapon}</h2>
              <button id="weaponbutton-${i}" class="select-weapon selectbutton">Välj</button>
              </div>`
              ;
    weaponsPlacement[i].innerHTML = printWeapons;
  }
}
displayWeapons();

//Funktion för att välja plats

const pickWeaponsBtn = document.querySelectorAll('.select-weapon');
pickWeaponsBtn.forEach(btn => {
  btn.addEventListener('click', pickWeapon);
});

function pickWeapon(btn) {
  let selectedWeapon = btn.currentTarget;
  console.log(selectedWeapon);
  selectedWeapon.classList.add('active');

  pickWeaponsBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });
}

/*
Funktion för att kunna klicka på ett spelkort och läsa mer om personen
const killerTextLong = document.querySelectorAll('.read-more');

const readMore = document.querySelectorAll('img');
console.log(readMore)
readMore.addEventListener('click', () => {
  killerTextLong.classList.remove('toggle-hidden');
});
*/
