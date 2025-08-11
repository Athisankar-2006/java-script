/* 

4, write a function named 'processateaorder' that takes another function
, 'maketea' as a parameter and calls it with the argument 'earlgrey'
retun the result of calling maketea

*/

function maketea(teatype){
    return `make:${teatype}`;
    
}

function processteaorder(teafunction){
    return teafunction("earl grey");

}

let order = processteaorder(maketea);
console.log(order);