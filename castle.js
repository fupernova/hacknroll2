var right = false;

class castleScene extends Phaser.Scene {

  constructor() {
    super({ key: "castlescene" });
  }
  init() {
	  this.content = [
      "That quill...You are Drezen's son? This means....",
      "I am so sorry for the loss of your father.",
      "However, there is little time to grieve. An evil threat looms over the kingdom, and war is imminent.",
      "You have arrived just in time. Come, let us speak in private.",
    ];
  }

  preload() {
    this.load.image(
      "room",
      "assets/backgrounds/PNG/Battleground2/Bright/Battleground2.png"
    );
	this.load.image("chat", "assets/backgrounds/chat-bg.png");
    this.load.image(
      "door",
      "assets/sprite/PNG/Door/door.png"
    );
    this.load.spritesheet("character_attack", "assets/sprite/spritesheets/attack_spritesheet.png", {
      frameWidth: 102,
      frameHeight: 128,
    });
    this.load.spritesheet("character_walk", "assets/sprite/spritesheets/walk_spritesheet.png", {
      frameWidth: 102,
      frameHeight: 128
    });
	this.load.spritesheet(
      "sir",
      "assets/sprite/spritesheets/sir_spritesheet_resize.png",
      { frameWidth: 460.8, frameHeight: 256 }
    );
  }

	async printText() {
		var bg = this.add.image(525, 80, "chat");
		await this.sleep(100);
		for (var i = 0; i < this.content.length; i++) {
			this.add.text(32, 32 + i * 20, this.content[i] + "\n", {
			fontFamily: "Quicksand",
			fontSize: "25px",
			fill: "#000000",
		});
		await this.sleep(2000);
    }
  }
  create() {
    this.scene.run("gameUI");
    var bg = this.add.image(540, 305, "room");
    this.door = this.physics.add.image(30, 350, "door");

    this.manWalk = this.physics.add.sprite(200, 400, "character_walk", 6);
    this.manWalk.setCollideWorldBounds(true);

    this.manAttack = this.physics.add.sprite(this.manWalk.x, this.manWalk.y, "character_attack" , 6);
    this.manAttack.setCollideWorldBounds(true);
    this.manAttack.disableBody(true, true);

    // King
    this.king = this.physics.add.sprite(990, 400, "sir", 0);
    this.king.setCollideWorldBounds(true);
	
    this.anims.create({
      key: "attackLeft",
      frames: this.anims.generateFrameNumbers("character_attack", { start: 0, end: 5 }),
      frameRate: 20,
    });

    this.anims.create({
      key: "attackRight",
      frames: this.anims.generateFrameNumbers("character_attack", { start: 6, end: 11 }),
      frameRate: 20,
    });

    this.anims.create({
      key: "walkLeft",
      frames: this.anims.generateFrameNumbers("character_walk", { start: 0, end: 5 }),
      frameRate: 10,
    });

    this.anims.create({
      key: "walkRight",
      frames: this.anims.generateFrameNumbers("character_walk", { start: 6, end: 11 }),
      frameRate: 10,
    });

	this.anims.create({
      key: "sir_idle",
      frames: this.anims.generateFrameNumbers("sir", {
        start: 1,
        end: 8,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.king.play("sir_idle");
	
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  transition() {
    this.scene.switch('grassScene');
    this.scene.sleep('gameUI');
    this.scene.remove('castlescene');
    
  }

  update() {

    this.manWalk.body.setVelocity(0);
    this.physics.add.overlap(this.manWalk, this.door, this.transition, false, this);

    if (this.cursors.left.isDown) {

      // this.manAttack.disableBody(true, true);
      // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
      this.manWalk.setVelocityX(-160);
      this.manWalk.anims.play("walkLeft", true);

      right = false;

    } else if (this.cursors.right.isDown) {

      // this.manAttack.disableBody(true, true);
      // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
      this.manWalk.setVelocityX(160);
      this.manWalk.anims.play("walkRight", true);

      right = true;

    } else {

      this.manWalk.setVelocityX(0);

    }

    if (this.cursors.up.isDown && right) {

      // this.manAttack.disableBody(true, true);
      // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
      this.manWalk.setVelocityY(-160);
      this.manWalk.anims.play("walkRight", true);

      right = true;

    } else if (this.cursors.up.isDown && !right) {

      this.manWalk.setVelocityY(-160);
      this.manWalk.anims.play("walkLeft", true);

      right = false;
    }

    if (this.cursors.down.isDown && right) {

      // this.manAttack.disableBody(true, true);
      // this.manWalk.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
      this.manWalk.setVelocityY(160);
      this.manWalk.anims.play("walkRight", true);

      right = true;

    } else if (this.cursors.down.isDown && !right) {

      this.manWalk.setVelocityY(160);
      this.manWalk.anims.play("walkLeft", true);

      right = false;
    }

    /*
    if (this.spacebar.isDown && this.manWalk.anims.currentFrame.index > 5) {

      this.manWalk.disableBody(true, true);
      this.manAttack.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
      this.manAttack.anims.play("attackRight", true);

    } else if (this.spacebar.isDown && this.manWalk.anims.currentFrame.index < 6) {

      this.manWalk.disableBody(true, true);
      this.manAttack.enableBody(true, this.manWalk.x, this.manWalk.y, true, true);
      this.manAttack.anims.play("attackLeft", true);

    }
    */
  }
}
export default castleScene;
