var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
      }) ||
      function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError(
        "Class extends value " + String(b) + " is not a constructor or null",
      );
    }
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null
      ? Object.create(b)
      : (__.prototype = b.prototype, new __());
  };
})();

/**
 * <en>Domain</en>
 * <zh_cn>网站域名</zh_cn>
 * <zh_tw>網站域名</zh_tw>
 */
var DOMAIN = "edu.sonya.cc";
/**
 * <en>Postfix of file name</en>
 * <zh_cn>文件名前綴</zh_cn>
 * <zh_tw>文件名前綴</zh_tw>
 */
var FILENAME_POSTFIX = DOMAIN.concat("_");
/**
 * <en>Current URL</en>
 * <zh_cn>当前网址</zh_cn>
 * <zh_tw>當前網址</zh_tw>
 */
var CURRENT_URL = window.location.href;
/**
 * <en>Home URL</en>
 * <zh_cn>首页网址</zh_cn>
 * <zh_tw>首頁網址</zh_tw>
 */
var HOME_URL = CURRENT_URL.startsWith("file:///")
  ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm"
  : "http://edu.sonya.cc/";
/**
 * <en>Temporary closure method: avoid being displayed in iframe by other websites.</en>
 * <zh_cn>临时闭包方法：避免被其它网站放入iframe中显示。</zh_cn>
 * <zh_tw>臨時閉包方法：避免被其它網站放入iframe中顯示。</zh_tw>
 */
(function () {
  var myWindow = window;
  // alert(JSON.stringify(myWindow.top));
  // console.log(myWindow.top?.location.href);
  if (!myWindow.top || CURRENT_URL.startsWith("file:///")) {
    return;
  }
  if (!myWindow.top.location.href.startsWith(HOME_URL)) {
    myWindow.top.location.replace(HOME_URL);
  }
})();
/**
 * <en>Home URL length</en>
 * <zh_cn>首页网址长度</zh_cn>
 * <zh_tw>首頁網址長度</zh_tw>
 */
var HOME_URL_LENGTH = HOME_URL.length;
/**
 * <en>Enumeration: Actual Page</en>
 * <zh_cn>枚举：实际页面</zh_cn>
 * <zh_tw>枚舉：實際頁面</zh_tw>
 */
var ActualPage;
(function (ActualPage) {
  /**
   * <en>Home page</en>
   * <zh_cn>首页</zh_cn>
   * <zh_tw>首頁</zh_tw>
   */
  ActualPage[ActualPage["home"] = 0] = "home";
  /**
   * <en>List of throwing a brick to attract jade</en>
   * <zh_cn>抛砖引玉列表</zh_cn>
   * <zh_tw>抛磚引玉清單</zh_tw>
   */
  ActualPage[ActualPage["bricks"] = 1] = "bricks";
  /**
   * <en>Details of throwing a brick to attract jade</en>
   * <zh_cn>抛砖引玉详情</zh_cn>
   * <zh_tw>抛磚引玉詳情</zh_tw>
   */
  ActualPage[ActualPage["brick"] = 2] = "brick";
  /**
   * <en>Natural treasures</en>
   * <zh_cn>物华天宝</zh_cn>
   * <zh_tw>物華天寶</zh_tw>
   */
  ActualPage[ActualPage["treasures"] = 3] = "treasures";
  /**
   * <en>List of growth footprint</en>
   * <zh_cn>成长足迹列表</zh_cn>
   * <zh_tw>成長足迹清單</zh_tw>
   */
  ActualPage[ActualPage["stories"] = 4] = "stories";
  /**
   * <en>Details of growth footprint</en>
   * <zh_cn>成长足迹详情</zh_cn>
   * <zh_tw>成長足迹詳情</zh_tw>
   */
  ActualPage[ActualPage["story"] = 5] = "story";
  /**
   * <en>Sparks of Fire</en>
   * <zh_cn>星星之火</zh_cn>
   * <zh_tw>星星之火</zh_tw>
   */
  ActualPage[ActualPage["about"] = 6] = "about";
  /**
   * <en>Report form</en>
   * <zh_cn>报表</zh_cn>
   * <zh_tw>報表</zh_tw>
   */
  ActualPage[ActualPage["report"] = 7] = "report";
})(ActualPage || (ActualPage = {}));
/**
 * <en>Array: actual page enumeration value</en>
 * <zh_cn>数组：实际页面枚举值</zh_cn>
 * <zh_tw>數組：實際頁面枚舉值</zh_tw>
 */
var ACTUAL_PAGE_NAME_ARRAY = [
  "home",
  "bricks",
  "brick",
  "treasures",
  "stories",
  "story",
  "about",
  "report",
];
/**
 * <en>Convert number to actual page name</en>
 * <zh_cn>转数字到实际页面名</zh_cn>
 * <zh_tw>轉數位到實際頁面名</zh_tw>
 */
var getActualPageName = function (value) {
  return ACTUAL_PAGE_NAME_ARRAY[value];
};
/**
 * <en>Convert the actual page name to the enumeration value

Convert the actual page name to the enumeration value.</en>
 * <zh_cn>转实际页面名到枚举值</zh_cn>
 * <zh_tw>轉實際頁面名到枚舉值</zh_tw>
*/
var getActualPageValueByName = function (name) {
  return ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
};
/**
 * <en>Page parameter: actual page. If it exists, it must be the first parameter.</en>
 * <zh_cn>页面参数：实际页面。如果存在，必须是第一个参数。</zh_cn>
 * <zh_tw>頁面參數：實際頁面。如果存在，必須是第一個參數。</zh_tw>
 */
var PARAMETER_FOR_ACTUAL_PAGE = "go";
/**
 * <en>Page parameter value: actual page</en>
 * <zh_cn>页面参数值：实际页面</zh_cn>
 * <zh_tw>頁面參數值：實際頁面</zh_tw>
 */
var ACTUAL_PAGE_VALUE =
  CURRENT_URL.indexOf("?".concat(PARAMETER_FOR_ACTUAL_PAGE, "=")) > -1
    ? getActualPageValueByName(
      CURRENT_URL.split("?")[1].split("&")[0].split("=")[1],
    )
    : ActualPage.home;
/**
 * <en>Current actual page name</en>
 * <zh_cn>当前实际页面名</zh_cn>
 * <zh_tw>當前實際頁面名</zh_tw>
 */
var ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
/**
 * <en>Site Root</en>
 * <zh_cn>网站根目录</zh_cn>
 * <zh_tw>網站根目錄</zh_tw>
 */
var SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf("/") + 1);
/**
 * <en>Website image directory</en>
 * <zh_cn>网站图片目录</zh_cn>
 * <zh_tw>網站圖片目錄</zh_tw>
 */
var SITE_IMAGE_PATH = "".concat(SITE_ROOT, "images/");
/**
 * <en>Site Script Directory</en>
 * <zh_cn>网站脚本目录</zh_cn>
 * <zh_tw>網站腳本目錄</zh_tw>
 */
var SITE_JAVASCRIPT_PATH = "".concat(SITE_ROOT, "js/");
/**
 * <en>Site Style Sheet Directory</en>
 * <zh_cn>网站样式表目录</zh_cn>
 * <zh_tw>網站樣式表目錄</zh_tw>
 */
var SITE_CSS_PATH = "".concat(SITE_ROOT, "css/");
/**
 * <en>Get the specified parameter value from the URL.</en>
 * <zh_cn>从网址中获取指定参数值</zh_cn>
 * <zh_tw>從網址中獲取指定參數值</zh_tw>
 * @param name
 * <en>Parameter name</en>
 * <zh_cn>参数名</zh_cn>
 * <zh_tw>參數名</zh_tw>
 * @param defaultValue
 * <en>Default value of the parameter</en>
 * <zh_cn>参数默认值</zh_cn>
 * <zh_tw>參數默認值</zh_tw>
 * @returns
 * <en>Parameter value</en>
 * <zh_cn>参数值</zh_cn>
 * <zh_tw>參數值</zh_tw>
 */
var getPageParameterByName = function (name, defaultValue) {
  return CURRENT_URL.indexOf("&".concat(name, "=")) === -1
    ? defaultValue || ""
    : CURRENT_URL.split("&").slice(1).filter(function (keyValue) {
      return keyValue.startsWith("".concat(name, "="));
    })[0].split("=")[1];
};
/**
 * <en>Sub kind of current page</en>
 * <zh_cn>页面子类型</zh_cn>
 * <zh_tw>頁面子類型</zh_tw>
 */
var PAGE_SUB_KIND = getPageParameterByName("kind", null);
/**
 * <en>Page Index</en>
 * <zh_cn>页序</zh_cn>
 * <zh_tw>頁序</zh_tw>
 */
var PAGE_IDNEX = parseInt(getPageParameterByName("page", "1"), 0) - 1;
/**
 * <en>Page parameter: No</en>
 * <zh_cn>页面参数：编号</zh_cn>
 * <zh_tw>頁面參數：編號</zh_tw>
 */
var PAGE_ID = parseInt(getPageParameterByName("id", "1"), 0);
/**
 * <en>“查看更多”按钮文字</en>
 * <zh_cn>View more button text</zh_cn>
 * <zh_tw>“查看更多”按鈕文字</zh_tw>
 */
var MORE_BUTTON_HTML = "<en>more...</en><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>";
/**
 * <en>Type of throwing bricks to attract jade</en>
 * <zh_cn>抛砖引玉子类型</zh_cn>
 * <zh_tw>抛磚引玉子類型</zh_tw>
 */
var BRICK_SUB_KINDS = [
  /**
   * <en>Chinese</en>
   * <zh_cn>语文</zh_cn>
   * <zh_tw>語文</zh_tw>
   */
  {
    name: "01_chinese",
    title: { en: "Chinese", zh_cn: "语文", zh_tw: "語文" },
  },
  /**
   * <en>Mathematics</en>
   * <zh_cn>数学</zh_cn>
   * <zh_tw>數學</zh_tw>
   */
  {
    name: "02_math",
    title: { en: "Mathematics", zh_cn: "数学", zh_tw: "數學" },
  },
  /**
   * <en>English</en>
   * <zh_cn>英语</zh_cn>
   * <zh_tw>英語</zh_tw>
   */
  {
    name: "03_english",
    title: { en: "English", zh_cn: "英语", zh_tw: "英語" },
  },
  /**
   * <en>Programming</en>
   * <zh_cn>编程</zh_cn>
   * <zh_tw>程式設計</zh_tw>
   */
  {
    name: "04_programming",
    title: { en: "Programming", zh_cn: "编程", zh_tw: "程式設計" },
  },
];
/**
 * <en>Html attribute: activated</en>
 * <zh_cn>html属性：激活</zh_cn>
 * <zh_tw>html内容：已啟動</zh_tw>
 */
var ACTIVATED_PROPERTY = "edu-activated";
/**
 * <en>Html attribute: subclass name</en>
 * <zh_cn>html属性：子类名</zh_cn>
 * <zh_tw>html内容：子類名</zh_tw>
 */
var SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name";
/**
 * <en>Html attributes: language</en>
 * <zh_cn>html属性：语言</zh_cn>
 * <zh_tw>html内容：語言</zh_tw>
 */
var LANG_PROPERTY = "edu-lang";
/**
 * <en>Html attribute: page order</en>
 * <zh_cn>html属性：页序</zh_cn>
 * <zh_tw>html内容：頁序</zh_tw>
 */
var PAGE_PROPERTY = "edu-page";
/**
 * <en>Html attribute: device</en>
 * <zh_cn>html属性：设备</zh_cn>
 * <zh_tw>html内容：設備</zh_tw>
 */
var DEVICE_PROPERTY = "edu-device";
/**
 * <en>Html attribute: report</en>
 * <zh_cn>html属性：报表</zh_cn>
 * <zh_tw>html内容：報表</zh_tw>
 */
var REPORT_PROPERTY = "edu-report";
/**
 * <en>Html attribute: id</en>
 * <zh_cn>html属性：编号</zh_cn>
 * <zh_tw>html内容：編號</zh_tw>
 */
var ID_PROPERTY = "edu-id";
/**
 * <en>Html attribute: paper size</en>
 * <zh_cn>html属性：纸型</zh_cn>
 * <zh_tw>html内容：紙型</zh_tw>
 */
var PAPER_SIZE_PROPERTY = "edu-paper-size";
/**
 * <en>Html attribute: report type</en>
 * <zh_cn>html属性：报表类型</zh_cn>
 * <zh_tw>html内容：報表類型</zh_tw>
 */
var REPORT_KIND_PROPERTY = "edu-report-kind";
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
  return "<en>".concat(en, "</en><zh_cn>").concat(zh_cn, "</zh_cn><zh_tw>")
    .concat(zh_tw, "</zh_tw>");
}
// new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
var MONTH_NAME_ARRAY = new Array(
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
  var en = "".concat(MONTH_NAME_ARRAY[date.getMonth()], " ").concat(
    date.getDate(),
    ", ",
  ).concat(date.getFullYear());
  var zh_cn = "".concat(date.getFullYear(), "-").concat(
    date.getMonth() + 1,
    "-",
  ).concat(date.getDate());
  var zh_tw = zh_cn;
  return "<en>".concat(en, "</en><zh_cn>").concat(zh_cn, "</zh_cn><zh_tw>")
    .concat(zh_tw, "</zh_tw>");
}
/**
 * <en>Local storage keyword: language, used to record the last selected language</en>
 * <zh_cn>本地存储关键字：语言，用于记录最后一次所选择的语言</zh_cn>
 * <zh_tw>本地存儲關鍵字：語言，用於記錄最後一次所選擇的語言</zh_tw>
 */
var LOCAL_STORAGE_KEY_OF_LANG = "lang";
/**
 * <en>Local Storage Keyword: the current page, used to record the configuration selected during the last report generation</en>
 * <zh_cn>本地存储关键字：当前页，用于记录最后一次生成报表时所选择的配置</zh_cn>
 * <zh_tw>本地存儲關鍵字：當前頁，用於記錄最後一次生成報表時所選擇的配寘</zh_tw>
 */
var LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes("?")
  ? CURRENT_URL.split("?")[1]
  : ACTUAL_PAGE_NAME;
/**
 * <en>Notification: Change Language</en>
 * <zh_cn>通知：更改语言</zh_cn>
 * <zh_tw>通知：更改語言</zh_tw>
 */
// const CHANGE_LANG_NOTIFY_ARRAY = ACTUAL_PAGE_NAME_ARRAY.map((_name: string) => []) as Array<Array<(lang: Language) => void>>;
var CHANGE_LANG_NOTIFY_ARRAY = [];
/**
 * <en>Get the current language from localStorage</en>
 * <zh_cn>从localStorage获取当前语言</zh_cn>
 * <zh_tw>從localStorage獲取當前語言</zh_tw>
 */
var getCurrentLang = function () {
  return (localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn");
};
/**
 * <en>Set Current Language</en>
 * <zh_cn>设置当前语言</zh_cn>
 * <zh_tw>設定當前語言</zh_tw>
 */
var setCurrentLang = function (lang) {
  getHtmlElement().setAttribute(LANG_PROPERTY, lang);
  localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
  updateUIByCurrentLang();
};
/**
 * <en>Update the interface according to the current language</en>
 * <zh_cn>根据当前语言更新界面</zh_cn>
 * <zh_tw>根據當前語言更新介面</zh_tw>
 */
var updateUIByCurrentLang = function () {
  var lang = getCurrentLang();
  // CHANGE_LANG_NOTIFY_ARRAY.forEach((subArray: Array<(lang: Language) => void>) => subArray.forEach((func) => func(lang)));
  CHANGE_LANG_NOTIFY_ARRAY.forEach(function (func) {
    return func(lang);
  });
};
/**
 * <en>Get the local cache corresponding to the current page.</en>
 * <zh_cn>获取当前页面对应本地缓存</zh_cn>
 * <zh_tw>獲取當前頁面對應本地緩存</zh_tw>
 */
var getCurrentPageLocalStorage = function () {
  return localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || "";
};
/**
 * <en>Set the local cache corresponding to the current page.</en>
 * <zh_cn>设置当前页面对应本地缓存</zh_cn>
 * <zh_tw>設定當前頁面對應本地緩存</zh_tw>
 */
var setCurrentPageLocalStorage = function (newValue) {
  return localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
};
/**
 * <en>Get the "Change Language" notification array corresponding to the current page.</en>
 * <zh_cn>获取当前页面对应的“更改语言”通知数组</zh_cn>
 * <zh_tw>獲取當前頁面對應的“更改語言”通知數組</zh_tw>
 */
var getChangeLangNotifyArrayOfCurrentPage = function () {
  return CHANGE_LANG_NOTIFY_ARRAY;
};
/**
 * <en>Clear the "Change Language" notification array corresponding to the current page.</en>
 * <zh_cn>清空当前页面对应的“更改语言”通知数组</zh_cn>
 * <zh_tw>清空當前頁面對應的“更改語言”通知數組</zh_tw>
 */
var clearChangeLangNotifyArrayOfCurrentPage = function () {
  CHANGE_LANG_NOTIFY_ARRAY.length = 0;
};
var convertDateToYYYYMMDD_hhmmss = function (date) {
  return "".concat(date.getFullYear()).concat(
    "0".concat((date.getMonth() + 1).toString()).substr(-2),
  ).concat("0".concat((date.getDate()).toString()).substr(-2)).concat(
    "_".concat("0".concat((date.getHours()).toString()).substr(-2)).concat(
      "0".concat((date.getMinutes()).toString()).substr(-2),
    ).concat("0".concat((date.getSeconds()).toString()).substr(-2)),
  );
};
function pushSameValueTimes(array, value, times) {
  for (var i = 0; i < times; ++i) {
    array.push(value);
  }
}
function getNumbersArray(min, max) {
  var array = [];
  for (var i = min; i <= max; ++i) {
    array.push(i.toString());
  }
  return array;
}
function repeatString(original, times) {
  var array = [];
  for (var i = 0; i <= times; ++i) {
    array.push(original);
  }
  return array.join();
}
function getArrayRepeatSameValue(value, times) {
  var array = [];
  for (var i = 0; i < times; ++i) {
    array.push(value);
  }
  return array;
}
var getI18nableWithSameContent = function (value) {
  return { en: value, zh_cn: value, zh_tw: value };
};
// import {
// 	createElement,
// 	getBodyElement,
// 	getElementById,
// 	getElementByIdAndTagName,
// 	getTitleElement,
// 	hide,
// 	querySelectorAll,
// 	querySelectorAllByI18n,
// 	querySelectorAllByI18nPlaceholder,
// 	I18nable,
// 	PlaceholderI18nable
// } from './dom';
// // new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
// const MONTH_NAME_ARRAY = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
/** 类：全局对象 */
var Global = /** @class */ (function () {
  function Global() {
    var _this = this;
    /** 是否手机版 */
    this.IS_MOBILE = navigator.userAgent.toLowerCase().indexOf(" mobile ") > -1;
    this.body = getBodyElement();
    this.langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage();
    this.bindChangeLangEventForI18nElements = function () {
      var innerHtmlI18nElement = [];
      // interface ElementExtend extends Element { i18n ?: string };
      querySelectorAllByI18n().forEach(function (element) {
        element.hasAttribute("i18n") &&
          (element.i18n = JSON.parse(element.getAttribute("i18n")));
        innerHtmlI18nElement.push(element);
      });
      var placeholderI18nElement = [];
      querySelectorAllByI18nPlaceholder().forEach(function (element) {
        element.hasAttribute("i18n-placeholder") &&
          (element.i18nPlaceholder = JSON.parse(
            element.getAttribute("i18n-placeholder"),
          ));
        placeholderI18nElement.push(element);
      });
      _this.langUpdatedEventArray.push(function (lang) {
        innerHtmlI18nElement.forEach(function (element) {
          element.innerHTML = element.i18n && element.i18n[lang];
        });
        placeholderI18nElement.forEach(function (element) {
          element.setAttribute(
            "placeholder",
            element.i18nPlaceholder &&
              element.i18nPlaceholder[lang],
          );
        });
      });
    };
    // public getChineseDate(date: Date) {
    // 	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    // }
    // public getEnglishDate(date: Date) {
    // 	return `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    // }
    this.inited = false;
    this.init = function () {
      if (_this.inited) {
        return;
      }
      // TODO(@anqi) more device
      _this.body.setAttribute(
        DEVICE_PROPERTY,
        _this.IS_MOBILE ? "mobile" : "pc",
      );
      // document.onkeyup = function(event: Event) {
      //   // 27 ESC
      //   switch (event.keyCode) {
      //   case 112: // F1
      //     event.preventDefault();
      //     event.stopPropagation();
      //     break;
      //   default:
      //     break;
      //   }
      //   return false;
      // }
      _this.inited = true;
    };
  }
  return Global;
}());
/** 全局对象 */
var global = new Global();
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>类：电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>類：電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
var PcGlobal = /** @class */ (function () {
  function PcGlobal() {
    var _this = this;
    /**
     * <en>Sharing area element</en>
     * <zh_cn>分享区元素</zh_cn>
     * <zh_tw>分享區元素</zh_tw>
     */
    this.shareAreaElement = createElement("div");
    /**
     * <en>WeChat sharing button element</en>
     * <zh_cn>微信分享按钮元素</zh_cn>
     * <zh_tw>微信分享按鈕元素</zh_tw>
     */
    this.wechatShareElement = createElement("img");
    /**
     * <en>header element</en>
     * <zh_cn>header元素</zh_cn>
     * <zh_tw>header元素</zh_tw>
     */
    this.headerElement = getHeaderElement();
    /**
     * <en>Page logo element</en>
     * <zh_cn>页面logo元素</zh_cn>
     * <zh_tw>頁面logo元素</zh_tw>
     */
    this.logoElement = createElement("img");
    /**
     * <en>Menu using nav tags</en>
     * <zh_cn>使用nav标签的menu</zh_cn>
     * <zh_tw>使用nav標籤的menu</zh_tw>
     */
    this.navElement = createElement("nav");
    /**
     * <en>footer element</en>
     * <zh_cn>footer元素</zh_cn>
     * <zh_tw>footer元素</zh_tw>
     */
    this.footerElement = getFooterElement();
    /**
     * <en>main element</en>
     * <zh_cn>main元素</zh_cn>
     * <zh_tw>main元素</zh_tw>
     */
    this.mainElement = getMainElement();
    /**
     * <en>Array: top right menu sub item</en>
     * <zh_cn>数组：顶部右上角菜单子项</zh_cn>
     * <zh_tw>數組：頂部右上角菜單子項</zh_tw>
     */
    this.topMenuItems = [
      {
        id: "topMenuHome",
        kind: "a",
        link: "".concat(HOME_URL),
        titles: { en: "Home", zh_cn: "\u9996\u9875", zh_tw: "\u9996\u9801" },
      },
      {
        id: "topMenuBricks",
        kind: "a",
        link: "".concat(HOME_URL, "?go=bricks&kind=0&page=1"),
        titles: {
          en: "Tools",
          zh_cn: "\u629B\u7816\u5F15\u7389",
          zh_tw: "\u629B\u78DA\u5F15\u7389",
        },
      },
      {
        id: "topMenuTreasures",
        kind: "a",
        link: "".concat(HOME_URL, "?go=treasures&page=1"),
        titles: {
          en: "Natural treasures",
          zh_cn: "\u7269\u534E\u5929\u5B9D",
          zh_tw: "\u7269\u83EF\u5929\u5BF6",
        },
      },
      {
        id: "topMenuStories",
        kind: "a",
        link: "".concat(HOME_URL, "?go=stories&page=1"),
        titles: {
          en: "Growings",
          zh_cn: "\u6210\u957F\u8DB3\u8FF9",
          zh_tw: "\u6210\u9577\u8DB3\u8FF9",
        },
      },
      {
        id: "topMenuAbout",
        kind: "a",
        link: "".concat(HOME_URL, "?go=about"),
        titles: {
          en: "About Us",
          zh_cn: "\u5173\u4E8E\u6211\u4EEC",
          zh_tw: "\u95DC\u65BC\u6211\u5011",
        },
      },
      {
        id: "topMenuLanguage",
        kind: "select",
        link: "onChangeLanuage",
        titles: {
          en: "Language",
          zh_cn: "\u8BED\u8A00",
          zh_tw: "\u8A9E\u8A00",
        },
        options:
          "<option value='en'>English</option><option value='zh_cn'>简体</option><option value='zh_tw'>繁體</option>",
        onchange: "onChangeLanuage",
      },
      {
        id: "topMenuGithub",
        kind: "a",
        link: "https://github.com/edu-sonya-cc/edu.sonya.cc",
        titles: { en: "", zh_cn: "", zh_tw: "" },
      },
      {
        id: "topMenuSearch",
        kind: "button",
        link: "",
        titles: { en: "", zh_cn: "", zh_tw: "" },
        onclick: "onShowSearchRegion",
      },
    ];
    /**
     * <en>Arrays: footer hotspot data</en>
     * <zh_cn>数组：页脚热区数据</zh_cn>
     * <zh_tw>數組：頁腳熱區數據</zh_tw>
     */
    this.footerHotAreas = [
      {
        id: "footIcpLink",
        href: "https://beian.miit.gov.cn/",
      },
      {
        id: "footPoliceLink",
        href:
          "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302035110",
      },
      {
        id: "footEmailLink",
        href: "mailto:edu.sonya.cc@foxmail.com",
      },
      {
        id: "footFavoriteLink",
        href: "javascript:void(0);",
        onclick: "onAddFavorite",
      },
      {
        id: "footShareLink",
        href: "javascript:void(0);",
        onclick: "onShare",
      },
    ];
    /**
     * <en>Add current page to favorites.</en>
     * <zh_cn>添加当前页面到收藏夹中</zh_cn>
     * <zh_tw>添加當前頁面到收藏夾中</zh_tw>
     */
    //  (window as unknown as OnclickFunctionMap).
    this.onAddFavorite = function (event) {
      var errorTip = "";
      var title = "";
      switch (getCurrentLang()) {
        case "en":
          title = "Add to favorite";
          errorTip =
            "Add to favorite failed, please press Ctrl + D or Command + D, Or manually set in the browser.";
          break;
        case "zh_cn":
          title = "加入收藏";
          errorTip = "加入收藏失败，请使用组合键Ctrl + D，或Command + D，或手动在浏览器里进行设置。";
          break;
        case "zh_tw":
          title = "加入收藏";
          errorTip = "加入收藏失敗，請使用複合鍵Ctrl + D，或Command + D，或手動在瀏覽器裏進行設定。";
          break;
        default:
          break;
      }
      // const url = encodeURI(window.location.href);
      var url = encodeURI(window.location.href);
      switch (ACTUAL_PAGE_NAME) {
        case "home":
          url = HOME_URL;
          break;
        case "about":
        case "report":
          break;
        case "brick":
        case "story":
          url = "".concat(HOME_URL, "?go=").concat(ACTUAL_PAGE_NAME, "&kind=")
            .concat(_this.getPageSubKind());
          break;
        case "treasures":
        case "stories":
          url = "".concat(HOME_URL, "?go=").concat(ACTUAL_PAGE_NAME, "&kind=")
            .concat(_this.getPageSubKind());
          break;
        case "bricks":
          url = "".concat(HOME_URL, "?go=").concat(ACTUAL_PAGE_NAME, "&kind=")
            .concat(_this.getPageSubKind(), "&page=").concat(
              _this.getPageIndex(),
            );
          break;
        default:
          break;
      }
      // See https://xcysj.blog.csdn.net/article/details/125167025
      // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sidebar
      try {
        window.external
          .addFavorite(url, title);
        // window.external.addFavorite(sURL, sTitle);
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, "");
          // window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
          alert(errorTip);
        }
      }
      return stopEventBubble(event);
    };
    /**
     * <en>Share</en>
     * <zh_cn>分享</zh_cn>
     * <zh_tw>分享</zh_tw>
     */
    // (window as unknown as OnclickFunctionMap)
    this.onShare = function (event) {
      console.log("onShare()");
      var url = encodeURI(window.location.href);
      // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
      // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
      var wechatShareImageSrcPostfix = url.indexOf("&") === -1
        ? ""
        : "/".concat(
          url.split("&").slice(1).map(function (keyValue) {
            return keyValue.split("=")[1];
          }).join("_"),
        );
      var wechatShareImageSrc = "".concat(SITE_IMAGE_PATH).concat(
        ACTUAL_PAGE_NAME,
      ).concat(wechatShareImageSrcPostfix, ".png");
      _this.wechatShareElement.setAttribute("src", wechatShareImageSrc);
      _this.wechatShareElement.setAttribute("alt", wechatShareImageSrc);
      showInlineFlex(_this.shareAreaElement);
      return stopEventBubble(event);
    };
    // /**
    //  * <en>Hide share area</en>
    //  * <zh_cn>隐藏共享区</zh_cn>
    //  * <zh_tw>隱藏共亯區</zh_tw>
    //  */
    // public hideShareArea = () => {
    // 	global.hideRootTopMask();
    // };
    /**
     * <en>Search Area</en>
     * <zh_cn>搜索区</zh_cn>
     * <zh_tw>搜索區</zh_tw>
     */
    this.searchRegionElement = createElement("div");
    /**
     * <en>Show Search Area</en>
     * <zh_cn>显示搜索区域</zh_cn>
     * <zh_tw>顯示搜索區域</zh_tw>
     */
    //  (window as unknown as OnclickFunctionMap).
    this.onShowSearchRegion = function (event) {
      console.log("onShowSearchRegion()");
      // pcGlobal.showSearchRegion();
      showBlock(_this.searchRegionElement);
      return stopEventBubble(event);
    };
    /**
     * <en>Change the language</en>
     * <zh_cn>切换语言</zh_cn>
     * <zh_tw>切換語言</zh_tw>
     */
    this.onChangeLanuage = function (event) {
      console.log("onChangeLanuage()");
      setCurrentLang(getElementById("topMenuLanguage").value);
      return stopEventBubble(event);
    };
    this.pageSubKind = PAGE_SUB_KIND;
    this.getPageSubKind = function () {
      return _this.pageSubKind;
    };
    this.setPageSubKind = function (kind) {
      _this.pageSubKind = kind;
    };
    this.pageIndex = PAGE_IDNEX;
    this.getPageIndex = function () {
      return _this.pageIndex + 1;
    };
    this.setPageIndex = function (index) {
      _this.pageIndex = index - 1;
    };
    /**
     * <en>initialization</en>
     * <zh_cn>初始化</zh_cn>
     * <zh_tw>初始化</zh_tw>
     */
    this.init = function () {
      global.init();
      var _a = _this,
        shareAreaElement = _a.shareAreaElement,
        wechatShareElement = _a.wechatShareElement,
        headerElement = _a.headerElement,
        logoElement = _a.logoElement,
        navElement = _a.navElement,
        topMenuItems = _a.topMenuItems,
        footerElement = _a.footerElement,
        footerHotAreas = _a.footerHotAreas,
        mainElement = _a.mainElement,
        searchRegionElement = _a.searchRegionElement;
      // const body = getBodyElement();
      mainElement.appendChild(searchRegionElement);
      searchRegionElement.setAttribute("id", "searchRegion");
      footerElement.appendChild(shareAreaElement);
      // footerElement.appendChild(footerHotAreas);
      shareAreaElement.appendChild(wechatShareElement);
      headerElement.appendChild(logoElement);
      headerElement.appendChild(navElement);
      shareAreaElement.setAttribute("id", "shareArea");
      wechatShareElement.setAttribute("id", "wechatShare");
      // headerElement.setAttribute('id', 'header');
      logoElement.setAttribute("id", "logo");
      navElement.setAttribute("id", "menu");
      // footerElement.setAttribute('id', 'footer');
      var rootUrl = SITE_ROOT;
      var logoUrl = SITE_IMAGE_PATH.concat("0common/logo.jpg");
      logoElement.setAttribute("src", logoUrl);
      logoElement.setAttribute("alt", logoUrl);
      logoElement.onclick = function () {
        window.location.href = HOME_URL;
      };
      var currentLang = getCurrentLang();
      shareAreaElement.onclick = function () {
        return false;
      };
      footerElement.onclick = function () {
        hide(shareAreaElement);
      };
      // 加载页脚所有热区
      footerHotAreas.forEach(function (hotArea) {
        var aElement = createElement("a");
        footerElement.appendChild(aElement);
        var id = hotArea.id, href = hotArea.href, onclick = hotArea.onclick;
        aElement.setAttribute("id", id);
        if (!href.startsWith(HOME_URL.substring(0, 20))) {
          setAttributesOfA(aElement, href);
        } else {
          aElement.setAttribute("href", href);
        }
        // console.log(onclick, (window as unknown as OnclickFunctionMap)[onclick as string]);
        if (onclick) {
          switch (onclick) {
            case "onAddFavorite":
              aElement.onclick = _this.onAddFavorite;
              aElement.setAttribute("rel", "sidebar");
              break;
            case "onShare":
              aElement.onclick = _this.onShare;
              break;
            default:
              var onclickFunction = window[onclick];
              aElement.onclick = onclickFunction;
              // console.log(aElement.onclick);
              break;
          }
        }
      });
      // 加载菜单
      // topMenuItems.forEach(({ id, kind, link, titles, subItems, options, onclick, onchange }) => {
      topMenuItems.forEach(function (_a) {
        var id = _a.id,
          kind = _a.kind,
          link = _a.link,
          titles = _a.titles,
          options = _a.options,
          onclick = _a.onclick,
          onchange = _a.onchange;
        // const elementType = (kind === 'menu' ? 'p' : kind) as keyof HTMLElementTagNameMap;
        var elementType = (kind === "menu" ? "a" : kind);
        var menu = createElement(elementType);
        navElement.appendChild(menu);
        menu.setAttribute("id", id);
        var activated = id.substring(7).toLowerCase() === ACTUAL_PAGE_NAME;
        // console.log(id.substring(7).toLowerCase(), ACTUAL_PAGE_NAME);
        if (activated) {
          menu.setAttribute(ACTIVATED_PROPERTY, "");
        }
        if (kind === "a") {
          // setAttributesOfA(menu, link);
          // menu.setAttribute('href', link);
          if (!link.startsWith(HOME_URL.substring(0, 20))) {
            setAttributesOfA(menu, link);
          } else {
            menu.setAttribute("href", link);
          }
        }
        // menu.setAttribute('i18n', JSON.stringify( titles));
        menu.i18n = titles;
        if (kind === "menu") {
          var subMenuWrap_1 = createElement("div");
          // body.appendChild(subMenuWrap);
          headerElement.appendChild(subMenuWrap_1);
          subMenuWrap_1.setAttribute("id", id.concat("SubMenuWrap"));
          subMenuWrap_1.setAttribute("class", "topMenuItemSubMenuWrap");
          // // kind: subMenuKind,
          // (subItems as any)?.forEach(({ link: subMenuLink, titles: subMenuTitle } : {link: any, titles: any}) => {
          // 	const subMenu = createElement('a');
          // 	subMenuWrap.appendChild(subMenu);
          // 	// setAttributesOfA(subMenu, subMenuLink);
          // 	subMenu.setAttribute('href', subMenuLink);
          // 	if (
          // 		activated &&
          // 		PAGE_SUB_KIND ===
          // 			subMenuLink.split('&').slice(1).filter((keyValue: string) =>
          // 				keyValue.startsWith('kind=')
          // 			)[0].split('=')[1]
          // 	) {
          // 		subMenu.setAttribute(ACTIVATED_PROPERTY, '');
          // 	}
          // 	// subMenu.setAttribute('i18n', JSON.stringify(subMenuTitle));
          // 	// subMenu.i18n = subMenuTitle;
          // 	subMenu.innerHTML = getI18nInnerHTML(subMenuTitle);
          // });
          menu.onclick = function (event) {
            showBlock(subMenuWrap_1);
            return stopEventBubble(event);
          };
        }
        if (kind === "select") {
          menu.innerHTML = options;
          menu.value = currentLang;
          // console.log('select', onchange);
          switch (onchange) {
            case "onChangeLanuage":
              menu.onchange = _this.onChangeLanuage;
              break;
            default:
              break;
          }
        } else {
          menu.innerHTML = getI18nInnerHTML(titles);
        }
        if (onclick) {
          switch (onclick) {
            // case 'onAddFavorite':
            // 	menu.onclick = this.onAddFavorite;
            // 	break;
            // case 'onShare':
            // 	menu.onclick = this.onShare;
            // 	break;
            case "onShowSearchRegion":
              menu.onclick = _this.onShowSearchRegion;
              break;
            default:
              var onclickFunction = window[onclick];
              menu.onclick = onclickFunction;
              break;
          }
        }
      });
      var topMenuLanguage = getElementById("topMenuLanguage");
      topMenuLanguage.value = getCurrentLang();
      // console.log(topMenuLanguage.value);
    };
    this.fillListAndPagination = function (
      listElement,
      paginationElement,
      pageSize,
      list,
      pageName,
      fillItem,
    ) {
      listElement.id = "".concat(pageName, "List");
      paginationElement.className = "pagination";
      var itemCount = list.length;
      var pageCount = Math.ceil(itemCount / pageSize);
      // console.log(pageCount, list.length, pageSize);
      var pageMaxIndex = pageCount - 1;
      var countOfLastPage = itemCount - pageSize * pageMaxIndex;
      for (var i = 0; i < pageSize; ++i) {
        var itemElement = createElement("div");
        itemElement.className = "".concat(pageName, "Item");
        listElement.appendChild(itemElement);
        fillItem(itemElement, null, true);
      }
      var leftArrowElement = createElement("span");
      paginationElement.appendChild(leftArrowElement);
      leftArrowElement.innerHTML = "&lt;";
      leftArrowElement.id = "".concat(pageName, "PaginationLeftArrow");
      leftArrowElement.className = "paginationLeftArrow";
      var pageNumbersWrapElement = createElement("span");
      paginationElement.appendChild(pageNumbersWrapElement);
      pageNumbersWrapElement.id = "".concat(
        pageName,
        "PaginationPageNumbersWrap",
      );
      pageNumbersWrapElement.className = "paginationPageNumbersWrap";
      var rightArrowElement = createElement("span");
      paginationElement.appendChild(rightArrowElement);
      rightArrowElement.innerHTML = "&gt;";
      rightArrowElement.id = "".concat(pageName, "PaginationRightArrow");
      rightArrowElement.className = "paginationRightArrow";
      // Page index start from 0.
      // this.changePaginationParams(pageSize, countOfLastPage, fillItem, listElement, list, pageCount, paginationElement);
      _this.changePaginationParams(
        list,
        pageSize,
        listElement,
        paginationElement,
        fillItem,
      );
    };
    this.changePaginationParams = function (
      list,
      pageSize,
      listElement,
      // pageNumbersWrapElement: HTMLSpanElement,
      // leftArrowElement: HTMLSpanElement,
      // rightArrowElement: HTMLSpanElement,
      paginationElement,
      fillItem,
    ) {
      var leftArrowElement = paginationElement.children[0];
      var pageNumbersWrapElement = paginationElement.children[1];
      var rightArrowElement = paginationElement.children[2];
      var itemCount = list.length;
      var pageCount = Math.ceil(itemCount / pageSize);
      var pageMaxIndex = pageCount - 1;
      var countOfLastPage = itemCount - pageSize * pageMaxIndex;
      var currentPage = -1;
      var gotoPage = function (pageIndex) {
        if (pageIndex > pageMaxIndex) {
          pageIndex = pageMaxIndex;
        } else if (pageIndex < 0) {
          pageIndex = 0;
        }
        if (currentPage === pageIndex) {
          return;
        }
        var countOfCurrentPage = pageIndex < pageMaxIndex
          ? pageSize
          : countOfLastPage;
        var indexOffset = pageSize * pageIndex;
        for (var i = 0; i < countOfCurrentPage; ++i) {
          fillItem(listElement.children[i], list[indexOffset + i]);
        }
        for (var i = pageSize - 1; i >= countOfCurrentPage; --i) {
          fillItem(listElement.children[i], null);
        }
        currentPage = pageIndex;
        _this.pageIndex = pageIndex;
        var pageNumberElementMaxIndex = pageNumbersWrapElement.children.length -
          1;
        if (pageCount >= 10) {
          // 1, 2, 3, 4, 5, ..., 100
          // 1, ..., 4, 5, 6, ..., 100
          // 1, ..., 5, 6, 7, ..., 100
          // 1, ..., 94, 95, 96, ..., 100
          // 1, ..., 95, 96, 97, ..., 100
          // 1, ..., 96, 97, 98, 99, 100
          // 1: 0-3; 3: 95-99; 2: others
          // const kind = pageIndex < 4 ? 1 : (pageIndex >= pageMaxIndex - 4 ? 3 : 2);
          // // First is 1, last is pageCount. Skip them.
          // for (let i = 1; i < pageNumberElementMaxIndex; ++i) {
          //   const pageNumberElement = pageNumbersWrapElement.children[i] as HTMLSpanElement;
          //   // element.getAttribute(PAGE_PROPERTY)
          //   // element.innerHTML;
          // }
          var startIndex = 1, endIndex = pageNumberElementMaxIndex;
          if (pageIndex < 4) {
            endIndex = pageNumberElementMaxIndex - 1;
            for (var i = startIndex; i <= endIndex; ++i) {
              var pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            var rightEllipsisElement = createElement("span");
            rightEllipsisElement.innerHTML = "...";
            rightEllipsisElement.setAttribute(PAGE_PROPERTY, "6");
          } else if (pageIndex >= pageMaxIndex - 4) {
            startIndex = 2;
            for (var i = startIndex; i <= endIndex; ++i) {
              var pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            var leftEllipsisElement = createElement("span");
            leftEllipsisElement.innerHTML = "...";
            leftEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageMaxIndex - 4).toString(),
            );
          } else {
            startIndex = 2;
            endIndex = pageNumberElementMaxIndex - 1;
            for (var i = startIndex; i <= endIndex; ++i) {
              var pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            var leftEllipsisElement = createElement("span");
            leftEllipsisElement.innerHTML = "...";
            leftEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageIndex - 2).toString(),
            );
            var rightEllipsisElement = createElement("span");
            rightEllipsisElement.innerHTML = "...";
            rightEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageIndex + 2).toString(),
            );
          }
        }
        var pageIndexStr = (pageIndex + 1).toString();
        for (var i = 0; i <= pageNumberElementMaxIndex; ++i) {
          var pageNumberElement = pageNumbersWrapElement.children[i];
          if (pageNumberElement.innerHTML === pageIndexStr) {
            pageNumberElement.setAttribute(ACTIVATED_PROPERTY, "");
          } else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
            pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
          }
        }
        if (pageIndex === 0) {
          leftArrowElement.setAttribute("disabled", "");
        } else if (leftArrowElement.hasAttribute("disabled")) {
          leftArrowElement.removeAttribute("disabled");
        }
        if (pageIndex === pageMaxIndex) {
          rightArrowElement.setAttribute("disabled", "");
        } else if (rightArrowElement.hasAttribute("disabled")) {
          rightArrowElement.removeAttribute("disabled");
        }
        var url = window.location.href;
        var pageSeg = "&page=".concat(pageIndexStr);
        var fullUrl = url.indexOf("&page=") === -1
          ? url.concat(pageSeg)
          : url.replace(/&page=[0-9]+/g, pageSeg);
        console.log(JSON.stringify({ url: url, fullUrl: fullUrl }));
        if (url !== fullUrl) {
          setTimeout(function () {
            window.location.href = fullUrl;
          }, 0);
        }
      };
      switch (pageCount) {
        case 0:
        case 1:
          hide(paginationElement);
          break;
        default:
          showBlock(paginationElement);
          leftArrowElement.onclick = function (event) {
            gotoPage(currentPage - 1);
            return stopEventBubble(event);
          };
          rightArrowElement.onclick = function (event) {
            gotoPage(currentPage + 1);
            return stopEventBubble(event);
          };
          pageNumbersWrapElement.innerHTML = "";
          if (pageCount < 10) {
            for (var i = 0; i < pageCount; ++i) {
              var pageNumberElement = createElement("span");
              pageNumberElement.innerHTML = (i + 1).toString();
              pageNumbersWrapElement.appendChild(pageNumberElement);
            }
          } else {
            for (var i = 0; i < 5; ++i) {
              var pageNumberElement = createElement("span");
              pageNumberElement.innerHTML = (i + 1).toString();
              pageNumbersWrapElement.appendChild(pageNumberElement);
            }
            var ellipsisElement = createElement("span");
            ellipsisElement.innerHTML = "...";
            pageNumbersWrapElement.appendChild(ellipsisElement);
            var lastPageNumberElement = createElement("span");
            lastPageNumberElement.innerHTML = pageCount.toString();
            pageNumbersWrapElement.appendChild(lastPageNumberElement);
          }
          var pageNumberElementCount = pageNumbersWrapElement.children.length;
          for (var i = 0; i < pageNumberElementCount; ++i) {
            var pageNumberElement = pageNumbersWrapElement.children[i];
            pageNumberElement.onclick = function (event) {
              var element = event.target;
              var innerHTML = element.innerHTML;
              if (innerHTML === "...") {
                gotoPage(parseInt(element.getAttribute(PAGE_PROPERTY), 0) - 1);
              } else {
                gotoPage(parseInt(innerHTML, 0) - 1);
              }
              return stopEventBubble(event);
            };
          }
          break;
      }
      gotoPage(_this.pageIndex);
    };
  }
  return PcGlobal;
}());
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
var pcGlobal = new PcGlobal();
document.onclick = function () {
  querySelectorAll(
    ".topMenuItemSubMenuWrap,#shareArea,#brickPageShareArea,#brickPageSponsorImage",
  )
    .forEach(function (element) {
      return hide(element);
    });
};
var ActualPageBase = /** @class */ (function () {
  function ActualPageBase() {
  }
  ActualPageBase.prototype.init = function () {
    this.initTitleElement();
    var titleElement = getTitleElement();
    getChangeLangNotifyArrayOfCurrentPage().push(function (lang) {
      titleElement.innerHTML = titleElement.i18n[lang];
    });
    this.initMainElement();
    global.bindChangeLangEventForI18nElements();
    setCurrentLang(getCurrentLang());
  };

  return ActualPageBase;
}());

var DPIHelper = /** @class */ (function () {
  function DPIHelper() {
    var _this = this;
    this.dpiArray = [];
    this.dpiX = 0;
    this.mmToPxScale = 0;
    this.pxToMmScale = 0;
    this.convertPxToMm = function (px) {
      return px / _this.dpiX * 25.4;
    };
    this.convertMmToPx = function (mm) {
      return mm / 25.4 * _this.dpiX;
    };
    this.getMmToPxScale = function () {
      return _this.mmToPxScale;
    };
    this.getPxToMmScale = function () {
      return _this.pxToMmScale;
    };
    // https://blog.csdn.net/baidu_25343343/article/details/84950269
    var screen = window.screen;
    var dpiArray = this.dpiArray;
    if (screen.deviceXDPI) {
      dpiArray.push(screen.deviceXDPI);
      dpiArray.push(screen.deviceYDPI);
    } else {
      var div = document.createElement("div");
      div.style.cssText =
        "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
      document.body.appendChild(div);
      dpiArray.push(parseInt(div.offsetWidth.toString()));
      dpiArray.push(parseInt(div.offsetHeight.toString()));
      document.body.removeChild(div);
    }
    var dpiX = dpiArray[0];
    this.dpiX = dpiX;
    this.mmToPxScale = dpiX / 25.4;
    this.pxToMmScale = 25.4 / dpiX;
  }
  return DPIHelper;
}());

var svgSpace;
(function (svgSpace) {
  var edu;
  (function (edu) {
    var sonya;
    (function (sonya) {
      var cc;
      (function (cc) {
        // https://blog.csdn.net/yiyueqinghui/article/details/108004272
        var SVG_NS = "http://www.w3.org/2000/svg";
        var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
        var SvgHelper = /** @class */ (function () {
          function SvgHelper() {
          }
          SvgHelper.appendLine = function (
            svg,
            STYLE,
            x1,
            x2,
            y1,
            y2,
            viewBox,
          ) {
            var line = document.createElementNS(SVG_NS, "line");
            line.setAttribute("x1", "".concat(x1, "mm"));
            line.setAttribute("x2", "".concat(x2, "mm"));
            line.setAttribute("y1", "".concat(y1, "mm"));
            line.setAttribute("y2", "".concat(y2, "mm"));
            if (viewBox) {
              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }
            line.setAttribute("style", STYLE);
            svg.appendChild(line);
          };
          SvgHelper.appendCircle = function (
            svg,
            STYLE,
            cx,
            cy,
            radius,
            viewBox,
          ) {
            var circle = document.createElementNS(SVG_NS, "circle");
            circle.setAttribute("cx", "".concat(cx, "mm"));
            circle.setAttribute("cy", "".concat(cy, "mm"));
            circle.setAttribute("r", "".concat(radius, "mm"));
            circle.setAttribute("fill", "#ffffff");
            if (viewBox) {
              viewBox.left = Math.min(viewBox.left, cx - radius);
              viewBox.right = Math.max(viewBox.right, cx + radius);
              viewBox.top = Math.min(viewBox.top, cy - radius);
              viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
            }
            circle.setAttribute("style", STYLE);
            svg.appendChild(circle);
          };
          SvgHelper.appendTspan = function (text, STYLE, CHAR, dx, dy) {
            // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
            var tspan = document.createElementNS(SVG_NS, "tspan");
            // tspan.setAttribute('dx', `${dx}mm`);
            // tspan.setAttribute('dy', `${dy}mm`);
            tspan.setAttribute("dx", "".concat(dx));
            tspan.setAttribute("dy", "".concat(dy));
            // tspan.setAttribute('rotate', rotate.toString());
            tspan.setAttribute(
              "style",
              STYLE.concat(
                "dominant-baseline:middle;text-anchor:middle;",
                CHAR === "6" || CHAR === "9"
                  ? "text-decoration:underline;"
                  : "",
                CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
              ),
            );
            tspan.innerHTML = CHAR;
            text.appendChild(tspan);
          };
          SvgHelper.appendText = function (
            svg,
            STYLE,
            CONTENT,
            x,
            y,
            rotate,
            transformOrigin,
            viewBox,
            maybeNumber,
          ) {
            if (maybeNumber === void 0) maybeNumber = false;
            var g = document.createElementNS(SVG_NS, "g");
            // g.setAttribute('x', `${x}mm`);
            // g.setAttribute('y', `${y}mm`);
            // g.setAttribute('style', 'display:flex;justify-content:center;align-items:center;overflow:hidden;');
            if (rotate) {
              g.setAttribute(
                "style",
                "transform: rotate(".concat(rotate, "deg);transform-origin:")
                  .concat(transformOrigin, ";"),
              );
            }
            svg.appendChild(g);
            var text = document.createElementNS(SVG_NS, "text");
            text.setAttribute("x", "".concat(x, "mm"));
            text.setAttribute("y", "".concat(y, "mm"));
            text.setAttribute(
              "style",
              "dominant-baseline:middle;text-anchor:middle;",
            );
            // text.setAttribute('dx', '0');
            // text.setAttribute('dy', '0');
            // text.setAttribute('rotate', rotate.toString());
            if (CONTENT.indexOf("<en>") > -1) {
              var lang = getCurrentLang();
              var startTag = "<".concat(lang, ">");
              var endTag = "</".concat(lang, ">");
              if (CONTENT.indexOf(startTag) > -1) {
                CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
              }
            }
            // if(CONTENT.indexOf('<') > -1) {
            //   CONTENT = CONTENT.replace(/<br \/>/gi, '<br/>').replace(/<br\/>/gi, '<br>').replace(/\\n/g, '<br>');
            //   if (CONTENT.indexOf('<br>') > -1) {
            //     const fontSize = STYLE.indexOf('font-size:') > -1 ? STYLE.split('font-size:')[1].split(';')[0] : '2mm';
            //     const unit = fontSize.replace(/[0-9.]/gi, '');
            //     const dyNumber = parseFloat(fontSize.replace(unit, ''));
            //     // console.log(fontSize, unit, dyNumber);
            //     const segs = CONTENT.split('<br>');
            //     // let maxLength = 0;
            //     // segs.forEach((seg)=>{ maxLength = Math.max(maxLength, seg.length); });
            //     // const dyOffset = `${dyNumber}${unit}`;
            //     // segs.forEach((seg, index)=>{
            //     //     SvgHelper.appendTspan(text, '', seg, `${(seg.length - maxLength) * 0.5}em`, index ? dyOffset : '0');
            //     // });
            //     let lastLength = 0;
            //     const dyOffset = `${dyNumber}${unit}`;
            //     segs.forEach((seg, index)=>{
            //         // SvgHelper.appendTspan(text, '', seg, index ? `-${(seg.length + lastLength) * 0.5}em` : '0', index ? dyOffset : '0');
            //         SvgHelper.appendTspan(text, '', seg, index ? `-${lastLength}em` : '0', index ? dyOffset : '0');
            //         lastLength = seg.length;
            //     });
            //   } else {
            //     text.innerHTML = CONTENT;
            //   }
            // } else {
            //   CONTENT.split('').forEach((char, index) => {
            //     SvgHelper.appendTspan(text, '', char, '0', '0');
            //   });
            // }
            CONTENT = CONTENT.replace(/<br \/>/gi, "<br/>").replace(
              /<br\/>/gi,
              "<br>",
            ).replace(/\\n/gi, "<br>");
            if (CONTENT.indexOf("<br>") > -1) {
              var fontSize = STYLE.indexOf("font-size:") > -1
                ? STYLE.split("font-size:")[1].split(";")[0]
                : "2mm";
              var unit = fontSize.replace(/[0-9.]/gi, "");
              var dyNumber = parseFloat(fontSize.replace(unit, ""));
              // console.log(fontSize, unit, dyNumber);
              var segs = CONTENT.split("<br>");
              // let maxLength = 0;
              // segs.forEach((seg)=>{ maxLength = Math.max(maxLength, seg.length); });
              // const dyOffset = `${dyNumber}${unit}`;
              // segs.forEach((seg, index)=>{
              //     // SvgHelper.appendTspan(text, '', seg, index ? `-${seg.length}em` : '0', index ? dyOffset : '0');
              //     SvgHelper.appendTspan(text, '', seg, `${(seg.length - maxLength) * 0.5}em`, index ? dyOffset : '0');
              // });
              var lastLength_1 = 0;
              var dyOffset_1 = "".concat(dyNumber).concat(unit);
              segs.forEach(function (seg, index) {
                // SvgHelper.appendTspan(text, '', seg, index ? `-${(seg.length + lastLength) * 0.5}em` : '0', index ? dyOffset : '0');
                SvgHelper.appendTspan(
                  text,
                  "",
                  seg,
                  index ? "-".concat(lastLength_1, "em") : "0",
                  index ? dyOffset_1 : "0",
                );
                lastLength_1 = seg.length;
              });
            } else {
              if (maybeNumber) {
                CONTENT.split("").forEach(function (char, index) {
                  SvgHelper.appendTspan(text, "", char, "0", "0");
                });
              } else {
                SvgHelper.appendTspan(text, "", CONTENT, "0", "0");
              }
            }
            g.appendChild(text);
            if (viewBox) {
              // left/top/right/bottom/width/height
              var clientRects = text.getClientRects();
              var _a = (clientRects.length
                  ? clientRects.item(0)
                  : text.getBoundingClientRect()),
                x1 = _a.left,
                x2 = _a.right,
                y1 = _a.top,
                y2 = _a.bottom;
              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }
            text.setAttribute("style", STYLE);
          };
          SvgHelper.setSvgTextInfo = function (info, x, y, rotate) {
            info.x = x;
            info.y = y;
            info.rotate = rotate;
          };
          SvgHelper.appendOuterPath = function (
            svg,
            WIDTH,
            HEIGHT,
            mmToPxScale,
            OUTER_LINE_COLOR,
          ) {
            svg.setAttribute("width", "".concat(WIDTH, "mm"));
            svg.setAttribute("height", "".concat(HEIGHT, "mm"));
            // svg.setAttribute('style', `width:${WIDTH}mm;height:${HEIGHT}mm;`);
            var WIDTH_PX = mmToPxScale * WIDTH;
            var HEIGHT_PX = mmToPxScale * HEIGHT;
            var path = svgSpace.edu.sonya.cc.SvgHelper.createSvgPath();
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", OUTER_LINE_COLOR);
            path.setAttribute(
              "d",
              "M 0, 0 "
                .concat(
                  "h ".concat(WIDTH_PX, " "),
                  "v ".concat(HEIGHT_PX, " "),
                  "h -".concat(WIDTH_PX, " "),
                  " z",
                ),
            );
            svg.appendChild(path);
          };
          SvgHelper.appendOuterLine = function (
            svg,
            WIDTH,
            HEIGHT,
            OUTER_LINE_STYLE,
          ) {
            svg.setAttribute("width", "".concat(WIDTH, "mm"));
            svg.setAttribute("height", "".concat(HEIGHT, "mm"));
            // svg.setAttribute('style', `width:${WIDTH}mm;height:${HEIGHT}mm;`);
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
          };
          SvgHelper.getTextStyleFontSizePatchCss = function (
            NUMBER,
            TEXT_STYLE,
          ) {
            if (NUMBER > 99 && TEXT_STYLE.indexOf("font-size:") > -1) {
              var fontSizeSeg = TEXT_STYLE.split("font-size:")[1].split(";")[0];
              var fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, "");
              var fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ""));
              return "font-size:".concat(
                fontValue * 2 / NUMBER.toString().length,
              ).concat(fontUnit, ";");
            }
            return "";
          };
          SvgHelper.createSvg = function () {
            var svg = document.createElementNS(SVG_NS, "svg");
            svg.setAttribute("version", "1.1");
            svg.setAttribute("xmlns", SVG_NS);
            svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
            return svg;
          };
          SvgHelper.createSvgPath = function () {
            return document.createElementNS(SVG_NS, "path");
          };
          return SvgHelper;
        }());
        cc.SvgHelper = SvgHelper;
      })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
  })(edu = svgSpace.edu || (svgSpace.edu = {}));
})(svgSpace || (svgSpace = {}));

var edu;
(function (edu) {
  var sonya;
  (function (sonya) {
    var cc;
    (function (cc) {
      /**
       * <en>Dice Type</en>
       * <zh_cn>骰子类型</zh_cn>
       * <zh_tw>骰子類型</zh_tw>
       */
      var DiceKind;
      (function (DiceKind) {
        /**
         * <en>None</en>
         * <zh_cn>无</zh_cn>
         * <zh_tw>無</zh_tw>
         */
        DiceKind[DiceKind["none"] = 0] = "none";
        /**
         * <en>4-sided dice</en>
         * <zh_cn>4面骰子</zh_cn>
         * <zh_tw>4面骰子</zh_tw>
         */
        DiceKind[DiceKind["four"] = 1] = "four";
        /**
         * <en>6-sided dice</en>
         * <zh_cn>6面骰子</zh_cn>
         * <zh_tw>6面骰子</zh_tw>
         */
        DiceKind[DiceKind["six"] = 2] = "six";
        /**
         * <en>8-sided dice</en>
         * <zh_cn>8面骰子</zh_cn>
         * <zh_tw>8面骰子</zh_tw>
         */
        DiceKind[DiceKind["eight"] = 4] = "eight";
        /**
         * <en>12-sided dice</en>
         * <zh_cn>12面骰子</zh_cn>
         * <zh_tw>12面骰子</zh_tw>
         */
        DiceKind[DiceKind["twelve"] = 8] = "twelve";
        /**
         * <en>20-sided dice</en>
         * <zh_cn>20面骰子</zh_cn>
         * <zh_tw>20面骰子</zh_tw>
         */
        DiceKind[DiceKind["twenty"] = 16] = "twenty";
        /**
         * <en>24-sided dice</en>
         * <zh_cn>24面骰子</zh_cn>
         * <zh_tw>24面骰子</zh_tw>
         */
        DiceKind[DiceKind["twentyFour"] = 32] = "twentyFour";
      })(DiceKind = cc.DiceKind || (cc.DiceKind = {}));
      /**
       * <en>Count of Dice Type</en>
       * <zh_cn>骰子类型数量</zh_cn>
       * <zh_tw>骰子類型數量</zh_tw>
       */
      cc.DiceKindCount = 8;
      /**
       * <en>Default Value of Dice Type</en>
       * <zh_cn>骰子类型默认值</zh_cn>
       * <zh_tw>骰子類型默認值</zh_tw>
       */
      cc.DefaultDiceKind = 63;
      // https://blog.csdn.net/yiyueqinghui/article/details/108004272
      var SVG_NS = "http://www.w3.org/2000/svg";
      var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
      /**
       * <en>Dice Generator</en>
       * <zh_cn>骰子生成器</zh_cn>
       * <zh_tw>骰子生成器</zh_tw>
       */
      var DiceGenerator = /** @class */ (function () {
        function DiceGenerator() {
          this.createSvg = function () {
            var svg = document.createElementNS(SVG_NS, "svg");
            svg.setAttribute("version", "1.1");
            svg.setAttribute("xmlns", SVG_NS);
            svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
            return svg;
          };
        }
        /**
         * <en>Generate dice in batch</en>
         * <zh_cn>批量生成骰子</zh_cn>
         * <zh_tw>批量生成骰子</zh_tw>
         * @param createParameters
         * <en>Arrays: creating parameters</en>
         * <zh_cn>数组：创建参数</zh_cn>
         * <zh_tw>數組：創建參數</zh_tw>
         * @returns
         * <en>Generate results in array format, used to combine complete html</en>
         * <zh_cn>生成结果，为数组格式，用于组合完整的html</zh_cn>
         * <zh_tw>生成結果，為數組格式，用於組合完整的html</zh_tw>
         */
        DiceGenerator.prototype.batchCreate = function (createParameters) {
          var _this = this;
          createParameters.forEach(function (createParameter, index) {
            if (createParameter.id.length === 0) {
              createParameter.id = "svg_index";
            }
          });
          return createParameters.map(function (createParameter) {
            return _this.create(createParameter);
          });
        };
        /**
         * <en>Generate a single dice</en>
         * <zh_cn>生成单个骰子</zh_cn>
         * <zh_tw>生成單個骰子</zh_tw>
         * @param param0
         * <en>Deconstructed creation parameters</en>
         * <zh_cn>已解构的创建参数</zh_cn>
         * <zh_tw>已解構的創建參數</zh_tw>
         * @returns
         * <en>Generate results, used to combine complete html</en>
         * <zh_cn>生成结果，用于组合完整的html</zh_cn>
         * <zh_tw>生成結果，用於組合完整的html</zh_tw>
         */
        DiceGenerator.prototype.create = function (_a) {
          var _this = this;
          var id = _a.id,
            diceKind = _a.diceKind,
            SIDE_LENGTH = _a.sideLength,
            CONTENTS = _a.contents,
            OUTER_LINE_STYLE = _a.outerLineStyle,
            INNER_LINE_STYLE = _a.innerLineStyle,
            TEXT_STYLE = _a.textStyle,
            OPTIONS = _a.options;
          if (id.length === 0) {
            id = "svg_0";
          }
          var FIXED_SIDE_LENGTH = SIDE_LENGTH;
          var nested = false;
          switch (diceKind) {
            case DiceKind.twentyFour:
              FIXED_SIDE_LENGTH = 25;
              nested = true;
              break;
            default:
              break;
          }
          var svg = this.createSvg();
          svg.setAttribute("id", id);
          var viewBox = {
            left: 999999,
            right: 0,
            top: 999999,
            bottom: 0,
          };
          var infos = [];
          switch (diceKind) {
            case DiceKind.four:
              CONTENTS.forEach(function (content) {
                for (var i = 0; i < 3; ++i) {
                  infos.push({ content: content, x: 0, y: 0, rotate: 0 });
                }
              });
              break;
            // case DiceKind.six:
            //   break;
            // case DiceKind.eight:
            //   break;
            // case DiceKind.twelve:
            //   break;
            // case DiceKind.twenty:
            //   break;
            // case DiceKind.twentyFour:
            //   break;
            default:
              CONTENTS.forEach(function (content) {
                infos.push({ content: content, x: 0, y: 0, rotate: 0 });
              });
              break;
          }
          var mmToPxScale = (new DPIHelper()).getMmToPxScale();
          switch (diceKind) {
            case DiceKind.four:
              this.drawGraphsOfFourSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfFourSidedDice(infos, FIXED_SIDE_LENGTH, CONTENTS);
              break;
            case DiceKind.six:
              this.drawGraphsOfSixSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfSixSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.eight:
              this.drawGraphsOfEightSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfEightSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.twelve:
              this.drawGraphsOfTwelveSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTwelveSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.twenty:
              this.drawGraphsOfTwentySidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTwentySidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.twentyFour:
              this.drawGraphsOfTwentyFourSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTwentyFourSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            default:
              break;
          }
          infos.forEach(function (_a) {
            var content = _a.content, x = _a.x, y = _a.y, rotate = _a.rotate;
            _this.appendText(svg, TEXT_STYLE, content, x, y, rotate, null);
          });
          var width = "".concat(viewBox.right, "mm");
          var height = "".concat(viewBox.bottom, "mm");
          svg.setAttribute("width", width);
          svg.setAttribute("height", height);
          // svg.setAttribute('style', `width:${width};height:${height};`);
          // const outerSvg = nested && (FIXED_SIDE_LENGTH !== SIDE_LENGTH) ? this.createSvg(): null;
          var outerSvg = createElement("wrap"); // as HTMLDivElement;
          outerSvg.appendChild(svg);
          outerSvg.setAttribute("id", id.concat("_wrapper"));
          if (FIXED_SIDE_LENGTH !== SIDE_LENGTH) {
            var scale = SIDE_LENGTH / FIXED_SIDE_LENGTH;
            var widthOuterSvg = "".concat(scale * viewBox.right, "mm");
            var heightOuterSvg = "".concat(scale * viewBox.bottom, "mm");
            var transformScale = mmToPxScale * (scale - 1) / 2;
            outerSvg.setAttribute(
              "style",
              "width:".concat(widthOuterSvg, ";height:").concat(
                heightOuterSvg,
                ";display:inline-block;",
              ),
            );
            svg.setAttribute(
              "transform",
              "translate(".concat(viewBox.right * transformScale, ", ").concat(
                viewBox.bottom * transformScale,
                ") scale(",
              ).concat(scale, ", ").concat(scale, ")"),
            );
            svg.setAttribute("transform-origin", "center");
          }
          var css =
            "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
          return { id: id, svg: nested ? outerSvg : svg, css: css };
        };
        DiceGenerator.prototype.drawGraphsOfFourSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
          var HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
          var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
          // 内部横线
          x1 = SIDE_LENGTH * 0.5,
            x2 = x1 + SIDE_LENGTH,
            y1 = HEIGHT_OF_ONE,
            y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = 0, x2 = x1 + SIDE_LENGTH, y1 += HEIGHT_OF_ONE, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          // 内部左下斜线
          x1 = SIDE_LENGTH, x2 = SIDE_LENGTH * 0.5, y1 = 0, y2 = HEIGHT_OF_ONE;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += SIDE_LENGTH * 0.5,
            x2 += SIDE_LENGTH * 0.5,
            y1 += HEIGHT_OF_ONE,
            y2 += HEIGHT_OF_ONE;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          // 内部右下斜线
          x1 = SIDE_LENGTH * 0.5,
            x2 = SIDE_LENGTH,
            y1 = HEIGHT_OF_ONE,
            y2 = HEIGHT_OF_TWO;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          var EXTNED_SCALE = 0.15;
          var EXTNED_LENGTH = EXTNED_SCALE * SIDE_LENGTH;
          var OFFSET_X = EXTNED_LENGTH * 0.5;
          var OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
          // 外部线
          x1 = 0,
            x2 = SIDE_LENGTH * 0.5,
            y1 = HEIGHT_OF_TWO,
            y2 = HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 -= OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 = SIDE_LENGTH * 1 - EXTNED_LENGTH, y1 = y2, y2 = 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 += SIDE_LENGTH * 0.5, y1 = y2, y2 += HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2,
            x2 = SIDE_LENGTH * 2 + OFFSET_X,
            y1 = y2,
            y2 = HEIGHT_OF_TWO - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 -= SIDE_LENGTH, y1 = y2, y2 -= 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 = OFFSET_X, y1 = y2, y2 -= 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x2, x2 = 0, y1 = y2, y2 = HEIGHT_OF_TWO;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
        };
        DiceGenerator.prototype.drawTextsOfFourSidedDice = function (
          infos,
          SIDE_LENGTH,
          CONTENTS,
        ) {
          // 12 text elements.
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 25.0 / 25, SIDE_LENGTH * 18.0 / 25, 0);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 21.0 / 25, SIDE_LENGTH * 9.5 / 25, -120);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 31.0 / 25, SIDE_LENGTH * 11.5 / 25, 120);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 40.0 / 25, 0);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 19.0 / 25, SIDE_LENGTH * 33.0 / 25, 120);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 31.5 / 25, 60);
          // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 12.5 / 25, SIDE_LENGTH * 40.0 / 25, 0);
          // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 32.5 / 25, SIDE_LENGTH * 32.0 / 25, -120);
          // this.setSvgTextInfo(infos[8], SIDE_LENGTH * 20.0 / 25, SIDE_LENGTH * 30.0 / 25, -60);
          // this.setSvgTextInfo(infos[9], SIDE_LENGTH * 27.0 / 25, SIDE_LENGTH * 22.0 / 25, 180);
          // this.setSvgTextInfo(infos[10], SIDE_LENGTH * 9.5 / 25, SIDE_LENGTH * 31.5 / 25, -120);
          // this.setSvgTextInfo(infos[11], SIDE_LENGTH * 42.0 / 25, SIDE_LENGTH * 33.0 / 25, 120);
          if (CONTENTS.join(",") === "ˉ,ˊ,ˇ,ˋ") {
            this.setSvgTextInfo(
              infos[0],
              SIDE_LENGTH * 24.5 / 25,
              SIDE_LENGTH * 22.5 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[1],
              SIDE_LENGTH * 20.0 / 25,
              SIDE_LENGTH * 13.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[2],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 15.0 / 25,
              120,
            );
            this.setSvgTextInfo(
              infos[3],
              SIDE_LENGTH * 37.5 / 25,
              SIDE_LENGTH * 44.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[4],
              SIDE_LENGTH * 18.5 / 25,
              SIDE_LENGTH * 36.0 / 25,
              120,
            );
            this.setSvgTextInfo(
              infos[5],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 34.0 / 25,
              60,
            );
            this.setSvgTextInfo(
              infos[6],
              SIDE_LENGTH * 12.5 / 25,
              SIDE_LENGTH * 44.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[7],
              SIDE_LENGTH * 32.0 / 25,
              SIDE_LENGTH * 35.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[8],
              SIDE_LENGTH * 20.0 / 25,
              SIDE_LENGTH * 33.0 / 25,
              -60,
            );
            this.setSvgTextInfo(
              infos[9],
              SIDE_LENGTH * 27.5 / 25,
              SIDE_LENGTH * 25.0 / 25,
              180,
            );
            this.setSvgTextInfo(
              infos[10],
              SIDE_LENGTH * 8.0 / 25,
              SIDE_LENGTH * 35.0 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[11],
              SIDE_LENGTH * 42.0 / 25,
              SIDE_LENGTH * 36.0 / 25,
              120,
            );
          } else {
            this.setSvgTextInfo(
              infos[0],
              SIDE_LENGTH * 24.5 / 25,
              SIDE_LENGTH * 19.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[1],
              SIDE_LENGTH * 21.0 / 25,
              SIDE_LENGTH * 10.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[2],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 12.5 / 25,
              120,
            );
            this.setSvgTextInfo(
              infos[3],
              SIDE_LENGTH * 37.5 / 25,
              SIDE_LENGTH * 41.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[4],
              SIDE_LENGTH * 18.5 / 25,
              SIDE_LENGTH * 34.0 / 25,
              120,
            );
            this.setSvgTextInfo(
              infos[5],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 32.5 / 25,
              60,
            );
            this.setSvgTextInfo(
              infos[6],
              SIDE_LENGTH * 12.5 / 25,
              SIDE_LENGTH * 41.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[7],
              SIDE_LENGTH * 32.5 / 25,
              SIDE_LENGTH * 32.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[8],
              SIDE_LENGTH * 19.5 / 25,
              SIDE_LENGTH * 31.0 / 25,
              -60,
            );
            this.setSvgTextInfo(
              infos[9],
              SIDE_LENGTH * 26.5 / 25,
              SIDE_LENGTH * 23.5 / 25,
              180,
            );
            this.setSvgTextInfo(
              infos[10],
              SIDE_LENGTH * 8.5 / 25,
              SIDE_LENGTH * 32.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[11],
              SIDE_LENGTH * 41.0 / 25,
              SIDE_LENGTH * 34.0 / 25,
              120,
            );
          }
        };
        DiceGenerator.prototype.drawGraphsOfSixSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var SIDE_LENGTH_PX = SIDE_LENGTH * mmToPxScale;
          var duckTongueScale = 0.5;
          var duckTongueHeightPx = SIDE_LENGTH_PX * duckTongueScale;
          var duckTongueHeight = SIDE_LENGTH * duckTongueScale;
          var pasteRegionScale = 0.75;
          var pasteRegionHeightPx = SIDE_LENGTH_PX * pasteRegionScale;
          var pasteRegionHeight = SIDE_LENGTH * pasteRegionScale;
          var offsetScale = 0.1;
          var offsetX = SIDE_LENGTH_PX * offsetScale;
          var pasteRegionWidth = SIDE_LENGTH_PX - offsetX * 2;
          console.log(SIDE_LENGTH, mmToPxScale, SIDE_LENGTH_PX);
          var path = document.createElementNS(SVG_NS, "path");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#000000");
          path.setAttribute(
            "d",
            "M 0, ".concat(duckTongueHeightPx + SIDE_LENGTH_PX, " ")
              .concat(
                "h ".concat(SIDE_LENGTH_PX * 2, " "),
                "l ".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                "h ".concat(pasteRegionWidth, " "),
                "l ".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                "v -".concat(SIDE_LENGTH_PX, " "),
                "l ".concat(offsetX, ", -").concat(duckTongueHeightPx, " "),
                "h ".concat(pasteRegionWidth, " "),
                "l ".concat(offsetX, ", ").concat(duckTongueHeightPx, " "),
                "v ".concat(SIDE_LENGTH_PX, " "),
                "l ".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                "h ".concat(pasteRegionWidth, " "),
                "l ".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                // `h ${SIDE_LENGTH_PX} `,
                "v ".concat(SIDE_LENGTH_PX, " "),
                "h -".concat(SIDE_LENGTH_PX * 2, " "),
                "l -".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                "h -".concat(pasteRegionWidth, " "),
                "l -".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                "v ".concat(SIDE_LENGTH_PX, " "),
                "l -".concat(offsetX, ", ").concat(duckTongueHeightPx, " "),
                "h -".concat(pasteRegionWidth, " "),
                "l -".concat(offsetX, ", -").concat(duckTongueHeightPx, " "),
                "v -".concat(SIDE_LENGTH_PX, " "),
                "l -".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                "h -".concat(pasteRegionWidth, " "),
                "l -".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                " z",
              ),
          );
          svg.appendChild(path);
          var X1 = 0,
            X2 = SIDE_LENGTH * 1,
            X3 = SIDE_LENGTH * 2,
            X4 = SIDE_LENGTH * 3,
            X5 = SIDE_LENGTH * 4,
            X6 = SIDE_LENGTH * 5;
          var Y1 = 0,
            Y2 = duckTongueHeight,
            Y4 = Y2 + SIDE_LENGTH,
            Y5 = Y4 + SIDE_LENGTH,
            Y7 = Y5 + SIDE_LENGTH,
            Y8 = Y7 + duckTongueHeight,
            Y3 = Y4 - pasteRegionHeight,
            Y6 = Y5 + pasteRegionHeight;
          // 内部线
          // this.appendLine(svg, INNER_LINE_STYLE, X3, X4, Y2, Y2, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X2, X5, Y4, Y4, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
          this.appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
          this.appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
          this.appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
          viewBox.left = 0;
          viewBox.top = 0;
          viewBox.right = SIDE_LENGTH * 5;
          viewBox.bottom = SIDE_LENGTH * 3 + SIDE_LENGTH * duckTongueScale * 2;
        };
        DiceGenerator.prototype.drawTextsOfSixSidedDice = function (
          infos,
          SIDE_LENGTH,
        ) {
          // // font-size: 5mm;
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 61.0 / 25, SIDE_LENGTH * 75.0 / 25, 180);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 113.5 / 25, 90);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 36.0 / 25, SIDE_LENGTH * 52.5 / 25, 0);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 61.0 / 25, SIDE_LENGTH * 52.0 / 25, 180);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 72.5 / 25, SIDE_LENGTH * 40.0 / 25, -90);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 36.0 / 25, SIDE_LENGTH * 77.5 / 25, 0);
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 77.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 62.5 / 25,
            SIDE_LENGTH * 100.0 / 25,
            90,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 52.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 62.5 / 25,
            SIDE_LENGTH * 52.5 / 25,
            -90,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 77.5 / 25,
            0,
          );
        };
        DiceGenerator.prototype.drawGraphsOfEightSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
          var HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
          var BOTTOM = HEIGHT_OF_ONE * 3;
          // 内部横线
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            0,
            SIDE_LENGTH * 2,
            HEIGHT_OF_ONE,
            HEIGHT_OF_ONE,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 0.5,
            SIDE_LENGTH * 2.5,
            HEIGHT_OF_TWO,
            HEIGHT_OF_TWO,
            null,
          );
          // 内部左下斜线
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 1,
            SIDE_LENGTH * 0.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 2,
            SIDE_LENGTH * 1.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 3,
            SIDE_LENGTH * 2,
            HEIGHT_OF_ONE,
            BOTTOM,
            null,
          );
          // 内部右下斜线
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 1,
            SIDE_LENGTH * 1.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 1.5,
            SIDE_LENGTH * 2.5,
            0,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 3,
            SIDE_LENGTH * 3.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          var EXTNED_SCALE = 0.15;
          var EXTNED_LENGTH = EXTNED_SCALE * SIDE_LENGTH;
          var OFFSET_X = EXTNED_LENGTH * 0.5;
          var OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
          var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
          // 外部线
          x1 = 0,
            x2 = OFFSET_X,
            y1 = HEIGHT_OF_ONE,
            y2 = HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 = SIDE_LENGTH - OFFSET_X, y1 = y2;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 = SIDE_LENGTH, y1 = y2, y2 = HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 += SIDE_LENGTH * 0.5, y1 = y2, y2 = 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 = 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2,
            x2 += SIDE_LENGTH * 0.5 - OFFSET_X,
            y1 = y2,
            y2 = HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 += SIDE_LENGTH + EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2,
            x2 += SIDE_LENGTH * 0.5 - EXTNED_LENGTH + OFFSET_X,
            y1 = y2,
            y2 += HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= SIDE_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 += OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2,
            x2 += EXTNED_LENGTH - SIDE_LENGTH * 0.5 - OFFSET_X,
            y1 = y2,
            y2 += HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= SIDE_LENGTH * 0.5, y1 = y2, y2 -= HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2, x2 -= SIDE_LENGTH - OFFSET_X * 2, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          x1 = x2,
            x2 -= OFFSET_X + SIDE_LENGTH * 0.5,
            y1 = y2,
            y2 -= OFFSET_Y + HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
          viewBox.right = SIDE_LENGTH * 3.5 + EXTNED_LENGTH;
          viewBox.bottom = BOTTOM;
        };
        DiceGenerator.prototype.drawTextsOfEightSidedDice = function (
          infos,
          SIDE_LENGTH,
        ) {
          // 8 text elements.
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 78.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 25.5 / 25, SIDE_LENGTH * 38.0 / 25, 0);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 53.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 50.0 / 25, SIDE_LENGTH * 38.0 / 25, 0);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 28.5 / 25, SIDE_LENGTH * 38.0 / 25, 180);
          // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 39.0 / 25, 0);
          // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 41.5 / 25, SIDE_LENGTH * 17.5 / 25, 180);
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 78.0 / 25,
            SIDE_LENGTH * 38.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 25.5 / 25,
            SIDE_LENGTH * 38.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 53.0 / 25,
            SIDE_LENGTH * 38.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 50.0 / 25,
            SIDE_LENGTH * 38.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 28.5 / 25,
            SIDE_LENGTH * 38.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 75.0 / 25,
            SIDE_LENGTH * 39.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 41.5 / 25,
            SIDE_LENGTH * 17.5 / 25,
            180,
          );
        };
        DiceGenerator.prototype.drawGraphsOfTwelveSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var QUARTER_SIDE_LENGTH = SIDE_LENGTH * 0.25;
          var RADIUS = SIDE_LENGTH * 0.2;
          var ANGLE18 = Math.PI * 18 / 180;
          var ANGLE36 = Math.PI * 36 / 180;
          var ANGLE54 = Math.PI * 54 / 180;
          var ANGLE72 = Math.PI * 72 / 180;
          var SIN18 = Math.sin(ANGLE18);
          var SIN36 = Math.sin(ANGLE36);
          var SIN54 = Math.sin(ANGLE54);
          var SIN72 = Math.sin(ANGLE72);
          var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
          var LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
          var HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;
          var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
          var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
          var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
          var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
          var SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN18;
          var SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN36;
          var SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN54;
          var SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN72;
          var SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;
          var SECOND_GROUP_OFFSET = SIDE_LENGTH * 2 + LONG_SIDE_LENGTH +
            SIN18_MULTIPLY_SIDE_LENGTH;
          var TOP = SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
          for (var groupIndex = 0; groupIndex < 2; ++groupIndex) {
            var LEFT = (groupIndex === 0 ? 0 : SECOND_GROUP_OFFSET) +
              SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
            var A1x = 0, A1y = 0;
            var A2x = 0, A2y = 0;
            var A3x = 0, A3y = 0;
            var A4x = 0, A4y = 0;
            var A5x = 0, A5y = 0;
            var B1x = 0, B1y = 0;
            var B2x = 0, B2y = 0;
            var B5x = 0, B5y = 0;
            var C1x = 0, C1y = 0;
            var C2x = 0, C2y = 0;
            var C5x = 0, C5y = 0;
            var D1x = 0, D1y = 0;
            var D2x = 0, D2y = 0;
            var D5x = 0, D5y = 0;
            var E1x = 0, E1y = 0;
            var E2x = 0, E2y = 0;
            var E5x = 0, E5y = 0;
            var F1x = 0, F1y = 0;
            var F2x = 0, F2y = 0;
            var F5x = 0, F5y = 0;
            if (groupIndex === 0) {
              A1x = LEFT +
                SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) +
                LONG_SIDE_LENGTH;
              A2x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
              A5x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
              A3x = A2x - SIN18_MULTIPLY_SIDE_LENGTH;
              A4x = A5x + SIN18_MULTIPLY_SIDE_LENGTH;
              B1x = A5x - HALF_SIDE_LENGTH;
              B2x = A5x + HALF_SIDE_LENGTH;
              B5x = A1x - LONG_SIDE_LENGTH;
              C1x = A2x + HALF_SIDE_LENGTH;
              C5x = A2x - HALF_SIDE_LENGTH;
              C2x = A1x + LONG_SIDE_LENGTH;
              D1x = A3x + LONG_SIDE_LENGTH;
              D2x = A3x + HALF_LONG_SIDE_LENGTH;
              D5x = A2x + SIDE_LENGTH;
              E1x = A4x + HALF_SIDE_LENGTH;
              E2x = A4x - SIN18_MULTIPLY_SIDE_LENGTH;
              E5x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
              F1x = A4x - LONG_SIDE_LENGTH;
              F5x = A4x - HALF_LONG_SIDE_LENGTH;
              F2x = A5x - SIDE_LENGTH;
              A1y = TOP + SIN72_MULTIPLY_SIDE_LENGTH;
              A2y = A1y + SIN36_MULTIPLY_SIDE_LENGTH;
              A5y = A2y;
              A3y = A2y + SIN72_MULTIPLY_SIDE_LENGTH;
              A4y = A3y;
              B1y = TOP;
              B2y = B1y;
              B5y = A1y;
              C1y = B1y;
              C5y = B1y;
              C2y = B5y;
              D1y = A3y;
              D2y = A3y + SIN36_MULTIPLY_SIDE_LENGTH;
              D5y = A2y;
              E2y = A4y + SIN72_MULTIPLY_SIDE_LENGTH;
              E5y = E2y;
              E1y = E2y + SIN36_MULTIPLY_SIDE_LENGTH;
              F1y = A4y;
              F2y = A2y;
              F5y = D2y;
            } else {
              A1x = LEFT + LONG_SIDE_LENGTH + SIDE_LENGTH;
              A2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
              A3x = A1x - HALF_SIDE_LENGTH;
              A5x = A1x - SIDE_LENGTH;
              A4x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;
              B1x = A5x + HALF_SIDE_LENGTH;
              B2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
              B5x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;
              C2x = A2x + SIDE_LENGTH;
              C1x = A1x + LONG_SIDE_LENGTH;
              C5x = A1x + HALF_LONG_SIDE_LENGTH;
              D2x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
              D1x = D2x + SIDE_LENGTH;
              D5x = D1x + SIN18_MULTIPLY_SIDE_LENGTH;
              E2x = A3x - LONG_SIDE_LENGTH;
              E1x = E2x + SIN18_MULTIPLY_SIDE_LENGTH;
              E5x = E1x + SIDE_LENGTH;
              F1x = A5x - LONG_SIDE_LENGTH;
              F2x = A5x - HALF_LONG_SIDE_LENGTH;
              F5x = A4x - SIDE_LENGTH;
              A1y = TOP + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
              A2y = A1y + SIN72_MULTIPLY_SIDE_LENGTH;
              A3y = A1y + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
              A4y = A2y;
              A5y = A1y;
              B1y = TOP;
              B2y = A5y - SIN72_MULTIPLY_SIDE_LENGTH;
              B5y = B2y;
              C1y = A1y;
              C2y = A2y;
              C5y = A1y - SIN36_MULTIPLY_SIDE_LENGTH;
              D5y = A3y;
              D1y = D5y + SIN72_MULTIPLY_SIDE_LENGTH;
              D2y = D1y;
              E1y = D1y;
              E2y = D5y;
              E5y = D1y;
              F1y = C1y;
              F2y = C5y;
              F5y = A4y;
            }
            var LINE_STYLE = groupIndex === 0
              ? INNER_LINE_STYLE
              : OUTER_LINE_STYLE;
            this.appendLine(svg, LINE_STYLE, A1x, A2x, A1y, A2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A2x, A3x, A2y, A3y, viewBox);
            this.appendLine(svg, LINE_STYLE, A3x, A4x, A3y, A4y, viewBox);
            this.appendLine(svg, LINE_STYLE, A4x, A5x, A4y, A5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A5x, A1x, A5y, A1y, viewBox);
            this.appendLine(svg, LINE_STYLE, A1x, B2x, A1y, B2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A1x, C5x, A1y, C5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A2x, C2x, A2y, C2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A2x, D5x, A2y, D5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A3x, D2x, A3y, D2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A3x, E5x, A3y, E5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A4x, E2x, A4y, E2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A4x, F5x, A4y, F5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A5x, F2x, A5y, F2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A5x, B5x, A5y, B5y, viewBox);
            this.appendLine(svg, LINE_STYLE, B1x, B2x, B1y, B2y, viewBox);
            this.appendLine(svg, LINE_STYLE, B1x, B5x, B1y, B5y, viewBox);
            this.appendLine(svg, LINE_STYLE, C1x, C2x, C1y, C2y, viewBox);
            this.appendLine(svg, LINE_STYLE, C1x, C5x, C1y, C5y, viewBox);
            this.appendLine(svg, LINE_STYLE, D1x, D2x, D1y, D2y, viewBox);
            this.appendLine(svg, LINE_STYLE, D1x, D5x, D1y, D5y, viewBox);
            this.appendLine(svg, LINE_STYLE, E1x, E2x, E1y, E2y, viewBox);
            this.appendLine(svg, LINE_STYLE, E1x, E5x, E1y, E5y, viewBox);
            this.appendLine(svg, LINE_STYLE, F1x, F2x, F1y, F2y, viewBox);
            this.appendLine(svg, LINE_STYLE, F1x, F5x, F1y, F5y, viewBox);
            var B6x = 0, B6y = 0;
            var B7x = 0, B7y = 0;
            var B8x = 0, B8y = 0;
            var B9x = 0, B9y = 0;
            var C6x = 0, C6y = 0;
            var C7x = 0, C7y = 0;
            var C8x = 0, C8y = 0;
            var C9x = 0, C9y = 0;
            var D6x = 0, D6y = 0;
            var D7x = 0, D7y = 0;
            var D8x = 0, D8y = 0;
            var D9x = 0, D9y = 0;
            var E6x = 0, E6y = 0;
            var E7x = 0, E7y = 0;
            var E8x = 0, E8y = 0;
            var E9x = 0, E9y = 0;
            var F6x = 0, F6y = 0;
            var F7x = 0, F7y = 0;
            var F8x = 0, F8y = 0;
            var F9x = 0, F9y = 0;
            // const SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN18;
            // const SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN36;
            // const SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN54;
            // const SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN72;
            if (groupIndex === 0) {
              B6x = B5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              B6y = B5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              B7x = B1x - QUARTER_SIDE_LENGTH;
              C8x = C1x + QUARTER_SIDE_LENGTH;
              B7y = B1y;
              C8y = B1y;
              B8x = B1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              B9x = B2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              C6x = C5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              C7x = C1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              B8y = B1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              B9y = B8y;
              C6y = B8y;
              C7y = B8y;
              C9x = C2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              C9y = C2y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              // 无D6和D7
              D8x = D1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              D8y = D1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              D9x = D2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              D9y = D2y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              E6x = E5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              E6y = E5y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              E7x = E1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              E8x = E1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              E7y = E1y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              E8y = E7y;
              E9x = E2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              E9y = E2y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              F6x = F5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              F6y = F5y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              F7x = F1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              F7y = F1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              F8x = F1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              F8y = F1y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              F9x = F2x - QUARTER_SIDE_LENGTH;
              F9y = F2y;
              // } else {
              //   B6x = B5x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B6y = B5y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   B7x = B1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B8x = B1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B7y = B1y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B8y = B7y;
              //
              //   B9x = B2x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B9y = B2y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C6x = C5x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   C6y = C5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C7x = C1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   C7y = C1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C8x = C1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   C8y = C1y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C9x = C2x + QUARTER_SIDE_LENGTH;
              //   C9y = C2y;
              //
              //   D6x = D5x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   D6y = D5y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   D7x = D1x + QUARTER_SIDE_LENGTH;
              //   D7y = D1y - 0;
              //
              //   D8x = D1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   D8y = D1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   D9x = D2x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   D9y = D2y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   E6x = E5x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   E6y = E5y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   E7x = E1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   E7y = E1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   E8x = E1x - QUARTER_SIDE_LENGTH;
              //   E8y = E1y + 0;
              //
              //   E9x = E2x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   E9y = E2y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   // F6x = F5x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   // F6y = F5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   // F7x = F1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   // F7y = F1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   F8x = F1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   F8y = F1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   F9x = F2x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   F9y = F2y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
            }
            if (groupIndex === 0) {
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B5x,
                B6x,
                B5y,
                B6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B1x,
                B7x,
                B1y,
                B7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B1x,
                B8x,
                B1y,
                B8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B2x,
                B9x,
                B2y,
                B9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C5x,
                C6x,
                C5y,
                C6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C1x,
                C7x,
                C1y,
                C7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C1x,
                C8x,
                C1y,
                C8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C2x,
                C9x,
                C2y,
                C9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D1x,
                D8x,
                D1y,
                D8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D2x,
                D9x,
                D2y,
                D9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E5x,
                E6x,
                E5y,
                E6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E1x,
                E7x,
                E1y,
                E7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E1x,
                E8x,
                E1y,
                E8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E2x,
                E9x,
                E2y,
                E9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F5x,
                F6x,
                F5y,
                F6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F1x,
                F7x,
                F1y,
                F7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F1x,
                F8x,
                F1y,
                F8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F2x,
                F9x,
                F2y,
                F9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B6x,
                B7x,
                B6y,
                B7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B8x,
                B9x,
                B8y,
                B9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C6x,
                C7x,
                C6y,
                C7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C8x,
                C9x,
                C8y,
                C9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D6x,
                D7x,
                D6y,
                D7y,
                viewBox,
              ); //
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D8x,
                D9x,
                D8y,
                D9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E6x,
                E7x,
                E6y,
                E7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E8x,
                E9x,
                E8y,
                E9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F6x,
                F7x,
                F6y,
                F7y,
                viewBox,
              ); //
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F8x,
                F9x,
                F8y,
                F9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B2x,
                C5x,
                B2y,
                C5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C2x,
                D5x,
                C2y,
                D5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D2x,
                E5x,
                D2y,
                E5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E2x,
                F5x,
                E2y,
                F5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F2x,
                B5x,
                F2y,
                B5y,
                viewBox,
              );
            }
            if (OPTIONS.withHole) {
              var CC1x = (A1x + A2x + A3x + A4x + A5x) * 0.2,
                CC1y = (A1y + A2y + A3y + A4y + A5y) * 0.2;
              var CC2x = (A1x + A5x + B1x + B2x + B5x) * 0.2,
                CC2y = (A1y + A5y + B1y + B2y + B5y) * 0.2;
              var CC3x = (A1x + A2x + C1x + C2x + C5x) * 0.2,
                CC3y = (A1y + A2y + C1y + C2y + C5y) * 0.2;
              var CC4x = (A2x + A3x + D1x + D2x + D5x) * 0.2,
                CC4y = (A2y + A3y + D1y + D2y + D5y) * 0.2;
              var CC5x = (A3x + A4x + E1x + E2x + E5x) * 0.2,
                CC5y = (A3y + A4y + E1y + E2y + E5y) * 0.2;
              var CC6x = (A4x + A5x + F1x + F2x + F5x) * 0.2,
                CC6y = (A4y + A5y + F1y + F2y + F5y) * 0.2;
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC1x,
                CC1y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC2x,
                CC2y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC3x,
                CC3y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC4x,
                CC4y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC5x,
                CC5y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC6x,
                CC6y,
                RADIUS,
                null,
              );
            }
          }
        };
        DiceGenerator.prototype.drawTextsOfTwelveSidedDice = function (
          infos,
          SIDE_LENGTH,
        ) {
          // 12 text elements.
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 58.5 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 130.0 / 25,
            SIDE_LENGTH * 90.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 170.0 / 25,
            SIDE_LENGTH * 90.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 118.0 / 25,
            SIDE_LENGTH * 50.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 185.0 / 25,
            SIDE_LENGTH * 50.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 150.5 / 25,
            SIDE_LENGTH * 25.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 157.5 / 25,
            SIDE_LENGTH * 30.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 125.0 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[8],
            SIDE_LENGTH * 190.0 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[9],
            SIDE_LENGTH * 136.5 / 25,
            SIDE_LENGTH * 90.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[10],
            SIDE_LENGTH * 177.0 / 25,
            SIDE_LENGTH * 90.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[11],
            SIDE_LENGTH * 52.0 / 25,
            SIDE_LENGTH * 50.0 / 25,
            180,
          );
        };
        DiceGenerator.prototype.drawGraphsOfTwentySidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var pasteRegionScale = 0.2;
          var pasteRegion = SIDE_LENGTH * pasteRegionScale;
          var pasteRegionPx = pasteRegion * mmToPxScale;
          var ANGLE60 = Math.PI * 60 / 180;
          var SIN60 = Math.sin(ANGLE60);
          var COS60 = Math.cos(ANGLE60);
          var OneX = SIDE_LENGTH * COS60;
          var OneY = SIDE_LENGTH * SIN60;
          var pasteRegionShortBiasX = pasteRegion * COS60;
          var pasteRegionShortBiasY = pasteRegion * SIN60;
          var pasteRegionLongBias = SIDE_LENGTH * (1 - pasteRegionScale);
          var pasteRegionLongBiasX = pasteRegionLongBias * COS60;
          var pasteRegionLongBiasY = pasteRegionLongBias * SIN60;
          var TwoY = OneY * 2;
          var ThreeY = OneY * 3;
          var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
          var FIVE_SIDE = SIDE_LENGTH * 5;
          x1 = pasteRegionLongBiasX + pasteRegion, x2 = x1 + FIVE_SIDE;
          y1 = OneY, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x1 - OneX, x2 = x1 + FIVE_SIDE;
          y1 += OneY, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 -= OneX, x2 = x1 - OneX;
          y1 = OneY, y2 = TwoY;
          for (var i = 0; i < 5; ++i) {
            x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
            this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          }
          x1 = pasteRegionShortBiasX, x2 = x1 + OneX;
          y1 = TwoY, y2 = ThreeY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += OneX, x2 += OneX * 2;
          y1 = OneY, y2 = y1 + TwoY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 -= OneX;
          y1 = 0;
          for (var i = 0; i < 3; ++i) {
            x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
            this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          }
          x1 += SIDE_LENGTH, x2 += OneX;
          y2 = TwoY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += SIDE_LENGTH, x2 += OneX;
          y2 = OneY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          var OneXPx = OneX * mmToPxScale;
          var OneYPx = OneY * mmToPxScale;
          var pasteRegionShortBiasXPx = pasteRegionShortBiasX * mmToPxScale;
          var pasteRegionShortBiasYPx = pasteRegionShortBiasY * mmToPxScale;
          var pasteRegionLongBiasXPx = pasteRegionLongBiasX * mmToPxScale;
          var pasteRegionLongBiasYPx = pasteRegionLongBiasY * mmToPxScale;
          var path = document.createElementNS(SVG_NS, "path");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#000000");
          path.setAttribute(
            "d",
            "M 0, ".concat(OneYPx + pasteRegionLongBiasYPx, " ")
              .concat(
                "l ".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "h ".concat(pasteRegionPx),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx + OneXPx * 2, ", ").concat(
                  pasteRegionShortBiasYPx + OneYPx * 2,
                ),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                " z",
              ),
          );
          svg.appendChild(path);
          viewBox.right = SIDE_LENGTH * 5 + OneX + pasteRegion;
          viewBox.bottom = OneY * 3;
        };
        DiceGenerator.prototype.drawTextsOfTwentySidedDice = function (
          infos,
          SIDE_LENGTH,
        ) {
          // 20 text elements.
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 27.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 52.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 77.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 102.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 127.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 15.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 40.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 65.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[8],
            SIDE_LENGTH * 90.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[9],
            SIDE_LENGTH * 115.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[10],
            SIDE_LENGTH * 115.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[11],
            SIDE_LENGTH * 90.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[12],
            SIDE_LENGTH * 65.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[13],
            SIDE_LENGTH * 40.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[14],
            SIDE_LENGTH * 15.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[15],
            SIDE_LENGTH * 127.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[16],
            SIDE_LENGTH * 102.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[17],
            SIDE_LENGTH * 77.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[18],
            SIDE_LENGTH * 52.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[19],
            SIDE_LENGTH * 27.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
        };
        DiceGenerator.prototype.getSinByAngle = function (angle) {
          return Math.sin(angle * Math.PI / 180);
        };
        DiceGenerator.prototype.getCosByAngle = function (angle) {
          return Math.cos(angle * Math.PI / 180);
        };
        // fixContent(content)  { return content.toString().replace(/([69])/gi, '<font style="text-decoration:underline;">$1</font>'); }
        DiceGenerator.prototype.drawGraphsOfTwentyFourSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var ANGLE = 48.275;
          var _a = this,
            getSinByAngle = _a.getSinByAngle,
            getCosByAngle = _a.getCosByAngle;
          var TEXT_OFFSET_SCALE = 0.2;
          var BIGER_ANGLE = 180 - ANGLE * 2;
          var SMALL_ANGLE_COS = Math.cos(ANGLE * Math.PI / 180);
          var HALF_LONG_SIDE_LENGTH = 50 * 0.5;
          var SHORT_SIDE_LENGTH = HALF_LONG_SIDE_LENGTH / SMALL_ANGLE_COS;
          var ax = 0,
            ay = 0,
            bx = 0,
            by = 0,
            cx = 0,
            cy = 0,
            dx = 0,
            dy = 0,
            ex = 0,
            ey = 0,
            fx = 0,
            fy = 0;
          var aax = 0,
            aay = 0,
            bbx = 0,
            bby = 0,
            ddx = 0,
            ddy = 0,
            eex = 0,
            eey = 0,
            ffx = 0,
            ffy = 0,
            fffx = 0,
            fffy = 0;
          var content_offset_top = -3, content_offset_left = -2;
          content_offset_top *= 1.5, content_offset_left *= 1.5;
          var OFFSET_X = -23.0805019730301175;
          // 080501973030115 1.7763568394002505e-14mm
          // 08050197303012 -1.0658141036401503e-14mm
          var X_VALUE = 150;
          // const ax1 = 150, ay1 = 0;
          var ax1 = X_VALUE + OFFSET_X, ay1 = 0;
          var bx1 = ax1 + 50, by1 = 0;
          var cx1 = ax1 + HALF_LONG_SIDE_LENGTH,
            cy1 = SHORT_SIDE_LENGTH * getSinByAngle(ANGLE);
          var angle_cd1 = BIGER_ANGLE - ANGLE;
          var dx1 = cx1 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd1),
            dy1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd1);
          var angle_ce1 = 180 - BIGER_ANGLE - angle_cd1;
          var ex1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ce1),
            ey1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce1);
          var angle_cf1 = BIGER_ANGLE - angle_ce1;
          var fx1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf1),
            fy1 = cy1 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cf1);
          var c_mirror_ad_x1 = X_VALUE + dx1 - cx1;
          var c_mirror_ad_y1 = 0 + dy1 - cy1;
          var aax1 = X_VALUE + (c_mirror_ad_x1 - X_VALUE) * 0.3 + OFFSET_X,
            aay1 = 0 + (c_mirror_ad_y1 - 0) * 0.3;
          var bbx1 = 0, bby1 = 0;
          var ddx1 = dx1 + (c_mirror_ad_x1 - dx1) * 0.3,
            ddy1 = dy1 + (c_mirror_ad_y1 - dy1) * 0.3;
          var ffx1 = bx1 + (cx1 - bx1) * 0.3, ffy1 = 0 + (cy1 - 0) * 0.3;
          var c_mirror_ef_x1 = ex1 + fx1 - cx1;
          var c_mirror_ef_y1 = ey1 + fy1 - cy1;
          var eex1 = ex1 + (c_mirror_ef_x1 - ex1) * 0.3,
            eey1 = ey1 + (c_mirror_ef_y1 - ey1) * 0.3;
          var fffx1 = fx1 + (c_mirror_ef_x1 - fx1) * 0.3,
            fffy1 = fy1 + (c_mirror_ef_y1 - fy1) * 0.3;
          ax = ax1,
            ay = ay1,
            bx = bx1,
            by = by1,
            cx = cx1,
            cy = cy1,
            dx = dx1,
            dy = dy1,
            ex = ex1,
            ey = ey1,
            fx = fx1,
            fy = fy1;
          aax = aax1,
            aay = aay1,
            bbx = bbx1,
            bby = bby1,
            ddx = ddx1,
            ddy = ddy1,
            eex = eex1,
            eey = eey1,
            ffx = ffx1,
            ffy = ffy1,
            fffx = fffx1,
            fffy = fffy1;
          this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, ddx, aay, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, eex, fffx, eey, fffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, fffx, fy, fffy, viewBox);
          var cx4 = dx1 + ex1 - cx1, cy4 = dy1 + ey1 - cy1;
          var ax4 = ex1, ay4 = ey1;
          var dx4 = dx1, dy4 = dy1;
          var angle_cd4 = Math.atan((cy4 - dy4) / (cx4 - dx4)) * 180 / Math.PI;
          var angle_ce4 = BIGER_ANGLE - angle_cd4;
          var angle_cf4 = BIGER_ANGLE - (90 - angle_ce4);
          var angle_ca4 = BIGER_ANGLE - (90 - angle_cd4);
          var angle_cb4 = BIGER_ANGLE - (90 - angle_ca4);
          var ex4 = cx4 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ce4);
          var ey4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce4);
          var fx4 = cx4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf4);
          var fy4 = cy4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf4);
          var bx4 = cx4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb4);
          var by4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb4);
          var ffx4 = bx4 + (cx4 - bx4) * 0.3, ffy4 = by4 + (cy4 - by4) * 0.3;
          ax = ax4,
            ay = ay4,
            bx = bx4,
            by = by4,
            cx = cx4,
            cy = cy4,
            dx = dx4,
            dy = dy4,
            ex = ex4,
            ey = ey4,
            fx = fx4,
            fy = fy4;
          ffx = ffx4, ffy = ffy4;
          this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          var cx5 = ax4 + bx4 - cx4, cy5 = ay4 + by4 - cy4;
          var dx5 = ax4, dy5 = ay4;
          var ex5 = bx4, ey5 = by4;
          var angle_cd5 = Math.atan((cy5 - dy5) / (cx5 - dx5)) * 180 / Math.PI;
          var angle_ce5 = BIGER_ANGLE - angle_cd5;
          var angle_cf5 = BIGER_ANGLE - (90 - angle_ce5);
          var angle_ca5 = BIGER_ANGLE - (90 - angle_cd5);
          var angle_cb5 = BIGER_ANGLE - (90 - angle_ca5);
          var ax5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca5);
          var ay5 = cy5 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca5);
          var bx5 = cx5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb5);
          var by5 = cy5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb5);
          var fx5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf5);
          var fy5 = cy5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf5);
          var ffx5 = bx5 + (cx5 - bx5) * 0.3, ffy5 = by5 + (cy5 - by5) * 0.3;
          var c_mirror_ab_x5 = ax5 + bx5 - cx5,
            c_mirror_ab_y5 = ay5 + by5 - cy5;
          var aax5 = ax5 + (c_mirror_ab_x5 - ax5) * 0.3,
            aay5 = ay5 + (c_mirror_ab_y5 - ay5) * 0.3;
          var bbx5 = bx5 + (c_mirror_ab_x5 - bx5) * 0.3,
            bby5 = by5 + (c_mirror_ab_y5 - by5) * 0.3;
          ax = ax5,
            ay = ay5,
            bx = bx5,
            by = by5,
            cx = cx5,
            cy = cy5,
            dx = dx5,
            dy = dy5,
            ex = ex5,
            ey = ey5,
            fx = fx5,
            fy = fy5;
          aax = aax5,
            aay = aay5,
            bbx = bbx5,
            bby = bby5,
            ffx = ffx5,
            ffy = ffy5;
          this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, bbx, by, bby, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, bbx, aay, bby, viewBox);
          var cx6 = ex4 + fx4 - cx4, cy6 = ey4 + fy4 - cy4;
          var dx6 = fx4, dy6 = fy4;
          var ex6 = ex4, ey6 = ey4;
          var angle_cd6 = Math.atan((cy6 - dy6) / (dx6 - cx6)) * 180 / Math.PI;
          var angle_ce6 = Math.atan((cy6 - ey6) / (cx6 - ex6)) * 180 / Math.PI;
          var angle_ca6 = BIGER_ANGLE - angle_cd6;
          var angle_cf6 = BIGER_ANGLE - angle_ce6;
          var angle_cb6 = BIGER_ANGLE - (90 - angle_ca6);
          var ax6 = cx6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ca6);
          var ay6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca6);
          var bx6 = cx6 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cb6);
          var by6 = cy6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb6);
          var fx6 = cx6 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cf6);
          var fy6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf6);
          var ffx6 = bx6 + (cx6 - bx6) * 0.3, ffy6 = by6 + (cy6 - by6) * 0.3;
          var c_mirror_ad_x6 = ax6 + dx6 - cx6,
            c_mirror_ad_y6 = ay6 + dy6 - cy6;
          var aax6 = ax6 + (c_mirror_ad_x6 - ax6) * 0.3,
            aay6 = ay6 + (c_mirror_ad_y6 - ay6) * 0.3;
          var ddx6 = dx6 + (c_mirror_ad_x6 - dx6) * 0.3,
            ddy6 = dy6 + (c_mirror_ad_y6 - dy6) * 0.3;
          var c_mirror_ef_x6 = ex6 + fx6 - cx6,
            c_mirror_ef_y6 = ey6 + fy6 - cy6;
          var eex6 = ex6 + (c_mirror_ef_x6 - ex6) * 0.3,
            eey6 = ey6 + (c_mirror_ef_y6 - ey6) * 0.3;
          var fffx6 = fx6 + (c_mirror_ef_x6 - fx6) * 0.3,
            fffy6 = fy6 + (c_mirror_ef_y6 - fy6) * 0.3;
          ax = ax6,
            ay = ay6,
            bx = bx6,
            by = by6,
            cx = cx6,
            cy = cy6,
            dx = dx6,
            dy = dy6,
            ex = ex6,
            ey = ey6,
            fx = fx6,
            fy = fy6;
          aax = aax6,
            aay = aay6,
            ddx = ddx6,
            ddy = ddy6,
            eex = eex6,
            eey = eey6,
            ffx = ffx6,
            ffy = ffy6,
            fffx = fffx6,
            fffy = fffy6;
          this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, ddx, aay, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, eex, fffx, eey, fffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, fffx, fy, fffy, viewBox);
          var cx3 = dx4 + ex4 - cx4, cy3 = dy4 + ey4 - cy4;
          var fx3 = dx4, fy3 = dy4;
          var ex3 = ex4, ey3 = ey4;
          var angle_cf3 = Math.atan((cy3 - fy3) / (fx3 - cx3)) * 180 / Math.PI;
          var angle_ce3 = BIGER_ANGLE - angle_cf3;
          var angle_cd3 = 180 - BIGER_ANGLE - angle_ce3;
          var angle_ca3 = BIGER_ANGLE - angle_cd3;
          var angle_cb3 = BIGER_ANGLE - (90 - angle_ca3);
          var ax3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca3);
          var ay3 = cy3 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca3);
          var bx3 = cx3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb3);
          var by3 = cy3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb3);
          var dx3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd3);
          var dy3 = cy3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd3);
          var ffx3 = bx3 + (cx3 - bx3) * 0.3, ffy3 = by3 + (cy3 - by3) * 0.3;
          ax = ax3,
            ay = ay3,
            bx = bx3,
            by = by3,
            cx = cx3,
            cy = cy3,
            dx = dx3,
            dy = dy3,
            ex = ex3,
            ey = ey3,
            fx = fx3,
            fy = fy3;
          ffx = ffx3, ffy = ffy3;
          this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          var cx2 = ax3 + dx3 - cx3, cy2 = ay3 + dy3 - cy3;
          var fx2 = ax3, fy2 = ay3;
          var ex2 = dx3, ey2 = dy3;
          var angle_cf2 = Math.atan((cy2 - fy2) / (fx2 - cx2)) * 180 / Math.PI;
          var angle_ce2 = BIGER_ANGLE - angle_cf2;
          var angle_cd2 = 180 - BIGER_ANGLE - angle_ce2;
          var angle_ca2 = BIGER_ANGLE - angle_cd2;
          var angle_cb2 = BIGER_ANGLE - (90 - angle_ca2);
          var ax2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca2);
          var ay2 = cy2 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca2);
          var bx2 = cx2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb2);
          var by2 = cy2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb2);
          var dx2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd2);
          var dy2 = cy2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd2);
          var ffx2 = bx2 + (cx2 - bx2) * 0.3, ffy2 = by2 + (cy2 - by2) * 0.3;
          var c_mirror_ab_x2 = ax2 + bx2 - cx2,
            c_mirror_ab_y2 = ay2 + by2 - cy2;
          var aax2 = ax2 + (c_mirror_ab_x2 - ax2) * 0.3,
            aay2 = ay2 + (c_mirror_ab_y2 - ay2) * 0.3;
          var bbx2 = bx2 + (c_mirror_ab_x2 - bx2) * 0.3,
            bby2 = by2 + (c_mirror_ab_y2 - by2) * 0.3;
          var c_mirror_de_x2 = dx2 + ex2 - cx2,
            c_mirror_de_y2 = dy2 + ey2 - cy2;
          var ddx2 = dx2 + (c_mirror_de_x2 - dx2) * 0.3,
            ddy2 = dy2 + (c_mirror_de_y2 - dy2) * 0.3;
          var eex2 = ex2 + (c_mirror_de_x2 - ex2) * 0.3,
            eey2 = ey2 + (c_mirror_de_y2 - ey2) * 0.3;
          ax = ax2,
            ay = ay2,
            bx = bx2,
            by = by2,
            cx = cx2,
            cy = cy2,
            dx = dx2,
            dy = dy2,
            ex = ex2,
            ey = ey2,
            fx = fx2,
            fy = fy2;
          aax = aax2,
            aay = aay2,
            bbx = bbx2,
            bby = bby2,
            ddx = ddx2,
            ddy = ddy2,
            eex = eex2,
            eey = eey2,
            ffx = ffx2,
            ffy = ffy2;
          this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, bbx, by, bby, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, bbx, aay, bby, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ddx, eex, ddy, eey, viewBox);
        };
        DiceGenerator.prototype.drawTextsOfTwentyFourSidedDice = function (
          infos,
          SIDE_LENGTH,
        ) {
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 36.5 / 25, SIDE_LENGTH * 100.0 / 25, 180);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 147.5 / 25, SIDE_LENGTH * 125.0 / 25, 180);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 84.0 / 25, SIDE_LENGTH * 132.0 / 25, -70.35);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 194.0 / 25, SIDE_LENGTH * 132.0 / 25, -70.35);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 132.5 / 25, SIDE_LENGTH * 140.0 / 25, -83.45);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 95.0 / 25, SIDE_LENGTH * 175.0 / 25, 83.45);
          // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 195.0 / 25, SIDE_LENGTH * 147.5 / 25, 166.9);
          // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 95.0 / 25, SIDE_LENGTH * 115.0 / 25, 193.1);
          // this.setSvgTextInfo(infos[8], SIDE_LENGTH * 162.0 / 25, SIDE_LENGTH * 40.0 / 25, 13.1);
          // this.setSvgTextInfo(infos[9], SIDE_LENGTH * 97.5 / 25, SIDE_LENGTH * 66.0 / 25, 206.2);
          // this.setSvgTextInfo(infos[10], SIDE_LENGTH * 140.0 / 25, SIDE_LENGTH * 82.0 / 25, -70.35);
          // this.setSvgTextInfo(infos[11], SIDE_LENGTH * 122.5 / 25, SIDE_LENGTH * 15.0 / 25, 96.55);
          // this.setSvgTextInfo(infos[12], SIDE_LENGTH * 111.0 / 25, SIDE_LENGTH * 127.5 / 25, 96.55);
          // this.setSvgTextInfo(infos[13], SIDE_LENGTH * 110.0 / 25, SIDE_LENGTH * 195.0 / 25, 263.45);
          // this.setSvgTextInfo(infos[14], SIDE_LENGTH * 80.0 / 25, SIDE_LENGTH * 160.0 / 25, 180);
          // this.setSvgTextInfo(infos[15], SIDE_LENGTH * 147.5 / 25, SIDE_LENGTH * 150.0 / 25, 13.1);
          // this.setSvgTextInfo(infos[16], SIDE_LENGTH * 53.0 / 25, SIDE_LENGTH * 80.0 / 25, 0);
          // this.setSvgTextInfo(infos[17], SIDE_LENGTH * 157.5 / 25, SIDE_LENGTH * 91.0 / 25, 26.2);
          // this.setSvgTextInfo(infos[18], SIDE_LENGTH * 115.0 / 25, SIDE_LENGTH * 71.0 / 25, 109.65);
          // this.setSvgTextInfo(infos[19], SIDE_LENGTH * 145.0 / 25, SIDE_LENGTH * 30.0 / 25, -83.45);
          // this.setSvgTextInfo(infos[20], SIDE_LENGTH * 167.5 / 25, SIDE_LENGTH * 71.0 / 25, 122.75);
          // this.setSvgTextInfo(infos[21], SIDE_LENGTH * 69.0 / 25, SIDE_LENGTH * 65.0 / 25, 96.55);
          // this.setSvgTextInfo(infos[22], SIDE_LENGTH * 218.0 / 25, SIDE_LENGTH * 92.0 / 25, 13.1);
          // this.setSvgTextInfo(infos[23], SIDE_LENGTH * 105.0 / 25, SIDE_LENGTH * 92.0 / 25, 13.1);
          // 2022-11-18
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 36.5 / 25,
            SIDE_LENGTH * 100.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 147.5 / 25,
            SIDE_LENGTH * 125.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 70.0 / 25,
            SIDE_LENGTH * 120.0 / 25,
            -70.35,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 180.0 / 25,
            SIDE_LENGTH * 120.0 / 25,
            -70.35,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 120.0 / 25,
            SIDE_LENGTH * 128.0 / 25,
            -83.45,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 82.5 / 25,
            SIDE_LENGTH * 188.0 / 25,
            83.45,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 195.0 / 25,
            SIDE_LENGTH * 147.5 / 25,
            166.9,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 95.0 / 25,
            SIDE_LENGTH * 110.0 / 25,
            193.1,
          );
          this.setSvgTextInfo(
            infos[8],
            SIDE_LENGTH * 139.0 / 25,
            SIDE_LENGTH * 44.0 / 25,
            13.1,
          );
          this.setSvgTextInfo(
            infos[9],
            SIDE_LENGTH * 97.5 / 25,
            SIDE_LENGTH * 58.0 / 25,
            206.2,
          );
          this.setSvgTextInfo(
            infos[10],
            SIDE_LENGTH * 125.0 / 25,
            SIDE_LENGTH * 70.0 / 25,
            -70.35,
          );
          this.setSvgTextInfo(
            infos[11],
            SIDE_LENGTH * 114.0 / 25,
            SIDE_LENGTH * 27.0 / 25,
            96.55,
          );
          this.setSvgTextInfo(
            infos[12],
            SIDE_LENGTH * 102.0 / 25,
            SIDE_LENGTH * 138.0 / 25,
            96.55,
          );
          this.setSvgTextInfo(
            infos[13],
            SIDE_LENGTH * 102.0 / 25,
            SIDE_LENGTH * 183.0 / 25,
            263.45,
          );
          this.setSvgTextInfo(
            infos[14],
            SIDE_LENGTH * 80.0 / 25,
            SIDE_LENGTH * 160.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[15],
            SIDE_LENGTH * 126.0 / 25,
            SIDE_LENGTH * 154.0 / 25,
            13.1,
          );
          this.setSvgTextInfo(
            infos[16],
            SIDE_LENGTH * 30.0 / 25,
            SIDE_LENGTH * 78.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[17],
            SIDE_LENGTH * 137.0 / 25,
            SIDE_LENGTH * 95.0 / 25,
            26.2,
          );
          this.setSvgTextInfo(
            infos[18],
            SIDE_LENGTH * 110.0 / 25,
            SIDE_LENGTH * 84.0 / 25,
            109.65,
          );
          this.setSvgTextInfo(
            infos[19],
            SIDE_LENGTH * 130.0 / 25,
            SIDE_LENGTH * 16.0 / 25,
            -83.45,
          );
          this.setSvgTextInfo(
            infos[20],
            SIDE_LENGTH * 160.0 / 25,
            SIDE_LENGTH * 80.0 / 25,
            122.75,
          );
          this.setSvgTextInfo(
            infos[21],
            SIDE_LENGTH * 60.0 / 25,
            SIDE_LENGTH * 77.0 / 25,
            96.55,
          );
          this.setSvgTextInfo(
            infos[22],
            SIDE_LENGTH * 195.0 / 25,
            SIDE_LENGTH * 93.0 / 25,
            13.1,
          );
          this.setSvgTextInfo(
            infos[23],
            SIDE_LENGTH * 83.0 / 25,
            SIDE_LENGTH * 93.0 / 25,
            13.1,
          );
        };
        DiceGenerator.prototype.appendLine = function (
          svg,
          STYLE,
          x1,
          x2,
          y1,
          y2,
          viewBox,
        ) {
          var line = document.createElementNS(SVG_NS, "line");
          line.setAttribute("x1", "".concat(x1, "mm"));
          line.setAttribute("x2", "".concat(x2, "mm"));
          line.setAttribute("y1", "".concat(y1, "mm"));
          line.setAttribute("y2", "".concat(y2, "mm"));
          if (viewBox) {
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
          }
          line.setAttribute("style", STYLE);
          svg.appendChild(line);
        };
        DiceGenerator.prototype.appendCircle = function (
          svg,
          STYLE,
          cx,
          cy,
          radius,
          viewBox,
        ) {
          var circle = document.createElementNS(SVG_NS, "circle");
          circle.setAttribute("cx", "".concat(cx, "mm"));
          circle.setAttribute("cy", "".concat(cy, "mm"));
          circle.setAttribute("r", "".concat(radius, "mm"));
          circle.setAttribute("fill", "#ffffff");
          if (viewBox) {
            viewBox.left = Math.min(viewBox.left, cx - radius);
            viewBox.right = Math.max(viewBox.right, cx + radius);
            viewBox.top = Math.min(viewBox.top, cy - radius);
            viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
          }
          circle.setAttribute("style", STYLE);
          svg.appendChild(circle);
        };
        DiceGenerator.prototype.appendTspan = function (
          text,
          STYLE,
          CHAR,
          dx,
          dy,
          rotate,
        ) {
          // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
          var tspan = document.createElementNS(SVG_NS, "tspan");
          tspan.setAttribute("dx", "".concat(dx, "mm"));
          tspan.setAttribute("dy", "".concat(dy, "mm"));
          tspan.setAttribute("rotate", rotate.toString());
          tspan.setAttribute(
            "style",
            STYLE.concat(
              "dominant-baseline:middle;text-anchor:middle;",
              CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "",
              CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
            ),
          );
          tspan.innerHTML = CHAR;
          text.appendChild(tspan);
        };
        DiceGenerator.prototype.appendText = function (
          svg,
          STYLE,
          CONTENT,
          x,
          y,
          rotate,
          viewBox,
        ) {
          var _this = this;
          var g = document.createElementNS(SVG_NS, "g");
          // g.setAttribute('x', `${x}mm`);
          // g.setAttribute('y', `${y}mm`);
          // g.setAttribute('style', 'display:flex;justify-content:center;align-items:center;overflow:hidden;');
          if (rotate) {
            g.setAttribute(
              "style",
              "transform: rotate(".concat(
                rotate,
                "deg);transform-origin: 50% 50%;",
              ),
            );
          }
          svg.appendChild(g);
          var text = document.createElementNS(SVG_NS, "text");
          text.setAttribute("x", "".concat(x, "mm"));
          text.setAttribute("y", "".concat(y, "mm"));
          text.setAttribute(
            "style",
            "dominant-baseline:middle;text-anchor:middle;",
          );
          // text.setAttribute('dx', '0');
          // text.setAttribute('dy', '0');
          // text.setAttribute('rotate', rotate.toString());
          if (CONTENT.indexOf("<") > -1) {
            text.innerHTML = CONTENT;
          } else {
            CONTENT.split("").forEach(function (char, index) {
              _this.appendTspan(text, "", char, 0, 0, 0);
            });
          }
          g.appendChild(text);
          if (viewBox) {
            // left/top/right/bottom/width/height
            var clientRects = text.getClientRects();
            var _a = (clientRects.length
                ? clientRects.item(0)
                : text.getBoundingClientRect()),
              x1 = _a.left,
              x2 = _a.right,
              y1 = _a.top,
              y2 = _a.bottom;
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
          }
          text.setAttribute("style", STYLE);
        };
        DiceGenerator.prototype.setSvgTextInfo = function (info, x, y, rotate) {
          info.x = x;
          info.y = y;
          info.rotate = rotate;
        };
        return DiceGenerator;
      }());
      cc.DiceGenerator = DiceGenerator;
    })(cc = sonya.cc || (sonya.cc = {}));
  })(sonya = edu.sonya || (edu.sonya = {}));
})(edu || (edu = {}));

var boxSpace;
(function (boxSpace) {
  var edu;
  (function (edu) {
    var sonya;
    (function (sonya) {
      var cc;
      (function (cc) {
        /**
         * <en>Box Type</en>
         * <zh_cn>盒子类型</zh_cn>
         * <zh_tw>骰子類型</zh_tw>
         */
        var BoxKind;
        (function (BoxKind) {
          /**
           * <en>None</en>
           * <zh_cn>无</zh_cn>
           * <zh_tw>無</zh_tw>
           */
          BoxKind[BoxKind["none"] = 0] = "none";
          /**
           * <en>Cuboid</en>
           * <zh_cn>长方体</zh_cn>
           * <zh_tw>長方體</zh_tw>
           */
          BoxKind[BoxKind["cuboid"] = 1] = "cuboid";
          /**
           * <en>Cuboid without top</en>
           * <zh_cn>无顶长方体</zh_cn>
           * <zh_tw>無頂長方體</zh_tw>
           */
          BoxKind[BoxKind["cuboidWithoutTop"] = 2] = "cuboidWithoutTop";
          /**
           * <en>Cuboid without bottom</en>
           * <zh_cn>无底长方体</zh_cn>
           * <zh_tw>無底長方體</zh_tw>
           */
          BoxKind[BoxKind["cuboidWithoutBottom"] = 3] = "cuboidWithoutBottom";
          /**
           * <en>Cuboid which cover on the same side</en>
           * <zh_cn>盖子同侧长方体</zh_cn>
           * <zh_tw>蓋子同側長方體</zh_tw>
           */
          BoxKind[BoxKind["cuboidCoverOnTheSameSide"] = 4] =
            "cuboidCoverOnTheSameSide";
          /**
           * <en>Cuboid which cover on the same side and without top</en>
           * <zh_cn>盖子同侧无顶长方体</zh_cn>
           * <zh_tw>蓋子同側無頂長方體</zh_tw>
           */
          BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutTop"] = 5] =
            "cuboidCoverOnTheSameSideWithoutTop";
          /**
           * <en>Cuboid which cover on the same side and without bottom</en>
           * <zh_cn>盖子同侧无底长方体</zh_cn>
           * <zh_tw>蓋子同側無底長方體</zh_tw>
           */
          BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutBottom"] = 6] =
            "cuboidCoverOnTheSameSideWithoutBottom";
        })(BoxKind = cc.BoxKind || (cc.BoxKind = {}));
        // https://blog.csdn.net/yiyueqinghui/article/details/108004272
        var SVG_NS = "http://www.w3.org/2000/svg";
        var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
        /**
         * <en>Box Generator</en>
         * <zh_cn>盒子生成器</zh_cn>
         * <zh_tw>盒子生成器</zh_tw>
         */
        var BoxGenerator = /** @class */ (function () {
          function BoxGenerator() {
          }
          /**
           * <en>Generate box in batch</en>
           * <zh_cn>批量生成盒子</zh_cn>
           * <zh_tw>批量生成盒子</zh_tw>
           * @param createParameters
           * <en>Arrays: creating parameters</en>
           * <zh_cn>数组：创建参数</zh_cn>
           * <zh_tw>數組：創建參數</zh_tw>
           * @returns
           * <en>Generate results in array format, used to combine complete html</en>
           * <zh_cn>生成结果，为数组格式，用于组合完整的html</zh_cn>
           * <zh_tw>生成結果，為數組格式，用於組合完整的html</zh_tw>
           */
          BoxGenerator.prototype.batchCreate = function (createParameters) {
            var _this = this;
            createParameters.forEach(function (createParameter, index) {
              if (createParameter.id.length === 0) {
                createParameter.id = "svg_index";
              }
            });
            return createParameters.map(function (createParameter) {
              return _this.create(createParameter);
            });
          };
          /**
           * <en>Generate a single box</en>
           * <zh_cn>生成单个盒子</zh_cn>
           * <zh_tw>生成單個盒子</zh_tw>
           * @param param0
           * <en>Deconstructed creation parameters</en>
           * <zh_cn>已解构的创建参数</zh_cn>
           * <zh_tw>已解構的創建參數</zh_tw>
           * @returns
           * <en>Generate results, used to combine complete html</en>
           * <zh_cn>生成结果，用于组合完整的html</zh_cn>
           * <zh_tw>生成結果，用於組合完整的html</zh_tw>
           */
          BoxGenerator.prototype.create = function (_a) {
            var id = _a.id,
              boxKind = _a.boxKind,
              LENGTHS = _a.lengths,
              CONTENTS = _a.contents,
              OUTER_LINE_STYLE = _a.outerLineStyle,
              INNER_LINE_STYLE = _a.innerLineStyle,
              TEXT_STYLE = _a.textStyle,
              ROTATE = _a.rotate,
              MOVE = _a.move,
              TOP_WITHOUT_HALF_CIRCLE = _a.topWithoutHalfCircle,
              OPTIONS = _a.options;
            if (id.length === 0) {
              id = "svg_0";
            }
            var FIRST_LENGTH = LENGTHS[0];
            var FIXED_FIRST_LENGTH = FIRST_LENGTH;
            var nested = false;
            var _b = svgSpace.edu.sonya.cc.SvgHelper,
              createSvg = _b.createSvg,
              appendText = _b.appendText;
            var svg = createSvg();
            svg.setAttribute("id", id);
            var viewBox = {
              left: 999999,
              right: 0,
              top: 999999,
              bottom: 0,
            };
            var infos = [];
            switch (boxKind) {
              // case BoxKind.four:
              //   CONTENTS.forEach((content: I18nable | string) => {
              //     for(let i = 0; i < 3; ++i) {
              //       infos.push({ content, x: 0, y: 0, rotate: 0 });
              //     }
              //   });
              //   break;
              default:
                CONTENTS.forEach(function (content) {
                  infos.push({ content: content, x: 0, y: 0, rotate: 0 });
                });
                break;
            }
            var mmToPxScale = (new DPIHelper()).getMmToPxScale();
            switch (boxKind) {
              case BoxKind.cuboid:
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSide:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                this.drawGraphsOfCuboidBox(
                  svg,
                  LENGTHS,
                  INNER_LINE_STYLE,
                  OUTER_LINE_STYLE,
                  viewBox,
                  OPTIONS,
                  mmToPxScale,
                  boxKind,
                  ROTATE,
                  MOVE,
                  TOP_WITHOUT_HALF_CIRCLE,
                );
                this.drawTextsOfCuboiBox(infos, LENGTHS, boxKind);
                break;
              default:
                break;
            }
            infos.forEach(function (_a) {
              var content = _a.content, x = _a.x, y = _a.y, rotate = _a.rotate;
              appendText(
                svg,
                TEXT_STYLE,
                content,
                x,
                y,
                rotate,
                "left top",
                null,
              );
            });
            var width = "".concat(viewBox.right, "mm");
            var height = "".concat(viewBox.bottom, "mm");
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
            // svg.setAttribute('style', `width:${width};height:${height};`);
            // const outerSvg = nested && (FIXED_FIRST_LENGTH !== FIRST_LENGTH) ? this.createSvg(): null;
            var outerSvg = createElement("wrap"); // as HTMLDivElement;
            outerSvg.appendChild(svg);
            outerSvg.setAttribute("id", id.concat("_wrapper"));
            if (FIXED_FIRST_LENGTH !== FIRST_LENGTH) {
              var scale = FIRST_LENGTH / FIXED_FIRST_LENGTH;
              var widthOuterSvg = "".concat(scale * viewBox.right, "mm");
              var heightOuterSvg = "".concat(scale * viewBox.bottom, "mm");
              var transformScale = mmToPxScale * (scale - 1) / 2;
              outerSvg.setAttribute(
                "style",
                "width:".concat(widthOuterSvg, ";height:").concat(
                  heightOuterSvg,
                  ";display:inline-block;",
                ),
              );
              svg.setAttribute(
                "transform",
                "translate(".concat(viewBox.right * transformScale, ", ")
                  .concat(viewBox.bottom * transformScale, ") scale(").concat(
                    scale,
                    ", ",
                  ).concat(scale, ")"),
              );
              svg.setAttribute("transform-origin", "center");
            }
            var css =
              "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
            return { id: id, svg: nested ? outerSvg : svg, css: css };
          };
          BoxGenerator.prototype.drawGraphsOfCuboidBox = function (
            svg,
            LENGTHS,
            INNER_LINE_STYLE,
            OUTER_LINE_STYLE,
            viewBox,
            OPTIONS,
            mmToPxScale,
            boxKind,
            ROTATE,
            MOVE,
            TOP_WITHOUT_HALF_CIRCLE,
          ) {
            var isSameSide = boxKind >= 4;
            var LENGTH = LENGTHS[0];
            var WIDTH = LENGTHS[2];
            var HEIGHT = LENGTHS[1];
            var OTHER_SIZE = isSameSide ? LENGTHS[3] : 0;
            var MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
            var LENGTH_PX = LENGTH * mmToPxScale;
            var WIDTH_PX = WIDTH * mmToPxScale;
            var HEIGHT_PX = HEIGHT * mmToPxScale;
            var OTHER_SIZE_PX = OTHER_SIZE * mmToPxScale;
            var duckTongueScale = 0.5;
            var duckTongueHeight = MIN_LENGTH * duckTongueScale;
            var duckTongueHeightPx = duckTongueHeight * mmToPxScale;
            var pasteRegionScale = 0.45;
            var pasteRegionHeight = LENGTH * pasteRegionScale;
            var pasteRegionHeightPx = pasteRegionHeight * mmToPxScale;
            var offsetScale = 0.1;
            var offsetXPx = LENGTH_PX * offsetScale;
            var pasteRegionWidthPx = HEIGHT_PX - offsetXPx * 2;
            var duckTongueWidth = LENGTH * (1 - offsetScale * 2);
            var duckTongueWidthPx = duckTongueWidth * mmToPxScale;
            // console.log(LENGTH, WIDTH, HEIGHT, MIN_LENGTH, mmToPxScale, LENGTH_PX);
            var YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
                boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            var YDifferencePx = YDifference * mmToPxScale;
            var diameter = duckTongueHeight * 0.8;
            var radius = diameter * 0.5;
            var lengthSubtractDiameter = LENGTH - diameter;
            var halfLengthSubtractDiameter = lengthSubtractDiameter * 0.5;
            var halfLengthSubtractDiameterPx = halfLengthSubtractDiameter *
              mmToPxScale;
            var radiusPx = radius * mmToPxScale;
            var diameterPx = diameter * mmToPxScale;
            var smallDiameter = diameter * 0.5;
            var smallRadius = smallDiameter * 0.5;
            var smallDiameterPx = smallDiameter * mmToPxScale;
            var smallRadiusPx = smallRadius * mmToPxScale;
            var pasteRegionHeightSubtractSmallRadiusPx = pasteRegionHeightPx -
              smallRadiusPx;
            var pasteRegionWidthSubtractSmallDiameterPx = pasteRegionWidthPx -
              smallDiameterPx;
            var duckTongueHeightSubtractRadiusPx = duckTongueHeightPx -
              radiusPx;
            var duckTongueWidthSubtractDiameterPx = duckTongueWidthPx -
              diameterPx;
            // console.log(LENGTH, WIDTH, HEIGHT, MIN_LENGTH, mmToPxScale, LENGTH_PX);
            var pathStartY = duckTongueHeightPx + HEIGHT_PX - YDifferencePx;
            var path = document.createElementNS(SVG_NS, "path");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#000000");
            if (boxKind < 4) {
              path.setAttribute(
                "d",
                "M 0, ".concat(pathStartY, " ")
                  .concat(
                    // https://www.cnblogs.com/LcxSummer/p/12420385.html
                    boxKind === BoxKind.cuboidWithoutTop
                      ? "h ".concat(HEIGHT_PX * 3 + LENGTH_PX * 2, " ")
                      : "".concat(
                        TOP_WITHOUT_HALF_CIRCLE
                          ? "".concat(
                            "h ".concat(
                              HEIGHT_PX + halfLengthSubtractDiameterPx,
                              " ",
                            ),
                            "a ".concat(radiusPx, " ").concat(
                              radiusPx,
                              " 0 1 0 ",
                            ).concat(diameterPx, " 0"),
                            "h ".concat(halfLengthSubtractDiameterPx, " "),
                          )
                          : "".concat("h ".concat(HEIGHT_PX + LENGTH_PX, " ")),
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l ".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h ".concat(duckTongueWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        // `h ${HEIGHT_PX} `,
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                      ),
                    "v ".concat(WIDTH_PX, " "),
                    "h -".concat(LENGTH_PX + HEIGHT_PX, " "),
                    boxKind === BoxKind.cuboidWithoutBottom
                      ? "h -".concat(HEIGHT_PX * 2 + LENGTH_PX, " ")
                      : "".concat(
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h -".concat(duckTongueWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                      ),
                    " z",
                  ),
              );
            } else {
              path.setAttribute(
                "d",
                "M 0, ".concat(pathStartY, " ")
                  .concat(
                    // https://www.cnblogs.com/LcxSummer/p/12420385.html
                    boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop
                      ? "h ".concat(
                        HEIGHT_PX * 2 + LENGTH_PX * 2 + OTHER_SIZE_PX,
                        " ",
                      )
                      : "".concat(
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l ".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h ".concat(duckTongueWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        TOP_WITHOUT_HALF_CIRCLE
                          ? "".concat(
                            "h ".concat(halfLengthSubtractDiameterPx, " "),
                            "a ".concat(radiusPx, " ").concat(
                              radiusPx,
                              " 0 1 0 ",
                            ).concat(diameterPx, " 0"),
                            "h ".concat(
                              halfLengthSubtractDiameterPx + OTHER_SIZE_PX,
                              " ",
                            ),
                          )
                          : "".concat(
                            "h ".concat(LENGTH_PX + OTHER_SIZE_PX, " "),
                          ),
                      ),
                    "v ".concat(WIDTH_PX, " "),
                    "h -".concat(LENGTH_PX + OTHER_SIZE_PX, " "),
                    boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutBottom
                      ? "h -".concat(HEIGHT_PX * 2 + LENGTH_PX, " ")
                      : "".concat(
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h -".concat(duckTongueWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                      ),
                    " z",
                  ),
              );
            }
            svg.appendChild(path);
            var style = "";
            if (ROTATE) {
              style = "transform:rotate(180deg);";
            }
            if (MOVE) {
              style += "position:relative;margin-top:-".concat(
                HEIGHT + duckTongueHeight -
                  Math.max(
                    0,
                    pasteRegionHeight * 2 - (HEIGHT + duckTongueHeight),
                  ),
                "mm;",
              );
            }
            if (style.length) {
              svg.setAttribute("style", style);
            }
            var X1 = 0;
            var X2 = X1 + HEIGHT;
            var X3 = X2 + LENGTH;
            var X4 = X3 + HEIGHT;
            var X5 = X4 + LENGTH;
            var X6 = X5 + (isSameSide ? OTHER_SIZE : HEIGHT);
            var Y1 = 0 - YDifference;
            var Y2 = Y1 + duckTongueHeight;
            var Y4 = Y2 + HEIGHT;
            var Y5 = Y4 + WIDTH;
            var Y7 = Y5 + HEIGHT;
            var Y8 = Y7 + duckTongueHeight;
            var Y3 = Y4 - pasteRegionHeight;
            var Y6 = Y5 + duckTongueHeight;
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            if (boxKind < 4) {
              if (boxKind !== BoxKind.cuboidWithoutTop) {
                appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
                appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
              }
            } else {
              if (boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutTop) {
                appendLine(svg, INNER_LINE_STYLE, X2, X3, Y2, Y2, null);
                appendLine(svg, INNER_LINE_STYLE, X1, X4, Y4, Y4, null);
              }
            }
            if (
              boxKind !== BoxKind.cuboidWithoutBottom &&
              boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutBottom
            ) {
              appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
            }
            appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
            viewBox.left = 0;
            viewBox.top = 0;
            viewBox.right = X6;
            switch (boxKind) {
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                viewBox.bottom = Y8 - (duckTongueHeight + HEIGHT);
                break;
              default:
                viewBox.bottom = Y8;
                break;
            }
          };
          BoxGenerator.prototype.drawTextsOfCuboiBox = function (
            infos,
            LENGTHS,
            boxKind,
          ) {
            var setSvgTextInfo = svgSpace.edu.sonya.cc.SvgHelper.setSvgTextInfo;
            var LENGTH = LENGTHS[0];
            var WIDTH = LENGTHS[2];
            var HEIGHT = LENGTHS[1];
            var MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
            var duckTongueScale = 0.5;
            var duckTongueHeight = MIN_LENGTH * duckTongueScale;
            var YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
                boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            var X1 = -1 * (HEIGHT * 2 + LENGTH * 1.5);
            var X2 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            var X3 = HEIGHT + LENGTH * 0.5;
            var X4 = X1;
            var X5 = -X2;
            var X6 = X3;
            var Y1 = -1 * (duckTongueHeight + HEIGHT * 0.5);
            var Y2 = -1 * (HEIGHT * 0.5);
            var Y3 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            var Y4 = -1 *
              (duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference);
            var Y5 = HEIGHT * 1.5 + LENGTH;
            var Y6 = duckTongueHeight + HEIGHT + WIDTH + HEIGHT * 0.5 -
              YDifference;
            switch (boxKind) {
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                infos[0].content = "";
                break;
              case BoxKind.cuboid:
              case BoxKind.cuboidWithoutBottom:
                setSvgTextInfo(infos[0], X1, Y1, 180);
                break;
              case BoxKind.cuboidCoverOnTheSameSide:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                setSvgTextInfo(infos[0], -1 * (HEIGHT + LENGTH * 0.5), Y1, 180);
                break;
              default:
                break;
            }
            setSvgTextInfo(infos[1], X2, Y2, 90);
            setSvgTextInfo(infos[2], X3, Y3, 0);
            setSvgTextInfo(infos[3], X4, Y4, 180);
            setSvgTextInfo(infos[4], X5, Y5, -90);
            switch (boxKind) {
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                infos[5].content = "";
                break;
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
              case BoxKind.cuboid:
              case BoxKind.cuboidCoverOnTheSameSide:
                setSvgTextInfo(infos[5], X6, Y6, 0);
                break;
              default:
                break;
            }
          };
          return BoxGenerator;
        }());
        cc.BoxGenerator = BoxGenerator;
      })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
  })(edu = boxSpace.edu || (boxSpace.edu = {}));
})(boxSpace || (boxSpace = {}));
var BrickBase = /** @class */ (function () {
  function BrickBase(appendData, otherComputedData, newPageSizeArray) {
    if (newPageSizeArray === void 0) newPageSizeArray = ["A3", "A4"];
    var _this = this;
    this.brickBaseIdPrefix = "brickPageBase";
    this.reporterKindProperty = "unknown";
    this.download = function () {};
    this.print = function () {};
    this.updateOtherData = function (newData) {};
    this.initCoreElements = function () {};
    this.initOtherElements = function () {};
    this.onPageSizeChanged = function (newPageSize) {};
    this.getCss = function () {
      return _this.computedData.css;
    };
    this.getHtml = function () {
      return _this.computedData.html;
    };
    this.data = {
      paperSize: "A4",
      isLandscape: false,
      maxX: 200,
      maxY: 286,
      pageMarginTop: 5,
      pageMarginBottom: 5,
      pageMarginLeft: 5,
      pageMarginRight: 5,
    };
    this.DEFAULT_DATA_JSON = "";
    this.computedData = {
      title: {
        en: "",
        zh_cn: "",
        zh_tw: "",
      },
      css: "",
      html: "",
    };
    this.pageSizeArray = [];
    this.configCoreElement = getElementById("brickPageConfigCore");
    this.init = function () {
      // // Reget it.
      // this.configCoreElement = getElementById('brickPageConfigCore') as HTMLDivElement;
      var _a = _this,
        configCoreElement = _a.configCoreElement,
        brickBaseIdPrefix = _a.brickBaseIdPrefix;
      configCoreElement.setAttribute(
        REPORT_KIND_PROPERTY,
        _this.reporterKindProperty,
      );
      // const lang = getCurrentLang();
      var getWrapElement = _this.getWrapElement;
      var wrapElement = getWrapElement({
        en: "Paper",
        zh_cn: "纸张",
        zh_tw: "紙張",
      });
      wrapElement.id = "".concat(brickBaseIdPrefix, "PaperSizeOrDirectionWrap");
      _this.initPaperSizeElements(wrapElement);
      _this.initIsLandscapeElements(wrapElement);
      wrapElement = getWrapElement({
        en: "Margin of page",
        zh_cn: "页边距",
        zh_tw: "頁邊距",
      });
      wrapElement.id = "".concat(brickBaseIdPrefix, "PaperMaginWrap");
      _this.initPageMarginTopElements(wrapElement);
      _this.initPageMarginBottomElements(wrapElement);
      _this.initPageMarginLeftElements(wrapElement);
      _this.initPageMarginRightElements(wrapElement);
      _this.initCoreElements();
      _this.initOtherElements();
      global.bindChangeLangEventForI18nElements();
      updateUIByCurrentLang();
      getChangeLangNotifyArrayOfCurrentPage().push(function () {
        return _this.build();
      });
    };
    this.getWrapElement = function (strongI18n) {
      var configCoreElement = _this.configCoreElement;
      var wrapElement = createElement("div");
      wrapElement.className = "brickPageConfigCoreOptionRowWrap";
      configCoreElement.appendChild(wrapElement);
      var strongElement = createElement("strong");
      strongElement.innerHTML = getI18nInnerHTML(strongI18n);
      wrapElement.appendChild(strongElement);
      return wrapElement;
    };
    this.onRadioOptionChanged = function (propertyName, value) {};
    this.initTextboxElement = function (
      labelI18n,
      propertyName,
      textboxElement,
      wrapElement,
    ) {
      if (labelI18n) {
        var label = createElement("label");
        label.innerHTML = getI18nInnerHTML(labelI18n);
        wrapElement.appendChild(label);
      }
      textboxElement.value = _this.data[propertyName];
      textboxElement.type = "text";
      var onTextboxChanged = function () {
        // (this.data as any)[propertyName] = parseInt(textboxElement.value, 0);
        _this.data[propertyName] = textboxElement.value;
        _this.saveConfigAndBuildIfAllowed();
      };
      textboxElement.onchange = onTextboxChanged;
      textboxElement.onblur = onTextboxChanged;
      wrapElement.appendChild(textboxElement);
    };
    this.initTextareaElement = function (
      labelI18n,
      propertyName,
      textareaElement,
      wrapElement,
    ) {
      if (labelI18n) {
        var label = createElement("label");
        label.innerHTML = getI18nInnerHTML(labelI18n);
        wrapElement.appendChild(label);
      }
      textareaElement.value = _this.data[propertyName];
      var onTextareaChanged = function () {
        _this.data[propertyName] = parseInt(textareaElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      textareaElement.onchange = onTextareaChanged;
      textareaElement.onblur = onTextareaChanged;
      wrapElement.appendChild(textareaElement);
    };
    this.initRadioGroupByStringValue = function (
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapElement,
    ) {
      var currentValue = _this.data[propertyName];
      radiosInfoArray.forEach(function (_a) {
        var value = _a.value, i18nHtml = _a.i18nHtml;
        var radioElement = createElement("input");
        radioElement.type = "radio";
        radioElement.name = propertyName;
        radioElement.value = value;
        if (currentValue === value) {
          radioElement.checked = true;
        }
        var spanElement = createElement("span");
        spanElement.innerHTML = i18nHtml;
        radioElement.onclick = function () {
          _this.data[propertyName] = value;
          _this.onRadioOptionChanged(propertyName, value);
          _this.saveConfigAndBuildIfAllowed();
        };
        spanElement.onclick = function () {
          radioElement.click();
        };
        wrapElement.appendChild(radioElement);
        wrapElement.appendChild(spanElement);
        radioElementArray.push(radioElement);
      });
    };
    this.initRadioGroupWithLabelByStringValue = function (
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapLabelI18n,
    ) {
      var wrapElement = _this.getWrapElement(wrapLabelI18n);
      _this.initRadioGroupByStringValue(
        radiosInfoArray,
        propertyName,
        radioElementArray,
        wrapElement,
      );
    };
    this.initRadioGroupByBooleanOrNumberValue = function (
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapElement,
    ) {
      var currentValue = _this.data[propertyName];
      radiosInfoArray.forEach(function (_a) {
        var value = _a.value, i18nHtml = _a.i18nHtml;
        var radioElement = createElement("input");
        radioElement.type = "radio";
        radioElement.name = propertyName;
        radioElement.value = value.toString();
        if (currentValue === value) {
          radioElement.checked = true;
        }
        var spanElement = createElement("span");
        spanElement.innerHTML = i18nHtml;
        radioElement.onclick = function () {
          _this.data[propertyName] = value;
          _this.onRadioOptionChanged(propertyName, value);
          _this.saveConfigAndBuildIfAllowed();
        };
        spanElement.onclick = function () {
          radioElement.click();
        };
        wrapElement.appendChild(radioElement);
        wrapElement.appendChild(spanElement);
        radioElementArray.push(radioElement);
      });
    };
    this.initRadioGroupWithLabelByBooleanOrNumberValue = function (
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapLabelI18n,
    ) {
      var wrapElement = _this.getWrapElement(wrapLabelI18n);
      _this.initRadioGroupByBooleanOrNumberValue(
        radiosInfoArray,
        propertyName,
        radioElementArray,
        wrapElement,
      );
    };
    this.paperSizeRadioArray = [];
    this.initPaperSizeElements = function (wrapElement) {
      var _a = _this,
        paperSize = _a.data.paperSize,
        paperSizeRadioArray = _a.paperSizeRadioArray,
        brickBaseIdPrefix = _a.brickBaseIdPrefix;
      var span = createElement("span");
      span.id = "".concat(brickBaseIdPrefix, "PaperSizeWrap");
      wrapElement.appendChild(span);
      var labelElement = createElement("label");
      span.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Size:",
        zh_cn: "纸型：",
        zh_tw: "紙型：",
      });
      labelElement.setAttribute("for", "paperSize");
      _this.pageSizeArray.forEach(function (paperSizeValue) {
        var radioElement = createElement("input");
        radioElement.type = "radio";
        radioElement.value = paperSizeValue;
        radioElement.name = "paperSize";
        if (paperSize === paperSizeValue) {
          radioElement.checked = true;
        }
        var spanElement = createElement("span");
        spanElement.innerHTML = paperSizeValue;
        radioElement.onclick = function () {
          _this.data.paperSize = paperSizeValue;
          _this.onPageSizeChanged(paperSizeValue);
          _this.saveConfigAndBuildIfAllowed();
        };
        spanElement.onclick = function () {
          radioElement.click();
        };
        span.appendChild(radioElement);
        span.appendChild(spanElement);
        paperSizeRadioArray.push(radioElement);
      });
    };
    this.isLandscapeRadioArray = [];
    this.initIsLandscapeElements = function (wrapElement) {
      var _a = _this,
        isLandscape = _a.data.isLandscape,
        isLandscapeRadioArray = _a.isLandscapeRadioArray,
        brickBaseIdPrefix = _a.brickBaseIdPrefix;
      var span = createElement("span");
      span.id = "".concat(brickBaseIdPrefix, "PaperDirectionWrap");
      wrapElement.appendChild(span);
      var labelElement = createElement("label");
      span.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Orientation:",
        zh_cn: "方向：",
        zh_tw: "方向：",
      });
      labelElement.setAttribute("for", "isLandscape");
      [true, false].forEach(function (isLandscapeValue) {
        var radioElement = createElement("input");
        radioElement.type = "radio";
        radioElement.name = "isLandscape";
        radioElement.value = isLandscapeValue.toString();
        if (isLandscape === isLandscapeValue) {
          radioElement.checked = true;
        }
        var spanElement = createElement("span");
        spanElement.innerHTML = getI18nInnerHTML(
          isLandscapeValue
            ? {
              en: "landscape",
              zh_cn: "横向",
              zh_tw: "橫向",
            }
            : {
              en: "portrait",
              zh_cn: "纵向",
              zh_tw: "縱向",
            },
        );
        radioElement.onclick = function () {
          _this.data.isLandscape = isLandscapeValue;
          _this.saveConfigAndBuildIfAllowed();
        };
        spanElement.onclick = function () {
          radioElement.click();
        };
        span.appendChild(radioElement);
        span.appendChild(spanElement);
        isLandscapeRadioArray.push(radioElement);
      });
    };
    this.pageMarginTopElement = createElement("input");
    this.initPageMarginTopElements = function (wrapElement) {
      var _a = _this,
        pageMarginTop = _a.data.pageMarginTop,
        pageMarginTopElement = _a.pageMarginTopElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Top:",
        zh_cn: "上：",
        zh_tw: "上：",
      });
      pageMarginTopElement.value = pageMarginTop.toString();
      pageMarginTopElement.type = "number";
      pageMarginTopElement.setAttribute("min", "0");
      var changeValue = function () {
        _this.data.pageMarginTop = parseInt(pageMarginTopElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      pageMarginTopElement.onchange = changeValue;
      pageMarginTopElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pageMarginTopElement);
    };
    this.pageMarginBottomElement = createElement("input");
    this.initPageMarginBottomElements = function (wrapElement) {
      var _a = _this,
        pageMarginBottom = _a.data.pageMarginBottom,
        pageMarginBottomElement = _a.pageMarginBottomElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Bottom:",
        zh_cn: "下：",
        zh_tw: "下：",
      });
      pageMarginBottomElement.value = pageMarginBottom.toString();
      pageMarginBottomElement.type = "number";
      pageMarginBottomElement.setAttribute("min", "0");
      var changeValue = function () {
        _this.data.pageMarginBottom = parseInt(
          pageMarginBottomElement.value,
          0,
        );
        _this.saveConfigAndBuildIfAllowed();
      };
      pageMarginBottomElement.onchange = changeValue;
      pageMarginBottomElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pageMarginBottomElement);
    };
    this.pageMarginLeftElement = createElement("input");
    this.initPageMarginLeftElements = function (wrapElement) {
      var _a = _this,
        pageMarginLeft = _a.data.pageMarginLeft,
        pageMarginLeftElement = _a.pageMarginLeftElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Left:",
        zh_cn: "左：",
        zh_tw: "左：",
      });
      pageMarginLeftElement.value = pageMarginLeft.toString();
      pageMarginLeftElement.type = "number";
      pageMarginLeftElement.setAttribute("min", "0");
      var changeValue = function () {
        _this.data.pageMarginLeft = parseInt(pageMarginLeftElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      pageMarginLeftElement.onchange = changeValue;
      pageMarginLeftElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pageMarginLeftElement);
    };
    this.pageMarginRightElement = createElement("input");
    this.initPageMarginRightElements = function (wrapElement) {
      var _a = _this,
        pageMarginRight = _a.data.pageMarginRight,
        pageMarginRightElement = _a.pageMarginRightElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Right:",
        zh_cn: "右：",
        zh_tw: "右：",
      });
      pageMarginRightElement.value = pageMarginRight.toString();
      pageMarginRightElement.type = "number";
      pageMarginRightElement.setAttribute("min", "0");
      var changeValue = function () {
        _this.data.pageMarginRight = parseInt(pageMarginRightElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      pageMarginRightElement.onchange = changeValue;
      pageMarginRightElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pageMarginRightElement);
    };
    // public share = (): void => { };
    // public sponsor = (): void => { };
    this.build = function () {
      var _a, _b;
      var _c = _this.data,
        paperSize = _c.paperSize,
        isLandscape = _c.isLandscape,
        maxX = _c.maxX,
        maxY = _c.maxY,
        pageMarginTop = _c.pageMarginTop,
        pageMarginBottom = _c.pageMarginBottom,
        pageMarginLeft = _c.pageMarginLeft,
        pageMarginRight = _c.pageMarginRight;
      // TODO(@anqi) more paper size.
      var PAPER_WIDTH_A3 = 297;
      var PAPER_HEIGHT_A3 = 420;
      var PAPER_WIDTH_A4 = 210;
      var PAPER_HEIGHT_A4 = 297;
      (_a = getElementById("brickPageIframe").contentWindow) === null ||
        _a === void 0
        ? void 0
        : _a.postMessage({
          command: "changePaperSize",
          data: {
            paperSize: paperSize,
          },
        }, "*");
      var paperWidth = 0;
      var paperHeight = 0;
      switch (paperSize) {
        case "A3":
          paperWidth = PAPER_WIDTH_A3;
          paperHeight = PAPER_HEIGHT_A3;
          break;
        case "A4":
          paperWidth = PAPER_WIDTH_A4;
          paperHeight = PAPER_HEIGHT_A4;
          break;
        default:
          break;
      }
      var pageMarginHorizontal = pageMarginLeft + pageMarginRight;
      var pageMarginVertical = pageMarginTop + pageMarginBottom;
      // if (isLandscape) {
      //   maxX = paperHeight - Math.max(10, pageMarginHorizontal);
      //   maxY = paperWidth - Math.max(10, pageMarginVertical);
      // } else {
      //   maxX = paperWidth - Math.max(10, pageMarginHorizontal);
      //   maxY = paperHeight - Math.max(10, pageMarginVertical);
      // }
      if (isLandscape) {
        maxX = paperHeight - pageMarginHorizontal;
        maxY = paperWidth - pageMarginVertical;
      } else {
        maxX = paperWidth - pageMarginHorizontal;
        maxY = paperHeight - pageMarginVertical;
      }
      _this.data.maxX = maxX;
      _this.data.maxY = maxY;
      var dpiHelper = new DPIHelper();
      _this.pxToMmScale = dpiHelper.getPxToMmScale();
      _this.mmToPxScale = dpiHelper.getMmToPxScale();
      _this.countDataAndComputedData();
      var title = _this.computedData.title;
      var titleElement = getTitleElement();
      titleElement.i18n = title;
      titleElement.innerHTML = title[getCurrentLang()];
      var _d = _this, getHtml = _d.getHtml, getCss = _d.getCss;
      var html = getHtml();
      var css = getCss();
      // https://blog.csdn.net/idomyway/article/details/86309348
      // frame.contentWindow. postMessage (data, '*');
      // data: string，boolean，number，array，object
      (_b = getElementById("brickPageIframe").contentWindow) === null ||
        _b === void 0
        ? void 0
        : _b.postMessage({
          command: "build",
          data: {
            title: title,
            html: html,
            css: css,
          },
        }, "*");
      _this.saveConfig();
    };
    this.mmToPxScale = 0;
    this.pxToMmScale = 0;
    this.loadConfig = function () {
      var currentConfig = getCurrentPageLocalStorage();
      if (currentConfig.length === 0) {
        _this.loadDefaultConfig();
        return;
      }
      _this.updateData(JSON.parse(currentConfig));
    };
    this.saveConfig = function () {
      setCurrentPageLocalStorage(JSON.stringify(_this.data));
    };
    this.loadDefaultConfig = function () {
      _this.updateData(JSON.parse(_this.DEFAULT_DATA_JSON));
    };
    this.getData = function () {
      return _this.data;
    };
    this.setData = function (newData) {
      _this.updateData(newData);
    };
    this.buildAfterChangeParameter = true;
    this.saveConfigAndBuildIfAllowed = function () {
      if (!_this.buildAfterChangeParameter) {
        return;
      }
      _this.saveConfig();
      _this.build();
    };
    this.updateData = function (newData) {
      var paperSize = newData.paperSize,
        isLandscape = newData.isLandscape,
        // maxX,
        // maxY,
        pageMarginTop = newData.pageMarginTop,
        pageMarginBottom = newData.pageMarginBottom,
        pageMarginLeft = newData.pageMarginLeft,
        pageMarginRight = newData.pageMarginRight,
        diceKind = newData.diceKind;
      var _a = _this,
        paperSizeRadioArray = _a.paperSizeRadioArray,
        isLandscapeRadioArray = _a.isLandscapeRadioArray,
        pageMarginTopElement = _a.pageMarginTopElement,
        pageMarginBottomElement = _a.pageMarginBottomElement,
        pageMarginLeftElement = _a.pageMarginLeftElement,
        pageMarginRightElement = _a.pageMarginRightElement;
      paperSizeRadioArray.forEach(function (element) {
        element.checked = element.value === paperSize;
      });
      isLandscapeRadioArray.forEach(function (element) {
        element.checked = element.value === isLandscape.toString();
      });
      pageMarginTopElement.value = pageMarginTop;
      pageMarginBottomElement.value = pageMarginBottom;
      pageMarginLeftElement.value = pageMarginLeft;
      pageMarginRightElement.value = pageMarginRight;
      _this.data.paperSize = paperSize;
      _this.data.isLandscape = isLandscape;
      // this.data.maxX = maxX;
      // this.data.maxY = maxY;
      _this.data.pageMarginTop = pageMarginTop;
      _this.data.pageMarginBottom = pageMarginBottom;
      _this.data.pageMarginLeft = pageMarginLeft;
      _this.data.pageMarginRight = pageMarginRight;
      _this.updateOtherData(newData);
      _this.build();
    };
    this.getAutomaticPaginationHtmlFromChildList = function (
      list,
      MAX_X,
      MAX_Y,
      pageClass,
    ) {
      if (pageClass === void 0) pageClass = "";
      if (list.length === 0) {
        return "";
      }
      var html = pageClass.length
        ? '<page class="'.concat(pageClass, '">')
        : "<page>";
      var usedX = 0;
      var usedY = 0;
      var currentRowHeight = 0;
      list.forEach(function (child) {
        var WIDTH = 0, HEIGHT = 0;
        if (child instanceof SVGElement) {
          WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
          HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
        } else {
          var style = child.getAttribute("style");
          if (style.indexOf("width:") > -1) {
            WIDTH = parseFloat(
              style.split("width:")[1].split(";")[0].replace("mm", ""),
            );
          }
          if (style.indexOf("height:") > -1) {
            HEIGHT = parseFloat(
              style.split("height:")[1].split(";")[0].replace("mm", ""),
            );
          }
        }
        var newPage = (usedY + HEIGHT > MAX_Y);
        var newRow = false;
        if (!newPage && usedX + WIDTH > MAX_X) {
          usedY += currentRowHeight;
          if (usedY + HEIGHT > MAX_Y) {
            newPage = true;
          } else {
            newRow = true;
          }
        }
        if (newPage) {
          html += "</page><page>";
          usedX = 0;
          usedY = 0;
          currentRowHeight = 0;
        } else if (newRow) {
          usedX = 0;
          currentRowHeight = 0;
        }
        currentRowHeight = Math.max(currentRowHeight, HEIGHT);
        usedX += WIDTH;
        html += child.outerHTML;
      });
      html += "</page>";
      return html;
    };
    this.appendAutomaticPaginationControls = function (
      wrapper,
      list,
      MAX_X,
      MAX_Y,
    ) {
      if (list.length === 0) {
        return;
      }
      var page = createElement("page");
      wrapper.appendChild(page);
      // let html = '<page>';
      var usedX = 0;
      var usedY = 0;
      var currentRowHeight = 0;
      list.forEach(function (child) {
        var WIDTH = 0, HEIGHT = 0;
        if (child instanceof SVGElement) {
          WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
          HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
        } else {
          var style = child.getAttribute("style");
          if (style.indexOf("width:") > -1) {
            WIDTH = parseFloat(
              style.split("width:")[1].split(";")[0].replace("mm", ""),
            );
          }
          if (style.indexOf("height:") > -1) {
            HEIGHT = parseFloat(
              style.split("height:")[1].split(";")[0].replace("mm", ""),
            );
          }
        }
        var newPage = (usedY + HEIGHT > MAX_Y);
        var newRow = false;
        if (!newPage && usedX + WIDTH > MAX_X) {
          usedY += currentRowHeight;
          if (usedY + HEIGHT > MAX_Y) {
            newPage = true;
          } else {
            newRow = true;
          }
        }
        if (newPage) {
          // html += '</page><page>';
          page = createElement("page");
          wrapper.appendChild(page);
          usedX = 0;
          usedY = 0;
          currentRowHeight = 0;
        } else if (newRow) {
          usedX = 0;
          currentRowHeight = 0;
        }
        currentRowHeight = Math.max(currentRowHeight, HEIGHT);
        usedX += WIDTH;
        // html += child.outerHTML;
        page.appendChild(child);
      });
      // html += '</page>';
      // return html;
    };
    // protected formatLength = (length: number, precision: number): number => {
    //   const times = Math.pow(10, precision);
    //   return Math.floor(length * times) / times;
    // }
    this.formatDecile = function (length) {
      return Math.round(length * 10) / 10;
    };
    this.formatCentile = function (length) {
      return Math.round(length * 100) / 100;
    };
    this.formatMillimeter = function (length) {
      return Math.round(length * 1000) / 1000;
    };
    this.data = __assign(__assign({}, this.data), appendData);
    this.DEFAULT_DATA_JSON = JSON.stringify(this.data);
    this.computedData = __assign(
      __assign({}, this.computedData),
      otherComputedData,
    );
    newPageSizeArray.forEach(function (pageSize) {
      return _this.pageSizeArray.push(pageSize);
    });
  }
  return BrickBase;
}());

var BrickWithTableBase = /** @class */ (function (_super) {
  __extends(BrickWithTableBase, _super);
  function BrickWithTableBase(appendData, otherComputedData) {
    var _this = _super.call(
      this,
      __assign({ list: [] }, appendData),
      __assign({}, otherComputedData),
    ) || this;
    _this.initCoreElementsBeforeTable = function () {};
    _this.initCoreElementsAfterTable = function () {};
    _this.tableWrapElement = createElement("div");
    _this.tableElement = createElement("table");
    _this.tableHeadElement = createElement("thead");
    _this.tableBodyElement = createElement("tbody");
    _this.trHead = createElement("tr");
    _this.trArray = [];
    _this.idOrClassPrefix = "brickPage";
    _this.initCoreElements = function () {
      var configCoreElement = _this.configCoreElement;
      var _a = _this,
        tableWrapElement = _a.tableWrapElement,
        tableElement = _a.tableElement,
        tableHeadElement = _a.tableHeadElement,
        tableBodyElement = _a.tableBodyElement,
        trHead = _a.trHead,
        idOrClassPrefix = _a.idOrClassPrefix;
      _this.initCoreElementsBeforeTable();
      _this.initUsableButtonsWrap();
      configCoreElement.appendChild(tableWrapElement);
      _this.initCoreElementsAfterTable();
      tableWrapElement.id = "".concat(idOrClassPrefix, "TableWrap");
      tableWrapElement.appendChild(tableElement);
      tableElement.appendChild(tableHeadElement);
      tableElement.appendChild(tableBodyElement);
      tableHeadElement.appendChild(trHead);
      _this.appendTableHeadCell({
        en: "Operations",
        zh_cn: "操作",
        zh_tw: "操作",
      });
      _this.initTableHead();
    };
    _this.updateOtherDataLevel3 = function (newData) {};
    _this.updateOtherData = function (newData) {
      var list = newData.list;
      _this.data.list.length = 0;
      list.forEach(function (item) {
        return _this.data.list.push(item);
      });
      _this.updateOtherDataLevel3(newData);
      _this.showDataInTable();
    };
    _this.initUsableButtonsWrap = function () {
      var configCoreElement = _this.configCoreElement;
      var _a = _this, idOrClassPrefix = _a.idOrClassPrefix, list = _a.data.list;
      var usableButtonsWrap = createElement("div");
      configCoreElement.appendChild(usableButtonsWrap);
      usableButtonsWrap.id = "".concat(idOrClassPrefix, "UsableButtonsWrap");
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
      var _a = _this,
        tableBodyElement = _a.tableBodyElement,
        trArray = _a.trArray,
        list = _a.data.list;
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
      if (valueKind === void 0) valueKind = "string";
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
    _this.appendNumberTd = function (
      tr,
      value,
      data,
      fieldName,
      min,
      max,
      step,
    ) {
      var td = createElement("td");
      tr.appendChild(td);
      var input = createElement("input");
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
          if (trIndex === -1) {
            return stopEventBubble(event);
          }
          var newlist = [];
          _this.data.list.forEach(function (item) {
            return newlist.push(item);
          });
          switch (index) {
            case 0:
              if (trIndex === 0) {
                return stopEventBubble(event);
              }
              // newIndex = trIndex;
              // insertElement(tr, trList[trIndex - 1] as HTMLTableRowElement);
              var removeItemWhenMoveUp = newlist.splice(trIndex, 1);
              newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
              break;
            case 1:
              if (trIndex === trCount - 1) {
                return stopEventBubble(event);
              }
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
      var _a = _this,
        tableHeadElement = _a.tableHeadElement,
        list = _a.data.list;
      tableHeadElement.style.display = list.length
        ? "table-header-group"
        : "none";
    };
    return _this;
  }
  return BrickWithTableBase;
}(BrickBase));
var PokerBase = /** @class */ (function (_super) {
  __extends(PokerBase, _super);
  function PokerBase(appendData, otherComputedData) {
    var _this = _super.call(
      this,
      __assign({
        pokerWidth: 40,
        pokerHeight: 56,
        fontSize: "32px",
        backFontSize: "24px",
        pokerKind: 1,
      }, appendData),
      __assign({ backCover: "", count: 32, pokerCss: "" }, otherComputedData),
    ) || this;
    _this.countDataAndComputedData = function () {
      var _a = _this.data,
        paperSize = _a.paperSize,
        isLandscape = _a.isLandscape,
        MAX_X = _a.maxX,
        MAX_Y = _a.maxY,
        pokerWidth = _a.pokerWidth,
        pokerHeight = _a.pokerHeight,
        pageMarginTop = _a.pageMarginTop,
        // pageMarginBottom,
        pageMarginLeft = _a.pageMarginLeft,
        // pageMarginRight,
        CARD_WIDTH = _a.pokerWidth,
        CARD_HEIGHT = _a.pokerHeight,
        fontSize = _a.fontSize,
        backFontSize = _a.backFontSize,
        pokerKind = _a.pokerKind;
      var ROW_COUNT = Math.floor(MAX_Y / pokerHeight);
      var COLUMN_COUNT = Math.floor(MAX_X / pokerWidth);
      var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
      _this.countPokerDataAndComputedData(pokerKind, COUNT_PER_PAGE);
      var _b = _this,
        getForePageHtml = _b.getForePageHtml,
        getBackPageHtml = _b.getBackPageHtml;
      _this.computedData.html = getForePageHtml().concat(getBackPageHtml());
      _this.computedData.css =
        "/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n    @media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; } }\n    page:not(page:last-child){page-break-after:always;}\n\n    page { width:",
          ).concat(MAX_X, "mm;height:").concat(MAX_Y, "mm; margin-left:")
          .concat(pageMarginLeft, "mm;margin-top:").concat(
            pageMarginTop,
            "mm;}\n    page { display:block;overflow:hidden; }\n\n    page { font-weight:bolder;dominant-baseline:middle;text-anchor:start; }\n\n    page.forePage{font-family:'Times New Roman', 'KaiTi';font-size:",
          ).concat(
            fontSize,
            ";}\n    page.backPage{font-family:'Times New Roman', 'KaiTi';font-size:",
          ).concat(
            backFontSize,
            ";}\n    \n    /* page > row > cell > top/bottom/center > text.top-left/.top-right/.bottom-left/.bottom-right */\n    /* top > text.top-left/.top-right */\n    /* bottom > text.bottom-left/.bottom-right */\n    /* center >  */\n    row {display:flex;width:auto;height:",
          ).concat(CARD_HEIGHT, "mm;}\n    cell {width:").concat(
            CARD_WIDTH,
            "mm;height:",
          ).concat(CARD_HEIGHT, "mm;border-radius:").concat(
            CARD_WIDTH * 3 / 40,
            "mm;border:1px solid #aaaaaa;overflow:hidden;}\n    cell{display:inline-flex;flex-direction:column;justify-content:space-between;}\n    top,bottom{display:flex;justify-content:space-between;align-items:center;}\n    center {flex:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}\n    text{display:block;vertical-align:center;}\n\n    .top-left, .bottom-right{padding-left:",
          ).concat(
            CARD_WIDTH * 3 / 40,
            "mm;}\n    .top-right, .bottom-left{padding-right:",
          ).concat(
            CARD_WIDTH * 3 / 40,
            'mm;}\n\n    bottom {\n      transform:rotate(180deg);\n      -ms-transform:rotate(180deg); \t/* IE 9 */\n      -moz-transform:rotate(180deg); \t/* Firefox */\n      -webkit-transform:rotate(180deg); /* Safari \u548C Chrome */\n      -o-transform:rotate(180deg); \t/* Opera */ \n      \n      transform-origin:center center;\n      -ms-transform-origin:center center;\n      -moz-transform-origin:center center;\n      -webkit-transform-origin:center center;\n      -o-transform-origin:center center;\n    }\n    \n    /* https://blog.csdn.net/scotfield_msn/article/details/52564829 */\n    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */\n    /* \u9ED1/\u7EA2/\u6A59/\u9EC4/\u7EFF/\u9752/\u84DD/\u7D2B/\u7C89/\u6DE1\u7EFF/\t*/\n    /* \u9ED1/\u7D05/\u6A59/\u9EC3/\u7DA0/\u9752/\u85CD/\u7D2B/\u7C89/\u6DE1\u7DA0/\t*/\n    /*\n      [edu-color="1"] {color:#000000;}\n      [edu-color="2"] {color:#FF0000;}\n      [edu-color="3"] {color:#FF7F00;}\n      [edu-color="4"] {color:#FFFF00;}\n      [edu-color="5"] {color:#00FF00;}\n      [edu-color="6"] {color:#00FFFF;}\n      [edu-color="7"] {color:#0000FF;}\n      [edu-color="8"] {color:#8B00FF;}\n      [edu-color="9"] {color:#F19EC2;}\n      [edu-color="10"]{color:#6B8E23;}\n    */\n    /* [edu-color="3"] {color:#FFFF00;} \u9EC4\u8272 \u9EC3\u8272 yellow */\n    \n    [edu-color="1"] {color:#000000;} /* \u9ED1\u8272 \u9ED1\u8272 black */\n    [edu-color="2"] {color:#FF0000;} /* \u7EA2\u8272 \u7D05\u8272 red */\n    [edu-color="3"] {color:#0000FF;} /* \u84DD\u8272 \u85CD\u8272 blue */\n    [edu-color="4"] {color:#CCCC00;} /* \u9EC4 \u9EC3 yellow */\n    [edu-color="5"] {color:#00FF00;} /* \u7EFF\u8272 \u7DA0\u8272 green */\n    [edu-color="6"] {color:#00FFFF;} /* \u9752\u8272 \u9752\u8272 cyan */\n    [edu-color="7"] {color:#8B00FF;} /* \u7D2B\u8272 \u7D2B\u8272 purple */\n    [edu-color="8"] {color:#F19EC2;} /* \u7C89\u7EA2 \u7C89\u7D05 pink */\n    [edu-color="9"] {color:#6B8E23;} /* \u6DE1\u7EFF \u6DE1\u7DA0 light green */\n    [edu-color="10"]{color:#FF7F00;} /* \u6A59\u8272 \u6A59\u8272 orange */\n    \n    [edu-color="-1"] {color:#DDDDDD;}\n    ',
          ).concat(_this.computedData.pokerCss);
    };
    _this.updateOtherDataOfPoker = function (_newData) {};
    _this.initCoreElements = function () {
      var configCoreElement = _this.configCoreElement;
      configCoreElement.setAttribute(REPORT_KIND_PROPERTY, "poker");
      // const lang = getCurrentLang();
      var getWrapElement = _this.getWrapElement;
      var wrapElement = getWrapElement({
        en: "Poker size",
        zh_cn: "扑克尺寸",
        zh_tw: "撲克尺寸",
      });
      _this.initPokerWidthElements(wrapElement);
      _this.initPokerHeightElements(wrapElement);
      _this.appendPokerSizeButtons(wrapElement);
      wrapElement = getWrapElement({
        en: "Font size",
        zh_cn: "字号",
        zh_tw: "字型大小",
      });
      _this.initFontSizeElements(wrapElement);
      _this.initBackFontSizeElements(wrapElement);
      wrapElement = getWrapElement({
        en: "Poker Kind",
        zh_cn: "扑克类型",
        zh_tw: "撲克類型",
      });
      _this.initPokerKindElements(wrapElement);
    };
    _this.onPageSizeChanged = function (newPageSize) {
      switch (newPageSize) {
        case "A3":
          _this.data.pokerWidth = 48;
          _this.data.pokerHeight = 68;
          break;
        case "A4":
          _this.data.pokerWidth = 40;
          _this.data.pokerHeight = 56;
          break;
        default:
          break;
      }
      _this.pokerWidthElement.value = _this.data.pokerWidth.toString();
      _this.pokerHeightElement.value = _this.data.pokerHeight.toString();
    };
    _this.pokerWidthElement = createElement("input");
    _this.initPokerWidthElements = function (wrapElement) {
      var _a = _this,
        pokerWidth = _a.data.pokerWidth,
        pokerWidthElement = _a.pokerWidthElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Width:",
        zh_cn: "宽：",
        zh_tw: "寬：",
      });
      pokerWidthElement.value = pokerWidth.toString();
      pokerWidthElement.type = "number";
      pokerWidthElement.setAttribute("min", "0");
      var changeValue = function () {
        _this.data.pokerWidth = parseInt(pokerWidthElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      pokerWidthElement.onchange = changeValue;
      pokerWidthElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pokerWidthElement);
    };
    _this.pokerHeightElement = createElement("input");
    _this.initPokerHeightElements = function (wrapElement) {
      var _a = _this,
        pokerHeight = _a.data.pokerHeight,
        pokerHeightElement = _a.pokerHeightElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Height:",
        zh_cn: "高：",
        zh_tw: "高：",
      });
      pokerHeightElement.value = pokerHeight.toString();
      pokerHeightElement.type = "number";
      pokerHeightElement.setAttribute("min", "0");
      var changeValue = function () {
        _this.data.pokerHeight = parseInt(pokerHeightElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      pokerHeightElement.onchange = changeValue;
      pokerHeightElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pokerHeightElement);
    };
    _this.fontSizeElement = createElement("input");
    _this.initFontSizeElements = function (wrapElement) {
      var _a = _this,
        fontSize = _a.data.fontSize,
        fontSizeElement = _a.fontSizeElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Front:",
        zh_cn: "正面：",
        zh_tw: "正面：",
      });
      fontSizeElement.type = "text";
      fontSizeElement.value = fontSize;
      var changeValue = function () {
        _this.data.fontSize = fontSizeElement.value;
        _this.saveConfigAndBuildIfAllowed();
      };
      fontSizeElement.onchange = changeValue;
      fontSizeElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(fontSizeElement);
    };
    _this.backFontSizeElement = createElement("input");
    _this.initBackFontSizeElements = function (wrapElement) {
      var _a = _this,
        backFontSize = _a.data.backFontSize,
        backFontSizeElement = _a.backFontSizeElement;
      var labelElement = createElement("label");
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en: "Back:",
        zh_cn: "背面：",
        zh_tw: "背面：",
      });
      backFontSizeElement.type = "text";
      backFontSizeElement.value = backFontSize;
      var changeValue = function () {
        _this.data.backFontSize = backFontSizeElement.value;
        _this.saveConfigAndBuildIfAllowed();
      };
      backFontSizeElement.onchange = changeValue;
      backFontSizeElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(backFontSizeElement);
    };
    _this.pokerKindElementArray = [];
    _this.appendPokerSizeButtons = function (wrapElement) {
      [
        {
          i18n: {
            en: "Small",
            zh_cn: "小",
            zh_tw: "小",
          },
          width: 40,
          height: 56,
        },
        {
          i18n: {
            en: "Big",
            zh_cn: "大",
            zh_tw: "大",
          },
          width: 48,
          height: 68,
        },
      ].forEach(function (_a, i) {
        var i18n = _a.i18n, width = _a.width, height = _a.height;
        var buttonElement = createElement("button");
        buttonElement.innerHTML = getI18nInnerHTML(i18n);
        buttonElement.type = "button";
        buttonElement.setAttribute("edu-to-width", width.toString());
        buttonElement.setAttribute("edu-to-height", height.toString());
        buttonElement.name = "pokerSizeButtons";
        buttonElement.onclick = function (event) {
          var widthValue = parseInt(
            buttonElement.getAttribute("edu-to-width"),
            0,
          );
          var heightValue = parseInt(
            buttonElement.getAttribute("edu-to-height"),
            0,
          );
          _this.data.pokerWidth = widthValue;
          _this.data.pokerHeight = heightValue;
          _this.pokerWidthElement.value = widthValue.toString();
          _this.pokerHeightElement.value = heightValue.toString();
          _this.saveConfigAndBuildIfAllowed();
          return stopEventBubble(event);
        };
        wrapElement.appendChild(buttonElement);
      });
    };
    _this.updateOtherData = function (newData) {
      var pokerWidth = newData.pokerWidth,
        pokerHeight = newData.pokerHeight,
        fontSize = newData.fontSize,
        backFontSize = newData.backFontSize,
        pokerKind = newData.pokerKind;
      var _a = _this,
        pokerWidthElement = _a.pokerWidthElement,
        pokerHeightElement = _a.pokerHeightElement,
        fontSizeElement = _a.fontSizeElement,
        backFontSizeElement = _a.backFontSizeElement,
        pokerKindElementArray = _a.pokerKindElementArray;
      pokerKindElementArray.forEach(function (element) {
        element.checked = element.value === pokerKind.toString();
      });
      pokerWidthElement.value = pokerWidth;
      pokerHeightElement.value = pokerHeight;
      fontSizeElement.value = fontSize;
      backFontSizeElement.value = backFontSize;
      _this.data.pokerWidth = pokerWidth;
      _this.data.pokerHeight = pokerHeight;
      _this.data.fontSize = fontSize;
      _this.data.backFontSize = backFontSize;
      _this.data.pokerKind = pokerKind;
      _this.updateOtherDataOfPoker(newData);
    };
    return _this;
  }
  return PokerBase;
}(BrickBase));
/**
 * <en>
 * Function:
 * Create:
 * History:
 * Reference:
 * Description:
 * </en>
 *
 * <zh_cn>
 * 功能：注音写字生成小工具
 * 初建：2022-11-14 安启
 * 历史：
 * 参考：P:\ecs_person\websites\sonya.cc\www\01_chinese\01_chineseChars
 * 说明：看拼音写汉字、看汉字写拼音。
 * 设计：于constructor中进一步扩展data与otherComputedData，同时扩展DEFAULT_DATA_JSON。
 *       从BrickBase继承computedData、data、configCoreElement等，实现以下抽象方法：
 *       countDataAndComputedData、updateOtherData、initCoreElements、
 *       onPageSizeChanged、download、print
 *       暂不实现抽象方法：initOtherElements
 *       于constructor中进一步扩展data与otherComputedData，同时扩展DEFAULT_DATA_JSON。
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：
 * 初建：
 * 歷史：
 * 參攷：P:\ecs_person\websites\sonya.cc\www\01_chinese\01_chineseChars
 * 說明：
 * </zh_tw>
 */
var CopybookBase = /** @class */ (function (_super) {
  __extends(CopybookBase, _super);
  function CopybookBase(appendData, otherComputedData) {
    var _this = _super.call(
      this,
      __assign({
        copybooks: [],
        selectedCheckboxIndexArray: [],
        kind: "pinyinToChinese",
        inputMethod: "select",
        fontSize: "small",
        color: "blackOnGreen",
      }, appendData),
      __assign({ css: "", html: "" }, otherComputedData),
    ) || this;
    /**
     * <en>Synchronize new data related to copybook.</en>
     * <zh_cn>同步字帖相关新数据</zh_cn>
     * <zh_tw>同步字帖相關新數據</zh_tw>
     * @param _newData
     * <en>New data related to copybook.</en>
     * <zh_cn>字帖相关新数据</zh_cn>
     * <zh_tw>字帖相關新數據</zh_tw>
     */
    _this.updateOtherDataOfCopybook = function (_newData) {};
    /**
     * <en>
     * Array: check box corresponding to the selectable copybook set leaf node set.
     * </en>
     * <zh_cn>
     * 数组：可选择的字帖叶结点集合对应的复选框。
     * </zh_cn>
     * <zh_tw>
     * 數組：可選擇的字帖葉結點集合對應的核取方塊。
     * </zh_tw>
     */
    _this.usableCopybookCheckboxElementArray = [];
    /**
     * <en>
     * Array: Array: optional copybook collection.
     * Level 3: semester, unit and class. Skip the third level at present. terms -> units [-> lessions]
     * In the first semester of the first grade, the contents of the writing table were all included in the literacy table;
     * In the second semester of the first year, there are two parts: the character recognition table and the writing table.
     * From the second grade, there are three parts: literacy table, writing table and words.
     * </en>
     * <zh_cn>
     * 数组：可选择的字帖集。三级：学期、单元、课。目前略过第三级。
     * 一年级上，写字表内容全部包含于识字表中；一年级下，分识字表与写字表两部分。二年级开始，分识字表、写字表、词语三部分。
     * </zh_cn>
     * <zh_tw>
     * 數組：可選擇的字帖集。 三級：學期、單元、課。 現時略過第三級。
     * 一年級上，寫字錶內容全部包含於識字錶中；一年級下，分識字表與寫字錶兩部分。二年級開始，分識字表、寫字錶、詞語三部分。
     * </zh_tw>
     */
    _this.usableCopybooksPeopleEducationEdition = [];
    /**
     * <en>Typebook Kind radio button element array.</en>
     * <zh_cn>字帖类型单选按钮数组</zh_cn>
     * <zh_tw>字帖類型單選按鈕數組</zh_tw>
     */
    _this.kindElementArray = [];
    /**
     * <en>Init typebook kind radio button element array.</en>
     * <zh_cn>初始化字帖类型单选按钮数组</zh_cn>
     * <zh_tw>初始化字帖類型單選按鈕數組</zh_tw>
     */
    _this.initKindElements = function () {
      var wrapLabelI18n = {
        en: "Typebook Kind",
        zh_cn: "\u5B57\u5E16\u7C7B\u578B",
        zh_tw: "\u5B57\u5E16\u985E\u578B",
      };
      var radiosInfoArray = [
        {
          value: "pinyinToChinese",
          i18nHtml: getI18nInnerHTML({
            en: "Reading Pinyin and Writing Chinese Characters",
            zh_cn: "\u770B\u62FC\u97F3\u5199\u6C49\u5B57",
            zh_tw: "\u770B\u62FC\u97F3\u5BEB\u6F22\u5B57",
          }),
        },
        {
          value: "chineseToPinyin",
          i18nHtml: getI18nInnerHTML({
            en: "Look at Chinese characters and write pinyin",
            zh_cn: "\u770B\u6C49\u5B57\u5199\u62FC\u97F3",
            zh_tw: "\u770B\u6F22\u5B57\u5BEB\u62FC\u97F3",
          }),
        },
      ];
      _this.initRadioGroupWithLabelByStringValue(
        radiosInfoArray,
        "kind",
        _this.kindElementArray,
        wrapLabelI18n,
      );
    };
    /**
     * <en>Entry method radio button element array.</en>
     * <zh_cn>录入方式单选按钮数组</zh_cn>
     * <zh_tw>錄入方式單選按鈕數組</zh_tw>
     */
    _this.inputMethodElementArray = [];
    /**
     * <en>Init entry method radio button element array.</en>
     * <zh_cn>初始化录入方式单选按钮数组</zh_cn>
     * <zh_tw>初始化錄入方式單選按鈕數組</zh_tw>
     */
    _this.initInputMethodElements = function () {
      var wrapLabelI18n = {
        en: "Entry method",
        zh_cn: "\u5F55\u5165\u65B9\u5F0F",
        zh_tw: "\u9304\u5165\u65B9\u5F0F",
      };
      var radiosInfoArray = [
        {
          value: "select",
          i18nHtml: getI18nInnerHTML({
            en: "Select",
            zh_cn: "\u9009\u62E9",
            zh_tw: "\u9078\u64C7",
          }),
        },
        {
          value: "manualInput",
          i18nHtml: getI18nInnerHTML({
            en: "Manual input",
            zh_cn: "\u624B\u52A8\u8F93\u5165",
            zh_tw: "\u624B\u52D5\u8F38\u5165",
          }),
        },
      ];
      _this.initRadioGroupWithLabelByStringValue(
        radiosInfoArray,
        "inputMethod",
        _this.inputMethodElementArray,
        wrapLabelI18n,
      );
    };
    /**
     * <en>Font Size radio button element array.</en>
     * <zh_cn>字号单选按钮数组</zh_cn>
     * <zh_tw>字型大小單選按鈕數組</zh_tw>
     */
    _this.fontSizeElementArray = [];
    /**
     * <en>Init font size radio button element array.</en>
     * <zh_cn>初始化字号单选按钮数组</zh_cn>
     * <zh_tw>初始化字型大小單選按鈕數組</zh_tw>
     */
    _this.initFontSizeElements = function () {
      var wrapLabelI18n = {
        en: "Font Size",
        zh_cn: "\u5B57\u53F7",
        zh_tw: "\u5B57\u578B\u5927\u5C0F",
      };
      var radiosInfoArray = [
        {
          value: "small",
          i18nHtml: getI18nInnerHTML({
            en: "Small",
            zh_cn: "\u5C0F",
            zh_tw: "\u5C0F",
          }),
        },
        {
          value: "middle",
          i18nHtml: getI18nInnerHTML({
            en: "Middle",
            zh_cn: "\u4E2D",
            zh_tw: "\u4E2D",
          }),
        },
        {
          value: "big",
          i18nHtml: getI18nInnerHTML({
            en: "Big",
            zh_cn: "\u5927",
            zh_tw: "\u5927",
          }),
        },
      ];
      _this.initRadioGroupWithLabelByStringValue(
        radiosInfoArray,
        "fontSize",
        _this.fontSizeElementArray,
        wrapLabelI18n,
      );
    };
    /**
     * <en>Color radio button element array.</en>
     * <zh_cn>颜色单选按钮数组</zh_cn>
     * <zh_tw>顏色單選按鈕數組</zh_tw>
     */
    _this.colorElementArray = [];
    /**
     * <en>Init color radio button element array.</en>
     * <zh_cn>初始化颜色单选按钮数组</zh_cn>
     * <zh_tw>初始化顏色單選按鈕數組</zh_tw>
     */
    _this.initColorElements = function () {
      var wrapLabelI18n = {
        en: "Color",
        zh_cn: "\u989C\u8272",
        zh_tw: "\u984F\u8272",
      };
      var radiosInfoArray = [
        {
          value: "blackOnGreen",
          i18nHtml: getI18nInnerHTML({
            en: "Green line and black characters.",
            zh_cn: "\u7EFF\u7EBF\u9ED1\u5B57",
            zh_tw: "\u7DA0\u7DDA\u9ED1\u5B57",
          }),
        },
        {
          value: "redOnBlack",
          i18nHtml: getI18nInnerHTML({
            en: "Black line and red characters.",
            zh_cn: "\u9ED1\u7EBF\u7EA2\u5B57",
            zh_tw: "\u9ED1\u7DDA\u7D05\u5B57",
          }),
        },
        {
          value: "blackOnRed",
          i18nHtml: getI18nInnerHTML({
            en: "Red line and black characters.",
            zh_cn: "\u7EA2\u7EBF\u9ED1\u5B57",
            zh_tw: "\u7D05\u7DDA\u9ED1\u5B57",
          }),
        },
      ];
      _this.initRadioGroupWithLabelByStringValue(
        radiosInfoArray,
        "color",
        _this.colorElementArray,
        wrapLabelI18n,
      );
    };
    // private pinyinArrayWithoutToneLength6 = ['chuɑnɡ', 'shuɑnɡ', 'zhuɑnɡ'];
    // private pinyinArrayWithoutToneLength5 = ['chɑnɡ', 'chenɡ', 'chonɡ', 'chuɑi', 'chuɑn', 'ɡuɑnɡ', 'huɑnɡ', 'jiɑnɡ', 'jionɡ', 'kuɑnɡ', 'liɑnɡ', 'niɑnɡ', 'qiɑnɡ', 'qionɡ', 'shɑnɡ', 'shenɡ', 'shuɑi', 'shuɑn', 'xiɑnɡ', 'xionɡ', 'zhɑnɡ', 'zhenɡ', 'zhonɡ', 'zhuɑi', 'zhuɑn'];
    // private pinyinArrayWithoutToneLength4 = ['bɑnɡ', 'benɡ', 'biɑn', 'biɑo', 'binɡ', 'cɑnɡ', 'cenɡ', 'chɑi', 'chɑn', 'chɑo', 'chen', 'chou', 'chuɑ', 'chui', 'chun', 'chuo', 'conɡ', 'cuɑn', 'dɑnɡ', 'denɡ', 'diɑn', 'diɑo', 'dinɡ', 'donɡ', 'duɑn', 'fɑnɡ', 'fenɡ', 'fiɑo', 'ɡɑnɡ', 'ɡenɡ', 'ɡonɡ', 'ɡuɑi', 'ɡuɑn', 'hɑnɡ', 'henɡ', 'honɡ', 'huɑi', 'huɑn', 'jiɑn', 'jiɑo', 'jinɡ', 'juɑn', 'kɑnɡ', 'kenɡ', 'konɡ', 'kuɑi', 'kuɑn', 'lɑnɡ', 'lenɡ', 'liɑn', 'liɑo', 'linɡ', 'lonɡ', 'luɑn', 'mɑnɡ', 'menɡ', 'miɑn', 'miɑo', 'minɡ', 'nɑnɡ', 'nenɡ', 'niɑn', 'niɑo', 'ninɡ', 'nonɡ', 'nuɑn', 'pɑnɡ', 'penɡ', 'piɑn', 'piɑo', 'pinɡ', 'qiɑn', 'qiɑo', 'qinɡ', 'quɑn', 'rɑnɡ', 'renɡ', 'ronɡ', 'ruɑn', 'sɑnɡ', 'senɡ', 'shɑi', 'shɑn', 'shɑo', 'shei', 'shen', 'shou', 'shuɑ', 'shui', 'shun', 'shuo', 'sonɡ', 'suɑn', 'tɑnɡ', 'tenɡ', 'tiɑn', 'tiɑo', 'tinɡ', 'tonɡ', 'tuɑn', 'wɑnɡ', 'wenɡ', 'xiɑn', 'xiɑo', 'xinɡ', 'xuɑn', 'yɑnɡ', 'yinɡ', 'yonɡ', 'yuɑn', 'zɑnɡ', 'zenɡ', 'zhɑi', 'zhɑn', 'zhɑo', 'zhei', 'zhen', 'zhou', 'zhuɑ', 'zhui', 'zhun', 'zhuo', 'zonɡ', 'zuɑn'];
    // private pinyinArrayWithoutToneLength3 = ['ɑnɡ', 'bɑi', 'bɑn', 'bɑo', 'bei', 'ben', 'bie', 'bin', 'cɑi', 'cɑn', 'cɑo', 'cen', 'chɑ', 'che', 'chi', 'chu', 'cou', 'cui', 'cun', 'cuo', 'dɑi', 'dɑn', 'dɑo', 'dei', 'den', 'diɑ', 'die', 'diu', 'dou', 'dui', 'dun', 'duo', 'enɡ', 'fɑn', 'fei', 'fen', 'fou', 'ɡɑi', 'ɡɑn', 'ɡɑo', 'ɡei', 'ɡen', 'ɡou', 'ɡuɑ', 'ɡui', 'ɡun', 'ɡuo', 'hɑi', 'hɑn', 'hɑo', 'hei', 'hen', 'hou', 'huɑ', 'hui', 'hun', 'huo', 'jiɑ', 'jie', 'jin', 'jiu', 'jue', 'jun', 'kɑi', 'kɑn', 'kɑo', 'kei', 'ken', 'kou', 'kuɑ', 'kui', 'kun', 'kuo', 'lɑi', 'lɑn', 'lɑo', 'lei', 'liɑ', 'lie', 'lin', 'liu', 'lou', 'lue', 'lun', 'luo', 'mɑi', 'mɑn', 'mɑo', 'mei', 'men', 'mie', 'min', 'miu', 'mou', 'nɑi', 'nɑn', 'nɑo', 'nei', 'nen', 'nie', 'nin', 'niu', 'nou', 'nue', 'nun', 'nuo', 'pɑi', 'pɑn', 'pɑo', 'pei', 'pen', 'pie', 'pin', 'pou', 'qiɑ', 'qie', 'qin', 'qiu', 'que', 'qun', 'rɑn', 'rɑo', 'ren', 'rou', 'ruɑ', 'rui', 'run', 'ruo', 'sɑi', 'sɑn', 'sɑo', 'sen', 'shɑ', 'she', 'shi', 'shu', 'sou', 'sui', 'sun', 'suo', 'tɑi', 'tɑn', 'tɑo', 'tei', 'tie', 'tou', 'tui', 'tun', 'tuo', 'wɑi', 'wɑn', 'wei', 'wen', 'xiɑ', 'xie', 'xin', 'xiu', 'xue', 'xun', 'yɑn', 'yɑo', 'yin', 'you', 'yue', 'yun', 'zɑi', 'zɑn', 'zɑo', 'zei', 'zen', 'zhɑ', 'zhe', 'zhi', 'zhu', 'zou', 'zui', 'zun', 'zuo'];
    // private pinyinArrayWithoutToneLength2 = ['ɑi', 'ɑn', 'ɑo', 'bɑ', 'bi', 'bo', 'bu', 'cɑ', 'ce', 'ci', 'cu', 'dɑ', 'de', 'di', 'du', 'ei', 'en', 'er', 'fɑ', 'fo', 'fu', 'ɡɑ', 'ɡe', 'ɡu', 'hɑ', 'he', 'hu', 'ji', 'ju', 'kɑ', 'ke', 'ku', 'lɑ', 'le', 'li', 'lo', 'lu', 'lü', 'mɑ', 'me', 'mi', 'mo', 'mu', 'nɑ', 'ne', 'ni', 'nu', 'nü', 'ou', 'pɑ', 'pi', 'po', 'pu', 'qi', 'qu', 're', 'ri', 'ru', 'sɑ', 'se', 'si', 'su', 'tɑ', 'te', 'ti', 'tu', 'wɑ', 'wo', 'wu', 'xi', 'xu', 'yɑ', 'ye', 'yi', 'yo', 'yu', 'zɑ', 'ze', 'zi', 'zu'];
    // private pinyinArrayWithoutToneLength1 = ['ɑ', 'e', 'o'];
    _this.pinyinArrayWithoutTone = [
      "chuɑnɡ",
      "shuɑnɡ",
      "zhuɑnɡ",
      "chɑnɡ",
      "chenɡ",
      "chonɡ",
      "chuɑi",
      "chuɑn",
      "ɡuɑnɡ",
      "huɑnɡ",
      "jiɑnɡ",
      "jionɡ",
      "kuɑnɡ",
      "liɑnɡ",
      "niɑnɡ",
      "qiɑnɡ",
      "qionɡ",
      "shɑnɡ",
      "shenɡ",
      "shuɑi",
      "shuɑn",
      "xiɑnɡ",
      "xionɡ",
      "zhɑnɡ",
      "zhenɡ",
      "zhonɡ",
      "zhuɑi",
      "zhuɑn",
      "bɑnɡ",
      "benɡ",
      "biɑn",
      "biɑo",
      "binɡ",
      "cɑnɡ",
      "cenɡ",
      "chɑi",
      "chɑn",
      "chɑo",
      "chen",
      "chou",
      "chuɑ",
      "chui",
      "chun",
      "chuo",
      "conɡ",
      "cuɑn",
      "dɑnɡ",
      "denɡ",
      "diɑn",
      "diɑo",
      "dinɡ",
      "donɡ",
      "duɑn",
      "fɑnɡ",
      "fenɡ",
      "fiɑo",
      "ɡɑnɡ",
      "ɡenɡ",
      "ɡonɡ",
      "ɡuɑi",
      "ɡuɑn",
      "hɑnɡ",
      "henɡ",
      "honɡ",
      "huɑi",
      "huɑn",
      "jiɑn",
      "jiɑo",
      "jinɡ",
      "juɑn",
      "kɑnɡ",
      "kenɡ",
      "konɡ",
      "kuɑi",
      "kuɑn",
      "lɑnɡ",
      "lenɡ",
      "liɑn",
      "liɑo",
      "linɡ",
      "lonɡ",
      "luɑn",
      "mɑnɡ",
      "menɡ",
      "miɑn",
      "miɑo",
      "minɡ",
      "nɑnɡ",
      "nenɡ",
      "niɑn",
      "niɑo",
      "ninɡ",
      "nonɡ",
      "nuɑn",
      "pɑnɡ",
      "penɡ",
      "piɑn",
      "piɑo",
      "pinɡ",
      "qiɑn",
      "qiɑo",
      "qinɡ",
      "quɑn",
      "rɑnɡ",
      "renɡ",
      "ronɡ",
      "ruɑn",
      "sɑnɡ",
      "senɡ",
      "shɑi",
      "shɑn",
      "shɑo",
      "shei",
      "shen",
      "shou",
      "shuɑ",
      "shui",
      "shun",
      "shuo",
      "sonɡ",
      "suɑn",
      "tɑnɡ",
      "tenɡ",
      "tiɑn",
      "tiɑo",
      "tinɡ",
      "tonɡ",
      "tuɑn",
      "wɑnɡ",
      "wenɡ",
      "xiɑn",
      "xiɑo",
      "xinɡ",
      "xuɑn",
      "yɑnɡ",
      "yinɡ",
      "yonɡ",
      "yuɑn",
      "zɑnɡ",
      "zenɡ",
      "zhɑi",
      "zhɑn",
      "zhɑo",
      "zhei",
      "zhen",
      "zhou",
      "zhuɑ",
      "zhui",
      "zhun",
      "zhuo",
      "zonɡ",
      "zuɑn",
      "ɑnɡ",
      "bɑi",
      "bɑn",
      "bɑo",
      "bei",
      "ben",
      "bie",
      "bin",
      "cɑi",
      "cɑn",
      "cɑo",
      "cen",
      "chɑ",
      "che",
      "chi",
      "chu",
      "cou",
      "cui",
      "cun",
      "cuo",
      "dɑi",
      "dɑn",
      "dɑo",
      "dei",
      "den",
      "diɑ",
      "die",
      "diu",
      "dou",
      "dui",
      "dun",
      "duo",
      "enɡ",
      "fɑn",
      "fei",
      "fen",
      "fou",
      "ɡɑi",
      "ɡɑn",
      "ɡɑo",
      "ɡei",
      "ɡen",
      "ɡou",
      "ɡuɑ",
      "ɡui",
      "ɡun",
      "ɡuo",
      "hɑi",
      "hɑn",
      "hɑo",
      "hei",
      "hen",
      "hou",
      "huɑ",
      "hui",
      "hun",
      "huo",
      "jiɑ",
      "jie",
      "jin",
      "jiu",
      "jue",
      "jun",
      "kɑi",
      "kɑn",
      "kɑo",
      "kei",
      "ken",
      "kou",
      "kuɑ",
      "kui",
      "kun",
      "kuo",
      "lɑi",
      "lɑn",
      "lɑo",
      "lei",
      "liɑ",
      "lie",
      "lin",
      "liu",
      "lou",
      "lue",
      "lun",
      "luo",
      "mɑi",
      "mɑn",
      "mɑo",
      "mei",
      "men",
      "mie",
      "min",
      "miu",
      "mou",
      "nɑi",
      "nɑn",
      "nɑo",
      "nei",
      "nen",
      "nie",
      "nin",
      "niu",
      "nou",
      "nue",
      "nun",
      "nuo",
      "pɑi",
      "pɑn",
      "pɑo",
      "pei",
      "pen",
      "pie",
      "pin",
      "pou",
      "qiɑ",
      "qie",
      "qin",
      "qiu",
      "que",
      "qun",
      "rɑn",
      "rɑo",
      "ren",
      "rou",
      "ruɑ",
      "rui",
      "run",
      "ruo",
      "sɑi",
      "sɑn",
      "sɑo",
      "sen",
      "shɑ",
      "she",
      "shi",
      "shu",
      "sou",
      "sui",
      "sun",
      "suo",
      "tɑi",
      "tɑn",
      "tɑo",
      "tei",
      "tie",
      "tou",
      "tui",
      "tun",
      "tuo",
      "wɑi",
      "wɑn",
      "wei",
      "wen",
      "xiɑ",
      "xie",
      "xin",
      "xiu",
      "xue",
      "xun",
      "yɑn",
      "yɑo",
      "yin",
      "you",
      "yue",
      "yun",
      "zɑi",
      "zɑn",
      "zɑo",
      "zei",
      "zen",
      "zhɑ",
      "zhe",
      "zhi",
      "zhu",
      "zou",
      "zui",
      "zun",
      "zuo",
      "ɑi",
      "ɑn",
      "ɑo",
      "bɑ",
      "bi",
      "bo",
      "bu",
      "cɑ",
      "ce",
      "ci",
      "cu",
      "dɑ",
      "de",
      "di",
      "du",
      "ei",
      "en",
      "er",
      "fɑ",
      "fo",
      "fu",
      "ɡɑ",
      "ɡe",
      "ɡu",
      "hɑ",
      "he",
      "hu",
      "ji",
      "ju",
      "kɑ",
      "ke",
      "ku",
      "lɑ",
      "le",
      "li",
      "lo",
      "lu",
      "lü",
      "mɑ",
      "me",
      "mi",
      "mo",
      "mu",
      "nɑ",
      "ne",
      "ni",
      "nu",
      "nü",
      "ou",
      "pɑ",
      "pi",
      "po",
      "pu",
      "qi",
      "qu",
      "re",
      "ri",
      "ru",
      "sɑ",
      "se",
      "si",
      "su",
      "tɑ",
      "te",
      "ti",
      "tu",
      "wɑ",
      "wo",
      "wu",
      "xi",
      "xu",
      "yɑ",
      "ye",
      "yi",
      "yo",
      "yu",
      "zɑ",
      "ze",
      "zi",
      "zu",
      "ɑ",
      "e",
      "o",
    ];
    _this.isPinyinBill = function (pinyinBill) {
      var pinyinBillTemp = pinyinBill;
      var pinyinBillTempLength = pinyinBillTemp.length;
      while (pinyinBillTempLength) {
        var find = false;
        for (var leftLength = 6; leftLength > 0; --leftLength) {
          if (pinyinBillTempLength < leftLength) {
            continue;
          }
          var leftPinyin = pinyinBillTemp.substring(0, leftLength);
          if (_this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
            continue;
          }
          if (pinyinBillTempLength === leftLength) {
            find = true;
            pinyinBillTemp = "";
            break;
          }
          var rightPinyinBill = pinyinBillTemp.substr(leftLength);
          if (_this.isPinyinBill(rightPinyinBill)) {
            find = true;
            pinyinBillTemp = rightPinyinBill;
            break;
          }
        }
        if (!find) {
          return false;
        }
        pinyinBillTempLength = pinyinBillTemp.length;
      }
      return true;
    };
    _this.splitPinyin = function (pinyinBill, pinyinArray, charCount) {
      // console.log(`splitPinyin('${pinyinBill}', ${pinyinArray}, ${charCount})`);
      pinyinBill = pinyinBill.toLowerCase();
      var isEndOfR = pinyinBill.substr(-1) === "r";
      var pinyinBillTemp = isEndOfR
        ? pinyinBill.substr(0, pinyinBill.length - 1)
        : pinyinBill;
      pinyinBillTemp = pinyinBillTemp
        .replace(/[āáǎà]/gi, "ɑ")
        .replace(/[ōóǒò]/gi, "o")
        .replace(/[ēéěè]/gi, "e")
        .replace(/[īíǐì]/gi, "i")
        .replace(/[ūúǔù]/gi, "u")
        .replace(/[ǖǘǚǜ]/gi, "ü");
      var array = [];
      var pinyinBillTempLength = pinyinBillTemp.length;
      while (pinyinBillTempLength) {
        var find = false;
        for (var leftLength = 6; leftLength > 0; --leftLength) {
          if (pinyinBillTempLength < leftLength) {
            continue;
          }
          var leftPinyin = pinyinBillTemp.substring(0, leftLength);
          if (_this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
            // console.log('not in array, ', leftPinyin, leftLength);
            continue;
          }
          if (pinyinBillTempLength === leftLength) {
            // console.log('ok, last', leftPinyin, leftLength);
            find = true;
            array.push(leftPinyin);
            pinyinBillTemp = "";
            break;
          }
          var rightPinyinBill = pinyinBillTemp.substr(leftLength);
          if (_this.isPinyinBill(rightPinyinBill)) {
            // console.log('ok, not last', leftPinyin, leftLength, rightPinyinBill);
            find = true;
            array.push(leftPinyin);
            pinyinBillTemp = rightPinyinBill;
            break;
          }
        }
        if (!find) {
          break;
        }
        pinyinBillTempLength = pinyinBillTemp.length;
      }
      var offset = 0;
      array.forEach(function (pinyin) {
        var length = pinyin.length;
        pinyinArray.push(pinyinBill.substr(offset, length));
        offset += length;
      });
      var count = pinyinArray.length;
      if (isEndOfR) {
        var last = pinyinArray.splice(count - 1, 1)[0].concat("r");
        pinyinArray.push(last);
      }
    };
    _this.fixPinyinArray = function (pinyinBill, pinyinArray, charCount) {
      var splitPinyin = _this.splitPinyin;
      var array = [];
      pinyinArray.forEach(function (seg) {
        splitPinyin(seg, array, charCount);
      });
      if (array.length !== charCount) {
        array.length = 0;
        splitPinyin(pinyinBill, array, charCount);
      }
      pinyinArray.length = 0;
      array.forEach(function (pinyin) {
        pinyinArray.push(pinyin);
      });
    };
    // protected CHARS = '⺀⺈⺊⺌⺍⺗⺮⺳⺼吖阿啊锕錒嗄哎哀埃唉欸锿挨捱皑皚癌矮蔼藹霭艾砹爱隘碍嗳嗌愛嫒瑷暧噯璦曖礙安桉氨庵谙媕鹌鞍諳鵪俺埯唵铵揞銨犴岸按豻胺案暗黯肮骯昂盎凹敖遨嗷廒獒熬聱螯翱鳌鏖鰲袄媪襖岙坳傲奥骜奧澳懊鏊八丷巴扒叭芭岜疤捌笆粑鲃䰾犮拔茇菝跋魃把靶坝爸罢鲅罷霸壩灞吧掰白百佰柏捭摆擺败拜敗稗扳班般颁斑搬頒瘢癍阪坂板版钣舨闆办半伴拌绊湴絆辦瓣扮邦帮梆浜幫绑綁榜蚌棒傍谤蒡磅镑謗鎊勹包苞孢胞龅煲褒齙雹薄宀饱宝保鸨珤葆堡飽褓鴇寶报抱趵豹報鲍暴鮑爆陂杯卑盃悲碑鹎鵯北贝孛邶貝狈备背钡倍狽悖被辈備惫焙蓓碚褙輩鋇憊鞴鐾呗唄奔贲賁锛本夲苯畚坌笨崩绷嘣繃甭埲泵迸甏镚蹦屄逼荸鼻匕比吡妣彼秕笔俾舭啚筆鄙币必毕闭坒庇畀荜毖哔陛毙畢铋狴萆閉庳敝婢皕赑筚愎弼蓽蓖跸嗶痹痺滗裨碧蔽箅弊幣薜觱篳篦壁避嬖髀斃濞臂璧襞贔鸊边砭笾猵编煸蝙編鳊鞭邊釆贬窆扁匾貶碥稨褊卞弁抃苄汴忭变便遍缏辨辩辫辮辯變标飑髟彪猋摽骠標膘麃飙镖飚瘭藨鏢镳飆鑣表婊裱錶鳔鰾憋鳖鱉別别蹩瘪癟彆邠玢宾彬傧斌滨缤槟豩賓镔濒豳濱檳瀕繽摈殡膑擯殯髌鬓髕鬢仌冰兵丙邴秉柄饼炳禀稟餅疒并併並病摒癶拨波玻钵饽袯剥剝菠缽播撥餑伯驳帛泊勃钹铂亳桲舶脖博鹁渤搏駁箔膊踣镈駮鵓鎛礴跛檗擘簸卜啵蔔逋钸晡鈽卟补捕哺補不布步佈歨怖钚埗部埠瓿醭簿擦礤猜才材财財裁纔采採彩睬綵踩菜蔡縩参參骖餐残蚕惭殘慚蠶惨慘黪灿粲璨燦仓伧苍沧鸧舱倉蒼滄艙鶬藏操糙曹嘈漕槽螬艚艹艸草刂冊册厕侧测恻側策廁測惻岑涔梣噌层曾層蹭叉杈臿插馇锸嚓茬茶查搽猹槎碴察檫衩镲鑔汊奼岔刹诧差姹詫拆钗釵侪柴豺儕虿瘥㢟觇掺搀覘摻攙㢆谗婵馋禅孱缠蝉廛潺嬋澶禪毚蟬蟾纏躔讒饞产浐谄啴铲產産阐蒇剷滻諂骣冁鏟闡忏颤懺羼顫伥昌倀菖猖阊娼閶鲳鯧镸苌肠長尝常偿徜場腸塲嘗嫦償厂场昶惝敞䠀廠氅怅畅倡鬯唱悵暢抄怊钞绰超鈔焯晁巢朝嘲潮鼂吵炒耖车車砗扯屮彻坼掣撤徹澈抻郴琛嗔瞋臣尘辰沉忱陈宸陳晨谌塵諶碜衬龀趁榇谶襯讖傖柽爯称蛏稱撐撑瞠成丞呈枨诚承城埕乘铖程惩裎塍誠酲澄橙懲逞骋騁秤牚吃哧鸱蚩眵笞嗤痴媸螭鴟魑癡池弛驰迟茌持馳墀踟遲篪尺呎齿侈耻恥豉齒褫彳叱斥赤饬炽翅敕飭啻傺瘛熾冲充沖忡茺舂衝憧艟虫崇蟲宠寵铳銃抽瘳仇俦帱惆绸椆畴酬稠愁筹踌綢雔幬雠疇籌躊丑瞅醜臭出初樗刍除芻厨锄滁蒭蜍雏鋤廚橱躇雛櫥蹰躕杵础楮储楚褚儲礎亍处処豖怵绌畜處絀搐触閦嘼憷黜觸矗欻揣搋踹膪川巛氚穿传舡船遄椽傳舛喘串钏釧刅疮窗瘡床闯闖创怆創愴吹炊垂陲捶棰槌锤錘春椿蝽鰆纯莼唇純脣淳蒓鹑醇鶉蠢踔戳辵㲋啜惙辍綽輟龊齪齱呲疵词茈茨祠瓷詞辞慈磁雌鹚糍辭鷀此朿次刺佽莿赐絘賜匆苁囪囱枞怱悤葱蔥骢璁聪樅熜聰从丛從淙琮叢凑湊楱辏腠粗徂殂促猝蔟醋簇蹙蹴汆撺镩蹿攛躥窜篡竄爨崔催摧榱漼璀脆萃啐淬悴毳瘁粹翠邨村皴存忖寸吋搓磋撮蹉虘嵯矬痤鹾脞挫厝措锉错銼錯咑垯耷哒搭嗒褡噠达怛妲羍剳笪達答跶靼瘩鞑韃打大眔躂呆歹逮傣代甙岱迨绐玳带殆贷待怠埭帶袋貸戴黛亻卩丹担单眈耽郸聃酖殚單瘅鄲箪儋殫癉簞胆疸掸亶撣擔膽旦但诞萏啖淡惮弹蛋氮誕憚彈澹当铛裆筜當噹襠簹鐺挡档党谠擋檔黨氹凼砀宕荡菪蕩儅盪刀叨忉氘导岛捣倒島祷搗導蹈禱到盗悼道盜稻纛㝵得锝嘚德的灯登噔燈簦蹬等戥邓凳鄧嶝磴瞪镫低羝隄堤嘀滴鞮狄迪籴荻敌涤笛觌滌嫡敵镝氐邸诋坻抵底柢牴砥詆骶地玓弟帝递娣第啇谛蒂棣睇缔遞碲締踶諦螮嗲掂滇颠顛巅癫巔癲丶典点碘踮點电佃甸阽坫店玷垫扂钿淀惦奠電鈿殿墊靛澱簟癜刁叼凋貂碉雕鲷鵰鯛屌弔吊伄钓掉铞铫釣調爹跌迭垤瓞戜谍堞揲耋喋牒叠碟蝶蹀諜鲽鰈疊丁仃叮玎盯町疔耵虰釘顶酊頂鼎订钉定訂啶铤腚碇锭鋌錠丟丢铥东冬東咚岽氡鸫鼕鶇董懂动冻侗垌栋峒胨洞恫胴凍硐動棟腖都兜蔸篼抖枓钭陡蚪斗豆逗鬥痘窦竇鬭阇督嘟毒独读渎椟犊牍獨瀆犢牘黩髑讀黷笃堵赌睹賭篤芏杜肚妒度渡镀蠹端短段断缎椴煅锻緞簖鍛斷堆队对兌兑怼隊碓對憝懟吨敦墩噸燉礅镦蹲盹趸躉沌炖砘钝盾顿遁鈍頓多咄哆掇敪裰夺铎鈬奪踱朵垛哚埵缍躲剁陏舵堕惰媠跺墮屙婀讹俄莪峨娥訛锇鹅皒蛾额鵝額噁厄歺扼苊呃轭垩咢恶饿堊軛鄂阏谔惡萼遏愕腭鹗锷颚餓噩諤鳄顎鶚齶鱷诶恩蒽摁嗯儿而兒鸸鲕鴯尔耳迩饵洱珥铒爾餌邇二佴贰貳发發廢乏伐罚垡阀筏閥罰法砝珐髮帆番蕃幡藩翻凡矾钒烦釩棥煩樊燔繁蹯蘩礬犭攵反払返犯氾饭泛范贩畈梵販飯範匚方邡坊芳枋钫防妨肪房鲂仿访纺昉舫紡訪放飞妃非飛菲啡绯扉蜚緋霏鲱鯡肥淝腓匪诽悱斐榧翡誹篚芾吠肺狒废沸费費痱镄分芬吩纷氛紛棻酚坟汾棼焚鼢粉瞓份奋忿偾粪愤墳憤奮鲼糞瀵丰风沣枫封砜風疯埄峰烽葑锋犎楓蜂瘋鋒豐酆冯夆逢馮缝縫讽唪諷凤奉俸鳳佛缶否夫伕呋肤尃麸旉趺跗稃孵麩敷膚巿弗伏凫扶芙孚拂苻茀彿服怫绂绋茯畐罘氟俘郛祓莩砩蚨浮菔桴符匐涪艴紼幅辐蜉鳧福蝠幞鴔輻黻抚甫拊斧府俯釜辅腑滏輔腐撫黼父讣付负妇附咐阜驸赴复負訃副婦赋傅復富腹鲋缚赙複駙賦蝮縛鳆覆馥袱旮伽呷嘎钆尜噶尕尬该陔垓赅賅該改丐钙盖鈣溉蓋概戤甘肝坩苷矸泔乹柑竿酐疳尴尷杆秆赶桿敢稈感趕澉橄擀干旰绀倝淦紺幹赣贛冈罓刚肛纲岡钢缸罡剛崗綱鋼岗港杠筻槓戆皋高羔睪槔睾膏篙糕杲搞缟槁槀镐稿縞藁鎬告郜诰锆暠鋯戈圪纥疙咯哥胳鸽袼搁割歌擱鴿革阁格鬲隔塥嗝閤閣搿膈骼镉哿舸葛个各虼個硌铬鉻给給根跟哏亘亙艮茛庚耕赓鹒鶊羹埂耿哽绠梗鲠更工弓厷公功攻肱宫恭蚣躬宮龚觥龔廾巩汞拱珙栱鞏共贡供貢唝勾佝沟钩冓鈎缑鉤溝篝鞲苟岣狗枸笱构购诟垢够夠遘彀詬媾觏構購估咕沽孤姑轱鸪菰菇蛄辜軲酤觚毂箍鴣轂夃古扢谷汩诂股骨牯罟钴蛊鼓鈷嘏鹘穀臌瞽鶻蠱固故顾梏崮牿雇锢痼僱錮鲴顧瓜呱刮胍鸹鴰冎剐剮寡卦诖挂掛絓詿褂乖拐怪噲关观官倌棺鳏關鰥觀莞馆筦管館毌丱贯冠掼涫惯貫慣盥雚灌鹳罐光咣胱广犷廣獷桄逛归圭龟妫规皈闺規硅瑰閨鲑龜鮭巂歸氿宄轨庋匦诡軌鬼癸匭晷詭簋柜炅刿刽贵桂桧貴筀跪劊櫃鳜鱖鱥衮袞绲辊滚滾緄輥磙鲧棍呙埚郭崞聒锅蝈鍋蟈国掴國帼摑幗虢馘果猓椁槨蜾裹过過哈铪蛤还孩骸還胲海醢亥骇氦害嗐駭顸蚶酣憨鼾邗邯含函唅晗焓涵韩寒韓罕喊闞汉汗旱捍悍菡焊颔撖漢銲撼翰頷憾瀚夯行杭绗航颃筕絎頏沆蒿薅嚆蚝毫嗥豪壕嚎濠蠔好郝号昊耗浩皓號颢顥灏诃呵喝訶嗬禾合何和劾河曷饸阂紇盍荷核菏盒涸颌阖閡頜翮闔覈贺賀赫㕡褐鹤壑鶴黑嗨嘿痕很狠恨亨哼恒恆姮珩桁鸻横橫衡鴴蘅轰訇烘焢薨轟弘红闳宏泓荭虹洪紅鸿閎蕻黉鴻哄嗊讧訌銾鬨侯矦喉猴瘊骺篌糇吼后厚逅後候堠鲎乎呼忽轷烀虖唿惚雐滹囫狐弧胡壶斛壺葫鹄猢湖瑚煳鹕槲蝴衚糊醐觳餬鵠鬍鶘虍虎浒唬許琥滸互戶户冱护沪岵怙戽祜笏瓠扈滬鹱護花砉划华哗骅華铧猾滑嘩驊化画话桦畫話樺劃怀徊淮槐踝褱懷坏壞欢獾歡环洹桓萑雈锾圜寰缳環鹮繯轘鬟䴉缓緩幻奂奐宦换唤圂涣浣患焕逭換喚痪渙豢煥瘓漶鲩擐鯇肓荒慌皇黄凰隍黃遑徨湟惶煌潢璜蝗篁艎磺癀蟥簧鳇恍晃谎幌謊灰诙挥虺咴恢珲晖揮辉暉詼輝麾徽隳回茴迴洄蛔悔毀毁燬譭卉汇会讳荟哕浍诲绘恚贿烩彗晦秽惠喙缋匯賄會彙誨慧蕙薈噦諱檜燴蟪穢繪昏荤昬阍惛婚葷浑馄混渾魂餛诨溷諢耠锪劐豁活火灬伙钬夥或货获貨祸惑禍蒦膕霍嚄獲镬穫攉藿嚯蠖鑊丌讥击叽饥玑圾芨机乩肌矶鸡咭剞唧积笄飢屐姬基赍犄嵇缉畸跻毄箕嘰稽齑緝畿璣機墼積激擊磯羁雞譏饑躋鷄齎羈亼及吉岌汲级极即佶亟笈急級疾極棘殛戢集蒺楫辑嵴嫉耤蕺瘠鹡輯藉籍鶺几己虮挤脊掎戟幾麂颳擠蟣彐彑旡计记伎纪技芰忌际妓季剂哜計迹洎济既紀畟觊記继偈祭悸寄寂绩蓟跡際霁跽鲚暨㡭稷鲫髻薊冀劑覬濟績檵蹟鯽齌繫骥鱀繼霽驥加佳迦珈挟枷浃痂浹家笳袈葭跏傢猳嘉镓夹夾郏荚郟恝莢戛铗袷颊蛱蛺餄頰甲岬胛叚贾钾假賈鉀瘕价驾架嫁稼價駕駱戋尖奸歼坚间戔肩艰姦监兼菅堅笺間犍湔缄搛蒹煎缣監箋蕑鲣鹣緘艱鞯殲鰹囝拣枧茧柬俭捡笕检趼减剪揀堿硷睑減裥简骞谫戬碱儉翦撿檢蹇謇繭瞼簡鹹騫鹼见件見饯建荐贱牮剑健舰涧渐谏楗践锏毽腱溅鉴键僭漸賤踐踺箭劍澗薦鍵餞諫濺艦鑒鑑江茳将姜豇浆將僵漿薑彊缰殭礓疆韁讲奖桨蒋蔣槳獎耩講匠夅降洚绛絳畺酱犟糨醬艽交郊茭浇娇姣骄胶椒蛟焦跤僬鲛蕉膠澆嬌膲礁鹪鮫蟭驕鷦嚼纟糹角佼挢狡饺绞铰矫皎脚搅筊絞敫腳剿勦僥鉸餃徼缴矯蟜皦繳攪叫觉轿较教窖較酵噍轎醮阶疖皆接秸階揭喈喼嗟街孑节讦劫劼杰疌诘拮洁结桀捷婕絜颉傑結睫節魝詰截碣鲒竭羯潔姐解介戒芥屆届界疥诫蚧借骱誡巾斤今钅兓金釒津衿矜筋襟仅卺巹紧堇厪锦僅谨緊馑廑瑾槿儘錦謹饉尽进近妗劲荩勁晋晉赆烬浸進靳禁缙盡觐噤縉覲燼巠茎京泾经荆荊莖涇菁旌惊晶腈睛粳經兢精鲸鯨鼱驚井阱刭肼颈景儆憬頸警陉径净弪迳胫陘逕倞徑痉凈竞弳脛竟淨婧敬痙靖静境獍靜镜鏡競扃冋冏迥炯窘丩纠鸠究糾赳阄揪啾鳩樛鬏鬮九久玖灸韭酒匛旧臼咎疚柩桕救厩就廄舅僦舊鹫鷲拘苴狙匊居驹疽掬琚椐锔雎裾駒踘鞠鞫局狊侷桔菊焗輂鋦橘咀沮莒矩举蒟榉龃榘踽舉櫸齟巨句讵拒苣洰具炬钜俱倨冣剧据距惧犋鉅飓豦锯聚窭劇踞屦據遽鋸颶屨醵懼捐涓娟鹃镌鵑蠲卷捲锩劵弮倦狷桊绢鄄眷雋飬絹撅噘亅孓夬决诀抉決玨珏绝欮掘桷崛觖訣厥傕絕劂谲蕨嶡獗鴂璚橛镢爵蹶譎矍覺爝攫玃倔军均君钧軍菌皲鈞筠麇俊郡捃峻隽馂浚骏焌竣餕駿咔咖喀卡佧胩开揩開锎剀凯垲恺铠蒈凱慨楷愷锴鎧忾炏嘅愾刊勘龛堪戡龕坎侃砍莰欿槛檻轗看阚瞰闶康慷槺糠扛亢伉抗炕钪尻丂考拷栲烤铐犒銬靠苛珂柯轲科钶疴蚵棵軻痾颏嗑稞窠颗磕瞌蝌頦顆髁壳咳可坷岢渴克刻剋峇恪客课氪骒缂锞溘課肯垦恳啃貇墾懇裉坑吭铿誙空倥崆箜孔恐控抠芤眍摳瞘口竘叩扣釦寇筘蔻矻刳枯哭堀窟骷苦楛库绔庫袴喾裤酷褲嚳夸誇侉垮挎胯跨蒯块快侩郐哙狯脍塊筷鲙儈廥膾鱠宽寬髋髖款窾匡诓哐筐誆狂诳誑夼邝圹纩旷况矿況贶框眶曠爌礦亏岿悝盔窥窺虧奎逵馗揆葵喹暌魁睽蝰櫆夔傀跬匮蒉喟馈溃愦愧匱聩蕢篑潰聵簣饋坤昆崑堃琨髡鹍锟醌錕鲲鵾鯤捆阃悃閫困睏扩括栝蛞阔廓擴闊垃拉啦邋旯剌砬喇腊蜡瘌辣臘镴蠟鑞来來莱崃徕涞萊梾徠淶棶铼赉睐赖睞賚賴濑癞籁瀨癩籟兰岚拦栏婪嵐阑蓝谰澜褴篮斓藍闌镧襤攔蘭籃瀾欄斕讕鑭览揽缆榄罱漤懒懶覽攬欖纜烂滥濫爛啷郎狼阆琅廊瑯榔锒稂螂閬鋃朗浪蒗捞撈劳牢崂铹痨勞嘮嶗癆醪耂老佬咾姥栳铑唠烙涝耢酪嫪澇仂阞艻叻乐泐勒鳓了饹餎雷嫘缧畾檑镭羸耒厽诔垒磊蕾儡壘纍肋泪类累淚酹擂類嘞塄棱楞稜冷愣唎厘狸离骊梨犁鹂喱犂蓠蜊漓缡璃嫠樆貍黎鲡褵罹篱縭釐藜離黧蘺蠡籬驪鸝鱺礼李里俚逦哩娌理锂裡豊裏鋰鲤澧禮鯉醴鳢鱧力历厉立吏坜苈丽励呖利沥枥例疠戾隶荔栎郦轹俪俐疬莉莅栗砺砾秝猁涖悧蛎唳笠脷粝粒厤雳跞詈傈痢蒞溧慄厲勵歷曆篥隸癘瓅壢櫟麗瀝櫪蠣糲儷癧靂奁连怜帘莲連涟梿联裢蓮廉漣奩鲢憐褳濂聯臁镰蠊簾鐮鰱琏敛脸裣蔹槤斂歛臉蘞练炼恋殓链楝煉潋練殮鍊鏈戀良莨凉涼梁椋辌粮粱墚樑輬糧冫两兩俩倆魉魎亮谅辆靓量晾喨踉靚輛諒辽疗聊僚寥撩遼嘹獠潦寮缭膫燎鹩療蟟繚鷯钌蓼尥料尞撂廖瞭镣鐐咧列劣劦冽洌埒烈捩猎裂趔巤獵躐鬣拎邻林临啉淋琳粦鄰粼嶙遴霖辚臨磷瞵鳞驎鱗麟㐭凛凜廪廩懔檩吝赁賃蔺閵膦藺躏躪伶灵夌苓囹泠玲柃瓴铃鸰凌陵聆菱棂蛉舲翎羚淩绫零龄鈴鴒鲮霝酃鯪齡靈欞岭领領嶺另令呤溜熘刘㐬浏留流琉硫馏旒骝榴镏鹠劉瘤鎦餾瀏鎏騮鶹柳绺锍綹六遛鹨龙茏咙泷珑栊胧砻眬聋笼隆癃龍窿蘢嚨瀧瓏朧矓籠聾陇垅拢垄隴攏壟衖瞜娄婁偻蒌楼僂嘍耧樓蝼螻髅搂嵝摟篓陋屚镂瘘漏喽撸噜氇擼嚕卢芦庐垆炉泸栌轳胪鸬颅舻鲈盧蘆廬瀘臚爐轤鑪顱鸕鱸卤虏掳鹵鲁虜滷魯擄橹镥櫓甪陆坴录彔辂赂陸鹿渌淥逯翏禄祿碌賂路箓漉辘戮録錄潞璐簏轆鹭麓露籙鷺峦孪娈栾挛鸾脔滦銮䜌巒孿孌欒攣臠鑾鸞卵乱亂掠寽抡掄仑伦囵沦纶轮侖倫崙圇淪綸輪论論啰罗萝逻脶猡椤锣箩骡镙螺羅騾儸蘿邏籮鑼倮裸瘰蠃泺荦洛络骆珞落絡摞雒漯囉驴闾榈閭藘櫚驢吕呂侣侶捋旅铝稆屡缕鋁膂褛屢履褸縷律虑率绿氯滤綠慮濾鑢略畧锊圙妈媽麻嗎痲蟆马犸玛码蚂馬瑪碼螞杩骂罵吗嘛埋薶霾买荬買蕒劢迈麦卖脉唛脈麥嘜賣邁霡霢颟㒼蛮馒瞒鞔瞞饅鳗鰻蠻满滿螨蟎曼谩墁蔓幔漫慢嫚缦熳镘縵謾邙芒吂汒忙尨盲氓茫硭铓鋩莽漭蟒猫貓毛矛茆茅牦旄酕锚髦氂蝥錨蟊卯峁泖昴铆鉚皃茂冒贸耄袤帽貿瑁楙貌瞀懋么麽麼沒没玫枚眉莓梅脢嵋猸湄媒楣煤酶镅鹛霉黴每美浼镁鎂妹昧袂寐媚魅门扪門钔捫闷焖悶燜懑懣们們虻冡萌蒙盟甍瞢濛懞檬曚朦礞矇艨勐猛锰蜢艋錳懵蠓孟梦夢咪眯弥迷祢袮猕谜醚謎糜縻麋彌禰靡蘼米芈羋洣弭脒敉瞇瀰糸汨觅泌宓祕秘覓密幂谧嘧蜜冪謐眠绵棉綿臱丏免沔黾眄俛勉娩冕渑湎缅腼絻緬面麵喵苗描鹋瞄鶓杪眇秒淼渺缈緲藐邈妙庙廟繆咩灭烕滅蔑篾蠛衊民玟苠岷珉缗暋皿闵抿泯闽敃悯敏閔湣黽愍閩憫鳘名明鸣茗冥眳铭蓂溟暝鳴銘瞑螟酩命谬缪謬摸谟馍嫫摹模膜摩磨糢謨饃蘑魔抹麿末茉殁沫陌莫秣眽蓦貊貉漠寞墨镆瘼默貘驀耱嬷哞牟侔眸谋蛑鉾謀鍪某呒呣毪嘸母牡亩坶拇姆畝鉧木目仫沐苜牧钼㣎募墓幕睦慕暮霂穆拿镎哪那吶呐纳肭钠衲娜納捺鈉乃艿奶氖奈柰耐萘鼐囡男南难喃楠難赧腩蝻囔囊馕饢曩攮孬呶挠硇铙蛲猱撓垴恼脑惱瑙腦闹淖鬧讷訥呢馁餒內内嫩能妮尼坭泥怩铌倪猊霓鲵鯢拟你妳旎擬屰伲昵逆匿睨腻溺暱膩拈蔫年鲇鲶黏鯰捻辇輦撵碾攆卄廿念埝唸娘酿釀鸟茑袅鳥裊嬲尿脲捏乜肀圼陧聂臬涅啮隉湼嗫镊镍颞臲蹑聶嚙鎳孽蘖櫱齧躡鑷顳恁您宁咛狞柠聍甯寧凝嚀檸拧擰佞泞濘妞牛扭狃忸纽钮紐鈕拗农侬哝浓脓農儂噥濃憹膿弄耨奴孥驽駑努弩胬怒暖疟虐瘧挪傩儺诺喏搦锘諾懦糯女钕恧衄噢哦讴沤瓯欧殴鸥漚甌歐毆熰謳鷗齵呕偶嘔耦藕怄慪趴皅啪葩杷爬钯耙琶掱鈀筢帕怕拍俳排徘牌哌派蒎湃萠潘攀爿盘槃磐盤蹒蹣蟠判泮盼叛畔袢襻乓滂彷庞逄旁膀螃鳑龐鰟耪胖抛拋脬刨咆狍庖袍匏跑泡炮砲疱皰呸胚醅陪培赔锫裴賠沛帔佩珮配旆淠辔霈轡喷噴盆湓抨怦砰烹嘭朋堋彭棚搒蓬硼鹏澎篷膨蟛鵬捧椪碰丕批邳伾纰坯披狉砒紕劈噼霹皮芘枇毗蚍铍郫疲陴埤啤琵脾蜱罴貔羆鼙匹庀圮仳痞擗癖屁睥辟媲僻甓譬闢鷿偏犏篇翩骈胼駢蹁谝片骗騙剽漂缥飘螵縹飄嫖瓢殍瞟票嘌氕瞥丿苤撇拚拼姘贫貧频嫔頻嬪颦顰品榀牝聘乒甹俜娉冖平评坪苹凭泙枰屏瓶萍評鲆鮃憑蘋攴钋坡泼颇酦潑醱婆鄱皤叵钷笸迫珀破哱粕魄頗剖掊裒咅扑铺撲噗鋪仆圤匍莆菩脯葡菐蒲僕璞镤濮朴埔圃浦普溥谱潽樸氆镨蹼譜舖瀑曝七沏妻柒恓栖桤凄萋桼戚淒悽期欺棲榿嘁漆慼蹊亓齐祁圻芪岐其奇歧祈祇荠耆颀脐埼萁畦跂崎淇骐骑琪琦棋蛴祺綦蜞齊旗蕲鲯鮨騎臍鳍蘄鯕麒鰭乞芑屺岂企杞启起豈啟啓绮綮綺气讫迄汔弃汽泣契砌咠氣訖葺棄碛槭器憩薺掐葜㓞洽恰髂千仟阡扦芊迁岍佥汧臤钎牵铅悭釺牽䙴鈆谦签愆鉛僉慳搴遷褰謙簽鶼籤韆拑钤前虔钱钳掮乾朁鉗箝潜潛黔錢凵肷浅淺遣谴缱繾譴欠芡茜倩堑椠嵌慊塹歉縴羌枪戗戕腔蜣锖槍锵戧蹡強强墙蔷嫱樯墻薔牆抢羟搶羥镪襁呛炝跄嗆蹌悄硗跷锹劁敲橇缲橾鍬蹺乔侨荞峤桥喬僑谯鞒蕎憔橋樵瞧譙巧愀俏诮峭窍殼翘誚撬鞘翹竅切茄且郄妾怯匧窃挈惬趄愜锲箧踥篋藒鍥竊钦侵亲衾芹芩秦琴禽勤嗪溱擒噙檎螓锓寝寢吣沁唚揿撳青靑轻氢倾卿圊氫清傾輕蜻鲭鯖情晴氰檠擎黥苘顷请頃請謦庆殸箐慶磬親罄邛穷茕穹筇琼蛩跫睘煢銎窮瓊藭丘邱秋蚯湫楸鹙鳅鞦鶖厹囚犰求虬泅俅酋逑球赇遒巯裘蝤鼽糗区岖佉诎驱屈胠祛區蛆躯趋蛐嶇趨麯軀麴黢驅劬朐鸲渠蕖磲璩瞿鼩蘧氍癯衢蠼曲取娶龋齲去阒趣觑闃覷悛圈权全诠荃泉辁拳铨痊惓筌詮蜷銓醛鬈權颧顴犬畎绻綣劝券勸炔缺闕瘸却卻隺悫雀确阕鹊阙榷確鵲夋囷逡裙群肰蚺然髯燃冉苒染孃禳穰瓤壤攘嚷让讓荛饶娆桡嬈橈饒犪扰擾绕蟯繞惹热熱人壬仁忍荏稔刃认仞任纫韧轫饪妊纴衽紉軔飪韌認扔仍日戎肜茸荣狨绒容嵘絨蓉溶榕榮熔蝾镕融嶸鎔蠑冗禸柔揉糅蹂鞣肉如茹铷蕠儒薷嚅濡孺襦颥蠕顬汝乳辱入洳蓐溽媷缛褥縟阮软朊軟甤蕤惢蕊芮枘蚋锐瑞睿銳闰润閏潤叒若偌弱蒻箬爇仨洒撒灑卅飒脎萨隡颯薩腮塞噻鳃鰓赛賽三彡氵叁毵伞傘糁馓饊散桑喪搡嗓磉颡顙丧搔骚缫鳋騷扫掃嫂埽瘙臊色涩啬铯瑟嗇歰穑澀穡森僧杀沙纱砂剎莎殺紗铩痧裟鲨鎩鯊啥傻唼厦歃煞廈霎筛酾篩晒曬山芟杉刪删苫钐衫姗珊埏舢跚煽潸膻羴鱣闪陕陝閃讪汕疝赸訕扇善骟鄯缮擅膳嬗赡蟮繕贍鳝鱔伤殇商觞傷墒殤熵觴垧晌赏賞丄上尙尚绱裳捎烧梢稍蛸筲艄燒勺芍杓韶少邵劭绍哨紹潲奢赊猞畲賒舌佘蛇舍捨厍设社射涉赦設摄滠慑慴攝麝懾申屾伸身呻诜罙绅莘砷娠深紳兟什神沈审哂矧谂渖婶審瀋嬸肾甚胂渗葚腎椹蜃慎滲升生声昇牲陞笙甥聲绳澠繩省眚圣胜晟盛剩勝聖嵊尸失师诗虱狮施浉屍師湿蓍獅詩蝨鲺濕十饣石时识飠实拾食蚀炻埘莳時蒔蝕實鲥識鰣史矢豕使始驶屎駛士氏礻示世仕市式似势事侍饰试视拭贳柿是适恃室逝轼铈舐視弑释谥勢軾嗜筮弒飾試誓適奭噬諡螫謚釋襫匙收手守首艏寿受狩授售兽绶壽瘦綬獸殳书疋尗抒纾枢叔姝殊倏書紓菽梳淑舒疏摅输毹蔬樞輸秫孰赎塾熟贖暑黍属署蜀鼠薯曙糬屬丨忄术朮戍束述沭树竖恕術庶尌腧数墅漱豎數澍樹刷唰耍衰摔甩帅帥蟀闩拴閂栓涮双霜雙孀骦鹴驦鸘爽谁誰水氺稅税睡吮顺順舜瞬说說妁烁铄朔硕搠蒴碩槊爍鑠厶司丝私咝思虒鸶斯蛳缌絲厮锶撕嘶廝澌螄死巳罒四寺汜兕伺祀姒饲泗驷俟耜笥肆嗣飼駟忪松凇菘崧淞嵩鬆怂耸悚竦慫聳讼宋送诵颂訟頌誦鄋搜蒐嗖馊溲飕锼螋艘餿颼叟瞍嗾擞薮擻藪欶嗽苏甦酥稣窣穌蘇囌俗夙诉肃素速涑骕粟訴谡嗉塑溯愫肅鹔蔌僳觫簌驌鷫狻酸祘蒜算夊虽荽倠浽眭睢濉雖绥隋随遀綏隨髓岁㒸谇祟遂碎歲隧燧穗邃孙荪狲孫飧猻损笋隼筍損榫唆娑桫梭挲睃蓑嗦嗍羧缩縮所索唢琐锁嗩瑣鎖他它她牠趿铊塌遢溻褟塔獭鳎沓挞荅闼榻撻踏蹋胎台旲邰抬苔骀炱跆鲐臺颱擡薹檯呔太忕汰态肽钛泰酞鈦態坍贪貪摊滩嘽瘫攤灘癱坛昙郯谈覃锬痰谭談潭壇曇檀镡罈譚忐坦钽袒毯襢叹炭探赕碳嘆歎汤铴湯耥羰蹚饧唐堂棠塘搪溏瑭樘膛螗镗糖醣螳帑倘淌傥躺儻烫趟燙涛绦焘掏絛滔韬縧濤燾韜饕匋逃洮桃陶萄梼啕淘醄檮鼗讨討套忑忒特铽慝疼腾誊滕謄藤騰剔梯锑踢鷈鷉扌厗绨提啼鹈缇题醍蹄鳀題鵜鯷体體屉剃倜逖涕悌惕屜替裼嚏鬄趯天添田畋畑恬甜湉填阗忝殄腆舔靦掭瑱佻挑祧条苕迢條调笤龆蜩髫鲦窕眺粜跳帖贴萜貼铁鉄鐵呫餮厅汀听烃烴聽廳廷莛亭庭停葶蜓婷霆挺梃艇通嗵冂仝同佟彤茼桐砼铜衕童酮僮銅潼瞳统捅桶筒統恸痛慟偷头投骰頭鈄透凸禿秃突图荼徒途涂屠嵞塗酴圖土吐钍兔堍菟湍团抟摶蓴團糰疃彖推颓頹腿退蛻蜕煺褪吞呑暾屯囤饨豚飩臀氽乇讬托拖託脫脱魠驮佗陀坨沲沱驼柁砣鸵酡跎馱駝橐鴕鼍鼉妥庹椭橢軃拓柝唾箨穵挖哇洼娲媧蛙窪娃瓦佤袜腽膃襪咼歪崴外弯剜湾蜿箢豌彎灣丸芄纨完玩紈顽烷頑宛挽菀晚脘惋婉绾琬皖碗畹輓万萬腕汪亾亡王网枉罔往惘辋網魍妄忘旺望危威逶偎隈葳微煨溦薇巍囗韦为圩违围帏闱沩為韋桅涠唯帷惟维嵬幃圍違潍維闈濰伟伪苇尾纬玮委炜洧诿娓萎偽偉隗葦猥瑋韪艉痿鲔諉緯薳鮪韙亹卫未位味畏胃軎硙谓尉喂猬渭蔚蝟衛慰謂濊魏餵昷温榅溫榲瘟豱亠文纹炆闻蚊紋阌雯聞刎吻忞紊稳穩问汶問璺翁嗡螉塕蓊暡瞈瓮蕹甕挝莴倭涡渦喔窝蜗窩撾蝸我肟沃卧臥握硪幄渥斡龌齷乌圬邬污巫呜钨诬屋烏嗚誣鎢无毋芜吾吴吳唔浯梧無蜈蕪鼯五午伍仵迕庑怃忤妩武俉侮捂牾鹉摀舞廡嫵鵡兀勿戊务阢坞芴杌物误敄悟務晤焐痦婺骛塢雾誤寤鹜鋈霧騖鶩夕兮覀西吸汐希昔析矽穸郗㿽唏牺息奚浠娭菥硒欷悉烯淅惜晰稀舾翕粞犀皙锡徯溪熙蜥僖誒熄嘻膝瘜嬉熹樨螅錫歙羲窸蟋谿醯曦犧鼷蠵鸂习席觋袭習媳覡隰檄襲洗玺铣徙喜葸蓰銑屣禧蟢璽匸卌戏饩系细咥係郤阋細舄隙滊禊潟戲鬩餼虾煆瞎蝦匣侠狎柙峡俠狭陜峽狹硖遐瑕暇辖轄霞黠下吓夏嚇罅㔾仙先纤氙祆籼莶掀酰跹锨鲜暹鍁韱鮮躚纖鱻闲㳄贤弦咸涎娴衔舷閑閒痫鹇嫌銜賢嫻癇䕭冼显险蚬猃筅跣㬎險藓燹蘚顯苋县岘现臽限线県宪莧峴陷現馅羡献腺羨線縣餡憲霰獻乡芗相香厢鄉葙廂湘缃薌箱襄蘘骧镶鑲驤详庠祥翔詳享响饷飨想餉鲞鯗饗響向项巷象項像橡蟓嚮肖枭枵哓骁逍鸮消宵绡萧梟猇硝销箫潇霄銷蕭鴞魈蟏嚣簫瀟囂蠨洨崤淆小晓筱曉孝校哮笑效啸傚嘯些楔歇蝎蠍协邪協胁挾脅偕斜谐猲携撷頡鞋勰缬諧擷攜纈写寫屃泄泻绁卸洩屑械禼亵渫谢榭榍薤韰獬邂廨澥懈謝燮褻瀉蟹瀣躞屭心芯辛忻昕欣訢锌新歆鋅薪馨鑫囟信衅舋釁星猩惺蛵腥刑邢形型硎醒擤兴杏幸性姓荇倖悻興凶兄芎兇匈汹洶胸雄熊敻休咻修庥脩羞鸺貅馐髹鵂饈朽宿秀岫袖绣锈嗅溴銹繡鏽戌吁盱须胥顼虚裇虛須頊墟需嘘魆歔噓魖鬚徐许诩栩詡鄦糈醑旭序卹昫叙洫恤酗勖敘绪续溆絮婿蓄煦漵緒續蓿轩宣軒谖揎萱喧瑄暄煊儇諠嬛玄痃悬旋漩璇懸选烜選癣癬泫炫绚眩铉渲絢楦鉉碹镟削靴薛辥穴学泶踅噱學雪鳕鱈血谑謔勋埙勛熏窨勳薰獯曛燻醺旬寻巡郇询荀荨峋洵浔恂循尋詢鲟潯燅鱘卂训讯汛迅驯徇逊殉訓訊巽馴遜蕈丫压押鸦桠鸭鴉鴨壓牙伢芽岈玡枒厓琊蚜崖涯睚衙哑啞痖雅亚襾讶迓亞軋垭砑娅氩埡訝婭揠呀咽恹胭烟焉菸崦阉淹腌湮鄢傿煙嫣醃閹懨讠厃延闫严言訁妍岩炎沿研盐阎蜒嵒筵颜閻檐顏嚴簷巖鹽沇奄兖匽俨衍弇兗剡掩郾厣眼偃琰罨演魇儼鼴魘鼹厌妟砚彥彦艳晏唁宴验谚堰硯雁猒焰焱滟酽厭餍鴈谳燕赝鬳諺嚥贗驗饜讌艷讞豔央泱殃鸯秧鞅鴦扬羊阳杨炀氜佯疡昜徉洋陽揚蛘楊煬卬仰养氧痒養癢怏样恙烊羕漾樣幺夭吆妖腰邀爻尧侥肴垚轺姚珧窑堯殽谣摇搖徭遥遙瑶瑤銚飖蕘窯餚繇謠鳐颻杳咬舀窅窈崾蓔药要钥鹞藥曜耀鷂鑰耶倻掖椰噎蠮爷揶铘爺也冶野嘢业叶页曳邺夜枼頁晔烨液谒葉殗腋業曄靥鄴嶪謁一衤伊衣医依祎咿铱猗揖壹欹蛜禕漪噫醫黟㐌仪圯夷沂冝诒饴怡宜荑咦贻姨巸眙胰移痍貽遗詒颐暆飴疑遺儀頤嶷彞彝乙已以㠯钇苡矣迤蚁舣倚扆椅旖蟻顗齮乂弋亿义艺刈忆仡议屹亦异抑耴呓邑佚役译易峄佾泆怿诣绎驿轶弈奕疫羿挹酏益悒谊埸埶殹異逸豙翊翌軼肄詣裔意義溢缢蜴瘗镒億誼毅熠薏殪嶧劓憶縊翳臆翼藝镱癔繹譯議囈懿驛乚因阴侌茵荫垔音洇姻氤殷陰铟堙喑蔭闉冘乑吟犾斦垠狺訚唫银淫寅欽鄞龈銀夤誾霪齦尹引㐆吲饮蚓隐飲㥯瘾檃隱癮廴印茚胤英莺婴瑛䧹撄賏嘤罂缨璎樱鹦嬰膺鹰罌瓔櫻鶯纓鷹鸚迎茔荥荧盈莹萤营萦蓥楹塋滢蝇滎熒潆瑩嬴螢營縈赢鎣蠅巆瀛贏郢颍颖影穎瘿应映硬媵應哟唷喲佣拥痈邕庸傭雍墉慵擁镛壅臃雝鳙鱅饔癰永甬咏泳俑勇勈埇涌恿詠湧蛹踊踴用优攸忧呦幽悠憂優懮尢尤尣由邮犹油疣斿莜莸铀郵䍃蚰鱿猶遊游鈾猷蕕蝣魷友有酉卣莠铕牖黝又右幼佑侑柚迶囿宥诱蚴釉誘鼬迂纡於紆淤瘀于邘玗欤余妤盂臾鱼禺竽舁俞狳馀谀娱娛萸雩魚渔隅揄喁嵛畬逾腴渝愉瑜榆虞愚艅觎舆漁窬蝓餘諛覦輿与予屿伛宇羽雨俣禹语圄㼌圉庾與瘐語龉窳藇嶼齬玉驭芋聿饫妪郁育昱狱彧峪钰浴预域欲阈淯谕馭遇喻御鹆飫寓裕矞蓣鈺愈煜誉預蜮毓獄嫗慾豫蕷閾閼諭燠禦鹬鵒癒譽鬻鷸龥鬱籲鸢眢鸳冤渊淵蜎鳶鴛元円芫园员沅垣爰袁原蚖員圆鼋援媛缘塬園圓猿源辕緣橼螈黿轅櫞远遠夗肙苑怨院垸掾瑗愿願曰曱约約彟月戉刖岳钺阅悅悦跃越粤粵鉞閱樂樾嶽龠瀹躍晕辒暈氲氳轀云勻匀芸纭昀郧耘紜雲鄖筼蕓篔允狁陨殒隕殞孕运郓恽酝鄆愠運缊韫韵慍蕴熨縕醞蘊韻帀匝咂拶臜臢杂砸雜咋灾災甾哉栽仔载宰崽載再在糌簪咱昝攒攢趱暂暫錾赞贊瓒讚赃脏臧贓髒驵奘葬臟遭糟蹧凿鑿早枣蚤棗澡藻繰皂灶唣造喿噪簉燥躁竈则责择迮泽則責啧啫帻笮舴嘖箦赜擇澤仄昃贼賊鲗鰂怎谮譖增憎罾锃鋥缯赠甑繒贈扎吒紥哳紮揸喳渣楂劄皻齄札轧甴闸铡閘霅苲眨砟乍诈柵柞栅奓咤炸痄蚱詐榨斋摘齋宅翟窄债砦債寨瘵沾毡栴旃粘詹谵霑氈瞻譫鳣斩飐盏展斬崭搌盞辗嶄颭輾占佔栈战站绽棧湛綻戰蘸张章張鄣獐彰漳嫜璋樟蟑鱆长仉涨掌漲丈仗杖帐账胀帳脹障嶂幛賬瘴钊招昭釗爪爫找沼召兆诏赵炤笊棹詔照罩趙肇蜇遮乛折哲辄喆蛰谪摺輒磔辙蟄謫轍者锗赭褶这柘這浙蔗鹧鷓着贞针侦珍貞帧胗浈真桢砧針祯偵湞蓁斟楨甄禎榛禛箴臻㐱诊枕轸姫畛疹軫診缜稹鬒圳阵鸩陣振朕赈賑震镇鴆鎮争征爭怔峥狰钲烝掙睁崢铮猙筝蒸睜箏徴錚癥氶拯整正证郑诤政挣症幀鄭證之支只卮汁芝吱巵枝知肢织栀胝衹祗隻脂梔椥戠蜘織蘵执直侄姪值埴執职絷植殖跖稙摭踯職躑夂止旨址芷纸祉指枳轵咫紙趾黹酯徵至志豸忮郅帜帙制质炙治栉峙陟贽挚桎轾致秩袟鸷掷乿痔窒蛭智痣滞骘彘輊置雉稚廌疐製誌滯摯踬幟質膣觯緻擿擲櫛贄騭鷙躓中彸忠终柊盅钟舯衷終锺鍾螽鐘肿种冢塚腫種踵仲众重眾衆舟州诌周洲啁週赒粥賙謅妯轴軸碡肘纣咒宙绉荮冑胄昼紂酎皱晝皺骤籀驟帚朱邾侏诛茱洙珠株诸硃铢猪蛛誅槠銖潴豬橥諸櫫騶竹竺逐烛舳瘃燭躅主拄渚煮嘱麈瞩囑矚伫苎助住佇苧杼贮注驻壴柱炷祝疰著蛀貯铸筑註翥箸駐築鑄抓拽专叀砖耑專颛磚顓鱄转孨啭赚撰篆馔篹賺轉饌囀籑妆庄妝莊桩装裝樁丬壮状壯狀撞幢戇隹追骓椎锥錐騅坠缀惴缒赘墜綴贅肫窀谆諄准準拙捉桌倬涿灼茁卓叕斫浊酌丵浞诼啄琢禚斲濁擢濯镯鐲孜茲咨姿兹赀资淄谘缁辎嵫粢孳滋趑貲锱資龇髭趦錙鲻諮鯔齜子姊耔秭籽笫梓紫訾滓自字牸恣眥眦渍漬宗综棕腙綜踪鬃蹤总偬傯總纵疭粽瘲縱邹驺诹陬鄒鄹鲰鯫辶走奏揍租菹足卒崒族綷镞诅阻组俎祖組詛躜缵纂钻攥鑽觜嘴最晬罪槜蕞醉尊遵樽鳟鱒撙嘬昨阝左佐作坐阼怍胙祚唑座做葄酢乶龶龹龺㧜'.split('');
    _this.countDataAndComputedData = function () {
      var _a = _this, data = _a.data, computedData = _a.computedData;
      // const { CHARS } = this;
      var paperSize = data.paperSize,
        isLandscape = data.isLandscape,
        MAX_X = data.maxX,
        MAX_Y = data.maxY,
        pageMarginTop = data.pageMarginTop,
        pageMarginBottom = data.pageMarginBottom,
        pageMarginLeft = data.pageMarginLeft,
        pageMarginRight = data.pageMarginRight,
        // copybooks,
        // selectedCheckboxIndexArray,
        kind = data.kind,
        // inputMethod,
        fontSize = data.fontSize,
        color = data.color;
      var MID_RECTANGLE_HEIGHT = 23;
      var MID_RECTANGLE_WIDTH = 15;
      var MIN_RECTANGLE_WIDTH = 12;
      var MAX_RECTANGLE_WIDTH = 18;
      var SCALE = fontSize === "middle"
        ? 1
        : (fontSize === "small" ? MIN_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH
        : MAX_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH);
      var RECTANGLE_WIDTH = MID_RECTANGLE_WIDTH * SCALE;
      var RECTANGLE_HEIGHT = MID_RECTANGLE_HEIGHT * SCALE;
      // const PINYIN_FONT_SIZE = 14.15 * SCALE;
      var PINYIN_FONT_SIZE = 15 * SCALE;
      // const PINYIN_TOP = 1.25 * SCALE;
      var PINYIN_TOP = -0.42 * SCALE;
      var MID_TEXT_WIDTH = MID_RECTANGLE_WIDTH * 54 / 80;
      var TEXT_WIDTH = MID_TEXT_WIDTH * SCALE;
      var TEXT_HEIGHT = MID_TEXT_WIDTH * SCALE;
      var TEXT_LEFT = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5;
      var TEXT_BOTTOM = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5 - 22 / 54 * SCALE;
      var fontColor = color === "redOnBlack" ? "#ff0000" : "#000000";
      var css =
        "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\tbody {width:"
          .concat(
            MAX_X,
            "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\n\t\tpage { display:flex;flex-flow:wrap;column-gap:1mm;row-gap:2mm;flex:100%;justify-content:flex-start;align-items:flex-start; }\n\t\t\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n\t\t@media print { @page { size: ",
          ).concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; margin:",
          ).concat(pageMarginTop, "mm ").concat(pageMarginRight, "mm ").concat(
            pageMarginBottom,
            "mm ",
          ).concat(
            pageMarginLeft,
            "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n    /* \u4E0D\u53EF\u6307\u5B9Apage\u7684\u9AD8\u5EA6\uFF0C\u5426\u5219\u4E0D\u8DB3\u4E00\u9875\u65F6\u5404\u884C\u5C06\u5747\u5E03 */\n\t\t/* page { width:",
          ).concat(MAX_X, "mm;height:").concat(
            MAX_Y,
            "mm; } */\n\t\tpage { width:",
          ).concat(MAX_X, "mm;margin-left:").concat(
            pageMarginLeft,
            "mm;margin-top:",
          ).concat(
            pageMarginTop,
            "mm; }\n\t\t/* #reportPageCore{display:flex;flex-flow:wrap;flex-direction:column;width:",
          ).concat(
            MAX_X,
            "mm;justify-content:flex-start;align-items:flex-start;} */\n\t\tpage{color:",
          ).concat(fontColor, ";}\n\n\t\t.wordWrap{display:inline-flex;height:")
          .concat(
            RECTANGLE_HEIGHT,
            "mm;}\n\t\t.charWrap{position:relative;display:inline-block;width:",
          ).concat(RECTANGLE_WIDTH, "mm;height:").concat(
            RECTANGLE_HEIGHT,
            "mm;}\n\t\t.backgound-image{z-index:0;position:absolute;width:",
          ).concat(RECTANGLE_WIDTH, "mm;height:").concat(
            RECTANGLE_HEIGHT,
            "mm;}\n\n\t\tpinyin, chinese, .chinese{display:block;position:absolute;}\n\t\tpinyin{font-family:'Kaiti', 'Times New Roman';font-size:",
          ).concat(PINYIN_FONT_SIZE, "pt;top:").concat(PINYIN_TOP, "mm;width:")
          .concat(
            RECTANGLE_WIDTH,
            'mm;text-align:center;}\n\t\t/* pinyin[chars="6"]{letter-spacing:-0.05em;font-size:',
          ).concat(
            PINYIN_FONT_SIZE * 0.95,
            "pt;} */\n\t\t/*pinyin{display:inline-flex;position:relative;width:",
          ).concat(RECTANGLE_WIDTH, "mm;height:").concat(
            RECTANGLE_HEIGHT,
            'mm;}pinyin-char{flex:1;}*/\n        pinyin-char{display:inline-block;}\n        pinyin[chars] pinyin-char.withTone{width:0.7em;margin-left:-0.2em;}\n        pinyin pinyin-char.lastG{margin-left:0.2em;}\n        pinyin[chars]{letter-spacing:-0.05em;} */\n        /*pinyin[chars] pinyin-char{overflow:hidden;}pinyin[chars="5"] pinyin-char{width:20%;}pinyin[chars="6"] pinyin-char{width:16%;}*/\n\n\t\t.chinese{width:',
          ).concat(TEXT_WIDTH, "mm;height:").concat(TEXT_HEIGHT, "mm;left:")
          .concat(TEXT_LEFT, "mm;bottom:").concat(
            TEXT_BOTTOM,
            "mm;}\n\n\t\t/* TODO(@anqi) \u8C37\u6B4C\u6D4F\u89C8\u5668\u76F4\u63A5\u652F\u6301\u7528mm\u4F5C\u4E3Afont-size\uFF08\u5B57\u53F7\uFF09\u5355\u4F4D\u3002\n\t\t\t\u6682\u65F6\u8FD8\u4E0D\u7528\u8F6C\u6C49\u5B57\u5B57\u53F7\u7684mm\u5230px\u3002\n\t\t\t\u4F30\u8BA1\u6709\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u7B49\u4E4B\u540E\u8C03\u8BD5\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u65F6\u518D\u5904\u7406\u3002\n\t\t*/\n\t\tchinese{font-size:",
          ).concat(
            TEXT_WIDTH,
            "mm;font-family:'Kaiti', system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica', 'Source Han Sans CN', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\n    chinese{display:flex;justify-content:center;align-items:center;}\n    chinese{width:",
          ).concat(TEXT_WIDTH, "mm;height:").concat(TEXT_HEIGHT, "mm;left:")
          .concat(TEXT_LEFT, "mm;bottom:").concat(
            TEXT_BOTTOM,
            "mm;}\n\n\t\tpage{position:relative;}\n\t\trow.subject{justify-content:flex-start;align-items:flex-start;height:1em;width:",
          ).concat(MAX_X, "mm;\n\t\t\tposition:absolute;top:").concat(
            MAX_Y - 10,
            "mm;display:inline-flex;}\n\t\t.subjectLeft,.subjectCenter,.subjectRight{display:inline-flex;}\n\t\t.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}\n\t\t.subjectCenter{width:60%;justify-content:center;align-items:flex-end;flex-direction:row;}\n\t\t.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}\n\n\t\t.subject{font-size:1em;}\n\t\t",
          );
      var BACKGOUND_SVG_SRC = "http://edu.sonya.cc/images/3brick/1/background/"
        .concat(color, ".svg");
      var PAGE_WIDTH = MAX_X, PAGE_HEIGHT = MAX_Y;
      var HORIZONTAL_SPACE = 1, VERTICAL_SPACE = 2;
      // const CHAR_COUNT_PER_ROW_OF_HALF_PAGE = Math.floor((PAGE_WIDTH * 0.5 + HORIZONTAL_SPACE) / (RECTANGLE_WIDTH + HORIZONTAL_SPACE));
      var CHAR_COUNT_PER_ROW = Math.floor(
        (PAGE_WIDTH * 0.5 + HORIZONTAL_SPACE) /
          (RECTANGLE_WIDTH + HORIZONTAL_SPACE),
      );
      var ROWS_COUNT = Math.floor(
        (PAGE_HEIGHT + VERTICAL_SPACE) / (RECTANGLE_HEIGHT + VERTICAL_SPACE),
      );
      var LANG = getCurrentLang();
      var i18nAnswerFlag = {
        en: "Answer",
        zh_cn: "答案",
        zh_tw: "答案",
      };
      // const i18nSubject: any = {
      // 	en: 'Phonetic Notation and Writing',
      // 	zh_cn: '注音与写字',
      // 	zh_tw: '注音與寫字',
      // };
      var i18nSubject = data.kind === "pinyinToChinese"
        ? {
          en: "Writing",
          zh_cn: "写字",
          zh_tw: "寫字",
        }
        : {
          en: "Phonetic Notation",
          zh_cn: "注音",
          zh_tw: "注音",
        };
      var inputMethod = data.inputMethod,
        selectedCheckboxIndexArray = data.selectedCheckboxIndexArray;
      var i18nSubtitle =
        inputMethod === "select" && selectedCheckboxIndexArray.length === 1
          ? _this.usableCopybookCheckboxElementArray.filter(
            function (checkbox) {
              return checkbox.checked;
            },
          )[0].names
          : {
            en: "",
            zh_cn: "",
            zh_tw: "",
          };
      var HTML_SUBJECT = '<span class="subject">'.concat(
        i18nSubject[LANG],
        "&nbsp;</span>&nbsp;",
      );
      var HTML_SUBTITLE = '<span class="subtitle">'.concat(
        i18nSubtitle[LANG],
        "</span>",
      );
      var pageSubjectRowLeftHtml =
        '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
      var pageSubjectRowCenterHtml = '<cell class="subjectCenter">'.concat(
        HTML_SUBJECT,
      ).concat(HTML_SUBTITLE, "</cell>");
      var questionPageSubjectRowRightHtml =
        '<cell class="subjectRight">~reporterPageIndex~/~reporterPageCount~</cell>';
      var answerPageSubjectRowRightHtml = '<cell class="subjectRight">'.concat(
        i18nAnswerFlag[LANG],
        "~reporterPageIndex~/~reporterPageCount~</cell>",
      );
      var pageSubjectRowHtmlStart = '<row class="subject">'.concat(
        pageSubjectRowLeftHtml,
      ).concat(pageSubjectRowCenterHtml);
      var questionPageSubjectRowHtml = "".concat(pageSubjectRowHtmlStart)
        .concat(questionPageSubjectRowRightHtml, "</row>");
      var answerPageSubjectRowHtml = "".concat(pageSubjectRowHtmlStart).concat(
        answerPageSubjectRowRightHtml,
        "</row>",
      );
      // const questionPageStartHtml = `<page class="questionPage">${questionPageSubjectRowHtml}`;
      // const answerPageStartHtml = `<page class="answerPage">${answerPageSubjectRowHtml}`;
      var questionPageEndHtml = "".concat(
        questionPageSubjectRowHtml,
        "</page>",
      );
      var answerPageEndHtml = "".concat(answerPageSubjectRowHtml, "</page>");
      var questionHtml = "";
      var answerHtml = "";
      var pageIndex = 0;
      var pageIndexStr = "";
      var problemsStartHtml = '<page class="copybookProblemsPage">';
      var answersStartHtml = '<page class="copybookAnswersPage">';
      // const pageEndHtml = '</page>';
      var wordWrapStartHtml = '<div class="wordWrap">';
      var wordWrapEndHtml = "</div>";
      var randomizedCopybooks = _this.getRandomizedCopybooks();
      if (randomizedCopybooks.length) {
        // console.log('randomizedCopybooks', randomizedCopybooks);
        var rowIndex_1 = 0;
        var currentRowWidth_1 = 0;
        questionHtml += problemsStartHtml;
        answerHtml += answersStartHtml;
        randomizedCopybooks.forEach(function (_a) {
          var chinese = _a.chinese, pinyin = _a.pinyin;
          pinyin = pinyin.replace(/\//gi, "'").replace(/a/g, "ɑ").replace(
            /g/g,
            "ɡ",
          );
          var charArray = chinese.split("");
          var pinyinArray = pinyin.split("'");
          var charCount = charArray.length;
          if (charCount !== pinyinArray.length) {
            _this.fixPinyinArray(pinyin, pinyinArray, charCount);
          }
          if (charCount !== pinyinArray.length) {
            console.log(chinese, pinyin, pinyinArray, charCount);
            return;
          }
          var CURRENT_CELL_WIDTH = RECTANGLE_WIDTH * charCount;
          if (currentRowWidth_1 + CURRENT_CELL_WIDTH > PAGE_WIDTH) { // HALF_PAGE_WIDTH
            if (rowIndex_1 < ROWS_COUNT - 1) {
              // 换行不换页
              // halfPagesHtml += START_ROW_HTML.concat(rowHtml, END_ROW_HTML);
              rowIndex_1 += 1;
            } else {
              // questionHtml += pageEndHtml.concat(problemsStartHtml);
              // answerHtml += pageEndHtml.concat(answersStartHtml);
              pageIndexStr = (++pageIndex).toString();
              questionHtml += questionPageEndHtml.replace(
                "~reporterPageIndex~",
                pageIndexStr,
              ).concat(problemsStartHtml);
              answerHtml += answerPageEndHtml.replace(
                "~reporterPageIndex~",
                pageIndexStr,
              ).concat(answersStartHtml);
              // 换页或换“半页”
              // halfPagesHtml += START_ROW_HTML.concat(rowHtml, END_ROW_HTML, END_HALF_PAGE_HTML);
              // pageHtml += halfPagesHtml;
              // halfPagesHtml = START_HALF_PAGE_HTML;
              // if (halfPageIndex < 1) {
              // 	// 换半页
              // 	halfPageIndex += 1;
              // }
              // else {
              // 	// 换页
              // 	pagesHtml += pageHtml.concat(END_PAGE_HTML);
              // 	pageHtml = START_PAGE_HTML;
              // 	halfPageIndex = 0;
              // }
              rowIndex_1 = 0;
            }
            // rowHtml = '';
            currentRowWidth_1 = 0;
          }
          questionHtml += wordWrapStartHtml;
          answerHtml += wordWrapStartHtml;
          charArray.forEach(function (char, index) {
            var charStartHtml = '<span class="charWrap">';
            var charEndHtml = "</span>";
            var backgroundHtml = '<img class="backgound-image" src="'.concat(
              BACKGOUND_SVG_SRC,
              '" alt="',
            ).concat(BACKGOUND_SVG_SRC, '" />');
            // const pinyinHtml = `<pinyin>${pinyinArray[index]}</pinyin>`;
            var pinyin = pinyinArray[index];
            // const pinyinHtml = `<pinyin${pinyin.length === 6 ? ' chars="6"' : ''}>${pinyin}</pinyin>`;
            // const pinyinHtml = `<pinyin${pinyin.length === 6 ? ' chars="6"' : ''}>${pinyin.split('').map((char) => '<pinyin-char>'.concat(char, '</pinyin-char>')).join('')}</pinyin>`;
            // const pinyinHtml = `<pinyin ${pinyin.length > 4 ? ' chars="'.concat(pinyin.length.toString(), '"') : ''}>${pinyin.split('').map((char) => '<pinyin-char'.concat('āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ'.indexOf(char) > -1 ? ' class="withTone"' : '', '>', char, '</pinyin-char>')).join('')}</pinyin>`;
            var pinyinHtml = "<pinyin ".concat(
              pinyin.length > 4
                ? ' chars="'.concat(pinyin.length.toString(), '"')
                : "",
              ">",
            ).concat(
              pinyin.split("").map(function (char, index) {
                return "<pinyin-char".concat(
                  "āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ".indexOf(char) > -1
                    ? ' class="withTone"'
                    : (pinyin.length <= 4 && index > 0 && char === "ɡ"
                      ? ' class="lastG"'
                      : ""),
                  ">",
                  char,
                  "</pinyin-char>",
                );
              }).join(""),
              "</pinyin>",
            );
            var chineseHtml = "<chinese>".concat(char, "</chinese>");
            questionHtml += charStartHtml.concat(
              backgroundHtml,
              kind === "pinyinToChinese" ? pinyinHtml : chineseHtml,
              charEndHtml,
            );
            answerHtml += charStartHtml.concat(
              backgroundHtml,
              pinyinHtml,
              chineseHtml,
              charEndHtml,
            );
          });
          questionHtml += wordWrapEndHtml;
          answerHtml += wordWrapEndHtml;
          currentRowWidth_1 += CURRENT_CELL_WIDTH + HORIZONTAL_SPACE;
        });
        // questionHtml += pageEndHtml;
        // answerHtml += pageEndHtml;
        pageIndexStr = (++pageIndex).toString();
        questionHtml += questionPageEndHtml.replace(
          "~reporterPageIndex~",
          pageIndexStr,
        );
        answerHtml += answerPageEndHtml.replace(
          "~reporterPageIndex~",
          pageIndexStr,
        );
      }
      var questionPageCount = (questionHtml.split("</page>").length - 1)
        .toString();
      var answerPageCount = (answerHtml.split("</page>").length - 1).toString();
      var html = questionHtml.replace(/~reporterPageCount~/g, questionPageCount)
        .concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
      var en = "".concat(FILENAME_POSTFIX, "Copybooks_chineseAndPinyin");
      var zh_cn = "".concat(
        FILENAME_POSTFIX,
        "\u7B80\u4F53\u6C49\u5B57\u4E0E\u62FC\u97F3",
      );
      var zh_tw = "".concat(
        FILENAME_POSTFIX,
        "\u7C21\u9AD4\u6F22\u5B57\u8207\u62FC\u97F3",
      );
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      computedData.html = html;
      // console.log('countDataAndComputedData()', copybooks, computedData );
    };
    _this.getRandomizedCopybooks = function () {
      var copybooks = _this.data.copybooks;
      if (copybooks.length === 0) {
        return [];
      }
      var remaining = [];
      copybooks.forEach(function (copybook) {
        return remaining.push(copybook);
      });
      // console.log('getRandomizedCopybooks(), copybooks:', copybooks);
      // console.log('getRandomizedCopybooks(), remaining:', remaining);
      var result = [];
      var length = remaining.length;
      while (length > 1) {
        var index = Math.floor(Math.random() * length);
        result.push(remaining[index]);
        remaining.splice(index, 1);
        length -= 1;
      }
      result.push(remaining[0]);
      // console.log('getRandomizedCopybooks(), result:', result);
      return result;
    };
    _this.updateOtherData = function (newData) {
      var copybooks = newData.copybooks,
        selectedCheckboxIndexArray = newData.selectedCheckboxIndexArray,
        kind = newData.kind,
        inputMethod = newData.inputMethod,
        fontSize = newData.fontSize,
        color = newData.color;
      var data = _this.data;
      data.copybooks.length = 0;
      // this.data.copybooks.splice(0, 0, copybooks);
      copybooks.forEach(function (copybook) {
        return data.copybooks.push(copybook);
      });
      // console.log('updateOtherData()', this.data.copybooks);
      data.selectedCheckboxIndexArray.length = 0;
      selectedCheckboxIndexArray.forEach(function (selectedCheckboxIndex) {
        return data.selectedCheckboxIndexArray.push(selectedCheckboxIndex);
      });
      data.kind = kind;
      data.inputMethod = inputMethod;
      data.fontSize = fontSize;
      data.color = color;
      _this.onRadioOptionChanged("inputMethod", inputMethod);
      _this.updateCopybookData();
      _this.updateOtherDataOfCopybook(newData);
      // this.build();
    };
    _this.idOrClassPrefix = "brickPageCopybook";
    _this.textareaChinese = createElement("textarea");
    _this.textareaPinyin = createElement("textarea");
    _this.textareaChineseAndPinyin = createElement("textarea");
    _this.initCoreElements = function () {
      _this.initKindElements();
      _this.initInputMethodElements();
      _this.initFontSizeElements();
      _this.initColorElements();
      var configCoreElement = _this.configCoreElement;
      var _a = _this,
        usableCopybookCheckboxElementArray =
          _a.usableCopybookCheckboxElementArray,
        usableCopybooksPeopleEducationEdition =
          _a.usableCopybooksPeopleEducationEdition,
        textareaChinese = _a.textareaChinese,
        textareaPinyin = _a.textareaPinyin,
        textareaChineseAndPinyin = _a.textareaChineseAndPinyin,
        idOrClassPrefix = _a.idOrClassPrefix;
      var data = _this.data;
      _this.appendCopybookOfGrade1Term1();
      _this.appendCopybookOfGrade1Term2();
      _this.appendCopybookOfGrade2Term1();
      var checkboxIndex = -1;
      var booksWrap = createElement("div");
      booksWrap.id = "".concat(idOrClassPrefix, "UsableCopybooksWrap");
      configCoreElement.appendChild(booksWrap);
      var detailsPeopleEducationEdition = createElement("details");
      // configCoreElement.appendChild(detailsPeopleEducationEdition);
      booksWrap.appendChild(detailsPeopleEducationEdition);
      detailsPeopleEducationEdition.setAttribute("open", "");
      var summaryPeopleEducationEdition = createElement("summary");
      detailsPeopleEducationEdition.appendChild(summaryPeopleEducationEdition);
      // const usableCopybooksWrap = createElement('div') as HTMLDivElement;
      // configCoreElement.appendChild(usableCopybooksWrap);
      // usableCopybooksWrap.id = `${idOrClassPrefix}UsableCopybooksWrap`;
      var strongElement = createElement("strong");
      strongElement.innerHTML = getI18nInnerHTML({
        en: "Textbook (People's Education Edition)",
        zh_cn: "课本（人教版）",
        zh_tw: "課本（人教版）",
      });
      // usableCopybooksWrap.appendChild(strongElement);
      summaryPeopleEducationEdition.appendChild(strongElement);
      var usableCopybooksPeopleEducationEditionWrap = createElement("div");
      // configCoreElement.appendChild(usableCopybooksWrap);
      usableCopybooksPeopleEducationEditionWrap.className = "".concat(
        idOrClassPrefix,
        "UsableCopybooksWrap",
      );
      detailsPeopleEducationEdition.appendChild(
        usableCopybooksPeopleEducationEditionWrap,
      );
      usableCopybooksPeopleEducationEdition.forEach(function (_a) {
        var termI18n = _a.termI18n, units = _a.units;
        var usableCopybookWrap = createElement("div");
        usableCopybooksPeopleEducationEditionWrap.appendChild(
          usableCopybookWrap,
        );
        usableCopybookWrap.className = "".concat(
          idOrClassPrefix,
          "UsableCopybookWrap",
        );
        // const strongElement = createElement('strong') as HTMLElement;
        // strongElement.innerHTML = getI18nInnerHTML(strongI18n);
        // wrapElement.appendChild(strongElement);
        var label = createElement("label");
        usableCopybookWrap.appendChild(label);
        label.className = "".concat(idOrClassPrefix, "UsableCopybookLabel");
        label.innerHTML = getI18nInnerHTML(termI18n);
        var spanGroup = createElement("span");
        usableCopybookWrap.appendChild(spanGroup);
        spanGroup.className = "".concat(
          idOrClassPrefix,
          "UsableCopybookCheckboxGroupWrap",
        );
        units.forEach(function (unit) {
          var names = unit.names, words = unit.words;
          var spanWrap = createElement("span");
          spanGroup.appendChild(spanWrap);
          spanWrap.className = "".concat(
            idOrClassPrefix,
            "UsableCopybookCheckboxWrap",
          );
          var checkbox = createElement("input");
          spanWrap.appendChild(checkbox);
          checkbox.type = "checkbox";
          checkbox.setAttribute("edu-index", (++checkboxIndex).toString());
          checkbox.words = words;
          checkbox.names = names;
          usableCopybookCheckboxElementArray.push(checkbox);
          var span = createElement("span");
          spanWrap.appendChild(span);
          span.className = "".concat(
            idOrClassPrefix,
            "UsableCopybookSpanAfterCheckboxWrap",
          );
          span.innerHTML = getI18nInnerHTML(names);
          // copybooks
          var checkboxChanged = function (event) {
            var copybooks = [];
            var chineseArray = [];
            var pinyinArray = [];
            var chineseAndPinyinArray = [];
            var selectedCheckboxIndexArray = [];
            usableCopybookCheckboxElementArray.forEach(function (one) {
              if (one.checked) {
                selectedCheckboxIndexArray.push(
                  parseInt(one.getAttribute("edu-index"), 0),
                );
                one.words.forEach(function (chineseAndPinyinPair) {
                  copybooks.push(chineseAndPinyinPair);
                  var chinese = chineseAndPinyinPair.chinese,
                    pinyin = chineseAndPinyinPair.pinyin;
                  chineseArray.push(chinese);
                  pinyinArray.push(
                    pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"),
                  );
                  chineseAndPinyinArray.push(
                    "".concat(chinese, " ").concat(
                      pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"),
                    ),
                  );
                });
              }
            });
            textareaChinese.value = chineseArray.join("\n");
            textareaPinyin.value = pinyinArray.join("\n");
            textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
            data.selectedCheckboxIndexArray.length = 0;
            selectedCheckboxIndexArray.forEach(function (index) {
              return data.selectedCheckboxIndexArray.push(index);
            });
            _this.updateCopybooks(copybooks);
            // return stopEventBubble(event);
          };
          checkbox.onchange = checkboxChanged;
          span.onclick = function (event) {
            checkbox.checked = !checkbox.checked;
            checkboxChanged(event);
            return stopEventBubble(event);
          };
        });
      });
      _this.onRadioOptionChanged("inputMethod", data.inputMethod);
      var copybookInputWrap = createElement("div");
      configCoreElement.appendChild(copybookInputWrap);
      copybookInputWrap.id = "".concat(idOrClassPrefix, "CopybookInputWrap");
      var copybookInputStrongElement = createElement("strong");
      copybookInputStrongElement.innerHTML = getI18nInnerHTML({
        en: "Entry area",
        zh_cn: "录入区",
        zh_tw: "錄入區",
      });
      copybookInputWrap.appendChild(copybookInputStrongElement);
      var textareaGroupWrap = createElement("span");
      copybookInputWrap.appendChild(textareaGroupWrap);
      textareaGroupWrap.id = "".concat(idOrClassPrefix, "TextareaGroupWrap");
      textareaGroupWrap.appendChild(textareaChinese);
      textareaChinese.value = "";
      textareaChinese.rows = 4;
      textareaChinese.onchange = textareaChinese.focus = function () {
        _this.updateChineseOrPinyinTextarea(
          textareaChinese,
          textareaPinyin,
          textareaChineseAndPinyin,
        );
      };
      textareaChinese.setAttribute(
        "i18n-placeholder",
        JSON.stringify({
          en: "Input Chinese words, one for each line.",
          zh_cn: "输入汉字词语，每行一条。",
          zh_tw: "輸入漢字詞語，每行一條。",
        }),
      );
      textareaGroupWrap.appendChild(textareaPinyin);
      textareaPinyin.value = "";
      textareaPinyin.rows = 4;
      textareaPinyin.onchange = textareaPinyin.focus = function () {
        _this.updateChineseOrPinyinTextarea(
          textareaChinese,
          textareaPinyin,
          textareaChineseAndPinyin,
        );
      };
      textareaPinyin.setAttribute(
        "i18n-placeholder",
        JSON.stringify({
          en:
            "Input the corresponding pinyin of Chinese words, separated by '/'. One for each line.",
          zh_cn: "输入汉字词语对应拼音，使用/分隔。每行一条。",
          zh_tw: "輸入漢字詞語對應拼音，使用/分隔。每行一條。",
        }),
      );
      textareaGroupWrap.appendChild(textareaChineseAndPinyin);
      textareaChineseAndPinyin.value = "";
      textareaChineseAndPinyin.rows = 4;
      textareaChineseAndPinyin.onchange = textareaChineseAndPinyin.focus =
        function () {
          _this.updateChineseAndPinyinTextarea(
            textareaChineseAndPinyin,
            textareaChinese,
            textareaPinyin,
          );
        };
      textareaChineseAndPinyin.setAttribute(
        "i18n-placeholder",
        JSON.stringify({
          en:
            "Input Chinese words and corresponding pinyin, and pinyin is separated by '/'. One for each line.",
          zh_cn: "输入汉字词语及对应拼音，拼音使用/分隔。每行一条。",
          zh_tw: "輸入漢字詞語及對應拼音，拼音使用/分隔。每行一條。",
        }),
      );
    };
    _this.updateCopybookData = function () {
      var _a = _this,
        data = _a.data,
        computedData = _a.computedData,
        usableCopybookCheckboxElementArray =
          _a.usableCopybookCheckboxElementArray;
      var _b = data,
        paperSize = _b.paperSize,
        isLandscape = _b.isLandscape,
        MAX_X = _b.maxX,
        MAX_Y = _b.maxY,
        pageMarginTop = _b.pageMarginTop,
        // pageMarginBottom,
        pageMarginLeft = _b.pageMarginLeft,
        // pageMarginRight,
        copybooks = _b.copybooks,
        selectedCheckboxIndexArray = _b.selectedCheckboxIndexArray,
        kind = _b.kind,
        inputMethod = _b.inputMethod,
        fontSize = _b.fontSize,
        color = _b.color;
      var _c = _this,
        kindElementArray = _c.kindElementArray,
        inputMethodElementArray = _c.inputMethodElementArray,
        fontSizeElementArray = _c.fontSizeElementArray,
        colorElementArray = _c.colorElementArray,
        textareaChinese = _c.textareaChinese,
        textareaPinyin = _c.textareaPinyin,
        textareaChineseAndPinyin = _c.textareaChineseAndPinyin;
      kindElementArray.forEach(function (radio) {
        radio.checked = radio.value === kind;
      });
      inputMethodElementArray.forEach(function (radio) {
        radio.checked = radio.value === inputMethod;
      });
      fontSizeElementArray.forEach(function (radio) {
        radio.checked = radio.value === fontSize;
      });
      colorElementArray.forEach(function (radio) {
        radio.checked = radio.value === color;
      });
      usableCopybookCheckboxElementArray.forEach(function (checkbox) {
        var index = parseInt(checkbox.getAttribute("edu-index") || "0", 0);
        checkbox.checked = selectedCheckboxIndexArray.indexOf(index) > -1;
      });
      var chineseArray = [];
      var pinyinArray = [];
      var chineseAndPinyinArray = [];
      copybooks.forEach(function (_a) {
        var chinese = _a.chinese, pinyin = _a.pinyin;
        chineseArray.push(chinese);
        pinyinArray.push(pinyin);
        chineseAndPinyinArray.push("".concat(chinese, " ").concat(pinyin));
      });
      textareaChinese.value = chineseArray.join("\n");
      textareaPinyin.value = pinyinArray.join("\n");
      textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
    };
    _this.updateChineseAndPinyinTextarea = function (
      textareaChineseAndPinyin,
      textareaChinese,
      textareaPinyin,
    ) {
      var copybooks = [];
      var chineseAndPinyinArray = textareaChineseAndPinyin.value.split("\n");
      var chineseAndPinyinLength = chineseAndPinyinArray.length;
      for (var i = 0; i < chineseAndPinyinLength; ++i) {
        var pairArray = chineseAndPinyinArray[i].split(" ");
        var chinese = pairArray[0];
        var pinyin = (pairArray.length < 2 ? "" : pairArray[1]).replace(
          /a/g,
          "ɑ",
        ).replace(/g/g, "ɡ");
        copybooks.push({ chinese: chinese, pinyin: pinyin });
      }
      var chineseArray = [];
      var pinyinArray = [];
      copybooks.forEach(function (_a) {
        var chinese = _a.chinese, pinyin = _a.pinyin;
        chineseArray.push(chinese);
        pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
        chineseAndPinyinArray.push(
          "".concat(chinese, " ").concat(
            pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"),
          ),
        );
      });
      textareaChinese.value = chineseArray.join("\n");
      textareaPinyin.value = pinyinArray.join("\n");
      // textareaChineseAndPinyin.value = chineseAndPinyinArray.join('\n');
      _this.updateCopybooks(copybooks);
    };
    _this.updateChineseOrPinyinTextarea = function (
      textareaChinese,
      textareaPinyin,
      textareaChineseAndPinyin,
    ) {
      var copybooks = [];
      var chineseArray = textareaChinese.value.split("\n");
      var pinyinArray = textareaPinyin.value.split("\n");
      // const chineseAndPinyinArray = textareaChineseAndPinyin.value.split('\n');
      var chineseLength = chineseArray.length;
      var pinyinLength = pinyinArray.length;
      // const chineseAndPinyinLength = chineseAndPinyinArray.length;
      var maxCount = Math.max(chineseLength, pinyinLength);
      for (var i = 0; i < maxCount; ++i) {
        var chinese = i < chineseLength ? chineseArray[i] : "";
        var pinyin = (i < pinyinLength ? pinyinArray[i] : "").replace(/a/g, "ɑ")
          .replace(/g/g, "ɡ");
        copybooks.push({ chinese: chinese, pinyin: pinyin });
      }
      chineseArray.length = 0;
      pinyinArray.length = 0;
      var chineseAndPinyinArray = [];
      copybooks.forEach(function (_a) {
        var chinese = _a.chinese, pinyin = _a.pinyin;
        chineseArray.push(chinese);
        pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
        chineseAndPinyinArray.push(
          "".concat(chinese, " ").concat(
            pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"),
          ),
        );
      });
      textareaChinese.value = chineseArray.join("\n");
      textareaPinyin.value = pinyinArray.join("\n");
      textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
      _this.updateCopybooks(copybooks);
    };
    _this.updateCopybooks = function (copybooks) {
      var data = _this.data;
      data.copybooks.length = 0;
      copybooks.forEach(function (copybook) {
        data.copybooks.push(copybook);
      });
      _this.countDataAndComputedData();
      _this.build();
    };
    _this.onRadioOptionChanged = function (propertyName, value) {
      switch (propertyName) {
        case "kind":
          break;
        case "inputMethod":
          switch (value) {
            case "select":
              showBlock(getElementById("brickPageCopybookUsableCopybooksWrap"));
              hide(getElementById("brickPageCopybookCopybookInputWrap"));
              break;
            case "manualInput":
              hide(getElementById("brickPageCopybookUsableCopybooksWrap"));
              showBlock(getElementById("brickPageCopybookCopybookInputWrap"));
              break;
            default:
              break;
          }
          break;
        case "fontSize":
          break;
        case "color":
          break;
        default:
          break;
      }
    };
    _this.appendCopybookOfGrade1Term1 = function () {
      var usableCopybooksPeopleEducationEdition =
        _this.usableCopybooksPeopleEducationEdition;
      usableCopybooksPeopleEducationEdition.push({
        termI18n: {
          en: "K1T1",
          zh_cn: "\u4E00\u5E74\u7EA7\u4E0A",
          zh_tw: "\u4E00\u5E74\u7D1A\u4E0A",
        },
        units: [
          {
            names: {
              en: "Unit 1",
              zh_cn: "\u7B2C\u4E00\u5355\u5143",
              zh_tw: "\u7B2C\u4E00\u5355\u5143",
            },
            words: [
              { chinese: "\u5929", pinyin: "ti\u0101n" },
              { chinese: "\u5730", pinyin: "d\u00EC" },
              { chinese: "\u4EBA", pinyin: "r\u00E9n" },
              { chinese: "\u4F60", pinyin: "n\u01D0" },
              { chinese: "\u6211", pinyin: "w\u01D2" },
              { chinese: "\u4ED6", pinyin: "t\u0101" },
              { chinese: "\u4E00", pinyin: "y\u012B" },
              { chinese: "\u4E8C", pinyin: "\u00E8r" },
              { chinese: "\u4E09", pinyin: "s\u0101n" },
              { chinese: "\u56DB", pinyin: "s\u00EC" },
              { chinese: "\u4E94", pinyin: "w\u01D4" },
              { chinese: "\u4E0A\u4E0B", pinyin: "sh\u00E0ng'xi\u00E0" },
              { chinese: "\u53E3", pinyin: "k\u01D2u" },
              { chinese: "\u8033", pinyin: "\u011Br" },
              { chinese: "\u76EE", pinyin: "m\u00F9" },
              { chinese: "\u624B", pinyin: "sh\u01D2u" },
              { chinese: "\u8DB3", pinyin: "z\u00FA" },
              { chinese: "\u7AD9", pinyin: "zh\u00E0n" },
              { chinese: "\u5750", pinyin: "zu\u00F2" },
              { chinese: "\u65E5", pinyin: "r\u00EC" },
              { chinese: "\u6708", pinyin: "yu\u00E8" },
              { chinese: "\u6C34", pinyin: "shu\u01D0" },
              { chinese: "\u706B", pinyin: "hu\u01D2" },
              { chinese: "\u5C71", pinyin: "sh\u0101n" },
              { chinese: "\u77F3", pinyin: "sh\u00ED" },
              { chinese: "\u7530", pinyin: "ti\u00E1n" },
              { chinese: "\u79BE", pinyin: "h\u00E9" },
              { chinese: "\u5BF9", pinyin: "du\u00EC" },
              { chinese: "\u4E91", pinyin: "y\u00FAn" },
              { chinese: "\u96E8", pinyin: "y\u01D4" },
              { chinese: "\u98CE", pinyin: "f\u0113ng" },
              { chinese: "\u82B1", pinyin: "hu\u0101" },
              { chinese: "\u9E1F", pinyin: "ni\u01CEo" },
              { chinese: "\u866B", pinyin: "ch\u00F3ng" },
              { chinese: "\u516D", pinyin: "li\u00F9" },
              { chinese: "\u4E03", pinyin: "q\u012B" },
              { chinese: "\u516B", pinyin: "b\u0101" },
              { chinese: "\u4E5D", pinyin: "ji\u01D4" },
              { chinese: "\u5341", pinyin: "sh\u00ED" },
            ],
          },
          {
            names: {
              en: "Unit 2",
              zh_cn: "\u7B2C\u4E8C\u5355\u5143",
              zh_tw: "\u7B2C\u4E8C\u5355\u5143",
            },
            words: [
              { chinese: "\u7238", pinyin: "b\u00E0" },
              { chinese: "\u5988", pinyin: "m\u0101" },
              { chinese: "\u9A6C", pinyin: "m\u01CE" },
              { chinese: "\u571F", pinyin: "t\u01D4" },
              { chinese: "\u4E0D", pinyin: "b\u00F9" },
              { chinese: "\u753B", pinyin: "hu\u00E0" },
              { chinese: "\u6253", pinyin: "d\u01CE" },
              { chinese: "\u68CB", pinyin: "q\u00ED" },
              { chinese: "\u9E21", pinyin: "j\u012B" },
              { chinese: "\u5B57", pinyin: "z\u00EC" },
              { chinese: "\u8BCD\u8BED", pinyin: "c\u00ED'y\u01D4" },
              { chinese: "\u53E5\u5B50", pinyin: "j\u00F9'z\u01D0" },
              { chinese: "\u684C", pinyin: "zhu\u014D" },
              { chinese: "\u7EB8", pinyin: "zh\u01D0" },
              { chinese: "\u6587", pinyin: "w\u00E9n" },
              { chinese: "\u6570\u5B66", pinyin: "sh\u00F9'xu\u00E9" },
              { chinese: "\u97F3\u4E50", pinyin: "y\u012Bn'yu\u00E8" },
            ],
          },
          {
            names: {
              en: "Unit 3",
              zh_cn: "\u7B2C\u4E09\u5355\u5143",
              zh_tw: "\u7B2C\u4E09\u5355\u5143",
            },
            words: [
              { chinese: "\u59B9", pinyin: "m\u00E8i" },
              { chinese: "\u5976", pinyin: "n\u01CEi" },
              { chinese: "\u5C0F", pinyin: "xi\u01CEo" },
              { chinese: "\u6865", pinyin: "qi\u00E1o" },
              { chinese: "\u53F0", pinyin: "t\u00E1i" },
              { chinese: "\u96EA", pinyin: "xu\u011B" },
              { chinese: "\u513F", pinyin: "\u00E9r" },
              { chinese: "\u767D", pinyin: "b\u00E1i" },
              { chinese: "\u8349", pinyin: "c\u01CEo" },
              { chinese: "\u5BB6", pinyin: "ji\u0101" },
              { chinese: "\u662F", pinyin: "sh\u00EC" },
              { chinese: "\u8F66", pinyin: "ch\u0113" },
              { chinese: "\u8DEF\u706F", pinyin: "l\u00F9'd\u0113ng" },
              { chinese: "\u8D70", pinyin: "z\u01D2u" },
            ],
          },
          {
            names: {
              en: "Unit 4",
              zh_cn: "\u7B2C\u56DB\u5355\u5143",
              zh_tw: "\u7B2C\u56DB\u5355\u5143",
            },
            words: [
              { chinese: "\u79CB", pinyin: "qi\u016B" },
              { chinese: "\u6C14", pinyin: "q\u00EC" },
              { chinese: "\u4E86", pinyin: "le" },
              { chinese: "\u6811\u53F6", pinyin: "sh\u00F9'y\u00E8" },
              { chinese: "\u7247", pinyin: "pi\u00E0n" },
              { chinese: "\u5927", pinyin: "d\u00E0" },
              { chinese: "\u98DE", pinyin: "f\u0113i" },
              { chinese: "\u4F1A", pinyin: "hu\u00EC" },
              { chinese: "\u4E2A", pinyin: "g\u00E8" },
              { chinese: "\u7684", pinyin: "de" },
              { chinese: "\u8239", pinyin: "chu\u00E1n" },
              { chinese: "\u4E24\u5934", pinyin: "li\u01CEng't\u00F3u" },
              { chinese: "\u5728", pinyin: "z\u00E0i" },
              { chinese: "\u91CC", pinyin: "l\u01D0" },
              { chinese: "\u770B\u89C1", pinyin: "k\u00E0n'ji\u00E0n" },
              { chinese: "\u95EA", pinyin: "sh\u01CEn" },
              { chinese: "\u661F", pinyin: "x\u012Bng" },
              { chinese: "\u6C5F\u5357", pinyin: "ji\u0101ng'n\u00E1n" },
              { chinese: "\u53EF", pinyin: "k\u011B" },
              { chinese: "\u91C7\u83B2", pinyin: "c\u01CEi'li\u00E1n" },
              { chinese: "\u9C7C", pinyin: "y\u00FA" },
              { chinese: "\u4E1C", pinyin: "d\u014Dng" },
              { chinese: "\u897F", pinyin: "x\u012B" },
              { chinese: "\u5317", pinyin: "b\u011Bi" },
              { chinese: "\u5C16", pinyin: "ji\u0101n" },
              { chinese: "\u8BF4", pinyin: "shu\u014D" },
              { chinese: "\u6625", pinyin: "ch\u016Bn" },
              { chinese: "\u9752\u86D9", pinyin: "q\u012Bng'w\u0101" },
              { chinese: "\u590F", pinyin: "xi\u00E0" },
              { chinese: "\u5F2F", pinyin: "w\u0101n" },
              { chinese: "\u76AE", pinyin: "p\u00ED" },
              { chinese: "\u5730", pinyin: "de" },
              { chinese: "\u51AC", pinyin: "d\u014Dng" },
              { chinese: "\u7537\u5973", pinyin: "n\u00E1n'n\u01DA" },
              { chinese: "\u5F00\u5173", pinyin: "k\u0101i'gu\u0101n" },
              { chinese: "\u6B63\u53CD", pinyin: "zh\u00E8ng'f\u01CEn" },
            ],
          },
          {
            names: {
              en: "Unit 5",
              zh_cn: "\u7B2C\u4E94\u5355\u5143",
              zh_tw: "\u7B2C\u4E94\u5355\u5143",
            },
            words: [
              { chinese: "\u8FDC", pinyin: "yu\u01CEn" },
              { chinese: "\u6709", pinyin: "y\u01D2u" },
              { chinese: "\u8272", pinyin: "s\u00E8" },
              { chinese: "\u8FD1", pinyin: "j\u00ECn" },
              { chinese: "\u542C", pinyin: "t\u012Bng" },
              { chinese: "\u65E0", pinyin: "w\u00FA" },
              { chinese: "\u58F0", pinyin: "sh\u0113ng" },
              { chinese: "\u53BB", pinyin: "q\u00F9" },
              { chinese: "\u8FD8", pinyin: "h\u00E1i" },
              { chinese: "\u6765", pinyin: "l\u00E1i" },
              { chinese: "\u591A\u5C11", pinyin: "du\u014D'sh\u01CEo" },
              { chinese: "\u9EC4\u725B", pinyin: "hu\u00E1ng'ni\u00FA" },
              { chinese: "\u53EA", pinyin: "zh\u012B" },
              { chinese: "\u732B", pinyin: "m\u0101o" },
              { chinese: "\u8FB9", pinyin: "bi\u0101n" },
              { chinese: "\u9E2D", pinyin: "y\u0101" },
              { chinese: "\u82F9\u679C", pinyin: "p\u00EDng'gu\u01D2" },
              { chinese: "\u674F", pinyin: "x\u00ECng" },
              { chinese: "\u6843", pinyin: "t\u00E1o" },
              { chinese: "\u4E66\u5305", pinyin: "sh\u016B'b\u0101o" },
              { chinese: "\u5C3A", pinyin: "ch\u01D0" },
              {
                chinese: "\u4F5C\u4E1A\u672C",
                pinyin: "zu\u00F2'y\u00E8'b\u011Bn",
              },
              { chinese: "\u7B14", pinyin: "b\u01D0" },
              { chinese: "\u5200", pinyin: "d\u0101o" },
              { chinese: "\u8BFE", pinyin: "k\u00E8" },
              { chinese: "\u65E9", pinyin: "z\u01CEo" },
              { chinese: "\u6821", pinyin: "xi\u00E0o" },
              { chinese: "\u660E", pinyin: "m\u00EDng" },
              { chinese: "\u529B", pinyin: "l\u00EC" },
              { chinese: "\u5C18", pinyin: "ch\u00E9n" },
              { chinese: "\u4ECE", pinyin: "c\u00F3ng" },
              { chinese: "\u4F17", pinyin: "zh\u00F2ng" },
              { chinese: "\u53CC", pinyin: "shu\u0101ng" },
              { chinese: "\u6728", pinyin: "m\u00F9" },
              { chinese: "\u6797", pinyin: "l\u00EDn" },
              { chinese: "\u68EE", pinyin: "s\u0113n" },
              { chinese: "\u6761", pinyin: "ti\u00E1o" },
              { chinese: "\u5FC3", pinyin: "x\u012Bn" },
              {
                chinese: "\u5347\u56FD\u65D7",
                pinyin: "sheng'gu\u00F3'q\u00ED",
              },
              { chinese: "\u4E2D", pinyin: "zh\u014Dng" },
              { chinese: "\u7EA2", pinyin: "h\u00F3ng" },
              { chinese: "\u6B4C", pinyin: "g\u0113" },
              { chinese: "\u8D77\u7ACB", pinyin: "q\u01D0'l\u00EC" },
              { chinese: "\u4E48", pinyin: "me" },
              { chinese: "\u7F8E\u4E3D", pinyin: "m\u011Bi'l\u00EC" },
              { chinese: "\u5348", pinyin: "w\u01D4" },
              { chinese: "\u665A", pinyin: "w\u01CEn" },
              { chinese: "\u6628", pinyin: "zu\u00F3" },
              { chinese: "\u4ECA\u5E74", pinyin: "j\u012Bn'ni\u00E1n" },
            ],
          },
          {
            names: {
              en: "Unit 6",
              zh_cn: "\u7B2C\u516D\u5355\u5143",
              zh_tw: "\u7B2C\u516D\u5355\u5143",
            },
            words: [
              { chinese: "\u5F71", pinyin: "y\u01D0ng" },
              { chinese: "\u524D\u540E", pinyin: "qi\u00E1n'h\u00F2u" },
              { chinese: "\u9ED1\u72D7", pinyin: "h\u0113i'g\u01D2u" },
              { chinese: "\u5DE6\u53F3", pinyin: "zu\u01D2'y\u00F2u" },
              { chinese: "\u5B83", pinyin: "t\u0101" },
              {
                chinese: "\u597D\u670B\u53CB",
                pinyin: "h\u01CEo'p\u00E9ng'y\u01D2u",
              },
              { chinese: "\u6BD4", pinyin: "b\u01D0" },
              { chinese: "\u5C3E\u5DF4", pinyin: "w\u011Bi'b\u0101" },
              { chinese: "\u8C01", pinyin: "shu\u00ED" },
              { chinese: "\u957F\u77ED", pinyin: "ch\u00E1ng'du\u01CEn" },
              { chinese: "\u628A", pinyin: "b\u01CE" },
              { chinese: "\u4F1E", pinyin: "s\u01CEn" },
              { chinese: "\u5154", pinyin: "t\u00F9" },
              { chinese: "\u6700", pinyin: "zu\u00EC" },
              { chinese: "\u516C", pinyin: "g\u014Dng" },
              { chinese: "\u5199\u8BD7", pinyin: "xi\u011B'sh\u012B" },
              { chinese: "\u70B9", pinyin: "di\u01CEn" },
              { chinese: "\u8981", pinyin: "y\u00E0o" },
              { chinese: "\u8FC7", pinyin: "gu\u00F2" },
              { chinese: "\u7ED9", pinyin: "g\u011Bi" },
              { chinese: "\u5F53", pinyin: "d\u0101ng" },
              { chinese: "\u4E32", pinyin: "chu\u00E0n" },
              { chinese: "\u4EEC", pinyin: "men" },
              { chinese: "\u4EE5", pinyin: "y\u01D0" },
              { chinese: "\u6210", pinyin: "ch\u00E9ng" },
              { chinese: "\u6570", pinyin: "sh\u01D4" },
              { chinese: "\u5F69", pinyin: "c\u01CEi" },
              { chinese: "\u534A", pinyin: "b\u00E0n" },
              { chinese: "\u7A7A", pinyin: "k\u014Dng" },
              { chinese: "\u95EE", pinyin: "w\u00E8n" },
              { chinese: "\u5230", pinyin: "d\u00E0o" },
              { chinese: "\u65B9", pinyin: "f\u0101ng" },
              { chinese: "\u6CA1", pinyin: "m\u00E9i" },
              { chinese: "\u66F4", pinyin: "g\u00E8ng" },
              { chinese: "\u7EFF", pinyin: "l\u01DC" },
              { chinese: "\u51FA", pinyin: "ch\u016B" },
              { chinese: "\u957F", pinyin: "zh\u01CEng" },
            ],
          },
          {
            names: {
              en: "Unit 7",
              zh_cn: "\u7B2C\u4E03\u5355\u5143",
              zh_tw: "\u7B2C\u4E03\u5355\u5143",
            },
            words: [
              { chinese: "\u7761", pinyin: "shu\u00EC" },
              { chinese: "\u90A3", pinyin: "n\u00E0" },
              { chinese: "\u6D77", pinyin: "h\u01CEi" },
              { chinese: "\u771F", pinyin: "zh\u0113n" },
              { chinese: "\u8001\u5E08", pinyin: "l\u01CEo'sh\u012B" },
              { chinese: "\u5417", pinyin: "ma" },
              { chinese: "\u540C", pinyin: "t\u00F3ng" },
              { chinese: "\u4EC0", pinyin: "sh\u00E9n" },
              { chinese: "\u624D", pinyin: "c\u00E1i" },
              { chinese: "\u4EAE", pinyin: "li\u00E0ng" },
              { chinese: "\u65F6\u5019", pinyin: "sh\u00ED'h\u00F2u" },
              { chinese: "\u89C9\u5F97", pinyin: "ji\u00E0o'de" },
              { chinese: "\u81EA\u5DF1", pinyin: "z\u00EC'j\u01D0" },
              { chinese: "\u5F88", pinyin: "h\u011Bn" },
              {
                chinese: "\u7A7F\u8863\u670D",
                pinyin: "chu\u0101n'y\u012B'f\u00FA",
              },
              { chinese: "\u95E8", pinyin: "m\u00E9n" },
              { chinese: "\u5FEB", pinyin: "ku\u00E0i" },
              { chinese: "\u84DD", pinyin: "l\u00E1n" },
              { chinese: "\u53C8", pinyin: "y\u00F2u" },
              { chinese: "\u7B11", pinyin: "xi\u00E0o" },
              { chinese: "\u7740", pinyin: "zhe" },
              { chinese: "\u5411", pinyin: "xi\u00E0ng" },
              { chinese: "\u548C", pinyin: "h\u00E9" },
              { chinese: "\u8D1D", pinyin: "b\u00E8i" },
              { chinese: "\u5A03", pinyin: "w\u00E1" },
              { chinese: "\u6302", pinyin: "gu\u00E0" },
              { chinese: "\u6D3B", pinyin: "hu\u00F3" },
              { chinese: "\u91D1", pinyin: "j\u012Bn" },
              { chinese: "\u54E5", pinyin: "g\u0113" },
              { chinese: "\u59D0", pinyin: "ji\u011B" },
              { chinese: "\u5F1F", pinyin: "d\u00EC" },
              { chinese: "\u53D4", pinyin: "sh\u016B" },
              { chinese: "\u7237", pinyin: "y\u00E9" },
            ],
          },
          {
            names: {
              en: "Unit 8",
              zh_cn: "\u7B2C\u516B\u5355\u5143",
              zh_tw: "\u7B2C\u516B\u5355\u5143",
            },
            words: [
              { chinese: "\u7FA4", pinyin: "q\u00FAn" },
              { chinese: "\u7AF9", pinyin: "zh\u00FA" },
              { chinese: "\u7259", pinyin: "y\u00E1" },
              { chinese: "\u7528", pinyin: "y\u00F2ng" },
              { chinese: "\u51E0\u6B65", pinyin: "j\u01D0'b\u00F9" },
              { chinese: "\u4E3A", pinyin: "w\u00E9i" },
              { chinese: "\u53C2\u52A0", pinyin: "c\u0101n'ji\u0101" },
              { chinese: "\u6D1E", pinyin: "d\u00F2ng" },
              { chinese: "\u7740", pinyin: "zh\u00E1o" },
              { chinese: "\u4E4C\u9E26", pinyin: "w\u016B'y\u0101" },
              { chinese: "\u5904", pinyin: "ch\u00F9" },
              { chinese: "\u627E", pinyin: "zh\u01CEo" },
              { chinese: "\u529E", pinyin: "b\u00E0n" },
              { chinese: "\u65C1", pinyin: "p\u00E1ng" },
              { chinese: "\u8BB8", pinyin: "x\u01D4" },
              { chinese: "\u6CD5", pinyin: "f\u01CE" },
              { chinese: "\u653E", pinyin: "f\u00E0ng" },
              { chinese: "\u8FDB", pinyin: "j\u00ECn" },
              { chinese: "\u9AD8", pinyin: "g\u0101o" },
              { chinese: "\u4F4F", pinyin: "zh\u00F9" },
              { chinese: "\u5B69", pinyin: "h\u00E1i" },
              { chinese: "\u73A9", pinyin: "w\u00E1n" },
              { chinese: "\u5427", pinyin: "ba" },
              { chinese: "\u53D1\u82BD", pinyin: "f\u0101'y\u00E1" },
              { chinese: "\u722C", pinyin: "p\u00E1" },
              { chinese: "\u5440", pinyin: "ya" },
              { chinese: "\u4E45", pinyin: "ji\u01D4" },
              { chinese: "\u56DE", pinyin: "hu\u00ED" },
              { chinese: "\u5168", pinyin: "qu\u00E1n" },
              { chinese: "\u53D8", pinyin: "bi\u00E0n" },
              { chinese: "\u5DE5\u5382", pinyin: "gong'ch\u01CEng" },
              { chinese: "\u533B\u9662", pinyin: "y\u012B'yu\u00E0n" },
              { chinese: "\u751F", pinyin: "sh\u0113ng" },
            ],
          },
        ],
      });
    };
    _this.appendCopybookOfGrade1Term2 = function () {
      var usableCopybooksPeopleEducationEdition =
        _this.usableCopybooksPeopleEducationEdition;
      usableCopybooksPeopleEducationEdition.push({
        termI18n: {
          en: "K1T2",
          zh_cn: "\u4E00\u5E74\u7EA7\u4E0B",
          zh_tw: "\u4E00\u5E74\u7D1A\u4E0B",
        },
        units: [
          {
            names: {
              en: "Literacy 1",
              zh_cn: "\u8BC6\u5B57\u88681",
              zh_tw: "\u8B58\u5B57\u93361",
            },
            words: [
              { chinese: "\u971C", pinyin: "shu\u0101ng" },
              { chinese: "\u5439", pinyin: "chu\u012B" },
              { chinese: "\u843D", pinyin: "lu\u00F2" },
              { chinese: "\u964D", pinyin: "ji\u00E0ng" },
              { chinese: "\u98D8\u6E38", pinyin: "pi\u0101o'y\u00F3u" },
              { chinese: "\u6C60", pinyin: "ch\u00ED" },
              { chinese: "\u5165", pinyin: "r\u00F9" },
              { chinese: "\u59D3\u6C0F", pinyin: "x\u00ECng'sh\u00EC" },
              { chinese: "\u674E", pinyin: "l\u01D0" },
              { chinese: "\u5F20", pinyin: "zh\u0101ng" },
              { chinese: "\u53E4", pinyin: "g\u01D4" },
              { chinese: "\u5434", pinyin: "w\u00FA" },
              { chinese: "\u8D75", pinyin: "zh\u00E0o" },
              { chinese: "\u94B1", pinyin: "qi\u00E1n" },
              { chinese: "\u5B59", pinyin: "s\u016Bn" },
              { chinese: "\u5468", pinyin: "zh\u014Du" },
              { chinese: "\u738B", pinyin: "w\u00E1ng" },
              { chinese: "\u5B98", pinyin: "gu\u0101n" },
              { chinese: "\u6E05", pinyin: "q\u012Bng" },
              { chinese: "\u6674", pinyin: "q\u00EDng" },
              { chinese: "\u773C\u775B", pinyin: "y\u01CEn'j\u012Bng" },
              { chinese: "\u4FDD\u62A4", pinyin: "b\u01CEo'h\u00F9" },
              { chinese: "\u5BB3", pinyin: "h\u00E0i" },
              { chinese: "\u4E8B\u60C5", pinyin: "sh\u00EC'qing" },
              { chinese: "\u8BF7", pinyin: "q\u01D0ng" },
              { chinese: "\u8BA9", pinyin: "r\u00E0ng" },
              { chinese: "\u75C5", pinyin: "b\u00ECng" },
              { chinese: "\u76F8\u9047", pinyin: "xi\u0101ng'y\u00F9" },
              { chinese: "\u559C\u6B22", pinyin: "x\u01D0'huan" },
              { chinese: "\u6015", pinyin: "p\u00E0" },
              { chinese: "\u8A00", pinyin: "y\u00E1n" },
              { chinese: "\u4E92", pinyin: "h\u00F9" },
              { chinese: "\u4EE4", pinyin: "l\u00ECng" },
              { chinese: "\u52A8", pinyin: "d\u00F2ng" },
              { chinese: "\u4E07", pinyin: "w\u00E0n" },
              { chinese: "\u7EAF\u51C0", pinyin: "ch\u00FAn'j\u00ECng" },
              { chinese: "\u9634", pinyin: "y\u012Bn" },
              { chinese: "\u96F7\u7535", pinyin: "l\u00E9i'di\u00E0n" },
              { chinese: "\u9635", pinyin: "zh\u00E8n" },
              { chinese: "\u51B0\u51BB", pinyin: "b\u012Bng'd\u00F2ng" },
              { chinese: "\u5939", pinyin: "ji\u00E1" },
            ],
          },
          {
            names: {
              en: "Literacy 2",
              zh_cn: "\u8BC6\u5B57\u88682",
              zh_tw: "\u8B58\u5B57\u93362",
            },
            words: [
              { chinese: "\u5403", pinyin: "ch\u012B" },
              { chinese: "\u5FD8", pinyin: "w\u00E0ng" },
              { chinese: "\u4E95", pinyin: "j\u01D0ng" },
              { chinese: "\u6751", pinyin: "c\u016Bn" },
              { chinese: "\u53EB", pinyin: "ji\u00E0o" },
              {
                chinese: "\u6BDB\u4E3B\u5E2D",
                pinyin: "m\u00E1o'zh\u01D4'x\u00ED",
              },
              { chinese: "\u4E61\u4EB2", pinyin: "xi\u0101ng'q\u012Bn" },
              { chinese: "\u6218\u58EB", pinyin: "zh\u00E0n'sh\u00EC" },
              { chinese: "\u9762", pinyin: "mi\u00E0n" },
              { chinese: "\u60F3", pinyin: "xi\u01CEng" },
              { chinese: "\u544A\u8BC9", pinyin: "g\u00E0o's\u00F9" },
              { chinese: "\u5C31", pinyin: "ji\u00F9" },
              { chinese: "\u4EAC", pinyin: "j\u012Bng" },
              { chinese: "\u5B89", pinyin: "\u0101n" },
              { chinese: "\u5E7F", pinyin: "gu\u01CEng" },
              { chinese: "\u975E\u5E38", pinyin: "f\u0113i'ch\u00E1ng" },
              { chinese: "\u58EE\u89C2", pinyin: "zhu\u00E0ng'gu\u0101n" },
              { chinese: "\u63A5", pinyin: "ji\u0113" },
              { chinese: "\u89C9", pinyin: "ji\u00E0o" },
              { chinese: "\u518D", pinyin: "z\u00E0i" },
              { chinese: "\u505A", pinyin: "zu\u00F2" },
              { chinese: "\u5404\u79CD", pinyin: "g\u00E8'zh\u01D2ng" },
              { chinese: "\u6837", pinyin: "y\u00E0ng" },
              { chinese: "\u4F19\u4F34", pinyin: "hu\u01D2'b\u00E0n" },
              { chinese: "\u5374", pinyin: "qu\u00E8" },
              { chinese: "\u4E5F", pinyin: "y\u011B" },
              { chinese: "\u8DA3", pinyin: "q\u00F9" },
              { chinese: "\u8FD9", pinyin: "zh\u00E8" },
              { chinese: "\u592A\u9633", pinyin: "t\u00E0i'y\u00E1ng" },
              { chinese: "\u9053", pinyin: "d\u00E0o" },
              { chinese: "\u9001", pinyin: "s\u00F2ng" },
              { chinese: "\u5FD9", pinyin: "m\u00E1ng" },
              { chinese: "\u5C1D", pinyin: "ch\u00E1ng" },
              { chinese: "\u9999\u751C", pinyin: "xi\u0101ng'ti\u00E1n" },
              { chinese: "\u6E29\u6696", pinyin: "w\u0113n'nu\u01CEn" },
              { chinese: "\u8BE5", pinyin: "g\u0101i" },
              { chinese: "\u989C", pinyin: "y\u00E1n" },
              { chinese: "\u56E0", pinyin: "y\u012Bn" },
              { chinese: "\u8F86", pinyin: "li\u00E0ng" },
              { chinese: "\u5339", pinyin: "p\u01D0" },
              { chinese: "\u518C", pinyin: "c\u00E8" },
              { chinese: "\u652F", pinyin: "zh\u012B" },
              { chinese: "\u94C5", pinyin: "qi\u0101n" },
              { chinese: "\u68F5", pinyin: "k\u0113" },
              { chinese: "\u67B6", pinyin: "ji\u00E0" },
            ],
          },
          {
            names: {
              en: "Literacy 3",
              zh_cn: "\u8BC6\u5B57\u88683",
              zh_tw: "\u8B58\u5B57\u93363",
            },
            words: [
              { chinese: "\u5757", pinyin: "ku\u00E0i" },
              { chinese: "\u6349", pinyin: "zhu\u014D" },
              { chinese: "\u6025", pinyin: "j\u00ED" },
              { chinese: "\u76F4", pinyin: "zh\u00ED" },
              { chinese: "\u6CB3", pinyin: "h\u00E9" },
              { chinese: "\u884C", pinyin: "h\u00E1ng" },
              { chinese: "\u6B7B", pinyin: "s\u01D0" },
              { chinese: "\u4FE1", pinyin: "x\u00ECn" },
              { chinese: "\u8DDF", pinyin: "g\u0113n" },
              { chinese: "\u5FFD", pinyin: "h\u016B" },
              { chinese: "\u558A", pinyin: "h\u01CEn" },
              { chinese: "\u8EAB", pinyin: "sh\u0113n" },
              { chinese: "\u53EA", pinyin: "zh\u012B" },
              { chinese: "\u7A9D", pinyin: "w\u014D" },
              { chinese: "\u5B64\u5355", pinyin: "g\u016B'd\u0101n" },
              { chinese: "\u79CD", pinyin: "zh\u01D2ng" },
              { chinese: "\u90FD", pinyin: "d\u014Du" },
              { chinese: "\u90BB\u5C45", pinyin: "l\u00EDn'j\u016B" },
              { chinese: "\u62DB\u547C", pinyin: "zh\u0101o'hu" },
              { chinese: "\u9759", pinyin: "j\u00ECng" },
              { chinese: "\u4E50", pinyin: "l\u00E8" },
              { chinese: "\u600E", pinyin: "z\u011Bn" },
              { chinese: "\u72EC", pinyin: "d\u00FA" },
              { chinese: "\u8DF3\u7EF3", pinyin: "ti\u00E0o'sh\u00E9ng" },
              { chinese: "\u8BB2", pinyin: "ji\u01CEng" },
              { chinese: "\u5F97", pinyin: "d\u00E9" },
              { chinese: "\u7FBD", pinyin: "y\u01D4" },
              { chinese: "\u7403", pinyin: "qi\u00FA" },
              { chinese: "\u620F", pinyin: "x\u00EC" },
              { chinese: "\u6392", pinyin: "p\u00E1i" },
              { chinese: "\u7BEE", pinyin: "l\u00E1n" },
              { chinese: "\u8FDE", pinyin: "li\u00E1n" },
              { chinese: "\u8FD0", pinyin: "y\u00F9n" },
            ],
          },
          {
            names: {
              en: "Literacy 4",
              zh_cn: "\u8BC6\u5B57\u88684",
              zh_tw: "\u8B58\u5B57\u93364",
            },
            words: [
              { chinese: "\u591C", pinyin: "y\u00E8" },
              { chinese: "\u601D", pinyin: "s\u012B" },
              { chinese: "\u5E8A", pinyin: "chu\u00E1ng" },
              { chinese: "\u5149", pinyin: "gu\u0101ng" },
              { chinese: "\u7591", pinyin: "y\u00ED" },
              { chinese: "\u4E3E", pinyin: "j\u01D4" },
              { chinese: "\u671B", pinyin: "w\u00E0ng" },
              { chinese: "\u4F4E", pinyin: "d\u012B" },
              { chinese: "\u6545", pinyin: "g\u00F9" },
              { chinese: "\u80C6\u6562", pinyin: "d\u01CEn'g\u01CEn" },
              { chinese: "\u5F80", pinyin: "w\u01CEng" },
              { chinese: "\u5916", pinyin: "w\u00E0i" },
              { chinese: "\u52C7", pinyin: "y\u01D2ng" },
              { chinese: "\u7A97", pinyin: "chu\u0101ng" },
              { chinese: "\u4E71", pinyin: "lu\u00E0n" },
              { chinese: "\u504F", pinyin: "pi\u0101n" },
              { chinese: "\u6563", pinyin: "s\u00E0n" },
              { chinese: "\u539F", pinyin: "yu\u00E1n" },
              { chinese: "\u50CF", pinyin: "xi\u00E0ng" },
              { chinese: "\u5FAE", pinyin: "w\u0113i" },
              { chinese: "\u7AEF", pinyin: "du\u0101n" },
              { chinese: "\u7CBD", pinyin: "z\u00F2ng" },
              { chinese: "\u8282", pinyin: "ji\u00E9" },
              { chinese: "\u603B", pinyin: "z\u01D2ng" },
              { chinese: "\u7C73", pinyin: "m\u01D0" },
              { chinese: "\u95F4", pinyin: "ji\u0101n" },
              { chinese: "\u5206", pinyin: "f\u0113n" },
              { chinese: "\u8C46", pinyin: "d\u00F2u" },
              { chinese: "\u8089", pinyin: "r\u00F2u" },
              { chinese: "\u5E26", pinyin: "d\u00E0i" },
              { chinese: "\u77E5", pinyin: "zh\u012B" },
              { chinese: "\u636E", pinyin: "j\u00F9" },
              { chinese: "\u5FF5", pinyin: "ni\u00E0n" },
              { chinese: "\u8679", pinyin: "h\u00F3ng" },
              { chinese: "\u5EA7", pinyin: "zu\u00F2" },
              { chinese: "\u6D47", pinyin: "ji\u0101o" },
              { chinese: "\u63D0", pinyin: "t\u00ED" },
              { chinese: "\u6D12", pinyin: "s\u01CE" },
              { chinese: "\u6311", pinyin: "ti\u0101o" },
              { chinese: "\u5174", pinyin: "x\u00ECng" },
              { chinese: "\u955C", pinyin: "j\u00ECng" },
              { chinese: "\u62FF", pinyin: "n\u00E1" },
              { chinese: "\u7167", pinyin: "zh\u00E0o" },
              { chinese: "\u5343", pinyin: "qi\u0101n" },
              { chinese: "\u88D9", pinyin: "q\u00FAn" },
              { chinese: "\u7709", pinyin: "m\u00E9i" },
              { chinese: "\u9F3B", pinyin: "b\u00ED" },
              { chinese: "\u5634", pinyin: "zu\u01D0" },
              { chinese: "\u8116", pinyin: "b\u00F3" },
              { chinese: "\u81C2", pinyin: "b\u00EC" },
              { chinese: "\u809A", pinyin: "d\u00F9" },
              { chinese: "\u817F\u811A", pinyin: "tu\u01D0'ji\u01CEo" },
            ],
          },
          {
            names: {
              en: "Literacy 5",
              zh_cn: "\u8BC6\u5B57\u88685",
              zh_tw: "\u8B58\u5B57\u93365",
            },
            words: [
              { chinese: "\u873B\u8713", pinyin: "q\u012Bng't\u00EDng" },
              { chinese: "\u8FF7", pinyin: "m\u00ED" },
              { chinese: "\u85CF", pinyin: "c\u00E1ng" },
              { chinese: "\u9020", pinyin: "z\u00E0o" },
              { chinese: "\u8682\u8681", pinyin: "m\u01CE'y\u01D0" },
              { chinese: "\u98DF", pinyin: "sh\u00ED" },
              { chinese: "\u7CAE", pinyin: "li\u00E1ng" },
              {
                chinese: "\u8718\u86DB\u7F51",
                pinyin: "zh\u012B'zh\u016B'w\u01CEng",
              },
              { chinese: "\u5706", pinyin: "yu\u00E1n" },
              { chinese: "\u4E25\u5BD2", pinyin: "y\u00E1n'h\u00E1n" },
              { chinese: "\u9177\u6691", pinyin: "k\u00F9'sh\u01D4" },
              { chinese: "\u51C9", pinyin: "li\u00E1ng" },
              { chinese: "\u6668", pinyin: "ch\u00E9n" },
              { chinese: "\u7EC6", pinyin: "x\u00EC" },
              { chinese: "\u671D\u971E", pinyin: "zh\u0101o'xi\u00E1" },
              { chinese: "\u5915", pinyin: "x\u012B" },
              { chinese: "\u6768", pinyin: "y\u00E1ng" },
              { chinese: "\u64CD\u573A", pinyin: "c\u0101o'ch\u01CEng" },
              { chinese: "\u62D4", pinyin: "b\u00E1" },
              { chinese: "\u62CD", pinyin: "p\u0101i" },
              { chinese: "\u8DD1", pinyin: "p\u01CEo" },
              { chinese: "\u8E22", pinyin: "t\u012B" },
              { chinese: "\u94C3", pinyin: "l\u00EDng" },
              { chinese: "\u70ED\u95F9", pinyin: "r\u00E8'nao" },
              { chinese: "\u953B\u70BC", pinyin: "du\u00E0n'li\u00E0n" },
              { chinese: "\u4F53", pinyin: "t\u01D0" },
              { chinese: "\u4E4B", pinyin: "zh\u012B" },
              { chinese: "\u521D", pinyin: "ch\u016B" },
              { chinese: "\u6027", pinyin: "x\u00ECng" },
              { chinese: "\u5584", pinyin: "sh\u00E0n" },
              { chinese: "\u4E60", pinyin: "x\u00ED" },
              { chinese: "\u6559", pinyin: "ji\u00E0o" },
              { chinese: "\u8FC1", pinyin: "qi\u0101n" },
              { chinese: "\u8D35", pinyin: "gu\u00EC" },
              { chinese: "\u4E13", pinyin: "zhu\u0101n" },
              { chinese: "\u5E7C", pinyin: "y\u00F2u" },
              { chinese: "\u7389\u5668", pinyin: "y\u00F9'q\u00EC" },
              { chinese: "\u4E49", pinyin: "y\u00EC" },
              { chinese: "\u996D", pinyin: "f\u00E0n" },
              { chinese: "\u80FD", pinyin: "n\u00E9ng" },
              { chinese: "\u9971", pinyin: "b\u01CEo" },
              { chinese: "\u8336", pinyin: "ch\u00E1" },
              { chinese: "\u6CE1", pinyin: "p\u00E0o" },
              { chinese: "\u8F7B", pinyin: "q\u012Bng" },
              { chinese: "\u97AD\u70AE", pinyin: "bi\u0101n'p\u00E0o" },
            ],
          },
          {
            names: {
              en: "Literacy 6",
              zh_cn: "\u8BC6\u5B57\u88686",
              zh_tw: "\u8B58\u5B57\u93366",
            },
            words: [
              { chinese: "\u9996", pinyin: "sh\u01D2u" },
              { chinese: "\u8E2A\u8FF9", pinyin: "z\u014Dng'j\u00EC" },
              { chinese: "\u6D6E\u840D", pinyin: "f\u00FA'p\u00EDng" },
              { chinese: "\u6CC9\u6D41", pinyin: "qu\u00E1n'li\u00FA" },
              { chinese: "\u7231", pinyin: "\u00E0i" },
              { chinese: "\u67D4", pinyin: "r\u00F3u" },
              { chinese: "\u8377", pinyin: "h\u00E9" },
              { chinese: "\u9732", pinyin: "l\u00F9" },
              { chinese: "\u89D2", pinyin: "ji\u01CEo" },
              { chinese: "\u73E0", pinyin: "zh\u016B" },
              { chinese: "\u6447", pinyin: "y\u00E1o" },
              { chinese: "\u8EBA", pinyin: "t\u01CEng" },
              { chinese: "\u6676", pinyin: "j\u012Bng" },
              { chinese: "\u505C\u673A", pinyin: "t\u00EDng'j\u012B" },
              { chinese: "\u5C55", pinyin: "zh\u01CEn" },
              { chinese: "\u900F", pinyin: "t\u00F2u" },
              { chinese: "\u7FC5\u8180", pinyin: "ch\u00EC'b\u01CEng" },
              { chinese: "\u5531", pinyin: "ch\u00E0ng" },
              { chinese: "\u6735", pinyin: "du\u01D2" },
              { chinese: "\u8170", pinyin: "y\u0101o" },
              { chinese: "\u5761", pinyin: "p\u014D" },
              { chinese: "\u6C89", pinyin: "ch\u00E9n" },
              { chinese: "\u4F38", pinyin: "sh\u0113n" },
              { chinese: "\u6F6E\u6E7F", pinyin: "ch\u00E1o'sh\u012B" },
              { chinese: "\u5462", pinyin: "ne" },
              { chinese: "\u7A7A", pinyin: "k\u014Dng" },
              { chinese: "\u95F7", pinyin: "m\u00E8n" },
              { chinese: "\u6D88\u606F", pinyin: "xi\u0101o'xi" },
              { chinese: "\u642C", pinyin: "b\u0101n" },
              { chinese: "\u54CD", pinyin: "xi\u01CEng" },
              { chinese: "\u68CD", pinyin: "g\u00F9n" },
              { chinese: "\u6C64", pinyin: "t\u0101ng" },
              { chinese: "\u6247", pinyin: "sh\u00E0n" },
              { chinese: "\u6905", pinyin: "y\u01D0" },
              { chinese: "\u8424", pinyin: "y\u00EDng" },
              { chinese: "\u7275", pinyin: "qi\u0101n" },
              { chinese: "\u7EC7", pinyin: "zh\u012B" },
              { chinese: "\u6597", pinyin: "d\u00F2u" },
            ],
          },
          {
            names: {
              en: "Literacy 7",
              zh_cn: "\u8BC6\u5B57\u88687",
              zh_tw: "\u8B58\u5B57\u93367",
            },
            words: [
              { chinese: "\u5177", pinyin: "j\u00F9" },
              { chinese: "\u6B21", pinyin: "c\u00EC" },
              { chinese: "\u4E22", pinyin: "di\u016B" },
              { chinese: "\u54EA", pinyin: "n\u01CE" },
              { chinese: "\u65B0", pinyin: "x\u012Bn" },
              { chinese: "\u6BCF", pinyin: "m\u011Bi" },
              { chinese: "\u5E73", pinyin: "p\u00EDng" },
              { chinese: "\u5979", pinyin: "t\u0101" },
              { chinese: "\u4E9B", pinyin: "xi\u0113" },
              { chinese: "\u4ED4", pinyin: "z\u01CEi" },
              {
                chinese: "\u68C0\u67E5\u6240",
                pinyin: "ji\u01CEn'ch\u00E1'su\u01D2",
              },
              { chinese: "\u949F", pinyin: "zh\u014Dng" },
              { chinese: "\u4E01", pinyin: "d\u012Bng" },
              { chinese: "\u5143", pinyin: "yu\u00E1n" },
              { chinese: "\u8FDF", pinyin: "ch\u00ED" },
              { chinese: "\u6D17", pinyin: "x\u01D0" },
              { chinese: "\u80CC", pinyin: "b\u00E8i" },
              { chinese: "\u521A", pinyin: "g\u0101ng" },
              { chinese: "\u5171", pinyin: "g\u00F2ng" },
              { chinese: "\u6C7D", pinyin: "q\u00EC" },
              { chinese: "\u51B3\u5B9A", pinyin: "ju\u00E9'd\u00ECng" },
              { chinese: "\u5DF2\u7ECF", pinyin: "y\u01D0'j\u012Bng" },
              { chinese: "\u7269", pinyin: "w\u00F9" },
              { chinese: "\u864E", pinyin: "h\u01D4" },
              { chinese: "\u718A", pinyin: "xi\u00F3ng" },
              { chinese: "\u901A", pinyin: "t\u014Dng" },
              { chinese: "\u6CE8\u610F", pinyin: "zh\u00F9'y\u00EC" },
              { chinese: "\u904D", pinyin: "bi\u00E0n" },
              { chinese: "\u767E", pinyin: "b\u01CEi" },
              { chinese: "\u820C", pinyin: "sh\u00E9" },
              { chinese: "\u9B3C\u8138", pinyin: "gu\u01D0'li\u01CEn" },
              { chinese: "\u51C6", pinyin: "zh\u01D4n" },
              { chinese: "\u7B2C", pinyin: "d\u00EC" },
              { chinese: "\u7334", pinyin: "h\u00F3u" },
              { chinese: "\u7ED3", pinyin: "ji\u00E9" },
              { chinese: "\u63B0", pinyin: "b\u0101i" },
              { chinese: "\u625B", pinyin: "k\u00E1ng" },
              { chinese: "\u6EE1", pinyin: "m\u01CEn" },
              { chinese: "\u6254", pinyin: "r\u0113ng" },
              { chinese: "\u6458", pinyin: "zh\u0101i" },
              { chinese: "\u6367", pinyin: "p\u011Bng" },
              { chinese: "\u74DC", pinyin: "gu\u0101" },
              { chinese: "\u62B1", pinyin: "b\u00E0o" },
              { chinese: "\u8E66", pinyin: "b\u00E8ng" },
              { chinese: "\u8FFD", pinyin: "zhu\u012B" },
              { chinese: "\u5435", pinyin: "ch\u01CEo" },
              { chinese: "\u80D6", pinyin: "p\u00E0ng" },
              { chinese: "\u5C81", pinyin: "su\u00EC" },
              { chinese: "\u73B0", pinyin: "xi\u00E0n" },
              { chinese: "\u7968", pinyin: "pi\u00E0o" },
              { chinese: "\u4EA4", pinyin: "ji\u0101o" },
              { chinese: "\u5F13", pinyin: "g\u014Dng" },
              { chinese: "\u7518", pinyin: "g\u0101n" },
            ],
          },
          {
            names: {
              en: "Literacy 8",
              zh_cn: "\u8BC6\u5B57\u88688",
              zh_tw: "\u8B58\u5B57\u93368",
            },
            words: [
              { chinese: "\u68C9", pinyin: "mi\u00E1n" },
              { chinese: "\u5A18", pinyin: "ni\u00E1ng" },
              { chinese: "\u6CBB", pinyin: "zh\u00EC" },
              { chinese: "\u71D5", pinyin: "y\u00E0n" },
              { chinese: "\u522B", pinyin: "bi\u00E9" },
              { chinese: "\u5E72", pinyin: "g\u00E0n" },
              { chinese: "\u7136", pinyin: "r\u00E1n" },
              { chinese: "\u5947", pinyin: "q\u00ED" },
              { chinese: "\u9897", pinyin: "k\u0113" },
              { chinese: "\u74E2", pinyin: "pi\u00E1o" },
              { chinese: "\u78A7", pinyin: "b\u00EC" },
              { chinese: "\u5410", pinyin: "t\u01D4" },
              { chinese: "\u5566", pinyin: "l\u0101" },
              { chinese: "\u5495\u549A", pinyin: "g\u016B'd\u014Dng" },
              { chinese: "\u719F", pinyin: "sh\u00FA" },
              { chinese: "\u6389", pinyin: "di\u00E0o" },
              { chinese: "\u5413", pinyin: "xi\u00E0" },
              { chinese: "\u7F8A", pinyin: "y\u00E1ng" },
              { chinese: "\u9E7F", pinyin: "l\u00F9" },
              { chinese: "\u9003\u547D", pinyin: "t\u00E1o'm\u00ECng" },
              { chinese: "\u8C61", pinyin: "xi\u00E0ng" },
              { chinese: "\u91CE", pinyin: "y\u011B" },
              { chinese: "\u62E6", pinyin: "l\u00E1n" },
              { chinese: "\u9886", pinyin: "l\u01D0ng" },
              { chinese: "\u58C1", pinyin: "b\u00EC" },
              { chinese: "\u5899", pinyin: "qi\u00E1ng" },
              { chinese: "\u868A", pinyin: "w\u00E9n" },
              { chinese: "\u54AC", pinyin: "y\u01CEo" },
              { chinese: "\u65AD", pinyin: "du\u00E0n" },
              { chinese: "\u60A8", pinyin: "n\u00EDn" },
              { chinese: "\u62E8", pinyin: "b\u014D" },
              { chinese: "\u7529", pinyin: "shu\u01CEi" },
              { chinese: "\u8D76", pinyin: "g\u01CEn" },
              { chinese: "\u623F", pinyin: "f\u00E1ng" },
              { chinese: "\u50BB", pinyin: "sh\u01CE" },
              { chinese: "\u8F6C", pinyin: "zhu\u01CEn" },
              { chinese: "\u536B", pinyin: "w\u00E8i" },
              { chinese: "\u5237", pinyin: "shu\u0101" },
              { chinese: "\u68B3", pinyin: "sh\u016B" },
              { chinese: "\u5DFE", pinyin: "j\u012Bn" },
              { chinese: "\u64E6", pinyin: "c\u0101" },
              { chinese: "\u7682", pinyin: "z\u00E0o" },
              { chinese: "\u6FA1", pinyin: "z\u01CEo" },
              { chinese: "\u76C6", pinyin: "p\u00E9n" },
            ],
          },
          {
            names: {
              en: "Writing 1",
              zh_cn: "\u5199\u5B57\u88681",
              zh_tw: "\u5BEB\u5B57\u93361",
            },
            words: [
              { chinese: "\u6625", pinyin: "ch\u016Bn" },
              { chinese: "\u51AC", pinyin: "d\u014Dng" },
              { chinese: "\u98CE\u96EA", pinyin: "f\u0113ng'xu\u011B" },
              { chinese: "\u82B1", pinyin: "hu\u0101" },
              { chinese: "\u98DE", pinyin: "f\u0113i" },
              { chinese: "\u5165", pinyin: "r\u00F9" },
              { chinese: "\u59D3", pinyin: "x\u00ECng" },
              { chinese: "\u4EC0\u4E48", pinyin: "sh\u00E9n'me" },
              { chinese: "\u53CC", pinyin: "shu\u0101ng" },
              { chinese: "\u56FD\u738B", pinyin: "gu\u00F3'w\u00E1ng" },
              { chinese: "\u65B9", pinyin: "f\u0101ng" },
              { chinese: "\u9752", pinyin: "q\u012Bng" },
              { chinese: "\u6E05\u6C14", pinyin: "q\u012Bng'q\u00EC" },
              { chinese: "\u6674", pinyin: "q\u00EDng" },
              { chinese: "\u60C5", pinyin: "q\u00EDng" },
              { chinese: "\u8BF7", pinyin: "q\u01D0ng" },
              { chinese: "\u751F", pinyin: "sh\u0113ng" },
              { chinese: "\u5B57", pinyin: "z\u00EC" },
              { chinese: "\u5DE6\u53F3", pinyin: "zu\u01D2'y\u00F2u" },
              { chinese: "\u7EA2", pinyin: "h\u00F3ng" },
              { chinese: "\u65F6", pinyin: "sh\u00ED" },
              { chinese: "\u52A8", pinyin: "d\u00F2ng" },
              { chinese: "\u4E07", pinyin: "w\u00E0n" },
            ],
          },
          {
            names: {
              en: "Writing 2",
              zh_cn: "\u5199\u5B57\u88682",
              zh_tw: "\u5BEB\u5B57\u93362",
            },
            words: [
              { chinese: "\u5403", pinyin: "ch\u012B" },
              { chinese: "\u53EB", pinyin: "ji\u00E0o" },
              { chinese: "\u4E3B", pinyin: "zh\u01D4" },
              { chinese: "\u6C5F", pinyin: "ji\u0101ng" },
              { chinese: "\u4F4F", pinyin: "zh\u00F9" },
              { chinese: "\u6CA1", pinyin: "m\u00E9i" },
              { chinese: "\u4EE5", pinyin: "y\u01D0" },
              { chinese: "\u591A", pinyin: "du\u014D" },
              { chinese: "\u4F1A", pinyin: "hu\u00EC" },
              { chinese: "\u8D70", pinyin: "z\u01D2u" },
              { chinese: "\u5317\u4EAC", pinyin: "b\u011Bi'j\u012Bng" },
              { chinese: "\u5E7F", pinyin: "gu\u01CEng" },
              { chinese: "\u8FC7", pinyin: "gu\u00F2" },
              { chinese: "\u5404\u79CD", pinyin: "g\u00E8'zh\u01D2ng" },
              { chinese: "\u6837", pinyin: "y\u00E0ng" },
              { chinese: "\u4F19\u4F34", pinyin: "hu\u01D2'b\u00E0n" },
              { chinese: "\u8FD9", pinyin: "zh\u00E8" },
              { chinese: "\u592A\u9633", pinyin: "t\u00E0i'y\u00E1ng" },
              { chinese: "\u6821", pinyin: "xi\u00E0o" },
              { chinese: "\u91D1\u79CB", pinyin: "j\u012Bn'qi\u016B" },
              { chinese: "\u56E0\u4E3A", pinyin: "y\u012Bn'w\u00E9i" },
            ],
          },
          {
            names: {
              en: "Writing 3",
              zh_cn: "\u5199\u5B57\u88683",
              zh_tw: "\u5BEB\u5B57\u93363",
            },
            words: [
              { chinese: "\u4ED6", pinyin: "t\u0101" },
              { chinese: "\u5730", pinyin: "d\u00EC" },
              { chinese: "\u6CB3", pinyin: "h\u00E9" },
              { chinese: "\u8BF4", pinyin: "shu\u014D" },
              { chinese: "\u4E5F", pinyin: "y\u011B" },
              { chinese: "\u542C", pinyin: "t\u012Bng" },
              { chinese: "\u54E5", pinyin: "g\u0113" },
              { chinese: "\u5355", pinyin: "d\u0101n" },
              { chinese: "\u5C45", pinyin: "j\u016B" },
              { chinese: "\u62DB\u547C", pinyin: "zh\u0101o'hu" },
              { chinese: "\u5FEB\u4E50", pinyin: "ku\u00E0i'l\u00E8" },
              { chinese: "\u73A9", pinyin: "w\u00E1n" },
              { chinese: "\u5F88", pinyin: "h\u011Bn" },
              { chinese: "\u5F53", pinyin: "d\u0101ng" },
              { chinese: "\u97F3", pinyin: "y\u012Bn" },
              { chinese: "\u8BB2", pinyin: "ji\u01CEng" },
              { chinese: "\u884C", pinyin: "h\u00E1ng" },
              { chinese: "\u8BB8", pinyin: "x\u01D4" },
            ],
          },
          {
            names: {
              en: "Writing 4",
              zh_cn: "\u5199\u5B57\u88684",
              zh_tw: "\u5BEB\u5B57\u93364",
            },
            words: [
              { chinese: "\u601D", pinyin: "s\u012B" },
              { chinese: "\u5E8A", pinyin: "chu\u00E1ng" },
              { chinese: "\u524D", pinyin: "qi\u00E1n" },
              { chinese: "\u5149", pinyin: "gu\u0101ng" },
              { chinese: "\u4F4E", pinyin: "d\u012B" },
              { chinese: "\u6545\u4E61", pinyin: "g\u00F9'xi\u0101ng" },
              { chinese: "\u8272", pinyin: "s\u00E8" },
              { chinese: "\u5916", pinyin: "w\u00E0i" },
              { chinese: "\u770B", pinyin: "k\u00E0n" },
              { chinese: "\u7238", pinyin: "b\u00E0" },
              { chinese: "\u665A", pinyin: "w\u01CEn" },
              { chinese: "\u7B11", pinyin: "xi\u00E0o" },
              { chinese: "\u518D", pinyin: "z\u00E0i" },
              { chinese: "\u5348", pinyin: "w\u01D4" },
              { chinese: "\u8282", pinyin: "ji\u00E9" },
              { chinese: "\u53F6", pinyin: "y\u00E8" },
              { chinese: "\u7C73", pinyin: "m\u01D0" },
              { chinese: "\u771F", pinyin: "zh\u0113n" },
              { chinese: "\u5206", pinyin: "f\u0113n" },
              { chinese: "\u8C46", pinyin: "d\u00F2u" },
              { chinese: "\u90A3", pinyin: "n\u00E0" },
              { chinese: "\u770B\u5230", pinyin: "k\u00E0n'd\u00E0o" },
              { chinese: "\u9AD8\u5174", pinyin: "g\u0101o'x\u00ECng" },
              { chinese: "\u5343", pinyin: "qi\u0101n" },
              { chinese: "\u6210", pinyin: "ch\u00E9ng" },
            ],
          },
          {
            names: {
              en: "Writing 5",
              zh_cn: "\u5199\u5B57\u88685",
              zh_tw: "\u5BEB\u5B57\u93365",
            },
            words: [
              { chinese: "\u95F4", pinyin: "ji\u0101n" },
              { chinese: "\u8FF7", pinyin: "m\u00ED" },
              { chinese: "\u9020", pinyin: "z\u00E0o" },
              { chinese: "\u8FD0", pinyin: "y\u00F9n" },
              { chinese: "\u6C60", pinyin: "ch\u00ED" },
              { chinese: "\u6B22", pinyin: "hu\u0101n" },
              { chinese: "\u7F51", pinyin: "w\u01CEng" },
              { chinese: "\u53E4", pinyin: "g\u01D4" },
              { chinese: "\u51C9", pinyin: "li\u00E1ng" },
              { chinese: "\u7EC6", pinyin: "x\u00EC" },
              { chinese: "\u5915", pinyin: "x\u012B" },
              { chinese: "\u674E", pinyin: "l\u01D0" },
              { chinese: "\u8BED", pinyin: "y\u01D4" },
              { chinese: "\u9999", pinyin: "xi\u0101ng" },
              { chinese: "\u6253", pinyin: "d\u01CE" },
              { chinese: "\u62CD", pinyin: "p\u0101i" },
              { chinese: "\u8DD1", pinyin: "p\u01CEo" },
              { chinese: "\u8DB3", pinyin: "z\u00FA" },
              { chinese: "\u58F0", pinyin: "sh\u0113ng" },
              { chinese: "\u8EAB\u4F53", pinyin: "sh\u0113n't\u01D0" },
              { chinese: "\u4E4B", pinyin: "zh\u012B" },
              { chinese: "\u76F8\u8FD1", pinyin: "xi\u0101ng'j\u00ECn" },
              { chinese: "\u4E60", pinyin: "x\u00ED" },
              { chinese: "\u8FDC", pinyin: "yu\u01CEn" },
              { chinese: "\u7389", pinyin: "y\u00F9" },
              { chinese: "\u4E49", pinyin: "y\u00EC" },
            ],
          },
          {
            names: {
              en: "Writing 6",
              zh_cn: "\u5199\u5B57\u88686",
              zh_tw: "\u5BEB\u5B57\u93366",
            },
            words: [
              { chinese: "\u9996", pinyin: "sh\u01D2u" },
              { chinese: "\u91C7", pinyin: "c\u01CEi" },
              { chinese: "\u65E0", pinyin: "w\u00FA" },
              { chinese: "\u6811", pinyin: "sh\u00F9" },
              { chinese: "\u7231", pinyin: "\u00E0i" },
              { chinese: "\u5C16", pinyin: "ji\u0101n" },
              { chinese: "\u89D2", pinyin: "ji\u01CEo" },
              { chinese: "\u4EAE", pinyin: "li\u00E0ng" },
              { chinese: "\u673A\u53F0", pinyin: "j\u012B't\u00E1i" },
              { chinese: "\u653E", pinyin: "f\u00E0ng" },
              { chinese: "\u9C7C", pinyin: "y\u00FA" },
              { chinese: "\u6735", pinyin: "du\u01D2" },
              { chinese: "\u7F8E", pinyin: "m\u011Bi" },
              { chinese: "\u76F4", pinyin: "zh\u00ED" },
              { chinese: "\u5440", pinyin: "ya" },
              { chinese: "\u8FB9", pinyin: "bi\u0101n" },
              { chinese: "\u5462", pinyin: "ne" },
              { chinese: "\u5417", pinyin: "ma" },
              { chinese: "\u5427", pinyin: "ba" },
              { chinese: "\u52A0", pinyin: "ji\u0101" },
            ],
          },
          {
            names: {
              en: "Writing 7",
              zh_cn: "\u5199\u5B57\u88687",
              zh_tw: "\u5BEB\u5B57\u93367",
            },
            words: [
              { chinese: "\u6587", pinyin: "w\u00E9n" },
              { chinese: "\u6B21", pinyin: "c\u00EC" },
              { chinese: "\u627E", pinyin: "zh\u01CEo" },
              { chinese: "\u5E73", pinyin: "p\u00EDng" },
              { chinese: "\u529E", pinyin: "b\u00E0n" },
              { chinese: "\u8BA9", pinyin: "r\u00E0ng" },
              { chinese: "\u5305", pinyin: "b\u0101o" },
              { chinese: "\u949F", pinyin: "zh\u014Dng" },
              { chinese: "\u4E01", pinyin: "d\u012Bng" },
              { chinese: "\u5143", pinyin: "yu\u00E1n" },
              { chinese: "\u5171", pinyin: "g\u00F2ng" },
              { chinese: "\u5DF2\u7ECF", pinyin: "y\u01D0'j\u012Bng" },
              { chinese: "\u5750", pinyin: "zu\u00F2" },
              { chinese: "\u8981", pinyin: "y\u00E0o" },
              { chinese: "\u8FDE", pinyin: "li\u00E1n" },
              { chinese: "\u767E", pinyin: "b\u01CEi" },
              { chinese: "\u8FD8", pinyin: "h\u00E1i" },
              { chinese: "\u820C", pinyin: "sh\u00E9" },
              { chinese: "\u70B9", pinyin: "di\u01CEn" },
              { chinese: "\u5757", pinyin: "ku\u00E0i" },
              { chinese: "\u975E", pinyin: "f\u0113i" },
              { chinese: "\u5E38", pinyin: "ch\u00E1ng" },
              { chinese: "\u5F80", pinyin: "w\u01CEng" },
              { chinese: "\u74DC", pinyin: "gu\u0101" },
              { chinese: "\u8FDB", pinyin: "j\u00ECn" },
              { chinese: "\u7A7A", pinyin: "k\u014Dng" },
            ],
          },
          {
            names: {
              en: "Writing 8",
              zh_cn: "\u5199\u5B57\u88688",
              zh_tw: "\u5BEB\u5B57\u93368",
            },
            words: [
              { chinese: "\u75C5", pinyin: "b\u00ECng" },
              { chinese: "\u533B", pinyin: "y\u012B" },
              { chinese: "\u522B", pinyin: "bi\u00E9" },
              { chinese: "\u5E72", pinyin: "g\u00E0n" },
              { chinese: "\u5947", pinyin: "q\u00ED" },
              { chinese: "\u4E03", pinyin: "q\u012B" },
              { chinese: "\u661F", pinyin: "x\u012Bng" },
              { chinese: "\u5413", pinyin: "xi\u00E0" },
              { chinese: "\u6015", pinyin: "p\u00E0" },
              { chinese: "\u8DDF", pinyin: "g\u0113n" },
              { chinese: "\u5BB6", pinyin: "ji\u0101" },
              { chinese: "\u7F8A", pinyin: "y\u00E1ng" },
              { chinese: "\u8C61", pinyin: "xi\u00E0ng" },
              { chinese: "\u90FD", pinyin: "d\u014Du" },
              { chinese: "\u6349", pinyin: "zhu\u014D" },
              { chinese: "\u6761", pinyin: "ti\u00E1o" },
              { chinese: "\u722C", pinyin: "p\u00E1" },
              { chinese: "\u59D0", pinyin: "ji\u011B" },
              { chinese: "\u60A8", pinyin: "n\u00EDn" },
              { chinese: "\u8349", pinyin: "c\u01CEo" },
              { chinese: "\u623F", pinyin: "f\u00E1ng" },
            ],
          },
        ],
      });
    };
    _this.appendCopybookOfGrade2Term1 = function () {
      var usableCopybooksPeopleEducationEdition =
        _this.usableCopybooksPeopleEducationEdition;
      usableCopybooksPeopleEducationEdition.push({
        termI18n: {
          en: "K2T1",
          zh_cn: "\u4E8C\u5E74\u7EA7\u4E0A",
          zh_tw: "\u4E8C\u5E74\u7D1A\u4E0A",
        },
        units: [
          {
            names: {
              en: "Literacy 1",
              zh_cn: "\u8BC6\u5B57\u88681",
              zh_tw: "\u8B58\u5B57\u93361",
            },
            words: [
              {
                chinese: "\u5858",
                pinyin: "t\u00E1ng",
              },
              {
                chinese: "\u8111\u888B",
                pinyin: "n\u01CEo'd\u00E0i",
              },
              {
                chinese: "\u7070",
                pinyin: "hu\u012B",
              },
              {
                chinese: "\u54C7",
                pinyin: "wa",
              },
              {
                chinese: "\u6559",
                pinyin: "ji\u0101o",
              },
              {
                chinese: "\u6355",
                pinyin: "b\u01D4",
              },
              {
                chinese: "\u8FCE",
                pinyin: "y\u00EDng",
              },
              {
                chinese: "\u963F\u59E8",
                pinyin: "\u0101'y\u00ED",
              },
              {
                chinese: "\u5BBD",
                pinyin: "ku\u0101n",
              },
              {
                chinese: "\u9F9F",
                pinyin: "gu\u012B",
              },
              {
                chinese: "\u9876",
                pinyin: "d\u01D0ng",
              },
              {
                chinese: "\u62AB",
                pinyin: "p\u012B",
              },
              {
                chinese: "\u9F13",
                pinyin: "g\u01D4",
              },
              {
                chinese: "\u6652",
                pinyin: "sh\u00E0i",
              },
              {
                chinese: "\u6781",
                pinyin: "j\u00ED",
              },
              {
                chinese: "\u508D",
                pinyin: "b\u00E0ng",
              },
              {
                chinese: "\u8D8A",
                pinyin: "yu\u00E8",
              },
              {
                chinese: "\u6EF4",
                pinyin: "d\u012B",
              },
              {
                chinese: "\u6EAA",
                pinyin: "x\u012B",
              },
              {
                chinese: "\u5954",
                pinyin: "b\u0113n",
              },
              {
                chinese: "\u6D0B",
                pinyin: "y\u00E1ng",
              },
              {
                chinese: "\u574F",
                pinyin: "hu\u00E0i",
              },
              {
                chinese: "\u6DF9\u6CA1",
                pinyin: "y\u0101n'm\u00F2",
              },
              {
                chinese: "\u51B2\u6BC1",
                pinyin: "ch\u014Dng'hu\u01D0",
              },
              {
                chinese: "\u5C4B",
                pinyin: "w\u016B",
              },
              {
                chinese: "\u707E",
                pinyin: "z\u0101i",
              },
              {
                chinese: "\u731C",
                pinyin: "c\u0101i",
              },
              {
                chinese: "\u690D",
                pinyin: "zh\u00ED",
              },
              {
                chinese: "\u5982",
                pinyin: "r\u00FA",
              },
              {
                chinese: "\u4E3A",
                pinyin: "w\u00E9i",
              },
              {
                chinese: "\u65C5",
                pinyin: "l\u01DA",
              },
              {
                chinese: "\u5907",
                pinyin: "b\u00E8i",
              },
              {
                chinese: "\u7EB7",
                pinyin: "f\u0113n",
              },
              {
                chinese: "\u523A",
                pinyin: "c\u00EC",
              },
              {
                chinese: "\u5E95",
                pinyin: "d\u01D0",
              },
              {
                chinese: "\u556A",
                pinyin: "p\u0101",
              },
              {
                chinese: "\u70B8",
                pinyin: "zh\u00E0",
              },
              {
                chinese: "\u79BB",
                pinyin: "l\u00ED",
              },
              {
                chinese: "\u8BC6",
                pinyin: "sh\u00ED",
              },
              {
                chinese: "\u7C97",
                pinyin: "c\u016B",
              },
              {
                chinese: "\u5F97",
                pinyin: "d\u00E9",
              },
              {
                chinese: "\u5957",
                pinyin: "t\u00E0o",
              },
              {
                chinese: "\u5E3D",
                pinyin: "m\u00E0o",
              },
              {
                chinese: "\u767B",
                pinyin: "d\u0113ng",
              },
              {
                chinese: "\u978B",
                pinyin: "xi\u00E9",
              },
              {
                chinese: "\u88E4",
                pinyin: "k\u00F9",
              },
              {
                chinese: "\u56FE",
                pinyin: "t\u00FA",
              },
              {
                chinese: "\u58F6",
                pinyin: "h\u00FA",
              },
              {
                chinese: "\u5E10\u7BF7",
                pinyin: "zh\u00E0ng'p\u00E9ng",
              },
              {
                chinese: "\u6307\u9488",
                pinyin: "zh\u01D0'zh\u0113n",
              },
            ],
          },
          {
            names: {
              en: "Literacy 2",
              zh_cn: "\u8BC6\u5B57\u88682",
              zh_tw: "\u8B58\u5B57\u93362",
            },
            words: [
              {
                chinese: "\u5E06",
                pinyin: "f\u0101n",
              },
              {
                chinese: "\u8258",
                pinyin: "s\u014Du",
              },
              {
                chinese: "\u519B\u8230",
                pinyin: "j\u016Bn'ji\u00E0n",
              },
              {
                chinese: "\u7A3B",
                pinyin: "d\u00E0o",
              },
              {
                chinese: "\u56ED",
                pinyin: "yu\u00E1n",
              },
              {
                chinese: "\u7FE0",
                pinyin: "cu\u00EC",
              },
              {
                chinese: "\u961F",
                pinyin: "du\u00EC",
              },
              {
                chinese: "\u94DC\u53F7",
                pinyin: "t\u00F3ng'h\u00E0o",
              },
              {
                chinese: "\u68A7\u6850",
                pinyin: "w\u00FA't\u00F3ng",
              },
              {
                chinese: "\u638C",
                pinyin: "zh\u01CEng",
              },
              {
                chinese: "\u67AB",
                pinyin: "f\u0113ng",
              },
              {
                chinese: "\u677E\u67CF",
                pinyin: "s\u014Dng'b\u01CEi",
              },
              {
                chinese: "\u88C5",
                pinyin: "zhu\u0101ng",
              },
              {
                chinese: "\u6866",
                pinyin: "hu\u00E0",
              },
              {
                chinese: "\u8010",
                pinyin: "n\u00E0i",
              },
              {
                chinese: "\u5B88",
                pinyin: "sh\u01D2u",
              },
              {
                chinese: "\u7586",
                pinyin: "ji\u0101ng",
              },
              {
                chinese: "\u94F6",
                pinyin: "y\u00EDn",
              },
              {
                chinese: "\u6749",
                pinyin: "sh\u0101n",
              },
              {
                chinese: "\u5316",
                pinyin: "hu\u00E0",
              },
              {
                chinese: "\u6842",
                pinyin: "gu\u00EC",
              },
              {
                chinese: "\u4E16\u754C",
                pinyin: "sh\u00EC'ji\u00E8",
              },
              {
                chinese: "\u5B54\u96C0",
                pinyin: "k\u01D2ng'qu\u00E8",
              },
              {
                chinese: "\u9526",
                pinyin: "j\u01D0n",
              },
              {
                chinese: "\u96C4\u9E70",
                pinyin: "xi\u00F3ng'y\u012Bng",
              },
              {
                chinese: "\u7FD4",
                pinyin: "xi\u00E1ng",
              },
              {
                chinese: "\u96C1",
                pinyin: "y\u00E0n",
              },
              {
                chinese: "\u4E1B",
                pinyin: "c\u00F3ng",
              },
              {
                chinese: "\u6DF1",
                pinyin: "sh\u0113n",
              },
              {
                chinese: "\u731B",
                pinyin: "m\u011Bng",
              },
              {
                chinese: "\u7075",
                pinyin: "l\u00EDng",
              },
              {
                chinese: "\u4F11",
                pinyin: "xi\u016B",
              },
              {
                chinese: "\u5B63",
                pinyin: "j\u00EC",
              },
              {
                chinese: "\u8774\u8776",
                pinyin: "h\u00FA'di\u00E9",
              },
              {
                chinese: "\u9EA6\u82D7",
                pinyin: "m\u00E0i'mi\u00E1o",
              },
              {
                chinese: "\u6851",
                pinyin: "s\u0101ng",
              },
              {
                chinese: "\u80A5",
                pinyin: "f\u00E9i",
              },
              {
                chinese: "\u519C",
                pinyin: "n\u00F3ng",
              },
              {
                chinese: "\u5F52",
                pinyin: "gu\u012B",
              },
              {
                chinese: "\u6234",
                pinyin: "d\u00E0i",
              },
              {
                chinese: "\u573A",
                pinyin: "ch\u00E1ng ",
              },
              {
                chinese: "\u8C37\u7C92",
                pinyin: "g\u01D4'l\u00EC",
              },
              {
                chinese: "\u867D",
                pinyin: "su\u012B",
              },
              {
                chinese: "\u8F9B\u82E6",
                pinyin: "x\u012Bn'k\u01D4",
              },
              {
                chinese: "\u4E86",
                pinyin: "li\u01CEo",
              },
              {
                chinese: "\u8461\u8404",
                pinyin: "p\u00FA't\u00E1o",
              },
              {
                chinese: "\u7D2B",
                pinyin: "z\u01D0",
              },
              {
                chinese: "\u72D0\u72F8",
                pinyin: "h\u00FA'l\u00ED",
              },
              {
                chinese: "\u7B28",
                pinyin: "b\u00E8n",
              },
              {
                chinese: "\u9178",
                pinyin: "su\u0101n",
              },
            ],
          },
          {
            names: {
              en: "Literacy 3",
              zh_cn: "\u8BC6\u5B57\u88683",
              zh_tw: "\u8B58\u5B57\u93363",
            },
            words: [
              {
                chinese: "\u66F9",
                pinyin: "c\u00E1o",
              },
              {
                chinese: "\u79F0",
                pinyin: "ch\u0113ng",
              },
              {
                chinese: "\u5458",
                pinyin: "yu\u00E1n",
              },
              {
                chinese: "\u6839",
                pinyin: "g\u0113n",
              },
              {
                chinese: "\u67F1",
                pinyin: "zh\u00F9",
              },
              {
                chinese: "\u8BAE\u8BBA",
                pinyin: "y\u00EC'l\u00F9n",
              },
              {
                chinese: "\u91CD",
                pinyin: "zh\u00F2ng",
              },
              {
                chinese: "\u6746",
                pinyin: "g\u01CEn",
              },
              {
                chinese: "\u79E4",
                pinyin: "ch\u00E8ng",
              },
              {
                chinese: "\u780D",
                pinyin: "k\u01CEn",
              },
              {
                chinese: "\u7EBF",
                pinyin: "xi\u00E0n",
              },
              {
                chinese: "\u6B62",
                pinyin: "zh\u01D0",
              },
              {
                chinese: "\u91CF",
                pinyin: "li\u00E0ng",
              },
              {
                chinese: "\u73B2",
                pinyin: "l\u00EDng",
              },
              {
                chinese: "\u8BE6",
                pinyin: "xi\u00E1ng",
              },
              {
                chinese: "\u5E45",
                pinyin: "f\u00FA",
              },
              {
                chinese: "\u8BC4\u5956",
                pinyin: "p\u00EDng'ji\u01CEng",
              },
              {
                chinese: "\u50AC",
                pinyin: "cu\u012B",
              },
              {
                chinese: "\u810F",
                pinyin: "z\u0101ng",
              },
              {
                chinese: "\u4F24",
                pinyin: "sh\u0101ng",
              },
              {
                chinese: "\u62A5",
                pinyin: "b\u00E0o",
              },
              {
                chinese: "\u53E6",
                pinyin: "l\u00ECng",
              },
              {
                chinese: "\u53CA",
                pinyin: "j\u00ED",
              },
              {
                chinese: "\u61D2",
                pinyin: "l\u01CEn",
              },
              {
                chinese: "\u5E76",
                pinyin: "b\u00ECng",
              },
              {
                chinese: "\u7CDF",
                pinyin: "z\u0101o",
              },
              {
                chinese: "\u80AF",
                pinyin: "k\u011Bn",
              },
              {
                chinese: "\u5C01",
                pinyin: "f\u0113ng",
              },
              {
                chinese: "\u524A",
                pinyin: "xi\u0101o",
              },
              {
                chinese: "\u9505",
                pinyin: "gu\u014D",
              },
              {
                chinese: "\u671D",
                pinyin: "ch\u00E1o",
              },
              {
                chinese: "\u59CB",
                pinyin: "sh\u01D0",
              },
              {
                chinese: "\u522E",
                pinyin: "gu\u0101",
              },
              {
                chinese: "\u80E1",
                pinyin: "h\u00FA",
              },
              {
                chinese: "\u4FEE",
                pinyin: "xi\u016B",
              },
              {
                chinese: "\u51B7",
                pinyin: "l\u011Bng",
              },
              {
                chinese: "\u80A9",
                pinyin: "ji\u0101n",
              },
              {
                chinese: "\u56E2",
                pinyin: "tu\u00E1n",
              },
              {
                chinese: "\u91CD",
                pinyin: "ch\u00F3ng",
              },
              {
                chinese: "\u5B8C",
                pinyin: "w\u00E1n",
              },
              {
                chinese: "\u5E0C",
                pinyin: "x\u012B",
              },
              {
                chinese: "\u671F",
                pinyin: "q\u012B",
              },
              {
                chinese: "\u7ED3\u675F",
                pinyin: "ji\u00E9'sh\u00F9",
              },
              {
                chinese: "\u9C9C",
                pinyin: "xi\u0101n",
              },
              {
                chinese: "\u54C4",
                pinyin: "h\u01D2ng",
              },
              {
                chinese: "\u5148",
                pinyin: "xi\u0101n",
              },
              {
                chinese: "\u68A6",
                pinyin: "m\u00E8ng",
              },
              {
                chinese: "\u95ED",
                pinyin: "b\u00EC",
              },
              {
                chinese: "\u7D27",
                pinyin: "j\u01D0n",
              },
              {
                chinese: "\u6DA6",
                pinyin: "r\u00F9n",
              },
              {
                chinese: "\u7B49",
                pinyin: "d\u011Bng",
              },
              {
                chinese: "\u7D2F",
                pinyin: "l\u00E8i",
              },
              {
                chinese: "\u5438",
                pinyin: "x\u012B",
              },
              {
                chinese: "\u53D1",
                pinyin: "f\u00E0",
              },
              {
                chinese: "\u7C98",
                pinyin: "zh\u0101n",
              },
              {
                chinese: "\u6C57",
                pinyin: "h\u00E0n",
              },
              {
                chinese: "\u989D",
                pinyin: "\u00E9",
              },
              {
                chinese: "\u6C99",
                pinyin: "sh\u0101",
              },
              {
                chinese: "\u4E4F",
                pinyin: "f\u00E1",
              },
              {
                chinese: "\u5F39\u94A2\u7434",
                pinyin: "t\u00E1n'g\u0101ng'q\u00EDn",
              },
              {
                chinese: "\u7EC3",
                pinyin: "li\u00E0n",
              },
              {
                chinese: "\u634F",
                pinyin: "ni\u0113",
              },
              {
                chinese: "\u6CE5",
                pinyin: "n\u00ED",
              },
              {
                chinese: "\u6EDA",
                pinyin: "g\u01D4n",
              },
              {
                chinese: "\u94C1\u73AF",
                pinyin: "ti\u011B'hu\u00E1n",
              },
              {
                chinese: "\u8361",
                pinyin: "d\u00E0ng",
              },
              {
                chinese: "\u6ED1",
                pinyin: "hu\u00E1",
              },
              {
                chinese: "\u68AF",
                pinyin: "t\u012B",
              },
            ],
          },
          {
            names: {
              en: "Literacy 4",
              zh_cn: "\u8BC6\u5B57\u88684",
              zh_tw: "\u8B58\u5B57\u93364",
            },
            words: [
              {
                chinese: "\u4F9D",
                pinyin: "y\u012B",
              },
              {
                chinese: "\u5C3D",
                pinyin: "j\u00ECn",
              },
              {
                chinese: "\u6B32",
                pinyin: "y\u00F9",
              },
              {
                chinese: "\u7A77",
                pinyin: "qi\u00F3ng",
              },
              {
                chinese: "\u5C42",
                pinyin: "c\u00E9ng",
              },
              {
                chinese: "\u7011\u5E03",
                pinyin: "p\u00F9'b\u00F9",
              },
              {
                chinese: "\u7089",
                pinyin: "l\u00FA",
              },
              {
                chinese: "\u70DF",
                pinyin: "y\u0101n",
              },
              {
                chinese: "\u9065",
                pinyin: "y\u00E1o",
              },
              {
                chinese: "\u5DDD",
                pinyin: "chu\u0101n",
              },
              {
                chinese: "\u95FB\u540D",
                pinyin: "w\u00E9n'm\u00EDng",
              },
              {
                chinese: "\u666F\u533A",
                pinyin: "j\u01D0ng'q\u016B",
              },
              {
                chinese: "\u7701",
                pinyin: "sh\u011Bng",
              },
              {
                chinese: "\u90E8",
                pinyin: "b\u00F9",
              },
              {
                chinese: "\u79C0",
                pinyin: "xi\u00F9",
              },
              {
                chinese: "\u5C24\u5176",
                pinyin: "y\u00F3u'q\u00ED",
              },
              {
                chinese: "\u4ED9",
                pinyin: "xi\u0101n",
              },
              {
                chinese: "\u5DE8",
                pinyin: "j\u00F9",
              },
              {
                chinese: "\u4F4D",
                pinyin: "w\u00E8i",
              },
              {
                chinese: "\u90FD",
                pinyin: "d\u016B",
              },
              {
                chinese: "\u8457",
                pinyin: "zh\u00F9",
              },
              {
                chinese: "\u5F62\u72B6",
                pinyin: "x\u00EDng'zhu\u00E0ng",
              },
              {
                chinese: "\u6F6D",
                pinyin: "t\u00E1n",
              },
              {
                chinese: "\u6E7E",
                pinyin: "w\u0101n",
              },
              {
                chinese: "\u6E56",
                pinyin: "h\u00FA",
              },
              {
                chinese: "\u7ED5",
                pinyin: "r\u00E0o",
              },
              {
                chinese: "\u8302\u76DB",
                pinyin: "m\u00E0o'sh\u00E8ng",
              },
              {
                chinese: "\u56F4",
                pinyin: "w\u00E9i",
              },
              {
                chinese: "\u80DC",
                pinyin: "sh\u00E8ng",
              },
              {
                chinese: "\u592E",
                pinyin: "y\u0101ng",
              },
              {
                chinese: "\u5C9B",
                pinyin: "d\u01CEo",
              },
              {
                chinese: "\u7EB1",
                pinyin: "sh\u0101",
              },
              {
                chinese: "\u7AE5",
                pinyin: "t\u00F3ng",
              },
              {
                chinese: "\u5883",
                pinyin: "j\u00ECng",
              },
              {
                chinese: "\u5F15",
                pinyin: "y\u01D0n",
              },
              {
                chinese: "\u5BA2",
                pinyin: "k\u00E8 ",
              },
              {
                chinese: "\u6C9F",
                pinyin: "g\u014Du",
              },
              {
                chinese: "\u4EA7",
                pinyin: "ch\u01CEn",
              },
              {
                chinese: "\u4EFD",
                pinyin: "f\u00E8n",
              },
              {
                chinese: "\u679D",
                pinyin: "zh\u012B",
              },
              {
                chinese: "\u642D",
                pinyin: "d\u0101",
              },
              {
                chinese: "\u6DE1",
                pinyin: "d\u00E0n",
              },
              {
                chinese: "\u597D",
                pinyin: "h\u00E0o",
              },
              {
                chinese: "\u591F",
                pinyin: "q\u00F2u",
              },
              {
                chinese: "\u6536",
                pinyin: "sh\u014Du",
              },
              {
                chinese: "\u57CE\u5E02",
                pinyin: "ch\u00E9ng'sh\u00EC",
              },
              {
                chinese: "\u5E72",
                pinyin: "gan",
              },
              {
                chinese: "\u7559",
                pinyin: "li\u00FA",
              },
              {
                chinese: "\u9489",
                pinyin: "d\u00ECng",
              },
              {
                chinese: "\u5229",
                pinyin: "l\u00EC",
              },
              {
                chinese: "\u5206",
                pinyin: "f\u00E8n",
              },
              {
                chinese: "\u5473",
                pinyin: "w\u00E8i",
              },
              {
                chinese: "\u660C",
                pinyin: "ch\u0101ng",
              },
              {
                chinese: "\u94FA",
                pinyin: "p\u00F9",
              },
              {
                chinese: "\u8C03",
                pinyin: "ti\u00E1o",
              },
              {
                chinese: "\u786C\u5367",
                pinyin: "y\u00ECng'w\u00F2",
              },
              {
                chinese: "\u9650\u4E58",
                pinyin: "xi\u00E0n'ch\u00E9ng",
              },
              {
                chinese: "\u552E",
                pinyin: "sh\u00F2u",
              },
            ],
          },
          {
            names: {
              en: "Literacy 5",
              zh_cn: "\u8BC6\u5B57\u88685",
              zh_tw: "\u8B58\u5B57\u93365",
            },
            words: [
              {
                chinese: "\u6CBF",
                pinyin: "y\u00E1n",
              },
              {
                chinese: "\u7B54",
                pinyin: "d\u00E1",
              },
              {
                chinese: "\u6E34",
                pinyin: "k\u011B",
              },
              {
                chinese: "\u559D",
                pinyin: "h\u0113",
              },
              {
                chinese: "\u8BDD",
                pinyin: "hu\u00E0",
              },
              {
                chinese: "\u5F04\u9519",
                pinyin: "n\u00F2ng'cu\u00F2",
              },
              {
                chinese: "\u9645",
                pinyin: "ji",
              },
              {
                chinese: "\u54EA",
                pinyin: "na",
              },
              {
                chinese: "\u62AC",
                pinyin: "t\u00E1i",
              },
              {
                chinese: "\u53F7",
                pinyin: "h\u00E1o",
              },
              {
                chinese: "\u5835",
                pinyin: "d\u01D4",
              },
              {
                chinese: "\u7F1D",
                pinyin: "f\u00E8ng",
              },
              {
                chinese: "\u5F53",
                pinyin: "d\u00E0ng",
              },
              {
                chinese: "\u9E4A",
                pinyin: "qu\u00E8",
              },
              {
                chinese: "\u6717",
                pinyin: "l\u01CEng",
              },
              {
                chinese: "\u8854",
                pinyin: "xi\u00E1n",
              },
              {
                chinese: "\u67AF",
                pinyin: "k\u016B",
              },
              {
                chinese: "\u529D",
                pinyin: "qu\u00E0n",
              },
              {
                chinese: "\u8D81",
                pinyin: "ch\u00E8n",
              },
              {
                chinese: "\u5C06",
                pinyin: "ji\u0101ng",
              },
              {
                chinese: "\u96BE",
                pinyin: "n\u00E1n",
              },
              {
                chinese: "\u4E14",
                pinyin: "qi\u011B",
              },
              {
                chinese: "\u72C2",
                pinyin: "ku\u00E1ng",
              },
              {
                chinese: "\u543C",
                pinyin: "h\u01D2u",
              },
              {
                chinese: "\u590D",
                pinyin: "f\u00F9",
              },
              {
                chinese: "\u54C0",
                pinyin: "\u0101i",
              },
              {
                chinese: "\u846B\u82A6\u85E4",
                pinyin: "h\u00FA'l\u00FA't\u00E9ng",
              },
              {
                chinese: "\u8C22",
                pinyin: "xi\u00E8",
              },
              {
                chinese: "\u554A",
                pinyin: "a",
              },
              {
                chinese: "\u869C",
                pinyin: "y\u00E1",
              },
              {
                chinese: "\u76EF",
                pinyin: "d\u012Bng",
              },
              {
                chinese: "\u8D5B",
                pinyin: "s\u00E0i",
              },
              {
                chinese: "\u611F",
                pinyin: "g\u01CEn",
              },
              {
                chinese: "\u602A",
                pinyin: "gu\u00E0i",
              },
              {
                chinese: "\u6162",
                pinyin: "m\u00E0n",
              },
              {
                chinese: "\u950B",
                pinyin: "f\u0113ng",
              },
              {
                chinese: "\u871C\u8702",
                pinyin: "m\u00EC'f\u0113ng",
              },
              {
                chinese: "\u5E55",
                pinyin: "m\u00F9",
              },
              {
                chinese: "\u626B\u5893",
                pinyin: "s\u01CEo'm\u00F9",
              },
              {
                chinese: "\u6155",
                pinyin: "m\u00F9",
              },
              {
                chinese: "\u6284",
                pinyin: "ch\u0101o",
              },
              {
                chinese: "\u7092",
                pinyin: "ch\u01CEo",
              },
            ],
          },
          {
            names: {
              en: "Literacy 6",
              zh_cn: "\u8BC6\u5B57\u88686",
              zh_tw: "\u8B58\u5B57\u93366",
            },
            words: [
              {
                chinese: "\u697C",
                pinyin: "l\u00F3u",
              },
              {
                chinese: "\u4E89",
                pinyin: "zh\u0113ng",
              },
              {
                chinese: "\u4EE3",
                pinyin: "d\u00E0i",
              },
              {
                chinese: "\u4E34",
                pinyin: "l\u00EDn",
              },
              {
                chinese: "\u814A",
                pinyin: "l\u00E0",
              },
              {
                chinese: "\u7AE0",
                pinyin: "zh\u0101ng",
              },
              {
                chinese: "\u63E1",
                pinyin: "w\u00F2",
              },
              {
                chinese: "\u89C6\u5BDF",
                pinyin: "sh\u00EC'ch\u00E1",
              },
              {
                chinese: "\u6CB9",
                pinyin: "y\u00F3u",
              },
              {
                chinese: "\u6731\u5FB7",
                pinyin: "zh\u016B'd\u00E9",
              },
              {
                chinese: "\u6241\u62C5",
                pinyin: "bi\u01CEn'd\u00E0n",
              },
              {
                chinese: "\u5FD7",
                pinyin: "zh\u00EC",
              },
              {
                chinese: "\u4F0D",
                pinyin: "w\u01D4",
              },
              {
                chinese: "\u6CFD",
                pinyin: "z\u00E9",
              },
              {
                chinese: "\u654C",
                pinyin: "d\u00ED",
              },
              {
                chinese: "\u9661",
                pinyin: "d\u01D2u",
              },
              {
                chinese: "\u6574",
                pinyin: "zh\u011Bng",
              },
              {
                chinese: "\u4ED7",
                pinyin: "zh\u00E0ng",
              },
              {
                chinese: "\u75BC",
                pinyin: "t\u00E9ng",
              },
              {
                chinese: "\u6599",
                pinyin: "li\u00E0o",
              },
              {
                chinese: "\u656C",
                pinyin: "j\u00ECng",
              },
              {
                chinese: "\u6CFC",
                pinyin: "p\u014D",
              },
              {
                chinese: "\u6C11\u65CF",
                pinyin: "m\u00EDn'z\u00FA",
              },
              {
                chinese: "\u5EA6",
                pinyin: "d\u00F9",
              },
              {
                chinese: "\u6572",
                pinyin: "qi\u0101o",
              },
              {
                chinese: "\u94FA",
                pinyin: "p\u016B",
              },
              {
                chinese: "\u9F99",
                pinyin: "l\u00F3ng",
              },
              {
                chinese: "\u9A76",
                pinyin: "sh\u01D0",
              },
              {
                chinese: "\u5BB9",
                pinyin: "r\u00F3ng",
              },
              {
                chinese: "\u8E29",
                pinyin: "c\u01CEi",
              },
              {
                chinese: "\u76DB",
                pinyin: "ch\u00E9ng",
              },
              {
                chinese: "\u7897",
                pinyin: "w\u01CEn",
              },
              {
                chinese: "\u795D\u798F",
                pinyin: "zh\u00F9'f\u00FA",
              },
              {
                chinese: "\u5065\u5EB7",
                pinyin: "ji\u00E0n'k\u0101ng",
              },
              {
                chinese: "\u5BFF",
                pinyin: "sh\u00F2u",
              },
              {
                chinese: "\u5218",
                pinyin: "li\u00FA",
              },
              {
                chinese: "\u5170",
                pinyin: "l\u00E1n",
              },
              {
                chinese: "\u6D3E",
                pinyin: "p\u00E0i",
              },
              {
                chinese: "\u88AB",
                pinyin: "b\u00E8i",
              },
              {
                chinese: "\u8840",
                pinyin: "xu\u00E8",
              },
              {
                chinese: "\u62C9",
                pinyin: "l\u0101",
              },
              {
                chinese: "\u5175",
                pinyin: "b\u012Bng",
              },
              {
                chinese: "\u8840",
                pinyin: "xi\u011B",
              },
              {
                chinese: "\u633A",
                pinyin: "t\u01D0ng",
              },
              {
                chinese: "\u6740",
                pinyin: "sh\u0101",
              },
              {
                chinese: "\u70C8",
                pinyin: "li\u00E8",
              },
              {
                chinese: "\u8F7F",
                pinyin: "ji\u00E0o",
              },
              {
                chinese: "\u6551",
                pinyin: "ji\u00F9",
              },
              {
                chinese: "\u6469\u6258",
                pinyin: "m\u00F3'tu\u014D",
              },
              {
                chinese: "\u9632",
                pinyin: "f\u00E1ng",
              },
              {
                chinese: "\u6E14",
                pinyin: "y\u00FA",
              },
              {
                chinese: "\u8D27\u8F6E",
                pinyin: "hu\u00F2'l\u00FAn",
              },
              {
                chinese: "\u79D1\u8003",
                pinyin: "k\u0113'k\u01CEo",
              },
            ],
          },
          {
            names: {
              en: "Literacy 7",
              zh_cn: "\u8BC6\u5B57\u88687",
              zh_tw: "\u8B58\u5B57\u93367",
            },
            words: [
              {
                chinese: "\u5BBF",
                pinyin: "s\u00F9",
              },
              {
                chinese: "\u5BFA",
                pinyin: "s\u00EC",
              },
              {
                chinese: "\u5371",
                pinyin: "w\u0113i",
              },
              {
                chinese: "\u8FB0",
                pinyin: "ch\u00E9n",
              },
              {
                chinese: "\u6050",
                pinyin: "k\u01D2ng",
              },
              {
                chinese: "\u60CA",
                pinyin: "j\u012Bng",
              },
              {
                chinese: "\u4F3C",
                pinyin: "s\u00EC",
              },
              {
                chinese: "\u5E90",
                pinyin: "l\u00FA",
              },
              {
                chinese: "\u7B3C",
                pinyin: "l\u01D2ng",
              },
              {
                chinese: "\u76D6",
                pinyin: "g\u00E0i",
              },
              {
                chinese: "\u82CD",
                pinyin: "c\u0101ng",
              },
              {
                chinese: "\u832B",
                pinyin: "m\u00E1ng",
              },
              {
                chinese: "\u96FE",
                pinyin: "w\u00F9",
              },
              {
                chinese: "\u6DD8",
                pinyin: "t\u00E1o",
              },
              {
                chinese: "\u4E8E",
                pinyin: "y\u00FA",
              },
              {
                chinese: "\u6697",
                pinyin: "\u00E0n",
              },
              {
                chinese: "\u5CB8",
                pinyin: "\u00E0n",
              },
              {
                chinese: "\u8857",
                pinyin: "ji\u0113",
              },
              {
                chinese: "\u6881",
                pinyin: "li\u00E1ng",
              },
              {
                chinese: "\u751A\u81F3",
                pinyin: "sh\u00E8n'zh\u00EC",
              },
              {
                chinese: "\u5207",
                pinyin: "qi\u00E8",
              },
              {
                chinese: "\u8EB2",
                pinyin: "du\u01D2",
              },
              {
                chinese: "\u5931",
                pinyin: "sh\u012B",
              },
              {
                chinese: "\u6DFB",
                pinyin: "ti\u0101n",
              },
              {
                chinese: "\u67F4",
                pinyin: "ch\u00E1i",
              },
              {
                chinese: "\u70E7",
                pinyin: "sh\u0101o",
              },
              {
                chinese: "\u65FA",
                pinyin: "w\u00E0ng",
              },
              {
                chinese: "\u6E10",
                pinyin: "ji\u00E0n",
              },
              {
                chinese: "\u54CE",
                pinyin: "\u0101i",
              },
              {
                chinese: "\u5440",
                pinyin: "y\u0101",
              },
              {
                chinese: "\u5192",
                pinyin: "m\u00E0o",
              },
              {
                chinese: "\u545B",
                pinyin: "qi\u00E0ng",
              },
              {
                chinese: "\u70EB",
                pinyin: "t\u00E0ng",
              },
              {
                chinese: "\u7EC8",
                pinyin: "zh\u014Dng",
              },
              {
                chinese: "\u6D51",
                pinyin: "h\u00FAn",
              },
              {
                chinese: "\u6DCB",
                pinyin: "l\u00EDn",
              },
              {
                chinese: "\u706D",
                pinyin: "mi\u00E8",
              },
              {
                chinese: "\u6FC0",
                pinyin: "j\u012B",
              },
              {
                chinese: "\u77A7",
                pinyin: "qi\u00E1o",
              },
              {
                chinese: "\u6EE9",
                pinyin: "t\u0101n",
              },
              {
                chinese: "\u6930\u58F3",
                pinyin: "y\u0113'k\u00E9",
              },
              {
                chinese: "\u6F20",
                pinyin: "m\u00F2",
              },
              {
                chinese: "\u9A86\u9A7C",
                pinyin: "lu\u00F2'tu\u00F3",
              },
              {
                chinese: "\u9A8F",
                pinyin: "j\u00F9n",
              },
              {
                chinese: "\u60AC\u5D16",
                pinyin: "xu\u00E1n'y\u00E1",
              },
            ],
          },
          {
            names: {
              en: "Literacy 8",
              zh_cn: "\u8BC6\u5B57\u88688",
              zh_tw: "\u8B58\u5B57\u93368",
            },
            words: [
              {
                chinese: "\u5047",
                pinyin: "ji\u01CE",
              },
              {
                chinese: "\u5A01",
                pinyin: "w\u0113i",
              },
              {
                chinese: "\u8F6C",
                pinyin: "zhu\u00E0n",
              },
              {
                chinese: "\u626F",
                pinyin: "ch\u011B",
              },
              {
                chinese: "\u55D3",
                pinyin: "s\u01CEng",
              },
              {
                chinese: "\u517D",
                pinyin: "sh\u00F2u",
              },
              {
                chinese: "\u8FDD\u6297",
                pinyin: "w\u00E9i'k\u00E0ng",
              },
              {
                chinese: "\u722A",
                pinyin: "zhu\u01CE",
              },
              {
                chinese: "\u8D9F",
                pinyin: "t\u00E0ng",
              },
              {
                chinese: "\u795E",
                pinyin: "sh\u00E9n",
              },
              {
                chinese: "\u732A",
                pinyin: "zh\u016B",
              },
              {
                chinese: "\u7EB3",
                pinyin: "n\u00E0",
              },
              {
                chinese: "\u95F7",
                pinyin: "m\u00E8n",
              },
              {
                chinese: "\u53D7",
                pinyin: "sh\u00F2u",
              },
              {
                chinese: "\u9A97",
                pinyin: "pi\u00E0n",
              },
              {
                chinese: "\u501F",
                pinyin: "ji\u00E8 ",
              },
              {
                chinese: "\u7B5D",
                pinyin: "zh\u0113ng",
              },
              {
                chinese: "\u9F20",
                pinyin: "sh\u01D4",
              },
              {
                chinese: "\u6298",
                pinyin: "zh\u00E9",
              },
              {
                chinese: "\u6F02",
                pinyin: "pi\u0101o",
              },
              {
                chinese: "\u624E",
                pinyin: "z\u0101",
              },
              {
                chinese: "\u6293",
                pinyin: "zhu\u0101",
              },
              {
                chinese: "\u5E78",
                pinyin: "x\u00ECng",
              },
              {
                chinese: "\u4FE9",
                pinyin: "li\u01CE",
              },
              {
                chinese: "\u4F46\u613F",
                pinyin: "d\u00E0n'yu\u00E0n",
              },
              {
                chinese: "\u54ED",
                pinyin: "k\u016B",
              },
              {
                chinese: "\u53D6",
                pinyin: "q\u01D4",
              },
              {
                chinese: "\u5E2E\u52A9",
                pinyin: "b\u0101ng'zh\u00F9",
              },
              {
                chinese: "\u62BD",
                pinyin: "ch\u014Du",
              },
              {
                chinese: "\u7EED",
                pinyin: "x\u00F9",
              },
              {
                chinese: "\u4F7F\u52B2",
                pinyin: "sh\u01D0'j\u00ECn",
              },
              {
                chinese: "\u79E7",
                pinyin: "y\u0101ng",
              },
              {
                chinese: "\u8868\u793A",
                pinyin: "bi\u01CEo'sh\u00EC",
              },
              {
                chinese: "\u6446",
                pinyin: "b\u01CEi",
              },
              {
                chinese: "\u7FFB",
                pinyin: "f\u0101n",
              },
              {
                chinese: "\u4ECD",
                pinyin: "r\u00E9ng",
              },
              {
                chinese: "\u683D",
                pinyin: "z\u0101i",
              },
              {
                chinese: "\u8D23",
                pinyin: "z\u00E9",
              },
              {
                chinese: "\u72FC",
                pinyin: "l\u00E1ng",
              },
              {
                chinese: "\u7329",
                pinyin: "x\u012Bng",
              },
              {
                chinese: "\u86C7",
                pinyin: "sh\u00E9",
              },
              {
                chinese: "\u9E64",
                pinyin: "h\u00E8",
              },
              {
                chinese: "\u9E3D",
                pinyin: "g\u0113",
              },
              {
                chinese: "\u7F9A",
                pinyin: "l\u00EDng",
              },
              {
                chinese: "\u86AF\u8693",
                pinyin: "qi\u016B'y\u01D0n",
              },
              {
                chinese: "\u8783\u87F9",
                pinyin: "p\u00E1ng'xi\u00E8",
              },
              {
                chinese: "\u867E",
                pinyin: "xi\u0101",
              },
              {
                chinese: "\u8695",
                pinyin: "c\u00E1n",
              },
            ],
          },
          {
            names: {
              en: "Writing 1",
              zh_cn: "\u5199\u5B57\u88681",
              zh_tw: "\u5BEB\u5B57\u93361",
            },
            words: [
              {
                chinese: "\u4E24",
                pinyin: "li\u01CEng",
              },
              {
                chinese: "\u54EA",
                pinyin: "n\u01CE",
              },
              {
                chinese: "\u5BBD",
                pinyin: "ku\u0101n",
              },
              {
                chinese: "\u9876",
                pinyin: "d\u01D0ng",
              },
              {
                chinese: "\u773C\u775B",
                pinyin: "y\u01CEn'j\u012Bng",
              },
              {
                chinese: "\u809A\u76AE",
                pinyin: "d\u00F9'p\u00ED",
              },
              {
                chinese: "\u5B69",
                pinyin: "h\u00E1i",
              },
              {
                chinese: "\u8DF3",
                pinyin: "ti\u00E0o",
              },
              {
                chinese: "\u53D8",
                pinyin: "bi\u00E0n",
              },
              {
                chinese: "\u6781",
                pinyin: "j\u00ED",
              },
              {
                chinese: "\u7247",
                pinyin: "pi\u00E0n",
              },
              {
                chinese: "\u508D",
                pinyin: "b\u00E0ng",
              },
              {
                chinese: "\u6D77\u6D0B",
                pinyin: "h\u01CEi'y\u00E1ng",
              },
              {
                chinese: "\u4F5C",
                pinyin: "zu\u00F2",
              },
              {
                chinese: "\u574F",
                pinyin: "hu\u00E0i",
              },
              {
                chinese: "\u7ED9",
                pinyin: "g\u011Bi",
              },
              {
                chinese: "\u5E26",
                pinyin: "d\u00E0i",
              },
              {
                chinese: "\u6CD5",
                pinyin: "f\u01CE",
              },
              {
                chinese: "\u5982",
                pinyin: "r\u00FA",
              },
              {
                chinese: "\u516C",
                pinyin: "g\u014Dng",
              },
              {
                chinese: "\u5B83",
                pinyin: "t\u0101",
              },
              {
                chinese: "\u5A03",
                pinyin: "w\u00E1",
              },
              {
                chinese: "\u5979",
                pinyin: "t\u0101",
              },
              {
                chinese: "\u6BDB",
                pinyin: "m\u00E1o",
              },
              {
                chinese: "\u66F4",
                pinyin: "g\u00E8ng",
              },
              {
                chinese: "\u77E5\u8BC6",
                pinyin: "zh\u012B'shi",
              },
            ],
          },
          {
            names: {
              en: "Writing 2",
              zh_cn: "\u5199\u5B57\u88682",
              zh_tw: "\u5BEB\u5B57\u93362",
            },
            words: [
              {
                chinese: "\u5904",
                pinyin: "ch\u00F9",
              },
              {
                chinese: "\u56ED",
                pinyin: "yu\u00E1n",
              },
              {
                chinese: "\u6865",
                pinyin: "qi\u00E1o",
              },
              {
                chinese: "\u7FA4",
                pinyin: "q\u00FAn",
              },
              {
                chinese: "\u961F\u65D7",
                pinyin: "du\u00EC'q\u00ED",
              },
              {
                chinese: "\u94DC\u53F7",
                pinyin: "t\u00F3ng'h\u00E0o",
              },
              {
                chinese: "\u9886",
                pinyin: "l\u01D0ng",
              },
              {
                chinese: "\u5DFE",
                pinyin: "j\u012Bn",
              },
              {
                chinese: "\u6768",
                pinyin: "y\u00E1ng",
              },
              {
                chinese: "\u58EE",
                pinyin: "zhu\u00E0ng",
              },
              {
                chinese: "\u6850",
                pinyin: "t\u00F3ng",
              },
              {
                chinese: "\u67AB",
                pinyin: "f\u0113ng",
              },
              {
                chinese: "\u677E\u67CF",
                pinyin: "s\u014Dngb\u01CEi",
              },
              {
                chinese: "\u68C9",
                pinyin: "mi\u00E1n",
              },
              {
                chinese: "\u6749",
                pinyin: "sh\u0101n",
              },
              {
                chinese: "\u5316",
                pinyin: "hu\u00E0",
              },
              {
                chinese: "\u6842",
                pinyin: "gu\u00EC",
              },
              {
                chinese: "\u6B4C",
                pinyin: "g\u0113",
              },
              {
                chinese: "\u5199",
                pinyin: "xi\u011B",
              },
              {
                chinese: "\u4E1B",
                pinyin: "c\u00F3ng",
              },
              {
                chinese: "\u6DF1",
                pinyin: "sh\u0113n",
              },
              {
                chinese: "\u516D",
                pinyin: "li\u00F9",
              },
              {
                chinese: "\u718A\u732B",
                pinyin: "xi\u00F3ng'm\u0101o",
              },
              {
                chinese: "\u4E5D",
                pinyin: "ji\u01D4",
              },
              {
                chinese: "\u670B\u53CB",
                pinyin: "p\u00E9ng'y\u01D2u",
              },
              {
                chinese: "\u5B63",
                pinyin: "j\u00EC",
              },
              {
                chinese: "\u5439",
                pinyin: "chu\u012B",
              },
              {
                chinese: "\u80A5",
                pinyin: "f\u00E9i",
              },
              {
                chinese: "\u519C",
                pinyin: "n\u00F3ng",
              },
              {
                chinese: "\u4E8B",
                pinyin: "sh\u00EC",
              },
              {
                chinese: "\u5FD9",
                pinyin: "m\u00E1ng",
              },
              {
                chinese: "\u5F52",
                pinyin: "gu\u012B",
              },
              {
                chinese: "\u6234",
                pinyin: "d\u00E0i",
              },
              {
                chinese: "\u8F9B\u82E6",
                pinyin: "x\u012Bn'k\u01D4",
              },
            ],
          },
          {
            names: {
              en: "Writing 3",
              zh_cn: "\u5199\u5B57\u88683",
              zh_tw: "\u5BEB\u5B57\u93363",
            },
            words: [
              {
                chinese: "\u79F0",
                pinyin: "ch\u0113ng",
              },
              {
                chinese: "\u67F1",
                pinyin: "zh\u00F9",
              },
              {
                chinese: "\u5E95",
                pinyin: "d\u01D0",
              },
              {
                chinese: "\u6746\u79E4",
                pinyin: "g\u01CEn'ch\u00E8ng",
              },
              {
                chinese: "\u505A",
                pinyin: "zu\u00F2",
              },
              {
                chinese: "\u5C81",
                pinyin: "su\u00EC",
              },
              {
                chinese: "\u7AD9",
                pinyin: "zh\u00E0n",
              },
              {
                chinese: "\u8239",
                pinyin: "chu\u00E1n",
              },
              {
                chinese: "\u7136",
                pinyin: "r\u00E1n",
              },
              {
                chinese: "\u753B\u5E45",
                pinyin: "hu\u00E0'f\u00FA",
              },
              {
                chinese: "\u8BC4\u5956",
                pinyin: "p\u00EDng'ji\u01CEng",
              },
              {
                chinese: "\u7EB8",
                pinyin: "zh\u01D0",
              },
              {
                chinese: "\u62A5",
                pinyin: "b\u00E0o",
              },
              {
                chinese: "\u53E6",
                pinyin: "l\u00ECng",
              },
              {
                chinese: "\u53CA",
                pinyin: "j\u00ED",
              },
              {
                chinese: "\u62FF",
                pinyin: "n\u00E1",
              },
              {
                chinese: "\u5E76",
                pinyin: "b\u00ECng",
              },
              {
                chinese: "\u5C01",
                pinyin: "f\u0113ng",
              },
              {
                chinese: "\u4FE1",
                pinyin: "x\u00ECn",
              },
              {
                chinese: "\u4ECA",
                pinyin: "j\u012Bn",
              },
              {
                chinese: "\u652F",
                pinyin: "zh\u012B",
              },
              {
                chinese: "\u5706\u73E0\u7B14",
                pinyin: "yu\u00E1n'zh\u016B'b\u01D0",
              },
              {
                chinese: "\u706F",
                pinyin: "d\u0113ng",
              },
              {
                chinese: "\u7535\u5F71",
                pinyin: "di\u00E0n'y\u01D0ng",
              },
              {
                chinese: "\u54C4",
                pinyin: "h\u01D2ng",
              },
              {
                chinese: "\u5148",
                pinyin: "xi\u0101n",
              },
              {
                chinese: "\u95ED",
                pinyin: "b\u00EC",
              },
              {
                chinese: "\u8138",
                pinyin: "li\u01CEn",
              },
              {
                chinese: "\u6C89",
                pinyin: "ch\u00E9n",
              },
              {
                chinese: "\u53D1",
                pinyin: "f\u0101",
              },
              {
                chinese: "\u7A97",
                pinyin: "chu\u0101ng",
              },
              {
                chinese: "\u6C99",
                pinyin: "sh\u0101",
              },
            ],
          },
          {
            names: {
              en: "Writing 4",
              zh_cn: "\u5199\u5B57\u88684",
              zh_tw: "\u5BEB\u5B57\u93364",
            },
            words: [
              {
                chinese: "\u4F9D",
                pinyin: "y\u012B",
              },
              {
                chinese: "\u5C3D",
                pinyin: "j\u00ECn",
              },
              {
                chinese: "\u9EC4",
                pinyin: "hu\u00E1ng",
              },
              {
                chinese: "\u5C42",
                pinyin: "c\u00E9ng",
              },
              {
                chinese: "\u7167",
                pinyin: "zh\u00E0o",
              },
              {
                chinese: "\u7089",
                pinyin: "l\u00FA",
              },
              {
                chinese: "\u70DF",
                pinyin: "y\u0101n",
              },
              {
                chinese: "\u6302",
                pinyin: "gu\u00E0",
              },
              {
                chinese: "\u5DDD",
                pinyin: "chu\u0101n",
              },
              {
                chinese: "\u5357\u90E8",
                pinyin: "n\u00E1n'b\u00F9",
              },
              {
                chinese: "\u4E9B",
                pinyin: "xi\u0113",
              },
              {
                chinese: "\u5DE8",
                pinyin: "j\u00F9",
              },
              {
                chinese: "\u4F4D",
                pinyin: "w\u00E8i",
              },
              {
                chinese: "\u5411",
                pinyin: "xi\u00E0ng",
              },
              {
                chinese: "\u6BCF",
                pinyin: "m\u011Bi",
              },
              {
                chinese: "\u5347",
                pinyin: "sh\u0113ng",
              },
              {
                chinese: "\u95EA",
                pinyin: "sh\u01CEn",
              },
              {
                chinese: "\u72D7",
                pinyin: "g\u01D2u",
              },
              {
                chinese: "\u6E7E",
                pinyin: "w\u0101n",
              },
              {
                chinese: "\u540D\u80DC",
                pinyin: "m\u00EDng'sh\u00E8ng",
              },
              {
                chinese: "\u8FF9",
                pinyin: "j\u00EC",
              },
              {
                chinese: "\u592E",
                pinyin: "y\u0101ng",
              },
              {
                chinese: "\u4E3D",
                pinyin: "l\u00EC",
              },
              {
                chinese: "\u5C55\u73B0",
                pinyin: "zh\u01CEn'xi\u00E0n",
              },
              {
                chinese: "\u4EA7",
                pinyin: "ch\u01CEn",
              },
              {
                chinese: "\u4EFD",
                pinyin: "f\u00E8n",
              },
              {
                chinese: "\u5761",
                pinyin: "p\u014D",
              },
              {
                chinese: "\u679D",
                pinyin: "zh\u012B",
              },
              {
                chinese: "\u8D77",
                pinyin: "q\u01D0",
              },
              {
                chinese: "\u5BA2",
                pinyin: "k\u00E8",
              },
              {
                chinese: "\u8001",
                pinyin: "l\u01CEo",
              },
              {
                chinese: "\u6536",
                pinyin: "sh\u014Du",
              },
              {
                chinese: "\u57CE\u5E02",
                pinyin: "ch\u00E9ng'sh\u00EC",
              },
            ],
          },
          {
            names: {
              en: "Writing 5",
              zh_cn: "\u5199\u5B57\u88685",
              zh_tw: "\u5BEB\u5B57\u93365",
            },
            words: [
              {
                chinese: "\u4E95",
                pinyin: "j\u01D0ng",
              },
              {
                chinese: "\u89C2",
                pinyin: "gu\u0101n",
              },
              {
                chinese: "\u6CBF",
                pinyin: "y\u00E1n",
              },
              {
                chinese: "\u7B54",
                pinyin: "d\u00E1",
              },
              {
                chinese: "\u6E34",
                pinyin: "k\u011B",
              },
              {
                chinese: "\u559D",
                pinyin: "h\u0113",
              },
              {
                chinese: "\u8BDD",
                pinyin: "hu\u00E0",
              },
              {
                chinese: "\u9645",
                pinyin: "j\u00EC",
              },
              {
                chinese: "\u811A",
                pinyin: "ji\u01CEo",
              },
              {
                chinese: "\u9762",
                pinyin: "mi\u00E0n",
              },
              {
                chinese: "\u9635",
                pinyin: "zh\u00E8n",
              },
              {
                chinese: "\u6717",
                pinyin: "l\u01CEng",
              },
              {
                chinese: "\u67AF",
                pinyin: "k\u016B",
              },
              {
                chinese: "\u5374",
                pinyin: "qu\u00E8",
              },
              {
                chinese: "\u7B2C",
                pinyin: "d\u00EC",
              },
              {
                chinese: "\u5C06",
                pinyin: "ji\u0101ng",
              },
              {
                chinese: "\u96BE",
                pinyin: "n\u00E1n",
              },
              {
                chinese: "\u7EB7",
                pinyin: "f\u0113n",
              },
              {
                chinese: "\u68F5",
                pinyin: "k\u0113",
              },
              {
                chinese: "\u8C22",
                pinyin: "xi\u00E8",
              },
              {
                chinese: "\u60F3",
                pinyin: "xi\u01CEng",
              },
              {
                chinese: "\u76EF",
                pinyin: "d\u012Bng",
              },
              {
                chinese: "\u8A00",
                pinyin: "y\u00E1n",
              },
              {
                chinese: "\u90BB",
                pinyin: "l\u00EDn",
              },
              {
                chinese: "\u6CBB",
                pinyin: "zh\u00EC",
              },
              {
                chinese: "\u602A",
                pinyin: "gu\u00E0i",
              },
            ],
          },
          {
            names: {
              en: "Writing 6",
              zh_cn: "\u5199\u5B57\u88686",
              zh_tw: "\u5BEB\u5B57\u93366",
            },
            words: [
              {
                chinese: "\u697C",
                pinyin: "l\u00F3u",
              },
              {
                chinese: "\u5E74\u591C",
                pinyin: "ni\u00E1n'y\u00E8",
              },
              {
                chinese: "\u62AB",
                pinyin: "p\u012B",
              },
              {
                chinese: "\u8F7B",
                pinyin: "q\u012Bng",
              },
              {
                chinese: "\u5229",
                pinyin: "l\u00EC",
              },
              {
                chinese: "\u6241\u62C5",
                pinyin: "bi\u01CEn'd\u00E0n",
              },
              {
                chinese: "\u5FD7",
                pinyin: "zh\u00EC",
              },
              {
                chinese: "\u4F0D",
                pinyin: "w\u01D4",
              },
              {
                chinese: "\u5E08",
                pinyin: "sh\u012B",
              },
              {
                chinese: "\u519B",
                pinyin: "j\u016Bn",
              },
              {
                chinese: "\u6218\u58EB",
                pinyin: "zh\u00E0n'sh\u00EC",
              },
              {
                chinese: "\u5FD8",
                pinyin: "w\u00E0ng",
              },
              {
                chinese: "\u6CFC",
                pinyin: "p\u014D",
              },
              {
                chinese: "\u5EA6",
                pinyin: "d\u00F9",
              },
              {
                chinese: "\u9F99",
                pinyin: "l\u00F3ng",
              },
              {
                chinese: "\u70AE",
                pinyin: "p\u00E0o",
              },
              {
                chinese: "\u7A7F",
                pinyin: "chu\u0101n",
              },
              {
                chinese: "\u59CB",
                pinyin: "sh\u01D0",
              },
              {
                chinese: "\u4EE4",
                pinyin: "l\u00ECng",
              },
              {
                chinese: "\u5218",
                pinyin: "li\u00FA",
              },
              {
                chinese: "\u6C11",
                pinyin: "m\u00EDn",
              },
              {
                chinese: "\u53CD",
                pinyin: "f\u01CEn",
              },
              {
                chinese: "\u6751",
                pinyin: "c\u016Bn",
              },
              {
                chinese: "\u88AB",
                pinyin: "b\u00E8i",
              },
              {
                chinese: "\u5173",
                pinyin: "gu\u0101n",
              },
              {
                chinese: "\u9053",
                pinyin: "d\u00E0o",
              },
              {
                chinese: "\u5175",
                pinyin: "b\u012Bng",
              },
            ],
          },
          {
            names: {
              en: "Writing 7",
              zh_cn: "\u5199\u5B57\u88687",
              zh_tw: "\u5BEB\u5B57\u93367",
            },
            words: [
              {
                chinese: "\u5371",
                pinyin: "w\u0113i",
              },
              {
                chinese: "\u6562",
                pinyin: "g\u01CEn",
              },
              {
                chinese: "\u60CA",
                pinyin: "j\u012Bng",
              },
              {
                chinese: "\u9634",
                pinyin: "y\u012Bn",
              },
              {
                chinese: "\u4F3C",
                pinyin: "s\u00EC",
              },
              {
                chinese: "\u91CE",
                pinyin: "y\u011B",
              },
              {
                chinese: "\u82CD\u832B",
                pinyin: "c\u0101ng'm\u00E1ng",
              },
              {
                chinese: "\u4E8E",
                pinyin: "y\u00FA",
              },
              {
                chinese: "\u8BBA",
                pinyin: "l\u00F9n",
              },
              {
                chinese: "\u5CB8",
                pinyin: "\u00E0n",
              },
              {
                chinese: "\u5C4B",
                pinyin: "w\u016B",
              },
              {
                chinese: "\u5207",
                pinyin: "qi\u0113",
              },
              {
                chinese: "\u4E45",
                pinyin: "ji\u01D4",
              },
              {
                chinese: "\u6563\u6B65",
                pinyin: "s\u00E0n'b\u00F9",
              },
              {
                chinese: "\u5531",
                pinyin: "ch\u00E0ng",
              },
              {
                chinese: "\u8D76",
                pinyin: "g\u01CEn",
              },
              {
                chinese: "\u65FA",
                pinyin: "w\u00E0ng",
              },
              {
                chinese: "\u65C1",
                pinyin: "p\u00E1ng",
              },
              {
                chinese: "\u6D51",
                pinyin: "h\u00FAn",
              },
              {
                chinese: "\u8C01",
                pinyin: "shu\u00ED",
              },
              {
                chinese: "\u6C7D",
                pinyin: "q\u00EC",
              },
            ],
          },
          {
            names: {
              en: "Writing 8",
              zh_cn: "\u5199\u5B57\u88688",
              zh_tw: "\u5BEB\u5B57\u93368",
            },
            words: [
              {
                chinese: "\u98DF\u7269",
                pinyin: "sh\u00ED'w\u00F9",
              },
              {
                chinese: "\u7237",
                pinyin: "y\u00E9",
              },
              {
                chinese: "\u5C31",
                pinyin: "ji\u00F9",
              },
              {
                chinese: "\u722A",
                pinyin: "zh\u01CEo",
              },
              {
                chinese: "\u795E",
                pinyin: "sh\u00E9n",
              },
              {
                chinese: "\u6D3B\u732A",
                pinyin: "hu\u00F3'zh\u016B",
              },
              {
                chinese: "\u6298",
                pinyin: "zh\u00E9",
              },
              {
                chinese: "\u5F20",
                pinyin: "zh\u0101ng",
              },
              {
                chinese: "\u795D",
                pinyin: "zh\u00F9",
              },
              {
                chinese: "\u624E",
                pinyin: "zh\u0101",
              },
              {
                chinese: "\u6293",
                pinyin: "zhu\u0101",
              },
              {
                chinese: "\u5435",
                pinyin: "ch\u01CEo",
              },
              {
                chinese: "\u4F46",
                pinyin: "d\u00E0n",
              },
              {
                chinese: "\u54ED",
                pinyin: "k\u016B",
              },
              {
                chinese: "\u8F66",
                pinyin: "ch\u0113",
              },
              {
                chinese: "\u5F97",
                pinyin: "d\u00E9",
              },
              {
                chinese: "\u79E7\u82D7",
                pinyin: "y\u0101ng'mi\u00E1o",
              },
              {
                chinese: "\u6C57",
                pinyin: "h\u00E0n",
              },
              {
                chinese: "\u6025",
                pinyin: "j\u00ED",
              },
              {
                chinese: "\u573A",
                pinyin: "ch\u01CEng",
              },
              {
                chinese: "\u4F24",
                pinyin: "sh\u0101ng",
              },
              {
                chinese: "\u8DEF",
                pinyin: "l\u00F9",
              },
            ],
          },
          {
            names: {
              en: "Words 1",
              zh_cn: "\u8BCD\u8BED1",
              zh_tw: "\u8A5E\u8A9E1",
            },
            words: [
              { chinese: "\u770B\u89C1", pinyin: "k\u00E0n'ji\u00E0n" },
              { chinese: "\u54EA\u91CC", pinyin: "n\u01CE'l\u01D0" },
              { chinese: "\u90A3\u8FB9", pinyin: "n\u00E0'bi\u0101n" },
              { chinese: "\u5934\u9876", pinyin: "t\u00F3u'd\u01D0ng" },
              { chinese: "\u773C\u775B", pinyin: "y\u01CEn'j\u012Bng" },
              { chinese: "\u96EA\u767D", pinyin: "xu\u011B'b\u00E1i" },
              { chinese: "\u809A\u76AE", pinyin: "d\u00F9'p\u00ED" },
              { chinese: "\u5B69\u5B50", pinyin: "h\u00E1i'zi" },
              { chinese: "\u4E24\u4E2A", pinyin: "li\u01CEngg\u00E8" },
              { chinese: "\u5BBD\u5E7F", pinyin: "ku\u0101ngu\u01CEng" },
              { chinese: "\u8DF3\u9AD8", pinyin: "ti\u00E0og\u0101o" },
              { chinese: "\u5929\u7A7A", pinyin: "ti\u0101n'k\u014Dng" },
              { chinese: "\u508D\u665A", pinyin: "b\u00E0ng'w\u01CEn" },
              { chinese: "\u4EBA\u4EEC", pinyin: "r\u00E9n'men" },
              { chinese: "\u51AC\u5929", pinyin: "d\u014Dng'ti\u0101n" },
              { chinese: "\u82B1\u6735", pinyin: "hu\u0101'du\u01D2" },
              { chinese: "\u5E73\u5E38", pinyin: "p\u00EDng'ch\u00E1ng" },
              { chinese: "\u6C5F\u6CB3", pinyin: "ji\u0101ng'h\u00E9" },
              { chinese: "\u6D77\u6D0B", pinyin: "h\u01CEi'y\u00E1ng" },
              { chinese: "\u7530\u5730", pinyin: "ti\u00E1n'd\u00EC" },
              { chinese: "\u5DE5\u4F5C", pinyin: "g\u014Dng'zu\u00F2" },
              { chinese: "\u53D8\u5316", pinyin: "bi\u00E0nhu\u00E0" },
              { chinese: "\u6781\u574F", pinyin: "j\u00EDhu\u00E0i" },
              { chinese: "\u7167\u7247", pinyin: "zh\u00E0opi\u00E0n" },
              { chinese: "\u5E26\u7ED9", pinyin: "d\u00E0ig\u011Bi" },
              { chinese: "\u529E\u6CD5", pinyin: "b\u00E0n'f\u01CE" },
              { chinese: "\u5982\u679C", pinyin: "r\u00FA'gu\u01D2" },
              { chinese: "\u957F\u5927", pinyin: "zh\u01CEng'd\u00E0" },
              { chinese: "\u5A03\u5A03", pinyin: "w\u00E1'w\u00E1" },
              { chinese: "\u53EA\u8981", pinyin: "zh\u01D0'y\u00E0o" },
              { chinese: "\u76AE\u6BDB", pinyin: "p\u00ED'm\u00E1o" },
              { chinese: "\u90A3\u91CC", pinyin: "n\u00E0'l\u01D0" },
              { chinese: "\u77E5\u8BC6", pinyin: "zh\u012B'shi" },
              { chinese: "\u516C\u56ED", pinyin: "g\u014Dngyu\u00E1n" },
              { chinese: "\u5B83\u4EEC", pinyin: "t\u0101'men" },
              { chinese: "\u5979\u7684", pinyin: "t\u0101de" },
              { chinese: "\u66F4\u52A0", pinyin: "g\u00E8ngji\u0101" },
              {
                chinese: "\u56DB\u6D77\u4E3A\u5BB6",
                pinyin: "s\u00EC'h\u01CEi'w\u00E9i'ji\u0101",
              },
              { chinese: "\u56E0\u4E3A", pinyin: "y\u012Bnw\u00E9i" },
            ],
          },
          {
            names: {
              en: "Words 2",
              zh_cn: "\u8BCD\u8BED2",
              zh_tw: "\u8A5E\u8A9E2",
            },
            words: [
              { chinese: "\u82B1\u56ED", pinyin: "hu\u0101'yu\u00E1n" },
              { chinese: "\u77F3\u6865", pinyin: "sh\u00ED'qi\u00E1o" },
              { chinese: "\u961F\u65D7", pinyin: "du\u00EC'q\u00ED" },
              { chinese: "\u94DC\u53F7", pinyin: "t\u00F3ng'h\u00E0o" },
              { chinese: "\u6B22\u7B11", pinyin: "hu\u0101n'xi\u00E0o" },
              {
                chinese: "\u7EA2\u9886\u5DFE",
                pinyin: "h\u00F3ng'l\u01D0ng'j\u012Bn",
              },
              { chinese: "\u5230\u5904", pinyin: "d\u00E0och\u00F9" },
              { chinese: "\u4EBA\u7FA4", pinyin: "r\u00E9n'q\u00FAn" },
              { chinese: "\u6768\u6811", pinyin: "y\u00E1ng'sh\u00F9" },
              { chinese: "\u6811\u53F6", pinyin: "sh\u00F9'y\u00E8" },
              { chinese: "\u67AB\u6811", pinyin: "f\u0113ng'sh\u00F9" },
              { chinese: "\u677E\u67CF", pinyin: "s\u014Dng'b\u01CEi" },
              { chinese: "\u6728\u68C9", pinyin: "m\u00F9'mi\u00E1n" },
              { chinese: "\u6C34\u6749", pinyin: "shu\u01D0'sh\u0101n" },
              { chinese: "\u5316\u77F3", pinyin: "hu\u00E0'sh\u00ED" },
              { chinese: "\u91D1\u6842", pinyin: "j\u012Bn'gu\u00EC" },
              { chinese: "\u58EE\u4E3D", pinyin: "zhu\u00E0ngl\u00EC" },
              { chinese: "\u68A7\u6850", pinyin: "w\u00FAt\u00F3ng" },
              { chinese: "\u5199\u5B57", pinyin: "xi\u011B'z\u00EC" },
              { chinese: "\u4E1B\u6797", pinyin: "c\u00F3ng'l\u00EDn" },
              { chinese: "\u6DF1\u5904", pinyin: "sh\u0113n'ch\u00F9" },
              { chinese: "\u7AF9\u6797", pinyin: "zh\u00FAl\u00EDn" },
              { chinese: "\u718A\u732B", pinyin: "xi\u00F3ng'm\u0101o" },
              { chinese: "\u670B\u53CB", pinyin: "p\u00E9ng'you" },
              { chinese: "\u5531\u6B4C", pinyin: "ch\u00E0ng'g\u0113" },
              { chinese: "\u56DB\u5B63", pinyin: "s\u00EC'j\u00EC" },
              { chinese: "\u519C\u4E8B", pinyin: "n\u00F3ng'sh\u00EC" },
              { chinese: "\u6708\u5149", pinyin: "yu\u00E8'gu\u0101ng" },
              { chinese: "\u8F9B\u82E6", pinyin: "x\u012Bn'k\u01D4" },
              { chinese: "\u68C9\u8863", pinyin: "mi\u00E1n'y\u012B" },
              { chinese: "\u5439\u98CE", pinyin: "chu\u012Bf\u0113ng" },
              { chinese: "\u5316\u80A5", pinyin: "hu\u00E0f\u00E9i" },
              { chinese: "\u519C\u5FD9", pinyin: "n\u00F3ngm\u00E1ng" },
              { chinese: "\u5F52\u6765", pinyin: "gu\u012Bl\u00E1i" },
              { chinese: "\u56DE\u5F52", pinyin: "hu\u00EDgu\u012B" },
              { chinese: "\u7231\u6234", pinyin: "\u00E0id\u00E0i" },
              {
                chinese: "\u6234\u7EA2\u9886\u5DFE",
                pinyin: "d\u00E0ih\u00F3ngl\u01D0ngj\u012Bn",
              },
              {
                chinese: "\u516D\u5341\u4E5D",
                pinyin: "li\u00F9sh\u00EDji\u01D4",
              },
              {
                chinese: "\u62AB\u661F\u6234\u6708",
                pinyin: "p\u012Bx\u012Bngd\u00E0iyu\u00E8",
              },
            ],
          },
          {
            names: {
              en: "Words 3",
              zh_cn: "\u8BCD\u8BED3",
              zh_tw: "\u8A5E\u8A9E3",
            },
            words: [
              { chinese: "\u4E00\u540C", pinyin: "y\u00EC't\u00F3ng" },
              { chinese: "\u67F1\u5B50", pinyin: "zh\u00F9'zi" },
              { chinese: "\u4E00\u8FB9", pinyin: "y\u00EC'bi\u0101n" },
              { chinese: "\u5230\u5E95", pinyin: "d\u00E0o'd\u01D0" },
              { chinese: "\u79E4\u6746", pinyin: "ch\u00E8ng'g\u01CEn" },
              { chinese: "\u529B\u6C14", pinyin: "l\u00EC'qi" },
              { chinese: "\u51FA\u6765", pinyin: "ch\u016B'l\u00E1i" },
              { chinese: "\u8239\u8EAB", pinyin: "chu\u00E1n'sh\u0113n" },
              { chinese: "\u77F3\u5934", pinyin: "sh\u00ED'tou" },
              { chinese: "\u5730\u65B9", pinyin: "d\u00EC'f\u0101ng" },
              { chinese: "\u679C\u7136", pinyin: "gu\u01D2'r\u00E1n" },
              { chinese: "\u79F0\u547C", pinyin: "ch\u0113ng'hu" },
              { chinese: "\u505A\u4E8B", pinyin: "zu\u00F2sh\u00EC" },
              { chinese: "\u5C81\u6708", pinyin: "su\u00EC'yu\u00E8" },
              { chinese: "\u7AD9\u7ACB", pinyin: "zh\u00E0nl\u00EC" },
              { chinese: "\u8BC4\u5956", pinyin: "p\u00EDng'ji\u01CEng" },
              { chinese: "\u65F6\u95F4", pinyin: "sh\u00ED'ji\u0101n" },
              { chinese: "\u62A5\u7EB8", pinyin: "b\u00E0o'zh\u01D0" },
              { chinese: "\u4E8B\u60C5", pinyin: "sh\u00EC'qing" },
              { chinese: "\u597D\u4E8B", pinyin: "h\u01CE'osh\u00EC" },
              { chinese: "\u574F\u4E8B", pinyin: "hu\u00E0i'sh\u00EC" },
              { chinese: "\u53E6\u5916", pinyin: "l\u00ECng'w\u00E0i" },
              { chinese: "\u4E00\u5E76", pinyin: "y\u00ED'b\u00ECng" },
              { chinese: "\u6765\u4E0D\u53CA", pinyin: "l\u00E1i'bu'j\u00ED" },
              { chinese: "\u6349\u62FF", pinyin: "zhu\u014D'n\u00E1" },
              {
                chinese: "\u62FF\u4E1C\u897F",
                pinyin: "n\u00E1d\u014Dngx\u012B",
              },
              {
                chinese: "\u4E00\u5E45\u753B",
                pinyin: "y\u012B'f\u00FA'hu\u00E0",
              },
              {
                chinese: "\u4E00\u5C01\u4FE1",
                pinyin: "y\u012B'f\u0113ng'x\u00ECn",
              },
              { chinese: "\u51FA\u56FD", pinyin: "ch\u016B'gu\u00F3" },
              { chinese: "\u4ECA\u5929", pinyin: "j\u012Bn'ti\u0101n" },
              { chinese: "\u5F00\u5FC3", pinyin: "k\u0101i'x\u012Bn" },
              { chinese: "\u4EE5\u524D", pinyin: "y\u01D0'qi\u00E1n" },
              { chinese: "\u8FD8\u6709", pinyin: "h\u00E1i'y\u01D2u" },
              { chinese: "\u53F0\u706F", pinyin: "t\u00E1i'd\u0113ng" },
              { chinese: "\u8FD9\u65F6", pinyin: "zh\u00E8'sh\u00ED" },
              { chinese: "\u9633\u5149", pinyin: "y\u00E1ng'gu\u0101ng" },
              { chinese: "\u7535\u5F71", pinyin: "di\u00E0n'y\u01D0ng" },
              { chinese: "\u660E\u4EAE", pinyin: "m\u00EDng'li\u00E0ng" },
              { chinese: "\u6545\u4E8B", pinyin: "g\u00F9'shi" },
              {
                chinese: "\u5706\u73E0\u7B14",
                pinyin: "yu\u00E1n'zh\u016B'b\u01D0",
              },
              { chinese: "\u5934\u53D1", pinyin: "t\u00F3u'f\u00E0" },
              { chinese: "\u6C99\u53D1", pinyin: "sh\u0101f\u0101" },
              { chinese: "\u7A97\u5916", pinyin: "chu\u0101ng'w\u00E0i" },
              { chinese: "\u54C4\u4EBA", pinyin: "h\u01D2ng'r\u00E9n" },
              { chinese: "\u6C89\u601D", pinyin: "ch\u00E9n's\u012B" },
              { chinese: "\u9996\u5148", pinyin: "sh\u01D2u'xi\u0101n" },
              { chinese: "\u95ED\u773C", pinyin: "b\u00EC'y\u01CEn" },
              { chinese: "\u5706\u8138", pinyin: "yu\u00E1n'li\u01CEn" },
              {
                chinese: "\u7EA2\u7740\u8138",
                pinyin: "h\u00F3ngzheli\u01CEn",
              },
              { chinese: "\u5173\u95ED", pinyin: "gu\u0101nb\u00EC" },
              { chinese: "\u62FF\u7740", pinyin: "n\u00E1zhe" },
              {
                chinese: "\u505A\u624B\u5DE5",
                pinyin: "zu\u00F2'sh\u01D2u'g\u014Dng",
              },
              {
                chinese: "\u4E00\u652F\u7B14",
                pinyin: "y\u012B'zh\u012B'b\u01D0",
              },
            ],
          },
          {
            names: {
              en: "Words 4",
              zh_cn: "\u8BCD\u8BED4",
              zh_tw: "\u8A5E\u8A9E4",
            },
            words: [
              { chinese: "\u4F9D\u7167", pinyin: "y\u012Bzh\u00E0o" },
              { chinese: "\u5C3D\u5934", pinyin: "j\u00ECnt\u00F3u" },
              { chinese: "\u9EC4\u6CB3", pinyin: "hu\u00E1ngh\u00E9" },
              { chinese: "\u5C42\u6B21", pinyin: "c\u00E9ngc\u00EC" },
              { chinese: "\u9999\u7089", pinyin: "xi\u0101ngl\u00FA" },
              { chinese: "\u9999\u70DF", pinyin: "xi\u0101ngy\u0101n" },
              { chinese: "\u6302\u4F4F", pinyin: "gu\u00E0zh\u00F9" },
              {
                chinese: "\u540D\u5C71\u5927\u5DDD",
                pinyin: "m\u00EDngsh\u0101nd\u00E0chu\u0101n",
              },
              { chinese: "\u9EC4\u5C71", pinyin: "hu\u00E1ng'sh\u0101n" },
              { chinese: "\u5357\u90E8", pinyin: "n\u00E1n'b\u00F9" },
              { chinese: "\u90A3\u4E9B", pinyin: "n\u00E0'xi\u0113" },
              { chinese: "\u5C71\u9876", pinyin: "sh\u0101n'd\u01D0ng" },
              { chinese: "\u4E91\u6D77", pinyin: "y\u00FAn'h\u01CEi" },
              { chinese: "\u5DE8\u77F3", pinyin: "j\u00F9'sh\u00ED" },
              { chinese: "\u524D\u65B9", pinyin: "qi\u00E1n'f\u0101ng" },
              { chinese: "\u6BCF\u5F53", pinyin: "m\u011Bi'd\u0101ng" },
              { chinese: "\u5B83\u4EEC", pinyin: "t\u0101'men" },
              { chinese: "\u90E8\u4F4D", pinyin: "b\u00F9w\u00E8i" },
              { chinese: "\u65B9\u5411", pinyin: "f\u0101ngxi\u00E0ng" },
              { chinese: "\u5347\u65D7", pinyin: "sh\u0113ngq\u00ED" },
              { chinese: "\u72D7\u718A", pinyin: "g\u01D2uxi\u00F3ng" },
              {
                chinese: "\u4E00\u52A8\u4E0D\u52A8",
                pinyin: "y\u012B'd\u00F2ng'bu'd\u00F2ng",
              },
              { chinese: "\u7FA4\u5C71", pinyin: "q\u00FAn'sh\u0101n" },
              { chinese: "\u6811\u6728", pinyin: "sh\u00F9'm\u00F9" },
              { chinese: "\u4E2D\u592E", pinyin: "zh\u014Dng'y\u0101ng" },
              { chinese: "\u7F8E\u4E3D", pinyin: "m\u011Bi'l\u00EC" },
              { chinese: "\u706F\u5149", pinyin: "d\u0113ng'gu\u0101ng" },
              { chinese: "\u4E2D\u5348", pinyin: "zh\u014Dng'w\u01D4" },
              { chinese: "\u5C55\u73B0", pinyin: "zh\u01CEn'xi\u00E0n" },
              { chinese: "\u98CE\u5149", pinyin: "f\u0113ng'gu\u0101ng" },
              { chinese: "\u53F0\u6E7E", pinyin: "t\u00E1iw\u0101n" },
              {
                chinese: "\u91D1\u5149\u95EA\u95EA",
                pinyin: "j\u012Bn'gu\u0101ng'sh\u01CEn'sh\u01CEn",
              },
              {
                chinese: "\u540D\u80DC\u53E4\u8FF9",
                pinyin: "m\u00EDng'sh\u00E8ng'g\u01D4'j\u00EC",
              },
              { chinese: "\u51FA\u4EA7", pinyin: "ch\u016B'ch\u01CEn" },
              { chinese: "\u6C34\u679C", pinyin: "shu\u01D0'gu\u01D2" },
              { chinese: "\u6708\u4EFD", pinyin: "yu\u00E8'f\u00E8n" },
              { chinese: "\u5C71\u5761", pinyin: "sh\u0101np\u014D" },
              { chinese: "\u679D\u53F6", pinyin: "zh\u012B'y\u00E8" },
              { chinese: "\u5C55\u5F00", pinyin: "zh\u01CEn'k\u0101i" },
              { chinese: "\u597D\u5BA2", pinyin: "h\u00E0o'k\u00E8" },
              { chinese: "\u8001\u4E61", pinyin: "l\u01CEo'xi\u0101ng" },
              { chinese: "\u57CE\u5E02", pinyin: "ch\u00E9ng'sh\u00EC" },
              { chinese: "\u7A7A\u6C14", pinyin: "k\u014Dng'q\u00EC" },
              { chinese: "\u6C34\u5206", pinyin: "shu\u01D0'f\u00E8n" },
              { chinese: "\u8D77\u6765", pinyin: "q\u01D0'l\u00E1i" },
              { chinese: "\u6536\u6210", pinyin: "sh\u014Duch\u00E9ng" },
              { chinese: "\u6536\u5165", pinyin: "sh\u014Dur\u00F9" },
              { chinese: "\u4E00\u8D77", pinyin: "y\u00ECq\u01D0" },
              {
                chinese: "\u4E94\u5149\u5341\u8272",
                pinyin: "w\u01D4'gu\u0101ng'sh\u00ED's\u00E8",
              },
              { chinese: "\u5C71\u57CE", pinyin: "sh\u0101n'ch\u00E9ng" },
            ],
          },
          {
            names: {
              en: "Words 5",
              zh_cn: "\u8BCD\u8BED5",
              zh_tw: "\u8A5E\u8A9E5",
            },
            words: [
              {
                chinese: "\u5750\u4E95\u89C2\u5929",
                pinyin: "zu\u00F2'j\u01D0ng'gu\u0101n'ti\u0101n",
              },
              { chinese: "\u4E95\u6CBF", pinyin: "j\u01D0ng'y\u00E1n" },
              { chinese: "\u56DE\u7B54", pinyin: "hu\u00ED'd\u00E1" },
              { chinese: "\u53E3\u6E34", pinyin: "k\u01D2u'k\u011B" },
              { chinese: "\u5927\u8BDD", pinyin: "d\u00E0'hu\u00E0" },
              { chinese: "\u4E95\u53E3", pinyin: "j\u01D0ngk\u01D2u" },
              {
                chinese: "\u65E0\u8FB9\u65E0\u9645",
                pinyin: "w\u00FA'bi\u0101n'w\u00FA'j\u00EC",
              },
              { chinese: "\u559D\u6C34", pinyin: "h\u0113shu\u01D0" },
              { chinese: "\u5C71\u811A", pinyin: "sh\u0101n'ji\u01CEo" },
              { chinese: "\u5F53\u4F5C", pinyin: "d\u00E0ng'zu\u00F2" },
              { chinese: "\u524D\u9762", pinyin: "qi\u00E1n'mian" },
              { chinese: "\u6674\u6717", pinyin: "q\u00EDng'l\u01CEng" },
              { chinese: "\u67AF\u8349", pinyin: "k\u016B'c\u01CEo" },
              { chinese: "\u6B63\u597D", pinyin: "zh\u00E8ng'h\u01CEo" },
              { chinese: "\u6E05\u65E9", pinyin: "q\u012Bng'z\u01CEo" },
              { chinese: "\u73B0\u5728", pinyin: "xi\u00E0n'z\u00E0i" },
              { chinese: "\u5C06\u6765", pinyin: "ji\u0101ng'l\u00E1i" },
              { chinese: "\u96BE\u8FC7", pinyin: "n\u00E1n'gu\u00F2" },
              {
                chinese: "\u5927\u96EA\u7EB7\u98DE",
                pinyin: "d\u00E0'xu\u011B'f\u0113n'f\u0113i",
              },
              { chinese: "\u679D\u5934", pinyin: "zh\u012B't\u00F3u" },
              { chinese: "\u5374\u662F", pinyin: "qu\u00E8'sh\u00EC" },
              {
                chinese: "\u4E00\u9635\u98CE",
                pinyin: "y\u00ED'zh\u00E8n'f\u0113ng",
              },
              { chinese: "\u7B2C\u4E00", pinyin: "d\u00ECy\u012B" },
              { chinese: "\u4ECE\u524D", pinyin: "c\u00F3ng'qi\u00E1n" },
              { chinese: "\u7EC6\u957F", pinyin: "x\u00EC'ch\u00E1ng" },
              { chinese: "\u53EF\u7231", pinyin: "k\u011B'\u00E0i" },
              { chinese: "\u6BCF\u5929", pinyin: "m\u011Bi'ti\u0101n" },
              {
                chinese: "\u81EA\u8A00\u81EA\u8BED",
                pinyin: "z\u00EC'y\u00E1n'z\u00EC'y\u01D4",
              },
              { chinese: "\u5357\u74DC", pinyin: "n\u00E1n'gu\u0101" },
              { chinese: "\u90BB\u5C45", pinyin: "l\u00EDn'j\u016B" },
              { chinese: "\u5947\u602A", pinyin: "q\u00ED'gu\u00E0i" },
              {
                chinese: "\u4E00\u68F5\u6811",
                pinyin: "y\u012Bk\u0113sh\u00F9",
              },
              { chinese: "\u8C22\u8C22", pinyin: "xi\u00E8'xi\u00E8" },
              { chinese: "\u60F3\u6CD5", pinyin: "xi\u01CEngf\u01CE" },
              { chinese: "\u76EF\u7740", pinyin: "d\u012Bngzhe" },
              { chinese: "\u6CBB\u75C5", pinyin: "zh\u00ECb\u00ECng" },
            ],
          },
          {
            names: {
              en: "Words 6",
              zh_cn: "\u8BCD\u8BED6",
              zh_tw: "\u8A5E\u8A9E6",
            },
            words: [
              {
                chinese: "\u516B\u89D2\u697C",
                pinyin: "b\u0101'ji\u01CEo'l\u00F3u",
              },
              { chinese: "\u6DF1\u591C", pinyin: "sh\u0113n'y\u00E8" },
              { chinese: "\u519B\u8863", pinyin: "j\u016Bn'y\u012B" },
              {
                chinese: "\u661F\u661F\u4E4B\u706B",
                pinyin: "x\u012Bng'x\u012Bng'zh\u012B'hu\u01D2",
              },
              { chinese: "\u6C89\u601D", pinyin: "ch\u00E9n's\u012B" },
              { chinese: "\u80DC\u5229", pinyin: "sh\u00E8ng'l\u00EC" },
              { chinese: "\u8FC7\u5E74", pinyin: "gu\u00F2ni\u00E1n" },
              { chinese: "\u8F7B\u677E", pinyin: "q\u012Bngs\u014Dng" },
              {
                chinese: "\u62AB\u661F\u6234\u6708",
                pinyin: "p\u012Bx\u012Bngd\u00E0iyu\u00E8",
              },
              { chinese: "\u6241\u62C5", pinyin: "bi\u01CEn'dan" },
              { chinese: "\u540C\u5FD7", pinyin: "t\u00F3ng'zh\u00EC" },
              { chinese: "\u5E26\u9886", pinyin: "d\u00E0i'l\u01D0ng" },
              { chinese: "\u961F\u4F0D", pinyin: "du\u00EC'w\u01D4" },
              { chinese: "\u4F1A\u5E08", pinyin: "hu\u00EC'sh\u012B" },
              { chinese: "\u7EA2\u519B", pinyin: "h\u00F3ng'j\u016Bn" },
              { chinese: "\u6765\u56DE", pinyin: "l\u00E1i'hu\u00ED" },
              { chinese: "\u6218\u58EB", pinyin: "zh\u00E0n'sh\u00EC" },
              { chinese: "\u767D\u5929", pinyin: "b\u00E1i'ti\u0101n" },
              { chinese: "\u8D77\u6765", pinyin: "q\u01D0'l\u00E1i" },
              { chinese: "\u96BE\u5FD8", pinyin: "n\u00E1n'w\u00E0ng" },
              { chinese: "\u9F99\u8239", pinyin: "l\u00F3ng'chu\u00E1n" },
              { chinese: "\u82B1\u70AE", pinyin: "hu\u0101p\u00E0o" },
              {
                chinese: "\u6CFC\u6C34\u8282",
                pinyin: "p\u014D'shu\u01D0'ji\u00E9",
              },
              { chinese: "\u6B22\u547C", pinyin: "hu\u0101n'h\u016B" },
              { chinese: "\u4EBA\u7FA4", pinyin: "r\u00E9n'q\u00FAn" },
              { chinese: "\u6B22\u4E50", pinyin: "hu\u0101n'l\u00E8" },
              { chinese: "\u5F00\u59CB", pinyin: "k\u0101i'sh\u01D0" },
              { chinese: "\u591A\u4E48", pinyin: "du\u014D'me" },
              {
                chinese: "\u67CF\u6811\u679D",
                pinyin: "b\u01CEi'sh\u00F9'zh\u012B",
              },
              {
                chinese: "\u4E00\u5E74\u4E00\u5EA6",
                pinyin: "y\u00EC'ni\u00E1n'y\u00ED'd\u00F9",
              },
              {
                chinese: "\u56DB\u9762\u516B\u65B9",
                pinyin: "s\u00EC'mi\u00E0n'b\u0101'f\u0101ng",
              },
              { chinese: "\u7A7F\u6234", pinyin: "chu\u0101nd\u00E0i" },
              { chinese: "\u53E3\u4EE4", pinyin: "k\u01D2ul\u00ECng" },
              { chinese: "\u5E74\u8F7B", pinyin: "ni\u00E1n'q\u012Bng" },
              { chinese: "\u6751\u5B50", pinyin: "c\u016Bn'zi" },
              { chinese: "\u77E5\u9053", pinyin: "zh\u012B'd\u00E0o" },
              { chinese: "\u5E7F\u573A", pinyin: "gu\u01CEng'ch\u01CEng" },
              { chinese: "\u6C11\u5175", pinyin: "m\u00EDn'b\u012Bng" },
              { chinese: "\u59D3\u5218", pinyin: "x\u00ECngli\u00FA" },
              { chinese: "\u9020\u53CD", pinyin: "z\u00E0of\u01CEn" },
              { chinese: "\u5173\u95ED", pinyin: "gu\u0101nb\u00EC" },
              { chinese: "\u88AB\u5B50", pinyin: "b\u00E8izi" },
              { chinese: "\u68C9\u88AB", pinyin: "mi\u00E1nb\u00E8i" },
              { chinese: "\u82B1\u5730", pinyin: "hu\u0101'd\u00EC" },
            ],
          },
          {
            names: {
              en: "Words 7",
              zh_cn: "\u8BCD\u8BED7",
              zh_tw: "\u8A5E\u8A9E7",
            },
            words: [
              { chinese: "\u5B89\u5371", pinyin: "\u0101nw\u0113i" },
              { chinese: "\u4E0D\u6562", pinyin: "b\u00F9g\u01CEn" },
              { chinese: "\u60CA\u5413", pinyin: "j\u012Bngxi\u00E0" },
              { chinese: "\u9634\u51C9", pinyin: "y\u012Bnli\u00E1ng" },
              {
                chinese: "\u76F8\u4F3C\u91CE\u5916",
                pinyin: "xi\u0101ngs\u00ECy\u011Bw\u00E0i",
              },
              { chinese: "\u7530\u91CE", pinyin: "ti\u00E1n'y\u011B" },
              { chinese: "\u82CD\u5929", pinyin: "c\u0101ngti\u0101n" },
              { chinese: "\u832B\u7136", pinyin: "m\u00E1ngr\u00E1n" },
              {
                chinese: "\u767D\u53D1\u82CD\u82CD",
                pinyin: "b\u00E1if\u00E0c\u0101ngc\u0101ng",
              },
              {
                chinese: "\u767D\u832B\u832B",
                pinyin: "b\u00E1im\u00E1ngm\u00E1ng",
              },
              { chinese: "\u4E8E\u662F", pinyin: "y\u00FA'sh\u00EC" },
              { chinese: "\u65E0\u8BBA", pinyin: "w\u00FA'l\u00F9n" },
              { chinese: "\u8239\u53EA", pinyin: "chu\u00E1n'zh\u012B" },
              { chinese: "\u8FDE\u540C", pinyin: "li\u00E1n't\u00F3ng" },
              { chinese: "\u5CB8\u8FB9", pinyin: "\u00E0n'bi\u0101n" },
              { chinese: "\u540C\u65F6", pinyin: "t\u00F3ng'sh\u00ED" },
              { chinese: "\u623F\u5C4B", pinyin: "f\u00E1ng'w\u016B" },
              { chinese: "\u4E00\u5207", pinyin: "y\u00ED'qi\u00E8" },
              { chinese: "\u4E0D\u4E45", pinyin: "b\u00F9'ji\u01D4" },
              { chinese: "\u51FA\u73B0", pinyin: "ch\u016B'xi\u00E0n" },
              { chinese: "\u6563\u6B65", pinyin: "s\u00E0n'b\u00F9" },
              { chinese: "\u7A7A\u5730", pinyin: "k\u00F2ng'd\u00EC" },
              { chinese: "\u5531\u6B4C", pinyin: "ch\u00E0ng'g\u0113" },
              { chinese: "\u56DE\u5BB6", pinyin: "hu\u00ED'ji\u0101" },
              { chinese: "\u8D76\u5FEB", pinyin: "g\u01CEn'ku\u00E0i" },
              { chinese: "\u65C1\u8FB9", pinyin: "p\u00E1ng'bi\u0101n" },
              { chinese: "\u706B\u661F", pinyin: "hu\u01D2'x\u012Bng" },
              { chinese: "\u8FDE\u5FD9", pinyin: "li\u00E1n'm\u00E1ng" },
              { chinese: "\u6D51\u8EAB", pinyin: "h\u00FAn'sh\u0113n" },
              { chinese: "\u65F6\u5019", pinyin: "sh\u00ED'hou" },
              { chinese: "\u8C22\u8C22", pinyin: "xi\u00E8'xi\u00E8" },
              { chinese: "\u6C34\u6C7D", pinyin: "shu\u01D0'q\u00EC" },
              { chinese: "\u5174\u65FA", pinyin: "x\u012Bngw\u00E0ng" },
              { chinese: "\u8C01\u7684", pinyin: "shu\u00EDde" },
            ],
          },
          {
            names: {
              en: "Words 8",
              zh_cn: "\u8BCD\u8BED8",
              zh_tw: "\u8A5E\u8A9E8",
            },
            words: [
              { chinese: "\u98DF\u7269", pinyin: "sh\u00ED'w\u00F9" },
              { chinese: "\u8EAB\u8FB9", pinyin: "sh\u0113n'bi\u0101n" },
              { chinese: "\u722A\u5B50", pinyin: "zhu\u01CE'zi" },
              { chinese: "\u9762\u524D", pinyin: "mi\u00E0n'qi\u00E1n" },
              { chinese: "\u91CE\u732A", pinyin: "y\u011B'zh\u016B" },
              {
                chinese: "\u4E3A\u4EC0\u4E48",
                pinyin: "w\u00E8i'sh\u00E9n'me",
              },
              {
                chinese: "\u5F80\u5E38\u8EAB\u540E",
                pinyin: "w\u01CEngch\u00E1ngsh\u0113nh\u00F2u",
              },
              { chinese: "\u7237\u7237", pinyin: "y\u00E9ye" },
              {
                chinese: "\u795E\u6C14\u6D3B\u73B0",
                pinyin: "sh\u00E9n'q\u00EC'hu\u00F3'xi\u00E0n",
              },
              {
                chinese: "\u4FE1\u4EE5\u4E3A\u771F",
                pinyin: "x\u00ECn'y\u01D0'w\u00E9i'zh\u0113n",
              },
              { chinese: "\u5C31\u662F", pinyin: "ji\u00F9sh\u00EC" },
              { chinese: "\u7EB8\u8239", pinyin: "zh\u01D0'chu\u00E1n" },
              { chinese: "\u677E\u679C", pinyin: "s\u014Dng'gu\u01D2" },
              { chinese: "\u7EB8\u6761", pinyin: "zh\u01D0'ti\u00E1o" },
              { chinese: "\u53EF\u662F", pinyin: "k\u011B'sh\u00EC" },
              { chinese: "\u4F46\u662F", pinyin: "d\u00E0n'sh\u00EC" },
              { chinese: "\u5C4B\u9876", pinyin: "w\u016B'd\u01D0ng" },
              { chinese: "\u548C\u597D", pinyin: "h\u00E9'h\u01CEo" },
              { chinese: "\u6298\u7EB8", pinyin: "zh\u00E9zh\u01D0" },
              { chinese: "\u7EB8\u5F20", pinyin: "zh\u01D0zh\u0101ng" },
              { chinese: "\u795D\u798F", pinyin: "zh\u00F9f\u00FA" },
              { chinese: "\u5305\u624E", pinyin: "b\u0101oz\u0101" },
              { chinese: "\u6293\u4F4F", pinyin: "zhu\u0101zh\u00F9" },
              { chinese: "\u5F88\u5435", pinyin: "h\u011Bnch\u01CEo" },
              { chinese: "\u54ED\u58F0", pinyin: "k\u016Bsh\u0113ng" },
              { chinese: "\u7530\u91CE", pinyin: "ti\u00E1n'y\u011B" },
              { chinese: "\u98CE\u8F66", pinyin: "f\u0113ng'ch\u0113" },
              { chinese: "\u98DE\u5FEB", pinyin: "f\u0113i'ku\u00E0i" },
              { chinese: "\u79E7\u82D7", pinyin: "y\u0101ng'mi\u00E1o" },
              { chinese: "\u4E0D\u4F4F", pinyin: "b\u00FA'zh\u00F9" },
              { chinese: "\u70B9\u5934", pinyin: "di\u01CEn't\u00F3u" },
              { chinese: "\u6025\u5FD9", pinyin: "j\u00ED'm\u00E1ng" },
              { chinese: "\u4F24\u5FC3", pinyin: "sh\u0101ng'x\u012Bn" },
              { chinese: "\u8DEF\u8FB9", pinyin: "l\u00F9'bi\u0101n" },
              { chinese: "\u751F\u6C14", pinyin: "sh\u0113ng'q\u00EC" },
              { chinese: "\u5F97\u5230", pinyin: "d\u00E9d\u00E0o" },
              { chinese: "\u6C57\u6C34", pinyin: "h\u00E0nshu\u01D0" },
              { chinese: "\u573A\u5730", pinyin: "ch\u01CEngd\u00EC" },
              {
                chinese: "\u8DD1\u5F97\u5F88\u5FEB",
                pinyin: "p\u01CEod\u00E9h\u011Bnku\u00E0i",
              },
              { chinese: "\u5F80\u5E38", pinyin: "w\u01CEng'ch\u00E1ng" },
              { chinese: "\u8EAB\u540E", pinyin: "sh\u0113n'h\u00F2u" },
            ],
          },
        ],
      });
    };
    return _this;
  }
  return CopybookBase;
}(BrickBase));

// import * as boxSpace from './box.ts';
var BoxBase = /** @class */ (function (_super) {
  __extends(BoxBase, _super);
  /** OK
   * 构造方法
   */
  function BoxBase() {
    var _this = _super.call(this, {
      topWithoutHalfCircle: false,
    }, {}) || this;
    _this.idOrClassPrefix = "brickPageBox";
    _this.updateOtherDataLevel3 = function (newData) {
      var topWithoutHalfCircle = newData.topWithoutHalfCircle;
      var _a = _this,
        data = _a.data,
        topWithoutHalfCircleRadioArray = _a.topWithoutHalfCircleRadioArray;
      data.topWithoutHalfCircle = topWithoutHalfCircle;
      topWithoutHalfCircleRadioArray[topWithoutHalfCircle ? 1 : 0].checked =
        true;
    };
    /** OK
     * 初始化表格上方控件（通用两行控件除外）
     */
    _this.initCoreElementsBeforeTable = function () {
      var _a = _this,
        configCoreElement = _a.configCoreElement,
        getWrapElement = _a.getWrapElement,
        idOrClassPrefix = _a.idOrClassPrefix;
      var wrapElement;
      wrapElement = getWrapElement({
        en: "Top Half Circle",
        zh_cn: "顶部半圆",
        zh_tw: "頂部半圓",
      });
      wrapElement.id = "".concat(idOrClassPrefix, "HalfCircleWrap");
      _this.initRadioGroupByBooleanOrNumberValue(
        [
          {
            value: false,
            i18nHtml: getI18nInnerHTML({
              en: "Hide",
              zh_cn: "无",
              zh_tw: "無",
            }),
          },
          {
            value: true,
            i18nHtml: getI18nInnerHTML({
              en: "Show",
              zh_cn: "有",
              zh_tw: "有",
            }),
          },
        ],
        "topWithoutHalfCircle",
        _this.topWithoutHalfCircleRadioArray,
        wrapElement,
      );
    };
    _this.topWithoutHalfCircleRadioArray = [];
    _this.updateOtherDataOfBox = function (newData) {};
    // protected abstract initOtherElements(): void;
    _this.countDataAndComputedData = function () {
      _this.countDataAndComputedDataInBrickWithTableBase();
      var BoxGenerator = boxSpace.edu.sonya.cc.BoxGenerator;
      var boxGenerator = new BoxGenerator();
      var _a = _this, data = _a.data, computedData = _a.computedData;
      var paperSize = data.paperSize,
        isLandscape = data.isLandscape,
        MAX_X = data.maxX,
        MAX_Y = data.maxY,
        pageMarginTop = data.pageMarginTop,
        // pageMarginBottom,
        pageMarginLeft = data.pageMarginLeft,
        // pageMarginRight,
        list = data.list,
        topWithoutHalfCircle = data.topWithoutHalfCircle;
      var css =
        "/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    page { display:flex;flex-flow:wrap; }\n    page:not(page:last-child){page-break-after:always;}\n    \n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n    @media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; } }\n    /* height:",
          ).concat(MAX_Y, "mm; */\n    page { width:").concat(
            MAX_X,
            "mm;margin-left:",
          ).concat(pageMarginLeft, "mm;margin-top:").concat(
            pageMarginTop,
            "mm; }\n    ",
          );
      // let html = '';
      // const page = createElement('page') as HTMLElement;
      var svgList = [];
      list.forEach(function (_a) {
        var id = _a.id,
          boxKind = _a.boxKind,
          lengths = _a.lengths,
          contents = _a.contents,
          outerLineStyle = _a.outerLineStyle,
          innerLineStyle = _a.innerLineStyle,
          textStyle = _a.textStyle,
          rotate = _a.rotate,
          move = _a.move,
          options = _a.options;
        var _b = boxGenerator.create({
            id: id,
            boxKind: boxKind,
            lengths: lengths,
            contents: contents,
            outerLineStyle: outerLineStyle,
            innerLineStyle: innerLineStyle,
            textStyle: textStyle,
            rotate: rotate,
            move: move,
            topWithoutHalfCircle: topWithoutHalfCircle,
            options: options,
          }),
          svgCss = _b.css,
          svg = _b.svg;
        // html += svg.outerHTML;
        // page.appendChild(svg);
        svgList.push(svg);
        css += svgCss;
      });
      var en = "".concat(FILENAME_POSTFIX, "Boxs");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u76D2\u5B50");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u76D2\u5B50");
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      // computedData.html = html;
      computedData.html = _this.getAutomaticPaginationHtmlFromChildList(
        svgList,
        MAX_X,
        MAX_Y,
      ); // page.outerHTML;
      // console.log('countDataAndComputedData()', list, computedData );
    };
    _this.idOrClassPrefix = "brickPageBox";
    /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
    _this.getUsableList = function () {
      var usableBoxs = [];
      _this.appendBoxOfCuboid(usableBoxs);
      var usableList = [];
      usableBoxs.forEach(function (_a) {
        var name = _a.name, infos = _a.infos;
        var strongI18n = { en: name, zh_cn: name, zh_tw: name };
        var buttonList = [];
        infos.forEach(function (info) {
          var captionI18n = info.captionI18n;
          buttonList.push({
            nameI18n: typeof captionI18n === "string"
              ? {
                en: captionI18n,
                zh_cn: captionI18n,
                zh_tw: captionI18n,
              }
              : captionI18n,
            info: info,
          });
        });
        usableList.push({
          strongI18n: strongI18n,
          buttonList: buttonList,
        });
      });
      return usableList;
    };
    _this.appendBoxOfCuboid = function (usableBoxs) {
      var BoxKind = boxSpace.edu.sonya.cc.BoxKind;
      var outerLineStyle = "stroke:#555;stroke-width:0.2mm;";
      var innerLineStyle =
        "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;";
      var textStyle = 'font-size:6mm;font-family:"Times New Roman", "Kaiti";';
      var textStyleBig =
        'font-size:8mm;font-family:"Times New Roman", "Kaiti";';
      var contents = getArrayRepeatSameValue("", 6);
      var rotate = false;
      var move = false;
      var otherSize = 10;
      var topWithoutHalfCircle = false;
      var i18nContentsOfRummikub = getArrayRepeatSameValue(
        getI18nInnerHTML({ en: "Rummikub", zh_cn: "拉密", zh_tw: "拉密" }),
        6,
      );
      var infosCuboid = [];
      var infosCuboidCoverOnTheSameSide = [];
      [
        {
          lengths: [40, 20, 56],
          contents: getArrayRepeatSameValue("英文扑克", 6),
          textStyle: textStyle,
          captionI18n: "&nbsp;&nbsp;40<br/>×20<br/>×56",
          captionI18nSameSide: "&nbsp;&nbsp;40<br/>\u00D720<br/>\u00D756<br/>+"
            .concat(otherSize),
          otherSize: otherSize,
        },
        {
          lengths: [56, 50, 80],
          contents: getArrayRepeatSameValue("拼音扑克", 6),
          textStyle: textStyleBig,
          captionI18n: "&nbsp;&nbsp;56<br/>×50<br/>×80",
          captionI18nSameSide: "&nbsp;&nbsp;56<br/>\u00D750<br/>\u00D780<br/>+"
            .concat(otherSize),
          otherSize: otherSize,
        },
        {
          lengths: [18, 50, 25],
          contents: i18nContentsOfRummikub,
          textStyle: textStyleBig,
          captionI18n: {
            en: "&nbsp;&nbsp;18<br/>×50<br/>×25<br/>Rummikub",
            zh_cn: "&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密",
            zh_tw: "&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密",
          },
          captionI18nSameSide: {
            en: "&nbsp;&nbsp;18<br/>\u00D750<br/>\u00D725<br/>+".concat(
              otherSize,
              "<br/>Rummikub",
            ),
            zh_cn: "&nbsp;&nbsp;18<br/>\u00D750<br/>\u00D725<br/>+".concat(
              otherSize,
              "<br/>\u62C9\u5BC6",
            ),
            zh_tw: "&nbsp;&nbsp;18<br/>\u00D750<br/>\u00D725<br/>+".concat(
              otherSize,
              "<br/>\u62C9\u5BC6",
            ),
          },
          otherSize: otherSize,
        },
        {
          lengths: [20, 50, 28],
          contents: i18nContentsOfRummikub,
          textStyle: textStyleBig,
          captionI18n: {
            en: "&nbsp;&nbsp;20<br/>×50<br/>×28<br/>Rummikub",
            zh_cn: "&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密",
            zh_tw: "&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密",
          },
          captionI18nSameSide: {
            en: "&nbsp;&nbsp;20<br/>\u00D750<br/>\u00D728<br/>+".concat(
              otherSize,
              "<br/>Rummikub",
            ),
            zh_cn: "&nbsp;&nbsp;20<br/>\u00D750<br/>\u00D728<br/>+".concat(
              otherSize,
              "<br/>\u62C9\u5BC6",
            ),
            zh_tw: "&nbsp;&nbsp;20<br/>\u00D750<br/>\u00D728<br/>+".concat(
              otherSize,
              "<br/>\u62C9\u5BC6",
            ),
          },
          otherSize: otherSize,
        },
      ].forEach(function (_a) {
        var lengths = _a.lengths,
          contents = _a.contents,
          textStyle = _a.textStyle,
          captionI18n = _a.captionI18n,
          captionI18nSameSide = _a.captionI18nSameSide,
          otherSize = _a.otherSize;
        infosCuboid.push({
          id: "",
          boxKind: BoxKind.cuboid,
          lengths: lengths,
          contents: contents,
          outerLineStyle: outerLineStyle,
          innerLineStyle: innerLineStyle,
          textStyle: textStyle,
          rotate: rotate,
          move: move,
          topWithoutHalfCircle: topWithoutHalfCircle,
          options: {},
          captionI18n: captionI18n,
        });
        infosCuboidCoverOnTheSameSide.push({
          id: "",
          boxKind: BoxKind.cuboidCoverOnTheSameSide,
          lengths: lengths.concat([otherSize]),
          contents: contents,
          outerLineStyle: outerLineStyle,
          innerLineStyle: innerLineStyle,
          textStyle: textStyle,
          rotate: rotate,
          move: move,
          topWithoutHalfCircle: topWithoutHalfCircle,
          options: {},
          captionI18n: captionI18nSameSide,
        });
      });
      [10, 20, 30, 40, 50, 60, 70, 80, 90, 10].forEach(function (size) {
        infosCuboid.push({
          id: "",
          boxKind: BoxKind.cuboid,
          lengths: [size, size, size],
          contents: contents,
          outerLineStyle: outerLineStyle,
          innerLineStyle: innerLineStyle,
          textStyle: textStyle,
          rotate: rotate,
          move: move,
          topWithoutHalfCircle: topWithoutHalfCircle,
          options: {},
          captionI18n: "&nbsp;&nbsp;".concat(size, "<br/>\u00D7").concat(
            size,
            "<br/>\u00D7",
          ).concat(size),
        });
        infosCuboidCoverOnTheSameSide.push({
          id: "",
          boxKind: BoxKind.cuboidCoverOnTheSameSide,
          lengths: [size, size, size, otherSize],
          contents: contents,
          outerLineStyle: outerLineStyle,
          innerLineStyle: innerLineStyle,
          textStyle: textStyle,
          rotate: rotate,
          move: move,
          topWithoutHalfCircle: topWithoutHalfCircle,
          options: {},
          captionI18n: "&nbsp;&nbsp;".concat(size, "<br/>\u00D7").concat(
            size,
            "<br/>\u00D7",
          ).concat(size, "<br/>+").concat(otherSize),
        });
      });
      var infosOfCuboidWithoutBottom = [];
      var infosOfCuboidCoverOnTheSameSideWithoutBottom = [];
      [
        [10, 10, 3],
        [20, 20, 8],
        [30, 30, 10],
        [40, 40, 10],
        [50, 50, 10],
        [60, 60, 10],
        [70, 70, 10],
        [80, 80, 10],
        [90, 90, 10],
      ].forEach(function (lengths) {
        var captionI18n = "&nbsp;&nbsp;".concat(lengths[0], "<br/>\u00D7")
          .concat(lengths[1], "<br/>\u00D7").concat(lengths[2]);
        var otherSize = lengths[2] * 0.5;
        var captionI18nrOnTheSameSideWithoutBottom = captionI18n.concat(
          "<br/>+".concat(otherSize),
        );
        infosOfCuboidCoverOnTheSameSideWithoutBottom.push({
          id: "",
          boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutBottom,
          lengths: lengths.concat([otherSize]),
          contents: contents,
          outerLineStyle: outerLineStyle,
          innerLineStyle: innerLineStyle,
          textStyle: textStyle,
          rotate: rotate,
          move: move,
          topWithoutHalfCircle: topWithoutHalfCircle,
          options: {},
          // captionI18n,
          captionI18n: captionI18nrOnTheSameSideWithoutBottom,
        });
        if (lengths[0] <= 80) {
          infosOfCuboidWithoutBottom.push({
            id: "",
            boxKind: BoxKind.cuboidWithoutBottom,
            lengths: lengths,
            contents: contents,
            outerLineStyle: outerLineStyle,
            innerLineStyle: innerLineStyle,
            textStyle: textStyle,
            rotate: rotate,
            move: move,
            topWithoutHalfCircle: topWithoutHalfCircle,
            options: {},
            captionI18n: captionI18n,
          });
        }
      });
      var infosOfCuboidWithoutTop = [];
      var infosOfCuboidCoverOnTheSameSideWithoutTop = [];
      [
        [9, 9, 10],
        [19, 19, 20],
        [29, 29, 30],
        [39, 39, 40],
        [49, 49, 50],
        [59, 59, 60],
        [69, 69, 70],
        [79, 79, 80],
        [89, 89, 90],
      ].forEach(function (lengths) {
        var captionI18n = "&nbsp;&nbsp;".concat(lengths[0], "<br/>\u00D7")
          .concat(lengths[1], "<br/>\u00D7").concat(lengths[2]);
        var otherSize = lengths[2] * 0.5;
        var captionI18nrOnTheSameSideWithoutBottom = captionI18n.concat(
          "<br/>+".concat(otherSize),
        );
        infosOfCuboidCoverOnTheSameSideWithoutTop.push({
          id: "",
          boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutTop,
          lengths: lengths.concat([otherSize]),
          contents: contents,
          outerLineStyle: outerLineStyle,
          innerLineStyle: innerLineStyle,
          textStyle: textStyle,
          rotate: rotate,
          move: move,
          topWithoutHalfCircle: topWithoutHalfCircle,
          options: {},
          captionI18n: captionI18nrOnTheSameSideWithoutBottom,
        });
        if (lengths[0] <= 80) {
          infosOfCuboidWithoutTop.push({
            id: "",
            boxKind: BoxKind.cuboidWithoutTop,
            lengths: lengths,
            contents: contents,
            outerLineStyle: outerLineStyle,
            innerLineStyle: innerLineStyle,
            textStyle: textStyle,
            rotate: rotate,
            move: move,
            topWithoutHalfCircle: topWithoutHalfCircle,
            options: {},
            captionI18n: captionI18n,
          });
        }
      });
      usableBoxs.push({
        name: getI18nInnerHTML({
          en: "Cuboid",
          zh_cn: "异侧",
          zh_tw: "異側",
        }),
        infos: JSON.parse(JSON.stringify(infosCuboid)),
      });
      usableBoxs.push({
        name: getI18nInnerHTML({
          en: "Cuboid which cover on the same side",
          zh_cn: "盖子同侧",
          zh_tw: "蓋子同側",
        }),
        infos: JSON.parse(JSON.stringify(infosCuboidCoverOnTheSameSide)),
      });
      usableBoxs.push({
        name: getI18nInnerHTML({
          en: "Cuboid without top",
          zh_cn: "异侧无顶",
          zh_tw: "異側無頂",
        }),
        infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutTop)),
      });
      usableBoxs.push({
        name: getI18nInnerHTML({
          en: "Cuboid without bottom",
          zh_cn: "异侧无底",
          zh_tw: "異側無底",
        }),
        infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutBottom)),
      });
      usableBoxs.push({
        name: getI18nInnerHTML({
          en: "Cuboid which cover on the same side and without top",
          zh_cn: "盖子同侧无顶",
          zh_tw: "蓋子同側無頂",
        }),
        infos: JSON.parse(
          JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutTop),
        ),
      });
      usableBoxs.push({
        name: getI18nInnerHTML({
          en: "Cuboid which cover on the same side and without bottom",
          zh_cn: "盖子同侧无底",
          zh_tw: "蓋子同側無底",
        }),
        infos: JSON.parse(
          JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutBottom),
        ),
      });
    };
    _this.createTableBodyRow = function (item) {
      var id = item.id,
        boxKind = item.boxKind,
        lengths = item.lengths,
        contents = item.contents,
        outerLineStyle = item.outerLineStyle,
        innerLineStyle = item.innerLineStyle,
        textStyle = item.textStyle,
        rotate = item.rotate,
        move = item.move,
        options = item.options;
      var _a = _this,
        tableBodyElement = _a.tableBodyElement,
        appendTextareaTd = _a.appendTextareaTd,
        appendCheckboxTdWithoutText = _a.appendCheckboxTdWithoutText;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      _this.appendOperationTd(tr, item);
      // this.appendBoxKindTd(tr, item);
      _this.appendLengthsTd(tr, item);
      _this.appendContentsTd(tr, item);
      appendCheckboxTdWithoutText(tr, rotate, item, "rotate");
      appendCheckboxTdWithoutText(tr, move, item, "move");
      // this.appendTextareaTd(tr, lengths, item, 'lengths', 'numberArray');
      appendTextareaTd(tr, outerLineStyle, item, "outerLineStyle", "string");
      appendTextareaTd(tr, innerLineStyle, item, "innerLineStyle", "string");
      appendTextareaTd(tr, textStyle, item, "textStyle", "string");
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      // this.appendTableHeadCell({ en: 'Id', zh_cn: 'id', zh_tw: 'id' });
      // this.appendTableHeadCell({ en: 'Box Type', zh_cn: '盒子类型', zh_tw: '骰子類型' });
      _this.appendTableHeadCell({
        en: "Relevant length, such as length, width and height",
        zh_cn: "相关长度，如长宽高",
        zh_tw: "相關長度，如長寬高",
      });
      _this.appendTableHeadCell({
        en: "Contents of all sides",
        zh_cn: "各面内容",
        zh_tw: "各面內容",
      });
      _this.appendTableHeadCell({ en: "Rotate", zh_cn: "旋转", zh_tw: "旋轉" });
      _this.appendTableHeadCell({ en: "Move", zh_cn: "上移", zh_tw: "上移" });
      _this.appendTableHeadCell({
        en: "Outside Boundary Line Style",
        zh_cn: "外边界线样式",
        zh_tw: "外邊界線樣式",
      });
      _this.appendTableHeadCell({
        en: "Interior Line Style",
        zh_cn: "内部线样式",
        zh_tw: "內部線樣式",
      });
      _this.appendTableHeadCell({
        en: "Text Style",
        zh_cn: "文本样式",
        zh_tw: "文字樣式",
      });
      // this.appendTableHeadCell({ en: 'Other parameters', zh_cn: '其它参数', zh_tw: '其它參數' });
    };
    // private appendBoxKindTd = (tr: HTMLTableRowElement, box: {boxKind: boxSpace.edu.sonya.cc.BoxKind }):void => {
    //   const BoxKind = boxSpace.edu.sonya.cc.BoxKind;
    //   const td = createElement('td') as HTMLTableCellElement;
    //   tr.appendChild(td);
    //   const span = createElement('span') as HTMLSpanElement;
    //   td.appendChild(span);
    //   let value = '';
    //   switch(box.boxKind) {
    //     case BoxKind.cuboid:
    //       value = getI18nInnerHTML({
    //         en: 'Cuboid',
    //         zh_cn: '长方体',
    //         zh_tw: '長方體',
    //       });
    //       break;
    //     default:
    //       break;
    //   }
    //   span.innerHTML = value;
    // }
    _this.appendLengthsTd = function (tr, box) {
      var td = createElement("td");
      tr.appendChild(td);
      box.lengths.forEach(function (length, index) {
        var input = createElement("input");
        td.appendChild(input);
        input.type = "number";
        input.setAttribute("min", "0");
        input.setAttribute("max", "200");
        input.value = length.toString();
        input.onchange = input.focus = function () {
          box.lengths[index] = parseFloat(input.value);
          _this.build();
        };
      });
    };
    _this.appendContentsTd = function (tr, box) {
      var td = createElement("td");
      tr.appendChild(td);
      var BoxKind = boxSpace.edu.sonya.cc.BoxKind;
      var boxKind = box.boxKind, contents = box.contents;
      var idOrClassPrefix = _this.idOrClassPrefix;
      var count = 0;
      switch (boxKind) {
        // case BoxKind.four:
        //   count = 4;
        //   break;
        case BoxKind.cuboid:
        case BoxKind.cuboidWithoutTop:
        case BoxKind.cuboidWithoutBottom:
        case BoxKind.cuboidCoverOnTheSameSide:
        case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
        case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
          count = 6;
          break;
        // case BoxKind.eight:
        //   count = 8;
        //   break;
        // case BoxKind.twelve:
        //   count = 12;
        //   break;
        // case BoxKind.twenty:
        //   count = 20;
        //   break;
        // case BoxKind.twentyFour:
        //   count = 24;
        //   break;
        default:
          break;
      }
      var div = createElement("div");
      td.appendChild(div);
      div.className = "".concat(idOrClassPrefix, "ContentValueWrap");
      var i18nNameArray = ["en", "zh_cn", "zh_tw"];
      var emptyArray = [];
      pushSameValueTimes(emptyArray, "\n", count);
      var isText = typeof contents[0] === "string";
      if (isText) {
        var textarea_1 = createElement("textarea");
        td.appendChild(textarea_1);
        textarea_1.value = box.contents.join("\n");
        textarea_1.rows = count;
        textarea_1.onchange = textarea_1.focus = function () {
          textarea_1.value.split("\n").concat(emptyArray).slice(0, count)
            .forEach(function (item, index) {
              box.contents[index] = item;
            });
          _this.build();
        };
      } else {
        // Language
        i18nNameArray.forEach(function (lang) {
          var textarea = createElement("textarea");
          td.appendChild(textarea);
          textarea.value = box.contents.map(function (content) {
            return content[lang];
          }).join("\n");
          textarea.rows = 4;
          textarea.onchange = textarea.focus = function () {
            textarea.value.split("\n").concat(emptyArray).slice(0, count)
              .forEach(function (item, index) {
                box.contents[index][lang] = item;
              });
            _this.build();
          };
        });
      }
    };
    return _this;
  }
  return BoxBase;
}(BrickWithTableBase));

// import * as edu from './dice.ts';
var DiceBase = /** @class */ (function (_super) {
  __extends(DiceBase, _super);
  function DiceBase() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.idOrClassPrefix = "brickPageDice";
    // protected updateOtherDataOfDice = (newData: any): void => {};
    // protected abstract initOtherElements(): void;
    _this.countDataAndComputedData = function () {
      _this.countDataAndComputedDataInBrickWithTableBase();
      var DiceGenerator = edu.sonya.cc.DiceGenerator;
      var diceGenerator = new DiceGenerator();
      var _a = _this, data = _a.data, computedData = _a.computedData;
      var paperSize = data.paperSize,
        isLandscape = data.isLandscape,
        MAX_X = data.maxX,
        MAX_Y = data.maxY,
        pageMarginTop = data.pageMarginTop,
        // pageMarginBottom,
        pageMarginLeft = data.pageMarginLeft,
        // pageMarginRight,
        list = data.list;
      var css =
        "/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    page { display:flex;flex-flow:wrap; }\n    page:not(page:last-child){page-break-after:always;}\n    \n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n    @media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; } }\n    /* height:",
          ).concat(MAX_Y, "mm; */\n    page { width:").concat(
            MAX_X,
            "mm;margin-left:",
          ).concat(pageMarginLeft, "mm;margin-top:").concat(
            pageMarginTop,
            "mm; }\n    ",
          );
      // const page = createElement('page') as HTMLElement;
      var svgList = [];
      list.forEach(function (_a) {
        var id = _a.id,
          diceKind = _a.diceKind,
          sideLength = _a.sideLength,
          contents = _a.contents,
          outerLineStyle = _a.outerLineStyle,
          innerLineStyle = _a.innerLineStyle,
          textStyle = _a.textStyle,
          options = _a.options;
        var _b = diceGenerator.create({
            id: id,
            diceKind: diceKind,
            sideLength: sideLength,
            contents: contents,
            outerLineStyle: outerLineStyle,
            innerLineStyle: innerLineStyle,
            textStyle: textStyle,
            options: options,
          }),
          svgCss = _b.css,
          svg = _b.svg;
        // html += svg.outerHTML;
        // page.appendChild(svg);
        svgList.push(svg);
        css += svgCss;
      });
      var en = "".concat(FILENAME_POSTFIX, "Dices");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u9AB0\u5B50");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u9AB0\u5B50");
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      // computedData.html = html;
      computedData.html = _this.getAutomaticPaginationHtmlFromChildList(
        svgList,
        MAX_X,
        MAX_Y,
      ); // page.outerHTML;
      // console.log('countDataAndComputedData()', list, computedData );
    };
    _this.idOrClassPrefix = "brickPageDice";
    /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
    _this.getUsableList = function () {
      var usableDices = [];
      _this.appendDiceOfSides4(usableDices);
      _this.appendDiceOfSides6(usableDices);
      _this.appendDiceOfSides8(usableDices);
      _this.appendDiceOfSides12(usableDices);
      _this.appendDiceOfSides20(usableDices);
      _this.appendDiceOfSides24(usableDices);
      var usableList = [];
      usableDices.forEach(function (_a) {
        var diceFace = _a.diceFace, infos = _a.infos;
        var buttonList = [];
        infos.forEach(function (info) {
          var captionI18n = info.captionI18n;
          buttonList.push({
            nameI18n: typeof captionI18n === "string"
              ? {
                en: captionI18n,
                zh_cn: captionI18n,
                zh_tw: captionI18n,
              }
              : captionI18n,
            info: info,
          });
        });
        var strongI18n = {
          en: "".concat(diceFace, "-sides"),
          zh_cn: "".concat(diceFace, "\u9762"),
          zh_tw: "".concat(diceFace, "\u9762"),
        };
        usableList.push({
          strongI18n: strongI18n,
          buttonList: buttonList,
        });
      });
      return usableList;
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      // this.appendTableHeadCell({ en: 'Id', zh_cn: 'id', zh_tw: 'id' });
      // this.appendTableHeadCell({ en: 'Dice Type', zh_cn: '骰子类型', zh_tw: '骰子類型' });
      _this.appendTableHeadCell({ en: "Faces", zh_cn: "面", zh_tw: "面" });
      _this.appendTableHeadCell({ en: "Side", zh_cn: "边", zh_tw: "邊" }); // 長
      _this.appendTableHeadCell({
        en: "Contents of all sides",
        zh_cn: "各面内容",
        zh_tw: "各面內容",
      });
      _this.appendTableHeadCell({
        en: "Outside Boundary Line Style",
        zh_cn: "外边界线样式",
        zh_tw: "外邊界線樣式",
      });
      _this.appendTableHeadCell({
        en: "Interior Line Style",
        zh_cn: "内部线样式",
        zh_tw: "內部線樣式",
      });
      _this.appendTableHeadCell({
        en: "Text Style",
        zh_cn: "文本样式",
        zh_tw: "文字樣式",
      });
      // this.appendTableHeadCell({ en: 'Other parameters', zh_cn: '其它参数', zh_tw: '其它參數' });
    };
    _this.appendDiceOfSides4 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.four,
        sideLength: 20,
        contents: "ˉ,ˊ,ˇ,ˋ".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        options: {},
        captionI18n: {
          en: "Pinyin Tone",
          zh_cn: "拼音声调",
          zh_tw: "拼音聲調",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.four,
        sideLength: 20,
        contents: "1,2,3,4".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:5mm;font-family:"Times New Roman", "Kaiti";',
        options: {},
        captionI18n: "1-4",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.four,
        sideLength: 20,
        contents: "+,-,×,÷".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle:
          'font-size:6mm;font-family:"Times New Roman", "Kaiti";font-weight:bold;',
        options: {},
        captionI18n: {
          en: "Quad operator",
          zh_cn: "四则运算符",
          zh_tw: "四則運算子",
        },
      });
      usableDices.push({
        diceFace: 4,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides6 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.six,
        sideLength: 20,
        contents: getNumbersArray(1, 6),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"Times New Roman", "Kaiti";',
        options: {},
        captionI18n: "1-6",
      });
      usableDices.push({
        diceFace: 6,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides8 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.eight,
        sideLength: 20,
        contents: getNumbersArray(1, 8),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {},
        captionI18n: "1-8",
      });
      // 乾（☰）、坎（☵）、艮（☶）、震（☳）、巽（☴）、离（☲）、坤（☷）、兑（☱）
      infos.push({
        id: "",
        diceKind: DiceKind.eight,
        sideLength: 20,
        contents: "☰☵☶☳☴☲☷☱".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {},
        captionI18n: { en: "Eight Diagrams", zh_cn: "八卦", zh_tw: "八卦" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.eight,
        sideLength: 20,
        contents: "利、衰、毁、誉、称、讥、苦、乐".split("、"),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {},
        captionI18n: { en: "Eight winds", zh_cn: "八风", zh_tw: "八風" },
      });
      usableDices.push({
        diceFace: 8,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides12 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: getNumbersArray(1, 12),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "1-12",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: "子丑寅卯辰巳午未申酉戌亥".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Terrestrial branch", zh_cn: "地支", zh_tw: "地支" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: "鼠牛虎兔龙蛇马羊猴鸡狗猪".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Chinese zodiac 1",
          zh_cn: "十二生肖",
          zh_tw: "十二生肖",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: "鼠牛虎兔龍蛇馬羊猴雞狗猪".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Chinese zodiac 2",
          zh_cn: "生肖繁体",
          zh_tw: "生肖繁體",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:7.5mm;font-family:"Times New Roman";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "English Months",
          zh_cn: "英文月份",
          zh_tw: "英文月份",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Months", zh_cn: "月份", zh_tw: "月份" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "Jan.",
          "Feb.",
          "Mar.",
          "Apr.",
          "May.",
          "Jun.",
          "Jul.",
          "Aug.",
          "Sep.",
          "Oct.",
          "Nov.",
          "Dec.",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"Times New Roman";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Month abbreviation",
          zh_cn: "月份缩写",
          zh_tw: "月份縮寫",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Month (number)",
          zh_cn: "月份（数字）",
          zh_tw: "月份（數字）",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "正月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "冬月",
          "腊月",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Lunar month",
          zh_cn: "农历月份",
          zh_tw: "農曆月份",
        },
      });
      usableDices.push({
        diceFace: 12,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides20 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.twenty,
        sideLength: 20,
        contents: getNumbersArray(1, 20),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:8mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "1-20",
      });
      usableDices.push({
        diceFace: 20,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides24 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: getNumbersArray(1, 24),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "1-24",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: getNumbersArray(0, 23),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "0-23",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,".replace(
          /a/g,
          "ɑ",
        ).replace(/g/g, "ɡ").split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        // textStyle: 'font-size:12mm;font-family:"PinYinok";',
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Initial Consonant", zh_cn: "声母", zh_tw: "聲母" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents:
          "a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong"
            .replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        // textStyle: 'font-size:12mm;font-family:"PinYinok";',
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Finals", zh_cn: "韵母", zh_tw: "韻母" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents:
          "zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,,,,,"
            .replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        // textStyle: 'font-size:12mm;font-family:"PinYinok";',
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Overall recognition",
          zh_cn: "整体认读",
          zh_tw: "整體認讀",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: "ā,á,ǎ,à,ō,ó,ǒ,ò,ē,é,ě,è,ī,í,ǐ,ì,ū,ú,ǔ,ù,ǖ,ǘ,ǚ,ǜ".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"Kaiti";font-weight:normal;',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Simple final", zh_cn: "单韵母", zh_tw: "單韻母" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents:
          "立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒"
            .split("、"),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"KaiTi";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "24 Solar Terms",
          zh_cn: "二十四节气",
          zh_tw: "二十四節氣",
        },
      });
      usableDices.push({
        diceFace: 24,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
    _this.createTableBodyRow = function (dice) {
      var _a = dice,
        id = _a.id,
        diceKind = _a.diceKind,
        sideLength = _a.sideLength,
        contents = _a.contents,
        outerLineStyle = _a.outerLineStyle,
        innerLineStyle = _a.innerLineStyle,
        textStyle = _a.textStyle,
        options = _a.options;
      var tableBodyElement = _this.tableBodyElement;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      _this.appendOperationTd(tr, dice);
      _this.appendDiceKindTd(tr, dice);
      // this.appendSideLengthTd(tr, dice);
      _this.appendNumberTd(tr, sideLength, dice, "sideLength", 0, 200, null);
      _this.appendContentsTd(tr, dice);
      _this.appendTextareaTd(
        tr,
        outerLineStyle,
        dice,
        "outerLineStyle",
        "string",
      );
      _this.appendTextareaTd(
        tr,
        innerLineStyle,
        dice,
        "innerLineStyle",
        "string",
      );
      _this.appendTextareaTd(tr, textStyle, dice, "textStyle", "string");
    };
    /** OK
     *
     * @param tr
     * @param dice
     */
    _this.appendDiceKindTd = function (tr, dice) {
      var DiceKind = edu.sonya.cc.DiceKind;
      var td = createElement("td");
      tr.appendChild(td);
      var span = createElement("span");
      td.appendChild(span);
      var value = "";
      switch (dice.diceKind) {
        case DiceKind.four:
          value = "4";
          break;
        case DiceKind.six:
          value = "6";
          break;
        case DiceKind.eight:
          value = "8";
          break;
        case DiceKind.twelve:
          value = "12";
          break;
        case DiceKind.twenty:
          value = "20";
          break;
        case DiceKind.twentyFour:
          value = "24";
          break;
        default:
          break;
      }
      span.innerHTML = value;
    };
    /** OK
     *
     * @param tr
     * @param dice
     */
    _this.appendContentsTd = function (tr, dice) {
      var td = createElement("td");
      tr.appendChild(td);
      var DiceKind = edu.sonya.cc.DiceKind;
      var diceKind = dice.diceKind, contents = dice.contents;
      var idOrClassPrefix = _this.idOrClassPrefix;
      var count = 0;
      switch (diceKind) {
        case DiceKind.four:
          count = 4;
          break;
        case DiceKind.six:
          count = 6;
          break;
        case DiceKind.eight:
          count = 8;
          break;
        case DiceKind.twelve:
          count = 12;
          break;
        case DiceKind.twenty:
          count = 20;
          break;
        case DiceKind.twentyFour:
          count = 24;
          break;
        default:
          break;
      }
      var div = createElement("div");
      td.appendChild(div);
      div.className = "".concat(idOrClassPrefix, "ContentValueWrap");
      var i18nNameArray = ["en", "zh_cn", "zh_tw"];
      // for(let i = 0; i < count; ++i) {
      //   const item = contents[i];
      //   if(typeof item === 'string') {
      //     const input = createElement('input') as HTMLInputElement;
      //     div.appendChild(input);
      //     input.type = 'text';
      //     input.value = item;
      //     input.onchange = input.focus = () => {
      //       contents.splice(i, 1, item);
      //     };
      //   } else {
      //     const divI18n = createElement('div') as HTMLDivElement;
      //     div.appendChild(divI18n);
      //     divI18n.className = `${idOrClassPrefix}ContentValueI18nWrap`;
      //     i18nNameArray.forEach((property: string) => {
      //       const input = createElement('input') as HTMLInputElement;
      //       divI18n.appendChild(input);
      //       input.type = 'text';
      //       input.value = item[property];
      //       input.onchange = input.focus = () => {
      //         item[property] = input.value;
      //       };
      //     });
      //   }
      // }
      var emptyArray = [];
      pushSameValueTimes(emptyArray, "\n", count);
      var isText = typeof contents[0] === "string";
      if (isText) {
        var textarea_1 = createElement("textarea");
        td.appendChild(textarea_1);
        textarea_1.value = dice.contents.join("\n");
        textarea_1.rows = 4;
        textarea_1.onchange = textarea_1.focus = function () {
          textarea_1.value.split("\n").concat(emptyArray).slice(0, count)
            .forEach(function (item, index) {
              dice.contents[index] = item;
            });
          _this.build();
        };
      } else {
        // Language
        i18nNameArray.forEach(function (lang) {
          var textarea = createElement("textarea");
          td.appendChild(textarea);
          textarea.value = dice.contents.map(function (content) {
            return content[lang];
          }).join("\n");
          textarea.rows = 4;
          textarea.onchange = textarea.focus = function () {
            textarea.value.split("\n").concat(emptyArray).slice(0, count)
              .forEach(function (item, index) {
                dice.contents[index][lang] = item;
              });
            _this.build();
          };
        });
      }
    };
    return _this;
  }
  return DiceBase;
}(BrickWithTableBase));

/**
 * <en>The version of data.js.</en>
 * <zh_cn>data.js的版本</zh_cn>
 * <zh_tw>data.js的版本</zh_tw>
 */
var DATA_JS_VERSION = "20221223B";
/**
 * <en>According to the website parameter go, it will be converted to each page: home page,
 * throw a brick to attract jade(list, details), natural treasures, growth footprint(list, details),
 * Sparks of Fire (about us), and report form.</en>
 * <zh_cn>根据网址参数go转为各页面：首页、抛砖引玉（列表、详情）、物华天宝、成长足迹（列表、详情）、星星之火（关于我们）、报表</zh_cn>
 * <zh_tw>根據網址參數go轉為各頁面：首頁、抛磚引玉（清單、詳情）、物華天寶、成長足跡（清單、詳情）、星星之火（關於我們）、報表</zh_tw>
 */
(function () {
  pcGlobal.init();
  var head = getHeadElement();
  // data.js?version
  var dataScriptElement = createElement("script");
  dataScriptElement.setAttribute("id", "dataScript");
  dataScriptElement.setAttribute("charset", "utf-8");
  dataScriptElement.setAttribute("src", "js/data.js?".concat(DATA_JS_VERSION));
  head.appendChild(dataScriptElement);
  // // ~pageName~.js
  // const pageScriptElement = createElement('script');
  // pageScriptElement.setAttribute('id', 'pageScript');
  // pageScriptElement.setAttribute('charset', 'utf-8');
  // pageScriptElement.setAttribute('src', `js/${ACTUAL_PAGE_NAME}.js`);
  // head.appendChild(pageScriptElement);
  // const body = getBodyElement();
  // if(ACTUAL_PAGE_NAME === 'report') {
  // 	body.setAttribute(REPORT_PROPERTY, '');
  // }
  // ~pageName~.js
  function loadPageScript() {
    var pageScriptElement = createElement("script");
    pageScriptElement.setAttribute("id", "pageScript");
    pageScriptElement.setAttribute("charset", "utf-8");
    pageScriptElement.setAttribute(
      "src",
      "js/".concat(ACTUAL_PAGE_NAME, ".js?").concat(
        jsVersions[ACTUAL_PAGE_NAME],
      ),
    );
    head.appendChild(pageScriptElement);
  }
  // const body = getBodyElement();
  // if (ACTUAL_PAGE_NAME === 'report') {
  //     body.setAttribute(REPORT_PROPERTY, '');
  // }
  dataScriptElement.onload = dataScriptElement.onreadystatechange =
    function () {
      var readyState = this.readyState;
      console.log("onreadystatechange", readyState);
      if (!readyState) {
        loadPageScript();
        return;
      }
      switch (readyState) {
        case "loaded":
        case "complete":
          loadPageScript();
          break;
        default:
          break;
      }
    };
})();
