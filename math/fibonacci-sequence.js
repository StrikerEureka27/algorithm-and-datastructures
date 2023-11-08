// Problem: Give a number "n" find the first "n" elements of the Fibonacci sequence.
// sequence = [ 0, 1 , 1, 2, 3, 5 ];
function fibonacci(n) {
  let sequence = [0, 1]; // <--  1
  for (let i = 2; i <= n - 1; i++) { 
    sequence.push(sequence[i - 1] + sequence[i - 2]); // <-- n
  }
  return sequence; // <-- 1
};

// O(n) linnear time complexity

 console.log(fibonacci(3));
 console.log(fibonacci(7));


 
