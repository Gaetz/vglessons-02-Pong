let canvas;
let canvasContext;
let keyUp, keyDown;
let ball;
let paddle;
let paddleAI;

window.onload = function () {
    let lastUpdate = Date.now();
    let now, dt;
    load();
    setInterval(() => {
        now = Date.now();
        dt = (now - lastUpdate) * 1 / (1000 / 60);
        lastUpdate = now;

        update(dt);
        draw();
    }, 1000 / 60);
}

function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', detectKey, false);
    document.addEventListener('keyup', releaseKey, false);
    
    // Loading
    ball = new Ball(50, 50, 10, 5, 5);
    paddle = new Paddle(0, 100);
    paddleAI = new PaddleAI(canvas.width - 20, 100);
}

function detectKey(e) {
    // Inputs
    if (e.keyCode == 38) {
        keyUp = true;
    }
    if (e.keyCode == 40) {
        keyDown = true;
    }
}

function releaseKey(e) {
    if (e.keyCode == 38) {
        keyUp = false;
    }
    if (e.keyCode == 40) {
        keyDown = false;
    }  
}

function update(dt) {
    ball.update(dt);
    paddle.update(dt);
    paddleAI.update(dt);
    // Pad bounce
    if(ball.x <= paddle.width) {
        if(ball.y >= paddle.y && ball.y <= paddle.y + paddle.height) {
            ball.padBounce();
        }
    }
    if(ball.x >= canvas.width - paddleAI.width) {
        if(ball.y >= paddleAI.y && ball.y <= paddleAI.y + paddleAI.height) {
            ball.padBounce();
        }
    }
    // Respawn
    if(ball.isOutOfScreen()) {
        respawn();
    }
}

function respawn() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = -ball.speedX;
}

function draw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);

    // Draw game
    ball.draw();    
    paddle.draw();
    paddleAI.draw();    
}