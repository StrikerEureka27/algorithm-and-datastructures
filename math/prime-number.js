// Give a 'n' number determine if the number is prime or not.

// isPrime(5) = true;
// isPrime(4) = false;

// Divisible by 1?
// Divisible by itself.
// Divisible by exactly two natural numbers.

function isPrime(n) {
  let divisibleBy = 0; // <-- 1
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) { // <-- 1
      divisibleBy++; // <-- n
    }
  }
  return divisibleBy == 2; // <-- 1
}

// O(n) Linnear time complexity

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

console.log(" ");

// Optimized Primality Test

/* Integers larger than the square root do not need to be checked 
because, whenever 'n=a*b', one of the two factors 'a' and 'b' is 
less than or equal to the square root of 'n'. */

function isPrime(n) {
  let divisibleBy = 0; // <-- 1
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { // <-- 1
      divisibleBy++; // <-- n
    };
  };
  return divisibleBy == 2; // <-- 1
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
