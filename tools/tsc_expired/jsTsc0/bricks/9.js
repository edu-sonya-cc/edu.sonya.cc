"use strict";
// import { DiceBase } from './diceBase.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
// // import { global } from '../global.ts';
// // import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
/// <reference path='../../types/diceBase.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/**
 * <en>
 * Function: Generate various dice, such as Platonic regular polyhedron (4, 6, 8, 12, 20) and others (24)
 * Initial construction: Anqi, October 5, 2021
 * History: On November 2, 2022
 * Reference:
 * 						2021-10-05 Anqi P:\0\000007\_Learning\Mathematics\Dice
 * 						2021-10-05 Anqi P:\0\000007\_Learning\Chinese\Pinyin\Pinyin dice
 * 						https://www.sohu.com/a/273872389_141060(1-15,18,20,30,50,100)
 *            https://www.darlang.com/2017/11/css-media-print-page-print-another-of-style-writing/
 * </en>
 *
 * <zh_cn>
 * 功能：生成各种骰子，如柏拉图正多面体（4面、6面、8面、12面、20面）和其它（24面）
 * 初建：2021-10-05 安启
 * 历史：2022-11-02 安启 归档
 * 参考：
 *       2021-10-05 安启 P:\0\000007\_学习\数学\骰子
 *       2021-10-05 安启 P:\0\000007\_学习\语文\拼音\拼音骰子
 *       https://www.sohu.com/a/273872389_141060(1-15,18,20,30,50,100)
 *       https://www.darlang.com/2017/11/css-media-print-page-print-another-of-style-writing/
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：生成各種骰子，如柏拉圖正多面體（4面、6面、8面、12面、20面）和其它（24面）
 * 初建：2021-10-05 安啟
 * 歷史：2022-11-02 安啟 歸檔
 * 參攷：
 *       2021-10-05 安啟 P:\0\000007\_學習\數學\骰子
 *       2021-10-05 安啟 P:\0\000007\_學習\語文\拼音\拼音骰子
 *       https://www.sohu.com/a/273872389_141060(1-15,18,20,30,50,100)
 *       https://www.darlang.com/2017/11/css-media-print-page-print-another-of-style-writing/
 * </zh_tw>
 */
var BrickCore = /** @class */ (function (_super) {
  __extends(BrickCore, _super);
  function BrickCore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return BrickCore;
}(DiceBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
