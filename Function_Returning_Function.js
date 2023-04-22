function _Male(){
    console.log("Hello Male")
}
function _female(){
    console.log("Hello Female")
}
function _age(age){
    if(age>18){
        console.log("Adult")
    }
    else{
        console.log("Underage")
    }
}
function main_app(func1,func2,func3){
    let temp_Gender=prompt("Enter Gender")
    let temp_age=+prompt("Enter Age")
    if(temp_Gender=="Male"||temp_Gender=="male"){
        _Male()
    }
    else{
        _female()
    }
    _age(temp_age)
}
main_app(_Male,_female,_age)