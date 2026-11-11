const student={
 name:"Sebi",
 age:23,
 email:"krapf.student@academy.com",
 enrolled:true
};
 let isValid=true;
const entry=[];
//Check age
{
if (typeof student.age!=="number"||student.age<1){
 entry.push("Your age must a number equal to or greater than 1.");
 isValid=false;
};
  //Check name;
 if (typeof student.name!=="string"){
  entry.push("Your name must be a string.");
  isValid=false;
 };
 //Check email;
 if (typeof student.email!=="string"){
  entry.push("Your email address must be a string.");
  isValid=false;
 };
//Check enrolled;
 if (typeof student.enrolled!=="boolean"){
  entry.push("Enrolled entry must be a boolean.");
  isValid=false:
isValid=false;
 };
 if (isValid){
 console.log("Student record is valid.")} else {
 console.log("Student record is invalid.");
 console.log("Error:", entry);
};
