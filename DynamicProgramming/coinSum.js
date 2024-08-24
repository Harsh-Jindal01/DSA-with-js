/*

"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used an unlimited number of times."

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false


*/

function sumPossible(amount, nums, memo = {}){
  
  //Base Cases Conditions
  if(amount in memo) return memo[amount]
  if(amount === 0) return true
  if(amount < 0) return false
  
  for (const num of nums) {
    if(sumPossible(amount-num, nums, memo)){
      memo[amount] = true
      return true
    }
  }
/*
The return false outside the loop ensures that after all possibilities have been tried (i.e., after checking every number in nums), if none of them worked, the function should return false to indicate that it's not possible to achieve the amount.

If we didn't include this line outside the loop, the function wouldn't have any fallback behavior if all recursive calls failed, and it wouldn't know what to return when no valid combination is found.
*/

  memo[amount] = false
  return false
}
