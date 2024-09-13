/* An array is an object data type that can be used to store or hold more than one value.
  -an array can be a list of strings ,numbers , booleans ,objects ,or a mix of all of them.
  -array in js is created by using square brackets and the items or elements separated by comma.
*/

// examples of array
let cars=["bmw","mercedes","range rover","lamborgini"];
console.log(cars);

// empty array created and provided elements later
let animals=[];
animals[0]="dog";
animals[1]="horse";
animals[2]="leopard";
console.log(animals);

// mixed array of different datatypes
let mixedArray=["bird",true,10,5.18];
console.log(mixedArray);
console.log(mixedArray[1]);//accesing array element via array index
mixedArray[0]="parrot";// assigning a new value to a specific index using assignment operator
console.log(mixedArray);

// another way of declaring array using "new" keyword
let birds=new Array("parrot","eagle","woodpecker");
console.log(birds);

// special methods of array manipulation
// 1. push() method : used for inserting item or element to the end of the array
console.log("array push() method");
let birdss=["parrot","owl"];
birdss.push("Eagle");
console.log(birdss);

// 2. pop() method: used for removing item or element from the end of the array
console.log("pop method()");
birdss.pop();
console.log(birdss);

// 3.unshift() method:used for inserting an item from the front at array index [0]
console.log("unshift method()");
birdss.unshift("Vulture"); 
console.log(birdss);

// 4.shift() method :used for removing item from index [0]
console.log("shift() method");
birdss.shift();
console.log(birdss);

// 5. indexOf() method : used for finding and returning the index of an item in the array
let fishes=["salmon","goldfish","tuna"];
console.log(fishes.indexOf("goldfish"));
console.log(fishes.indexOf("asala")); // The method will return -1 when the item is not found inside the array


// 6. length property is used to know the size of the array
console.log(fishes.length);


/*............ Exercise 4(Array).................*/

// Create an array named colors that include the 'red', 'green, and 'blue' colors.
let colors=["red","green","blue"];
console.log(colors);

// First, add a 'black' color after the last index of the array. Then print the array.
colors.push("black");
console.log(colors);

// Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.
colors.shift();
colors[0]="blue";
colors[1]="green";
console.log(colors);

// Finally, add the color 'yellow' on the first index of the array, then print the array.
colors.unshift("yellow");
console.log(colors);
