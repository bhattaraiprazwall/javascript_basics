// ex 1
let heads=0;
let tails=0;
for(x=1;x<=10;x++)
{
    if(Math.random()<0.5)
    {
        tails++;
    }
    else
    {
        heads++;
    }
}
console.log("tossed the coin ten times...");
console.log("Number of heads:"+heads);
console.log("Number of tails:"+tails);