class Paddle {

    constructor(x, y, width = 20, height = 100, speedY = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedY = speedY;
    }

    update() {
        // Paddle move
        if (keyUp) {
            this.speedY = -10;
        } else if (keyDown) {
            this.speedY = 10;
        } else {
            this.speedY = 0;
        }
        this.y = this.y + this.speedY;
    }


    draw() {
        canvasContext.fillStyle = 'white';
        canvasContext.beginPath();
        canvasContext.rect(this.x, this.y, this.width, this.height);
        canvasContext.fill();
    }
}