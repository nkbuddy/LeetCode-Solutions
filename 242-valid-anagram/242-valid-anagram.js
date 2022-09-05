/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false}
    let first = {}

    for (let i = 0 ; i < s.length; i++){
        first[s[i]] = first[s[i]] + 1 || 1
    }
    for (let j = 0; j < t.length; j++){
        if (!first[t[j]]) return false
        first[t[j]]--
    }
    return true
};