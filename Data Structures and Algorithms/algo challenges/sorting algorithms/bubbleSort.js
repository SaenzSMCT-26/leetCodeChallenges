// const bubblesort1 = function(arr){

//       let sorted = false; 
//       let counter = 0;

//       for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr.length - i - 1; j++){
//                   if(arr[j] > arr[j+1]){
//                         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                         sorted = true;
//                         counter++;
//                   }
//             }
//       }
//       if(!sorted) return 'Already Sorted';
//       if(counter){
//             console.log(`After ${counter} swaps.`);
//             return arr;
//       }
            
// }



// //this version is made to break the entire loop if the counter meets the condition provided
// const bubblesort2 = function(arr){

//       let hasBeenSorted = false; 
//       let counter = 0;
//       let k = 2;

//       outerLoop : for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr.length - i - 1; j++){
//                   if(arr[j] > arr[j+1]){
//                         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                         hasBeenSorted = true;
//                         counter++;
//                         if(counter === k) break outerLoop;
//                   }
//             }
//       }
//       if(!hasBeenSorted) return 'Already Sorted'; //this is telling the function that if no sorting has occured than the data is already sorted to begin with
//       if(counter === k){

//             console.log(`After ${counter} swaps.`); // logs the number of swaps that happen until the array is sorted nemeric order

//             return arr; // return the array after the sorting has occured
            
//       }
            
//       // if (sorted) {console.log(`the array is sorted in ${counter} swaps.`); return arr;}
// } 

// let array1 = [9, 7, 5, 3, 1];
// // let array1 = ['banana', 'Apple', 'date', 'Cherry'];
// // let array1 = [4,2,3,1];
// console.log(bubblesort1(array1));
// console.log(bubblesort2(array1));



/* const bubblesort3 = function(arr, compareFunction){
      let hasBeenSorted = false; 
      let counter = 0;

      compareFunction = (a, b) => a > b;

      outerLoop: for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                  if(!compareFunction(arr[j], arr[j+1])){
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                        hasBeenSorted = true;
                        counter++;
                  }
            }
      }
      if(!hasBeenSorted) return 'Already Sorted';
      if(hasBeenSorted){console.log(`After ${counter} swaps.`); return arr;}
}

let array3 = [3,2,1,6,4,5];
console.log(bubblesort3(array3)); */


const bubblesort4 = function(arr, k){
      let hasBeenSorted = false; 
      let counter = 0;
      let n = arr.length

      outerLoop : for(let i = 0; i < n; i++){
            for(let j = 0; j < n - i - 1; j++){
                  if(arr[j][k].localeCompare(arr[j+1][k]) > 0){
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                        hasBeenSorted = true;
                        counter++;
                  }
            }
      }
      if(!hasBeenSorted) return 'Already Sorted';
      if(hasBeenSorted){console.log(`After ${counter} swaps.`); return arr;}
}

let array4 = [
      {name: "Bob", grade: 90},
      {name: "Alice", grade: 95},
      {name: "Claude", grade: 99}
]

console.log(bubblesort4(array4, "name"));



function bubbleSort5(a, comFn){
      let n = a.length;
      let counter = 0;
      // let conclude = 2;

/* outerLoop: */for(let i = 0; i < n; i++){
            for(let j = 0; j < n - i -1; j++){
                  if(!comFn(a[j], a[j+1])){
                        [a[j], a[j+1]] = [a[j+1], a[j]];
                        counter++;
                        // if(counter === conclude) break outerLoop;
                  }
            }
      }
      if(counter){console.log(`Swapped ${counter} times.`); return a;};
}

let array = [2,5,1,4,6,3];
console.log(bubbleSort5(array, (a, b) => a > b));

//=======================================================================================
// First ever function on my own using a for loop to convert an array into a hashMap
//=======================================================================================
function convertToObj(arr){
      let map = {};
      let n = arr.length;
      for(let i = 0; i < n; i++){
            map[arr[i]] = i + 1;
      }
      return map;
}

let arr = ['a','b','c','d'];
console.log(convertToObj(arr));