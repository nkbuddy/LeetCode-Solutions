/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strings) {
  let hashMap = {}
  for (let string of strings){
    let key = string.split('').sort().join('')
    hashMap[key] !== undefined ? hashMap[key].push(string) : hashMap[key] = [string]
  }
  return Object.values(hashMap)
}