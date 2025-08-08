/* 

use a 'for-each'that iteratte through the array ['earl grey',green tea,chai,oolong tea] stop the loop when chai is found and store all the 
previous tea types in an new array


*/


let teacollection=['earl gray','green tea','chai','oolong tea']
let availabletea=[]

teacollection.forEach(function(tea){
        if(tea==='chai'){
               return
        }

        availabletea.push(tea)
});


console.log(availabletea)
