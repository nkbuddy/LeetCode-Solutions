/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
      let left = new Array(nums.length).fill(0)
      left[0] = 1
      let right = new Array(nums.length).fill(0)
      right[nums.length - 1] = 1
    for (let i = 1; i < nums.length; i++){
        left[i] = left[i -1] * nums[i - 1]
    }
    for (let j = nums.length - 2; j >= 0; j--){
        right[j] = right[j + 1] * nums[j + 1]
    }
    return left.map((int, ind) => int * right[ind] )
};