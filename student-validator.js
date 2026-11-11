const student={
| name:"Sebi",
| age:23,
| email:"krapf.student@academy.com",
| enrolled:true
| };
 let isValid=true;{
| if (student.enrolled===isValid){
| console.log("Entry is valid.")} else {console.log("Entry is invalid.")};
| };
 isValid="string"; {
| if (typeof student.name===isValid){
| console.log("Entry is valid.")} else {console.log("Entry is invalid.")};
| if (typeof student.email===isValid){
| console.log("Entry is valid.")} else {console.log("Entry is invalid.")};
| };
isValid="number"; {
| if (typeof student.age===isValid && student.age>1) {
| console.log("Entry is valid.")} else {console.log("Entry is invalid.")};
| };
