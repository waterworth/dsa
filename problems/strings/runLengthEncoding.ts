/**
 * Run-Length Encoding - Easy
 *
 * Write a function that takes in a non-empty string and return its
 * run-length encoding.
 *
 * Run-length encoding is a form of lossless data compression in which
 * runs of data are stored as a single data value and count, rather than
 * as the original run. 'AAA' would be run-length encoded as '3A'
 *
 * To make things more complicated, however, the input string can contain
 * all sorts of special characters, including numbers. Since encoded data
 * must be decodable, we can't naively run-length encode long runs.
 *
 * For example, the run 'AAAAAAAAAAAA' (12 A's) can't be naively encoded
 * as '12A' singe this string can be decoded as either 'AAAAAAAAAAAA' or
 * '1AA'. Long runs, (10 or more characters) should be encoded in a split fashion.
 * '9A3A'
 *
 *
 * Sample Input
 * string = 'AAAAAAAAAAAAABBCCCCDD'
 *
 * Sample Output
 * '9A4A2B4C2D'
 */

// Time Complexity: O(n) | Space Complexity: O(n)
// where n = length of string

export function runLengthEncoding(string: string) {
  const encodedString: string[] = [];
  let run = 1;

  for (let i = 1; i < string.length; i++) {
    const current = string[i];
    let previous = string[i - 1];

    if (current !== previous || run === 9) {
      encodedString.push(run.toString());
      encodedString.push(previous);
      run = 0;
    }
    run++;
  }
  encodedString.push(run.toString());
  encodedString.push(string[string.length - 1]);

  return encodedString.join('');
}

// This runs slower because string concatenation runs in O(mn) time

export function runLengthEncoding2(string: string) {
  let count = 1;
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
      if (count == 9) {
        newString += count + string[i];
        count = 0;
      }
    } else {
      if (count !== 0) {
        newString += count + string[i];
        count = 1;
      }
      if (count == 0) {
        count = 1;
      }
    }
  }
  return newString;
}
