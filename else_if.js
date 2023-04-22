let temperature=+prompt("Enter Temperature of location: ")
if (temperature<10){
    console.log('Very Cold')
}
else if(temperature>=10 && temperature<25){
    console.log("Moderate")
}
else if(temperature>=25 && temperature<40){
    console.log("Moderately warm")
}
else{
    console.log("U are in Kolkata")
}