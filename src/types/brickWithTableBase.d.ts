declare abstract class BrickWithTableBase extends BrickBase {
  constructor(appendData: object, otherComputedData: object);
  protected abstract createTableBodyRow(item: object): void;
  protected abstract initTableHead(): void;
  protected abstract getUsableList(): void;
  protected initCoreElementsBeforeTable: () => void;
  protected initCoreElementsAfterTable: () => void;
  protected tableWrapElement: HTMLDivElement;
  protected tableElement: HTMLTableElement;
  protected tableHeadElement: HTMLElement;
  protected tableBodyElement: HTMLElement;
  protected trHead: HTMLTableRowElement;
  protected trArray: Array<HTMLTableRowElement>;
  protected idOrClassPrefix: string;
  initCoreElements: () => void;
  protected updateOtherDataLevel3: (newData: any) => void;
  protected updateOtherData: (newData: any) => void;
  protected initUsableButtonsWrap: () => void;
  protected showDataInTable: () => void;
  protected appendTableHeadCell: (i18n: I18nable) => void;
  protected appendReadonlyTd: (
    tr: HTMLTableRowElement,
    innerHTML: string,
  ) => void;
  protected appendTextareaTd: (
    tr: HTMLTableRowElement,
    value: string,
    data: object,
    fieldName: string,
    valueKind?: "string" | "numberArray" | "stringArray",
  ) => void;
  protected appendTextboxTd: (
    tr: HTMLTableRowElement,
    value: string,
    data: object,
    fieldName: string,
  ) => void;
  protected appendCheckboxTdWithoutText: (
    tr: HTMLTableRowElement,
    value: boolean,
    data: object,
    fieldName: string,
  ) => void;
  protected appendNumberTd: (
    tr: HTMLTableRowElement,
    value: number,
    data: object,
    fieldName: string,
    min: number | null,
    max: number | null,
    step: number | null,
  ) => void;
  protected appendSelectTd: (
    tr: HTMLTableRowElement,
    value: string,
    data: object,
    fieldName: string,
    options: {
      value: string;
      captions: I18nable;
    }[],
  ) => void;
  protected appendOperationTd: (tr: HTMLTableRowElement, data: object) => void;
  protected countDataAndComputedDataInBrickWithTableBase: () => void;
}
