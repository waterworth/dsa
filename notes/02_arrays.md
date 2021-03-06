# Arrays

Two types of arrays.

## Static Arrays

    - Has a fixed size for the array.
    - Memory has to be allocated in advance for the array.
    - Initializing an array is linear, O(n).
    - Accessing and overwriting an element in an array is instant, O(1), as the index has already been allocated.
    - Traversing an array is linear, 0(n) time and O(1) space.
    - Map, filter, reduce all just traverse an array, so they're O(n) time and O(1) space.
    - Copying an array is an O(n) time and O(n) space time.
    - Inserting an element into an array is expensive. O(N) time and O(1) space as the array has to be effectively copied and moved.

## Dynamic Arrays

    - An array that change in size.
    - In Javascript, all arrays are dynamic.
    - Appending in dynamic arrays is less expensive. Amortized O(1) time because whenever you reach the end of the array, the array is copied and an equal amount of space is added.
    - Inserting into an array is still O(n) time.
    - Popping out of the end of an array is O(1) space time. Shifting out an array is O(n).
