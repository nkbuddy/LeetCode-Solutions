/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedStr = strs.map(word => word.split('').sort().join(""))
    let hash = {}
    for (let i = 0; i < strs.length; i++){
        hash[sortedStr[i]] !== undefined ?  hash[sortedStr[i]].push(strs[i]) : hash[sortedStr[i]] = [strs[i]]
        // if (hash[sortedStr[i]] !== undefined){
        //     hash[sortedStr[i]].push(strs[i])
        // }
        // else{hash[sortedStr[i]] = [strs[i]]}
    }
    return Object.values(hash)
};