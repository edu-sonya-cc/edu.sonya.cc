/**
 * <en>
 * Function:
 * Initial construction:
 * History: On November 18, 2022
 * Reference:
 * 						2021-10-05 Anqi P:\0\000007\_Learning\Mathematics\Dice
 * 						2021-10-05 Anqi P:\0\000007\_Learning\Chinese\Pinyin\Pinyin dice
 * 						https://www.sohu.com/a/273872389_141060(1-15,18,20,30,50,100)
 *            https://www.darlang.com/2017/11/css-media-print-page-print-another-of-style-writing/
 * </en>
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

/// <reference path='../../types/IBrickCore.d.ts' />
/// <reference path='../../types/boxBase.d.ts' />

class BrickCore extends BoxBase {
  // constructor() {
  //   super({
  //    }, {
  //    }
  //  );
  // }

  // public updateOtherDataOfDice = (newData: any): void => { };
  // public initOtherElements = (): void => { };
}

const brickCore = new BrickCore();
(window as unknown as { brickCore: IBrickCore }).brickCore = brickCore;