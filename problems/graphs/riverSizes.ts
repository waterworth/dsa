/**
 * River Sizes - Medium
 *
 * You're given a two-dimensional array (a matrix) of potentially unequal height and width
 * containing only 0s and 1s. Each O represents land, and each 1 represents part of a river.
 * A river consists of any number of 1s that are either horizontally or vertically adjacent
 * (but not diagonally). The number of adjacent 1's forming a river determine its size.
 *
 * Note that a river can twist. In other words, it doesn't have to be a straight vertical line
 * or a straight horizontal line; it can be L-shaped, for example.
 *
 * Write a function that returns an array of the sizes of all rivers represented in the input
 * matrix. The sizes don't need to be in any particular order.
 *
 * Sample Input
 * matrix = [
 * [1, 0, 0, 1, 0],
 * [1, 0, 1, 0, 0],
 * [0, 0, 1, 0, 1],
 * [1, 0, 1, 0, 1],
 * [1, 0, 1, 1, 0],
 * ]
 *
 * Sample Output
 * [1, 2, 2, 2 , 5]
 */

// Time Complexity: O(n) || Space Complexity: O(n)

export function riverSizes(matrix: number[][]) {
  const sizes: number[] = [];
  const visited: boolean[][] = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[]
) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop()!;
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbours = getUnvisited(i, j, matrix, visited);
    for (const neighbour of unvisitedNeighbours) {
      nodesToExplore.push(neighbour);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisited(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
) {
  const unvisited: [number, number][] = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisited.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisited.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisited.push([i, j - 1]);
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisited.push([i, j + 1]);
  }
  return unvisited;
}
