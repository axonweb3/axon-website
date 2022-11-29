import Phaser from 'phaser';

export class BallScene extends Phaser.Scene {
  private _texture: string;
  private _diameter: number;
  private ball?: Phaser.GameObjects.Sprite;
  private moveInterval?: NodeJS.Timer;
  constructor(_texture: string, _diameter: number) {
    super({
      key: 'BallScene',
    });
    this._texture = _texture;
    this._diameter = _diameter;
  }

  init(): void {
    console.log('init');
  }

  preload(): void {
    this.load.image('ball', this._texture);
  }

  create(): void {
    const { width, height } = this.sys.game.canvas;
    this.ball = this.add.sprite(width / 2, height / 2, 'ball');
    this.ball.scale = width / 420;
    this.moveInterval = setInterval(() => {
      const x = width * (0.5 + (Math.sqrt(Math.random() * 400) - 10) / 200);
      const y = width * (0.5 + (Math.sqrt(Math.random() * 400) - 10) / 200);
      this.newPosition(x, y);
    }, 800);
  }

  newPosition(x: number, y: number): void {
    this.tweens.add({
      targets: this.ball,
      x,
      y,
      duration: 800,
      ease: Phaser.Math.Easing.Sine.InOut,
    });
  }

  update(): void {
    // console.log('update');
  }

  destroy(): void {
    clearInterval(this.moveInterval);
  }
}
