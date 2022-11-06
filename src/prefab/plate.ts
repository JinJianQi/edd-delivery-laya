/**
 * @file plate.ts
 * @author jjq
 * @description plate.ts
 */

import Level1Main from "../scence/levels/Level1Main";

export default class Plate extends Laya.Script {

  startTime;
  currentTime;
  _owner: Laya.Box;

  /** @prop {name: duration} */
  private duration: number;

  /** @prop {name: controller, type: Node} */
  private controller: Level1Main;

  constructor() {
    super();
  }

  setUp() {
    this._owner = this.owner as Laya.Box;
    Laya.timer.frameLoop(1, this, this.onFrameLoop);
    this.startTime = new Date().getTime();
  }

  onFrameLoop() {
    this.currentTime = new Date().getTime();
    const nextY = (this.currentTime - this.startTime) / 1e3 / this.duration * Laya.stage.height;
    if (nextY > Laya.stage.height) {
      this.controller.onMiss();
      this.destroy();
    }
    this._owner.y = nextY;
  }

  onEnable(): void {
    this.setUp();
  }
}
