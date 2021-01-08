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
        frameWidth: 204,
        frameHeight: 256,
      });
      this.load.spritesheet("character_walk1", "assets/sprite/spritesheets/walk_spritesheet.png", {
        frameWidth: 102,
        frameHeight: 128
      });
      this.load.spritesheet("enemy", "assets/sprite/spritesheets/King/NoBkgColor/spr_KingIdle_strip_no_bkg.png", {
        frameWidth: 256,
        frameHeight: 256
      });
      this.load.spritesheet("enemy_attack", "assets/sprite/spritesheets/king_attack.png", {
        frameWidth: 390,
        frameHeight: 312
      })
    }

    create() {
      this.scene.run("gameUI");
      var bg = this.add.image(500, 300, "room1");
      this.man = this.physics.add.sprite(200, 270, "character_attack1", 6);
      this.man.setCollideWorldBounds(true);

      this.enemy = this.physics.add.sprite(700, 300, "enemy", 6);
      this.enemy.setCollideWorldBounds(true);
      this.enemyAttack = this.physics.add.sprite(700, 300, "enemy_attack", 0);
      this.enemy.setCollideWorldBounds(true);
      
      this.anims.create({
        key: "man_attack",
        frames: this.anims.generateFrameNumbers("character_attack1", {
          start: 6,
          end: 11
        }),
        frameRate: 10
      });

      this.anims.create({
        key: "enemy_attack",
        frames: this.anims.generateFrameNumbers("enemy_attack", {
          start: 0,
          end: 57
        }),
        frameRate: 10
      });

      this.cursors = this.input.keyboard.createCursorKeys();
      this.spacebar = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
      );
    }
  
    update() {

      if (this.spacebar.isDown) {

        this.man.anims.play("man_attack", true);

      }

      this.enemy.disableBody(true, true);
      this.enemyAttack.enableBody(true, this.enemy.x, this.enemy.y, true, true);
      this.enemyAttack.anims.play("enemy_attack", true);



      /*
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
      */
    }
  }
  export default grassScene;
  