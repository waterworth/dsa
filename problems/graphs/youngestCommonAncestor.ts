/**
 * Youngest Common Ancestor - Medium
 *
 * You're given three inputs, all of which are instances of an `AncestralTree` class that
 * have an ancestor property pointing to their youngest ancestor. The first input is the top
 * ancestor in an ancestral tree (i.e. the only instance that has no ancestor -- its `ancestor`
 * property poitns to null), and the other two inputs are descendants in the ancestral tree.
 *
 * Write a function that returns theyoungest common ancestor of the two descendants.
 *
 * Sample Input
 * topAncestor = node A
 * descendantOne = node E
 * descendantTwo = node I
 *
 *         A
 *      /     \
 *     B       C
 *    / \     / \
 *   D   E   F   G
 *  / \
 * H   I
 *
 * Sample Output
 * node B
 */

// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  // Write your code here.
  return topAncestor;
}

// DFS both descendants, store branch in array.
// Go through the arrays and find the last matching index
