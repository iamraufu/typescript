let mrX: number = 5
let mrY: string = "50"
let mrZ: boolean = false
let color: string = "red"

let fullName: string = "Raufu Prezens"
let age: number = 21
let sentence: string = `Hey, it's me ${fullName}
I'll be ${age+1} next year.
`
console.log(sentence)

function add(n1:any,n2:number | string){
    return n1+n2
}

add(13,7)
add("13",7)

function fullName2(firstName:string,lastName:string):string{
    return firstName+ " " + lastName
}

const user = fullName2('Raufu','Prezens')

function doubleItAndConsole(num:number):void{
    console.log(num*2)
}

doubleItAndConsole(10)

const multiply = (x:number,y:number):number=> x*y
console.log(multiply(3,7))

let divide:(x:number,y:number)=>number;

divide =(x,y)=>x/y

console.log(divide(10,5))