/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    if (nums[0] < nums[nums.length - 1]) return nums[0]
    
    let leftIdx = 0
    let rightIdx= nums.length-1
    for (let i = 0; i < nums.length; i++){
        let midIdx = Math.floor((leftIdx + rightIdx) / 2)
        let leftInt = nums[leftIdx]
        let midInt = nums[midIdx]
        let leftMid = nums[midIdx - 1]
        let rightMid = nums[midIdx + 1]
        
        if (rightMid < midInt) return rightMid
        else if (leftMid > midInt) return midInt
        
        if (midInt > nums[rightIdx]){leftIdx = midIdx + 1}
        else (rightIdx = midIdx - 1)
    }
};