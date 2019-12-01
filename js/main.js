//step 1
let name = prompt(`please, write your name`);
let age = +prompt(`please, write your age`);
if (age < 3) {
    alert(`${name} you are little child`);
} else if (age > 2 && age <= 11) {
    alert(`${name} you are child`);
} else if (age >= 12 && age < 18) {
    alert(`${name} you are teenager`);
} else if (age >= 18 && age < 60) {
    alert(`${name} you are adult`);
} else if (age >= 60 && age < 121) {
    alert(`${name} you are senior`);
} else {
    alert(`you are die`);
}

// step 2
let num = +prompt(`please write number from 0 to 9`);
if (num == 0) alert(`the number ${num} matches - ')'`);
if (num == 1) alert(`the number ${num} matches - '!'`);
if (num == 2) alert(`the number ${num} matches - '@'`);
if (num == 3) alert(`the number ${num} matches - '#'`);
if (num == 4) alert(`the number ${num} matches - '$'`);
if (num == 5) alert(`the number ${num} matches - '%'`);
if (num == 6) alert(`the number ${num} matches - '^'`);
if (num == 7) alert(`the number ${num} matches - '&'`);
if (num == 8) alert(`the number ${num} matches - '*'`);
if (num == 9) alert(`the number ${num} matches - '('`);

//step 3
let threeDigitNumber = +prompt('please, write three digit number');
let thirdNumeral = threeDigitNumber % 10;
let secondNumeral = Math.trunc((threeDigitNumber / 10) % 10);
let firstNumeral = Math.trunc(threeDigitNumber / 100);

if (threeDigitNumber < 100 || threeDigitNumber > 999) {
    alert(`your number is not three digital, but ...`);
}

if (firstNumeral == secondNumeral || firstNumeral == thirdNumeral || secondNumeral == thirdNumeral) {
    alert(`you number ${threeDigitNumber} - have a same numbers`);
} else {
    alert(`you number ${threeDigitNumber} - doesn't have a same numbers`);
}

step 4
let currentYear = +prompt('please write any year');
if ((currentYear % 400 == 0) || (currentYear % 4 == 0) && (currentYear % 100 != 0)) {
    alert(`the ${currentYear} is leap year`);
} else {
    alert(`the ${currentYear} is not leap year`);
}

//step 5
let fiveDigitNumber = prompt('please, write five digit number');
let firstPart = Math.trunc(fiveDigitNumber / 10000);
let secondPart = Math.trunc((fiveDigitNumber / 1000) % 10);
let fourthPart = Math.trunc((fiveDigitNumber % 100) / 10);
let fivethPart = fiveDigitNumber % 10;
if (firstPart == fivethPart && secondPart == fourthPart) {
    alert(`your number ${fiveDigitNumber} is a polindrom`);
} else {
    alert(`your number ${fiveDigitNumber} is not a polindrom`);
}

//step 6
let currentDollar = +prompt('how many dollars do you have?');
let currency = prompt(`please write currency "EUR", "UAH" or "AZN"`);
const UAH = 0.042;
const AZN = 0.59;
const EUR = 1.1;

if (currency == "EUR") {
    alert(`${currentDollar} is a ${(currentDollar / EUR).toFixed(2)} euro`);
} else if (currency == "AZN") {
    alert(`${currentDollar} is a ${(currentDollar / AZN).toFixed(2)} azn`);
} else if (currency == "UAH"){
    alert(`${currentDollar} is a ${(currentDollar / UAH).toFixed(2)} uah`);
} else {
    alert(`wrong currency`);
}

//step 7
let currentAmount = +prompt(`please write purchase amount`);
if (currentAmount >= 200 && currentAmount <=300) {
    alert(`to pay a ${currentAmount - (currentAmount * 0.03)}`);
} else if (currentAmount >= 301 && currentAmount <= 500) {
    alert(`to pay a ${currentAmount - (currentAmount * 0.05)}`);
} else if (currentAmount >= 501) {
    alert(`to pay a ${currentAmount - (currentAmount * 0.07)}`);
} else {
    alert(`to pay a ${currentAmount}`);
}

//step 8
let circle = +prompt(`please write circumference`);
let square = +prompt(`please write gow long square`);
const PI = 3.14;
let side = square / 4;
let diametr = circle / PI;
if (diametr <= side) {
    alert(`circle fits square`);
} else {
    alert(`circle don't fits square`);
}

//step 9
alert('you will get 2 points for each correct answer');
let firstQuestion = prompt("what is the smallest country in the world? (Luxenburg, Vatican or San Marino");
let secondQuestion = prompt("where are the most people? (Sudan, India or China)");
let thirdQuestion = prompt("who is the world football champion now? (Brazilian, Germany or France)");

let countPoint = 0;

if (firstQuestion == "Vatican") {
    countPoint += 2;
}
if (secondQuestion == "China") {
    countPoint += 2;
}
if (thirdQuestion == "France") {
    countPoint += 2;
}

alert(`you have a ${countPoint} points`);

//step 10
let currentDateYear = +prompt("write year YYYY");
let currentDateMonth = +prompt("write Month MM or M");
let currentDateDay = +prompt("write day DD or D");

currentDateMonth--;

let currentDate = new Date(currentDateYear, currentDateMonth, currentDateDay);
currentDate.setDate(currentDate.getDate() + 1);

alert(currentDate);