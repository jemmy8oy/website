class Ball {
    constructor(x, y, size, canvasSize) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.canvasSize = canvasSize;
        this.v = 1;
        this.a = 1;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.size);
    }

    update() {
        this.v += this.a;
        if (this.y + this.v <= this.canvasSize - this.size / 2) {
            this.y += this.v;
        } else {
            this.v = -this.v * 0.8;
        }
    }

}