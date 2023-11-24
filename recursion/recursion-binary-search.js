/* 
Given a sorted array of 'n' elements and a target element 't', find the index of 't' 
in the array, return -1 if the target element is not found. 


   L           R
[ -5, 2, 4, 6, 10 ]
< 0 , 1, 2, 3, 4 >



1. If array is empty return -1
2. iF middle 
2. If middle < target binary search in the rigth middle
3. If middle > target binary search in the left middle

*/

function binarySearchRecursive(arr, target) {
    return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIdx, rigthIdx) {

    if(arr.length<=1){
        return -1;
    }

    let middleIdx = Math.round((leftIdx + rigthIdx) / 2);

    if (target == arr[middleIdx]) {
        return middleIdx;
    };

    if (target > arr[middleIdx]) {
        leftIdx = middleIdx + 1;
    } else {
        rigthIdx = middleIdx - 1;
    };

    return search(arr, target, leftIdx, rigthIdx);

};


console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6));
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10));
console.log(binarySearchRecursive([-5, 2, 4, 6, 10, 20, 30], 4));
console.log(binarySearchRecursive([], 4));








