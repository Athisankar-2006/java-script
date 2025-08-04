
//write a do while looop that promts user to enter their favourite tea  until they type stop

let teacollecton=[]
let tea
do {
    tea = prompt(`Enter your favorite tea (Enter "stop" to close)`);

    if (tea !== "stop"){
        teacollecton.push(tea);

    }
}
while(tea!=="stop");