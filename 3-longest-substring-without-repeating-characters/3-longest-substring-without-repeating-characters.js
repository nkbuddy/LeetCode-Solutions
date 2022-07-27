/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let start = 0
    let substring = {}
    
    for (let end = 0; end < s.length; end++){
        let rightChar = s[end]
        substring[rightChar] = substring[rightChar] + 1 || 1
        
        while (substring[rightChar] > 1){
            let leftChar = s[start]
            substring[leftChar]--
            start++
        }
        max = Math.max(max, end - start + 1)
    }
    return max
}