class gameUI extends Phaser.Scene {
    constructor() {
        super({ key: "gameUI" });
      }
      init() {
          this.lives = 3;
          this.livesText;
      }

      preload() {
        this.load.image(
          "heart",
          "assets/sprite/PNG/Heart/heart pixel art 32x32.png"
        );
      }

      create() {
        this.liveText = this.add.text(20, 550, 'Lives: ' + this.lives, {fontFamily: 'pixelfont', fontSize: 35});
        this.add.image(180, 570, "heart");
      }
}
export default gameUI;
