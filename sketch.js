let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight-1);
    colorMode(HSB, 100);

    for (let i = 0; i < 30; i++) {
        bubbles.push(new Bubble());
        bubbles[i].init();
    }
}

function draw() {
    background("#3498db");
    
    push();
    fill(255);
    textSize(100);
    textAlign(CENTER);
    text("The Christian Sects of Ancient Rome", width/2, height/2);
    textSize(50);
    text("Click anywhere to begin", width/2, height/2+75)
    pop();

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].update(i);
    }

}

function mouseClicked() {
    window.location.href = window.location.href + "SamplePage.html"
}

class Bubble {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
    }

    init() {
        this.r = random(5, 16);
        this.x = random(0, width);
        this.y = random(0, height);
    }

    reset() {
        this.r = random(5, 16);
        this.x = random(0, width);
        this.y = height+this.r+16;
    }

    show() {
        push();
        noFill();
        stroke(255);
        strokeWeight(2);
        circle(this.x, this.y, this.r*2);
        pop();
    }

    update(offset) {
        if (this.x < 0 || this.y < 0 || this.x > width+this.r+16 || this.y > height+this.r+16) {
            this.reset();
        }

        //this.x += random((this.r/50) * -5, (this.r/50) * 5);
        this.x = noise(offset, frameCount/1000) * width;
        this.y -= (this.r/5);

    }
}