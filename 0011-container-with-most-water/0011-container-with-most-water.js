/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0
    let i = 0
    let j = height.length - 1
    while (i < j){
        let curr = Math.min(height[i], height[j]) * (j - i)
        area = Math.max(area, curr)
        height[j] > height[i] ? i++ : j--
    }
    return area
};