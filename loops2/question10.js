/* 

write a 'for-of' loop that iteratte through the array ['tea','greean tea','black tea','jasmine tea','herbal tea'] 

if tea lenth greater than 10 skip that tea, and store the other tea in to new array
 
*/


let totaltea=['normal tea','greean tea','black tea','jasmine tea','herbal tea']

let selectedtea=[]

for (const tea of totaltea) {
    if(tea.length >  10){
        continue;
    }
  selectedtea.push(tea)
    
}

console.log(selectedtea)