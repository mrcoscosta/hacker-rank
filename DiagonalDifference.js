function diagonalDifference(arr) {
  // Write your code
  let diagonalE = 0;
  let diagonalD = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonalE += arr[i][i];
    diagonalD += arr[i][arr.length - 1 - i];
  }
  return Math.abs(diagonalD - diagonalE);
}
