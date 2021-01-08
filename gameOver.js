class gameOverScene extends Phaser.Scene {
    constructor() {
      super({ key: "gameOverScene" });
    }
    init() {}
  
    preload() {
        this.load.image(
            "bgDark",
            "assets/backgrounds/PNG/Game Over/background.png"
          );
    }

    create() {
        var bg = this.add.image(540, 305, "bgDark");
        var title = this.add.text(600,300, 'GAME OVER', { fontFamily: 'pixelfont', fontSize: 50 });
    }
}

export default gameOverScene;