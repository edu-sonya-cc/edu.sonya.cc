// import { DEVICE_PROPERTY } from './const';
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
// import { getChangeLangNotifyArrayOfCurrentPage, getCurrentLang, Language, LOCAL_STORAGE_KEY_OF_LANG } from './storage';
// import { cssVersions } from './version';

/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/storage.d.ts' />
/// <reference path='../types/version.d.ts' />

// // new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
// const MONTH_NAME_ARRAY = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');

/** 类：全局对象 */
class Global {
  private readonly USER_AGENT_LOWER_CASE_FIXED = navigator.userAgent.toLowerCase().replace(/;/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/\//g, " ");

  /** 是否手机版 */
  public readonly IS_MOBILE: boolean =
    // navigator.userAgent.toLowerCase().replace(" mobile/", " mobile ").indexOf(
    //   " mobile ",
    // ) > -1;
    // navigator.userAgent.toLowerCase().replace(" ;", " ").replace("(", " ").replace("/", " ")
    //   .replace(" ipad ", " mobile ").replace(" tablet ", " mobile ").replace(" pad ", " mobile ")
    //   .indexOf(" mobile ") > -1;
    this.USER_AGENT_LOWER_CASE_FIXED
    // .replace(/ ipad /g, " mobile ").replace(/ tablet /g, " mobile ").replace(/ pad /g, " mobile ")
    .indexOf(" mobile ") > -1;

  /** 是否平板 */
  public readonly IS_PAD: boolean =
    this.USER_AGENT_LOWER_CASE_FIXED.replace(/ ipad /g, " pad ").replace(/ tablet /g, " pad ").indexOf(" pad ") > -1;

  /** 是否手机或平板 */
  public readonly IS_MOBILE_OR_PAD: boolean = this.IS_MOBILE || this.IS_PAD;

  /** 是否无法直接打印 */
  public readonly CAN_NOT_PRINT: boolean = this.IS_MOBILE_OR_PAD || this.USER_AGENT_LOWER_CASE_FIXED.indexOf('macwechat') > -1 || ((this.USER_AGENT_LOWER_CASE_FIXED.indexOf('micromessenger') > -1) && (this.USER_AGENT_LOWER_CASE_FIXED.indexOf('windowswechat') === -1));

  private body: HTMLBodyElement = getBodyElement();
  private langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage();

  public bindChangeLangEventForI18nElements = () => {
    const innerHtmlI18nElement: Array<Element> = [];
    // interface ElementExtend extends Element { i18n ?: string };
    querySelectorAllByI18n().forEach(
      (element: HTMLElement & { i18n?: I18nable }) => {
        element.hasAttribute("i18n") &&
          (element.i18n = JSON.parse(element.getAttribute("i18n") as string));

        innerHtmlI18nElement.push(element);
      },
    );

    const placeholderI18nElement: Array<Element> = [];
    querySelectorAllByI18nPlaceholder().forEach(
      (
        element: HTMLElement & { i18nPlaceholder?: I18nable },
      ) => {
        element.hasAttribute("i18n-placeholder") &&
          (element.i18nPlaceholder = JSON.parse(
            element.getAttribute("i18n-placeholder") as string,
          ));

        placeholderI18nElement.push(element);
      },
    );

    this.langUpdatedEventArray.push((lang: Language) => {
      innerHtmlI18nElement.forEach(
        (
          element: Element & {
            i18n?: { en: string; zh_cn: string; zh_tw: string };
          },
        ) => {
          element.innerHTML = (element.i18n &&
            (element as unknown as { i18n: I18nable }).i18n[lang]) as string;
        },
      );
      placeholderI18nElement.forEach(
        (
          element: Element & {
            i18nPlaceholder?: { en: string; zh_cn: string; zh_tw: string };
          },
        ) => {
          element.setAttribute(
            "placeholder",
            (element.i18nPlaceholder &&
              (element as unknown as { i18nPlaceholder: PlaceholderI18nable })
                .i18nPlaceholder[lang]) as string,
          );
        },
      );
    });
  };

  // public getChineseDate(date: Date) {
  // 	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // }

  // public getEnglishDate(date: Date) {
  // 	return `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  // }

  private inited = false;
  public init = () => {
    if (this.inited) return;

    // TODO(@anqi) more device
    // this.body.setAttribute(DEVICE_PROPERTY, this.IS_PAD ? "pad" : (this.IS_MOBILE ? "mobile" : "pc"));
    const head = getHeadElement();

    const link = createElement("link") as HTMLLinkElement;
    link.rel = "stylesheet";
    link.type = "text/css";

    // 2023-01-05 => this.IS_MOBILE_OR_PAD
    // 2023-01-20 => this.CAN_NOT_PRINT
    if (this.CAN_NOT_PRINT) {
      // <script src="http://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
      // <script src="https://cdn.bootcss.com/jspdf/1.5.3/jspdf.min.js"></script> =>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

      [
        "http://html2canvas.hertzen.com/dist/html2canvas.min.js",
        "https://cdn.bootcss.com/jspdf/1.5.3/jspdf.min.js",
        // 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
      ].forEach((url: string, index: number) => {
        const phoneScriptElement = createElement("script");
        phoneScriptElement.setAttribute("id", `phoneScript_${index}`);
        phoneScriptElement.setAttribute("charset", "utf-8");
        phoneScriptElement.setAttribute("src", url);
        head.appendChild(phoneScriptElement);
      });

      // document.domain='cn';

      const meta = createElement("meta") as HTMLMetaElement;
      meta.id = "viewportMeta";
      meta.name = "viewport";
      meta.content =
        "width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover,minimal-ui";
      head.appendChild(meta);

      if (this.IS_MOBILE_OR_PAD) {
        const padOrPhoneCssName = this.IS_PAD ? "pad" : 'phone';
        link.href = `css/${padOrPhoneCssName}.css?${cssVersions[padOrPhoneCssName]}`;
      } else {
        link.href = `css/pc.css?${cssVersions.pc}`;
      }
    } else {
      // const meta = createElement("meta") as HTMLMetaElement;
      // meta.httpEquiv = "X-UA-Compatible";
      // meta.content = "IE=EmulateIE9";
      // head.appendChild(meta);

      link.href = `css/pc.css?${cssVersions.pc}`;
    }
    head.appendChild(link);

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

    // document.domain='cn';
    this.inited = true;
  };
}

/** 全局对象 */
export const global = new Global();
