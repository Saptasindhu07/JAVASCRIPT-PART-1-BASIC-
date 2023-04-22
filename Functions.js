//INTRODUCTION 
function sum(a,b){
    console.log(a+b)
}
sum(2,3)
function odd_or_even(a){
    if(a%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
odd_or_even(2)

//FIND TARGET ELEMENT IN ARRAY

let check_array=[1,2,3,4,5,6,7,8,9,10]
let target_b=3
function target_array(a,b){
    let h=0
    for(let i of a){
        if(i==b){
            console.log("FOUND")
            h=h+1
            return i
        }}
    if(h==0){
         console.log("NOT FOUND")
        }
    }
    
    target_array(check_array,target_b)
    

