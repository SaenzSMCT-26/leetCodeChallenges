function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		/* 
Here, min will equal the index value of i.

when the loops run the next time around, min 
will always reset to the next index value in 
the iteration.
*/
		let min = i; // index# 0, 1, 2, 3, 4
		for (let j = i + 1; j < arr.length; j++) {
			/* 
min is equal to i, and i represents the index values of the array to be iterated through.

j is also equal to i, but you then have + 1 which changes the changes the index value to start
one above the "min" value. Ex: if min is index 0, j is index 1(example array with indices [0,1,2,3,4])

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

const array1 = [22, 11, 31, 54, 42];

console.log(selectionSort(array1));

/* 
SUMMARY:
[Selection Sort Algorithm]
Selection sort repeatedly finds the minimum 
element from the unsorted part of the array
and moves it to the beginning, building a 
sorted section from left to right.
--------------------------------------------
It works by maintaining two subarrays: the 
sorted and unsorted portions.
--------------------------------------------
Time complexity: O(n²). Useful for small 
arrays and educational purposes.


our array called array_to_loop [2, 1, 3, 5, 4];

arr is the parameter, which is representative of the input we 
will use for the function. In this case, array_to_loop.


notes: min always updates when the loop iteration is running, but when i moves on to the
next iteration it always resets to the next index value i represents because min is decalred
inside the outerloop. without trying to sound like a broken record, "min" resets to the next iteration value of the outer loop variable "i" 
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
of inner loop stops and arr[min]|11|[index 1] swaps with arr[i]|22|[index 0].




==============================================
2nd iteration:
==============================================
array_to_loop: [11, 22, 31, 54, 42]
min = i: [index value 1]|22|
j = i + 1: [index value 2]|31|

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
j = i + 1: [index value 3]|54|

arr[min] starts at 31 and arr[j] starts at 54.

arr[min]|31| < arr[j]|54|:
arr[min]|31| is less arr[j]|54|, so arr[min] stays at 31 and
arr[j] now equals 42.

arr[min]|31| < arr[j]|42|:
arr[min]|31| is less than arr[j]|42|, so arr[min] stays at 31. itertion
of inner loop stops and arr[min]|31| doesn't swap.




==============================================
4th iteration:
==============================================
array_to_loop: [11, 22, 31, 54, 42]
min = i: [index value 2]|54|
j = i + 1: [index value 3]|42|

arr[min] stars at 54 and arr[j] starts at 42.

arr[min]|54| > arr[j]|42|:
arr[min]|54| is greater than arr[j]|42|, so arr[min] now equals 42. iteration
of the inner loop stops and arr[min]|42|[index 4] swaps with arr[i]|54|[index 3]
*/

/* Bhelow is the full algorithm */

function selectionSort2(arr) {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		let min = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[min] > arr[j]) min = j;
		}
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}

console.log(selectionSort2(array1));
