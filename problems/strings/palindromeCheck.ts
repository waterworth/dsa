/**
 * Palindrome Check - Easy
 *
 * Write a function that takes in a non-empty string and that returns
 * a boolean representing whether the string is a palindrome.
 *
 * Sample Input
 * string = 'abcdcba'
 *
 * Sample Output
 * true
 */

//Time Complexity: O(n) || Space Complexity: O(1)

export function isPalindrome(string: string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;
  while (leftIndex < rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
}

/**
 *
 * This works but is expensive.
 *
 * export function isPalindrome(string: string) {
 *     return string.split('').reverse().join('') == string
 * }
 *
 */
