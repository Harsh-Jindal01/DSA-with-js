function non_adjacentHouse(nums, i=0, memo = {}){

  if(i in memo) return memo[i]
  if(i >= nums.length) return 0

  const skipHouse = non_adjacentHouse(nums, i+1, memo)
  const takenHouse = nums[i] + non_adjacentHouse(nums, i+2, memo)

  memo[i] = Math.max(skipHouse, takenHouse)
  return memo[i]

}

console.log(non_adjacentHouse([2, 7, 9, 3, 1]));
