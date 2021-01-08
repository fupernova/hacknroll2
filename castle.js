class castleScene extends Phaser.Scene {
  constructor() {
    super({ key: "castlescene" });
  }
  init() {}

  preload() {
    this.load.image(
      "room",
      "assets/backgrounds/PNG/Battleground2/Bright/Battleground2.png"
    );
    this.load.spritesheet("character", "assets/attack_spritesheet-0.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }
  create() {
    var bg = this.add.image(540, 305, "room");
    this.man = this.physics.add.sprite(200, 100, "character", 0);
    this.man.setCollideWorldBounds(true);

    this.anims.create({
      key: "attack",
      frames: this.anims.generateFrameNumbers("character", {
        start: 1,
        end: 3,
      }),
      frameRate: 10,
    });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  update() {
    this.man.body.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.man.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.man.setVelocityX(160);
    } else {
      this.man.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.man.setVelocityY(-160);
    }
    if (this.cursors.down.isDown) {
      this.man.setVelocityY(160);
    }
    if (this.spacebar.isDown) {
      this.man.anims.play("attack", true);
    }
  }
}
export default castleScene;
