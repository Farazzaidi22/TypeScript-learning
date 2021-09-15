export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // constructor(
    //     readonly client: string,
    //     public details: string,
    //     public amount: number
    // ){}
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
