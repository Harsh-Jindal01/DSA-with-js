//In this section we have to find the number of ways to reach at the end of the grid, provided take care of hurdles in the way, and we can move only in right and bottom direction.

function gridPath(grid, row = 0, col = 0, memo = {}){

  const pos = row + "," + col;

  if(pos in memo) return memo[pos];

  if(row >= grid.length || col >= grid[0].length || grid[row][col] === 'X') return 0;

  if(row === grid.length -1 && col === grid[0].length - 1) return 1
 
  const rightPath = gridPath(grid, row+1, col, memo)
  const bottomPath = gridPath(grid, row, col+1, memo)

  memo[pos] = rightPath + bottomPath;
  return memo[pos]
}

const grid = [
  ['O', 'O', 'O'],
  ['O', 'X', 'O'],
  ['O', 'O', 'O']
];

console.log(gridPath(grid))
