let canvas;
let canvasContext;
let keyUp, keyDown;
let ball;

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
    document.addEventListener('keyup', releaseKey, false);
    
    // Loading
    ball = new Ball(50, 50, 10, 2, 2);

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

function releaseKey(e) {
    if (e.keyCode == 38) {
        keyUp = false;
    }
    if (e.keyCode == 40) {
        keyDown = false;
    }  
}

function update() {
    ball.update();
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
    ball.draw();    
    // Paddle
    canvasContext.beginPath();
    canvasContext.rect(paddleX, paddleY, 20, 100);
    canvasContext.fill();
}