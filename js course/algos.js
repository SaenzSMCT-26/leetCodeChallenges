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

let nums = [2,3,4,23];
let target = 25;

const bubbleSort = () => {
    nums;
    target;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] - nums[i] === target){
                return console.log([i, j]);
            }
        }
    }
}


bubbleSort();