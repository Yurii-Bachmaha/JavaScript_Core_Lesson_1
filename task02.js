"use strict"

let login;
let password;

login = "Admin";
password = "TheMaster";

console.log("Who's there?");
if (login == "Admin") {
    console.log("Password?");

    if (password == "TheMaster") {
        console.log("Welcome!");
    } else if (password == "Cancel") {
        console.log("Canceled.");
    } else {
        console.log("Wrong password.");
    }
} else if (login == "Cancel") {
    console.log("Canceled.");
} else {
    console.log("I don`t know you.");
}