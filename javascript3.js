// undefined
// null

let sample;
console.log(sample); // undefined

sample = null; // null is a primitive value
console.log(sample); // null



// arrow functions

//Ex-1
const ArrowFunction = () => {
    console.log("Hello from Arrow Function");
}
ArrowFunction(); // function call


//Ex-2
const ArrowFunctionWithParams = (a,b) => {
    console.log(`A : ${a}, B : ${b}`);
}
ArrowFunctionWithParams(10,20); // function call



// arrays

//Ex-1
let cities = ["Vizag", "Hyd", "Banglore", "Chennai", "Kochi", "Pune", "Vijayawada"];
            //[  0        1      2          3            4       5         6       ]
console.log(cities[0]);
console.log(cities[3]);

console.log("---------------------");


//Ex-2 accessing elements using loop

console.log(cities.length); // length is a property which gives the size of the array

for(let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

console.log("---------------------");


//adding elements into array
cities.push("Tadepalligudem");
console.log(cities);
console.log(cities.length);

// delete last element in the array
cities.pop(cities);
console.log(cities);
console.log(cities.length);


// adding element in starting position using unshift
cities.unshift("Amaravati");
console.log(cities);
console.log(cities.length);

// deleting element from starting position using shift
cities.shift();
console.log(cities);
console.log(cities.length);

console.log("---------------------");


// objects

const car = {
    brand: "BMW",
    model: "X6 Coupe",
    varient: "Petrol",
    start:function startCar(){
        console.log("Car Started");
    },
    horn:function SoundHorn(){
        console.log("krrrrrrrrrr");
    }

}
console.log(car.brand); // accessing object property using dot operator
car.start();      // accessing object method/ functionality using dot operator
car.horn();       // accessing object method/ functionality using dot operator

console.log(Object.keys(car)); // this will give all the keys of the object in array format