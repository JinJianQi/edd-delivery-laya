/**
 * @file Level1Main.ts
 * @author jjq
 * @description Level1Main.ts
 */

export default class Level1Main extends Laya.Script {
  constructor() { super(); }

  /** @prop {name: label, type: Node} */
  private label: Laya.Label;

  private missedCount: number = 0;

  onMiss() {
    console.log('onMiss');
    this.missedCount++;
    this.label.text = '' + this.missedCount;
  }

  onEnable() {

  };
}
