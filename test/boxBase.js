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
                    const infoClone = JSON.parse(JSON.stringify(info));
                    list.push(infoClone);
                    this.createTableBodyRow(infoClone);
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
var svgSpace1;
(function(svgSpace11) {
    let edu1;
    (function(edu1) {
        let sonya;
        (function(sonya) {
            let cc;
            (function(cc) {
                const SVG_NS = 'http://www.w3.org/2000/svg';
                const SVG_XLINKNS = 'http://www.w3.org/1999/xlink';
                class SvgHelper {
                    static createSvg = ()=>{
                        const svg = document.createElementNS(SVG_NS, 'svg');
                        svg.setAttribute('version', '1.1');
                        svg.setAttribute('xmlns', SVG_NS);
                        svg.setAttribute('xmlns:xlink', SVG_XLINKNS);
                        return svg;
                    };
                    static createSvgPath = ()=>{
                        return document.createElementNS(SVG_NS, 'path');
                    };
                    static appendLine(svg, STYLE, x1, x2, y1, y2, viewBox) {
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
                    static appendCircle(svg, STYLE, cx, cy, radius, viewBox) {
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
                    static appendTspan(text, STYLE, CHAR, dx, dy) {
                        const tspan = document.createElementNS(SVG_NS, 'tspan');
                        tspan.setAttribute('dx', `${dx}`);
                        tspan.setAttribute('dy', `${dy}`);
                        tspan.setAttribute('style', STYLE.concat('dominant-baseline:middle;text-anchor:middle;', CHAR === '6' || CHAR === '9' ? 'text-decoration:underline;' : '', CHAR === 'ü' ? 'opacity:0.85;font-size:0.9em;' : ''));
                        tspan.innerHTML = CHAR;
                        text.appendChild(tspan);
                    }
                    static appendText(svg, STYLE, CONTENT, x, y, rotate, transformOrigin, viewBox, maybeNumber = false) {
                        const g = document.createElementNS(SVG_NS, 'g');
                        if (rotate) {
                            g.setAttribute('style', `transform: rotate(${rotate}deg);transform-origin:${transformOrigin};`);
                        }
                        svg.appendChild(g);
                        const text = document.createElementNS(SVG_NS, 'text');
                        text.setAttribute('x', `${x}mm`);
                        text.setAttribute('y', `${y}mm`);
                        text.setAttribute('style', 'dominant-baseline:middle;text-anchor:middle;');
                        if (CONTENT.indexOf('<en>') > -1) {
                            const lang = getCurrentLang();
                            const startTag = `<${lang}>`;
                            const endTag = `</${lang}>`;
                            if (CONTENT.indexOf(startTag) > -1) {
                                CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
                            }
                        }
                        CONTENT = CONTENT.replace(/<br \/>/gi, '<br/>').replace(/<br\/>/gi, '<br>').replace(/\\n/gi, '<br>');
                        if (CONTENT.indexOf('<br>') > -1) {
                            const fontSize = STYLE.indexOf('font-size:') > -1 ? STYLE.split('font-size:')[1].split(';')[0] : '2mm';
                            const unit = fontSize.replace(/[0-9.]/gi, '');
                            const dyNumber = parseFloat(fontSize.replace(unit, ''));
                            const segs = CONTENT.split('<br>');
                            let lastLength = 0;
                            const dyOffset = `${dyNumber}${unit}`;
                            segs.forEach((seg, index)=>{
                                SvgHelper.appendTspan(text, '', seg, index ? `-${lastLength}em` : '0', index ? dyOffset : '0');
                                lastLength = seg.length;
                            });
                        } else {
                            if (maybeNumber) {
                                CONTENT.split('').forEach((__char, index)=>{
                                    SvgHelper.appendTspan(text, '', __char, '0', '0');
                                });
                            } else {
                                SvgHelper.appendTspan(text, '', CONTENT, '0', '0');
                            }
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
                    static setSvgTextInfo(info, x, y, rotate) {
                        info.x = x;
                        info.y = y;
                        info.rotate = rotate;
                    }
                    static appendOuterPath(svg, WIDTH, HEIGHT, mmToPxScale, OUTER_LINE_COLOR) {
                        svg.setAttribute('width', `${WIDTH}mm`);
                        svg.setAttribute('height', `${HEIGHT}mm`);
                        const WIDTH_PX = mmToPxScale * WIDTH;
                        const HEIGHT_PX = mmToPxScale * HEIGHT;
                        const path = svgSpace1.edu.sonya.cc.SvgHelper.createSvgPath();
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke', OUTER_LINE_COLOR);
                        path.setAttribute('d', `M 0, 0 `.concat(`h ${WIDTH_PX} `, `v ${HEIGHT_PX} `, `h -${WIDTH_PX} `, ' z'));
                        svg.appendChild(path);
                    }
                    static appendOuterLine(svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
                        svg.setAttribute('width', `${WIDTH}mm`);
                        svg.setAttribute('height', `${HEIGHT}mm`);
                        const { appendLine  } = svgSpace1.edu.sonya.cc.SvgHelper;
                        appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
                        appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
                        appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
                        appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
                    }
                    static getTextStyleFontSizePatchCss(NUMBER, TEXT_STYLE) {
                        if (NUMBER > 99 && TEXT_STYLE.indexOf('font-size:') > -1) {
                            const fontSizeSeg = TEXT_STYLE.split('font-size:')[1].split(';')[0];
                            const fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, '');
                            const fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ''));
                            return `font-size:${fontValue * 2 / NUMBER.toString().length}${fontUnit};`;
                        }
                        return '';
                    }
                }
                cc.SvgHelper = SvgHelper;
            })(cc = sonya.cc || (sonya.cc = {}));
        })(sonya = edu1.sonya || (edu1.sonya = {}));
    })(edu1 = svgSpace11.edu || (svgSpace11.edu = {}));
})(svgSpace1 || (svgSpace1 = {}));
var boxSpace;
(function(boxSpace) {
    let edu1;
    (function(edu1) {
        let sonya;
        (function(sonya) {
            let cc;
            (function(cc) {
                let BoxKind;
                (function(BoxKind) {
                    BoxKind[BoxKind["none"] = 0] = "none";
                    BoxKind[BoxKind["cuboid"] = 1] = "cuboid";
                    BoxKind[BoxKind["cuboidWithoutTop"] = 2] = "cuboidWithoutTop";
                    BoxKind[BoxKind["cuboidWithoutBottom"] = 3] = "cuboidWithoutBottom";
                    BoxKind[BoxKind["cuboidCoverOnTheSameSide"] = 4] = "cuboidCoverOnTheSameSide";
                    BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutTop"] = 5] = "cuboidCoverOnTheSameSideWithoutTop";
                    BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutBottom"] = 6] = "cuboidCoverOnTheSameSideWithoutBottom";
                })(BoxKind = cc.BoxKind || (cc.BoxKind = {}));
                const SVG_NS = 'http://www.w3.org/2000/svg';
                class BoxGenerator {
                    batchCreate(createParameters) {
                        createParameters.forEach((createParameter, index)=>{
                            if (createParameter.id.length === 0) {
                                createParameter.id = `svg_index`;
                            }
                        });
                        return createParameters.map((createParameter)=>this.create(createParameter));
                    }
                    create({ id , boxKind , lengths: LENGTHS , contents: CONTENTS , outerLineStyle: OUTER_LINE_STYLE , innerLineStyle: INNER_LINE_STYLE , textStyle: TEXT_STYLE , rotate: ROTATE , move: MOVE , topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE , options: OPTIONS  }) {
                        if (id.length === 0) {
                            id = 'svg_0';
                        }
                        const FIRST_LENGTH = LENGTHS[0];
                        let FIXED_FIRST_LENGTH = FIRST_LENGTH;
                        let nested = false;
                        const { createSvg , appendText  } = svgSpace.edu.sonya.cc.SvgHelper;
                        const svg = createSvg();
                        svg.setAttribute('id', id);
                        const viewBox = {
                            left: 999999,
                            right: 0,
                            top: 999999,
                            bottom: 0
                        };
                        const infos = [];
                        switch(boxKind){
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
                        switch(boxKind){
                            case BoxKind.cuboid:
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSide:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                this.drawGraphsOfCuboidBox(svg, LENGTHS, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, boxKind, ROTATE, MOVE, TOP_WITHOUT_HALF_CIRCLE);
                                this.drawTextsOfCuboiBox(infos, LENGTHS, boxKind);
                                break;
                            default:
                                break;
                        }
                        infos.forEach(({ content , x , y , rotate  })=>{
                            appendText(svg, TEXT_STYLE, content, x, y, rotate, 'left top', null);
                        });
                        const width = `${viewBox.right}mm`;
                        const height = `${viewBox.bottom}mm`;
                        svg.setAttribute('width', width);
                        svg.setAttribute('height', height);
                        const outerSvg = createElement('wrap');
                        outerSvg.appendChild(svg);
                        outerSvg.setAttribute('id', id.concat('_wrapper'));
                        if (FIXED_FIRST_LENGTH !== FIRST_LENGTH) {
                            const scale = FIRST_LENGTH / FIXED_FIRST_LENGTH;
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
                    drawGraphsOfCuboidBox(svg, LENGTHS, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, boxKind, ROTATE, MOVE, TOP_WITHOUT_HALF_CIRCLE) {
                        const isSameSide = boxKind >= 4;
                        const LENGTH = LENGTHS[0];
                        const WIDTH = LENGTHS[2];
                        const HEIGHT = LENGTHS[1];
                        const OTHER_SIZE = isSameSide ? LENGTHS[3] : 0;
                        const MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
                        const LENGTH_PX = LENGTH * mmToPxScale;
                        const WIDTH_PX = WIDTH * mmToPxScale;
                        const HEIGHT_PX = HEIGHT * mmToPxScale;
                        const OTHER_SIZE_PX = OTHER_SIZE * mmToPxScale;
                        const duckTongueHeight = MIN_LENGTH * 0.5;
                        const duckTongueHeightPx = duckTongueHeight * mmToPxScale;
                        const pasteRegionHeight = LENGTH * 0.45;
                        const pasteRegionHeightPx = pasteRegionHeight * mmToPxScale;
                        const offsetXPx = LENGTH_PX * 0.1;
                        const pasteRegionWidthPx = HEIGHT_PX - offsetXPx * 2;
                        const duckTongueWidth = LENGTH * (1 - 0.1 * 2);
                        const duckTongueWidthPx = duckTongueWidth * mmToPxScale;
                        const YDifference = boxKind === BoxKind.cuboidWithoutTop || boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop ? duckTongueHeight + HEIGHT : 0;
                        const YDifferencePx = YDifference * mmToPxScale;
                        const diameter = duckTongueHeight * 0.8;
                        const radius = diameter * 0.5;
                        const lengthSubtractDiameter = LENGTH - diameter;
                        const halfLengthSubtractDiameter = lengthSubtractDiameter * 0.5;
                        const halfLengthSubtractDiameterPx = halfLengthSubtractDiameter * mmToPxScale;
                        const radiusPx = radius * mmToPxScale;
                        const diameterPx = diameter * mmToPxScale;
                        const pathStartY = duckTongueHeightPx + HEIGHT_PX - YDifferencePx;
                        const path = document.createElementNS(SVG_NS, 'path');
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke', '#000000');
                        if (boxKind < 4) {
                            path.setAttribute('d', `M 0, ${pathStartY} `.concat(boxKind === BoxKind.cuboidWithoutTop ? `h ${HEIGHT_PX * 3 + LENGTH_PX * 2} ` : ''.concat(TOP_WITHOUT_HALF_CIRCLE ? ''.concat(`h ${HEIGHT_PX + halfLengthSubtractDiameterPx} `, `a ${radiusPx} ${radiusPx} 0 1 0 ${diameterPx} 0`, `h ${halfLengthSubtractDiameterPx} `) : ''.concat(`h ${HEIGHT_PX + LENGTH_PX} `), `l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `, `v -${HEIGHT_PX} `, `l ${offsetXPx}, -${duckTongueHeightPx} `, `h ${duckTongueWidthPx} `, `l ${offsetXPx}, ${duckTongueHeightPx} `, `v ${HEIGHT_PX} `, `l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `), `v ${WIDTH_PX} `, `h -${LENGTH_PX + HEIGHT_PX} `, boxKind === BoxKind.cuboidWithoutBottom ? `h -${HEIGHT_PX * 2 + LENGTH_PX} ` : ''.concat(`l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `, `v ${HEIGHT_PX} `, `l -${offsetXPx}, ${duckTongueHeightPx} `, `h -${duckTongueWidthPx} `, `l -${offsetXPx}, -${duckTongueHeightPx} `, `v -${HEIGHT_PX} `, `l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `), ' z'));
                        } else {
                            path.setAttribute('d', `M 0, ${pathStartY} `.concat(boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop ? `h ${HEIGHT_PX * 2.5 + LENGTH_PX * 2} ` : ''.concat(`l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `, `v -${HEIGHT_PX} `, `l ${offsetXPx}, -${duckTongueHeightPx} `, `h ${duckTongueWidthPx} `, `l ${offsetXPx}, ${duckTongueHeightPx} `, `v ${HEIGHT_PX} `, `l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `, TOP_WITHOUT_HALF_CIRCLE ? ''.concat(`h ${halfLengthSubtractDiameterPx} `, `a ${radiusPx} ${radiusPx} 0 1 0 ${diameterPx} 0`, `h ${halfLengthSubtractDiameterPx + OTHER_SIZE_PX} `) : ''.concat(`h ${LENGTH_PX + OTHER_SIZE_PX} `)), `v ${WIDTH_PX} `, `h -${LENGTH_PX + OTHER_SIZE_PX} `, boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutBottom ? `h -${HEIGHT_PX * 2 + LENGTH_PX} ` : ''.concat(`l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `, `v ${HEIGHT_PX} `, `l -${offsetXPx}, ${duckTongueHeightPx} `, `h -${duckTongueWidthPx} `, `l -${offsetXPx}, -${duckTongueHeightPx} `, `v -${HEIGHT_PX} `, `l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `), ' z'));
                        }
                        svg.appendChild(path);
                        let style = '';
                        if (ROTATE) {
                            style = 'transform:rotate(180deg);';
                        }
                        if (MOVE) {
                            style += `position:relative;margin-top:-${HEIGHT + duckTongueHeight - Math.max(0, pasteRegionHeight * 2 - (HEIGHT + duckTongueHeight))}mm;`;
                        }
                        if (style.length) {
                            svg.setAttribute('style', style);
                        }
                        const X2 = 0 + HEIGHT;
                        const X3 = X2 + LENGTH;
                        const X4 = X3 + HEIGHT;
                        const X5 = X4 + LENGTH;
                        const X6 = X5 + (isSameSide ? OTHER_SIZE : HEIGHT);
                        const Y1 = 0 - YDifference;
                        const Y2 = Y1 + duckTongueHeight;
                        const Y4 = Y2 + HEIGHT;
                        const Y5 = Y4 + WIDTH;
                        const Y7 = Y5 + HEIGHT;
                        const Y8 = Y7 + duckTongueHeight;
                        const { appendLine  } = svgSpace.edu.sonya.cc.SvgHelper;
                        if (boxKind < 4) {
                            if (boxKind !== BoxKind.cuboidWithoutTop) {
                                appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
                                appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
                            }
                        } else {
                            if (boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutTop) {
                                appendLine(svg, INNER_LINE_STYLE, X2, X3, Y2, Y2, null);
                                appendLine(svg, INNER_LINE_STYLE, 0, X4, Y4, Y4, null);
                            }
                        }
                        if (boxKind !== BoxKind.cuboidWithoutBottom && boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutBottom) {
                            appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
                        }
                        appendLine(svg, INNER_LINE_STYLE, 0, X4, Y5, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
                        viewBox.left = 0;
                        viewBox.top = 0;
                        viewBox.right = X6;
                        switch(boxKind){
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                viewBox.bottom = Y8 - (duckTongueHeight + HEIGHT);
                                break;
                            default:
                                viewBox.bottom = Y8;
                                break;
                        }
                    }
                    drawTextsOfCuboiBox(infos, LENGTHS, boxKind) {
                        const { setSvgTextInfo  } = svgSpace.edu.sonya.cc.SvgHelper;
                        const LENGTH = LENGTHS[0];
                        const WIDTH = LENGTHS[2];
                        const HEIGHT = LENGTHS[1];
                        const MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
                        const duckTongueHeight = MIN_LENGTH * 0.5;
                        const YDifference = boxKind === BoxKind.cuboidWithoutTop || boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop ? duckTongueHeight + HEIGHT : 0;
                        const X1 = -1 * (HEIGHT * 2 + LENGTH * 1.5);
                        const X2 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
                        const X3 = HEIGHT + LENGTH * 0.5;
                        const X4 = X1;
                        const X5 = -X2;
                        const X6 = X3;
                        const Y1 = -1 * (duckTongueHeight + HEIGHT * 0.5);
                        const Y2 = -1 * (HEIGHT * 0.5);
                        const Y3 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
                        const Y4 = -1 * (duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference);
                        const Y5 = HEIGHT * 1.5 + LENGTH;
                        const Y6 = duckTongueHeight + HEIGHT + WIDTH + HEIGHT * 0.5 - YDifference;
                        switch(boxKind){
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                                infos[0].content = '';
                                break;
                            case BoxKind.cuboid:
                            case BoxKind.cuboidWithoutBottom:
                                setSvgTextInfo(infos[0], X1, Y1, 180);
                                break;
                            case BoxKind.cuboidCoverOnTheSameSide:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                setSvgTextInfo(infos[0], -1 * (HEIGHT + LENGTH * 0.5), Y1, 180);
                                break;
                            default:
                                break;
                        }
                        setSvgTextInfo(infos[1], X2, Y2, 90);
                        setSvgTextInfo(infos[2], X3, Y3, 0);
                        setSvgTextInfo(infos[3], X4, Y4, 180);
                        setSvgTextInfo(infos[4], X5, Y5, -90);
                        switch(boxKind){
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                infos[5].content = '';
                                break;
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                            case BoxKind.cuboid:
                            case BoxKind.cuboidCoverOnTheSameSide:
                                setSvgTextInfo(infos[5], X6, Y6, 0);
                                break;
                            default:
                                break;
                        }
                    }
                }
                cc.BoxGenerator = BoxGenerator;
            })(cc = sonya.cc || (sonya.cc = {}));
        })(sonya = edu1.sonya || (edu1.sonya = {}));
    })(edu1 = boxSpace.edu || (boxSpace.edu = {}));
})(boxSpace || (boxSpace = {}));
function pushSameValueTimes(array, value, times) {
    for(let i = 0; i < times; ++i){
        array.push(value);
    }
}
class BoxBase extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageBox';
    constructor(){
        super({
            topWithoutHalfCircle: false
        }, {});
    }
    updateOtherDataLevel3 = (newData)=>{
        const { topWithoutHalfCircle ,  } = newData;
        const { data , topWithoutHalfCircleRadioArray ,  } = this;
        data.topWithoutHalfCircle = topWithoutHalfCircle;
        topWithoutHalfCircleRadioArray[topWithoutHalfCircle ? 1 : 0].checked = true;
    };
    initCoreElementsBeforeTable = ()=>{
        const { configCoreElement , getWrapElement , idOrClassPrefix  } = this;
        let wrapElement;
        wrapElement = getWrapElement({
            en: 'Top Half Circle',
            zh_cn: '顶部半圆',
            zh_tw: '頂部半圓'
        });
        wrapElement.id = `${idOrClassPrefix}HalfCircleWrap`;
        this.initRadioGroupByBooleanOrNumberValue([
            {
                value: false,
                i18nHtml: getI18nInnerHTML({
                    en: 'Hide',
                    zh_cn: '无',
                    zh_tw: '無'
                })
            },
            {
                value: true,
                i18nHtml: getI18nInnerHTML({
                    en: 'Show',
                    zh_cn: '有',
                    zh_tw: '有'
                })
            }, 
        ], 'topWithoutHalfCircle', this.topWithoutHalfCircleRadioArray, wrapElement);
    };
    topWithoutHalfCircleRadioArray = [];
    updateOtherDataOfBox = (newData)=>{};
    countDataAndComputedData = ()=>{
        this.countDataAndComputedDataInBrickWithTableBase();
        const { BoxGenerator  } = boxSpace.edu.sonya.cc;
        const boxGenerator = new BoxGenerator();
        const { data , computedData  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginLeft , list , topWithoutHalfCircle ,  } = data;
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
        list.forEach(({ id , boxKind , lengths , contents , outerLineStyle , innerLineStyle , textStyle , rotateAndMove , topWithoutHalfCircle , options ,  })=>{
            const { css: svgCss , svg  } = boxGenerator.create({
                id,
                boxKind,
                lengths,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                rotateAndMove,
                topWithoutHalfCircle,
                options
            });
            svgList.push(svg);
            css += svgCss;
        });
        const en = `${FILENAME_POSTFIX}Boxs`;
        const zh_cn = `${FILENAME_POSTFIX}盒子`;
        const zh_tw = `${FILENAME_POSTFIX}盒子`;
        computedData.title = {
            en,
            zh_cn,
            zh_tw
        };
        computedData.css = css;
        computedData.html = this.getAutomaticPaginationHtmlFromChildList(svgList, MAX_X, MAX_Y);
    };
    idOrClassPrefix = 'brickPageBox';
    getUsableList = ()=>{
        const usableBoxs = [];
        this.appendBoxOfCuboid(usableBoxs);
        const usableList = [];
        usableBoxs.forEach(({ name , infos  })=>{
            const strongI18n = {
                en: name,
                zh_cn: name,
                zh_tw: name
            };
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
            usableList.push({
                strongI18n,
                buttonList
            });
        });
        return usableList;
    };
    appendBoxOfCuboid = (usableBoxs)=>{
        const BoxKind = boxSpace.edu.sonya.cc.BoxKind;
        const outerLineStyle = 'stroke:#555;stroke-width:0.2mm;';
        const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
        const textStyle = 'font-size:6mm;font-family:"Times New Roman", "Kaiti";';
        const textStyleBig = 'font-size:8mm;font-family:"Times New Roman", "Kaiti";';
        const contents = getArrayRepeatSameValue('', 6);
        const i18nContentsOfRummikub = getArrayRepeatSameValue(getI18nInnerHTML({
            en: 'Rummikub',
            zh_cn: '拉密',
            zh_tw: '拉密'
        }), 6);
        const infosCuboid = [];
        const infosCuboidCoverOnTheSameSide = [];
        [
            {
                lengths: [
                    40,
                    20,
                    56
                ],
                contents: getArrayRepeatSameValue('英文扑克', 6),
                textStyle,
                captionI18n: '&nbsp;&nbsp;40<br/>×20<br/>×56',
                captionI18nSameSide: `&nbsp;&nbsp;40<br/>×20<br/>×56<br/>+${10}`,
                otherSize: 10
            },
            {
                lengths: [
                    56,
                    50,
                    80
                ],
                contents: getArrayRepeatSameValue('拼音扑克', 6),
                textStyle: textStyleBig,
                captionI18n: '&nbsp;&nbsp;56<br/>×50<br/>×80',
                captionI18nSameSide: `&nbsp;&nbsp;56<br/>×50<br/>×80<br/>+${10}`,
                otherSize: 10
            },
            {
                lengths: [
                    18,
                    50,
                    25
                ],
                contents: i18nContentsOfRummikub,
                textStyle: textStyleBig,
                captionI18n: {
                    en: '&nbsp;&nbsp;18<br/>×50<br/>×25<br/>Rummikub',
                    zh_cn: '&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密',
                    zh_tw: '&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密'
                },
                captionI18nSameSide: {
                    en: `&nbsp;&nbsp;18<br/>×50<br/>×25<br/>+${10}<br/>Rummikub`,
                    zh_cn: `&nbsp;&nbsp;18<br/>×50<br/>×25<br/>+${10}<br/>拉密`,
                    zh_tw: `&nbsp;&nbsp;18<br/>×50<br/>×25<br/>+${10}<br/>拉密`
                },
                otherSize: 10
            },
            {
                lengths: [
                    20,
                    50,
                    28
                ],
                contents: i18nContentsOfRummikub,
                textStyle: textStyleBig,
                captionI18n: {
                    en: '&nbsp;&nbsp;20<br/>×50<br/>×28<br/>Rummikub',
                    zh_cn: '&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密',
                    zh_tw: '&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密'
                },
                captionI18nSameSide: {
                    en: `&nbsp;&nbsp;20<br/>×50<br/>×28<br/>+${10}<br/>Rummikub`,
                    zh_cn: `&nbsp;&nbsp;20<br/>×50<br/>×28<br/>+${10}<br/>拉密`,
                    zh_tw: `&nbsp;&nbsp;20<br/>×50<br/>×28<br/>+${10}<br/>拉密`
                },
                otherSize: 10
            }, 
        ].forEach(({ lengths , contents , textStyle , captionI18n , captionI18nSameSide , otherSize  })=>{
            infosCuboid.push({
                id: '',
                boxKind: BoxKind.cuboid,
                lengths,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options: {},
                captionI18n
            });
            infosCuboidCoverOnTheSameSide.push({
                id: '',
                boxKind: BoxKind.cuboidCoverOnTheSameSide,
                lengths: lengths.concat([
                    otherSize
                ]),
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options: {},
                captionI18n: captionI18nSameSide
            });
        });
        [
            10,
            20,
            30,
            40,
            50,
            60,
            70,
            80,
            90,
            10
        ].forEach((size)=>{
            infosCuboid.push({
                id: '',
                boxKind: BoxKind.cuboid,
                lengths: [
                    size,
                    size,
                    size
                ],
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options: {},
                captionI18n: `&nbsp;&nbsp;${size}<br/>×${size}<br/>×${size}`
            });
            infosCuboidCoverOnTheSameSide.push({
                id: '',
                boxKind: BoxKind.cuboidCoverOnTheSameSide,
                lengths: [
                    size,
                    size,
                    size,
                    10
                ],
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options: {},
                captionI18n: `&nbsp;&nbsp;${size}<br/>×${size}<br/>×${size}<br/>+${10}`
            });
        });
        const infosOfCuboidWithoutBottom = [];
        const infosOfCuboidCoverOnTheSameSideWithoutBottom = [];
        [
            [
                10,
                10,
                3
            ],
            [
                20,
                20,
                8
            ],
            [
                30,
                30,
                10
            ],
            [
                40,
                40,
                10
            ],
            [
                50,
                50,
                10
            ],
            [
                60,
                60,
                10
            ],
            [
                70,
                70,
                10
            ],
            [
                80,
                80,
                10
            ],
            [
                90,
                90,
                10
            ], 
        ].forEach((lengths)=>{
            const captionI18n = `&nbsp;&nbsp;${lengths[0]}<br/>×${lengths[1]}<br/>×${lengths[2]}`;
            infosOfCuboidCoverOnTheSameSideWithoutBottom.push({
                id: '',
                boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutBottom,
                lengths,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options: {},
                captionI18n
            });
            if (lengths[0] <= 80) {
                infosOfCuboidWithoutBottom.push({
                    id: '',
                    boxKind: BoxKind.cuboidWithoutBottom,
                    lengths,
                    contents,
                    outerLineStyle,
                    innerLineStyle,
                    textStyle,
                    options: {},
                    captionI18n
                });
            }
        });
        const infosOfCuboidWithoutTop = [];
        const infosOfCuboidCoverOnTheSameSideWithoutTop = [];
        [
            [
                9,
                9,
                10
            ],
            [
                19,
                19,
                20
            ],
            [
                29,
                29,
                30
            ],
            [
                39,
                39,
                40
            ],
            [
                49,
                49,
                50
            ],
            [
                59,
                59,
                60
            ],
            [
                69,
                69,
                70
            ],
            [
                79,
                79,
                80
            ],
            [
                89,
                89,
                90
            ], 
        ].forEach((lengths)=>{
            const captionI18n = `&nbsp;&nbsp;${lengths[0]}<br/>×${lengths[1]}<br/>×${lengths[2]}`;
            infosOfCuboidCoverOnTheSameSideWithoutTop.push({
                id: '',
                boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutTop,
                lengths,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                options: {},
                captionI18n
            });
            if (lengths[0] <= 80) {
                infosOfCuboidWithoutTop.push({
                    id: '',
                    boxKind: BoxKind.cuboidWithoutTop,
                    lengths,
                    contents,
                    outerLineStyle,
                    innerLineStyle,
                    textStyle,
                    options: {},
                    captionI18n
                });
            }
        });
        usableBoxs.push({
            name: getI18nInnerHTML({
                en: 'Cuboid',
                zh_cn: '异侧',
                zh_tw: '異側'
            }),
            infos: JSON.parse(JSON.stringify(infosCuboid))
        });
        usableBoxs.push({
            name: getI18nInnerHTML({
                en: 'Cuboid which cover on the same side',
                zh_cn: '盖子同侧',
                zh_tw: '蓋子同側'
            }),
            infos: JSON.parse(JSON.stringify(infosCuboidCoverOnTheSameSide))
        });
        usableBoxs.push({
            name: getI18nInnerHTML({
                en: 'Cuboid without top',
                zh_cn: '异侧无顶',
                zh_tw: '異側無頂'
            }),
            infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutTop))
        });
        usableBoxs.push({
            name: getI18nInnerHTML({
                en: 'Cuboid without bottom',
                zh_cn: '异侧无底',
                zh_tw: '異側無底'
            }),
            infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutBottom))
        });
        usableBoxs.push({
            name: getI18nInnerHTML({
                en: 'Cuboid which cover on the same side and without top',
                zh_cn: '盖子同侧无顶',
                zh_tw: '蓋子同側無頂'
            }),
            infos: JSON.parse(JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutTop))
        });
        usableBoxs.push({
            name: getI18nInnerHTML({
                en: 'Cuboid which cover on the same side and without bottom',
                zh_cn: '盖子同侧无底',
                zh_tw: '蓋子同側無底'
            }),
            infos: JSON.parse(JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutBottom))
        });
    };
    createTableBodyRow = (item)=>{
        const { id , boxKind , lengths , contents , outerLineStyle , innerLineStyle , textStyle , rotate , move , options ,  } = item;
        const { tableBodyElement , appendTextareaTd , appendCheckboxTdWithoutText  } = this;
        const tr = createElement('tr');
        tableBodyElement.appendChild(tr);
        this.appendOperationTd(tr, item);
        this.appendLengthsTd(tr, item);
        this.appendContentsTd(tr, item);
        appendCheckboxTdWithoutText(tr, rotate, item, 'rotate');
        appendCheckboxTdWithoutText(tr, move, item, 'move');
        appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
        appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
        appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
    };
    initTableHead = ()=>{
        this.appendTableHeadCell({
            en: 'Relevant length, such as length, width and height',
            zh_cn: '相关长度，如长宽高',
            zh_tw: '相關長度，如長寬高'
        });
        this.appendTableHeadCell({
            en: 'Contents of all sides',
            zh_cn: '各面内容',
            zh_tw: '各面內容'
        });
        this.appendTableHeadCell({
            en: 'Rotate',
            zh_cn: '旋转',
            zh_tw: '旋轉'
        });
        this.appendTableHeadCell({
            en: 'Move',
            zh_cn: '上移',
            zh_tw: '上移'
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
    appendLengthsTd = (tr, box)=>{
        const td = createElement('td');
        tr.appendChild(td);
        box.lengths.forEach((length, index)=>{
            const input = createElement('input');
            td.appendChild(input);
            input.type = 'number';
            input.setAttribute('min', '0');
            input.setAttribute('max', '200');
            input.value = length.toString();
            input.onchange = input.focus = ()=>{
                box.lengths[index] = parseFloat(input.value);
                this.build();
            };
        });
    };
    appendContentsTd = (tr, box)=>{
        const td = createElement('td');
        tr.appendChild(td);
        const BoxKind = boxSpace.edu.sonya.cc.BoxKind;
        const { boxKind , contents  } = box;
        const { idOrClassPrefix  } = this;
        let count = 0;
        switch(boxKind){
            case BoxKind.cuboid:
            case BoxKind.cuboidWithoutTop:
            case BoxKind.cuboidWithoutBottom:
            case BoxKind.cuboidCoverOnTheSameSide:
            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                count = 6;
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
            textarea.value = box.contents.join('\n');
            textarea.rows = count;
            textarea.onchange = textarea.focus = ()=>{
                textarea.value.split('\n').concat(emptyArray).slice(0, count).forEach((item, index)=>{
                    box.contents[index] = item;
                });
                this.build();
            };
        } else {
            i18nNameArray.forEach((lang)=>{
                const textarea = createElement('textarea');
                td.appendChild(textarea);
                textarea.value = box.contents.map((content)=>content[lang]).join('\n');
                textarea.rows = 4;
                textarea.onchange = textarea.focus = ()=>{
                    textarea.value.split('\n').concat(emptyArray).slice(0, count).forEach((item, index)=>{
                        box.contents[index][lang] = item;
                    });
                    this.build();
                };
            });
        }
    };
}
