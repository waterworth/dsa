# Complexity Analysis

Complexity analysis is the process of determing how efficient an algorithm is. It involes finding the _time_ and _space_ complexity of an algorithm.

We use complexity analysis to determine how 'good' an algorithm is and if it is 'better' than another.

## Time Complexity

Measures how fast an algorithm runs. Expressed in **Big O notation**.

- Measures the change of speed of the algorithm with respect to the size of the input.

## Space Complexity

Measures how much memory an algorithm takes up. Expressed in **Big O notation**.

## Terms

### Big O Notation

- Used to describe time complexity and space complexity.
- Variables used in Big O denote the sizes of inputs to algorithms.
  - O(n) might be the time complexity that traverses through an array of length n.
  - O(n+m) might be the time complexity that traverses through an array of length n and through a string of length m.
- Common Big O Notations:

  - Constant: O(1)
  - Logarithmic: O(log(n))
  - Linear: O(n)
  - Log-linear: O(nlog(n))
  - Quadratic: O(n^2)
  - Cubic: O(n^3)
  - Exponential: O(2^n)
  - Factorial: 0(n!)

- Big O notation is usually understood to describe the **worst case** complexity of an algorithm, even though it might differ from the **average case** complexity.

### Bit

- Short for binary digit.
- Represents a state with either 0 or 1.
- Any data stored in a computer is represented in bits at is basic level.

### Byte

- A group of 8 bits.
- A single byte can represent up to 256 data values. (2^8).
- Binary numbers are made of 0's and 1's, so a byte can represent numbers in a range of 0-255 inclusively in binary format.

### Fixed-width integer

- An integer represented by a fixed amount of bits.
- 32-bit integer = represented by 32bits(4 bytes)
- 64-bit integer = represented by 64bits(8 bytes)
- Regardless of how large it is, a fixed-width integer is made up of a constant number of bits.
- An operation performed on its fixed-width integer is consists of a constant number of bit manipulations.

### Memory

- Memory is the foundational layer of computing.
- Data stored in memory is stored in bytes.
- Bytes can 'point' to other bytes in memory, to store references to other data.
- Amount of memory a machine has is bound, making it valuable to limit how much memory an algorithm uses.
- Access a byte or fixed number of bytes is an elementary operation, which can be loosely treated as a single unit of operational work.

## Examples

```js

```
