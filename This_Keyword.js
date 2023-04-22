function all_Details(){
    console.log(`Full Name is ${this.first_name} ${this.last_name} and age is ${this.age}`)
}
let Person1={
    first_name:"sapta",
    last_name:"sindhu",
    age:17,
    full_: all_Details
}
let Person2={
    first_name:"Shreejit",
    last_name:"Pakrashi",
    age:17,
    full_: all_Details
}
console.log(Person1.full_())
console.log(Person2.full_())