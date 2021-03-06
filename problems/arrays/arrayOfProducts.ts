/**
 * Array of Products - Medium
 *
 * Write a function that takes in a non empty array of integers and returns
 * an array of the same length, where each element in the output array
 * is equal to the product of every other number in the input.
 *
 * The value at output[i] is equal to the product of every number in
 * input array other than input[i].
 *
 * Sample Input
 * array = [5, 1, 4, 2]
 *
 * Sample Output
 * [8, 40, 10, 20]
 */

// Time Complexity: O(n) || Space Complexity: O(n)

export function arrayOfProducts(array: number[]) {
  const products: number[] = new Array(array.length).fill(1);
  const leftProducts: number[] = new Array(array.length).fill(1);
  const rightProducts: number[] = new Array(array.length).fill(1);

  let leftRunning = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunning;
    leftRunning *= array[i];
  }

  let rightRunning = 1;
  for (let i = array.length - 1; i > -1; i--) {
    rightProducts[i] = rightRunning;
    rightRunning *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}
