import './style.scss';
//import {killersArray} from '.arrays.js';

/************************************************************************
 *                           Globala variabler
 *************************************************************************/
const startPage = document.querySelector('.startpage');
const selectionPage = document.querySelector('#selectionpage');
const resultPage = document.querySelector('#resultpage');

/**********************************************************************
 *                        Arrayer
 ***********************************************************************/
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

/***********************************************************************
 *                         Funktioner
 ***********************************************************************/

//Starta spelet. När man klickar på knappen döljs startsidan spelsidan öppnas.
const beginGameBtn = document.querySelector('.begin-game');
beginGameBtn.addEventListener('click', () => {
  startPage.style.display = 'none';
  selectionPage.style.display = 'flex';
});

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

//Skriver ut alla platser till spelsidan
function displayPlaces() {
  const placesPlacement = document.querySelectorAll('.place');
  for (let i = 0; i < placesArray.length; i++) {
    let placeNr = 'place-' + i;
    const printPlaces = `<div class="${placeNr}">
        <img id="img-${i}" src="${placesArray[i].image}" alt="" width="50" height="100">
        <h2>${placesArray[i].place}</h2>
        <button id="placebutton-${i}" class="select-place selectbutton ">Välj</button>
      </div>`;
    placesPlacement[i].innerHTML = printPlaces;
  }
}
displayPlaces();

//Skriver ut alla vapen till spelsidan.
function displayWeapons() {
  const weaponsPlacement = document.querySelectorAll('.weapon');
  for (let i = 0; i < weaponsArray.length; i++) {
    let weaponNr = 'weapon-' + i;
    const printWeapons = `<div class="${weaponNr}">
                  <img id="img-${i}" src="${weaponsArray[i].image}" alt="" width="50" height="100">
              <h2>${weaponsArray[i].weapon}</h2>
              <button id="weaponbutton-${i}" class="select-weapon selectbutton">Välj</button>
              </div>`;
    weaponsPlacement[i].innerHTML = printWeapons;
  }
}
displayWeapons();

//Funktion för att välja mördare
const pickKillerBtn = document.querySelectorAll('.select-killer');
pickKillerBtn.forEach(btn => {
  btn.addEventListener('click', pickKiller);
});

let trueKillerName = '';
function pickKiller(btn) {
  let selectedKillerBtn = btn.currentTarget;
  selectedKillerBtn.classList.add('active');
  pickKillerBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });

  const killerName = btn.currentTarget.id.replace('killerbutton-', '');
  trueKillerName = killersArray[killerName].name;
}

//Funktion för att välja plats
let truePlaceName = '';
const pickPlacesBtn = document.querySelectorAll('.select-place');
pickPlacesBtn.forEach(btn => {
  btn.addEventListener('click', pickPlace);
});

function pickPlace(btn) {
  let selectedPlace = btn.currentTarget;
  selectedPlace.classList.add('active');

  pickPlacesBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });
  const placeName = btn.currentTarget.id.replace('placebutton-', '');
  truePlaceName = placesArray[placeName].place;
}

//Funktion för att välja vapen

const pickWeaponsBtn = document.querySelectorAll('.select-weapon');
pickWeaponsBtn.forEach(btn => {
  btn.addEventListener('click', pickWeapon);
  ;
});

let trueWeaponame = '';

function pickWeapon(btn) {
  let selectedWeapon = btn.currentTarget;
  selectedWeapon.classList.add('active');

  pickWeaponsBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
    
  });
  const weaponName = btn.currentTarget.id.replace('weaponbutton-', '');
  trueWeaponame = weaponsArray[weaponName].weapon;
}

//Funktioner för att plocka ut tre random svar
function getRandomKiller(killer) {
  const killerIndex = Math.floor(Math.random() * killer.length);
  const trueKiller = killer[killerIndex].name;
  return trueKiller;
}
const killerResult = getRandomKiller(killersArray);
console.log(killerResult);

function getRandomPlace(place) {
  const placeIndex = Math.floor(Math.random() * place.length);
  const truePlace = place[placeIndex].place;
  return truePlace;
}
const placeResult = getRandomPlace(placesArray);
console.log(placeResult);

function getRandomWeapon(weapon) {
  const weaponIndex = Math.floor(Math.random() * weapon.length);
  const trueWeapon = weapon[weaponIndex].weapon;
  return trueWeapon;
}
const weaponResult = getRandomWeapon(weaponsArray);

console.log(weaponResult);

// Funktion för att kontrollera rätt svar

const resultBtn = document.querySelector('.test-result');
const resultText = document.querySelector('.result-text');
resultBtn.addEventListener('click', testResult);

function testResult() {
  selectionPage.style.display = 'none';
  resultPage.style.display = 'flex';
  const correctWeapon = weaponResult == trueWeaponame;
  const correctKiller = killerResult == trueKillerName;
  const correctPlace = placeResult == truePlaceName;

  if (correctKiller && correctPlace && correctWeapon) {
    resultText.innerHTML= 'Grattis du hade alla rätt!';
  } else if ((correctKiller && correctPlace) || (correctKiller && correctWeapon) || (correctPlace && correctWeapon)) {
    resultText.innerHTML = 'Du hade två rätt, försök igen!';
  } else if (correctKiller || correctPlace || correctWeapon) {
    resultText.innerHTML = 'Ett rätt! Spela igen och se om du kan få fler rätt nästa gång';
  } else {
    resultText.innerHTML = 'Tyvärr! Inga rätt. Bättre lycka nästa gång!';
  }
}

const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', playAgain);


function playAgain() {
  playAgainBtn.addEventListener('click', () => {
    resultPage.style.display = 'none';
    selectionPage.style.display = 'flex';
    
  });

}
playAgain();


