
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6*8;
    document.getElementById("Math").innerHTML ="6 * 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48/6;
    document.getElementById("Math").innerHTML ="48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 + 2, * 10 / 2 - 5 = " + simple_Math;
}

function modulus_Opreator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "25 / 6 = reminder of: " + simple_Math;
  }
  
function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
  }

  var X1 = 5;
  X1++
  document.write("X1: " + X1 + "<br>");

  var X2 = 5.25;
X2--;
document.write("X2: " + X2 + "<br>");

window.alert(Math.random() * 100);

function displayRandomNumber() {
    var randomNum = Math.random() * (100 - 0);
    document.getElementById("result").innerHTML = "Random Number: " + randomNum;
}

