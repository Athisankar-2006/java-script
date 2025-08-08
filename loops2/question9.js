/* 

write a 'for'that iteratte through the array [3,5,7,9] skip 7 and multiple rest value by 2. print that value in an new array
 
*/

let arr=[3,5,7,9]
let multiplearr=[]

for (let i=0;i<arr.length;i++){
    if(arr[i]==7){
        continue
    }

    multiplearr.push(arr[i]*2)
}

console.log(multiplearr)