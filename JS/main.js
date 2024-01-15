//function variables
function displayVariables() {
    // Assigning two variables
    var variable1 = "<span style='color: #e74c3c;'>Supper</span>";  // Red color
    var variable2 = "<span style='color: #3498db;'>Awesome</span>"; // Blue color
    // Concatenating the variables
    var result = variable1 + " " + variable2;

    // Using document.getElementById to display the result in an HTML element
    document.getElementById("output").innerHTML = result;
}

// Call the function to execute it
displayVariables();

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
  }