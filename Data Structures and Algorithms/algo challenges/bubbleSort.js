const bubblesort1 = function(arr){
      let sorted = false;

      for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr.length - i - 1; j++){
                  if(arr[j] < arr[j+1]){
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                        sorted = true;
                  } 
            }
            
      }

      if(!sorted) console.log('Already Sorted');
      if (sorted) console.log(arr);
} 

let array1 = [23,121,35,22,32,1,3,6,9,10,8,7];
bubblesort1(array1);




/* let scammer = true;
let notScammer = true;
let george = scammer;
function person(name){
      let isGoodPerson = true;
      if(name === scammer) isGoodPerson = false;
      return isGoodPerson;
}

console.log(`George is a good person?: ${person(george)}`); */ 