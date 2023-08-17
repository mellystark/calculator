let buttons = document.querySelectorAll("#buttons>div");
let here = "";
let equal= document.querySelector("#equal");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", myLittleCalculator);
}

equal.addEventListener("click", forEqual);

function myLittleCalculator(event) {
    let targetNumber = event.target.innerText;

    if (targetNumber == "AC") {
        here = "";
        document.querySelector("#screen").innerText = here;
    } 
    else if (targetNumber == "del") {
        here = here.slice(0, -1); // Remove the last character
        document.querySelector("#screen").innerText = here;
    } 
    else {
        here += targetNumber;
        document.querySelector("#screen").innerText = here;
    } 
}

function forEqual(event){
    targetNumber = event.target.innerText;
    if(targetNumber == "="){
        document.querySelector("#screen").innerText = eval(here);
    }
    else{
        myLittleCalculator();
    }
}
