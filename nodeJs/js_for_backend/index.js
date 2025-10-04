// functions
// Arrow functions

function Sayhello(name){
    console.log("Hello "+name);
}
Sayhello("Sudhakar");


const greet = (name) =>{
    console.log("Hello from arrow function " + name);
}
greet("Sudhakar");

// objects

let personOne = {
    Name: "Sudhakar",
    age: '21',
    DOB: "01-01-2002"
}
let personTwo = {
    name: "X",
    age: '45',
    DOB: "01-01-2002" 
}
console.log(personOne.age);

// const personName = personOne.name;
// const personAge = personOne.age;
// const personDOB = personOne.DOB;

// console.log(personName, personAge, personDOB);

// Destructuring
const {Name, age, DOB} = personOne;
console.log(Name, age, DOB);

let objectOne = {
    name: "X",
    age: '45',
    DOB: "01-01-2002" 
}
console.log(typeof objectOne);
console.log(objectOne);
console.log("-------------------")

let stringifiedobject = JSON.stringify(objectOne);
console.log(typeof stringifiedobject);
console.log(stringifiedobject);
console.log("-------------------")

let parsedObject = JSON.parse(stringifiedobject);
console.log(typeof parsedObject);
console.log(parsedObject);

async function getJoke()
{
    let k = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,sexist", {
        method: "GET"
    })
    let data = await k.json();
    console.log(data);
    console.log("line : 64");
}
getJoke();