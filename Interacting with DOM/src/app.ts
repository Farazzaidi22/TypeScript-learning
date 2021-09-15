import {Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import {Payment} from './classes/payment.js'
import {Hasformatter} from './interfaces/formatter.js'


const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)


const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: Hasformatter
    if(type.value === 'invoice'){
        doc = new Invoice( tofrom.value,details.value,amount.valueAsNumber)
    }
    else{
        doc = new Payment( tofrom.value,details.value,amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})

const addId = <T extends {name: string, age: number}>(obj: T) => {
    let id = Math.floor(Math.random() * 100)
    return {...obj, id}
}

let docOne = addId( {name: 'faraz', age: 23} )
console.log(docOne.age)

interface Resource<T> {
    uid: number,
    resName: string,
    data: T
}

const docThree: Resource<object> = {
    uid: 1,
    resName: 'person',
    data: { name: 'faraz'}
}


const docFour: Resource<string[]> = {
    uid: 2,
    resName: 'shoppingList',
    data: ['milk', 'eggs', 'chips']
}

console.log(docThree, docFour)

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