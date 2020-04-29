class Snake {
    constructor(game) {
        this.game = game;
        this.tileProgress = 0;
        this.headPosition = createVector(0, 0);
        this.speed = 0.01 * this.game.gridSize;
        this.timeUntilMove = 1;
        this.direction = createVector(1, 0);
        this.lastDirection = this.direction.copy();
        this.parts = [];
        this.tailGrow = false;
    }

    resize() {

    }


    show() {
        stroke(0);
        fill(255, 0, 0);
        rect(floor(this.headPosition.x) * this.game.tileSize, floor(this.headPosition.y) * this.game.tileSize, this.game.tileSize);
        for (let i = 0; i < this.parts.length; i++) {
            rect(this.parts[i].x * this.game.tileSize, this.parts[i].y * this.game.tileSize, this.game.tileSize)
        }
    }

    update() {
        this.timeUntilMove -= this.speed;

        if (this.timeUntilMove <= 0) {
            this.timeUntilMove = 1;


            this.parts.push(this.headPosition.copy());
            if (!this.tailGrow) {
                this.parts.shift();
            } else {
                this.tailGrow = false;
            }

            let nextHeadPosition = this.headPosition.copy().add(this.direction);
            if(nextHeadPosition.x >= this.game.gridSize) {
                nextHeadPosition = createVector(0, this.headPosition.y)
            } else if (nextHeadPosition.y >= this.game.gridSize) {
                nextHeadPosition = createVector(this.headPosition.x, 0)
            } else if(nextHeadPosition.x < 0) {
                nextHeadPosition = createVector(this.game.gridSize - 1, this.headPosition.y)
            } else if(nextHeadPosition.y < 0) {
                nextHeadPosition = createVector(this.headPosition.x, this.game.gridSize - 1)
            }
            this.headPosition = nextHeadPosition;
            this.lastDirection = this.direction.copy();

            if (this.headPosition.equals(this.game.food.position)) {
                this.tailGrow = true;
                this.game.spawnFood();
                this.game.score += 1;
            }

            for (let i = 0; i < this.parts.length; i++) {
                if (this.parts[i].x === this.headPosition.x && this.parts[i].y === this.headPosition.y) {
                    this.game.lose();
                }

            }

        }

    }

    setDirection(x, y) {
        if (x !== -this.lastDirection.x && y !== -this.lastDirection.y) {
            this.direction = createVector(x, y);
        }
    }


}