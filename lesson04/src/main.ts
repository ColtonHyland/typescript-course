type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string,
  active: boolean, //makes the active optional
  albums: (string | number)[]
}

type
