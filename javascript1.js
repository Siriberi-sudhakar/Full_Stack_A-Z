// 1st concept is variables & constant

    // variables

let a = "youtube"
a = "Sudhakar"
console.log(a)

    // constant

const pie = 3.14
console.log(pie)


// 2nd concept is datatypes
    
    // Integers
    // Strings
    // Boolean
    // Float Values
    
let stringValue = "10"
let integerValue = 10
let floatValue = 10.00
let booleanValue = true // or false matrame untai
console.log(stringValue) //edhi stringu
console.log(integerValue) // edhi integer
console.log(floatValue)  // edhi float
console.log(typeof booleanValue)

// typecasting

let converted_stringValue = parseInt(stringValue)
console.log(typeof converted_stringValue)


// 3rd concept is operators

    // Arithmetic --> +, -, *, /, %
    // comparison --> ==, ===, <, >, <=, >=, !=
    // logical operators --> &&, ||
    // assignment
    
// Arithmetic

let x = 10;
let y = 10;
let add = x+y;
let sub = x-y;
let mul = x*y;
let div = x/y;
let modul_remainder = x%y;
console.log(modul_remainder)

// comparison operator gives either true or false as output

console.log(x==y) // === is strict it checks datatype also


// logical operator 

console.log(2==10 || 2==2) // minimum one expression must be true to get output as true

console.log(2==10 && 2==2) // here both expressions are must be true to get output as true

// Assignment operator

let z = 10;  // when we use single = operator that is a assignment operator



// 4th concept is control statements

    // if-else
    // if-else-if
    
//if-else

let A = 10;
let b = 20;

if(A==10){
    console.log("A is 10")
}
else{
    console.log("A is not 10")
}

// if-else-if

if(b==20){
    console.log("b is 20")
}
else if(b==10){
    console.log("b is 10")
}
else{
    console.log("b is not 10 not 20")
}


// 5th concept is loops

    // for loop
    // while loop


 // for loop

for(let i=0; i<10; i++){
    console.log(i);
}


// while loop

let j = 10

while(j<20){
    console.log(j)
    j = j + 1;
}


// 6th concept is functions


// Ex-1
function GreetUser(){
    console.log("Hello User");
}
GreetUser(); // function call

// Ex-2
function AddNumbers(x,y){
    console.log("X value : ",x);
    console.log("Y value : ",y);
    
    return x+y;
}
let C1 = AddNumbers(1,2);
console.log(C1);

let C2 = AddNumbers(2,3);
console.log(C2);

let C3 = AddNumbers(3,4);
console.log(C3);

let C4 = AddNumbers(4,5);
console.log(C4);