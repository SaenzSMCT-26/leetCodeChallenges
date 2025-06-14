"use strict";

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
console.log(Boolean(0));
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
}


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
const day = 'monday';

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
}