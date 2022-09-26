/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    if (x < 0) return false
    for (let i = 0; i <= Math.floor(str.length / 2); i++){
        console.log(str[i] , str[str.length - i - 1])
        if (str[i] !== str[str.length - i - 1]) return false 
    }
    return true
};