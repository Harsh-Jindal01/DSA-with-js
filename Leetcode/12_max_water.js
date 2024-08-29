var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxWater = 0
    while(left < right){
        let containerArea = ((right - left) * (Math.min(height[left], height[right])))

        maxWater = Math.max(maxWater, containerArea)
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxWater
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
