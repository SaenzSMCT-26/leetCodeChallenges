function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		/* 
Here, min will equal the index value of i.

when the loops run the next time around, min 
will always reset to the next index value in 
the iteration.
*/
		// 	    		    [2, 1, 5, 4, 3]
		let min = i; // index# 0, 1, 2, 3, 4
		for (let j = i + 1; j < arr.length; j++) {
			/* 
min is equal to i, and i counts the index value of the array.

j also equals to i, but you then have + 1 which changes the 
index value that j starts on.

when the looping starts, based on the condition iside the 
inner loop, j and min will update accordingly.
*/
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
our array called array_to_loop [2, 1, 3, 5, 4];

arr is the parameter, which is representative of the input we 
will use for the function. In this case, array_to_loop.

==============================================
1st iteration:
==============================================

array_to_loop: [22, 11, 31, 54, 42]
min = i: [index value 0]|11|
j = i + 1: [index value 1]|22|

arr[min] starts at 22 and arr[j] starts at 11.

arr[min]|22| > arr[j]|11|: 
arr[min]|22| is greater than arr[j]|11|, so arr[min] now equals 11 and
arr[j] now equals 31.


arr[min]|11| < arr[j]|31|:
arr[min]|11| is less than arr[j]|31|, so arr[min] stays at 11 and 
arr[j] now equals 54.


arr[min]|11| < arr[j]|54|:
arr[min]|11| is less than arr[j]|54|, so arr[min] stays att 11 and
arr[j] now equals 42.


arr[min]|11| < arr[j]|42|:
arr[min]|11| is less than arr[j]|42|, so arr[min] stays at 11. iteration 
of inner loop stops and arr[min]|11| swaps with arr[i]|22|.




==============================================
2nd iteration:
==============================================
array_to_loop: [11, 22, 31, 54, 42]
min = i: [index value 1]|22|
min = i + 1: [index value 2]|31|

arr[min] starts at 22 and arr[j] starts at 31.

arr[min]|22| < arr[j]|31|:
arr[min]|22| is less than arr[j]|31|, so arr[min] stays at 22 and 
arr[j] now equals 54.


arr[min]|22| < arr[j]|54|:
arr[min]|22| is less than arr[j]|54|, so arr[min] stays at 22 and 
arr[j] now equals 42.


arr[min]|22| < arr[j]|42|:
arr[min]|22| is less than arr[j]|42|, so arr[min] stays at 22. iteration
of inner loop stops and arr[min]|22| doesn't swap.




==============================================
3rd iteration:
==============================================
array_to_loop: [11, 22, 31, 54, 42]
min = i: [index value 2]|31|
min = i + 1: [index value 3]|54|
*/
