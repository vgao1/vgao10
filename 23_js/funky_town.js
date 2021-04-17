// Team Violet Isle :: Victoria Gao, Renee Mui
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15r
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here

//returns factorial of n, computed iteratively
var factI = function factI(n) {
    var ans = 1; // stores answer
    for (i = 1; i <= n; i++) { // loops through all values from 1 to n
        ans *= i; // updates ans by multiplying each number in [1,n] to it
    }
    return ans;
}

console.log(factI(3));    //expected value: 6
console.log(factI(0));    //expected value: 1

//returns factorial of n, computed recursively
var factR = function(n) {
    if (n==0){  
        return 1;      // base case: return 1 when n is 0
    }
    else {
        return factR(n-1)*n;    // multiply n to factorial of n-1
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
            return first;   //return first term of Fibonacci sequence (0)
        }
        else if (n==2){
            return second;  //return second term of Fibonacci sequence (1)
        }
        else {
            term = first+second;    //term is the next # in sequence (sum of previous two terms)
            first = second;         //let first be the term after it in Fibonacci sequence (var second)
            second = term;          //let second be term
            n--;                    //decrement n by 1
        }
    }
    return term;
}

console.log(fibI(2));  //expected value: 1
console.log(fibI(5));  //expected value: 3
console.log(fibI(20)); //expected value: 4181

//returns the nth Fibonacci number, computed recursively
var fibR = function(n) {
    if (n==1){
        return 0;      //return first term of Fibonacci sequence (0)       
    }
    else if (n==2){
        return 1;      //return second term of Fibonacci sequence (1)
    }
    else {
        return fibR(n-1)+fibR(n-2);     //return the sum of the previous two terms in the sequence

    }

}

console.log(fibI(2));  //expected value: 1
console.log(fibI(5));  //expected value: 3
console.log(fibI(20));  //expected value: 4181

// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
var gcd = function(a, b) {
    var ans = 1; // stores answer
    for (i = 2; i <= Math.min(a, b); i++) { // loops through all values from 1 to the smaller of a and b
        if ((a % i == 0) && (b % i == 0)) {
            ans = i; // updates answer if i is a common divisor of a and b
        }
    }
    return ans;
}

console.log(gcd(28,100));   //expected value: 4
console.log(gcd(3,4));      //expected value: 1

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
//You may want to create helper functions or external list variables here.
//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

var names = new Array("Victoria", "Renee", "Anna", "Jason");
var randomStudent = function() {
    var randomInt = Math.round(Math.random() * (names.length-1));   //generate a random integer between 0 and (length of list minus 1)
    return names[randomInt];    //return the element in the list whose index is the random integer
}

console.log(randomStudent());   //returns "Victoria", "Renee", "Anna", OR "Jason"