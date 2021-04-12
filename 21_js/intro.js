/*
Team Cosmic Stardust - Victoria Gao, Jessica Yeung, Andrew Jiang
SoftDev
K21 -- Get Scripty
2020-04-09
 */

//returns factorial of n, computed iteratively
var factI = function(n) {
    var res = 1;
    for (var i = 0; i < n; i++) {
        res = res * (i + 1);
    }
    return res;
}

console.log(factI(3));    //expected value: 6
console.log(factI(0));    //expected value: 1

//returns factorial of n, computed recursively
var factR = function(n) {
    if (n==0){
        return 1;
    }
    else {
        return factR(n-1)*n;
    }
}

console.log(factR(3));    //expected value: 6
console.log(factR(0));    //expected value: 1

//returns the nth Fibonacci number, computed iteratively
var fibI = function(n) {
    var first = 0;
    var second = 1;
    var term = 0;
    while (n>0){
        if (n==1){
            return first;
        }
        else if (n==2){
            return second;
        }
        else {
            term = first+second;
            first = second;
            second = term;
            n--;
        }
    }
    return term;
}

console.log(fibI(2));  //expected value: 1
console.log(fibI(5));  //expected value: 3
console.log(fibI(20));  //expected value: 4181

//returns the nth Fibonacci number, computed recursively
var fibR = function(n) {

    if (n==1){
        return 0;
    }
    else if (n==2){
        return 1;
    }
    else {
        return fibR(n-1)+fibR(n-2);

    }

}

console.log(fibI(2));  //expected value: 1
console.log(fibI(5));  //expected value: 3
console.log(fibI(20));  //expected value: 4181
