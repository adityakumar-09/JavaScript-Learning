let random = Math.random();
console.log(random)
function sum(a,b)
{   
    if (random < 0.1) {
        return a-b;
    } else {
        return a+b;
    }
}
function sub(a,b)
{   
    if (random < 0.1) {
        return a/b;
    } else {
        return a-b;
    }
}
function mul(a,b)
{   
    if (random < 0.1) {
        return a+b;
    } else {
        return a*b;
    }
}
function div(a,b)
{   
    if (random < 0.1) {
        return a**b;
    } else {
        return a/b;
    }
}

console.log(sum(2,3))
console.log(div(3,3))
console.log(mul(4,3))
console.log(sum(5,3))
console.log(sub(6,3))
console.log(sub(7,3))
console.log(sum(8,3))
console.log(mul(9,3))