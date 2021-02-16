"use strict";
var mrX = 5;
var mrY = "50";
var mrZ = false;
var color = "red";
var fullName = "Raufu Prezens";
var age = 21;
var sentence = "Hey, it's me " + fullName + "\nI'll be " + (age + 1) + " next year.\n";
console.log(sentence);

function add(n1, n2) {
    return n1 + n2;
}
add(13, 7);
add("13", 7);

function fullName2(firstName, lastName) {
    return firstName + " " + lastName;
}
var user = fullName2('Raufu', 'Prezens');

function doubleItAndConsole(num) {
    console.log(num * 2);
}
doubleItAndConsole(10);
var multiply = function(x, y) { return x * y; };
console.log(multiply(3, 7));
var divide;
divide = function(x, y) { return x / y; };
console.log(divide(10, 5));