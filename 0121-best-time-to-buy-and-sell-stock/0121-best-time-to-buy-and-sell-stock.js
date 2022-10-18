/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let profit = 0
   let lowest = prices[0]
   for (let price of prices){
       if (price - lowest > profit){profit = price - lowest}
       if (price < lowest){lowest = price}
   }
    return profit
};