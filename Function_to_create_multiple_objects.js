function create_user(firstname,lastname,age,job,salary,savings){
    let temp_user={}
    temp_user.firstname=firstname
    temp_user.lastname=lastname
    temp_user.age=age
    temp_user.job=job
    temp_user.salary=salary
    temp_user.savings=savings
    temp_user.Expenditure= function Expenditure(){
        console.log("Your Expenditure is ",((this.salary)-(this.savings)))
    }
    return(temp_user)
}
let user1=create_user("sapta","palit",17,"Student",1000,3000)
user1.Expenditure()