// module

function CheckForUser(){
    console.log("Checking for user");
    return false;
}

function registerUser(){
    console.log("Registration Successful");
}

module.exports = {
    CheckForUser : CheckForUser,
    RegisterUser : registerUser
}