/**
 * Group Anagrams - Medium
 *
 * Write a function that takes in an array of strings and groups anagrams
 * together.
 *
 * anagrams are strings made up of exactly the same letters, where order
 * doesn't matter. For example `cinema` and `iceman` are anagrams.
 *
 * Function should return a list of anagram groups in no particular order.
 *
 * Sample Input
 * words = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']
 *
 * Sample Output
 * [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo']]
 */

export function groupAnagrams(words: string[]) {
  const anagrams: { [key: string]: string[] } = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}
