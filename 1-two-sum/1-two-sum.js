/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seenNums = {}
    for (let i = 0; i < nums.length; i++){
        let currentInt = nums[i]
        let difference = target - currentInt
        let index = seenNums[difference]
        if (index !== undefined){
            return [index, i]
        }
        else {seenNums[currentInt] = i}
    }
}