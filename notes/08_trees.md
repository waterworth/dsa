# Trees

## Tree

- A data structure that consists of nodes, each with a value and pointers to child nodes, which recursively form **subtrees**.
- The first noode is called the **root** of the tree.
- Nodes without a child node are referred to as **leaves**.
- Paths between nodes are called **branches**.
- The **height** of the tree is the length of the longest branch.
- **Depth** of a tree node is it's distance from the root. Also known as **level** in the tree.

- A tree is **connected, directed** and **acyclic**. Has a single root node and all nodes have a single parent.

- Many types of trees such as, **binary trees**, **heaps**, **tries**.

## Binary Tree

- A tree whose nodes have up to **two** child nodes.
- Many of the operations have a logarithmic time complexity making it an attractive way to structure data.

## K-ary tree.

- A tree whose nodes have up to **k** child nodes.
- A binary tree is a k-ary tree where k == 2.

## Perfect Binary Tree

- A binary tree whose interior nodes all have two child nodes and whose lead nodes all have the same depth.

```js
// Example of a perfect binary tree.

                   1
         /                   \
        2                     3
    /        \            /        \
   4          5          6          7
 /  \      /     \     /    \    /    \
8    9    10    11    12    13   14   15
```

## Complete binary tree

- A binary tree that is _almost_ perfect.
- Interior nodes all have two children, but leaf nodes don't have the same depth.
- The nodes in the last level of a complete binary tree as as far left as possible.

```js
// Example of complete binary tree
             1
      /            \
      2              3
   /     \          /  \
  4       5        6    7
 /  \
8    9
```

```js
// The following **isnt** complete as the nodes in last level
// aren't as far left as possible.

          1
       /     \
      2       3
    /   \   /   \
    4   5   6   7
       /     \
      8       9
```

## Balanced Binary Tree

- A binary tree whose nodes all have left and right subtrees whose heights differ by no more than 1.
- Logarthmic time complexity of operations is maintained.
- ie. Inserting a node at the bottom of the following _imbalanced_ binary tree's left subtree, would clearly not be a logarithmic operation, since it would involve traversing most of the tree's nodes

```js
// Imbalanced
         1
        / \
       2   3
      /
     4
    /
   8
  /
10

// Balanced
          1
      /      \
     2        3
   /   \    /  \
   4    5  6    7
 /   \         /
10   9        8

```

## Full binary tree

- A binary tree whose nodes all have either two child nodes or no child nodes.

```js
// Full Binary Tree
   1
  / \
 2   3
    /  \
   6    7
  / \
 8   9
```
