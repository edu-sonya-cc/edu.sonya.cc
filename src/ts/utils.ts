// import { I18nable } from './dom';

/// <reference path='../types/dom.d.ts' />

export const convertDateToYYYYMMDD_hhmmss = (date: Date) => {
  return `${date.getFullYear()}${
    "0".concat((date.getMonth() + 1).toString()).substr(-2)
  }${"0".concat((date.getDate()).toString()).substr(-2)}`.concat(
    `_${"0".concat((date.getHours()).toString()).substr(-2)}${
      "0".concat((date.getMinutes()).toString()).substr(-2)
    }${"0".concat((date.getSeconds()).toString()).substr(-2)}`,
  );
};

export function pushSameValueTimes<T>(
  array: Array<T>,
  value: T,
  times: number,
): void {
  for (let i = 0; i < times; ++i) {
    array.push(value);
  }
}

export function getNumbersArray(min: number, max: number): Array<string> {
  const array: Array<string> = [];
  for (let i = min; i <= max; ++i) {
    array.push(i.toString());
  }

  return array;
}

export function repeatString(original: string, times: number): string {
  const array: Array<string> = [];
  for (let i = 0; i <= times; ++i) {
    array.push(original);
  }

  return array.join();
}

export function getArrayRepeatSameValue<T>(value: T, times: number): Array<T> {
  const array: Array<T> = [];
  for (let i = 0; i < times; ++i) {
    array.push(value);
  }
  return array;
}

export const getI18nableWithSameContent = (value: string): I18nable => {
  return { en_us: value, zh_cn: value, zh_tw: value };
};
