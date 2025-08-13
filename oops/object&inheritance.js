let car ={
    make:"toyoto",
    model:"camry",
    year:"2020",

    start:function(){
        return `${this.make} car got started in ${this.year}`
    }
}
// console.log(car.start())


function person(name,age){
    this.name=name
    this.age=age
}

let john =new person("john",12)
// console.log(john.name , john.age)


function animal(type){
    this.type=type

}
animal.prototype.speak=function(){
    return `${this.type} make a sound`
}

// let dog =new animal("dog")
// console.log(dog.speak())


Array.prototype.athi=function(){
    return `custom method ${this}`
}

let myarr=[1,2,3]
// console.log(myarr.athi())

let myarray=[1,2,3,4,5,6]
// console.log(myarray.athi())



// inheritance in a class

class vehicle{

    constructor(make,model){
        this.make=make
        this.model=model

    }

    start(){
        return `${this.model} is a car from ${this.make}`;

    }
}

class cars extends vehicle{
    drive(){
        return `${this.make} this is easy to drive`
    }

}

let mycar= new cars("toyoto","corolla")
// console.log(mycar.start())
// console.log(mycar.drive())

let vehone= new vehicle("toyota","corolla")
console.log(vehone.start())
console.log(vehone.make)