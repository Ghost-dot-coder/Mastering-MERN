// hoisting - possible in var
console.log(firstData)

var firstData 
console.log(firstData,"is", typeof firstData)

var firstData = 34 
console.log(firstData,"is", typeof firstData)

var firstData = "Hello World"
console.log(firstData,"is", typeof firstData)

// hoisting
// console.log(secondDataData)


const secondData = "this is second data";
console.log(secondData)


let i=1
for(let i=1; i<=3 ; i++){
    console.log(i);
}
console.log(i);