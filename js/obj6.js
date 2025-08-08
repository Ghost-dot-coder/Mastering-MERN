products = [
  { pid: 100, pName: "apple", band: "5g", price: 120000, display: "led" },

  { pid: 101, pName: "samsung", band: "5g", price: 45000, display: "led" },

  { pid: 102, pName: "blackberry", band: "4g", price: 50000, display: "led" },

  { pid: 103, pName: "nokia", band: "3g", price: 1200, display: "lcd" },

  { pid: 104, pName: "motorola", band: "4g", price: 10000, display: "lcd" },
];

// 1. print product name only :

console.log("-------------All products------------------");
products.forEach((product) => {
  console.log(product.pName);
});

// 2. print all mobile details whose display is lcd :

console.log("-------------display is lcd------------------");
products.forEach((product) => {
  if (product.display == "lcd") {
    console.log(product);
  }
});

// 3. print 5g mobile phone Names :

console.log("-------------5g mobile phone Names------------------");
products.forEach((product) => {
  if (product.band == "5g") {
    console.log(product.pName);
  }
});
// 4. sort mobile based on price :
sorted = [];
console.log("-------------sort mobile based on price------------------");
products
  .sort((a, b) => b.price - a.price)
  .forEach((dec) => console.log(dec.pName));

// 5. print costly mobile :
console.log(
  `Highest cost = ${
    products.reduce((a, b) => (a.price > b.price ? a : b)).pName
  }`
);

// 6. print low cost mobile :
console.log(
  `Lowest cost = ${
    products.reduce((a, b) => (a.price < b.price ? a : b)).pName
  }`
);
