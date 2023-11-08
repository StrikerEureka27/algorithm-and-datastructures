// Problem: Give a number "n" find the first "n" elements of the Fibonacci sequence.
// sequence = [ 0, 1, 1, 2, 3, 5, 8 ];

function recursiveFibonacci(n) {
  return n < 2 ? n : recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// O(2^n)

console.log(recursiveFibonacci(8));
console.log(recursiveFibonacci(5));
