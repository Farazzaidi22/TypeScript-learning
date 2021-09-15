import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('faraz', 'work on the mario website', 250);
const invTwo = new Invoice('Mujji', 'work on the mario website', 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// const anchor = document.querySelector('a')! // ! means it will definetly return some value
// console.log(anchor.href)
// //console.log(anchor?.href) // ? means can have null value
