(function () {
    'use strict';

    class Index extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this.uiBtn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("uiDemo/UiMain.scene");
            });
            this.phyBtn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("physicsDemo/PhysicsGameMain.scene");
            });
            this.d3Btn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("d3Demo/D3Main.scene");
            });
        }
        onDisable() {
        }
    }

    class Plate extends Laya.Script {
        constructor() {
            super();
        }
        setUp() {
            this._owner = this.owner;
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
        onEnable() {
            this.setUp();
        }
    }

    class Level1Main extends Laya.Script {
        constructor() {
            super();
            this.missedCount = 0;
        }
        onMiss() {
            console.log('onMiss');
            this.missedCount++;
            this.label.text = '' + this.missedCount;
        }
        onEnable() {
        }
        ;
    }

    var View = Laya.View;
    var Dialog = Laya.Dialog;
    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        class IndexUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(IndexUI.uiView);
            }
        }
        IndexUI.uiView = { "type": "Scene", "props": { "width": 750, "height": 1334 }, "compId": 2, "child": [{ "type": "Script", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "runtime": "laya.ui.Widget" }, "compId": 3 }, { "type": "Box", "props": { "width": 1027, "height": 90, "centerY": 131, "centerX": 0 }, "compId": 7, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 306, "skin": "comp/button.png", "sizeGrid": "12,12,12,12", "name": "uiBtn", "labelSize": 38, "labelFont": "SimHei", "labelColors": "#fff,#000,#fff", "label": "UI Demo", "height": 88, "labelPadding": "0,0,1,0" }, "compId": 4 }, { "type": "Button", "props": { "y": 0, "x": 360, "width": 306, "skin": "comp/button.png", "sizeGrid": "12,12,12,12", "name": "phyBtn", "labelSize": 38, "labelFont": "SimHei", "labelColors": "#fff,#000,#fff", "label": "物理 Demossasd", "height": 88, "labelPadding": "0,0,1,0" }, "compId": 5 }, { "type": "Button", "props": { "y": 0, "x": 719, "width": 306, "skin": "comp/button.png", "sizeGrid": "12,12,12,12", "name": "d3Btn", "labelSize": 38, "labelFont": "SimHei", "labelColors": "#fff,#000,#fff", "label": "3D混合 Demo", "height": 88, "labelPadding": "0,0,1,0" }, "compId": 6 }] }, { "type": "Image", "props": { "skin": "comp/image.png", "centerY": -139, "centerX": 0 }, "compId": 8 }, { "type": "Script", "props": { "uiBtn": "@node:4", "phyBtn": "@node:5", "d3Btn": "@node:6", "runtime": "Index.ts" }, "compId": 10 }, { "type": "Label", "props": { "text": "Powered by LayaAir Engine", "right": 0, "left": 0, "fontSize": 30, "color": "#827c7c", "centerY": 252, "align": "center" }, "compId": 11 }, { "type": "Label", "props": { "y": 408, "x": 643, "var": "asdasd", "text": "label", "fontSize": 40 }, "compId": 25 }], "loadList": ["comp/button.png", "comp/image.png"], "loadList3D": [] };
        ui.IndexUI = IndexUI;
        REG("ui.IndexUI", IndexUI);
        class LoadingUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(LoadingUI.uiView);
            }
        }
        LoadingUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "runtime": "LoadingRT.ts", "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "skin": "bg/ly.png", "centerY": -50, "centerX": 0 }, "compId": 3 }, { "type": "ProgressBar", "props": { "var": "progress", "value": 0.01, "skin": "comp/progress.png", "sizeGrid": "0,0,0,0,1", "centerY": 100, "centerX": 0 }, "compId": 4 }], "loadList": ["bg/ly.png", "comp/progress.png"], "loadList3D": [] };
        ui.LoadingUI = LoadingUI;
        REG("ui.LoadingUI", LoadingUI);
    })(ui || (ui = {}));
    (function (ui) {
        var ani;
        (function (ani) {
            class saceToNormalUI extends Laya.EffectAnimation {
                constructor() { super(); this.effectData = saceToNormalUI.uiView; }
            }
            saceToNormalUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "texture": "comp/x.png" }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "scaleY": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 5 }], "scaleX": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 5 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }], "loadList": ["comp/x.png"], "loadList3D": [] };
            ani.saceToNormalUI = saceToNormalUI;
            REG("ui.ani.saceToNormalUI", saceToNormalUI);
            class scaleUI extends Laya.EffectAnimation {
                constructor() { super(); this.effectData = scaleUI.uiView; }
            }
            scaleUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "skin": "comp/button.png", "label": "label", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 12 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 24 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 12 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 24 }] } }], "name": "ani1", "id": 1, "frameRate": 60, "action": 0 }], "loadList": ["comp/button.png"], "loadList3D": [] };
            ani.scaleUI = scaleUI;
            REG("ui.ani.scaleUI", scaleUI);
            class scaleToBigUI extends Laya.EffectAnimation {
                constructor() { super(); this.effectData = scaleToBigUI.uiView; }
            }
            scaleToBigUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "comp/img_blank.png" }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 6 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 6 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }], "loadList": ["comp/img_blank.png"], "loadList3D": [] };
            ani.scaleToBigUI = scaleToBigUI;
            REG("ui.ani.scaleToBigUI", scaleToBigUI);
            class scaleToSmallUI extends Laya.EffectAnimation {
                constructor() { super(); this.effectData = scaleToSmallUI.uiView; }
            }
            scaleToSmallUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "comp/img_hd.png" }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 6 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 6 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }], "loadList": ["comp/img_hd.png"], "loadList3D": [] };
            ani.scaleToSmallUI = scaleToSmallUI;
            REG("ui.ani.scaleToSmallUI", scaleToSmallUI);
        })(ani = ui.ani || (ui.ani = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var d3Demo;
        (function (d3Demo) {
            class D3MainUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(D3MainUI.uiView);
                }
            }
            D3MainUI.uiView = { "type": "Scene", "props": { "width": 640, "isModal": true, "height": 1134 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "texture": "demo/whs.jpg", "name": "bg" }, "compId": 7 }, { "type": "Button", "props": { "y": 5, "x": 603, "presetID": 1, "top": 5, "skin": "comp/btn_close.png", "right": 5, "isPresetRoot": true }, "compId": 4, "child": [{ "type": "Script", "props": { "presetID": 3, "runtime": "prefab/CloseBtn.ts" }, "compId": 6 }] }, { "type": "Sprite", "props": { "name": "spDude" }, "compId": 9 }, { "type": "Sprite", "props": { "name": "spFatso" }, "compId": 10 }, { "type": "Sprite", "props": { "y": 0, "x": 0, "name": "spMonkey" }, "compId": 11 }, { "type": "Sprite", "props": { "name": "spTrail" }, "compId": 12 }, { "type": "Script", "props": { "runtime": "scence/d3Demo/D3Main.ts" }, "compId": 16 }], "loadList": ["demo/whs.jpg", "prefab/CloseBtn.prefab"], "loadList3D": [] };
            d3Demo.D3MainUI = D3MainUI;
            REG("ui.d3Demo.D3MainUI", D3MainUI);
        })(d3Demo = ui.d3Demo || (ui.d3Demo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var physicsDemo;
        (function (physicsDemo) {
            class PhysicsGameMainUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(PhysicsGameMainUI.uiView);
                }
            }
            PhysicsGameMainUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "runtime": "scence/physicsDemo/PhysicsGameMainRT.ts", "right": 0, "name": "gameBox", "left": 0, "height": 1334, "bottom": 0 }, "compId": 1, "child": [{ "type": "Image", "props": { "skin": "test/block.png", "right": 0, "name": "ground", "left": 0, "height": 20, "bottom": 0 }, "compId": 3, "child": [{ "type": "Script", "props": { "y": 0, "x": 0, "width": 750, "label": "ground", "height": 20, "runtime": "Laya.BoxCollider" }, "compId": 5 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 6 }] }, { "type": "Sprite", "props": { "y": 0, "x": 0, "name": "gameBox" }, "compId": 18 }, { "type": "Box", "props": { "top": 0, "right": 0, "name": "UI", "left": 0, "bottom": 0 }, "compId": 14, "child": [{ "type": "Label", "props": { "y": 50, "width": 272, "var": "scoreLbl", "height": 47, "fontSize": 40, "color": "#51c524", "centerX": 0, "align": "center" }, "compId": 17 }, { "type": "Label", "props": { "var": "tipLbll", "valign": "middle", "top": 0, "text": "别让箱子掉下来\\n\\n点击屏幕开始游戏", "right": 0, "left": 0, "fontSize": 40, "color": "#c6302e", "bottom": 0, "align": "center" }, "compId": 16 }] }, { "type": "Button", "props": { "y": 300, "x": 280, "presetID": 1, "top": 5, "skin": "comp/btn_close.png", "right": 5, "isPresetRoot": true }, "compId": 21, "child": [{ "type": "Script", "props": { "presetID": 3, "runtime": "prefab/CloseBtn.ts" }, "compId": 25 }] }, { "type": "Script", "props": { "dropBox": "@Prefab:prefab/DropBox.prefab", "bullet": "@Prefab:prefab/Bullet.prefab", "runtime": "scence/physicsDemo/PhysicsGameMain.ts" }, "compId": 29 }], "loadList": ["test/block.png", "prefab/CloseBtn.prefab", "prefab/DropBox.prefab", "prefab/Bullet.prefab"], "loadList3D": [] };
            physicsDemo.PhysicsGameMainUI = PhysicsGameMainUI;
            REG("ui.physicsDemo.PhysicsGameMainUI", PhysicsGameMainUI);
        })(physicsDemo = ui.physicsDemo || (ui.physicsDemo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var uiDemo;
        (function (uiDemo) {
            class DialogUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(DialogUI.uiView);
                }
            }
            DialogUI.uiView = { "type": "Dialog", "props": { "width": 1000, "runtime": "scence/uiDemo/DialogRT.ts", "height": 600 }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "bg/img_bg05.png", "sizeGrid": "160,100,100,100", "right": 0, "left": 0, "bottom": 0 }, "compId": 4 }, { "type": "Label", "props": { "y": 25, "var": "dialogTitle", "valign": "middle", "text": "标题：XXXX", "right": 50, "left": 50, "height": 78, "fontSize": 35, "font": "SimHei", "color": "#ffffff", "align": "left" }, "compId": 5 }, { "type": "TextArea", "props": { "y": 133, "x": 62, "width": 878, "var": "dialogText", "vScrollBarSkin": "comp/vscroll.png", "text": "内容……………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………", "height": 413, "fontSize": 30, "font": "SimHei", "color": "#f6f3da" }, "compId": 7 }, { "type": "Sprite", "props": { "y": 33.5, "x": 901, "var": "closeBtn", "texture": "comp/x.png" }, "compId": 8 }], "loadList": ["bg/img_bg05.png", "comp/vscroll.png", "comp/x.png"], "loadList3D": [] };
            uiDemo.DialogUI = DialogUI;
            REG("ui.uiDemo.DialogUI", DialogUI);
            class MsgUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(MsgUI.uiView);
                }
            }
            MsgUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "runtime": "scence/uiDemo/MsgRT.ts", "height": 600, "centerX": 0 }, "compId": 2, "child": [{ "type": "Label", "props": { "y": 175, "x": 500, "var": "msgLab", "strokeColor": "#ffffff", "stroke": 2, "fontSize": 25, "font": "SimHei", "color": "#fd0400", "bold": true }, "compId": 3 }], "loadList": [], "loadList3D": [] };
            uiDemo.MsgUI = MsgUI;
            REG("ui.uiDemo.MsgUI", MsgUI);
            class UiMainUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(UiMainUI.uiView);
                }
            }
            UiMainUI.uiView = { "type": "View", "props": { "width": 1334, "top": 0, "runtime": "scence/uiDemo/UiMainRT.ts", "right": 0, "left": 0, "height": 750, "bottom": 0 }, "compId": 2, "child": [{ "type": "Label", "props": { "valign": "middle", "text": "UI Demo", "right": 0, "left": 0, "height": 52, "fontSize": 38, "font": "SimHei", "color": "#ffffff", "bgColor": "#5a7482", "align": "center" }, "compId": 3 }, { "type": "Button", "props": { "y": 114, "x": 961, "presetID": 1, "top": 5, "skin": "comp/btn_close.png", "right": 5, "isPresetRoot": true }, "compId": 4, "child": [{ "type": "Script", "props": { "presetID": 3, "runtime": "prefab/CloseBtn.ts" }, "compId": 6 }] }, { "type": "Image", "props": { "width": 1334, "visible": false, "skin": "comp/img_bg3.png", "sizeGrid": "7,14,10,13", "right": 0, "left": 0, "height": 637, "bottom": 0 }, "compId": 8 }, { "type": "Tab", "props": { "y": 65, "x": 0, "var": "topTab", "skin": "comp/tab.png", "selectedIndex": 0, "labels": "列表,UI基础使用,页面,2D 动画,进阶使用", "labelStroke": 1, "labelSize": 35, "labelFont": "SimHei", "labelColors": "#000000,#000000,#000000" }, "compId": 7 }, { "type": "ViewStack", "props": { "var": "tabPage", "top": 114, "selectedIndex": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#ffedb7" }, "compId": 19, "child": [{ "type": "Box", "props": { "width": 1334, "top": 0, "right": 0, "name": "item0", "left": 0, "height": 587, "bottom": 0 }, "compId": 9, "child": [{ "type": "Tab", "props": { "y": 30, "x": 39, "var": "item0Tab", "space": 20, "selectedIndex": 0, "direction": "vertical" }, "compId": 20, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "skin": "comp/button.png", "name": "item0", "labelSize": 28, "labelFont": "SimHei", "label": "背包列表", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 10 }, { "type": "Button", "props": { "y": 76, "x": 0, "skin": "comp/button.png", "name": "item1", "label": "邮件列表", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 13 }, { "type": "Button", "props": { "y": 152, "x": 0, "skin": "comp/button.png", "name": "item2", "label": "列表刷新", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 11 }, { "type": "Button", "props": { "y": 228, "x": 0, "skin": "comp/button.png", "name": "item3", "label": "循环列表", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 12 }, { "type": "Button", "props": { "y": 304, "x": 0, "skin": "comp/button.png", "name": "item4", "label": "下拉框列表", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 14 }, { "type": "Button", "props": { "y": 376, "x": 1, "skin": "comp/button.png", "name": "item5", "label": "树状列表", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 28 }] }, { "type": "ViewStack", "props": { "y": 2, "x": 233, "var": "item0Page", "top": 2, "selectedIndex": 0, "right": 0, "left": 233, "bottom": 0 }, "compId": 66, "child": [{ "type": "BagList", "props": { "y": 0, "x": 0, "name": "item0", "runtime": "scence/uiDemo/list/BagListRT.ts" }, "compId": 21 }, { "type": "MailList", "props": { "top": 30, "name": "item1", "runtime": "scence/uiDemo/list/MailListRT.ts" }, "compId": 71 }, { "type": "Refresh", "props": { "top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0, "runtime": "scence/uiDemo/list/RefreshRT.ts" }, "compId": 72 }, { "type": "LoopList", "props": { "name": "item3", "runtime": "scence/uiDemo/list/LoopListRT.ts" }, "compId": 76 }, { "type": "ComboBox", "props": { "name": "item4", "runtime": "scence/uiDemo/list/ComboBoxRT.ts" }, "compId": 77 }, { "type": "TreeList", "props": { "name": "item5", "runtime": "scence/uiDemo/list/TreeListRT.ts" }, "compId": 78 }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "top": 0, "right": 0, "name": "item1", "left": 0, "bottom": 0 }, "compId": 16, "child": [{ "type": "Tab", "props": { "y": 30, "x": 39, "var": "item1Tab", "space": 20, "selectedIndex": 0, "direction": "vertical" }, "compId": 33, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "skin": "comp/button.png", "name": "item0", "labelSize": 28, "labelFont": "SimHei", "label": "进度相关", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 34 }, { "type": "Button", "props": { "y": 67, "x": 0, "skin": "comp/button.png", "name": "item1", "label": "文本相关", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 35 }, { "type": "Button", "props": { "y": 134, "x": 0, "skin": "comp/button.png", "name": "item2", "label": "图片替换", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 31 }, { "type": "Button", "props": { "y": 201, "x": 0, "skin": "comp/button.png", "name": "item3", "label": "事件穿透", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 29 }, { "type": "Button", "props": { "y": 271, "x": 0, "skin": "comp/button.png", "name": "item4", "label": "物理碰撞", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 27 }, { "type": "Button", "props": { "y": 405, "x": 0, "skin": "comp/button.png", "name": "item5", "label": "遮罩效果", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 32 }] }, { "type": "ViewStack", "props": { "var": "item1Page", "top": 2, "selectedIndex": 0, "right": 0, "left": 233, "bottom": 0 }, "compId": 68, "child": [{ "type": "Progress", "props": { "x": 0, "name": "item0", "runtime": "scence/uiDemo/useUI/ProgressRT.ts" }, "compId": 80 }, { "type": "TextShow", "props": { "x": 0, "name": "item1", "runtime": "scence/uiDemo/useUI/TextShowRT.ts" }, "compId": 81 }, { "type": "ChangeTexture", "props": { "name": "item2", "runtime": "scence/uiDemo/useUI/ChangeTextureRT.ts" }, "compId": 83 }, { "type": "MouseThrough", "props": { "y": 0, "x": 0, "name": "item3", "runtime": "scence/uiDemo/useUI/MouseThroughRT.ts" }, "compId": 74 }, { "type": "PhysicalCollision", "props": { "name": "item4", "runtime": "scence/uiDemo/useUI/PhysicalCollisionRT.ts" }, "compId": 85 }, { "type": "Mask", "props": { "name": "item5", "runtime": "scence/uiDemo/useUI/MaskRT.ts" }, "compId": 86 }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0 }, "compId": 18, "child": [{ "type": "Tab", "props": { "y": 30, "x": 39, "var": "item2Tab", "space": 20, "selectedIndex": 0, "direction": "vertical" }, "compId": 50, "child": [{ "type": "Button", "props": { "y": 205, "x": 0, "skin": "comp/button.png", "name": "item0", "label": "Panel窗口", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 57 }, { "type": "Button", "props": { "y": 67, "x": 0, "skin": "comp/button.png", "name": "item1", "label": "嵌套网页", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 54 }, { "type": "Button", "props": { "skin": "comp/button.png", "name": "item2", "labelSize": 28, "labelFont": "SimHei", "label": "打开主场景", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 51 }, { "type": "Button", "props": { "y": 76, "x": 0, "skin": "comp/button.png", "name": "item3", "label": "打开小窗口", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 52 }, { "type": "Button", "props": { "y": 152, "skin": "comp/button.png", "name": "item4", "label": "打开弹窗", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 53 }] }, { "type": "ViewStack", "props": { "var": "item2Page", "top": 20, "selectedIndex": 0, "right": 0, "left": 233, "bottom": 20 }, "compId": 58, "child": [{ "type": "UsePanel", "props": { "name": "item0", "runtime": "scence/uiDemo/page/UsePanelRT.ts" }, "compId": 93 }, { "type": "IframeElement", "props": { "name": "item1", "runtime": "scence/uiDemo/page/IframeElementRT.ts" }, "compId": 94 }] }] }, { "type": "Box", "props": { "top": 0, "right": 0, "name": "item3", "left": 0, "bottom": 0 }, "compId": 17, "child": [{ "type": "Tab", "props": { "y": 30, "x": 39, "width": 160, "var": "item3Tab", "space": 20, "selectedIndex": 0, "height": 384, "direction": "vertical" }, "compId": 42, "child": [{ "type": "Button", "props": { "skin": "comp/button.png", "name": "item0", "labelSize": 28, "labelFont": "SimHei", "label": "图集动画", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 43 }, { "type": "Button", "props": { "y": 76, "x": 0, "skin": "comp/button.png", "name": "item1", "label": "逐帧动画", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 44 }, { "type": "Button", "props": { "y": 152, "skin": "comp/button.png", "name": "item2", "label": "时间轴动画", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 45 }, { "type": "Button", "props": { "y": 228, "skin": "comp/button.png", "name": "item3", "label": "骨骼动画", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 46 }, { "type": "Button", "props": { "y": 697, "x": 0, "skin": "comp/button.png", "name": "item4", "label": "缓动动画", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 48 }, { "type": "Button", "props": { "y": 707, "x": 10, "skin": "comp/button.png", "name": "item5", "label": "动效模板", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 49 }] }, { "type": "ViewStack", "props": { "var": "item3Page", "top": 2, "selectedIndex": 0, "right": 0, "left": 233, "bottom": 0 }, "compId": 67, "child": [{ "type": "AtlasAni", "props": { "name": "item0", "runtime": "scence/uiDemo/animation/AtlasAniRT.ts" }, "compId": 87 }, { "type": "FrameAni", "props": { "name": "item1", "runtime": "scence/uiDemo/animation/FrameAniRT.ts" }, "compId": 88 }, { "type": "UIView", "props": { "pageData": { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0, "name": "item2" }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "bg/bg01.png", "sizeGrid": "19,17,22,9", "right": 0, "name": "bg", "left": 0, "bottom": 0 }, "compId": 3, "child": [{ "type": "Image", "props": { "width": 900, "top": 80, "skin": "bg/2.png", "sizeGrid": "12,16,14,14", "right": 30, "left": 30, "height": 580, "bottom": 30, "alpha": 0.5 }, "compId": 8 }, { "type": "Label", "props": { "y": 0, "valign": "middle", "text": "按住键盘的方向键可以让角色行走", "right": 0, "left": 0, "height": 77, "fontSize": 35, "font": "Microsoft YaHei", "align": "center" }, "compId": 10 }, { "type": "Sprite", "props": { "y": 270, "x": 430, "presetID": 1, "width": 100, "isPresetRoot": true, "height": 100 }, "compId": 16, "child": [{ "type": "Animation", "props": { "presetID": 2, "y": 0, "x": 0, "width": 100, "source": "ani/roleStand.ani", "name": "roleStand", "height": 100, "autoPlay": true }, "compId": 17 }, { "type": "Animation", "props": { "presetID": 4, "visible": false, "source": "ani/roleRun.ani", "name": "roleRun" }, "compId": 5 }, { "type": "Script", "props": { "presetID": 3, "y": 0, "x": 0, "runtime": "prefab/Role.ts" }, "compId": 4 }] }] }], "loadList": ["bg/bg01.png", "bg/2.png", "ani/roleStand.ani", "ani/roleRun.ani"], "loadList3D": [] }, "name": "item2" }, "compId": 89 }, { "type": "UIView", "props": { "pageData": { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0, "name": "item3" }, "compId": 2, "child": [{ "type": "Panel", "props": { "width": 250, "top": 100, "scaleX": -1, "right": 300, "name": "layaSpine", "height": 220 }, "compId": 5, "child": [{ "type": "SkeletonPlayer", "props": { "y": 130, "x": 120, "width": 41, "url": "role/spineAni/dragon.sk", "scaleY": 0.3, "scaleX": 0.3, "height": 16, "runtime": "Laya.Skeleton" }, "compId": 4 }] }, { "type": "Sprite", "props": { "y": 30, "x": 20, "width": 300, "name": "skeletonNode", "height": 500 }, "compId": 6, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 160, "var": "btn", "stateNum": 1, "skin": "bg/btn_Bg.png", "selected": true, "labelStrokeColor": "#f8f8f8", "labelColors": "#363442", "label": "切换皮肤", "height": 50, "labelSize": 28, "labelFont": "SimHei", "labelPadding": "0,0,1,0" }, "compId": 7 }] }, { "type": "Sprite", "props": { "y": 30, "x": 371, "width": 315, "name": "spineNode", "height": 500 }, "compId": 9, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 160, "stateNum": 1, "skin": "bg/btn_Bg.png", "name": "btn2", "labelColors": "#363442", "label": "切换动画", "height": 50, "labelSize": 28, "labelFont": "SimHei", "labelPadding": "0,0,1,0" }, "compId": 11 }] }, { "type": "Script", "props": { "runtime": "scence/uiDemo/animation/SkeletonAni.ts" }, "compId": 13 }], "loadList": ["role/spineAni/dragon.sk", "bg/btn_Bg.png"], "loadList3D": [] }, "name": "item3" }, "compId": 90 }, { "type": "UIView", "props": { "pageData": { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0, "name": "item4" }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 200, "x": 1085.6, "skin": "test/img_doubleKill.png", "alpha": 0 }, "compId": 4 }, { "type": "Image", "props": { "width": 419, "top": 20, "skin": "bg/img_toolbarBG.png", "sizeGrid": "0,51,0,51", "right": 10, "mouseEnabled": true, "height": 103 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 52, "x": 369, "width": 62, "skin": "test/toLeft.png", "pivotY": 31, "pivotX": 31, "name": "folded", "height": 62 }, "compId": 11, "child": [{ "type": "Script", "props": { "runtime": "script/tween/Folded.ts" }, "compId": 26 }] }, { "type": "Box", "props": { "y": 18, "x": 63, "name": "menu" }, "compId": 17, "child": [{ "type": "Sprite", "props": { "width": 50, "texture": "test/35001.png", "height": 50 }, "compId": 13, "child": [{ "type": "Text", "props": { "y": 59, "x": 4, "width": 41, "text": "菜单1", "height": 16, "fontSize": 16, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 18 }] }, { "type": "Sprite", "props": { "y": 0, "x": 84.5, "width": 50, "texture": "test/c1.png", "height": 50 }, "compId": 15, "child": [{ "type": "Text", "props": { "y": 59, "x": 4, "width": 41, "text": "菜单2", "height": 16, "fontSize": 16, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 19 }] }, { "type": "Sprite", "props": { "y": 0, "x": 169, "width": 50, "texture": "test/71001.png", "height": 50 }, "compId": 16, "child": [{ "type": "Text", "props": { "y": 59, "x": 4, "width": 41, "text": "菜单3", "height": 16, "fontSize": 16, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 20 }] }] }, { "type": "Label", "props": { "y": 114, "width": 156, "text": "点击箭头缓动伸缩", "right": 30, "height": 24, "fontSize": 20, "font": "Microsoft YaHei" }, "compId": 21 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "y": [{ "value": 200, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }], "x": [{ "value": -380, "tweenMethod": "sineOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 300, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 8 }, { "value": 300, "tweenMethod": "strongIn", "tween": true, "target": 4, "label": null, "key": "x", "index": 43 }, { "value": 980, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 50 }, { "value": 1200, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 120 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 43 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 50 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 120 }] } }, { "target": 10, "keyframes": { "zOrder": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "zOrder", "index": 0 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }], "loadList": ["test/img_doubleKill.png", "bg/img_toolbarBG.png", "test/toLeft.png", "test/35001.png", "test/c1.png", "test/71001.png"], "loadList3D": [] }, "name": "item4" }, "compId": 91 }, { "type": "UIView", "props": { "pageData": { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 5, "height": 640, "bottom": 0, "name": "item5" }, "compId": 2, "child": [{ "type": "Button", "props": { "y": 102, "x": 152, "width": 209, "stateNum": 1, "skin": "comp/btn_fh.png", "pivotY": 45, "pivotX": 105, "height": 90 }, "compId": 3, "child": [{ "type": "Script", "props": { "playEvent": "mousedown", "runtime": "ui.ani.scaleUI" }, "compId": 4 }] }, { "type": "Button", "props": { "y": 70, "x": 528, "skin": "comp/button.png", "label": "点我", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 5, "child": [{ "type": "Script", "props": { "playEvent": "mousedown", "runtime": "ui.ani.scaleUI" }, "compId": 6 }] }, { "type": "Button", "props": { "y": 213, "x": 34, "width": 208, "stateNum": 1, "skin": "bg/bg02.png", "sizeGrid": "60,32,111,32", "height": 335 }, "compId": 7, "child": [{ "type": "Script", "props": { "playEvent": "mouseover", "name": "big", "runtime": "ui.ani.scaleToBigUI" }, "compId": 8 }, { "type": "Script", "props": { "playEvent": "mousedown", "name": "small", "runtime": "ui.ani.scaleToSmallUI" }, "compId": 9 }, { "type": "Script", "props": { "playEvent": "mouseout", "name": "nromal-out", "runtime": "ui.ani.saceToNormalUI" }, "compId": 11 }, { "type": "Script", "props": { "playEvent": "mouseup", "name": "normal-up", "runtime": "ui.ani.saceToNormalUI" }, "compId": 12 }] }, { "type": "Image", "props": { "y": 380.5, "width": 512, "skin": "comp/image.png", "height": 313, "centerX": 93, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 10, "child": [{ "type": "Script", "props": { "y": -843, "x": -37, "playEvent": "mousedown", "runtime": "ui.ani.scaleToSmallUI" }, "compId": 13 }, { "type": "Script", "props": { "playEvent": "mouseup", "runtime": "ui.ani.saceToNormalUI" }, "compId": 14 }] }], "loadList": ["comp/btn_fh.png", "comp/button.png", "bg/bg02.png", "comp/image.png"], "loadList3D": [] }, "name": "item5" }, "compId": 92 }] }] }, { "type": "Box", "props": { "y": -114, "x": 0, "top": 0, "right": 0, "name": "item4", "left": 0, "bottom": 0 }, "compId": 15, "child": [{ "type": "Tab", "props": { "y": 30, "x": 39, "var": "item4Tab", "space": 20, "selectedIndex": 0, "direction": "vertical" }, "compId": 22, "child": [{ "type": "Button", "props": { "skin": "comp/button.png", "name": "item0", "labelSize": 28, "labelFont": "SimHei", "label": "手势摇杆", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 23 }, { "type": "Button", "props": { "y": 152, "skin": "comp/button.png", "name": "item1", "label": "图形碰撞", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 24 }] }, { "type": "ViewStack", "props": { "var": "item4Page", "top": 0, "selectedIndex": 0, "right": 0, "left": 233, "bottom": 0 }, "compId": 69, "child": [{ "type": "UIView", "props": { "pageData": { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0, "y": 0, "x": 0, "name": "item0" }, "compId": 2, "child": [{ "type": "Panel", "props": { "width": 800, "top": 10, "height": 500, "centerX": 0 }, "compId": 5, "child": [{ "type": "Sprite", "props": { "y": -134, "x": -112, "width": 1024, "texture": "bg/background.jpg", "name": "gameMap", "height": 768 }, "compId": 3 }, { "type": "Image", "props": { "y": 220, "x": 80, "skin": "test/img_joystickBG.png", "name": "joystickBG" }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 52, "x": 52, "width": 96, "skin": "test/img_joystickAxis.png", "name": "joystickAxis", "height": 96 }, "compId": 9 }, { "type": "Script", "props": { "sceneWindow": "@node:5", "roleAni": "@Prefab:prefab/Role.prefab", "gameMap": "@node:3", "gameBG": "@node:3", "runtime": "script/mouse/Joystick.ts" }, "compId": 14 }] }] }], "loadList": ["bg/background.jpg", "test/img_joystickBG.png", "test/img_joystickAxis.png", "prefab/Role.prefab"], "loadList3D": [] }, "name": "item0" }, "compId": 79 }, { "type": "ShapeDetection", "props": { "name": "item1", "runtime": "scence/uiDemo/interactive/ShapeDetectionRT.ts" }, "compId": 96 }] }] }] }], "loadList": ["prefab/CloseBtn.prefab", "comp/img_bg3.png", "comp/tab.png", "comp/button.png", "uiDemo/list/BagList.scene", "uiDemo/list/MailList.scene", "uiDemo/list/Refresh.scene", "uiDemo/list/LoopList.scene", "uiDemo/list/ComboBox.scene", "uiDemo/list/TreeList.scene", "uiDemo/useUI/Progress.scene", "uiDemo/useUI/TextShow.scene", "uiDemo/useUI/ChangeTexture.scene", "uiDemo/useUI/MouseThrough.scene", "uiDemo/useUI/PhysicalCollision.scene", "uiDemo/useUI/Mask.scene", "uiDemo/page/UsePanel.scene", "uiDemo/page/IframeElement.scene", "uiDemo/animation/AtlasAni.scene", "uiDemo/animation/FrameAni.scene", "uiDemo/animation/TimelineAni.scene", "uiDemo/animation/SkeletonAni.scene", "uiDemo/animation/TweenAni.scene", "uiDemo/animation/AniEffect.scene", "uiDemo/interactive/Joystick.scene", "uiDemo/interactive/ShapeDetection.scene"], "loadList3D": [] };
            uiDemo.UiMainUI = UiMainUI;
            REG("ui.uiDemo.UiMainUI", UiMainUI);
        })(uiDemo = ui.uiDemo || (ui.uiDemo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var uiDemo;
        (function (uiDemo) {
            var animation;
            (function (animation) {
                class AniEffectUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(AniEffectUI.uiView);
                    }
                }
                AniEffectUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 5, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Button", "props": { "y": 102, "x": 152, "width": 209, "stateNum": 1, "skin": "comp/btn_fh.png", "pivotY": 45, "pivotX": 105, "height": 90 }, "compId": 3, "child": [{ "type": "Script", "props": { "playEvent": "mousedown", "runtime": "ui.ani.scaleUI" }, "compId": 4 }] }, { "type": "Button", "props": { "y": 70, "x": 528, "skin": "comp/button.png", "label": "点我", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 5, "child": [{ "type": "Script", "props": { "playEvent": "mousedown", "runtime": "ui.ani.scaleUI" }, "compId": 6 }] }, { "type": "Button", "props": { "y": 213, "x": 34, "width": 208, "stateNum": 1, "skin": "bg/bg02.png", "sizeGrid": "60,32,111,32", "height": 335 }, "compId": 7, "child": [{ "type": "Script", "props": { "playEvent": "mouseover", "name": "big", "runtime": "ui.ani.scaleToBigUI" }, "compId": 8 }, { "type": "Script", "props": { "playEvent": "mousedown", "name": "small", "runtime": "ui.ani.scaleToSmallUI" }, "compId": 9 }, { "type": "Script", "props": { "playEvent": "mouseout", "name": "nromal-out", "runtime": "ui.ani.saceToNormalUI" }, "compId": 11 }, { "type": "Script", "props": { "playEvent": "mouseup", "name": "normal-up", "runtime": "ui.ani.saceToNormalUI" }, "compId": 12 }] }, { "type": "Image", "props": { "y": 380.5, "width": 512, "skin": "comp/image.png", "height": 313, "centerX": 93, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 10, "child": [{ "type": "Script", "props": { "y": -843, "x": -37, "playEvent": "mousedown", "runtime": "ui.ani.scaleToSmallUI" }, "compId": 13 }, { "type": "Script", "props": { "playEvent": "mouseup", "runtime": "ui.ani.saceToNormalUI" }, "compId": 14 }] }], "loadList": ["comp/btn_fh.png", "comp/button.png", "bg/bg02.png", "comp/image.png"], "loadList3D": [] };
                animation.AniEffectUI = AniEffectUI;
                REG("ui.uiDemo.animation.AniEffectUI", AniEffectUI);
                class AtlasAniUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(AtlasAniUI.uiView);
                    }
                }
                AtlasAniUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/animation/AtlasAniRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 20, "x": 30, "width": 684, "skin": "bg/bg01.png", "sizeGrid": "19,17,22,9", "name": "bg", "height": 500 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 0, "x": 694, "width": 226, "skin": "bg/bg01.png", "sizeGrid": "19,17,22,9", "height": 500 }, "compId": 11, "child": [{ "type": "Button", "props": { "y": 30, "x": 15, "width": 197, "var": "playAni", "stateNum": 1, "skin": "bg/btn_Bg.png", "label": "播放动画", "height": 73, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 6 }, { "type": "Button", "props": { "y": 126, "x": 15, "width": 197, "var": "stopAni", "stateNum": 1, "skin": "bg/btn_Bg.png", "label": "停止动画", "height": 73, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 9 }, { "type": "ComboBox", "props": { "y": 222, "x": 21, "width": 186, "var": "selectAni", "skin": "comp/combobox.png", "selectedIndex": 0, "scrollBarSkin": " ", "labels": "moveB,moveC,moveE,moveF,moveH,moveI,moveK,moveL", "labelSize": 30, "labelPadding": "0,0,0,20", "labelFont": "Microsoft YaHei", "itemSize": 30, "itemPadding": "0,0,0,20", "itemHeight": 50, "height": 70 }, "compId": 12 }] }, { "type": "Image", "props": { "top": 30, "skin": "bg/2.png", "sizeGrid": "12,16,14,14", "right": 30, "left": 30, "bottom": 30, "alpha": 0.5 }, "compId": 4 }, { "type": "Animation", "props": { "y": 188, "x": 281, "width": 121, "var": "aniSource", "source": "role/atlasAni/139x.atlas", "index": 0, "height": 124, "autoPlay": false }, "compId": 3 }] }], "loadList": ["bg/bg01.png", "bg/btn_Bg.png", "comp/combobox.png", "bg/2.png"], "loadList3D": [] };
                animation.AtlasAniUI = AtlasAniUI;
                REG("ui.uiDemo.animation.AtlasAniUI", AtlasAniUI);
                class FrameAniUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(FrameAniUI.uiView);
                    }
                }
                FrameAniUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/animation/FrameAniRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 20, "x": 30, "width": 684, "skin": "bg/bg01.png", "sizeGrid": "19,17,22,9", "name": "bg", "height": 500 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 694, "width": 226, "skin": "bg/bg01.png", "sizeGrid": "19,17,22,9", "height": 500 }, "compId": 4, "child": [{ "type": "Button", "props": { "y": 30, "x": 15, "width": 197, "var": "playAni", "stateNum": 1, "skin": "bg/btn_Bg.png", "label": "播放动画", "height": 73, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 5 }, { "type": "Button", "props": { "y": 126, "x": 15, "width": 197, "var": "stopAni", "stateNum": 1, "skin": "bg/btn_Bg.png", "label": "停止动画", "height": 73, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 6 }, { "type": "ComboBox", "props": { "y": 222, "x": 21, "width": 186, "var": "selectAni", "skin": "comp/combobox.png", "selectedIndex": 0, "scrollBarSkin": " ", "labels": "moveB,moveC,moveE,moveF,moveH,moveI,moveK,moveL", "labelSize": 30, "labelPadding": "0,0,0,20", "labelFont": "Microsoft YaHei", "itemSize": 30, "itemPadding": "0,0,0,20", "itemHeight": 50, "height": 70 }, "compId": 7 }] }, { "type": "Image", "props": { "top": 30, "skin": "bg/2.png", "sizeGrid": "12,16,14,14", "right": 30, "left": 30, "bottom": 30, "alpha": 0.5 }, "compId": 8 }, { "type": "Box", "props": { "y": 188, "x": 281, "width": 121, "styleSkin": "", "index": 0, "height": 124, "centerY": 0, "centerX": 0, "autoPlay": false }, "compId": 9, "child": [{ "type": "Animation", "props": { "var": "aniSource", "index": 0 }, "compId": 10 }] }] }], "loadList": ["bg/bg01.png", "bg/btn_Bg.png", "comp/combobox.png", "bg/2.png"], "loadList3D": [] };
                animation.FrameAniUI = FrameAniUI;
                REG("ui.uiDemo.animation.FrameAniUI", FrameAniUI);
                class TimelineAniUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(TimelineAniUI.uiView);
                    }
                }
                TimelineAniUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "top": 0, "skin": "bg/bg01.png", "sizeGrid": "19,17,22,9", "right": 0, "name": "bg", "left": 0, "bottom": 0 }, "compId": 3, "child": [{ "type": "Image", "props": { "width": 900, "top": 80, "skin": "bg/2.png", "sizeGrid": "12,16,14,14", "right": 30, "left": 30, "height": 580, "bottom": 30, "alpha": 0.5 }, "compId": 8 }, { "type": "Label", "props": { "y": 0, "valign": "middle", "text": "按住键盘的方向键可以让角色行走", "right": 0, "left": 0, "height": 77, "fontSize": 35, "font": "Microsoft YaHei", "align": "center" }, "compId": 10 }, { "type": "Sprite", "props": { "y": 270, "x": 430, "presetID": 1, "width": 100, "isPresetRoot": true, "height": 100 }, "compId": 16, "child": [{ "type": "Animation", "props": { "presetID": 2, "y": 0, "x": 0, "width": 100, "source": "ani/roleStand.ani", "name": "roleStand", "height": 100, "autoPlay": true }, "compId": 17 }, { "type": "Animation", "props": { "presetID": 4, "visible": false, "source": "ani/roleRun.ani", "name": "roleRun" }, "compId": 5 }, { "type": "Script", "props": { "presetID": 3, "y": 0, "x": 0, "runtime": "prefab/Role.ts" }, "compId": 4 }] }] }], "loadList": ["bg/bg01.png", "bg/2.png", "prefab/Role.prefab"], "loadList3D": [] };
                animation.TimelineAniUI = TimelineAniUI;
                REG("ui.uiDemo.animation.TimelineAniUI", TimelineAniUI);
                class TweenAniUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(TweenAniUI.uiView);
                    }
                }
                TweenAniUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 200, "x": 1085.6, "skin": "test/img_doubleKill.png", "alpha": 0 }, "compId": 4 }, { "type": "Image", "props": { "width": 419, "top": 20, "skin": "bg/img_toolbarBG.png", "sizeGrid": "0,51,0,51", "right": 10, "mouseEnabled": true, "height": 103 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 52, "x": 369, "width": 62, "skin": "test/toLeft.png", "pivotY": 31, "pivotX": 31, "name": "folded", "height": 62 }, "compId": 11, "child": [{ "type": "Script", "props": { "runtime": "script/tween/Folded.ts" }, "compId": 26 }] }, { "type": "Box", "props": { "y": 18, "x": 63, "name": "menu" }, "compId": 17, "child": [{ "type": "Sprite", "props": { "width": 50, "texture": "test/35001.png", "height": 50 }, "compId": 13, "child": [{ "type": "Text", "props": { "y": 59, "x": 4, "width": 41, "text": "菜单1", "height": 16, "fontSize": 16, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 18 }] }, { "type": "Sprite", "props": { "y": 0, "x": 84.5, "width": 50, "texture": "test/c1.png", "height": 50 }, "compId": 15, "child": [{ "type": "Text", "props": { "y": 59, "x": 4, "width": 41, "text": "菜单2", "height": 16, "fontSize": 16, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 19 }] }, { "type": "Sprite", "props": { "y": 0, "x": 169, "width": 50, "texture": "test/71001.png", "height": 50 }, "compId": 16, "child": [{ "type": "Text", "props": { "y": 59, "x": 4, "width": 41, "text": "菜单3", "height": 16, "fontSize": 16, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 20 }] }] }, { "type": "Label", "props": { "y": 114, "width": 156, "text": "点击箭头缓动伸缩", "right": 30, "height": 24, "fontSize": 20, "font": "Microsoft YaHei" }, "compId": 21 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "y": [{ "value": 200, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }], "x": [{ "value": -380, "tweenMethod": "sineOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 300, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 8 }, { "value": 300, "tweenMethod": "strongIn", "tween": true, "target": 4, "label": null, "key": "x", "index": 43 }, { "value": 980, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 50 }, { "value": 1200, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 120 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 43 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 50 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 120 }] } }, { "target": 10, "keyframes": { "zOrder": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "zOrder", "index": 0 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }], "loadList": ["test/img_doubleKill.png", "bg/img_toolbarBG.png", "test/toLeft.png", "test/35001.png", "test/c1.png", "test/71001.png"], "loadList3D": [] };
                animation.TweenAniUI = TweenAniUI;
                REG("ui.uiDemo.animation.TweenAniUI", TweenAniUI);
            })(animation = uiDemo.animation || (uiDemo.animation = {}));
        })(uiDemo = ui.uiDemo || (ui.uiDemo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var uiDemo;
        (function (uiDemo) {
            var interactive;
            (function (interactive) {
                class JoystickUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(JoystickUI.uiView);
                    }
                }
                JoystickUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Panel", "props": { "width": 800, "top": 10, "height": 500, "centerX": 0 }, "compId": 5, "child": [{ "type": "Sprite", "props": { "y": -134, "x": -112, "width": 1024, "texture": "bg/background.jpg", "name": "gameMap", "height": 768 }, "compId": 3 }, { "type": "Image", "props": { "y": 220, "x": 80, "skin": "test/img_joystickBG.png", "name": "joystickBG" }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 52, "x": 52, "width": 96, "skin": "test/img_joystickAxis.png", "name": "joystickAxis", "height": 96 }, "compId": 9 }, { "type": "Script", "props": { "sceneWindow": "@node:5", "roleAni": "@Prefab:prefab/Role.prefab", "gameMap": "@node:3", "gameBG": "@node:3", "runtime": "script/mouse/Joystick.ts" }, "compId": 14 }] }] }], "loadList": ["bg/background.jpg", "test/img_joystickBG.png", "test/img_joystickAxis.png", "prefab/Role.prefab"], "loadList3D": [] };
                interactive.JoystickUI = JoystickUI;
                REG("ui.uiDemo.interactive.JoystickUI", JoystickUI);
                class ShapeDetectionUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(ShapeDetectionUI.uiView);
                    }
                }
                ShapeDetectionUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/interactive/ShapeDetectionRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "y": 288, "centerX": 0 }, "compId": 7, "child": [{ "type": "Sprite", "props": { "y": 4, "x": 0, "width": 100, "var": "c1", "texture": "bag/14.png", "name": "c1", "height": 100 }, "compId": 3, "child": [{ "type": "Circle", "props": { "y": 50, "x": 50, "renderType": "hit", "radius": 45, "fillColor": "#ff0000" }, "compId": 9 }, { "type": "Script", "props": { "tipsText": "鼠标进入了转盘", "runtime": "script/mouse/DragAndTips.ts" }, "compId": 25 }, { "type": "Sprite", "props": { "width": 100, "var": "c11", "height": 100 }, "compId": 33 }, { "type": "Circle", "props": { "y": 50, "x": 50, "radius": 45, "lineWidth": 0, "lineColor": "#ff0000" }, "compId": 39 }] }, { "type": "Sprite", "props": { "y": 9, "x": 233, "width": 160, "var": "p1", "texture": "test/tra.png", "name": "p1", "height": 90 }, "compId": 5, "child": [{ "type": "Poly", "props": { "y": 27, "x": 46.25, "renderType": "hit", "points": "4,-26,63,-27,113,62,-46,63", "lineColor": "#ff0000", "fillColor": "#00ffff" }, "compId": 15 }, { "type": "Script", "props": { "tipsText": "鼠标进入了梯形", "runtime": "script/mouse/DragAndTips.ts" }, "compId": 26 }, { "type": "Sprite", "props": { "width": 160, "var": "p11", "height": 90 }, "compId": 35 }, { "type": "Poly", "props": { "y": 27, "x": 46, "points": "4,-26,63,-27,113,62,-46,63", "lineWidth": 0, "lineColor": "#ff0000" }, "compId": 40 }] }, { "type": "Sprite", "props": { "y": 11, "x": 600, "width": 100, "var": "p2", "texture": "test/t1.png", "name": "p2", "height": 100 }, "compId": 6, "child": [{ "type": "Poly", "props": { "y": 34, "x": -51, "renderType": "hit", "points": "101,-34,151,65,51,65", "lineColor": "#ff0000", "fillColor": "#00ffff" }, "compId": 18 }, { "type": "Script", "props": { "tipsText": "鼠标进入了三角", "runtime": "script/mouse/DragAndTips.ts" }, "compId": 27 }, { "type": "Sprite", "props": { "width": 100, "var": "p22", "height": 100 }, "compId": 36 }, { "type": "Poly", "props": { "y": 34, "x": -51, "points": "101,-34,151,65,51,65", "lineWidth": 0, "lineColor": "#ff0000" }, "compId": 41 }] }] }, { "type": "Label", "props": { "y": 0, "valign": "middle", "text": "拖拽图形进行碰撞", "right": 30, "left": 0, "height": 100, "fontSize": 30, "font": "Microsoft YaHei", "align": "right" }, "compId": 8 }, { "type": "Script", "props": { "runtime": "scence/uiDemo/interactive/ShapeDetection.ts" }, "compId": 23 }, { "type": "RadioGroup", "props": { "y": 20, "x": 20, "width": 616, "var": "detectionType", "space": 20, "skin": "comp/radiogroup.png", "labels": "圆形检测,矩形检测,多边形检测", "labelSize": 28, "labelPadding": "20,0,0,5", "labelFont": "Microsoft YaHei", "height": 66 }, "compId": 24 }], "loadList": ["bag/14.png", "test/tra.png", "test/t1.png", "comp/radiogroup.png"], "loadList3D": [] };
                interactive.ShapeDetectionUI = ShapeDetectionUI;
                REG("ui.uiDemo.interactive.ShapeDetectionUI", ShapeDetectionUI);
            })(interactive = uiDemo.interactive || (uiDemo.interactive = {}));
        })(uiDemo = ui.uiDemo || (ui.uiDemo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var uiDemo;
        (function (uiDemo) {
            var list;
            (function (list) {
                class BagListUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(BagListUI.uiView);
                    }
                }
                BagListUI.uiView = { "type": "View", "props": { "y": 0, "width": 1000, "top": 0, "runtime": "scence/uiDemo/list/BagListRT.ts", "right": 0, "left": 0, "height": 600, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "width": 980, "top": 0, "skin": "bg/img_head2.png", "sizeGrid": "36,30,28,31", "right": 0, "left": 0, "height": 600, "bottom": 0, "alpha": 0.3 }, "compId": 19 }, { "type": "List", "props": { "x": 47, "var": "bagList", "vScrollBarSkin": " ", "top": 120, "spaceY": 5, "spaceX": 5, "selectEnable": true, "repeatX": 4, "bottom": 10 }, "compId": 10, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "renderType": "render" }, "compId": 18, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bg/bg100-0.png", "name": "listItemBG", "alpha": 1 }, "compId": 4 }, { "type": "Image", "props": { "y": 15, "x": 15, "skin": "bag/8.png", "scaleY": 0.7, "scaleX": 0.7, "name": "listItemImg" }, "compId": 6 }, { "type": "Label", "props": { "y": 65, "x": 59, "width": 30, "valign": "bottom", "text": "99", "name": "listItemNumber", "height": 30, "fontSize": 20, "font": "Microsoft YaHei", "color": "#f40f0b", "bold": true, "align": "right" }, "compId": 16 }] }] }, { "type": "Image", "props": { "width": 379, "visible": false, "var": "tips", "top": 120, "skin": "bg/img_head.png", "sizeGrid": "15,15,15,15", "right": 30, "height": 475, "bottom": 5 }, "compId": 11, "child": [{ "type": "Image", "props": { "var": "itemImg", "top": 2, "skin": "bag/12.png", "scaleY": 1.5, "scaleX": 1.5, "left": 2 }, "compId": 5 }, { "type": "Label", "props": { "y": 47.5, "x": 189.5, "width": 110, "text": "宝物名字", "height": 35, "fontSize": 26, "font": "SimHei", "color": "#ffffff" }, "compId": 13 }, { "type": "Label", "props": { "y": 97.5, "x": 189.5, "width": 110, "var": "itemNumber", "text": "数量 100", "height": 35, "fontSize": 26, "font": "SimHei", "color": "#ffffff" }, "compId": 14 }, { "type": "TextArea", "props": { "y": 203, "x": 19, "wordWrap": true, "width": 332, "var": "itemReadme", "text": "宝物说明， \n\n此处省略100字", "height": 150, "fontSize": 32, "font": "SimHei", "color": "#ffffff" }, "compId": 15 }] }, { "type": "Button", "props": { "y": -15, "width": 317, "stateNum": 1, "skin": "bg/img_kuang.png", "labelStrokeColor": "#272424", "labelSize": 35, "labelFont": "SimHei", "labelColors": "#272424", "labelBold": true, "label": "背包示例", "height": 100, "centerX": 0 }, "compId": 12 }], "loadList": ["bg/img_head2.png", "bg/bg100-0.png", "bag/8.png", "bg/img_head.png", "bag/12.png", "bg/img_kuang.png"], "loadList3D": [] };
                list.BagListUI = BagListUI;
                REG("ui.uiDemo.list.BagListUI", BagListUI);
                class ComboBoxUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(ComboBoxUI.uiView);
                    }
                }
                ComboBoxUI.uiView = { "type": "View", "props": { "width": 1080, "top": 0, "runtime": "scence/uiDemo/list/ComboBoxRT.ts", "height": 720, "bottom": 0 }, "compId": 2, "child": [{ "type": "ComboBox", "props": { "y": 202, "x": 94, "width": 381, "var": "combo1", "skin": "comp/combobox.png", "sizeGrid": "18,62,13,13", "scrollBarSkin": "comp/vscroll.png", "labels": "选项1,选项2,选项3,选项4,选项5,选项6,选项7,选项8,选项9,选项10", "labelSize": 32, "labelPadding": "0,0,0,15", "labelFont": "Microsoft YaHei", "labelColors": "#000000", "itemSize": 28, "itemPadding": "20,5,5,25", "itemHeight": 70, "itemColors": "#0b0b0b,#f6f6f6,#0b0b0b,#0b0b0b,#eeb626", "height": 70, "defaultLabel": "原始下拉框" }, "compId": 6 }, { "type": "ComboBox", "props": { "y": 202, "x": 553, "width": 421, "var": "combo2", "skin": "comp/combobox.png", "sizeGrid": "7,61,8,9", "scrollBarSkin": " ", "labels": "选项1,选项2,选项3,选项4,选项5,选项6,选项7,选项8,选项9,选项10", "labelSize": 32, "labelPadding": "0,0,0,15", "labelFont": "Microsoft YaHei", "labelColors": "#000000", "itemSize": 28, "itemColors": "#000000", "height": 70, "defaultLabel": "自定义列表下拉框" }, "compId": 4 }, { "type": "Text", "props": { "y": 50, "x": 403, "var": "selectedText", "text": "您选中了：", "fontSize": 50, "font": "Microsoft YaHei", "color": "#0d0d0d", "runtime": "Laya.Text" }, "compId": 10 }], "loadList": ["comp/combobox.png", "comp/vscroll.png"], "loadList3D": [] };
                list.ComboBoxUI = ComboBoxUI;
                REG("ui.uiDemo.list.ComboBoxUI", ComboBoxUI);
                class LoopListUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(LoopListUI.uiView);
                    }
                }
                LoopListUI.uiView = { "type": "View", "props": { "width": 1016, "top": 0, "runtime": "scence/uiDemo/list/LoopListRT.ts", "right": 0, "left": 0, "height": 600, "bottom": 0 }, "compId": 2, "child": [{ "type": "List", "props": { "y": 20, "x": 0, "var": "hList", "spaceX": 110, "repeatX": 3, "hScrollBarSkin": " ", "bgColor": "#f1efdf" }, "compId": 52, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 256, "renderType": "render", "height": 512 }, "compId": 51, "child": [{ "type": "Image", "props": { "y": 256, "x": 128, "width": 256, "skin": "role/r0.png", "name": "icon", "height": 256, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 50 }] }] }], "loadList": ["role/r0.png"], "loadList3D": [] };
                list.LoopListUI = LoopListUI;
                REG("ui.uiDemo.list.LoopListUI", LoopListUI);
                class MailListUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(MailListUI.uiView);
                    }
                }
                MailListUI.uiView = { "type": "View", "props": { "width": 1089, "top": 0, "runtime": "scence/uiDemo/list/MailListRT.ts", "right": 0, "left": 0, "height": 564, "centerX": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "x": 0, "top": 0, "skin": "bg/bg.png", "bottom": 0 }, "compId": 4 }, { "type": "Tab", "props": { "y": 0, "x": 24.5, "stateNum": 2, "space": 8, "selectedIndex": 0, "labelStroke": 1 }, "compId": 15, "child": [{ "type": "Button", "props": { "y": -14, "x": 0, "width": 256, "stateNum": 2, "skin": "comp/tab_3.png", "sizeGrid": "9,41,31,40", "name": "item0", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff,#f3f322,#ffffff", "label": "系统邮件", "height": 65 }, "compId": 13 }, { "type": "Button", "props": { "y": -14, "x": 273, "stateNum": 2, "skin": "comp/tab_3.png", "sizeGrid": "9,41,31,40", "name": "item1", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff,#f3f322,#ffffff", "label": "好友邮件", "height": 65 }, "compId": 14 }] }, { "type": "Image", "props": { "width": 1073, "top": 130, "skin": "bg/img_bg406.png", "sizeGrid": "30,45,127,42", "right": 8, "left": 8, "height": 406, "bottom": 8 }, "compId": 17, "child": [{ "type": "Button", "props": { "x": 50, "width": 196, "var": "selectDel", "stateNum": 1, "skin": "bg/btn_Bg.png", "labelSize": 30, "labelFont": "Microsoft YaHei", "labelColors": "#1e1e28", "label": "选中删除", "height": 60, "bottom": 35, "labelPadding": "0,0,1,0" }, "compId": 32 }, { "type": "Button", "props": { "x": 294, "width": 196, "var": "selectFlag", "stateNum": 1, "skin": "bg/btn_Bg.png", "labelSize": 30, "labelFont": "Microsoft YaHei", "labelColors": "#1e1e28", "label": "标记已读", "height": 60, "bottom": 35, "labelPadding": "0,0,1,0" }, "compId": 40 }, { "type": "Button", "props": { "x": 836, "width": 196, "var": "addMail", "stateNum": 1, "skin": "bg/btn_Bg.png", "labelSize": 30, "labelFont": "Microsoft YaHei", "labelColors": "#1e1e28", "label": "新增邮件", "height": 60, "bottom": 35, "labelPadding": "0,0,1,0" }, "compId": 41 }] }, { "type": "Box", "props": { "width": 1073, "top": 76, "right": 8, "left": 8, "height": 45 }, "compId": 19, "child": [{ "type": "Label", "props": { "y": 8, "x": 190, "width": 157, "text": "标题", "strokeColor": "#000000", "stroke": 1, "height": 54, "fontSize": 35, "font": "SimHei", "color": "#fffef1" }, "compId": 18 }, { "type": "Label", "props": { "y": 8, "x": 588, "width": 157, "text": "时间", "strokeColor": "#000000", "stroke": 1, "height": 54, "fontSize": 35, "font": "SimHei", "color": "#fffef1" }, "compId": 20 }, { "type": "Label", "props": { "y": 8, "x": 897, "width": 157, "text": "操作", "strokeColor": "#000000", "stroke": 1, "height": 54, "fontSize": 35, "font": "SimHei", "color": "#fffef1" }, "compId": 21 }] }, { "type": "List", "props": { "width": 1064, "var": "mailList", "vScrollBarSkin": " ", "top": 136, "right": 11, "repeatX": 1, "left": 14, "height": 292, "bottom": 126 }, "compId": 25, "child": [{ "type": "Box", "props": { "right": 0, "renderType": "render", "left": 0 }, "compId": 24, "child": [{ "type": "Image", "props": { "y": 10, "x": 20, "skin": "bg/img_bg08.png", "sizeGrid": "32,13,38,10", "right": 20, "left": 20, "height": 64 }, "compId": 23 }, { "type": "Button", "props": { "y": 24, "x": 36, "width": 30, "stateNum": 1, "skin": "bg/bg100-0.png", "name": "optBG", "height": 30 }, "compId": 33 }, { "type": "Image", "props": { "y": 12, "x": 29, "visible": false, "skin": "comp/img_opt.png", "name": "opt" }, "compId": 46 }, { "type": "Image", "props": { "y": 39, "x": 114, "skin": "comp/img_mail.png", "name": "flagStatus", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 34 }, { "type": "Label", "props": { "y": 9, "x": 174, "width": 354, "valign": "middle", "text": "这里是邮件的标题", "name": "mailTitle", "mouseEnabled": true, "height": 60, "fontSize": 28, "font": "SimHei", "align": "left" }, "compId": 36 }, { "type": "Label", "props": { "y": 25, "x": 532, "text": "2022-02-22 22:22", "name": "mailDateTime", "fontSize": 28, "font": "SimHei" }, "compId": 37 }, { "type": "Button", "props": { "y": 16, "x": 813, "width": 120, "stateNum": 1, "skin": "bg/img_bg13.png", "sizeGrid": "11,18,15,20", "name": "flagBtn", "labelSize": 20, "labelFont": "Microsoft YaHei", "label": "标为已读", "height": 45 }, "compId": 44 }, { "type": "Button", "props": { "y": 16, "x": 942, "width": 83, "stateNum": 1, "skin": "bg/img_bg13.png", "sizeGrid": "11,18,15,20", "name": "delBtn", "labelSize": 20, "labelFont": "Microsoft YaHei", "label": "删除", "height": 45 }, "compId": 45 }] }] }], "loadList": ["bg/bg.png", "comp/tab_3.png", "bg/img_bg406.png", "bg/btn_Bg.png", "bg/img_bg08.png", "bg/bg100-0.png", "comp/img_opt.png", "comp/img_mail.png", "bg/img_bg13.png"], "loadList3D": [] };
                list.MailListUI = MailListUI;
                REG("ui.uiDemo.list.MailListUI", MailListUI);
                class RefreshUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(RefreshUI.uiView);
                    }
                }
                RefreshUI.uiView = { "type": "View", "props": { "width": 1000, "top": 0, "runtime": "scence/uiDemo/list/RefreshRT.ts", "name": "Refresh", "height": 650, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 443, "top": 5, "left": 30, "bottom": 5, "bgColor": "#ffffff" }, "compId": 33, "child": [{ "type": "Box", "props": { "zOrder": 0, "x": 133, "visible": false, "var": "refreshLoading", "bottom": 15 }, "compId": 29, "child": [{ "type": "Animation", "props": { "y": 36, "x": 27, "source": "ani/Refresh.ani", "autoPlay": true }, "compId": 30 }, { "type": "Label", "props": { "y": 24, "x": 61, "text": "加载中……", "fontSize": 25, "font": "Microsoft YaHei", "color": "#a6a6a6" }, "compId": 31 }] }] }, { "type": "List", "props": { "width": 443, "var": "refreshList", "vScrollBarSkin": " ", "top": 5, "selectedIndex": 2, "selectEnable": true, "repeatX": 1, "mouseEnabled": true, "left": 30, "elasticEnabled": true, "bottom": 5 }, "compId": 20, "child": [{ "type": "Box", "props": { "zOrder": 2, "y": 0, "width": 443, "runtime": "runtime/box/dataSource/ItemBox.ts", "right": 0, "renderType": "render", "name": "itemBox", "left": 0, "height": 86, "bgColor": "#ffffff" }, "compId": 19, "child": [{ "type": "Image", "props": { "y": 7, "skin": "comp/img_bg22.png", "sizeGrid": "12,10,8,12", "right": 7, "name": "msgBG", "mouseEnabled": false, "left": 7, "height": 80 }, "compId": 18 }, { "type": "Image", "props": { "y": 7, "visible": false, "skin": "comp/img_bg21.png", "sizeGrid": "12,10,8,12", "right": 7, "name": "selectBox", "left": 7, "height": 80 }, "compId": 26 }, { "type": "Image", "props": { "y": 17, "x": 17, "width": 60, "skin": "role/w6.png", "name": "avatar", "height": 60 }, "compId": 23, "child": [{ "type": "Image", "props": { "y": -18.3851234786692, "x": -18.5, "visible": false, "skin": "comp/img_hd.png", "name": "redHot" }, "compId": 39, "child": [{ "type": "Text", "props": { "y": 9, "x": 11.5, "width": 14, "text": "1", "height": 15, "fontSize": 20, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 40 }] }] }, { "type": "Label", "props": { "y": 21, "x": 88, "width": 101, "text": "测试标题", "name": "msgTitle", "height": 20, "fontSize": 22, "font": "Microsoft YaHei", "color": "#000000" }, "compId": 21 }, { "type": "Label", "props": { "y": 21, "width": 58, "text": "00:00", "right": 30, "name": "msgTime", "height": 20, "fontSize": 22, "font": "Microsoft YaHei", "color": "#322f2f" }, "compId": 22 }, { "type": "Label", "props": { "y": 56, "x": 88, "width": 307, "text": "测试消息，省略10字……", "name": "msgText", "height": 20, "fontSize": 18, "font": "SimHei", "color": "#322f2f" }, "compId": 24 }, { "type": "Box", "props": { "y": 7, "x": 443, "width": 130, "name": "flag", "mouseThrough": false, "mouseEnabled": true, "height": 80, "bgColor": "#1045a6" }, "compId": 35, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "width": 130, "valign": "middle", "text": "标记未读", "name": "flagText", "height": 80, "fontSize": 25, "font": "Microsoft YaHei", "color": "#ffffff", "align": "center", "runtime": "Laya.Text" }, "compId": 36 }] }, { "type": "Box", "props": { "y": 7, "x": 572, "width": 130, "name": "del", "mouseThrough": false, "mouseEnabled": true, "height": 80, "bgColor": "#a61210" }, "compId": 37, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "width": 130, "valign": "middle", "text": "删 除", "name": "delText", "height": 80, "fontSize": 25, "font": "Microsoft YaHei", "color": "#ffffff", "align": "center", "runtime": "Laya.Text" }, "compId": 38 }] }] }] }, { "type": "Image", "props": { "x": 510, "width": 490, "top": 9, "skin": "bg/bg.png", "sizeGrid": "44,84,27,87", "height": 165 }, "compId": 5, "child": [{ "type": "Image", "props": { "x": 33, "width": 431, "top": 59, "skin": "bg/1.png", "sizeGrid": "11,15,14,14", "bottom": 15 }, "compId": 45, "child": [{ "type": "TextArea", "props": { "y": 20, "width": 342, "top": 20, "text": "顶与底的列表尽头可拉动刷新，\n单元格按住左滑可唤出操作菜单。", "strokeColor": "#e8e8e8", "stroke": 1, "leading": 10, "height": 71, "fontSize": 22, "font": "Microsoft YaHei", "color": "#000000", "centerX": 0 }, "compId": 7 }] }, { "type": "Text", "props": { "y": 10, "x": 163, "text": "操作提示", "fontSize": 35, "font": "Microsoft YaHei", "color": "#e5e5e5", "runtime": "Laya.Text" }, "compId": 6 }] }, { "type": "Image", "props": { "x": 510, "width": 490, "skin": "bg/bg.png", "sizeGrid": "29,61,22,61", "mouseEnabled": true, "height": 304, "bottom": 5 }, "compId": 8, "child": [{ "type": "Text", "props": { "y": 13, "x": 175, "text": "其它操作", "fontSize": 35, "font": "Microsoft YaHei", "color": "#e5e5e5", "runtime": "Laya.Text" }, "compId": 9 }, { "type": "Button", "props": { "y": 63, "x": 82, "width": 190, "var": "toLine", "stateNum": 1, "skin": "bg/btn_Bg.png", "labelSize": 30, "labelFont": "Microsoft YaHei", "label": "跳转到", "height": 75, "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 11 }, { "type": "TextInput", "props": { "y": 63, "x": 307, "width": 108, "var": "lineNumber", "valign": "middle", "type": "text", "text": "3", "skin": "comp/textinput.png", "sizeGrid": "10,23,12,20", "padding": "0,0,0,15", "height": 70, "fontSize": 30, "font": "Microsoft YaHei" }, "compId": 12 }, { "type": "Button", "props": { "y": 140, "x": 82, "width": 333, "var": "toTop", "stateNum": 1, "skin": "bg/btn_Bg.png", "sizeGrid": "0,108,0,87", "labelSize": 30, "labelFont": "Microsoft YaHei", "label": "跳转到顶部", "height": 75, "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 13 }, { "type": "Button", "props": { "y": 217, "x": 82, "width": 333, "var": "toBottom", "stateNum": 1, "skin": "bg/btn_Bg.png", "sizeGrid": "0,108,0,87", "labelSize": 30, "labelFont": "Microsoft YaHei", "label": "跳转到底部", "height": 75, "labelColors": "#000000,#000000,#e7ce4e", "labelPadding": "0,0,1,0" }, "compId": 14 }] }], "loadList": ["ani/Refresh.ani", "comp/img_bg22.png", "comp/img_bg21.png", "role/w6.png", "comp/img_hd.png", "bg/bg.png", "bg/1.png", "bg/btn_Bg.png", "comp/textinput.png"], "loadList3D": [] };
                list.RefreshUI = RefreshUI;
                REG("ui.uiDemo.list.RefreshUI", RefreshUI);
                class TreeListUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(TreeListUI.uiView);
                    }
                }
                TreeListUI.uiView = { "type": "View", "props": { "width": 1080, "top": 0, "runtime": "scence/uiDemo/list/TreeListRT.ts", "height": 720, "bottom": 0 }, "compId": 2, "child": [{ "type": "Tree", "props": { "x": 50, "width": 501, "var": "tree1", "top": 30, "spaceBottom": 2, "selectedIndex": 0, "scrollBarSkin": " ", "name": "tree1", "bottom": 30 }, "compId": 10, "child": [{ "type": "UIView", "props": { "pageData": { "type": "View", "props": { "width": 200, "height": 80, "renderType": "render" }, "compId": 2, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 500, "skin": "comp/clip_selectBox.png", "sizeGrid": "1,1,1,1", "name": "selectBox", "height": 80, "clipY": 2 }, "compId": 3 }, { "type": "Clip", "props": { "y": 8, "x": 0, "skin": "comp/clip_tree_arrow.png", "name": "arrow", "clipY": 2 }, "compId": 4 }, { "type": "Clip", "props": { "y": 8, "x": 73, "skin": "comp/clip_tree_folder.png", "name": "folder", "clipY": 3 }, "compId": 5 }, { "type": "Label", "props": { "y": 0, "x": 187, "width": 279, "valign": "middle", "text": "树状目录的标题", "strokeColor": "#000000", "stroke": 1, "name": "itemLabel", "height": 80, "fontSize": 25, "font": "Microsoft YaHei", "color": "#000000" }, "compId": 6 }], "loadList": ["comp/clip_selectBox.png", "comp/clip_tree_arrow.png", "comp/clip_tree_folder.png"], "loadList3D": [] }, "renderType": "render" }, "compId": 9 }] }, { "type": "Tree", "props": { "x": 597, "width": 375, "var": "tree2", "top": 30, "spaceLeft": 30, "scrollBarSkin": " ", "name": "tree2", "bottom": 30 }, "compId": 3, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "renderType": "render" }, "compId": 7, "child": [{ "type": "Clip", "props": { "y": 15, "x": 68, "width": 127, "skin": "comp/clip_selectBox.png", "sizeGrid": "1,1,1,1", "name": "selectBox", "height": 30 }, "compId": 11 }, { "type": "Clip", "props": { "y": 13, "x": 38, "skin": "comp/clip_tree_folder1.png", "name": "folder", "clipY": 3 }, "compId": 4 }, { "type": "Clip", "props": { "y": -3, "x": 0, "skin": "comp/clip_tree_arrow1.png", "name": "arrow", "clipY": 2 }, "compId": 6 }, { "type": "Label", "props": { "y": 19.5, "x": 73, "width": 212, "valign": "middle", "text": "树状目录的标题", "name": "title", "height": 22, "fontSize": 16, "color": "#000000", "bold": true }, "compId": 8 }] }] }], "loadList": ["uiDemo/list/TreeBox.scene", "comp/clip_selectBox.png", "comp/clip_tree_folder1.png", "comp/clip_tree_arrow1.png"], "loadList3D": [] };
                list.TreeListUI = TreeListUI;
                REG("ui.uiDemo.list.TreeListUI", TreeListUI);
            })(list = uiDemo.list || (uiDemo.list = {}));
        })(uiDemo = ui.uiDemo || (ui.uiDemo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var uiDemo;
        (function (uiDemo) {
            var page;
            (function (page) {
                class IframeElementUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(IframeElementUI.uiView);
                    }
                }
                IframeElementUI.uiView = { "type": "View", "props": { "y": 0, "width": 960, "top": 0, "runtime": "scence/uiDemo/page/IframeElementRT.ts", "right": 20, "left": 5, "height": 640, "bottom": 5 }, "compId": 2, "child": [{ "type": "Button", "props": { "width": 277, "var": "videoBtn", "skin": "comp/button.png", "label": "打开视频网页", "height": 61, "centerY": 0, "centerX": 0, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "labelPadding": "0,0,1,0" }, "compId": 6 }, { "type": "Box", "props": { "width": 60, "var": "closeBox", "top": 20, "right": 25, "height": 60 }, "compId": 3 }, { "type": "Box", "props": { "var": "iframeBox", "top": 0, "right": 0, "left": 0, "bottom": 0 }, "compId": 4 }], "loadList": ["comp/button.png"], "loadList3D": [] };
                page.IframeElementUI = IframeElementUI;
                REG("ui.uiDemo.page.IframeElementUI", IframeElementUI);
                class OpenMainSceneUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(OpenMainSceneUI.uiView);
                    }
                }
                OpenMainSceneUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "texture": "bg/background.jpg" }, "compId": 3, "child": [{ "type": "Script", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "runtime": "laya.ui.Widget" }, "compId": 4 }] }, { "type": "Button", "props": { "top": 5, "stateNum": 1, "skin": "comp/x.png", "scaleY": 2, "scaleX": 2, "right": 5, "name": "btn" }, "compId": 5 }, { "type": "Script", "props": { "runtime": "scence/uiDemo/page/OpenMainScene.ts" }, "compId": 6 }], "loadList": ["bg/background.jpg", "comp/x.png"], "loadList3D": [] };
                page.OpenMainSceneUI = OpenMainSceneUI;
                REG("ui.uiDemo.page.OpenMainSceneUI", OpenMainSceneUI);
                class OpenSceneUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(OpenSceneUI.uiView);
                    }
                }
                OpenSceneUI.uiView = { "type": "View", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#2f2e2e", "alpha": 0.8 }, "compId": 4 }, { "type": "Image", "props": { "width": 600, "skin": "bg/img_bg05.png", "sizeGrid": "162,87,95,84", "name": "window", "height": 500, "centerY": 0, "centerX": 0 }, "compId": 3, "child": [{ "type": "Text", "props": { "y": 206, "x": 46, "width": 505, "valign": "middle", "text": "小窗口场景页示例", "height": 132, "fontSize": 32, "font": "Microsoft YaHei", "color": "#fff738", "align": "center", "runtime": "Laya.Text" }, "compId": 5 }, { "type": "Sprite", "props": { "y": 31, "x": 501, "texture": "comp/x.png", "name": "closeBtn" }, "compId": 8 }] }, { "type": "Script", "props": { "runtime": "scence/uiDemo/page/OpenScene.ts" }, "compId": 9 }], "loadList": ["bg/img_bg05.png", "comp/x.png"], "loadList3D": [] };
                page.OpenSceneUI = OpenSceneUI;
                REG("ui.uiDemo.page.OpenSceneUI", OpenSceneUI);
                class UsePanelUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(UsePanelUI.uiView);
                    }
                }
                UsePanelUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/page/UsePanelRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Panel", "props": { "y": 0, "x": 0, "width": 550, "var": "_panel", "top": 20, "centerX": 0, "bottom": 20 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": -290, "x": -45, "width": 640, "skin": "demo/fcs.jpg", "skewX": 0, "scaleY": 1, "scaleX": 1, "pivotY": 0, "pivotX": 0, "name": "bgImg", "height": 1136 }, "compId": 4, "child": [{ "type": "Script", "props": { "runtime": "script/mouse/BgImg.ts" }, "compId": 6 }] }, { "type": "Label", "props": { "var": "topLab", "valign": "middle", "top": 0, "text": "背景可拖拽，滚轮可缩放", "right": 0, "left": 0, "height": 30, "fontSize": 20, "font": "SimHei", "color": "#ffffff", "bgColor": "#5e9ae5", "alpha": 0.9, "align": "center" }, "compId": 5 }] }], "loadList": ["demo/fcs.jpg"], "loadList3D": [] };
                page.UsePanelUI = UsePanelUI;
                REG("ui.uiDemo.page.UsePanelUI", UsePanelUI);
            })(page = uiDemo.page || (uiDemo.page = {}));
        })(uiDemo = ui.uiDemo || (ui.uiDemo = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var uiDemo;
        (function (uiDemo) {
            var useUI;
            (function (useUI) {
                class ChangeTextureUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(ChangeTextureUI.uiView);
                    }
                }
                ChangeTextureUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/useUI/ChangeTextureRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 159, "x": 150, "width": 657, "skin": "bg/2.png", "sizeGrid": "13,16,16,18", "height": 299, "alpha": 0.3 }, "compId": 27 }, { "type": "Image", "props": { "y": 210, "x": 828, "skin": "role/w5.png", "right": 0, "gray": true }, "compId": 4 }, { "type": "FillTexture", "props": { "y": 325, "x": 10, "width": 132, "skin": "role/m3.png", "repeat": "repeat", "height": 306 }, "compId": 5 }, { "type": "Sprite", "props": { "y": 10, "x": 10 }, "compId": 15, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "var": "spImg", "texture": "role/m6.png" }, "compId": 3 }, { "type": "Sprite", "props": { "y": 0, "x": 403, "texture": "role/m6.png" }, "compId": 11, "child": [{ "type": "Script", "props": { "strength": 4, "runtime": "laya.effect.BlurFilterSetter" }, "compId": 12 }] }, { "type": "Sprite", "props": { "y": 0, "x": 202, "texture": "role/m6.png" }, "compId": 9, "child": [{ "type": "Script", "props": { "offY": "4", "offX": "11", "color": "#39778b", "blur": 5, "runtime": "laya.effect.GlowFilterSetter" }, "compId": 10 }] }, { "type": "Sprite", "props": { "y": 0, "x": 605, "texture": "role/m6.png" }, "compId": 17, "child": [{ "type": "Script", "props": { "saturation": 22, "hue": 180, "contrast": 27, "color": "#0d0000", "brightness": -100, "alpha": 184, "runtime": "laya.effect.ColorFilterSetter" }, "compId": 18 }] }, { "type": "Sprite", "props": { "y": 0, "x": 806, "texture": "role/m6.png" }, "compId": 19, "child": [{ "type": "Script", "props": { "saturation": -100, "hue": -76, "contrast": -4, "color": "#000000", "brightness": -33, "alpha": 0, "runtime": "laya.effect.ColorFilterSetter" }, "compId": 20 }] }] }, { "type": "Image", "props": { "x": 828, "var": "Img", "skin": "role/w5.png", "bottom": 0 }, "compId": 21 }, { "type": "Label", "props": { "y": 176, "x": 175, "width": 589, "text": "Sprite相对Image性能更好 \\n\\nImage的功能更加丰富\\n\\nFillTexture方便平铺填充 \\n\\nFillTexture与Texture基于Graphics绘图，不是节点，\\n所以不能挂子节点和组件,但合理使用比sprite更省性能，\\n例如把大量的节点绘图改为一个节点的Graphics绘图，\\n能减少大量节点创建消耗", "height": 273, "fontSize": 25, "font": "Microsoft YaHei", "color": "#000000" }, "compId": 22 }, { "type": "Sprite", "props": { "y": 176, "x": 10, "width": 132, "var": "_textureImg", "height": 132 }, "compId": 31, "child": [{ "type": "Texture", "props": { "y": 0, "x": 0, "skin": "role/m8.png" }, "compId": 6 }] }], "loadList": ["bg/2.png", "role/w5.png", "role/m3.png", "role/m6.png", "role/m8.png"], "loadList3D": [] };
                useUI.ChangeTextureUI = ChangeTextureUI;
                REG("ui.uiDemo.useUI.ChangeTextureUI", ChangeTextureUI);
                class MaskUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(MaskUI.uiView);
                    }
                }
                MaskUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/useUI/MaskRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "texture": "bg/background.jpg", "name": "bg" }, "compId": 15 }, { "type": "Image", "props": { "y": -308, "x": -521, "var": "bg2", "skin": "bg/background.jpg", "scaleY": 2, "scaleX": 2, "name": "bg2" }, "compId": 5, "child": [{ "type": "Sprite", "props": { "y": 308, "x": 521, "var": "_mask", "texture": "test/c1.png", "renderType": "mask" }, "compId": 6 }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 500, "name": "maskBox", "height": 640, "bgColor": "#000000" }, "compId": 14 }, { "type": "Sprite", "props": { "texture": "bg/background.jpg", "name": "bg3", "mouseEnabled": true }, "compId": 29, "child": [{ "type": "Sprite", "props": { "var": "bg3Mask", "texture": "test/c1.png", "renderType": "mask" }, "compId": 30, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 136, "texture": "test/c1.png" }, "compId": 31 }] }] }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 236, "var": "_hitArea", "name": "_hitArea", "mouseThrough": false, "mouseEnabled": true, "height": 100 }, "compId": 32, "child": [{ "type": "Circle", "props": { "y": 50, "x": 50, "renderType": "hit", "radius": 50, "lineWidth": 1, "fillColor": "#14ff00" }, "compId": 35 }, { "type": "Circle", "props": { "y": 50, "x": 186, "renderType": "hit", "radius": 50, "lineWidth": 1, "fillColor": "#14ff00" }, "compId": 36 }] }, { "type": "Text", "props": { "y": 17, "x": 270.05859375, "text": "黑色部分按住mask可拖拽移动   其他区域，直接移动鼠标查看放大效果", "strokeColor": "#120d0d", "stroke": 1, "fontSize": 20, "font": "Microsoft YaHei", "color": "#f3efef", "runtime": "Laya.Text" }, "compId": 42 }], "loadList": ["bg/background.jpg", "test/c1.png"], "loadList3D": [] };
                useUI.MaskUI = MaskUI;
                REG("ui.uiDemo.useUI.MaskUI", MaskUI);
                class MouseThroughUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(MouseThroughUI.uiView);
                    }
                }
                MouseThroughUI.uiView = { "type": "View", "props": { "width": 1000, "top": 0, "runtime": "scence/uiDemo/useUI/MouseThroughRT.ts", "right": 0, "left": 0, "height": 600, "bottom": 0 }, "compId": 2, "child": [{ "type": "Tab", "props": { "y": 0, "x": 8, "var": "throughTab", "stateNum": 2, "skin": "comp/tab_3.png", "selectedIndex": 0, "labels": "优先检测本对象,优先检测子对象", "labelSize": 22, "labelFont": "SimHei", "labelColors": "#000000,#000000,#000000,#000000" }, "compId": 8 }, { "type": "Sprite", "props": { "y": 80, "x": 8, "width": 400, "var": "leftBg", "texture": "bg/bg.png", "name": "leftBg", "mouseThrough": true, "hitTestPrior": true, "height": 328 }, "compId": 13, "child": [{ "type": "Box", "props": { "y": 270, "x": 43, "name": "bb" }, "compId": 78, "child": [{ "type": "Text", "props": { "y": -263, "x": -6, "text": "穿透（mouseThrough=true）", "fontSize": 25, "font": "SimHei", "color": "#eeeeee", "runtime": "Laya.Text" }, "compId": 79 }] }, { "type": "Button", "props": { "x": 111, "var": "btn1", "skin": "comp/button.png", "label": "测试按钮1", "bottom": 50, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 83, "child": [{ "type": "Sprite", "props": { "y": -231, "x": 295, "var": "close1", "texture": "comp/x.png", "name": "close1" }, "compId": 89 }] }, { "type": "Sprite", "props": { "y": 278, "x": 305, "texture": "role/w5.png", "name": "手动设置接受鼠标事件1", "mouseEnabled": true }, "compId": 84 }, { "type": "Sprite", "props": { "y": 75, "x": 134, "texture": "role/w1.png", "mouseEnabled": false }, "compId": 87 }, { "type": "Image", "props": { "y": 302, "x": 16, "skin": "role/w7.png", "name": "默认的不接受鼠标事件1" }, "compId": 92 }] }, { "type": "Image", "props": { "y": 80, "x": 520, "width": 400, "var": "rightBg", "skin": "bg/bg.png", "name": "rightBg", "hitTestPrior": true, "height": 328 }, "compId": 14, "child": [{ "type": "Box", "props": { "y": 270, "x": 43, "name": "bb" }, "compId": 23, "child": [{ "type": "Text", "props": { "y": -260, "x": -10, "text": "不穿透（mouseThrough=false）", "fontSize": 25, "font": "SimHei", "color": "#eeeeee", "runtime": "Laya.Text" }, "compId": 16 }] }, { "type": "Button", "props": { "x": 111, "var": "btn2", "skin": "comp/button.png", "label": "测试按钮2", "bottom": 50, "labelSize": 28, "labelFont": "SimHei", "labelColors": "#fff,#fff,#e7ce4e", "sizeGrid": "14,16,15,19", "width": 160, "labelPadding": "0,0,1,0" }, "compId": 26, "child": [{ "type": "Sprite", "props": { "y": -231, "x": 295, "var": "close2", "texture": "comp/x.png", "name": "close2" }, "compId": 91 }] }, { "type": "Sprite", "props": { "y": 278, "x": 305, "texture": "role/w5.png", "name": "手动设置接受鼠标事件2" }, "compId": 85 }, { "type": "Sprite", "props": { "y": 75, "x": 134, "texture": "role/w1.png", "mouseThrough": false, "mouseEnabled": false }, "compId": 88 }, { "type": "Image", "props": { "y": 302, "x": 16, "skin": "role/w7.png", "name": "默认的不接受鼠标事件2" }, "compId": 93 }] }, { "type": "Text", "props": { "y": 10, "x": 579.5, "width": 281, "text": "对比IDE的设置，找不同", "height": 30, "fontSize": 25, "font": "Microsoft YaHei", "runtime": "Laya.Text" }, "compId": 94 }], "loadList": ["comp/tab_3.png", "bg/bg.png", "comp/button.png", "comp/x.png", "role/w5.png", "role/w1.png", "role/w7.png"], "loadList3D": [] };
                useUI.MouseThroughUI = MouseThroughUI;
                REG("ui.uiDemo.useUI.MouseThroughUI", MouseThroughUI);
                class PhysicalCollisionUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(PhysicalCollisionUI.uiView);
                    }
                }
                PhysicalCollisionUI.uiView = { "type": "View", "props": { "width": 960, "top": 0, "runtime": "scence/uiDemo/useUI/PhysicalCollisionRT.ts", "right": 0, "left": 0, "height": 640, "bottom": 0 }, "compId": 2, "child": [{ "type": "Image", "props": { "var": "bTop", "top": 30, "skin": "test/block.png", "sizeGrid": "1,1,1,1", "right": 30, "name": "bTop", "left": 30, "height": 20 }, "compId": 5, "child": [{ "type": "Script", "props": { "width": 900, "height": 20, "runtime": "Laya.BoxCollider" }, "compId": 15 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 16 }] }, { "type": "Image", "props": { "var": "bBottom", "skin": "test/block.png", "sizeGrid": "1,1,1,1", "right": 30, "name": "bBottom", "left": 30, "height": 20, "bottom": 30 }, "compId": 6, "child": [{ "type": "Script", "props": { "width": 900, "height": 20, "runtime": "Laya.BoxCollider" }, "compId": 13 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 14 }] }, { "type": "Image", "props": { "var": "bLeft", "top": 50, "skin": "test/block.png", "sizeGrid": "1,1,1,1", "name": "bLeft", "left": 30, "bottom": 50 }, "compId": 7, "child": [{ "type": "Script", "props": { "width": 20, "height": 540, "runtime": "Laya.BoxCollider" }, "compId": 17 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 18 }] }, { "type": "Image", "props": { "var": "bRight", "top": 50, "skin": "test/block.png", "sizeGrid": "1,1,1,1", "right": 30, "name": "bRight", "bottom": 50 }, "compId": 8, "child": [{ "type": "Script", "props": { "width": 20, "height": 540, "runtime": "Laya.BoxCollider" }, "compId": 19 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 20 }] }, { "type": "Sprite", "props": { "y": 62, "x": 398, "texture": "test/c2.png", "name": "ball" }, "compId": 9, "child": [{ "type": "Script", "props": { "restitution": 1, "radius": 15, "density": 100, "runtime": "Laya.CircleCollider" }, "compId": 21 }, { "type": "Script", "props": { "gravityScale": 10, "runtime": "Laya.RigidBody" }, "compId": 22 }] }, { "type": "Image", "props": { "x": 6, "skin": "test/t1.png", "rotation": -27, "bottom": 69 }, "compId": 10, "child": [{ "type": "Script", "props": { "points": "50,0,100,100,0,100", "runtime": "Laya.PolygonCollider" }, "compId": 11 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 12 }] }, { "type": "Image", "props": { "y": 273.5, "skin": "test/tra.png", "right": 62 }, "compId": 24, "child": [{ "type": "Script", "props": { "points": "50,0,107,0,153,83,-1,81", "runtime": "Laya.PolygonCollider" }, "compId": 25 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 26 }] }, { "type": "Image", "props": { "width": 120, "skin": "test/t1.png", "pivotY": 70, "pivotX": 60, "height": 120, "centerY": 50, "centerX": 0 }, "compId": 27, "child": [{ "type": "Script", "props": { "y": 0, "x": 0, "points": "59,0,120,120,0,120", "runtime": "Laya.PolygonCollider" }, "compId": 28 }, { "type": "Script", "props": { "type": "kinematic", "angularVelocity": 3.14, "runtime": "Laya.RigidBody" }, "compId": 29 }] }, { "type": "Sprite", "props": { "y": 238, "x": 682, "width": 100, "texture": "test/c1.png", "rotation": 0, "pivotY": 50, "pivotX": 50, "name": "laya", "height": 100 }, "compId": 30, "child": [{ "type": "Script", "props": { "radius": 50, "runtime": "Laya.CircleCollider" }, "compId": 32 }, { "type": "Script", "props": { "gravityScale": 2, "runtime": "Laya.RigidBody" }, "compId": 33 }, { "type": "Script", "props": { "selfAnchor": [50, 50], "otherBody": "@node:46", "otherAnchor": [15, 15], "maxLength": 200, "runtime": "Laya.DistanceJoint" }, "compId": 44 }] }, { "type": "Image", "props": { "skin": "test/b1.png", "left": 197, "bottom": 233 }, "compId": 31, "child": [{ "type": "Script", "props": { "width": 100, "height": 100, "runtime": "Laya.BoxCollider" }, "compId": 34 }, { "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 35 }] }, { "type": "Sprite", "props": { "y": 137, "x": 425, "texture": "test/35001.png" }, "compId": 36, "child": [{ "type": "Script", "props": { "restitution": 0.5, "radius": 57.5, "runtime": "Laya.CircleCollider" }, "compId": 37 }, { "type": "Script", "props": { "runtime": "Laya.RigidBody" }, "compId": 38 }] }, { "type": "Sprite", "props": { "y": 62, "x": 283, "texture": "test/71001.png" }, "compId": 39, "child": [{ "type": "Script", "props": { "restitution": 0.8, "radius": 57.5, "runtime": "Laya.CircleCollider" }, "compId": 40 }, { "type": "Script", "props": { "runtime": "Laya.RigidBody" }, "compId": 41 }] }, { "type": "Sprite", "props": { "y": 77, "x": 776, "width": 30, "texture": "test/c2.png", "pivotY": 15, "pivotX": 15, "name": "b2", "height": 30 }, "compId": 45, "child": [{ "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 46 }] }, { "type": "Sprite", "props": { "y": 92, "x": 806, "texture": "test/c2.png", "name": "ball" }, "compId": 47, "child": [{ "type": "Script", "props": { "restitution": 1, "radius": 15, "density": 100, "runtime": "Laya.CircleCollider" }, "compId": 48 }, { "type": "Script", "props": { "gravityScale": 10, "runtime": "Laya.RigidBody" }, "compId": 49 }] }, { "type": "Sprite", "props": { "y": 107, "x": 91, "texture": "test/c2.png", "name": "ball" }, "compId": 50, "child": [{ "type": "Script", "props": { "restitution": 1, "radius": 15, "density": 100, "runtime": "Laya.CircleCollider" }, "compId": 51 }, { "type": "Script", "props": { "gravityScale": 10, "runtime": "Laya.RigidBody" }, "compId": 52 }] }], "loadList": ["test/block.png", "test/c2.png", "test/t1.png", "test/tra.png", "test/c1.png", "test/b1.png", "test/35001.png", "test/71001.png"], "loadList3D": [] };
                useUI.PhysicalCollisionUI = PhysicalCollisionUI;
                REG("ui.uiDemo.useUI.PhysicalCollisionUI", PhysicalCollisionUI);
                class ProgressUI extends Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(ProgressUI.uiView);
                    }
                }
                ProgressUI.uiView = { "type": "Scene", "props": { "width": 960, "runtime": "scence/uiDemo/useUI/ProgressRT.ts", "height": 640 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 121, "x": 211 }, "compId": 5, "child": [{ "type": "Animation", "props": { "y": 24, "x": 61, "source": "ani/Refresh.ani", "autoPlay": true }, "compId": 4 }, { "type": "Sprite", "props": { "y": 77, "x": 6, "texture": "comp/loa.png" }, "compId": 10 }] }, { "type": "ProgressBar", "props": { "width": 362, "var": "loading2", "value": 0.01, "skin": "comp/progress_1.png", "sizeGrid": "0,20,0,20", "height": 20, "centerY": 100, "centerX": 0 }, "compId": 7, "child": [{ "type": "Text", "props": { "y": 56, "x": 114.73046875, "var": "loadText", "text": "资源加载中……", "fontSize": 20, "font": "Microsoft YaHei", "color": "#7f7f7f", "runtime": "Laya.Text" }, "compId": 6 }] }, { "type": "Box", "props": { "y": 121, "x": 630, "width": 96, "height": 96 }, "compId": 21, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 96, "skin": "test/71001.png", "height": 96, "gray": true }, "compId": 20 }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 96, "texture": "test/71001.png", "height": 96 }, "compId": 17, "child": [{ "type": "Animation", "props": { "y": 0, "x": 0, "width": 96, "var": "ani1", "source": "ani/cd.ani", "renderType": "mask", "height": 96, "autoPlay": true }, "compId": 18 }] }, { "type": "Text", "props": { "y": 106, "x": 13, "text": "技能CD", "fontSize": 20, "font": "Microsoft YaHei", "color": "#000000", "runtime": "Laya.Text" }, "compId": 24 }] }, { "type": "Sprite", "props": { "y": 121, "x": 437, "width": 68, "texture": "test/b2.png", "height": 68 }, "compId": 16, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 68, "skin": "test/block.png", "height": 68, "gray": true }, "compId": 23, "child": [{ "type": "Animation", "props": { "y": -14, "x": -14, "width": 96, "var": "ani2", "source": "ani/cd.ani", "renderType": "mask", "height": 96, "autoPlay": true, "autoAnimation": "ani2", "alpha": 0.5 }, "compId": 15 }] }] }], "loadList": ["ani/Refresh.ani", "comp/loa.png", "comp/progress_1.png", "test/71001.png", "ani/cd.ani", "test/b2.png", "test/block.png"], "loadList3D": [] };
                useUI.ProgressUI = ProgressUI;
                REG("ui.uiDemo.useUI.ProgressUI", ProgressUI);
                class TextShowUI extends Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.createView(TextShowUI.uiView);
                    }
                }
                TextShowUI.uiView = { "type": "Scene", "props": { "width": 960, "runtime": "scence/uiDemo/useUI/TextShowRT.ts", "height": 640 }, "compId": 2, "child": [{ "type": "Box", "props": { "y": 15, "x": 31, "width": 231, "height": 90, "bgColor": "#eeeacc" }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 320, "skin": "comp/img_bg.png", "sizeGrid": "65,20,24,23", "height": 273 }, "compId": 8 }, { "type": "FontClip", "props": { "y": 73, "x": 26, "value": "鸡年快乐", "skin": "comp/fontClip.png", "sheet": "鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐" }, "compId": 3 }, { "type": "FontClip", "props": { "y": 120.5, "x": 27, "value": "年 年 快 乐", "skin": "comp/fontClip.png", "sheet": "鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐" }, "compId": 4 }, { "type": "FontClip", "props": { "y": 172, "x": 17, "value": "207 666", "skin": "comp/fontClip_num.png", "sheet": "0123456789" }, "compId": 5 }, { "type": "Text", "props": { "y": 12, "x": 25.62744140625, "text": "字体切片 FontClip", "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 7 }] }, { "type": "Box", "props": { "y": 313, "x": 15, "width": 605, "height": 182 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 602, "skin": "bg/img_kuang.png", "sizeGrid": "81,29,55,36", "height": 190 }, "compId": 9 }, { "type": "Text", "props": { "y": 19, "x": 17, "width": 295.72265625, "text": "位图字体 bitmapFont", "height": 30, "fontSize": 30, "font": "Microsoft YaHei", "color": "#000000", "runtime": "Laya.Text" }, "compId": 11 }, { "type": "Label", "props": { "y": 91, "x": 35, "width": 521, "var": "btFont", "text": "LayaAir是 中国的3D开源引擎", "height": 42, "font": "gongfang" }, "compId": 12 }] }, { "type": "Image", "props": { "y": 15, "x": 381, "width": 516, "skin": "bg/img_bg100-2.png", "sizeGrid": "27,17,25,23", "height": 277 }, "compId": 13, "child": [{ "type": "Text", "props": { "y": 26, "x": 32, "text": "我是Text文本：不能相对布局", "fontSize": 25, "font": "Microsoft YaHei", "color": "#ffffff", "runtime": "Laya.Text" }, "compId": 16 }, { "type": "Label", "props": { "y": 72, "x": 32, "width": 338, "text": "我是Label文本：可以相对布局", "height": 26, "fontSize": 25, "font": "Microsoft YaHei", "color": "#69ff75" }, "compId": 14 }, { "type": "FillText", "props": { "y": 117, "x": 32, "width": 456, "text": "我是fillText文本：graphics绘制的文本", "height": 30, "font": "25px simHei", "color": "#defd00" }, "compId": 15 }, { "type": "HTMLDivElement", "props": { "y": 178, "x": 32, "width": 500, "innerHTML": "<div style='width:500px;height:100px;color:#ff0000;font-size:25px;font-family:SimSun;vertical-align:bottom;line-height:20px;'>\n    <span style='color:#FFFFFF;font-size:25px;stroke:2px;italic:true;'>我是HTML文本:</span><p></p>\n    <img src='test/p1.png' width='50' height='50'></img><span color='#d26ae3'>采用原生DOM标签，可以图文结合</span>\n</div>", "height": 87, "runtime": "Laya.HTMLDivElement" }, "compId": 17 }] }, { "type": "TextInput", "props": { "y": 302, "x": 668, "width": 223, "type": "text", "skin": "comp/textinput.png", "sizeGrid": "8,13,12,21", "promptColor": "#8b8b8b", "prompt": "单行输入", "padding": "3,0,0,20", "height": 56, "fontSize": 25, "font": "Microsoft YaHei" }, "compId": 19 }, { "type": "TextArea", "props": { "y": 366, "x": 668, "width": 220, "var": "textArea", "vScrollBarSkin": "comp/vscroll_2.png", "text": "1多行输入\n2\n3……\n4\n5此处省略N个字符\n6", "skin": "comp/textarea.png", "sizeGrid": "9,21,10,16", "padding": "25,0,25,15", "name": "textArea", "height": 157, "fontSize": 20, "font": "Microsoft YaHei" }, "compId": 20 }], "loadList": ["comp/img_bg.png", "comp/fontClip.png", "comp/fontClip_num.png", "bg/img_kuang.png", "bg/img_bg100-2.png", "comp/textinput.png", "comp/vscroll_2.png", "comp/textarea.png"], "loadList3D": [] };
                useUI.TextShowUI = TextShowUI;
                REG("ui.uiDemo.useUI.TextShowUI", TextShowUI);
            })(useUI = uiDemo.useUI || (uiDemo.useUI = {}));
        })(uiDemo = ui.uiDemo || (ui.uiDemo = {}));
    })(ui || (ui = {}));

    class LoadingRT extends ui.LoadingUI {
        onAwake() {
            let resArr = [
                "bg/background.jpg",
                "bg/bg14.png",
                "bg/img_bg4.png",
                "bg/bg.png",
                "demo/fcs.jpg",
                "demo/whs.jpg",
                "res/atlas/bag.atlas",
                "res/atlas/bg.atlas",
                "res/atlas/cd.atlas",
                "res/atlas/comp.atlas",
                "role/atlasAni/139x.atlas",
                "role/spineAni/dragon.sk",
                "role/spineAni/goblins.sk",
                "res/atlas/role/frameAni.atlas",
                "res/atlas/role.atlas",
                "res/atlas/test.atlas",
                "files/layaAir.mp4"
            ];
            Laya.loader.load(resArr, Laya.Handler.create(this, this.load3D));
            Laya.loader.on(Laya.Event.ERROR, this, this.onError);
        }
        load3D() {
            let resArr3d = [
                "d3/dude/dude.lh",
                "d3/LayaMonkey2/LayaMonKey.lh",
                "d3/BoneLinkScene/PangZi.lh",
                "d3/trail/Cube.lh"
            ];
            Laya.loader.create(resArr3d, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onLoading));
        }
        onError(err) {
            console.log("加载失败: " + err);
        }
        onLoading(progress) {
            if (progress > 0.92)
                this.progress.value = 0.95;
            else
                this.progress.value = progress;
            console.log("加载进度: " + progress, this.progress.value);
        }
        onLoaded() {
            this.progress.value = 0.98;
            console.log("加载结束", this.progress.value);
            Laya.timer.once(1000, this, () => {
                Laya.Scene.open("StartPage.scene");
            });
        }
    }

    class StartMain extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            console.log('onEnable');
            this.startBtn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open('Level1.scene');
            });
        }
    }

    class CloseBtn extends Laya.Script {
        constructor() { super(); }
        onEnable() {
        }
        onClick(e) {
            Laya.Scene.open("Index.scene");
        }
        onDisable() {
        }
    }

    var KeyBoardManager = Laya.KeyBoardManager;
    var Keyboard = Laya.Keyboard;
    var Vector3 = Laya.Vector3;
    class D3Main extends Laya.Script {
        constructor() {
            super(...arguments);
            this.scene3D = new Laya.Scene3D();
            this.turnLeft = true;
            this._rotation = new Vector3(0, 0, 0);
            this.rotationW = new Vector3(0, 0, 0);
            this.rotationS = new Vector3(0, 180, 0);
            this.rotationA = new Vector3(0, 90, 0);
            this.rotationD = new Vector3(0, -90, 0);
            this.sp3Role = new Laya.Sprite3D();
        }
        onEnable() {
            this.spDude = this.owner.getChildByName("spDude");
            this.spFatso = this.owner.getChildByName("spFatso");
            this.spMonkey = this.owner.getChildByName("spMonkey");
            this.spTrail = this.owner.getChildByName("spTrail");
            this.setStage();
            this.sceneInit();
            Laya.timer.frameOnce(1, this, () => {
                this._3Dto2D("d3/dude/dude.lh", this.spDude, 1, true);
                this.spDude.pos(30, 768);
                this._3Dto2D("d3/LayaMonkey2/LayaMonKey.lh", this.spMonkey, 2);
                this.spMonkey.pos(150, 110);
                this._3Dto2D("d3/BoneLinkScene/PangZi.lh", this.spFatso, 3);
                this.spFatso.pos(300, 380);
                this._3Dto2D("d3/trail/Cube.lh", this.spTrail, 5);
                this.spTrail.pos(100, 500);
            });
        }
        setStage() {
            Laya.stage.useRetinalCanvas = false;
            Laya.stage.width = 640;
            Laya.stage.height = 1136;
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        }
        sceneInit() {
            Laya.stage.addChild(this.scene3D);
            let directionLight = new Laya.DirectionLight();
            this.scene3D.addChild(directionLight);
            directionLight.intensity = 0.9;
        }
        _3Dto2D(lh, sp, layer, isRole = false) {
            Laya.Sprite3D.load(lh, Laya.Handler.create(this, (sp3) => {
                this.scene3D.addChild(sp3);
                let _camera = new Laya.Camera(0, 0.1, 1000);
                this.scene3D.addChild(_camera);
                _camera.transform.rotate(new Vector3(-45, 0, 0), false, false);
                _camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
                _camera.orthographic = true;
                _camera.orthographicVerticalSize = 10;
                _camera.removeAllLayers();
                _camera.addLayer(layer);
                sp3.getChildAt(0).getChildAt(0).layer = layer;
                let _tempPos = new Vector3(0, 0, 0);
                _camera.convertScreenCoordToOrthographicCoord(new Vector3(220, 900, 0), _tempPos);
                sp3.transform.position = _tempPos;
                sp3.transform.localScale = new Vector3(1, 1, 1);
                _camera.renderTarget = new Laya.RenderTexture(256, 256, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8);
                sp.texture = new Laya.Texture(_camera.renderTarget);
                isRole && (this.sp3Role = sp3);
            }));
        }
        onUpdate() {
            if (this.spTrail.x < 20 && this.turnLeft)
                this.turnLeft = false;
            else if (this.spTrail.x > (Laya.stage.width - 200) && !(this.turnLeft))
                this.turnLeft = true;
            if (this.turnLeft)
                this.spTrail.x -= 1;
            else
                this.spTrail.x += 1;
            if (KeyBoardManager.hasKeyDown(Keyboard.W)) {
                this.spDude.y -= 1;
                this.rotateRole(this.rotationW);
            }
            else if (KeyBoardManager.hasKeyDown(Keyboard.S)) {
                this.spDude.y += 1;
                this.rotateRole(this.rotationS);
            }
            else if (KeyBoardManager.hasKeyDown(Keyboard.A)) {
                this.spDude.x -= 1;
                this.rotateRole(this.rotationA);
            }
            else if (KeyBoardManager.hasKeyDown(Keyboard.D)) {
                this.spDude.x += 1;
                this.rotateRole(this.rotationD);
            }
        }
        rotateRole(r) {
            if (r === this._rotation)
                return;
            this.sp3Role.transform.rotationEuler = r;
            this._rotation = r;
        }
        onDisable() {
            Laya.stage.useRetinalCanvas = true;
            Laya.stage.width = 1334;
            Laya.stage.height = 750;
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            this.scene3D.destroy();
        }
    }

    class PhysicsGameMain extends Laya.Script {
        constructor() {
            super();
            this.createBoxInterval = 1000;
            this._time = 0;
            this._started = false;
            this.updateStop = false;
        }
        onEnable() {
            this._time = Date.now();
            this._gameBox = this.owner.getChildByName("gameBox");
            Laya.stage.on(Laya.Event.BLUR, this, () => { this.updateStop = true; });
            Laya.stage.on(Laya.Event.FOCUS, this, () => { this.updateStop = false; });
        }
        onStart() {
            let _ground = this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);
            _ground.width = Laya.stage.width;
        }
        onUpdate() {
            if (this.updateStop)
                return;
            let now = Date.now();
            if (now - this._time > this.createBoxInterval && this._started) {
                this._time = now;
                this.createBox();
            }
        }
        createBox() {
            let box = Laya.Pool.getItemByCreateFun("dropBox", this.dropBox.create, this.dropBox);
            box.pos(Math.random() * (Laya.stage.width - 100), -100);
            this._gameBox.addChild(box);
        }
        onStageClick(e) {
            e.stopPropagation();
            let flyer = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
            flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
            this._gameBox.addChild(flyer);
        }
        startGame() {
            if (!this._started) {
                this._started = true;
                this.enabled = true;
            }
        }
        stopGame() {
            this._started = false;
            this.enabled = false;
            this.createBoxInterval = 1000;
            this._gameBox.removeChildren();
        }
    }

    class PhysicsGameMainRT extends ui.physicsDemo.PhysicsGameMainUI {
        constructor() {
            super();
            PhysicsGameMainRT.instance = this;
            Laya.MouseManager.multiTouchEnabled = false;
        }
        onEnable() {
            this._control = this.getComponent(PhysicsGameMain);
            this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);
        }
        onTipClick(e) {
            this.tipLbll.visible = false;
            this._score = 0;
            this.scoreLbl.text = "";
            this._control.startGame();
        }
        addScore(value = 1) {
            this._score += value;
            this.scoreLbl.changeText("分数：" + this._score);
            if (this._control.createBoxInterval > 600 && this._score % 20 == 0)
                this._control.createBoxInterval -= 20;
        }
        stopGame() {
            this.tipLbll.visible = true;
            this.tipLbll.text = "游戏结束了，点击屏幕重新开始";
            this._control.stopGame();
        }
    }

    class DialogRT extends ui.uiDemo.DialogUI {
        constructor() { super(); }
        onAwake() {
            this.dialogTitle.text = "";
            this.dialogText.text = "";
            this.closeBtn.on(Laya.Event.CLICK, this, () => {
                this.close();
            });
        }
        onOpened(param = null) {
            if (param) {
                this.dialogTitle.text = param.title;
                this.dialogText.text = param.text;
            }
        }
        onDisable() {
        }
    }

    class MsgRT extends ui.uiDemo.MsgUI {
        constructor() { super(); }
        onOpened(param) {
            if (param) {
                this.msgLab.x = param.point && param.point.x ? param.point.x : Laya.stage.mouseX - 50;
                this.msgLab.y = param.point && param.point.y ? param.point.y : Laya.stage.mouseY - 80;
                this.msgLab.changeText(param.text);
                Laya.Tween.to(this.msgLab, { y: this.msgLab.y - 100, alpha: 0 }, 1000, Laya.Ease.linearNone);
            }
        }
    }

    var Browser = Laya.Browser;
    var Render = Laya.Render;
    var Utils = Laya.Utils;
    class IframeElementRT extends ui.uiDemo.page.IframeElementUI {
        constructor() {
            super();
            IframeElementRT.instance = this;
        }
        onEnable() {
            this.videoBtn.on(Laya.Event.MOUSE_DOWN, this, () => { this.createElementVideo(); });
        }
        createElementVideo() {
            Browser.window.IframeElementRT = this;
            this.createScript();
            this.createDiv();
            this.createIframe("./files/video.html?url=layaAir.mp4");
            this.setDOMElementInArea();
            Laya.stage.on(Laya.Event.RESIZE, this, this.setDOMElementInArea);
        }
        setDOMElementInArea() {
            if (this.iframeElement != null && this.divElement != null) {
                Utils.fitDOMElementInArea(this.divElement, this.closeBox, 0, 0, this.closeBox.width, this.closeBox.height);
                Utils.fitDOMElementInArea(this.iframeElement, this.iframeBox, 0, 0, this.iframeBox.width, this.iframeBox.height);
            }
        }
        createScript() {
            this.scriptElement = Browser.document.createElement("script");
            Browser.document.body.appendChild(this.scriptElement);
            this.scriptElement.innerHTML = "function closeVideo(){IframeElementRT.closeVideo() }";
        }
        createIframe(url) {
            this.iframeElement = Browser.createElement("iframe");
            Browser.document.body.appendChild(this.iframeElement);
            this.iframeElement.style.zIndex = Render.canvas.style.zIndex + 998;
            this.iframeElement.src = url;
            this.iframeElement.style.margin = "0";
            this.iframeElement.style.scrolling = "no";
            this.iframeElement.style.frameborder = "0";
            this.iframeElement.style.padding = "0";
            this.iframeElement.style.left = "0";
            this.iframeElement.style.top = "0px";
            this.iframeElement.style.position = "absolute";
        }
        createDiv() {
            this.divElement = Laya.Browser.createElement("div");
            Laya.Browser.document.body.appendChild(this.divElement);
            this.divElement.innerHTML = "<img src='files/x.png' width='60px' height='60px' onclick='closeVideo()'/>";
            this.divElement.style.zIndex = Render.canvas.style.zIndex + 999;
        }
        closeVideo() {
            Laya.Browser.document.body.removeChild(this.scriptElement);
            Laya.Browser.document.body.removeChild(this.iframeElement);
            Laya.Browser.document.body.removeChild(this.divElement);
            this.scriptElement = this.iframeElement = this.divElement = null;
            Laya.stage.off(Laya.Event.RESIZE, this, this.setDOMElementInArea);
        }
    }

    class UiMainRT extends ui.uiDemo.UiMainUI {
        constructor() {
            super();
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.stage.alignH = "left";
        }
        onEnable() {
            Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible && (Laya.PhysicsDebugDraw.I.visible = false);
            this.tabBindViewStack();
        }
        onClicked() {
            let openSceneBtn = this.item2Tab.getChildByName("item2"), openSceneBtn2 = this.item2Tab.getChildByName("item3"), openDialogBtn = this.item2Tab.getChildByName("item4");
            openSceneBtn.on(Laya.Event.MOUSE_DOWN, this, () => { Laya.Scene.open("uiDemo/page/OpenMainScene.scene", false); });
            openSceneBtn2.on(Laya.Event.MOUSE_DOWN, this, () => { Laya.Scene.open("uiDemo/page/OpenScene.scene", false); });
            openDialogBtn.on(Laya.Event.MOUSE_DOWN, this, () => { Laya.Scene.open("uiDemo/Dialog.scene", false, { "title": "弹窗的标题", "text": "弹窗的具体文本……" }); });
        }
        tabBindViewStack() {
            this.topTab.selectHandler = new Laya.Handler(this, (index) => {
                this.tabPage.selectedIndex = index;
                Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible && (Laya.PhysicsDebugDraw.I.visible = false);
                !!IframeElementRT.instance.iframeElement && IframeElementRT.instance.closeVideo();
                index == 2 && this.item2Page.selectedIndex == 1 && !IframeElementRT.instance.iframeElement && IframeElementRT.instance.createElementVideo();
            });
            this.item0Tab.selectHandler = new Laya.Handler(this, (index) => {
                this.item0Page.selectedIndex = index;
            });
            this.item1Tab.selectHandler = new Laya.Handler(this, (index) => {
                this.item1Page.selectedIndex = index;
                if (index !== 4 && Laya.PhysicsDebugDraw.I && Laya.PhysicsDebugDraw.I.visible)
                    Laya.PhysicsDebugDraw.I.visible = false;
                else if (index == 4 && Laya.PhysicsDebugDraw.I && !Laya.PhysicsDebugDraw.I.visible)
                    Laya.PhysicsDebugDraw.I.visible = true;
            });
            this.item2Tab.selectHandler = new Laya.Handler(this, (index) => {
                this.item2Page.selectedIndex = index;
                switch (index) {
                    case 1:
                        !IframeElementRT.instance.iframeElement && IframeElementRT.instance.createElementVideo();
                        break;
                    case 2:
                        Laya.Scene.open("uiDemo/page/OpenMainScene.scene", false);
                        break;
                    case 3:
                        Laya.Scene.open("uiDemo/page/OpenScene.scene", false);
                        break;
                    case 4:
                        Laya.Scene.open("uiDemo/Dialog.scene", false, { "title": "弹窗的标题", "text": "弹窗的具体文本……" });
                        break;
                }
                index !== 1 && !!IframeElementRT.instance.iframeElement && IframeElementRT.instance.closeVideo();
            });
            this.item3Tab.selectHandler = new Laya.Handler(this, (index) => {
                this.item3Page.selectedIndex = index;
            });
            this.item4Tab.selectHandler = new Laya.Handler(this, (index) => {
                this.item4Page.selectedIndex = index;
            });
        }
        onDisable() {
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.stage.alignH = "left";
        }
    }

    class BagListRT extends ui.uiDemo.list.BagListUI {
        constructor() {
            super();
            this.lastIndex = -1;
        }
        onEnable() {
            Laya.loader.create("json/bagList.json", Laya.Handler.create(this, () => {
                let _json = Laya.loader.getRes("json/bagList.json");
                if (_json.bagList && _json.bagList.length > 0) {
                    this.bagList.array = _json.bagList;
                    this.bagList.renderHandler = new Laya.Handler(this, this.onListRender);
                    this.bagList.selectHandler = new Laya.Handler(this, this.onListSelect);
                    this.bagList.mouseHandler = new Laya.Handler(this, this.onListMouse);
                }
            }));
        }
        onListRender(item, index) {
            if (index > this.bagList.array.length || index < 0)
                return;
        }
        onListSelect(index) {
            this.tips.visible = true;
            this.bagList.array[index].listItemBG = { "skin": "bg/bg100-1.png" };
            if (this.lastIndex !== -1) {
                this.bagList.array[this.lastIndex].listItemBG = { "skin": "bg/bg100-0.png" };
            }
            this.lastIndex = index;
            this.itemImg.skin = this.bagList.array[index].listItemImg.skin;
            this.itemNumber.changeText("数量 " + this.bagList.array[index].listItemNumber.text);
            this.itemReadme.text = this.bagList.array[index].readme;
        }
        onListMouse(e, index) {
        }
        onDisable() {
        }
    }

    class MailListRT extends ui.uiDemo.list.MailListUI {
        constructor() {
            super();
            this.optStatus = [];
        }
        onEnable() {
            const jsonPath = "json/mailList.json";
            Laya.loader.create(jsonPath, Laya.Handler.create(this, () => {
                let jsonData = (Laya.loader.getRes(jsonPath)).mailList;
                if (jsonData && jsonData.length > 0) {
                    this.mailList.array = jsonData;
                    this.mailList.mouseHandler = new Laya.Handler(this, this.onListMouse);
                }
                this.addMail.on(Laya.Event.CLICK, this, this.addMialItem);
                this.selectDel.on(Laya.Event.CLICK, this, this.listSelectDel);
                this.selectFlag.on(Laya.Event.CLICK, this, this.listSelectFlag);
            }));
        }
        listSelectFlag() {
            if (this.optStatus.length > 0) {
                for (let i = 0; i < this.optStatus.length; i++) {
                    let index = this.optStatus[i];
                    this.mailList.array[index].flag = 1;
                    this.mailList.array[index].flagStatus = { "skin": "comp/img_mail_open.png" };
                    this.mailList.array[index].flagBtn = { "label": "标为未读", "labelColors": "#3277f3,#3277f3,#3277f3" };
                }
                this.mailList.refresh();
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "已成功标记" });
            }
            else
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "没有勾选项，请先勾选" });
        }
        listSelectDel() {
            if (this.optStatus.length > 0) {
                this.optStatus.sort(function (a, b) { return b - a; });
                for (let i = 0; i < this.optStatus.length; i++) {
                    this.mailList.array.splice(this.optStatus[i], 1);
                }
                this.optStatus = [];
                this.mailList.refresh();
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "已成功删除" });
            }
            else
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "没有勾选项，请先勾选" });
        }
        addMialItem() {
            var index = this.mailList.startIndex + 1;
            let itemData = {
                "mailTitle": {
                    "text": "这里是新增加的邮件" + index
                },
                "mailDateTime": {
                    "text": this.timestampFormat("YYYY-MM-DD hh:mm")
                },
                "opt": {
                    "visible": false
                },
                "flagStatus": {
                    "skin": "comp/img_mail.png"
                },
                "flagBtn": {
                    "label": "标为已读",
                    "labelColors": "#000000,#000000,#000000"
                }
            };
            this.mailList.array.splice(index, 0, itemData);
            if (this.optStatus.length > 0) {
                for (let i = 0; i < this.optStatus.length; i++) {
                    if (this.optStatus[i] >= index) {
                        this.optStatus[i] += 1;
                    }
                }
            }
            this.mailList.refresh();
        }
        timestampFormat(fmt = "YYYY-MM-DD hh:mm:ss", timestamp = 0) {
            Date.prototype["Format"] = function (fmt) {
                var o = {
                    "M+": this.getMonth() + 1,
                    "D+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                };
                if (new RegExp("(Y+)").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            };
            if (timestamp == 0)
                return new Date()["Format"](fmt);
            else
                return new Date(timestamp)["Format"](fmt);
        }
        onListMouse(e, index) {
            if (e.type == Laya.Event.CLICK) {
                var optIndex = this.optStatus.indexOf(index);
                switch (e.target.name) {
                    case "optBG":
                        if (optIndex === -1) {
                            this.mailList.array[index].opt = { "visible": true };
                            this.optStatus.push(index);
                        }
                        else {
                            this.mailList.array[index].opt = { "visible": false };
                            this.optStatus.splice(optIndex, 1);
                        }
                        this.mailList.refresh();
                        break;
                    case "mailTitle":
                        Laya.Scene.open("uiDemo/Dialog.scene", false, { "title": this.mailList.array[index].mailTitle.text, "text": "邮件内容，此处省略1000字……………………" });
                        this.mailList.array[index].flag = 1;
                        this.mailList.array[index].flagStatus = { "skin": "comp/img_mail_open.png" };
                        this.mailList.array[index].flagBtn = { "label": "标为未读", "labelColors": "#3277f3,#3277f3,#3277f3" };
                        this.mailList.refresh();
                        break;
                    case "flagBtn":
                        if (this.mailList.array[index].flag === 1) {
                            this.mailList.array[index].flag = 0;
                            this.mailList.array[index].flagStatus = { "skin": "comp/img_mail.png" };
                            this.mailList.array[index].flagBtn = { "label": "标为已读", "labelColors": "#000000,#000000,#000000" };
                        }
                        else {
                            this.mailList.array[index].flag = 1;
                            this.mailList.array[index].flagStatus = { "skin": "comp/img_mail_open.png" };
                            this.mailList.array[index].flagBtn = { "label": "标为未读", "labelColors": "#3277f3,#3277f3,#3277f3" };
                        }
                        this.mailList.refresh();
                        break;
                    case "delBtn":
                        this.mailList.array.splice(index, 1);
                        if (optIndex > -1) {
                            this.optStatus.splice(optIndex, 1);
                            for (let i = optIndex; i < this.optStatus.length; i++) {
                                this.optStatus[i] -= 1;
                            }
                        }
                        this.mailList.refresh();
                        Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "删除成功" });
                        break;
                }
            }
        }
    }

    class RefreshRT extends ui.uiDemo.list.RefreshUI {
        constructor() {
            super();
            this.scrollBarIsStop = false;
            this.msgIdNow = 1;
            this.itemIsOpen = false;
            this.itemOpenId = -1;
            this.redHotStatus = [];
            this.mouseDown = false;
        }
        onEnable() {
            this.refreshList.array = this.createListData(9);
            this.toLine.on(Laya.Event.CLICK, this, this.onToLineBtn);
            this.toTop.on(Laya.Event.CLICK, this, this.onToTopBtn);
            this.toBottom.on(Laya.Event.CLICK, this, this.onToBottomBtn);
            this.refreshList.on(Laya.Event.MOUSE_UP, this, this.stageOnMouseUp);
            this.refreshList.on(Laya.Event.MOUSE_OUT, this, this.stageOnMouseUp);
            this.refreshList.scrollBar.stopMoveLimit = this.scrollBarIsStopBind.bind(this);
            this.refreshLimit("dragTopLimit", 80);
            this.refreshLimit("dragBottomLimit", 80, 20);
            this.refreshList.mouseHandler = new Laya.Handler(this, this.onListMouse);
        }
        stageOnMouseUp() {
            this.mouseDown = false;
        }
        refreshLimit(eventName, moveLimit, distance = 0, time = 2000) {
            if (eventName === "dragTopLimit") {
                this.refreshList.scrollBar.topMoveLimit = moveLimit;
            }
            else if (eventName === "dragBottomLimit") {
                this.refreshList.scrollBar.bottomMoveLimit = moveLimit;
            }
            this.refreshList.scrollBar.on(eventName, this, () => {
                console.log("达到了滚动限制:" + eventName);
                this.refreshLoading.visible = true;
                if (eventName === "dragTopLimit") {
                    this.refreshLoading.bottom = NaN;
                    this.refreshLoading.top = distance;
                    var _arr = this.createListData(5, "顶部新增的标题");
                    _arr = _arr.concat(this.refreshList.array);
                    var index = 0 + 5;
                    var line = 0;
                    if (this.redHotStatus.length > 0) {
                        for (let i = 0; i < this.redHotStatus.length; i++) {
                            this.redHotStatus[i] += 5;
                        }
                    }
                }
                else if (eventName === "dragBottomLimit") {
                    this.refreshList.scrollBar.disableDrag = true;
                    this.refreshLoading.top = NaN;
                    this.refreshLoading.bottom = distance;
                    var _arr = this.createListData(5, "底部新增的标题");
                    _arr = this.refreshList.array.concat(_arr);
                    var index = this.refreshList.array.length - 1;
                    var line = index + 5;
                }
                this.scrollBarIsStop = true;
                Laya.timer.once(time, this, () => {
                    this.refreshList.array = _arr;
                    this.refreshList.scrollTo(line);
                    this.refreshList.selectedIndex = index;
                    this.scrollBarIsStop = false;
                    this.refreshList.scrollBar.backToNormal();
                    this.refreshLoading.visible = false;
                });
            });
        }
        onListMouse(e, index) {
            if (e.type == Laya.Event.MOUSE_DOWN) {
                this.mouseDown = true;
                if (this.itemIsOpen) {
                    this.itemIsOpen = false;
                    this.itemOpenId = -1;
                    Laya.Tween.to(this.openedItem, { "x": 0 }, 500, null, Laya.Handler.create(this, () => {
                        this.refreshList.scrollBar.disableDrag = false;
                    }));
                }
                else {
                    this.moveLastPos = e.target.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
                    e.target.on(Laya.Event.MOUSE_MOVE, this, this.onItemBoxMouseMove, [e.target, index]);
                }
            }
            if (e.type == Laya.Event.MOUSE_UP) {
                this.mouseDown = false;
                this.itemOnMouseUp();
            }
            if (e.target.name == "flag" && e.type == Laya.Event.CLICK)
                this.onClickFlag(index);
            if (e.target.name == "del" && e.type == Laya.Event.CLICK)
                this.onClickDel(index);
        }
        itemOnMouseUp() {
            if (this.itemIsOpen) {
                var targetX;
                if (this.openedItem.x < -80) {
                    targetX = -262;
                }
                else {
                    this.itemIsOpen = false;
                    targetX = 0;
                }
                if (targetX !== this.openedItem.x) {
                    Laya.Tween.to(this.openedItem, { "x": targetX }, 500);
                }
                this.refreshList.scrollBar.disableDrag = false;
                if (this.itemOpenId !== -1) {
                    this.openedItem.off(Laya.Event.MOUSE_MOVE, this, this.onItemBoxMouseMove);
                    this.itemOpenId = -1;
                }
            }
        }
        onClickFlag(index) {
            var showRedHot = this.redHotStatus.indexOf(index);
            if (showRedHot == -1) {
                this.refreshList.array[index].avatar = {};
                this.refreshList.array[index].avatar.redHot = { "visible": true };
                this.refreshList.array[index].flag = { "flagText": { "text": "标记已读" } };
                this.redHotStatus.push(index);
            }
            else {
                this.refreshList.array[index].avatar = { "redHot": { "visible": false } };
                this.refreshList.array[index].flag = { "flagText": { "text": "标记未读" } };
                this.redHotStatus.splice(showRedHot, 1);
            }
            this.refreshList.refresh();
        }
        onClickDel(index) {
            this.refreshList.array.splice(index, 1);
            this.itemOpenId = -1;
            var showRedHot = this.redHotStatus.indexOf(index);
            if (showRedHot > -1) {
                this.redHotStatus.splice(index, 1);
            }
            if (this.redHotStatus.length > 0) {
                for (let i = 0; i < this.redHotStatus.length; i++) {
                    (this.redHotStatus[i] > index) && (this.redHotStatus[i] += 1);
                }
            }
            this.refreshList.refresh();
        }
        onItemBoxMouseMove(item, index) {
            if (this.mouseDown) {
                let mousePos = item.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
                let moveX = this.moveLastPos.x - mousePos.x;
                let moveY = this.moveLastPos.y - mousePos.y;
                if (Math.abs(moveX) > Math.abs(moveY) && !(this.itemIsOpen)) {
                    this.openedItem = item;
                    this.itemIsOpen = true;
                    this.refreshList.scrollBar.disableDrag = true;
                    this.itemOpenId = index;
                }
                if (this.itemIsOpen) {
                    this.openedItem.x -= moveX;
                    if (this.openedItem.x < -262)
                        this.openedItem.x = -262;
                    else if (this.openedItem.x > 0)
                        this.openedItem.x = 0;
                }
            }
            else {
                this.refreshList.scrollBar.disableDrag = false;
            }
        }
        scrollBarIsStopBind() {
            return this.scrollBarIsStop;
        }
        onToLineBtn() {
            let line = parseInt(this.lineNumber.text) - 1;
            this.refreshList.scrollTo(line);
            (line < this.refreshList.array.length) && (this.refreshList.selectedIndex = line);
        }
        onToTopBtn() {
            this.refreshList.scrollTo(0);
            this.refreshList.selectedIndex = 0;
        }
        onToBottomBtn() {
            let line = this.refreshList.array.length - 1;
            this.refreshList.scrollTo(line);
            this.refreshList.selectedIndex = line;
        }
        createListData(max = 5, msgTitle = "初始测试标题") {
            let _Date = new Date();
            let _hour = (_Date.getHours() < 10) ? "0" + _Date.getHours() : "" + _Date.getHours();
            let _minute = (_Date.getMinutes() < 10) ? "0" + _Date.getMinutes() : "" + _Date.getMinutes();
            var _arr = [];
            for (var i = 0; i < max; i++) {
                let msgTime = { "text": _hour + " : " + _minute };
                _arr[i] = {};
                _arr[i].msgTime = msgTime;
                _arr[i].msgTitle = { "text": msgTitle + (this.msgIdNow + i) };
                _arr[i].avatar = { "redHot": { "visible": false } };
            }
            this.msgIdNow += i;
            return _arr;
        }
        onDisable() {
        }
    }

    class LoopListRT extends ui.uiDemo.list.LoopListUI {
        onEnable() {
            this.hList.array = this.getListDataSource();
            this.hList.scrollTo(1);
            let icon = this.hList.cells[1].getChildByName("icon");
            icon.scaleX = icon.scaleY = 2;
            this.hList.disableStopScroll = true;
            this.hList.scrollBar.on(Laya.Event.CHANGE, this, this.onScrollBarChange);
            this.leftLimit = this.getLeftLimit();
            this.rightLimit = this.getRightLimit();
        }
        onScrollBarChange() {
            var sliderValue = this.hList.scrollBar.value;
            var listArr = this.hList.array;
            if (sliderValue > this.leftLimit) {
                var cell = listArr.shift();
                listArr[listArr.length] = cell;
                this.hList.array = listArr;
                this.hList.scrollBar.value = sliderValue - this.hList.cells[0].width - this.hList.spaceX;
                this.iconTweenToLeft();
            }
            else if (sliderValue < this.rightLimit) {
                cell = listArr.pop();
                listArr.unshift(cell);
                this.hList.array = listArr;
                this.hList.scrollBar.value = sliderValue + this.hList.cells[0].width + this.hList.spaceX;
                this.iconTweenToRight();
            }
        }
        iconTweenToLeft(time = 200) {
            let iconOld = this.hList.cells[1].getChildByName("icon");
            iconOld.scaleX = iconOld.scaleY = 2;
            Laya.Tween.to(iconOld, { scaleX: 1, scaleY: 1 }, time);
            let icon = this.hList.cells[2].getChildByName("icon");
            icon.scaleX = icon.scaleY = 1;
            Laya.Tween.to(icon, { scaleX: 2, scaleY: 2 }, time);
        }
        iconTweenToRight(time = 200) {
            let iconOld = this.hList.cells[2].getChildByName("icon");
            iconOld.scaleX = iconOld.scaleY = 2;
            Laya.Tween.to(iconOld, { scaleX: 1, scaleY: 1 }, time);
            let icon = this.hList.cells[1].getChildByName("icon");
            icon.scaleX = icon.scaleY = 1;
            Laya.Tween.to(icon, { scaleX: 2, scaleY: 2 }, time);
        }
        getRightLimit() {
            return this.hList.cells[0].width - this.hList.spaceX;
        }
        getLeftLimit() {
            return (this.hList.cells[0].width * 2) + this.hList.spaceX;
        }
        getListDataSource(length = 5) {
            let _arr = [];
            for (let i = 0; i < length; i++) {
                _arr[i] = {};
                _arr[i].icon = { "skin": `role/r${i}.png` };
            }
            return _arr;
        }
    }

    class ComboBoxRT extends ui.uiDemo.list.ComboBoxUI {
        constructor() { super(); }
        onEnable() {
            var _dataSourece = this.getDataSourece();
            Laya.loader.create("prefab/comboList.prefab", Laya.Handler.create(this, () => {
                this.comboList = (Laya.loader.getRes("prefab/comboList.prefab")).create();
                this.comboList.array = _dataSourece;
                this.comboList.repeatY = _dataSourece.length;
                this.combo2.list = this.comboList;
                this.combo2.list.width = this.combo2.width;
                this.combo2.selectHandler = new Laya.Handler(this, this.onSelected2);
            }));
            this.combo1.selectHandler = new Laya.Handler(this, this.onSelected1);
        }
        onSelected1(index) {
            this.selectedText.text = "您选中了：" + this.combo1.selectedLabel;
        }
        onSelected2(index) {
            this.selectedText.text = "您选中了：" + (index < 0 ? "" : this.comboList.array[index].label);
        }
        getDataSourece() {
            for (var _data = [], i = 0; i < 10; i++) {
                _data[i] = { "optText": { "text": "选项" + (i + 1) } };
            }
            return _data;
        }
        onDisable() {
        }
    }

    class TreeListRT extends ui.uiDemo.list.TreeListUI {
        onEnable() {
            this.tree1.xml = this.getTreeData(true);
            this.tree2.xml = this.getTreeData(false);
        }
        getTreeData(_static) {
            let treeData = "<data>";
            if (_static) {
                treeData +=
                    "<dir itemLabel='一级目录一' isOpen='false'>" +
                        "<file itemLabel='二级子项1 '/>" +
                        "<file itemLabel='二级子项2 '/>" +
                        "<file itemLabel='二级子项3 '/>" +
                        "<file itemLabel='二级子项4 '/>" +
                        "<file itemLabel='二级子项5 '/>" +
                        "</dir>" +
                        "<dir itemLabel='一级目录二' isOpen='true'>" +
                        "<file itemLabel='二级子项1 '/>" +
                        "<file itemLabel='二级子项2 '/>" +
                        "<file itemLabel='二级子项3 '/>" +
                        "</dir>" +
                        "<dir itemLabel='一级目录三' isOpen='false'>" +
                        "<file itemLabel='二级子项1 '/>" +
                        "<file itemLabel='二级子项2 '/>" +
                        "<file itemLabel='二级子项3 '/>" +
                        "<file itemLabel='二级子项4 '/>" +
                        "<file itemLabel='二级子项5 '/>" +
                        "</dir>" +
                        "<file itemLabel='一级子项1 '/>" +
                        "<file itemLabel='一级子项2 '/>";
            }
            else {
                for (let i = 0; i < 5; i++) {
                    treeData += "<item title='目录" + (i + 1) + "' isOpen='true'>";
                    for (let j = 0; j < 5; j++) {
                        treeData += "<subpage title='子项标题" + (j + 1) + "' />";
                    }
                    treeData += "</item>";
                }
            }
            treeData += "</data>";
            return Laya.Utils.parseXMLFromString(treeData);
            ;
        }
    }

    class ProgressRT extends ui.uiDemo.useUI.ProgressUI {
        onAwake() {
            this.ani1.on(Laya.Event.COMPLETE, this, () => {
                this.ani1.stop();
                Laya.timer.once(3000, this, () => {
                    this.ani1.play();
                });
            });
            this.testProgress();
        }
        testProgress() {
            this.loading2.value = 0.01;
            this.loadText.changeText("资源加载中……");
            Laya.timer.loop(100, this, this.changeProgress);
        }
        changeProgress() {
            this.loading2.value += 0.01;
            if (this.loading2.value == 1) {
                this.loadText.changeText("资源加载完成");
                Laya.timer.clear(this, this.changeProgress);
                Laya.timer.once(3000, this, () => {
                    this.testProgress();
                });
            }
        }
    }

    class TextShowRT extends ui.uiDemo.useUI.TextShowUI {
        onAwake() {
            this.loadBitmapFont();
        }
        loadBitmapFont() {
            let bitmapFont = new Laya.BitmapFont();
            bitmapFont.loadFont("bitmapfont/gongfang.fnt", new Laya.Handler(this, this.onFontLoaded, [bitmapFont]));
        }
        onFontLoaded(bitmapFont) {
            Laya.Text.registerBitmapFont("gongfang", bitmapFont);
            this.btFont.font = "gongfang";
        }
    }

    class ChangeTextureRT extends ui.uiDemo.useUI.ChangeTextureUI {
        constructor() { super(); }
        onEnable() {
            Laya.timer.loop(2000, this, () => {
                this.changeImgSkin();
                this.changeSpriteTexture();
                this.changeFillTexture();
                this.changeTexture();
            });
        }
        changeImgSkin() {
            this.Img.skin = this.randomImg();
        }
        changeSpriteTexture() {
            this.spImg.loadImage(this.randomImg(true, 6, 5));
        }
        changeFillTexture() {
            this.graphics.clear();
            let _texture = Laya.loader.getRes(this.randomImg(true, 4));
            this.graphics.fillTexture(_texture, 10, 325, 132, 306);
        }
        changeTexture() {
            this._textureImg.graphics.clear();
            let _texture = Laya.loader.getRes(this.randomImg(true, 8, 7));
            this._textureImg.graphics.drawTexture(_texture);
        }
        randomImg(isMan = false, max = 8, min = 1) {
            let mum = Math.floor(Math.random() * (max - min + 1)) + min;
            if (isMan)
                return "role/m" + mum + ".png";
            return "role/w" + mum + ".png";
        }
        onDisable() {
        }
    }

    class MouseThroughRT extends ui.uiDemo.useUI.MouseThroughUI {
        constructor() { super(); }
        onEnable() {
            this.changeMouseCursor();
            this.throughTab.selectHandler = new Laya.Handler(this, this.onSwitchTab);
        }
        onSwitchTab(index) {
            switch (index) {
                case 0:
                    this.leftBg.hitTestPrior = true;
                    this.rightBg.hitTestPrior = true;
                    break;
                case 1:
                    this.leftBg.hitTestPrior = false;
                    this.rightBg.hitTestPrior = false;
                    break;
            }
        }
        changeMouseCursor() {
            this.leftBg.on(Laya.Event.MOUSE_OVER, this, () => {
                Laya.Mouse.cursor = "move";
            });
            this.leftBg.on(Laya.Event.MOUSE_OUT, this, () => {
                Laya.Mouse.cursor = "auto";
            });
            this.rightBg.on(Laya.Event.MOUSE_OVER, this, (e) => {
                Laya.Mouse.cursor = "move";
            });
            this.rightBg.on(Laya.Event.MOUSE_OUT, this, () => {
                Laya.Mouse.cursor = "auto";
            });
            this.leftBg.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "点击了左侧的可点击区域", "point": { x: Laya.stage.mouseX - 100 } });
                console.log("click " + this.leftBg.name);
            });
            this.rightBg.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "点击了右侧的可点击区域", "point": { x: Laya.stage.mouseX - 120 } });
                console.log("click " + this.rightBg.name);
            });
            this.btn1.on(Laya.Event.CLICK, this, (e) => {
                e.stopPropagation();
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "点击了测试按钮1" });
                console.log("click btn1");
            });
            this.btn2.on(Laya.Event.CLICK, this, (e) => {
                e.stopPropagation();
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "点击了测试按钮2" });
                console.log("click btn2");
            });
            this.close1.on(Laya.Event.CLICK, this, (e) => {
                e.stopPropagation();
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "点击了左侧关闭按钮", "point": { x: Laya.stage.mouseX - 100 } });
                console.log("click " + this.close1.name);
            });
            this.close2.on(Laya.Event.CLICK, this, (e) => {
                e.stopPropagation();
                Laya.Scene.open("uiDemo/Msg.scene", false, { "text": "点击了右侧关闭按钮", "point": { x: Laya.stage.mouseX - 120 } });
                console.log("click " + this.close2.name);
            });
        }
        onDisable() {
        }
    }

    class PhysicalCollisionRT extends ui.uiDemo.useUI.PhysicalCollisionUI {
        onEnable() {
            this.bTop.getComponent(Laya.BoxCollider).width = this.bTop.width;
            this.bBottom.getComponent(Laya.BoxCollider).width = this.bBottom.width;
            this.bRight.getComponent(Laya.BoxCollider).height = this.bRight.height;
            this.bLeft.getComponent(Laya.BoxCollider).height = this.bLeft.height;
        }
    }

    var Event = Laya.Event;
    class MaskRT extends ui.uiDemo.useUI.MaskUI {
        onEnable() {
            this._hitArea.on(Event.MOUSE_DOWN, this, () => {
                this._hitArea.off(Event.MOUSE_MOVE, this, this.bg3MaskMove);
                this._hitArea.startDrag();
                this._hitArea.on(Event.MOUSE_MOVE, this, this.bg3MaskMove);
            });
            this.on(Event.MOUSE_MOVE, this, this.maskMove);
        }
        bg3MaskMove(e) {
            e.stopPropagation();
            this.bg3Mask.x = this._hitArea.x;
            this.bg3Mask.y = this._hitArea.y;
        }
        maskMove() {
            let _point = this.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY)), maskX = _point.x - (this._mask.width / this.bg2.scaleX / 2), maskY = _point.y - (this._mask.height / this.bg2.scaleY / 2);
            if (maskX > 80 && maskY > 80) {
                this._mask.x = _point.x - (this._mask.width / this.bg2.scaleX / 2);
                this._mask.y = _point.y - (this._mask.height / this.bg2.scaleY / 2);
                this.bg2.x = (-_point.x - this._mask.width / 2) * (this.bg2.scaleX - 1);
                this.bg2.y = (-_point.y - this._mask.height / 2) * (this.bg2.scaleY - 1);
            }
        }
    }

    var Event$1 = Laya.Event;
    var Mouse = Laya.Mouse;
    class UsePanelRT extends ui.uiDemo.page.UsePanelUI {
        constructor() { super(); }
        onEnable() {
            if (!(Laya.Browser.onPC)) {
                this.topLab.changeText("背景可拖拽，双指缩放改变大小");
            }
            else {
                this._panel.on(Event$1.MOUSE_OVER, this, () => { Mouse.cursor = "move"; });
                this._panel.on(Event$1.MOUSE_OUT, this, () => { Mouse.cursor = "auto"; });
            }
        }
    }

    class AtlasAniRT extends ui.uiDemo.animation.AtlasAniUI {
        constructor() {
            super(...arguments);
            this.isPlay = false;
        }
        onAwake() {
            this.createAniTemplate("moveB");
            this.createAniTemplate("moveC");
            this.createAniTemplate("moveE");
            this.createAniTemplate("moveF");
            this.createAniTemplate("moveH");
            this.createAniTemplate("moveI");
            this.createAniTemplate("moveK");
            this.createAniTemplate("moveL");
        }
        onEnable() {
            this.playAni.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.isPlay = true;
                this.aniSource.play(0, true, this.selectAni.selectedLabel);
            });
            this.stopAni.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.isPlay = false;
                this.aniSource.isPlaying && this.aniSource.stop();
            });
            this.selectAni.selectHandler = new Laya.Handler(this, () => {
                this.isPlay ? this.aniSource.play(0, true, this.selectAni.selectedLabel) : this.aniSource.play(0, false, this.selectAni.selectedLabel);
            });
        }
        createAniTemplate(name, len = 8) {
            let aniFrames = [];
            for (let i = 0; i < len; i++) {
                aniFrames.push("role/atlasAni/139x/" + name + i + ".png");
            }
            Laya.Animation.createFrames(aniFrames, name);
        }
    }

    class FrameAniRT extends ui.uiDemo.animation.FrameAniUI {
        constructor() {
            super(...arguments);
            this.isPlay = false;
        }
        onEnable() {
            this.isPlay = true;
            this.playAnimation(this.selectAni.selectedLabel);
            this.playAni.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.isPlay = true;
                this.playAnimation(this.selectAni.selectedLabel);
            });
            this.stopAni.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.isPlay = false;
                this.aniSource.isPlaying && this.aniSource.stop();
            });
            this.selectAni.selectHandler = new Laya.Handler(this, () => {
                this.isPlay ? this.playAnimation(this.selectAni.selectedLabel) : this.playAnimation(this.selectAni.selectedLabel, false);
            });
        }
        playAnimation(name, loop = true, len = 7) {
            let aniFrames = [];
            for (let i = 0; i < len; i++) {
                aniFrames.push("role/frameAni/" + name + i + ".png");
            }
            this.aniSource.loadImages(aniFrames).play(0, loop);
        }
    }

    var Rectangle = Laya.Rectangle;
    class ShapeDetection extends Laya.Script {
        constructor() {
            super(...arguments);
            this._rect1 = Rectangle.TEMP;
            this._rect2 = Rectangle.TEMP;
        }
        rectDetection(self, target) {
            return !(self.x > target.x + target.width ||
                self.x + self.width < target.x ||
                self.y > target.y + target.height ||
                self.y + self.height < target.y);
        }
        collisionWith(self, targets, type) {
            let collisionNodes = [];
            if (type == 0) {
                var p1 = Laya.Point.create(), p1PivotX = self.width / 2, p1PivotY = self.height / 2, p2 = Laya.Point.create(), p1Radius, p2Radius;
                p1.x = self.x + p1PivotX;
                p1.y = self.y + p1PivotY;
                p1Radius = this.rectToRadius(self.width, self.height);
            }
            else if (type == 2) {
                var targetVertices, selfVertices;
                selfVertices = this.arrayToPoint(self);
            }
            for (let i = 0; i < targets.length; i++) {
                if (self.name == targets[i].name)
                    continue;
                switch (type) {
                    case 0:
                        p2.x = targets[i].x + (targets[i].width / 2);
                        p2.y = targets[i].y + (targets[i].height / 2);
                        p2Radius = this.rectToRadius(targets[i].width, targets[i].height);
                        this.circleDetection(p1, p2, p1Radius + p2Radius) && collisionNodes.push(targets[i]);
                        break;
                    case 1:
                        this.rectDetection(self, targets[i]) && collisionNodes.push(targets[i]);
                        break;
                    case 2:
                        if (self.name === "c1") {
                            targetVertices = this.arrayToPoint(targets[i]);
                            this.circleAndPolygonDetection(self, targetVertices, targets[i]) && collisionNodes.push(targets[i]);
                        }
                        else if (targets[i].name === "c1") {
                            this.circleAndPolygonDetection(targets[i], selfVertices, self) && collisionNodes.push(targets[i]);
                        }
                        else {
                            targetVertices = this.arrayToPoint(targets[i]);
                            this.polygonDetection(selfVertices, targetVertices, self, targets[i]) && collisionNodes.push(targets[i]);
                        }
                        break;
                }
            }
            return collisionNodes;
        }
        circleAndPolygonDetection(circel, polygonVertices, polygonNode) {
            let sides = this.getSides(polygonVertices), axises = [], circelCenter = Laya.Point.create(), nearestPoint = Laya.Point.create(), radius = circel.hitArea._hit._one.radius, targetList = this.getNodeCoord(polygonVertices, polygonNode);
            circelCenter.x = circel.x + circel.hitArea._hit._one.x;
            circelCenter.y = circel.y + circel.hitArea._hit._one.y;
            nearestPoint = this.getNearestPoint(circelCenter, targetList);
            axises.push(new Laya.Point(nearestPoint.x - circelCenter.x, nearestPoint.y - circelCenter.y));
            for (let i = 0, len = sides.length; i < len; i++)
                axises.push(this.perpendicular(sides[i]));
            for (let i = 0, len = axises.length; i < len; i++) {
                let axis = axises[i], s = this.getCircleProjection(circelCenter, axis, radius), t = this.getPolygonProjection(targetList, axis);
                if (!this.isOverlap(s, t))
                    return false;
            }
            return true;
        }
        getNearestPoint(circelCenter, list) {
            let nearestPoint = list[0], minDistance = this.getDistance(circelCenter, nearestPoint), nowPoint, nowDistance;
            for (let i = 1; i < list.length; i++) {
                nowPoint = list[i];
                nowDistance = this.getDistance(circelCenter, nowPoint);
                if (nowDistance < minDistance) {
                    minDistance = nowDistance;
                    nearestPoint = nowPoint;
                }
            }
            return nearestPoint;
        }
        polygonDetection(selfVertices, targetVertices, selfNode, targetNode) {
            let sides = this.getSides(selfVertices).concat(this.getSides(targetVertices)), axises = [], selfList = this.getNodeCoord(selfVertices, selfNode), targetList = this.getNodeCoord(targetVertices, targetNode);
            for (let i = 0, len = sides.length; i < len; i++)
                axises.push(this.perpendicular(sides[i]));
            for (let i = 0, len = axises.length; i < len; i++) {
                let axis = axises[i], s = this.getPolygonProjection(selfList, axis), t = this.getPolygonProjection(targetList, axis);
                if (!this.isOverlap(s, t))
                    return false;
            }
            return true;
        }
        isOverlap(self, target) {
            let min, max;
            min = (self.min < target.min) ? self.min : target.min;
            max = (self.max > target.max) ? self.max : target.max;
            return (self.max - self.min) + (target.max - target.min) >= max - min;
        }
        getNodeCoord(vertices, node) {
            let _arr = [];
            for (let i = 0; i < vertices.length; i++) {
                let _point = Laya.Point.create();
                _point.x = vertices[i].x + node.x + node.hitArea._hit._one.x;
                _point.y = vertices[i].y + node.y + node.hitArea._hit._one.y;
                _arr.push(_point);
            }
            return _arr;
        }
        getPolygonProjection(list, axis) {
            let min = null, max = null;
            for (let i = 0; i < list.length; i++) {
                let projection = this.dotProduct(list[i], axis) / this.getLength(axis);
                (min === null || projection < min) && (min = projection);
                (max === null || projection > max) && (max = projection);
            }
            return { min: min, max: max };
        }
        getCircleProjection(circelCenter, axis, circleRadius) {
            let projection = this.dotProduct(circelCenter, axis) / this.getLength(axis);
            return { min: projection - circleRadius, max: projection + circleRadius };
        }
        rectToRadius(width, height) {
            let radius;
            if (width == height) {
                radius = width / 2;
            }
            else {
                radius = Math.sqrt(width * width + height * height) / 2;
            }
            return radius;
        }
        circleDetection(p1, p2, distance) {
            return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)) <= distance;
        }
        circlesCollision(p1, p2, p1Radius, p2Radius) {
            let axis = this.subtract(p1, p2), s = this.getCircleProjection(p1, axis, p1Radius), t = this.getCircleProjection(p2, axis, p2Radius);
            if (this.isOverlap(s, t))
                return true;
            return false;
        }
        arrayToPoint(sp) {
            let points = [], hitPoints = [];
            hitPoints = sp.hitArea._hit._one.points;
            if (hitPoints && hitPoints.length > 3) {
                for (let i = 0; i < hitPoints.length / 2; i++) {
                    points[i] = Laya.Point.create();
                    points[i].x = hitPoints[i * 2];
                    points[i].y = hitPoints[i * 2 + 1];
                }
            }
            return points;
        }
        perpendicular(p) {
            let _temp = Laya.Point.create();
            _temp.x = p.y;
            _temp.y = -p.x;
            return _temp;
        }
        getNormal(p) {
            let sum = Math.sqrt(p.x * p.x + p.y * p.y);
            return new Laya.Point(p.y / sum, (0 - p.x) / sum);
        }
        getSides(vertices) {
            var list = vertices, length = list.length, sides = new Array();
            if (length >= 3) {
                for (var i = 1, lastPoint = list[0]; i < length; i++) {
                    let nowPoint = list[i];
                    sides.push(this.subtract(nowPoint, lastPoint));
                    lastPoint = nowPoint;
                }
                sides.push(this.subtract(list[0], list[length - 1]));
            }
            return sides;
        }
        getLength(p) {
            return Math.sqrt(p.x * p.x + p.y * p.y);
        }
        dotProduct(p1, p2) {
            return p1.x * p2.x + p1.y * p2.y;
        }
        subtract(p2, p1) {
            let _point = Laya.Point.create();
            return _point.setTo(p2.x - p1.x, p2.y - p1.y);
        }
        getDistance(p1, p2) {
            let dx = p1.x - p2.x, dy = p1.y - p2.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }

    class ShapeDetectionRT extends ui.uiDemo.interactive.ShapeDetectionUI {
        constructor() {
            super();
            this._detectionType = 0;
            this.collisionNodes = [this.c1, this.p1, this.p2];
            ShapeDetectionRT.i = this;
        }
        onEnable() {
            this._script = this.getComponent(ShapeDetection);
            this.detectionType.selectHandler = new Laya.Handler(this, this.onSelected);
            this.detectionType.selectedIndex = 0;
        }
        onSelected(index) {
            this._detectionType = index;
            switch (index) {
                case 0:
                    this.setCircleLine([this.c11, this.p11, this.p22]);
                    break;
                case 1:
                    this.setRectLine([this.c11, this.p11, this.p22]);
                    break;
                case 2:
                    this.c11.graphics.clear();
                    this.p11.graphics.clear();
                    this.p22.graphics.clear();
                    break;
            }
        }
        collisionWith(self) {
            let nodes;
            nodes = this._script.collisionWith(self, this.collisionNodes, this._detectionType);
            if (nodes.length > 0) {
                nodes.push(self);
                this.setLineWidth(nodes);
            }
            else {
                this.retsetLineWidth();
            }
        }
        setLineWidth(nodes) {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i]._graphics._one.lineWidth = 3;
            }
        }
        retsetLineWidth() {
            for (let i = 0; i < this.collisionNodes.length; i++) {
                this.collisionNodes[i]._graphics._one.lineWidth = 0;
            }
        }
        setCircleLine(nodes, lineWidth = 1, lineColor = "#1e00fb") {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].graphics.clear();
                let x = nodes[i].width / 2, y = nodes[i].height / 2, radius = this._script.rectToRadius(nodes[i].width, nodes[i].height);
                nodes[i].graphics.drawCircle(x, y, radius, null, lineColor, lineWidth);
            }
        }
        setRectLine(nodes, lineWidth = 1, lineColor = "#1e00fb") {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].graphics.clear();
                nodes[i].graphics.drawRect(nodes[i].x, nodes[i].y, nodes[i].width, nodes[i].height, null, lineColor, lineWidth);
            }
        }
    }

    var Templet = Laya.Templet;
    var Event$2 = Laya.Event;
    var SpineTemplet = Laya.SpineTemplet;
    class SkeletonAni extends Laya.Script {
        constructor() {
            super(...arguments);
            this.skinArray = ["goblin", "goblingirl"];
            this.skinIndex = 0;
            this.spineAniIndex = 6;
        }
        onEnable() {
            this.createLayaSpine();
            this.createSpine();
        }
        createLayaSpine() {
            this.skeletonTemplet = new Templet();
            this.skeletonTemplet.on(Event$2.COMPLETE, this, this.parseComplete);
            this.skeletonTemplet.loadAni("role/spineAni/goblins.sk");
            this.skeletonNode = this.owner.getChildByName("skeletonNode");
        }
        createSpine() {
            this.spineTemplet = new SpineTemplet(Laya.SpineVersion.v3_8);
            this.spineTemplet.on(Event$2.COMPLETE, this, this.spineParseComplete);
            this.spineTemplet.loadAni("role/spineAni/spineboy-pma.skel");
            this.spineNode = this.owner.getChildByName("spineNode");
        }
        spineParseComplete() {
            this.spineAni = this.spineTemplet.buildArmature();
            this.spineNode.addChild(this.spineAni);
            this.spineAni.scale(0.3, 0.3);
            this.spineAni.pos(220, 390);
            this.spineAniNum = this.spineAni.getAnimNum();
            this.spineAni.play(this.spineAniIndex, true);
            this.spineNode.on(Event$2.CLICK, this, this.changeAni);
        }
        changeAni() {
            ++this.spineAniIndex >= this.spineAniNum && (this.spineAniIndex = 5);
            this.spineAni.play(this.spineAniIndex, true, true);
        }
        parseComplete() {
            this.skeletonAni = this.skeletonTemplet.buildArmature(1);
            this.skeletonNode.addChild(this.skeletonAni);
            this.skeletonAni.x = 128;
            this.skeletonAni.y = 390;
            this.skeletonAni.play(0, true);
            this.changeSkin();
            this.skeletonNode.on(Event$2.CLICK, this, this.changeSkin);
        }
        changeSkin() {
            this.skeletonAni.showSkinByName(this.skinArray[this.skinIndex]);
            ++this.skinIndex >= this.skinArray.length && (this.skinIndex = 0);
        }
    }

    var Keyboard$1 = Laya.Keyboard;
    var KeyBoardManager$1 = Laya.KeyBoardManager;
    class Role extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this._owner = this.owner;
            this.roleStand = this._owner.getChildByName("roleStand");
            this.roleRun = this._owner.getChildByName("roleRun");
            this.bg = this.owner.parent;
        }
        playRoleAni(name, type = "stand") {
            if (type == "run") {
                this.roleStand.visible = false;
                this.roleStand.isPlaying && this.roleStand.stop();
                this.roleRun.visible = true;
                this.roleRun.play(0, true, name);
            }
            else {
                this.roleRun.visible = false;
                this.roleRun.isPlaying && this.roleRun.stop();
                this.roleStand.play(0, true, name);
                this.roleStand.visible = true;
            }
        }
        onUpdate() {
            this.lastRoleDirection = this.roleDirection;
            if (KeyBoardManager$1.hasKeyDown(Keyboard$1.UP) || KeyBoardManager$1.hasKeyDown(Keyboard$1.W)) {
                this.roleDirection = "Up";
                this._owner.y -= 2;
                this._owner.y < 80 && (this._owner.y = 80);
            }
            else if (KeyBoardManager$1.hasKeyDown(Keyboard$1.DOWN) || KeyBoardManager$1.hasKeyDown(Keyboard$1.S)) {
                this.roleDirection = "Down";
                this._owner.y += 2;
                this._owner.y > (this.bg.height - 130) && (this._owner.y = this.bg.height - 130);
            }
            else if (KeyBoardManager$1.hasKeyDown(Keyboard$1.LEFT) || KeyBoardManager$1.hasKeyDown(Keyboard$1.A)) {
                this.roleDirection = "Left";
                this._owner.x -= 2;
                this._owner.x < 30 && (this._owner.x = 30);
            }
            else if (KeyBoardManager$1.hasKeyDown(Keyboard$1.RIGHT) || KeyBoardManager$1.hasKeyDown(Keyboard$1.D)) {
                this.roleDirection = "Right";
                this._owner.x += 2;
                this._owner.x > (this.bg.width - 130) && (this._owner.x = (this.bg.width - 130));
            }
            this.lastRoleDirection !== this.roleDirection && this.playRoleAni(this.roleDirection, "run");
        }
        onKeyUp(e) {
            this.playRoleAni(this.roleDirection);
            this.roleDirection = "";
        }
        onDisable() {
        }
    }

    class Folded extends Laya.Script {
        constructor() {
            super();
            this.isOpen = true;
        }
        onEnable() {
            this.toolbarBG = this.owner.parent;
            this._owner = this.owner;
            this.menu = this.owner.parent.getChildByName("menu");
        }
        onMouseDown(e) {
            e.stopPropagation();
            if (this.isOpen) {
                Laya.Tween.to(this.toolbarBG, { width: 106 }, 1000, Laya.Ease.strongOut);
                Laya.Tween.to(this._owner, { x: 52, rotation: 540 }, 1000, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
                    this.isOpen = false;
                }));
                Laya.Tween.to(this.menu, { alpha: 0 }, 300, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
                    this.menu.visible = false;
                }));
            }
            else {
                Laya.Tween.to(this.toolbarBG, { width: 460 }, 1000, Laya.Ease.strongOut);
                Laya.Tween.to(this._owner, { x: 402, rotation: -360 }, 1000, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
                    this.isOpen = true;
                }));
                Laya.Tween.to(this.menu, { alpha: 1 }, 200, Laya.Ease.strongOut, Laya.Handler.create(this, () => {
                    this.menu.visible = true;
                }));
            }
        }
        onDisable() {
        }
    }

    var Event$3 = Laya.Event;
    var Point = Laya.Point;
    class Joystick extends Laya.Script {
        constructor() {
            super();
            this.runAniName = "Right,Rdown1,Rdown2,Rdown3,Down,Ldown3,Ldown2,Ldown1,Left,Lup1,Lup2,Lup3,Up,Rup3,Rup2,Rup1";
            this.standAniName = "Right,Rdown,Down,Ldown,Left,Lup,Up,Rup";
            this.stageMouse = new Point();
            this.axisPivot = new Point();
            this.angle = 0;
            this.radian = 0;
            this.isMoving = false;
        }
        onEnable() {
            this.joystickBG = this.owner;
            this.joystickAxis = this.owner.getChildByName("joystickAxis");
            this.maxDistance = this.joystickBG.width - this.joystickAxis.width;
            this.axisPivot.x = this.joystickAxis.x;
            this.axisPivot.y = this.joystickAxis.y;
            this.sceneWindow.on(Event$3.MOUSE_DOWN, this, this.mouseDown);
            this.sceneWindow.on(Event$3.MOUSE_MOVE, this, this.mouseMove);
            this.sceneWindow.on(Event$3.MOUSE_UP, this, this.mouseUp);
            this.sceneWindow.on(Event$3.MOUSE_OUT, this, this.mouseUp);
            this.roleAniNode = this.roleAni.create();
            this.sceneWindow.addChild(this.roleAniNode);
            this.roleAniNode.pivot(this.roleAniNode.width / 2, this.roleAniNode.height / 2);
            this.roleAniNode.x = this.sceneWindow.width / 2;
            this.roleAniNode.y = this.sceneWindow.height / 2;
            this.roleStand = this.roleAniNode.getChildByName("roleStand");
            this.roleRun = this.roleAniNode.getChildByName("roleRun");
        }
        mouseDown(e) {
            this.touchId = e.touchId;
            this.isMoving = true;
            this.updateJoystickPoint();
        }
        updateJoystickPoint() {
            this.stageMouse.x = Laya.stage.mouseX;
            this.stageMouse.y = Laya.stage.mouseY;
            let joystickBGMouse = this.joystickBG.globalToLocal(this.stageMouse), mouseX = joystickBGMouse.x - this.joystickAxis.width / 2, mouseY = joystickBGMouse.y - this.joystickAxis.height / 2;
            this.radian = Math.atan2(mouseY - this.axisPivot.y, mouseX - this.axisPivot.x);
            this.lastAngle = this.angle;
            this.angle = Math.round(this.radian * 180 / Math.PI * 10) / 10;
            this.angle < 0 && (this.angle += 360);
            let distance = this.getDistance(this.joystickBG.width / 2, this.joystickBG.height / 2, joystickBGMouse.x, joystickBGMouse.y);
            if (distance > this.maxDistance && this.lastAngle !== this.angle) {
                this.joystickAxis.x = Math.floor(Math.cos(this.radian) * this.maxDistance) + this.axisPivot.x;
                this.joystickAxis.y = Math.floor(Math.sin(this.radian) * this.maxDistance) + this.axisPivot.y;
            }
            else {
                this.joystickAxis.pos(joystickBGMouse.x - this.joystickAxis.width / 2, joystickBGMouse.y - this.joystickAxis.height / 2);
            }
            this.switchAni("run");
        }
        switchAni(aniType) {
            if (aniType == "run") {
                if (this.roleStand.isPlaying) {
                    this.roleStand.stop();
                    this.roleStand.visible = false;
                    this.roleRun.visible = true;
                }
                let _runAniName = this.getOrientation(this.angle, this.runAniName);
                if (_runAniName !== this.lastRunAniName) {
                    this.lastRunAniName = _runAniName;
                    this.roleRun.play(0, true, _runAniName);
                }
            }
            else {
                if (this.roleRun.isPlaying) {
                    this.roleRun.stop();
                    this.roleRun.visible = false;
                    this.roleStand.visible = true;
                }
                this.lastAngle !== this.angle && this.roleStand.play(0, true, this.getOrientation(this.angle, this.standAniName));
            }
        }
        mouseUp(e) {
            if (e.touchId != this.touchId)
                return;
            this.touchId = null;
            this.isMoving = false;
            this.joystickAxis.pos(this.axisPivot.x, this.axisPivot.y);
            this.switchAni("stand");
        }
        mouseMove(e) {
            if (e.touchId != this.touchId)
                return;
            this.updateJoystickPoint();
        }
        getOrientation(angle, aniName) {
            let aniArr = aniName.split(",");
            const angleConditions = 360 / aniArr.length;
            return aniArr[Math.floor(angle / angleConditions)];
        }
        onUpdate() {
            if (!this.isMoving)
                return;
            this.updateRoleMove();
        }
        updateRoleMove() {
            this.switchAni("run");
            let dx = Math.cos(this.radian) * 2;
            let dy = Math.sin(this.radian) * 2;
            ((dx < 0 && this.gameMap.x < 0) || (dx > 0 && this.gameMap.x > this.sceneWindow.width - this.gameMap.width)) && (this.gameMap.x -= dx);
            ((dy < 0 && this.gameMap.y < 0) || (dy > 0 && this.gameMap.y > this.sceneWindow.height - this.gameMap.height)) && (this.gameMap.y -= dy);
        }
        getDistance(centerX, centerY, mouseX, mouseY) {
            let dx = centerX - mouseX, dy = centerY - mouseY;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }

    class DragAndTips extends Laya.Script {
        constructor() {
            super(...arguments);
            this.tipsText = '';
            this.isDown = false;
        }
        onEnable() {
            this.tipsText.replace(/(^\s*)|(\s*$)/g, '');
        }
        onMouseDown() {
            this.owner.startDrag();
            this.isDown = true;
        }
        onMouseUp() {
            this.isDown = false;
        }
        onMouseMove() {
            this.isDown && ShapeDetectionRT.i.collisionWith(this.owner);
        }
        onMouseOver() {
            Laya.Mouse.cursor = "move";
            this.tipsText !== "" && Laya.Scene.open("uiDemo/Msg.scene", false, { "text": this.tipsText });
        }
        onMouseOut() {
            Laya.Mouse.cursor = "auto";
        }
    }

    class ItemBox extends Laya.Box {
        constructor() { super(); }
        get dataSource() {
            return super.dataSource;
        }
        set dataSource(value) {
            super.dataSource = value;
            if (!value)
                return;
            if (value.avatar) {
                let redHot = this.getChildByName("avatar").getChildByName("redHot");
                redHot.visible = value.avatar.redHot.visible;
            }
            if (value.flag) {
                let flagText = this.getChildByName("flag").getChildByName("flagText");
                flagText.changeText(value.flag.flagText.text);
            }
        }
    }

    class OpenMainScene extends Laya.Script {
        onEnable() {
            this.owner.getChildByName("btn").on(Laya.Event.CLICK, this, () => { this.owner.close(); });
        }
        onDisable() {
        }
    }

    class OpenScene extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            let _window, closeBtn;
            _window = this.owner.getChildByName("window");
            closeBtn = _window.getChildByName("closeBtn");
            _window.on(Laya.Event.MOUSE_DOWN, this, () => { _window.startDrag(); });
            closeBtn.on(Laya.Event.MOUSE_DOWN, this, () => { this.owner.close(); });
        }
        onDisable() {
        }
    }

    class bgImg extends Laya.Script {
        constructor() {
            super(...arguments);
            this.maxX = 0;
            this.minX = -90;
            this.maxY = 0;
            this.minY = -580;
            this.scaleSize = 0.1;
            this.lastDistance = 0;
        }
        onEnable() {
            this._owner = this.owner;
            this.onMouseWheel();
        }
        onMouseWheel() {
            this.owner.on(Laya.Event.MOUSE_WHEEL, this, (e) => {
                let point = this._owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
                if (e.delta > 0) {
                    this._owner.scaleX += this.scaleSize;
                    this._owner.scaleY += this.scaleSize;
                }
                if (e.delta < 0) {
                    this._owner.scaleX -= this.scaleSize;
                    this._owner.scaleY -= this.scaleSize;
                    (this._owner.scaleX < 1) && (this._owner.scaleX = 1);
                    (this._owner.scaleY < 1) && (this._owner.scaleY = 1);
                }
                let point2 = this._owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
                let _offsetX = (point2.x - point.x) * this._owner.scaleX;
                let _offsetY = (point2.y - point.y) * this._owner.scaleY;
                _offsetX += this._owner.x;
                _offsetY += this._owner.y;
                this.updateLimit();
                if (_offsetX > this.maxX)
                    this._owner.x = this.maxX;
                else if (_offsetX < this.minX)
                    this._owner.x = this.minX;
                else
                    this._owner.x = _offsetX;
                if (_offsetY > this.maxY)
                    this._owner.y = this.maxY;
                else if (_offsetY < this.minY)
                    this._owner.y = this.minY;
                else
                    this._owner.y = _offsetY;
            });
        }
        onStart() {
            this.updateLimit();
        }
        updateLimit() {
            let _parent = this.owner.parent.parent;
            this.minX = _parent.width - this._owner.width * this._owner.scaleY;
            this.minY = _parent.height - this._owner.height * this._owner.scaleY;
        }
        onMouseDown(e) {
            e.stopPropagation();
            if (e.touches && e.touches.length > 1) {
                let lastPivot = this.setPivot(e.touches);
                if (!(lastPivot.x) || !(lastPivot.y)) {
                    console.log("(((((((((((((((((((((((", this.lastPivot, JSON.parse(JSON.stringify(e.touches)));
                }
                else {
                    this.lastDistance = this.getDistance(e.touches);
                    this.lastPivot = lastPivot;
                    this._owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
                }
            }
            else if (Laya.Browser.onPC)
                this._owner.startDrag();
        }
        onMouseUp(e) {
            this._owner.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
        getDistance(touches) {
            var distance = 0;
            if (touches && touches.length > 1) {
                let dx = touches[0].stageX - touches[1].stageX;
                let dy = touches[0].stageY - touches[1].stageY;
                distance = Math.sqrt(dx * dx + dy * dy);
            }
            return distance;
        }
        mouseMove(e) {
            let distance = this.getDistance(e.touches);
            this._owner.scaleX += (distance - this.lastDistance) * (this.scaleSize / 10);
            this._owner.scaleY += (distance - this.lastDistance) * (this.scaleSize / 10);
            (this._owner.scaleX < 1) && (this._owner.scaleX = 1);
            (this._owner.scaleY < 1) && (this._owner.scaleY = 1);
            (this._owner.scaleX > 5) && (this._owner.scaleX = 5);
            (this._owner.scaleY > 5) && (this._owner.scaleY = 5);
            let nowPivot = this.setPivot(e.touches);
            if (!(nowPivot.x) || !(nowPivot.y)) {
                console.log("$$$$$$$$$$$", nowPivot, JSON.parse(JSON.stringify(e.touches)));
            }
            else {
                this.updateLimit();
                let _offsetX = (nowPivot.x - this.lastPivot.x) * this._owner.scaleX;
                let _offsetY = (nowPivot.y - this.lastPivot.y) * this._owner.scaleY;
                _offsetX += this._owner.x;
                _offsetY += this._owner.y;
                if (_offsetX > this.maxX)
                    this._owner.x = this.maxX;
                else if (_offsetX < this.minX)
                    this._owner.x = this.minX;
                else
                    this._owner.x = _offsetX;
                if (_offsetY > this.maxY)
                    this._owner.y = this.maxY;
                else if (_offsetY < this.minY)
                    this._owner.y = this.minY;
                else
                    this._owner.y = _offsetY;
                this.lastDistance = distance;
            }
        }
        setPivot(touches) {
            let Point0 = this._owner.globalToLocal(new Laya.Point(touches[0].stageX, touches[0].stageY));
            let Point1 = this._owner.globalToLocal(new Laya.Point(touches[1].stageX, touches[1].stageY));
            return new Laya.Point((Point0.x + Point1.x) / 2, (Point0.y + Point1.y) / 2);
        }
        onUpdate() {
            (this._owner.x > this.maxX) && (this._owner.x = this.maxX);
            (this._owner.x < this.minX) && (this._owner.x = this.minX);
            (this._owner.y > this.maxY) && (this._owner.y = this.maxY);
            (this._owner.y < this.minY) && (this._owner.y = this.minY);
        }
        addTestPoint(point, color = "#ff0000", size = 2) {
            let spTest = new Laya.Sprite();
            spTest.graphics.drawCircle(0, 0, size, color);
            this.owner.addChild(spTest);
            spTest.pos(point.x, point.y);
        }
    }

    class Bullet extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            var rig = this.owner.getComponent(Laya.RigidBody);
            rig.setVelocity({ x: 0, y: -10 });
        }
        onTriggerEnter(other, self, contact) {
            this.owner.removeSelf();
        }
        onUpdate() {
            if (this.owner.y < -10) {
                this.owner.removeSelf();
            }
        }
        onDisable() {
            Laya.Pool.recover("bullet", this.owner);
        }
    }

    class DropBox extends Laya.Script {
        constructor() {
            super();
            this.level = 1;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody);
            this.level = Math.round(Math.random() * 5) + 1;
            this._text = this.owner.getChildByName("levelTxt");
            this._text.text = this.level + "";
        }
        onUpdate() {
            this.owner.rotation++;
        }
        onTriggerEnter(other, self, contact) {
            var owner = this.owner;
            if (other.label === "buttle") {
                if (this.level > 1) {
                    this.level--;
                    this._text.changeText(this.level + "");
                    owner.getComponent(Laya.RigidBody).setVelocity({ x: 0, y: -10 });
                    Laya.SoundManager.playSound("sound/hit.wav");
                }
                else {
                    if (owner.parent) {
                        let effect = Laya.Pool.getItemByCreateFun("effect", this.createEffect, this);
                        effect.pos(owner.x, owner.y);
                        owner.parent.addChild(effect);
                        effect.play(0, true);
                        owner.removeSelf();
                        Laya.SoundManager.playSound("sound/destroy.wav");
                    }
                }
                PhysicsGameMainRT.instance.addScore(1);
            }
            else if (other.label === "ground") {
                owner.removeSelf();
                PhysicsGameMainRT.instance.stopGame();
            }
        }
        createEffect() {
            let ani = new Laya.Animation();
            ani.loadAnimation("ani/TestAni.ani");
            ani.on(Laya.Event.COMPLETE, null, recover);
            function recover() {
                ani.removeSelf();
                Laya.Pool.recover("effect", ani);
            }
            return ani;
        }
        onDisable() {
            Laya.Pool.recover("dropBox", this.owner);
        }
    }

    class LoopImg extends Laya.Script {
        constructor() { super(); }
        onEnable() {
        }
        onUpdate() {
        }
        onDisable() {
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("Index.ts", Index);
            reg("prefab/plate.ts", Plate);
            reg("scence/levels/Level1Main.ts", Level1Main);
            reg("LoadingRT.ts", LoadingRT);
            reg("scence/startScene/StartMain.ts", StartMain);
            reg("prefab/CloseBtn.ts", CloseBtn);
            reg("scence/d3Demo/D3Main.ts", D3Main);
            reg("scence/physicsDemo/PhysicsGameMainRT.ts", PhysicsGameMainRT);
            reg("scence/physicsDemo/PhysicsGameMain.ts", PhysicsGameMain);
            reg("scence/uiDemo/DialogRT.ts", DialogRT);
            reg("scence/uiDemo/MsgRT.ts", MsgRT);
            reg("scence/uiDemo/UiMainRT.ts", UiMainRT);
            reg("scence/uiDemo/list/BagListRT.ts", BagListRT);
            reg("scence/uiDemo/list/MailListRT.ts", MailListRT);
            reg("scence/uiDemo/list/RefreshRT.ts", RefreshRT);
            reg("scence/uiDemo/list/LoopListRT.ts", LoopListRT);
            reg("scence/uiDemo/list/ComboBoxRT.ts", ComboBoxRT);
            reg("scence/uiDemo/list/TreeListRT.ts", TreeListRT);
            reg("scence/uiDemo/useUI/ProgressRT.ts", ProgressRT);
            reg("scence/uiDemo/useUI/TextShowRT.ts", TextShowRT);
            reg("scence/uiDemo/useUI/ChangeTextureRT.ts", ChangeTextureRT);
            reg("scence/uiDemo/useUI/MouseThroughRT.ts", MouseThroughRT);
            reg("scence/uiDemo/useUI/PhysicalCollisionRT.ts", PhysicalCollisionRT);
            reg("scence/uiDemo/useUI/MaskRT.ts", MaskRT);
            reg("scence/uiDemo/page/UsePanelRT.ts", UsePanelRT);
            reg("scence/uiDemo/page/IframeElementRT.ts", IframeElementRT);
            reg("scence/uiDemo/animation/AtlasAniRT.ts", AtlasAniRT);
            reg("scence/uiDemo/animation/FrameAniRT.ts", FrameAniRT);
            reg("scence/uiDemo/interactive/ShapeDetectionRT.ts", ShapeDetectionRT);
            reg("scence/uiDemo/animation/SkeletonAni.ts", SkeletonAni);
            reg("prefab/Role.ts", Role);
            reg("script/tween/Folded.ts", Folded);
            reg("script/mouse/Joystick.ts", Joystick);
            reg("script/mouse/DragAndTips.ts", DragAndTips);
            reg("scence/uiDemo/interactive/ShapeDetection.ts", ShapeDetection);
            reg("runtime/box/dataSource/ItemBox.ts", ItemBox);
            reg("scence/uiDemo/page/OpenMainScene.ts", OpenMainScene);
            reg("scence/uiDemo/page/OpenScene.ts", OpenScene);
            reg("script/mouse/BgImg.ts", bgImg);
            reg("prefab/Bullet.ts", Bullet);
            reg("prefab/DropBox.ts", DropBox);
            reg("prefab/LoopImg.ts", LoopImg);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "Loading.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = true;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            Config.useRetinalCanvas = true;
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.stage.bgColor = "#efeed7";
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
            console.log('Hello LayaBox');
        }
    }
    new Main();

}());
