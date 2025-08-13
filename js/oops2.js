// create a class for product (id, name, price, quantity) in it a function for display products details and an object for that

class Product {
  constructor(id, name, price, quantity) {
    this.proid = id;
    this.proname = name;
    this.proprice = price;
    this.proquantity = quantity;
  }
  disPro() {
    console.log(this.proid, this.proname, this.proprice, this.proquantity);
  }
}
const pro1 = new Product(1, "apple", 50, 4);
pro1.disPro();
