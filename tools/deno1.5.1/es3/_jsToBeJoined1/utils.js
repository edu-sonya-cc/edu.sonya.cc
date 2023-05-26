System.register("utils", [], function (exports_1, context_1) {
    "use strict";
    var convertDateToYYYYMMDD_hhmmss, getI18nableWithSameContent;
    var __moduleName = context_1 && context_1.id;
    function pushSameValueTimes(array, value, times) {
        for (var i = 0; i < times; ++i) {
            array.push(value);
        }
    }
    exports_1("pushSameValueTimes", pushSameValueTimes);
    function getNumbersArray(min, max) {
        var array = [];
        for (var i = min; i <= max; ++i) {
            array.push(i.toString());
        }
        return array;
    }
    exports_1("getNumbersArray", getNumbersArray);
    function repeatString(original, times) {
        var array = [];
        for (var i = 0; i <= times; ++i) {
            array.push(original);
        }
        return array.join();
    }
    exports_1("repeatString", repeatString);
    function getArrayRepeatSameValue(value, times) {
        var array = [];
        for (var i = 0; i < times; ++i) {
            array.push(value);
        }
        return array;
    }
    exports_1("getArrayRepeatSameValue", getArrayRepeatSameValue);
    return {
        setters: [],
        execute: function () {
            exports_1("convertDateToYYYYMMDD_hhmmss", convertDateToYYYYMMDD_hhmmss = function (date) {
                return ("" + date.getFullYear() + "0".concat((date.getMonth() + 1).toString()).substr(-2) + "0".concat((date.getDate()).toString()).substr(-2)).concat("_" + "0".concat((date.getHours()).toString()).substr(-2) + "0".concat((date.getMinutes()).toString()).substr(-2) + "0".concat((date.getSeconds()).toString()).substr(-2));
            });
            exports_1("getI18nableWithSameContent", getI18nableWithSameContent = function (value) {
                return { en: value, zh_cn: value, zh_tw: value };
            });
        }
    };
});

__exp = __instantiate("utils", false);
const pushSameValueTimes = __exp["pushSameValueTimes"];
const getNumbersArray = __exp["getNumbersArray"];
const repeatString = __exp["repeatString"];
const getArrayRepeatSameValue = __exp["getArrayRepeatSameValue"];
const convertDateToYYYYMMDD_hhmmss = __exp["convertDateToYYYYMMDD_hhmmss"];
const getI18nableWithSameContent = __exp["getI18nableWithSameContent"];

