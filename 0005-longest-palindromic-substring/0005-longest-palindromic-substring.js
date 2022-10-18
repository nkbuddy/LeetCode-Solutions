/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0){return ''}
    let max = s[0]
    for (let i = 0; i < s.length; i++){
        let even = getDrome(i - 1 , i , s)
        let odd = getDrome(i , i, s)
        
        max = odd.length > max.length ? odd : max
        max = even.length > max.length ? even : max
    }
    return max
};

function getDrome(left, right, s){
    let i = 0
    while(s[left - i] && s[left - i] === s[right + i]){
        i++
    }
    i--
    return s.slice(left - i, right + i + 1)
}