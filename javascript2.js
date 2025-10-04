// if, else-if

// formal way of writing if statement

let k=10;
// if(k%2==0){
//     console.log("k is even number")
// }
// else{
//     console.log("k is odd number")
// }

// mordern way of writing if statement with ternary operator(?)

k%2==0?console.log(k,"is even number"):console.log("k is odd number");
// condition ? execute when condition is true : execute when condition is false

// break statement | break statement is only used in loops

// for(let i=0; i<10; i++){
//     console.log(i);
//     if(i==5){
//         break;
//     }
// }
// console.log("loop break");

let i=0;
while(i<10){
    // console.log("Current I value is : ",i);
    console.log(`Current I value is : ${i}`); // this is called as template literal using backticks
    let a = 55;
    if(i==5){
        break;
    }
    i++
}
console.log("loop break");


// js variable scopes 

    // 1. Block scope
    // 2. Function scope
    // 3. Global scope


// 1. Block scope and global scope
console.log(`k value is : ${k}`); // k is accessible here because k is declared in global scope
console.log(`i value is : ${i}`); // i is accessible here because i is declared in global scope
//console.log(`a value is : ${a}`); // a is not accessible here because a is declared in block scope

   // when you uncomment a above line and run you will get ReferenceError: a is not defined


// 2. Function scope

function SampleFunction(){
    console.log("Global scope",k);
    let FS = 99;
    console.log("line 61: ",FS);
}
SampleFunction();
// console.log("line 60: ",FS); // FS is not accessible here because FS is declared in function scope


// return statement

function AddNumbers(a,b){
    let sum = a + b;
    return sum;
};
console.log(AddNumbers(1,2)); // function call
