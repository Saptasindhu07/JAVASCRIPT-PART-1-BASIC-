let user1={
    age:18,
    height:26,
    check_age:function(){
        if(this.age>18){
            console.log("adult")
        }
        else{
            console.log("Minor")
        }
    }
}
let user2={
    age:19,
    height:21
}
user1.check_age.call(user2)