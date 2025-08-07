//use the 'for-of' loop iterate through the array ['apple',banana','orenge','lemon'] skip banana.
// store the other elements in another variable


let fruites=['apple','banana','orenge','lemon']
let fruites2=[]

for (const fruit of fruites) {
    if(fruit === 'banana'){
        continue
    }
    fruites2.push(fruit)
}


console.log(fruites)
console.log(fruites2)