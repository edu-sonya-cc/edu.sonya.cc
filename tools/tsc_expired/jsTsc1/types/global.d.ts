/// <reference path="../src/types/const.d.ts" />
/// <reference path="../src/types/dom.d.ts" />
/// <reference path="../src/types/storage.d.ts" />
/** 类：全局对象 */
declare class Global {
  /** 是否手机版 */
  readonly IS_MOBILE: boolean;
  private body;
  private langUpdatedEventArray;
  bindChangeLangEventForI18nElements: () => void;
  private inited;
  init: () => void;
}
/** 全局对象 */
export declare const global: Global;
export {};
