const inputs  = document.querySelectorAll('input')

console.log(inputs)

const circle = function (diameter: number) {
    return diameter * Math.PI
}

console.log(circle(7.5))

let stringArray = ['faraz', 'muj', 'dan']

stringArray.push('amil')
//stringArray.push(3)

let mixed = ['faraz', 'koups', 08, 25]

mixed.push(07)
mixed.push('sophia')
mixed[2] = 'Kounapl'
mixed[1] = 08

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 22
}

ninja.age = 23
ninja.name = 'ryu'
//ninja.age = '30'

let character: string
let age: number
let isLoggedIn: boolean

//age  = 'faraz'

character = 'faraz'

let ninjas: string[] = [] //empty array
ninjas.push('rasheed')

let mixedTypeArray: (string|number)[] = []
mixedTypeArray.push('kharadari')
mixedTypeArray.push(60)

let id: string|number
id = 'kkk12'
id = 32

let ninjaObj: object
ninjaObj = { name: 'youshi', age: 30}

let ninjaObj1: {
    name: string,
    age: number,
    beltColor: string
}

let age: any =25
age = true
console.log(age)

age = 'faraz'
console.log(age)
