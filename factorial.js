// Give an integer 'n' find the factorial of that integer.

// factorial(4) = 4 * 3 * 2 * 1 = 24;

function factorial(n) {
  let product = 1;      // <-- 1
  for(let i=1; i<=n; i++){
      product *= i;     // <-- n
  }
  return product;       // <-- 1
}                       

// O(n) Linnear time complexity

console.log(factorial(4));
console.log(factorial(5));
