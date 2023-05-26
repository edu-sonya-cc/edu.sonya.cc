"use strict";
// import { BrickBase } from './brickBase.ts';
// // import { global } from '../global.ts';
// // import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage, updateUIByCurrentLang } from '../storage.ts';
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/brickBase.d.ts' />
class BrickWithTableBase extends BrickBase {
  constructor(appendData, otherComputedData) {
    super({
      list: [],
      ...appendData,
    }, {
      ...otherComputedData,
    });
  }
  initCoreElementsBeforeTable = () => {};
  initCoreElementsAfterTable = () => {};
  tableWrapElement = createElement("div");
  tableElement = createElement("table");
  tableHeadElement = createElement("thead");
  tableBodyElement = createElement("tbody");
  trHead = createElement("tr");
  trArray = [];
  idOrClassPrefix = "brickPage";
  initCoreElements = () => {
    const configCoreElement = this.configCoreElement;
    const {
      tableWrapElement,
      tableElement,
      tableHeadElement,
      tableBodyElement,
      trHead,
      idOrClassPrefix,
    } = this;
    this.initCoreElementsBeforeTable();
    this.initUsableButtonsWrap();
    configCoreElement.appendChild(tableWrapElement);
    this.initCoreElementsAfterTable();
    tableWrapElement.id = `${idOrClassPrefix}TableWrap`;
    tableWrapElement.appendChild(tableElement);
    tableElement.appendChild(tableHeadElement);
    tableElement.appendChild(tableBodyElement);
    tableHeadElement.appendChild(trHead);
    this.appendTableHeadCell({
      en: "Operations",
      zh_cn: "操作",
      zh_tw: "操作",
    });
    this.initTableHead();
  };
  updateOtherDataLevel3 = (newData) => {};
  updateOtherData = (newData) => {
    const { list } = newData;
    this.data.list.length = 0;
    list.forEach((item) => this.data.list.push(item));
    this.updateOtherDataLevel3(newData);
    this.showDataInTable();
  };
  initUsableButtonsWrap = () => {
    const configCoreElement = this.configCoreElement;
    const { idOrClassPrefix, data: { list } } = this;
    const usableButtonsWrap = createElement("div");
    configCoreElement.appendChild(usableButtonsWrap);
    usableButtonsWrap.id = `${idOrClassPrefix}UsableButtonsWrap`;
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
    this.getUsableList().forEach(({ strongI18n, buttonList }) => {
      const wrapElement = this.getWrapElement(strongI18n);
      wrapElement.setAttribute("style", "margin-bottom:1em;");
      usableButtonsWrap.appendChild(wrapElement);
      const span = createElement("span");
      span.setAttribute("style", "display:inline-flex;");
      wrapElement.appendChild(span);
      buttonList.forEach(({ nameI18n, info }) => {
        const button = createElement("button");
        span.appendChild(button);
        button.type = "button";
        button.innerHTML = getI18nInnerHTML(nameI18n);
        // usableCuisenaireRodElementArray.push(button);
        button.onclick = (event) => {
          const infoClone = JSON.parse(JSON.stringify(info));
          list.push(infoClone);
          this.createTableBodyRow(infoClone);
          this.build();
          return stopEventBubble(event);
        };
      });
    });
  };
  showDataInTable = () => {
    const { tableBodyElement, trArray, data: { list } } = this;
    tableBodyElement.innerHTML = "";
    trArray.length = 0;
    list.forEach((item, index) => {
      this.createTableBodyRow(item, tableBodyElement, index);
    });
  };
  appendTableHeadCell = (i18n) => {
    const { trHead } = this;
    const td = createElement("td");
    trHead.appendChild(td);
    td.innerHTML = getI18nInnerHTML(i18n);
  };
  appendReadonlyTd = (tr, innerHTML) => {
    const td = createElement("td");
    tr.appendChild(td);
    const span = createElement("span");
    td.appendChild(span);
    span.innerHTML = innerHTML;
  };
  appendTextareaTd = (tr, value, data, fieldName, valueKind = "string") => {
    const td = createElement("td");
    tr.appendChild(td);
    const textarea = createElement("textarea");
    td.appendChild(textarea);
    textarea.value = value;
    textarea.rows = 4;
    textarea.onchange = textarea.focus = () => {
      switch (valueKind) {
        case "numberArray":
          data[fieldName] = textarea.value.split("\n").map((value) =>
            parseFloat(value)
          );
          break;
        case "stringArray":
          data[fieldName] = textarea.value.split("\n");
          break;
        case "string":
        default:
          data[fieldName] = textarea.value;
          break;
      }
      this.build();
    };
  };
  appendTextboxTd = (tr, value, data, fieldName) => {
    const td = createElement("td");
    tr.appendChild(td);
    const input = createElement("input");
    td.appendChild(input);
    input.value = value;
    input.type = "text";
    input.onchange = input.focus = () => {
      data[fieldName] = input.value;
      this.build();
    };
  };
  appendCheckboxTdWithoutText = (tr, value, data, fieldName) => {
    const td = createElement("td");
    tr.appendChild(td);
    const checkbox = createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = fieldName;
    checkbox.checked = value;
    td.appendChild(checkbox);
    checkbox.onchange = () => {
      data[fieldName] = checkbox.checked;
      this.build();
    };
  };
  appendNumberTd = (tr, value, data, fieldName, min, max, step) => {
    const td = createElement("td");
    tr.appendChild(td);
    const input = createElement("input");
    input.type = "number";
    input.name = fieldName;
    input.value = value.toString();
    if (min) {
      input.min = min.toString();
    }
    if (max) {
      input.max = max.toString();
    }
    if (step) {
      input.step = step.toString();
    }
    td.appendChild(input);
    input.onchange = input.focus = () => {
      data[fieldName] = parseFloat(input.value);
      this.build();
    };
  };
  appendSelectTd = (tr, value, data, fieldName, options) => {
    const td = createElement("td");
    tr.appendChild(td);
    const lang = getCurrentLang();
    const select = createElement("select");
    options.forEach(({ value, captions }) => {
      const option = createElement("option");
      option.value = value;
      option.setAttribute("i18n", getI18nInnerHTML(captions));
      option.innerHTML = captions[lang];
      select.appendChild(option);
    });
    select.value = value;
    td.appendChild(select);
    select.onchange = () => {
      data[fieldName] = select.value;
      this.build();
    };
  };
  appendOperationTd = (tr, data) => {
    const td = createElement("td");
    tr.appendChild(td);
    "↑↓×".split("").forEach((caption, index) => {
      const button = createElement("button");
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
      button.onclick = (event) => {
        const { tableBodyElement } = this;
        const trList = tableBodyElement.children;
        const trCount = trList.length;
        let trIndex = -1;
        for (let i = 0; i < trCount; ++i) {
          if (trList[i] === tr) {
            trIndex = i;
            break;
          }
        }
        if (trIndex === -1) {
          return stopEventBubble(event);
        }
        const newlist = [];
        this.data.list.forEach((item) => newlist.push(item));
        switch (index) {
          case 0:
            if (trIndex === 0) {
              return stopEventBubble(event);
            }
            // newIndex = trIndex;
            // insertElement(tr, trList[trIndex - 1] as HTMLTableRowElement);
            const removeItemWhenMoveUp = newlist.splice(trIndex, 1);
            newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
            break;
          case 1:
            if (trIndex === trCount - 1) {
              return stopEventBubble(event);
            }
            // newIndex = trIndex + 1;
            // insertElement(trList[trIndex + 1] as HTMLTableRowElement, tr);
            const removeItemWhenMoveDown = newlist.splice(trIndex, 1);
            newlist.splice(trIndex + 1, 0, removeItemWhenMoveDown[0]);
            break;
          case 2:
            // tr.remove();
            newlist.splice(trIndex, 1);
            break;
          default:
            break;
        }
        this.updateOtherData({ list: newlist });
        this.build();
        return stopEventBubble(event);
      };
    });
  };
  countDataAndComputedDataInBrickWithTableBase = () => {
    const { tableHeadElement, data: { list } } = this;
    tableHeadElement.style.display = list.length
      ? "table-header-group"
      : "none";
  };
}
