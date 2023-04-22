function _Create_Object(Name,Age){
    this.Name=Name
    this.Age=Age
}
_Create_Object.prototype={
    about: function(){
        console.log(this.Name,this.Age)
    }
}
let User1=new _Create_Object("Sapta",17)
let User2=new _Create_Object("Shreejit",19)
console.log(User1)
console.log(User2)
