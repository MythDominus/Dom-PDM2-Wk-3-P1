let c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;

function setup() {
    createCanvas(800, 800);
    
    c1 = new Creature(200, 200, 50, 'red');
    c2 = new Creature(600, 200, 50, 'blue');
    c3 = new Creature(200, 600, 50, 'green');
    c4 = new Creature(600, 600, 50, 'yellow');
    c5 = new Creature(400, 400, 50, 'purple');
    c6 = new Creature(300, 300, 30, 'cyan');
    c7 = new Creature(500, 300, 30, 'magenta');
    c8 = new Creature(300, 500, 30, 'orange');
    c9 = new Creature(500, 500, 30, 'pink');
    c10 = new Creature(400, 200, 20, 'white');
    c2.setPlayerControlled(true);
}

function draw() {
    background(0);



    // update both
    c1.update();
    c2.update();
    c3.update();
    c4.update();
    c5.update();
    c6.update();
    c7.update();
    c8.update();
    c9.update();
    c10.update();

    // collisions and drawing
    c1.collide(c2);
    c2.collide(c1);
    c3.collide(c4);
    c4.collide(c3);
    c5.collide(c1);
    c1.collide(c5);
    c6.collide(c1);
    c1.collide(c6);
    c7.collide(c1);
    c1.collide(c7);
    c8.collide(c1);
    c1.collide(c8);
    c9.collide(c1);
    c1.collide(c9);
    c10.collide(c1);
    c1.collide(c10);

    c1.draw();
    c2.draw();
    c3.draw();
    c4.draw();
    c5.draw();
    c6.draw();
    c7.draw();
    c8.draw();
    c9.draw();
    c10.draw();
}