/**
 * Frame Generator
 *
 * Given an integer n, your task is to create a square frame of size n, represented as an array of strings.
 * The frame should consist of empty space encloses by lines made of chartacters on all edges like this:
 *
 *  **************
 *  *            *
 *  *            *
 *  *            *
 *  *            *
 *  *            *
 *  *            *
 *  **************
 *
 *  Example
 *  - For n = 8 the output should be
 *
 *
 *
 */

function frameGenerator(n: number): string[] {
  // Create an output array of length n.
  const output: string[] = new Array(n);

  // Set the first and last indexes of the array to all asterisks.
  output[0] = '*'.repeat(n);
  output[output.length - 1] = '*'.repeat(n);

  // Loop through the remaining arrays indexes and fill with the wrapped spaces
  for (let i = 1; i < n - 1; i++) {
    output[i] = '*' + ' '.repeat(n - 2) + '*';
  }
  return output;
}
