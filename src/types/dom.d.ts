/**
 * <en_us>Hide html elements by setting the style sheet display to none.</en_us>
 * <zh_cn>通过设置样式表display到none，来隐藏html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到none，來隱藏html元素</zh_tw>
 * @param element
 * <en_us>The element you want to hide.</en_us>
 * <zh_cn>您想要隐藏的元素。</zh_cn>
 * <zh_tw>您想要隱藏的元素。</zh_tw>
 */
export declare function hide(element: HTMLElement): void;
/**
 * <en_us>Display html elements at block level by setting the style sheet display to block.</en_us>
 * <zh_cn>通过设置样式表display到block，来以块级方式显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到block，來以塊級方式顯示html元素</zh_tw>
 * @param element
 * <en_us>The element you want to show.</en_us>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export declare function showBlock(element: HTMLElement): void;
/**
 * <en_us>Display html elements in a row level manner by setting the style sheet display to inline block.</en_us>
 * <zh_cn>通过设置样式表display到inline-block，来以行级方式显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到inline-block，來以行級方式顯示html元素</zh_tw>
 * @param element
 * <en_us>The element you want to show.</en_us>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export declare function showInlineBlock(element: HTMLElement): void;
/**
 * <en_us>Display html elements in flexible layout by setting the style sheet display to flex.</en_us>
 * <zh_cn>通过设置样式表display到flex，来以弹性布局显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到flex，來以彈性佈局顯示html元素</zh_tw>
 * @param element
 * <en_us>The element you want to show.</en_us>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export declare function showFlex(element: HTMLElement): void;
/**
 * <en_us>Set the style sheet display to inline flex to display html elements in inline block level elastic layout.</en_us>
 * <zh_cn>通过设置样式表display到inline-flex，来以内联块级弹性布局显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到inline-flex，來以內聯塊級彈性佈局顯示html元素</zh_tw>
 * @param element
 * <en_us>The element you want to show.</en_us>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export declare function showInlineFlex(element: HTMLElement): void;
/**
 * <en_us>Get the corresponding element according to the element ID (an error will occur if there is no element with the corresponding ID)</en_us>
 * <zh_cn>根据元素id获取相应的元素（不存在相应id的元素时将出错）</zh_cn>
 * <zh_tw>根據元素id獲取相應的元素（不存在相應id的元素時將出錯）</zh_tw>
 * @param id
 * <en_us>Element id</en_us>
 * <zh_cn>元素id</zh_cn>
 * <zh_tw>元素id</zh_tw>
 * @returns
 * <en_us>Corresponding elements</en_us>
 * <zh_cn>相应html元素</zh_cn>
 * <zh_tw>相應html元素</zh_tw>
 */
export declare function getElementById(id: string): HTMLElement;
/**
 * <en_us>Get the html element through the ID and transfer it to the corresponding sub element according to the tag name.</en_us>
 * <zh_cn>通过id获取html元素并根据标签名转相应子元素。</zh_cn>
 * <zh_tw>通过id获取html元素并根据标签名转相应子元素。</zh_tw>
 * @param id
 * <en_us>Element id</en_us>
 * <zh_cn>元素id</zh_cn>
 * <zh_tw>元素id</zh_tw>
 * @param _tagName
 * <en_us>Tag name</en_us>
 * <zh_cn>标签名</zh_cn>
 * <zh_tw>標籤名</zh_tw>
 * @returns
 * <en_us>Html sub element</en_us>
 * <zh_cn>html子元素</zh_cn>
 * <zh_tw>html子元素</zh_tw>
 */
export declare function getElementByIdAndTagName<
  K extends keyof HTMLElementTagNameMap,
>(id: string, _tagName: K): HTMLElementTagNameMap[K];
/**
 * <en_us>Get all qualified elements according to the style sheet selector, and convert them to the HTMLElement node list</en_us>
 * <zh_cn>根据样式表选择器获取所有符合条件的元素，并转为HTMLElement节点清单</zh_cn>
 * <zh_tw>根據樣式表選擇器獲取所有符合條件的元素，並轉為HTMLElement節點清單</zh_tw>
 * @param selectors
 * <en_us>style sheet selector</en_us>
 * <zh_cn>样式表选择器</zh_cn>
 * <zh_tw>樣式表選擇器</zh_tw>
 * @returns
 * <en_us>List of all eligible element nodes</en_us>
 * <zh_cn>所有符合条件的元素节点清单</zh_cn>
 * <zh_tw>所有符合條件的元素節點清單</zh_tw>
 */
export declare function querySelectorAll(
  selectors: string,
): NodeListOf<HTMLElement>;
/**
 * <en_us>Get the list of all element nodes with i18n attributes, and convert the type to add i18n attributes.</en_us>
 * <zh_cn>获取所有带i18n属性的元素节点清单，转换类型以便添加i18n属性</zh_cn>
 * <zh_tw>獲取所有帶i18n内容的元素節點清單，轉換類型以便添加i18n内容</zh_tw>
 * @returns
 * <en_us>List of element nodes with i18n attributes that can be added.</en_us>
 * <zh_cn>可添加i18n属性的、带i18n属性的元素节点清单</zh_cn>
 * <zh_tw>可添加i18n内容的、帶i18n内容的元素節點清單</zh_tw>
 */
export declare function querySelectorAllByI18n(): NodeListOf<
  HTMLElement & {
    i18n: string;
  }
>;
/**
 * <en_us>Get the list of all element nodes with i18n-placeholder attributes, and convert the type to add i18nPlaceholder attributes.</en_us>
 * <zh_cn>获取所有带i18n-placeholder属性的元素节点清单，转换类型以便添加i18nPlaceholder属性</zh_cn>
 * <zh_tw>獲取所有帶i18n-placeholder内容的元素節點清單，轉換類型以便添加i18nPlaceholder内容</zh_tw>
 * @returns
 * <en_us>List of element nodes with i18n-placeholder attributes that can be added.</en_us>
 * <zh_cn>可添加i18nPlaceholder属性的、带i18n-placeholder属性的元素节点清单</zh_cn>
 * <zh_tw>可添加i18nPlaceholder内容的、帶i18n-placeholder内容的元素節點清單</zh_tw>
 */
export declare function querySelectorAllByI18nPlaceholder(): NodeListOf<
  HTMLElement & {
    i18nPlaceholder: string;
  }
>;
/**
 * <en_us>Get the corresponding element collection according to the tag name</en_us>
 * <zh_cn>根据标签名获取相应元素集合</zh_cn>
 * <zh_tw>根據標籤名獲取相應元素集合</zh_tw>
 * @param qualifiedName
 * <en_us>tag name</en_us>
 * <zh_cn>标签名</zh_cn>
 * <zh_tw>標籤名</zh_tw>
 * @returns
 * <en_us>Collection of elements signed with this tag.</en_us>
 * <zh_cn>使用此标签名的元素集合</zh_cn>
 * <zh_tw>使用此標簽名的元素集合</zh_tw>
 */
export declare function getElementsByTagName(
  qualifiedName: string,
): HTMLCollectionOf<HTMLElement>;
/**
 * <en_us>Get head element</en_us>
 * <zh_cn>获取head元素</zh_cn>
 * <zh_tw>獲取head元素</zh_tw>
 * @returns
 * <en_us>head element</en_us>
 * <zh_cn>head元素</zh_cn>
 * <zh_tw>head元素</zh_tw>
 */
export declare function getHeadElement(): HTMLHeadElement;
/**
 * <en_us>Get html element</en_us>
 * <zh_cn>获取html元素</zh_cn>
 * <zh_tw>獲取html元素</zh_tw>
 * @returns
 * <en_us>html element</en_us>
 * <zh_cn>html元素</zh_cn>
 * <zh_tw>html元素</zh_tw>
 */
export declare function getHtmlElement(): HTMLHtmlElement;
/**
 * <en_us>Get body element</en_us>
 * <zh_cn>获取body元素</zh_cn>
 * <zh_tw>獲取body元素</zh_tw>
 * @returns
 * <en_us>body element</en_us>
 * <zh_cn>body元素</zh_cn>
 * <zh_tw>body元素</zh_tw>
 */
export declare function getBodyElement(): HTMLBodyElement;
/**
 * <en_us>Get title element</en_us>
 * <zh_cn>获取title元素</zh_cn>
 * <zh_tw>獲取title元素</zh_tw>
 * @returns
 * <en_us>title element</en_us>
 * <zh_cn>title元素</zh_cn>
 * <zh_tw>title元素</zh_tw>
 */
export declare function getTitleElement(): HTMLTitleElement & {
  i18n?: {
    en_us: string;
    zh_cn: string;
    zh_tw: string;
  };
};
/**
 * <en_us>Get header element</en_us>
 * <zh_cn>获取header元素</zh_cn>
 * <zh_tw>獲取header元素</zh_tw>
 * @returns
 * <en_us>The header element, because there is no HTMLHeaderElement object, has to use a similar HTMLDivElement.</en_us>
 * <zh_cn>header元素，因没有HTMLHeaderElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>header元素，因沒有HTMLHeaderElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
export declare function getHeaderElement(): HTMLDivElement;
/**
 * <en_us>Get footer element</en_us>
 * <zh_cn>获取footer元素</zh_cn>
 * <zh_tw>獲取footer元素</zh_tw>
 * @returns
 * <en_us>The footer element, because there is no HTMLFooterElement object, has to use a similar HTMLDivElement.</en_us>
 * <zh_cn>footer元素，因没有HTMLFooterElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>footer元素，因沒有HTMLFooterElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
export declare function getFooterElement(): HTMLDivElement;
/**
 * <en_us>Get main element</en_us>
 * <zh_cn>获取main元素</zh_cn>
 * <zh_tw>獲取main元素</zh_tw>
 * @returns
 * <en_us>The main element, because there is no HTMLMainElement object, has to use a similar HTMLDivElement.</en_us>
 * <zh_cn>main元素，因没有HTMLMainElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>main元素，因沒有HTMLMainElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
export declare function getMainElement(): HTMLDivElement;
/**
 * <en_us>Creates an element of the specified tag name.</en_us>
 * <zh_cn>创建指定标签的元素</zh_cn>
 * <zh_tw>創建指定標籤的元素</zh_tw>
 * @param tagName
 * <en_us>tag name</en_us>
 * <zh_cn>标签</zh_cn>
 * <zh_tw>標籤</zh_tw>
 * @param options
 * <en_us>Optional parameters</en_us>
 * <zh_cn>可选参数</zh_cn>
 * <zh_tw>可選參數</zh_tw>
 * @returns
 * <en_us>New Elements</en_us>
 * <zh_cn>新元素</zh_cn>
 * <zh_tw>新元素</zh_tw>
 */
export declare function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions,
): HTMLElementTagNameMap[K];
/**
 * <en_us>Set the attbibutes for a element.</en_us>
 * <zh_cn>设置a元素的属性</zh_cn>
 * <zh_tw>設置a元素的屬性</zh_tw>
 * @param aElement
 * <en_us>a element</en_us>
 * <zh_cn>a元素</zh_cn>
 * <zh_tw>a元素</zh_tw>
 * @param href
 * <en_us>link</en_us>
 * <zh_cn>链接</zh_cn>
 * <zh_tw>鏈接</zh_tw>
 */
export declare function setAttributesOfA(
  aElement: HTMLAnchorElement,
  link: string,
): void;
/**
 * <en_us>map: string to onclick function</en_us>
 * <zh_cn>映射：字符串到onclick方法</zh_cn>
 * <zh_tw>映像：字串到onclick方法</zh_tw>
 */
export interface OnclickFunctionMap {
  [index: string]:
    | ((this: GlobalEventHandlers, ev: MouseEvent) => void | boolean)
    | null;
}
/**
 * <en_us>Stop the event bubble</en_us>
 * <zh_cn>停止事件冒泡</zh_cn>
 * <zh_tw>停止事件冒泡</zh_tw>
 * @param event
 * <en_us>event</en_us>
 * <zh_cn>事件</zh_cn>
 * <zh_tw>事件</zh_tw>
 */
export declare function stopEventBubble(event: Event): boolean;
/**
 * <en_us>Get html from i18n data</en_us>
 * <zh_cn>以i18n数据获取html</zh_cn>
 * <zh_tw>以i18n數據獲取html</zh_tw>
 * @param i18n
 * <en_us>i18n data</en_us>
 * <zh_cn>i18n数据</zh_cn>
 * <zh_tw>i18n數據</zh_tw>
 */
export declare function getI18nInnerHTML({ en_us, zh_cn, zh_tw }: {
  en_us: string;
  zh_cn: string;
  zh_tw: string;
}): string;
export declare const MONTH_NAME_ARRAY: string[];
/**
 * <en_us>Transfer date is i18n html</en_us>
 * <zh_cn>转日期为i18n html</zh_cn>
 * <zh_tw>轉日期為i18n html</zh_tw>
 * @param date
 * <en_us>Date</en_us>
 * <zh_cn>日期</zh_cn>
 * <zh_tw>日期</zh_tw>
 */
export declare function getI18nInnerHTMLFromDate(date: Date): string;
/**
 * <en_us>Internationalizable</en_us>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
export interface I18nable {
  en_us: string;
  zh_cn: string;
  zh_tw: string;
}
export interface PlaceholderI18nable {
  [lang: string]: string;
}
