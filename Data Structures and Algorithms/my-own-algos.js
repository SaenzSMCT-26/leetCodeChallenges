'use strict';

//generates random number in a range of min and max number inputs
//

/* const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function findNumInRange(a, b){
    let num;

    for(let i = 0; i < Infinity; i++){
        num = generateNumber(a, b);
        num > 12 ? console.log(num) : console.log(`Found: ${num}`);
        if(num === a) break;
    } 
}

// findNumInRange(12, 100000);







//Give 2 arrays, create a function that let's user know (true/false) whether these 2 arrays contain common items
//for Ex:
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i'];
//should return false.
//--------------------------
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','x'];
//should return true.


//2 params - arrays - no size limit
//return true or false;

let arr1 = [1,2,3,4,5];
let arr2 = ['a','b','c',2,'l'];

const findTheNumberInLetters = function(a1, a2){
    for(let i = 0; i < a1.length; i++){
        // for(let j = a2.length; j > 0; j--){
        for(let j = 0; j < a2.length; j++){
            arr1[i] === arr2[j] && typeof "number" 
            ? console.log([i, j]) 
            : null;
        }
    }
}

findTheNumberInLetters(arr1, arr2); */

/* let word1 = "Ivaan";
let word2 = "ivaan";

console.log(word1.localeCompare(word2, undefined, {numeric: true})); */

/* let scammer = true;
let notScammer = true;
let george = scammer;
function person(name){
      let isGoodPerson = true;
      if(name === scammer) isGoodPerson = false;
      return isGoodPerson;
}

console.log(`George is a good person?: ${person(george)}`); */

//=======================================================================================
// First ever function on my own using a for loop to convert an array into a hashMap
//=======================================================================================
function convertToObj(arr) {
	let map = {};
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		map[arr[i]] = i + 1;
	}
	return map;
}

let arr = ['a', 'b', 'c', 'd'];
console.log(convertToObj(arr));

const user1Data = {
	userName: 'SaenzSMCT26',
	email: 'saenz.smct.26@gmail.com',
	id: 38202589113115,
	firstName: 'Isaac',
	lastName: 'Saenz',
	fullNameFn: function () {
		return `${this.firstName} ${this.lastName}`;
	},
};
