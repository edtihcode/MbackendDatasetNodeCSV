//use the fs package to read files
const fs= require('fs');

//Read cars.json and store into data variable.
let data = fs.readFileSync("datasets/cars.json","utf8");

//convert data string into actual Javascript Object.
let carsObjects = JSON.parse(data);

//Console log the carsObjects
// console.log(carsObjects);

// //Tell if it is an array or not
// console.log(Array.isArray(carsObjects.Makes));

//Pull out the array from the JSON outer object
let carsArray = carsObjects.Makes;

console.log(carsArray[1].make_country);

var items = [4,5,4,6,3,4,5,2,23,1,4,4,4];
var uniqueItems = Array.from(new Set(carsArray.make_country));
console.log(uniqueItems);

//COunt all countries
// let countryNames = [];
// let countryCounter = [];
//
//
//
// for (let i = 0; i < carsArray.length; i++) {
//
//   let currentCountry = carsArray[i].make_country;
//   let currentCountryIndex = countryNames.indexOf(currentCountry);
//
//   if (countryNames.indexOf(carsArray[i].make_country)<0) {
//       countryNames.push(carsArray[i].make_country);
//       countryCounter.push(1);
//   }else{
//       countryCounter[countryNames.indexOf(carsArray[i].make_country)]++;
//   }
// }


//AlTERNATIVE
//count all countries
//Create an object that will hold all our count
let countryCounter ={};

//Go through each of the car manufacturer..
for (let i = 0; i < carsArray.length; i++) {
    //Take the country of the current car manufacturer.
    let currentCountry= carsArray[i].make_country;

    //Check if this country already exist in our object
    if (countryCounter.hasOwnProperty(currentCountry)==false ) {
      // If it doesnt exist, add the property with the same name as the country.
      countryCounter[currentCountry]=1;
    }else {
      //If it does exist, just add a one to that propertry
      countryCounter[currentCountry]= countryCounter[currentCountry]+1;
    }
}


console.log(countryCounter);
