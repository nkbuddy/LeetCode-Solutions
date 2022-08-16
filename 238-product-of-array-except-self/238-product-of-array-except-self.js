/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftArr = new Array(nums.length).fill(0)
    leftArr[0] = 1
    let rightArr = new Array(nums.length).fill(0)
    rightArr[nums.length - 1] = 1
    
    for (let i = 1; i < nums.length; i++){
        leftArr[i] = nums[i - 1] * leftArr[i - 1]
    }
    
    for (let i = nums.length - 2; i > -1; i--){
        rightArr[i] = nums[i + 1] * rightArr[i + 1]
    }

    for (let i = 0; i < nums.length; i++){
        nums[i] = leftArr[i] * rightArr[i]
    }
    return nums
};