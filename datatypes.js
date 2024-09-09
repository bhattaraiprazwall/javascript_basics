// js data types
console.log(2+2);
console.log(2+"Hello");

// basic data types in javascript:

// strings
// numbers
// bigint
// booleans
// null
// undefined
// symbols 
// objects


// ----Strings in js-------
console.log("This is string");

// string concat
console.log("hello "+"world");

let college="Patan multiple campus";
console.log("My college name is :"+college);

// template string format for printing a variable directly inside the string(enclosed inside the backticks)
// ``
let fname="Prajwal";
let lname="Bhattarai";
console.log(`MY name is ${fname} ${lname}`);


// representing numbers with strings in js
let score="70"+"10";
console.log(score);
// output: 7010

// ----------numbers (integers and floats) in javascript----------
// integers
let a=1;
let b =2;
console.log(a+b);


// float
let x=1.5;
let y=2.56;
console.log(x+y);

// -----booleans in javascript---------
// ->boolean represents true or false
let n1=3;
let n2=3;
let n3=8;
console.log(n1==n2);
console.log(n2==n3);

// ------undefined data type in javascript-------
// ->undefined is a data type used to represent to a variable that hasn't been assigned
// any value yet.

// method 1 to create an undefined datatype (by not assigning any value to a variable)
let first_name;
console.log(first_name);

// method 2(by using undefined keyword as a value to the variable) 
let last_name=undefined;
console.log(last_name);


// .......null datatype(represents empty or unknown value)........
let f_name=null;
console.log(f_name);

// note:
// JavaScript treats undefined as the "default"
// empty value and null as the "intentional" empty value.