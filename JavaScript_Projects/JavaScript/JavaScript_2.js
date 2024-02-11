//Contact Form
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  //Validate Form
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myForm").onsubmit = function() {
    return validateForm();
};
});