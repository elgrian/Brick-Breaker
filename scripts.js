var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    //draw code

}
setInterval(draw, 10);

ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();