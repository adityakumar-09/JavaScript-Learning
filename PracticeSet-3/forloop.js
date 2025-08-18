obj = {
    adiyta:98,
    rahul:99,
    himanshu:90
}
//for loop
for(i=0;i<Object.keys(obj).length;i++){
    console.log("The marks of "+ Object.keys(obj)[i] +" is " + obj[Object.keys(obj)[i]])
}

// for in loop
for (let i in obj){
    console.log("The marks of "+ i +" is " + obj[i])
}