/**
 * Breadth-first Search - Medium
 *
 * You're given a Node class that has a name and an array of optional children nodes.
 * When put together, nodes form an acyclic tree-like structure.
 *
 * Implement the breadthFirstSearch method on the Node class, which takes in an empty array,
 * traverses the tree using the Breadth-first Search approach (specifically navigating the tree from
 * left to right), stores all of the nodes' names in the input array, and returns it.
 *
 * Sample Input
 *
 * graph =  A
 *       /  |  \
 *      B   C   D
 *     / \     / \
 *    e   f   g   h
 *       / \   \
 *      i   j   k
 *
 * Sample Output
 * ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
 */

// Time Complexity: O(v+e) || Space Complexity: O(v)

export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];
    while (queue.length > 0) {
      const current = queue.shift()!;
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

// Use a queue.
// 1. Set the root to current.
// 2. Add current name to array.
// 3. Add currents children to queue.
// 4. Pop first node out of queue and set to current.
// 5. Go to step 2.
