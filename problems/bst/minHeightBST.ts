/**
 * Min Height BST - Medium
 *
 * Write a function that takes in a non-empty sorted array of distinct
 * integers, constructs a BST from the integers, and returns the root
 * of the BST.
 *
 * The function should minimize the height of the BST.
 *
 * Sample Input
 * array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
 *
 * Sample Output
 *
 *       10
 *    /      \
 *   2       14
 *  / \     /  \
 * 1   5   13  15
 *      \        \
 *       7       22
 */

// Time Complexity: O(nlog(n)) || Space Complexity: O(n)

export function minHeightBst(array: number[]) {
  return construct(array, null, 0, array.length - 1);
}

// 1. Get Middle of array
// 2. Recursively do same for left half and right half.
//    a) Get the middle of the left half and make it the left child
//    b) Get the middle of the right half and make it the right child

function construct(
  array: number[],
  bst: BST | null,
  start: number,
  end: number
) {
  if (end < start) return;
  let middle = Math.floor((start + end) / 2);
  const root = array[middle];
  if (bst === null) {
    bst = new BST(root);
  } else {
    bst.insert(root);
  }
  // Handle left side of tree
  construct(array, bst, start, middle - 1);
  // Handle right side of tree
  construct(array, bst, middle + 1, end);
  return bst;
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
