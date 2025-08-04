// write a for loop that multiple the each element in the array [2,4,6] by 2 and store the ansswer into the new array

arr=[2,4,6]
result=[]

for(let i=0;i<arr.length;i++){
    takenum= arr[i] * 2  ;
    result.push(takenum);


}

console.log(result)