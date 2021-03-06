/**
 * Remove Duplicates from Linked List - Easy
 *
 * You're given the head of a singly linked list, whose nodes are sorted
 * in order from lowest to highest.
 *
 * Write a function that returns a modified version of the linked list that
 * doesn't contain any node with duplicate values. The linked list should be
 * modified in place and the modified linked list should still have nodes
 * sorted by value.
 *
 * Each LinkedList node has an integer `value` as well as a `next` node pointing
 * to the next node in the list or null if tail.
 *
 * Sample Input
 * linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
 *
 * Sample Output
 *
 * 1 -> 3 -> 4 -> 5 -> 6
 */

// Time Complexity: O(n) || Space Complexity: O(1)

export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  // Create pointer for current node, starting at head.
  let currentNode: LinkedList | null = linkedList;

  // While loop for when the current node has a next node.
  while (currentNode !== null) {
    // Pointer for next node.
    let nextUnique: LinkedList | null = currentNode.next;
    // If the next node isnt the tail, and the next node is equal to the
    // current node, move forward in the list to the next node.
    while (nextUnique !== null && nextUnique.value === currentNode.value) {
      nextUnique = nextUnique.next;
    }
    // Set the current node to the next unique node and repeat.
    currentNode.next = nextUnique;
    currentNode = nextUnique;
  }
  return linkedList;
}

/**
 * This can be brute forced with a hash map, but this solution is the
 * optimal solution for time and space complexity.
 */
