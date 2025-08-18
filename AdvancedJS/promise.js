// promise is a object 



// function movieBokking(){
//     return new Promise ((resolve,reject)=>{
//         let bookingdone=false
//         if(bookingdone){
//             resolve("the ticket has booked")
//         }
//         else{
//             reject("ticket is not available")
//         }
//     });
// }


// movieBokking().then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))


const reachA=new Promise((resolve,reject)=>{
    let reached=true;
    if(reached){
        setTimeout(resolve,3000,"Athi has reached")
    }
    else{
        reject("Athi has not reaxhed")
    }

})

const reachB=new Promise((resolve,reject)=>{
    let reached=true;
    if(reached){
        setTimeout(resolve,2000,"Ram has reached")
    }
    else{
        reject("Ram not reached")
    }

})

const reachC=new Promise((resolve,reject)=>{
    let reached=false;
    if(reached){
        setTimeout(resolve,1000,"Athi has reached")
    }
    else{
        reject("Bala not reached")
    }

})

Promise.race([reachA,reachB,reachC])
      .then((msg)=>{
        console.log(msg)
      })
      .catch((msg)=>{
        console.log(msg)
      })