//loop
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
      Digit += "<br>" + X;
      X++;
      }
      document.getElementById("Counting_to_Ten").innerHTML = Digit;
    }

//Lenght property
document.addEventListener("DOMContentLoaded", function() {
let text = "Hello World!";
let length = text.length;
document.getElementById("demo").innerHTML = length;
});

//Loops Instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function for_Loop() {
   for (Y = 0; Y < Instruments.length; Y++) {
   Content += Instruments[Y] +"<br>";
   }
   document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Values of Arrays
function cat_pics() {
  var Cat_Picture = [];
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[2] = "eating"
  Cat_Picture[3] = "purring";
  document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
   Cat_Picture[2] + ".";
}
// CONST KEYWORD
const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
function constant_function() {
  Musical_Instrument.color = "blue";
  Musical_Instrument.price = "$900";
  document.getElementById("Constant").innerHTML = "The Cost of the " +
      Musical_Instrument.type + " (color: " + Musical_Instrument.color + ")  was " + Musical_Instrument.price;
}

//let keyword
var X = 82;
document.write(X);
{
let X = 33;
document.write("<br>" +X);
}
document.write("<br>" + X);

//return statement.
function myFunction1() {
  return Math.PI;
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("demo1").innerHTML = myFunction1();
});

//object using the let keyword
let car = {
  make: "Dodge ",
  model: "Viper ",
  year: "2021 ",
  color: "red ",
  description : function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Car_Object").innerHTML = car.description();
  });

//break statment
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
    break; 
  }
  text += "The number is " + i + "<br>";
}
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("demo2").innerHTML = text;
});

//continue statement
let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
    continue; 
  }
  text1 += "The number is " + i + "<br>";
}
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("demo3").innerHTML = text1;
});