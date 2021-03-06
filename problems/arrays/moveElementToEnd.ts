/**
 * Move Element to End - Medium
 *
 * You're given an array of integers and an integer.
 * Write a function that moves all instances of that integer to the end
 * of the array and return said array.
 *
 * The function should perform this in place(i.e. it should mutate the
 * input array) and doesn't need to maintain the order of other integers.
 *
 * Sample Input
 * array = [2, 1, 2, 2, 2, 3, 4, 2]
 * toMove = 2
 *
 * Sample Output
 * [1, 3, 4, 2, 2, 2, 2, 2]
 */

// Time Complexity: O(n) time || Space Complexity: O(1)

export function moveElementToEnd(array: number[], toMove: number) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;
}

// Temp store the last value, set the last value to the desired value.
// Set the initial index that the desired was at to the last value.
function swap(i: number, j: number, array: number[]) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
