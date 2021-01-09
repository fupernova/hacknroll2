class dialogueScene extends Phaser.Scene {
  constructor() {
    super({ key: "dialogueScene" });
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  init() {
    this.current = 0;
    this.text = [];
    this.text[0] = [
      "King Vlad: Over 300 years ago, the evil lord Azzaos sent his hordes of demons to attack our province.",
      "He wreaked havoc over our farms, towns and cities, and Relleka seemed all but doomed.",
      "One man from the small town of Berricka, Dezzick led a hopeless attack in an attempt to drive the demons out.",
    ];
    this.text[1] = ["You: Dezzick...the name sounds familiar..."];
    this.text[2] = [
      "King Vlad: Indeed. You are his direct descendent.",
      "In his assault, he discovered that he possessed special powers...",
      "He inherited the blood of the ancients. Him and only him was capable of defeating the forces of Azzaos.",
      "With Dezzick leading the forces of Relleka, the demons had no chance afterwards and were swiftly defeated.",
      "Azzaos however managed to escape and swore revenge on our kingdom.",
    ];
    this.text[3] = [
      "King Vlad: The king of Holmburg, King Prysin IV secretly handed over a silver quill to Dezzick.",
      "It was to be passed down to his descendents, safe within the family until Azzaos inevitably returned.",
      "It would then be used to alert the king of Holmburg of the return of Azzaos.",
      "And to start the preparations for war.",
    ];
    this.text[4] = [
      "King Vlad: You have done well to reach Holmburg safely. However, the battle has just begun.",
      "Are you ready?",
    ];
  }

  preload() {
    this.load.image("throneRoom", "assets/backgrounds/throne.jpg");
    this.load.image("chatBox", "assets/backgrounds/chat-bg.png");
    this.load.spritesheet(
      "hero",
      "assets/sprite/spritesheets/attack_spritesheet.png",
      {
        frameWidth: 102,
        frameHeight: 128,
      }
    );
    this.load.spritesheet(
      "king",
      "assets/sprite/spritesheets/sir_spritesheet_resize.png",
      { frameWidth: 460.8, frameHeight: 256 }
    );
  }

  hover() {
    this.continueButton.setStyle({ fill: "#b0f" });
  }

  rest(b) {
    this.continueButton.setStyle({ fill: "#10f" });
  }

  toNextScene() {
    this.continueButton = this.add
      .text(32, 135, "Click here to continue", {
        fill: "#10f",
      })
      .setInteractive()
      .on("pointerover", () => this.hover())
      .on("pointerout", () => this.rest())
      .on("pointerdown", () => {
        this.current += 1;
        this.printText(this.text[this.current]);
      });
  }

  async printText(paragraph) {
    var bg = this.add.image(540, 80, "chatBox");
    await this.sleep(100);
    for (var i = 0; i < paragraph.length; i++) {
      this.add.text(32, 32 + i * 20, paragraph[i] + "\n", {
        fontFamily: "Quicksand",
        fontSize: "22px",
        fill: "#000000",
      });
      await this.sleep(2000);
    }
    await this.sleep(1000);
    this.toNextScene();
  }

  create() {
    var bg = this.add.image(540, 160, "throneRoom");

    // Main character
    this.manWalk = this.physics.add.sprite(400, 445, "hero", 6);
    this.manWalk.setCollideWorldBounds(true);

    // King
    this.king = this.physics.add.sprite(700, 445, "king", 0);
    this.king.setCollideWorldBounds(true);
    this.anims.create({
      key: "king_idle",
      frames: this.anims.generateFrameNumbers("king", {
        start: 1,
        end: 8,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.king.play("king_idle");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.printText(this.text[0]);
  }

  update() {}
}
export default dialogueScene;
