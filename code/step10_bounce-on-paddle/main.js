let canvas;
let canvasContext;
let keyUp, keyDown;
let ball;
let paddle;

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
    paddle = new Paddle(0, 100);
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
    paddle.update();
    // Pad bounce
    if(ball.x <= paddle.width) {
        if(ball.y >= paddle.y && ball.y <= paddle.y + paddle.height) {
            ball.padBounce();
        }
    }
}

function draw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);

    // Draw game
    ball.draw();    
    paddle.draw();
}