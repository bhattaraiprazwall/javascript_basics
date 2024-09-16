// Parameters are variables used to accept inputs given when the function is called.
// You can specify parameters in the function header, inside the parentheses.

function mname(name)
{
    console.log("Hello "+name);
}
mname("prajwal");
/*Note :::::here mname is the function name , name is the function parameter and "prajwal" is the
input you passed to fill a parameter which is called an argument....*/

/*You can have more than one parameter when defining the function, but you need to split each parameter
 with a comma as follows: */
 function greet(name,weather)
 {
    console.log("Hello "+name+weather);
 }
 greet("Prajwal ","Summer");

//  undefined parameter
function greet(name,weather)
 {
    console.log("Hello "+name+weather);
 }
 greet("Prajwal ");