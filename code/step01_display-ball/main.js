let canvas;
let canvasContext;
let keySpace;

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
}

function detectKey(e) {
    // Inputs
    if (e.keyCode == 32) {
        keySpace = true;
    }
}

function update() {
    // Game logic
    
}

function draw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);

    // Draw game
    // Ball
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(50, 50, 10, 0, Math.PI * 2, true);
    canvasContext.fill();
}