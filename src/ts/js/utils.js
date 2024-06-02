"use strict";
// import { I18nable } from './dom';
exports.__esModule = true;
exports.getI18nableWithSameContent = exports.getArrayRepeatSameValue = exports.repeatString = exports.getNumbersArray = exports.pushSameValueTimes = exports.convertDateToYYYYMMDD_hhmmss = void 0;
/// <reference path='../types/dom.d.ts' />
exports.convertDateToYYYYMMDD_hhmmss = function (date) {
    return ("" + date.getFullYear() + "0".concat((date.getMonth() + 1).toString()).substr(-2) + "0".concat((date.getDate()).toString()).substr(-2)).concat("_" + "0".concat((date.getHours()).toString()).substr(-2) + "0".concat((date.getMinutes()).toString()).substr(-2) + "0".concat((date.getSeconds()).toString()).substr(-2));
};
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
exports.getI18nableWithSameContent = function (value) {
    return { en_us: value, zh_cn: value, zh_tw: value };
};
