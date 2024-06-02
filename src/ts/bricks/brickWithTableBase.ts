// import { BrickBase } from './brickBase.ts';
// // import { global } from '../global.ts';
// // import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage, updateUIByCurrentLang } from '../storage.ts';

/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/brickBase.d.ts' />

abstract class BrickWithTableBase extends BrickBase {
  constructor(appendData: object, otherComputedData: object) {
    super({
      list: [],
      ...appendData,
    }, {
      ...otherComputedData,
    });
  }

  protected abstract createTableBodyRow(item: object): void;
  protected abstract initTableHead(): void;
  protected abstract getUsableList(): void;

  protected initCoreElementsBeforeTable = (): void => {};
  protected initCoreElementsAfterTable = (): void => {};

  protected tableWrapElement = createElement("div") as HTMLDivElement;
  protected tableElement = createElement("table") as HTMLTableElement;
  protected tableHeadElement = createElement("thead") as HTMLElement;
  protected tableBodyElement = createElement("tbody") as HTMLElement;
  protected trHead = createElement("tr") as HTMLTableRowElement;
  protected trArray: Array<HTMLTableRowElement> = [];

  protected idOrClassPrefix = "brickPage";
  public initCoreElements = (): void => {
    const configCoreElement = this.configCoreElement as HTMLDivElement;
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
      en_us: "Operations",
      zh_cn: "操作",
      zh_tw: "操作",
    });
    this.initTableHead();
  };

  protected updateOtherDataLevel3 = (newData: any): void => {};
  protected updateOtherData = (newData: any): void => {
    const {
      list,
    } = newData;

    this.data.list.length = 0;
    list.forEach((item: object) => this.data.list.push(item));

    this.updateOtherDataLevel3(newData);

    this.showDataInTable();
  };

  protected initUsableButtonsWrap = (): void => {
    const configCoreElement = this.configCoreElement as HTMLDivElement;
    const { idOrClassPrefix, data: { list } } = this;

    const usableButtonsWrap = createElement("div") as HTMLDivElement;
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

      const span = createElement("span") as HTMLSpanElement;
      span.setAttribute("style", "display:inline-flex;");
      wrapElement.appendChild(span);

      buttonList.forEach(({ nameI18n, info }) => {
        const button = createElement("button") as HTMLButtonElement;
        span.appendChild(button);

        button.type = "button";
        button.innerHTML = getI18nInnerHTML(nameI18n);
        // usableCuisenaireRodElementArray.push(button);

        button.onclick = (event: Event): boolean => {
          const infoClone = JSON.parse(JSON.stringify(info));
          list.push(infoClone);
          this.createTableBodyRow(infoClone);
          this.build();

          return stopEventBubble(event);
        };
      });
    });
  };

  protected showDataInTable = (): void => {
    const { tableBodyElement, trArray, data: { list } } = this;
    tableBodyElement.innerHTML = "";
    trArray.length = 0;

    list.forEach((item, index) => {
      this.createTableBodyRow(item, tableBodyElement, index);
    });
  };

  protected appendTableHeadCell = (i18n: I18nable): void => {
    const { trHead } = this;

    const td = createElement("td") as HTMLTableCellElement;
    trHead.appendChild(td);
    td.innerHTML = getI18nInnerHTML(i18n);
  };

  protected appendReadonlyTd = (
    tr: HTMLTableRowElement,
    innerHTML: string,
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    const span = createElement("span") as HTMLSpanElement;
    td.appendChild(span);
    span.innerHTML = innerHTML;
  };

  protected appendTextareaTd = (
    tr: HTMLTableRowElement,
    value: string,
    data: object,
    fieldName: string,
    valueKind: "string" | "numberArray" | "stringArray" = "string",
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    const textarea = createElement("textarea") as HTMLTextAreaElement;
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

  protected appendTextboxTd = (
    tr: HTMLTableRowElement,
    value: string,
    data: object,
    fieldName: string,
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    const input = createElement("input") as HTMLInputElement;
    td.appendChild(input);

    input.value = value;
    input.type = "text";

    input.onchange = input.focus = () => {
      data[fieldName] = input.value;
      this.build();
    };
  };

  protected appendCheckboxTdWithoutText = (
    tr: HTMLTableRowElement,
    value: boolean,
    data: object,
    fieldName: string,
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    const checkbox = createElement("input") as HTMLInputElement;
    checkbox.type = "checkbox";
    checkbox.name = fieldName;
    checkbox.checked = value;
    td.appendChild(checkbox);

    checkbox.onchange = () => {
      data[fieldName] = checkbox.checked;
      this.build();
    };
  };

  protected appendNumberTd = (
    tr: HTMLTableRowElement,
    value: number,
    data: object,
    fieldName: string,
    min: number | null,
    max: number | null,
    step: number | null,
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    const input = createElement("input") as HTMLInputElement;
    input.type = "number";
    input.name = fieldName;
    input.value = value.toString();
    if (min) input.min = min.toString();
    if (max) input.max = max.toString();
    if (step) input.step = step.toString();
    td.appendChild(input);

    input.onchange = input.focus = () => {
      data[fieldName] = parseFloat(input.value);
      this.build();
    };
  };

  protected appendSelectTd = (
    tr: HTMLTableRowElement,
    value: string,
    data: object,
    fieldName: string,
    options: Array<{ value: string; captions: I18nable }>,
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    const lang = getCurrentLang();
    const select = createElement("select") as HTMLSelectElement;
    options.forEach(({ value, captions }) => {
      const option = createElement("option") as HTMLOptionElement;
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

  protected appendOperationTd = (
    tr: HTMLTableRowElement,
    data: object,
  ): void => {
    const td = createElement("td") as HTMLTableCellElement;
    tr.appendChild(td);

    "↑↓×".split("").forEach((caption: string, index: number) => {
      const button = createElement("button") as HTMLButtonElement;
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

      button.onclick = (event: Event) => {
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
        if (trIndex === -1) return stopEventBubble(event);

        const newlist: Array<object> = [];
        this.data.list.forEach((item: object) => newlist.push(item));

        switch (index) {
          case 0:
            if (trIndex === 0) return stopEventBubble(event);
            // newIndex = trIndex;
            // insertElement(tr, trList[trIndex - 1] as HTMLTableRowElement);
            const removeItemWhenMoveUp = newlist.splice(trIndex, 1);
            newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
            break;
          case 1:
            if (trIndex === trCount - 1) return stopEventBubble(event);
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

  protected countDataAndComputedDataInBrickWithTableBase = (): void => {
    const { tableHeadElement, data: { list } } = this;
    tableHeadElement.style.display = list.length
      ? "table-header-group"
      : "none";
  };
}
