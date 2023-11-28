# Algorithms and datastructures

### Content 

- Algorithm
- Measuring performance
- Time & Space complexity
- Big 0 notation
- Math algorithms
- Sort
- Search
- Misc. algorithms and problem solving.

## What is a algorithm?

Is a set of well-define instructions to solve a particular problem (It's like a recipe). 

## Characteristics

- Well define inputs and outputs. 
- Each step must be clear and unambiguous.
- Language independent. 

## Algorithm analysis

The absolute time of a algorithm can't be predicate, since it's depends on a numbers of factors. 

- Programing language to implement the algorithm. 
- The computer the program runs on. 
- Other programs running at the same time. 
- Quality of the OS. 

We evaluate the performance of algorithm `in terms of the input size`. 

- Time complexity: Amount of time taken by a algorithm to run, as a function of input size. 
- Space complexity: Amount of memory taken by an algorithm to run, as a function of input size. 

Examples

If your app needs to be very quick and has plentity of memory to work with, you don't have to worry about space complexity. 

If you have very little memory to work with, you should pick a solution that is relative slower but needs less space. 

## How to represent complexity?

Asymptotic notations: Mathematical tools to represent time and space complexity. 

- Big-O Notation (O-notation) : Worst case complexity. 
- Omega Notation (Ω-notation): Best case complexity. 
- Theta notation (θ-notation): Avarage case complexity. 

Big-O Notation: Describes the complexity of an algorithm using algebraic terms, it has two important characteristcs:

- It's express in terms of the input. 
- it focues on the bigger picture without getting getting caught up in the minute details. 

Big-O Time Complexity:

```
function summation(n){        // <--- n = 4
    let n = 0;                // <--- 1
    for(let i=0; i<=n; i++){
        sum +=i;              // <--- 4
    };
    return sum;               // <--- 1
}
```

>  Time complexity  `O(n)` linnear.

Count the number of times a statement execute based on the input size (n + 2).
In the most of the cases if a algorithm have a loop its at least linear. 
Linnear means that while the input size increases the time complexity also increases. 


```
function summation(n){
    return (n * (n + 1) / 2); <--- 1
}
```

> Time complexity `O(1)` contant. 

```
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){

    }
}
// 3n^2 + 5n + 1
```

> Time complexity `O(n^2)` Quadratic.

```
for(let i = 1; i<=n; i++){
    for(let j = 1; j<=i; j++){
        for(let k = 1; k<=j; k++>){

        }
    }
}
``` 

> Time complexity `O(n^3)` Cubic. 

Input size reduce by half every iteration.

> Time complexity `O(Logn)` logarithmic. 

Big-O Space Complexity:

- O(1) Constant: If the algorithm does not need extra memory or the memory required it's not depend of the input size the space complexity is `constant` (Exa. Sorting algorithms).

- O(n) Linnear: The extra spaces need it grows as the input size grows. 

- O(logn): Logarithmic: The extra spaces need it grows but not at the same rate as the input size.

> Multiple algorithms exist for the same problem and there is not right solution, different algorithms work well under different constrainsts. 

## Big-O Guide 

- Calculation not dependent on input size. `O(1)`
- 1 Loop. - `O(n)`
- 2 Nested loops. - `O(^3)`
- Input size reduce by half. - `O(logn)`

## Ojects and arrays 

We define a `object` as a collection of a key pair value. 

```
const person = {
    firstName: "Bruce", 
    lastName: "Wayne"
}
```

Time complexity is constant when:

- Insert O(1) 
- Remove O(1)
- Access O(1)

But is linnear when:

- Search O(n)


Object.keys() O(n): return all keys of the object in a array. 
Object.values O(n): return all values of the object in a array. 
Object.entries() O(n): 

We define a `array` as a ordered collection of values. 

- Insert or remove at the end O(1) constant. 
- Acccess O(1) constant. 
- Push and pop O(1) constant.
- Insert or remove at the begining O(n) linnear.
- Search O(n) linnear.
- Shift, unshift, concat, slice, splice O(n) linnear. 
- foreach, map, filter, reduce O(n) linnear. 

## Math algorithms

- Fibonacci sequence.
- Factorial of a number.
- Prime number.
- Power of two.
- Recursion
- Fibonacci with recursion. 
- Factorial of a number with recursion. 

## Recursion

`What?`
Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem. (Recursion is when a function calls itself). 

`Why?`
It's a greate technique to simplify your solution. 
If you find yourself breaking down your problem into smaller version of the same problem, recursion is very useful. 

- Every recursive solutions needs to have a base case - a codition to terminate the recursion. 

- Recursion migth simplify solving a problem but it does not always translate to a faster solution. 
- A recursive solution may be far worse compared to an iterative solution. 


## Search algorithms

- Linnear search 
- Binary search 
- Recursive binary search

## Sorting algorithms

- Bubble sort
- Insertion sort
- Quick sort
- Merge sort




















