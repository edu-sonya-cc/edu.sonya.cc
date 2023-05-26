/// <reference path="../../../src/types/dom.d.ts" />
export declare const convertDateToYYYYMMDD_hhmmss: (date: Date) => string;
export declare function pushSameValueTimes<T>(
  array: Array<T>,
  value: T,
  times: number,
): void;
export declare function getNumbersArray(
  min: number,
  max: number,
): Array<string>;
export declare function repeatString(original: string, times: number): string;
export declare function getArrayRepeatSameValue<T>(
  value: T,
  times: number,
): Array<T>;
export declare const getI18nableWithSameContent: (value: string) => any;
