/**
 * Matrix Queries
 *
 * You are given two numbers n and m representing the dimensions of an n * m rectangular board.
 * The rows of the board are numbers from 1 to n, and the columns are numbered from 1 to m. Each cell has a
 * value equal to the product of its row index and column index (both 1-based);
 * in otherwords, board[i][j] = (i+1) * (j+1).
 *
 * Initially, all the cells in the board are considered active, though some of them will eventually be deactivated through a sequence of queries.
 * You will be given an array queries, where each query is of one of the following 3 types:
 * [0] - find the minimum value among all remaining active cells on the board.
 * [1, i] = deactive all cells in row i;
 * [2, j] = deactivate all cells in column j.
 *
 * Given the dimensions n, m, and the array of queries, your task is to return an array consisting of calculated values (results of the queries of the 0th type),
 * in the order which they were caluclated.
 *
 * Example
 * For n = 3, m=4 and queries = [[0], [1,2]. [0], [2,1], [0], [1,1], [0]] the output should be matrixQueries(n, m, queries) = [1,1,2,6]
 *
 */

function matrixQueries(n: number, m: number, queries: number[][]): number[] {
  const board = makeMatrix(n, m);
  return [0];
}

function makeMatrix(n: number, m: number): number[][] {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < m; j++) {
      board[i][j] = [(i + 1) * (j + 1), true];
    }
  }
  return board;
}

function findMinValue(board: any[]): number {
  return Math.min.apply(
    null,
    board.map((e) => e[0])
  );
}
