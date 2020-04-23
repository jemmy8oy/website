class Ball {
    constructor(game) {
        this.game = game;
        this.diameter = game.size / 30;
        this.initiate();
    }

    initiate() {
        this.position = createVector(this.game.size / 2, this.game.size * 0.1);
        this.speed = 6;
        this.velocity = createVector(0,this.speed);
    }

    show() {
        ellipse(this.position.x, this.position.y, this.diameter);

    }

    resize() {
        this.diameter = game.size / 30;
    }

    update() {
        if (this.position.y + this.diameter/2 >= this.game.paddle.position.y - this.game.paddle.height / 2
            && this.position.y + this.diameter/2 <= this.game.paddle.position.y - this.game.paddle.height / 2 + this.velocity.y
            && this.position.x > this.game.paddle.position.x
            && this.position.x < this.game.paddle.position.x + this.game.paddle.length
            && this.velocity.y > 0) {
            let fraction = ((this.position.x - this.diameter / 2)  - (this.game.paddle.position.x)) /  this.game.paddle.length;
            console.log(fraction);
            this.velocity.x = - this.speed * cos(PI / 4 + (PI * fraction) / 2);
            this.velocity.y = - this.speed * sin(PI * fraction);
            this.speed += 1;
        } else if (this.position.y - this.diameter/2 <= 0
            && this.velocity.y < 0 ) {
            this.velocity.y *= -1;
        } else if (this.position.x - this.diameter/2 <= 0
            && this.velocity.x < 0 ) {
            this.velocity.x *= -1;
        } else if (this.position.x + this.diameter/2 >= this.game.size
            && this.velocity.x > 0 ) {
            this.velocity.x *= -1;
        }else if (this.position.y > this.game.size){
            this.initiate();
        } else {
            this.position.add(this.velocity);
        }
    }

}