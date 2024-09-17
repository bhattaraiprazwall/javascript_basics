/*The rest parameter is a parameter that can accept any number of data as its arguments.
 The arguments will be stored as an array.*/

//  ->You can define a rest parameter in the function header by adding triple dots ... before the parameter name.

// example
function printArguments(...args)
{
    console.log(args);
}

printArguments("a","b","c","d");
printArguments(1,2,3,4,5);