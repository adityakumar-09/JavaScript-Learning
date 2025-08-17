// using reduce method
function facRed(n) {

    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // The factorial of 0 is 1
    let arr= Array.from(Array(n+1).keys())
    console.log(arr)
    let result = arr.slice(1).reduce((a,b) => a*b)
    return result;
}



// using for loop
function facfor(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // The factorial of 0 is 1
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let num = parseInt(prompt("Enter a number:"));
console.log(facRed(num));
console.log(facfor(num));