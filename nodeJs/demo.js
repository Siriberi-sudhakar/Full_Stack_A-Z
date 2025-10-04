const registerUser = require('./Registration');
const os = require('os');
const fs = require('fs');

function sayHello(){
    console.log("Hello, From nodeJs");
}
sayHello();

const isExisting = registerUser.CheckForUser();

if(isExisting){
    console.log("User already exists");
}
else{
    registerUser.RegisterUser();
}


console.log(os.hostname());
console.log(os.freemem());

fs.writeFile('./nodejs/sample.txt','Testing fs module',(err)=>{
    if(err){
        console.log("error occured");
        return;
    }
    else{
        console.log("File created successfully");
    }
});

fs.readFile('./nodejs/sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error occured");
        return;
    }
    else{
        console.log('data in file :',data);
    }
});


// npm - node package manager

const express = require('express');

const app = express();


app.listen(3000,()=>{
    console.log("Server started at port 3000");
})

// default route
app.get('/',(req,res)=>{
    res.send("Hello from express");
});

app.get('/about',(req,res)=>{
    res.send("This is about page");
});

app.post('/saybye',(req,res)=>{
    res.send("Post Route");
})

app.post('/postUserDatails',(req,res)=>{
    res.send("post user details route");
})

app.put('/updateUserDetails',(req,res)=>{
    res.send("update user details route");
})

app.delete('/deleteUser',(req,res)=>{
    res.send("delete user route");
});



// crud - create read update delete
//         post   get  put   delete

// rest api - representational state transfer api

