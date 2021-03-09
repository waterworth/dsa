/**
 * Longest Palindromic Substring - Medium
 *
 * Write a function that, given a string, returns it's longest palindromic
 * substring. A palindrome is defined as a string that's written the same
 * forward and backward. Note that single character strings are palindromes.
 *
 * Sample Input
 * string = 'abaxyzzyxf'
 *
 * Sample Output
 * 'xyzzyx'
 */

// Time Complexity: O(n^2) || Space Complexity: O(n)

export function longestPalindromicSubstring(string: string) {
  let currentLongest = [0, 1];

  for (let i = 1; i < string.length - 1; i++) {
    // Have to search for both odd and even cases
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    // Set the longest subarray at this index to the odd length longest palindrome or even length longest.
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    // Set the string wide longest palindrome to the current longest if it's larger
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }

  return string.slice(currentLongest[0], currentLongest[1]);
}

// Palindrome check
function getLongestPalindromeFrom(
  string: string,
  leftIndex: number,
  rightIndex: number
) {
  while (leftIndex >= 0 && rightIndex < string.length) {
    if (string[leftIndex] !== string[rightIndex]) break;
    leftIndex--;
    rightIndex++;
  }
  return [leftIndex + 1, rightIndex];
}
