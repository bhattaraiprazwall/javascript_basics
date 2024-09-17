// A function can also have a return statement inside the code block. A return statement is used to return a value back to the caller.
// Example
function sum(a,b)
{
    return a+b;
}
console.log(sum(1,2));

// also the value returned by a function can be assigned to a variable for further operations.
function diff(a,b)
{
    return a-b;
}
let difference=diff(5,2);
console.log(difference);


// dual return statements
function checkAge(age)
{
    if(age>20)
    {
        return "You may get a car license";
    }
    return "You may not get a car license";
}
console.log(checkAge(21));
console.log(checkAge(16));

// stopping the function execution by not specifying any return value
function welcome()
{
    console.log("hello");
    return;
    console.log("good bye");
}
welcome();