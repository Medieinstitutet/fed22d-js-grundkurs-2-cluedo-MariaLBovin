/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import './style.scss';
import { killersArray, placesArray, weaponsArray } from './arrays';

/** **********************************************************************
 *                           Globala variabler
 *
 ************************************************************************ */
const startPage = document.querySelector('.startpage');
const selectionPage = document.querySelector('.selectionpage');
const resultPage = document.querySelector('#resultpage');
const gameOverPage = document.querySelector('#gameoverpage');

const beginGameBtn = document.querySelector('.begin-game');

const displayKillerText = document.querySelector('.textbox');

let truePlaceName = '';
let controlPlace = 0;

let selectedKillerName = '';
let controlKiller = 0;

let trueWeaponame = '';
let controlWeapon = 0;

const resultText = document.querySelector('.result-text');

/** *********************************************************************
 *                         Funktioner
 ********************************************************************** */

/*
Starta spelet. När man klickar på knappen döljs startsidan och spelsidan öppnas.
*/
beginGameBtn.addEventListener('click', () => {
  startPage.classList.remove('visible');
  startPage.classList.add('hidden');
  selectionPage.classList.remove('hidden');
  selectionPage.classList.add('visible');
});

/*
Funktion för att skriva ut alla mördare till spelsidan
*/
function displayKillers() {
  const killersPlacement = document.querySelectorAll('.killer');

  for (let i = 0; i < killersArray.length; i++) {
    const killerNr = `killer-${i}`;
    const printKillers = `<section class="${killerNr}">
        <img class="killerimage" id="img-${i}" src="${killersArray[i].image[0].src}" alt="${killersArray[i].image[0].alt}" width="80" height="80" tabindex = 0>
        <h2>${killersArray[i].name}</h2>
        <button id="killerbutton-${i}" class="select-killer selectbutton">Välj</button>
        </section>`;
    killersPlacement[i].innerHTML = printKillers;
  }
}
displayKillers();
/*
Funktion för att läsa mer om de olika karaktärerna
*/

function readMore(e) {
  const killerText = e.currentTarget.id.replace('img-', '');
  displayKillerText.classList.remove('hidden');
  displayKillerText.classList.add('visible');
  displayKillerText.innerHTML = `
        <article class="killer-text">${killersArray[killerText].about}</article>
        <button class="close-text">Stäng</button>
  `;
  /*
  varibler för att stänga läs-mer-rutan
  */
  const closeTextBtn = document.querySelectorAll('.close-text');
  closeTextBtn.forEach((btn) => {
    btn.addEventListener('click', closeKillerText);
  });
  console.log(closeTextBtn);
}

/*
 * Funktion för att öppna och stänga läs-mer-rutan med hjälp av tab.
 */
function openImageTab(e) {
  if (e.key === 'Enter') {
    const killerText = e.currentTarget.id.replace('img-', '');
    displayKillerText.classList.remove('hidden');
    displayKillerText.classList.add('visible');
    displayKillerText.innerHTML = `
        <article class="killer-text">${killersArray[killerText].about}</article>
        <button class="close-text">Stäng</button>
  `;
  }
  const closeTextBtn = document.querySelectorAll('.close-text');
  closeTextBtn.forEach((btn) => {
    btn.addEventListener('keydown', closeKillerText);
  });
  
}

/*
Funktion för att stänga läs-mer-rutan
*/
function closeKillerText() {
  displayKillerText.classList.remove('visible');
  displayKillerText.classList.add('hidden');
}

const killerImage = document.querySelectorAll('.killerimage');
killerImage.forEach((img) => {
  img.addEventListener('click', readMore);
});

killerImage.forEach((img) => {
  img.addEventListener('keydown', openImageTab);
});

/*
Funktion för att skriva ut alla platser till spelsidan
*/
function displayPlaces() {
  const placesPlacement = document.querySelectorAll('.place');
  for (let i = 0; i < placesArray.length; i++) {
    const placeNr = `place-${i}`;
    const printPlaces = `<section class="${placeNr}">
        <img id="img-${i}" src="${placesArray[i].image[0].src}" alt="${placesArray[i].image[0].alt}" width="80" height="80">
        <h2>${placesArray[i].place}</h2>
        <button id="placebutton-${i}" class="select-place selectbutton ">Välj</button>
      </section>`;
    placesPlacement[i].innerHTML = printPlaces;
  }
}
displayPlaces();

/*
Funktion för att skriva ut alla vapen till spelsidan.
*/
function displayWeapons() {
  const weaponsPlacement = document.querySelectorAll('.weapon');
  for (let i = 0; i < weaponsArray.length; i++) {
    const weaponNr = `weapon-${i}`;
    const printWeapons = `<section class="${weaponNr}">
                  <img id="img-${i}" src="${weaponsArray[i].image[0].src}" alt="${weaponsArray[i].image[0].alt}" width="80" height="80">
                  <h2>${weaponsArray[i].weapon}</h2>
              <button id="weaponbutton-${i}" class="select-weapon selectbutton">Välj</button>
              </section>`;
    weaponsPlacement[i].innerHTML = printWeapons;
  }
}
displayWeapons();

/*
Funktion för att välja mördare
*/
function pickKiller(btn) {
  const selectedKillerBtn = btn.currentTarget;
  controlKiller++;
  selectedKillerBtn.classList.add('active');
  pickKillersBtn.forEach((button) => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });

  const killerName = btn.currentTarget.id.replace('killerbutton-', '');
  selectedKillerName = killersArray[killerName].name;
}
const pickKillersBtn = document.querySelectorAll('.select-killer');
pickKillersBtn.forEach((btn) => {
  btn.addEventListener('click', pickKiller);
});

/*
Funktion för att välja plats
*/
function pickPlace(btn) {
  const selectedPlace = btn.currentTarget;
  selectedPlace.classList.add('active');

  pickPlacesBtn.forEach((button) => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });

  const placeName = btn.currentTarget.id.replace('placebutton-', '');
  truePlaceName = placesArray[placeName].place;
}

const pickPlacesBtn = document.querySelectorAll('.select-place');
controlPlace++;
pickPlacesBtn.forEach((btn) => {
  btn.addEventListener('click', pickPlace);
});

/*
Funktion för att välja vapen
*/
function pickWeapon(btn) {
  const selectedWeapon = btn.currentTarget;
  controlWeapon++;
  selectedWeapon.classList.add('active');

  pickWeaponsBtn.forEach((button) => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    }
  });

  const weaponName = btn.currentTarget.id.replace('weaponbutton-', '');
  trueWeaponame = weaponsArray[weaponName].weapon;
}

const pickWeaponsBtn = document.querySelectorAll('.select-weapon');
pickWeaponsBtn.forEach((btn) => {
  btn.addEventListener('click', pickWeapon);
});

/*
Funktioner för att plocka ut tre random svar
*/
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

/*
Funktion för att få en ledtråd
*/
function getClue() {
  const killerClues = killersArray.find((killer) => killer.name === killerResult);
  const killerClue = killerClues.color;
  clueBox.classList.remove('hidden');
  clueBox.classList.add('visible');
  clueBox.innerHTML = `<article class="clue-text">Din ledtråd ${killerClue}</article>
  <button id="close-text" >Stäng</button>`;

  const closeClueButton = document.querySelector('#close-text');
  closeClueButton.addEventListener('click', closeClue);
  console.log(closeClueButton)
}

function closeClue() {
  clueBox.classList.remove('visible');
  clueBox.classList.add('hidden');
}
const clueBox = document.querySelector('#cluebox');
const clueButton = document.querySelector('#clue');
clueButton.addEventListener('click', getClue);
clueButton.addEventListener('keydown', closeClue);

/*
Funktion för att aktivera resultatknapp
*/
const resultBtn = document.querySelector('.test-result');
resultBtn.setAttribute('disabled', 'disabled');

function activateButton() {
  if (controlKiller >= 1 && controlPlace >= 1 && controlWeapon >= 1) {
    resultBtn.removeAttribute('disabled', 'disabled');
  }
}

resultBtn.addEventListener('click', () => {
  testResult();
});
const allBtns = document.querySelectorAll('.selectbutton');
allBtns.forEach((btn) => {
  btn.addEventListener('click', activateButton);
});

/*
Funktion för att kontrollera rätt svar
*/
function testResult() {
  selectionPage.classList.remove('visible');
  selectionPage.classList.add('hidden');
  resultPage.classList.remove('hidden');
  resultPage.classList.add('visible');
  const correctKiller = killerResult === selectedKillerName;
  const correctPlace = placeResult === truePlaceName;
  const correctWeapon = weaponResult === trueWeaponame;

  if (correctKiller && correctPlace && correctWeapon) {
    resultText.innerHTML = 'Grattis du hade alla rätt! <br>'
      + '<input type="button" class="startover" value="Börja om spelet" onClick="window.location.reload(true)"></input>';
    playAgainBtn.classList.add('hidden');
  } else if ((correctKiller && correctPlace)
  || (correctKiller && correctWeapon)
  || (correctPlace && correctWeapon)) {
    resultText.innerHTML = 'Du hade två rätt, försök igen!';
  } else if (correctKiller || correctPlace || correctWeapon) {
    resultText.innerHTML = 'Ett rätt! Spela igen och se om du kan få fler rätt nästa gång';
  } else {
    resultText.innerHTML = 'Tyvärr! Inga rätt. Bättre lycka nästa gång!';
  }
}

const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', () => {
  playAgain();
});

/*
Funktion för att spela igen
*/
function playAgain() {
  playAgainBtn.addEventListener('click', () => {
    resultPage.classList.remove('visible');
    resultPage.classList.add('hidden');
    selectionPage.classList.remove('hidden');
    selectionPage.classList.add('visible');
  });
  pickWeaponsBtn.forEach((button) => {
    button.removeAttribute('disabled', 'disabled');
    button.classList.remove('active');
  });
  pickPlacesBtn.forEach((button) => {
    button.removeAttribute('disabled', 'disabled');
    button.classList.remove('active');
  });
  pickKillersBtn.forEach((button) => {
    button.removeAttribute('disabled', 'disabled');
    button.classList.remove('active');
  });
  resultBtn.setAttribute('disabled', 'disabled');
}

playAgainBtn.addEventListener('keydown', playAgain);
/*
Funktion för game-over
*/
function endGame() {
  let countPlayAgainClick = 0;
  const gameOverText = document.querySelector('.gameover-text');
  resultBtn.addEventListener('click', () => {
    countPlayAgainClick += 1;
    if (countPlayAgainClick > 3) {
      gameOverPage.classList.remove('hidden');
      gameOverPage.classList.add('visible');
      gameOverText.innerHTML = 'Du förlorade';
      resultPage.classList.remove('visible');
      resultPage.classList.add('hidden');
      selectionPage.classList.remove('visible');
      selectionPage.classList.add('hidden');
    }
  });
}

endGame();
