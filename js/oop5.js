const baleno ={
    name: "baleno",
    price: "6lakh"
}
const glanza ={
    name: "Glanza",
    price: "7lakh"
}

glanza.__proto__ = baleno
console.log(glanza.model);