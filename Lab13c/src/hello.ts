export{};

let msg:string = "hello world";
console.log(msg);

function calcTotal(subtotal: number, tax: number): number { 
    return subtotal + (subtotal*tax); 
} 

msg = 'Total = '; 
let subtotal = 200;
let total: number = calcTotal(subtotal,0.05); 
 console.log(msg + total);