document.write(typeof "Word");
document.write("<br>")
document.write(typeof 3);
document.write("<br>")
function my_Function() {
    // Display NaN
    document.getElementById("Test").innerHTML = 0 / 0;

    // Display true using isNaN()
    document.getElementById("Test").innerHTML += "<br>" + isNaN("Whats Up");

    // Display false using isNaN()
    document.getElementById("Test").innerHTML += "<br>" + isNaN(123);
}
document.write("<br>");
function my_Function2() {
    //Display Infinity
    document.getElementById("Infinity").innerHTML += "<br>" + 2E310;
      //Display negative Infinity
      document.getElementById("Infinity").innerHTML += "<br>" + -3E310;
}
//Boolean Logic
document.write("<br>")
document.write(10 > 2);
document.write("<br>")
document.write(10 < 2);
document.write("<br>")
//console Method
console.log(2+2);
document.write("<br>")
//Coercion
document.write("10" + 5);
document.write("<br>")
//Display false in the console using Boolean logic and the console.log() method.
console.log(10 < 2);
document.write("<br>")
//utilize == to return true and false with Double Equal Signs
document.write(10 == 10);
document.write("<br>")
document.write(3 == 11);
document.write("<br>")
//Return true by ensuring to match the data type and value
X = 10;
Y = 10;
document.write(X === Y);
//Return false by writing a different data type and different value.
A = "Brown";
B = "Red";
document.write(", " + (A === B));
//Return false by writing a different data type but the same value for both.
London = "forty";
Newcastle = "40";
document.write(", " + (London === Newcastle));
//Return false by writing the same data type but a different value for both.
Income1 = 1000;
Income2 = 1001;
document.write(", " + (Income1 === Income2 ));
document.write("<br>")
// AND operator to display true and false.
document.write(5 > 2 && 10 > 4);
document.write("," + (5 > 10 && 10 > 4));
document.write("<br>")
//OR operator to display true and false
document.write(5 > 10 || 10 > 4);
document.write("," + (5 > 10 || 10 > 20));
document.write("<br>")
//NOT operator to display true and false.
function not_Function() {
    var result1 = !(5 > 10);
    var result2 = !(20 > 10);
// Display the results in the "Not" element
document.getElementById("Not").innerHTML = "Result 1: " + result1 + "<br>Result 2: " + result2;
}