var car = {
  name: "Duster",
  model: "SUV",
  manufacturer: "Renault",
  price: "15 Lakh",
};
// Display the car name and its manufacturer
console.log(`Car name: ${car.name}\nManufacturer:${car.manufacturer}`);

// check if "model" key is present then display its value
console.log("model" in car ? `Model:${car.model}` : "Not present");

// add varient as automatic, manual
Object.assign(car, { Varient: ["Automatic", "Manual"] });
console.log(car);

// add "color"
Object.assign(car, { Color: ["Red", "Titanium", "Iron", "Black", "Ash"] });
console.log(car);
