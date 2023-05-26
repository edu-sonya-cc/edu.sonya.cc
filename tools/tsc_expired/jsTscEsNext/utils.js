// import { I18nable } from './dom';
/// <reference path='../types/dom.d.ts' />
export const convertDateToYYYYMMDD_hhmmss = (date) => {
  return `${date.getFullYear()}${
    "0".concat((date.getMonth() + 1).toString()).substr(-2)
  }${"0".concat((date.getDate()).toString()).substr(-2)}`.concat(
    `_${"0".concat((date.getHours()).toString()).substr(-2)}${
      "0".concat((date.getMinutes()).toString()).substr(-2)
    }${"0".concat((date.getSeconds()).toString()).substr(-2)}`,
  );
};
export function pushSameValueTimes(array, value, times) {
  for (let i = 0; i < times; ++i) {
    array.push(value);
  }
}
export function getNumbersArray(min, max) {
  const array = [];
  for (let i = min; i <= max; ++i) {
    array.push(i.toString());
  }
  return array;
}
export function repeatString(original, times) {
  const array = [];
  for (let i = 0; i <= times; ++i) {
    array.push(original);
  }
  return array.join();
}
export function getArrayRepeatSameValue(value, times) {
  const array = [];
  for (let i = 0; i < times; ++i) {
    array.push(value);
  }
  return array;
}
export const getI18nableWithSameContent = (value) => {
  return { en: value, zh_cn: value, zh_tw: value };
};
