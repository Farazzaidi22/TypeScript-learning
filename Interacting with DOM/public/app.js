"use strict";
// const anchor = document.querySelector('a')! // ! means it will definetly return some value
// console.log(anchor.href)
// //console.log(anchor?.href) // ? means can have null value
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " oews $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('faraz', 'work on the mario website', 250);
var invTwo = new Invoice('Mujji', 'work on the mario website', 350);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invOne, invTwo);
