/**
 * Branch Sums - Easy
 *
 * Write a function that takes in a binary tree and
 * returns a list of its branch sums, ordered from leftmost
 * to rightmost.
 *
 * A branch sum is the sum of all values in a BT branch.
 *
 * Each `BinaryTree` node has:
 * an integer `value`,
 * a `left` and `right` child node.
 *
 * Child nodes can be `BinaryTree` nodes or null.
 *
 *
 * Sample Input
 *
 * tree =   1
 *        /   \
 *       2      3
 *     /  \    /  \
 *    4    5  6    7
 *   / \   /
 *  8   9 10
 *
 * Sample output
 * [15, 16, 18, 10, 11]
 */

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

export function branchSums(root: BinaryTree) {
  const output: number[] = [];
  calcBranchSums(root, 0, output);
  return output;
}

// Recursive function to calculate sums using DFS
function calcBranchSums(
  node: BinaryTree | null,
  sum: number,
  output: number[]
) {
  // Short circuit if there isnt a node.
  if (!node) return;

  // Init a running sum for the branch
  const runningSum = sum + node.value;
  // If the node has no children, add the running sum to the array and return.
  if (!node.left && !node.right) {
    output.push(runningSum);
    return;
  }
  // Recurse through the function on the child nodes.
  calcBranchSums(node.left, runningSum, output);
  calcBranchSums(node.right, runningSum, output);
}
