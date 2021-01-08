import castleScene from "./castle.js";
import introScene from "./intro.js";
import gameUI from "./gameUI.js";
import grassScene from "./grass.js";

// Our game scene
var scene = new Phaser.Scene("game");
var intro =  new introScene();
var castle = new castleScene();
var grass = new grassScene();
var UI = new gameUI();
var config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 610,
  scene: scene,
  //pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

// Create the game with our config values
// this will also inject our canvas element into the HTML source
// for us
var game = new Phaser.Game(config);

// Load scene

game.scene.add("introScene", intro);
game.scene.add("castlescene", castle);
game.scene.add("grassScene", grass);
game.scene.add("gameUI", UI);

// Boot scene
game.scene.start("introScene");
