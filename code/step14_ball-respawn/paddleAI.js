class PaddleAI extends Paddle {

    update() {
        if(ball.y >= this.y + this.height) {
            this.speedY = 5;
        } else if (ball.y <= this.y) {
            this.speedY = -5;
        } else {
            this.speedY = 0;
        }
        this.y = this.y + this.speedY;
    }
    
}