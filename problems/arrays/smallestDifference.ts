/**
 * Smallest Difference - Medium
 *
 * Write a function that takes in two non-empty arrays of integers,
 * find the pair of numbers (one from each array) whose absolute differece
 * is closest to zero, and returns an array containing these two numbers,
 * with the number from the first array at index 0.
 *
 * Note that the absolute difference of two integers is the distance
 * between them on the real number line. i.e. the absolute difference of
 * -5 and 5 is 10. Absolute difference of -5 and -4 is 1.
 *
 * You can assume that there will only be one pair of numbers with the
 * smallest difference.
 *
 * Sample Input
 * arrayOne = [-1, 5, 10, 20, 28, 3]
 * arrayTwo = [26, 134, 135, 15, 17]
 *
 * Sample Output
 * [28, 26]
 */

// Time Complexity: O(nlog(n) + mlog(m)) || Space Complexity: O(1)
// where n = length of first array, m = length of second input

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Sort both arrays from lowest to highest.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  // Initialize all pointers and values
  let indexOne = 0;
  let indexTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair: number[] = [];
  // Do checks on the array values.
  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let first = arrayOne[indexOne];
    let second = arrayTwo[indexTwo];

    // Calculate difference from highest to lowest.
    // Increase the indexes.
    // If the current difference is smaller than smallest so far, make
    // this the new smallest.
    if (first < second) {
      current = second - first;
      indexOne++;
    } else if (first > second) {
      current = first - second;
      indexTwo++;
    } else {
      return [first, second];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
}

// This is the one i did, no help.
// Runs in O(n^2) time

export function smallestDifference2(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestSum = 100000;
  let output: number[] = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (Math.abs(arrayOne[i] - arrayTwo[j]) < smallestSum) {
        smallestSum = Math.abs(arrayOne[i] - arrayTwo[j]);
        output = [arrayOne[i], arrayTwo[j]];
      }
    }
  }

  return output;
}
