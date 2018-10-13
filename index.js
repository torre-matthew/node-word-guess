let Word = require("./word");
let inquirer = require("inquirer");

let cakes = ["CARROT", "CHIFFON", "CHEESECAKE", "RED VELVET", "TRES LECHES","GERMAN CHOCOLATE"];
let indexNum = Math.floor(Math.random() * cakes.length);

let guessCake = new Word(cakes[5]);

guessCake.wordAsString();