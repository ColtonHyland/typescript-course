// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean; //makes the active optional
  albums: (string | number)[];
};

type UserId = stringOrNumber;

// Literal Types

let myName: "Colton";

let userName: "Colton" | "Tyrell" | "Hyland";

userName = "Tyrell";

// Functions

const sum = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(sum(2, 3));

let difference = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number
// }

let multiply: mathFunction = function (e, f) {
  return e * f;
};

logMsg(multiply(2, 2));

// Optional parameters
//make optional param last in list

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
// rest should come at the end
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

// Type never

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; //makes the return type void isntead of never
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number'
    ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (typeof value === 'number') return 'number'
  return createError('This should never happen!')
}