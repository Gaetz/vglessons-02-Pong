class Ball {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x; // Former this.x
        this.y = y; // Former this.y
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        // Move ball
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        // Bounce
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    padBounce() {
        this.speedX = -this.speedX;
    }

    draw() {
        canvasContext.fillStyle = 'white';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvasContext.fill();
    }
}