/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftIdx = 0
    let rightIdx = nums.length - 1
    
    while(leftIdx <= rightIdx){
        
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2)
        let middleInt = nums[middleIdx]
 
          if (middleInt === target) return middleIdx
     
        if (nums[leftIdx] <= middleInt){
            if (nums[leftIdx]  <= target && target <= middleInt) rightIdx = middleIdx - 1
            else leftIdx = middleIdx + 1
        }
        else {
            if(middleInt <= target && target <= nums[rightIdx] ) leftIdx = middleIdx + 1
            else rightIdx = middleIdx - 1
        }
  
    }
    return -1
};