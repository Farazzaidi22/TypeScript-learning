import {Hasformatter} from '../interfaces/formatter.js'

export class Invoice implements Hasformatter {
    readonly client: string
    public details: string
    public amount: number

    constructor(c: string, d: string, a: number){
        this.client = c
        this.details = d
        this.amount = a
    }

    // constructor(
    //     readonly client: string,
    //     public details: string,
    //     public amount: number
    // ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}