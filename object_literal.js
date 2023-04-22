let t=0
let new_object={}
while(true){
    t=t+1
    let object_input=prompt("Enter name of Person ")
    let object_input1=prompt("Enter Age: ")
    let object_input2=prompt("Enter height: ")
    let object_input3=prompt("Enter Gender")
    let decision_1=prompt("Any More Person?")
    new_object["person"+t]={
        "name":object_input,
        "age":object_input1,
        "height":object_input2,
        "Gender":object_input3
    }
    if(decision_1=="no"||decision_1=="No"){
        break
    }
    else if(decision_1=="yes"||decision_1=="Yes"){

    }
    else{
        console.log("ERROR")
        break
    }
}
console.log(new_object)
console.log(new_object["person1"]["name"])