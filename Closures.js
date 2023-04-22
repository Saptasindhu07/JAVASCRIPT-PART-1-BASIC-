function hello(x){
    let a="stupid"
    let b="Holo"
    function inner(){
        console.log(a,b,x)
    }
    return inner
}
let func_=hello("sapta")
func_()