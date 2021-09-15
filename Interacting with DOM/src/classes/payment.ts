import {Hasformatter} from '../interfaces/formatter.js'

export class Payment implements Hasformatter {
    readonly recipient: string
    public details: string
    public amount: number

    constructor(c: string, d: string, a: number){
        this.recipient = c
        this.details = d
        this.amount = a
    }

    // constructor(
    //     readonly recipient: string,
    //     public details: string,
    //     public amount: number
    // ){}

    format(){
        return `${this.recipient} owed $${this.amount} for ${this.details}`
    }
}