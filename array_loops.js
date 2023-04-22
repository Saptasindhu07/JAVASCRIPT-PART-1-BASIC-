let array1_=[]
while(true){
    let array1_input=prompt("Enter input")
    array1_.push(array1_input)
    let decision=prompt("More elements?")
    if(decision=="yes"||decision=="Yes"){
        continue
    }
    else{
        break
    }
}
console.log(array1_)
for(let i of array1_){
    console.log(i)
}

//use for in loop for index in loops