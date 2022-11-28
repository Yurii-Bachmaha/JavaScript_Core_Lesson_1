"use strict"

let login;
let password;

login = "Admin";
password = "TheMaster";

switch (login) {
    case "Admin":{
        switch(password){
            case "TheMaster":{
                console.log("Welcome!");
                break;
            }
            case "Cancel":{
                console.log("Canceled.");
                break;
            }
            default:{
                console.log("Wrong password.");
                break;
            }
        }
    }
    break;
    case"Cancel":{
        console.log("Canceled.");
        break;
    }
    default:{
        console.log("I don`t know you.");
        break;
    }
}