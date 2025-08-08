/* 

use a 'for-each'that iteratte through the array [paris,berin,tokyo, sydney] skip "berlin" and store all the 
 city  in an new array


*/

let worldcities=['paris','tokyo','berlin','sydney']
let travelledcity=[]

worldcities.forEach(function(city) {

    if(city==='berlin') {
        return;
    }
    travelledcity.push(city)
});

console.log(travelledcity)