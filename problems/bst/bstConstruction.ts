/**
 * BST Construction - Medium
 *
 * Write a BST class for a Binary search tree. The class should support:
 *  - Inserting values with the insert method.
 *  - Removing values with the remove method; should only remove the first
 *    instance of a given value.
 *  - Searching for values with the contains method.
 *
 * You can't remove values from a single-node tree. Calling the remove
 * method on a single-node tree should do nothing.
 *
 * Each BST node has an integer `value`, and a `left` and `right` child node.
 * A node is valid BST node if and only if it satisfies the BST property:
 *  - its value is strictly greater than the values of every node
 *    to its left;
 *  - its value is less than or equal to the values of every node
 *    to its right;
 *  - its children nodes are either valid BST nodes themselves or null
 *
 * Sample Usage
 * Assume the following BST has been created:
 *
 *        10
 *      /    \
 *     5      15
 *    / \    /  \
 *   2   5  13  22
 *  /         \
 * 1          14
 *
 * insert(12):
 *        10
 *      /    \
 *     5      15
 *    / \    /  \
 *   2   5  13  22
 *  /      /  \
 * 1      12  14
 *
 * remove(10):
 *        12
 *      /    \
 *     5      15
 *    / \    /  \
 *   2   5  13  22
 *  /         \
 * 1          14
 *
 * contains(15): true
 */

// Average Time Complexity: O(log(n)) || Space Complexity: O(1)
// Worst Time Complexity: O(n) || Space Complexity: O(1)

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    // We are going to check the value vs the current nodes value
    // If it is less than the current node, eliminate the right side.
    // If it is higher, eliminate the left side.
    // Set the node to the left or right node.
    // Repeat the process until you reach a 'null' value at the left/right
    let current: BST = this;
    while (true) {
      if (value < current.value) {
        if (current.left == null) {
          current.left = new BST(value);
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right == null) {
          current.right = new BST(value);
          break;
        } else {
          current = current.right;
        }
      }
    }
    return this;
  }

  contains(value: number) {
    // We are going to check the value vs the current nodes value
    // If it is less than the current node, continue down the right path.
    // If it is higher than the current node, continue down the left.
    // Repeat down the tree until you reach a number lower than the value.
    // If you have found the value, return true. Else return false.
    let current: BST | null = this;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else return true;
    }
    return false;
  }

  remove(value: number, parent: BST | null = null): BST {
    // Use the same logic to find the node.
    // If the node has no children, replace the previous nodes pointer to null.
    // If the node has one child, replace the node to remove with the child.
    // If the node has two children, grab the smallest value in the right
    // subtree of that node and replace with that.
    // Finally replace the leaf with null
    let current: BST | null = this;
    while (current !== null) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        // Two children case
        if (current.left !== null && current.right !== null) {
          current.value = current.right.getMinValue();
          // Current node value = smallest value of right sub
          current.right.remove(current.value, current);
        }
        // Is root node case
        else if (parent == null) {
          if (current.left !== null) {
            current.value = current.left.value;
            current.right = current.left.right;
            current.left = current.left.left;
          } else if (current.right !== null) {
            current.value = current.right.value;
            current.left = current.right.left;
            current.right = current.right.right;
          }
          // If the BST is only one node
          else {
          }
        }
        // Has parent node case
        else if (parent.left == current) {
          if (current.left !== null) {
            parent.left = current.left;
          } else parent.left = current.right;
        } else if (parent.right == current) {
          if (current.left !== null) {
            parent.right = current.left;
          } else parent.right = current.right;
        }
        break;
      }
    }
    return this;
  }
  getMinValue() {
    let current: BST = this;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}
