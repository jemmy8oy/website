
class Game {
    constructor(canvasSize) {
        this.size = canvasSize;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.score = 0;
    }

    resize(canvasSize) {
        this.size = canvasSize;
        this.paddle.resize();
        this.ball.resize();
    }

    show() {
        this.paddle.show();
        this.ball.show();
    }

    update() {
        this.paddle.update();
        this.ball.update();
    }

    touchStarted() {}

}