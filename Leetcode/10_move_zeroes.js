var moveZeroes = function(nums) {
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if(nums[readIndex] !== 0){
            nums[writeIndex++] = nums[readIndex]
        }
    }
    for(; writeIndex < nums.length; writeIndex++){
        nums[writeIndex] = 0;
    }

    return nums;
};

console.log(moveZeroes([1, 5, 0, 7, 0, 9]));
