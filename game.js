import castleScene from "./castle.js";

// Our game scene
var scene = new Phaser.Scene("game");
var castle = new castleScene();
var config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 610,
  scene: scene,
};

// Create the game with our config values
// this will also inject our canvas element into the HTML source
// for us
var game = new Phaser.Game(config);

// Load scene
game.scene.add("castlescene", castle);

// Boot scene
game.scene.start("castlescene");
