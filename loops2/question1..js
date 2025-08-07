//create a element with "normal tea" element, stores the all element in the another array until it reach that normal tea 
//once it reach it break the loop  (break)

let tea1=["black tea","green tea","blue tea","ginger tea","normal tea","milk"]

let tea2=[]

for(let i=0; i<tea1.length;i++){
    if (tea1[i]==="normal tea"){
        break;
    }
     tea2.push(tea1[i])
}

console.log(tea2)