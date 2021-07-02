// requiring the assert method from the assert module
var assert = require("assert");

// building the function that will give back the result in JSON format based on the user's input
function fizzBuzz(num) {
    // local variables
    // arr is for extracting the numbers divised by 3 & 5 or both
    let arr = [];
    // res is for concatinating the final result
    let res = "";
    // filling an array of strings & nulls corresponding to the fizzes and buzzes
    for (let i = 1; i <= num; i++) {
        // first fill all the elements with null
        arr[i] = null;
        // if the number is divisible by 3 then save Fizz to the arr
        if (i % 3 === 0) {
            arr[i] = "Fizz";
            // if the number is divisible by 5 then save Buzz to the arr
        } else if (i % 5 === 0) {
            arr[i] = "Buzz";
        }
        // if the number is divisible by 3 and 5 then save FizzBuzz to the arr
        if (i % 3 === 0 && i % 5 === 0) {
            arr[i] = "FizzBuzz";
        }
    }
    // building the result string and giving it a JSON format
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== null) res += `    "${i}" : "${arr[i]}",` + "\n";
    }
    // adding curly braces to the final result (the returned value)
    res = "{\n" + res + "}";
    return res;
}

// working with TDD (test-driven developement)
// preparing the tests
let res1 = `{
    "3" : "Fizz",
    "5" : "Buzz",
    "6" : "Fizz",
    "9" : "Fizz",
    "10" : "Buzz",
    "12" : "Fizz",
    "15" : "FizzBuzz",
    "18" : "Fizz",
    "20" : "Buzz",
    "21" : "Fizz",
}`;
let res2 = `{
    "3" : "Fizz",
    "5" : "Buzz",
    "6" : "Fizz",
    "9" : "Fizz",
    "10" : "Buzz",
    "12" : "Fizz",
    "15" : "FizzBuzz",
    "18" : "Fizz",
    "20" : "Buzz",
    "21" : "Fizz",
    "24" : "Fizz",
    "25" : "Buzz",
}`;
let res3 = `{
    "3" : "Fizz",
    "5" : "Buzz",
    "6" : "Fizz",
    "9" : "Fizz",
    "10" : "Buzz",
    "12" : "Fizz",
    "15" : "FizzBuzz",
}`;
let res4 = `{
    "3" : "Fizz",
    "5" : "Buzz",
    "6" : "Fizz",
    "9" : "Fizz",
    "10" : "Buzz",
    "12" : "Fizz",
    "15" : "FizzBuzz",
    "18" : "Fizz",
    "20" : "Buzz",
    "21" : "Fizz",
    "24" : "Fizz",
    "25" : "Buzz",
    "27" : "Fizz",
    "30" : "FizzBuzz",
    "33" : "Fizz",
    "35" : "Buzz",
    "36" : "Fizz",
    "39" : "Fizz",
    "40" : "Buzz",
    "42" : "Fizz",
    "45" : "FizzBuzz",
    "48" : "Fizz",
    "50" : "Buzz",
    "51" : "Fizz",
    "54" : "Fizz",
    "55" : "Buzz",
    "57" : "Fizz",
    "60" : "FizzBuzz",
    "63" : "Fizz",
    "65" : "Buzz",
    "66" : "Fizz",
    "69" : "Fizz",
    "70" : "Buzz",
    "72" : "Fizz",
    "75" : "FizzBuzz",
    "78" : "Fizz",
    "80" : "Buzz",
    "81" : "Fizz",
    "84" : "Fizz",
    "85" : "Buzz",
    "87" : "Fizz",
    "90" : "FizzBuzz",
    "93" : "Fizz",
    "95" : "Buzz",
    "96" : "Fizz",
    "99" : "Fizz",
    "100" : "Buzz",
    "102" : "Fizz",
    "105" : "FizzBuzz",
}`;

// the assert method will test if the returned value of fizzbuzz is equal to the expectedresults
assert(res1 === fizzBuzz(21), "your function didn't pass test1");
assert(res2 === fizzBuzz(25), "your function didn't pass test2");
// test3 was intentionally given wrong input to the fizzBuzz function to demonstrate the operation of throwing errors
assert(res3 === fizzBuzz(18), "your function didn't pass test3");
assert(res4 === fizzBuzz(105), "your function didn't pass test4");
