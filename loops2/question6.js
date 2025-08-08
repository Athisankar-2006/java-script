/* 

use a 'for-in' loop to loop through an object containing city population skip  "paris" is found and store all 
previous cities population in a new object named 'city population'

let citiesPopulation={
 "london":89000000,
 "newyork":84000000,
 "paris":22000000,
 "berlin":35000000
}

*/


let citiesPopulation={
 "london":89000000,
 "newyork":84000000,
 "paris":22000000,
 "berlin":35000000
}


let citiesNewPopulation={}

for (const city in citiesPopulation) {

    if(city=="paris"){
        continue;
    }
   
    citiesNewPopulation[city]=citiesPopulation[city]
        
    
}

console.log(citiesNewPopulation)