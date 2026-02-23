class Creature {
    #x;
    #y;
    #size;
    #color;

    #dx;
    #dy;

    #angle;
    #orbitRadius;
    #isPlayer;

    constructor(x, y, size, color) {
        this.#x = x;
        this.#y = y;
        this.#size = size;
        this.#color = color;

        this.#dx = random(-2, 2);
        this.#dy = random(-2, 2);

        this.#angle = 1;
        this.#orbitRadius = this.#size * 0.8;
        this.#isPlayer = false;
    }

    // mark this creature as player-controlled
    setPlayerControlled(flag) {
        this.#isPlayer = !!flag;
    }

    // directly set velocity (useful for player input)
    controlMove(vx, vy) {
        this.#dx = vx;
        this.#dy = vy;
    }

    // directly set position (useful for mouse control)
    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
    }

   update() {
        this.#x += this.#dx;
        this.#y += this.#dy;

        // keep on screen
        if (this.#x < 0) this.#x = 0;
        if (this.#x > width) this.#x = width;
        if (this.#y < 0) this.#y = 0;
        if (this.#y > height) this.#y = height;

        // bounce off edges
        if (this.#x < 20) this.#dx *= -1;
        if (this.#y < 20) this.#dy *= -1;
        if (this.#x > width - 20) this.#dx *= -1;
        if (this.#y > height - 20) this.#dy *= -1;

        // advance orbit angle for the orbiting detail
        this.#angle += 0.6;
    }

    collide(other) {
        let dx = other.#x - this.#x;
        let dy = other.#y - this.#y;
        let distSq = dx * dx + dy * dy;
        let minDist = this.#size / 2 + other.#size / 2;

        if (distSq < minDist * minDist) {
            let angle = atan2(dy, dx);
            let force = 2;

            this.#dx -= cos(angle) * force;
            this.#dy -= sin(angle) * force;

            other.#dx += cos(angle) * force;
            other.#dy += sin(angle) * force;
        }   
    }

    draw() {
        fill(this.#color);
        noStroke();
        ellipse(this.#x, this.#y, this.#size);

        let orbitX = this.#x + Math.cos(this.#angle) * this.#orbitRadius;
        let orbitY = this.#y + Math.sin(this.#angle) * this.#orbitRadius;
        fill(220);
        ellipse(orbitX, orbitY, this.#size * 0.5);
    }
}