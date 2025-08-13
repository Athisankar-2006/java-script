
//create a class and call it

function car(name,model){
    this.name=name
    this.model=model
}

let mycar=new car('tata','safari');
// console.log(mycar)

let mynewcar=new car('toyoto','camry');
// console.log(mynewcar)


function teatype(type){
    this.type=type
    this.describe= function(){
        return `this is a cup of ${this.type}`
    }
}


let lemontea=new teatype('lemontea');
// console.log(lemontea.describe())




// another way to define a constructor

function Animal(species){
    this.species=species

}

Animal.prototype.sound=function(){
    return `${this.species} make sound`
}

let dog=new Animal('dog')
console.log(dog.sound())


let cat=new Animal('cat')
console.log(cat.sound())