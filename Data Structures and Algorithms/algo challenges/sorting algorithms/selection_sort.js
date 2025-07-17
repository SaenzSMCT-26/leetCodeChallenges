function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// 	    [2, 1, 5, 4, 3]
		let min = i; // index# 0, 1, 2, 3, 4
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}

const array1 = [2, 1, 5, 4, 3];

console.log(selectionSort(array1));

/* 
first iteration
min = [0]	
j = i[0] + 1j equals position 0 in the index

*/
