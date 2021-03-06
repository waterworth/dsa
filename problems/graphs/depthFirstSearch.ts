/**
 * Depth First Search - Easy
 * You're given a `Node` class that as a `name` and an array of optional `children` nodes.
 * When put together, nodes form an acyclic tree-like strucutre.
 *
 * Implement the `depthFirstSearch` method on `Node` class, which takes in an empty array,
 * traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right),
 * stores all of the nodes' names in the input array, and returns it.
 *
 * Sample Input
 *
 * graph =   A
 *        /  |  \
 *       B   C   D
 *      / \     / \
 *     E   F   G   H
 *        / \   \
 *       I   J   K
 *
 *
 * Sample Output
 * ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
 */

// Time Complexity: O(v+e) || Space Complexity: O(v)

export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {
    // Append the name to the array.
    array.push(this.name);
    // Iterate through the children of the node.
    for (const child of this.children) {
      // Recursively call the function to check all subnodes.
      child.depthFirstSearch(array);
    }
    return array;
  }
}
