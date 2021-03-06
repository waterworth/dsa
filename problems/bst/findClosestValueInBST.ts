/**
 * Find Closest Value in BST - Easy
 *
 * Write a function that takes in a Binary Search Tree and a target
 * integer value and returns the closest value to that target value
 * contained in the BST.
 *
 * You can assume that there will only be one closest value.
 *
 * Each BST node has an integer `value`, a `left` and `right` child node.
 * A node is valid BST node only if it satisfies the BST property:
 * 1. Tt's `value` is strictly greater than the values of every node
 * to its left.
 * 2. It's value is less than or equal to the values of every node
 * to its right.
 * 3. It's child nodes are either valud BST nodes or `null`
 *
 *
 * Sample Input
 *
 * tree =    10
 *         /    \
 *        5      15
 *       / \    /  \
 *      2   5  13  22
 *     /        \
 *    1         14
 *
 *
 * Sample Output
 * 13
 */

// Average: Time Complexity = O(log(n)) || Space Complexity = O(1)
// Worst:   Time Complexity = O(n)      || Space Complexity = O(1)

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

export function findClosestValueInBst(tree: BST, target: number) {
  return helper(tree, target, tree.value);
}

function helper(tree: BST | null, target: number, closest: number) {
  // Set the current node to the root.
  let currentNode = tree;
  while (currentNode !== null) {
    // Check if the potential difference is lower than the current min difference
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    // If the target is lower than the current value, we can ignore the right tree.
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    }
    // Similarly, if the target is greater than the current value,
    //  we can ignore the right tree.
    else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}
