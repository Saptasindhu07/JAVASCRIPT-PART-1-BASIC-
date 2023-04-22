function inside_func(){
    console.log( "Callback")
}
function func(a){
    a()
    console.log("Working")
}
func(inside_func)