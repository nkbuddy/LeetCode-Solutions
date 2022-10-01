/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let results = []
    for (let i = 0; i < nums.length; i++){
        let greater = 0
        for (let j = 0; j < nums.length; j++){
            if (nums[i] > nums[j]) {greater++}
        }
        results.push(greater)
    }
    return results
};