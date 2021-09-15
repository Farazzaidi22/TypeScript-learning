export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    // constructor(
    //     readonly recipient: string,
    //     public details: string,
    //     public amount: number
    // ){}
    format() {
        return `${this.recipient} owed $${this.amount} for ${this.details}`;
    }
}
