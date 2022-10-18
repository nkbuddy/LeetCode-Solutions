/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0
    let max = 0
    let substring = {}
    for (let i = 0; i < s.length; i++){

        substring[s[i]] = substring[s[i]] + 1 || 1
        while (substring[s[i]] > 1){
            let leftChar = s[start]
            substring[leftChar]--
            start++
        }
        max = Math.max(max, i - start + 1)
    }
    return max
};