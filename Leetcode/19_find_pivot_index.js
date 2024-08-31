var pivotIndex = function(nums) {
    let left = 0;
    let totalSum = nums.reduce((acc, currv) => (acc + currv), 0)

    for(let i = 0; i < nums.length; i++){
        right = totalSum - left - nums[i];
        if(left === right){
            return i
        }
        left += nums[i]
    }
    return -1
};

console.log(pivotIndex([1,7,3,6,5,6]));
