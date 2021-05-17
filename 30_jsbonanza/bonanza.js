// Team Golden Eagles :: Ariel Schechter, Victoria Gao, Renee Mui
// SoftDev pd0
// K30 -- JSorcery
// 2021-05-14

var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var mode = "square";

var toggleButton = document.getElementById("toggle");
var clearButton = document.getElementById("clear");

var colors = ["aquamarine", "blueviolet", "cadetblue", "coral", "crimson", "darkseagreen"]

// stores information about drawn shapes
var squareX;
var squareY;
var squareDX = 1;
var squareDY = 1;
var squareColor = "";

var circleX;
var circleY;
var circleDX = 1;
var circleDY = 1;
var circleColor = "";

var triangleX;
var triangleY;
var triangleDX = 1;
var triangleDY = 1;
var triangleColor = "";

var requestID;

// below 3 methods draw shapes given location and color
var drawSquare = (x, y, color) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    ctx.beginPath(); // starts a new path for drawing
    ctx.fillRect(x, y, 50, 50); // draws a 50 x 10 rectangle at mouse click
    ctx.stroke(); // used to draw a line around the objects
}

var drawCircle = (x, y, color) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

var drawTriangle = (x, y, color) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 50, y - 50);
    ctx.fill();
}

var animate = () => {
    // makes sure animation isn't running already
    window.cancelAnimationFrame(requestID);

    // draws all the shapes in their current location
    ctx.clearRect(0, 0, c.width, c.height);
    drawSquare(squareX, squareY, squareColor);
    drawTriangle(triangleX, triangleY, triangleColor);
    drawCircle(circleX, circleY, circleColor);

    // updates movement and location of shapes
    if (squareX >= c.width - 50 || squareX <= 0) {
        squareDX = -squareDX;
    }

    if (squareY >= c.height - 50 || squareY <= 0) {
        squareDY = -squareDY;
    }

    squareX += squareDX;
    squareY += squareDY;

    if (triangleX >= c.width - 50 || triangleX <= 0) {
        triangleDX = -triangleDX;
    }

    if (triangleY >= c.height || triangleY <= 50) {
        triangleDY = -triangleDY;
    }

    triangleX += triangleDX;
    triangleY += triangleDY;

    circleX += circleDX;
    circleY += circleDY;

    if (circleX >= c.width - 25 || circleX <= 25) {
        circleDX = -circleDX;
    }

    if (circleY >= c.height - 25 || circleY <= 25) {
        circleDY = -circleDY;
    }

    circleX += circleDX;
    circleY += circleDY;

    // displays new frame
    requestID = window.requestAnimationFrame(animate);
}

clearButton.onclick = () => {
    ctx.clearRect(0, 0, c.width, c.height); // erases everything on the canvas

    // makes sure previous shapes aren't drawn again
    squareX = -100;
    squareY = -100;
    circleX = -100;
    circleY = -100;
    triangleX = -100;
    triangleY = -100;
}

toggleButton.onclick = (e) => {
    if (mode == "square") {
        mode = "triangle";
    } else if (mode == "triangle") {
        mode = "circle";
    } else {
        mode = "square";
    }
}

c.onclick = (e) => {
    var x = e.offsetX; // gets the x-coordinate of mouse click
    var y = e.offsetY; // gets the y-coordinate of mouse click

    var color = colors[Math.floor(Math.random() * colors.length)];

    // adjusts location of shapes so they don't get stuck on sides of canvas
    // then sets new colors and locations for shapes
    if (mode == "square") {
        squareX = Math.min(x, c.width - 51);
        squareY = Math.min(y, c.height - 51);
        squareColor = color;
    } else if (mode == "triangle") {
        triangleX = Math.min(x, c.width - 51);
        triangleY = Math.max(y, 51);
        triangleColor = color;
    } else {
        circleX = Math.max(Math.min(x, c.width - 26), 26);
        circleY = Math.max(Math.min(y, c.height - 26), 26);
        circleColor = color;
    }

    animate();
}
