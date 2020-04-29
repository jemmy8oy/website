class Food {
    constructor(game) {
        this.game = game;
        let freePositions = [];
        for (let x = 0; x < this.game.gridSize; x++) {
            for (let y = 0; y < this.game.gridSize; y++) {
                let free = true;
                if (this.game.snake.headPosition.x === x && this.game.snake.headPosition.y === y) {
                    free = false;
                } else {
                    for (let i = 0; i < this.game.snake.parts.length; i++) {
                        if (this.game.snake.parts[i].x === x && this.game.snake.parts[i].y === y) {
                            free = false;
                        }
                    }
                }
                if (free) {
                    freePositions.push(createVector(x, y))
                }
            }
        }
        if (freePositions.length > 0) {
            this.position = freePositions[floor(random() * freePositions.length)]
        } else {
            this.position = createVector(-1, -1);
            this.game.win();
        }

    }

    resize() {
    }

    show() {
        fill(0, 255, 0);
        rect(this.position.x * this.game.tileSize, this.position.y * this.game.tileSize, this.game.tileSize)
    }

    update() {
    }

}