function pathCost(grid, row = 0, col = 0, memo = {}){
  
  const pos = row + "," + col;
  
  if(pos in memo) return memo[pos]
  if (row >= grid.length || col >= grid[0].length){
    return -Infinity
  }

  if(row == grid.length - 1 && col == grid[0].length - 1 ){
    return grid[row][col]
  }

  const rightPath = pathCost(grid, row + 1, col, memo)
  const downPath = pathCost(grid, row, col + 1, memo)

  memo[pos] = grid[row][col] + Math.max(rightPath, downPath)

  return memo[pos]
}

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const result = pathCost(grid)
console.log(result);

