/**
 * <en>Domain</en>
 * <zh_cn>网站域名</zh_cn>
 * <zh_tw>網站域名</zh_tw>
 */
export const DOMAIN = "edu.sonya.cc";
/**
 * <en>Postfix of file name</en>
 * <zh_cn>文件名前綴</zh_cn>
 * <zh_tw>文件名前綴</zh_tw>
 */
export const FILENAME_POSTFIX = DOMAIN.concat("_");
/**
 * <en>Current URL</en>
 * <zh_cn>当前网址</zh_cn>
 * <zh_tw>當前網址</zh_tw>
 */
export const CURRENT_URL = window.location.href;
/**
 * <en>Home URL</en>
 * <zh_cn>首页网址</zh_cn>
 * <zh_tw>首頁網址</zh_tw>
 */
export const HOME_URL = CURRENT_URL.startsWith("file:///")
  ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm"
  : "http://edu.sonya.cc/";
/**
 * <en>Temporary closure method: avoid being displayed in iframe by other websites.</en>
 * <zh_cn>临时闭包方法：避免被其它网站放入iframe中显示。</zh_cn>
 * <zh_tw>臨時閉包方法：避免被其它網站放入iframe中顯示。</zh_tw>
 */
(function () {
  const myWindow = window;
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
export const HOME_URL_LENGTH = HOME_URL.length;
/**
 * <en>Enumeration: Actual Page</en>
 * <zh_cn>枚举：实际页面</zh_cn>
 * <zh_tw>枚舉：實際頁面</zh_tw>
 */
export var ActualPage;
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
export const ACTUAL_PAGE_NAME_ARRAY = [
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
export const getActualPageName = (value) => ACTUAL_PAGE_NAME_ARRAY[value];
/**
 * <en>Convert the actual page name to the enumeration value

Convert the actual page name to the enumeration value.</en>
 * <zh_cn>转实际页面名到枚举值</zh_cn>
 * <zh_tw>轉實際頁面名到枚舉值</zh_tw>
*/
export const getActualPageValueByName = (name) =>
  ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
/**
 * <en>Page parameter: actual page. If it exists, it must be the first parameter.</en>
 * <zh_cn>页面参数：实际页面。如果存在，必须是第一个参数。</zh_cn>
 * <zh_tw>頁面參數：實際頁面。如果存在，必須是第一個參數。</zh_tw>
 */
export const PARAMETER_FOR_ACTUAL_PAGE = "go";
/**
 * <en>Page parameter value: actual page</en>
 * <zh_cn>页面参数值：实际页面</zh_cn>
 * <zh_tw>頁面參數值：實際頁面</zh_tw>
 */
export const ACTUAL_PAGE_VALUE =
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
export const ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
/**
 * <en>Site Root</en>
 * <zh_cn>网站根目录</zh_cn>
 * <zh_tw>網站根目錄</zh_tw>
 */
export const SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf("/") + 1);
/**
 * <en>Website image directory</en>
 * <zh_cn>网站图片目录</zh_cn>
 * <zh_tw>網站圖片目錄</zh_tw>
 */
export const SITE_IMAGE_PATH = `${SITE_ROOT}images/`;
/**
 * <en>Site Script Directory</en>
 * <zh_cn>网站脚本目录</zh_cn>
 * <zh_tw>網站腳本目錄</zh_tw>
 */
export const SITE_JAVASCRIPT_PATH = `${SITE_ROOT}js/`;
/**
 * <en>Site Style Sheet Directory</en>
 * <zh_cn>网站样式表目录</zh_cn>
 * <zh_tw>網站樣式表目錄</zh_tw>
 */
export const SITE_CSS_PATH = `${SITE_ROOT}css/`;
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
export const getPageParameterByName = (name, defaultValue) => {
  return CURRENT_URL.indexOf(`&${name}=`) === -1
    ? defaultValue || ""
    : CURRENT_URL.split("&").slice(1).filter((keyValue) =>
      keyValue.startsWith(`${name}=`)
    )[0].split("=")[1];
};
/**
 * <en>Sub kind of current page</en>
 * <zh_cn>页面子类型</zh_cn>
 * <zh_tw>頁面子類型</zh_tw>
 */
export const PAGE_SUB_KIND = getPageParameterByName("kind", null);
/**
 * <en>Page Index</en>
 * <zh_cn>页序</zh_cn>
 * <zh_tw>頁序</zh_tw>
 */
export const PAGE_IDNEX = parseInt(getPageParameterByName("page", "1"), 0) - 1;
/**
 * <en>Page parameter: No</en>
 * <zh_cn>页面参数：编号</zh_cn>
 * <zh_tw>頁面參數：編號</zh_tw>
 */
export const PAGE_ID = parseInt(getPageParameterByName("id", "1"), 0);
/**
 * <en>“查看更多”按钮文字</en>
 * <zh_cn>View more button text</zh_cn>
 * <zh_tw>“查看更多”按鈕文字</zh_tw>
 */
export const MORE_BUTTON_HTML =
  "<en>more...</en><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>";
/**
 * <en>Type of throwing bricks to attract jade</en>
 * <zh_cn>抛砖引玉子类型</zh_cn>
 * <zh_tw>抛磚引玉子類型</zh_tw>
 */
export const BRICK_SUB_KINDS = [
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
export const ACTIVATED_PROPERTY = "edu-activated";
/**
 * <en>Html attribute: subclass name</en>
 * <zh_cn>html属性：子类名</zh_cn>
 * <zh_tw>html内容：子類名</zh_tw>
 */
export const SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name";
/**
 * <en>Html attributes: language</en>
 * <zh_cn>html属性：语言</zh_cn>
 * <zh_tw>html内容：語言</zh_tw>
 */
export const LANG_PROPERTY = "edu-lang";
/**
 * <en>Html attribute: page order</en>
 * <zh_cn>html属性：页序</zh_cn>
 * <zh_tw>html内容：頁序</zh_tw>
 */
export const PAGE_PROPERTY = "edu-page";
/**
 * <en>Html attribute: device</en>
 * <zh_cn>html属性：设备</zh_cn>
 * <zh_tw>html内容：設備</zh_tw>
 */
export const DEVICE_PROPERTY = "edu-device";
/**
 * <en>Html attribute: report</en>
 * <zh_cn>html属性：报表</zh_cn>
 * <zh_tw>html内容：報表</zh_tw>
 */
export const REPORT_PROPERTY = "edu-report";
/**
 * <en>Html attribute: id</en>
 * <zh_cn>html属性：编号</zh_cn>
 * <zh_tw>html内容：編號</zh_tw>
 */
export const ID_PROPERTY = "edu-id";
/**
 * <en>Html attribute: paper size</en>
 * <zh_cn>html属性：纸型</zh_cn>
 * <zh_tw>html内容：紙型</zh_tw>
 */
export const PAPER_SIZE_PROPERTY = "edu-paper-size";
/**
 * <en>Html attribute: report type</en>
 * <zh_cn>html属性：报表类型</zh_cn>
 * <zh_tw>html内容：報表類型</zh_tw>
 */
export const REPORT_KIND_PROPERTY = "edu-report-kind";
