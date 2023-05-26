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
  isTop: boolean;
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
  homePage: {
    stories: number;
    teachers: number;
  };
  treasuresPage: number;
  bricksPage: {
    subKind: number;
    list: number;
  };
  storiesPage: number;
};
