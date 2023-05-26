"use strict";
// import { I18nable } from './dom';
exports.__esModule = true;
exports.getI18nableWithSameContent = exports.getArrayRepeatSameValue = exports
  .repeatString = exports.getNumbersArray = exports.pushSameValueTimes = exports
    .convertDateToYYYYMMDD_hhmmss = void 0;
/// <reference path='../types/dom.d.ts' />
var convertDateToYYYYMMDD_hhmmss = function (date) {
  return "".concat(date.getFullYear()).concat(
    "0".concat((date.getMonth() + 1).toString()).substr(-2),
  ).concat("0".concat((date.getDate()).toString()).substr(-2)).concat(
    "_".concat("0".concat((date.getHours()).toString()).substr(-2)).concat(
      "0".concat((date.getMinutes()).toString()).substr(-2),
    ).concat("0".concat((date.getSeconds()).toString()).substr(-2)),
  );
};
exports.convertDateToYYYYMMDD_hhmmss = convertDateToYYYYMMDD_hhmmss;
function pushSameValueTimes(array, value, times) {
  for (var i = 0; i < times; ++i) {
    array.push(value);
  }
}
exports.pushSameValueTimes = pushSameValueTimes;
function getNumbersArray(min, max) {
  var array = [];
  for (var i = min; i <= max; ++i) {
    array.push(i.toString());
  }
  return array;
}
exports.getNumbersArray = getNumbersArray;
function repeatString(original, times) {
  var array = [];
  for (var i = 0; i <= times; ++i) {
    array.push(original);
  }
  return array.join();
}
exports.repeatString = repeatString;
function getArrayRepeatSameValue(value, times) {
  var array = [];
  for (var i = 0; i < times; ++i) {
    array.push(value);
  }
  return array;
}
exports.getArrayRepeatSameValue = getArrayRepeatSameValue;
var getI18nableWithSameContent = function (value) {
  return { en: value, zh_cn: value, zh_tw: value };
};
exports.getI18nableWithSameContent = getI18nableWithSameContent;
