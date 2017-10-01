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

    // Chargement des données ici
}

function detectKey(e) {
    // Gestion du clavier ici
    if (e.keyCode == 32) {
        keySpace = true;
    }
}

function update() {
    // Logique de jeu ici
    
}

function draw() {
    // Arrière-plan noir
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, 800, 600);

    // Dessin du jeu ici
}