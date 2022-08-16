/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = nums[0]
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        prev = Math.max(prev, nums[i])
    }
    return prev
};