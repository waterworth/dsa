/**
 * Find Three Largest Numbers - Easy
 *
 * Write a function that takes in an array of at least 3 integers
 * and without sorting the input array, return a sorted array of the
 * three largest integers in the input array.
 *
 * The function should return duplicate integers if necessary.
 *
 * Sample Input
 * array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
 *
 * Sample Output
 * [18, 141, 541]
 */

// Time Complexity: O(n) time || Space Complexity: O(1)

export function findThreeLargestNumbers(array: number[]) {
  // Create array to hold three largest numbers. Initialized with null.
  const output: Array<number | null> = [null, null, null];

  // Iterate through the given array and call the update function
  for (const num of array) {
    updateLargest(output, num);
  }
  return output;
}

function updateLargest(output: Array<number | null>, num: number) {
  // Check if the index of output is null OR larger than the number.
  // If true, call the shift and update function to modify the array.
  if (output[2] === null || output[2] < num) {
    shiftAndUpdate(output, num, 2);
  } else if (output[1] === null || output[1] < num) {
    shiftAndUpdate(output, num, 1);
  } else if (output[0] === null || output[0] < num) {
    shiftAndUpdate(output, num, 0);
  }
}

function shiftAndUpdate(
  array: Array<number | null>,
  num: number,
  index: number
) {
  for (let i = 0; i <= index; i++) {
    // If we're at the index we passed in, update the array to desired number.
    if (i === index) {
      array[i] = num;
    }
    // Otherwise, shift all current values to the left of the change.
    else {
      array[i] = array[i + 1];
    }
  }
}
