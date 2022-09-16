/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0
    let i = 0
    let j = height.length - 1
    while (i < j){
        let current = (j -i) * Math.min(height[i], height[j])
        area = Math.max(current,area)
        if (height[i] < height[j]){i++}
        else{j--}
    }
    return area
};