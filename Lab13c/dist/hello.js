"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let msg = "hello world";
console.log(msg);
function calcTotal(subtotal, tax) {
    return subtotal + (subtotal * tax);
}
msg = 'Total = ';
let subtotal = 200;
let total = calcTotal(subtotal, 0.05);
console.log(msg + total);
