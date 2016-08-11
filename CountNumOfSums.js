function countSumOfTwoRepresentations2(n, l, r) {
    var ways = 0
    var j = r
    for(var i = l; i<=j; i++){
       if((j+i)===n) ways++;
        j--;
    }
    return ways;
}

//Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2 and r = 4, the output should be
countSumOfTwoRepresentations2(n, l, r) = 2.

Input/Output

[time limit] 4000ms (js)
[input] integer n

A positive integer.

Constraints:
5 ≤ n ≤ 25.

[input] integer l

A positive integer.

Constraints:
2 ≤ l ≤ r.

[input] integer r

A positive integer.

Constraints:
l ≤ r ≤ 20.

[output] integer
