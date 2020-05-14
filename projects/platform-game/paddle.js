class Paddle {
    constructor(game, x, y) {
        this.game = game;
        this.resize();
        this.position = createVector(x, y);
    }

    show() {
        rect(this.position.x * this.game.tileSize, (this.position.y + 0.5) * this.game.tileSize, this.length * this.game.tileSize, this.height * this.game.tileSize, this.height * this.game.tileSize / 2)
    }

    resize() {
        this.length = 3;
        this.height = 0.5;
    }

    update() {
    }
}