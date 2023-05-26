/**
 * <en>Natural treasures</en>
 * <zh_cn>物华天宝</zh_cn>
 * <zh_tw>物華天寶</zh_tw>
 */
export declare const treasures: ({
  image: string;
  link: string[];
  title: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
  summary: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
} | {
  image: string;
  link: string;
  title: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
  summary: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
})[];
/**
 * <en>Throwing a brick to attract jade</en>
 * <zh_cn>抛砖引玉</zh_cn>
 * <zh_tw>抛磚引玉</zh_tw>
 */
export declare const bricks: {
  id: number;
  subKind: string;
  version: string;
  image: string;
  title: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
  summary: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
}[];
/**
 * <en>growing</en>
 * <zh_cn>成长足迹</zh_cn>
 * <zh_tw>成長足跡</zh_tw>
 */
export declare const stories: {
  id: number;
  date: Date;
  isTop: string;
  version: string;
  title: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
  summary: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
  html: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
}[];
/**
 * <en>Good teachers and helpful friends.</en>
 * <zh_cn>良师益友</zh_cn>
 * <zh_tw>良師益友</zh_tw>
 */
export declare const teachers: {
  name: string;
  link: string;
  i18n: {
    en: string;
    zh_cn: string;
    zh_tw: string;
  };
}[];
/**
 * <en>Search source. Currently, it is a combination of attracting talents and attracting talents</en>
 * <zh_cn>搜索源，当前为抛砖引玉与物华天宝的组合</zh_cn>
 * <zh_tw>蒐索源，當前為抛磚引玉與物華天寶的組合</zh_tw>
 */
export declare const searchSources: any[];
/**
 * <en>Records per page</en>
 * <zh_cn>每页记录数</zh_cn>
 * <zh_tw>每頁記錄數</zh_tw>
 */
export declare const PageSize: {
  /**
   * <en>Home page</en>
   * <zh_cn>首页</zh_cn>
   * <zh_tw>首頁</zh_tw>
   */
  homePage: {
    /**
     * <en>Growth footprint</en>
     * <zh_cn>成长足迹</zh_cn>
     * <zh_tw>成長足迹</zh_tw>
     */
    stories: number;
    /**
     * <en>Good teachers and helpful friends</en>
     * <zh_cn>良师益友</zh_cn>
     * <zh_tw>良師益友</zh_tw>
     */
    teachers: number;
  };
  /**
   * <en>List page of natural treasures</en>
   * <zh_cn>物华天宝列表页</zh_cn>
   * <zh_tw>物華天寶清單頁</zh_tw>
   */
  treasuresPage: number;
  /**
   * <en>List page of throw away a brick in order to get a gem</en>
   * <zh_cn>抛砖引玉列表页</zh_cn>
   * <zh_tw>抛磚引玉清單頁</zh_tw>
   */
  bricksPage: {
    /**
     * <en>Sub kinds</en>
     * <zh_cn>子类</zh_cn>
     * <zh_tw>子類</zh_tw>
     */
    subKind: number;
    /**
     * <en>List</en>
     * <zh_cn>列表</zh_cn>
     * <zh_tw>清單</zh_tw>
     */
    list: number;
  };
  /**
   * <en>List page of growth footprint</en>
   * <zh_cn>成长足迹列表页</zh_cn>
   * <zh_tw>成長足迹清單頁</zh_tw>
   */
  storiesPage: number;
};
