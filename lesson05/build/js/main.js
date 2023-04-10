"use strict";
// convert to more/less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific
let d = "world";
let e = "world"; // syntax won't work in React
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//tells typescript to ignore type error
let myVal = addOrConcat(2, 2, 'concat');
// Be careful, we told typescript there is no problem - but a string
// is returned.
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string;
10; // forced Casting
// The Document Object Model (DOM)
const img = document.querySelector('img'); // non-null assertion
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); // does not work in react
img.src;
myImg.src;
