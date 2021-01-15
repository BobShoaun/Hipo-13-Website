test = [1, 4, 54, 34, 2, -1, -50, 322, 3];


// selection sort on array in decreasing order
function selectionSort(array) {
	let sorted = [];

	while (array.length > 0) {
		let mIndex = maxIndex(array);
		sorted.push(array[mIndex]);
		array.splice(mIndex, 1);
    }
    return sorted;
}

console.log(selectionSort(test));

function maxIndex(array) {
	let mIndex = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[mIndex] < array[i]) {
			mIndex = i;
		}
	}
	return mIndex;
}

console.log("hello from index.js");