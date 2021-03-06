# Hash Maps

## Hash Table

- A data strucutre that provides fast insertion, deletion and lookup of key/value pairs.
- Uses **dynamic array** of **linked lists** to efficiently store key/value pairs.
- When inserting, a hash function first maps the key ( typically a string) to an integer value, and by extension, to an index in the underlying array.
- The value associated is added to the linked listed stored at the index in the dynamic array and a reference to the key is stored with the value.

- Hash tables rely on highly optimized hash functions to minimixe number of **collisions** that occur when storing values: cases where two keys map to the same index.

```js
// Example of what a hash table might look like under the hood.

[
    0: (value1, key1) -> null
    1: (value2, key2) -> (value3, key3) -> (value4, key4)
    2: (value5, key5) -> null
    3: (value6, key6) -> null
    4: null
    5: (value7, key7) -> (value8, key8)
    6: (value7, key9) -> null
]

```

- In the table above, keys 2 3 and 4 collided by all being hashed to 1.
- Keys 7 and 8 collide by being hashed to 5.

## Time complexities

- Inserting a key/value pair: O(1) on average; O(n) at worst
- Removing a key/value pair: O(1) on average; O(n) at worst
- Looking a key: O(1) on average; O(n) at worst

Worst case linear time operations occur when a hash table experiences a lot of collisions, leading to long linked lists which take O(n) to traverse.

In practice, we assume that hash functions employed by hash tables are so optimized that collisions rarely occur and constant time operations are guaranteed.
