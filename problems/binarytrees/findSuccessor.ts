/**
 * Find Successor - Medium
 *
 * Write a function that takes in a binary tree (where nodes have a
 * pointer to their parent node) as well as a node contained in that tree
 * and return the given node's successor.
 *
 * A node's successor is the next ndoe to be visited(immediately after
 * the given node) when traversing its tree using the in-order tree
 * traversal technique. A node has no successor if it's the last node
 * to be visited in the traversal.
 *
 * Sample Input
 * tree =  1
 *      /    \
 *     2      3
 *    / \
 *   4   5
 *  /
 * 6
 * node = 5
 *
 * Sample Output
 * 1
 * 6 -> 4 -> 2 -> 5 -> 1 -> 3
 *
 * */

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  const inOrderTree = inOrderTraverse(tree);
  for (let i = 0; i < inOrderTree.length; i++) {
    if (inOrderTree[i] !== node) continue;
    if (i === inOrderTree.length - 1) return null;
    return inOrderTree[i + 1];
  }
}

export function inOrderTraverse(
  node: BinaryTree | null,
  order: BinaryTree[] = []
) {
  if (node === null) return order;
  inOrderTraverse(node.left, order);
  order.push(node);
  inOrderTraverse(node.right, order);
  return order;
}
