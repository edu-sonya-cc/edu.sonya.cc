"use strict";
/**
 * <en>Hide html elements by setting the style sheet display to none.</en>
 * <zh_cn>通过设置样式表display到none，来隐藏html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到none，來隱藏html元素</zh_tw>
 * @param element
 * <en>The element you want to hide.</en>
 * <zh_cn>您想要隐藏的元素。</zh_cn>
 * <zh_tw>您想要隱藏的元素。</zh_tw>
 */
function hide(element) {
  if (element) {
    element.style.display = "none";
  }
}
exports.hide = hide;
/**
 * <en>Display html elements at block level by setting the style sheet display to block.</en>
 * <zh_cn>通过设置样式表display到block，来以块级方式显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到block，來以塊級方式顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
function showBlock(element) {
  if (element) {
    element.style.display = "block";
  }
}
exports.showBlock = showBlock;
/**
 * <en>Display html elements in a row level manner by setting the style sheet display to inline block.</en>
 * <zh_cn>通过设置样式表display到inline-block，来以行级方式显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到inline-block，來以行級方式顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
function showInlineBlock(element) {
  if (element) {
    element.style.display = "inline-block";
  }
}
exports.showInlineBlock = showInlineBlock;
/**
 * <en>Display html elements in flexible layout by setting the style sheet display to flex.</en>
 * <zh_cn>通过设置样式表display到flex，来以弹性布局显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到flex，來以彈性佈局顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
function showFlex(element) {
  if (element) {
    element.style.display = "flex";
  }
}
exports.showFlex = showFlex;
/**
 * <en>Set the style sheet display to inline flex to display html elements in inline block level elastic layout.</en>
 * <zh_cn>通过设置样式表display到inline-flex，来以内联块级弹性布局显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到inline-flex，來以內聯塊級彈性佈局顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
function showInlineFlex(element) {
  if (element) {
    element.style.display = "inline-flex";
  }
}
exports.showInlineFlex = showInlineFlex;
/**
 * <en>Get the corresponding element according to the element ID (an error will occur if there is no element with the corresponding ID)</en>
 * <zh_cn>根据元素id获取相应的元素（不存在相应id的元素时将出错）</zh_cn>
 * <zh_tw>根據元素id獲取相應的元素（不存在相應id的元素時將出錯）</zh_tw>
 * @param id
 * <en>Element id</en>
 * <zh_cn>元素id</zh_cn>
 * <zh_tw>元素id</zh_tw>
 * @returns
 * <en>Corresponding elements</en>
 * <zh_cn>相应html元素</zh_cn>
 * <zh_tw>相應html元素</zh_tw>
 */
function getElementById(id) {
  return document.getElementById(id);
}
exports.getElementById = getElementById;
/**
 * <en>Get the html element through the ID and transfer it to the corresponding sub element according to the tag name.</en>
 * <zh_cn>通过id获取html元素并根据标签名转相应子元素。</zh_cn>
 * <zh_tw>通过id获取html元素并根据标签名转相应子元素。</zh_tw>
 * @param id
 * <en>Element id</en>
 * <zh_cn>元素id</zh_cn>
 * <zh_tw>元素id</zh_tw>
 * @param _tagName
 * <en>Tag name</en>
 * <zh_cn>标签名</zh_cn>
 * <zh_tw>標籤名</zh_tw>
 * @returns
 * <en>Html sub element</en>
 * <zh_cn>html子元素</zh_cn>
 * <zh_tw>html子元素</zh_tw>
 */
function getElementByIdAndTagName(id, _tagName) {
  return document.getElementById(id);
}
exports.getElementByIdAndTagName = getElementByIdAndTagName;
/**
 * <en>Get all qualified elements according to the style sheet selector, and convert them to the HTMLElement node list</en>
 * <zh_cn>根据样式表选择器获取所有符合条件的元素，并转为HTMLElement节点清单</zh_cn>
 * <zh_tw>根據樣式表選擇器獲取所有符合條件的元素，並轉為HTMLElement節點清單</zh_tw>
 * @param selectors
 * <en>style sheet selector</en>
 * <zh_cn>样式表选择器</zh_cn>
 * <zh_tw>樣式表選擇器</zh_tw>
 * @returns
 * <en>List of all eligible element nodes</en>
 * <zh_cn>所有符合条件的元素节点清单</zh_cn>
 * <zh_tw>所有符合條件的元素節點清單</zh_tw>
 */
function querySelectorAll(selectors) {
  return document.querySelectorAll(selectors);
}
exports.querySelectorAll = querySelectorAll;
/**
 * <en>Get the list of all element nodes with i18n attributes, and convert the type to add i18n attributes.</en>
 * <zh_cn>获取所有带i18n属性的元素节点清单，转换类型以便添加i18n属性</zh_cn>
 * <zh_tw>獲取所有帶i18n内容的元素節點清單，轉換類型以便添加i18n内容</zh_tw>
 * @returns
 * <en>List of element nodes with i18n attributes that can be added.</en>
 * <zh_cn>可添加i18n属性的、带i18n属性的元素节点清单</zh_cn>
 * <zh_tw>可添加i18n内容的、帶i18n内容的元素節點清單</zh_tw>
 */
function querySelectorAllByI18n() {
  return document.querySelectorAll("[i18n]");
}
exports.querySelectorAllByI18n = querySelectorAllByI18n;
/**
 * <en>Get the list of all element nodes with i18n-placeholder attributes, and convert the type to add i18nPlaceholder attributes.</en>
 * <zh_cn>获取所有带i18n-placeholder属性的元素节点清单，转换类型以便添加i18nPlaceholder属性</zh_cn>
 * <zh_tw>獲取所有帶i18n-placeholder内容的元素節點清單，轉換類型以便添加i18nPlaceholder内容</zh_tw>
 * @returns
 * <en>List of element nodes with i18n-placeholder attributes that can be added.</en>
 * <zh_cn>可添加i18nPlaceholder属性的、带i18n-placeholder属性的元素节点清单</zh_cn>
 * <zh_tw>可添加i18nPlaceholder内容的、帶i18n-placeholder内容的元素節點清單</zh_tw>
 */
function querySelectorAllByI18nPlaceholder() {
  return document.querySelectorAll("[i18n-placeholder]");
}
exports.querySelectorAllByI18nPlaceholder = querySelectorAllByI18nPlaceholder;
/**
 * <en>Get the corresponding element collection according to the tag name</en>
 * <zh_cn>根据标签名获取相应元素集合</zh_cn>
 * <zh_tw>根據標籤名獲取相應元素集合</zh_tw>
 * @param qualifiedName
 * <en>tag name</en>
 * <zh_cn>标签名</zh_cn>
 * <zh_tw>標籤名</zh_tw>
 * @returns
 * <en>Collection of elements signed with this tag.</en>
 * <zh_cn>使用此标签名的元素集合</zh_cn>
 * <zh_tw>使用此標簽名的元素集合</zh_tw>
 */
function getElementsByTagName(qualifiedName) {
  return document.getElementsByTagName(qualifiedName);
}
exports.getElementsByTagName = getElementsByTagName;
/**
 * <en>Get head element</en>
 * <zh_cn>获取head元素</zh_cn>
 * <zh_tw>獲取head元素</zh_tw>
 * @returns
 * <en>head element</en>
 * <zh_cn>head元素</zh_cn>
 * <zh_tw>head元素</zh_tw>
 */
function getHeadElement() {
  return document.getElementsByTagName("head")[0];
}
exports.getHeadElement = getHeadElement;
/**
 * <en>Get html element</en>
 * <zh_cn>获取html元素</zh_cn>
 * <zh_tw>獲取html元素</zh_tw>
 * @returns
 * <en>html element</en>
 * <zh_cn>html元素</zh_cn>
 * <zh_tw>html元素</zh_tw>
 */
function getHtmlElement() {
  return document.getElementsByTagName("html")[0];
}
exports.getHtmlElement = getHtmlElement;
/**
 * <en>Get body element</en>
 * <zh_cn>获取body元素</zh_cn>
 * <zh_tw>獲取body元素</zh_tw>
 * @returns
 * <en>body element</en>
 * <zh_cn>body元素</zh_cn>
 * <zh_tw>body元素</zh_tw>
 */
function getBodyElement() {
  return document.getElementsByTagName("body")[0];
}
exports.getBodyElement = getBodyElement;
/**
 * <en>Get title element</en>
 * <zh_cn>获取title元素</zh_cn>
 * <zh_tw>獲取title元素</zh_tw>
 * @returns
 * <en>title element</en>
 * <zh_cn>title元素</zh_cn>
 * <zh_tw>title元素</zh_tw>
 */
function getTitleElement() {
  return document.getElementsByTagName("title")[0];
}
exports.getTitleElement = getTitleElement;
/**
 * <en>Get header element</en>
 * <zh_cn>获取header元素</zh_cn>
 * <zh_tw>獲取header元素</zh_tw>
 * @returns
 * <en>The header element, because there is no HTMLHeaderElement object, has to use a similar HTMLDivElement.</en>
 * <zh_cn>header元素，因没有HTMLHeaderElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>header元素，因沒有HTMLHeaderElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
function getHeaderElement() {
  return document.getElementsByTagName("header")[0];
}
exports.getHeaderElement = getHeaderElement;
/**
 * <en>Get footer element</en>
 * <zh_cn>获取footer元素</zh_cn>
 * <zh_tw>獲取footer元素</zh_tw>
 * @returns
 * <en>The footer element, because there is no HTMLFooterElement object, has to use a similar HTMLDivElement.</en>
 * <zh_cn>footer元素，因没有HTMLFooterElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>footer元素，因沒有HTMLFooterElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
function getFooterElement() {
  return document.getElementsByTagName("footer")[0];
}
exports.getFooterElement = getFooterElement;
/**
 * <en>Get main element</en>
 * <zh_cn>获取main元素</zh_cn>
 * <zh_tw>獲取main元素</zh_tw>
 * @returns
 * <en>The main element, because there is no HTMLMainElement object, has to use a similar HTMLDivElement.</en>
 * <zh_cn>main元素，因没有HTMLMainElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>main元素，因沒有HTMLMainElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
function getMainElement() {
  return document.getElementsByTagName("main")[0];
}
exports.getMainElement = getMainElement;
/**
 * <en>Creates an element of the specified tag name.</en>
 * <zh_cn>创建指定标签的元素</zh_cn>
 * <zh_tw>創建指定標籤的元素</zh_tw>
 * @param tagName
 * <en>tag name</en>
 * <zh_cn>标签</zh_cn>
 * <zh_tw>標籤</zh_tw>
 * @param options
 * <en>Optional parameters</en>
 * <zh_cn>可选参数</zh_cn>
 * <zh_tw>可選參數</zh_tw>
 * @returns
 * <en>New Elements</en>
 * <zh_cn>新元素</zh_cn>
 * <zh_tw>新元素</zh_tw>
 */
function createElement(tagName, options) {
  return document.createElement(tagName, options);
}
exports.createElement = createElement;
/**
 * <en>Set the attbibutes for a element.</en>
 * <zh_cn>设置a元素的属性</zh_cn>
 * <zh_tw>設置a元素的屬性</zh_tw>
 * @param aElement
 * <en>a element</en>
 * <zh_cn>a元素</zh_cn>
 * <zh_tw>a元素</zh_tw>
 * @param href
 * <en>link</en>
 * <zh_cn>链接</zh_cn>
 * <zh_tw>鏈接</zh_tw>
 */
function setAttributesOfA(aElement, link) {
  aElement.setAttribute("href", link);
  if (!link.startsWith("mailto:")) {
    aElement.setAttribute("target", "_blank");
  }
}
exports.setAttributesOfA = setAttributesOfA;
/**
 * <en>Stop the event bubble</en>
 * <zh_cn>停止事件冒泡</zh_cn>
 * <zh_tw>停止事件冒泡</zh_tw>
 * @param event
 * <en>event</en>
 * <zh_cn>事件</zh_cn>
 * <zh_tw>事件</zh_tw>
 */
function stopEventBubble(event) {
  event.cancelBubble = true;
  event.preventDefault();
  event.stopPropagation();
  return false;
}
exports.stopEventBubble = stopEventBubble;
/**
 * <en>Get html from i18n data</en>
 * <zh_cn>以i18n数据获取html</zh_cn>
 * <zh_tw>以i18n數據獲取html</zh_tw>
 * @param i18n
 * <en>i18n data</en>
 * <zh_cn>i18n数据</zh_cn>
 * <zh_tw>i18n數據</zh_tw>
 */
function getI18nInnerHTML(_a) {
  var en = _a.en, zh_cn = _a.zh_cn, zh_tw = _a.zh_tw;
  return "<en>" + en + "</en><zh_cn>" + zh_cn + "</zh_cn><zh_tw>" + zh_tw +
    "</zh_tw>";
}
exports.getI18nInnerHTML = getI18nInnerHTML;
// new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
exports.MONTH_NAME_ARRAY = new Array(
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Spt",
  "Oct",
  "Nov",
  "Dec",
);
/**
 * <en>Transfer date is i18n html</en>
 * <zh_cn>转日期为i18n html</zh_cn>
 * <zh_tw>轉日期為i18n html</zh_tw>
 * @param date
 * <en>Date</en>
 * <zh_cn>日期</zh_cn>
 * <zh_tw>日期</zh_tw>
 */
function getI18nInnerHTMLFromDate(date) {
  var en = exports.MONTH_NAME_ARRAY[date.getMonth()] + " " + date.getDate() +
    ", " + date.getFullYear();
  var zh_cn = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +
    date.getDate();
  var zh_tw = zh_cn;
  return "<en>" + en + "</en><zh_cn>" + zh_cn + "</zh_cn><zh_tw>" + zh_tw +
    "</zh_tw>";
}
exports.getI18nInnerHTMLFromDate = getI18nInnerHTMLFromDate;
