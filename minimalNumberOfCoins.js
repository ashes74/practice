function minimalNumberOfCoins(coins, price) {

  var result = 0;

  for (var i = coins.length - 1; i >= 0; i--) {
    result += ~~(price/coins[i]) ;
    price %= coins[i];
  }

  return (price)? -1:result;
}

// //You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.
//
// The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.
//
// Example
//
// For coins = [1, 2, 10] and price = 28, the output should be
// minimalNumberOfCoins(coins, price) = 6.
//
// You have to use 10 twice, and 2 four times.
//
// Input/Output
//
// [time limit] 4000ms (js)
// [input] array.integer coins
//
// The coin values available in Bananaland.
//
// Constraints:
// 1 ≤ coins.length ≤ 5,
// 1 ≤ coins[i] ≤ 120.
//
// [input] integer price
//
// A positive integer representing the price of the banana.
//
// Constraints:
// 8 ≤ price ≤ 250.
//
// [output] integer
//
// The minimal number of coins you can use to buy the banana.
//
