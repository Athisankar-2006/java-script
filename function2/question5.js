/* 

5, write a function named 'createteamaker' that return another function
the return function should tke one parameters, teatype and return a message like
making green tea ,
store the return function in a variable named 'teamker' and call it with "greentea".


*/



function createteamaker(name){
    return function (teatype){
        return `makig:${teatype}`
    }
}


let teamaker = createteamaker("athi")
let result =teamaker("green tea")

console.log(result)