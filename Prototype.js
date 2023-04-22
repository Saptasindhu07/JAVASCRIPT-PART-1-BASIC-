function create_object(age,height,weight){
    let temp_object=Object.create(create_object.prototype)
    temp_object.age=age
    temp_object.height=height
    temp_object.weight=weight
    return temp_object
}
create_object.prototype={
    sum: function(){
        console.log(this.age+this.weight+this.height)
    },
    age_: function(){
        if(this.age>18){
            console.log("adult")
        }
        else{
            console.log("Minor")
        }
    }
}
let Person1=create_object(100,13,14)
console.log(Person1)
Person1.sum()
Person1.age_()