/*
 * Given an array of integers, sort array.
 *
 * [ -6, 20, 8, -2, 4]
 *
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let leftArray = [];
  let rigthArray = [];
  let middle = Math.floor(arr.length / 2);

  leftArray = arr.slice(0, middle);
  rigthArray = arr.slice(middle, arr.length);

  return merge(mergeSort(leftArray), mergeSort(rigthArray));
}

function merge(leftArray, rightArray) {

  let tmpArray = [];
  while (leftArray.length && rightArray.length) {

    if (leftArray[0] <= rightArray[0]) {
      tmpArray.push(leftArray.shift());
    } else {
      tmpArray.push(rightArray.shift());
    };

    /*if (leftArray.length === 0) {
      tmpArray.push(rightArray.shift());
    };

    if (rightArray.length === 0) {
      tmpArray.push(leftArray.shift());
    };*/

  };

  console.log(`Temp array: [${tmpArray}]`);
  
  return [ ...tmpArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([-6, 20, 8, -2, 4]));

// Big-O = O(nlogn)
