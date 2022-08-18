/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let results = []
    nums.sort((a,b) => a -b)
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i-1]) continue;
        let left = i + 1
        let right = nums.length - 1
        let diff = 0 - nums[i]
        while (right > left){
            const sum = nums[left] + nums[right]
             if (sum > diff) {right--}
            else if (sum < diff) {left++}
            else {
            results.push([nums[i], nums[left], nums[right]])
            left++
            right--
            while (right > left &&  nums[left] === nums[left - 1]) {left += 1}
            while (right > left && nums[right] === nums[right + 1]) {right--}
            }
            
        }
    }
    return results
};