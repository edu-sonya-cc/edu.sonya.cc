/**
 * <en_us>Local storage keyword: language, used to record the last selected language</en_us>
 * <zh_cn>本地存储关键字：语言，用于记录最后一次所选择的语言</zh_cn>
 * <zh_tw>本地存儲關鍵字：語言，用於記錄最後一次所選擇的語言</zh_tw>
 */
export declare const LOCAL_STORAGE_KEY_OF_LANG = "lang";
/**
 * <en_us>Local Storage Keyword: the current page, used to record the configuration selected during the last report generation</en_us>
 * <zh_cn>本地存储关键字：当前页，用于记录最后一次生成报表时所选择的配置</zh_cn>
 * <zh_tw>本地存儲關鍵字：當前頁，用於記錄最後一次生成報表時所選擇的配寘</zh_tw>
 */
export declare const LOCAL_STORAGE_KEY_OF_CURRENT_PAGE: string;
/**
 * <en_us>language</en_us>
 * <zh_cn>语言</zh_cn>
 * <zh_tw>語言</zh_tw>
 */
export declare type Language = "en_us" | "zh_cn" | "zh_tw";
/**
 * <en_us>Get the current language from localStorage</en_us>
 * <zh_cn>从localStorage获取当前语言</zh_cn>
 * <zh_tw>從localStorage獲取當前語言</zh_tw>
 */
export declare const getCurrentLang: () => Language;
/**
 * <en_us>Set Current Language</en_us>
 * <zh_cn>设置当前语言</zh_cn>
 * <zh_tw>設定當前語言</zh_tw>
 */
export declare const setCurrentLang: (lang: Language) => void;
/**
 * <en_us>Update the interface according to the current language</en_us>
 * <zh_cn>根据当前语言更新界面</zh_cn>
 * <zh_tw>根據當前語言更新介面</zh_tw>
 */
export declare const updateUIByCurrentLang: () => void;
/**
 * <en_us>Get the local cache corresponding to the current page.</en_us>
 * <zh_cn>获取当前页面对应本地缓存</zh_cn>
 * <zh_tw>獲取當前頁面對應本地緩存</zh_tw>
 */
export declare const getCurrentPageLocalStorage: () => string;
/**
 * <en_us>Set the local cache corresponding to the current page.</en_us>
 * <zh_cn>设置当前页面对应本地缓存</zh_cn>
 * <zh_tw>設定當前頁面對應本地緩存</zh_tw>
 */
export declare const setCurrentPageLocalStorage: (newValue: string) => void;
/**
 * <en_us>Get the "Change Language" notification array corresponding to the current page.</en_us>
 * <zh_cn>获取当前页面对应的“更改语言”通知数组</zh_cn>
 * <zh_tw>獲取當前頁面對應的“更改語言”通知數組</zh_tw>
 */
export declare const getChangeLangNotifyArrayOfCurrentPage: () =>
  ((lang: Language) => void)[];
/**
 * <en_us>Clear the "Change Language" notification array corresponding to the current page.</en_us>
 * <zh_cn>清空当前页面对应的“更改语言”通知数组</zh_cn>
 * <zh_tw>清空當前頁面對應的“更改語言”通知數組</zh_tw>
 */
export declare const clearChangeLangNotifyArrayOfCurrentPage: () => void;
