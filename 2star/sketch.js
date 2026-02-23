let c1, c2;

function setup() {
    createCanvas(800, 800);
    
    c1 = new Creature(200, 200, 50, 'red');
    c2 = new Creature(600, 200, 50, 'blue');
    c2.setPlayerControlled(true);
}

function draw() {
    background(0);

    // mouse controls c2 position directly
    c2.setPosition(mouseX, mouseY);

    // update both
    c1.update();
    c2.update();

    // collisions and drawing
    c1.collide(c2);
    c2.collide(c1);

    c1.draw();
    c2.draw();

}
