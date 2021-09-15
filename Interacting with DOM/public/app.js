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
    // readonly client: string
    // private details: string
    // public amount: number
    // constructor(c: string, d: string, a: number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('faraz', 'work on the mario website', 250);
var invTwo = new Invoice('Mujji', 'work on the mario website', 350);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
