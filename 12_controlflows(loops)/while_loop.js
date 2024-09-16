let i=0;
while(i<6)
{
    console.log(i);
    i++;
}

// ex 1
let flips=0;
let isHeads=false;
while(!isHeads)
{
    flips++;
    isHeads=Math.random()<0.5;
}
console.log("It took "+ flips + " flips to get heads");
