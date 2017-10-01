let canvas;
let canvasContext;
let keyUp, keyDown;
let ballX, ballY;
let speedX, speedY;
let paddleX, paddleY;
let paddleSpeedY;

window.onload = function () {
    load();
    setInterval(() => {
        update();
        draw();
    }, 1000 / 60);
}

function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', detectKey, false);

    // Loading
    ballX = 50;
    ballY = 50;
    speedX = 2;
    speedY = 2;
    paddleX = 0;
    paddleY = 100;
    paddleSpeedY = 0;
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

function update() {
    // Game logic
    // Move ball
    ballX = ballX + speedX;
    ballY = ballY + speedY;
    // Bounce
    if (ballX > canvas.width || ballX < 0) {
        speedX = -speedX;
    }
    if (ballY > canvas.height || ballY < 0) {
        speedY = -speedY;
    }
    // Paddle move
    if (keyUp) {
        paddleSpeedY = -10;
    } else if (keyDown) {
        paddleSpeedY = 10;
    } else {
        paddleSpeedY = 0;
    }
    paddleY = paddleY + paddleSpeedY;
}

function draw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);

    // Draw game
    // Ball
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
    canvasContext.fill();
    // Paddle
    canvasContext.beginPath();
    canvasContext.rect(paddleX, paddleY, 20, 100);
    canvasContext.fill();
}