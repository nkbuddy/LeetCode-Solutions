/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelType = {}
    let result = 0
    for (let jewel of jewels){
        jewelType[jewel] = true
    }
    for (let stone of stones){
        if (jewelType[stone] === true) result++
    }
    return result
};