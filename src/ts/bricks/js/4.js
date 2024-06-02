/**
 * <en_us>
 * Function:
 * Initial construction:
 * History: On November 18, 2022
 * Reference:
 * 						2021-10-05 Anqi P:\0\000007\_Learning\Mathematics\Dice
 * 						2021-10-05 Anqi P:\0\000007\_Learning\Chinese\Pinyin\Pinyin dice
 * 						https://www.sohu.com/a/273872389_141060(1-15,18,20,30,50,100)
 *            https://www.darlang.com/2017/11/css-media-print-page-print-another-of-style-writing/
 * </en_us>
 *
 * <zh_cn>
 * 功能：
 * 初建：2021-10-05 安启
 * 历史：2022-11-18 安启 归档
 * 参考：
 *       2021-10-05 安启 P:\0\000007\_学习\语文\拼音\拼音骰子
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：
 * 初建：2021-10-05 安啟
 * 歷史：2022-11-18 安啟 歸檔
 * 參攷：
 *       2021-10-05 安啟 P:\0\000007\_學習\語文\拼音\拼音骰子
 * </zh_tw>
 */
// import { BoxBase } from './boxBase.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path='../../types/IBrickCore.d.ts' />
/// <reference path='../../types/boxBase.d.ts' />
var BrickCore = /** @class */ (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BrickCore;
}(BoxBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
