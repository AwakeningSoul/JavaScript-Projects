//Get element By Class Name button
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
  }

  // create graphics
  document.addEventListener("DOMContentLoaded", function() {
  const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
ctx.fillRect(20, 20, 150, 100);
});

//createLinearGradient Method
document.addEventListener("DOMContentLoaded", function() {
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
});