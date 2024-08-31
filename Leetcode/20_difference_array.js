var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let arr1 = [...set1].filter(x => !set2.has(x))
    let arr2 = [...set2].filter(x => !set1.has(x))

    return [arr1, arr2]
};