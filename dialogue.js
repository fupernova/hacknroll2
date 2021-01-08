class dialogueScene extends Phaser.scene {
  constructor() {
    super({ key: "dialoguescene" });
  }
  init();
  preload() {
    this.load.image("room", "assets/backgrounds/throne.jpg");
      this.load.spritesheet("character", "assets/attack_spritesheet-0.png", {
        frameWidth: 128,
        frameHeight: 128,
      });
      this.load.spritesheet(
        "sir",
        "assets/sprite/spritesheets/sir_spritesheet_resize.png",
        { frameWidth: 460.8, frameHeight: 256 }
      );
  }
  create() {
    var bg = this.add.image(540, 160, "room");

    // Main character
    this.man = this.physics.add.sprite(200, 100, "character", 0);
    this.man.setCollideWorldBounds(true);

    // King
    this.king = this.physics.add.sprite(990, 400, "sir", 0);
    this.man.setCollideWorldBounds(true);
  }
}
