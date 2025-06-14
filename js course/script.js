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

// const greet = greeting => name => console.log(`${greeting} ${name}`);

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
const number = Number("2");
console.log(typeof number);

const inputYear = '1991';
console.log(`Number: ${Number(inputYear)} | String: "${inputYear}"`);
console.log(inputYear + 18);