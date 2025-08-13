function add(...arg){
   console.log(arg);
    console.log("Add 2 numbers: ",arg.reduce((a,b)=>a+b));
}

add(10,20)
add(10,40,50)