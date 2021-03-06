/**
 * Longest Peak - Medium
 *
 * Write a function that takes in an array of integers and returns
 * the length of the longest peak in the array.
 *
 * A peak is defined as adjacent integers in the array that are strictly
 * increasing until they reach a tip, (the highest value in peak), at which
 * point they become strictly decreasing. At least 3 integers are required
 * to form a peak.
 *
 * Sample Input
 * array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
 *
 * Sample Output
 * 6
 */

export function longestPeak(array: number[]) {
  let length = 0;
  let i = 0;

  while (i < array.length - 1) {
    //Check if the index is a peak.
    let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i += 1;
      continue;
    }
    // Since we know that the index to -1 is lower, set the left to -2.
    let left = i - 2;
    // Check, while still in bound of array, if the current left index is
    // lower than index to its right
    while (left >= 0 && array[left] < array[left + 1]) {
      left -= 1;
    }
    // Do the same for the descending side of the peak.
    let right = i + 2;
    while (right <= array.length && array[right] < array[right - 1]) {
      right += 1;
    }

    // Get the current length of this peak, and compare it to largest so far.
    let currentLength = right - left - 1;
    length = Math.max(length, currentLength);
    // Set the start of the next peak as the most right index in the current peak.
    i = right;
  }
  return length;
}
