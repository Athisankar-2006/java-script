// encapsulation, polymorphism, abstraction,and getter setter



// encapsulation

class bankAccount{
    #balance=0;


    deposite(amount){
        this.#balance+=amount;
        return this.#balance;


    }

    getBalance(){
        return `${this.#balance}`
    }

}

// let account=new bankAccount()
// console.log(account.getBalance());



//Abstraction 

class coffemachin{
    start(){
        return `starting the machine`
    }

    brewcoffe(){
        return `brewing coffe`
    }

    pressbtn(){
       let msgone= this.start();
        let msgtwo =this.brewcoffe();
        return`${msgone}+${msgtwo}`;
    }
}

let mymachine= new coffemachin()
// console.log(mymachine.start())
// console.log(mymachine.brewcoffe())
// console.log(mymachine.pressbtn())



//polymarphism

class bird{
    fly(){
        return `flying..`
    }

}

class penguin extends bird{
    fly(){
        return `penguin can not fly`
    }
}

let birds = new bird()
let penguins=new penguin();
// console.log(birds.fly())
// console.log(penguins.fly())



//static method

class calculator{
    add(a,b){
        return a+b;
    }
}

let addition= new calculator();
// console.log(addition.add(2,3));
// console.log(calculator.add(3,4))




//// getters and setters

class emp{

     #salary;

    constructor(name,salary){
        if(salary<0){
            return `salary can not be in negative value`
        }
        this.name=name
        this._salary=salary
    }

    get salary(){
        return `your not allow to see salary`
    }

    set salary(value){
        if(value<0){
            console.error("invaild salary")
        }else{
            this._salary=value
        }

    }

}

let employee= new emp('athi',1200000)
console.log(employee._salary)
employee.salary=80000
