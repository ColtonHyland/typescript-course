"use strict";
let stringArray = ["one", "hey", "Colton"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArray[0] = "Tyrell";
stringArray.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArray;
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
//console.log(typeof myObj)
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Colton",
    prop2: true,
};
exampleObj.prop1 = "Tyrell";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let JP = {
    //name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(JP));
// Enums
// "Unline most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
