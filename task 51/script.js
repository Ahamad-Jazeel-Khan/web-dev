// let obj ={
//     a: 1,  
//     b: "Harry" 
// }

// console.log(obj)

// let animal = {
//     eats : true 
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal {
        constructor(name){
            this.name = name
             console.log ("object is created...")
        }
        eats(){
            console.log("kha raha hoon")
        }
        Jumps(){
            console.log("khood raha hoon")
        }
}

class Lion extends Animal {
    constructor(name){
        super(name)
         console.log ("object is created and he is a Lion...")
    }

    eats(){
        super.eats()
        console.log("kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion ("Shera") 
console.log (l)
