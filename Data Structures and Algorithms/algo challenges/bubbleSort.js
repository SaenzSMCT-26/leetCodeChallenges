const bubblesort1 = function(arr){

      let sorted = false; 
      let counter = 0;
      let conclude = 2;

      outerLoop: for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                  if(arr[j] > arr[j+1]){
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                        sorted = true;
                        counter++;
                        if(counter === conclude) break outerLoop;
                  }
            }
      }
      if(!sorted) return 'Already Sorted';
      if(counter === conclude){console.log(`After ${counter} swaps.`); return arr;}
} 

let array1 = [9, 7, 5, 3, 1];
// let array1 = ['banana', 'Apple', 'date', 'Cherry'];
// let array1 = [4,2,3,1];
console.log(bubblesort1(array1));


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


const bubbleSort2 = function(a) {
      for(let i = 0; i<a.length; i++){
            for(let j = 0; j<a.length - i - 1; j++){
                  
            }
      }
}