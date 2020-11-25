var GAME_WIDTH = 480;
var GAME_HEIGHT = 640;

// state object holds reference to functions called 
var state = {
    init: init,
    preload: preload,
    update: update,
    create: create
};

var phaserGame = new Phaser.Game(
    GAME_WIDTH, 
    GAME_HEIGHT, 
    Phaser.AUTO, // Renderer is AUTO this Will create auto switch between webGL and Canvas 
    'container',
    state
);

var taxiGame = new TTTGame(phaserGame);

function init() {
    taxiGame.init();
}

function create() {
    taxiGame.create();
}

function preload() {
    taxiGame.preload();
}
function update() {
    taxiGame.update();
}