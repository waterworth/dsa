/**
 * Single Cycle Check - Medium
 *
 * You're given an array of integers where each integer represents a jump
 * of its value in the array. For instance, the integer `2` represents a jump
 * of two indices froward in the array; the integer -3 represents a jump
 * of three indices backward in the array.
 *
 * If a jump spills past the array's bounds, it wraps over to the other side.
 * For instance a jump of -1 at index 0, brings us to the last index in the array.
 *
 * Write a function that returns a boolean representing whether the jumps
 * in the array form a single cycle.
 *
 * A single cycle occurs if, starting at any index in the array and following
 * the jumps, every element in the array is visited exactly once before landing
 * back on the starting index.
 *
 * Sample Input
 * array = [2, 3, 1, -4, -4, 2]
 *
 * Sample Output
 * true
 */

// Time Complexity: O(n) || Space Complexity: O(1)

export function hasSingleCycle(array: number[]) {
  // Create counter to store the elements visited.
  let counter = 0;
  let currentIndex = 0;

  // While the amount of elements visited is less than the length of the array.

  while (counter < array.length) {
    // If the current index is back at 0 and its not the first cycle,
    // We know that all the elements havent been visited, as we're in a loop
    // that doesn't include all the elements.
    if (counter > 0 && currentIndex === 0) return false;
    counter++;
    currentIndex = getNextIndex(currentIndex, array);
  }
  return currentIndex === 0;
}

function getNextIndex(currentIndex: number, array: number[]) {
  const jump = array[currentIndex];
  const next = (currentIndex + jump) % array.length;
  return next >= 0 ? next : next + array.length;
}
