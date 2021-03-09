/**
 * Generate Document - Easy
 *
 * You're given a string of available characters and a string representing a document that you
 * need to generate. Write a function that determines if you can generate the document using
 * the available characters. If you can, return true, else return false.
 *
 * You can only generate the document if the frequency of unique characters in the characters string
 * is greater than or equal to the frequency of unique characters in the document string.
 * The document that you need to create may contain any characters, including special characters,
 * capital letters, numbers and spaces.
 *
 * Sample Input
 * characters = 'Bste!hetsi ogEAxpelrt x '
 * document = 'AlgoExpert is the Best!'
 *
 * Sample Output
 * true
 */

// Time Complexity: O(n+m) || O(c) space

export function generateDocument(characters: string, document: string) {
  const characterCounts: { [characters: string]: number } = {};
  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;
    characterCounts[character]++;
  }
  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;
    characterCounts[character]--;
  }
  classMap;
  return true;
}

// Hashmap
