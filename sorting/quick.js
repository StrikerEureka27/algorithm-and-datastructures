/*
 * Given an array of integers, sort array.
 *
 * [-6, 20, 8, -2, 4]
 *
 * 1. Identify the pivot element in the array.
 * - Pick firts element as pivot
 * - Pick last element as pivot.
 * - Pick a random element as pivot.
 * - Pick median as pivot.
 *
 */

function quickSort(arr) {
  // console.log(arr);
  if (arr.length < 2) {
    return arr;
  }

  let pivotIdx = arr.length - 1;
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] < arr[pivotIdx]) {
      leftArray.push(arr[i]);
    } else if (arr[i] > arr[pivotIdx]) {
      rightArray.push(arr[i]);
    };
  };

  return [...quickSort(leftArray), arr[pivotIdx], ...quickSort(rightArray)];
};

// Worst case  - O(n^2)
// Avg case  - O(nlogn)


console.log(quickSort([-6, 20, 8, -2, 4]));
