/*Consider array of objects as below: 
const sales = [ 
{ item: 'PS4 Pro', stock: 3, original: 399.99 }, 
{ item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
{ item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
{ item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
{ item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
]; 
You will pass this array to a function and the function should return something like this:
[   {   Item:’PS4 Pro’, Stock: 3, Original: 399.99, Sale: 399.99, Total: 1199.97  }, 
    {   Item: 'Xbox One X', Stock: 1, Original: 499.99, Discount:0.1, Sale: 449.98, Total: 449.98  } 
];*/ 

const sales = [ 
    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    ];

function calculate(arr){
    let output =[];
    for(orderitem of arr){
        (function({item,stock,original,discount=0,Sale=0,total=0})
        {
            Sale=original-(original*discount);
            Sale = Sale.toFixed(3);
            total = stock * (Sale);
            total = total.toFixed(3);
            output.push({item,stock,original,discount,Sale,total});
        }(orderitem));
        //output.push(item);
    }
    
    return output;
}

function ShowOutput(){ 
let output = calculate(sales);
document.getElementById("outputArea").innerHTML = "&emsp;[<br>&emsp;";
for(items of output){
    console.log(document.getElementById("outputArea").innerHTML);
    document.getElementById("outputArea").innerHTML += JSON.stringify(items);
    document.getElementById("outputArea").innerHTML += "<br>&emsp;";
}
document.getElementById("outputArea").innerHTML += "]";
console.log(output);
}