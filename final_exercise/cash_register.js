const cashRegister=
{
itemsforSale:[
{name:"Phone",price:300},
{name:"SmartTV",price:220},
{name:"Gaming Console",price:150}
],

shoppingCart:[],
addItem:function(name){
    let foundItem=this.itemsforSale.find(function(item)
    {
        return item.name===name;
    });
    if(foundItem)
    {
        this.shoppingCart.push(foundItem);
        console.log(`Adding ${name} to your shopping cart.`);
    }
    else{
        console.log(`sorry we dont sell ${name} here`);
    }

},
calculateTotalPrice:function()
{
    let totalPriceAmount=0;
    this.shoppingCart.forEach(function(purchasedItem){
        totalPriceAmount+=purchasedItem.price;
    });
    return totalPriceAmount;
},
pay:function(amount)
{
    let totalPriceAmount=this.calculateTotalPrice();
    if(totalPriceAmount>500){
        console.log(`You get a 10% discound and tp is ${totalPriceAmount}`);
    }
    if(amount>=totalPriceAmount)
    {
        if(amount-totalPriceAmount)
        {
            console.log(`here's your ${amount-totalPriceAmount} change`);
        }
        console.log(`thanks for the purchase ,hope you visit us again.`)
    }else{
        console.log("not enough money to make purchase");
    }
},
};