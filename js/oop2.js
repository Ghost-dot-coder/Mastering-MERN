// create a class for product (id,name,price,quantity) in it a function for display products details and an object for that

class products {

    constructor(id,name,price,qty){
        this.pid = id;
        this.pname = name;
        this.pprice = price;
        this.pqty = qty;
    }
    displayproduct(){
        console.log(`product name : ${this.pname}`)
    }
}
const product1 = new products(1,"soap",20,40)
product1.displayproduct();
const product2 = new products(2,"soap",20,40)
product1.displayproduct();