function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Tenary operators 18 years older or younger
function Years_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Keywords and Constructors
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
     document.getElementById("Keywords_and_Constructors").innerHTML =
     "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
     " manufactured in " + Erik.Vehicle_Year;
}

   // New and This
   function AnotherVehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Alex = new AnotherVehicle("Tesla", "Model S", 2022, "Blue");

function newFunction() {
    document.getElementById("New_and_This").innerHTML =
        "Alex drives a " + Alex.Vehicle_Color + "-colored " + Alex.Vehicle_Model +
        " manufactured in " + Alex.Vehicle_Year;
}

//Nested Functions
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
       var Starting_point = 9;
       function Plus_one() {Starting_point += 2;}
       Plus_one();
       return Starting_point;
       }
 }