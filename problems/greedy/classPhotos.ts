/**
 * Class Photos - Easy
 *
 * It's photo day at the local school, and you're the photographer.
 * The class you'll be photographing has an even number of students.
 * All students are wearing a red or blue shirt. Half red, half blue.
 * You're responsible for arranging the students in two rows, before taking
 * the photo. Each row should contain the same number of students and should
 * adhere to following guidelines:
 * - All students wearing red must be in same row.
 * - All students wearing blue shirts must be in the same row.
 * - Each student in the back row must be taller than the student directly
 * in front of them.
 *
 * You are given two input arrays: one containing heights of students
 * with red shirts. One containing heights of students in blue shirts.
 * The arrays will always have the same length. Each height will be positive.
 *
 * Write a function that returns whether or not a class photo can be taken.
 *
 * Note: you can assume that each class has at least 2 students.
 *
 * Sample Input:
 * redShirtHeights = [5, 8, 1, 3, 4]
 * blueShirtHeights = [6, 9, 2, 4, 5]
 *
 * Sample Output
 * true // Place all students with blue shirts in the back row.
 */

// Time Complexity: O(n) || Space Complexity: O(1)

export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  // Sort the input arrays by height.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  // Initialize a counter
  let counter = 0;

  // If the red shirts have a taller person at index 0
  // they will be in the back and compare all heights to the front row.
  if (redShirtHeights[0] < blueShirtHeights[0]) {
    for (let i = 0; i < redShirtHeights.length; i++) {
      // If the person in the back is taller than their counterpart in front
      // increase the counter.
      if (redShirtHeights[i] < blueShirtHeights[i]) {
        counter++;
      }
    }
  }
  // Do the same for blue shirts.
  else {
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (redShirtHeights[i] > blueShirtHeights[i]) {
        counter++;
      }
    }
  }
  // If the counter is equal to the length of array, they will all be
  // taller and return true. If the numbers differ, there will be a taller
  // person in the front row and return false.
  return counter == redShirtHeights.length;
}

// Time Complexity: O(nlog(n)) || Space Complexity: O(1)

export function classPhotos2(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  // Sort Arrays by height from tallest to shortest.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  // If red shirt is taller, set variable to 'red' else 'blue'
  const shirtColor = redShirtHeights[0] < blueShirtHeights[0] ? 'red' : 'blue';

  // Iterate through the array
  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];

    // Using the previous variable to determine the back row, check heights
    // If one of the cases is false, break and return false.
    if (shirtColor === 'red') {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }

  return true;
}
