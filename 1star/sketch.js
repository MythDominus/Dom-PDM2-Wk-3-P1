let balls = [];

function setup() {
    createCanvas(400, 400);

    balls.push(new Ball(100, 100, 20, 'red'));
    balls.push(new Ball(200, 200, 30, 'blue'));
    balls.push(new Ball(300, 300, 40, 'green'));

    for (let i  = 0; i < 10; i++) {
        let r = random(10, 30);
        let x = random(r, width - r);
        let y = random(r, height - r);
        let col = color(random(255), random(255), random(255));

        balls.push(new Ball(x, y, r, col));
    }
}

function draw() {
    background(220);

    for (let ball of balls) {
        ball.move();
        ball.draw();
    }
}

