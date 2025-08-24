class complex{
    constructor(real,imaginary){
    this.real = real
    this.imaginary = imaginary
}
    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
}
let a = new complex(2,4)
let b = new complex(5,4)
a.add(b)
console.log(`${a.real} +i ${a.imaginary}`)