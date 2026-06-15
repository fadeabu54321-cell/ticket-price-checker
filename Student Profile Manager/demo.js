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
    console.log(key + ': ' + student[key]);
}
 
const { firstName, email } = student;

const contact = {
    ["phone" + firstName]: "055-123-4567"

}

const address = {
    street: "main st",
    city: "hebron",
    zip: "12345"
};
 const studentwithaddress = {
    student: "alice",
    address: address,
 }
 console.log(studentwithaddress);
 console.log(contact);
 
 