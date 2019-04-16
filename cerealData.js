
//Use FS from Node
const fs = require("fs");

//Read cereal.csv
let data = fs.readFileSync("datasets/cereal.csv" ,"utf8");

//Check data type of data.
console.log(typeof data);

//Split data string by new lines into Array.
let lines = data.split("\n");

//Test if lines is an array.
console.log("lines variable is an array " +Array.isArray(lines));

//Grab fist line of lines.
let firstLine =lines[0];

//Split firstLine
fistLine = firstLine.split(";");

//COnsole log first line.
console.log(firstLine);

//Get rif of \r from last index.
let lastProperty = firstLine[firstLine.length -1];

//Console log lastPropertty
console.log(lastProperty);

lastProperty = lastProperty.split("");
lastProperty.pop();
lastProperty= lastProperty.join("");
firstLine[firstLine.length -1]=lastProperty;
console.log(lastProperty);
//Ceral class
class Cereal {
  constructor(string) {

      let currentCereal = string.split(";");
      this.name = currentCereal[0];
      this.manufacturer= currentCereal[1];
      this.type= currentCereal[2];
      this.calories= currentCereal[3];
      this.protein= currentCereal[4];
      this.fat= currentCereal[5];
      this.sodiun= currentCereal[6];
      this.fiber= currentCereal[7];
      this.carbs= currentCereal[8];
      this.sugar= currentCereal[9];
      this.potassium= currentCereal[10];
      this.vatamins= currentCereal[11];
      this.shelf= currentCereal[12];
      this.weight= currentCereal[13];
      this.cups= currentCereal[14];
      this.rating= currentCereal[15];
  }
}
let cerealObjects = [];
for (var i = 2; i < lines.length; i++) {
  cerealObjects.push(new Cereal(lines[i]));
}
//Find the average grams of sugar in thje 80 cereal brands
// Grab value of sugar from every cereal.

for (var i = 0; i < cerealObjects.length; i++) {
  console.log(cerealObjects[i].sugar);
}

console.log(cerealObjects[0].sugar, cerealObjects[cerealObjects.length-1].sugar);

let sum = 0

for (let i = 0; i < cerealObjects.length; i++) {
 sum = cerealObjects[i].sugar + sum;
}
let averageSugar = sum/ cerealObjects;

console.log(averageSugar);



console.log(cerealObjects[56].name);
let myFirstCereal = new Cereal(lines[2]);
console.log(`The cereal ${myFirstCereal.name} has a total of ${myFirstCereal.sugar} grams of sugar`);
