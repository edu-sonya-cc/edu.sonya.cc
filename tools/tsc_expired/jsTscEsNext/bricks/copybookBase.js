// import { FILENAME_POSTFIX } from '../const';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, stopEventBubble, showBlock, hide } from '../dom';
// import { BrickBase } from './brickBase';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/brickBase.d.ts' />
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
export class CopybookBase extends BrickBase {
  constructor(appendData, otherComputedData) {
    super({
      copybooks: [],
      selectedCheckboxIndexArray: [],
      kind: "pinyinToChinese",
      inputMethod: "select",
      fontSize: "small",
      color: "blackOnGreen",
      ...appendData,
    }, {
      css: "",
      html: "",
      ...otherComputedData,
    });
  }
  /**
   * <en>Synchronize new data related to copybook.</en>
   * <zh_cn>同步字帖相关新数据</zh_cn>
   * <zh_tw>同步字帖相關新數據</zh_tw>
   * @param _newData
   * <en>New data related to copybook.</en>
   * <zh_cn>字帖相关新数据</zh_cn>
   * <zh_tw>字帖相關新數據</zh_tw>
   */
  updateOtherDataOfCopybook = (_newData) => {};
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
  usableCopybookCheckboxElementArray = [];
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
  usableCopybooksPeopleEducationEdition = [];
  /**
   * <en>Typebook Kind radio button element array.</en>
   * <zh_cn>字帖类型单选按钮数组</zh_cn>
   * <zh_tw>字帖類型單選按鈕數組</zh_tw>
   */
  kindElementArray = [];
  /**
   * <en>Init typebook kind radio button element array.</en>
   * <zh_cn>初始化字帖类型单选按钮数组</zh_cn>
   * <zh_tw>初始化字帖類型單選按鈕數組</zh_tw>
   */
  initKindElements = () => {
    const wrapLabelI18n = {
      en: `Typebook Kind`,
      zh_cn: `字帖类型`,
      zh_tw: `字帖類型`,
    };
    const radiosInfoArray = [
      {
        value: `pinyinToChinese`,
        i18nHtml: getI18nInnerHTML({
          en: `Reading Pinyin and Writing Chinese Characters`,
          zh_cn: `看拼音写汉字`,
          zh_tw: `看拼音寫漢字`,
        }),
      },
      {
        value: `chineseToPinyin`,
        i18nHtml: getI18nInnerHTML({
          en: `Look at Chinese characters and write pinyin`,
          zh_cn: `看汉字写拼音`,
          zh_tw: `看漢字寫拼音`,
        }),
      },
    ];
    this.initRadioGroupWithLabelByStringValue(
      radiosInfoArray,
      "kind",
      this.kindElementArray,
      wrapLabelI18n,
    );
  };
  /**
   * <en>Entry method radio button element array.</en>
   * <zh_cn>录入方式单选按钮数组</zh_cn>
   * <zh_tw>錄入方式單選按鈕數組</zh_tw>
   */
  inputMethodElementArray = [];
  /**
   * <en>Init entry method radio button element array.</en>
   * <zh_cn>初始化录入方式单选按钮数组</zh_cn>
   * <zh_tw>初始化錄入方式單選按鈕數組</zh_tw>
   */
  initInputMethodElements = () => {
    const wrapLabelI18n = {
      en: `Entry method`,
      zh_cn: `录入方式`,
      zh_tw: `錄入方式`,
    };
    const radiosInfoArray = [
      {
        value: `select`,
        i18nHtml: getI18nInnerHTML({
          en: `Select`,
          zh_cn: `选择`,
          zh_tw: `選擇`,
        }),
      },
      {
        value: `manualInput`,
        i18nHtml: getI18nInnerHTML({
          en: `Manual input`,
          zh_cn: `手动输入`,
          zh_tw: `手動輸入`,
        }),
      },
    ];
    this.initRadioGroupWithLabelByStringValue(
      radiosInfoArray,
      "inputMethod",
      this.inputMethodElementArray,
      wrapLabelI18n,
    );
  };
  /**
   * <en>Font Size radio button element array.</en>
   * <zh_cn>字号单选按钮数组</zh_cn>
   * <zh_tw>字型大小單選按鈕數組</zh_tw>
   */
  fontSizeElementArray = [];
  /**
   * <en>Init font size radio button element array.</en>
   * <zh_cn>初始化字号单选按钮数组</zh_cn>
   * <zh_tw>初始化字型大小單選按鈕數組</zh_tw>
   */
  initFontSizeElements = () => {
    const wrapLabelI18n = {
      en: `Font Size`,
      zh_cn: `字号`,
      zh_tw: `字型大小`,
    };
    const radiosInfoArray = [
      {
        value: `small`,
        i18nHtml: getI18nInnerHTML({
          en: `Small`,
          zh_cn: `小`,
          zh_tw: `小`,
        }),
      },
      {
        value: `middle`,
        i18nHtml: getI18nInnerHTML({
          en: `Middle`,
          zh_cn: `中`,
          zh_tw: `中`,
        }),
      },
      {
        value: `big`,
        i18nHtml: getI18nInnerHTML({
          en: `Big`,
          zh_cn: `大`,
          zh_tw: `大`,
        }),
      },
    ];
    this.initRadioGroupWithLabelByStringValue(
      radiosInfoArray,
      "fontSize",
      this.fontSizeElementArray,
      wrapLabelI18n,
    );
  };
  /**
   * <en>Color radio button element array.</en>
   * <zh_cn>颜色单选按钮数组</zh_cn>
   * <zh_tw>顏色單選按鈕數組</zh_tw>
   */
  colorElementArray = [];
  /**
   * <en>Init color radio button element array.</en>
   * <zh_cn>初始化颜色单选按钮数组</zh_cn>
   * <zh_tw>初始化顏色單選按鈕數組</zh_tw>
   */
  initColorElements = () => {
    const wrapLabelI18n = {
      en: `Color`,
      zh_cn: `颜色`,
      zh_tw: `顏色`,
    };
    const radiosInfoArray = [
      {
        value: `blackOnGreen`,
        i18nHtml: getI18nInnerHTML({
          en: `Green line and black characters.`,
          zh_cn: `绿线黑字`,
          zh_tw: `綠線黑字`,
        }),
      },
      {
        value: `redOnBlack`,
        i18nHtml: getI18nInnerHTML({
          en: `Black line and red characters.`,
          zh_cn: `黑线红字`,
          zh_tw: `黑線紅字`,
        }),
      },
      {
        value: `blackOnRed`,
        i18nHtml: getI18nInnerHTML({
          en: `Red line and black characters.`,
          zh_cn: `红线黑字`,
          zh_tw: `紅線黑字`,
        }),
      },
    ];
    this.initRadioGroupWithLabelByStringValue(
      radiosInfoArray,
      "color",
      this.colorElementArray,
      wrapLabelI18n,
    );
  };
  // private pinyinArrayWithoutToneLength6 = ['chuɑnɡ', 'shuɑnɡ', 'zhuɑnɡ'];
  // private pinyinArrayWithoutToneLength5 = ['chɑnɡ', 'chenɡ', 'chonɡ', 'chuɑi', 'chuɑn', 'ɡuɑnɡ', 'huɑnɡ', 'jiɑnɡ', 'jionɡ', 'kuɑnɡ', 'liɑnɡ', 'niɑnɡ', 'qiɑnɡ', 'qionɡ', 'shɑnɡ', 'shenɡ', 'shuɑi', 'shuɑn', 'xiɑnɡ', 'xionɡ', 'zhɑnɡ', 'zhenɡ', 'zhonɡ', 'zhuɑi', 'zhuɑn'];
  // private pinyinArrayWithoutToneLength4 = ['bɑnɡ', 'benɡ', 'biɑn', 'biɑo', 'binɡ', 'cɑnɡ', 'cenɡ', 'chɑi', 'chɑn', 'chɑo', 'chen', 'chou', 'chuɑ', 'chui', 'chun', 'chuo', 'conɡ', 'cuɑn', 'dɑnɡ', 'denɡ', 'diɑn', 'diɑo', 'dinɡ', 'donɡ', 'duɑn', 'fɑnɡ', 'fenɡ', 'fiɑo', 'ɡɑnɡ', 'ɡenɡ', 'ɡonɡ', 'ɡuɑi', 'ɡuɑn', 'hɑnɡ', 'henɡ', 'honɡ', 'huɑi', 'huɑn', 'jiɑn', 'jiɑo', 'jinɡ', 'juɑn', 'kɑnɡ', 'kenɡ', 'konɡ', 'kuɑi', 'kuɑn', 'lɑnɡ', 'lenɡ', 'liɑn', 'liɑo', 'linɡ', 'lonɡ', 'luɑn', 'mɑnɡ', 'menɡ', 'miɑn', 'miɑo', 'minɡ', 'nɑnɡ', 'nenɡ', 'niɑn', 'niɑo', 'ninɡ', 'nonɡ', 'nuɑn', 'pɑnɡ', 'penɡ', 'piɑn', 'piɑo', 'pinɡ', 'qiɑn', 'qiɑo', 'qinɡ', 'quɑn', 'rɑnɡ', 'renɡ', 'ronɡ', 'ruɑn', 'sɑnɡ', 'senɡ', 'shɑi', 'shɑn', 'shɑo', 'shei', 'shen', 'shou', 'shuɑ', 'shui', 'shun', 'shuo', 'sonɡ', 'suɑn', 'tɑnɡ', 'tenɡ', 'tiɑn', 'tiɑo', 'tinɡ', 'tonɡ', 'tuɑn', 'wɑnɡ', 'wenɡ', 'xiɑn', 'xiɑo', 'xinɡ', 'xuɑn', 'yɑnɡ', 'yinɡ', 'yonɡ', 'yuɑn', 'zɑnɡ', 'zenɡ', 'zhɑi', 'zhɑn', 'zhɑo', 'zhei', 'zhen', 'zhou', 'zhuɑ', 'zhui', 'zhun', 'zhuo', 'zonɡ', 'zuɑn'];
  // private pinyinArrayWithoutToneLength3 = ['ɑnɡ', 'bɑi', 'bɑn', 'bɑo', 'bei', 'ben', 'bie', 'bin', 'cɑi', 'cɑn', 'cɑo', 'cen', 'chɑ', 'che', 'chi', 'chu', 'cou', 'cui', 'cun', 'cuo', 'dɑi', 'dɑn', 'dɑo', 'dei', 'den', 'diɑ', 'die', 'diu', 'dou', 'dui', 'dun', 'duo', 'enɡ', 'fɑn', 'fei', 'fen', 'fou', 'ɡɑi', 'ɡɑn', 'ɡɑo', 'ɡei', 'ɡen', 'ɡou', 'ɡuɑ', 'ɡui', 'ɡun', 'ɡuo', 'hɑi', 'hɑn', 'hɑo', 'hei', 'hen', 'hou', 'huɑ', 'hui', 'hun', 'huo', 'jiɑ', 'jie', 'jin', 'jiu', 'jue', 'jun', 'kɑi', 'kɑn', 'kɑo', 'kei', 'ken', 'kou', 'kuɑ', 'kui', 'kun', 'kuo', 'lɑi', 'lɑn', 'lɑo', 'lei', 'liɑ', 'lie', 'lin', 'liu', 'lou', 'lue', 'lun', 'luo', 'mɑi', 'mɑn', 'mɑo', 'mei', 'men', 'mie', 'min', 'miu', 'mou', 'nɑi', 'nɑn', 'nɑo', 'nei', 'nen', 'nie', 'nin', 'niu', 'nou', 'nue', 'nun', 'nuo', 'pɑi', 'pɑn', 'pɑo', 'pei', 'pen', 'pie', 'pin', 'pou', 'qiɑ', 'qie', 'qin', 'qiu', 'que', 'qun', 'rɑn', 'rɑo', 'ren', 'rou', 'ruɑ', 'rui', 'run', 'ruo', 'sɑi', 'sɑn', 'sɑo', 'sen', 'shɑ', 'she', 'shi', 'shu', 'sou', 'sui', 'sun', 'suo', 'tɑi', 'tɑn', 'tɑo', 'tei', 'tie', 'tou', 'tui', 'tun', 'tuo', 'wɑi', 'wɑn', 'wei', 'wen', 'xiɑ', 'xie', 'xin', 'xiu', 'xue', 'xun', 'yɑn', 'yɑo', 'yin', 'you', 'yue', 'yun', 'zɑi', 'zɑn', 'zɑo', 'zei', 'zen', 'zhɑ', 'zhe', 'zhi', 'zhu', 'zou', 'zui', 'zun', 'zuo'];
  // private pinyinArrayWithoutToneLength2 = ['ɑi', 'ɑn', 'ɑo', 'bɑ', 'bi', 'bo', 'bu', 'cɑ', 'ce', 'ci', 'cu', 'dɑ', 'de', 'di', 'du', 'ei', 'en', 'er', 'fɑ', 'fo', 'fu', 'ɡɑ', 'ɡe', 'ɡu', 'hɑ', 'he', 'hu', 'ji', 'ju', 'kɑ', 'ke', 'ku', 'lɑ', 'le', 'li', 'lo', 'lu', 'lü', 'mɑ', 'me', 'mi', 'mo', 'mu', 'nɑ', 'ne', 'ni', 'nu', 'nü', 'ou', 'pɑ', 'pi', 'po', 'pu', 'qi', 'qu', 're', 'ri', 'ru', 'sɑ', 'se', 'si', 'su', 'tɑ', 'te', 'ti', 'tu', 'wɑ', 'wo', 'wu', 'xi', 'xu', 'yɑ', 'ye', 'yi', 'yo', 'yu', 'zɑ', 'ze', 'zi', 'zu'];
  // private pinyinArrayWithoutToneLength1 = ['ɑ', 'e', 'o'];
  pinyinArrayWithoutTone = [
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
  isPinyinBill = (pinyinBill) => {
    let pinyinBillTemp = pinyinBill;
    let pinyinBillTempLength = pinyinBillTemp.length;
    while (pinyinBillTempLength) {
      let find = false;
      for (let leftLength = 6; leftLength > 0; --leftLength) {
        if (pinyinBillTempLength < leftLength) {
          continue;
        }
        const leftPinyin = pinyinBillTemp.substring(0, leftLength);
        if (this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
          continue;
        }
        if (pinyinBillTempLength === leftLength) {
          find = true;
          pinyinBillTemp = "";
          break;
        }
        const rightPinyinBill = pinyinBillTemp.substr(leftLength);
        if (this.isPinyinBill(rightPinyinBill)) {
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
  splitPinyin = (pinyinBill, pinyinArray, charCount) => {
    // console.log(`splitPinyin('${pinyinBill}', ${pinyinArray}, ${charCount})`);
    pinyinBill = pinyinBill.toLowerCase();
    const isEndOfR = pinyinBill.substr(-1) === "r";
    let pinyinBillTemp = isEndOfR
      ? pinyinBill.substr(0, pinyinBill.length - 1)
      : pinyinBill;
    pinyinBillTemp = pinyinBillTemp
      .replace(/[āáǎà]/gi, "ɑ")
      .replace(/[ōóǒò]/gi, "o")
      .replace(/[ēéěè]/gi, "e")
      .replace(/[īíǐì]/gi, "i")
      .replace(/[ūúǔù]/gi, "u")
      .replace(/[ǖǘǚǜ]/gi, "ü");
    const array = [];
    let pinyinBillTempLength = pinyinBillTemp.length;
    while (pinyinBillTempLength) {
      let find = false;
      for (let leftLength = 6; leftLength > 0; --leftLength) {
        if (pinyinBillTempLength < leftLength) {
          continue;
        }
        const leftPinyin = pinyinBillTemp.substring(0, leftLength);
        if (this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
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
        const rightPinyinBill = pinyinBillTemp.substr(leftLength);
        if (this.isPinyinBill(rightPinyinBill)) {
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
    let offset = 0;
    array.forEach((pinyin) => {
      const length = pinyin.length;
      pinyinArray.push(pinyinBill.substr(offset, length));
      offset += length;
    });
    const count = pinyinArray.length;
    if (isEndOfR) {
      const last = pinyinArray.splice(count - 1, 1)[0].concat("r");
      pinyinArray.push(last);
    }
  };
  fixPinyinArray = (pinyinBill, pinyinArray, charCount) => {
    const { splitPinyin } = this;
    const array = [];
    pinyinArray.forEach((seg) => {
      splitPinyin(seg, array, charCount);
    });
    if (array.length !== charCount) {
      array.length = 0;
      splitPinyin(pinyinBill, array, charCount);
    }
    pinyinArray.length = 0;
    array.forEach((pinyin) => {
      pinyinArray.push(pinyin);
    });
  };
  // protected CHARS = '⺀⺈⺊⺌⺍⺗⺮⺳⺼吖阿啊锕錒嗄哎哀埃唉欸锿挨捱皑皚癌矮蔼藹霭艾砹爱隘碍嗳嗌愛嫒瑷暧噯璦曖礙安桉氨庵谙媕鹌鞍諳鵪俺埯唵铵揞銨犴岸按豻胺案暗黯肮骯昂盎凹敖遨嗷廒獒熬聱螯翱鳌鏖鰲袄媪襖岙坳傲奥骜奧澳懊鏊八丷巴扒叭芭岜疤捌笆粑鲃䰾犮拔茇菝跋魃把靶坝爸罢鲅罷霸壩灞吧掰白百佰柏捭摆擺败拜敗稗扳班般颁斑搬頒瘢癍阪坂板版钣舨闆办半伴拌绊湴絆辦瓣扮邦帮梆浜幫绑綁榜蚌棒傍谤蒡磅镑謗鎊勹包苞孢胞龅煲褒齙雹薄宀饱宝保鸨珤葆堡飽褓鴇寶报抱趵豹報鲍暴鮑爆陂杯卑盃悲碑鹎鵯北贝孛邶貝狈备背钡倍狽悖被辈備惫焙蓓碚褙輩鋇憊鞴鐾呗唄奔贲賁锛本夲苯畚坌笨崩绷嘣繃甭埲泵迸甏镚蹦屄逼荸鼻匕比吡妣彼秕笔俾舭啚筆鄙币必毕闭坒庇畀荜毖哔陛毙畢铋狴萆閉庳敝婢皕赑筚愎弼蓽蓖跸嗶痹痺滗裨碧蔽箅弊幣薜觱篳篦壁避嬖髀斃濞臂璧襞贔鸊边砭笾猵编煸蝙編鳊鞭邊釆贬窆扁匾貶碥稨褊卞弁抃苄汴忭变便遍缏辨辩辫辮辯變标飑髟彪猋摽骠標膘麃飙镖飚瘭藨鏢镳飆鑣表婊裱錶鳔鰾憋鳖鱉別别蹩瘪癟彆邠玢宾彬傧斌滨缤槟豩賓镔濒豳濱檳瀕繽摈殡膑擯殯髌鬓髕鬢仌冰兵丙邴秉柄饼炳禀稟餅疒并併並病摒癶拨波玻钵饽袯剥剝菠缽播撥餑伯驳帛泊勃钹铂亳桲舶脖博鹁渤搏駁箔膊踣镈駮鵓鎛礴跛檗擘簸卜啵蔔逋钸晡鈽卟补捕哺補不布步佈歨怖钚埗部埠瓿醭簿擦礤猜才材财財裁纔采採彩睬綵踩菜蔡縩参參骖餐残蚕惭殘慚蠶惨慘黪灿粲璨燦仓伧苍沧鸧舱倉蒼滄艙鶬藏操糙曹嘈漕槽螬艚艹艸草刂冊册厕侧测恻側策廁測惻岑涔梣噌层曾層蹭叉杈臿插馇锸嚓茬茶查搽猹槎碴察檫衩镲鑔汊奼岔刹诧差姹詫拆钗釵侪柴豺儕虿瘥㢟觇掺搀覘摻攙㢆谗婵馋禅孱缠蝉廛潺嬋澶禪毚蟬蟾纏躔讒饞产浐谄啴铲產産阐蒇剷滻諂骣冁鏟闡忏颤懺羼顫伥昌倀菖猖阊娼閶鲳鯧镸苌肠長尝常偿徜場腸塲嘗嫦償厂场昶惝敞䠀廠氅怅畅倡鬯唱悵暢抄怊钞绰超鈔焯晁巢朝嘲潮鼂吵炒耖车車砗扯屮彻坼掣撤徹澈抻郴琛嗔瞋臣尘辰沉忱陈宸陳晨谌塵諶碜衬龀趁榇谶襯讖傖柽爯称蛏稱撐撑瞠成丞呈枨诚承城埕乘铖程惩裎塍誠酲澄橙懲逞骋騁秤牚吃哧鸱蚩眵笞嗤痴媸螭鴟魑癡池弛驰迟茌持馳墀踟遲篪尺呎齿侈耻恥豉齒褫彳叱斥赤饬炽翅敕飭啻傺瘛熾冲充沖忡茺舂衝憧艟虫崇蟲宠寵铳銃抽瘳仇俦帱惆绸椆畴酬稠愁筹踌綢雔幬雠疇籌躊丑瞅醜臭出初樗刍除芻厨锄滁蒭蜍雏鋤廚橱躇雛櫥蹰躕杵础楮储楚褚儲礎亍处処豖怵绌畜處絀搐触閦嘼憷黜觸矗欻揣搋踹膪川巛氚穿传舡船遄椽傳舛喘串钏釧刅疮窗瘡床闯闖创怆創愴吹炊垂陲捶棰槌锤錘春椿蝽鰆纯莼唇純脣淳蒓鹑醇鶉蠢踔戳辵㲋啜惙辍綽輟龊齪齱呲疵词茈茨祠瓷詞辞慈磁雌鹚糍辭鷀此朿次刺佽莿赐絘賜匆苁囪囱枞怱悤葱蔥骢璁聪樅熜聰从丛從淙琮叢凑湊楱辏腠粗徂殂促猝蔟醋簇蹙蹴汆撺镩蹿攛躥窜篡竄爨崔催摧榱漼璀脆萃啐淬悴毳瘁粹翠邨村皴存忖寸吋搓磋撮蹉虘嵯矬痤鹾脞挫厝措锉错銼錯咑垯耷哒搭嗒褡噠达怛妲羍剳笪達答跶靼瘩鞑韃打大眔躂呆歹逮傣代甙岱迨绐玳带殆贷待怠埭帶袋貸戴黛亻卩丹担单眈耽郸聃酖殚單瘅鄲箪儋殫癉簞胆疸掸亶撣擔膽旦但诞萏啖淡惮弹蛋氮誕憚彈澹当铛裆筜當噹襠簹鐺挡档党谠擋檔黨氹凼砀宕荡菪蕩儅盪刀叨忉氘导岛捣倒島祷搗導蹈禱到盗悼道盜稻纛㝵得锝嘚德的灯登噔燈簦蹬等戥邓凳鄧嶝磴瞪镫低羝隄堤嘀滴鞮狄迪籴荻敌涤笛觌滌嫡敵镝氐邸诋坻抵底柢牴砥詆骶地玓弟帝递娣第啇谛蒂棣睇缔遞碲締踶諦螮嗲掂滇颠顛巅癫巔癲丶典点碘踮點电佃甸阽坫店玷垫扂钿淀惦奠電鈿殿墊靛澱簟癜刁叼凋貂碉雕鲷鵰鯛屌弔吊伄钓掉铞铫釣調爹跌迭垤瓞戜谍堞揲耋喋牒叠碟蝶蹀諜鲽鰈疊丁仃叮玎盯町疔耵虰釘顶酊頂鼎订钉定訂啶铤腚碇锭鋌錠丟丢铥东冬東咚岽氡鸫鼕鶇董懂动冻侗垌栋峒胨洞恫胴凍硐動棟腖都兜蔸篼抖枓钭陡蚪斗豆逗鬥痘窦竇鬭阇督嘟毒独读渎椟犊牍獨瀆犢牘黩髑讀黷笃堵赌睹賭篤芏杜肚妒度渡镀蠹端短段断缎椴煅锻緞簖鍛斷堆队对兌兑怼隊碓對憝懟吨敦墩噸燉礅镦蹲盹趸躉沌炖砘钝盾顿遁鈍頓多咄哆掇敪裰夺铎鈬奪踱朵垛哚埵缍躲剁陏舵堕惰媠跺墮屙婀讹俄莪峨娥訛锇鹅皒蛾额鵝額噁厄歺扼苊呃轭垩咢恶饿堊軛鄂阏谔惡萼遏愕腭鹗锷颚餓噩諤鳄顎鶚齶鱷诶恩蒽摁嗯儿而兒鸸鲕鴯尔耳迩饵洱珥铒爾餌邇二佴贰貳发發廢乏伐罚垡阀筏閥罰法砝珐髮帆番蕃幡藩翻凡矾钒烦釩棥煩樊燔繁蹯蘩礬犭攵反払返犯氾饭泛范贩畈梵販飯範匚方邡坊芳枋钫防妨肪房鲂仿访纺昉舫紡訪放飞妃非飛菲啡绯扉蜚緋霏鲱鯡肥淝腓匪诽悱斐榧翡誹篚芾吠肺狒废沸费費痱镄分芬吩纷氛紛棻酚坟汾棼焚鼢粉瞓份奋忿偾粪愤墳憤奮鲼糞瀵丰风沣枫封砜風疯埄峰烽葑锋犎楓蜂瘋鋒豐酆冯夆逢馮缝縫讽唪諷凤奉俸鳳佛缶否夫伕呋肤尃麸旉趺跗稃孵麩敷膚巿弗伏凫扶芙孚拂苻茀彿服怫绂绋茯畐罘氟俘郛祓莩砩蚨浮菔桴符匐涪艴紼幅辐蜉鳧福蝠幞鴔輻黻抚甫拊斧府俯釜辅腑滏輔腐撫黼父讣付负妇附咐阜驸赴复負訃副婦赋傅復富腹鲋缚赙複駙賦蝮縛鳆覆馥袱旮伽呷嘎钆尜噶尕尬该陔垓赅賅該改丐钙盖鈣溉蓋概戤甘肝坩苷矸泔乹柑竿酐疳尴尷杆秆赶桿敢稈感趕澉橄擀干旰绀倝淦紺幹赣贛冈罓刚肛纲岡钢缸罡剛崗綱鋼岗港杠筻槓戆皋高羔睪槔睾膏篙糕杲搞缟槁槀镐稿縞藁鎬告郜诰锆暠鋯戈圪纥疙咯哥胳鸽袼搁割歌擱鴿革阁格鬲隔塥嗝閤閣搿膈骼镉哿舸葛个各虼個硌铬鉻给給根跟哏亘亙艮茛庚耕赓鹒鶊羹埂耿哽绠梗鲠更工弓厷公功攻肱宫恭蚣躬宮龚觥龔廾巩汞拱珙栱鞏共贡供貢唝勾佝沟钩冓鈎缑鉤溝篝鞲苟岣狗枸笱构购诟垢够夠遘彀詬媾觏構購估咕沽孤姑轱鸪菰菇蛄辜軲酤觚毂箍鴣轂夃古扢谷汩诂股骨牯罟钴蛊鼓鈷嘏鹘穀臌瞽鶻蠱固故顾梏崮牿雇锢痼僱錮鲴顧瓜呱刮胍鸹鴰冎剐剮寡卦诖挂掛絓詿褂乖拐怪噲关观官倌棺鳏關鰥觀莞馆筦管館毌丱贯冠掼涫惯貫慣盥雚灌鹳罐光咣胱广犷廣獷桄逛归圭龟妫规皈闺規硅瑰閨鲑龜鮭巂歸氿宄轨庋匦诡軌鬼癸匭晷詭簋柜炅刿刽贵桂桧貴筀跪劊櫃鳜鱖鱥衮袞绲辊滚滾緄輥磙鲧棍呙埚郭崞聒锅蝈鍋蟈国掴國帼摑幗虢馘果猓椁槨蜾裹过過哈铪蛤还孩骸還胲海醢亥骇氦害嗐駭顸蚶酣憨鼾邗邯含函唅晗焓涵韩寒韓罕喊闞汉汗旱捍悍菡焊颔撖漢銲撼翰頷憾瀚夯行杭绗航颃筕絎頏沆蒿薅嚆蚝毫嗥豪壕嚎濠蠔好郝号昊耗浩皓號颢顥灏诃呵喝訶嗬禾合何和劾河曷饸阂紇盍荷核菏盒涸颌阖閡頜翮闔覈贺賀赫㕡褐鹤壑鶴黑嗨嘿痕很狠恨亨哼恒恆姮珩桁鸻横橫衡鴴蘅轰訇烘焢薨轟弘红闳宏泓荭虹洪紅鸿閎蕻黉鴻哄嗊讧訌銾鬨侯矦喉猴瘊骺篌糇吼后厚逅後候堠鲎乎呼忽轷烀虖唿惚雐滹囫狐弧胡壶斛壺葫鹄猢湖瑚煳鹕槲蝴衚糊醐觳餬鵠鬍鶘虍虎浒唬許琥滸互戶户冱护沪岵怙戽祜笏瓠扈滬鹱護花砉划华哗骅華铧猾滑嘩驊化画话桦畫話樺劃怀徊淮槐踝褱懷坏壞欢獾歡环洹桓萑雈锾圜寰缳環鹮繯轘鬟䴉缓緩幻奂奐宦换唤圂涣浣患焕逭換喚痪渙豢煥瘓漶鲩擐鯇肓荒慌皇黄凰隍黃遑徨湟惶煌潢璜蝗篁艎磺癀蟥簧鳇恍晃谎幌謊灰诙挥虺咴恢珲晖揮辉暉詼輝麾徽隳回茴迴洄蛔悔毀毁燬譭卉汇会讳荟哕浍诲绘恚贿烩彗晦秽惠喙缋匯賄會彙誨慧蕙薈噦諱檜燴蟪穢繪昏荤昬阍惛婚葷浑馄混渾魂餛诨溷諢耠锪劐豁活火灬伙钬夥或货获貨祸惑禍蒦膕霍嚄獲镬穫攉藿嚯蠖鑊丌讥击叽饥玑圾芨机乩肌矶鸡咭剞唧积笄飢屐姬基赍犄嵇缉畸跻毄箕嘰稽齑緝畿璣機墼積激擊磯羁雞譏饑躋鷄齎羈亼及吉岌汲级极即佶亟笈急級疾極棘殛戢集蒺楫辑嵴嫉耤蕺瘠鹡輯藉籍鶺几己虮挤脊掎戟幾麂颳擠蟣彐彑旡计记伎纪技芰忌际妓季剂哜計迹洎济既紀畟觊記继偈祭悸寄寂绩蓟跡際霁跽鲚暨㡭稷鲫髻薊冀劑覬濟績檵蹟鯽齌繫骥鱀繼霽驥加佳迦珈挟枷浃痂浹家笳袈葭跏傢猳嘉镓夹夾郏荚郟恝莢戛铗袷颊蛱蛺餄頰甲岬胛叚贾钾假賈鉀瘕价驾架嫁稼價駕駱戋尖奸歼坚间戔肩艰姦监兼菅堅笺間犍湔缄搛蒹煎缣監箋蕑鲣鹣緘艱鞯殲鰹囝拣枧茧柬俭捡笕检趼减剪揀堿硷睑減裥简骞谫戬碱儉翦撿檢蹇謇繭瞼簡鹹騫鹼见件見饯建荐贱牮剑健舰涧渐谏楗践锏毽腱溅鉴键僭漸賤踐踺箭劍澗薦鍵餞諫濺艦鑒鑑江茳将姜豇浆將僵漿薑彊缰殭礓疆韁讲奖桨蒋蔣槳獎耩講匠夅降洚绛絳畺酱犟糨醬艽交郊茭浇娇姣骄胶椒蛟焦跤僬鲛蕉膠澆嬌膲礁鹪鮫蟭驕鷦嚼纟糹角佼挢狡饺绞铰矫皎脚搅筊絞敫腳剿勦僥鉸餃徼缴矯蟜皦繳攪叫觉轿较教窖較酵噍轎醮阶疖皆接秸階揭喈喼嗟街孑节讦劫劼杰疌诘拮洁结桀捷婕絜颉傑結睫節魝詰截碣鲒竭羯潔姐解介戒芥屆届界疥诫蚧借骱誡巾斤今钅兓金釒津衿矜筋襟仅卺巹紧堇厪锦僅谨緊馑廑瑾槿儘錦謹饉尽进近妗劲荩勁晋晉赆烬浸進靳禁缙盡觐噤縉覲燼巠茎京泾经荆荊莖涇菁旌惊晶腈睛粳經兢精鲸鯨鼱驚井阱刭肼颈景儆憬頸警陉径净弪迳胫陘逕倞徑痉凈竞弳脛竟淨婧敬痙靖静境獍靜镜鏡競扃冋冏迥炯窘丩纠鸠究糾赳阄揪啾鳩樛鬏鬮九久玖灸韭酒匛旧臼咎疚柩桕救厩就廄舅僦舊鹫鷲拘苴狙匊居驹疽掬琚椐锔雎裾駒踘鞠鞫局狊侷桔菊焗輂鋦橘咀沮莒矩举蒟榉龃榘踽舉櫸齟巨句讵拒苣洰具炬钜俱倨冣剧据距惧犋鉅飓豦锯聚窭劇踞屦據遽鋸颶屨醵懼捐涓娟鹃镌鵑蠲卷捲锩劵弮倦狷桊绢鄄眷雋飬絹撅噘亅孓夬决诀抉決玨珏绝欮掘桷崛觖訣厥傕絕劂谲蕨嶡獗鴂璚橛镢爵蹶譎矍覺爝攫玃倔军均君钧軍菌皲鈞筠麇俊郡捃峻隽馂浚骏焌竣餕駿咔咖喀卡佧胩开揩開锎剀凯垲恺铠蒈凱慨楷愷锴鎧忾炏嘅愾刊勘龛堪戡龕坎侃砍莰欿槛檻轗看阚瞰闶康慷槺糠扛亢伉抗炕钪尻丂考拷栲烤铐犒銬靠苛珂柯轲科钶疴蚵棵軻痾颏嗑稞窠颗磕瞌蝌頦顆髁壳咳可坷岢渴克刻剋峇恪客课氪骒缂锞溘課肯垦恳啃貇墾懇裉坑吭铿誙空倥崆箜孔恐控抠芤眍摳瞘口竘叩扣釦寇筘蔻矻刳枯哭堀窟骷苦楛库绔庫袴喾裤酷褲嚳夸誇侉垮挎胯跨蒯块快侩郐哙狯脍塊筷鲙儈廥膾鱠宽寬髋髖款窾匡诓哐筐誆狂诳誑夼邝圹纩旷况矿況贶框眶曠爌礦亏岿悝盔窥窺虧奎逵馗揆葵喹暌魁睽蝰櫆夔傀跬匮蒉喟馈溃愦愧匱聩蕢篑潰聵簣饋坤昆崑堃琨髡鹍锟醌錕鲲鵾鯤捆阃悃閫困睏扩括栝蛞阔廓擴闊垃拉啦邋旯剌砬喇腊蜡瘌辣臘镴蠟鑞来來莱崃徕涞萊梾徠淶棶铼赉睐赖睞賚賴濑癞籁瀨癩籟兰岚拦栏婪嵐阑蓝谰澜褴篮斓藍闌镧襤攔蘭籃瀾欄斕讕鑭览揽缆榄罱漤懒懶覽攬欖纜烂滥濫爛啷郎狼阆琅廊瑯榔锒稂螂閬鋃朗浪蒗捞撈劳牢崂铹痨勞嘮嶗癆醪耂老佬咾姥栳铑唠烙涝耢酪嫪澇仂阞艻叻乐泐勒鳓了饹餎雷嫘缧畾檑镭羸耒厽诔垒磊蕾儡壘纍肋泪类累淚酹擂類嘞塄棱楞稜冷愣唎厘狸离骊梨犁鹂喱犂蓠蜊漓缡璃嫠樆貍黎鲡褵罹篱縭釐藜離黧蘺蠡籬驪鸝鱺礼李里俚逦哩娌理锂裡豊裏鋰鲤澧禮鯉醴鳢鱧力历厉立吏坜苈丽励呖利沥枥例疠戾隶荔栎郦轹俪俐疬莉莅栗砺砾秝猁涖悧蛎唳笠脷粝粒厤雳跞詈傈痢蒞溧慄厲勵歷曆篥隸癘瓅壢櫟麗瀝櫪蠣糲儷癧靂奁连怜帘莲連涟梿联裢蓮廉漣奩鲢憐褳濂聯臁镰蠊簾鐮鰱琏敛脸裣蔹槤斂歛臉蘞练炼恋殓链楝煉潋練殮鍊鏈戀良莨凉涼梁椋辌粮粱墚樑輬糧冫两兩俩倆魉魎亮谅辆靓量晾喨踉靚輛諒辽疗聊僚寥撩遼嘹獠潦寮缭膫燎鹩療蟟繚鷯钌蓼尥料尞撂廖瞭镣鐐咧列劣劦冽洌埒烈捩猎裂趔巤獵躐鬣拎邻林临啉淋琳粦鄰粼嶙遴霖辚臨磷瞵鳞驎鱗麟㐭凛凜廪廩懔檩吝赁賃蔺閵膦藺躏躪伶灵夌苓囹泠玲柃瓴铃鸰凌陵聆菱棂蛉舲翎羚淩绫零龄鈴鴒鲮霝酃鯪齡靈欞岭领領嶺另令呤溜熘刘㐬浏留流琉硫馏旒骝榴镏鹠劉瘤鎦餾瀏鎏騮鶹柳绺锍綹六遛鹨龙茏咙泷珑栊胧砻眬聋笼隆癃龍窿蘢嚨瀧瓏朧矓籠聾陇垅拢垄隴攏壟衖瞜娄婁偻蒌楼僂嘍耧樓蝼螻髅搂嵝摟篓陋屚镂瘘漏喽撸噜氇擼嚕卢芦庐垆炉泸栌轳胪鸬颅舻鲈盧蘆廬瀘臚爐轤鑪顱鸕鱸卤虏掳鹵鲁虜滷魯擄橹镥櫓甪陆坴录彔辂赂陸鹿渌淥逯翏禄祿碌賂路箓漉辘戮録錄潞璐簏轆鹭麓露籙鷺峦孪娈栾挛鸾脔滦銮䜌巒孿孌欒攣臠鑾鸞卵乱亂掠寽抡掄仑伦囵沦纶轮侖倫崙圇淪綸輪论論啰罗萝逻脶猡椤锣箩骡镙螺羅騾儸蘿邏籮鑼倮裸瘰蠃泺荦洛络骆珞落絡摞雒漯囉驴闾榈閭藘櫚驢吕呂侣侶捋旅铝稆屡缕鋁膂褛屢履褸縷律虑率绿氯滤綠慮濾鑢略畧锊圙妈媽麻嗎痲蟆马犸玛码蚂馬瑪碼螞杩骂罵吗嘛埋薶霾买荬買蕒劢迈麦卖脉唛脈麥嘜賣邁霡霢颟㒼蛮馒瞒鞔瞞饅鳗鰻蠻满滿螨蟎曼谩墁蔓幔漫慢嫚缦熳镘縵謾邙芒吂汒忙尨盲氓茫硭铓鋩莽漭蟒猫貓毛矛茆茅牦旄酕锚髦氂蝥錨蟊卯峁泖昴铆鉚皃茂冒贸耄袤帽貿瑁楙貌瞀懋么麽麼沒没玫枚眉莓梅脢嵋猸湄媒楣煤酶镅鹛霉黴每美浼镁鎂妹昧袂寐媚魅门扪門钔捫闷焖悶燜懑懣们們虻冡萌蒙盟甍瞢濛懞檬曚朦礞矇艨勐猛锰蜢艋錳懵蠓孟梦夢咪眯弥迷祢袮猕谜醚謎糜縻麋彌禰靡蘼米芈羋洣弭脒敉瞇瀰糸汨觅泌宓祕秘覓密幂谧嘧蜜冪謐眠绵棉綿臱丏免沔黾眄俛勉娩冕渑湎缅腼絻緬面麵喵苗描鹋瞄鶓杪眇秒淼渺缈緲藐邈妙庙廟繆咩灭烕滅蔑篾蠛衊民玟苠岷珉缗暋皿闵抿泯闽敃悯敏閔湣黽愍閩憫鳘名明鸣茗冥眳铭蓂溟暝鳴銘瞑螟酩命谬缪謬摸谟馍嫫摹模膜摩磨糢謨饃蘑魔抹麿末茉殁沫陌莫秣眽蓦貊貉漠寞墨镆瘼默貘驀耱嬷哞牟侔眸谋蛑鉾謀鍪某呒呣毪嘸母牡亩坶拇姆畝鉧木目仫沐苜牧钼㣎募墓幕睦慕暮霂穆拿镎哪那吶呐纳肭钠衲娜納捺鈉乃艿奶氖奈柰耐萘鼐囡男南难喃楠難赧腩蝻囔囊馕饢曩攮孬呶挠硇铙蛲猱撓垴恼脑惱瑙腦闹淖鬧讷訥呢馁餒內内嫩能妮尼坭泥怩铌倪猊霓鲵鯢拟你妳旎擬屰伲昵逆匿睨腻溺暱膩拈蔫年鲇鲶黏鯰捻辇輦撵碾攆卄廿念埝唸娘酿釀鸟茑袅鳥裊嬲尿脲捏乜肀圼陧聂臬涅啮隉湼嗫镊镍颞臲蹑聶嚙鎳孽蘖櫱齧躡鑷顳恁您宁咛狞柠聍甯寧凝嚀檸拧擰佞泞濘妞牛扭狃忸纽钮紐鈕拗农侬哝浓脓農儂噥濃憹膿弄耨奴孥驽駑努弩胬怒暖疟虐瘧挪傩儺诺喏搦锘諾懦糯女钕恧衄噢哦讴沤瓯欧殴鸥漚甌歐毆熰謳鷗齵呕偶嘔耦藕怄慪趴皅啪葩杷爬钯耙琶掱鈀筢帕怕拍俳排徘牌哌派蒎湃萠潘攀爿盘槃磐盤蹒蹣蟠判泮盼叛畔袢襻乓滂彷庞逄旁膀螃鳑龐鰟耪胖抛拋脬刨咆狍庖袍匏跑泡炮砲疱皰呸胚醅陪培赔锫裴賠沛帔佩珮配旆淠辔霈轡喷噴盆湓抨怦砰烹嘭朋堋彭棚搒蓬硼鹏澎篷膨蟛鵬捧椪碰丕批邳伾纰坯披狉砒紕劈噼霹皮芘枇毗蚍铍郫疲陴埤啤琵脾蜱罴貔羆鼙匹庀圮仳痞擗癖屁睥辟媲僻甓譬闢鷿偏犏篇翩骈胼駢蹁谝片骗騙剽漂缥飘螵縹飄嫖瓢殍瞟票嘌氕瞥丿苤撇拚拼姘贫貧频嫔頻嬪颦顰品榀牝聘乒甹俜娉冖平评坪苹凭泙枰屏瓶萍評鲆鮃憑蘋攴钋坡泼颇酦潑醱婆鄱皤叵钷笸迫珀破哱粕魄頗剖掊裒咅扑铺撲噗鋪仆圤匍莆菩脯葡菐蒲僕璞镤濮朴埔圃浦普溥谱潽樸氆镨蹼譜舖瀑曝七沏妻柒恓栖桤凄萋桼戚淒悽期欺棲榿嘁漆慼蹊亓齐祁圻芪岐其奇歧祈祇荠耆颀脐埼萁畦跂崎淇骐骑琪琦棋蛴祺綦蜞齊旗蕲鲯鮨騎臍鳍蘄鯕麒鰭乞芑屺岂企杞启起豈啟啓绮綮綺气讫迄汔弃汽泣契砌咠氣訖葺棄碛槭器憩薺掐葜㓞洽恰髂千仟阡扦芊迁岍佥汧臤钎牵铅悭釺牽䙴鈆谦签愆鉛僉慳搴遷褰謙簽鶼籤韆拑钤前虔钱钳掮乾朁鉗箝潜潛黔錢凵肷浅淺遣谴缱繾譴欠芡茜倩堑椠嵌慊塹歉縴羌枪戗戕腔蜣锖槍锵戧蹡強强墙蔷嫱樯墻薔牆抢羟搶羥镪襁呛炝跄嗆蹌悄硗跷锹劁敲橇缲橾鍬蹺乔侨荞峤桥喬僑谯鞒蕎憔橋樵瞧譙巧愀俏诮峭窍殼翘誚撬鞘翹竅切茄且郄妾怯匧窃挈惬趄愜锲箧踥篋藒鍥竊钦侵亲衾芹芩秦琴禽勤嗪溱擒噙檎螓锓寝寢吣沁唚揿撳青靑轻氢倾卿圊氫清傾輕蜻鲭鯖情晴氰檠擎黥苘顷请頃請謦庆殸箐慶磬親罄邛穷茕穹筇琼蛩跫睘煢銎窮瓊藭丘邱秋蚯湫楸鹙鳅鞦鶖厹囚犰求虬泅俅酋逑球赇遒巯裘蝤鼽糗区岖佉诎驱屈胠祛區蛆躯趋蛐嶇趨麯軀麴黢驅劬朐鸲渠蕖磲璩瞿鼩蘧氍癯衢蠼曲取娶龋齲去阒趣觑闃覷悛圈权全诠荃泉辁拳铨痊惓筌詮蜷銓醛鬈權颧顴犬畎绻綣劝券勸炔缺闕瘸却卻隺悫雀确阕鹊阙榷確鵲夋囷逡裙群肰蚺然髯燃冉苒染孃禳穰瓤壤攘嚷让讓荛饶娆桡嬈橈饒犪扰擾绕蟯繞惹热熱人壬仁忍荏稔刃认仞任纫韧轫饪妊纴衽紉軔飪韌認扔仍日戎肜茸荣狨绒容嵘絨蓉溶榕榮熔蝾镕融嶸鎔蠑冗禸柔揉糅蹂鞣肉如茹铷蕠儒薷嚅濡孺襦颥蠕顬汝乳辱入洳蓐溽媷缛褥縟阮软朊軟甤蕤惢蕊芮枘蚋锐瑞睿銳闰润閏潤叒若偌弱蒻箬爇仨洒撒灑卅飒脎萨隡颯薩腮塞噻鳃鰓赛賽三彡氵叁毵伞傘糁馓饊散桑喪搡嗓磉颡顙丧搔骚缫鳋騷扫掃嫂埽瘙臊色涩啬铯瑟嗇歰穑澀穡森僧杀沙纱砂剎莎殺紗铩痧裟鲨鎩鯊啥傻唼厦歃煞廈霎筛酾篩晒曬山芟杉刪删苫钐衫姗珊埏舢跚煽潸膻羴鱣闪陕陝閃讪汕疝赸訕扇善骟鄯缮擅膳嬗赡蟮繕贍鳝鱔伤殇商觞傷墒殤熵觴垧晌赏賞丄上尙尚绱裳捎烧梢稍蛸筲艄燒勺芍杓韶少邵劭绍哨紹潲奢赊猞畲賒舌佘蛇舍捨厍设社射涉赦設摄滠慑慴攝麝懾申屾伸身呻诜罙绅莘砷娠深紳兟什神沈审哂矧谂渖婶審瀋嬸肾甚胂渗葚腎椹蜃慎滲升生声昇牲陞笙甥聲绳澠繩省眚圣胜晟盛剩勝聖嵊尸失师诗虱狮施浉屍師湿蓍獅詩蝨鲺濕十饣石时识飠实拾食蚀炻埘莳時蒔蝕實鲥識鰣史矢豕使始驶屎駛士氏礻示世仕市式似势事侍饰试视拭贳柿是适恃室逝轼铈舐視弑释谥勢軾嗜筮弒飾試誓適奭噬諡螫謚釋襫匙收手守首艏寿受狩授售兽绶壽瘦綬獸殳书疋尗抒纾枢叔姝殊倏書紓菽梳淑舒疏摅输毹蔬樞輸秫孰赎塾熟贖暑黍属署蜀鼠薯曙糬屬丨忄术朮戍束述沭树竖恕術庶尌腧数墅漱豎數澍樹刷唰耍衰摔甩帅帥蟀闩拴閂栓涮双霜雙孀骦鹴驦鸘爽谁誰水氺稅税睡吮顺順舜瞬说說妁烁铄朔硕搠蒴碩槊爍鑠厶司丝私咝思虒鸶斯蛳缌絲厮锶撕嘶廝澌螄死巳罒四寺汜兕伺祀姒饲泗驷俟耜笥肆嗣飼駟忪松凇菘崧淞嵩鬆怂耸悚竦慫聳讼宋送诵颂訟頌誦鄋搜蒐嗖馊溲飕锼螋艘餿颼叟瞍嗾擞薮擻藪欶嗽苏甦酥稣窣穌蘇囌俗夙诉肃素速涑骕粟訴谡嗉塑溯愫肅鹔蔌僳觫簌驌鷫狻酸祘蒜算夊虽荽倠浽眭睢濉雖绥隋随遀綏隨髓岁㒸谇祟遂碎歲隧燧穗邃孙荪狲孫飧猻损笋隼筍損榫唆娑桫梭挲睃蓑嗦嗍羧缩縮所索唢琐锁嗩瑣鎖他它她牠趿铊塌遢溻褟塔獭鳎沓挞荅闼榻撻踏蹋胎台旲邰抬苔骀炱跆鲐臺颱擡薹檯呔太忕汰态肽钛泰酞鈦態坍贪貪摊滩嘽瘫攤灘癱坛昙郯谈覃锬痰谭談潭壇曇檀镡罈譚忐坦钽袒毯襢叹炭探赕碳嘆歎汤铴湯耥羰蹚饧唐堂棠塘搪溏瑭樘膛螗镗糖醣螳帑倘淌傥躺儻烫趟燙涛绦焘掏絛滔韬縧濤燾韜饕匋逃洮桃陶萄梼啕淘醄檮鼗讨討套忑忒特铽慝疼腾誊滕謄藤騰剔梯锑踢鷈鷉扌厗绨提啼鹈缇题醍蹄鳀題鵜鯷体體屉剃倜逖涕悌惕屜替裼嚏鬄趯天添田畋畑恬甜湉填阗忝殄腆舔靦掭瑱佻挑祧条苕迢條调笤龆蜩髫鲦窕眺粜跳帖贴萜貼铁鉄鐵呫餮厅汀听烃烴聽廳廷莛亭庭停葶蜓婷霆挺梃艇通嗵冂仝同佟彤茼桐砼铜衕童酮僮銅潼瞳统捅桶筒統恸痛慟偷头投骰頭鈄透凸禿秃突图荼徒途涂屠嵞塗酴圖土吐钍兔堍菟湍团抟摶蓴團糰疃彖推颓頹腿退蛻蜕煺褪吞呑暾屯囤饨豚飩臀氽乇讬托拖託脫脱魠驮佗陀坨沲沱驼柁砣鸵酡跎馱駝橐鴕鼍鼉妥庹椭橢軃拓柝唾箨穵挖哇洼娲媧蛙窪娃瓦佤袜腽膃襪咼歪崴外弯剜湾蜿箢豌彎灣丸芄纨完玩紈顽烷頑宛挽菀晚脘惋婉绾琬皖碗畹輓万萬腕汪亾亡王网枉罔往惘辋網魍妄忘旺望危威逶偎隈葳微煨溦薇巍囗韦为圩违围帏闱沩為韋桅涠唯帷惟维嵬幃圍違潍維闈濰伟伪苇尾纬玮委炜洧诿娓萎偽偉隗葦猥瑋韪艉痿鲔諉緯薳鮪韙亹卫未位味畏胃軎硙谓尉喂猬渭蔚蝟衛慰謂濊魏餵昷温榅溫榲瘟豱亠文纹炆闻蚊紋阌雯聞刎吻忞紊稳穩问汶問璺翁嗡螉塕蓊暡瞈瓮蕹甕挝莴倭涡渦喔窝蜗窩撾蝸我肟沃卧臥握硪幄渥斡龌齷乌圬邬污巫呜钨诬屋烏嗚誣鎢无毋芜吾吴吳唔浯梧無蜈蕪鼯五午伍仵迕庑怃忤妩武俉侮捂牾鹉摀舞廡嫵鵡兀勿戊务阢坞芴杌物误敄悟務晤焐痦婺骛塢雾誤寤鹜鋈霧騖鶩夕兮覀西吸汐希昔析矽穸郗㿽唏牺息奚浠娭菥硒欷悉烯淅惜晰稀舾翕粞犀皙锡徯溪熙蜥僖誒熄嘻膝瘜嬉熹樨螅錫歙羲窸蟋谿醯曦犧鼷蠵鸂习席觋袭習媳覡隰檄襲洗玺铣徙喜葸蓰銑屣禧蟢璽匸卌戏饩系细咥係郤阋細舄隙滊禊潟戲鬩餼虾煆瞎蝦匣侠狎柙峡俠狭陜峽狹硖遐瑕暇辖轄霞黠下吓夏嚇罅㔾仙先纤氙祆籼莶掀酰跹锨鲜暹鍁韱鮮躚纖鱻闲㳄贤弦咸涎娴衔舷閑閒痫鹇嫌銜賢嫻癇䕭冼显险蚬猃筅跣㬎險藓燹蘚顯苋县岘现臽限线県宪莧峴陷現馅羡献腺羨線縣餡憲霰獻乡芗相香厢鄉葙廂湘缃薌箱襄蘘骧镶鑲驤详庠祥翔詳享响饷飨想餉鲞鯗饗響向项巷象項像橡蟓嚮肖枭枵哓骁逍鸮消宵绡萧梟猇硝销箫潇霄銷蕭鴞魈蟏嚣簫瀟囂蠨洨崤淆小晓筱曉孝校哮笑效啸傚嘯些楔歇蝎蠍协邪協胁挾脅偕斜谐猲携撷頡鞋勰缬諧擷攜纈写寫屃泄泻绁卸洩屑械禼亵渫谢榭榍薤韰獬邂廨澥懈謝燮褻瀉蟹瀣躞屭心芯辛忻昕欣訢锌新歆鋅薪馨鑫囟信衅舋釁星猩惺蛵腥刑邢形型硎醒擤兴杏幸性姓荇倖悻興凶兄芎兇匈汹洶胸雄熊敻休咻修庥脩羞鸺貅馐髹鵂饈朽宿秀岫袖绣锈嗅溴銹繡鏽戌吁盱须胥顼虚裇虛須頊墟需嘘魆歔噓魖鬚徐许诩栩詡鄦糈醑旭序卹昫叙洫恤酗勖敘绪续溆絮婿蓄煦漵緒續蓿轩宣軒谖揎萱喧瑄暄煊儇諠嬛玄痃悬旋漩璇懸选烜選癣癬泫炫绚眩铉渲絢楦鉉碹镟削靴薛辥穴学泶踅噱學雪鳕鱈血谑謔勋埙勛熏窨勳薰獯曛燻醺旬寻巡郇询荀荨峋洵浔恂循尋詢鲟潯燅鱘卂训讯汛迅驯徇逊殉訓訊巽馴遜蕈丫压押鸦桠鸭鴉鴨壓牙伢芽岈玡枒厓琊蚜崖涯睚衙哑啞痖雅亚襾讶迓亞軋垭砑娅氩埡訝婭揠呀咽恹胭烟焉菸崦阉淹腌湮鄢傿煙嫣醃閹懨讠厃延闫严言訁妍岩炎沿研盐阎蜒嵒筵颜閻檐顏嚴簷巖鹽沇奄兖匽俨衍弇兗剡掩郾厣眼偃琰罨演魇儼鼴魘鼹厌妟砚彥彦艳晏唁宴验谚堰硯雁猒焰焱滟酽厭餍鴈谳燕赝鬳諺嚥贗驗饜讌艷讞豔央泱殃鸯秧鞅鴦扬羊阳杨炀氜佯疡昜徉洋陽揚蛘楊煬卬仰养氧痒養癢怏样恙烊羕漾樣幺夭吆妖腰邀爻尧侥肴垚轺姚珧窑堯殽谣摇搖徭遥遙瑶瑤銚飖蕘窯餚繇謠鳐颻杳咬舀窅窈崾蓔药要钥鹞藥曜耀鷂鑰耶倻掖椰噎蠮爷揶铘爺也冶野嘢业叶页曳邺夜枼頁晔烨液谒葉殗腋業曄靥鄴嶪謁一衤伊衣医依祎咿铱猗揖壹欹蛜禕漪噫醫黟㐌仪圯夷沂冝诒饴怡宜荑咦贻姨巸眙胰移痍貽遗詒颐暆飴疑遺儀頤嶷彞彝乙已以㠯钇苡矣迤蚁舣倚扆椅旖蟻顗齮乂弋亿义艺刈忆仡议屹亦异抑耴呓邑佚役译易峄佾泆怿诣绎驿轶弈奕疫羿挹酏益悒谊埸埶殹異逸豙翊翌軼肄詣裔意義溢缢蜴瘗镒億誼毅熠薏殪嶧劓憶縊翳臆翼藝镱癔繹譯議囈懿驛乚因阴侌茵荫垔音洇姻氤殷陰铟堙喑蔭闉冘乑吟犾斦垠狺訚唫银淫寅欽鄞龈銀夤誾霪齦尹引㐆吲饮蚓隐飲㥯瘾檃隱癮廴印茚胤英莺婴瑛䧹撄賏嘤罂缨璎樱鹦嬰膺鹰罌瓔櫻鶯纓鷹鸚迎茔荥荧盈莹萤营萦蓥楹塋滢蝇滎熒潆瑩嬴螢營縈赢鎣蠅巆瀛贏郢颍颖影穎瘿应映硬媵應哟唷喲佣拥痈邕庸傭雍墉慵擁镛壅臃雝鳙鱅饔癰永甬咏泳俑勇勈埇涌恿詠湧蛹踊踴用优攸忧呦幽悠憂優懮尢尤尣由邮犹油疣斿莜莸铀郵䍃蚰鱿猶遊游鈾猷蕕蝣魷友有酉卣莠铕牖黝又右幼佑侑柚迶囿宥诱蚴釉誘鼬迂纡於紆淤瘀于邘玗欤余妤盂臾鱼禺竽舁俞狳馀谀娱娛萸雩魚渔隅揄喁嵛畬逾腴渝愉瑜榆虞愚艅觎舆漁窬蝓餘諛覦輿与予屿伛宇羽雨俣禹语圄㼌圉庾與瘐語龉窳藇嶼齬玉驭芋聿饫妪郁育昱狱彧峪钰浴预域欲阈淯谕馭遇喻御鹆飫寓裕矞蓣鈺愈煜誉預蜮毓獄嫗慾豫蕷閾閼諭燠禦鹬鵒癒譽鬻鷸龥鬱籲鸢眢鸳冤渊淵蜎鳶鴛元円芫园员沅垣爰袁原蚖員圆鼋援媛缘塬園圓猿源辕緣橼螈黿轅櫞远遠夗肙苑怨院垸掾瑗愿願曰曱约約彟月戉刖岳钺阅悅悦跃越粤粵鉞閱樂樾嶽龠瀹躍晕辒暈氲氳轀云勻匀芸纭昀郧耘紜雲鄖筼蕓篔允狁陨殒隕殞孕运郓恽酝鄆愠運缊韫韵慍蕴熨縕醞蘊韻帀匝咂拶臜臢杂砸雜咋灾災甾哉栽仔载宰崽載再在糌簪咱昝攒攢趱暂暫錾赞贊瓒讚赃脏臧贓髒驵奘葬臟遭糟蹧凿鑿早枣蚤棗澡藻繰皂灶唣造喿噪簉燥躁竈则责择迮泽則責啧啫帻笮舴嘖箦赜擇澤仄昃贼賊鲗鰂怎谮譖增憎罾锃鋥缯赠甑繒贈扎吒紥哳紮揸喳渣楂劄皻齄札轧甴闸铡閘霅苲眨砟乍诈柵柞栅奓咤炸痄蚱詐榨斋摘齋宅翟窄债砦債寨瘵沾毡栴旃粘詹谵霑氈瞻譫鳣斩飐盏展斬崭搌盞辗嶄颭輾占佔栈战站绽棧湛綻戰蘸张章張鄣獐彰漳嫜璋樟蟑鱆长仉涨掌漲丈仗杖帐账胀帳脹障嶂幛賬瘴钊招昭釗爪爫找沼召兆诏赵炤笊棹詔照罩趙肇蜇遮乛折哲辄喆蛰谪摺輒磔辙蟄謫轍者锗赭褶这柘這浙蔗鹧鷓着贞针侦珍貞帧胗浈真桢砧針祯偵湞蓁斟楨甄禎榛禛箴臻㐱诊枕轸姫畛疹軫診缜稹鬒圳阵鸩陣振朕赈賑震镇鴆鎮争征爭怔峥狰钲烝掙睁崢铮猙筝蒸睜箏徴錚癥氶拯整正证郑诤政挣症幀鄭證之支只卮汁芝吱巵枝知肢织栀胝衹祗隻脂梔椥戠蜘織蘵执直侄姪值埴執职絷植殖跖稙摭踯職躑夂止旨址芷纸祉指枳轵咫紙趾黹酯徵至志豸忮郅帜帙制质炙治栉峙陟贽挚桎轾致秩袟鸷掷乿痔窒蛭智痣滞骘彘輊置雉稚廌疐製誌滯摯踬幟質膣觯緻擿擲櫛贄騭鷙躓中彸忠终柊盅钟舯衷終锺鍾螽鐘肿种冢塚腫種踵仲众重眾衆舟州诌周洲啁週赒粥賙謅妯轴軸碡肘纣咒宙绉荮冑胄昼紂酎皱晝皺骤籀驟帚朱邾侏诛茱洙珠株诸硃铢猪蛛誅槠銖潴豬橥諸櫫騶竹竺逐烛舳瘃燭躅主拄渚煮嘱麈瞩囑矚伫苎助住佇苧杼贮注驻壴柱炷祝疰著蛀貯铸筑註翥箸駐築鑄抓拽专叀砖耑專颛磚顓鱄转孨啭赚撰篆馔篹賺轉饌囀籑妆庄妝莊桩装裝樁丬壮状壯狀撞幢戇隹追骓椎锥錐騅坠缀惴缒赘墜綴贅肫窀谆諄准準拙捉桌倬涿灼茁卓叕斫浊酌丵浞诼啄琢禚斲濁擢濯镯鐲孜茲咨姿兹赀资淄谘缁辎嵫粢孳滋趑貲锱資龇髭趦錙鲻諮鯔齜子姊耔秭籽笫梓紫訾滓自字牸恣眥眦渍漬宗综棕腙綜踪鬃蹤总偬傯總纵疭粽瘲縱邹驺诹陬鄒鄹鲰鯫辶走奏揍租菹足卒崒族綷镞诅阻组俎祖組詛躜缵纂钻攥鑽觜嘴最晬罪槜蕞醉尊遵樽鳟鱒撙嘬昨阝左佐作坐阼怍胙祚唑座做葄酢乶龶龹龺㧜'.split('');
  countDataAndComputedData = () => {
    const { data, computedData } = this;
    // const { CHARS } = this;
    const {
      paperSize,
      isLandscape,
      maxX: MAX_X,
      maxY: MAX_Y,
      pageMarginTop,
      pageMarginBottom,
      pageMarginLeft,
      pageMarginRight,
      // copybooks,
      // selectedCheckboxIndexArray,
      kind,
      // inputMethod,
      fontSize,
      color,
    } = data;
    const MID_RECTANGLE_HEIGHT = 23;
    const MID_RECTANGLE_WIDTH = 15;
    const MIN_RECTANGLE_WIDTH = 12;
    const MAX_RECTANGLE_WIDTH = 18;
    const SCALE = fontSize === "middle"
      ? 1
      : (fontSize === "small" ? MIN_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH
      : MAX_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH);
    const RECTANGLE_WIDTH = MID_RECTANGLE_WIDTH * SCALE;
    const RECTANGLE_HEIGHT = MID_RECTANGLE_HEIGHT * SCALE;
    // const PINYIN_FONT_SIZE = 14.15 * SCALE;
    const PINYIN_FONT_SIZE = 15 * SCALE;
    // const PINYIN_TOP = 1.25 * SCALE;
    const PINYIN_TOP = -0.42 * SCALE;
    const MID_TEXT_WIDTH = MID_RECTANGLE_WIDTH * 54 / 80;
    const TEXT_WIDTH = MID_TEXT_WIDTH * SCALE;
    const TEXT_HEIGHT = MID_TEXT_WIDTH * SCALE;
    const TEXT_LEFT = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5;
    const TEXT_BOTTOM = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5 - 22 / 54 * SCALE;
    const fontColor = color === "redOnBlack" ? "#ff0000" : "#000000";
    const css = `/* common.css */
		* { margin:0;border:0;padding:0; }
		* { box-sizing:border-box; }

		body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}

		page { display:flex;flex-flow:wrap;column-gap:1mm;row-gap:2mm;flex:100%;justify-content:flex-start;align-items:flex-start; }
		
		/* landscape 横向 portrait 纵向*/ 
		@media print { @page { size: ${paperSize} ${
      isLandscape ? "landscape" : "portrait"
    }; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
		page:not(page:last-child){page-break-after:always;}

    /* 不可指定page的高度，否则不足一页时各行将均布 */
		/* page { width:${MAX_X}mm;height:${MAX_Y}mm; } */
		page { width:${MAX_X}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; }
		/* #reportPageCore{display:flex;flex-flow:wrap;flex-direction:column;width:${MAX_X}mm;justify-content:flex-start;align-items:flex-start;} */
		page{color:${fontColor};}

		.wordWrap{display:inline-flex;height:${RECTANGLE_HEIGHT}mm;}
		.charWrap{position:relative;display:inline-block;width:${RECTANGLE_WIDTH}mm;height:${RECTANGLE_HEIGHT}mm;}
		.backgound-image{z-index:0;position:absolute;width:${RECTANGLE_WIDTH}mm;height:${RECTANGLE_HEIGHT}mm;}

		pinyin, chinese, .chinese{display:block;position:absolute;}
		pinyin{font-family:'Kaiti', 'Times New Roman';font-size:${PINYIN_FONT_SIZE}pt;top:${PINYIN_TOP}mm;width:${RECTANGLE_WIDTH}mm;text-align:center;}
		/* pinyin[chars="6"]{letter-spacing:-0.05em;font-size:${PINYIN_FONT_SIZE *
      0.95}pt;} */
		/*pinyin{display:inline-flex;position:relative;width:${RECTANGLE_WIDTH}mm;height:${RECTANGLE_HEIGHT}mm;}pinyin-char{flex:1;}*/
        pinyin-char{display:inline-block;}
        pinyin[chars] pinyin-char.withTone{width:0.7em;margin-left:-0.2em;}
        pinyin pinyin-char.lastG{margin-left:0.2em;}
        pinyin[chars]{letter-spacing:-0.05em;} */
        /*pinyin[chars] pinyin-char{overflow:hidden;}pinyin[chars="5"] pinyin-char{width:20%;}pinyin[chars="6"] pinyin-char{width:16%;}*/

		.chinese{width:${TEXT_WIDTH}mm;height:${TEXT_HEIGHT}mm;left:${TEXT_LEFT}mm;bottom:${TEXT_BOTTOM}mm;}

		/* TODO(@anqi) 谷歌浏览器直接支持用mm作为font-size（字号）单位。
			暂时还不用转汉字字号的mm到px。
			估计有些浏览器不支持，等之后调试浏览器兼容性时再处理。
		*/
		chinese{font-size:${TEXT_WIDTH}mm;font-family:'Kaiti', system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica', 'Source Han Sans CN', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
    chinese{display:flex;justify-content:center;align-items:center;}
    chinese{width:${TEXT_WIDTH}mm;height:${TEXT_HEIGHT}mm;left:${TEXT_LEFT}mm;bottom:${TEXT_BOTTOM}mm;}

		page{position:relative;}
		row.subject{justify-content:flex-start;align-items:flex-start;height:1em;width:${MAX_X}mm;
			position:absolute;top:${MAX_Y - 10}mm;display:inline-flex;}
		.subjectLeft,.subjectCenter,.subjectRight{display:inline-flex;}
		.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}
		.subjectCenter{width:60%;justify-content:center;align-items:flex-end;flex-direction:row;}
		.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}

		.subject{font-size:1em;}
		`;
    const BACKGOUND_SVG_SRC =
      `http://edu.sonya.cc/images/3brick/1/background/${color}.svg`;
    const PAGE_WIDTH = MAX_X, PAGE_HEIGHT = MAX_Y;
    const HORIZONTAL_SPACE = 1, VERTICAL_SPACE = 2;
    // const CHAR_COUNT_PER_ROW_OF_HALF_PAGE = Math.floor((PAGE_WIDTH * 0.5 + HORIZONTAL_SPACE) / (RECTANGLE_WIDTH + HORIZONTAL_SPACE));
    const CHAR_COUNT_PER_ROW = Math.floor(
      (PAGE_WIDTH * 0.5 + HORIZONTAL_SPACE) /
        (RECTANGLE_WIDTH + HORIZONTAL_SPACE),
    );
    const ROWS_COUNT = Math.floor(
      (PAGE_HEIGHT + VERTICAL_SPACE) / (RECTANGLE_HEIGHT + VERTICAL_SPACE),
    );
    const LANG = getCurrentLang();
    const i18nAnswerFlag = {
      en: "Answer",
      zh_cn: "答案",
      zh_tw: "答案",
    };
    // const i18nSubject: any = {
    // 	en: 'Phonetic Notation and Writing',
    // 	zh_cn: '注音与写字',
    // 	zh_tw: '注音與寫字',
    // };
    const i18nSubject = data.kind === "pinyinToChinese"
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
    const { inputMethod, selectedCheckboxIndexArray } = data;
    const i18nSubtitle =
      inputMethod === "select" && selectedCheckboxIndexArray.length === 1
        ? this.usableCopybookCheckboxElementArray.filter((checkbox) =>
          checkbox.checked
        )[0].names
        : {
          en: "",
          zh_cn: "",
          zh_tw: "",
        };
    const HTML_SUBJECT = `<span class="subject">${
      i18nSubject[LANG]
    }&nbsp;</span>&nbsp;`;
    const HTML_SUBTITLE = `<span class="subtitle">${i18nSubtitle[LANG]}</span>`;
    const pageSubjectRowLeftHtml =
      '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
    const pageSubjectRowCenterHtml =
      `<cell class="subjectCenter">${HTML_SUBJECT}${HTML_SUBTITLE}</cell>`;
    const questionPageSubjectRowRightHtml =
      `<cell class="subjectRight">~reporterPageIndex~/~reporterPageCount~</cell>`;
    const answerPageSubjectRowRightHtml = `<cell class="subjectRight">${
      i18nAnswerFlag[LANG]
    }~reporterPageIndex~/~reporterPageCount~</cell>`;
    const pageSubjectRowHtmlStart =
      `<row class="subject">${pageSubjectRowLeftHtml}${pageSubjectRowCenterHtml}`;
    const questionPageSubjectRowHtml =
      `${pageSubjectRowHtmlStart}${questionPageSubjectRowRightHtml}</row>`;
    const answerPageSubjectRowHtml =
      `${pageSubjectRowHtmlStart}${answerPageSubjectRowRightHtml}</row>`;
    // const questionPageStartHtml = `<page class="questionPage">${questionPageSubjectRowHtml}`;
    // const answerPageStartHtml = `<page class="answerPage">${answerPageSubjectRowHtml}`;
    const questionPageEndHtml = `${questionPageSubjectRowHtml}</page>`;
    const answerPageEndHtml = `${answerPageSubjectRowHtml}</page>`;
    let questionHtml = "";
    let answerHtml = "";
    let pageIndex = 0;
    let pageIndexStr = "";
    const problemsStartHtml = `<page class="copybookProblemsPage">`;
    const answersStartHtml = `<page class="copybookAnswersPage">`;
    // const pageEndHtml = '</page>';
    const wordWrapStartHtml = '<div class="wordWrap">';
    const wordWrapEndHtml = "</div>";
    const randomizedCopybooks = this.getRandomizedCopybooks();
    if (randomizedCopybooks.length) {
      // console.log('randomizedCopybooks', randomizedCopybooks);
      let rowIndex = 0;
      let currentRowWidth = 0;
      questionHtml += problemsStartHtml;
      answerHtml += answersStartHtml;
      randomizedCopybooks.forEach(({ chinese, pinyin }) => {
        pinyin = pinyin.replace(/\//gi, "'").replace(/a/g, "ɑ").replace(
          /g/g,
          "ɡ",
        );
        const charArray = chinese.split("");
        const pinyinArray = pinyin.split("'");
        const charCount = charArray.length;
        if (charCount !== pinyinArray.length) {
          this.fixPinyinArray(pinyin, pinyinArray, charCount);
        }
        if (charCount !== pinyinArray.length) {
          console.log(chinese, pinyin, pinyinArray, charCount);
          return;
        }
        const CURRENT_CELL_WIDTH = RECTANGLE_WIDTH * charCount;
        if (currentRowWidth + CURRENT_CELL_WIDTH > PAGE_WIDTH) { // HALF_PAGE_WIDTH
          if (rowIndex < ROWS_COUNT - 1) {
            // 换行不换页
            // halfPagesHtml += START_ROW_HTML.concat(rowHtml, END_ROW_HTML);
            rowIndex += 1;
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
            rowIndex = 0;
          }
          // rowHtml = '';
          currentRowWidth = 0;
        }
        questionHtml += wordWrapStartHtml;
        answerHtml += wordWrapStartHtml;
        charArray.forEach((char, index) => {
          const charStartHtml = `<span class="charWrap">`;
          const charEndHtml = `</span>`;
          const backgroundHtml =
            `<img class="backgound-image" src="${BACKGOUND_SVG_SRC}" alt="${BACKGOUND_SVG_SRC}" />`;
          // const pinyinHtml = `<pinyin>${pinyinArray[index]}</pinyin>`;
          const pinyin = pinyinArray[index];
          // const pinyinHtml = `<pinyin${pinyin.length === 6 ? ' chars="6"' : ''}>${pinyin}</pinyin>`;
          // const pinyinHtml = `<pinyin${pinyin.length === 6 ? ' chars="6"' : ''}>${pinyin.split('').map((char) => '<pinyin-char>'.concat(char, '</pinyin-char>')).join('')}</pinyin>`;
          // const pinyinHtml = `<pinyin ${pinyin.length > 4 ? ' chars="'.concat(pinyin.length.toString(), '"') : ''}>${pinyin.split('').map((char) => '<pinyin-char'.concat('āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ'.indexOf(char) > -1 ? ' class="withTone"' : '', '>', char, '</pinyin-char>')).join('')}</pinyin>`;
          const pinyinHtml = `<pinyin ${
            pinyin.length > 4
              ? ' chars="'.concat(pinyin.length.toString(), '"')
              : ""
          }>${
            pinyin.split("").map((char, index) =>
              "<pinyin-char".concat(
                "āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ".indexOf(char) > -1
                  ? ' class="withTone"'
                  : (pinyin.length <= 4 && index > 0 && char === "ɡ"
                    ? ' class="lastG"'
                    : ""),
                ">",
                char,
                "</pinyin-char>",
              )
            ).join("")
          }</pinyin>`;
          const chineseHtml = `<chinese>${char}</chinese>`;
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
        currentRowWidth += CURRENT_CELL_WIDTH + HORIZONTAL_SPACE;
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
    const questionPageCount = (questionHtml.split("</page>").length - 1)
      .toString();
    const answerPageCount = (answerHtml.split("</page>").length - 1).toString();
    const html = questionHtml.replace(/~reporterPageCount~/g, questionPageCount)
      .concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
    const en = `${FILENAME_POSTFIX}Copybooks_chineseAndPinyin`;
    const zh_cn = `${FILENAME_POSTFIX}简体汉字与拼音`;
    const zh_tw = `${FILENAME_POSTFIX}簡體漢字與拼音`;
    computedData.title = { en, zh_cn, zh_tw };
    computedData.css = css;
    computedData.html = html;
    // console.log('countDataAndComputedData()', copybooks, computedData );
  };
  getRandomizedCopybooks = () => {
    const { data: { copybooks } } = this;
    if (copybooks.length === 0) {
      return [];
    }
    const remaining = [];
    copybooks.forEach((copybook) => remaining.push(copybook));
    // console.log('getRandomizedCopybooks(), copybooks:', copybooks);
    // console.log('getRandomizedCopybooks(), remaining:', remaining);
    const result = [];
    let length = remaining.length;
    while (length > 1) {
      const index = Math.floor(Math.random() * length);
      result.push(remaining[index]);
      remaining.splice(index, 1);
      length -= 1;
    }
    result.push(remaining[0]);
    // console.log('getRandomizedCopybooks(), result:', result);
    return result;
  };
  updateOtherData = (newData) => {
    const {
      copybooks,
      selectedCheckboxIndexArray,
      kind,
      inputMethod,
      fontSize,
      color,
    } = newData;
    const { data } = this;
    data.copybooks.length = 0;
    // this.data.copybooks.splice(0, 0, copybooks);
    copybooks.forEach((copybook) => data.copybooks.push(copybook));
    // console.log('updateOtherData()', this.data.copybooks);
    data.selectedCheckboxIndexArray.length = 0;
    selectedCheckboxIndexArray.forEach((selectedCheckboxIndex) =>
      data.selectedCheckboxIndexArray.push(selectedCheckboxIndex)
    );
    data.kind = kind;
    data.inputMethod = inputMethod;
    data.fontSize = fontSize;
    data.color = color;
    this.onRadioOptionChanged("inputMethod", inputMethod);
    this.updateCopybookData();
    this.updateOtherDataOfCopybook(newData);
    // this.build();
  };
  idOrClassPrefix = "brickPageCopybook";
  textareaChinese = createElement("textarea");
  textareaPinyin = createElement("textarea");
  textareaChineseAndPinyin = createElement("textarea");
  initCoreElements = () => {
    this.initKindElements();
    this.initInputMethodElements();
    this.initFontSizeElements();
    this.initColorElements();
    const configCoreElement = this.configCoreElement;
    const {
      usableCopybookCheckboxElementArray,
      usableCopybooksPeopleEducationEdition,
      textareaChinese,
      textareaPinyin,
      textareaChineseAndPinyin,
      idOrClassPrefix,
    } = this;
    const { data } = this;
    this.appendCopybookOfGrade1Term1();
    this.appendCopybookOfGrade1Term2();
    this.appendCopybookOfGrade2Term1();
    let checkboxIndex = -1;
    const booksWrap = createElement("div");
    booksWrap.id = `${idOrClassPrefix}UsableCopybooksWrap`;
    configCoreElement.appendChild(booksWrap);
    const detailsPeopleEducationEdition = createElement("details");
    // configCoreElement.appendChild(detailsPeopleEducationEdition);
    booksWrap.appendChild(detailsPeopleEducationEdition);
    detailsPeopleEducationEdition.setAttribute("open", "");
    const summaryPeopleEducationEdition = createElement("summary");
    detailsPeopleEducationEdition.appendChild(summaryPeopleEducationEdition);
    // const usableCopybooksWrap = createElement('div') as HTMLDivElement;
    // configCoreElement.appendChild(usableCopybooksWrap);
    // usableCopybooksWrap.id = `${idOrClassPrefix}UsableCopybooksWrap`;
    const strongElement = createElement("strong");
    strongElement.innerHTML = getI18nInnerHTML({
      en: `Textbook (People's Education Edition)`,
      zh_cn: "课本（人教版）",
      zh_tw: "課本（人教版）",
    });
    // usableCopybooksWrap.appendChild(strongElement);
    summaryPeopleEducationEdition.appendChild(strongElement);
    const usableCopybooksPeopleEducationEditionWrap = createElement("div");
    // configCoreElement.appendChild(usableCopybooksWrap);
    usableCopybooksPeopleEducationEditionWrap.className =
      `${idOrClassPrefix}UsableCopybooksWrap`;
    detailsPeopleEducationEdition.appendChild(
      usableCopybooksPeopleEducationEditionWrap,
    );
    usableCopybooksPeopleEducationEdition.forEach(({ termI18n, units }) => {
      const usableCopybookWrap = createElement("div");
      usableCopybooksPeopleEducationEditionWrap.appendChild(usableCopybookWrap);
      usableCopybookWrap.className = `${idOrClassPrefix}UsableCopybookWrap`;
      // const strongElement = createElement('strong') as HTMLElement;
      // strongElement.innerHTML = getI18nInnerHTML(strongI18n);
      // wrapElement.appendChild(strongElement);
      const label = createElement("label");
      usableCopybookWrap.appendChild(label);
      label.className = `${idOrClassPrefix}UsableCopybookLabel`;
      label.innerHTML = getI18nInnerHTML(termI18n);
      const spanGroup = createElement("span");
      usableCopybookWrap.appendChild(spanGroup);
      spanGroup.className = `${idOrClassPrefix}UsableCopybookCheckboxGroupWrap`;
      units.forEach((unit) => {
        const { names, words } = unit;
        const spanWrap = createElement("span");
        spanGroup.appendChild(spanWrap);
        spanWrap.className = `${idOrClassPrefix}UsableCopybookCheckboxWrap`;
        const checkbox = createElement("input");
        spanWrap.appendChild(checkbox);
        checkbox.type = "checkbox";
        checkbox.setAttribute("edu-index", (++checkboxIndex).toString());
        checkbox.words = words;
        checkbox.names = names;
        usableCopybookCheckboxElementArray.push(checkbox);
        const span = createElement("span");
        spanWrap.appendChild(span);
        span.className =
          `${idOrClassPrefix}UsableCopybookSpanAfterCheckboxWrap`;
        span.innerHTML = getI18nInnerHTML(names);
        // copybooks
        const checkboxChanged = (event) => {
          const copybooks = [];
          const chineseArray = [];
          const pinyinArray = [];
          const chineseAndPinyinArray = [];
          const selectedCheckboxIndexArray = [];
          usableCopybookCheckboxElementArray.forEach((one) => {
            if (one.checked) {
              selectedCheckboxIndexArray.push(
                parseInt(one.getAttribute("edu-index"), 0),
              );
              one.words.forEach((chineseAndPinyinPair) => {
                copybooks.push(chineseAndPinyinPair);
                const { chinese, pinyin } = chineseAndPinyinPair;
                chineseArray.push(chinese);
                pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
                chineseAndPinyinArray.push(
                  `${chinese} ${pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ")}`,
                );
              });
            }
          });
          textareaChinese.value = chineseArray.join("\n");
          textareaPinyin.value = pinyinArray.join("\n");
          textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
          data.selectedCheckboxIndexArray.length = 0;
          selectedCheckboxIndexArray.forEach((index) =>
            data.selectedCheckboxIndexArray.push(index)
          );
          this.updateCopybooks(copybooks);
          // return stopEventBubble(event);
        };
        checkbox.onchange = checkboxChanged;
        span.onclick = (event) => {
          checkbox.checked = !checkbox.checked;
          checkboxChanged(event);
          return stopEventBubble(event);
        };
      });
    });
    this.onRadioOptionChanged("inputMethod", data.inputMethod);
    const copybookInputWrap = createElement("div");
    configCoreElement.appendChild(copybookInputWrap);
    copybookInputWrap.id = `${idOrClassPrefix}CopybookInputWrap`;
    const copybookInputStrongElement = createElement("strong");
    copybookInputStrongElement.innerHTML = getI18nInnerHTML({
      en: `Entry area`,
      zh_cn: "录入区",
      zh_tw: "錄入區",
    });
    copybookInputWrap.appendChild(copybookInputStrongElement);
    const textareaGroupWrap = createElement("span");
    copybookInputWrap.appendChild(textareaGroupWrap);
    textareaGroupWrap.id = `${idOrClassPrefix}TextareaGroupWrap`;
    textareaGroupWrap.appendChild(textareaChinese);
    textareaChinese.value = "";
    textareaChinese.rows = 4;
    textareaChinese.onchange = textareaChinese.focus = () => {
      this.updateChineseOrPinyinTextarea(
        textareaChinese,
        textareaPinyin,
        textareaChineseAndPinyin,
      );
    };
    textareaChinese.setAttribute(
      "i18n-placeholder",
      JSON.stringify({
        en: `Input Chinese words, one for each line.`,
        zh_cn: "输入汉字词语，每行一条。",
        zh_tw: "輸入漢字詞語，每行一條。",
      }),
    );
    textareaGroupWrap.appendChild(textareaPinyin);
    textareaPinyin.value = "";
    textareaPinyin.rows = 4;
    textareaPinyin.onchange = textareaPinyin.focus = () => {
      this.updateChineseOrPinyinTextarea(
        textareaChinese,
        textareaPinyin,
        textareaChineseAndPinyin,
      );
    };
    textareaPinyin.setAttribute(
      "i18n-placeholder",
      JSON.stringify({
        en:
          `Input the corresponding pinyin of Chinese words, separated by '/'. One for each line.`,
        zh_cn: "输入汉字词语对应拼音，使用/分隔。每行一条。",
        zh_tw: "輸入漢字詞語對應拼音，使用/分隔。每行一條。",
      }),
    );
    textareaGroupWrap.appendChild(textareaChineseAndPinyin);
    textareaChineseAndPinyin.value = "";
    textareaChineseAndPinyin.rows = 4;
    textareaChineseAndPinyin.onchange = textareaChineseAndPinyin.focus = () => {
      this.updateChineseAndPinyinTextarea(
        textareaChineseAndPinyin,
        textareaChinese,
        textareaPinyin,
      );
    };
    textareaChineseAndPinyin.setAttribute(
      "i18n-placeholder",
      JSON.stringify({
        en:
          `Input Chinese words and corresponding pinyin, and pinyin is separated by '/'. One for each line.`,
        zh_cn: "输入汉字词语及对应拼音，拼音使用/分隔。每行一条。",
        zh_tw: "輸入漢字詞語及對應拼音，拼音使用/分隔。每行一條。",
      }),
    );
  };
  updateCopybookData = () => {
    const { data, computedData, usableCopybookCheckboxElementArray } = this;
    const {
      paperSize,
      isLandscape,
      maxX: MAX_X,
      maxY: MAX_Y,
      pageMarginTop,
      // pageMarginBottom,
      pageMarginLeft,
      // pageMarginRight,
      copybooks,
      selectedCheckboxIndexArray,
      kind,
      inputMethod,
      fontSize,
      color,
    } = data;
    const {
      kindElementArray,
      inputMethodElementArray,
      fontSizeElementArray,
      colorElementArray,
      textareaChinese,
      textareaPinyin,
      textareaChineseAndPinyin,
    } = this;
    kindElementArray.forEach((radio) => {
      radio.checked = radio.value === kind;
    });
    inputMethodElementArray.forEach((radio) => {
      radio.checked = radio.value === inputMethod;
    });
    fontSizeElementArray.forEach((radio) => {
      radio.checked = radio.value === fontSize;
    });
    colorElementArray.forEach((radio) => {
      radio.checked = radio.value === color;
    });
    usableCopybookCheckboxElementArray.forEach((checkbox) => {
      const index = parseInt(checkbox.getAttribute("edu-index") || "0", 0);
      checkbox.checked = selectedCheckboxIndexArray.indexOf(index) > -1;
    });
    const chineseArray = [];
    const pinyinArray = [];
    const chineseAndPinyinArray = [];
    copybooks.forEach(({ chinese, pinyin }) => {
      chineseArray.push(chinese);
      pinyinArray.push(pinyin);
      chineseAndPinyinArray.push(`${chinese} ${pinyin}`);
    });
    textareaChinese.value = chineseArray.join("\n");
    textareaPinyin.value = pinyinArray.join("\n");
    textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
  };
  updateChineseAndPinyinTextarea = (
    textareaChineseAndPinyin,
    textareaChinese,
    textareaPinyin,
  ) => {
    const copybooks = [];
    const chineseAndPinyinArray = textareaChineseAndPinyin.value.split("\n");
    const chineseAndPinyinLength = chineseAndPinyinArray.length;
    for (let i = 0; i < chineseAndPinyinLength; ++i) {
      const pairArray = chineseAndPinyinArray[i].split(" ");
      const chinese = pairArray[0];
      const pinyin = (pairArray.length < 2 ? "" : pairArray[1]).replace(
        /a/g,
        "ɑ",
      ).replace(/g/g, "ɡ");
      copybooks.push({ chinese, pinyin });
    }
    const chineseArray = [];
    const pinyinArray = [];
    copybooks.forEach(({ chinese, pinyin }) => {
      chineseArray.push(chinese);
      pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
      chineseAndPinyinArray.push(
        `${chinese} ${pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ")}`,
      );
    });
    textareaChinese.value = chineseArray.join("\n");
    textareaPinyin.value = pinyinArray.join("\n");
    // textareaChineseAndPinyin.value = chineseAndPinyinArray.join('\n');
    this.updateCopybooks(copybooks);
  };
  updateChineseOrPinyinTextarea = (
    textareaChinese,
    textareaPinyin,
    textareaChineseAndPinyin,
  ) => {
    const copybooks = [];
    const chineseArray = textareaChinese.value.split("\n");
    const pinyinArray = textareaPinyin.value.split("\n");
    // const chineseAndPinyinArray = textareaChineseAndPinyin.value.split('\n');
    const chineseLength = chineseArray.length;
    const pinyinLength = pinyinArray.length;
    // const chineseAndPinyinLength = chineseAndPinyinArray.length;
    const maxCount = Math.max(chineseLength, pinyinLength);
    for (let i = 0; i < maxCount; ++i) {
      const chinese = i < chineseLength ? chineseArray[i] : "";
      const pinyin = (i < pinyinLength ? pinyinArray[i] : "").replace(/a/g, "ɑ")
        .replace(/g/g, "ɡ");
      copybooks.push({ chinese, pinyin });
    }
    chineseArray.length = 0;
    pinyinArray.length = 0;
    const chineseAndPinyinArray = [];
    copybooks.forEach(({ chinese, pinyin }) => {
      chineseArray.push(chinese);
      pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
      chineseAndPinyinArray.push(
        `${chinese} ${pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ")}`,
      );
    });
    textareaChinese.value = chineseArray.join("\n");
    textareaPinyin.value = pinyinArray.join("\n");
    textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
    this.updateCopybooks(copybooks);
  };
  updateCopybooks = (copybooks) => {
    const { data } = this;
    data.copybooks.length = 0;
    copybooks.forEach((copybook) => {
      data.copybooks.push(copybook);
    });
    this.countDataAndComputedData();
    this.build();
  };
  onRadioOptionChanged = (propertyName, value) => {
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
  appendCopybookOfGrade1Term1 = () => {
    const { usableCopybooksPeopleEducationEdition } = this;
    usableCopybooksPeopleEducationEdition.push({
      termI18n: { en: `K1T1`, zh_cn: `一年级上`, zh_tw: `一年級上` },
      units: [
        {
          names: { en: `Unit 1`, zh_cn: `第一单元`, zh_tw: `第一单元` },
          words: [
            { chinese: `天`, pinyin: `tiān` },
            { chinese: `地`, pinyin: `dì` },
            { chinese: `人`, pinyin: `rén` },
            { chinese: `你`, pinyin: `nǐ` },
            { chinese: `我`, pinyin: `wǒ` },
            { chinese: `他`, pinyin: `tā` },
            { chinese: `一`, pinyin: `yī` },
            { chinese: `二`, pinyin: `èr` },
            { chinese: `三`, pinyin: `sān` },
            { chinese: `四`, pinyin: `sì` },
            { chinese: `五`, pinyin: `wǔ` },
            { chinese: `上下`, pinyin: `shàng'xià` },
            { chinese: `口`, pinyin: `kǒu` },
            { chinese: `耳`, pinyin: `ěr` },
            { chinese: `目`, pinyin: `mù` },
            { chinese: `手`, pinyin: `shǒu` },
            { chinese: `足`, pinyin: `zú` },
            { chinese: `站`, pinyin: `zhàn` },
            { chinese: `坐`, pinyin: `zuò` },
            { chinese: `日`, pinyin: `rì` },
            { chinese: `月`, pinyin: `yuè` },
            { chinese: `水`, pinyin: `shuǐ` },
            { chinese: `火`, pinyin: `huǒ` },
            { chinese: `山`, pinyin: `shān` },
            { chinese: `石`, pinyin: `shí` },
            { chinese: `田`, pinyin: `tián` },
            { chinese: `禾`, pinyin: `hé` },
            { chinese: `对`, pinyin: `duì` },
            { chinese: `云`, pinyin: `yún` },
            { chinese: `雨`, pinyin: `yǔ` },
            { chinese: `风`, pinyin: `fēng` },
            { chinese: `花`, pinyin: `huā` },
            { chinese: `鸟`, pinyin: `niǎo` },
            { chinese: `虫`, pinyin: `chóng` },
            { chinese: `六`, pinyin: `liù` },
            { chinese: `七`, pinyin: `qī` },
            { chinese: `八`, pinyin: `bā` },
            { chinese: `九`, pinyin: `jiǔ` },
            { chinese: `十`, pinyin: `shí` },
          ],
        },
        {
          names: { en: `Unit 2`, zh_cn: `第二单元`, zh_tw: `第二单元` },
          words: [
            { chinese: `爸`, pinyin: `bà` },
            { chinese: `妈`, pinyin: `mā` },
            { chinese: `马`, pinyin: `mǎ` },
            { chinese: `土`, pinyin: `tǔ` },
            { chinese: `不`, pinyin: `bù` },
            { chinese: `画`, pinyin: `huà` },
            { chinese: `打`, pinyin: `dǎ` },
            { chinese: `棋`, pinyin: `qí` },
            { chinese: `鸡`, pinyin: `jī` },
            { chinese: `字`, pinyin: `zì` },
            { chinese: `词语`, pinyin: `cí'yǔ` },
            { chinese: `句子`, pinyin: `jù'zǐ` },
            { chinese: `桌`, pinyin: `zhuō` },
            { chinese: `纸`, pinyin: `zhǐ` },
            { chinese: `文`, pinyin: `wén` },
            { chinese: `数学`, pinyin: `shù'xué` },
            { chinese: `音乐`, pinyin: `yīn'yuè` },
          ],
        },
        {
          names: { en: `Unit 3`, zh_cn: `第三单元`, zh_tw: `第三单元` },
          words: [
            { chinese: `妹`, pinyin: `mèi` },
            { chinese: `奶`, pinyin: `nǎi` },
            { chinese: `小`, pinyin: `xiǎo` },
            { chinese: `桥`, pinyin: `qiáo` },
            { chinese: `台`, pinyin: `tái` },
            { chinese: `雪`, pinyin: `xuě` },
            { chinese: `儿`, pinyin: `ér` },
            { chinese: `白`, pinyin: `bái` },
            { chinese: `草`, pinyin: `cǎo` },
            { chinese: `家`, pinyin: `jiā` },
            { chinese: `是`, pinyin: `shì` },
            { chinese: `车`, pinyin: `chē` },
            { chinese: `路灯`, pinyin: `lù'dēng` },
            { chinese: `走`, pinyin: `zǒu` },
          ],
        },
        {
          names: { en: `Unit 4`, zh_cn: `第四单元`, zh_tw: `第四单元` },
          words: [
            { chinese: `秋`, pinyin: `qiū` },
            { chinese: `气`, pinyin: `qì` },
            { chinese: `了`, pinyin: `le` },
            { chinese: `树叶`, pinyin: `shù'yè` },
            { chinese: `片`, pinyin: `piàn` },
            { chinese: `大`, pinyin: `dà` },
            { chinese: `飞`, pinyin: `fēi` },
            { chinese: `会`, pinyin: `huì` },
            { chinese: `个`, pinyin: `gè` },
            { chinese: `的`, pinyin: `de` },
            { chinese: `船`, pinyin: `chuán` },
            { chinese: `两头`, pinyin: `liǎng'tóu` },
            { chinese: `在`, pinyin: `zài` },
            { chinese: `里`, pinyin: `lǐ` },
            { chinese: `看见`, pinyin: `kàn'jiàn` },
            { chinese: `闪`, pinyin: `shǎn` },
            { chinese: `星`, pinyin: `xīng` },
            { chinese: `江南`, pinyin: `jiāng'nán` },
            { chinese: `可`, pinyin: `kě` },
            { chinese: `采莲`, pinyin: `cǎi'lián` },
            { chinese: `鱼`, pinyin: `yú` },
            { chinese: `东`, pinyin: `dōng` },
            { chinese: `西`, pinyin: `xī` },
            { chinese: `北`, pinyin: `běi` },
            { chinese: `尖`, pinyin: `jiān` },
            { chinese: `说`, pinyin: `shuō` },
            { chinese: `春`, pinyin: `chūn` },
            { chinese: `青蛙`, pinyin: `qīng'wā` },
            { chinese: `夏`, pinyin: `xià` },
            { chinese: `弯`, pinyin: `wān` },
            { chinese: `皮`, pinyin: `pí` },
            { chinese: `地`, pinyin: `de` },
            { chinese: `冬`, pinyin: `dōng` },
            { chinese: `男女`, pinyin: `nán'nǚ` },
            { chinese: `开关`, pinyin: `kāi'guān` },
            { chinese: `正反`, pinyin: `zhèng'fǎn` },
          ],
        },
        {
          names: { en: `Unit 5`, zh_cn: `第五单元`, zh_tw: `第五单元` },
          words: [
            { chinese: `远`, pinyin: `yuǎn` },
            { chinese: `有`, pinyin: `yǒu` },
            { chinese: `色`, pinyin: `sè` },
            { chinese: `近`, pinyin: `jìn` },
            { chinese: `听`, pinyin: `tīng` },
            { chinese: `无`, pinyin: `wú` },
            { chinese: `声`, pinyin: `shēng` },
            { chinese: `去`, pinyin: `qù` },
            { chinese: `还`, pinyin: `hái` },
            { chinese: `来`, pinyin: `lái` },
            { chinese: `多少`, pinyin: `duō'shǎo` },
            { chinese: `黄牛`, pinyin: `huáng'niú` },
            { chinese: `只`, pinyin: `zhī` },
            { chinese: `猫`, pinyin: `māo` },
            { chinese: `边`, pinyin: `biān` },
            { chinese: `鸭`, pinyin: `yā` },
            { chinese: `苹果`, pinyin: `píng'guǒ` },
            { chinese: `杏`, pinyin: `xìng` },
            { chinese: `桃`, pinyin: `táo` },
            { chinese: `书包`, pinyin: `shū'bāo` },
            { chinese: `尺`, pinyin: `chǐ` },
            { chinese: `作业本`, pinyin: `zuò'yè'běn` },
            { chinese: `笔`, pinyin: `bǐ` },
            { chinese: `刀`, pinyin: `dāo` },
            { chinese: `课`, pinyin: `kè` },
            { chinese: `早`, pinyin: `zǎo` },
            { chinese: `校`, pinyin: `xiào` },
            { chinese: `明`, pinyin: `míng` },
            { chinese: `力`, pinyin: `lì` },
            { chinese: `尘`, pinyin: `chén` },
            { chinese: `从`, pinyin: `cóng` },
            { chinese: `众`, pinyin: `zhòng` },
            { chinese: `双`, pinyin: `shuāng` },
            { chinese: `木`, pinyin: `mù` },
            { chinese: `林`, pinyin: `lín` },
            { chinese: `森`, pinyin: `sēn` },
            { chinese: `条`, pinyin: `tiáo` },
            { chinese: `心`, pinyin: `xīn` },
            { chinese: `升国旗`, pinyin: `sheng'guó'qí` },
            { chinese: `中`, pinyin: `zhōng` },
            { chinese: `红`, pinyin: `hóng` },
            { chinese: `歌`, pinyin: `gē` },
            { chinese: `起立`, pinyin: `qǐ'lì` },
            { chinese: `么`, pinyin: `me` },
            { chinese: `美丽`, pinyin: `měi'lì` },
            { chinese: `午`, pinyin: `wǔ` },
            { chinese: `晚`, pinyin: `wǎn` },
            { chinese: `昨`, pinyin: `zuó` },
            { chinese: `今年`, pinyin: `jīn'nián` },
          ],
        },
        {
          names: { en: `Unit 6`, zh_cn: `第六单元`, zh_tw: `第六单元` },
          words: [
            { chinese: `影`, pinyin: `yǐng` },
            { chinese: `前后`, pinyin: `qián'hòu` },
            { chinese: `黑狗`, pinyin: `hēi'gǒu` },
            { chinese: `左右`, pinyin: `zuǒ'yòu` },
            { chinese: `它`, pinyin: `tā` },
            { chinese: `好朋友`, pinyin: `hǎo'péng'yǒu` },
            { chinese: `比`, pinyin: `bǐ` },
            { chinese: `尾巴`, pinyin: `wěi'bā` },
            { chinese: `谁`, pinyin: `shuí` },
            { chinese: `长短`, pinyin: `cháng'duǎn` },
            { chinese: `把`, pinyin: `bǎ` },
            { chinese: `伞`, pinyin: `sǎn` },
            { chinese: `兔`, pinyin: `tù` },
            { chinese: `最`, pinyin: `zuì` },
            { chinese: `公`, pinyin: `gōng` },
            { chinese: `写诗`, pinyin: `xiě'shī` },
            { chinese: `点`, pinyin: `diǎn` },
            { chinese: `要`, pinyin: `yào` },
            { chinese: `过`, pinyin: `guò` },
            { chinese: `给`, pinyin: `gěi` },
            { chinese: `当`, pinyin: `dāng` },
            { chinese: `串`, pinyin: `chuàn` },
            { chinese: `们`, pinyin: `men` },
            { chinese: `以`, pinyin: `yǐ` },
            { chinese: `成`, pinyin: `chéng` },
            { chinese: `数`, pinyin: `shǔ` },
            { chinese: `彩`, pinyin: `cǎi` },
            { chinese: `半`, pinyin: `bàn` },
            { chinese: `空`, pinyin: `kōng` },
            { chinese: `问`, pinyin: `wèn` },
            { chinese: `到`, pinyin: `dào` },
            { chinese: `方`, pinyin: `fāng` },
            { chinese: `没`, pinyin: `méi` },
            { chinese: `更`, pinyin: `gèng` },
            { chinese: `绿`, pinyin: `lǜ` },
            { chinese: `出`, pinyin: `chū` },
            { chinese: `长`, pinyin: `zhǎng` },
          ],
        },
        {
          names: { en: `Unit 7`, zh_cn: `第七单元`, zh_tw: `第七单元` },
          words: [
            { chinese: `睡`, pinyin: `shuì` },
            { chinese: `那`, pinyin: `nà` },
            { chinese: `海`, pinyin: `hǎi` },
            { chinese: `真`, pinyin: `zhēn` },
            { chinese: `老师`, pinyin: `lǎo'shī` },
            { chinese: `吗`, pinyin: `ma` },
            { chinese: `同`, pinyin: `tóng` },
            { chinese: `什`, pinyin: `shén` },
            { chinese: `才`, pinyin: `cái` },
            { chinese: `亮`, pinyin: `liàng` },
            { chinese: `时候`, pinyin: `shí'hòu` },
            { chinese: `觉得`, pinyin: `jiào'de` },
            { chinese: `自己`, pinyin: `zì'jǐ` },
            { chinese: `很`, pinyin: `hěn` },
            { chinese: `穿衣服`, pinyin: `chuān'yī'fú` },
            { chinese: `门`, pinyin: `mén` },
            { chinese: `快`, pinyin: `kuài` },
            { chinese: `蓝`, pinyin: `lán` },
            { chinese: `又`, pinyin: `yòu` },
            { chinese: `笑`, pinyin: `xiào` },
            { chinese: `着`, pinyin: `zhe` },
            { chinese: `向`, pinyin: `xiàng` },
            { chinese: `和`, pinyin: `hé` },
            { chinese: `贝`, pinyin: `bèi` },
            { chinese: `娃`, pinyin: `wá` },
            { chinese: `挂`, pinyin: `guà` },
            { chinese: `活`, pinyin: `huó` },
            { chinese: `金`, pinyin: `jīn` },
            { chinese: `哥`, pinyin: `gē` },
            { chinese: `姐`, pinyin: `jiě` },
            { chinese: `弟`, pinyin: `dì` },
            { chinese: `叔`, pinyin: `shū` },
            { chinese: `爷`, pinyin: `yé` },
          ],
        },
        {
          names: { en: `Unit 8`, zh_cn: `第八单元`, zh_tw: `第八单元` },
          words: [
            { chinese: `群`, pinyin: `qún` },
            { chinese: `竹`, pinyin: `zhú` },
            { chinese: `牙`, pinyin: `yá` },
            { chinese: `用`, pinyin: `yòng` },
            { chinese: `几步`, pinyin: `jǐ'bù` },
            { chinese: `为`, pinyin: `wéi` },
            { chinese: `参加`, pinyin: `cān'jiā` },
            { chinese: `洞`, pinyin: `dòng` },
            { chinese: `着`, pinyin: `zháo` },
            { chinese: `乌鸦`, pinyin: `wū'yā` },
            { chinese: `处`, pinyin: `chù` },
            { chinese: `找`, pinyin: `zhǎo` },
            { chinese: `办`, pinyin: `bàn` },
            { chinese: `旁`, pinyin: `páng` },
            { chinese: `许`, pinyin: `xǔ` },
            { chinese: `法`, pinyin: `fǎ` },
            { chinese: `放`, pinyin: `fàng` },
            { chinese: `进`, pinyin: `jìn` },
            { chinese: `高`, pinyin: `gāo` },
            { chinese: `住`, pinyin: `zhù` },
            { chinese: `孩`, pinyin: `hái` },
            { chinese: `玩`, pinyin: `wán` },
            { chinese: `吧`, pinyin: `ba` },
            { chinese: `发芽`, pinyin: `fā'yá` },
            { chinese: `爬`, pinyin: `pá` },
            { chinese: `呀`, pinyin: `ya` },
            { chinese: `久`, pinyin: `jiǔ` },
            { chinese: `回`, pinyin: `huí` },
            { chinese: `全`, pinyin: `quán` },
            { chinese: `变`, pinyin: `biàn` },
            { chinese: `工厂`, pinyin: `gong'chǎng` },
            { chinese: `医院`, pinyin: `yī'yuàn` },
            { chinese: `生`, pinyin: `shēng` },
          ],
        },
      ],
    });
  };
  appendCopybookOfGrade1Term2 = () => {
    const { usableCopybooksPeopleEducationEdition } = this;
    usableCopybooksPeopleEducationEdition.push({
      termI18n: { en: `K1T2`, zh_cn: `一年级下`, zh_tw: `一年級下` },
      units: [
        {
          names: { en: `Literacy 1`, zh_cn: `识字表1`, zh_tw: `識字錶1` },
          words: [
            { chinese: `霜`, pinyin: `shuāng` },
            { chinese: `吹`, pinyin: `chuī` },
            { chinese: `落`, pinyin: `luò` },
            { chinese: `降`, pinyin: `jiàng` },
            { chinese: `飘游`, pinyin: `piāo'yóu` },
            { chinese: `池`, pinyin: `chí` },
            { chinese: `入`, pinyin: `rù` },
            { chinese: `姓氏`, pinyin: `xìng'shì` },
            { chinese: `李`, pinyin: `lǐ` },
            { chinese: `张`, pinyin: `zhāng` },
            { chinese: `古`, pinyin: `gǔ` },
            { chinese: `吴`, pinyin: `wú` },
            { chinese: `赵`, pinyin: `zhào` },
            { chinese: `钱`, pinyin: `qián` },
            { chinese: `孙`, pinyin: `sūn` },
            { chinese: `周`, pinyin: `zhōu` },
            { chinese: `王`, pinyin: `wáng` },
            { chinese: `官`, pinyin: `guān` },
            { chinese: `清`, pinyin: `qīng` },
            { chinese: `晴`, pinyin: `qíng` },
            { chinese: `眼睛`, pinyin: `yǎn'jīng` },
            { chinese: `保护`, pinyin: `bǎo'hù` },
            { chinese: `害`, pinyin: `hài` },
            { chinese: `事情`, pinyin: `shì'qing` },
            { chinese: `请`, pinyin: `qǐng` },
            { chinese: `让`, pinyin: `ràng` },
            { chinese: `病`, pinyin: `bìng` },
            { chinese: `相遇`, pinyin: `xiāng'yù` },
            { chinese: `喜欢`, pinyin: `xǐ'huan` },
            { chinese: `怕`, pinyin: `pà` },
            { chinese: `言`, pinyin: `yán` },
            { chinese: `互`, pinyin: `hù` },
            { chinese: `令`, pinyin: `lìng` },
            { chinese: `动`, pinyin: `dòng` },
            { chinese: `万`, pinyin: `wàn` },
            { chinese: `纯净`, pinyin: `chún'jìng` },
            { chinese: `阴`, pinyin: `yīn` },
            { chinese: `雷电`, pinyin: `léi'diàn` },
            { chinese: `阵`, pinyin: `zhèn` },
            { chinese: `冰冻`, pinyin: `bīng'dòng` },
            { chinese: `夹`, pinyin: `jiá` },
          ],
        },
        {
          names: { en: `Literacy 2`, zh_cn: `识字表2`, zh_tw: `識字錶2` },
          words: [
            { chinese: `吃`, pinyin: `chī` },
            { chinese: `忘`, pinyin: `wàng` },
            { chinese: `井`, pinyin: `jǐng` },
            { chinese: `村`, pinyin: `cūn` },
            { chinese: `叫`, pinyin: `jiào` },
            { chinese: `毛主席`, pinyin: `máo'zhǔ'xí` },
            { chinese: `乡亲`, pinyin: `xiāng'qīn` },
            { chinese: `战士`, pinyin: `zhàn'shì` },
            { chinese: `面`, pinyin: `miàn` },
            { chinese: `想`, pinyin: `xiǎng` },
            { chinese: `告诉`, pinyin: `gào'sù` },
            { chinese: `就`, pinyin: `jiù` },
            { chinese: `京`, pinyin: `jīng` },
            { chinese: `安`, pinyin: `ān` },
            { chinese: `广`, pinyin: `guǎng` },
            { chinese: `非常`, pinyin: `fēi'cháng` },
            { chinese: `壮观`, pinyin: `zhuàng'guān` },
            { chinese: `接`, pinyin: `jiē` },
            { chinese: `觉`, pinyin: `jiào` },
            { chinese: `再`, pinyin: `zài` },
            { chinese: `做`, pinyin: `zuò` },
            { chinese: `各种`, pinyin: `gè'zhǒng` },
            { chinese: `样`, pinyin: `yàng` },
            { chinese: `伙伴`, pinyin: `huǒ'bàn` },
            { chinese: `却`, pinyin: `què` },
            { chinese: `也`, pinyin: `yě` },
            { chinese: `趣`, pinyin: `qù` },
            { chinese: `这`, pinyin: `zhè` },
            { chinese: `太阳`, pinyin: `tài'yáng` },
            { chinese: `道`, pinyin: `dào` },
            { chinese: `送`, pinyin: `sòng` },
            { chinese: `忙`, pinyin: `máng` },
            { chinese: `尝`, pinyin: `cháng` },
            { chinese: `香甜`, pinyin: `xiāng'tián` },
            { chinese: `温暖`, pinyin: `wēn'nuǎn` },
            { chinese: `该`, pinyin: `gāi` },
            { chinese: `颜`, pinyin: `yán` },
            { chinese: `因`, pinyin: `yīn` },
            { chinese: `辆`, pinyin: `liàng` },
            { chinese: `匹`, pinyin: `pǐ` },
            { chinese: `册`, pinyin: `cè` },
            { chinese: `支`, pinyin: `zhī` },
            { chinese: `铅`, pinyin: `qiān` },
            { chinese: `棵`, pinyin: `kē` },
            { chinese: `架`, pinyin: `jià` },
          ],
        },
        {
          names: { en: `Literacy 3`, zh_cn: `识字表3`, zh_tw: `識字錶3` },
          words: [
            { chinese: `块`, pinyin: `kuài` },
            { chinese: `捉`, pinyin: `zhuō` },
            { chinese: `急`, pinyin: `jí` },
            { chinese: `直`, pinyin: `zhí` },
            { chinese: `河`, pinyin: `hé` },
            { chinese: `行`, pinyin: `háng` },
            { chinese: `死`, pinyin: `sǐ` },
            { chinese: `信`, pinyin: `xìn` },
            { chinese: `跟`, pinyin: `gēn` },
            { chinese: `忽`, pinyin: `hū` },
            { chinese: `喊`, pinyin: `hǎn` },
            { chinese: `身`, pinyin: `shēn` },
            { chinese: `只`, pinyin: `zhī` },
            { chinese: `窝`, pinyin: `wō` },
            { chinese: `孤单`, pinyin: `gū'dān` },
            { chinese: `种`, pinyin: `zhǒng` },
            { chinese: `都`, pinyin: `dōu` },
            { chinese: `邻居`, pinyin: `lín'jū` },
            { chinese: `招呼`, pinyin: `zhāo'hu` },
            { chinese: `静`, pinyin: `jìng` },
            { chinese: `乐`, pinyin: `lè` },
            { chinese: `怎`, pinyin: `zěn` },
            { chinese: `独`, pinyin: `dú` },
            { chinese: `跳绳`, pinyin: `tiào'shéng` },
            { chinese: `讲`, pinyin: `jiǎng` },
            { chinese: `得`, pinyin: `dé` },
            { chinese: `羽`, pinyin: `yǔ` },
            { chinese: `球`, pinyin: `qiú` },
            { chinese: `戏`, pinyin: `xì` },
            { chinese: `排`, pinyin: `pái` },
            { chinese: `篮`, pinyin: `lán` },
            { chinese: `连`, pinyin: `lián` },
            { chinese: `运`, pinyin: `yùn` },
          ],
        },
        {
          names: { en: `Literacy 4`, zh_cn: `识字表4`, zh_tw: `識字錶4` },
          words: [
            { chinese: `夜`, pinyin: `yè` },
            { chinese: `思`, pinyin: `sī` },
            { chinese: `床`, pinyin: `chuáng` },
            { chinese: `光`, pinyin: `guāng` },
            { chinese: `疑`, pinyin: `yí` },
            { chinese: `举`, pinyin: `jǔ` },
            { chinese: `望`, pinyin: `wàng` },
            { chinese: `低`, pinyin: `dī` },
            { chinese: `故`, pinyin: `gù` },
            { chinese: `胆敢`, pinyin: `dǎn'gǎn` },
            { chinese: `往`, pinyin: `wǎng` },
            { chinese: `外`, pinyin: `wài` },
            { chinese: `勇`, pinyin: `yǒng` },
            { chinese: `窗`, pinyin: `chuāng` },
            { chinese: `乱`, pinyin: `luàn` },
            { chinese: `偏`, pinyin: `piān` },
            { chinese: `散`, pinyin: `sàn` },
            { chinese: `原`, pinyin: `yuán` },
            { chinese: `像`, pinyin: `xiàng` },
            { chinese: `微`, pinyin: `wēi` },
            { chinese: `端`, pinyin: `duān` },
            { chinese: `粽`, pinyin: `zòng` },
            { chinese: `节`, pinyin: `jié` },
            { chinese: `总`, pinyin: `zǒng` },
            { chinese: `米`, pinyin: `mǐ` },
            { chinese: `间`, pinyin: `jiān` },
            { chinese: `分`, pinyin: `fēn` },
            { chinese: `豆`, pinyin: `dòu` },
            { chinese: `肉`, pinyin: `ròu` },
            { chinese: `带`, pinyin: `dài` },
            { chinese: `知`, pinyin: `zhī` },
            { chinese: `据`, pinyin: `jù` },
            { chinese: `念`, pinyin: `niàn` },
            { chinese: `虹`, pinyin: `hóng` },
            { chinese: `座`, pinyin: `zuò` },
            { chinese: `浇`, pinyin: `jiāo` },
            { chinese: `提`, pinyin: `tí` },
            { chinese: `洒`, pinyin: `sǎ` },
            { chinese: `挑`, pinyin: `tiāo` },
            { chinese: `兴`, pinyin: `xìng` },
            { chinese: `镜`, pinyin: `jìng` },
            { chinese: `拿`, pinyin: `ná` },
            { chinese: `照`, pinyin: `zhào` },
            { chinese: `千`, pinyin: `qiān` },
            { chinese: `裙`, pinyin: `qún` },
            { chinese: `眉`, pinyin: `méi` },
            { chinese: `鼻`, pinyin: `bí` },
            { chinese: `嘴`, pinyin: `zuǐ` },
            { chinese: `脖`, pinyin: `bó` },
            { chinese: `臂`, pinyin: `bì` },
            { chinese: `肚`, pinyin: `dù` },
            { chinese: `腿脚`, pinyin: `tuǐ'jiǎo` },
          ],
        },
        {
          names: { en: `Literacy 5`, zh_cn: `识字表5`, zh_tw: `識字錶5` },
          words: [
            { chinese: `蜻蜓`, pinyin: `qīng'tíng` },
            { chinese: `迷`, pinyin: `mí` },
            { chinese: `藏`, pinyin: `cáng` },
            { chinese: `造`, pinyin: `zào` },
            { chinese: `蚂蚁`, pinyin: `mǎ'yǐ` },
            { chinese: `食`, pinyin: `shí` },
            { chinese: `粮`, pinyin: `liáng` },
            { chinese: `蜘蛛网`, pinyin: `zhī'zhū'wǎng` },
            { chinese: `圆`, pinyin: `yuán` },
            { chinese: `严寒`, pinyin: `yán'hán` },
            { chinese: `酷暑`, pinyin: `kù'shǔ` },
            { chinese: `凉`, pinyin: `liáng` },
            { chinese: `晨`, pinyin: `chén` },
            { chinese: `细`, pinyin: `xì` },
            { chinese: `朝霞`, pinyin: `zhāo'xiá` },
            { chinese: `夕`, pinyin: `xī` },
            { chinese: `杨`, pinyin: `yáng` },
            { chinese: `操场`, pinyin: `cāo'chǎng` },
            { chinese: `拔`, pinyin: `bá` },
            { chinese: `拍`, pinyin: `pāi` },
            { chinese: `跑`, pinyin: `pǎo` },
            { chinese: `踢`, pinyin: `tī` },
            { chinese: `铃`, pinyin: `líng` },
            { chinese: `热闹`, pinyin: `rè'nao` },
            { chinese: `锻炼`, pinyin: `duàn'liàn` },
            { chinese: `体`, pinyin: `tǐ` },
            { chinese: `之`, pinyin: `zhī` },
            { chinese: `初`, pinyin: `chū` },
            { chinese: `性`, pinyin: `xìng` },
            { chinese: `善`, pinyin: `shàn` },
            { chinese: `习`, pinyin: `xí` },
            { chinese: `教`, pinyin: `jiào` },
            { chinese: `迁`, pinyin: `qiān` },
            { chinese: `贵`, pinyin: `guì` },
            { chinese: `专`, pinyin: `zhuān` },
            { chinese: `幼`, pinyin: `yòu` },
            { chinese: `玉器`, pinyin: `yù'qì` },
            { chinese: `义`, pinyin: `yì` },
            { chinese: `饭`, pinyin: `fàn` },
            { chinese: `能`, pinyin: `néng` },
            { chinese: `饱`, pinyin: `bǎo` },
            { chinese: `茶`, pinyin: `chá` },
            { chinese: `泡`, pinyin: `pào` },
            { chinese: `轻`, pinyin: `qīng` },
            { chinese: `鞭炮`, pinyin: `biān'pào` },
          ],
        },
        {
          names: { en: `Literacy 6`, zh_cn: `识字表6`, zh_tw: `識字錶6` },
          words: [
            { chinese: `首`, pinyin: `shǒu` },
            { chinese: `踪迹`, pinyin: `zōng'jì` },
            { chinese: `浮萍`, pinyin: `fú'píng` },
            { chinese: `泉流`, pinyin: `quán'liú` },
            { chinese: `爱`, pinyin: `ài` },
            { chinese: `柔`, pinyin: `róu` },
            { chinese: `荷`, pinyin: `hé` },
            { chinese: `露`, pinyin: `lù` },
            { chinese: `角`, pinyin: `jiǎo` },
            { chinese: `珠`, pinyin: `zhū` },
            { chinese: `摇`, pinyin: `yáo` },
            { chinese: `躺`, pinyin: `tǎng` },
            { chinese: `晶`, pinyin: `jīng` },
            { chinese: `停机`, pinyin: `tíng'jī` },
            { chinese: `展`, pinyin: `zhǎn` },
            { chinese: `透`, pinyin: `tòu` },
            { chinese: `翅膀`, pinyin: `chì'bǎng` },
            { chinese: `唱`, pinyin: `chàng` },
            { chinese: `朵`, pinyin: `duǒ` },
            { chinese: `腰`, pinyin: `yāo` },
            { chinese: `坡`, pinyin: `pō` },
            { chinese: `沉`, pinyin: `chén` },
            { chinese: `伸`, pinyin: `shēn` },
            { chinese: `潮湿`, pinyin: `cháo'shī` },
            { chinese: `呢`, pinyin: `ne` },
            { chinese: `空`, pinyin: `kōng` },
            { chinese: `闷`, pinyin: `mèn` },
            { chinese: `消息`, pinyin: `xiāo'xi` },
            { chinese: `搬`, pinyin: `bān` },
            { chinese: `响`, pinyin: `xiǎng` },
            { chinese: `棍`, pinyin: `gùn` },
            { chinese: `汤`, pinyin: `tāng` },
            { chinese: `扇`, pinyin: `shàn` },
            { chinese: `椅`, pinyin: `yǐ` },
            { chinese: `萤`, pinyin: `yíng` },
            { chinese: `牵`, pinyin: `qiān` },
            { chinese: `织`, pinyin: `zhī` },
            { chinese: `斗`, pinyin: `dòu` },
          ],
        },
        {
          names: { en: `Literacy 7`, zh_cn: `识字表7`, zh_tw: `識字錶7` },
          words: [
            { chinese: `具`, pinyin: `jù` },
            { chinese: `次`, pinyin: `cì` },
            { chinese: `丢`, pinyin: `diū` },
            { chinese: `哪`, pinyin: `nǎ` },
            { chinese: `新`, pinyin: `xīn` },
            { chinese: `每`, pinyin: `měi` },
            { chinese: `平`, pinyin: `píng` },
            { chinese: `她`, pinyin: `tā` },
            { chinese: `些`, pinyin: `xiē` },
            { chinese: `仔`, pinyin: `zǎi` },
            { chinese: `检查所`, pinyin: `jiǎn'chá'suǒ` },
            { chinese: `钟`, pinyin: `zhōng` },
            { chinese: `丁`, pinyin: `dīng` },
            { chinese: `元`, pinyin: `yuán` },
            { chinese: `迟`, pinyin: `chí` },
            { chinese: `洗`, pinyin: `xǐ` },
            { chinese: `背`, pinyin: `bèi` },
            { chinese: `刚`, pinyin: `gāng` },
            { chinese: `共`, pinyin: `gòng` },
            { chinese: `汽`, pinyin: `qì` },
            { chinese: `决定`, pinyin: `jué'dìng` },
            { chinese: `已经`, pinyin: `yǐ'jīng` },
            { chinese: `物`, pinyin: `wù` },
            { chinese: `虎`, pinyin: `hǔ` },
            { chinese: `熊`, pinyin: `xióng` },
            { chinese: `通`, pinyin: `tōng` },
            { chinese: `注意`, pinyin: `zhù'yì` },
            { chinese: `遍`, pinyin: `biàn` },
            { chinese: `百`, pinyin: `bǎi` },
            { chinese: `舌`, pinyin: `shé` },
            { chinese: `鬼脸`, pinyin: `guǐ'liǎn` },
            { chinese: `准`, pinyin: `zhǔn` },
            { chinese: `第`, pinyin: `dì` },
            { chinese: `猴`, pinyin: `hóu` },
            { chinese: `结`, pinyin: `jié` },
            { chinese: `掰`, pinyin: `bāi` },
            { chinese: `扛`, pinyin: `káng` },
            { chinese: `满`, pinyin: `mǎn` },
            { chinese: `扔`, pinyin: `rēng` },
            { chinese: `摘`, pinyin: `zhāi` },
            { chinese: `捧`, pinyin: `pěng` },
            { chinese: `瓜`, pinyin: `guā` },
            { chinese: `抱`, pinyin: `bào` },
            { chinese: `蹦`, pinyin: `bèng` },
            { chinese: `追`, pinyin: `zhuī` },
            { chinese: `吵`, pinyin: `chǎo` },
            { chinese: `胖`, pinyin: `pàng` },
            { chinese: `岁`, pinyin: `suì` },
            { chinese: `现`, pinyin: `xiàn` },
            { chinese: `票`, pinyin: `piào` },
            { chinese: `交`, pinyin: `jiāo` },
            { chinese: `弓`, pinyin: `gōng` },
            { chinese: `甘`, pinyin: `gān` },
          ],
        },
        {
          names: { en: `Literacy 8`, zh_cn: `识字表8`, zh_tw: `識字錶8` },
          words: [
            { chinese: `棉`, pinyin: `mián` },
            { chinese: `娘`, pinyin: `niáng` },
            { chinese: `治`, pinyin: `zhì` },
            { chinese: `燕`, pinyin: `yàn` },
            { chinese: `别`, pinyin: `bié` },
            { chinese: `干`, pinyin: `gàn` },
            { chinese: `然`, pinyin: `rán` },
            { chinese: `奇`, pinyin: `qí` },
            { chinese: `颗`, pinyin: `kē` },
            { chinese: `瓢`, pinyin: `piáo` },
            { chinese: `碧`, pinyin: `bì` },
            { chinese: `吐`, pinyin: `tǔ` },
            { chinese: `啦`, pinyin: `lā` },
            { chinese: `咕咚`, pinyin: `gū'dōng` },
            { chinese: `熟`, pinyin: `shú` },
            { chinese: `掉`, pinyin: `diào` },
            { chinese: `吓`, pinyin: `xià` },
            { chinese: `羊`, pinyin: `yáng` },
            { chinese: `鹿`, pinyin: `lù` },
            { chinese: `逃命`, pinyin: `táo'mìng` },
            { chinese: `象`, pinyin: `xiàng` },
            { chinese: `野`, pinyin: `yě` },
            { chinese: `拦`, pinyin: `lán` },
            { chinese: `领`, pinyin: `lǐng` },
            { chinese: `壁`, pinyin: `bì` },
            { chinese: `墙`, pinyin: `qiáng` },
            { chinese: `蚊`, pinyin: `wén` },
            { chinese: `咬`, pinyin: `yǎo` },
            { chinese: `断`, pinyin: `duàn` },
            { chinese: `您`, pinyin: `nín` },
            { chinese: `拨`, pinyin: `bō` },
            { chinese: `甩`, pinyin: `shuǎi` },
            { chinese: `赶`, pinyin: `gǎn` },
            { chinese: `房`, pinyin: `fáng` },
            { chinese: `傻`, pinyin: `shǎ` },
            { chinese: `转`, pinyin: `zhuǎn` },
            { chinese: `卫`, pinyin: `wèi` },
            { chinese: `刷`, pinyin: `shuā` },
            { chinese: `梳`, pinyin: `shū` },
            { chinese: `巾`, pinyin: `jīn` },
            { chinese: `擦`, pinyin: `cā` },
            { chinese: `皂`, pinyin: `zào` },
            { chinese: `澡`, pinyin: `zǎo` },
            { chinese: `盆`, pinyin: `pén` },
          ],
        },
        {
          names: { en: `Writing 1`, zh_cn: `写字表1`, zh_tw: `寫字錶1` },
          words: [
            { chinese: `春`, pinyin: `chūn` },
            { chinese: `冬`, pinyin: `dōng` },
            { chinese: `风雪`, pinyin: `fēng'xuě` },
            { chinese: `花`, pinyin: `huā` },
            { chinese: `飞`, pinyin: `fēi` },
            { chinese: `入`, pinyin: `rù` },
            { chinese: `姓`, pinyin: `xìng` },
            { chinese: `什么`, pinyin: `shén'me` },
            { chinese: `双`, pinyin: `shuāng` },
            { chinese: `国王`, pinyin: `guó'wáng` },
            { chinese: `方`, pinyin: `fāng` },
            { chinese: `青`, pinyin: `qīng` },
            { chinese: `清气`, pinyin: `qīng'qì` },
            { chinese: `晴`, pinyin: `qíng` },
            { chinese: `情`, pinyin: `qíng` },
            { chinese: `请`, pinyin: `qǐng` },
            { chinese: `生`, pinyin: `shēng` },
            { chinese: `字`, pinyin: `zì` },
            { chinese: `左右`, pinyin: `zuǒ'yòu` },
            { chinese: `红`, pinyin: `hóng` },
            { chinese: `时`, pinyin: `shí` },
            { chinese: `动`, pinyin: `dòng` },
            { chinese: `万`, pinyin: `wàn` },
          ],
        },
        {
          names: { en: `Writing 2`, zh_cn: `写字表2`, zh_tw: `寫字錶2` },
          words: [
            { chinese: `吃`, pinyin: `chī` },
            { chinese: `叫`, pinyin: `jiào` },
            { chinese: `主`, pinyin: `zhǔ` },
            { chinese: `江`, pinyin: `jiāng` },
            { chinese: `住`, pinyin: `zhù` },
            { chinese: `没`, pinyin: `méi` },
            { chinese: `以`, pinyin: `yǐ` },
            { chinese: `多`, pinyin: `duō` },
            { chinese: `会`, pinyin: `huì` },
            { chinese: `走`, pinyin: `zǒu` },
            { chinese: `北京`, pinyin: `běi'jīng` },
            { chinese: `广`, pinyin: `guǎng` },
            { chinese: `过`, pinyin: `guò` },
            { chinese: `各种`, pinyin: `gè'zhǒng` },
            { chinese: `样`, pinyin: `yàng` },
            { chinese: `伙伴`, pinyin: `huǒ'bàn` },
            { chinese: `这`, pinyin: `zhè` },
            { chinese: `太阳`, pinyin: `tài'yáng` },
            { chinese: `校`, pinyin: `xiào` },
            { chinese: `金秋`, pinyin: `jīn'qiū` },
            { chinese: `因为`, pinyin: `yīn'wéi` },
          ],
        },
        {
          names: { en: `Writing 3`, zh_cn: `写字表3`, zh_tw: `寫字錶3` },
          words: [
            { chinese: `他`, pinyin: `tā` },
            { chinese: `地`, pinyin: `dì` },
            { chinese: `河`, pinyin: `hé` },
            { chinese: `说`, pinyin: `shuō` },
            { chinese: `也`, pinyin: `yě` },
            { chinese: `听`, pinyin: `tīng` },
            { chinese: `哥`, pinyin: `gē` },
            { chinese: `单`, pinyin: `dān` },
            { chinese: `居`, pinyin: `jū` },
            { chinese: `招呼`, pinyin: `zhāo'hu` },
            { chinese: `快乐`, pinyin: `kuài'lè` },
            { chinese: `玩`, pinyin: `wán` },
            { chinese: `很`, pinyin: `hěn` },
            { chinese: `当`, pinyin: `dāng` },
            { chinese: `音`, pinyin: `yīn` },
            { chinese: `讲`, pinyin: `jiǎng` },
            { chinese: `行`, pinyin: `háng` },
            { chinese: `许`, pinyin: `xǔ` },
          ],
        },
        {
          names: { en: `Writing 4`, zh_cn: `写字表4`, zh_tw: `寫字錶4` },
          words: [
            { chinese: `思`, pinyin: `sī` },
            { chinese: `床`, pinyin: `chuáng` },
            { chinese: `前`, pinyin: `qián` },
            { chinese: `光`, pinyin: `guāng` },
            { chinese: `低`, pinyin: `dī` },
            { chinese: `故乡`, pinyin: `gù'xiāng` },
            { chinese: `色`, pinyin: `sè` },
            { chinese: `外`, pinyin: `wài` },
            { chinese: `看`, pinyin: `kàn` },
            { chinese: `爸`, pinyin: `bà` },
            { chinese: `晚`, pinyin: `wǎn` },
            { chinese: `笑`, pinyin: `xiào` },
            { chinese: `再`, pinyin: `zài` },
            { chinese: `午`, pinyin: `wǔ` },
            { chinese: `节`, pinyin: `jié` },
            { chinese: `叶`, pinyin: `yè` },
            { chinese: `米`, pinyin: `mǐ` },
            { chinese: `真`, pinyin: `zhēn` },
            { chinese: `分`, pinyin: `fēn` },
            { chinese: `豆`, pinyin: `dòu` },
            { chinese: `那`, pinyin: `nà` },
            { chinese: `看到`, pinyin: `kàn'dào` },
            { chinese: `高兴`, pinyin: `gāo'xìng` },
            { chinese: `千`, pinyin: `qiān` },
            { chinese: `成`, pinyin: `chéng` },
          ],
        },
        {
          names: { en: `Writing 5`, zh_cn: `写字表5`, zh_tw: `寫字錶5` },
          words: [
            { chinese: `间`, pinyin: `jiān` },
            { chinese: `迷`, pinyin: `mí` },
            { chinese: `造`, pinyin: `zào` },
            { chinese: `运`, pinyin: `yùn` },
            { chinese: `池`, pinyin: `chí` },
            { chinese: `欢`, pinyin: `huān` },
            { chinese: `网`, pinyin: `wǎng` },
            { chinese: `古`, pinyin: `gǔ` },
            { chinese: `凉`, pinyin: `liáng` },
            { chinese: `细`, pinyin: `xì` },
            { chinese: `夕`, pinyin: `xī` },
            { chinese: `李`, pinyin: `lǐ` },
            { chinese: `语`, pinyin: `yǔ` },
            { chinese: `香`, pinyin: `xiāng` },
            { chinese: `打`, pinyin: `dǎ` },
            { chinese: `拍`, pinyin: `pāi` },
            { chinese: `跑`, pinyin: `pǎo` },
            { chinese: `足`, pinyin: `zú` },
            { chinese: `声`, pinyin: `shēng` },
            { chinese: `身体`, pinyin: `shēn'tǐ` },
            { chinese: `之`, pinyin: `zhī` },
            { chinese: `相近`, pinyin: `xiāng'jìn` },
            { chinese: `习`, pinyin: `xí` },
            { chinese: `远`, pinyin: `yuǎn` },
            { chinese: `玉`, pinyin: `yù` },
            { chinese: `义`, pinyin: `yì` },
          ],
        },
        {
          names: { en: `Writing 6`, zh_cn: `写字表6`, zh_tw: `寫字錶6` },
          words: [
            { chinese: `首`, pinyin: `shǒu` },
            { chinese: `采`, pinyin: `cǎi` },
            { chinese: `无`, pinyin: `wú` },
            { chinese: `树`, pinyin: `shù` },
            { chinese: `爱`, pinyin: `ài` },
            { chinese: `尖`, pinyin: `jiān` },
            { chinese: `角`, pinyin: `jiǎo` },
            { chinese: `亮`, pinyin: `liàng` },
            { chinese: `机台`, pinyin: `jī'tái` },
            { chinese: `放`, pinyin: `fàng` },
            { chinese: `鱼`, pinyin: `yú` },
            { chinese: `朵`, pinyin: `duǒ` },
            { chinese: `美`, pinyin: `měi` },
            { chinese: `直`, pinyin: `zhí` },
            { chinese: `呀`, pinyin: `ya` },
            { chinese: `边`, pinyin: `biān` },
            { chinese: `呢`, pinyin: `ne` },
            { chinese: `吗`, pinyin: `ma` },
            { chinese: `吧`, pinyin: `ba` },
            { chinese: `加`, pinyin: `jiā` },
          ],
        },
        {
          names: { en: `Writing 7`, zh_cn: `写字表7`, zh_tw: `寫字錶7` },
          words: [
            { chinese: `文`, pinyin: `wén` },
            { chinese: `次`, pinyin: `cì` },
            { chinese: `找`, pinyin: `zhǎo` },
            { chinese: `平`, pinyin: `píng` },
            { chinese: `办`, pinyin: `bàn` },
            { chinese: `让`, pinyin: `ràng` },
            { chinese: `包`, pinyin: `bāo` },
            { chinese: `钟`, pinyin: `zhōng` },
            { chinese: `丁`, pinyin: `dīng` },
            { chinese: `元`, pinyin: `yuán` },
            { chinese: `共`, pinyin: `gòng` },
            { chinese: `已经`, pinyin: `yǐ'jīng` },
            { chinese: `坐`, pinyin: `zuò` },
            { chinese: `要`, pinyin: `yào` },
            { chinese: `连`, pinyin: `lián` },
            { chinese: `百`, pinyin: `bǎi` },
            { chinese: `还`, pinyin: `hái` },
            { chinese: `舌`, pinyin: `shé` },
            { chinese: `点`, pinyin: `diǎn` },
            { chinese: `块`, pinyin: `kuài` },
            { chinese: `非`, pinyin: `fēi` },
            { chinese: `常`, pinyin: `cháng` },
            { chinese: `往`, pinyin: `wǎng` },
            { chinese: `瓜`, pinyin: `guā` },
            { chinese: `进`, pinyin: `jìn` },
            { chinese: `空`, pinyin: `kōng` },
          ],
        },
        {
          names: { en: `Writing 8`, zh_cn: `写字表8`, zh_tw: `寫字錶8` },
          words: [
            { chinese: `病`, pinyin: `bìng` },
            { chinese: `医`, pinyin: `yī` },
            { chinese: `别`, pinyin: `bié` },
            { chinese: `干`, pinyin: `gàn` },
            { chinese: `奇`, pinyin: `qí` },
            { chinese: `七`, pinyin: `qī` },
            { chinese: `星`, pinyin: `xīng` },
            { chinese: `吓`, pinyin: `xià` },
            { chinese: `怕`, pinyin: `pà` },
            { chinese: `跟`, pinyin: `gēn` },
            { chinese: `家`, pinyin: `jiā` },
            { chinese: `羊`, pinyin: `yáng` },
            { chinese: `象`, pinyin: `xiàng` },
            { chinese: `都`, pinyin: `dōu` },
            { chinese: `捉`, pinyin: `zhuō` },
            { chinese: `条`, pinyin: `tiáo` },
            { chinese: `爬`, pinyin: `pá` },
            { chinese: `姐`, pinyin: `jiě` },
            { chinese: `您`, pinyin: `nín` },
            { chinese: `草`, pinyin: `cǎo` },
            { chinese: `房`, pinyin: `fáng` },
          ],
        },
      ],
    });
  };
  appendCopybookOfGrade2Term1 = () => {
    const { usableCopybooksPeopleEducationEdition } = this;
    usableCopybooksPeopleEducationEdition.push({
      termI18n: {
        en: `K2T1`,
        zh_cn: `二年级上`,
        zh_tw: `二年級上`,
      },
      units: [
        {
          names: {
            en: `Literacy 1`,
            zh_cn: `识字表1`,
            zh_tw: `識字錶1`,
          },
          words: [
            {
              chinese: `塘`,
              pinyin: `táng`,
            },
            {
              chinese: `脑袋`,
              pinyin: `nǎo'dài`,
            },
            {
              chinese: `灰`,
              pinyin: `huī`,
            },
            {
              chinese: `哇`,
              pinyin: `wa`,
            },
            {
              chinese: `教`,
              pinyin: `jiāo`,
            },
            {
              chinese: `捕`,
              pinyin: `bǔ`,
            },
            {
              chinese: `迎`,
              pinyin: `yíng`,
            },
            {
              chinese: `阿姨`,
              pinyin: `ā'yí`,
            },
            {
              chinese: `宽`,
              pinyin: `kuān`,
            },
            {
              chinese: `龟`,
              pinyin: `guī`,
            },
            {
              chinese: `顶`,
              pinyin: `dǐng`,
            },
            {
              chinese: `披`,
              pinyin: `pī`,
            },
            {
              chinese: `鼓`,
              pinyin: `gǔ`,
            },
            {
              chinese: `晒`,
              pinyin: `shài`,
            },
            {
              chinese: `极`,
              pinyin: `jí`,
            },
            {
              chinese: `傍`,
              pinyin: `bàng`,
            },
            {
              chinese: `越`,
              pinyin: `yuè`,
            },
            {
              chinese: `滴`,
              pinyin: `dī`,
            },
            {
              chinese: `溪`,
              pinyin: `xī`,
            },
            {
              chinese: `奔`,
              pinyin: `bēn`,
            },
            {
              chinese: `洋`,
              pinyin: `yáng`,
            },
            {
              chinese: `坏`,
              pinyin: `huài`,
            },
            {
              chinese: `淹没`,
              pinyin: `yān'mò`,
            },
            {
              chinese: `冲毁`,
              pinyin: `chōng'huǐ`,
            },
            {
              chinese: `屋`,
              pinyin: `wū`,
            },
            {
              chinese: `灾`,
              pinyin: `zāi`,
            },
            {
              chinese: `猜`,
              pinyin: `cāi`,
            },
            {
              chinese: `植`,
              pinyin: `zhí`,
            },
            {
              chinese: `如`,
              pinyin: `rú`,
            },
            {
              chinese: `为`,
              pinyin: `wéi`,
            },
            {
              chinese: `旅`,
              pinyin: `lǚ`,
            },
            {
              chinese: `备`,
              pinyin: `bèi`,
            },
            {
              chinese: `纷`,
              pinyin: `fēn`,
            },
            {
              chinese: `刺`,
              pinyin: `cì`,
            },
            {
              chinese: `底`,
              pinyin: `dǐ`,
            },
            {
              chinese: `啪`,
              pinyin: `pā`,
            },
            {
              chinese: `炸`,
              pinyin: `zhà`,
            },
            {
              chinese: `离`,
              pinyin: `lí`,
            },
            {
              chinese: `识`,
              pinyin: `shí`,
            },
            {
              chinese: `粗`,
              pinyin: `cū`,
            },
            {
              chinese: `得`,
              pinyin: `dé`,
            },
            {
              chinese: `套`,
              pinyin: `tào`,
            },
            {
              chinese: `帽`,
              pinyin: `mào`,
            },
            {
              chinese: `登`,
              pinyin: `dēng`,
            },
            {
              chinese: `鞋`,
              pinyin: `xié`,
            },
            {
              chinese: `裤`,
              pinyin: `kù`,
            },
            {
              chinese: `图`,
              pinyin: `tú`,
            },
            {
              chinese: `壶`,
              pinyin: `hú`,
            },
            {
              chinese: `帐篷`,
              pinyin: `zhàng'péng`,
            },
            {
              chinese: `指针`,
              pinyin: `zhǐ'zhēn`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 2`,
            zh_cn: `识字表2`,
            zh_tw: `識字錶2`,
          },
          words: [
            {
              chinese: `帆`,
              pinyin: `fān`,
            },
            {
              chinese: `艘`,
              pinyin: `sōu`,
            },
            {
              chinese: `军舰`,
              pinyin: `jūn'jiàn`,
            },
            {
              chinese: `稻`,
              pinyin: `dào`,
            },
            {
              chinese: `园`,
              pinyin: `yuán`,
            },
            {
              chinese: `翠`,
              pinyin: `cuì`,
            },
            {
              chinese: `队`,
              pinyin: `duì`,
            },
            {
              chinese: `铜号`,
              pinyin: `tóng'hào`,
            },
            {
              chinese: `梧桐`,
              pinyin: `wú'tóng`,
            },
            {
              chinese: `掌`,
              pinyin: `zhǎng`,
            },
            {
              chinese: `枫`,
              pinyin: `fēng`,
            },
            {
              chinese: `松柏`,
              pinyin: `sōng'bǎi`,
            },
            {
              chinese: `装`,
              pinyin: `zhuāng`,
            },
            {
              chinese: `桦`,
              pinyin: `huà`,
            },
            {
              chinese: `耐`,
              pinyin: `nài`,
            },
            {
              chinese: `守`,
              pinyin: `shǒu`,
            },
            {
              chinese: `疆`,
              pinyin: `jiāng`,
            },
            {
              chinese: `银`,
              pinyin: `yín`,
            },
            {
              chinese: `杉`,
              pinyin: `shān`,
            },
            {
              chinese: `化`,
              pinyin: `huà`,
            },
            {
              chinese: `桂`,
              pinyin: `guì`,
            },
            {
              chinese: `世界`,
              pinyin: `shì'jiè`,
            },
            {
              chinese: `孔雀`,
              pinyin: `kǒng'què`,
            },
            {
              chinese: `锦`,
              pinyin: `jǐn`,
            },
            {
              chinese: `雄鹰`,
              pinyin: `xióng'yīng`,
            },
            {
              chinese: `翔`,
              pinyin: `xiáng`,
            },
            {
              chinese: `雁`,
              pinyin: `yàn`,
            },
            {
              chinese: `丛`,
              pinyin: `cóng`,
            },
            {
              chinese: `深`,
              pinyin: `shēn`,
            },
            {
              chinese: `猛`,
              pinyin: `měng`,
            },
            {
              chinese: `灵`,
              pinyin: `líng`,
            },
            {
              chinese: `休`,
              pinyin: `xiū`,
            },
            {
              chinese: `季`,
              pinyin: `jì`,
            },
            {
              chinese: `蝴蝶`,
              pinyin: `hú'dié`,
            },
            {
              chinese: `麦苗`,
              pinyin: `mài'miáo`,
            },
            {
              chinese: `桑`,
              pinyin: `sāng`,
            },
            {
              chinese: `肥`,
              pinyin: `féi`,
            },
            {
              chinese: `农`,
              pinyin: `nóng`,
            },
            {
              chinese: `归`,
              pinyin: `guī`,
            },
            {
              chinese: `戴`,
              pinyin: `dài`,
            },
            {
              chinese: `场`,
              pinyin: `cháng `,
            },
            {
              chinese: `谷粒`,
              pinyin: `gǔ'lì`,
            },
            {
              chinese: `虽`,
              pinyin: `suī`,
            },
            {
              chinese: `辛苦`,
              pinyin: `xīn'kǔ`,
            },
            {
              chinese: `了`,
              pinyin: `liǎo`,
            },
            {
              chinese: `葡萄`,
              pinyin: `pú'táo`,
            },
            {
              chinese: `紫`,
              pinyin: `zǐ`,
            },
            {
              chinese: `狐狸`,
              pinyin: `hú'lí`,
            },
            {
              chinese: `笨`,
              pinyin: `bèn`,
            },
            {
              chinese: `酸`,
              pinyin: `suān`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 3`,
            zh_cn: `识字表3`,
            zh_tw: `識字錶3`,
          },
          words: [
            {
              chinese: `曹`,
              pinyin: `cáo`,
            },
            {
              chinese: `称`,
              pinyin: `chēng`,
            },
            {
              chinese: `员`,
              pinyin: `yuán`,
            },
            {
              chinese: `根`,
              pinyin: `gēn`,
            },
            {
              chinese: `柱`,
              pinyin: `zhù`,
            },
            {
              chinese: `议论`,
              pinyin: `yì'lùn`,
            },
            {
              chinese: `重`,
              pinyin: `zhòng`,
            },
            {
              chinese: `杆`,
              pinyin: `gǎn`,
            },
            {
              chinese: `秤`,
              pinyin: `chèng`,
            },
            {
              chinese: `砍`,
              pinyin: `kǎn`,
            },
            {
              chinese: `线`,
              pinyin: `xiàn`,
            },
            {
              chinese: `止`,
              pinyin: `zhǐ`,
            },
            {
              chinese: `量`,
              pinyin: `liàng`,
            },
            {
              chinese: `玲`,
              pinyin: `líng`,
            },
            {
              chinese: `详`,
              pinyin: `xiáng`,
            },
            {
              chinese: `幅`,
              pinyin: `fú`,
            },
            {
              chinese: `评奖`,
              pinyin: `píng'jiǎng`,
            },
            {
              chinese: `催`,
              pinyin: `cuī`,
            },
            {
              chinese: `脏`,
              pinyin: `zāng`,
            },
            {
              chinese: `伤`,
              pinyin: `shāng`,
            },
            {
              chinese: `报`,
              pinyin: `bào`,
            },
            {
              chinese: `另`,
              pinyin: `lìng`,
            },
            {
              chinese: `及`,
              pinyin: `jí`,
            },
            {
              chinese: `懒`,
              pinyin: `lǎn`,
            },
            {
              chinese: `并`,
              pinyin: `bìng`,
            },
            {
              chinese: `糟`,
              pinyin: `zāo`,
            },
            {
              chinese: `肯`,
              pinyin: `kěn`,
            },
            {
              chinese: `封`,
              pinyin: `fēng`,
            },
            {
              chinese: `削`,
              pinyin: `xiāo`,
            },
            {
              chinese: `锅`,
              pinyin: `guō`,
            },
            {
              chinese: `朝`,
              pinyin: `cháo`,
            },
            {
              chinese: `始`,
              pinyin: `shǐ`,
            },
            {
              chinese: `刮`,
              pinyin: `guā`,
            },
            {
              chinese: `胡`,
              pinyin: `hú`,
            },
            {
              chinese: `修`,
              pinyin: `xiū`,
            },
            {
              chinese: `冷`,
              pinyin: `lěng`,
            },
            {
              chinese: `肩`,
              pinyin: `jiān`,
            },
            {
              chinese: `团`,
              pinyin: `tuán`,
            },
            {
              chinese: `重`,
              pinyin: `chóng`,
            },
            {
              chinese: `完`,
              pinyin: `wán`,
            },
            {
              chinese: `希`,
              pinyin: `xī`,
            },
            {
              chinese: `期`,
              pinyin: `qī`,
            },
            {
              chinese: `结束`,
              pinyin: `jié'shù`,
            },
            {
              chinese: `鲜`,
              pinyin: `xiān`,
            },
            {
              chinese: `哄`,
              pinyin: `hǒng`,
            },
            {
              chinese: `先`,
              pinyin: `xiān`,
            },
            {
              chinese: `梦`,
              pinyin: `mèng`,
            },
            {
              chinese: `闭`,
              pinyin: `bì`,
            },
            {
              chinese: `紧`,
              pinyin: `jǐn`,
            },
            {
              chinese: `润`,
              pinyin: `rùn`,
            },
            {
              chinese: `等`,
              pinyin: `děng`,
            },
            {
              chinese: `累`,
              pinyin: `lèi`,
            },
            {
              chinese: `吸`,
              pinyin: `xī`,
            },
            {
              chinese: `发`,
              pinyin: `fà`,
            },
            {
              chinese: `粘`,
              pinyin: `zhān`,
            },
            {
              chinese: `汗`,
              pinyin: `hàn`,
            },
            {
              chinese: `额`,
              pinyin: `é`,
            },
            {
              chinese: `沙`,
              pinyin: `shā`,
            },
            {
              chinese: `乏`,
              pinyin: `fá`,
            },
            {
              chinese: `弹钢琴`,
              pinyin: `tán'gāng'qín`,
            },
            {
              chinese: `练`,
              pinyin: `liàn`,
            },
            {
              chinese: `捏`,
              pinyin: `niē`,
            },
            {
              chinese: `泥`,
              pinyin: `ní`,
            },
            {
              chinese: `滚`,
              pinyin: `gǔn`,
            },
            {
              chinese: `铁环`,
              pinyin: `tiě'huán`,
            },
            {
              chinese: `荡`,
              pinyin: `dàng`,
            },
            {
              chinese: `滑`,
              pinyin: `huá`,
            },
            {
              chinese: `梯`,
              pinyin: `tī`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 4`,
            zh_cn: `识字表4`,
            zh_tw: `識字錶4`,
          },
          words: [
            {
              chinese: `依`,
              pinyin: `yī`,
            },
            {
              chinese: `尽`,
              pinyin: `jìn`,
            },
            {
              chinese: `欲`,
              pinyin: `yù`,
            },
            {
              chinese: `穷`,
              pinyin: `qióng`,
            },
            {
              chinese: `层`,
              pinyin: `céng`,
            },
            {
              chinese: `瀑布`,
              pinyin: `pù'bù`,
            },
            {
              chinese: `炉`,
              pinyin: `lú`,
            },
            {
              chinese: `烟`,
              pinyin: `yān`,
            },
            {
              chinese: `遥`,
              pinyin: `yáo`,
            },
            {
              chinese: `川`,
              pinyin: `chuān`,
            },
            {
              chinese: `闻名`,
              pinyin: `wén'míng`,
            },
            {
              chinese: `景区`,
              pinyin: `jǐng'qū`,
            },
            {
              chinese: `省`,
              pinyin: `shěng`,
            },
            {
              chinese: `部`,
              pinyin: `bù`,
            },
            {
              chinese: `秀`,
              pinyin: `xiù`,
            },
            {
              chinese: `尤其`,
              pinyin: `yóu'qí`,
            },
            {
              chinese: `仙`,
              pinyin: `xiān`,
            },
            {
              chinese: `巨`,
              pinyin: `jù`,
            },
            {
              chinese: `位`,
              pinyin: `wèi`,
            },
            {
              chinese: `都`,
              pinyin: `dū`,
            },
            {
              chinese: `著`,
              pinyin: `zhù`,
            },
            {
              chinese: `形状`,
              pinyin: `xíng'zhuàng`,
            },
            {
              chinese: `潭`,
              pinyin: `tán`,
            },
            {
              chinese: `湾`,
              pinyin: `wān`,
            },
            {
              chinese: `湖`,
              pinyin: `hú`,
            },
            {
              chinese: `绕`,
              pinyin: `rào`,
            },
            {
              chinese: `茂盛`,
              pinyin: `mào'shèng`,
            },
            {
              chinese: `围`,
              pinyin: `wéi`,
            },
            {
              chinese: `胜`,
              pinyin: `shèng`,
            },
            {
              chinese: `央`,
              pinyin: `yāng`,
            },
            {
              chinese: `岛`,
              pinyin: `dǎo`,
            },
            {
              chinese: `纱`,
              pinyin: `shā`,
            },
            {
              chinese: `童`,
              pinyin: `tóng`,
            },
            {
              chinese: `境`,
              pinyin: `jìng`,
            },
            {
              chinese: `引`,
              pinyin: `yǐn`,
            },
            {
              chinese: `客`,
              pinyin: `kè `,
            },
            {
              chinese: `沟`,
              pinyin: `gōu`,
            },
            {
              chinese: `产`,
              pinyin: `chǎn`,
            },
            {
              chinese: `份`,
              pinyin: `fèn`,
            },
            {
              chinese: `枝`,
              pinyin: `zhī`,
            },
            {
              chinese: `搭`,
              pinyin: `dā`,
            },
            {
              chinese: `淡`,
              pinyin: `dàn`,
            },
            {
              chinese: `好`,
              pinyin: `hào`,
            },
            {
              chinese: `够`,
              pinyin: `qòu`,
            },
            {
              chinese: `收`,
              pinyin: `shōu`,
            },
            {
              chinese: `城市`,
              pinyin: `chéng'shì`,
            },
            {
              chinese: `干`,
              pinyin: `gan`,
            },
            {
              chinese: `留`,
              pinyin: `liú`,
            },
            {
              chinese: `钉`,
              pinyin: `dìng`,
            },
            {
              chinese: `利`,
              pinyin: `lì`,
            },
            {
              chinese: `分`,
              pinyin: `fèn`,
            },
            {
              chinese: `味`,
              pinyin: `wèi`,
            },
            {
              chinese: `昌`,
              pinyin: `chāng`,
            },
            {
              chinese: `铺`,
              pinyin: `pù`,
            },
            {
              chinese: `调`,
              pinyin: `tiáo`,
            },
            {
              chinese: `硬卧`,
              pinyin: `yìng'wò`,
            },
            {
              chinese: `限乘`,
              pinyin: `xiàn'chéng`,
            },
            {
              chinese: `售`,
              pinyin: `shòu`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 5`,
            zh_cn: `识字表5`,
            zh_tw: `識字錶5`,
          },
          words: [
            {
              chinese: `沿`,
              pinyin: `yán`,
            },
            {
              chinese: `答`,
              pinyin: `dá`,
            },
            {
              chinese: `渴`,
              pinyin: `kě`,
            },
            {
              chinese: `喝`,
              pinyin: `hē`,
            },
            {
              chinese: `话`,
              pinyin: `huà`,
            },
            {
              chinese: `弄错`,
              pinyin: `nòng'cuò`,
            },
            {
              chinese: `际`,
              pinyin: `ji`,
            },
            {
              chinese: `哪`,
              pinyin: `na`,
            },
            {
              chinese: `抬`,
              pinyin: `tái`,
            },
            {
              chinese: `号`,
              pinyin: `háo`,
            },
            {
              chinese: `堵`,
              pinyin: `dǔ`,
            },
            {
              chinese: `缝`,
              pinyin: `fèng`,
            },
            {
              chinese: `当`,
              pinyin: `dàng`,
            },
            {
              chinese: `鹊`,
              pinyin: `què`,
            },
            {
              chinese: `朗`,
              pinyin: `lǎng`,
            },
            {
              chinese: `衔`,
              pinyin: `xián`,
            },
            {
              chinese: `枯`,
              pinyin: `kū`,
            },
            {
              chinese: `劝`,
              pinyin: `quàn`,
            },
            {
              chinese: `趁`,
              pinyin: `chèn`,
            },
            {
              chinese: `将`,
              pinyin: `jiāng`,
            },
            {
              chinese: `难`,
              pinyin: `nán`,
            },
            {
              chinese: `且`,
              pinyin: `qiě`,
            },
            {
              chinese: `狂`,
              pinyin: `kuáng`,
            },
            {
              chinese: `吼`,
              pinyin: `hǒu`,
            },
            {
              chinese: `复`,
              pinyin: `fù`,
            },
            {
              chinese: `哀`,
              pinyin: `āi`,
            },
            {
              chinese: `葫芦藤`,
              pinyin: `hú'lú'téng`,
            },
            {
              chinese: `谢`,
              pinyin: `xiè`,
            },
            {
              chinese: `啊`,
              pinyin: `a`,
            },
            {
              chinese: `蚜`,
              pinyin: `yá`,
            },
            {
              chinese: `盯`,
              pinyin: `dīng`,
            },
            {
              chinese: `赛`,
              pinyin: `sài`,
            },
            {
              chinese: `感`,
              pinyin: `gǎn`,
            },
            {
              chinese: `怪`,
              pinyin: `guài`,
            },
            {
              chinese: `慢`,
              pinyin: `màn`,
            },
            {
              chinese: `锋`,
              pinyin: `fēng`,
            },
            {
              chinese: `蜜蜂`,
              pinyin: `mì'fēng`,
            },
            {
              chinese: `幕`,
              pinyin: `mù`,
            },
            {
              chinese: `扫墓`,
              pinyin: `sǎo'mù`,
            },
            {
              chinese: `慕`,
              pinyin: `mù`,
            },
            {
              chinese: `抄`,
              pinyin: `chāo`,
            },
            {
              chinese: `炒`,
              pinyin: `chǎo`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 6`,
            zh_cn: `识字表6`,
            zh_tw: `識字錶6`,
          },
          words: [
            {
              chinese: `楼`,
              pinyin: `lóu`,
            },
            {
              chinese: `争`,
              pinyin: `zhēng`,
            },
            {
              chinese: `代`,
              pinyin: `dài`,
            },
            {
              chinese: `临`,
              pinyin: `lín`,
            },
            {
              chinese: `腊`,
              pinyin: `là`,
            },
            {
              chinese: `章`,
              pinyin: `zhāng`,
            },
            {
              chinese: `握`,
              pinyin: `wò`,
            },
            {
              chinese: `视察`,
              pinyin: `shì'chá`,
            },
            {
              chinese: `油`,
              pinyin: `yóu`,
            },
            {
              chinese: `朱德`,
              pinyin: `zhū'dé`,
            },
            {
              chinese: `扁担`,
              pinyin: `biǎn'dàn`,
            },
            {
              chinese: `志`,
              pinyin: `zhì`,
            },
            {
              chinese: `伍`,
              pinyin: `wǔ`,
            },
            {
              chinese: `泽`,
              pinyin: `zé`,
            },
            {
              chinese: `敌`,
              pinyin: `dí`,
            },
            {
              chinese: `陡`,
              pinyin: `dǒu`,
            },
            {
              chinese: `整`,
              pinyin: `zhěng`,
            },
            {
              chinese: `仗`,
              pinyin: `zhàng`,
            },
            {
              chinese: `疼`,
              pinyin: `téng`,
            },
            {
              chinese: `料`,
              pinyin: `liào`,
            },
            {
              chinese: `敬`,
              pinyin: `jìng`,
            },
            {
              chinese: `泼`,
              pinyin: `pō`,
            },
            {
              chinese: `民族`,
              pinyin: `mín'zú`,
            },
            {
              chinese: `度`,
              pinyin: `dù`,
            },
            {
              chinese: `敲`,
              pinyin: `qiāo`,
            },
            {
              chinese: `铺`,
              pinyin: `pū`,
            },
            {
              chinese: `龙`,
              pinyin: `lóng`,
            },
            {
              chinese: `驶`,
              pinyin: `shǐ`,
            },
            {
              chinese: `容`,
              pinyin: `róng`,
            },
            {
              chinese: `踩`,
              pinyin: `cǎi`,
            },
            {
              chinese: `盛`,
              pinyin: `chéng`,
            },
            {
              chinese: `碗`,
              pinyin: `wǎn`,
            },
            {
              chinese: `祝福`,
              pinyin: `zhù'fú`,
            },
            {
              chinese: `健康`,
              pinyin: `jiàn'kāng`,
            },
            {
              chinese: `寿`,
              pinyin: `shòu`,
            },
            {
              chinese: `刘`,
              pinyin: `liú`,
            },
            {
              chinese: `兰`,
              pinyin: `lán`,
            },
            {
              chinese: `派`,
              pinyin: `pài`,
            },
            {
              chinese: `被`,
              pinyin: `bèi`,
            },
            {
              chinese: `血`,
              pinyin: `xuè`,
            },
            {
              chinese: `拉`,
              pinyin: `lā`,
            },
            {
              chinese: `兵`,
              pinyin: `bīng`,
            },
            {
              chinese: `血`,
              pinyin: `xiě`,
            },
            {
              chinese: `挺`,
              pinyin: `tǐng`,
            },
            {
              chinese: `杀`,
              pinyin: `shā`,
            },
            {
              chinese: `烈`,
              pinyin: `liè`,
            },
            {
              chinese: `轿`,
              pinyin: `jiào`,
            },
            {
              chinese: `救`,
              pinyin: `jiù`,
            },
            {
              chinese: `摩托`,
              pinyin: `mó'tuō`,
            },
            {
              chinese: `防`,
              pinyin: `fáng`,
            },
            {
              chinese: `渔`,
              pinyin: `yú`,
            },
            {
              chinese: `货轮`,
              pinyin: `huò'lún`,
            },
            {
              chinese: `科考`,
              pinyin: `kē'kǎo`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 7`,
            zh_cn: `识字表7`,
            zh_tw: `識字錶7`,
          },
          words: [
            {
              chinese: `宿`,
              pinyin: `sù`,
            },
            {
              chinese: `寺`,
              pinyin: `sì`,
            },
            {
              chinese: `危`,
              pinyin: `wēi`,
            },
            {
              chinese: `辰`,
              pinyin: `chén`,
            },
            {
              chinese: `恐`,
              pinyin: `kǒng`,
            },
            {
              chinese: `惊`,
              pinyin: `jīng`,
            },
            {
              chinese: `似`,
              pinyin: `sì`,
            },
            {
              chinese: `庐`,
              pinyin: `lú`,
            },
            {
              chinese: `笼`,
              pinyin: `lǒng`,
            },
            {
              chinese: `盖`,
              pinyin: `gài`,
            },
            {
              chinese: `苍`,
              pinyin: `cāng`,
            },
            {
              chinese: `茫`,
              pinyin: `máng`,
            },
            {
              chinese: `雾`,
              pinyin: `wù`,
            },
            {
              chinese: `淘`,
              pinyin: `táo`,
            },
            {
              chinese: `于`,
              pinyin: `yú`,
            },
            {
              chinese: `暗`,
              pinyin: `àn`,
            },
            {
              chinese: `岸`,
              pinyin: `àn`,
            },
            {
              chinese: `街`,
              pinyin: `jiē`,
            },
            {
              chinese: `梁`,
              pinyin: `liáng`,
            },
            {
              chinese: `甚至`,
              pinyin: `shèn'zhì`,
            },
            {
              chinese: `切`,
              pinyin: `qiè`,
            },
            {
              chinese: `躲`,
              pinyin: `duǒ`,
            },
            {
              chinese: `失`,
              pinyin: `shī`,
            },
            {
              chinese: `添`,
              pinyin: `tiān`,
            },
            {
              chinese: `柴`,
              pinyin: `chái`,
            },
            {
              chinese: `烧`,
              pinyin: `shāo`,
            },
            {
              chinese: `旺`,
              pinyin: `wàng`,
            },
            {
              chinese: `渐`,
              pinyin: `jiàn`,
            },
            {
              chinese: `哎`,
              pinyin: `āi`,
            },
            {
              chinese: `呀`,
              pinyin: `yā`,
            },
            {
              chinese: `冒`,
              pinyin: `mào`,
            },
            {
              chinese: `呛`,
              pinyin: `qiàng`,
            },
            {
              chinese: `烫`,
              pinyin: `tàng`,
            },
            {
              chinese: `终`,
              pinyin: `zhōng`,
            },
            {
              chinese: `浑`,
              pinyin: `hún`,
            },
            {
              chinese: `淋`,
              pinyin: `lín`,
            },
            {
              chinese: `灭`,
              pinyin: `miè`,
            },
            {
              chinese: `激`,
              pinyin: `jī`,
            },
            {
              chinese: `瞧`,
              pinyin: `qiáo`,
            },
            {
              chinese: `滩`,
              pinyin: `tān`,
            },
            {
              chinese: `椰壳`,
              pinyin: `yē'ké`,
            },
            {
              chinese: `漠`,
              pinyin: `mò`,
            },
            {
              chinese: `骆驼`,
              pinyin: `luò'tuó`,
            },
            {
              chinese: `骏`,
              pinyin: `jùn`,
            },
            {
              chinese: `悬崖`,
              pinyin: `xuán'yá`,
            },
          ],
        },
        {
          names: {
            en: `Literacy 8`,
            zh_cn: `识字表8`,
            zh_tw: `識字錶8`,
          },
          words: [
            {
              chinese: `假`,
              pinyin: `jiǎ`,
            },
            {
              chinese: `威`,
              pinyin: `wēi`,
            },
            {
              chinese: `转`,
              pinyin: `zhuàn`,
            },
            {
              chinese: `扯`,
              pinyin: `chě`,
            },
            {
              chinese: `嗓`,
              pinyin: `sǎng`,
            },
            {
              chinese: `兽`,
              pinyin: `shòu`,
            },
            {
              chinese: `违抗`,
              pinyin: `wéi'kàng`,
            },
            {
              chinese: `爪`,
              pinyin: `zhuǎ`,
            },
            {
              chinese: `趟`,
              pinyin: `tàng`,
            },
            {
              chinese: `神`,
              pinyin: `shén`,
            },
            {
              chinese: `猪`,
              pinyin: `zhū`,
            },
            {
              chinese: `纳`,
              pinyin: `nà`,
            },
            {
              chinese: `闷`,
              pinyin: `mèn`,
            },
            {
              chinese: `受`,
              pinyin: `shòu`,
            },
            {
              chinese: `骗`,
              pinyin: `piàn`,
            },
            {
              chinese: `借`,
              pinyin: `jiè `,
            },
            {
              chinese: `筝`,
              pinyin: `zhēng`,
            },
            {
              chinese: `鼠`,
              pinyin: `shǔ`,
            },
            {
              chinese: `折`,
              pinyin: `zhé`,
            },
            {
              chinese: `漂`,
              pinyin: `piāo`,
            },
            {
              chinese: `扎`,
              pinyin: `zā`,
            },
            {
              chinese: `抓`,
              pinyin: `zhuā`,
            },
            {
              chinese: `幸`,
              pinyin: `xìng`,
            },
            {
              chinese: `俩`,
              pinyin: `liǎ`,
            },
            {
              chinese: `但愿`,
              pinyin: `dàn'yuàn`,
            },
            {
              chinese: `哭`,
              pinyin: `kū`,
            },
            {
              chinese: `取`,
              pinyin: `qǔ`,
            },
            {
              chinese: `帮助`,
              pinyin: `bāng'zhù`,
            },
            {
              chinese: `抽`,
              pinyin: `chōu`,
            },
            {
              chinese: `续`,
              pinyin: `xù`,
            },
            {
              chinese: `使劲`,
              pinyin: `shǐ'jìn`,
            },
            {
              chinese: `秧`,
              pinyin: `yāng`,
            },
            {
              chinese: `表示`,
              pinyin: `biǎo'shì`,
            },
            {
              chinese: `摆`,
              pinyin: `bǎi`,
            },
            {
              chinese: `翻`,
              pinyin: `fān`,
            },
            {
              chinese: `仍`,
              pinyin: `réng`,
            },
            {
              chinese: `栽`,
              pinyin: `zāi`,
            },
            {
              chinese: `责`,
              pinyin: `zé`,
            },
            {
              chinese: `狼`,
              pinyin: `láng`,
            },
            {
              chinese: `猩`,
              pinyin: `xīng`,
            },
            {
              chinese: `蛇`,
              pinyin: `shé`,
            },
            {
              chinese: `鹤`,
              pinyin: `hè`,
            },
            {
              chinese: `鸽`,
              pinyin: `gē`,
            },
            {
              chinese: `羚`,
              pinyin: `líng`,
            },
            {
              chinese: `蚯蚓`,
              pinyin: `qiū'yǐn`,
            },
            {
              chinese: `螃蟹`,
              pinyin: `páng'xiè`,
            },
            {
              chinese: `虾`,
              pinyin: `xiā`,
            },
            {
              chinese: `蚕`,
              pinyin: `cán`,
            },
          ],
        },
        {
          names: {
            en: `Writing 1`,
            zh_cn: `写字表1`,
            zh_tw: `寫字錶1`,
          },
          words: [
            {
              chinese: `两`,
              pinyin: `liǎng`,
            },
            {
              chinese: `哪`,
              pinyin: `nǎ`,
            },
            {
              chinese: `宽`,
              pinyin: `kuān`,
            },
            {
              chinese: `顶`,
              pinyin: `dǐng`,
            },
            {
              chinese: `眼睛`,
              pinyin: `yǎn'jīng`,
            },
            {
              chinese: `肚皮`,
              pinyin: `dù'pí`,
            },
            {
              chinese: `孩`,
              pinyin: `hái`,
            },
            {
              chinese: `跳`,
              pinyin: `tiào`,
            },
            {
              chinese: `变`,
              pinyin: `biàn`,
            },
            {
              chinese: `极`,
              pinyin: `jí`,
            },
            {
              chinese: `片`,
              pinyin: `piàn`,
            },
            {
              chinese: `傍`,
              pinyin: `bàng`,
            },
            {
              chinese: `海洋`,
              pinyin: `hǎi'yáng`,
            },
            {
              chinese: `作`,
              pinyin: `zuò`,
            },
            {
              chinese: `坏`,
              pinyin: `huài`,
            },
            {
              chinese: `给`,
              pinyin: `gěi`,
            },
            {
              chinese: `带`,
              pinyin: `dài`,
            },
            {
              chinese: `法`,
              pinyin: `fǎ`,
            },
            {
              chinese: `如`,
              pinyin: `rú`,
            },
            {
              chinese: `公`,
              pinyin: `gōng`,
            },
            {
              chinese: `它`,
              pinyin: `tā`,
            },
            {
              chinese: `娃`,
              pinyin: `wá`,
            },
            {
              chinese: `她`,
              pinyin: `tā`,
            },
            {
              chinese: `毛`,
              pinyin: `máo`,
            },
            {
              chinese: `更`,
              pinyin: `gèng`,
            },
            {
              chinese: `知识`,
              pinyin: `zhī'shi`,
            },
          ],
        },
        {
          names: {
            en: `Writing 2`,
            zh_cn: `写字表2`,
            zh_tw: `寫字錶2`,
          },
          words: [
            {
              chinese: `处`,
              pinyin: `chù`,
            },
            {
              chinese: `园`,
              pinyin: `yuán`,
            },
            {
              chinese: `桥`,
              pinyin: `qiáo`,
            },
            {
              chinese: `群`,
              pinyin: `qún`,
            },
            {
              chinese: `队旗`,
              pinyin: `duì'qí`,
            },
            {
              chinese: `铜号`,
              pinyin: `tóng'hào`,
            },
            {
              chinese: `领`,
              pinyin: `lǐng`,
            },
            {
              chinese: `巾`,
              pinyin: `jīn`,
            },
            {
              chinese: `杨`,
              pinyin: `yáng`,
            },
            {
              chinese: `壮`,
              pinyin: `zhuàng`,
            },
            {
              chinese: `桐`,
              pinyin: `tóng`,
            },
            {
              chinese: `枫`,
              pinyin: `fēng`,
            },
            {
              chinese: `松柏`,
              pinyin: `sōngbǎi`,
            },
            {
              chinese: `棉`,
              pinyin: `mián`,
            },
            {
              chinese: `杉`,
              pinyin: `shān`,
            },
            {
              chinese: `化`,
              pinyin: `huà`,
            },
            {
              chinese: `桂`,
              pinyin: `guì`,
            },
            {
              chinese: `歌`,
              pinyin: `gē`,
            },
            {
              chinese: `写`,
              pinyin: `xiě`,
            },
            {
              chinese: `丛`,
              pinyin: `cóng`,
            },
            {
              chinese: `深`,
              pinyin: `shēn`,
            },
            {
              chinese: `六`,
              pinyin: `liù`,
            },
            {
              chinese: `熊猫`,
              pinyin: `xióng'māo`,
            },
            {
              chinese: `九`,
              pinyin: `jiǔ`,
            },
            {
              chinese: `朋友`,
              pinyin: `péng'yǒu`,
            },
            {
              chinese: `季`,
              pinyin: `jì`,
            },
            {
              chinese: `吹`,
              pinyin: `chuī`,
            },
            {
              chinese: `肥`,
              pinyin: `féi`,
            },
            {
              chinese: `农`,
              pinyin: `nóng`,
            },
            {
              chinese: `事`,
              pinyin: `shì`,
            },
            {
              chinese: `忙`,
              pinyin: `máng`,
            },
            {
              chinese: `归`,
              pinyin: `guī`,
            },
            {
              chinese: `戴`,
              pinyin: `dài`,
            },
            {
              chinese: `辛苦`,
              pinyin: `xīn'kǔ`,
            },
          ],
        },
        {
          names: {
            en: `Writing 3`,
            zh_cn: `写字表3`,
            zh_tw: `寫字錶3`,
          },
          words: [
            {
              chinese: `称`,
              pinyin: `chēng`,
            },
            {
              chinese: `柱`,
              pinyin: `zhù`,
            },
            {
              chinese: `底`,
              pinyin: `dǐ`,
            },
            {
              chinese: `杆秤`,
              pinyin: `gǎn'chèng`,
            },
            {
              chinese: `做`,
              pinyin: `zuò`,
            },
            {
              chinese: `岁`,
              pinyin: `suì`,
            },
            {
              chinese: `站`,
              pinyin: `zhàn`,
            },
            {
              chinese: `船`,
              pinyin: `chuán`,
            },
            {
              chinese: `然`,
              pinyin: `rán`,
            },
            {
              chinese: `画幅`,
              pinyin: `huà'fú`,
            },
            {
              chinese: `评奖`,
              pinyin: `píng'jiǎng`,
            },
            {
              chinese: `纸`,
              pinyin: `zhǐ`,
            },
            {
              chinese: `报`,
              pinyin: `bào`,
            },
            {
              chinese: `另`,
              pinyin: `lìng`,
            },
            {
              chinese: `及`,
              pinyin: `jí`,
            },
            {
              chinese: `拿`,
              pinyin: `ná`,
            },
            {
              chinese: `并`,
              pinyin: `bìng`,
            },
            {
              chinese: `封`,
              pinyin: `fēng`,
            },
            {
              chinese: `信`,
              pinyin: `xìn`,
            },
            {
              chinese: `今`,
              pinyin: `jīn`,
            },
            {
              chinese: `支`,
              pinyin: `zhī`,
            },
            {
              chinese: `圆珠笔`,
              pinyin: `yuán'zhū'bǐ`,
            },
            {
              chinese: `灯`,
              pinyin: `dēng`,
            },
            {
              chinese: `电影`,
              pinyin: `diàn'yǐng`,
            },
            {
              chinese: `哄`,
              pinyin: `hǒng`,
            },
            {
              chinese: `先`,
              pinyin: `xiān`,
            },
            {
              chinese: `闭`,
              pinyin: `bì`,
            },
            {
              chinese: `脸`,
              pinyin: `liǎn`,
            },
            {
              chinese: `沉`,
              pinyin: `chén`,
            },
            {
              chinese: `发`,
              pinyin: `fā`,
            },
            {
              chinese: `窗`,
              pinyin: `chuāng`,
            },
            {
              chinese: `沙`,
              pinyin: `shā`,
            },
          ],
        },
        {
          names: {
            en: `Writing 4`,
            zh_cn: `写字表4`,
            zh_tw: `寫字錶4`,
          },
          words: [
            {
              chinese: `依`,
              pinyin: `yī`,
            },
            {
              chinese: `尽`,
              pinyin: `jìn`,
            },
            {
              chinese: `黄`,
              pinyin: `huáng`,
            },
            {
              chinese: `层`,
              pinyin: `céng`,
            },
            {
              chinese: `照`,
              pinyin: `zhào`,
            },
            {
              chinese: `炉`,
              pinyin: `lú`,
            },
            {
              chinese: `烟`,
              pinyin: `yān`,
            },
            {
              chinese: `挂`,
              pinyin: `guà`,
            },
            {
              chinese: `川`,
              pinyin: `chuān`,
            },
            {
              chinese: `南部`,
              pinyin: `nán'bù`,
            },
            {
              chinese: `些`,
              pinyin: `xiē`,
            },
            {
              chinese: `巨`,
              pinyin: `jù`,
            },
            {
              chinese: `位`,
              pinyin: `wèi`,
            },
            {
              chinese: `向`,
              pinyin: `xiàng`,
            },
            {
              chinese: `每`,
              pinyin: `měi`,
            },
            {
              chinese: `升`,
              pinyin: `shēng`,
            },
            {
              chinese: `闪`,
              pinyin: `shǎn`,
            },
            {
              chinese: `狗`,
              pinyin: `gǒu`,
            },
            {
              chinese: `湾`,
              pinyin: `wān`,
            },
            {
              chinese: `名胜`,
              pinyin: `míng'shèng`,
            },
            {
              chinese: `迹`,
              pinyin: `jì`,
            },
            {
              chinese: `央`,
              pinyin: `yāng`,
            },
            {
              chinese: `丽`,
              pinyin: `lì`,
            },
            {
              chinese: `展现`,
              pinyin: `zhǎn'xiàn`,
            },
            {
              chinese: `产`,
              pinyin: `chǎn`,
            },
            {
              chinese: `份`,
              pinyin: `fèn`,
            },
            {
              chinese: `坡`,
              pinyin: `pō`,
            },
            {
              chinese: `枝`,
              pinyin: `zhī`,
            },
            {
              chinese: `起`,
              pinyin: `qǐ`,
            },
            {
              chinese: `客`,
              pinyin: `kè`,
            },
            {
              chinese: `老`,
              pinyin: `lǎo`,
            },
            {
              chinese: `收`,
              pinyin: `shōu`,
            },
            {
              chinese: `城市`,
              pinyin: `chéng'shì`,
            },
          ],
        },
        {
          names: {
            en: `Writing 5`,
            zh_cn: `写字表5`,
            zh_tw: `寫字錶5`,
          },
          words: [
            {
              chinese: `井`,
              pinyin: `jǐng`,
            },
            {
              chinese: `观`,
              pinyin: `guān`,
            },
            {
              chinese: `沿`,
              pinyin: `yán`,
            },
            {
              chinese: `答`,
              pinyin: `dá`,
            },
            {
              chinese: `渴`,
              pinyin: `kě`,
            },
            {
              chinese: `喝`,
              pinyin: `hē`,
            },
            {
              chinese: `话`,
              pinyin: `huà`,
            },
            {
              chinese: `际`,
              pinyin: `jì`,
            },
            {
              chinese: `脚`,
              pinyin: `jiǎo`,
            },
            {
              chinese: `面`,
              pinyin: `miàn`,
            },
            {
              chinese: `阵`,
              pinyin: `zhèn`,
            },
            {
              chinese: `朗`,
              pinyin: `lǎng`,
            },
            {
              chinese: `枯`,
              pinyin: `kū`,
            },
            {
              chinese: `却`,
              pinyin: `què`,
            },
            {
              chinese: `第`,
              pinyin: `dì`,
            },
            {
              chinese: `将`,
              pinyin: `jiāng`,
            },
            {
              chinese: `难`,
              pinyin: `nán`,
            },
            {
              chinese: `纷`,
              pinyin: `fēn`,
            },
            {
              chinese: `棵`,
              pinyin: `kē`,
            },
            {
              chinese: `谢`,
              pinyin: `xiè`,
            },
            {
              chinese: `想`,
              pinyin: `xiǎng`,
            },
            {
              chinese: `盯`,
              pinyin: `dīng`,
            },
            {
              chinese: `言`,
              pinyin: `yán`,
            },
            {
              chinese: `邻`,
              pinyin: `lín`,
            },
            {
              chinese: `治`,
              pinyin: `zhì`,
            },
            {
              chinese: `怪`,
              pinyin: `guài`,
            },
          ],
        },
        {
          names: {
            en: `Writing 6`,
            zh_cn: `写字表6`,
            zh_tw: `寫字錶6`,
          },
          words: [
            {
              chinese: `楼`,
              pinyin: `lóu`,
            },
            {
              chinese: `年夜`,
              pinyin: `nián'yè`,
            },
            {
              chinese: `披`,
              pinyin: `pī`,
            },
            {
              chinese: `轻`,
              pinyin: `qīng`,
            },
            {
              chinese: `利`,
              pinyin: `lì`,
            },
            {
              chinese: `扁担`,
              pinyin: `biǎn'dàn`,
            },
            {
              chinese: `志`,
              pinyin: `zhì`,
            },
            {
              chinese: `伍`,
              pinyin: `wǔ`,
            },
            {
              chinese: `师`,
              pinyin: `shī`,
            },
            {
              chinese: `军`,
              pinyin: `jūn`,
            },
            {
              chinese: `战士`,
              pinyin: `zhàn'shì`,
            },
            {
              chinese: `忘`,
              pinyin: `wàng`,
            },
            {
              chinese: `泼`,
              pinyin: `pō`,
            },
            {
              chinese: `度`,
              pinyin: `dù`,
            },
            {
              chinese: `龙`,
              pinyin: `lóng`,
            },
            {
              chinese: `炮`,
              pinyin: `pào`,
            },
            {
              chinese: `穿`,
              pinyin: `chuān`,
            },
            {
              chinese: `始`,
              pinyin: `shǐ`,
            },
            {
              chinese: `令`,
              pinyin: `lìng`,
            },
            {
              chinese: `刘`,
              pinyin: `liú`,
            },
            {
              chinese: `民`,
              pinyin: `mín`,
            },
            {
              chinese: `反`,
              pinyin: `fǎn`,
            },
            {
              chinese: `村`,
              pinyin: `cūn`,
            },
            {
              chinese: `被`,
              pinyin: `bèi`,
            },
            {
              chinese: `关`,
              pinyin: `guān`,
            },
            {
              chinese: `道`,
              pinyin: `dào`,
            },
            {
              chinese: `兵`,
              pinyin: `bīng`,
            },
          ],
        },
        {
          names: {
            en: `Writing 7`,
            zh_cn: `写字表7`,
            zh_tw: `寫字錶7`,
          },
          words: [
            {
              chinese: `危`,
              pinyin: `wēi`,
            },
            {
              chinese: `敢`,
              pinyin: `gǎn`,
            },
            {
              chinese: `惊`,
              pinyin: `jīng`,
            },
            {
              chinese: `阴`,
              pinyin: `yīn`,
            },
            {
              chinese: `似`,
              pinyin: `sì`,
            },
            {
              chinese: `野`,
              pinyin: `yě`,
            },
            {
              chinese: `苍茫`,
              pinyin: `cāng'máng`,
            },
            {
              chinese: `于`,
              pinyin: `yú`,
            },
            {
              chinese: `论`,
              pinyin: `lùn`,
            },
            {
              chinese: `岸`,
              pinyin: `àn`,
            },
            {
              chinese: `屋`,
              pinyin: `wū`,
            },
            {
              chinese: `切`,
              pinyin: `qiē`,
            },
            {
              chinese: `久`,
              pinyin: `jiǔ`,
            },
            {
              chinese: `散步`,
              pinyin: `sàn'bù`,
            },
            {
              chinese: `唱`,
              pinyin: `chàng`,
            },
            {
              chinese: `赶`,
              pinyin: `gǎn`,
            },
            {
              chinese: `旺`,
              pinyin: `wàng`,
            },
            {
              chinese: `旁`,
              pinyin: `páng`,
            },
            {
              chinese: `浑`,
              pinyin: `hún`,
            },
            {
              chinese: `谁`,
              pinyin: `shuí`,
            },
            {
              chinese: `汽`,
              pinyin: `qì`,
            },
          ],
        },
        {
          names: {
            en: `Writing 8`,
            zh_cn: `写字表8`,
            zh_tw: `寫字錶8`,
          },
          words: [
            {
              chinese: `食物`,
              pinyin: `shí'wù`,
            },
            {
              chinese: `爷`,
              pinyin: `yé`,
            },
            {
              chinese: `就`,
              pinyin: `jiù`,
            },
            {
              chinese: `爪`,
              pinyin: `zhǎo`,
            },
            {
              chinese: `神`,
              pinyin: `shén`,
            },
            {
              chinese: `活猪`,
              pinyin: `huó'zhū`,
            },
            {
              chinese: `折`,
              pinyin: `zhé`,
            },
            {
              chinese: `张`,
              pinyin: `zhāng`,
            },
            {
              chinese: `祝`,
              pinyin: `zhù`,
            },
            {
              chinese: `扎`,
              pinyin: `zhā`,
            },
            {
              chinese: `抓`,
              pinyin: `zhuā`,
            },
            {
              chinese: `吵`,
              pinyin: `chǎo`,
            },
            {
              chinese: `但`,
              pinyin: `dàn`,
            },
            {
              chinese: `哭`,
              pinyin: `kū`,
            },
            {
              chinese: `车`,
              pinyin: `chē`,
            },
            {
              chinese: `得`,
              pinyin: `dé`,
            },
            {
              chinese: `秧苗`,
              pinyin: `yāng'miáo`,
            },
            {
              chinese: `汗`,
              pinyin: `hàn`,
            },
            {
              chinese: `急`,
              pinyin: `jí`,
            },
            {
              chinese: `场`,
              pinyin: `chǎng`,
            },
            {
              chinese: `伤`,
              pinyin: `shāng`,
            },
            {
              chinese: `路`,
              pinyin: `lù`,
            },
          ],
        },
        {
          names: { en: `Words 1`, zh_cn: `词语1`, zh_tw: `詞語1` },
          words: [
            { chinese: `看见`, pinyin: `kàn'jiàn` },
            { chinese: `哪里`, pinyin: `nǎ'lǐ` },
            { chinese: `那边`, pinyin: `nà'biān` },
            { chinese: `头顶`, pinyin: `tóu'dǐng` },
            { chinese: `眼睛`, pinyin: `yǎn'jīng` },
            { chinese: `雪白`, pinyin: `xuě'bái` },
            { chinese: `肚皮`, pinyin: `dù'pí` },
            { chinese: `孩子`, pinyin: `hái'zi` },
            { chinese: `两个`, pinyin: `liǎnggè` },
            { chinese: `宽广`, pinyin: `kuānguǎng` },
            { chinese: `跳高`, pinyin: `tiàogāo` },
            { chinese: `天空`, pinyin: `tiān'kōng` },
            { chinese: `傍晚`, pinyin: `bàng'wǎn` },
            { chinese: `人们`, pinyin: `rén'men` },
            { chinese: `冬天`, pinyin: `dōng'tiān` },
            { chinese: `花朵`, pinyin: `huā'duǒ` },
            { chinese: `平常`, pinyin: `píng'cháng` },
            { chinese: `江河`, pinyin: `jiāng'hé` },
            { chinese: `海洋`, pinyin: `hǎi'yáng` },
            { chinese: `田地`, pinyin: `tián'dì` },
            { chinese: `工作`, pinyin: `gōng'zuò` },
            { chinese: `变化`, pinyin: `biànhuà` },
            { chinese: `极坏`, pinyin: `jíhuài` },
            { chinese: `照片`, pinyin: `zhàopiàn` },
            { chinese: `带给`, pinyin: `dàigěi` },
            { chinese: `办法`, pinyin: `bàn'fǎ` },
            { chinese: `如果`, pinyin: `rú'guǒ` },
            { chinese: `长大`, pinyin: `zhǎng'dà` },
            { chinese: `娃娃`, pinyin: `wá'wá` },
            { chinese: `只要`, pinyin: `zhǐ'yào` },
            { chinese: `皮毛`, pinyin: `pí'máo` },
            { chinese: `那里`, pinyin: `nà'lǐ` },
            { chinese: `知识`, pinyin: `zhī'shi` },
            { chinese: `公园`, pinyin: `gōngyuán` },
            { chinese: `它们`, pinyin: `tā'men` },
            { chinese: `她的`, pinyin: `tāde` },
            { chinese: `更加`, pinyin: `gèngjiā` },
            { chinese: `四海为家`, pinyin: `sì'hǎi'wéi'jiā` },
            { chinese: `因为`, pinyin: `yīnwéi` },
          ],
        },
        {
          names: { en: `Words 2`, zh_cn: `词语2`, zh_tw: `詞語2` },
          words: [
            { chinese: `花园`, pinyin: `huā'yuán` },
            { chinese: `石桥`, pinyin: `shí'qiáo` },
            { chinese: `队旗`, pinyin: `duì'qí` },
            { chinese: `铜号`, pinyin: `tóng'hào` },
            { chinese: `欢笑`, pinyin: `huān'xiào` },
            { chinese: `红领巾`, pinyin: `hóng'lǐng'jīn` },
            { chinese: `到处`, pinyin: `dàochù` },
            { chinese: `人群`, pinyin: `rén'qún` },
            { chinese: `杨树`, pinyin: `yáng'shù` },
            { chinese: `树叶`, pinyin: `shù'yè` },
            { chinese: `枫树`, pinyin: `fēng'shù` },
            { chinese: `松柏`, pinyin: `sōng'bǎi` },
            { chinese: `木棉`, pinyin: `mù'mián` },
            { chinese: `水杉`, pinyin: `shuǐ'shān` },
            { chinese: `化石`, pinyin: `huà'shí` },
            { chinese: `金桂`, pinyin: `jīn'guì` },
            { chinese: `壮丽`, pinyin: `zhuànglì` },
            { chinese: `梧桐`, pinyin: `wútóng` },
            { chinese: `写字`, pinyin: `xiě'zì` },
            { chinese: `丛林`, pinyin: `cóng'lín` },
            { chinese: `深处`, pinyin: `shēn'chù` },
            { chinese: `竹林`, pinyin: `zhúlín` },
            { chinese: `熊猫`, pinyin: `xióng'māo` },
            { chinese: `朋友`, pinyin: `péng'you` },
            { chinese: `唱歌`, pinyin: `chàng'gē` },
            { chinese: `四季`, pinyin: `sì'jì` },
            { chinese: `农事`, pinyin: `nóng'shì` },
            { chinese: `月光`, pinyin: `yuè'guāng` },
            { chinese: `辛苦`, pinyin: `xīn'kǔ` },
            { chinese: `棉衣`, pinyin: `mián'yī` },
            { chinese: `吹风`, pinyin: `chuīfēng` },
            { chinese: `化肥`, pinyin: `huàféi` },
            { chinese: `农忙`, pinyin: `nóngmáng` },
            { chinese: `归来`, pinyin: `guīlái` },
            { chinese: `回归`, pinyin: `huíguī` },
            { chinese: `爱戴`, pinyin: `àidài` },
            { chinese: `戴红领巾`, pinyin: `dàihónglǐngjīn` },
            { chinese: `六十九`, pinyin: `liùshíjiǔ` },
            { chinese: `披星戴月`, pinyin: `pīxīngdàiyuè` },
          ],
        },
        {
          names: { en: `Words 3`, zh_cn: `词语3`, zh_tw: `詞語3` },
          words: [
            { chinese: `一同`, pinyin: `yì'tóng` },
            { chinese: `柱子`, pinyin: `zhù'zi` },
            { chinese: `一边`, pinyin: `yì'biān` },
            { chinese: `到底`, pinyin: `dào'dǐ` },
            { chinese: `秤杆`, pinyin: `chèng'gǎn` },
            { chinese: `力气`, pinyin: `lì'qi` },
            { chinese: `出来`, pinyin: `chū'lái` },
            { chinese: `船身`, pinyin: `chuán'shēn` },
            { chinese: `石头`, pinyin: `shí'tou` },
            { chinese: `地方`, pinyin: `dì'fāng` },
            { chinese: `果然`, pinyin: `guǒ'rán` },
            { chinese: `称呼`, pinyin: `chēng'hu` },
            { chinese: `做事`, pinyin: `zuòshì` },
            { chinese: `岁月`, pinyin: `suì'yuè` },
            { chinese: `站立`, pinyin: `zhànlì` },
            { chinese: `评奖`, pinyin: `píng'jiǎng` },
            { chinese: `时间`, pinyin: `shí'jiān` },
            { chinese: `报纸`, pinyin: `bào'zhǐ` },
            { chinese: `事情`, pinyin: `shì'qing` },
            { chinese: `好事`, pinyin: `hǎ'oshì` },
            { chinese: `坏事`, pinyin: `huài'shì` },
            { chinese: `另外`, pinyin: `lìng'wài` },
            { chinese: `一并`, pinyin: `yí'bìng` },
            { chinese: `来不及`, pinyin: `lái'bu'jí` },
            { chinese: `捉拿`, pinyin: `zhuō'ná` },
            { chinese: `拿东西`, pinyin: `nádōngxī` },
            { chinese: `一幅画`, pinyin: `yī'fú'huà` },
            { chinese: `一封信`, pinyin: `yī'fēng'xìn` },
            { chinese: `出国`, pinyin: `chū'guó` },
            { chinese: `今天`, pinyin: `jīn'tiān` },
            { chinese: `开心`, pinyin: `kāi'xīn` },
            { chinese: `以前`, pinyin: `yǐ'qián` },
            { chinese: `还有`, pinyin: `hái'yǒu` },
            { chinese: `台灯`, pinyin: `tái'dēng` },
            { chinese: `这时`, pinyin: `zhè'shí` },
            { chinese: `阳光`, pinyin: `yáng'guāng` },
            { chinese: `电影`, pinyin: `diàn'yǐng` },
            { chinese: `明亮`, pinyin: `míng'liàng` },
            { chinese: `故事`, pinyin: `gù'shi` },
            { chinese: `圆珠笔`, pinyin: `yuán'zhū'bǐ` },
            { chinese: `头发`, pinyin: `tóu'fà` },
            { chinese: `沙发`, pinyin: `shāfā` },
            { chinese: `窗外`, pinyin: `chuāng'wài` },
            { chinese: `哄人`, pinyin: `hǒng'rén` },
            { chinese: `沉思`, pinyin: `chén'sī` },
            { chinese: `首先`, pinyin: `shǒu'xiān` },
            { chinese: `闭眼`, pinyin: `bì'yǎn` },
            { chinese: `圆脸`, pinyin: `yuán'liǎn` },
            { chinese: `红着脸`, pinyin: `hóngzheliǎn` },
            { chinese: `关闭`, pinyin: `guānbì` },
            { chinese: `拿着`, pinyin: `názhe` },
            { chinese: `做手工`, pinyin: `zuò'shǒu'gōng` },
            { chinese: `一支笔`, pinyin: `yī'zhī'bǐ` },
          ],
        },
        {
          names: { en: `Words 4`, zh_cn: `词语4`, zh_tw: `詞語4` },
          words: [
            { chinese: `依照`, pinyin: `yīzhào` },
            { chinese: `尽头`, pinyin: `jìntóu` },
            { chinese: `黄河`, pinyin: `huánghé` },
            { chinese: `层次`, pinyin: `céngcì` },
            { chinese: `香炉`, pinyin: `xiānglú` },
            { chinese: `香烟`, pinyin: `xiāngyān` },
            { chinese: `挂住`, pinyin: `guàzhù` },
            { chinese: `名山大川`, pinyin: `míngshāndàchuān` },
            { chinese: `黄山`, pinyin: `huáng'shān` },
            { chinese: `南部`, pinyin: `nán'bù` },
            { chinese: `那些`, pinyin: `nà'xiē` },
            { chinese: `山顶`, pinyin: `shān'dǐng` },
            { chinese: `云海`, pinyin: `yún'hǎi` },
            { chinese: `巨石`, pinyin: `jù'shí` },
            { chinese: `前方`, pinyin: `qián'fāng` },
            { chinese: `每当`, pinyin: `měi'dāng` },
            { chinese: `它们`, pinyin: `tā'men` },
            { chinese: `部位`, pinyin: `bùwèi` },
            { chinese: `方向`, pinyin: `fāngxiàng` },
            { chinese: `升旗`, pinyin: `shēngqí` },
            { chinese: `狗熊`, pinyin: `gǒuxióng` },
            { chinese: `一动不动`, pinyin: `yī'dòng'bu'dòng` },
            { chinese: `群山`, pinyin: `qún'shān` },
            { chinese: `树木`, pinyin: `shù'mù` },
            { chinese: `中央`, pinyin: `zhōng'yāng` },
            { chinese: `美丽`, pinyin: `měi'lì` },
            { chinese: `灯光`, pinyin: `dēng'guāng` },
            { chinese: `中午`, pinyin: `zhōng'wǔ` },
            { chinese: `展现`, pinyin: `zhǎn'xiàn` },
            { chinese: `风光`, pinyin: `fēng'guāng` },
            { chinese: `台湾`, pinyin: `táiwān` },
            { chinese: `金光闪闪`, pinyin: `jīn'guāng'shǎn'shǎn` },
            { chinese: `名胜古迹`, pinyin: `míng'shèng'gǔ'jì` },
            { chinese: `出产`, pinyin: `chū'chǎn` },
            { chinese: `水果`, pinyin: `shuǐ'guǒ` },
            { chinese: `月份`, pinyin: `yuè'fèn` },
            { chinese: `山坡`, pinyin: `shānpō` },
            { chinese: `枝叶`, pinyin: `zhī'yè` },
            { chinese: `展开`, pinyin: `zhǎn'kāi` },
            { chinese: `好客`, pinyin: `hào'kè` },
            { chinese: `老乡`, pinyin: `lǎo'xiāng` },
            { chinese: `城市`, pinyin: `chéng'shì` },
            { chinese: `空气`, pinyin: `kōng'qì` },
            { chinese: `水分`, pinyin: `shuǐ'fèn` },
            { chinese: `起来`, pinyin: `qǐ'lái` },
            { chinese: `收成`, pinyin: `shōuchéng` },
            { chinese: `收入`, pinyin: `shōurù` },
            { chinese: `一起`, pinyin: `yìqǐ` },
            { chinese: `五光十色`, pinyin: `wǔ'guāng'shí'sè` },
            { chinese: `山城`, pinyin: `shān'chéng` },
          ],
        },
        {
          names: { en: `Words 5`, zh_cn: `词语5`, zh_tw: `詞語5` },
          words: [
            { chinese: `坐井观天`, pinyin: `zuò'jǐng'guān'tiān` },
            { chinese: `井沿`, pinyin: `jǐng'yán` },
            { chinese: `回答`, pinyin: `huí'dá` },
            { chinese: `口渴`, pinyin: `kǒu'kě` },
            { chinese: `大话`, pinyin: `dà'huà` },
            { chinese: `井口`, pinyin: `jǐngkǒu` },
            { chinese: `无边无际`, pinyin: `wú'biān'wú'jì` },
            { chinese: `喝水`, pinyin: `hēshuǐ` },
            { chinese: `山脚`, pinyin: `shān'jiǎo` },
            { chinese: `当作`, pinyin: `dàng'zuò` },
            { chinese: `前面`, pinyin: `qián'mian` },
            { chinese: `晴朗`, pinyin: `qíng'lǎng` },
            { chinese: `枯草`, pinyin: `kū'cǎo` },
            { chinese: `正好`, pinyin: `zhèng'hǎo` },
            { chinese: `清早`, pinyin: `qīng'zǎo` },
            { chinese: `现在`, pinyin: `xiàn'zài` },
            { chinese: `将来`, pinyin: `jiāng'lái` },
            { chinese: `难过`, pinyin: `nán'guò` },
            { chinese: `大雪纷飞`, pinyin: `dà'xuě'fēn'fēi` },
            { chinese: `枝头`, pinyin: `zhī'tóu` },
            { chinese: `却是`, pinyin: `què'shì` },
            { chinese: `一阵风`, pinyin: `yí'zhèn'fēng` },
            { chinese: `第一`, pinyin: `dìyī` },
            { chinese: `从前`, pinyin: `cóng'qián` },
            { chinese: `细长`, pinyin: `xì'cháng` },
            { chinese: `可爱`, pinyin: `kě'ài` },
            { chinese: `每天`, pinyin: `měi'tiān` },
            { chinese: `自言自语`, pinyin: `zì'yán'zì'yǔ` },
            { chinese: `南瓜`, pinyin: `nán'guā` },
            { chinese: `邻居`, pinyin: `lín'jū` },
            { chinese: `奇怪`, pinyin: `qí'guài` },
            { chinese: `一棵树`, pinyin: `yīkēshù` },
            { chinese: `谢谢`, pinyin: `xiè'xiè` },
            { chinese: `想法`, pinyin: `xiǎngfǎ` },
            { chinese: `盯着`, pinyin: `dīngzhe` },
            { chinese: `治病`, pinyin: `zhìbìng` },
          ],
        },
        {
          names: { en: `Words 6`, zh_cn: `词语6`, zh_tw: `詞語6` },
          words: [
            { chinese: `八角楼`, pinyin: `bā'jiǎo'lóu` },
            { chinese: `深夜`, pinyin: `shēn'yè` },
            { chinese: `军衣`, pinyin: `jūn'yī` },
            { chinese: `星星之火`, pinyin: `xīng'xīng'zhī'huǒ` },
            { chinese: `沉思`, pinyin: `chén'sī` },
            { chinese: `胜利`, pinyin: `shèng'lì` },
            { chinese: `过年`, pinyin: `guònián` },
            { chinese: `轻松`, pinyin: `qīngsōng` },
            { chinese: `披星戴月`, pinyin: `pīxīngdàiyuè` },
            { chinese: `扁担`, pinyin: `biǎn'dan` },
            { chinese: `同志`, pinyin: `tóng'zhì` },
            { chinese: `带领`, pinyin: `dài'lǐng` },
            { chinese: `队伍`, pinyin: `duì'wǔ` },
            { chinese: `会师`, pinyin: `huì'shī` },
            { chinese: `红军`, pinyin: `hóng'jūn` },
            { chinese: `来回`, pinyin: `lái'huí` },
            { chinese: `战士`, pinyin: `zhàn'shì` },
            { chinese: `白天`, pinyin: `bái'tiān` },
            { chinese: `起来`, pinyin: `qǐ'lái` },
            { chinese: `难忘`, pinyin: `nán'wàng` },
            { chinese: `龙船`, pinyin: `lóng'chuán` },
            { chinese: `花炮`, pinyin: `huāpào` },
            { chinese: `泼水节`, pinyin: `pō'shuǐ'jié` },
            { chinese: `欢呼`, pinyin: `huān'hū` },
            { chinese: `人群`, pinyin: `rén'qún` },
            { chinese: `欢乐`, pinyin: `huān'lè` },
            { chinese: `开始`, pinyin: `kāi'shǐ` },
            { chinese: `多么`, pinyin: `duō'me` },
            { chinese: `柏树枝`, pinyin: `bǎi'shù'zhī` },
            { chinese: `一年一度`, pinyin: `yì'nián'yí'dù` },
            { chinese: `四面八方`, pinyin: `sì'miàn'bā'fāng` },
            { chinese: `穿戴`, pinyin: `chuāndài` },
            { chinese: `口令`, pinyin: `kǒulìng` },
            { chinese: `年轻`, pinyin: `nián'qīng` },
            { chinese: `村子`, pinyin: `cūn'zi` },
            { chinese: `知道`, pinyin: `zhī'dào` },
            { chinese: `广场`, pinyin: `guǎng'chǎng` },
            { chinese: `民兵`, pinyin: `mín'bīng` },
            { chinese: `姓刘`, pinyin: `xìngliú` },
            { chinese: `造反`, pinyin: `zàofǎn` },
            { chinese: `关闭`, pinyin: `guānbì` },
            { chinese: `被子`, pinyin: `bèizi` },
            { chinese: `棉被`, pinyin: `miánbèi` },
            { chinese: `花地`, pinyin: `huā'dì` },
          ],
        },
        {
          names: { en: `Words 7`, zh_cn: `词语7`, zh_tw: `詞語7` },
          words: [
            { chinese: `安危`, pinyin: `ānwēi` },
            { chinese: `不敢`, pinyin: `bùgǎn` },
            { chinese: `惊吓`, pinyin: `jīngxià` },
            { chinese: `阴凉`, pinyin: `yīnliáng` },
            { chinese: `相似野外`, pinyin: `xiāngsìyěwài` },
            { chinese: `田野`, pinyin: `tián'yě` },
            { chinese: `苍天`, pinyin: `cāngtiān` },
            { chinese: `茫然`, pinyin: `mángrán` },
            { chinese: `白发苍苍`, pinyin: `báifàcāngcāng` },
            { chinese: `白茫茫`, pinyin: `báimángmáng` },
            { chinese: `于是`, pinyin: `yú'shì` },
            { chinese: `无论`, pinyin: `wú'lùn` },
            { chinese: `船只`, pinyin: `chuán'zhī` },
            { chinese: `连同`, pinyin: `lián'tóng` },
            { chinese: `岸边`, pinyin: `àn'biān` },
            { chinese: `同时`, pinyin: `tóng'shí` },
            { chinese: `房屋`, pinyin: `fáng'wū` },
            { chinese: `一切`, pinyin: `yí'qiè` },
            { chinese: `不久`, pinyin: `bù'jiǔ` },
            { chinese: `出现`, pinyin: `chū'xiàn` },
            { chinese: `散步`, pinyin: `sàn'bù` },
            { chinese: `空地`, pinyin: `kòng'dì` },
            { chinese: `唱歌`, pinyin: `chàng'gē` },
            { chinese: `回家`, pinyin: `huí'jiā` },
            { chinese: `赶快`, pinyin: `gǎn'kuài` },
            { chinese: `旁边`, pinyin: `páng'biān` },
            { chinese: `火星`, pinyin: `huǒ'xīng` },
            { chinese: `连忙`, pinyin: `lián'máng` },
            { chinese: `浑身`, pinyin: `hún'shēn` },
            { chinese: `时候`, pinyin: `shí'hou` },
            { chinese: `谢谢`, pinyin: `xiè'xiè` },
            { chinese: `水汽`, pinyin: `shuǐ'qì` },
            { chinese: `兴旺`, pinyin: `xīngwàng` },
            { chinese: `谁的`, pinyin: `shuíde` },
          ],
        },
        {
          names: { en: `Words 8`, zh_cn: `词语8`, zh_tw: `詞語8` },
          words: [
            { chinese: `食物`, pinyin: `shí'wù` },
            { chinese: `身边`, pinyin: `shēn'biān` },
            { chinese: `爪子`, pinyin: `zhuǎ'zi` },
            { chinese: `面前`, pinyin: `miàn'qián` },
            { chinese: `野猪`, pinyin: `yě'zhū` },
            { chinese: `为什么`, pinyin: `wèi'shén'me` },
            { chinese: `往常身后`, pinyin: `wǎngchángshēnhòu` },
            { chinese: `爷爷`, pinyin: `yéye` },
            { chinese: `神气活现`, pinyin: `shén'qì'huó'xiàn` },
            { chinese: `信以为真`, pinyin: `xìn'yǐ'wéi'zhēn` },
            { chinese: `就是`, pinyin: `jiùshì` },
            { chinese: `纸船`, pinyin: `zhǐ'chuán` },
            { chinese: `松果`, pinyin: `sōng'guǒ` },
            { chinese: `纸条`, pinyin: `zhǐ'tiáo` },
            { chinese: `可是`, pinyin: `kě'shì` },
            { chinese: `但是`, pinyin: `dàn'shì` },
            { chinese: `屋顶`, pinyin: `wū'dǐng` },
            { chinese: `和好`, pinyin: `hé'hǎo` },
            { chinese: `折纸`, pinyin: `zhézhǐ` },
            { chinese: `纸张`, pinyin: `zhǐzhāng` },
            { chinese: `祝福`, pinyin: `zhùfú` },
            { chinese: `包扎`, pinyin: `bāozā` },
            { chinese: `抓住`, pinyin: `zhuāzhù` },
            { chinese: `很吵`, pinyin: `hěnchǎo` },
            { chinese: `哭声`, pinyin: `kūshēng` },
            { chinese: `田野`, pinyin: `tián'yě` },
            { chinese: `风车`, pinyin: `fēng'chē` },
            { chinese: `飞快`, pinyin: `fēi'kuài` },
            { chinese: `秧苗`, pinyin: `yāng'miáo` },
            { chinese: `不住`, pinyin: `bú'zhù` },
            { chinese: `点头`, pinyin: `diǎn'tóu` },
            { chinese: `急忙`, pinyin: `jí'máng` },
            { chinese: `伤心`, pinyin: `shāng'xīn` },
            { chinese: `路边`, pinyin: `lù'biān` },
            { chinese: `生气`, pinyin: `shēng'qì` },
            { chinese: `得到`, pinyin: `dédào` },
            { chinese: `汗水`, pinyin: `hànshuǐ` },
            { chinese: `场地`, pinyin: `chǎngdì` },
            { chinese: `跑得很快`, pinyin: `pǎodéhěnkuài` },
            { chinese: `往常`, pinyin: `wǎng'cháng` },
            { chinese: `身后`, pinyin: `shēn'hòu` },
          ],
        },
      ],
    });
  };
}
