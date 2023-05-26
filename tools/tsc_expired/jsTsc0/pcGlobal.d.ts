/// <reference path="../../../src/types/const.d.ts" />
/// <reference path="../../../src/types/dom.d.ts" />
/// <reference path="../../../src/types/global.d.ts" />
/// <reference path="../../../src/types/storage.d.ts" />
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>类：电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>類：電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
declare class PcGlobal {
  /**
     * <en>Sharing area element</en>
     * <zh_cn>分享区元素</zh_cn>
     * <zh_tw>分享區元素</zh_tw>
     */
  private shareAreaElement;
  /**
     * <en>WeChat sharing button element</en>
     * <zh_cn>微信分享按钮元素</zh_cn>
     * <zh_tw>微信分享按鈕元素</zh_tw>
     */
  private wechatShareElement;
  /**
     * <en>header element</en>
     * <zh_cn>header元素</zh_cn>
     * <zh_tw>header元素</zh_tw>
     */
  private headerElement;
  /**
     * <en>Page logo element</en>
     * <zh_cn>页面logo元素</zh_cn>
     * <zh_tw>頁面logo元素</zh_tw>
     */
  private logoElement;
  /**
     * <en>Menu using nav tags</en>
     * <zh_cn>使用nav标签的menu</zh_cn>
     * <zh_tw>使用nav標籤的menu</zh_tw>
     */
  private navElement;
  /**
     * <en>footer element</en>
     * <zh_cn>footer元素</zh_cn>
     * <zh_tw>footer元素</zh_tw>
     */
  private footerElement;
  /**
     * <en>main element</en>
     * <zh_cn>main元素</zh_cn>
     * <zh_tw>main元素</zh_tw>
     */
  private mainElement;
  /**
     * <en>Array: top right menu sub item</en>
     * <zh_cn>数组：顶部右上角菜单子项</zh_cn>
     * <zh_tw>數組：頂部右上角菜單子項</zh_tw>
     */
  private readonly topMenuItems;
  /**
     * <en>Arrays: footer hotspot data</en>
     * <zh_cn>数组：页脚热区数据</zh_cn>
     * <zh_tw>數組：頁腳熱區數據</zh_tw>
     */
  private readonly footerHotAreas;
  /**
     * <en>Add current page to favorites.</en>
     * <zh_cn>添加当前页面到收藏夹中</zh_cn>
     * <zh_tw>添加當前頁面到收藏夾中</zh_tw>
     */
  private onAddFavorite;
  /**
     * <en>Share</en>
     * <zh_cn>分享</zh_cn>
     * <zh_tw>分享</zh_tw>
     */
  private onShare;
  /**
     * <en>Search Area</en>
     * <zh_cn>搜索区</zh_cn>
     * <zh_tw>搜索區</zh_tw>
     */
  private searchRegionElement;
  /**
     * <en>Show Search Area</en>
     * <zh_cn>显示搜索区域</zh_cn>
     * <zh_tw>顯示搜索區域</zh_tw>
     */
  private onShowSearchRegion;
  /**
     * <en>Change the language</en>
     * <zh_cn>切换语言</zh_cn>
     * <zh_tw>切換語言</zh_tw>
     */
  private onChangeLanuage;
  private pageSubKind;
  getPageSubKind: () => any;
  setPageSubKind: (kind: string) => void;
  private pageIndex;
  getPageIndex: () => any;
  setPageIndex: (index: number) => void;
  /**
     * <en>initialization</en>
     * <zh_cn>初始化</zh_cn>
     * <zh_tw>初始化</zh_tw>
     */
  init: () => void;
  fillListAndPagination: (
    listElement: HTMLDivElement,
    paginationElement: HTMLDivElement,
    pageSize: number,
    list: Array<object>,
    pageName: string,
    fillItem: (
      itemElement: HTMLDivElement,
      data: object | null,
      init?: boolean,
    ) => void,
  ) => void;
  changePaginationParams: (
    list: object[],
    pageSize: number,
    listElement: HTMLDivElement,
    paginationElement: HTMLDivElement,
    fillItem: (
      itemElement: HTMLDivElement,
      data: object | null,
      init?: boolean,
    ) => void,
  ) => void;
}
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
export declare const pcGlobal: PcGlobal;
export {};
