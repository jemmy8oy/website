class Ball {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.v = 1;
        this.a = 2;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.size);
    }

    update() {
        this.v += this.a;
        if (this.y + this.v <= 600 - this.size / 2) {
            this.y += this.v;
        } else {
            this.v = -this.v * 0.8;
        }
    }

}