// creating a class student from the human
class human{
    constructor(name,favfood){
        this.name = name
        this.favfood = favfood
    }
    walk(){
        console.log(this.name + "Human is walking")
    }
}

class student extends human{
    walk(){
        console.log(this.name + " Student is walking")
    }
}

let a = new student("Aditya","Paneer")
a.walk()

// checking wehter the student is instance of human or not
console.log( a instanceof human)