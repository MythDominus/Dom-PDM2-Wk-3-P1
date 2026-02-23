class Ball {
    #x;
    #y;
    #radius;
    #color;
    #vx;
    #vy;

    constructor(x, y, radius, color) {
        this.#x = x;
        this.#y = y;
        this.#radius = radius;
        this.#color = color;
        this.#vx = random(-2, 2);
        this.#vy = random(-2, 2);
    }
    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }
    get radius() {
        return this.#radius;
    }
    get color() {
        return this.#color;
    }
    get vx() {
        return this.#vx;
    }
    get vy() {
        return this.#vy;
    }

    move() {
        this.#x += this.#vx;
        this.#y += this.#vy;

        if (this.#x - this.#radius < 0 || this.#x + this.#radius > width) {
            this.#vx *= -1;
        }
        if (this.#y - this.#radius < 0 || this.#y + this.#radius > height) {
            this.#vy *= -1;
        }
    }
    

    draw() {
        fill(this.#color);
        noStroke();
        circle(this.#x, this.#y, this.#radius * 2);
    }
}