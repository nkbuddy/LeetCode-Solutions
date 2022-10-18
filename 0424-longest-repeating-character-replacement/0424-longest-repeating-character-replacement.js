/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let longest = 0
    let map = {}
    let l = 0
    let r = 0
    let max  = 0
    while(r < s.length){
        map[s[r]] = map[s[r]] + 1 || 1
        max = Math.max(max, map[s[r]])
        let len = r - l + 1
        if ( len - max > k){
             map[s[l]]--
            l++
        }
            longest = Math.max(r - l + 1, longest)
            r++
        
    }
    return longest
};