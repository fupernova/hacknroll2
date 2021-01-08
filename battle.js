class battleScene extends Phaser.Scene {
	constructor() {
		super({ key: "battleScene" });
	}

	init() {}

	preload() {
		this.load.image(
        	"battleground",
        	"assets/backgrounds/PNG/Battleground3/Bright/Battleground3.png"
      	);

      	this.load.spritesheet("character_attack1", "assets/sprite/spritesheets/attack_spritesheet.png", {
        	frameWidth: 204,
        	frameHeight: 256,
     	});

     	this.load.spritesheet("enemy", "assets/sprite/spritesheets/King/NoBkgColor/spr_KingIdle_strip_no_bkg.png", {
        	frameWidth: 256,
        	frameHeight: 256
      	});

      	this.load.spritesheet("enemy_attack", "assets/sprite/spritesheets/king_attack.png", {
        	frameWidth: 437.5,
        	frameHeight: 350
      	})
	}

	create() {
		this.scene.run("gameUI");
		var bg = this.add.image(540, 305, "battleground");

		this.enemy = this.physics.add.sprite(750, 300, "enemy_attack", 0);
      	this.enemy.setCollideWorldBounds(true);


	    this.character = this.physics.add.sprite(250, 270, "character_attack1", 6);
	    this.character.setCollideWorldBounds(true);

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

      	this.graphics = this.add.graphics();
	    this.graphics.lineStyle(1, 0xffffff);
	    this.graphics.fillStyle(0x031f4c, 1);        
	    this.graphics.strokeRect(0, 0, 300, 200);
	    this.graphics.fillRect(0, 0, 300, 200);
	    this.graphics.strokeRect(465, 460, 150, 150);
	    this.graphics.fillRect(465, 460, 150, 150);
	    this.graphics.strokeRect(780, 0, 300, 200);
	    this.graphics.fillRect(780, 0, 300, 200);

	    this.cursors = this.input.keyboard.createCursorKeys();
	    this.spacebar = this.input.keyboard.addKey(
	        Phaser.Input.Keyboard.KeyCodes.SPACE
	    );
	}

	transition() {

	}

	update() {

		if (this.)


	}


}

export default battleScene;