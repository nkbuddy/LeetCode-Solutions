/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 let profit = 0
let lowest = prices[0]
 for (let i = 1; i < prices.length; i++){
     if (lowest > prices[i]){ lowest = prices[i]}
     if (prices[i] - lowest > profit){ profit = prices[i] - lowest}
 }
 return profit
};