 const student ={
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 20,
    grades: [88, 92, 79],
    isEnrolled: true
}
    
student.email = 'alice-Johnson@gmail.com'
console.log(student);

student.age = 21
student.isEnrolled = false
console.log(student);

delete student.lastName;
console.log(student);

console.log(student.firstName);
console.log(student['email']);


for (let key in student) {
    console.log(key,);
    
}
