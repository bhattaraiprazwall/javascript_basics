/*operators are the symbols that are used to perform operations in the data
There are basically 8 types of operators used in java script.
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.String Operators
5.Logical Operators
6.Bitwise Operators
7.Ternary Operators
8.Typeof Operators
*/

// 1.Arithmetic operators
// Exponential Operator example
// The exponential operator (**) raises the first operand to the power of the second operand.//
let x=5;
let y=2;
let z=x**y;
// or
console.log(Math.pow(x,y));
console.log(z);


// 2.Assignment Operator
// In JavaScript, the assignment operator is used to assign data or a value to a variable.
let name="ram";
console.log(name);

let on =true;
console.log(on);

// 3.Comparison Operators
// Comparision operators are used to compare two values that returns two boolean values either "true" or "false".
// Examples of comparision operators 
let b=5;
let c="5";
let d=10;
console.log(b==c);
console.log(b===c);
console.log(b!=d);
console.log(b!==c);
console.log(b>c);
console.log(b>=d);
console.log(b<=d);
// string comparision
console.log("String Comparision");
console.log("abc"=="abc");
console.log("abc"=="ABC");// Note: string comparisions are case sensative in js


/* 4.Logical Operators
....Logical Operators are used to check whether one or more expressions result either in true or false.
-There are the three types of logical operators in js.
a.Logical AND(x&&y) that returns true if all operands are true ,else returns false.
b.Logical OR(x||y) , that returns true if one operand is true ,else returns false.
c.Logical NOT(!x), that reverses the result , returns true if false and vice versa.
*/ 

// Examples of Logical Operators
console.log("logical Operators");
console.log(5 > 4 && 8>2);
console.log(true&&false);
console.log(true||false);
console.log(false||false);
console.log(!true);


/* 5. Typeof Operator
Typeof operator is used to find out or check the datatype of data.
*/

// Example:
console.log("Typeof Operator:");
let k=5;
console.log(typeof k);
console.log(typeof "Ram");
console.log(typeof true);


/*EXERCISE #3
Guess the result of these operators in action:
*/
console.log("Exercise:");
console.log(19 % 3);//1
console.log(10 == 3);//false
console.log(10 !== "10");//true
console.log(2 < "10");//true
console.log("5" > 2);//true
console.log((false && true) || false);//false


/* 6. Ternary Operator 
-The ternary operator is a shortcut for writing simple if-else statements, which is also known as conditional operator
 because it works based on a condition.
 Syntax: condition ? trueExpression : falseExpression
*/

// Example of ternary operator
console.log("Ternary Operator:");
function hello(){
    let pmarks=40;
    let result=(pmarks>=40)? "Pass":"Fail";
    console.log(result);
}
hello();


function nestedternaryoperator(){
    let marks=40;
    let result=(marks<=40)?"unsatisfactory":(marks<60)?"Average":(marks<80)?"Good":"Excellent";
    console.log(result);
}
nestedternaryoperator();




