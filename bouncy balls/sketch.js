
let game;
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

function mouseClicked() {
    if (mouseY < 575) {
        balls.push(new Ball(mouseX, mouseY, 50));

    }
}