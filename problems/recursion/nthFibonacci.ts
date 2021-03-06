/**
 * Nth Fibonacci - Easy
 *
 * Fibonacci sequence is defined as: the first number of the sequence is 0.
 * The second number is 1. The nth number is the sum of (n-1)th and (n-2)th.
 *
 * Write a function that takes in an integer `n` and returns the nth Fib. number.
 *
 * Important note: the Fib. sequence is often defined with `F0=0` and `F1=1`.
 * For the purpose of the question, the first Fib. number is F0; therefore
 * getNthFib(1) is equal to F0 and getNthFib(2) is equal to F1.
 *
 * Sample Input
 * n = 2
 * n = 6
 *
 * Sample Output
 * 1 // 0, 1
 * 5 // 0, 1, 1, 2, 3, 5
 */

// Time Complexity: O(n) || Space Complexity: O(1)

export function getNthFib(n: number): number {
  // Init array to hold two base cases for the function.
  const f: number[] = [0, 1];
  // Create a counter to account for base cases.
  let counter = 3;
  // Only run calculation if n is larger than the two known base cases.
  while (counter <= n) {
    // run the fib calculation to get the next number in the sequence
    const next = f[0] + f[1];
    // Set the base cases for the next cycle.
    f[0] = f[1];
    f[1] = next;

    counter++;
  }
  return n > 1 ? f[1] : f[0];
}
