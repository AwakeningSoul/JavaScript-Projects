//Global variable
var X = 10;
function Add_numbers_1() {
  document.write(20 + X + "<br>");
}
function Add_numbers_2() {
  document.write(X +100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");

// local variable
function Add_numbers_3() {
    var X = 10;
    document.write(20 + X + "<br>");
 }
 function Add_numbers_4() {
   document.write(X + 100);
   }
 Add_numbers_3();
 Add_numbers_4();
 document.write("<br>");

 //console.log() method
 function Add_numbers_5() {
    var X =10;
    console.log(15 + X);
  }
  function Add_numbers_6() {
   console.log(X + 100);
  }
  Add_numbers_5();
  Add_numbers_6();

  // Date().getHours() method 
  function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
   }

   // Date().getHours() method - if statment
function get_Dates() {
    var hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("Greetings").innerHTML = "Good morning!";
    } else if (hour < 18) {
        document.getElementById("Greetings").innerHTML = "Good afternoon!";
    } else {
        document.getElementById("Greetings").innerHTML = "Good evening!";
    }
}
//If statemnet Year
function DOB_function() {
    Year = document.getElementById("Year").value;
    if (Year >= 2007) {
       Vote = "You are not old enough to get mortgage!";
   }
   else {
       Vote = "You are old enough to get mortgage!";
   }
   document.getElementById("What_year_you_where_born?").innerHTML = Vote;
  }

