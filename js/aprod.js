
//   [id,name,price,stock]
Products =[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]
// 1. display all product name : foreach

   Products.forEach(product=> console.log(product[1]));

// 2. display product whose price < rs.50 : filter

    const filteredProducts = Products.filter(product => product[2] < 50);
console.log(filteredProducts);

// 3. print price of oreo : find
console.log((Products.find(oreo => oreo[1] === "oreo")[2] ))

// 4.print costly product name : reduce 
console.log(Products.reduce((p1,p2) => p1[2]>p2[2] ? p1:p2)) 

// 5. display out of stock product name : filter 

 const outofstockProducts = Products.filter(product => product[3] == 0);
 console.log(outofstockProducts);

// 6. sort products based on stock  in decending order : sort 
const sortProducts = Products.sort((a, b) => b[3]-a[3]  );
console.log(sortProducts);

// 7. print product having maximum availabe stock : reduce
 console.log(Products.reduce((p1,p2) => p1[3]>p2[3] ? p1:p2)) 


// 8. Is there any product can be purchased by Rs. 10;  : some
const  purchasedBy10 = Products.some(product => product[2] <= 10) ;
console.log(purchasedBy10);

// 9. Is there any product in the range of 10 to 30 ;
const range = Products.some(product => product[2] >= 10 && product[2] <= 30 ) ;
console.log(range);



// 10. Print all products in the range of 10 to 30; : filter
const productsinrange = Products.filter(product => product[2] >=10 && product[2] <= 30  );
 console.log( productsinrange);
  

