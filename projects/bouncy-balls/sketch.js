let balls =[];
let canvas;
let canvasSize;
function setup() {
    canvas = createCanvas(600, 600);
    resize();
}

function draw() {
    background(50);
    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].show();
    }
}

function windowResized() {
    resize();
    balls =[];
}

function resize() {
    if (windowWidth < windowHeight) {
        canvasSize = windowWidth * 0.9;
    } else {
        canvasSize = windowHeight * 0.9;
    }
    resizeCanvas(canvasSize, canvasSize);
    canvas.position((windowWidth - width) / 2, (windowHeight - width) / 2);
}


function touchStarted() {
    if (mouseX > 0 && mouseX < canvasSize && mouseY > 0 && mouseY < canvasSize) {
        balls.push(new Ball(mouseX, mouseY, 50, canvasSize));
        return false;
    }
}