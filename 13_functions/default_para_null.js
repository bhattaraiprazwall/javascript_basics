/*When you pass undefined to a function that has a default parameter, the default parameter will be used:
*/

/*undefined as the "default" empty value and null as the "intentional" empty value.*/
function greet(name="Prajwal")
{
    console.log(name);
}
greet(undefined); //Prajwal


// But when you pass null to the function, the default parameter will be ignored:
// Example
function greet1(namee="Prajwol")
{
    console.log(namee);

}
greet1(null); //output is null