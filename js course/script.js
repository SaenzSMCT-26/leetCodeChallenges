'use strict';
//===============================================================================
//						Challenges
//===============================================================================

/* unction sumNumbers(arr) {
	let total = 0;
	for (const item of arr) {
		if (Array.isArray(item)) total += sumNumbers(item);
		total += item;
	}
	return total;
}

console.log(sumNumbers([1, 2, [3, 4, [5]]])); */

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

// function logNumb(num){
//     if(i <= num){
//         console.log(i);
//         logNumb(num, i+1);
//     }
// }
// logNumb(10);

// call and apply methods
/* const lufthansa = {
	ariline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	// book: function() {}
	book(flightNum, name) {
		return `${name} booked a seat on ${this.ariline} flight ${this.iataCode}${flightNum}`;
	},
};

console.log(lufthansa.book(239, 'Isaac Saenz'));
console.log(lufthansa.book(635, 'Kelsey Saenz'));

// Destructuring Objects

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const hours = {
	[days[2]]: {
		open: 12,
		close: 22,
	},
	[days[3]]: {
		open: 11,
		close: 23,
	},
	[days[4]]: {
		open: 0,
		close: 24,
	},
};

hours; */

/* const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	hours,

	orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
		console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
	},

	orderPasta(ing1, ing2, ing3) {
		return `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`;
	},
};

const properties = Object.keys(hours);
properties;

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
	openStr += `${day}, `;
}
openStr;

// property VALUES
const values = Object.values(hours);
values;

// Entire Object
const entries = Object.entries(hours);
entries;

for (const [key, { open, close }] of entries) {
	const sent = `On ${key} we open at ${open} and close at ${close}`;
	sent;
} */

/* for (const day of days) {
	const open = restaurant.hours[day]?.open || 'closed';
	console.log(`On ${day}, we open at ${open}`);
} */

// if (restaurant.hours.fri) console.log(restaurant.hours.fri.open);

/* console.log(restaurant.hours.fri?.open);
console.log(restaurant.hours.thu?.open);
console.log(restaurant.hours.wed?.open); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
} */

/* restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = 0;
restaurant.numGuests ?? 10;
console.log(guestCorrect); */

// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// 	console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// console.log();

/* const order1 = restaurant.orderDelivery({
	time: '22:30',
	address: 'Via del sole, 21',
	mainIndex: 2,
	srtarterIndex: 2,
});
order1;

const order2 = restaurant.orderDelivery({
	address: 'Via del sole, 21',
	starterIndex: 1,
});
order2;

const { name, openingHours, categories } = restaurant;
name;
openingHours;
categories;

const { name: restaurantName, openingHours: hours, catergories: tags } = restaurant;
restaurantName;
hours;
tags;

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
a; //----->
b; //----->

const {
	fri: { open, close },
} = openingHours;
open;
close; */

// using spread operator
/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
badNewArr;

const newGoodArr = [1, 2, ...arr];
newGoodArr;

console.log(...newGoodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
newMenu;

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
fullMenu;

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Isaac';
const letters = [...str, ' ', 's.'];
letters;
console.log(...str);
console.log(`${str} Isaac`);

const ingredients = [prompt("Let's make pasta! Indgredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];*/

// console.log(3 || 'Isaac');
// console.log('' || 'Isaac');
// console.log(true || 0);
// console.log(undefined || null);

// const name = 'Isaac';
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const array = [1, 2, 3, 5, 2, 3, 1, 5, 3, 4];

const newSet = new Set(array);

function sort() {
	let arr = [];
	let getting_sorted_by_loops = false;
	newSet.forEach((numbers) => arr.push(numbers));
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				getting_sorted_by_loops = true;
			}
		}
	}
	if (!getting_sorted_by_loops) console.log(`[${arr}]: Array was already sorted ;).`);
	else if (getting_sorted_by_loops) console.log(arr);
}

sort();
