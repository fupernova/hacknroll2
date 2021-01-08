// Our game scene
var scene = new Phaser.Scene("game");

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

scene.init = function () {};

scene.preload = function () {
  this.load.image(
    "room",
    "assets/backgrounds/PNG/Battleground2/Bright/Battleground2.png"
  );
};

scene.create = function () {
  var bg = this.add.sprite(540, 305, "room");
  //bg.setOrigin(0, 0);
};
