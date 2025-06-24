'use strict';

// const flight = 'LH234';
// const isaac = {
//     name: 'Isaac Saenz',
//     passport: 265532145345
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;
//     passenger.passport === 265532145345 ? console.log('Checked In') : console.log('Wrong Passport!');
// }

// checkIn(flight, isaac);
// console.log(flight);
// console.log(isaac);

// const transaction = {
//     id: 104,
//     amount: 500,
//     type: "withdrawal"
// }

// function logTransaction(fn){
//     console.log(`Processing transaction...`);
//     fn(transaction);
// }

// function details(det){
//     console.log(`Transaction #${det.id} of ${det.amount} was a ${det.type}.`)
// }

// logTransaction(details);

/*first class vs higher-order- functions*/

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }
// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn}`);
// }

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// // const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hi')('Isaac');

//---------------------
//operator precedennce
//---------------------
/* const now = 2037;
const ageIsaac = now - 1991;
const ageKels = now - 1991;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;// x = y = 10, x = 10;
console.log(x, y);

const  averageAge = (ageIsaac + ageKels) / 2;
console.log(ageIsaac, ageKels, averageAge); */

//------------------------------------------------------
// taking decisions: if / else statements
//------------------------------------------------------
/* const age  = 19;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Isaac can start diving lessons😊');
} else{
    const yearsLeft = 18 - age;
    console.log(`Isaac is not old enough to drive yet😢 ${yearsLeft} years :)`);
}

const birthYear = 2000;

let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}

console.log(century); */

//------------------------------------------------------
// type conversion and coercion
//------------------------------------------------------
// type conversion
/* const number = Number("2");
console.log(typeof number);

const inputYear = '1991';
console.log(`Number: ${Number(inputYear)} | String: "${inputYear}"`);
console.log(inputYear + 18);

console.log(Number('Isaac'));
console.log(typeof NaN);

console.log(String(23), 23);


//type coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + '23' + ' years old'); */

//------------------------------------------------------
// truthy and falsy
//------------------------------------------------------
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Isaac'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("Don't spend it all.");
} else{
    console.log("You should get a job")
}

let height = 123;
if(height){
    console.log('Yay! height is defined.');
} else{
    console.log('Height is UNDEFINED');
} */

//========================================================================================================================
//                                                  (JS Fundamentals)
//========================================================================================================================

//=============
//truth table
//=============
//A
// _________________________________
//|         |           |           |
//|  AND    |   TRUE    |   FALSE   |
//|         |           |           |
//|_________|___________|___________|
//|         |           |           |
//B     //|  TRUE   |   TRUE    |   FALSE   |
//|         |           |           |
//|_________|___________|___________|
//|         |           |           |
//|  FALSE  |   FALSE   |   FALSE   |
//|         |           |           |
//|_________|___________|___________|

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Isaac'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("Don't spend it all ;");
} else{
    console.log('You should get a job');
} */

/* const age = '18';
if(age === 18) console.log('You just became an adult (strict)');
if(age == 18) console.log('You just became an adult (loose)');

const fav = Number(prompt("what's your favorite number?"));
console.log(fav);
console.log(typeof fav);

if(fav === 23){// 23 === 23
    console.log('Cool! 23 is an amazing number');
}
else if (fav === 7){
    console.log('7 is also a cool number');
}
else if(fav === 9){
    console.log('9 is also a cool number');
}
else{
    console.log('Number is not 23 or 7 or 9');
}


if(fav !== 23) console.log('Why not 23?'); */

/* Challenge 3 video solution */
// function avScores(a, b){
//     if(a > b) console.log()
// }

//======================================================
//                  switch statements
//======================================================
/* const day = 'monday';

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
        console.log('Write code examples');
        break;
    case 'thursday':
    case 'friday':
        console.log('Record videos');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
} */

/* function calcAge(birthYear) {
    const age = 2025 - birthYear;
    console.log(firstName);

    const printAge = () => {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1998 && birthYear <= 2007){
            const str = `Oh, and you're a Gen-Z, ${firstName}`;
            console.log(str);
        }
    }
    printAge();

    return age; 
}

const firstName = 'Isaac';
calcAge(2000); */

/* Hoisting: Makes some types of variables accessible/
usable in the code before they are actually declared. 
"variables lifted to the top of their scope"*/

// for(let rep = 1; rep <= 10; rep++){
//     console.log('hello for');
// }

// let rep = 1;
// while(rep <= 10){
//     // console.log(console.log('hello while'));
//     rep++
// }

// let dice = Math.random(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...');
// }

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// function calcTotalAndTips(a){
//     let n = a.length;
//     for(let i = 0; i < n; i++){
//         let tip = calcTip(a[i]);
//         tips.push(tip);
//         totals.push(tip + bills[i]);
//     }
//     return `Bills: ${bills}
// Tips: ${totals}
// Totals: ${tips}`;
// }
// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];
// console.log(calcTotalAndTips(bills));

// function calcAverage(arr){
//     let n = arr.length;
//     let sum = 0;
//     for(let i = 0; i < n; i++){
//         sum += arr[i];
//     }
//     return sum / n;
// }

// console.log(calcAverage(tips));

function sumNumbers(arr) {
	let total = 0;
	for (const item of arr) {
		if (Array.isArray(item)) total += sumNumbers(item);
		total += item;
	}
	return total;
}

console.log(sumNumbers([1, 2, [3, 4, [5]]]));

// function logNumb(num){
//     if(i <= num){
//         console.log(i);
//         logNumb(num, i+1);
//     }
// }
// logNumb(10);
