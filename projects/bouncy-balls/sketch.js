let balls =[];
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(50);
    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].show();
    }
}

function touchStarted() {
    if (mouseX > 0 && mouseX < canvasSize && mouseY > 0 && mouseY < canvasSize) {
        balls.push(new Ball(mouseX, mouseY, 50));
        return false;
    }
}