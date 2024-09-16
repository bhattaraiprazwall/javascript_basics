/*Write a program that prints a half pyramid using asterisks * as shown below:

*
**
***
****
*****


*/
let pattern;
for(i=1;i<6;i++)
{
   pattern=" ";
   for(j=1;j<=i;j++)
    {
        pattern+="*";
    }
    console.log(pattern);
}


/*Next, print a reverse half pyramid as follows:

*****
****
***
**
*

*/

let Ipattern;
console.log("Inverse Pattern:");
for(i=4;i>=0;i--)
{
    Ipattern=" ";
    for(j=0;j<=i;j++)
    {
        Ipattern+="*";
    }
    console.log(Ipattern);
}