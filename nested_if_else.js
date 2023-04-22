let winning_number=19
let user_input_old=prompt("Guess a number")
let user_input=Number(user_input_old)
if(user_input===winning_number){
    console.log("Correct")
}
else{
    if(user_input<winning_number){
        console.log("Little Higher pls")
    }
    else{
        console.log("Too High")
    }
    }
