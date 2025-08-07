/* 

use a 'for-in' loop to loop through an object containing city population stop the loop when the population of "berline" is found and store all 
previous cities population in a new object named 'city population'

let citiesPopulation={
 "london"=89000000,
 "newyork"=84000000,
 "paris"=22000000,
 "berlin"=35000000
}

*/
let citiesPopulation={
 "london":89000000,
 "newyork":84000000,
 "paris":22000000,
 "berlin":35000000
}
let citiesNewPopulation={}

for (const cities in citiesPopulation) {

   if(cities==="berlin"){
      break;
   }
   citiesNewPopulation[cities]=citiesPopulation[cities]
    
}

console.log(citiesNewPopulation)







