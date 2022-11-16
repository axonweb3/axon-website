import Phaser from 'phaser';

export class InteroperabilityScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'InteroperabilityScene',
    });
  }

  init(): void {
    console.log('init');
  }

  create(): void {
    const x = document.documentElement.clientWidth;
    const y = document.documentElement.clientHeight;
  }

  update(): void {
    const x = document.documentElement.clientWidth;
    const y = document.documentElement.clientHeight;
  }
}
