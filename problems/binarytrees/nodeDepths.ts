/**
 * Node Depths - Easy
 *
 * Write a function that takes in a BT and returns the sum of it's nodes depths.
 *
 * Each BT node has an integer value, a left child node and a right child node.
 * Child nodes can be a BT themselves, or null.
 *
 * Sample Input
 *
 * tree =     1
 *          /    \
 *       2         3
 *     /   \     /   \
 *    4     5   6     7
 *  /   \
 * 8     9
 *
 * Sample Output
 * 16
 */

// Time Complexity: O(n) || Space Complexity: O(h) where n = number of nodes and h = height of tree.

export function nodeDepths(root: BinaryTree | null, depth = 0): number {
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

// This is the class of the input binary tree.
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
