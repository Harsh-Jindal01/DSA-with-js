var maxOperations = function(nums, k) {
    let numSort = nums.sort((a,b) => a - b);
    let left = 0;
    let right = numSort.length - 1;
    let operations = 0;

    while(left < right){
        if((numSort[left] + numSort[right]) === k){
            operations++
            left++
            right--
        }else if((numSort[left] + numSort[right]) < k){
            left++
        }else{
            right--
        }
    }
    return operations
};

console.log(maxOperations([1,2,3,4], k = 5));
