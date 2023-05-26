// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const DOMAIN = 'edu.sonya.cc';
const FILENAME_POSTFIX = DOMAIN.concat('_');
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
const getChangeLangNotifyArrayOfCurrentPage1 = ()=>CHANGE_LANG_NOTIFY_ARRAY;
class Global {
    IS_MOBILE = navigator.userAgent.toLowerCase().indexOf(' mobile ') > -1;
    body = getBodyElement();
    langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage1();
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
class DPIHelper {
    dpiArray = [];
    dpiX = 0;
    mmToPxScale = 0;
    pxToMmScale = 0;
    constructor(){
        const screen = window.screen;
        const { dpiArray  } = this;
        if (screen.deviceXDPI) {
            dpiArray.push(screen.deviceXDPI);
            dpiArray.push(screen.deviceYDPI);
        } else {
            const div = document.createElement("div");
            div.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
            document.body.appendChild(div);
            dpiArray.push(parseInt(div.offsetWidth.toString()));
            dpiArray.push(parseInt(div.offsetHeight.toString()));
            document.body.removeChild(div);
        }
        const dpiX = dpiArray[0];
        this.dpiX = dpiX;
        this.mmToPxScale = dpiX / 25.4;
        this.pxToMmScale = 25.4 / dpiX;
    }
    convertPxToMm = (px)=>px / this.dpiX * 25.4;
    convertMmToPx = (mm)=>mm / 25.4 * this.dpiX;
    getMmToPxScale = ()=>this.mmToPxScale;
    getPxToMmScale = ()=>this.pxToMmScale;
}
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
    brickBaseIdPrefix = 'brickPageBase';
    init = ()=>{
        const { configCoreElement , brickBaseIdPrefix  } = this;
        configCoreElement.setAttribute(REPORT_KIND_PROPERTY, 'dice');
        const { getWrapElement  } = this;
        let wrapElement = getWrapElement({
            en: 'Paper',
            zh_cn: '纸张',
            zh_tw: '紙張'
        });
        wrapElement.id = `${brickBaseIdPrefix}PaperSizeOrDirectionWrap`;
        this.initPaperSizeElements(wrapElement);
        this.initIsLandscapeElements(wrapElement);
        wrapElement = getWrapElement({
            en: 'Margin of page',
            zh_cn: '页边距',
            zh_tw: '頁邊距'
        });
        wrapElement.id = `${brickBaseIdPrefix}PaperMaginWrap`;
        this.initPageMarginTopElements(wrapElement);
        this.initPageMarginBottomElements(wrapElement);
        this.initPageMarginLeftElements(wrapElement);
        this.initPageMarginRightElements(wrapElement);
        this.initCoreElements();
        this.initOtherElements();
        global.bindChangeLangEventForI18nElements();
        updateUIByCurrentLang();
        getChangeLangNotifyArrayOfCurrentPage().push(()=>this.build());
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
        const { data: { paperSize  } , paperSizeRadioArray , brickBaseIdPrefix  } = this;
        const span = createElement('span');
        span.id = `${brickBaseIdPrefix}PaperSizeWrap`;
        wrapElement.appendChild(span);
        const labelElement = createElement('label');
        span.appendChild(labelElement);
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
            span.appendChild(radioElement);
            span.appendChild(spanElement);
            paperSizeRadioArray.push(radioElement);
        });
    };
    isLandscapeRadioArray = [];
    initIsLandscapeElements = (wrapElement)=>{
        const { data: { isLandscape  } , isLandscapeRadioArray , brickBaseIdPrefix  } = this;
        const span = createElement('span');
        span.id = `${brickBaseIdPrefix}PaperSizeWrap`;
        wrapElement.appendChild(span);
        const labelElement = createElement('label');
        span.appendChild(labelElement);
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
            span.appendChild(radioElement);
            span.appendChild(spanElement);
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
        if (isLandscape) {
            maxX = paperHeight - pageMarginHorizontal;
            maxY = paperWidth - pageMarginVertical;
        } else {
            maxX = paperWidth - pageMarginHorizontal;
            maxY = paperHeight - pageMarginVertical;
        }
        this.data.maxX = maxX;
        this.data.maxY = maxY;
        const dpiHelper = new DPIHelper();
        this.pxToMmScale = dpiHelper.getPxToMmScale();
        this.mmToPxScale = dpiHelper.getMmToPxScale();
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
    mmToPxScale = 0;
    pxToMmScale = 0;
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
    getAutomaticPaginationHtmlFromChildList = (list, MAX_X, MAX_Y)=>{
        if (list.length === 0) {
            return '';
        }
        let html = '<page>';
        let usedX = 0;
        let usedY = 0;
        let currentRowHeight = 0;
        list.forEach((child)=>{
            let WIDTH = 0, HEIGHT = 0;
            if (child instanceof SVGElement) {
                WIDTH = parseFloat(child.getAttribute('width').replace('mm', ''));
                HEIGHT = parseFloat(child.getAttribute('height').replace('mm', ''));
            } else {
                const style = child.getAttribute('style');
                if (style.indexOf('width:') > -1) {
                    WIDTH = parseFloat(style.split('width:')[1].split(';')[0].replace('mm', ''));
                }
                if (style.indexOf('height:') > -1) {
                    HEIGHT = parseFloat(style.split('height:')[1].split(';')[0].replace('mm', ''));
                }
            }
            let newPage = usedY + HEIGHT > MAX_Y;
            let newRow = false;
            if (!newPage && usedX + WIDTH > MAX_X) {
                usedY += currentRowHeight;
                if (usedY + HEIGHT > MAX_Y) {
                    newPage = true;
                } else {
                    newRow = true;
                }
            }
            if (newPage) {
                html += '</page><page>';
                usedX = 0;
                usedY = 0;
                currentRowHeight = 0;
            } else if (newRow) {
                usedX = 0;
                currentRowHeight = 0;
            }
            currentRowHeight = Math.max(currentRowHeight, HEIGHT);
            usedX += WIDTH;
            html += child.outerHTML;
        });
        html += '</page>';
        return html;
    };
    appendAutomaticPaginationControls = (wrapper, list, MAX_X, MAX_Y)=>{
        if (list.length === 0) {
            return;
        }
        let page = createElement('page');
        wrapper.appendChild(page);
        let usedX = 0;
        let usedY = 0;
        let currentRowHeight = 0;
        list.forEach((child)=>{
            let WIDTH = 0, HEIGHT = 0;
            if (child instanceof SVGElement) {
                WIDTH = parseFloat(child.getAttribute('width').replace('mm', ''));
                HEIGHT = parseFloat(child.getAttribute('height').replace('mm', ''));
            } else {
                const style = child.getAttribute('style');
                if (style.indexOf('width:') > -1) {
                    WIDTH = parseFloat(style.split('width:')[1].split(';')[0].replace('mm', ''));
                }
                if (style.indexOf('height:') > -1) {
                    HEIGHT = parseFloat(style.split('height:')[1].split(';')[0].replace('mm', ''));
                }
            }
            let newPage = usedY + HEIGHT > MAX_Y;
            let newRow = false;
            if (!newPage && usedX + WIDTH > MAX_X) {
                usedY += currentRowHeight;
                if (usedY + HEIGHT > MAX_Y) {
                    newPage = true;
                } else {
                    newRow = true;
                }
            }
            if (newPage) {
                page = createElement('page');
                wrapper.appendChild(page);
                usedX = 0;
                usedY = 0;
                currentRowHeight = 0;
            } else if (newRow) {
                usedX = 0;
                currentRowHeight = 0;
            }
            currentRowHeight = Math.max(currentRowHeight, HEIGHT);
            usedX += WIDTH;
            page.appendChild(child);
        });
    };
    formatDecile = (length)=>Math.floor(length * 10) / 10;
    formatCentile = (length)=>Math.floor(length * 100) / 100;
    formatMillimeter = (length)=>Math.floor(length * 1000) / 1000;
}
class BrickWithTableBase1 extends BrickBase {
    constructor(appendData, otherComputedData){
        super({
            list: [],
            ...appendData
        }, {
            ...otherComputedData
        });
    }
    initCoreElementsBeforeTable = ()=>{};
    initCoreElementsAfterTable = ()=>{};
    tableWrapElement = createElement('div');
    tableElement = createElement('table');
    tableHeadElement = createElement('thead');
    tableBodyElement = createElement('tbody');
    trHead = createElement('tr');
    trArray = [];
    idOrClassPrefix = 'brickPage';
    initCoreElements = ()=>{
        this.initUsableButtonsWrap();
        const configCoreElement = this.configCoreElement;
        const { tableWrapElement , tableElement , tableHeadElement , tableBodyElement , trHead , idOrClassPrefix  } = this;
        this.initCoreElementsBeforeTable();
        configCoreElement.appendChild(tableWrapElement);
        this.initCoreElementsAfterTable();
        tableWrapElement.id = `${idOrClassPrefix}TableWrap`;
        tableWrapElement.appendChild(tableElement);
        tableElement.appendChild(tableHeadElement);
        tableElement.appendChild(tableBodyElement);
        tableHeadElement.appendChild(trHead);
        this.appendTableHeadCell({
            en: 'Operations',
            zh_cn: '操作',
            zh_tw: '操作'
        });
        this.initTableHead();
    };
    updateOtherData = (newData)=>{
        const { list ,  } = newData;
        this.data.list.length = 0;
        list.forEach((item)=>this.data.list.push(item));
        this.showDataInTable();
    };
    initUsableButtonsWrap = ()=>{
        const configCoreElement = this.configCoreElement;
        const { idOrClassPrefix , data: { list  }  } = this;
        const usableButtonsWrap = createElement('div');
        configCoreElement.appendChild(usableButtonsWrap);
        usableButtonsWrap.id = `${idOrClassPrefix}UsableButtonsWrap`;
        this.getUsableList().forEach(({ strongI18n , buttonList  })=>{
            const wrapElement = this.getWrapElement(strongI18n);
            wrapElement.setAttribute('style', 'margin-bottom:1em;');
            usableButtonsWrap.appendChild(wrapElement);
            const span = createElement('span');
            span.setAttribute('style', 'display:inline-flex;');
            wrapElement.appendChild(span);
            buttonList.forEach(({ nameI18n , info  })=>{
                const button = createElement('button');
                span.appendChild(button);
                button.type = 'button';
                button.innerHTML = getI18nInnerHTML(nameI18n);
                button.onclick = (event)=>{
                    list.push(info);
                    this.createTableBodyRow(info);
                    this.build();
                    return stopEventBubble(event);
                };
            });
        });
    };
    showDataInTable = ()=>{
        const { tableBodyElement , trArray , data: { list  }  } = this;
        tableBodyElement.innerHTML = '';
        trArray.length = 0;
        list.forEach((item, index)=>{
            this.createTableBodyRow(item, tableBodyElement, index);
        });
    };
    appendTableHeadCell = (i18n)=>{
        const { trHead  } = this;
        const td = createElement('td');
        trHead.appendChild(td);
        td.innerHTML = getI18nInnerHTML(i18n);
    };
    appendReadonlyTd = (tr, innerHTML)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const span = createElement('span');
        td.appendChild(span);
        span.innerHTML = innerHTML;
    };
    appendTextareaTd = (tr, value, data, fieldName, valueKind = 'string')=>{
        const td = createElement('td');
        tr.appendChild(td);
        const textarea = createElement('textarea');
        td.appendChild(textarea);
        textarea.value = value;
        textarea.rows = 4;
        textarea.onchange = textarea.focus = ()=>{
            switch(valueKind){
                case 'numberArray':
                    data[fieldName] = textarea.value.split('\n').map((value)=>parseFloat(value));
                    break;
                case 'stringArray':
                    data[fieldName] = textarea.value.split('\n');
                    break;
                case 'string':
                default:
                    data[fieldName] = textarea.value;
                    break;
            }
            this.build();
        };
    };
    appendCheckboxTdWithoutText = (tr, value, data, fieldName)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const checkbox = createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = fieldName;
        checkbox.checked = value;
        td.appendChild(checkbox);
        checkbox.onchange = ()=>{
            data[fieldName] = checkbox.checked;
            this.build();
        };
    };
    appendNumberTd = (tr, value, data, fieldName, min, max, step)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const input = createElement('input');
        input.type = 'number';
        input.name = fieldName;
        input.value = value.toString();
        if (min) {
            input.min = min.toString();
        }
        if (max) {
            input.max = max.toString();
        }
        if (step) {
            input.step = step.toString();
        }
        td.appendChild(input);
        input.onchange = input.focus = ()=>{
            data[fieldName] = parseFloat(input.value);
            this.build();
        };
    };
    appendSelectTd = (tr, value, data, fieldName, options)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const lang = getCurrentLang();
        const select = createElement('select');
        options.forEach(({ value , captions  })=>{
            const option = createElement('option');
            option.value = value;
            option.setAttribute('i18n', getI18nInnerHTML(captions));
            option.innerHTML = captions[lang];
            select.appendChild(option);
        });
        select.value = value;
        td.appendChild(select);
        select.onchange = ()=>{
            data[fieldName] = select.value;
            this.build();
        };
    };
    appendOperationTd = (tr, data)=>{
        const td = createElement('td');
        tr.appendChild(td);
        '↑↓×'.split('').forEach((caption, index)=>{
            const button = createElement('button');
            td.appendChild(button);
            button.type = 'button';
            button.innerHTML = caption;
            if (index === 2) {
                button.className = 'warning';
            }
            button.onclick = (event)=>{
                const { tableBodyElement  } = this;
                const trList = tableBodyElement.children;
                const trCount = trList.length;
                let trIndex = -1;
                for(let i = 0; i < trCount; ++i){
                    if (trList[i] === tr) {
                        trIndex = i;
                        break;
                    }
                }
                if (trIndex === -1) {
                    return stopEventBubble(event);
                }
                const newlist = [];
                this.data.list.forEach((item)=>newlist.push(item));
                switch(index){
                    case 0:
                        if (trIndex === 0) {
                            return stopEventBubble(event);
                        }
                        const removeItemWhenMoveUp = newlist.splice(trIndex, 1);
                        newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
                        break;
                    case 1:
                        if (trIndex === trCount - 1) {
                            return stopEventBubble(event);
                        }
                        const removeItemWhenMoveDown = newlist.splice(trIndex, 1);
                        newlist.splice(trIndex + 1, 0, removeItemWhenMoveDown[0]);
                        break;
                    case 2:
                        newlist.splice(trIndex, 1);
                        break;
                    default:
                        break;
                }
                this.updateOtherData({
                    list: newlist
                });
                this.build();
                return stopEventBubble(event);
            };
        });
    };
    countDataAndComputedDataInBrickWithTableBase = ()=>{
        const { tableHeadElement , data: { list  }  } = this;
        tableHeadElement.style.display = list.length ? 'table-header-group' : 'none';
    };
}
var edu;
(function(edu) {
    let sonya1;
    (function(sonya1) {
        let cc;
        (function(cc) {
            let DiceKind;
            (function(DiceKind) {
                DiceKind[DiceKind["none"] = 0] = "none";
                DiceKind[DiceKind["four"] = 1] = "four";
                DiceKind[DiceKind["six"] = 2] = "six";
                DiceKind[DiceKind["eight"] = 4] = "eight";
                DiceKind[DiceKind["twelve"] = 8] = "twelve";
                DiceKind[DiceKind["twenty"] = 16] = "twenty";
                DiceKind[DiceKind["twentyFour"] = 32] = "twentyFour";
            })(DiceKind = cc.DiceKind || (cc.DiceKind = {}));
            cc.DiceKindCount = 8;
            cc.DefaultDiceKind = 63;
            const SVG_NS = 'http://www.w3.org/2000/svg';
            const SVG_XLINKNS = 'http://www.w3.org/1999/xlink';
            class DiceGenerator {
                batchCreate(createParameters) {
                    createParameters.forEach((createParameter, index)=>{
                        if (createParameter.id.length === 0) {
                            createParameter.id = `svg_index`;
                        }
                    });
                    return createParameters.map((createParameter)=>this.create(createParameter));
                }
                create({ id , diceKind , sideLength: SIDE_LENGTH , contents: CONTENTS , outerLineStyle: OUTER_LINE_STYLE , innerLineStyle: INNER_LINE_STYLE , textStyle: TEXT_STYLE , options: OPTIONS  }) {
                    if (id.length === 0) {
                        id = 'svg_0';
                    }
                    let FIXED_SIDE_LENGTH = SIDE_LENGTH;
                    let nested = false;
                    switch(diceKind){
                        case DiceKind.twentyFour:
                            FIXED_SIDE_LENGTH = 25;
                            nested = true;
                            break;
                        default:
                            break;
                    }
                    const svg = this.createSvg();
                    svg.setAttribute('id', id);
                    const viewBox = {
                        left: 999999,
                        right: 0,
                        top: 999999,
                        bottom: 0
                    };
                    const infos = [];
                    switch(diceKind){
                        case DiceKind.four:
                            CONTENTS.forEach((content)=>{
                                for(let i = 0; i < 3; ++i){
                                    infos.push({
                                        content,
                                        x: 0,
                                        y: 0,
                                        rotate: 0
                                    });
                                }
                            });
                            break;
                        default:
                            CONTENTS.forEach((content)=>{
                                infos.push({
                                    content,
                                    x: 0,
                                    y: 0,
                                    rotate: 0
                                });
                            });
                            break;
                    }
                    const mmToPxScale = new DPIHelper().getMmToPxScale();
                    switch(diceKind){
                        case DiceKind.four:
                            this.drawGraphsOfFourSidedDice(svg, FIXED_SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale);
                            this.drawTextsOfFourSidedDice(infos, FIXED_SIDE_LENGTH, CONTENTS);
                            break;
                        case DiceKind.six:
                            this.drawGraphsOfSixSidedDice(svg, FIXED_SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale);
                            this.drawTextsOfSixSidedDice(infos, FIXED_SIDE_LENGTH);
                            break;
                        case DiceKind.eight:
                            this.drawGraphsOfEightSidedDice(svg, FIXED_SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale);
                            this.drawTextsOfEightSidedDice(infos, FIXED_SIDE_LENGTH);
                            break;
                        case DiceKind.twelve:
                            this.drawGraphsOfTwelveSidedDice(svg, FIXED_SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale);
                            this.drawTextsOfTwelveSidedDice(infos, FIXED_SIDE_LENGTH);
                            break;
                        case DiceKind.twenty:
                            this.drawGraphsOfTwentySidedDice(svg, FIXED_SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale);
                            this.drawTextsOfTwentySidedDice(infos, FIXED_SIDE_LENGTH);
                            break;
                        case DiceKind.twentyFour:
                            this.drawGraphsOfTwentyFourSidedDice(svg, FIXED_SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale);
                            this.drawTextsOfTwentyFourSidedDice(infos, FIXED_SIDE_LENGTH);
                            break;
                        default:
                            break;
                    }
                    infos.forEach(({ content , x , y , rotate  })=>{
                        this.appendText(svg, TEXT_STYLE, content, x, y, rotate, null);
                    });
                    const width = `${viewBox.right}mm`;
                    const height = `${viewBox.bottom}mm`;
                    svg.setAttribute('width', width);
                    svg.setAttribute('height', height);
                    const outerSvg = createElement('wrap');
                    outerSvg.appendChild(svg);
                    outerSvg.setAttribute('id', id.concat('_wrapper'));
                    if (FIXED_SIDE_LENGTH !== SIDE_LENGTH) {
                        const scale = SIDE_LENGTH / FIXED_SIDE_LENGTH;
                        const widthOuterSvg = `${scale * viewBox.right}mm`;
                        const heightOuterSvg = `${scale * viewBox.bottom}mm`;
                        const transformScale = mmToPxScale * (scale - 1) / 2;
                        outerSvg.setAttribute('style', `width:${widthOuterSvg};height:${heightOuterSvg};display:inline-block;`);
                        svg.setAttribute('transform', `translate(${viewBox.right * transformScale}, ${viewBox.bottom * transformScale}) scale(${scale}, ${scale})`);
                        svg.setAttribute('transform-origin', 'center');
                    }
                    const css = 'page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}';
                    return {
                        id,
                        svg: nested ? outerSvg : svg,
                        css
                    };
                }
                createSvg = ()=>{
                    const svg = document.createElementNS(SVG_NS, 'svg');
                    svg.setAttribute('version', '1.1');
                    svg.setAttribute('xmlns', SVG_NS);
                    svg.setAttribute('xmlns:xlink', SVG_XLINKNS);
                    return svg;
                };
                drawGraphsOfFourSidedDice(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale) {
                    const HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
                    const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
                    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
                    x1 = SIDE_LENGTH * 0.5, x2 = x1 + SIDE_LENGTH, y1 = HEIGHT_OF_ONE, y2 = y1;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = 0, x2 = x1 + SIDE_LENGTH, y1 += HEIGHT_OF_ONE, y2 = y1;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = SIDE_LENGTH, x2 = SIDE_LENGTH * 0.5, y1 = 0, y2 = HEIGHT_OF_ONE;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 += SIDE_LENGTH * 0.5, x2 += SIDE_LENGTH * 0.5, y1 += HEIGHT_OF_ONE, y2 += HEIGHT_OF_ONE;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = SIDE_LENGTH * 0.5, x2 = SIDE_LENGTH, y1 = HEIGHT_OF_ONE, y2 = HEIGHT_OF_TWO;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    const EXTNED_LENGTH = 0.15 * SIDE_LENGTH;
                    const OFFSET_X = EXTNED_LENGTH * 0.5;
                    const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
                    x1 = 0, x2 = SIDE_LENGTH * 0.5, y1 = HEIGHT_OF_TWO, y2 = HEIGHT_OF_ONE;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 -= OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 = SIDE_LENGTH * 1 - EXTNED_LENGTH, y1 = y2, y2 = 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 += SIDE_LENGTH * 0.5, y1 = y2, y2 += HEIGHT_OF_ONE;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 = SIDE_LENGTH * 2 + OFFSET_X, y1 = y2, y2 = HEIGHT_OF_TWO - OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 -= SIDE_LENGTH, y1 = y2, y2 -= 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 = OFFSET_X, y1 = y2, y2 -= 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x2, x2 = 0, y1 = y2, y2 = HEIGHT_OF_TWO;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                }
                drawTextsOfFourSidedDice(infos, SIDE_LENGTH, CONTENTS) {
                    if (CONTENTS.join(',') === 'ˉ,ˊ,ˇ,ˋ') {
                        this.setSvgTextInfo(infos[0], SIDE_LENGTH * 24.5 / 25, SIDE_LENGTH * 22.5 / 25, 0);
                        this.setSvgTextInfo(infos[1], SIDE_LENGTH * 20.0 / 25, SIDE_LENGTH * 13.5 / 25, -120);
                        this.setSvgTextInfo(infos[2], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 15.0 / 25, 120);
                        this.setSvgTextInfo(infos[3], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 44.0 / 25, 0);
                        this.setSvgTextInfo(infos[4], SIDE_LENGTH * 18.5 / 25, SIDE_LENGTH * 36.0 / 25, 120);
                        this.setSvgTextInfo(infos[5], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 34.0 / 25, 60);
                        this.setSvgTextInfo(infos[6], SIDE_LENGTH * 12.5 / 25, SIDE_LENGTH * 44.0 / 25, 0);
                        this.setSvgTextInfo(infos[7], SIDE_LENGTH * 32.0 / 25, SIDE_LENGTH * 35.5 / 25, -120);
                        this.setSvgTextInfo(infos[8], SIDE_LENGTH * 20.0 / 25, SIDE_LENGTH * 33.0 / 25, -60);
                        this.setSvgTextInfo(infos[9], SIDE_LENGTH * 27.5 / 25, SIDE_LENGTH * 25.0 / 25, 180);
                        this.setSvgTextInfo(infos[10], SIDE_LENGTH * 8.0 / 25, SIDE_LENGTH * 35.0 / 25, -120);
                        this.setSvgTextInfo(infos[11], SIDE_LENGTH * 42.0 / 25, SIDE_LENGTH * 36.0 / 25, 120);
                    } else {
                        this.setSvgTextInfo(infos[0], SIDE_LENGTH * 24.5 / 25, SIDE_LENGTH * 19.0 / 25, 0);
                        this.setSvgTextInfo(infos[1], SIDE_LENGTH * 21.0 / 25, SIDE_LENGTH * 10.5 / 25, -120);
                        this.setSvgTextInfo(infos[2], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 12.5 / 25, 120);
                        this.setSvgTextInfo(infos[3], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 41.0 / 25, 0);
                        this.setSvgTextInfo(infos[4], SIDE_LENGTH * 18.5 / 25, SIDE_LENGTH * 34.0 / 25, 120);
                        this.setSvgTextInfo(infos[5], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 32.5 / 25, 60);
                        this.setSvgTextInfo(infos[6], SIDE_LENGTH * 12.5 / 25, SIDE_LENGTH * 41.0 / 25, 0);
                        this.setSvgTextInfo(infos[7], SIDE_LENGTH * 32.5 / 25, SIDE_LENGTH * 32.5 / 25, -120);
                        this.setSvgTextInfo(infos[8], SIDE_LENGTH * 19.5 / 25, SIDE_LENGTH * 31.0 / 25, -60);
                        this.setSvgTextInfo(infos[9], SIDE_LENGTH * 26.5 / 25, SIDE_LENGTH * 23.5 / 25, 180);
                        this.setSvgTextInfo(infos[10], SIDE_LENGTH * 8.5 / 25, SIDE_LENGTH * 32.5 / 25, -120);
                        this.setSvgTextInfo(infos[11], SIDE_LENGTH * 41.0 / 25, SIDE_LENGTH * 34.0 / 25, 120);
                    }
                }
                drawGraphsOfSixSidedDice(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale) {
                    const SIDE_LENGTH_PX = SIDE_LENGTH * mmToPxScale;
                    const duckTongueScale = 0.5;
                    const duckTongueHeightPx = SIDE_LENGTH_PX * 0.5;
                    const duckTongueHeight = SIDE_LENGTH * 0.5;
                    const pasteRegionHeightPx = SIDE_LENGTH_PX * 0.75;
                    const offsetX = SIDE_LENGTH_PX * 0.1;
                    const pasteRegionWidth = SIDE_LENGTH_PX - offsetX * 2;
                    console.log(SIDE_LENGTH, mmToPxScale, SIDE_LENGTH_PX);
                    const path = document.createElementNS(SVG_NS, 'path');
                    path.setAttribute('fill', 'none');
                    path.setAttribute('stroke', '#000000');
                    path.setAttribute('d', `M 0, ${duckTongueHeightPx + SIDE_LENGTH_PX} `.concat(`h ${SIDE_LENGTH_PX * 2} `, `l ${offsetX}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidth} `, `l ${offsetX}, ${pasteRegionHeightPx} `, `v -${SIDE_LENGTH_PX} `, `l ${offsetX}, -${duckTongueHeightPx} `, `h ${pasteRegionWidth} `, `l ${offsetX}, ${duckTongueHeightPx} `, `v ${SIDE_LENGTH_PX} `, `l ${offsetX}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidth} `, `l ${offsetX}, ${pasteRegionHeightPx} `, `v ${SIDE_LENGTH_PX} `, `h -${SIDE_LENGTH_PX * 2} `, `l -${offsetX}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidth} `, `l -${offsetX}, -${pasteRegionHeightPx} `, `v ${SIDE_LENGTH_PX} `, `l -${offsetX}, ${duckTongueHeightPx} `, `h -${pasteRegionWidth} `, `l -${offsetX}, -${duckTongueHeightPx} `, `v -${SIDE_LENGTH_PX} `, `l -${offsetX}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidth} `, `l -${offsetX}, -${pasteRegionHeightPx} `, ' z'));
                    svg.appendChild(path);
                    let X1 = 0, X2 = SIDE_LENGTH * 1, X3 = SIDE_LENGTH * 2, X4 = SIDE_LENGTH * 3, X5 = SIDE_LENGTH * 4, X6 = SIDE_LENGTH * 5;
                    let Y2 = duckTongueHeight, Y4 = Y2 + SIDE_LENGTH, Y5 = Y4 + SIDE_LENGTH, Y7 = Y5 + SIDE_LENGTH;
                    this.appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
                    this.appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
                    viewBox.left = 0;
                    viewBox.top = 0;
                    viewBox.right = SIDE_LENGTH * 5;
                    viewBox.bottom = SIDE_LENGTH * 3 + SIDE_LENGTH * duckTongueScale * 2;
                }
                drawTextsOfSixSidedDice(infos, SIDE_LENGTH) {
                    this.setSvgTextInfo(infos[0], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 77.0 / 25, 180);
                    this.setSvgTextInfo(infos[1], SIDE_LENGTH * 62.5 / 25, SIDE_LENGTH * 100.0 / 25, 90);
                    this.setSvgTextInfo(infos[2], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(infos[3], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 52.0 / 25, 180);
                    this.setSvgTextInfo(infos[4], SIDE_LENGTH * 62.5 / 25, SIDE_LENGTH * 52.5 / 25, -90);
                    this.setSvgTextInfo(infos[5], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 77.5 / 25, 0);
                }
                drawGraphsOfEightSidedDice(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale) {
                    const HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
                    const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
                    const BOTTOM = HEIGHT_OF_ONE * 3;
                    this.appendLine(svg, INNER_LINE_STYLE, 0, SIDE_LENGTH * 2, HEIGHT_OF_ONE, HEIGHT_OF_ONE, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 0.5, SIDE_LENGTH * 2.5, HEIGHT_OF_TWO, HEIGHT_OF_TWO, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 1, SIDE_LENGTH * 0.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 2, SIDE_LENGTH * 1.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 3, SIDE_LENGTH * 2, HEIGHT_OF_ONE, BOTTOM, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 1, SIDE_LENGTH * 1.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 1.5, SIDE_LENGTH * 2.5, 0, HEIGHT_OF_TWO, null);
                    this.appendLine(svg, INNER_LINE_STYLE, SIDE_LENGTH * 3, SIDE_LENGTH * 3.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
                    const EXTNED_LENGTH = 0.15 * SIDE_LENGTH;
                    const OFFSET_X = EXTNED_LENGTH * 0.5;
                    const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
                    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
                    x1 = 0, x2 = OFFSET_X, y1 = HEIGHT_OF_ONE, y2 = HEIGHT_OF_ONE - OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 = SIDE_LENGTH - OFFSET_X, y1 = y2;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 = SIDE_LENGTH, y1 = y2, y2 = HEIGHT_OF_ONE;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += SIDE_LENGTH * 0.5, y1 = y2, y2 = 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 = 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += SIDE_LENGTH * 0.5 - OFFSET_X, y1 = y2, y2 = HEIGHT_OF_ONE - OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += SIDE_LENGTH + EXTNED_LENGTH, y1 = y2, y2 += 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += SIDE_LENGTH * 0.5 - EXTNED_LENGTH + OFFSET_X, y1 = y2, y2 += HEIGHT_OF_ONE - OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= SIDE_LENGTH, y1 = y2, y2 += 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += OFFSET_X, y1 = y2, y2 += OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 += EXTNED_LENGTH - SIDE_LENGTH * 0.5 - OFFSET_X, y1 = y2, y2 += HEIGHT_OF_ONE - OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= EXTNED_LENGTH, y1 = y2, y2 += 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= SIDE_LENGTH * 0.5, y1 = y2, y2 -= HEIGHT_OF_ONE;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= SIDE_LENGTH - OFFSET_X * 2, y1 = y2, y2 += 0;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    x1 = x2, x2 -= OFFSET_X + SIDE_LENGTH * 0.5, y1 = y2, y2 -= OFFSET_Y + HEIGHT_OF_ONE;
                    this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);
                    viewBox.right = SIDE_LENGTH * 3.5 + EXTNED_LENGTH;
                    viewBox.bottom = BOTTOM;
                }
                drawTextsOfEightSidedDice(infos, SIDE_LENGTH) {
                    this.setSvgTextInfo(infos[0], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
                    this.setSvgTextInfo(infos[5], SIDE_LENGTH * 78.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
                    this.setSvgTextInfo(infos[3], SIDE_LENGTH * 25.5 / 25, SIDE_LENGTH * 38.0 / 25, 0);
                    this.setSvgTextInfo(infos[6], SIDE_LENGTH * 53.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
                    this.setSvgTextInfo(infos[2], SIDE_LENGTH * 50.0 / 25, SIDE_LENGTH * 38.0 / 25, 0);
                    this.setSvgTextInfo(infos[4], SIDE_LENGTH * 28.5 / 25, SIDE_LENGTH * 38.0 / 25, 180);
                    this.setSvgTextInfo(infos[1], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 39.0 / 25, 0);
                    this.setSvgTextInfo(infos[7], SIDE_LENGTH * 41.5 / 25, SIDE_LENGTH * 17.5 / 25, 180);
                }
                drawGraphsOfTwelveSidedDice(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale) {
                    const QUARTER_SIDE_LENGTH = SIDE_LENGTH * 0.25;
                    const RADIUS = SIDE_LENGTH * 0.2;
                    const ANGLE18 = Math.PI * 18 / 180;
                    const ANGLE36 = Math.PI * 36 / 180;
                    const ANGLE54 = Math.PI * 54 / 180;
                    const ANGLE72 = Math.PI * 72 / 180;
                    const SIN18 = Math.sin(ANGLE18);
                    const SIN36 = Math.sin(ANGLE36);
                    const SIN54 = Math.sin(ANGLE54);
                    const SIN72 = Math.sin(ANGLE72);
                    const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
                    const LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
                    const HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;
                    const SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
                    const SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
                    const SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
                    const SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
                    const SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN18;
                    const SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN36;
                    const SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN54;
                    const SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN72;
                    const SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;
                    const SECOND_GROUP_OFFSET = SIDE_LENGTH * 2 + LONG_SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH;
                    const TOP = SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                    for(let groupIndex = 0; groupIndex < 2; ++groupIndex){
                        const LEFT = (groupIndex === 0 ? 0 : SECOND_GROUP_OFFSET) + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                        let A1x = 0, A1y = 0;
                        let A2x = 0, A2y = 0;
                        let A3x = 0, A3y = 0;
                        let A4x = 0, A4y = 0;
                        let A5x = 0, A5y = 0;
                        let B1x = 0, B1y = 0;
                        let B2x = 0, B2y = 0;
                        let B5x = 0, B5y = 0;
                        let C1x = 0, C1y = 0;
                        let C2x = 0, C2y = 0;
                        let C5x = 0, C5y = 0;
                        let D1x = 0, D1y = 0;
                        let D2x = 0, D2y = 0;
                        let D5x = 0, D5y = 0;
                        let E1x = 0, E1y = 0;
                        let E2x = 0, E2y = 0;
                        let E5x = 0, E5y = 0;
                        let F1x = 0, F1y = 0;
                        let F2x = 0, F2y = 0;
                        let F5x = 0, F5y = 0;
                        if (groupIndex === 0) {
                            A1x = LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) + LONG_SIDE_LENGTH;
                            A2x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
                            A5x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
                            A3x = A2x - SIN18_MULTIPLY_SIDE_LENGTH;
                            A4x = A5x + SIN18_MULTIPLY_SIDE_LENGTH;
                            B1x = A5x - HALF_SIDE_LENGTH;
                            B2x = A5x + HALF_SIDE_LENGTH;
                            B5x = A1x - LONG_SIDE_LENGTH;
                            C1x = A2x + HALF_SIDE_LENGTH;
                            C5x = A2x - HALF_SIDE_LENGTH;
                            C2x = A1x + LONG_SIDE_LENGTH;
                            D1x = A3x + LONG_SIDE_LENGTH;
                            D2x = A3x + HALF_LONG_SIDE_LENGTH;
                            D5x = A2x + SIDE_LENGTH;
                            E1x = A4x + HALF_SIDE_LENGTH;
                            E2x = A4x - SIN18_MULTIPLY_SIDE_LENGTH;
                            E5x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
                            F1x = A4x - LONG_SIDE_LENGTH;
                            F5x = A4x - HALF_LONG_SIDE_LENGTH;
                            F2x = A5x - SIDE_LENGTH;
                            A1y = TOP + SIN72_MULTIPLY_SIDE_LENGTH;
                            A2y = A1y + SIN36_MULTIPLY_SIDE_LENGTH;
                            A5y = A2y;
                            A3y = A2y + SIN72_MULTIPLY_SIDE_LENGTH;
                            A4y = A3y;
                            B1y = TOP;
                            B2y = B1y;
                            B5y = A1y;
                            C1y = B1y;
                            C5y = B1y;
                            C2y = B5y;
                            D1y = A3y;
                            D2y = A3y + SIN36_MULTIPLY_SIDE_LENGTH;
                            D5y = A2y;
                            E2y = A4y + SIN72_MULTIPLY_SIDE_LENGTH;
                            E5y = E2y;
                            E1y = E2y + SIN36_MULTIPLY_SIDE_LENGTH;
                            F1y = A4y;
                            F2y = A2y;
                            F5y = D2y;
                        } else {
                            A1x = LEFT + LONG_SIDE_LENGTH + SIDE_LENGTH;
                            A2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
                            A3x = A1x - HALF_SIDE_LENGTH;
                            A5x = A1x - SIDE_LENGTH;
                            A4x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;
                            B1x = A5x + HALF_SIDE_LENGTH;
                            B2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
                            B5x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;
                            C2x = A2x + SIDE_LENGTH;
                            C1x = A1x + LONG_SIDE_LENGTH;
                            C5x = A1x + HALF_LONG_SIDE_LENGTH;
                            D2x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
                            D1x = D2x + SIDE_LENGTH;
                            D5x = D1x + SIN18_MULTIPLY_SIDE_LENGTH;
                            E2x = A3x - LONG_SIDE_LENGTH;
                            E1x = E2x + SIN18_MULTIPLY_SIDE_LENGTH;
                            E5x = E1x + SIDE_LENGTH;
                            F1x = A5x - LONG_SIDE_LENGTH;
                            F2x = A5x - HALF_LONG_SIDE_LENGTH;
                            F5x = A4x - SIDE_LENGTH;
                            A1y = TOP + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
                            A2y = A1y + SIN72_MULTIPLY_SIDE_LENGTH;
                            A3y = A1y + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
                            A4y = A2y;
                            A5y = A1y;
                            B1y = TOP;
                            B2y = A5y - SIN72_MULTIPLY_SIDE_LENGTH;
                            B5y = B2y;
                            C1y = A1y;
                            C2y = A2y;
                            C5y = A1y - SIN36_MULTIPLY_SIDE_LENGTH;
                            D5y = A3y;
                            D1y = D5y + SIN72_MULTIPLY_SIDE_LENGTH;
                            D2y = D1y;
                            E1y = D1y;
                            E2y = D5y;
                            E5y = D1y;
                            F1y = C1y;
                            F2y = C5y;
                            F5y = A4y;
                        }
                        const LINE_STYLE = groupIndex === 0 ? INNER_LINE_STYLE : OUTER_LINE_STYLE;
                        this.appendLine(svg, LINE_STYLE, A1x, A2x, A1y, A2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A2x, A3x, A2y, A3y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A3x, A4x, A3y, A4y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A4x, A5x, A4y, A5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A5x, A1x, A5y, A1y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A1x, B2x, A1y, B2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A1x, C5x, A1y, C5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A2x, C2x, A2y, C2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A2x, D5x, A2y, D5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A3x, D2x, A3y, D2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A3x, E5x, A3y, E5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A4x, E2x, A4y, E2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A4x, F5x, A4y, F5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A5x, F2x, A5y, F2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, A5x, B5x, A5y, B5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, B1x, B2x, B1y, B2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, B1x, B5x, B1y, B5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, C1x, C2x, C1y, C2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, C1x, C5x, C1y, C5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, D1x, D2x, D1y, D2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, D1x, D5x, D1y, D5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, E1x, E2x, E1y, E2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, E1x, E5x, E1y, E5y, viewBox);
                        this.appendLine(svg, LINE_STYLE, F1x, F2x, F1y, F2y, viewBox);
                        this.appendLine(svg, LINE_STYLE, F1x, F5x, F1y, F5y, viewBox);
                        let B6x = 0, B6y = 0;
                        let B7x = 0, B7y = 0;
                        let B8x = 0, B8y = 0;
                        let B9x = 0, B9y = 0;
                        let C6x = 0, C6y = 0;
                        let C7x = 0, C7y = 0;
                        let C8x = 0, C8y = 0;
                        let C9x = 0, C9y = 0;
                        let D6x = 0, D6y = 0;
                        let D7x = 0, D7y = 0;
                        let D8x = 0, D8y = 0;
                        let D9x = 0, D9y = 0;
                        let E6x = 0, E6y = 0;
                        let E7x = 0, E7y = 0;
                        let E8x = 0, E8y = 0;
                        let E9x = 0, E9y = 0;
                        let F6x = 0, F6y = 0;
                        let F7x = 0, F7y = 0;
                        let F8x = 0, F8y = 0;
                        let F9x = 0, F9y = 0;
                        if (groupIndex === 0) {
                            B6x = B5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B6y = B5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B7x = B1x - QUARTER_SIDE_LENGTH;
                            C8x = C1x + QUARTER_SIDE_LENGTH;
                            B7y = B1y;
                            C8y = B1y;
                            B8x = B1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B9x = B2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            C6x = C5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            C7x = C1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B8y = B1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B9y = B8y;
                            C6y = B8y;
                            C7y = B8y;
                            C9x = C2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            C9y = C2y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D8x = D1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D8y = D1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D9x = D2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D9y = D2y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E6x = E5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E6y = E5y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E7x = E1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E8x = E1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E7y = E1y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E8y = E7y;
                            E9x = E2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E9y = E2y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F6x = F5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F6y = F5y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F7x = F1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F7y = F1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F8x = F1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F8y = F1y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F9x = F2x - QUARTER_SIDE_LENGTH;
                            F9y = F2y;
                        }
                        if (groupIndex === 0) {
                            this.appendLine(svg, OUTER_LINE_STYLE, B5x, B6x, B5y, B6y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, B1x, B7x, B1y, B7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, B1x, B8x, B1y, B8y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, B2x, B9x, B2y, B9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C5x, C6x, C5y, C6y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C1x, C7x, C1y, C7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C1x, C8x, C1y, C8y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C2x, C9x, C2y, C9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, D1x, D8x, D1y, D8y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, D2x, D9x, D2y, D9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E5x, E6x, E5y, E6y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E1x, E7x, E1y, E7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E1x, E8x, E1y, E8y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E2x, E9x, E2y, E9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F5x, F6x, F5y, F6y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F1x, F7x, F1y, F7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F1x, F8x, F1y, F8y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F2x, F9x, F2y, F9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, B6x, B7x, B6y, B7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, B8x, B9x, B8y, B9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C6x, C7x, C6y, C7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C8x, C9x, C8y, C9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, D6x, D7x, D6y, D7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, D8x, D9x, D8y, D9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E6x, E7x, E6y, E7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E8x, E9x, E8y, E9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F6x, F7x, F6y, F7y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F8x, F9x, F8y, F9y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, B2x, C5x, B2y, C5y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, C2x, D5x, C2y, D5y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, D2x, E5x, D2y, E5y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, E2x, F5x, E2y, F5y, viewBox);
                            this.appendLine(svg, OUTER_LINE_STYLE, F2x, B5x, F2y, B5y, viewBox);
                        }
                        if (OPTIONS.withHole) {
                            let CC1x = (A1x + A2x + A3x + A4x + A5x) * 0.2, CC1y = (A1y + A2y + A3y + A4y + A5y) * 0.2;
                            let CC2x = (A1x + A5x + B1x + B2x + B5x) * 0.2, CC2y = (A1y + A5y + B1y + B2y + B5y) * 0.2;
                            let CC3x = (A1x + A2x + C1x + C2x + C5x) * 0.2, CC3y = (A1y + A2y + C1y + C2y + C5y) * 0.2;
                            let CC4x = (A2x + A3x + D1x + D2x + D5x) * 0.2, CC4y = (A2y + A3y + D1y + D2y + D5y) * 0.2;
                            let CC5x = (A3x + A4x + E1x + E2x + E5x) * 0.2, CC5y = (A3y + A4y + E1y + E2y + E5y) * 0.2;
                            let CC6x = (A4x + A5x + F1x + F2x + F5x) * 0.2, CC6y = (A4y + A5y + F1y + F2y + F5y) * 0.2;
                            this.appendCircle(svg, INNER_LINE_STYLE, CC1x, CC1y, RADIUS, null);
                            this.appendCircle(svg, INNER_LINE_STYLE, CC2x, CC2y, RADIUS, null);
                            this.appendCircle(svg, INNER_LINE_STYLE, CC3x, CC3y, RADIUS, null);
                            this.appendCircle(svg, INNER_LINE_STYLE, CC4x, CC4y, RADIUS, null);
                            this.appendCircle(svg, INNER_LINE_STYLE, CC5x, CC5y, RADIUS, null);
                            this.appendCircle(svg, INNER_LINE_STYLE, CC6x, CC6y, RADIUS, null);
                        }
                    }
                }
                drawTextsOfTwelveSidedDice(infos, SIDE_LENGTH) {
                    this.setSvgTextInfo(infos[0], SIDE_LENGTH * 58.5 / 25, SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(infos[1], SIDE_LENGTH * 130.0 / 25, SIDE_LENGTH * 90.0 / 25, 180);
                    this.setSvgTextInfo(infos[2], SIDE_LENGTH * 170.0 / 25, SIDE_LENGTH * 90.0 / 25, 180);
                    this.setSvgTextInfo(infos[3], SIDE_LENGTH * 118.0 / 25, SIDE_LENGTH * 50.0 / 25, 180);
                    this.setSvgTextInfo(infos[4], SIDE_LENGTH * 185.0 / 25, SIDE_LENGTH * 50.0 / 25, 180);
                    this.setSvgTextInfo(infos[5], SIDE_LENGTH * 150.5 / 25, SIDE_LENGTH * 25.0 / 25, 180);
                    this.setSvgTextInfo(infos[6], SIDE_LENGTH * 157.5 / 25, SIDE_LENGTH * 30.0 / 25, 0);
                    this.setSvgTextInfo(infos[7], SIDE_LENGTH * 125.0 / 25, SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(infos[8], SIDE_LENGTH * 190.0 / 25, SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(infos[9], SIDE_LENGTH * 136.5 / 25, SIDE_LENGTH * 90.0 / 25, 0);
                    this.setSvgTextInfo(infos[10], SIDE_LENGTH * 177.0 / 25, SIDE_LENGTH * 90.0 / 25, 0);
                    this.setSvgTextInfo(infos[11], SIDE_LENGTH * 52.0 / 25, SIDE_LENGTH * 50.0 / 25, 180);
                }
                drawGraphsOfTwentySidedDice(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale) {
                    const pasteRegion = SIDE_LENGTH * 0.2;
                    const pasteRegionPx = pasteRegion * mmToPxScale;
                    const ANGLE60 = Math.PI * 60 / 180;
                    const SIN60 = Math.sin(ANGLE60);
                    const COS60 = Math.cos(ANGLE60);
                    const OneX = SIDE_LENGTH * COS60;
                    const OneY = SIDE_LENGTH * SIN60;
                    const pasteRegionShortBiasX = pasteRegion * COS60;
                    const pasteRegionShortBiasY = pasteRegion * SIN60;
                    const pasteRegionLongBias = SIDE_LENGTH * (1 - 0.2);
                    const pasteRegionLongBiasX = pasteRegionLongBias * COS60;
                    const pasteRegionLongBiasY = pasteRegionLongBias * SIN60;
                    const TwoY = OneY * 2;
                    const ThreeY = OneY * 3;
                    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
                    let FIVE_SIDE = SIDE_LENGTH * 5;
                    x1 = pasteRegionLongBiasX + pasteRegion, x2 = x1 + FIVE_SIDE;
                    y1 = OneY, y2 = y1;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 = x1 - OneX, x2 = x1 + FIVE_SIDE;
                    y1 += OneY, y2 = y1;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 -= OneX, x2 = x1 - OneX;
                    y1 = OneY, y2 = TwoY;
                    for(let i = 0; i < 5; ++i){
                        x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
                        this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    }
                    x1 = pasteRegionShortBiasX, x2 = x1 + OneX;
                    y1 = TwoY, y2 = ThreeY;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 += OneX, x2 += OneX * 2;
                    y1 = OneY, y2 = y1 + TwoY;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 -= OneX;
                    y1 = 0;
                    for(let i1 = 0; i1 < 3; ++i1){
                        x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
                        this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    }
                    x1 += SIDE_LENGTH, x2 += OneX;
                    y2 = TwoY;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    x1 += SIDE_LENGTH, x2 += OneX;
                    y2 = OneY;
                    this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
                    const OneXPx = OneX * mmToPxScale;
                    const OneYPx = OneY * mmToPxScale;
                    const pasteRegionShortBiasXPx = pasteRegionShortBiasX * mmToPxScale;
                    const pasteRegionShortBiasYPx = pasteRegionShortBiasY * mmToPxScale;
                    const pasteRegionLongBiasXPx = pasteRegionLongBiasX * mmToPxScale;
                    const pasteRegionLongBiasYPx = pasteRegionLongBiasY * mmToPxScale;
                    const path = document.createElementNS(SVG_NS, 'path');
                    path.setAttribute('fill', 'none');
                    path.setAttribute('stroke', '#000000');
                    path.setAttribute('d', `M 0, ${OneYPx + pasteRegionLongBiasYPx} `.concat(`l ${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `h ${pasteRegionPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx + OneXPx * 2}, ${pasteRegionShortBiasYPx + OneYPx * 2}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, ' z'));
                    svg.appendChild(path);
                    viewBox.right = SIDE_LENGTH * 5 + OneX + pasteRegion;
                    viewBox.bottom = OneY * 3;
                }
                drawTextsOfTwentySidedDice(infos, SIDE_LENGTH) {
                    this.setSvgTextInfo(infos[0], SIDE_LENGTH * 27.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
                    this.setSvgTextInfo(infos[1], SIDE_LENGTH * 52.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
                    this.setSvgTextInfo(infos[2], SIDE_LENGTH * 77.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
                    this.setSvgTextInfo(infos[3], SIDE_LENGTH * 102.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
                    this.setSvgTextInfo(infos[4], SIDE_LENGTH * 127.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
                    this.setSvgTextInfo(infos[5], SIDE_LENGTH * 15.0 / 25, SIDE_LENGTH * 36.65 / 25, 0);
                    this.setSvgTextInfo(infos[6], SIDE_LENGTH * 40.0 / 25, SIDE_LENGTH * 36.65 / 25, 0);
                    this.setSvgTextInfo(infos[7], SIDE_LENGTH * 65.0 / 25, SIDE_LENGTH * 36.65 / 25, 0);
                    this.setSvgTextInfo(infos[8], SIDE_LENGTH * 90.0 / 25, SIDE_LENGTH * 36.65 / 25, 0);
                    this.setSvgTextInfo(infos[9], SIDE_LENGTH * 115.0 / 25, SIDE_LENGTH * 36.65 / 25, 0);
                    this.setSvgTextInfo(infos[10], SIDE_LENGTH * 115.0 / 25, SIDE_LENGTH * 38.75 / 25, 180);
                    this.setSvgTextInfo(infos[11], SIDE_LENGTH * 90.0 / 25, SIDE_LENGTH * 38.75 / 25, 180);
                    this.setSvgTextInfo(infos[12], SIDE_LENGTH * 65.0 / 25, SIDE_LENGTH * 38.75 / 25, 180);
                    this.setSvgTextInfo(infos[13], SIDE_LENGTH * 40.0 / 25, SIDE_LENGTH * 38.75 / 25, 180);
                    this.setSvgTextInfo(infos[14], SIDE_LENGTH * 15.0 / 25, SIDE_LENGTH * 38.75 / 25, 180);
                    this.setSvgTextInfo(infos[15], SIDE_LENGTH * 127.5 / 25, SIDE_LENGTH * 16.25 / 25, 180);
                    this.setSvgTextInfo(infos[16], SIDE_LENGTH * 102.5 / 25, SIDE_LENGTH * 16.25 / 25, 180);
                    this.setSvgTextInfo(infos[17], SIDE_LENGTH * 77.5 / 25, SIDE_LENGTH * 16.25 / 25, 180);
                    this.setSvgTextInfo(infos[18], SIDE_LENGTH * 52.5 / 25, SIDE_LENGTH * 16.25 / 25, 180);
                    this.setSvgTextInfo(infos[19], SIDE_LENGTH * 27.5 / 25, SIDE_LENGTH * 16.25 / 25, 180);
                }
                getSinByAngle(angle) {
                    return Math.sin(angle * Math.PI / 180);
                }
                getCosByAngle(angle) {
                    return Math.cos(angle * Math.PI / 180);
                }
                drawGraphsOfTwentyFourSidedDice(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale) {
                    const { getSinByAngle , getCosByAngle  } = this;
                    const BIGER_ANGLE = 180 - 48.275 * 2;
                    const SMALL_ANGLE_COS = Math.cos(48.275 * Math.PI / 180);
                    const HALF_LONG_SIDE_LENGTH = 50 * 0.5;
                    const SHORT_SIDE_LENGTH = HALF_LONG_SIDE_LENGTH / SMALL_ANGLE_COS;
                    let ax = 0, ay = 0, bx = 0, by = 0, cx = 0, cy = 0, dx = 0, dy = 0, ex = 0, ey = 0, fx = 0, fy = 0;
                    let aax = 0, aay = 0, bbx = 0, bby = 0, ddx = 0, ddy = 0, eex = 0, eey = 0, ffx = 0, ffy = 0, fffx = 0, fffy = 0;
                    let content_offset_top = -3, content_offset_left = -2;
                    content_offset_top *= 1.5, content_offset_left *= 1.5;
                    const OFFSET_X = -23.0805019730301175;
                    const ax1 = 150 + OFFSET_X, ay1 = 0;
                    const bx1 = ax1 + 50, by1 = 0;
                    const cx1 = ax1 + HALF_LONG_SIDE_LENGTH, cy1 = SHORT_SIDE_LENGTH * getSinByAngle(48.275);
                    const angle_cd1 = BIGER_ANGLE - 48.275;
                    const dx1 = cx1 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd1), dy1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd1);
                    const angle_ce1 = 180 - BIGER_ANGLE - angle_cd1;
                    const ex1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ce1), ey1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce1);
                    const angle_cf1 = BIGER_ANGLE - angle_ce1;
                    const fx1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf1), fy1 = cy1 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cf1);
                    const c_mirror_ad_x1 = 150 + dx1 - cx1;
                    const c_mirror_ad_y1 = 0 + dy1 - cy1;
                    const aax1 = 150 + (c_mirror_ad_x1 - 150) * 0.3 + OFFSET_X, aay1 = 0 + (c_mirror_ad_y1 - 0) * 0.3;
                    const bbx1 = 0, bby1 = 0;
                    const ddx1 = dx1 + (c_mirror_ad_x1 - dx1) * 0.3, ddy1 = dy1 + (c_mirror_ad_y1 - dy1) * 0.3;
                    const ffx1 = bx1 + (cx1 - bx1) * 0.3, ffy1 = 0 + (cy1 - 0) * 0.3;
                    const c_mirror_ef_x1 = ex1 + fx1 - cx1;
                    const c_mirror_ef_y1 = ey1 + fy1 - cy1;
                    const eex1 = ex1 + (c_mirror_ef_x1 - ex1) * 0.3, eey1 = ey1 + (c_mirror_ef_y1 - ey1) * 0.3;
                    const fffx1 = fx1 + (c_mirror_ef_x1 - fx1) * 0.3, fffy1 = fy1 + (c_mirror_ef_y1 - fy1) * 0.3;
                    ax = ax1, ay = ay1, bx = bx1, by = by1, cx = cx1, cy = cy1, dx = dx1, dy = dy1, ex = ex1, ey = ey1, fx = fx1, fy = fy1;
                    aax = aax1, aay = aay1, bbx = bbx1, bby = bby1, ddx = ddx1, ddy = ddy1, eex = eex1, eey = eey1, ffx = ffx1, ffy = ffy1, fffx = fffx1, fffy = fffy1;
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, aax, ddx, aay, ddy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, eex, fffx, eey, fffy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, fffx, fy, fffy, viewBox);
                    const cx4 = dx1 + ex1 - cx1, cy4 = dy1 + ey1 - cy1;
                    const ax4 = ex1, ay4 = ey1;
                    const dx4 = dx1, dy4 = dy1;
                    const angle_cd4 = Math.atan((cy4 - dy4) / (cx4 - dx4)) * 180 / Math.PI;
                    const angle_ce4 = BIGER_ANGLE - angle_cd4;
                    const angle_cf4 = BIGER_ANGLE - (90 - angle_ce4);
                    const angle_ca4 = BIGER_ANGLE - (90 - angle_cd4);
                    const angle_cb4 = BIGER_ANGLE - (90 - angle_ca4);
                    const ex4 = cx4 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ce4);
                    const ey4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce4);
                    const fx4 = cx4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf4);
                    const fy4 = cy4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf4);
                    const bx4 = cx4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb4);
                    const by4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb4);
                    const ffx4 = bx4 + (cx4 - bx4) * 0.3, ffy4 = by4 + (cy4 - by4) * 0.3;
                    ax = ax4, ay = ay4, bx = bx4, by = by4, cx = cx4, cy = cy4, dx = dx4, dy = dy4, ex = ex4, ey = ey4, fx = fx4, fy = fy4;
                    ffx = ffx4, ffy = ffy4;
                    this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
                    const cx5 = ax4 + bx4 - cx4, cy5 = ay4 + by4 - cy4;
                    const dx5 = ax4, dy5 = ay4;
                    const ex5 = bx4, ey5 = by4;
                    const angle_cd5 = Math.atan((cy5 - dy5) / (cx5 - dx5)) * 180 / Math.PI;
                    const angle_ce5 = BIGER_ANGLE - angle_cd5;
                    const angle_cf5 = BIGER_ANGLE - (90 - angle_ce5);
                    const angle_ca5 = BIGER_ANGLE - (90 - angle_cd5);
                    const angle_cb5 = BIGER_ANGLE - (90 - angle_ca5);
                    const ax5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca5);
                    const ay5 = cy5 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca5);
                    const bx5 = cx5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb5);
                    const by5 = cy5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb5);
                    const fx5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf5);
                    const fy5 = cy5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf5);
                    const ffx5 = bx5 + (cx5 - bx5) * 0.3, ffy5 = by5 + (cy5 - by5) * 0.3;
                    const c_mirror_ab_x5 = ax5 + bx5 - cx5, c_mirror_ab_y5 = ay5 + by5 - cy5;
                    const aax5 = ax5 + (c_mirror_ab_x5 - ax5) * 0.3, aay5 = ay5 + (c_mirror_ab_y5 - ay5) * 0.3;
                    const bbx5 = bx5 + (c_mirror_ab_x5 - bx5) * 0.3, bby5 = by5 + (c_mirror_ab_y5 - by5) * 0.3;
                    ax = ax5, ay = ay5, bx = bx5, by = by5, cx = cx5, cy = cy5, dx = dx5, dy = dy5, ex = ex5, ey = ey5, fx = fx5, fy = fy5;
                    aax = aax5, aay = aay5, bbx = bbx5, bby = bby5, ffx = ffx5, ffy = ffy5;
                    this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, dx, ay, dy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ex, fx, ey, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, bbx, by, bby, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, aax, bbx, aay, bby, viewBox);
                    const cx6 = ex4 + fx4 - cx4, cy6 = ey4 + fy4 - cy4;
                    const dx6 = fx4, dy6 = fy4;
                    const ex6 = ex4, ey6 = ey4;
                    const angle_cd6 = Math.atan((cy6 - dy6) / (dx6 - cx6)) * 180 / Math.PI;
                    const angle_ce6 = Math.atan((cy6 - ey6) / (cx6 - ex6)) * 180 / Math.PI;
                    const angle_ca6 = BIGER_ANGLE - angle_cd6;
                    const angle_cf6 = BIGER_ANGLE - angle_ce6;
                    const angle_cb6 = BIGER_ANGLE - (90 - angle_ca6);
                    const ax6 = cx6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ca6);
                    const ay6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca6);
                    const bx6 = cx6 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cb6);
                    const by6 = cy6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb6);
                    const fx6 = cx6 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cf6);
                    const fy6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf6);
                    const ffx6 = bx6 + (cx6 - bx6) * 0.3, ffy6 = by6 + (cy6 - by6) * 0.3;
                    const c_mirror_ad_x6 = ax6 + dx6 - cx6, c_mirror_ad_y6 = ay6 + dy6 - cy6;
                    const aax6 = ax6 + (c_mirror_ad_x6 - ax6) * 0.3, aay6 = ay6 + (c_mirror_ad_y6 - ay6) * 0.3;
                    const ddx6 = dx6 + (c_mirror_ad_x6 - dx6) * 0.3, ddy6 = dy6 + (c_mirror_ad_y6 - dy6) * 0.3;
                    const c_mirror_ef_x6 = ex6 + fx6 - cx6, c_mirror_ef_y6 = ey6 + fy6 - cy6;
                    const eex6 = ex6 + (c_mirror_ef_x6 - ex6) * 0.3, eey6 = ey6 + (c_mirror_ef_y6 - ey6) * 0.3;
                    const fffx6 = fx6 + (c_mirror_ef_x6 - fx6) * 0.3, fffy6 = fy6 + (c_mirror_ef_y6 - fy6) * 0.3;
                    ax = ax6, ay = ay6, bx = bx6, by = by6, cx = cx6, cy = cy6, dx = dx6, dy = dy6, ex = ex6, ey = ey6, fx = fx6, fy = fy6;
                    aax = aax6, aay = aay6, ddx = ddx6, ddy = ddy6, eex = eex6, eey = eey6, ffx = ffx6, ffy = ffy6, fffx = fffx6, fffy = fffy6;
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, aax, ddx, aay, ddy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, eex, fffx, eey, fffy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, fffx, fy, fffy, viewBox);
                    const cx3 = dx4 + ex4 - cx4, cy3 = dy4 + ey4 - cy4;
                    const fx3 = dx4, fy3 = dy4;
                    const ex3 = ex4, ey3 = ey4;
                    const angle_cf3 = Math.atan((cy3 - fy3) / (fx3 - cx3)) * 180 / Math.PI;
                    const angle_ce3 = BIGER_ANGLE - angle_cf3;
                    const angle_cd3 = 180 - BIGER_ANGLE - angle_ce3;
                    const angle_ca3 = BIGER_ANGLE - angle_cd3;
                    const angle_cb3 = BIGER_ANGLE - (90 - angle_ca3);
                    const ax3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca3);
                    const ay3 = cy3 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca3);
                    const bx3 = cx3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb3);
                    const by3 = cy3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb3);
                    const dx3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd3);
                    const dy3 = cy3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd3);
                    const ffx3 = bx3 + (cx3 - bx3) * 0.3, ffy3 = by3 + (cy3 - by3) * 0.3;
                    ax = ax3, ay = ay3, bx = bx3, by = by3, cx = cx3, cy = cy3, dx = dx3, dy = dy3, ex = ex3, ey = ey3, fx = fx3, fy = fy3;
                    ffx = ffx3, ffy = ffy3;
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, dx, ex, dy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
                    const cx2 = ax3 + dx3 - cx3, cy2 = ay3 + dy3 - cy3;
                    const fx2 = ax3, fy2 = ay3;
                    const ex2 = dx3, ey2 = dy3;
                    const angle_cf2 = Math.atan((cy2 - fy2) / (fx2 - cx2)) * 180 / Math.PI;
                    const angle_ce2 = BIGER_ANGLE - angle_cf2;
                    const angle_cd2 = 180 - BIGER_ANGLE - angle_ce2;
                    const angle_ca2 = BIGER_ANGLE - angle_cd2;
                    const angle_cb2 = BIGER_ANGLE - (90 - angle_ca2);
                    const ax2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca2);
                    const ay2 = cy2 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca2);
                    const bx2 = cx2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb2);
                    const by2 = cy2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb2);
                    const dx2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd2);
                    const dy2 = cy2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd2);
                    const ffx2 = bx2 + (cx2 - bx2) * 0.3, ffy2 = by2 + (cy2 - by2) * 0.3;
                    const c_mirror_ab_x2 = ax2 + bx2 - cx2, c_mirror_ab_y2 = ay2 + by2 - cy2;
                    const aax2 = ax2 + (c_mirror_ab_x2 - ax2) * 0.3, aay2 = ay2 + (c_mirror_ab_y2 - ay2) * 0.3;
                    const bbx2 = bx2 + (c_mirror_ab_x2 - bx2) * 0.3, bby2 = by2 + (c_mirror_ab_y2 - by2) * 0.3;
                    const c_mirror_de_x2 = dx2 + ex2 - cx2, c_mirror_de_y2 = dy2 + ey2 - cy2;
                    const ddx2 = dx2 + (c_mirror_de_x2 - dx2) * 0.3, ddy2 = dy2 + (c_mirror_de_y2 - dy2) * 0.3;
                    const eex2 = ex2 + (c_mirror_de_x2 - ex2) * 0.3, eey2 = ey2 + (c_mirror_de_y2 - ey2) * 0.3;
                    ax = ax2, ay = ay2, bx = bx2, by = by2, cx = cx2, cy = cy2, dx = dx2, dy = dy2, ex = ex2, ey = ey2, fx = fx2, fy = fy2;
                    aax = aax2, aay = aay2, bbx = bbx2, bby = bby2, ddx = ddx2, ddy = ddy2, eex = eex2, eey = eey2, ffx = ffx2, ffy = ffy2;
                    this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, dx, ay, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
                    this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, bx, bbx, by, bby, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, aax, bbx, aay, bby, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
                    this.appendLine(svg, OUTER_LINE_STYLE, ddx, eex, ddy, eey, viewBox);
                }
                drawTextsOfTwentyFourSidedDice(infos, SIDE_LENGTH) {
                    this.setSvgTextInfo(infos[0], SIDE_LENGTH * 36.5 / 25, SIDE_LENGTH * 100.0 / 25, 180);
                    this.setSvgTextInfo(infos[1], SIDE_LENGTH * 147.5 / 25, SIDE_LENGTH * 125.0 / 25, 180);
                    this.setSvgTextInfo(infos[2], SIDE_LENGTH * 70.0 / 25, SIDE_LENGTH * 120.0 / 25, -70.35);
                    this.setSvgTextInfo(infos[3], SIDE_LENGTH * 180.0 / 25, SIDE_LENGTH * 120.0 / 25, -70.35);
                    this.setSvgTextInfo(infos[4], SIDE_LENGTH * 120.0 / 25, SIDE_LENGTH * 128.0 / 25, -83.45);
                    this.setSvgTextInfo(infos[5], SIDE_LENGTH * 82.5 / 25, SIDE_LENGTH * 188.0 / 25, 83.45);
                    this.setSvgTextInfo(infos[6], SIDE_LENGTH * 195.0 / 25, SIDE_LENGTH * 147.5 / 25, 166.9);
                    this.setSvgTextInfo(infos[7], SIDE_LENGTH * 95.0 / 25, SIDE_LENGTH * 110.0 / 25, 193.1);
                    this.setSvgTextInfo(infos[8], SIDE_LENGTH * 139.0 / 25, SIDE_LENGTH * 44.0 / 25, 13.1);
                    this.setSvgTextInfo(infos[9], SIDE_LENGTH * 97.5 / 25, SIDE_LENGTH * 58.0 / 25, 206.2);
                    this.setSvgTextInfo(infos[10], SIDE_LENGTH * 125.0 / 25, SIDE_LENGTH * 70.0 / 25, -70.35);
                    this.setSvgTextInfo(infos[11], SIDE_LENGTH * 114.0 / 25, SIDE_LENGTH * 27.0 / 25, 96.55);
                    this.setSvgTextInfo(infos[12], SIDE_LENGTH * 102.0 / 25, SIDE_LENGTH * 138.0 / 25, 96.55);
                    this.setSvgTextInfo(infos[13], SIDE_LENGTH * 102.0 / 25, SIDE_LENGTH * 183.0 / 25, 263.45);
                    this.setSvgTextInfo(infos[14], SIDE_LENGTH * 80.0 / 25, SIDE_LENGTH * 160.0 / 25, 180);
                    this.setSvgTextInfo(infos[15], SIDE_LENGTH * 126.0 / 25, SIDE_LENGTH * 154.0 / 25, 13.1);
                    this.setSvgTextInfo(infos[16], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 78.0 / 25, 0);
                    this.setSvgTextInfo(infos[17], SIDE_LENGTH * 137.0 / 25, SIDE_LENGTH * 95.0 / 25, 26.2);
                    this.setSvgTextInfo(infos[18], SIDE_LENGTH * 110.0 / 25, SIDE_LENGTH * 84.0 / 25, 109.65);
                    this.setSvgTextInfo(infos[19], SIDE_LENGTH * 130.0 / 25, SIDE_LENGTH * 16.0 / 25, -83.45);
                    this.setSvgTextInfo(infos[20], SIDE_LENGTH * 160.0 / 25, SIDE_LENGTH * 80.0 / 25, 122.75);
                    this.setSvgTextInfo(infos[21], SIDE_LENGTH * 60.0 / 25, SIDE_LENGTH * 77.0 / 25, 96.55);
                    this.setSvgTextInfo(infos[22], SIDE_LENGTH * 195.0 / 25, SIDE_LENGTH * 93.0 / 25, 13.1);
                    this.setSvgTextInfo(infos[23], SIDE_LENGTH * 83.0 / 25, SIDE_LENGTH * 93.0 / 25, 13.1);
                }
                appendLine(svg, STYLE, x1, x2, y1, y2, viewBox) {
                    const line = document.createElementNS(SVG_NS, 'line');
                    line.setAttribute('x1', `${x1}mm`);
                    line.setAttribute('x2', `${x2}mm`);
                    line.setAttribute('y1', `${y1}mm`);
                    line.setAttribute('y2', `${y2}mm`);
                    if (viewBox) {
                        viewBox.left = Math.min(viewBox.left, x1, x2);
                        viewBox.right = Math.max(viewBox.right, x1, x2);
                        viewBox.top = Math.min(viewBox.top, y1, y2);
                        viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
                    }
                    line.setAttribute('style', STYLE);
                    svg.appendChild(line);
                }
                appendCircle(svg, STYLE, cx, cy, radius, viewBox) {
                    const circle = document.createElementNS(SVG_NS, 'circle');
                    circle.setAttribute('cx', `${cx}mm`);
                    circle.setAttribute('cy', `${cy}mm`);
                    circle.setAttribute('r', `${radius}mm`);
                    circle.setAttribute('fill', '#ffffff');
                    if (viewBox) {
                        viewBox.left = Math.min(viewBox.left, cx - radius);
                        viewBox.right = Math.max(viewBox.right, cx + radius);
                        viewBox.top = Math.min(viewBox.top, cy - radius);
                        viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
                    }
                    circle.setAttribute('style', STYLE);
                    svg.appendChild(circle);
                }
                appendTspan(text, STYLE, CHAR, dx, dy, rotate) {
                    const tspan = document.createElementNS(SVG_NS, 'tspan');
                    tspan.setAttribute('dx', `${dx}mm`);
                    tspan.setAttribute('dy', `${dy}mm`);
                    tspan.setAttribute('rotate', rotate.toString());
                    tspan.setAttribute('style', STYLE.concat('dominant-baseline:middle;text-anchor:middle;', CHAR === '6' || CHAR === '9' ? 'text-decoration:underline;' : '', CHAR === 'ü' ? 'opacity:0.85;font-size:0.9em;' : ''));
                    tspan.innerHTML = CHAR;
                    text.appendChild(tspan);
                }
                appendText(svg, STYLE, CONTENT, x, y, rotate, viewBox) {
                    const g = document.createElementNS(SVG_NS, 'g');
                    if (rotate) {
                        g.setAttribute('style', `transform: rotate(${rotate}deg);transform-origin: 50% 50%;`);
                    }
                    svg.appendChild(g);
                    const text = document.createElementNS(SVG_NS, 'text');
                    text.setAttribute('x', `${x}mm`);
                    text.setAttribute('y', `${y}mm`);
                    text.setAttribute('style', 'dominant-baseline:middle;text-anchor:middle;');
                    if (CONTENT.indexOf('<') > -1) {
                        text.innerHTML = CONTENT;
                    } else {
                        CONTENT.split('').forEach((__char, index)=>{
                            this.appendTspan(text, '', __char, 0, 0, 0);
                        });
                    }
                    g.appendChild(text);
                    if (viewBox) {
                        const clientRects = text.getClientRects();
                        const { left: x1 , right: x2 , top: y1 , bottom: y2  } = clientRects.length ? clientRects.item(0) : text.getBoundingClientRect();
                        viewBox.left = Math.min(viewBox.left, x1, x2);
                        viewBox.right = Math.max(viewBox.right, x1, x2);
                        viewBox.top = Math.min(viewBox.top, y1, y2);
                        viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
                    }
                    text.setAttribute('style', STYLE);
                }
                setSvgTextInfo(info, x, y, rotate) {
                    info.x = x;
                    info.y = y;
                    info.rotate = rotate;
                }
            }
            cc.DiceGenerator = DiceGenerator;
        })(cc = sonya1.cc || (sonya1.cc = {}));
    })(sonya1 = edu.sonya || (edu.sonya = {}));
})(edu || (edu = {}));
function pushSameValueTimes(array, value, times) {
    for(let i = 0; i < times; ++i){
        array.push(value);
    }
}
function getNumbersArray(min, max) {
    const array = [];
    for(let i = min; i <= max; ++i){
        array.push(i.toString());
    }
    return array;
}
class DiceBase extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageDice';
    countDataAndComputedData = ()=>{
        this.countDataAndComputedDataInBrickWithTableBase();
        const { DiceGenerator  } = edu.sonya.cc;
        const diceGenerator = new DiceGenerator();
        const { data , computedData  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginLeft , list ,  } = data;
        let css = `/* common.css */
    * { margin:0;border:0;padding:0; }
    * { box-sizing:border-box; }

    page { display:flex;flex-flow:wrap; }
    page:not(page:last-child){page-break-after:always;}
    
    /* landscape 横向 portrait 纵向*/ 
    @media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; } }
    /* height:${MAX_Y}mm; */
    page { width:${MAX_X}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; }
    `;
        const svgList = [];
        list.forEach(({ id , diceKind , sideLength , contents , outerLineStyle , innerLineStyle , textStyle , options ,  })=>{
            const { css: svgCss , svg  } = diceGenerator.create({
                id,
                diceKind,
                sideLength,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options
            });
            svgList.push(svg);
            css += svgCss;
        });
        const en = `${FILENAME_POSTFIX}Dices`;
        const zh_cn = `${FILENAME_POSTFIX}骰子`;
        const zh_tw = `${FILENAME_POSTFIX}骰子`;
        computedData.title = {
            en,
            zh_cn,
            zh_tw
        };
        computedData.css = css;
        computedData.html = this.getAutomaticPaginationHtmlFromChildList(svgList, MAX_X, MAX_Y);
    };
    idOrClassPrefix = 'brickPageDice';
    getUsableList = ()=>{
        const usableDices = [];
        this.appendDiceOfSides4(usableDices);
        this.appendDiceOfSides6(usableDices);
        this.appendDiceOfSides8(usableDices);
        this.appendDiceOfSides12(usableDices);
        this.appendDiceOfSides20(usableDices);
        this.appendDiceOfSides24(usableDices);
        const usableList = [];
        usableDices.forEach(({ diceFace , infos  })=>{
            const buttonList = [];
            infos.forEach((info)=>{
                const { captionI18n  } = info;
                buttonList.push({
                    nameI18n: typeof captionI18n === 'string' ? {
                        en: captionI18n,
                        zh_cn: captionI18n,
                        zh_tw: captionI18n
                    } : captionI18n,
                    info
                });
            });
            const strongI18n = {
                en: `${diceFace}-sides`,
                zh_cn: `${diceFace}面`,
                zh_tw: `${diceFace}面`
            };
            usableList.push({
                strongI18n,
                buttonList
            });
        });
        return usableList;
    };
    initTableHead = ()=>{
        this.appendTableHeadCell({
            en: 'Faces',
            zh_cn: '面',
            zh_tw: '面'
        });
        this.appendTableHeadCell({
            en: 'Side',
            zh_cn: '边',
            zh_tw: '邊'
        });
        this.appendTableHeadCell({
            en: 'Contents of all sides',
            zh_cn: '各面内容',
            zh_tw: '各面內容'
        });
        this.appendTableHeadCell({
            en: 'Outside Boundary Line Style',
            zh_cn: '外边界线样式',
            zh_tw: '外邊界線樣式'
        });
        this.appendTableHeadCell({
            en: 'Interior Line Style',
            zh_cn: '内部线样式',
            zh_tw: '內部線樣式'
        });
        this.appendTableHeadCell({
            en: 'Text Style',
            zh_cn: '文本样式',
            zh_tw: '文字樣式'
        });
    };
    appendDiceOfSides4 = (usableDices)=>{
        const infos = [];
        const { DiceKind  } = edu.sonya.cc;
        infos.length = 0;
        infos.push({
            id: '',
            diceKind: DiceKind.four,
            sideLength: 20,
            contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
            textStyle: 'font-size:8.5mm;font-family: "Kaiti";',
            options: {},
            captionI18n: {
                en: 'Pinyin Tone',
                zh_cn: '拼音声调',
                zh_tw: '拼音聲調'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.four,
            sideLength: 20,
            contents: '1,2,3,4'.split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:5mm;font-family:"Times New Roman", "Kaiti";',
            options: {},
            captionI18n: '1-4'
        });
        infos.push({
            id: '',
            diceKind: DiceKind.four,
            sideLength: 20,
            contents: '+,-,×,÷'.split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            // textStyle: 'font-size:6mm;font-family:"Times New Roman", "Kaiti";font-weight:bold;',
            textStyle: 'font-size:6mm;font-family: "Kaiti";font-weight:bold;',
            options: {},
            captionI18n: {
                en: 'Quad operator',
                zh_cn: '四则运算符',
                zh_tw: '四則運算子'
            }
        });
        usableDices.push({
            diceFace: 4,
            infos: JSON.parse(JSON.stringify(infos))
        });
    };
    appendDiceOfSides6 = (usableDices)=>{
        const infos = [];
        const { DiceKind  } = edu.sonya.cc;
        infos.length = 0;
        infos.push({
            id: '',
            diceKind: DiceKind.six,
            sideLength: 20,
            contents: getNumbersArray(1, 6),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"Times New Roman", "Kaiti";',
            options: {},
            captionI18n: '1-6'
        });
        usableDices.push({
            diceFace: 6,
            infos: JSON.parse(JSON.stringify(infos))
        });
    };
    appendDiceOfSides8 = (usableDices)=>{
        const infos = [];
        const { DiceKind  } = edu.sonya.cc;
        infos.length = 0;
        infos.push({
            id: '',
            diceKind: DiceKind.eight,
            sideLength: 20,
            contents: getNumbersArray(1, 8),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {},
            captionI18n: '1-8'
        });
        infos.push({
            id: '',
            diceKind: DiceKind.eight,
            sideLength: 20,
            contents: '☰☵☶☳☴☲☷☱'.split(''),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {},
            captionI18n: {
                en: 'Eight Diagrams',
                zh_cn: '八卦',
                zh_tw: '八卦'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.eight,
            sideLength: 20,
            contents: '利、衰、毁、誉、称、讥、苦、乐'.split('、'),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {},
            captionI18n: {
                en: 'Eight winds',
                zh_cn: '八风',
                zh_tw: '八風'
            }
        });
        usableDices.push({
            diceFace: 8,
            infos: JSON.parse(JSON.stringify(infos))
        });
    };
    appendDiceOfSides12 = (usableDices)=>{
        const infos = [];
        const { DiceKind  } = edu.sonya.cc;
        infos.length = 0;
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: getNumbersArray(1, 12),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: '1-12'
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: '子丑寅卯辰巳午未申酉戌亥'.split(''),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Terrestrial branch',
                zh_cn: '地支',
                zh_tw: '地支'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: '鼠牛虎兔龙蛇马羊猴鸡狗猪'.split(''),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Chinese zodiac 1',
                zh_cn: '十二生肖',
                zh_tw: '十二生肖'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: '鼠牛虎兔龍蛇馬羊猴雞狗猪'.split(''),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Chinese zodiac 2',
                zh_cn: '生肖繁体',
                zh_tw: '生肖繁體'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:7.5mm;font-family:"Times New Roman";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'English Months',
                zh_cn: '英文月份',
                zh_tw: '英文月份'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
            ],
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:10.5mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Months',
                zh_cn: '月份',
                zh_tw: '月份'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: [
                'Jan.',
                'Feb.',
                'Mar.',
                'Apr.',
                'May.',
                'Jun.',
                'Jul.',
                'Aug.',
                'Sep.',
                'Oct.',
                'Nov.',
                'Dec.'
            ],
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"Times New Roman";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Month abbreviation',
                zh_cn: '月份缩写',
                zh_tw: '月份縮寫'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:10.5mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Month (number)',
                zh_cn: '月份（数字）',
                zh_tw: '月份（數字）'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twelve,
            sideLength: 20,
            contents: [
                '正月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '冬月',
                '腊月'
            ],
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:10.5mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Lunar month',
                zh_cn: '农历月份',
                zh_tw: '農曆月份'
            }
        });
        usableDices.push({
            diceFace: 12,
            infos: JSON.parse(JSON.stringify(infos))
        });
    };
    appendDiceOfSides20 = (usableDices)=>{
        const infos = [];
        const { DiceKind  } = edu.sonya.cc;
        infos.length = 0;
        infos.push({
            id: '',
            diceKind: DiceKind.twenty,
            sideLength: 20,
            contents: getNumbersArray(1, 20),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:8mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: '1-20'
        });
        usableDices.push({
            diceFace: 20,
            infos: JSON.parse(JSON.stringify(infos))
        });
    };
    appendDiceOfSides24 = (usableDices)=>{
        const infos = [];
        const { DiceKind  } = edu.sonya.cc;
        infos.length = 0;
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: getNumbersArray(1, 24),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: '1-24'
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: getNumbersArray(0, 23),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: '0-23'
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: 'b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,'.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ').split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            // textStyle: 'font-size:12mm;font-family:"PinYinok";',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Initial Consonant',
                zh_cn: '声母',
                zh_tw: '聲母'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: 'a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong'.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ').split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            // textStyle: 'font-size:12mm;font-family:"PinYinok";',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Finals',
                zh_cn: '韵母',
                zh_tw: '韻母'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: 'zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,,,,,'.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ').split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            // textStyle: 'font-size:12mm;font-family:"PinYinok";',
            textStyle: 'font-size:12mm;font-family:"kaiti";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Overall recognition',
                zh_cn: '整体认读',
                zh_tw: '整體認讀'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: 'ā,á,ǎ,à,ō,ó,ǒ,ò,ē,é,ě,è,ī,í,ǐ,ì,ū,ú,ǔ,ù,ǖ,ǘ,ǚ,ǜ'.split(','),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:12mm;font-family:"Kaiti";font-weight:normal;',
            options: {
                withHole: false
            },
            captionI18n: {
                en: 'Simple final',
                zh_cn: '单韵母',
                zh_tw: '單韻母'
            }
        });
        infos.push({
            id: '',
            diceKind: DiceKind.twentyFour,
            sideLength: 20,
            contents: '立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒'.split('、'),
            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
            textStyle: 'font-size:10.5mm;font-family:"KaiTi";',
            options: {
                withHole: false
            },
            captionI18n: {
                en: '24 Solar Terms',
                zh_cn: '二十四节气',
                zh_tw: '二十四節氣'
            }
        });
        usableDices.push({
            diceFace: 24,
            infos: JSON.parse(JSON.stringify(infos))
        });
    };
    createTableBodyRow = (dice)=>{
        const { id , diceKind , sideLength , contents , outerLineStyle , innerLineStyle , textStyle , options ,  } = dice;
        const { tableBodyElement  } = this;
        const tr = createElement('tr');
        tableBodyElement.appendChild(tr);
        this.appendOperationTd(tr, dice);
        this.appendDiceKindTd(tr, dice);
        this.appendNumberTd(tr, sideLength, dice, 'sideLength', 0, 200, null);
        this.appendContentsTd(tr, dice);
        this.appendTextareaTd(tr, outerLineStyle, dice, 'outerLineStyle', 'string');
        this.appendTextareaTd(tr, innerLineStyle, dice, 'innerLineStyle', 'string');
        this.appendTextareaTd(tr, textStyle, dice, 'textStyle', 'string');
    };
    appendDiceKindTd = (tr, dice)=>{
        const DiceKind = edu.sonya.cc.DiceKind;
        const td = createElement('td');
        tr.appendChild(td);
        const span = createElement('span');
        td.appendChild(span);
        let value = '';
        switch(dice.diceKind){
            case DiceKind.four:
                value = '4';
                break;
            case DiceKind.six:
                value = '6';
                break;
            case DiceKind.eight:
                value = '8';
                break;
            case DiceKind.twelve:
                value = '12';
                break;
            case DiceKind.twenty:
                value = '20';
                break;
            case DiceKind.twentyFour:
                value = '24';
                break;
            default:
                break;
        }
        span.innerHTML = value;
    };
    appendContentsTd = (tr, dice)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const DiceKind = edu.sonya.cc.DiceKind;
        const { diceKind , contents  } = dice;
        const { idOrClassPrefix  } = this;
        let count = 0;
        switch(diceKind){
            case DiceKind.four:
                count = 4;
                break;
            case DiceKind.six:
                count = 6;
                break;
            case DiceKind.eight:
                count = 8;
                break;
            case DiceKind.twelve:
                count = 12;
                break;
            case DiceKind.twenty:
                count = 20;
                break;
            case DiceKind.twentyFour:
                count = 24;
                break;
            default:
                break;
        }
        const div = createElement('div');
        td.appendChild(div);
        div.className = `${idOrClassPrefix}ContentValueWrap`;
        const i18nNameArray = [
            'en',
            'zh_cn',
            'zh_tw'
        ];
        const emptyArray = [];
        pushSameValueTimes(emptyArray, '\n', count);
        const isText = typeof contents[0] === 'string';
        if (isText) {
            const textarea = createElement('textarea');
            td.appendChild(textarea);
            textarea.value = dice.contents.join('\n');
            textarea.rows = 4;
            textarea.onchange = textarea.focus = ()=>{
                textarea.value.split('\n').concat(emptyArray).slice(0, count).forEach((item, index)=>{
                    dice.contents[index] = item;
                });
                this.build();
            };
        } else {
            i18nNameArray.forEach((lang)=>{
                const textarea = createElement('textarea');
                td.appendChild(textarea);
                textarea.value = dice.contents.map((content)=>content[lang]).join('\n');
                textarea.rows = 4;
                textarea.onchange = textarea.focus = ()=>{
                    textarea.value.split('\n').concat(emptyArray).slice(0, count).forEach((item, index)=>{
                        dice.contents[index][lang] = item;
                    });
                    this.build();
                };
            });
        }
    };
}
