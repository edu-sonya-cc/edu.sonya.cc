// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const DOMAIN = 'edu.sonya.cc';
DOMAIN.concat('_');
const CURRENT_URL = window.location.href;
const HOME_URL = CURRENT_URL.startsWith('file:///') ? 'file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm' : 'http://edu.sonya.cc/';
(function() {
    const myWindow = window;
    if (!myWindow.top || CURRENT_URL.startsWith('file:///')) {
        return;
    }
    if (!myWindow.top.location.href.startsWith(HOME_URL)) {
        myWindow.top.location.replace(HOME_URL);
    }
})();
HOME_URL.length;
var ActualPage;
(function(ActualPage) {
    ActualPage[ActualPage["home"] = 0] = "home";
    ActualPage[ActualPage["bricks"] = 1] = "bricks";
    ActualPage[ActualPage["brick"] = 2] = "brick";
    ActualPage[ActualPage["treasures"] = 3] = "treasures";
    ActualPage[ActualPage["stories"] = 4] = "stories";
    ActualPage[ActualPage["story"] = 5] = "story";
    ActualPage[ActualPage["about"] = 6] = "about";
    ActualPage[ActualPage["report"] = 7] = "report";
})(ActualPage || (ActualPage = {}));
const ACTUAL_PAGE_NAME_ARRAY = [
    'home',
    'bricks',
    'brick',
    'treasures',
    'stories',
    'story',
    'about',
    'report'
];
const getActualPageValueByName = (name)=>ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
const PARAMETER_FOR_ACTUAL_PAGE = 'go';
const ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf('?'.concat(PARAMETER_FOR_ACTUAL_PAGE, '=')) > -1 ? getActualPageValueByName(CURRENT_URL.split('?')[1].split('&')[0].split('=')[1]) : ActualPage.home;
const ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
const SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf('/') + 1);
`${SITE_ROOT}images/`;
`${SITE_ROOT}js/`;
`${SITE_ROOT}css/`;
const getPageParameterByName = (name, defaultValue)=>{
    return CURRENT_URL.indexOf(`&${name}=`) === -1 ? defaultValue || '' : CURRENT_URL.split('&').slice(1).filter((keyValue)=>keyValue.startsWith(`${name}=`))[0].split('=')[1];
};
getPageParameterByName('kind', null);
parseInt(getPageParameterByName('page', '1'), 0) - 1;
parseInt(getPageParameterByName('id', '1'), 0);
const DEVICE_PROPERTY = 'edu-device';
const REPORT_KIND_PROPERTY = 'edu-report-kind';
function getElementById(id) {
    return document.getElementById(id);
}
function querySelectorAllByI18n() {
    return document.querySelectorAll('[i18n]');
}
function querySelectorAllByI18nPlaceholder() {
    return document.querySelectorAll('[i18n-placeholder]');
}
function getBodyElement() {
    return document.getElementsByTagName('body')[0];
}
function getTitleElement() {
    return document.getElementsByTagName('title')[0];
}
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function getI18nInnerHTML({ en , zh_cn , zh_tw  }) {
    return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
}
new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
const LOCAL_STORAGE_KEY_OF_LANG = 'lang';
const LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes('?') ? CURRENT_URL.split('?')[1] : ACTUAL_PAGE_NAME;
const CHANGE_LANG_NOTIFY_ARRAY = [];
const getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || 'zh_cn';
const updateUIByCurrentLang = ()=>{
    const lang = getCurrentLang();
    CHANGE_LANG_NOTIFY_ARRAY.forEach((func)=>func(lang));
};
const getCurrentPageLocalStorage = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || '';
const setCurrentPageLocalStorage = (newValue)=>localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
const getChangeLangNotifyArrayOfCurrentPage = ()=>CHANGE_LANG_NOTIFY_ARRAY;
class Global {
    IS_MOBILE = navigator.userAgent.toLowerCase().indexOf(' mobile ') > -1;
    body = getBodyElement();
    langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage();
    bindChangeLangEventForI18nElements = ()=>{
        const innerHtmlI18nElement = [];
        querySelectorAllByI18n().forEach((element)=>{
            element.hasAttribute('i18n') && (element.i18n = JSON.parse(element.getAttribute('i18n')));
            innerHtmlI18nElement.push(element);
        });
        const placeholderI18nElement = [];
        querySelectorAllByI18nPlaceholder().forEach((element)=>{
            element.hasAttribute('i18n-placeholder') && (element.i18nPlaceholder = JSON.parse(element.getAttribute('i18n-placeholder')));
            placeholderI18nElement.push(element);
        });
        this.langUpdatedEventArray.push((lang)=>{
            innerHtmlI18nElement.forEach((element)=>{
                element.innerHTML = element.i18n && element.i18n[lang];
            });
            placeholderI18nElement.forEach((element)=>{
                element.setAttribute('placeholder', element.i18nPlaceholder && element.i18nPlaceholder[lang]);
            });
        });
    };
    inited = false;
    init = ()=>{
        if (this.inited) return;
        this.body.setAttribute(DEVICE_PROPERTY, this.IS_MOBILE ? 'mobile' : 'pc');
        this.inited = true;
    };
}
const global = new Global();
class BrickBase1 {
    download = ()=>{};
    print = ()=>{};
    updateOtherData = (newData)=>{};
    initCoreElements = ()=>{};
    initOtherElements = ()=>{};
    onPageSizeChanged = (newPageSize)=>{};
    getCss = ()=>this.computedData.css;
    getHtml = ()=>this.computedData.html;
    constructor(appendData, otherComputedData, newPageSizeArray = [
        'A3',
        'A4'
    ]){
        this.data = {
            ...this.data,
            ...appendData
        };
        this.DEFAULT_DATA_JSON = JSON.stringify(this.data);
        this.computedData = {
            ...this.computedData,
            ...otherComputedData
        };
        newPageSizeArray.forEach((pageSize)=>this.pageSizeArray.push(pageSize));
    }
    data = {
        paperSize: 'A4',
        isLandscape: false,
        maxX: 200,
        maxY: 286,
        pageMarginTop: 5,
        pageMarginBottom: 5,
        pageMarginLeft: 5,
        pageMarginRight: 5
    };
    DEFAULT_DATA_JSON = '';
    computedData = {
        title: {
            en: '',
            zh_cn: '',
            zh_tw: ''
        },
        css: '',
        html: ''
    };
    pageSizeArray = [];
    configCoreElement = getElementById('brickPageConfigCore');
    init = ()=>{
        const { configCoreElement  } = this;
        configCoreElement.setAttribute(REPORT_KIND_PROPERTY, 'dice');
        const { getWrapElement  } = this;
        let wrapElement = getWrapElement({
            en: 'Paper',
            zh_cn: '纸张',
            zh_tw: '紙張'
        });
        this.initPaperSizeElements(wrapElement);
        this.initIsLandscapeElements(wrapElement);
        wrapElement = getWrapElement({
            en: 'Margin of page',
            zh_cn: '页边距',
            zh_tw: '頁邊距'
        });
        this.initPageMarginTopElements(wrapElement);
        this.initPageMarginBottomElements(wrapElement);
        this.initPageMarginLeftElements(wrapElement);
        this.initPageMarginRightElements(wrapElement);
        this.initCoreElements();
        this.initOtherElements();
        global.bindChangeLangEventForI18nElements();
        updateUIByCurrentLang();
    };
    getWrapElement = (strongI18n)=>{
        const { configCoreElement  } = this;
        const wrapElement = createElement('div');
        wrapElement.className = 'brickPageConfigCoreOptionRowWrap';
        configCoreElement.appendChild(wrapElement);
        const strongElement = createElement('strong');
        strongElement.innerHTML = getI18nInnerHTML(strongI18n);
        wrapElement.appendChild(strongElement);
        return wrapElement;
    };
    onRadioOptionChanged = (propertyName, value)=>{};
    initRadioGroupByStringValue = (radiosInfoArray, propertyName, radioElementArray, wrapElement)=>{
        const currentValue = this.data[propertyName];
        radiosInfoArray.forEach(({ value , i18nHtml  })=>{
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = propertyName;
            radioElement.value = value;
            if (currentValue === value) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = i18nHtml;
            radioElement.onclick = ()=>{
                this.data[propertyName] = value;
                this.onRadioOptionChanged(propertyName, value);
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = ()=>{
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            radioElementArray.push(radioElement);
        });
    };
    initRadioGroupWithLabelByStringValue = (radiosInfoArray, propertyName, radioElementArray, wrapLabelI18n)=>{
        const wrapElement = this.getWrapElement(wrapLabelI18n);
        this.initRadioGroupByStringValue(radiosInfoArray, propertyName, radioElementArray, wrapElement);
    };
    initRadioGroupByBooleanOrNumberValue = (radiosInfoArray, propertyName, radioElementArray, wrapElement)=>{
        const currentValue = this.data[propertyName];
        radiosInfoArray.forEach(({ value , i18nHtml  })=>{
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = propertyName;
            radioElement.value = value.toString();
            if (currentValue === value) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = i18nHtml;
            radioElement.onclick = ()=>{
                this.data[propertyName] = value;
                this.onRadioOptionChanged(propertyName, value);
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = ()=>{
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            radioElementArray.push(radioElement);
        });
    };
    initRadioGroupWithLabelByBooleanOrNumberValue = (radiosInfoArray, propertyName, radioElementArray, wrapLabelI18n)=>{
        const wrapElement = this.getWrapElement(wrapLabelI18n);
        this.initRadioGroupByBooleanOrNumberValue(radiosInfoArray, propertyName, radioElementArray, wrapElement);
    };
    paperSizeRadioArray = [];
    initPaperSizeElements = (wrapElement)=>{
        const { data: { paperSize  } , paperSizeRadioArray  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Size:',
            zh_cn: '纸型：',
            zh_tw: '紙型：'
        });
        labelElement.setAttribute('for', 'paperSize');
        this.pageSizeArray.forEach((paperSizeValue)=>{
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.value = paperSizeValue;
            radioElement.name = 'paperSize';
            if (paperSize === paperSizeValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = paperSizeValue;
            radioElement.onclick = ()=>{
                this.data.paperSize = paperSizeValue;
                this.onPageSizeChanged(paperSizeValue);
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = ()=>{
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            paperSizeRadioArray.push(radioElement);
        });
    };
    isLandscapeRadioArray = [];
    initIsLandscapeElements = (wrapElement)=>{
        const { data: { isLandscape  } , isLandscapeRadioArray  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Orientation:',
            zh_cn: '方向：',
            zh_tw: '方向：'
        });
        labelElement.setAttribute('for', 'isLandscape');
        [
            true,
            false
        ].forEach((isLandscapeValue)=>{
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = 'isLandscape';
            radioElement.value = isLandscapeValue.toString();
            if (isLandscape === isLandscapeValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = getI18nInnerHTML(isLandscapeValue ? {
                en: 'landscape',
                zh_cn: '横向',
                zh_tw: '橫向'
            } : {
                en: 'portrait',
                zh_cn: '纵向',
                zh_tw: '縱向'
            });
            radioElement.onclick = ()=>{
                this.data.isLandscape = isLandscapeValue;
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = ()=>{
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            isLandscapeRadioArray.push(radioElement);
        });
    };
    pageMarginTopElement = createElement('input');
    initPageMarginTopElements = (wrapElement)=>{
        const { data: { pageMarginTop  } , pageMarginTopElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Top:',
            zh_cn: '上：',
            zh_tw: '上：'
        });
        pageMarginTopElement.value = pageMarginTop.toString();
        pageMarginTopElement.type = 'number';
        pageMarginTopElement.setAttribute('min', '0');
        const changeValue = ()=>{
            this.data.pageMarginTop = parseInt(pageMarginTopElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        pageMarginTopElement.onchange = changeValue;
        pageMarginTopElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(pageMarginTopElement);
    };
    pageMarginBottomElement = createElement('input');
    initPageMarginBottomElements = (wrapElement)=>{
        const { data: { pageMarginBottom  } , pageMarginBottomElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Bottom:',
            zh_cn: '下：',
            zh_tw: '下：'
        });
        pageMarginBottomElement.value = pageMarginBottom.toString();
        pageMarginBottomElement.type = 'number';
        pageMarginBottomElement.setAttribute('min', '0');
        const changeValue = ()=>{
            this.data.pageMarginBottom = parseInt(pageMarginBottomElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        pageMarginBottomElement.onchange = changeValue;
        pageMarginBottomElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(pageMarginBottomElement);
    };
    pageMarginLeftElement = createElement('input');
    initPageMarginLeftElements = (wrapElement)=>{
        const { data: { pageMarginLeft  } , pageMarginLeftElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Left:',
            zh_cn: '左：',
            zh_tw: '左：'
        });
        pageMarginLeftElement.value = pageMarginLeft.toString();
        pageMarginLeftElement.type = 'number';
        pageMarginLeftElement.setAttribute('min', '0');
        const changeValue = ()=>{
            this.data.pageMarginLeft = parseInt(pageMarginLeftElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        pageMarginLeftElement.onchange = changeValue;
        pageMarginLeftElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(pageMarginLeftElement);
    };
    pageMarginRightElement = createElement('input');
    initPageMarginRightElements = (wrapElement)=>{
        const { data: { pageMarginRight  } , pageMarginRightElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Right:',
            zh_cn: '右：',
            zh_tw: '右：'
        });
        pageMarginRightElement.value = pageMarginRight.toString();
        pageMarginRightElement.type = 'number';
        pageMarginRightElement.setAttribute('min', '0');
        const changeValue = ()=>{
            this.data.pageMarginRight = parseInt(pageMarginRightElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        pageMarginRightElement.onchange = changeValue;
        pageMarginRightElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(pageMarginRightElement);
    };
    build = ()=>{
        let { data: { paperSize , isLandscape , maxX , maxY , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight ,  } ,  } = this;
        const PAPER_WIDTH_A3 = 297;
        const PAPER_HEIGHT_A3 = 420;
        const PAPER_WIDTH_A4 = 210;
        const PAPER_HEIGHT_A4 = 297;
        getElementById('brickPageIframe').contentWindow?.postMessage({
            command: 'changePaperSize',
            data: {
                paperSize
            }
        }, '*');
        let paperWidth = 0;
        let paperHeight = 0;
        switch(paperSize){
            case 'A3':
                paperWidth = PAPER_WIDTH_A3;
                paperHeight = PAPER_HEIGHT_A3;
                break;
            case 'A4':
                paperWidth = PAPER_WIDTH_A4;
                paperHeight = PAPER_HEIGHT_A4;
                break;
            default:
                break;
        }
        const pageMarginHorizontal = pageMarginLeft + pageMarginRight;
        const pageMarginVertical = pageMarginTop + pageMarginBottom;
        // if (isLandscape) {
        //     maxX = paperHeight - Math.max(10, pageMarginHorizontal);
        //     maxY = paperWidth - Math.max(10, pageMarginVertical);
        // } else {
        //     maxX = paperWidth - Math.max(10, pageMarginHorizontal);
        //     maxY = paperHeight - Math.max(10, pageMarginVertical);
        // }
        if (isLandscape) {
            maxX = paperHeight - pageMarginHorizontal;
            maxY = paperWidth - pageMarginVertical;
        } else {
            maxX = paperWidth - pageMarginHorizontal;
            maxY = paperHeight - pageMarginVertical;
        }
        this.data.maxX = maxX;
        this.data.maxY = maxY;
        this.countDataAndComputedData();
        const title = this.computedData.title;
        const titleElement = getTitleElement();
        titleElement.i18n = title;
        titleElement.innerHTML = title[getCurrentLang()];
        const { getHtml , getCss  } = this;
        const html = getHtml();
        const css = getCss();
        getElementById('brickPageIframe').contentWindow?.postMessage({
            command: 'build',
            data: {
                title,
                html,
                css
            }
        }, '*');
        this.saveConfig();
    };
    loadConfig = ()=>{
        const currentConfig = getCurrentPageLocalStorage();
        if (currentConfig.length === 0) {
            this.loadDefaultConfig();
            return;
        }
        this.updateData(JSON.parse(currentConfig));
    };
    saveConfig = ()=>{
        setCurrentPageLocalStorage(JSON.stringify(this.data));
    };
    loadDefaultConfig = ()=>{
        this.updateData(JSON.parse(this.DEFAULT_DATA_JSON));
    };
    getData = ()=>{
        return this.data;
    };
    setData = (newData)=>{
        this.updateData(newData);
    };
    buildAfterChangeParameter = true;
    saveConfigAndBuildIfAllowed = ()=>{
        if (!this.buildAfterChangeParameter) {
            return;
        }
        this.saveConfig();
        this.build();
    };
    updateData = (newData)=>{
        const { paperSize , isLandscape , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight , diceKind ,  } = newData;
        const { paperSizeRadioArray , isLandscapeRadioArray , pageMarginTopElement , pageMarginBottomElement , pageMarginLeftElement , pageMarginRightElement ,  } = this;
        paperSizeRadioArray.forEach((element)=>{
            element.checked = element.value === paperSize;
        });
        isLandscapeRadioArray.forEach((element)=>{
            element.checked = element.value === isLandscape.toString();
        });
        pageMarginTopElement.value = pageMarginTop;
        pageMarginBottomElement.value = pageMarginBottom;
        pageMarginLeftElement.value = pageMarginLeft;
        pageMarginRightElement.value = pageMarginRight;
        this.data.paperSize = paperSize;
        this.data.isLandscape = isLandscape;
        this.data.pageMarginTop = pageMarginTop;
        this.data.pageMarginBottom = pageMarginBottom;
        this.data.pageMarginLeft = pageMarginLeft;
        this.data.pageMarginRight = pageMarginRight;
        this.updateOtherData(newData);
        this.build();
    };
}
class PokerBase extends BrickBase {
    countDataAndComputedData = ()=>{
        let { data: { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pokerWidth , pokerHeight , pageMarginTop , pageMarginLeft , pokerWidth: CARD_WIDTH , pokerHeight: CARD_HEIGHT , fontSize , backFontSize , pokerKind ,  } ,  } = this;
        const ROW_COUNT = Math.floor(MAX_Y / pokerHeight);
        const COLUMN_COUNT = Math.floor(MAX_X / pokerWidth);
        const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
        this.countPokerDataAndComputedData(pokerKind, COUNT_PER_PAGE);
        const { getForePageHtml , getBackPageHtml  } = this;
        this.computedData.html = getForePageHtml().concat(getBackPageHtml());
        this.computedData.css = `/* common.css */
    * { margin:0;border:0;padding:0; }
    * { box-sizing:border-box; }

    /* landscape 横向 portrait 纵向*/ 
    @media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; } }
    page:not(page:last-child){page-break-after:always;}

    page { width:${MAX_X}mm;height:${MAX_Y}mm; margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm;}
    page { display:block;overflow:hidden; }

    page { font-weight:bolder;dominant-baseline:middle;text-anchor:start; }

    page.forePage{font-family:'Times New Roman', 'KaiTi';font-size:${fontSize};}
    page.backPage{font-family:'Times New Roman', 'KaiTi';font-size:${backFontSize};}
    
    /* page > row > cell > top/bottom/center > text.top-left/.top-right/.bottom-left/.bottom-right */
    /* top > text.top-left/.top-right */
    /* bottom > text.bottom-left/.bottom-right */
    /* center >  */
    row {display:flex;width:auto;height:${CARD_HEIGHT}mm;}
    cell {width:${CARD_WIDTH}mm;height:${CARD_HEIGHT}mm;border-radius:${CARD_WIDTH * 3 / 40}mm;border:1px solid #aaaaaa;overflow:hidden;}
    cell{display:inline-flex;flex-direction:column;justify-content:space-between;}
    top,bottom{display:flex;justify-content:space-between;align-items:center;}
    center {flex:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}
    text{display:block;vertical-align:center;}

    .top-left, .bottom-right{padding-left:${CARD_WIDTH * 3 / 40}mm;}
    .top-right, .bottom-left{padding-right:${CARD_WIDTH * 3 / 40}mm;}

    bottom {
      transform:rotate(180deg);
      -ms-transform:rotate(180deg); 	/* IE 9 */
      -moz-transform:rotate(180deg); 	/* Firefox */
      -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
      -o-transform:rotate(180deg); 	/* Opera */ 
      
      transform-origin:center center;
      -ms-transform-origin:center center;
      -moz-transform-origin:center center;
      -webkit-transform-origin:center center;
      -o-transform-origin:center center;
    }
    
    /* https://blog.csdn.net/scotfield_msn/article/details/52564829 */
    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */
    /* 黑/红/橙/黄/绿/青/蓝/紫/粉/淡绿/	*/
    /* 黑/紅/橙/黃/綠/青/藍/紫/粉/淡綠/	*/
    /*
      [edu-color="1"] {color:#000000;}
      [edu-color="2"] {color:#FF0000;}
      [edu-color="3"] {color:#FF7F00;}
      [edu-color="4"] {color:#FFFF00;}
      [edu-color="5"] {color:#00FF00;}
      [edu-color="6"] {color:#00FFFF;}
      [edu-color="7"] {color:#0000FF;}
      [edu-color="8"] {color:#8B00FF;}
      [edu-color="9"] {color:#F19EC2;}
      [edu-color="10"]{color:#6B8E23;}
    */
    /* [edu-color="3"] {color:#FFFF00;} 黄色 黃色 yellow */
    
    [edu-color="1"] {color:#000000;} /* 黑色 黑色 black */
    [edu-color="2"] {color:#FF0000;} /* 红色 紅色 red */
    [edu-color="3"] {color:#0000FF;} /* 蓝色 藍色 blue */
    [edu-color="4"] {color:#CCCC00;} /* 黄 黃 yellow */
    [edu-color="5"] {color:#00FF00;} /* 绿色 綠色 green */
    [edu-color="6"] {color:#00FFFF;} /* 青色 青色 cyan */
    [edu-color="7"] {color:#8B00FF;} /* 紫色 紫色 purple */
    [edu-color="8"] {color:#F19EC2;} /* 粉红 粉紅 pink */
    [edu-color="9"] {color:#6B8E23;} /* 淡绿 淡綠 light green */
    [edu-color="10"]{color:#FF7F00;} /* 橙色 橙色 orange */
    
    [edu-color="-1"] {color:#DDDDDD;}
    `.concat(this.computedData.pokerCss);
    };
    updateOtherDataOfPoker = (_newData)=>{};
    initCoreElements = ()=>{
        const { configCoreElement  } = this;
        configCoreElement.setAttribute(REPORT_KIND_PROPERTY, 'poker');
        const { getWrapElement  } = this;
        let wrapElement = getWrapElement({
            en: 'Poker size',
            zh_cn: '扑克尺寸',
            zh_tw: '撲克尺寸'
        });
        this.initPokerWidthElements(wrapElement);
        this.initPokerHeightElements(wrapElement);
        this.appendPokerSizeButtons(wrapElement);
        wrapElement = getWrapElement({
            en: 'Font size',
            zh_cn: '字号',
            zh_tw: '字型大小'
        });
        this.initFontSizeElements(wrapElement);
        this.initBackFontSizeElements(wrapElement);
        wrapElement = getWrapElement({
            en: 'Poker Kind',
            zh_cn: '扑克类型',
            zh_tw: '撲克類型'
        });
        this.initPokerKindElements(wrapElement);
    };
    onPageSizeChanged = (newPageSize)=>{
        switch(newPageSize){
            case 'A3':
                this.data.pokerWidth = 48;
                this.data.pokerHeight = 68;
                break;
            case 'A4':
                this.data.pokerWidth = 40;
                this.data.pokerHeight = 56;
                break;
            default:
                break;
        }
        this.pokerWidthElement.value = this.data.pokerWidth.toString();
        this.pokerHeightElement.value = this.data.pokerHeight.toString();
    };
    pokerWidthElement = createElement('input');
    initPokerWidthElements = (wrapElement)=>{
        const { data: { pokerWidth  } , pokerWidthElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Width:',
            zh_cn: '宽：',
            zh_tw: '寬：'
        });
        pokerWidthElement.value = pokerWidth.toString();
        pokerWidthElement.type = 'number';
        pokerWidthElement.setAttribute('min', '0');
        const changeValue = ()=>{
            this.data.pokerWidth = parseInt(pokerWidthElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        pokerWidthElement.onchange = changeValue;
        pokerWidthElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(pokerWidthElement);
    };
    pokerHeightElement = createElement('input');
    initPokerHeightElements = (wrapElement)=>{
        const { data: { pokerHeight  } , pokerHeightElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Height:',
            zh_cn: '高：',
            zh_tw: '高：'
        });
        pokerHeightElement.value = pokerHeight.toString();
        pokerHeightElement.type = 'number';
        pokerHeightElement.setAttribute('min', '0');
        const changeValue = ()=>{
            this.data.pokerHeight = parseInt(pokerHeightElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        pokerHeightElement.onchange = changeValue;
        pokerHeightElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(pokerHeightElement);
    };
    fontSizeElement = createElement('input');
    initFontSizeElements = (wrapElement)=>{
        const { data: { fontSize  } , fontSizeElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Front:',
            zh_cn: '正面：',
            zh_tw: '正面：'
        });
        fontSizeElement.type = 'text';
        fontSizeElement.value = fontSize;
        const changeValue = ()=>{
            this.data.fontSize = fontSizeElement.value;
            this.saveConfigAndBuildIfAllowed();
        };
        fontSizeElement.onchange = changeValue;
        fontSizeElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(fontSizeElement);
    };
    backFontSizeElement = createElement('input');
    initBackFontSizeElements = (wrapElement)=>{
        const { data: { backFontSize  } , backFontSizeElement  } = this;
        const labelElement = createElement('label');
        wrapElement.appendChild(labelElement);
        labelElement.innerHTML = getI18nInnerHTML({
            en: 'Back:',
            zh_cn: '背面：',
            zh_tw: '背面：'
        });
        backFontSizeElement.type = 'text';
        backFontSizeElement.value = backFontSize;
        const changeValue = ()=>{
            this.data.backFontSize = backFontSizeElement.value;
            this.saveConfigAndBuildIfAllowed();
        };
        backFontSizeElement.onchange = changeValue;
        backFontSizeElement.onblur = changeValue;
        wrapElement.appendChild(labelElement);
        wrapElement.appendChild(backFontSizeElement);
    };
    pokerKindElementArray = [];
    appendPokerSizeButtons = (wrapElement)=>{
        [
            {
                i18n: {
                    en: 'Small',
                    zh_cn: '小',
                    zh_tw: '小'
                },
                width: 40,
                height: 56
            },
            {
                i18n: {
                    en: 'Big',
                    zh_cn: '大',
                    zh_tw: '大'
                },
                width: 48,
                height: 68
            }, 
        ].forEach(({ i18n , width , height  }, i)=>{
            const buttonElement = createElement('button');
            buttonElement.innerHTML = getI18nInnerHTML(i18n);
            buttonElement.type = 'button';
            buttonElement.setAttribute('edu-to-width', width.toString());
            buttonElement.setAttribute('edu-to-height', height.toString());
            buttonElement.name = 'pokerSizeButtons';
            buttonElement.onclick = (event)=>{
                const widthValue = parseInt(buttonElement.getAttribute('edu-to-width'), 0);
                const heightValue = parseInt(buttonElement.getAttribute('edu-to-height'), 0);
                this.data.pokerWidth = widthValue;
                this.data.pokerHeight = heightValue;
                this.pokerWidthElement.value = widthValue.toString();
                this.pokerHeightElement.value = heightValue.toString();
                this.saveConfigAndBuildIfAllowed();
                return stopEventBubble(event);
            };
            wrapElement.appendChild(buttonElement);
        });
    };
    updateOtherData = (newData)=>{
        const { pokerWidth , pokerHeight , fontSize , backFontSize , pokerKind ,  } = newData;
        const { pokerWidthElement , pokerHeightElement , fontSizeElement , backFontSizeElement , pokerKindElementArray ,  } = this;
        pokerKindElementArray.forEach((element)=>{
            element.checked = element.value === pokerKind.toString();
        });
        pokerWidthElement.value = pokerWidth;
        pokerHeightElement.value = pokerHeight;
        fontSizeElement.value = fontSize;
        backFontSizeElement.value = backFontSize;
        this.data.pokerWidth = pokerWidth;
        this.data.pokerHeight = pokerHeight;
        this.data.fontSize = fontSize;
        this.data.backFontSize = backFontSize;
        this.data.pokerKind = pokerKind;
        this.updateOtherDataOfPoker(newData);
    };
    constructor(appendData, otherComputedData){
        super({
            pokerWidth: 40,
            pokerHeight: 56,
            fontSize: '32px',
            backFontSize: '24px',
            pokerKind: 1,
            ...appendData
        }, {
            backCover: '',
            count: 32,
            pokerCss: '',
            ...otherComputedData
        });
    }
}
