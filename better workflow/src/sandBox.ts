let chk = true
console.log('test')

let gree = () => {
    console.log("hello")
}

let func: Function

func = () => {
    console.log("func")
}

const add = (a:  number, b:number, c?: number | string):void =>{
    console.log(a + b)
    console.log(c)
}

add(2,3)

type StringOrNum = string | number
type objWithName = {name: string, id: StringOrNum}

const logDetails = (id: StringOrNum, item: string){
    console.log(`${item} has a id of ${id}`)
}

const gre = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}

let func1: (a:string, b: string) => void

func1 = (name: string, greeting: string) => {
    console.log(`${name} says hi`)
}