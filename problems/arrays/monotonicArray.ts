/**
 * Monotonic Array - Medium
 *
 * Write a function that takes in an array of integers and returns a
 * boolean representing whether the array is monotonic.
 *
 * An array is said to be monotonic if its elements, from L -> R, are
 * entirely non-increasing or entirely non-decreasing.
 *
 * Non-increasing elements aren't necessarily exclusively decreasing;
 * they simply don't increase. Similarly, non-decreasing elements aren't
 * necessarily exclusively increasing; they simply don't decrease.
 *
 * Empty arrays and arrays of length 1 are monotonic.
 *
 * Sample Input
 * array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
 *
 * Sample Output
 * true
 */

export function isMonotonic(array: number[]) {
  if (array.length <= 2) return true;

  // Set the direction for the array
  let direction = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (direction == 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction: number, previous: number, current: number) {
  const difference = current - previous;
  if (direction > 0) return difference < 0;
  return difference > 0;
}
