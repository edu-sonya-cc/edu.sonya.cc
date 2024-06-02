"use strict";
exports.__esModule = true;
exports.REPORT_KIND_PROPERTY = exports.PAPER_SIZE_PROPERTY = exports.ID_PROPERTY = exports.REPORT_PROPERTY = exports.DEVICE_PROPERTY = exports.PAGE_PROPERTY = exports.LANG_PROPERTY = exports.SUB_KIND_NAME_PROPERTY = exports.ACTIVATED_PROPERTY = exports.BRICK_SUB_KINDS = exports.MORE_BUTTON_HTML = exports.PAGE_ID = exports.PAGE_IDNEX = exports.PAGE_SUB_KIND = exports.getPageParameterByName = exports.SITE_CSS_PATH = exports.SITE_JAVASCRIPT_PATH = exports.SITE_IMAGE_PATH = exports.SITE_ROOT = exports.ACTUAL_PAGE_NAME = exports.ACTUAL_PAGE_VALUE = exports.PARAMETER_FOR_ACTUAL_PAGE = exports.getActualPageValueByName = exports.getActualPageName = exports.ACTUAL_PAGE_NAME_ARRAY = exports.ActualPage = exports.HOME_URL_LENGTH = exports.HOME_URL = exports.CURRENT_URL = exports.FILENAME_POSTFIX = exports.DOMAIN = void 0;
/**
 * <en_us>Domain</en_us>
 * <zh_cn>网站域名</zh_cn>
 * <zh_tw>網站域名</zh_tw>
 */
exports.DOMAIN = "edu.sonya.cc";
/**
 * <en_us>Postfix of file name</en_us>
 * <zh_cn>文件名前綴</zh_cn>
 * <zh_tw>文件名前綴</zh_tw>
 */
exports.FILENAME_POSTFIX = exports.DOMAIN.concat("_");
/**
 * <en_us>Current URL</en_us>
 * <zh_cn>当前网址</zh_cn>
 * <zh_tw>當前網址</zh_tw>
 */
exports.CURRENT_URL = window.location.href;
/**
 * <en_us>Home URL</en_us>
 * <zh_cn>首页网址</zh_cn>
 * <zh_tw>首頁網址</zh_tw>
 */
// export const HOME_URL = CURRENT_URL.startsWith("file:///")
// ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm"
// : "http://edu.sonya.cc/";
exports.HOME_URL = exports.CURRENT_URL.startsWith("file:///")
    ? exports.CURRENT_URL.substring(0, exports.CURRENT_URL.indexOf('index.htm') + 9)
    : exports.CURRENT_URL.substring(0, exports.CURRENT_URL.lastIndexOf('/') + 1);
/**
 * <en_us>Temporary closure method: avoid being displayed in iframe by other websites.</en_us>
 * <zh_cn>临时闭包方法：避免被其它网站放入iframe中显示。</zh_cn>
 * <zh_tw>臨時閉包方法：避免被其它網站放入iframe中顯示。</zh_tw>
 */
(function () {
    var myWindow = window;
    // alert(JSON.stringify(myWindow.top));
    // console.log(myWindow.top?.location.href);
    if (!myWindow.top || exports.CURRENT_URL.startsWith("file:///"))
        return;
    if (!myWindow.top.location.href.startsWith(exports.HOME_URL)) {
        myWindow.top.location.replace(exports.HOME_URL);
    }
})();
/**
 * <en_us>Home URL length</en_us>
 * <zh_cn>首页网址长度</zh_cn>
 * <zh_tw>首頁網址長度</zh_tw>
 */
exports.HOME_URL_LENGTH = exports.HOME_URL.length;
/**
 * <en_us>Enumeration: Actual Page</en_us>
 * <zh_cn>枚举：实际页面</zh_cn>
 * <zh_tw>枚舉：實際頁面</zh_tw>
 */
var ActualPage;
(function (ActualPage) {
    /**
     * <en_us>Home page</en_us>
     * <zh_cn>首页</zh_cn>
     * <zh_tw>首頁</zh_tw>
     */
    ActualPage[ActualPage["home"] = 0] = "home";
    /**
     * <en_us>List of throwing a brick to attract jade</en_us>
     * <zh_cn>抛砖引玉列表</zh_cn>
     * <zh_tw>抛磚引玉清單</zh_tw>
     */
    ActualPage[ActualPage["bricks"] = 1] = "bricks";
    /**
     * <en_us>Details of throwing a brick to attract jade</en_us>
     * <zh_cn>抛砖引玉详情</zh_cn>
     * <zh_tw>抛磚引玉詳情</zh_tw>
     */
    ActualPage[ActualPage["brick"] = 2] = "brick";
    /**
     * <en_us>Natural treasures</en_us>
     * <zh_cn>物华天宝</zh_cn>
     * <zh_tw>物華天寶</zh_tw>
     */
    ActualPage[ActualPage["treasures"] = 3] = "treasures";
    /**
     * <en_us>List of growth footprint</en_us>
     * <zh_cn>成长足迹列表</zh_cn>
     * <zh_tw>成長足迹清單</zh_tw>
     */
    ActualPage[ActualPage["stories"] = 4] = "stories";
    /**
     * <en_us>Details of growth footprint</en_us>
     * <zh_cn>成长足迹详情</zh_cn>
     * <zh_tw>成長足迹詳情</zh_tw>
     */
    ActualPage[ActualPage["story"] = 5] = "story";
    /**
     * <en_us>Sparks of Fire</en_us>
     * <zh_cn>星星之火</zh_cn>
     * <zh_tw>星星之火</zh_tw>
     */
    ActualPage[ActualPage["about"] = 6] = "about";
    /**
     * <en_us>Report form</en_us>
     * <zh_cn>报表</zh_cn>
     * <zh_tw>報表</zh_tw>
     */
    ActualPage[ActualPage["report"] = 7] = "report";
})(ActualPage = exports.ActualPage || (exports.ActualPage = {}));
/**
 * <en_us>Array: actual page enumeration value</en_us>
 * <zh_cn>数组：实际页面枚举值</zh_cn>
 * <zh_tw>數組：實際頁面枚舉值</zh_tw>
 */
exports.ACTUAL_PAGE_NAME_ARRAY = [
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
 * <en_us>Convert number to actual page name</en_us>
 * <zh_cn>转数字到实际页面名</zh_cn>
 * <zh_tw>轉數位到實際頁面名</zh_tw>
 */
exports.getActualPageName = function (value) {
    return exports.ACTUAL_PAGE_NAME_ARRAY[value];
};
/**
 * <en_us>Convert the actual page name to the enumeration value

Convert the actual page name to the enumeration value.</en_us>
 * <zh_cn>转实际页面名到枚举值</zh_cn>
 * <zh_tw>轉實際頁面名到枚舉值</zh_tw>
*/
exports.getActualPageValueByName = function (name) {
    return exports.ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
};
/**
 * <en_us>Page parameter: actual page. If it exists, it must be the first parameter.</en_us>
 * <zh_cn>页面参数：实际页面。如果存在，必须是第一个参数。</zh_cn>
 * <zh_tw>頁面參數：實際頁面。如果存在，必須是第一個參數。</zh_tw>
 */
exports.PARAMETER_FOR_ACTUAL_PAGE = "go";
/**
 * <en_us>Page parameter value: actual page</en_us>
 * <zh_cn>页面参数值：实际页面</zh_cn>
 * <zh_tw>頁面參數值：實際頁面</zh_tw>
 */
exports.ACTUAL_PAGE_VALUE = exports.CURRENT_URL.indexOf("?".concat(exports.PARAMETER_FOR_ACTUAL_PAGE, "=")) > -1
    ? exports.getActualPageValueByName(exports.CURRENT_URL.split("?")[1].split("&")[0].split("=")[1])
    : ActualPage.home;
/**
 * <en_us>Current actual page name</en_us>
 * <zh_cn>当前实际页面名</zh_cn>
 * <zh_tw>當前實際頁面名</zh_tw>
 */
exports.ACTUAL_PAGE_NAME = exports.ACTUAL_PAGE_NAME_ARRAY[exports.ACTUAL_PAGE_VALUE];
/**
 * <en_us>Site Root</en_us>
 * <zh_cn>网站根目录</zh_cn>
 * <zh_tw>網站根目錄</zh_tw>
 */
exports.SITE_ROOT = exports.HOME_URL.substring(0, exports.HOME_URL.lastIndexOf("/") + 1);
/**
 * <en_us>Website image directory</en_us>
 * <zh_cn>网站图片目录</zh_cn>
 * <zh_tw>網站圖片目錄</zh_tw>
 */
exports.SITE_IMAGE_PATH = exports.SITE_ROOT + "images/";
/**
 * <en_us>Site Script Directory</en_us>
 * <zh_cn>网站脚本目录</zh_cn>
 * <zh_tw>網站腳本目錄</zh_tw>
 */
exports.SITE_JAVASCRIPT_PATH = exports.SITE_ROOT + "js/";
/**
 * <en_us>Site Style Sheet Directory</en_us>
 * <zh_cn>网站样式表目录</zh_cn>
 * <zh_tw>網站樣式表目錄</zh_tw>
 */
exports.SITE_CSS_PATH = exports.SITE_ROOT + "css/";
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
exports.getPageParameterByName = function (name, defaultValue) {
    return exports.CURRENT_URL.indexOf("&" + name + "=") === -1
        ? defaultValue || ""
        : exports.CURRENT_URL.split("&").slice(1).filter(function (keyValue) {
            return keyValue.startsWith(name + "=");
        })[0].split("=")[1];
};
/**
 * <en_us>Sub kind of current page</en_us>
 * <zh_cn>页面子类型</zh_cn>
 * <zh_tw>頁面子類型</zh_tw>
 */
exports.PAGE_SUB_KIND = exports.getPageParameterByName("kind", null);
/**
 * <en_us>Page Index</en_us>
 * <zh_cn>页序</zh_cn>
 * <zh_tw>頁序</zh_tw>
 */
exports.PAGE_IDNEX = parseInt(exports.getPageParameterByName("page", "1"), 0) - 1;
/**
 * <en_us>Page parameter: No</en_us>
 * <zh_cn>页面参数：编号</zh_cn>
 * <zh_tw>頁面參數：編號</zh_tw>
 */
exports.PAGE_ID = parseInt(exports.getPageParameterByName("id", "1"), 0);
/**
 * <en_us>“查看更多”按钮文字</en_us>
 * <zh_cn>View more button text</zh_cn>
 * <zh_tw>“查看更多”按鈕文字</zh_tw>
 */
exports.MORE_BUTTON_HTML = "<en_us>more...</en_us><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>";
/**
 * <en_us>Type of throwing bricks to attract jade</en_us>
 * <zh_cn>抛砖引玉子类型</zh_cn>
 * <zh_tw>抛磚引玉子類型</zh_tw>
 */
exports.BRICK_SUB_KINDS = [
    /**
     * <en_us>Chinese</en_us>
     * <zh_cn>语文</zh_cn>
     * <zh_tw>語文</zh_tw>
     */
    {
        name: "01_chinese",
        title: { en_us: "Chinese", zh_cn: "语文", zh_tw: "語文" }
    },
    /**
     * <en_us>Mathematics</en_us>
     * <zh_cn>数学</zh_cn>
     * <zh_tw>數學</zh_tw>
     */
    {
        name: "02_math",
        title: { en_us: "Mathematics", zh_cn: "数学", zh_tw: "數學" }
    },
    /**
     * <en_us>English</en_us>
     * <zh_cn>英语</zh_cn>
     * <zh_tw>英語</zh_tw>
     */
    {
        name: "03_english",
        title: { en_us: "English", zh_cn: "英语", zh_tw: "英語" }
    },
    /**
     * <en_us>Programming</en_us>
     * <zh_cn>编程</zh_cn>
     * <zh_tw>程式設計</zh_tw>
     */
    {
        name: "04_programming",
        title: { en_us: "Programming", zh_cn: "编程", zh_tw: "程式設計" }
    },
];
/**
 * <en_us>Html attribute: activated</en_us>
 * <zh_cn>html属性：激活</zh_cn>
 * <zh_tw>html内容：已啟動</zh_tw>
 */
exports.ACTIVATED_PROPERTY = "edu-activated";
/**
 * <en_us>Html attribute: subclass name</en_us>
 * <zh_cn>html属性：子类名</zh_cn>
 * <zh_tw>html内容：子類名</zh_tw>
 */
exports.SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name";
/**
 * <en_us>Html attributes: language</en_us>
 * <zh_cn>html属性：语言</zh_cn>
 * <zh_tw>html内容：語言</zh_tw>
 */
exports.LANG_PROPERTY = "edu-lang";
/**
 * <en_us>Html attribute: page order</en_us>
 * <zh_cn>html属性：页序</zh_cn>
 * <zh_tw>html内容：頁序</zh_tw>
 */
exports.PAGE_PROPERTY = "edu-page";
/**
 * <en_us>Html attribute: device</en_us>
 * <zh_cn>html属性：设备</zh_cn>
 * <zh_tw>html内容：設備</zh_tw>
 */
exports.DEVICE_PROPERTY = "edu-device";
/**
 * <en_us>Html attribute: report</en_us>
 * <zh_cn>html属性：报表</zh_cn>
 * <zh_tw>html内容：報表</zh_tw>
 */
exports.REPORT_PROPERTY = "edu-report";
/**
 * <en_us>Html attribute: id</en_us>
 * <zh_cn>html属性：编号</zh_cn>
 * <zh_tw>html内容：編號</zh_tw>
 */
exports.ID_PROPERTY = "edu-id";
/**
 * <en_us>Html attribute: paper size</en_us>
 * <zh_cn>html属性：纸型</zh_cn>
 * <zh_tw>html内容：紙型</zh_tw>
 */
exports.PAPER_SIZE_PROPERTY = "edu-paper-size";
/**
 * <en_us>Html attribute: report type</en_us>
 * <zh_cn>html属性：报表类型</zh_cn>
 * <zh_tw>html内容：報表類型</zh_tw>
 */
exports.REPORT_KIND_PROPERTY = "edu-report-kind";
