/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let price = prices[0]
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < price) {[price = prices[i]]}
        if (profit < prices[i] - price) {profit = prices[i] - price}
    }
    return profit
};