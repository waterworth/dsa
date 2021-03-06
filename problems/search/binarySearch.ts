/**
 * Binary Search - Easy
 *
 * Write a function that takes in a sorted array of integers as well as a target integer.
 * The function should use the Binary Search algorithm to determine
 * if the target integer is contained in the array and should return its index if true,
 * otherwise return -1.
 *
 * Sample Input
 * array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
 * target = 33
 *
 */

// Time Complexity: O(log(n)) || Space Complexity: O(log(n))

export function binarySearch(array: number[], target: number): number {
  return searchHelper(array, target, 0, array.length - 1);
}

function searchHelper(
  array: number[],
  target: number,
  left: number,
  right: number
): number {
  // If the left pointer is larger than the right, the target cannot be reached.
  if (left > right) return -1;
  // Find the middle of the array.
  const middle = Math.floor((left + right) / 2);
  // Set the potential match to this middle array's value
  const match = array[middle];
  // If the target is the value of the middle of array, return the index.
  if (target === match) {
    return middle;
  }
  // If the target is larger than the middle of the array, continue the search
  // on the first half of the divided array.
  else if (target < match) {
    return searchHelper(array, target, left, middle - 1);
  }
  // If the target is larger than the middle of the array, continue the search
  // on the second half of the divided array.
  else {
    return searchHelper(array, target, middle + 1, right);
  }
}

// Second Solution
// Time Complexity: O(log(n)) || Space Complexity: O(1)
export function binarySearch2(array: number[], target: number): number {
  // Set the pointers
  let left = 0;
  let right = array.length - 1;

  // Use while loop to check if left is less than or equal to right.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const match = array[middle];
    if (target == match) {
      return middle;
    }
    // Instead of recursively calling the function, just update the pointers.
    else if (target < match) {
      right = middle - 1;
    } else left = middle + 1;
  }
  return -1;
}
