var kidsWithCandies = function(candies, extraCandies) {
    
  const maxCandies = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandies)

};

console.log(kidsWithCandies([1, 3, 5, 6, 0, 10], 5));
