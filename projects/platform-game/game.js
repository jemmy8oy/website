const SPACE = 32;
let a = 10;
let vmax = 5;
let g = 30;
let jumpPower = 5;
let f = 10;

class Game {
    constructor(canvasSize) {
        this.gridSize = 25;
        this.setSize(canvasSize);
        this.millis = 0;
        this.paddles = [];
        this.generatePaddles(25);
        this.player = new Character(this, 1, 0);
    }

    generatePaddles(n) {
        for (let i = 0; i < n; i ++) {
            let x = floor(random() * this.gridSize);
            let y = floor(random() * this.gridSize);
            this.paddles.push(new Paddle(this, x, y))
        }
    }

    reset() {
        this.paddles = [];
        this.generatePaddles(25);
        this.player = new Character(this, 1, 0);
    }

    resize(canvasSize) {
        this.setSize(canvasSize);
        this.paddle.resize();
        this.player.resize();
    }

    setSize(canvasSize) {
        this.size = canvasSize;
        this.tileSize = this.size / this.gridSize
    }

    show() {
        for (let i = 0; i < this.paddles.length; i++) {
            this.paddles[i].show();
        }
        this.player.show();
    }

    update() {
        let t = (millis() - this.millis) / 1000;



        this.player.update(t);


        this.millis += t * 1000;

    }

    touchStarted() {

    }


    keyPressed() {
    }

}