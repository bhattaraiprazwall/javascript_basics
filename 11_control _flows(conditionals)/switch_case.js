// The switch statement is a part of core JavaScript syntax that allows you to control the execution flow of your code.
let age=50;
switch(age)
{
    case 10:
        console.log("age is 10");
        break;

    case 20:
        console.log("age is 20");
        break;

    case 50:
        console.log("age is 50");
        break;
    
    default:
        console.log("no matching age");
}

/*Note:Keep in mind the data type of the case value that you want to match with the expression. If you want to match a string,
 then you need to put a string. switch statements won't perform type coercion when you have a number as the argument but put a
 string for the case:*/
 switch(1)
 {
    case "1":
        console.log("Hello world");
        break;

    default:
        console.log("The End");
 }


 /*The same also happens for boolean values. The number 1 won't be coerced as true and the number 0 won't be coerced as false.*/
 switch(0)
 {
    case true:
        console.log("true case");
    
    case false:
        console.log("false case");

    default:
        console.log("The end.....");
 }

//  you can also put expressions as case values..
switch(20)
{
    case 10+10:
    console.log("value is 20");
}

// not working cases of switch statements

let ages = 5;

switch (ages) {
  case ages < 10:
    console.log("Value is less than ten");
    break;
  case ages < 20:
    console.log("Value is less than twenty");
    break;
  default:
    console.log("Value is twenty or more");
}

// note: The value for a case block must exactly match the switch argument.


// Programs
let myFood="apple";
switch(myFood)
{
    case "Banana":
    case "apple":
        console.log("Eat fruits everyday to keep you healthy.");
        break;
    case "Chocolate Cake":
        console.log("Enjoy the sweet treat.");
        break;

    default:
        console.log("Exe Complete");
}
