type One = string;
type Two = string | number;
type Three = "hello";

// convert to more/less specific
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world"; // syntax won't work in React

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
}

//tells typescript to ignore type error
let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful, we told typescript there is no problem - but a string
// is returned.
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

//10 as string;
(10 as unknown) as string; // forced Casting

// The Document Object Model (DOM)
const img = document.querySelector('img')!; // non-null assertion
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img'); // does not work in react

img.src;
myImg.src