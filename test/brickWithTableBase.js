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
    brickBaseIdPrefix = 'brickPageBase';
    reporterKindProperty = 'unknown';
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
        const { configCoreElement , brickBaseIdPrefix  } = this;
        configCoreElement.setAttribute(REPORT_KIND_PROPERTY, this.reporterKindProperty);
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
    initTextboxElement = (labelI18n, propertyName, textboxElement, wrapElement)=>{
        if (labelI18n) {
            const label = createElement('label');
            label.innerHTML = getI18nInnerHTML(labelI18n);
            wrapElement.appendChild(label);
        }
        textboxElement.value = this.data[propertyName];
        textboxElement.type = 'text';
        const onTextboxChanged = ()=>{
            // this.data[propertyName] = parseInt(textboxElement.value, 0);
            this.data[propertyName] = textboxElement.value;
            this.saveConfigAndBuildIfAllowed();
        };
        textboxElement.onchange = onTextboxChanged;
        textboxElement.onblur = onTextboxChanged;
        wrapElement.appendChild(textboxElement);
    };
    initTextareaElement = (labelI18n, propertyName, textareaElement, wrapElement)=>{
        if (labelI18n) {
            const label = createElement('label');
            label.innerHTML = getI18nInnerHTML(labelI18n);
            wrapElement.appendChild(label);
        }
        textareaElement.value = this.data[propertyName];
        const onTextareaChanged = ()=>{
            this.data[propertyName] = parseInt(textareaElement.value, 0);
            this.saveConfigAndBuildIfAllowed();
        };
        textareaElement.onchange = onTextareaChanged;
        textareaElement.onblur = onTextareaChanged;
        wrapElement.appendChild(textareaElement);
    };
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
        span.id = `${brickBaseIdPrefix}PaperDirectionWrap`;
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
    getAutomaticPaginationHtmlFromChildList = (list, MAX_X, MAX_Y, pageClass = '')=>{
        if (list.length === 0) {
            return '';
        }
        let html = pageClass.length ? `<page class="${pageClass}">` : '<page>';
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
    formatDecile = (length)=>Math.round(length * 10) / 10;
    formatCentile = (length)=>Math.round(length * 100) / 100;
    formatMillimeter = (length)=>Math.round(length * 1000) / 1000;
}
class BrickWithTableBase extends BrickBase {
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
        const configCoreElement = this.configCoreElement;
        const { tableWrapElement , tableElement , tableHeadElement , tableBodyElement , trHead , idOrClassPrefix  } = this;
        this.initCoreElementsBeforeTable();
        this.initUsableButtonsWrap();
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
    updateOtherDataLevel3 = (newData)=>{};
    updateOtherData = (newData)=>{
        const { list ,  } = newData;
        this.data.list.length = 0;
        list.forEach((item)=>this.data.list.push(item));
        this.updateOtherDataLevel3(newData);
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
                    list.push(JSON.parse(JSON.stringify(info)));
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
    appendTextboxTd = (tr, value, data, fieldName)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const input = createElement('input');
        td.appendChild(input);
        input.value = value;
        input.type = 'text';
        input.onchange = input.focus = ()=>{
            data[fieldName] = input.value;
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
