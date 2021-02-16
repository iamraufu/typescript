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

const numbers:number[]=[2,3,4,5,6,7]
numbers.push(5)

const friends:string[]=["raufu","prezens",'iamraufu',"eftykhar"]
let megaName:string = ' '
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if(friend.length>megaName.length){
        megaName = friend
    }
}
console.log("Friend with largest name "+ megaName)

const Person = {
    name : "Raufu",
    age: 21
}

let friend:{
    name:string,
    age:number
}
friend={
    name:"efty",
    age:21
}