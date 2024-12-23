// Learn some advanced algorithms.

//动态规划算法
// Date: 2016-05-06
//计算斐波那契数列(0不是第1项，而是第0项)
function dynFib(n){
    var val = new Array(n);
    for(var i=0; i<val.length; i++){
        val[i] = 0;
    }
    if(n == 1 || n == 2){
        return 1;
    } else{
        val[1] = 1;
        val[2] = 1;
        for(var i=3; i<=n; i++){
            val[i] = val[i-1] + val[i-2];
        }
        return val[n]
    }
}

//使用递归计算斐波那契数列
function recurFib(n) {
    if (n < 2) {
        return n;
    }
    else {
        return recurFib(n-1) + recurFib(n-2);
    }
}
//Test cases
//var start = new Date().getTime();
//print(recurFib(30));
//var stop = new Date().getTime();
//print("递归计算耗时 - " + (stop-start) + " ms");
//print();
//start = new Date().getTime();
//print(dynFib(1000));
//stop = new Date().getTime();
//print("动态规划耗时 - " + (stop-start) + " ms");

//贪心算法
//找零问题
function makeChange(origAmt, coins) {
    var remainAmt = 0;
    if (origAmt % .25 < origAmt) {
        coins[3] = parseInt(origAmt / .25);
        remainAmt = origAmt % .25;
        origAmt = remainAmt;
    }
    if (origAmt % .1 < origAmt) {
        coins[2] = parseInt(origAmt / .1);
        remainAmt = origAmt % .1;
        origAmt = remainAmt;
    }
    if (origAmt % .05 < origAmt) {
        coins[1] = parseInt(origAmt / .05);
        remainAmt = origAmt % .05;
        origAmt = remainAmt;
    }
    //需要注意js中浮点数运算精度丢失的问题
    coins[0] = parseInt(origAmt / .01);
}

function showChange(coins) {
    if (coins[3] > 0) {
        print("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
    }
    if (coins[2] > 0) {
        print("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
    }
    if (coins[1] > 0) {
        print("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
    }
    if (coins[0] > 0) {
        print("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
    }
}

var origAmt = .30;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);
