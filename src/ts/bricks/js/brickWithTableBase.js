// import { BrickBase } from './brickBase.ts';
// // import { global } from '../global.ts';
// // import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage, updateUIByCurrentLang } from '../storage.ts';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/brickBase.d.ts' />
var BrickWithTableBase = /** @class */ (function (_super) {
    __extends(BrickWithTableBase, _super);
    function BrickWithTableBase(appendData, otherComputedData) {
        var _this = _super.call(this, __assign({ list: [] }, appendData), __assign({}, otherComputedData)) || this;
        _this.initCoreElementsBeforeTable = function () { };
        _this.initCoreElementsAfterTable = function () { };
        _this.tableWrapElement = createElement("div");
        _this.tableElement = createElement("table");
        _this.tableHeadElement = createElement("thead");
        _this.tableBodyElement = createElement("tbody");
        _this.trHead = createElement("tr");
        _this.trArray = [];
        _this.idOrClassPrefix = "brickPage";
        _this.initCoreElements = function () {
            var configCoreElement = _this.configCoreElement;
            var _a = _this, tableWrapElement = _a.tableWrapElement, tableElement = _a.tableElement, tableHeadElement = _a.tableHeadElement, tableBodyElement = _a.tableBodyElement, trHead = _a.trHead, idOrClassPrefix = _a.idOrClassPrefix;
            _this.initCoreElementsBeforeTable();
            _this.initUsableButtonsWrap();
            configCoreElement.appendChild(tableWrapElement);
            _this.initCoreElementsAfterTable();
            tableWrapElement.id = idOrClassPrefix + "TableWrap";
            tableWrapElement.appendChild(tableElement);
            tableElement.appendChild(tableHeadElement);
            tableElement.appendChild(tableBodyElement);
            tableHeadElement.appendChild(trHead);
            _this.appendTableHeadCell({
                en_us: "Operations",
                zh_cn: "操作",
                zh_tw: "操作"
            });
            _this.initTableHead();
        };
        _this.updateOtherDataLevel3 = function (newData) { };
        _this.updateOtherData = function (newData) {
            var list = newData.list;
            _this.data.list.length = 0;
            list.forEach(function (item) { return _this.data.list.push(item); });
            _this.updateOtherDataLevel3(newData);
            _this.showDataInTable();
        };
        _this.initUsableButtonsWrap = function () {
            var configCoreElement = _this.configCoreElement;
            var _a = _this, idOrClassPrefix = _a.idOrClassPrefix, list = _a.data.list;
            var usableButtonsWrap = createElement("div");
            configCoreElement.appendChild(usableButtonsWrap);
            usableButtonsWrap.id = idOrClassPrefix + "UsableButtonsWrap";
            // this.getUsableList().forEach(({ nameI18n, info }) => {
            //   const button = createElement('button') as HTMLButtonElement;
            //   usableButtonsWrap.appendChild(button);
            //   button.type = 'button';
            //   button.innerHTML = getI18nInnerHTML(nameI18n);
            //   // usableCuisenaireRodElementArray.push(button);
            //   button.onclick = (event: Event): boolean => {
            //     list.push(info);
            //     this.createTableBodyRow(info);
            //     this.build();
            //     return stopEventBubble(event);
            //   }
            // });
            // Array<{ strongI18n: I18nable, list: Array<{ nameI18n: I18nable , info: MultiplicationTableInfo }> }>
            _this.getUsableList().forEach(function (_a) {
                var strongI18n = _a.strongI18n, buttonList = _a.buttonList;
                var wrapElement = _this.getWrapElement(strongI18n);
                wrapElement.setAttribute("style", "margin-bottom:1em;");
                usableButtonsWrap.appendChild(wrapElement);
                var span = createElement("span");
                span.setAttribute("style", "display:inline-flex;");
                wrapElement.appendChild(span);
                buttonList.forEach(function (_a) {
                    var nameI18n = _a.nameI18n, info = _a.info;
                    var button = createElement("button");
                    span.appendChild(button);
                    button.type = "button";
                    button.innerHTML = getI18nInnerHTML(nameI18n);
                    // usableCuisenaireRodElementArray.push(button);
                    button.onclick = function (event) {
                        var infoClone = JSON.parse(JSON.stringify(info));
                        list.push(infoClone);
                        _this.createTableBodyRow(infoClone);
                        _this.build();
                        return stopEventBubble(event);
                    };
                });
            });
        };
        _this.showDataInTable = function () {
            var _a = _this, tableBodyElement = _a.tableBodyElement, trArray = _a.trArray, list = _a.data.list;
            tableBodyElement.innerHTML = "";
            trArray.length = 0;
            list.forEach(function (item, index) {
                _this.createTableBodyRow(item, tableBodyElement, index);
            });
        };
        _this.appendTableHeadCell = function (i18n) {
            var trHead = _this.trHead;
            var td = createElement("td");
            trHead.appendChild(td);
            td.innerHTML = getI18nInnerHTML(i18n);
        };
        _this.appendReadonlyTd = function (tr, innerHTML) {
            var td = createElement("td");
            tr.appendChild(td);
            var span = createElement("span");
            td.appendChild(span);
            span.innerHTML = innerHTML;
        };
        _this.appendTextareaTd = function (tr, value, data, fieldName, valueKind) {
            if (valueKind === void 0) { valueKind = "string"; }
            var td = createElement("td");
            tr.appendChild(td);
            var textarea = createElement("textarea");
            td.appendChild(textarea);
            textarea.value = value;
            textarea.rows = 4;
            textarea.onchange = textarea.focus = function () {
                switch (valueKind) {
                    case "numberArray":
                        data[fieldName] = textarea.value.split("\n").map(function (value) {
                            return parseFloat(value);
                        });
                        break;
                    case "stringArray":
                        data[fieldName] = textarea.value.split("\n");
                        break;
                    case "string":
                    default:
                        data[fieldName] = textarea.value;
                        break;
                }
                _this.build();
            };
        };
        _this.appendTextboxTd = function (tr, value, data, fieldName) {
            var td = createElement("td");
            tr.appendChild(td);
            var input = createElement("input");
            td.appendChild(input);
            input.value = value;
            input.type = "text";
            input.onchange = input.focus = function () {
                data[fieldName] = input.value;
                _this.build();
            };
        };
        _this.appendCheckboxTdWithoutText = function (tr, value, data, fieldName) {
            var td = createElement("td");
            tr.appendChild(td);
            var checkbox = createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = fieldName;
            checkbox.checked = value;
            td.appendChild(checkbox);
            checkbox.onchange = function () {
                data[fieldName] = checkbox.checked;
                _this.build();
            };
        };
        _this.appendNumberTd = function (tr, value, data, fieldName, min, max, step) {
            var td = createElement("td");
            tr.appendChild(td);
            var input = createElement("input");
            input.type = "number";
            input.name = fieldName;
            input.value = value.toString();
            if (min)
                input.min = min.toString();
            if (max)
                input.max = max.toString();
            if (step)
                input.step = step.toString();
            td.appendChild(input);
            input.onchange = input.focus = function () {
                data[fieldName] = parseFloat(input.value);
                _this.build();
            };
        };
        _this.appendSelectTd = function (tr, value, data, fieldName, options) {
            var td = createElement("td");
            tr.appendChild(td);
            var lang = getCurrentLang();
            var select = createElement("select");
            options.forEach(function (_a) {
                var value = _a.value, captions = _a.captions;
                var option = createElement("option");
                option.value = value;
                option.setAttribute("i18n", getI18nInnerHTML(captions));
                option.innerHTML = captions[lang];
                select.appendChild(option);
            });
            select.value = value;
            td.appendChild(select);
            select.onchange = function () {
                data[fieldName] = select.value;
                _this.build();
            };
        };
        _this.appendOperationTd = function (tr, data) {
            var td = createElement("td");
            tr.appendChild(td);
            "↑↓×".split("").forEach(function (caption, index) {
                var button = createElement("button");
                td.appendChild(button);
                button.type = "button";
                button.innerHTML = caption;
                if (index === 2) {
                    button.className = "warning";
                }
                // https://www.cnblogs.com/ybhome/p/12886988.html
                // https://blog.csdn.net/longlongxue/article/details/7988196
                // const insertElement = (prevElement: HTMLElement, nextElement: HTMLElement) => {
                //   nextElement.insertAdjacentElement('beforebegin' as InsertPosition, prevElement);
                // };
                button.onclick = function (event) {
                    var tableBodyElement = _this.tableBodyElement;
                    var trList = tableBodyElement.children;
                    var trCount = trList.length;
                    var trIndex = -1;
                    for (var i = 0; i < trCount; ++i) {
                        if (trList[i] === tr) {
                            trIndex = i;
                            break;
                        }
                    }
                    if (trIndex === -1)
                        return stopEventBubble(event);
                    var newlist = [];
                    _this.data.list.forEach(function (item) { return newlist.push(item); });
                    switch (index) {
                        case 0:
                            if (trIndex === 0)
                                return stopEventBubble(event);
                            // newIndex = trIndex;
                            // insertElement(tr, trList[trIndex - 1] as HTMLTableRowElement);
                            var removeItemWhenMoveUp = newlist.splice(trIndex, 1);
                            newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
                            break;
                        case 1:
                            if (trIndex === trCount - 1)
                                return stopEventBubble(event);
                            // newIndex = trIndex + 1;
                            // insertElement(trList[trIndex + 1] as HTMLTableRowElement, tr);
                            var removeItemWhenMoveDown = newlist.splice(trIndex, 1);
                            newlist.splice(trIndex + 1, 0, removeItemWhenMoveDown[0]);
                            break;
                        case 2:
                            // tr.remove();
                            newlist.splice(trIndex, 1);
                            break;
                        default:
                            break;
                    }
                    _this.updateOtherData({ list: newlist });
                    _this.build();
                    return stopEventBubble(event);
                };
            });
        };
        _this.countDataAndComputedDataInBrickWithTableBase = function () {
            var _a = _this, tableHeadElement = _a.tableHeadElement, list = _a.data.list;
            tableHeadElement.style.display = list.length
                ? "table-header-group"
                : "none";
        };
        return _this;
    }
    return BrickWithTableBase;
}(BrickBase));
