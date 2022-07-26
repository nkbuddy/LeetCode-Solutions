/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let difference = target - nums[i]
        if (nums.slice(i+1).includes(difference)){
            return [i, nums.indexOf(difference,i+1)]
        }
    }
};