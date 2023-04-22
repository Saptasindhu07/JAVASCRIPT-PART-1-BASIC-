function app(Gender){
    function male(){
        console.log("Hello playin Football")
    }
    function female(){
        console.log("Go to kitchen and eat onion")
    }
    if(Gender=="Male"){
        male()
    }
    else{
        female()
    }
}
app("Male")