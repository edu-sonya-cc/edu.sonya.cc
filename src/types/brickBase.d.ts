export declare abstract class BrickBase implements IBrickCore {
  abstract loadConfigFromLocal(): void;
  protected brickBaseIdPrefix: string;
  protected reporterKindProperty: string;
  download: () => void;
  print: () => void;
  protected abstract countDataAndComputedData(): void;
  protected updateOtherData: (newData: any) => void;
  protected initCoreElements: () => void;
  protected initOtherElements: () => void;
  protected onPageSizeChanged: (newPageSize: string) => void;
  protected getCss: () => string;
  protected getHtml: () => string;
  constructor(
    appendData: object,
    otherComputedData: object,
    newPageSizeArray?: Array<string>,
  );
  protected data: {
    paperSize: string;
    isLandscape: boolean;
    maxX: number;
    maxY: number;
    pageMarginTop: number;
    pageMarginBottom: number;
    pageMarginLeft: number;
    pageMarginRight: number;
  };
  protected DEFAULT_DATA_JSON: string;
  protected computedData: {
    title: {
      en_us: string;
      zh_cn: string;
      zh_tw: string;
    };
    css: string;
    html: string;
  };
  protected pageSizeArray: Array<string>;
  protected configCoreElement: HTMLDivElement;
  init: () => void;
  protected getWrapElement: (strongI18n: I18nable) => HTMLDivElement;
  protected onRadioOptionChanged: (
    propertyName: string,
    value: string | boolean | number,
  ) => void;
  protected initTextboxElement: (
    labelI18n: I18nable | null,
    propertyName: string,
    textboxElement: HTMLInputElement,
    wrapElement: HTMLDivElement,
  ) => void;
  protected initTextareaElement: (
    labelI18n: I18nable | null,
    propertyName: string,
    textareaElement: HTMLTextAreaElement,
    wrapElement: HTMLDivElement,
  ) => void;
  protected initRadioGroupByStringValue: (
    radiosInfoArray: {
      value: string;
      i18nHtml: string;
    }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapElement: HTMLDivElement,
  ) => void;
  protected initRadioGroupWithLabelByStringValue: (
    radiosInfoArray: {
      value: string;
      i18nHtml: string;
    }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapLabelI18n: I18nable,
  ) => void;
  protected initRadioGroupByBooleanOrNumberValue: (
    radiosInfoArray: {
      value: boolean | number;
      i18nHtml: string;
    }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapElement: HTMLDivElement,
  ) => void;
  protected initRadioGroupWithLabelByBooleanOrNumberValue: (
    radiosInfoArray: {
      value: boolean | number;
      i18nHtml: string;
    }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapLabelI18n: I18nable,
  ) => void;
  protected paperSizeRadioArray: Array<HTMLInputElement>;
  protected initPaperSizeElements: (wrapElement: HTMLDivElement) => void;
  protected isLandscapeRadioArray: Array<HTMLInputElement>;
  private initIsLandscapeElements;
  protected pageMarginTopElement: HTMLInputElement;
  private initPageMarginTopElements;
  protected pageMarginBottomElement: HTMLInputElement;
  private initPageMarginBottomElements;
  protected pageMarginLeftElement: HTMLInputElement;
  private initPageMarginLeftElements;
  protected pageMarginRightElement: HTMLInputElement;
  private initPageMarginRightElements;
  build: () => void;
  protected mmToPxScale: number;
  protected pxToMmScale: number;
  loadConfig: () => void;
  saveConfig: () => void;
  loadDefaultConfig: () => void;
  getData: () => object;
  setData: (newData: object) => void;
  protected readonly buildAfterChangeParameter = true;
  saveConfigAndBuildIfAllowed: () => void;
  protected updateData: (newData: any) => void;
  protected getAutomaticPaginationHtmlFromChildList: (
    list: Array<SVGElement | HTMLDivElement>,
    MAX_X: number,
    MAX_Y: number,
    pageClass?: string,
  ) => string;
  protected appendAutomaticPaginationControls: (
    wrapper: HTMLDivElement,
    list: Array<SVGElement | HTMLDivElement>,
    MAX_X: number,
    MAX_Y: number,
  ) => void;
  protected formatDecile: (length: number) => number;
  protected formatCentile: (length: number) => number;
  protected formatMillimeter: (length: number) => number;
}
