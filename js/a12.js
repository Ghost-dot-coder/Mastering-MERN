nameArray = ["Mini", "Sini", "Rini", "Sani"];

// is Rini is present in the array or not
console.log(nameArray.includes("Rini"));

// Display the index of Rini
console.log(nameArray.indexOf("Rini"));

// remove Rini from the above array
console.log(nameArray.splice(2, 1)); //return removed element
console.log(nameArray);
