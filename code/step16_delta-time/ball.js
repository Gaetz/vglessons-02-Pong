class Ball {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x; // Former this.x
        this.y = y; // Former this.y
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    isOutOfScreen() {
        return this.x < 0 || this.x > canvas.width;
    }

    update(dt) {
        // Move ball
        this.x = this.x + this.speedX * dt;
        this.y = this.y + this.speedY * dt;
        // Bounce
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    padBounce() {
        this.speedX = -this.speedX;
        // Bug fix
        if(this.x > canvas.width - paddleAI.width) {
            this.x = canvas.width - paddleAI.width;
        }
        if(this.x < paddle.width) {
            this.x = paddle.width;
        } 
    }

    draw() {
        canvasContext.fillStyle = 'white';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvasContext.fill();
    }
}