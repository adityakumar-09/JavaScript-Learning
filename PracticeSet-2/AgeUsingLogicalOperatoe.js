let age = prompt("Enter Your Age?");
age = Number.parseInt(age); // Convert the string to a number

if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20");
} else {
    console.log("Your age does not lie between 10 and 20");
}