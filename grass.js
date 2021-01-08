class grassScene extends Phaser.Scene {
    constructor() {
      super({ key: "grassScene" });
    }
    init() {}
  
    preload() {
      this.load.image(
        "room1",
        "assets/backgrounds/PNG/Grass/grass crop.png"
      );
      this.load.spritesheet("character1", "assets/attack_spritesheet-0.png", {
        frameWidth: 128,
        frameHeight: 128,
      });
      this.load.spritesheet("dude1", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
    }
    create() {
    this.scene.run("gameUI");
      var bg = this.add.image(500, 300, "room1");
      this.man = this.physics.add.sprite(200, 100, "character1", 0);
      this.man.setCollideWorldBounds(true);
      
      this.anims.create({
        key: "attackGrass",
        frames: this.anims.generateFrameNumbers("character1", {
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
        this.man.anims.play("attackGrass", true);
      }
    }
  }
  export default grassScene;
  