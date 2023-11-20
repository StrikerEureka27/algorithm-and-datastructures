/* 
Given an array of 'n' elements and targets element 't' find the index of 't' in the array. 
Return -1 if the target element is not found. 
[ -5, 2, 10, 4, 6 ]  
*/

function linearSearch(arr, t) {
  let index = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === t) {              
      index = i;                  
    };
  };
  return index;
};

// O(n) linnear time complexity

function linerSearchTwo(arr, t) {
  return arr.indexOf(t);
};

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
// console.log(linerSearchTwo([-5, 2, 10, 4, 6], 10));
