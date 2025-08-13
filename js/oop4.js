class parent{
    showMyCar(){
        console.log("My car is Benz")
    }
}
 class child extends parent{
    showMyCar(){
        console.log("Hai hello")
    }
 }
 const ch = new child();
 ch.showMyCar();
