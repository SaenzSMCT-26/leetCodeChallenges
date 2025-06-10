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


// let nums = [2,3,4,8,9];
// let target = 7;

// function twoSum(n, t = ){
//     let hM = {};
//     for(let i = 0; i < n.length; i++){
//         let c = t - n[i];
//         hM[n[i]] = i;
//         if(hM[c]) [hM[c], i];
//     }
//     return hM;
// }

// console.log(twoSum(nums));