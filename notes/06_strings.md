# Strings

Not a standalone data structure, but a data type that behaves like one.

- Stored in memory as an array of integers, where each character is mapped to an integer via a character-encoding standard like ASCII.

- Behave like normal arrays, main distinction being that strings are **immutable**, they cant be edited after creation.
  - Appending a character to a string is more expensive than it appears.

```js
// Example of operation that deceptively expensive.
string = 'this is a string';
newString = '';

for (character in string) {
  newString += character;
}
```

The above code has a time complexity of O(n^2) where n is the length of the string.
This is because each addition of a character to `newString` creates an entirely new string, and is in itself an O(n) operation. N amount of O(n) operations are performed.
