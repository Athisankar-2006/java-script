
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


//example 6

document.getElementById("cmb").addEventListener("click",function(){
    alert("vanakam da mapla serverla irunthu!!");
})


//example 7
 document.getElementById("teatypes").addEventListener("click",function(event){
    
        if(event.target && event.target.matches('.teaitems')){
            alert("you selected:"+event.target.textContent)
        }
    

 })


 //example 8

 document.getElementById("feedbackForm").
 addEventListener("submit",function(event){
    event.preventDefault();

    let fb=document.getElementById("fbinput").value;
    console.log(fb)
    document.getElementById("FeedbackDisplay").textContent=`feed back is:${fb}`;

 });

 //example 9

  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domload").textContent="dom fully loaded"
  })

  //example  10

  document.getElementById("togglehighlight").addEventListener("click",function(){
    let addclass=document.getElementById("discrition")
    addclass.classList.toggle("highlight")
  })