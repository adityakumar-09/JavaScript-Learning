//adding number to the array from the user
// let Num = prompt("Enter the number to add ");
let Num=4;
const arr = [10,11,12,13,14,15,16,17,18,19];
const New_arr = arr.map((value) => {
    return value+Num
})
console.log(New_arr)