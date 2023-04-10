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
let bands: string[] = [];
bands.push("Van Halen");

//Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

myTuple[1] = 42;

// Objects

let myObj: object;
myObj = [];
//console.log(typeof myObj)
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Colton",
  prop2: true,
}

exampleObj.prop1 = "Tyrell";

// type Guitarist = {
//   name: string,
//   active?: boolean, //makes the active optional
//   albums: (string | number)[]
// }


interface Guitarist {
  name?: string,
  active: boolean, //makes the active optional
  albums: (string | number)[]
}


let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, 'OU812']
}

let JP: Guitarist = {
  //name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"]
}


const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name){
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return `Hello!`
}

console.log(greetGuitarist(JP))


// Enums
// "Unline most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.B)