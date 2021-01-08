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
  }
  create() {
    var bg = this.add.image(540, 305, "room");
  }
}
export default castleScene;
