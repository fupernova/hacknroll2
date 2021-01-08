var right = false;

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
      this.load.spritesheet("character_attack1", "assets/sprite/spritesheets/attack_spritesheet.png", {
        frameWidth: 102,
        frameHeight: 128,
      });
      this.load.spritesheet("character_walk1", "assets/sprite/spritesheets/walk_spritesheet.png", {
        frameWidth: 102,
        frameHeight: 128
      });
    }
    create() {
      this.scene.run("gameUI");
      var bg = this.add.image(500, 300, "room1");
      this.man = this.physics.add.sprite(200, 100, "character1_attack1", 0);
      this.man.setCollideWorldBounds(true);
      
      this.anims.create({
        key: "attackGrass",
        frames: this.anims.generateFrameNumbers("character1_attack1", {
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

        // this.manAttack.disableBody(true, true);
        // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
        this.man.setVelocityX(-160);
        this.man.anims.play("walkLeft", true);

        right = false;

      } else if (this.cursors.right.isDown) {

        // this.manAttack.disableBody(true, true);
        // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
        this.man.setVelocityX(160);
        this.man.anims.play("walkRight", true);

        right = true;

      } else {

        this.man.setVelocityX(0);

      }

      if (this.cursors.up.isDown && right) {

        // this.manAttack.disableBody(true, true);
        // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
        this.man.setVelocityY(-160);
        this.man.anims.play("walkRight", true);

        right = true;

      } else if (this.cursors.up.isDown && !right) {

        this.man.setVelocityY(-160);
        this.man.anims.play("walkLeft", true);

        right = false;
      }

      if (this.cursors.down.isDown && right) {

        // this.manAttack.disableBody(true, true);
        // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
        this.man.setVelocityY(160);
        this.man.anims.play("walkRight", true);

        right = true;

      } else if (this.cursors.down.isDown && !right) {

        this.man.setVelocityY(160);
        this.man.anims.play("walkLeft", true);

        right = false;
      }
    }
  }
  export default grassScene;
  