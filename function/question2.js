/* 

2 .create a function  named 'ordertea' that takes one parameters 'teatype' . inside this function, create another function named 'confirmorder'
 that returns a message like 'order cofirmed' call confirm order within ordertea and return the result.

*/

function oredertea(teatype){

    function confirmorder(teatype){
        return `${teatype} order confirmed`
        

    }

    return confirmorder(teatype)

}

let teaname=oredertea('blacktea')
console.log(teaname)
