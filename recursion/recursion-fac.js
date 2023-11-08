// Give an integer 'n' find the factorial of that integer.
// recursiveFactorial(4)  = 4 * 3 * 2 * 1 = 24

function recursiveFactorial(n) {
  return n === 0 ? 1 : n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(8));


// O(n) linnear complexity 
