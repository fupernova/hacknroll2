var right = false;

class grassScene extends Phaser.Scene {
    constructor() {
      super({ key: "grassScene" });
    }
    init() {}
  
    preload() {
        // map tiles
        this.load.image('tiles', 'assets/map/spritesheet.png');
        
        // map in json format
        this.load.tilemapTiledJSON('map', 'assets/map/map.json');

      this.load.image(
        "castle",
        "assets/sprite/PNG/Castle/castle.png"
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

      var map = this.make.tilemap({key: 'map'});

      // first parameter is the name of the tilemap in tiled
      var tiles = map.addTilesetImage('spritesheet', 'tiles');
        
      // creating the layers
      var grass = map.createStaticLayer('Grass', tiles, 0, 0);
      var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
      
      // make all tiles in obstacles collidable
      obstacles.setCollisionByExclusion([-1]);

      this.castle = this.physics.add.image(950, 300, "castle");

      this.man = this.physics.add.sprite(200, 100, "character_attack1", 6);
      this.man.setCollideWorldBounds(true);

      // don't walk on trees
      this.physics.add.collider(this.man, obstacles);
      
      this.anims.create({
        key: "walkLeft",
        frames: this.anims.generateFrameNumbers("character_walk1", { start: 0, end: 5 }),
        frameRate: 10,
      });
  
      this.anims.create({
        key: "walkRight",
        frames: this.anims.generateFrameNumbers("character_walk1", { start: 6, end: 11 }),
        frameRate: 10,
      });

      this.anims.create({
        key: "attackGrass",
        frames: this.anims.generateFrameNumbers("character_attack1", {
          start: 1,
          end: 3,
        }),
        frameRate: 10,
      });
      this.cursors = this.input.keyboard.createCursorKeys();
      this.spacebar = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
      );

      // where the enemies will be
      this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
      for(var i = 0; i < 30; i++) {
          var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
          var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
          // parameters are x, y, width, height
          this.spawns.create(x, y, 20, 20);            
      }        
      // add collider
      this.physics.add.overlap(this.man, this.spawns, this.onMeetEnemy, false, this);
      // we listen for 'wake' event
      this.sys.events.on('wake', this.wake, this);
    }

    wake() {
      this.cursors.left.reset();
      this.cursors.right.reset();
      this.cursors.up.reset();
      this.cursors.down.reset();
    }

    onMeetEnemy(player, zone) {        
      // we move the zone to some other location
      zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
      
      // shake the world
      this.cameras.main.shake(300);
      
      this.input.stopPropagation();
      // start battle 
      //this.scene.switch('BattleScene');                
    }
  
    transition() {
        this.scene.switch('castlescene');
        this.scene.sleep('gameUI');
        this.scene.remove('grassScene');
      }

    update() {
      this.man.body.setVelocity(0);

      this.physics.add.overlap(this.man, this.castle, this.transition, false, this);

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
  