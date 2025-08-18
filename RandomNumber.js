let randomDecimal = Number.parseInt(Math.floor(Math.random()*100)+1);
let inp;
let score = 100;
while(inp!=randomDecimal){
    score = score -1;
    inp = prompt("Enter The Number: ")
    if(inp==randomDecimal){
        console.log("Congratulations!!!! You guessed the correct answer. ")
        console.log(`You gussed correct anser in ${100-score} chances.`)
    }
    else if (inp > randomDecimal && inp < 100){
        console.log("Your number is greater than the actual number. Try using smaller number ")
    }
    else if(inp < randomDecimal && inp > 0){
        console.log("Your number is smaller than the actual number. Try using larger number ")
    }
    else{
        console.log("Enter the number btw 1 to 100")
    }
}
