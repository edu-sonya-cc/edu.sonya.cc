declare abstract class PokerBase extends BrickBase {
  constructor(appendData: object, otherComputedData: object);
  protected countDataAndComputedData: () => void;
  protected abstract countPokerDataAndComputedData(
    pokerKind: number,
    countPerPage: number,
  ): any;
  protected updateOtherDataOfPoker: (_newData: any) => void;
  protected abstract getForePageHtml(): string;
  protected abstract getBackPageHtml(): string;
  protected abstract initPokerKindElements(wrapElement: HTMLDivElement): void;
  initCoreElements: () => void;
  protected onPageSizeChanged: (newPageSize: string) => void;
  private pokerWidthElement;
  private initPokerWidthElements;
  private pokerHeightElement;
  private initPokerHeightElements;
  private fontSizeElement;
  private initFontSizeElements;
  private backFontSizeElement;
  private initBackFontSizeElements;
  protected pokerKindElementArray: Array<HTMLInputElement>;
  private appendPokerSizeButtons;
  protected updateOtherData: (newData: any) => void;
}
