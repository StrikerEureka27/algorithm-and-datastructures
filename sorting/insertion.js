/*
 * Given an array of integers, sort array.
 *
 * [8, 20, -6, -2, 4]
 *
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(`Iteration ${i}`);
    let numberToInsert = arr[i];
    console.log(`numberToInsert: ${numberToInsert}`)
    let j = i - 1;
    console.log(`Sorted element: ${arr[j]}`);
    console.log(`${arr[j]} > ${numberToInsert} ? ${arr[j] > numberToInsert ? 'yes' : 'no'}`)
    while (j >= 0 && arr[j] > numberToInsert ) {
      console.log(`Shifting ${arr[j]} to the right`);
      arr[j+1] = arr[j];
      console.log(arr);
      j = j - 1;
      console.log(`Sorted element:  ${arr[j]}`);
    };
    arr[j+1] = numberToInsert;
    console.log(arr);
    console.log('');
  };

  return arr;
}

console.log(insertionSort([8, 20, -6, -2, 4]));

// Big-O = O(n^2)