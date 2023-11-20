/* 
Given a sorted array of 'n' elements and a target element 't', find the index of 't' 
in the array, return -1 if the target element is not found. 
*/

// [ -5, 2, 4, 6 , 10 ]
// [ -5, 2, 4, 6 , 10 ]

function binarySearch(arr, t) {

  let rightIdx = arr.length;
  let leftIdx = 0;

  let middle = 



  
  };
  return leftIdx;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10, 20, 23, 102], 20));
