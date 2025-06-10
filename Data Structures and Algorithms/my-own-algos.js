
//generates random number in a range of min and max number inputs
//


const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function findNumInRange(a, b){
    let num;
    for(let i = 0; i < Infinity; i++){
        num = generateNumber(a, b);
        num > 12 ? console.log(num) : console.log(`Found: ${num}`);
        if(num === a) break;
    } 
}

findNumInRange(12, 100000);







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


//we want to compare both of these arrays to see if there are any similar items
const array1 = ['a','b','c','x'];
const array2 = ['z','y','x'];

//we could use brute force

// function compareItems(arr1, arr2){
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(compareItems(array1, array2));