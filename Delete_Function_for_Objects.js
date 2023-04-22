function create_student_profile(student_name,student_class,student_id,student_aggregate){
    this.student_name=student_name
    this.student_class=student_class
    this.student_id=student_id
    this.student_aggregate=student_aggregate
}
create_student_profile.prototype={
    check_pass:function(){
        if(this.student_aggregate>33){
            console.log("Pass")
        }
        else{
            console.log("Failed")
        }
    }
}
let Student1=new create_student_profile("Sapta Sindhu Palit",10,"09-0612",34)
Student1.check_pass()
console.log(Student1)
delete Student1.student_id
console.log(Student1)