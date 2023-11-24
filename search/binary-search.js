/* 
  Given a sorted array of 'n' elements and a target element 't', find the index of 't' 
  in the array, return -1 if the target element is not found. 
*/


function binarySearch(arr, target) {
  let rightIdx = arr.length - 1;
  let leftIdx = 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.round((leftIdx + rightIdx) / 2);

    if (target === arr[middleIdx]) {
      return middleIdx;
    }

    if (target < arr[middleIdx]) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10, 20, 30], 4));

// Big-O = O(logn)
