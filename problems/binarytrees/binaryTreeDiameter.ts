/**
 * Binary Tree Diameter - Medium
 *
 * Write a function that takes in a Binary Tree and returns its diameter.
 * The diameter of a binary tree is defined as the length of its longest
 * path, even if that path doesn't pass through the root of the tree.
 *
 * A path is a collection of connected nodes in a tree, where no node is
 * connected to more than two other nodes. The length of a path is
 * the number of edges between the path's first node and its last.
 *
 * Sample Input
 * tree =  1
 *        / \
 *       3   2
 *      / \
 *     7   4
 *    /     \
 *   8       5
 *  /         \
 * 9           8
 *
 * Sample Output
 * 6
 *
 */

// Time Complexity: O(n) || Space Complexity: O(n)

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function binaryTreeDiameter(tree: BinaryTree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree: BinaryTree | null): TreeInfo {
  // Base case for when you're at a leaf.
  if (tree === null) {
    return new TreeInfo(0, 0);
  }
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  const longestThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiamSoFar = Math.max(leftTreeInfo.diameter + rightTreeInfo.diameter);
  const currentDiam = Math.max(longestThroughRoot, maxDiamSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiam, currentHeight);
}

export class TreeInfo {
  diameter: number;
  height: number;

  constructor(diameter: number, height: number) {
    this.diameter = diameter;
    this.height = height;
  }
}
