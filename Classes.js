class animals{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    about(){
        console.log(this.name,this.age)
    }
    change_name(changed_name){
        let [first_name,last_name]=changed_name.split(" ")
        this.first_name=first_name
        this.last_name=last_name
        this.name=first_name+" "+last_name
    }
}
class cat extends animals{
    constructor(name,age,speed){
        super(name,age)
        this.speed=speed
    }
}
class dog extends animals{
    constructor(name,age,eating_habits){
        super(name,age)
        this.eating_habits=eating_habits
    }
}
let dog1=new dog("Tommy",17,"Chicken")
console.log(dog1)
dog1.about()
dog1.change_name("Tommy Palit")
console.log(dog1)