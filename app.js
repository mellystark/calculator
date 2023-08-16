let buttons = document.querySelectorAll("#buttons>div");
let here = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", myLittleCalculator);
}

function myLittleCalculator(event) {
    let targetNumber = event.target.innerText;

    if (targetNumber == "AC") {
        here = "";
        document.querySelector("#screen").innerText = here;
    } 
    else if (targetNumber == "=") {
        document.querySelector("#screen").innerText = eval(here);
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
