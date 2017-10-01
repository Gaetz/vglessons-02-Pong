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
        // Move
        if(this.y >= 0 && this.y <= canvas.height - this.height) {
            this.y = this.y + this.speedY;
        }
        if(this.y < 0) {
            this.y = 0;
        }
        if(this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
        }
    }


    draw() {
        canvasContext.fillStyle = 'white';
        canvasContext.beginPath();
        canvasContext.rect(this.x, this.y, this.width, this.height);
        canvasContext.fill();
    }
}