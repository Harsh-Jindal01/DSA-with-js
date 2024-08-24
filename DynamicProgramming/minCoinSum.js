function minCoinSum(amount, coins, memo = {}){
  
  //base case
  if(amount in memo) return memo[amount]
  if(amount === 0) return 0 
  if(amount < 0) return -1

  let minCoinCount = Infinity

  for(const coin of coins){
    const result = minCoinSum(amount - coin, coins, memo)

    if(result !== -1){
      minCoinCount = Math.min(minCoinCount, result+1)
    }    
  }

  memo[amount] = minCoinCount === Infinity ? -1 : minCoinCount
  return memo[amount]

}

console.log(minCoinSum(69, [1, 6, 9, 10]));
console.log(minCoinSum(14, [1, 4, 9, 8]));