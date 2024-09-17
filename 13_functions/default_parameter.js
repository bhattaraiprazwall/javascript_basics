// When defining a function, you can set a default value for any parameter in that function.
function greet(Name="Prajwal")
{
    console.log("Hello "+ Name);
}
greet();


// also Any function you define can have a mix of default and non-default parameters.
function greetme(weather,name="Prajwal",)
{
    console.log("Hello "+ name +" today the weather is " + weather);
}
greetme("cloudy");
/*Notice that the weather parameter was placed in front of the name parameter. 
This is for convenience so that you don't need to specify the default parameter.

If you place the non-default parameter after the default parameter, then you need 
to pass a value to the name parameter to get to the weather parameter.*/


// 

