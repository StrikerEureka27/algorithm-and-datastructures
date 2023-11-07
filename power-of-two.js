// Give a positive 'n' determine if the number is a power of 2 or not.

/*

n = 8
8 / 2 = 4 mob 0
4 / 2 = 2 mob 0
2 / 2 = 1 mob 0

*/

function isPowerOfTwo(n) {
  let power = false;        // <--- 1
  while(n%2===0 || n===1){  
    power = true;           // <--- n
    n = n / 2;              // <--- n
  };
  return power;             // <--- 1
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
