/**
 * @file StartMain.ts
 * @author jjq
 * @description StartMain.ts
*/

export default class StartMain extends Laya.Script {
  
  /** @prop {name: startBtn, type: Node} */
  private startBtn: Laya.Button;

  constructor() { super(); }
  
  onEnable(): void {
    console.log('onEnable');
    this.startBtn.on(Laya.Event.CLICK, this, () => {
      Laya.Scene.open('Level1.scene');
    });
  }
}

