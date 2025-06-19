// write a function which takes two numbers and returns their sum.

// 1.Can I restate the problem in my own words?
// 2.What are the inputs that go into the problem?
    // - ints?
    // - floats?
    // - what about string for large numbers?
// 3.What are theouptuts that should come from the solution to the problem?
    // - int? float? string?
// 4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5.How should I lavel the important peices of data that are a part of the problem?


// function charCount(str){
//     // do something
//     // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters

// }



// charCount('Your PIN number is 1234');

// /* {
//     1: 1,
//     2: 1,
//     3: 1,
//     4: 1,
//     b: 1,
//     e: 1,
//     i: 2
// }
// */

// function charCount(str){
// // make object  to return at end
// // loop over string, for each character...
//     // if the char is a key in object, add one to count
//     // if the char is not in object, add it and set value to 1
// // return object at end
// }



//===================================================================================================================================
//                                                      BUBBLE SORT ALGORITHM
//===================================================================================================================================
// let array1 = ['a','b','c','k','w'];
// let array2 = ['v','k','d','t'];

// function sortArrays(ar1, ar2){
//     for(let i=0; i<array1.length; i++){
//         for(let j=0; j<array2.length; j++){
//             if(ar1[i] === ar2[j]){
//                 return [i, j];  //This will give youa the postions of the items in each array.

//                 //return [ar1[i], ar2[j]] <----  //This will give you the two matching items side by side.
//             }
//         }
//     }
//     return 'Nothing Here';
// }


// function sortArrays2(ar1, arr2){
//     let noteBook = {};
//     for(let i = 0; i < array1.length; i++){
//         if(!noteBook)
//     }

// }
// console.log(sortArrays(array1, array2));
// console.log(sortArrays2(array1, array2));


// let nums = [1,2,3,4,5];
//         // [0,1,2,3,4] <---- this represents the index number in the array "nums" for the each of the items;
// let target = 9;

// //---------------
// //      O(n^2)
// //---------------
// function twoSum1(nums, target){
//     for(let i = 0; i<nums.length; i++){
//         for(let j = i + 1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target) return [i, j];
//         }
//     }
//     return 'Nothing Found';
// }


// //---------------
// //      O(n)
// //---------------
// function twoSum2(n, t){
//     let newMap = {};
//     for(let i=0; i<nums.length; i++){
//         let mappedNums = t - n[i];
//         if(newMap[mappedNums] !== undefined) return [newMap[mappedNums], i];
//         newMap[n[i]] = i;
//     }
//     return 'Not Here';
// }
// console.log(`[${twoSum1(nums, target)}] <-- O(n^2)`);
// console.log(`[${twoSum2(nums, target)}] <-- O(n)`);







// let array1 = [1,2,3,4,5];
// let array2 = [3,5,2,1,9];


// //---------------
// //   Hash Map Lookup -- O(n)
// //---------------
// function containsCommonItem2(a1, a2){
//     //loop through first array and create object where properties === items in the array
//     let map = {};
//     for(let i = 0; i < a1.length; i++){
//         if(!map[a1[i]]){
//             const item = a1[i];
//             map[item] = 'letter';
//         }
//     }
//     // loop through second array an check if item in second array exists on created object.
//     for(let j = 0; j < a2.length; j++){
//         if(map[array2[j]]){
//             return true;
//         }
//     } 
//     return false;
// }

// console.log(containsCommonItem2(array1, array2));

// let numbers = [3, 4, 5, 6, 7, 8, 9, 10];

// function isDivisibleBy3(arr) {
//     // Create an object to store arr that are divisible by 3
//     let map = {};
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             map[arr[i]] = 'divisible';
//         } else{
//             map[arr[i]] = 'not divisible';
//         }
//     }
//     return map;
// }

// console.log(isDivisibleBy3(numbers));


// let list = [3,6,8,10,43,25,16];

// const findDivisible = function(a){
//     let noteBook = {};
//     for(let i = 0; i < a.length; i++){
//         if(!noteBook[list[i]] && noteBook[list[i]] % 2 === 0){
//             const copyOfList = noteBook[a[i]];
//             noteBook[copyOfList] = ;
//         }
//     }
//     let trueList = [];
//     for(let key in noteBook){
//         trueList.push(key);
//     }
//     return trueList;
// }

// console.log(findDivisible(list));



























let nums = [2,7,11,15];
/* this is your data you will be sorting through
   to find the 2 #s that add up to the target # */
let target = 9; // this is the target #


// this is your function
function twoSum(n, t){



    //____________________________________________________________________________________________________    
    //-------------------------------                   
    //hM - (hash map/ storage)
    //-------------------------------                   
    let hM = {};
    /* this will be the storage for the numbers that
    don't meet the if statements conditions. it is currently empty*/
    //___________________________________________________________________________________________________



    for(let i = 0; i < n.length; i++){ // using a for loop to loop through the nums list



        //========================================================================================================================================================================

        // first iteration: let c = 9 - 2 = 7
        let c = t - n[i];
        /* c(complement) is a going to = the target minus 
           the nums list current iteration */
        //========================================================================================================================================================================









        

        
        //========================================================================================================================================================================
        //-----------------------------                   
        //first iteration: 
        //-----------------------------                   
        /* does the hash  of 7 exist in hM ? if not, ignore return statement and move to the next 
           if  exists  */

        if(hM[c] !== undefined) return [hM[c], i];
        /* this is the conditional statement that 
        essentially says if a complementary # is 
        found in the storage that can be added to 
        the current # that the for loop is iterating 
        through - and is NOT an undefined # in the 
        storage anymore - then return [hM[c], i]([0, 1]) */
        //========================================================================================================================================================================
        
        









        //========================================================================================================================================================================
        //i = the current index iteration of the for loop
        //n = the current iterated number in our array "nums".
        //hM = the hashMap(storage) or object has the stored #s that are inadiquate to the conditional statement
        
        /* so hM[n[i]] is like saying "store the current index(i) of the array 'nums' value(2) in object(hM) andj assign it the value of the current index(i = 0)" */ 
        /*    ^  ^ ^___________________________________________^                            ^            ^    
              |  |__________________________________________________________________________|            |
              |__________________________________________________________________________________________|   */


        //--------------------------------------
        // can be described as: 
        //--------------------------------------
        // loop iteration code, 
        // hash map assignment, 
        // mutation step inside loop, 
        // or side-effect-producing statement during

        hM[n[i]] = i;
        /* This represents a value that is going 
        to get stored in our hashMap(the "storage") 
        if our conditional statement isn't met*/
        //========================================================================================================================================================================
    }
}

// this will call the function and log the result([0, 1]) to the output terminal
console.log(twoSum(nums, target)); 


let letters = ['a','b','c',2,'d','e'];
 
const findLetter = function(l){
    for(let i = 0; i < l.length; i++){
        let s = l[i];
        if(typeof s === "number"){
            return console.log(`Found the number: ${l[i]}`);
        }
    }
    return console.log('not found');  
}

findLetter(letters);



//Find the number in the array that can be added to itself to = 20;

function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        let swapped = false;
        let printArr = false;

        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
                printArr = true;
            }
        }
        if(!swapped && !printArr){
            console.log('Already sorted');
            break;
        }
        if(printArr){
            console.log(arr);
            break;
        }
    }
}

// let arrayOne = [1,2,3,4,5,6,7,8,9,10];
      //indices:0,1,2,3,4,5,6,7,8,9
// console.log(`Index: ${bubbleSort(arrayOne)}`);

let arrayTwo = [1,2,6,4,5,10];
bubbleSort(arrayTwo);



function findNemo(a){
    let count = 0;
    let n = a.length;
    for(let i=0; i<n; i++){
        if(arr[i] === 'nemo'){
            count++;
            console.log(`found ${arr[i]} at index ${count}.`);
            break;
        }
    }
}

let arr = ['nemo', 'name', 'hello', 'bob', 'billy'];
findNemo(arr);





function printFirstItemFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    let middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while(index < middleIndex){
        console.log(items[index]);
        index++;
    }
    for(let i = 0; i<100; i++){
        console.log('hi');
    }
}

//O(n)

function twoSum(arr, target){
    let map = {};
    let n = arr.length;
    for(let i = 0; i<n; i++){
        let comp = target - arr[i];
        if(map[comp] !== undefined) return [map[comp], i];
        map[arr[i]] = i;
    }
    return 'nothing here';
}

let a = [3,4,6,2,7];
let b = 13;

console.log(twoSum(a, b));