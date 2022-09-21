/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    nums.forEach(num => {
         hash[num] !== undefined ? hash[num] ++ : hash[num]  = 1
    })
    let bucket = []
    for (let i = 0; i <= nums.length; i++){
        bucket.push([])
    }
    for (let key in hash){
        let count = hash[key]
        bucket[count].push(key)
    }
    let result = []
    for (let j = bucket.length - 1; j >= 0; j--){
        if (bucket[j].length === 0){continue}
        else {result = [...result,...bucket[j]]}
    }
    return result.slice(0,k)
};