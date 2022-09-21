/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let left = 1
    let right = Math.max(...piles)
    let result = right

    while (left <= right){
        let hours = 0
        let mid = Math.floor((left + right) / 2)
        for (let pile of piles){
            hours += Math.ceil(pile / mid)
        }
        if (hours <= h ){
            result = Math.min(mid, result)
            right = mid - 1
        }
        if (hours > h ){
            left = mid + 1
        }
    }
    return result
};