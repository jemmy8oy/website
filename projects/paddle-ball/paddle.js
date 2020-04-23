class Paddle {
    constructor(game) {
        this.game = game;
        this.resize();
        this.position = createVector(this.game.size / 2, this.game.size * 0.8);
    }

    show() {
        rect(this.position.x, this.position.y, this.length, this.height, this.height / 2)
    }

    resize() {
        this.length = this.game.size / 5;
        this.height = this.game.size / 50;
    }

    update() {
        this.position.x = mouseX - this.length / 2;
    }
}