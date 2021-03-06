/**
 * Caesar Cipher Encryption - Easy
 *
 * Given a non-empty string of lowercase letters, and a non-negative integer
 * representing a key, write a function that returns a new string obtained
 * by shifting every letter in the input string by k positions in the
 * alphabet, where k is the key.
 *
 * Note that letters should 'wrap' around the alphabet, in other words,
 * `z` shifted by 1 returns `a`
 *
 * Sample Input
 * string='xyz'
 * key = 2
 *
 * Sample Output
 * string = 'zab'
 */

// Time Complexity: O(n) || Space Complexity: O(n)

export function caesarCipherEncryptor(string: string, key: number) {
  const newLetters = [];
  //
  const newKey = key % 26;

  //
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}

//
function getNewLetter(letter: string, key: number) {
  // Get the unicode value of the letter
  const newLetterCode = letter.charCodeAt(0) + key;
  // If the unicode value is outside of the lowercase bound.
  // Return the corresponding letter.
  // Else find the value at the modulo value of the character.
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}
