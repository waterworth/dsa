/**
 * First Duplicate Value - Medium
 *
 * Given an array of integers between 1 and n, inclusive, where n is
 * the length of the array, write a function that returns the first int
 * that appears more than once(when the array is read from left to right)
 *
 * If no integer appears more than once, your function should return -1
 *
 * Sample Input
 * array = [2, 1, 5, 2, 3, 3, 4]
 *
 * Sample Output
 * 2
 */

// Time Complexity: O(n) || Space Complexity: O(n)

export function firstDuplicateValue(array: number[]) {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}
