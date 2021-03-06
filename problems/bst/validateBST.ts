/**
 * Validate BST - Medium
 *
 * Write a function that takes in a potentially invalid BST and returns
 * a boolean representing whether the BST is valid.
 *
 * `BST` node must have :
 *  - `value`: number
 *  - `left`: BST | null
 *  - `right`: BST | null
 *
 * A node is valid only if its value is greater than the values of every
 * node to its left and less than or equal to all nodes to its right.
 *
 * Sample Input
 *
 * tree = 10
 *      /    \
 *     5      15
 *    / \    /  \
 *   2   5  13  22
 *  /         \
 * 1          14
 *
 * Sample Output
 * true
 */

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  return helper(tree, -Infinity, Infinity);
}

function helper(tree: BST | null, minValue: number, maxValue: number): boolean {
  if (tree == null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftValid = helper(tree.left, minValue, tree.value);
  return leftValid && helper(tree.right, tree.value, maxValue);
}

// Check if left value is less than right value

// If left tree check if child values are less than
// parent value.

// If right, check if child value is larger than
// parent value.
