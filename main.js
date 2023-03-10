// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// DRAW WINDOW
for (let xValue = 160; xValue <= 280; xValue += 20) {
  ctx.fillStyle = "white";
  ctx.fillRect(xValue, 120, 10, 500);
}

for (let yValue = 370; yValue <= 620; yValue += 20) {
  ctx.fillStyle = "white";
  ctx.fillRect(10, yValue, 135, 10);
}

for (let ySqr = 210; ySqr <= 340; ySqr += 20) {
  ctx.fillStyle = "white";
  ctx.fillRect(30, ySqr, 10, 10);
  for (let xSqr = 30; xSqr <= 120; xSqr += 20) {
    ctx.fillStyle = "white";
    ctx.fillRect(xSqr, ySqr, 10, 10);
  }
}
