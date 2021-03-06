/**
 * Three number sum - Medium
 *
 * Write a function that takes in a non-empty array of distinct integers
 * and an integer representing a target sum. The function should find all
 * triplets in the array that sum up to the target sum and return a two-dimensional
 * array of all these triplets. The numbers in each triplet should be ordered
 * in ascending order, and the triplets themselves hould be ordered in ascending order
 * with respect to the numbers they hold.
 *
 * If no three numbers sum up to the target sum, the function should
 * return an empty array.
 *
 * Sample Input
 * array = [12, 3, 1, 2, -6, 5, -8, 6]
 * targetSum = 0
 *
 * Sample Output
 * [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 */

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number) {
  // Sort the array from lowest to highest.
  array.sort((a, b) => a - b);
  let output: Triplet[] = [];

  // Loop through array, set the first pointer to i.
  // Set second pointer to the next value in the iteration.
  // Set the third value to the last value in the array.
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    // Check if the second and third pointers have passed.
    while (left < right) {
      // Sum up the three pointers, if they equal the target, push to the array.
      const sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        output.push([array[i], array[left], array[right]]);
        left++;
        right--;
      }
      // If the sum is lower than the target sum, move the left pointer right
      // index. We do this because all numbers after are increasing in value.
      else if (sum < targetSum) {
        left++;
      }
      // If the sum is heigher, move the right pointer one index left.
      // This works for the same reason as above but in reverse. All numbers are smaller
      // than the final index.
      else if (sum > targetSum) {
        right--;
      }
    }
  }
  return output;
}
