/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let split = s.split(' ')
    result = split.pop().length 
    while (result === 0){
         result = split.pop().length
    }
    return result
};