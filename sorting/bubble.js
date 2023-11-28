/*
 * Given an array of integers, sort array.
 * [ -6, 20, 8, -2, 4 ]
 * 
 */


function bubbleSort(arr) {
    let swap = true;
    while (swap) {
        swap = false;
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let previousPosition = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = previousPosition;
                swap = true;
            };
        };
        if (!swap) {
            swap = false;
        }
    }
    return arr;
};

// Big-O = O(n^2)


console.log(bubbleSort([-6, 20, 8, -2, 4]));
console.log(bubbleSort([100, -6, 2, 20, 8, -2, 1, 3, 4, 5]));
console.log(bubbleSort([-6, 20, 8, -2, 4]));