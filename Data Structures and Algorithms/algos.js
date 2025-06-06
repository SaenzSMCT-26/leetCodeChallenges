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


function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters

}



charCount('Your PIN number is 1234');

/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2
}
*/

function charCount(str){
// make object  to return at end
// loop over string, for each character...
    // if the char is a key in object, add one to count
    // if the char is not in object, add it and set value to 1
// return object at end
}



//===================================================================================================================================
//                                                      BUBBLE SORT ALGORITHM
//===================================================================================================================================
let array1 = ['a','b','c','k','w'];
let array2 = ['v','k','d','t'];

function sortArrays(ar1, ar2){
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(ar1[i] === ar2[j]){
                return [i, j];  //This will give youa the postions of the items in each array.

                //return [ar1[i], ar2[j]] <----  //This will give you the two matching items side by side.
            }
        }
    }
    return 'Nothing Here';
}


function sortArrays2(ar1, arr2){
    let noteBook = {};
    for(let i = 0; i < array1.length; i++){
        if(!noteBook)
    }

}
console.log(sortArrays(array1, array2));
console.log(sortArrays2(array1, array2));


let nums = [1,2,3,4,5];
        // [0,1,2,3,4] <---- this represents the index number in the array "nums" for the each of the items;
let target = 9;

//---------------
//      O(n^2)
//---------------
function twoSum1(nums, target){
    for(let i = 0; i<nums.length; i++){
        for(let j = i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
    return 'Nothing Found';
}


//---------------
//      O(n)
//---------------
function twoSum2(n, t){
    let newMap = {};
    for(let i=0; i<nums.length; i++){
        let mappedNums = t - n[i];
        if(newMap[mappedNums] !== undefined) return [newMap[mappedNums], i];
        newMap[n[i]] = i;
    }
    return 'Not Here';
}
console.log(`[${twoSum1(nums, target)}] <-- O(n^2)`);
console.log(`[${twoSum2(nums, target)}] <-- O(n)`);