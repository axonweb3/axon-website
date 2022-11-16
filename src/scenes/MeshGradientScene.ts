import Phaser from 'phaser';

export class MeshGradientScene extends Phaser.Scene {
  private readonly paths: [[number, number], [number, number], [number, number], [number, number]][];
  private readonly timer: { t: number };
  private readonly blobs: Phaser.GameObjects.Sprite[] = [];

  constructor() {
    super({
      key: 'MeshGradientScene',
    });
    this.timer = { t: 0 };
    this.paths = [
      [
        [1 / 4, 1 / 3],
        [5 / 7, 1 / 4],
        [1 / 3, 3 / 4],
        [2 / 3, 3 / 4],
      ],
      [
        [1 / 3, 1 / 4],
        [5 / 6, 2 / 5],
        [3 / 7, 1 / 2],
        [5 / 7, 4 / 5],
      ],
      [
        [2 / 3, 1 / 3],
        [5 / 6, 3 / 5],
        [2 / 5, 11 / 10],
        [1 / 4, 1 / 2],
      ],
      [
        [2 / 5, 1 / 2],
        [2 / 3, 4 / 5],
        [1 / 8, 2 / 5],
        [8 / 9, 5 / 8],
      ],
      [
        [1 / 4, 1 / 3],
        [5 / 7, 1 / 4],
        [1 / 3, 3 / 4],
        [2 / 3, 3 / 4],
      ],
    ];
  }

  init(): void {
    console.log('init');
  }

  preload(): void {
    this.load.image('blob_0', 'assets/pics/blob_0.png');
    this.load.image('blob_1', 'assets/pics/blob_1.png');
    this.load.image('blob_2', 'assets/pics/blob_2.png');
    this.load.image('blob_3', 'assets/pics/blob_3.png');
  }

  create(): void {
    this.tweens.add({
      targets: this.timer,
      t: this.paths.length * 2,
      ease: Phaser.Math.Easing.Linear,
      duration: this.paths.length * 2 * 1000,
      yoyo: false,
      repeat: -1,
    });
    const x = document.documentElement.clientWidth;
    const y = document.documentElement.clientHeight;
    const zoom = x / 2000;
    const blob_0 = this.add.sprite(this.paths[0][0][0] * x, this.paths[0][0][1] * y, 'blob_0');
    blob_0.scale = zoom;
    const blob_1 = this.add.sprite(this.paths[0][1][0] * x, this.paths[0][1][1] * y, 'blob_1');
    blob_1.scale = zoom;
    const blob_2 = this.add.sprite(this.paths[0][2][0] * x, this.paths[0][2][1] * y, 'blob_2');
    blob_2.scale = zoom;
    const blob_3 = this.add.sprite(this.paths[0][3][0] * x, this.paths[0][3][1] * y, 'blob_3');
    blob_3.scale = zoom;
    this.blobs.push(blob_0, blob_1, blob_2, blob_3);
  }

  update(): void {
    const x = document.documentElement.clientWidth;
    const y = document.documentElement.clientHeight;
    const state = Math.floor(this.timer.t);
    if (state % 2 === 1) {
      const j = (state - 1) / 2;
      const t = this.timer.t - state;
      this.blobs.forEach((blob, i) => {
        const s_x = (this.paths[(j + 1) % this.paths.length][i][0] - this.paths[j][i][0]) * x;
        const a_x = s_x / 0.25;
        const s_y = (this.paths[(j + 1) % this.paths.length][i][1] - this.paths[j][i][1]) * y;
        const a_y = s_y / 0.25;
        if (t < 0.5) {
          blob.x = this.paths[j][i][0] * x + 0.5 * a_x * t * t;
          blob.y = this.paths[j][i][1] * y + 0.5 * a_y * t * t;
        } else {
          blob.x = this.paths[j][i][0] * x + s_x - 0.5 * a_x * Math.pow(1 - t, 2);
          blob.y = this.paths[j][i][1] * y + s_y - 0.5 * a_y * Math.pow(1 - t, 2);
        }
      });
    }
  }
}
