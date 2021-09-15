import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// interface isPerson {
//     name: string,
//     age: number,
//     speak(a: string): void
//     spend(a: number): number
// }
// const me: isPerson = {
//     name: 'faraz',
//     age: 30,
//     speak(text: string){
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log('I spent ', amount)
//         return amount
//     }
// }
// let inv: Hasformatter
// let pay: Hasformatter
// inv = new Invoice('faraz', 'work on the mario website', 250)
// pay = new Payment('Mujji', 'work on the mario website', 350)
// let docs: Hasformatter[] = []
// docs.push(inv)
// docs.push(pay)
// console.log(docs)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.amount, inv.format())
// })
// const anchor = document.querySelector('a')! // ! means it will definetly return some value
// console.log(anchor.href)
// //console.log(anchor?.href) // ? means can have null value
