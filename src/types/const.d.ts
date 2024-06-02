/**
 * <en_us>Domain</en_us>
 * <zh_cn>网站域名</zh_cn>
 * <zh_tw>網站域名</zh_tw>
 */
export declare const DOMAIN = "edu.sonya.cc";
/**
 * <en_us>Postfix of file name</en_us>
 * <zh_cn>文件名前綴</zh_cn>
 * <zh_tw>文件名前綴</zh_tw>
 */
export declare const FILENAME_POSTFIX: string;
/**
 * <en_us>Current URL</en_us>
 * <zh_cn>当前网址</zh_cn>
 * <zh_tw>當前網址</zh_tw>
 */
export declare const CURRENT_URL: string;
/**
 * <en_us>Home URL</en_us>
 * <zh_cn>首页网址</zh_cn>
 * <zh_tw>首頁網址</zh_tw>
 */
export declare const HOME_URL: string;
/**
 * <en_us>Home URL length</en_us>
 * <zh_cn>首页网址长度</zh_cn>
 * <zh_tw>首頁網址長度</zh_tw>
 */
export declare const HOME_URL_LENGTH: number;
/**
 * <en_us>Enumeration: Actual Page</en_us>
 * <zh_cn>枚举：实际页面</zh_cn>
 * <zh_tw>枚舉：實際頁面</zh_tw>
 */
export declare enum ActualPage {
  /**
   * <en_us>Home page</en_us>
   * <zh_cn>首页</zh_cn>
   * <zh_tw>首頁</zh_tw>
   */
  home = 0,
  /**
   * <en_us>List of throwing a brick to attract jade</en_us>
   * <zh_cn>抛砖引玉列表</zh_cn>
   * <zh_tw>抛磚引玉清單</zh_tw>
   */
  bricks = 1,
  /**
   * <en_us>Details of throwing a brick to attract jade</en_us>
   * <zh_cn>抛砖引玉详情</zh_cn>
   * <zh_tw>抛磚引玉詳情</zh_tw>
   */
  brick = 2,
  /**
   * <en_us>Natural treasures</en_us>
   * <zh_cn>物华天宝</zh_cn>
   * <zh_tw>物華天寶</zh_tw>
   */
  treasures = 3,
  /**
   * <en_us>List of growth footprint</en_us>
   * <zh_cn>成长足迹列表</zh_cn>
   * <zh_tw>成長足迹清單</zh_tw>
   */
  stories = 4,
  /**
   * <en_us>Details of growth footprint</en_us>
   * <zh_cn>成长足迹详情</zh_cn>
   * <zh_tw>成長足迹詳情</zh_tw>
   */
  story = 5,
  /**
   * <en_us>Sparks of Fire</en_us>
   * <zh_cn>星星之火</zh_cn>
   * <zh_tw>星星之火</zh_tw>
   */
  about = 6,
  /**
   * <en_us>Report form</en_us>
   * <zh_cn>报表</zh_cn>
   * <zh_tw>報表</zh_tw>
   */
  report = 7,
}
/**
 * <en_us>Array: actual page enumeration value</en_us>
 * <zh_cn>数组：实际页面枚举值</zh_cn>
 * <zh_tw>數組：實際頁面枚舉值</zh_tw>
 */
export declare const ACTUAL_PAGE_NAME_ARRAY: string[];
/**
 * <en_us>Convert number to actual page name</en_us>
 * <zh_cn>转数字到实际页面名</zh_cn>
 * <zh_tw>轉數位到實際頁面名</zh_tw>
 */
export declare const getActualPageName: (value: ActualPage) => string;
/**
 * <en_us>Convert the actual page name to the enumeration value

Convert the actual page name to the enumeration value.</en_us>
 * <zh_cn>转实际页面名到枚举值</zh_cn>
 * <zh_tw>轉實際頁面名到枚舉值</zh_tw>
*/
export declare const getActualPageValueByName: (name: string) => number;
/**
 * <en_us>Page parameter: actual page. If it exists, it must be the first parameter.</en_us>
 * <zh_cn>页面参数：实际页面。如果存在，必须是第一个参数。</zh_cn>
 * <zh_tw>頁面參數：實際頁面。如果存在，必須是第一個參數。</zh_tw>
 */
export declare const PARAMETER_FOR_ACTUAL_PAGE = "go";
/**
 * <en_us>Page parameter value: actual page</en_us>
 * <zh_cn>页面参数值：实际页面</zh_cn>
 * <zh_tw>頁面參數值：實際頁面</zh_tw>
 */
export declare const ACTUAL_PAGE_VALUE: number;
/**
 * <en_us>Current actual page name</en_us>
 * <zh_cn>当前实际页面名</zh_cn>
 * <zh_tw>當前實際頁面名</zh_tw>
 */
export declare const ACTUAL_PAGE_NAME: string;
/**
 * <en_us>Site Root</en_us>
 * <zh_cn>网站根目录</zh_cn>
 * <zh_tw>網站根目錄</zh_tw>
 */
export declare const SITE_ROOT: string;
/**
 * <en_us>Website image directory</en_us>
 * <zh_cn>网站图片目录</zh_cn>
 * <zh_tw>網站圖片目錄</zh_tw>
 */
export declare const SITE_IMAGE_PATH: string;
/**
 * <en_us>Site Script Directory</en_us>
 * <zh_cn>网站脚本目录</zh_cn>
 * <zh_tw>網站腳本目錄</zh_tw>
 */
export declare const SITE_JAVASCRIPT_PATH: string;
/**
 * <en_us>Site Style Sheet Directory</en_us>
 * <zh_cn>网站样式表目录</zh_cn>
 * <zh_tw>網站樣式表目錄</zh_tw>
 */
export declare const SITE_CSS_PATH: string;
/**
 * <en_us>Get the specified parameter value from the URL.</en_us>
 * <zh_cn>从网址中获取指定参数值</zh_cn>
 * <zh_tw>從網址中獲取指定參數值</zh_tw>
 * @param name
 * <en_us>Parameter name</en_us>
 * <zh_cn>参数名</zh_cn>
 * <zh_tw>參數名</zh_tw>
 * @param defaultValue
 * <en_us>Default value of the parameter</en_us>
 * <zh_cn>参数默认值</zh_cn>
 * <zh_tw>參數默認值</zh_tw>
 * @returns
 * <en_us>Parameter value</en_us>
 * <zh_cn>参数值</zh_cn>
 * <zh_tw>參數值</zh_tw>
 */
export declare const getPageParameterByName: (
  name: string,
  defaultValue: string | null,
) => string;
/**
 * <en_us>Sub kind of current page</en_us>
 * <zh_cn>页面子类型</zh_cn>
 * <zh_tw>頁面子類型</zh_tw>
 */
export declare const PAGE_SUB_KIND: string;
/**
 * <en_us>Page Index</en_us>
 * <zh_cn>页序</zh_cn>
 * <zh_tw>頁序</zh_tw>
 */
export declare const PAGE_IDNEX: number;
/**
 * <en_us>Page parameter: No</en_us>
 * <zh_cn>页面参数：编号</zh_cn>
 * <zh_tw>頁面參數：編號</zh_tw>
 */
export declare const PAGE_ID: number;
/**
 * <en_us>“查看更多”按钮文字</en_us>
 * <zh_cn>View more button text</zh_cn>
 * <zh_tw>“查看更多”按鈕文字</zh_tw>
 */
export declare const MORE_BUTTON_HTML =
  "<en_us>more...</en_us><zh_cn>\u67E5\u770B\u66F4\u591A</zh_cn><zh_tw>\u67E5\u770B\u66F4\u591A</zh_tw>";
/**
 * <en_us>Type of throwing bricks to attract jade</en_us>
 * <zh_cn>抛砖引玉子类型</zh_cn>
 * <zh_tw>抛磚引玉子類型</zh_tw>
 */
export declare const BRICK_SUB_KINDS: {
  name: string;
  title: {
    en_us: string;
    zh_cn: string;
    zh_tw: string;
  };
}[];
/**
 * <en_us>Html attribute: activated</en_us>
 * <zh_cn>html属性：激活</zh_cn>
 * <zh_tw>html内容：已啟動</zh_tw>
 */
export declare const ACTIVATED_PROPERTY = "edu-activated";
/**
 * <en_us>Html attribute: subclass name</en_us>
 * <zh_cn>html属性：子类名</zh_cn>
 * <zh_tw>html内容：子類名</zh_tw>
 */
export declare const SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name";
/**
 * <en_us>Html attributes: language</en_us>
 * <zh_cn>html属性：语言</zh_cn>
 * <zh_tw>html内容：語言</zh_tw>
 */
export declare const LANG_PROPERTY = "edu-lang";
/**
 * <en_us>Html attribute: page order</en_us>
 * <zh_cn>html属性：页序</zh_cn>
 * <zh_tw>html内容：頁序</zh_tw>
 */
export declare const PAGE_PROPERTY = "edu-page";
/**
 * <en_us>Html attribute: device</en_us>
 * <zh_cn>html属性：设备</zh_cn>
 * <zh_tw>html内容：設備</zh_tw>
 */
export declare const DEVICE_PROPERTY = "edu-device";
/**
 * <en_us>Html attribute: report</en_us>
 * <zh_cn>html属性：报表</zh_cn>
 * <zh_tw>html内容：報表</zh_tw>
 */
export declare const REPORT_PROPERTY = "edu-report";
/**
 * <en_us>Html attribute: id</en_us>
 * <zh_cn>html属性：编号</zh_cn>
 * <zh_tw>html内容：編號</zh_tw>
 */
export declare const ID_PROPERTY = "edu-id";
/**
 * <en_us>Html attribute: paper size</en_us>
 * <zh_cn>html属性：纸型</zh_cn>
 * <zh_tw>html内容：紙型</zh_tw>
 */
export declare const PAPER_SIZE_PROPERTY = "edu-paper-size";
/**
 * <en_us>Html attribute: report type</en_us>
 * <zh_cn>html属性：报表类型</zh_cn>
 * <zh_tw>html内容：報表類型</zh_tw>
 */
export declare const REPORT_KIND_PROPERTY = "edu-report-kind";
