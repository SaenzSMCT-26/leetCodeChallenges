function selectionSort(arr){
      let n = arr.length;// reusable variable for the length of the array
      for(let i = 0; i < n; i++){
            let min = i;
            for(let j = i + 1; j < n; j++){
                  if(arr[j] < arr[min]) min = j;
            }
            [arr[i], arr[min]] = [arr[min], arr[i]];
      }
      return arr;      
}

let arr = [4,1,5,2,3];
console.log(selectionSort(arr));