
// store the text element in display variable
const display = document.getElementById("result")



 //when equal is pressed evaluate the content inside display
document.getElementById("equal").addEventListener("click", ()=> {
    try {

        let result = display.value;
        display.value = eval(result);

    } catch (e) {

        display.value = "ERROR";
    }
 });




// when keys on keyboard pressed, add the numbers to display and alert if its alphabet
document.addEventListener('keyup', (key) => {
    
    if (key.key >= '0' && key.key <= '9') {

        display.value += key.key;

    } else {

        alert('Only numbers are allowed');

    }
});



// function to only add the operators when there is no other operator at last index
function addoperator(op){

    return () =>{
        let last = display.value.slice(-1);
        if(last != "." && last != "+" && last != "-" && last != "*" && last != "/" ){
            display.value += op;
        }
    }
    
}



// function to reset the content in display
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

// function to delete last digit in the display
document.getElementById("delete").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// adding events to operator buttons
document.getElementById("decimal").addEventListener("click", addoperator("."))

document.getElementById("multiply").addEventListener("click", addoperator("*"))

document.getElementById("divide").addEventListener("click", addoperator("/"))

document.getElementById("subtract").addEventListener("click", addoperator("-"));

document.getElementById("add").addEventListener("click", addoperator("+"));





// add numbers in the display when numerics pressed
document.getElementById("1").addEventListener("click", () => {
    display.value += 1;
});

document.getElementById("2").addEventListener("click", () => {
    display.value += 2;
});

document.getElementById("3").addEventListener("click", () => {
    display.value += 3;
});

document.getElementById("4").addEventListener("click", () => {
    display.value += 4;
});

document.getElementById("5").addEventListener("click", () => {
    display.value += 5;
});

document.getElementById("6").addEventListener("click", () => {
    display.value += 6;
});

document.getElementById("7").addEventListener("click", () => {
    display.value += 7;
});

document.getElementById("8").addEventListener("click", () => {
    display.value += 8;
});

document.getElementById("9").addEventListener("click", () => {
    display.value += 9;
});

document.getElementById("0").addEventListener("click", () => {
    display.value += 0;
});

document.getElementById("00").addEventListener("click", () => {
    display.value += "00";
});