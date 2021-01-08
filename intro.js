class introScene extends Phaser.Scene {
    constructor() {
        super({ key: "introScene" });
      }
      init() {}
    
      preload() {
        this.load.image(
          "bg",
          "assets/backgrounds/PNG/Intro/Intro background.png"
        );
      }

      create() {
        var bg = this.add.image(540, 305, "bg");
        var title = this.add.text(800,300, 'Hello World!', { fontFamily: 'pixelfont', fontSize: 30 });
        var clicker = this.add.text(800,350, 'Click to start', { fontFamily: 'pixelfont', fontSize: 20 });
        clicker.setInteractive({ useHandCursor: true });
        clicker.on('pointerdown', () => this.clickButton());
      }

      clickButton() {
        this.scene.switch('battleScene');
    }
}

export default introScene;