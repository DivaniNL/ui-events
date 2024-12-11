/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...
let zw_sepialink = document.querySelector("a:nth-of-type(1)");
// Stap 2: addEventListener
// bibberLink.addEventListener...
zw_sepialink.addEventListener('click',zw_sepiafunctie);
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function zw_sepiafunctie(){
zw_sepialink.classList.toggle('doSomething');
}


// Stap 2: querySelector
// let bibberLink = document.querySelector...
let typingbutton = document.querySelector("a:nth-of-type(2)");
// Stap 2: addEventListener
// bibberLink.addEventListener...
typingbutton.addEventListener('copy',typingbuttonFunction);
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function typingbuttonFunction(){
  typingbutton.classList.toggle('doSomething');
}


// button 3

const mover = document.querySelector('.mover');


let introPlayed = false;
let translateX = 0, translateY = 0;
const introAudio = new Audio('Intro.mp3');
const chompAudio = new Audio('Chomp.mp3');

document.addEventListener('keydown', (event) => {

    // Play the intro sound once on the first arrow key press
    if (!introPlayed) {
        introPlayed = true;
        introAudio.play();

        // Wait for the intro sound to finish, then start chomp
        introAudio.addEventListener('ended', () => {
            chompAudio.loop = true; // This enables looping
            chompAudio.play();
        });
    }

    // Movement logic
    const step = 10;
    switch (event.key) {
        case 'ArrowUp':
            translateY -= step;
            break;
        case 'ArrowDown':
            translateY += step;
            break;
        case 'ArrowLeft':
            translateX -= step;
            break;
        case 'ArrowRight':
            translateX += step;
            break;
        default:
            return; // Ignore non-arrow key presses
    }

    // Apply transform
    mover.style.transform = `translate(${translateX}px, ${translateY}px)`;
    console.log(translateX);
    console.log(translateY);
    // Stop chomp when back at origin
    if (translateX == 0 && translateY == 0) {
        console.log("yay");
        chompAudio.loop = false;
        chompAudio.pause();
    }
});

// BUTTON 4

// Stap 1: querySelector
// let bibberLink = document.querySelector...
let sadbtn = document.querySelector("a:nth-of-type(4)");
// Stap 2: addEventListener
// bibberLink.addEventListener...
sadbtn.addEventListener('mouseleave',makeMeSad);
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function makeMeSad(){
    sadbtn.classList.add('sad');
}
