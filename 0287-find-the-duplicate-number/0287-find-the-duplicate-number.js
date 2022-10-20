/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let ind = Math.abs(nums[i]) - 1
        if (nums[ind] < 0){return Math.abs(nums[i])}
        nums[ind] = -nums[ind]
    }
};