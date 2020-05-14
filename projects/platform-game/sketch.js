let game;
let canvasSize;
let canvas;
function setup() {
    canvas = createCanvas(600, 600);
    resize();
    game = new Game(canvasSize);
}

function windowResized() {
    resize();
    game.resize(canvasSize);
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

function draw() {
    scale(1, -1);
    translate(0, -height);
    background(255);
    game.show();
    game.update();
    noFill();
    rect(0,0, width, width);
}

function touchStarted() {
    if (mouseX > 0 && mouseX < canvasSize && mouseY > 0 && mouseY < canvasSize) {
        game.touchStarted(mouseX, mouseY);
        return false;
    }
}

function keyPressed() {
    game.keyPressed();
}