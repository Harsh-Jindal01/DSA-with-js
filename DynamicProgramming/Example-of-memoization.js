function fibonacci(n, memo = {}) {
  // Base cases
  if (n <= 1) return n;

  // Check if the result is already in the memo object
  if (memo[n]) return memo[n];

  // Calculate and store the result in memo
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  
  return memo[n];
}

// Test the function
console.time();
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(50)); // Output: 12586269025
console.timeEnd();