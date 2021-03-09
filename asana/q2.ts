/**
 * Sum of Strings
 *
 * You are given two numerical strings, and your task is to return the sum of their digits as described below.
 *
 * Add every ith digit of the first string to the ith digit of the second string, both counterd from the end.
 * If the ith digit of one of the strings is absent, the sum will be the ith digit of the other string.
 * Return a string of those sums concatenated with other.
 *
 * Example:
 * for a = '99' and b='99', the output should be sumOfStrings(a,b) = 1818
 *
 * for a = '11' and b = '9', the output should be sumOfStrings(a,b) = '110'
 */

export function sumOfStrings(a: string, b: string): string {
  // Determine the longest string to iterate through
  const biggest = a.length > b.length ? a.length : b.length;

  // Establish a queue to store all sums.
  let queue = [];

  // Iterate through the array backwards
  for (let i = biggest - 1; i > -1; i--) {
    let sum;
    // If the index in a is undefined, just set the sum to the same index in b
    if (a[i] == undefined) {
      sum = parseInt(b[i]);
    }
    // Similar to above, just for b is undefined.
    if (b[i] == undefined) {
      sum = parseInt(a[i]);
    }
    // Sum the two digits together
    else {
      sum = parseInt(a[i]) + parseInt(b[i]);
    }

    // Push the sum to the queue
    queue.push(sum);
  }

  // Join the queue to obtain the final result
  return queue.join('');
}

sumOfStrings('99', '99');
sumOfStrings('11', '9');
