// import { I18nable } from './dom';
/// <reference path='../types/dom.d.ts' />
export var convertDateToYYYYMMDD_hhmmss = function (date) {
  return "".concat(date.getFullYear()).concat(
    "0".concat((date.getMonth() + 1).toString()).substr(-2),
  ).concat("0".concat((date.getDate()).toString()).substr(-2)).concat(
    "_".concat("0".concat((date.getHours()).toString()).substr(-2)).concat(
      "0".concat((date.getMinutes()).toString()).substr(-2),
    ).concat("0".concat((date.getSeconds()).toString()).substr(-2)),
  );
};
export function pushSameValueTimes(array, value, times) {
  for (var i = 0; i < times; ++i) {
    array.push(value);
  }
}
export function getNumbersArray(min, max) {
  var array = [];
  for (var i = min; i <= max; ++i) {
    array.push(i.toString());
  }
  return array;
}
export function repeatString(original, times) {
  var array = [];
  for (var i = 0; i <= times; ++i) {
    array.push(original);
  }
  return array.join();
}
export function getArrayRepeatSameValue(value, times) {
  var array = [];
  for (var i = 0; i < times; ++i) {
    array.push(value);
  }
  return array;
}
export var getI18nableWithSameContent = function (value) {
  return { en: value, zh_cn: value, zh_tw: value };
};
