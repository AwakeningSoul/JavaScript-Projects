// Display an alert with the string "Hello World!"
var B = "Hello World!";
window.alert(B);

// Display a string with a line break using document.write
var A = "This is a string<br>";
document.write(A);

// Display a string with an apostrophe and a quotation mark
var C = 'This is a string with an apostrophe (\') and a quotation mark (\").<br>';
document.write(C);

// Concatenate two strings
var B = "Concatenated" +  "String<br>";
document.write(B);

// Declare multiple variables and display them together
var Family = "The Arezzinis<br>", Dad = "Jeremiah<br>", Mom = "Hermoine<br>", Daughter = "Penny<br>", Son = "Zorro<br>";
document.write(Family);

// Create a string and change its color to blue,
var blues = "I have the blues.<br>";
var blues = blues.fontcolor("blue");
document.write(blues);

// Perform a mathematical expression
var result = 5 * (10 + 3) / 2;
document.write("The result of the expression is: " + result + "<br>");

function My_First_Function() {    //Defining a function and naming it
    var str = "This text is green!";   //Defining a variable and giving it a
                                    //string value
    var result = str.fontcolor("green");  //using the fontcolor method on
                                         //str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value
                                //of result into HTML element with "Green_Text" id
 }
//Display Date
 function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
