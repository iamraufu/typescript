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
var multiply = function (x, y) { return x * y; };
console.log(multiply(3, 7));
var divide;
divide = function (x, y) { return x / y; };
console.log(divide(10, 5));
var numbers = [2, 3, 4, 5, 6, 7];
numbers.push(5);
var friends = ["raufu", "prezens", 'iamraufu', "eftykhar"];
var megaName = ' ';
for (var i = 0; i < friends.length; i++) {
    var friend_1 = friends[i];
    if (friend_1.length > megaName.length) {
        megaName = friend_1;
    }
}
console.log("Friend with largest name " + megaName);
var Person = {
    name: "Raufu",
    age: 21
};
var friend;
friend = {
    name: "efty",
    age: 21
};
var Ronaldo = {
    name: "Christiano",
    club: "Real Madrid",
    salary: 60000000,
    wife: "Mrs. ronaldo",
    isPlaying: true
};
var Messy = {
    name: "Lionel",
    club: "Barcelona",
    salary: 45000000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * .1;
}
var fresherPlayer = {
    age: 31,
    salary: 25000000
};
getBonus(Messy, ["Suarez", "Neymer"]);
