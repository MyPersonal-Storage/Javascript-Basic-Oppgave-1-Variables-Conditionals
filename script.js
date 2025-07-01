/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

/* STRING */
const greetings = "Hello, There!";
console.log(greetings);

let timer = 12;
let minutes = 50;
let seconds = 30;
const colon = ":";

console.log(`Time: ${timer}${colon}${minutes}${colon}${seconds}`);

let isTimerRunning = false;
console.log(isTimerRunning);

const timeValues = [timer, minutes, seconds];
console.log(timeValues);

/* first iteration/other example for number above
// let text = "Time";
// let space = " ";
// let timer = 12;
// let minutes = 50;
// let seconds = 30;
// let colon = ":";
// console.log(text + colon + space + timer + colon + minutes + colon + seconds); */

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

let num0 = 20;
let num1 = 10;
let num2 = 5;
let num3 = 2;

console.log(num0 + num2);
console.log(num1 - num3);
console.log(num2 * num0);
console.log(num0 / num1);



num0 += num1;
num0 -= num1;
num2++;
num3--;

console.log(`${num0} ${num1} ${num2} ${num3}`);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Joe";
let userAge = 25;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her
if (userAge >= 18 && userName !== "" && userIsBlocked === false) {
    userIsLoggedIn = true;
    goToPage = "/home";
    console.log(`Welcome to the site, ${userName}!`);
// } else if (userIsBlocked === true || userAge < 18 || userName === "") {
//     userIsLoggedIn = false;
//     goToPage = "/blocked";
//     console.log("You are not old enough to view this content");
}
else {
    userIsLoggedIn = false;
    goToPage = "/error";
    console.log("An error occurred. Please try again later.");
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;


// Skriv koden for oppgave 5 her

const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);