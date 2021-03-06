/**
 * Invert Binary Tree - Medium
 *
 * Write a function that takes in a Binary Tree and inverts it.
 * The function should swap every left node in the tree for its
 * corresponding right node.
 *
 * Sample Input
 *
 * tree =   1
 *       /    \
 *      2      3
 *     / \   /  \
 *    4   5  6   7
 *   / \
 *  8   9
 *
 * Sample Output
 *  tree =  1
 *       /    \
 *      3      2
 *     / \   /  \
 *    7   6  5   4
 *              / \
 *             9   8
 */

// Time Complexity: O(n) || Space Complexity: O(d) where d = depth of tree

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function invertBinaryTree(tree: BinaryTree | null) {
  if (tree !== null) {
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
  return tree;
}

// 1. Store the left value in temp variable.
// 2. Set left value to right value.
// 3. Set right value to temp.
// Recurse
