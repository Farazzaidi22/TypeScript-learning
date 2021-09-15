interface isPerson {
    name: string,
    age: number,
    speak(a: string): void
    spend(a: number): number
}

const me: isPerson = {
    name: 'faraz',
    age: 30,

    speak(text: string){
        console.log(text)
    },

    spend(amount: number): number {
        console.log('I spent ', amount)
        return amount
    }
}


import {Invoice} from './classes/invoice.js'

const invOne = new Invoice('faraz', 'work on the mario website', 250)
const invTwo = new Invoice('Mujji', 'work on the mario website', 350)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)


const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

// const anchor = document.querySelector('a')! // ! means it will definetly return some value

// console.log(anchor.href)

// //console.log(anchor?.href) // ? means can have null value