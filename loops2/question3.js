//use the 'for-of' loop iterate through the array [1,2,,3,4,5] stop when 4 is found.store the number before 4 in the another variable

let numbers=[1,2,3,4,5]
let numbers2=[]

for (const num of numbers) {
    if(num===4){
        break
    }
    numbers2.push(num)
}

console.log(numbers)
console.log(numbers2)