class Character {
    constructor(game, x, y) {
        this.game = game;
        this.resize();
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    resize() {
        this.length = 1;
        this.height = 2;
    }

    show() {
        rect(this.position.x * this.game.tileSize, this.position.y * this.game.tileSize, this.length * this.game.tileSize, this.height * this.game.tileSize);
    }

    update(t) {
        this.onSurface = this.checkOnSurface(t);
        if ((keyIsDown(UP_ARROW) || keyIsDown(SPACE)) && this.onSurface) {
            this.velocity.y = sqrt(2 * 30 * jumpPower);
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.acceleration.x = -a;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.acceleration.x = a;
        } else {
            this.acceleration.x = 0;
        }

        //    check vertical collision
        if (this.onSurface) {
            this.acceleration.y = 0;
            if (this.acceleration.x === 0) {
                if (f * t >= abs(this.velocity.x)) {
                    this.velocity.x = 0
                } else if (this.velocity.x > 0) {
                    this.velocity.x -= f * t
                } else if (this.velocity.x < 0) {
                    this.velocity.x += f * t
                }
            }
        } else {
            this.acceleration.y = -g;
        }


        if (this.velocity.x + this.acceleration.x * t > vmax) {
            this.acceleration.x = 0;
            this.velocity.x = vmax
        } else if (this.velocity.x + this.acceleration.x * t < -vmax) {
            this.acceleration.x = 0;
            this.velocity.x = -vmax
        }
        this.position.add(this.velocity.copy().mult(t));
        this.velocity.add(this.acceleration.copy().mult(t));

        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
            this.acceleration.x = 0;
        } else if (this.position.x > this.game.gridSize - 1) {
            this.position.x = this.game.gridSize - 1;
            this.velocity.x = 0;
            this.acceleration.x = 0;
        }

        if (this.position.y > this.game.gridSize) {
            this.game.reset()
        }

    }

    checkOnSurface(t) {
        if (this.velocity.y < 0) {
            if (this.position.y <= 0) {
                this.position.y = 0;
                this.velocity.y = 0;
                this.acceleration.y = 0;
                return true
            }
            for (let i = 0; i < this.game.paddles.length; i++) {
                let paddle = this.game.paddles[i];
                if (this.position.x + this.length >= paddle.position.x &&
                    this.position.x <= paddle.position.x + paddle.length &&
                    this.position.y >= paddle.position.y + paddle.height * 2 &&
                    this.position.y + this.velocity.y * t <= paddle.position.y + paddle.height * 2) {
                    this.position.y = paddle.position.y + paddle.height * 2;
                    this.velocity.y = 0;
                    this.acceleration.y = 0;
                    return true
                }
            }
        }
        return false
    }

}