
//example 1
document.getElementById("btn").
addEventListener("click", function(){

    let changeText=document.getElementById("para");

   changeText.innerHTML="the paragrap is changed"
})

//example 2

document.getElementById("highlight").
addEventListener("click", function(){
    let lis=document.getElementById("city");
    lis.firstElementChild.classList.add("highlight")
})


//example3


document.getElementById("changeorder").
addEventListener("click",function(){
   let coffe= document.getElementById("ctype");
   coffe.textContent="espresso"
   coffe.style.backgroundColor="pink"
})

//example 4

document.getElementById("newitem").
addEventListener("click",function(){
   let insertitem= document.createElement('li')
   insertitem.textContent="eggs"
    let shop=document.getElementById("shopping");
    shop.appendChild(insertitem)

})


//example 5

document.getElementById("removing").addEventListener("click",function(){
    let items=document.getElementById("delete");
    items.lastElementChild.remove()
})