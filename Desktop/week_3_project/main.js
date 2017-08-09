// declaring all the buttons & storing them in variables
let parentDiv = document.querySelector("div");
let bclear = document.querySelector("#clear");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");
let bdivide = document.querySelector("#bdivide");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let bmultiply = document.querySelector("#bmultiply");
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let bsubtract = document.querySelector("#bsubtract");
let b0 = document.querySelector("#b0");
let bperiod = document.querySelector("#bperiod");
let bequals = document.querySelector("#equals");
let badd = document.querySelector("#badd");
let textBox = document.querySelector("textbox");
let bsqrt = document.querySelector("#sqrt");
let bmodulo = document.querySelector("#modulo");

let allButtons = document.querySelectorAll("button")


// Here is my function

let infoStr = '';
let op1 = '';
let op2 = '';
let operator = '';
let results;
let decimalAdded = false;

allButtons.forEach(function(button){
    // add events to every button
    button.addEventListener("click", function() {
        if(button.innerHTML === ' C '){
            textBox.innerHTML = 0;
            infoStr = '';
            op1 = '';
            op2 = '';
            operator = '';
        }else if(button.innerHTML === ' = ') {
            if (operator.length > 0) {
                // if its equal sign, run ...
                textBox.innerHTML = equalsFunc();
                infoStr = results;
                textBox.innerHTML = results;
                op1 = results;
                op2 = '';
                operator = '';
            }
            
        }else if(button.innerHTML === ' + ' || button.innerHTML === ' - ' || button.innerHTML === ' x ' || button.innerHTML === ' / ' || button.innerHTML === 'sqrt' || button.innerHTML === '%'){
            operator = button.innerHTML;
            textBox.innerHTML = op1 + button.innerHTML;
            console.log(operator);
        }else{
            if(operator.length >= 1){
                op2 +=  button.innerHTML
                textBox.innerHTML = op1 + operator + op2;
                console.log(op2);
                infoStr += button.innerHTML;
            }else {
                op1 += button.innerHTML;
                infoStr += button.innerHTML;
                textBox.innerHTML = infoStr;
                console.log(op1);
            }
        }
    })
})

http://1.bp.blogspot.com/-Z1kkkE6vyZ0/U1AeNaH-2RI/AAAAAAAABFI/leLaZ7cMPYk/s1600/eater_bunny+cropped.jpg

function equalsFunc(){
    op1 = parseFloat(op1); 
    op2 = parseFloat(op2);
    
    if(operator === " + "){
        results = op1 + op2;
    }else if(operator === " - "){
        results = op1 - op2;
    }else if(operator === " x "){
        results = op1 * op2;
    }else if(operator === " / "){
        results = op1 / op2;    
    }else if(operator === "sqrt"){
        results = Math.sqrt(op1);
    }else if(operator === "%"){
        results = op1 % op2;
    }
   return results; 
}