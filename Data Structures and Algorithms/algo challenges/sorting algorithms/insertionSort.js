function insertionSort(arr) {
	let len = arr.length;
	for (let i = 1; i < len; i++) {
		let key = arr[i],
			j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return arr;
}

const array = [1, 4, 2, 3, 5];

console.log(insertionSort(array));
