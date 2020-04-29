class Game {
    constructor(canvasSize) {
        this.size = canvasSize;
        this.init();
    }

    init() {
        this.gridSize = 25;
        this.tileSize = canvasSize / this.gridSize;
        this.score = 0;
        this.snake = new Snake(this);
        this.food = new Food(this);
        this.dead = false;
    }

    reStartGame() {
        if (this.dead) {
            this.init();
        }
    }

    resize(canvasSize) {
        this.size = canvasSize;
        this.food.resize();
        this.snake.resize();
    }

    show() {
        this.food.show();
        this.snake.show();
    }

    update() {
        this.food.update();
        this.snake.update();
    }

    touchStarted() {
        this.reStartGame();
    }

    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            this.snake.setDirection(-1, 0);
        } else if (keyCode === UP_ARROW) {
            this.snake.setDirection(0, -1);
        } else if (keyCode === RIGHT_ARROW) {
            this.snake.setDirection(1, 0);
        } else if (keyCode === DOWN_ARROW) {
            this.snake.setDirection(0, 1);
        }
        this.reStartGame();
    }

    spawnFood() {
        this.food = new Food(this);
    }

    win() {
        this.endGame();
        console.log("Win")
    }

    lose() {
        this.endGame();
        console.log("Loss. Score: " + this.score);
    }

    endGame() {
        this.snake.speed = 0;
        this.dead = true;
    }


}
//dont spawn food in snake
//cant move into snake
