/**
 * BST Traversal - Medium
 *
 * Write three functions that take in a Binary Search Tree and an empty array. Traverse the BST, add its node's
 * values to the input array and return that array. The three functions should traverse the BST using in-order,
 * pre-order and post-order tree traversal techniques.
 *
 * Each BST node contains:
 * - `value` <Number>
 * - `left` <BST | null>
 * - `right` <BST | null>
 *
 * A node is considered valid if and only if its value is greater than the values of every node to its left.
 * The value must also be less than or equal to the values of every node to its right. The child nodes must
 * also be valid BST nodes or null.
 *
 * Sample Input
 * tree=  10
 *      /    \
 *     5      15
 *    / \       \
 *   2   5       22
 *  /
 * 1
 *
 * array= []
 *
 * Sample Output
 * inOrderTraverse: [1,2,5,5,10,15,22]
 * preOrderTraverse: [10,5,2,1,5,15,22]
 * postOrderTraverse: [1,2,5,5,22,15,10]
 */

// Time Complexity: O(n) || Space Complexity: O(n)

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

export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    // Call the function on the left subtree which will traverse through
    // down to the left most leaf. and then work its way up.
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
