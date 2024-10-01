// console.log("I am Javascript");
// let a= 10;
// a=15;
// console.log(a);
// var x = 20;
// x = 30;
// console.log(x);
// const PI = 3.141592653589793;
// PI = 314;
// console.log(PI);
 
// Datatype:- datatype is use to define the type of any data 
// there are two type
// 1. primitive 
// String 
// Number
// Boolean
// undefined
// null
// BigInt
// Symbol
// 2. Non-primitive
// Object
// Array
// Function

// String:- string are used to store the textual value
//
// let name = "               kali                              charan              ";
// trim():- It is used to remove empty space in the string 
// name=name.trim();
// console.log(name.trim());

// //  charAt():- this method is use to find the character of any string.
// let name1 = "rajat dalal Singh";
// console.log(name1.charAt(6));

// // indexOf():- this is used to find the index of any character in the string

// let name2="Kali charan";
// console.log(name2.indexOf("a"));

// // toUpperCase():- this method is to convert small to capital letters
// let name3="phoolkumariyadav";
// console.log(name3.toUpperCase()); 

// // toLowerCase():- this method is to convert capital to small letters
// let name4="BALCHAND";
// console.log(name4.toLowerCase()); 

// // length():- this is used to find the length of the string
// let name5=" Babli Prasad Singh ";
// console.log(name5.length);

// // slice():- this is used to find the part of the string
// let name6="kali charan"
// console.log(name6.split("").reverse().join(""))

// substr():- this is used to find the part of the string

// object:- object is a collection of key and value pair.
// let person = {
//   name: "Rajat",
//   email: "rajat@gmail.com",
//   age: 20
// };
// console.log(person.name);

// Nested object:- an object have inside another object is called Nested object.
// let empData = {
//     empName:{
//         1: "Rajat",
//         2: "Kali",
//         3: "Utkarsh"
//     },
//     empMail:{
//         1:"Rajat@gmail.com",
//         2:"Kali@gmail.com",
//         3:"Utkarsh@gmail.com"
//     },
//     empAdd:{
//         1:"Noida",
//         2:"Delhi",
//         3:"Gurugram"
//     },
//     empDesignation:{
//         1:"Software Engineer",
//         2:"Quality Assurance",
//         3:"Graphic Desiner"
//     },
// }
// console.table(empData);
// console.log(empData.empAdd[2]);
// operator:- 
// Ternary operator:-
// let age =19;

// age>18 ? console.log("you can play") : console.log("you can not play");

// let value ={
//     userName: "shivam@gmail.com",
//     password: "1232",
// };
// if(!value.userName){
//     console.log("username is required");
// }
// else if(value.userName != "shivam@gmail.com"){
//     alert("user not exist");
// }
// else if(!value.password){
//         console.log("password is required");
// }
// else{
//     console.log(value);
//
// Switch case:- it is used to perform the different action on the different  conditions.It is alternate the of if else condition.
// let day = prompt("Enter The Value");    
// day = parseInt(day);
// console.log(day)
// let dayname;

// switch(day){
//     case 1:
//         dayname="sunday";
//         break;
//     case 2:
//         dayname="monday";
//         break;
//     case 3:
//         dayname="tuesday";
//         break;
//     case 4:
//         dayname="wednesday";
//         break;
//     case 5:
//         dayname="thursday";
//         break;
//     case 6:
//         dayname="friday";
//         break;
//     case 7:
//         dayname="saturday";
//         break;
//     default:
//         dayname="invalid day";
// }
// console.log(dayname);
// loop:- loops are used to execute the block of code a number of time.

// for loop:- it is used to execute the block of code as long as condition is true
// let num=10;
// let i;
// for(i=0;i<=num;i++){
//     console.log(i);
// }

let data=[23,43,56,76,54,32,1,2,3,4];
for(let i=0;i<5;i++){
    console.log(data[i])
}
// Do-while :- 