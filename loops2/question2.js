/// create an array cities skip a element in an array and then print the other all element in an new array (continue)


let cities=['paries','newyork','landon','tokyo','delhi']
let cities2=[]

for(let i=0;i<cities.length;i++){
    if(cities[i]=== 'landon'){
        continue;
    }
    cities2.push(cities[i])
}

console.log(cities)
console.log(cities2)