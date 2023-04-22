let products=
[
    {Product_Id:1,Price:1000},
    {Product_Id:2,Price:2000},
    {Product_Id:3,Price:500}
]

products.sort((a,b)=>a.Price-b.Price)

console.log(products)