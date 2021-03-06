/**
 * Product Sum - Easy
 *
 * Write a function that takes in a 'special' array and returns its
 * product sum.
 *
 * A special array is a non-empty array that contains either integers
 * or other 'special' arrays. The product sum of a special array is the
 * sum of it's elements, where 'special' arrays inside it are summed themselves,
 * then multiplied by their level of depth.
 *
 * The depth is how far nested it is. [] = 1; [[]] = 2; [[[]]] = 3.
 *
 * The sum of [x,y] = x + y; the sum of [x, [y, z]] = x + 2 * (y+ z)
 *
 *
 * Sample Input
 * array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 *
 * Sample Output
 * 12
 */

// Time Complexity: O(n) || Space Complexity: O(d)
// where n = total number of elements and d = greatest depth.

type SpecialArray = Array<number | SpecialArray>;

// Take in the array and then a base depth of 1.
export function productSum(array: SpecialArray, depth = 1) {
  // Initialize a sum variable.
  let sum = 0;
  // Loop through the array
  for (const element of array) {
    // If the array is a subarray, recursively call function and add
    // 1 to the depth.
    if (Array.isArray(element)) {
      sum += productSum(element, depth + 1);
    }
    // If not an array, just add the sum to the depth
    else {
      sum += element;
    }
  }
  // Return the sum of the current sub array, times by its depth.
  return sum * depth;
}
