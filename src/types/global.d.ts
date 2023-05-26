/** 类：全局对象 */
declare class Global {
  private readonly USER_AGENT_LOWER_CASE_FIXED: string;
  readonly IS_MOBILE: boolean;
  readonly IS_PAD: boolean;
  readonly IS_MOBILE_OR_PAD: boolean;
  readonly CAN_NOT_PRINT: boolean;
  private body;
  private langUpdatedEventArray;
  bindChangeLangEventForI18nElements: () => void;
  private inited;
  init: () => void;
}
/** 全局对象 */
export declare const global: Global;
export {};
