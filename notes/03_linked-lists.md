# Linked Lists

## Singly Linked List

- Consists of nodes, each with a value and pointer to next node.
- Linked lists node's stored as `value` and `next`.

- First node is referred to as the **head** of the linked list.
- Last node, whose `next` property points to `null` is known as the **tail** of the linked list.

```js
// Example of a singly linked list where the nodes are integers.
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
```

- The head is typically exposed to users for easier access.
- Finding a node involves traversing through all nodes.
- Adding or removing nodes only involves overwriting the `next` pointer.

### Time Complexities

- Accessing the head: O(1)
- Accessing the tail: O(n)
- Accessing the middle node: O(n)
- Inserting/Removing the head: O(1)
- Inserting/Removing the tail: O(n) to access + O(1)
- Inserting/Removing the middle: O(n) to access + O(1)
- Searching for a value: O(n)

## Doubly Linked List

- Similar to **singly linked list** except each node also points to previous node. Commonly stored in `prev` property.
- Like the **tail** points to `null` in a singly linked list, the **head** points to `null` as well in a doubly linked list.

```js
// Example of doubly linked list that holds integers.
null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
```

- Exposes both the **head** and **tail** to the user.

### Time Complexities

- Accessing the head: O(1)
- Accessing the tail: O(1)
- Accessing the middle node: O(n)
- Inserting/Removing the head: O(1)
- Inserting/Removing the tail: O(1)
- Inserting/Removing the middle: O(n) to access + O(1)
- Searching for a value: O(n)

## Circular Linked List

- Linked list with no clear **head** or **tail** because the 'tail' points to the 'head'.
- Can be either a singly circular linked list or doubly circular linked list.
