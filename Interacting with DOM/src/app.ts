// const anchor = document.querySelector('a')! // ! means it will definetly return some value

// console.log(anchor.href)

// //console.log(anchor?.href) // ? means can have null value


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

class Invoice {
    // readonly client: string
    // private details: string
    // public amount: number

    // constructor(c: string, d: string, a: number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }

    constructor(
        readonly client: string,
        public details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('faraz', 'work on the mario website', 250)
const invTwo = new Invoice('Mujji', 'work on the mario website', 350)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})