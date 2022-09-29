/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let seen = {}
    for (let i = 0; i < numbers.length; i++){
        let diff =  target - numbers[i]
        if (seen[diff] !== undefined){return [seen[diff], i + 1]}
        seen[numbers[i]] = i + 1
    }
};