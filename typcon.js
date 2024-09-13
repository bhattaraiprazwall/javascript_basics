/*type conversion is a process of changing the data from one type to another 
There are 3 functions frequently used to do type conversion
1.Number()
2.String()
3.Boolean()
*/

// string to number
let a="7";
let b=2;
// converting a to integer data type
a=Number(a);
console.log(a+b);


// converting variable to number using "+" unary operator
let c="5";
let d= +c; // this converts the value of c to Number() type by the preceding use of + operator
console.log(typeof(d));


// number to string
let x="HelloNJR";
let y=10;
// converting y value to string
y=String(y);
console.log(x+y);

/* TYPE COERCION: In JavaScript, type coercion is a process where a value of one type
 is implicitly converted into another type. */

 console.log(1+"1");
 console.log([1,2]+"1");
 console.log(true+1);
 console.log(true+"1");
 console.log({ a: 1 } + "1");// 1
 console.log(typeof({ a: 1 } + "1")); 
 console.log([1,2] + 1); // "1,21"
 let myNumber = 1;
console.log(myNumber + "1"); // prints 11
console.log(myNumber); // still prints number 1 and not string


let price="50";
let tax=5;
let totalPrice =Number(price)+tax;
console.log(totalPrice);

