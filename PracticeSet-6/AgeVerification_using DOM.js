let age = prompt("Enter your age : ");
// alert for driving
if (age>18){
    alert("You can Drive")
}
else if(age<18 && age>0) {
    alert("You can't Drive. Your aga is less than 18")
}
else{
    console.error("You entered negative age which is not possible"); // error if age entered is negative
}

//confirmation to see the prompt again
confirm("Do you want to see promt again??")
if(confirm){
    let age = prompt("Enter your age : ");
    // alert for driving
    if (age>18){
        alert("You can Drive")
    }
    else if(age<18 && age>0) {
        alert("You can't Drive. Your aga is less than 18")
    }
    else{
        console.error("You entered negative age which is not possible");
    }
}
else{
    alert("You choose no . Thank for using our service")
}

