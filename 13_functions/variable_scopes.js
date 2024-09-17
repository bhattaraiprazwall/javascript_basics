/*
->A variable declared inside a function can only be accessed from that function. 
  This is because that variable has a local scope.

->On the other hand, a variable declared outside of any block is known as a global variable
  because of its global scope.
 */
// example of local variable or block variable
function scope()
{
    let name="Prajwal";
}
scope();
// console.log(name);

//global variable
let myName="prajwal";
function myname()
{
    console.log(myName);
}
myname();

// NOTE: this applies only to variables declared using let and const.


//we can also define a local variable with the same name as the global variable without overwriting it.
let myString="hello world";
function hello()
{
    let myString="Good mrng";
    console.log(myString);

}
hello();
console.log(myString);