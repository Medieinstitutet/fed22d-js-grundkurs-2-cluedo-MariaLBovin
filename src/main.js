import './style.scss';
//import {killersArray} from '.arrays.js';

/************************************************************************
 *                           Globala variabler
 *************************************************************************/
const startPage = document.querySelector('.startpage');
const selectionPage = document.querySelector('#selectionpage');
const resultPage = document.querySelector('#resultpage');
const gameOverPage = document.querySelector('#gameoverpage');


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
    about: 'Herr Guldhov, gift med fru Guldhov. 69 år gammal, har en gul jacka som han är mycket stolt över. Snål.',
    image: '/images/killers/herr_guldhov.jpg',
  },
  {
    id: 3,
    name: 'Kalle Knackare',
    age: 39,
    color: 'Grön',
    about: 'Kalle Knackare, hovslagare. 40 år gammal, har gröna jägarkläder när han jobbar.Ett riktigt råskinn men snäll innerst inne.',
    image: '/images/killers/kalle_knackare.jpg',
  },
  {
    id: 4,
    name: 'Anna La Rouge',
    age: 23,
    color: 'Röd',
    about: 'Anna La Rouge, ryttaren som tävlar med Silverhof. 25 år gammal, rider i en röd ridjacka. En riktig surpuppa. ',
    image: '/images/killers/anna_la_rouge.jpg',
  },
  {
    id: 5,
    name: 'Rosa Rosando',
    age: 18,
    color: 'Rosa',
    about:'Rosa Rosando, stalltjej som hjälper till på stallet för att få rida. 18 år gammal, har knallrosa hår. Genomsnäll',
    image: '/images/killers/rosa_rosando.jpg',
  },
  {
    id: 6,
    name: 'Pjotr Plum',
    age: 42,
    color: 'Plommon',
    about: 'Pjotr Plum, veterinär. 42 år gammel, har en mörklila veterinärväska som han alltid bär på. Manipulativ och girig.',
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

//Funktion för att skriva ut alla mördare till spelsidan
function displayKillers() {
  const killersPlacement = document.querySelectorAll('.killer');

  for (let i = 0; i < killersArray.length; i++) {
    let killerNr = 'killer-' + i;
    const printKillers = `<section class="${killerNr}">
        <img class="killerimage" id="img-${i}" src="${killersArray[i].image}" alt="" width="80" height="80">
        <h2>${killersArray[i].name}</h2>
        <button id="killerbutton-${i}" class="select-killer selectbutton">Välj</button>
        </section>`;
    killersPlacement[i].innerHTML = printKillers;
  }
}

displayKillers();

//Funktion för att läsa mer om de olika karaktärerna
const killerImage =document.querySelectorAll('.killerimage');
killerImage.forEach(img => {
  img.addEventListener('click', readMore);
});

const displayKillerText = document.querySelector('.textbox');

function readMore(img){
  const killerText = img.currentTarget.id.replace('img-', '');
  displayKillerText.style.display = 'flex';
  displayKillerText.innerHTML = `
        <article class="killer-text">${killersArray[killerText].about}</article>
        <button id="close-text">Stäng</button>
  `;

  //varibler för att stänga läs-mer-rutan
  const closeTextBtn = document.querySelectorAll('#close-text');
  closeTextBtn.forEach(btn => {
    btn.addEventListener('click', closeKillerText);
  });
}

//Funktion för att stänga läs-mer-rutan
function closeKillerText (){
  displayKillerText.style.display = 'none';
  
} 

//Funktion för att skriva ut alla platser till spelsidan
function displayPlaces() {
  const placesPlacement = document.querySelectorAll('.place');
  for (let i = 0; i < placesArray.length; i++) {
    let placeNr = 'place-' + i;
    const printPlaces = `<section class="${placeNr}">
        <img id="img-${i}" src="${placesArray[i].image}" alt="" width="80" height="80">
        <h2>${placesArray[i].place}</h2>
        <button id="placebutton-${i}" class="select-place selectbutton ">Välj</button>
      </section>`;
    placesPlacement[i].innerHTML = printPlaces;
  }
}
displayPlaces();

//Funktion för att skriva ut alla vapen till spelsidan.
function displayWeapons() {
  const weaponsPlacement = document.querySelectorAll('.weapon');
  for (let i = 0; i < weaponsArray.length; i++) {
    let weaponNr = 'weapon-' + i;
    const printWeapons = `<section class="${weaponNr}">
                  <img id="img-${i}" src="${weaponsArray[i].image}" alt="" width="80" height="80">
                  <h2>${weaponsArray[i].weapon}</h2>
              <button id="weaponbutton-${i}" class="select-weapon selectbutton">Välj</button>
              </section>`;
    weaponsPlacement[i].innerHTML = printWeapons;
  }
}
displayWeapons();


//Funktion för att välja mördare
let selectedKillerName ='';
let controlKiller = 0;
function pickKiller(btn) {
  let selectedKillerBtn = btn.currentTarget;
  controlKiller ++
  selectedKillerBtn.classList.add('active');
  pickKillersBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    };
  });

  const killerName = btn.currentTarget.id.replace('killerbutton-', '');
  selectedKillerName = killersArray[killerName].name;
  

}
const pickKillersBtn = document.querySelectorAll('.select-killer');
pickKillersBtn.forEach(btn => {
  btn.addEventListener('click', pickKiller);
});


//Funktion för att välja plats
let truePlaceName = '';
let controlPlace = 0;
const pickPlacesBtn = document.querySelectorAll('.select-place');
controlPlace ++;
pickPlacesBtn.forEach(btn => {
  btn.addEventListener('click', pickPlace);
});

function pickPlace(btn) {
  let selectedPlace = btn.currentTarget;
  selectedPlace.classList.add('active');

  pickPlacesBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    };
  });

  const placeName = btn.currentTarget.id.replace('placebutton-', '');
  truePlaceName = placesArray[placeName].place;

}
//Funktion för att välja vapen

const pickWeaponsBtn = document.querySelectorAll('.select-weapon');
pickWeaponsBtn.forEach(btn => {
  btn.addEventListener('click', pickWeapon);
  
});

let trueWeaponame = '';
let controlWeapon = 0;
function pickWeapon(btn) {
  let selectedWeapon = btn.currentTarget;
  controlWeapon ++;
  selectedWeapon.classList.add('active');

  pickWeaponsBtn.forEach(button => {
    if (!button.classList.contains('active')) {
      button.setAttribute('disabled', 'disabled');
    };
    
  });

  const weaponName = btn.currentTarget.id.replace('weaponbutton-', '');
  trueWeaponame = weaponsArray[weaponName].weapon;

  activateButton ()

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

//Funktion för att få en ledtråd
/***
 * Jag behöver:
 * variabel som är ledtrådsknappen
 * en funktion som läser av vem som är slumpad mördare (killerReslut) och ger tillbaka ledtråden color
 */
const clueBox = document.querySelector('.clue-box');
const clueButton = document.querySelector('#clue');
clueButton.addEventListener('click', getClue);

function getClue (btn){
  let killerClues = killersArray.find(killer => killer.name === killerResult)
  let killerClue = killerClues.color;
  clueBox.innerHTML='Din ledtråd är ' + killerClue;
  }



const resultText = document.querySelector('.result-text');
const resultBtn = document.querySelector('.test-result');

//Funktion för att aktivera resultatknapp
/**
 * Om ett vapen, en plats och ett vapen är valt så ska se ditt resultat aktiveras
 */

function activateButton (){
  if ((controlKiller >= 1) && (controlPlace >=1 ) &&(controlWeapon >=1)){
    resultBtn.addEventListener('click', () => {
      testResult();
    })

    }
    
}


// Funktion för att kontrollera rätt svar
function testResult() {

  selectionPage.style.display = 'none';
  resultPage.style.display = 'flex';
  const correctKiller = killerResult == selectedKillerName;
  const correctPlace = placeResult == truePlaceName;
  const correctWeapon = weaponResult == trueWeaponame;

  if (correctKiller && correctPlace && correctWeapon) {
    resultText.innerHTML= 'Grattis du hade alla rätt!' + 
    `<input type="button" class="startover" value="Börja om spelet" onClick="window.location.reload(true)"></input>`;
    playAgainBtn.style.display = 'none';
  } else if ((correctKiller && correctPlace) || (correctKiller && correctWeapon) || (correctPlace && correctWeapon)) {
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
      
})    

function playAgain() {
  playAgainBtn.addEventListener('click', () => {
    resultPage.style.display = 'none';
    selectionPage.style.display = 'flex';

  });
  pickWeaponsBtn.forEach(button => {
    button.removeAttribute('disabled', 'disabled');
    button.classList.remove('active');
  
  });
  pickPlacesBtn.forEach(button => {
    button.removeAttribute('disabled', 'disabled');
    button.classList.remove('active');
  
  });
  pickKillersBtn.forEach(button => {
    button.removeAttribute('disabled', 'disabled');
    button.classList.remove('active');
  
  });

}
playAgain();

//Funktion för game-over
function endGame (){
  let countPlayAgainClick = 0;
  const gameOverText = document.querySelector('.gameover-text')
  resultBtn.addEventListener ('click',() => {
    countPlayAgainClick += 1;
    if (countPlayAgainClick > 3){
      gameOverPage.style.display = 'flex'
      gameOverText.innerHTML = 'Du förlorade';
      resultPage.style.display = 'none';
      selectionPage.style.display = 'none';
    }
  });
  
}
endGame ()


