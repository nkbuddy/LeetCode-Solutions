/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = {}
    for (let i = 0; i < nums.length; i++){
        let difference = target - nums[i]
        if (seen[difference] !== undefined){
            return [seen[difference], i]
        }
        seen[nums[i]] = i
    }
};