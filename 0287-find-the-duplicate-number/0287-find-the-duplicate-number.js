/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let seen = new Set 
    let duplicates = []
    for (let num of nums){
        if (seen.has(num)){return num}
        else {seen.add(num)}
    }
};