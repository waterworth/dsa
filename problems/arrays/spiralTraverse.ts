/**
 * Spiral Traverse - Medium
 *
 * Write a function that takes in an n x m two-dimensional array (that can
 * be square-shaped when n == m) and returns a one-dimensional array
 * of all the array's elements in spiral order.
 *
 * Spiral order starts at the top left corner of the two-dimensional array,
 * goes to the right, and proceeds in a spiral pattern all the way until
 * every element has been visited.
 *
 * Sample Input
 * array = [
 * [1, 2, 3 , 4],
 * [12, 13, 14, 5],
 * [11, 16, 15, 6],
 * [10, 9, 8, 7],
 * ]
 *
 * Sample Output
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */

// Time Complexity: O(n) || Space Complexity: O(n)

export function spiralTraverse(array: number[][]) {
  const output: number[] = [];
  let startingRow = 0;
  let startingCol = 0;
  let endingRow = array.length - 1;
  let endingCol = array[0].length - 1;

  while (startingRow <= endingRow && startingCol <= endingCol) {
    // Push the top row of spiral to output
    for (let col = startingCol; col <= endingCol; col++) {
      output.push(array[startingRow][col]);
    }

    for (let row = startingRow + 1; row <= endingRow; row++) {
      output.push(array[row][endingCol]);
    }

    for (let col = endingCol - 1; col >= startingCol; col--) {
      if (startingRow === endingRow) break;
      output.push(array[endingRow][col]);
    }

    for (let row = endingRow - 1; row > startingRow; row--) {
      if (startingCol === endingCol) break;
      output.push(array[row][startingCol]);
    }

    startingRow++;
    endingRow--;
    startingCol++;
    endingCol--;
  }
  return output;
}
