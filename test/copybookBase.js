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
function stopEventBubble(event) {
    event.cancelBubble = true;
    event.preventDefault();
    event.stopPropagation();
    return false;
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
        let { data: { paperSize , isLandscape , maxX , maxY , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight  }  } = this;
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
        const { paperSize , isLandscape , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight , diceKind  } = newData;
        const { paperSizeRadioArray , isLandscapeRadioArray , pageMarginTopElement , pageMarginBottomElement , pageMarginLeftElement , pageMarginRightElement  } = this;
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
class CopybookBase extends BrickBase {
    constructor(appendData, otherComputedData){
        super({
            copybooks: [],
            selectedCheckboxIndexArray: [],
            kind: 'pinyinToChinese',
            inputMethod: 'select',
            fontSize: 'small',
            color: 'blackOnGreen',
            ...appendData
        }, {
            css: '',
            html: '',
            ...otherComputedData
        });
    }
    updateOtherDataOfCopybook = (_newData)=>{};
    usableCopybookCheckboxElementArray = [];
    usableCopybooksPeopleEducationEdition = [];
    kindElementArray = [];
    initKindElements = ()=>{
        const wrapLabelI18n = {
            en: `Kind`,
            zh_cn: `类型`,
            zh_tw: `類型`
        };
        const radiosInfoArray = [
            {
                value: `pinyinToChinese`,
                i18nHtml: getI18nInnerHTML({
                    en: `Reading Pinyin and Writing Chinese Characters`,
                    zh_cn: `看拼音写汉字`,
                    zh_tw: `看拼音寫漢字`
                })
            },
            {
                value: `chineseToPinyin`,
                i18nHtml: getI18nInnerHTML({
                    en: `Look at Chinese characters and write pinyin`,
                    zh_cn: `看汉字写拼音`,
                    zh_tw: `看漢字寫拼音`
                })
            }
        ];
        this.initRadioGroupWithLabelByStringValue(radiosInfoArray, 'kind', this.kindElementArray, wrapLabelI18n);
    };
    inputMethodElementArray = [];
    initInputMethodElements = ()=>{
        const wrapLabelI18n = {
            en: `Entry method`,
            zh_cn: `录入方式`,
            zh_tw: `錄入方式`
        };
        const radiosInfoArray = [
            {
                value: `select`,
                i18nHtml: getI18nInnerHTML({
                    en: `Select`,
                    zh_cn: `选择`,
                    zh_tw: `選擇`
                })
            },
            {
                value: `manualInput`,
                i18nHtml: getI18nInnerHTML({
                    en: `Manual input`,
                    zh_cn: `手动输入`,
                    zh_tw: `手動輸入`
                })
            }
        ];
        this.initRadioGroupWithLabelByStringValue(radiosInfoArray, 'inputMethod', this.inputMethodElementArray, wrapLabelI18n);
    };
    fontSizeElementArray = [];
    initFontSizeElements = ()=>{
        const wrapLabelI18n = {
            en: `Font Size`,
            zh_cn: `字号`,
            zh_tw: `字型大小`
        };
        const radiosInfoArray = [
            {
                value: `small`,
                i18nHtml: getI18nInnerHTML({
                    en: `Small`,
                    zh_cn: `小`,
                    zh_tw: `小`
                })
            },
            {
                value: `middle`,
                i18nHtml: getI18nInnerHTML({
                    en: `Middle`,
                    zh_cn: `中`,
                    zh_tw: `中`
                })
            },
            {
                value: `big`,
                i18nHtml: getI18nInnerHTML({
                    en: `Big`,
                    zh_cn: `大`,
                    zh_tw: `大`
                })
            }
        ];
        this.initRadioGroupWithLabelByStringValue(radiosInfoArray, 'fontSize', this.fontSizeElementArray, wrapLabelI18n);
    };
    colorElementArray = [];
    initColorElements = ()=>{
        const wrapLabelI18n = {
            en: `Color`,
            zh_cn: `颜色`,
            zh_tw: `顏色`
        };
        const radiosInfoArray = [
            {
                value: `blackOnGreen`,
                i18nHtml: getI18nInnerHTML({
                    en: `Green line and black characters.`,
                    zh_cn: `绿线黑字`,
                    zh_tw: `綠線黑字`
                })
            },
            {
                value: `redOnBlack`,
                i18nHtml: getI18nInnerHTML({
                    en: `Black line and red characters.`,
                    zh_cn: `黑线红字`,
                    zh_tw: `黑線紅字`
                })
            },
            {
                value: `blackOnRed`,
                i18nHtml: getI18nInnerHTML({
                    en: `Red line and black characters.`,
                    zh_cn: `红线黑字`,
                    zh_tw: `紅線黑字`
                })
            }
        ];
        this.initRadioGroupWithLabelByStringValue(radiosInfoArray, 'color', this.colorElementArray, wrapLabelI18n);
    };
    pinyinArrayWithoutTone = [
        'chuɑnɡ',
        'shuɑnɡ',
        'zhuɑnɡ',
        'chɑnɡ',
        'chenɡ',
        'chonɡ',
        'chuɑi',
        'chuɑn',
        'ɡuɑnɡ',
        'huɑnɡ',
        'jiɑnɡ',
        'jionɡ',
        'kuɑnɡ',
        'liɑnɡ',
        'niɑnɡ',
        'qiɑnɡ',
        'qionɡ',
        'shɑnɡ',
        'shenɡ',
        'shuɑi',
        'shuɑn',
        'xiɑnɡ',
        'xionɡ',
        'zhɑnɡ',
        'zhenɡ',
        'zhonɡ',
        'zhuɑi',
        'zhuɑn',
        'bɑnɡ',
        'benɡ',
        'biɑn',
        'biɑo',
        'binɡ',
        'cɑnɡ',
        'cenɡ',
        'chɑi',
        'chɑn',
        'chɑo',
        'chen',
        'chou',
        'chuɑ',
        'chui',
        'chun',
        'chuo',
        'conɡ',
        'cuɑn',
        'dɑnɡ',
        'denɡ',
        'diɑn',
        'diɑo',
        'dinɡ',
        'donɡ',
        'duɑn',
        'fɑnɡ',
        'fenɡ',
        'fiɑo',
        'ɡɑnɡ',
        'ɡenɡ',
        'ɡonɡ',
        'ɡuɑi',
        'ɡuɑn',
        'hɑnɡ',
        'henɡ',
        'honɡ',
        'huɑi',
        'huɑn',
        'jiɑn',
        'jiɑo',
        'jinɡ',
        'juɑn',
        'kɑnɡ',
        'kenɡ',
        'konɡ',
        'kuɑi',
        'kuɑn',
        'lɑnɡ',
        'lenɡ',
        'liɑn',
        'liɑo',
        'linɡ',
        'lonɡ',
        'luɑn',
        'mɑnɡ',
        'menɡ',
        'miɑn',
        'miɑo',
        'minɡ',
        'nɑnɡ',
        'nenɡ',
        'niɑn',
        'niɑo',
        'ninɡ',
        'nonɡ',
        'nuɑn',
        'pɑnɡ',
        'penɡ',
        'piɑn',
        'piɑo',
        'pinɡ',
        'qiɑn',
        'qiɑo',
        'qinɡ',
        'quɑn',
        'rɑnɡ',
        'renɡ',
        'ronɡ',
        'ruɑn',
        'sɑnɡ',
        'senɡ',
        'shɑi',
        'shɑn',
        'shɑo',
        'shei',
        'shen',
        'shou',
        'shuɑ',
        'shui',
        'shun',
        'shuo',
        'sonɡ',
        'suɑn',
        'tɑnɡ',
        'tenɡ',
        'tiɑn',
        'tiɑo',
        'tinɡ',
        'tonɡ',
        'tuɑn',
        'wɑnɡ',
        'wenɡ',
        'xiɑn',
        'xiɑo',
        'xinɡ',
        'xuɑn',
        'yɑnɡ',
        'yinɡ',
        'yonɡ',
        'yuɑn',
        'zɑnɡ',
        'zenɡ',
        'zhɑi',
        'zhɑn',
        'zhɑo',
        'zhei',
        'zhen',
        'zhou',
        'zhuɑ',
        'zhui',
        'zhun',
        'zhuo',
        'zonɡ',
        'zuɑn',
        'ɑnɡ',
        'bɑi',
        'bɑn',
        'bɑo',
        'bei',
        'ben',
        'bie',
        'bin',
        'cɑi',
        'cɑn',
        'cɑo',
        'cen',
        'chɑ',
        'che',
        'chi',
        'chu',
        'cou',
        'cui',
        'cun',
        'cuo',
        'dɑi',
        'dɑn',
        'dɑo',
        'dei',
        'den',
        'diɑ',
        'die',
        'diu',
        'dou',
        'dui',
        'dun',
        'duo',
        'enɡ',
        'fɑn',
        'fei',
        'fen',
        'fou',
        'ɡɑi',
        'ɡɑn',
        'ɡɑo',
        'ɡei',
        'ɡen',
        'ɡou',
        'ɡuɑ',
        'ɡui',
        'ɡun',
        'ɡuo',
        'hɑi',
        'hɑn',
        'hɑo',
        'hei',
        'hen',
        'hou',
        'huɑ',
        'hui',
        'hun',
        'huo',
        'jiɑ',
        'jie',
        'jin',
        'jiu',
        'jue',
        'jun',
        'kɑi',
        'kɑn',
        'kɑo',
        'kei',
        'ken',
        'kou',
        'kuɑ',
        'kui',
        'kun',
        'kuo',
        'lɑi',
        'lɑn',
        'lɑo',
        'lei',
        'liɑ',
        'lie',
        'lin',
        'liu',
        'lou',
        'lue',
        'lun',
        'luo',
        'mɑi',
        'mɑn',
        'mɑo',
        'mei',
        'men',
        'mie',
        'min',
        'miu',
        'mou',
        'nɑi',
        'nɑn',
        'nɑo',
        'nei',
        'nen',
        'nie',
        'nin',
        'niu',
        'nou',
        'nue',
        'nun',
        'nuo',
        'pɑi',
        'pɑn',
        'pɑo',
        'pei',
        'pen',
        'pie',
        'pin',
        'pou',
        'qiɑ',
        'qie',
        'qin',
        'qiu',
        'que',
        'qun',
        'rɑn',
        'rɑo',
        'ren',
        'rou',
        'ruɑ',
        'rui',
        'run',
        'ruo',
        'sɑi',
        'sɑn',
        'sɑo',
        'sen',
        'shɑ',
        'she',
        'shi',
        'shu',
        'sou',
        'sui',
        'sun',
        'suo',
        'tɑi',
        'tɑn',
        'tɑo',
        'tei',
        'tie',
        'tou',
        'tui',
        'tun',
        'tuo',
        'wɑi',
        'wɑn',
        'wei',
        'wen',
        'xiɑ',
        'xie',
        'xin',
        'xiu',
        'xue',
        'xun',
        'yɑn',
        'yɑo',
        'yin',
        'you',
        'yue',
        'yun',
        'zɑi',
        'zɑn',
        'zɑo',
        'zei',
        'zen',
        'zhɑ',
        'zhe',
        'zhi',
        'zhu',
        'zou',
        'zui',
        'zun',
        'zuo',
        'ɑi',
        'ɑn',
        'ɑo',
        'bɑ',
        'bi',
        'bo',
        'bu',
        'cɑ',
        'ce',
        'ci',
        'cu',
        'dɑ',
        'de',
        'di',
        'du',
        'ei',
        'en',
        'er',
        'fɑ',
        'fo',
        'fu',
        'ɡɑ',
        'ɡe',
        'ɡu',
        'hɑ',
        'he',
        'hu',
        'ji',
        'ju',
        'kɑ',
        'ke',
        'ku',
        'lɑ',
        'le',
        'li',
        'lo',
        'lu',
        'lü',
        'mɑ',
        'me',
        'mi',
        'mo',
        'mu',
        'nɑ',
        'ne',
        'ni',
        'nu',
        'nü',
        'ou',
        'pɑ',
        'pi',
        'po',
        'pu',
        'qi',
        'qu',
        're',
        'ri',
        'ru',
        'sɑ',
        'se',
        'si',
        'su',
        'tɑ',
        'te',
        'ti',
        'tu',
        'wɑ',
        'wo',
        'wu',
        'xi',
        'xu',
        'yɑ',
        'ye',
        'yi',
        'yo',
        'yu',
        'zɑ',
        'ze',
        'zi',
        'zu',
        'ɑ',
        'e',
        'o'
    ];
    isPinyinBill = (pinyinBill)=>{
        let pinyinBillTemp = pinyinBill;
        let pinyinBillTempLength = pinyinBillTemp.length;
        while(pinyinBillTempLength){
            let find = false;
            for(let leftLength = 6; leftLength > 0; --leftLength){
                if (pinyinBillTempLength < leftLength) {
                    continue;
                }
                const leftPinyin = pinyinBillTemp.substring(0, leftLength + 1);
                if (this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
                    continue;
                }
                if (pinyinBillTempLength === leftLength) {
                    find = true;
                    pinyinBillTemp = '';
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
    splitPinyin = (pinyinBill, pinyinArray, charCount)=>{
        pinyinBill = pinyinBill.toLowerCase();
        const isEndOfR = pinyinBill.substr(-1) === 'r';
        if (isEndOfR) {
            pinyinBill = pinyinBill.substr(0, pinyinBill.length - 1);
        }
        let pinyinBillTemp = pinyinBill;
        const array = [];
        let pinyinBillTempLength = pinyinBillTemp.length;
        while(pinyinBillTempLength){
            let find = false;
            for(let leftLength = 6; leftLength > 0; --leftLength){
                if (pinyinBillTempLength < leftLength) {
                    continue;
                }
                const leftPinyin = pinyinBillTemp.substring(0, leftLength + 1);
                if (this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
                    continue;
                }
                if (pinyinBillTempLength === leftLength) {
                    find = true;
                    array.push(leftPinyin);
                    pinyinBillTemp = '';
                    break;
                }
                const rightPinyinBill = pinyinBillTemp.substr(leftLength);
                if (this.isPinyinBill(rightPinyinBill)) {
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
        const count = pinyinArray.length;
        if (isEndOfR) {
            const last = pinyinArray.splice(count - 1, 1)[0].concat('r');
            pinyinArray.push(last);
        }
    };
    fixPinyinArray = (pinyinBill, pinyinArray, charCount)=>{
        const { splitPinyin  } = this;
        const array = [];
        pinyinArray.forEach((seg)=>{
            splitPinyin(seg, array, charCount);
        });
        if (array.length !== charCount) {
            array.length = 0;
            splitPinyin(pinyinBill, array, charCount);
        }
        pinyinArray.length = 0;
        array.forEach((pinyin)=>{
            pinyinArray.push(pinyin);
        });
    };
    countDataAndComputedData = ()=>{
        const { data , computedData  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight , copybooks , selectedCheckboxIndexArray , kind , inputMethod , fontSize , color  } = data;
        const SCALE = fontSize === 'middle' ? 1 : fontSize === 'small' ? 12 / 15 : 18 / 15;
        const RECTANGLE_WIDTH = 15 * SCALE;
        const RECTANGLE_HEIGHT = 23 * SCALE;
        const PINYIN_FONT_SIZE = 15 * SCALE;
        const PINYIN_TOP = -0.42 * SCALE;
        const MID_TEXT_WIDTH = 15 * 54 / 80;
        const TEXT_WIDTH = MID_TEXT_WIDTH * SCALE;
        const TEXT_HEIGHT = MID_TEXT_WIDTH * SCALE;
        const TEXT_LEFT = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5;
        const TEXT_BOTTOM = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5 - 22 / 54 * SCALE;
        const fontColor = color === 'redOnBlack' ? '#ff0000' : '#000000';
        const css = `/* common.css */
		* { margin:0;border:0;padding:0; }
		* { box-sizing:border-box; }

		body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}

		page { display:flex;flex-flow:wrap;column-gap:1mm;row-gap:2mm;flex:100%;justify-content:flex-start;align-items:flex-start; }
		
		/* landscape 横向 portrait 纵向*/ 
		@media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
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
		/* pinyin[chars="6"]{letter-spacing:-0.05em;font-size:${PINYIN_FONT_SIZE * 0.95}pt;} */
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
		`;
        const BACKGOUND_SVG_SRC = `http://edu.sonya.cc/images/3brick/1/background/${color}.svg`;
        const PAGE_WIDTH = MAX_X, PAGE_HEIGHT = MAX_Y;
        const HORIZONTAL_SPACE = 1;
        const ROWS_COUNT = Math.floor((PAGE_HEIGHT + 2) / (RECTANGLE_HEIGHT + 2));
        let html = '';
        let problemsHtml = '';
        let answersHtml = '';
        const problemsStartHtml = `<page class="copybookProblemsPage">`;
        const answersStartHtml = `<page class="copybookAnswersPage">`;
        const pageEndHtml = '</page>';
        const wordWrapStartHtml = '<div class="wordWrap">';
        const wordWrapEndHtml = '</div>';
        const randomizedCopybooks = this.getRandomizedCopybooks();
        if (randomizedCopybooks.length) {
            let rowIndex = 0;
            let currentRowWidth = 0;
            problemsHtml += problemsStartHtml;
            answersHtml += answersStartHtml;
            randomizedCopybooks.forEach(({ chinese , pinyin  })=>{
                pinyin = pinyin.replace(/\//gi, '\'').replace(/a/g, 'ɑ').replace(/g/g, 'ɡ');
                const charArray = chinese.split('');
                const pinyinArray = pinyin.split('\'');
                const charCount = charArray.length;
                if (charCount !== pinyinArray.length) {
                    this.fixPinyinArray(pinyin, pinyinArray, charCount);
                }
                const CURRENT_CELL_WIDTH = RECTANGLE_WIDTH * charCount;
                if (currentRowWidth + CURRENT_CELL_WIDTH > PAGE_WIDTH) {
                    if (rowIndex < ROWS_COUNT - 1) {
                        rowIndex += 1;
                    } else {
                        problemsHtml += pageEndHtml.concat(problemsStartHtml);
                        answersHtml += pageEndHtml.concat(answersStartHtml);
                        rowIndex = 0;
                    }
                    currentRowWidth = 0;
                }
                problemsHtml += wordWrapStartHtml;
                answersHtml += wordWrapStartHtml;
                charArray.forEach((__char, index)=>{
                    const charStartHtml = `<span class="charWrap">`;
                    const charEndHtml = `</span>`;
                    const backgroundHtml = `<img class="backgound-image" src="${BACKGOUND_SVG_SRC}" alt="${BACKGOUND_SVG_SRC}" />`;
                    const pinyin = pinyinArray[index];
                    const pinyinHtml = `<pinyin ${pinyin.length > 4 ? ' chars="'.concat(pinyin.length.toString(), '"') : ''}>${pinyin.split('').map((__char, index)=>'<pinyin-char'.concat('āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ'.indexOf(__char) > -1 ? ' class="withTone"' : pinyin.length <= 4 && index > 0 && __char === 'ɡ' ? ' class="lastG"' : '', '>', __char, '</pinyin-char>')).join('')}</pinyin>`;
                    const chineseHtml = `<chinese>${__char}</chinese>`;
                    problemsHtml += charStartHtml.concat(backgroundHtml, kind === 'pinyinToChinese' ? pinyinHtml : chineseHtml, charEndHtml);
                    answersHtml += charStartHtml.concat(backgroundHtml, pinyinHtml, chineseHtml, charEndHtml);
                });
                problemsHtml += wordWrapEndHtml;
                answersHtml += wordWrapEndHtml;
                currentRowWidth += CURRENT_CELL_WIDTH + HORIZONTAL_SPACE;
            });
            problemsHtml += pageEndHtml;
            answersHtml += pageEndHtml;
        }
        html = problemsHtml.concat(answersHtml);
        const en = `${FILENAME_POSTFIX}Copybooks_chineseAndPinyin`;
        const zh_cn = `${FILENAME_POSTFIX}简体汉字与拼音`;
        const zh_tw = `${FILENAME_POSTFIX}簡體漢字與拼音`;
        computedData.title = {
            en,
            zh_cn,
            zh_tw
        };
        computedData.css = css;
        computedData.html = html;
    };
    getRandomizedCopybooks = ()=>{
        const { data: { copybooks  }  } = this;
        if (copybooks.length === 0) {
            return [];
        }
        const remaining = [];
        copybooks.forEach((copybook)=>remaining.push(copybook));
        const result = [];
        let length = remaining.length;
        while(length > 1){
            const index = Math.floor(Math.random() * length);
            result.push(remaining[index]);
            remaining.splice(index, 1);
            length -= 1;
        }
        result.push(remaining[0]);
        return result;
    };
    updateOtherData = (newData)=>{
        const { copybooks , selectedCheckboxIndexArray , kind , inputMethod , fontSize , color  } = newData;
        this.data.copybooks.length = 0;
        copybooks.forEach((copybook)=>this.data.copybooks.push(copybook));
        this.data.selectedCheckboxIndexArray.length = 0;
        selectedCheckboxIndexArray.forEach((selectedCheckboxIndex)=>this.data.selectedCheckboxIndexArray.push(selectedCheckboxIndex));
        this.data.kind = kind;
        this.data.inputMethod = inputMethod;
        this.data.fontSize = fontSize;
        this.data.color = color;
        this.onRadioOptionChanged('inputMethod', inputMethod);
        this.updateCopybookData();
        this.updateOtherDataOfCopybook(newData);
    };
    idOrClassPrefix = 'brickPageCopybook';
    textareaChinese = createElement('textarea');
    textareaPinyin = createElement('textarea');
    textareaChineseAndPinyin = createElement('textarea');
    initCoreElements = ()=>{
        this.initKindElements();
        this.initInputMethodElements();
        this.initFontSizeElements();
        this.initColorElements();
        const configCoreElement = this.configCoreElement;
        const { usableCopybookCheckboxElementArray , usableCopybooksPeopleEducationEdition , textareaChinese , textareaPinyin , textareaChineseAndPinyin , idOrClassPrefix  } = this;
        this.appendCopybookOfGrade1Term1();
        this.appendCopybookOfGrade1Term2();
        this.appendCopybookOfGrade2Term1();
        let checkboxIndex = -1;
        const detailsPeopleEducationEdition = createElement('details');
        configCoreElement.appendChild(detailsPeopleEducationEdition);
        detailsPeopleEducationEdition.setAttribute('open', '');
        const summaryPeopleEducationEdition = createElement('summary');
        detailsPeopleEducationEdition.appendChild(summaryPeopleEducationEdition);
        const strongElement = createElement('strong');
        strongElement.innerHTML = getI18nInnerHTML({
            en: `Textbook (People's Education Edition)`,
            zh_cn: '课本（人教版）',
            zh_tw: '課本（人教版）'
        });
        summaryPeopleEducationEdition.appendChild(strongElement);
        const usableCopybooksPeopleEducationEditionWrap = createElement('div');
        usableCopybooksPeopleEducationEditionWrap.className = `${idOrClassPrefix}UsableCopybooksWrap`;
        detailsPeopleEducationEdition.appendChild(usableCopybooksPeopleEducationEditionWrap);
        usableCopybooksPeopleEducationEdition.forEach(({ termI18n , units  })=>{
            const usableCopybookWrap = createElement('div');
            usableCopybooksPeopleEducationEditionWrap.appendChild(usableCopybookWrap);
            usableCopybookWrap.className = `${idOrClassPrefix}UsableCopybookWrap`;
            const label = createElement('label');
            usableCopybookWrap.appendChild(label);
            label.className = `${idOrClassPrefix}UsableCopybookLabel`;
            label.innerHTML = getI18nInnerHTML(termI18n);
            const spanGroup = createElement('span');
            usableCopybookWrap.appendChild(spanGroup);
            spanGroup.className = `${idOrClassPrefix}UsableCopybookCheckboxGroupWrap`;
            units.forEach((unit)=>{
                const { names , words  } = unit;
                const spanWrap = createElement('span');
                spanGroup.appendChild(spanWrap);
                spanWrap.className = `${idOrClassPrefix}UsableCopybookCheckboxWrap`;
                const checkbox = createElement('input');
                spanWrap.appendChild(checkbox);
                checkbox.type = 'checkbox';
                checkbox.setAttribute('edu-index', (++checkboxIndex).toString());
                checkbox.words = words;
                usableCopybookCheckboxElementArray.push(checkbox);
                const span = createElement('span');
                spanWrap.appendChild(span);
                span.className = `${idOrClassPrefix}UsableCopybookSpanAfterCheckboxWrap`;
                span.innerHTML = getI18nInnerHTML(names);
                const checkboxChanged = (event)=>{
                    const copybooks = [];
                    const chineseArray = [];
                    const pinyinArray = [];
                    const chineseAndPinyinArray = [];
                    const selectedCheckboxIndexArray = [];
                    usableCopybookCheckboxElementArray.forEach((one)=>{
                        if (one.checked) {
                            selectedCheckboxIndexArray.push(parseInt(one.getAttribute('edu-index'), 0));
                            one.words.forEach((chineseAndPinyinPair)=>{
                                copybooks.push(chineseAndPinyinPair);
                                const { chinese , pinyin  } = chineseAndPinyinPair;
                                chineseArray.push(chinese);
                                pinyinArray.push(pinyin.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ'));
                                chineseAndPinyinArray.push(`${chinese} ${pinyin.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ')}`);
                            });
                        }
                    });
                    textareaChinese.value = chineseArray.join('\n');
                    textareaPinyin.value = pinyinArray.join('\n');
                    textareaChineseAndPinyin.value = chineseAndPinyinArray.join('\n');
                    this.data.selectedCheckboxIndexArray.length = 0;
                    selectedCheckboxIndexArray.forEach((index)=>this.data.selectedCheckboxIndexArray.push(index));
                    this.updateCopybooks(copybooks);
                };
                checkbox.onchange = checkboxChanged;
                span.onclick = (event)=>{
                    checkbox.checked = !checkbox.checked;
                    checkboxChanged();
                    return stopEventBubble(event);
                };
            });
        });
        this.onRadioOptionChanged('inputMethod', this.data.inputMethod);
        const copybookInputWrap = createElement('div');
        configCoreElement.appendChild(copybookInputWrap);
        copybookInputWrap.id = `${idOrClassPrefix}CopybookInputWrap`;
        const copybookInputStrongElement = createElement('strong');
        copybookInputStrongElement.innerHTML = getI18nInnerHTML({
            en: `Entry area`,
            zh_cn: '录入区',
            zh_tw: '錄入區'
        });
        copybookInputWrap.appendChild(copybookInputStrongElement);
        const textareaGroupWrap = createElement('span');
        copybookInputWrap.appendChild(textareaGroupWrap);
        textareaGroupWrap.id = `${idOrClassPrefix}TextareaGroupWrap`;
        textareaGroupWrap.appendChild(textareaChinese);
        textareaChinese.value = '';
        textareaChinese.rows = 4;
        textareaChinese.onchange = textareaChinese.focus = ()=>{
            this.updateChineseOrPinyinTextarea(textareaChinese, textareaPinyin, textareaChineseAndPinyin);
        };
        textareaChinese.setAttribute('i18n-placeholder', JSON.stringify({
            en: `Input Chinese words, one for each line.`,
            zh_cn: '输入汉字词语，每行一条。',
            zh_tw: '輸入漢字詞語，每行一條。'
        }));
        textareaGroupWrap.appendChild(textareaPinyin);
        textareaPinyin.value = '';
        textareaPinyin.rows = 4;
        textareaPinyin.onchange = textareaPinyin.focus = ()=>{
            this.updateChineseOrPinyinTextarea(textareaChinese, textareaPinyin, textareaChineseAndPinyin);
        };
        textareaPinyin.setAttribute('i18n-placeholder', JSON.stringify({
            en: `Input the corresponding pinyin of Chinese words, separated by '/'. One for each line.`,
            zh_cn: '输入汉字词语对应拼音，使用/分隔。每行一条。',
            zh_tw: '輸入漢字詞語對應拼音，使用/分隔。每行一條。'
        }));
        textareaGroupWrap.appendChild(textareaChineseAndPinyin);
        textareaChineseAndPinyin.value = '';
        textareaChineseAndPinyin.rows = 4;
        textareaChineseAndPinyin.onchange = textareaChineseAndPinyin.focus = ()=>{
            this.updateChineseAndPinyinTextarea(textareaChineseAndPinyin, textareaChinese, textareaPinyin);
        };
        textareaChineseAndPinyin.setAttribute('i18n-placeholder', JSON.stringify({
            en: `Input Chinese words and corresponding pinyin, and pinyin is separated by '/'. One for each line.`,
            zh_cn: '输入汉字词语及对应拼音，拼音使用/分隔。每行一条。',
            zh_tw: '輸入漢字詞語及對應拼音，拼音使用/分隔。每行一條。'
        }));
    };
    updateCopybookData = ()=>{
        const { data , computedData , usableCopybookCheckboxElementArray  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginLeft , copybooks , selectedCheckboxIndexArray , kind , inputMethod , fontSize , color  } = data;
        const { kindElementArray , inputMethodElementArray , fontSizeElementArray , colorElementArray , textareaChinese , textareaPinyin , textareaChineseAndPinyin  } = this;
        kindElementArray.forEach((radio)=>{
            radio.checked = radio.value === kind;
        });
        inputMethodElementArray.forEach((radio)=>{
            radio.checked = radio.value === inputMethod;
        });
        fontSizeElementArray.forEach((radio)=>{
            radio.checked = radio.value === fontSize;
        });
        colorElementArray.forEach((radio)=>{
            radio.checked = radio.value === color;
        });
        usableCopybookCheckboxElementArray.forEach((checkbox)=>{
            const index = parseInt(checkbox.getAttribute('edu-index'), 0);
            checkbox.checked = selectedCheckboxIndexArray.indexOf(index) > -1;
        });
        const chineseArray = [];
        const pinyinArray = [];
        const chineseAndPinyinArray = [];
        copybooks.forEach(({ chinese , pinyin  })=>{
            chineseArray.push(chinese);
            pinyinArray.push(pinyin);
            chineseAndPinyinArray.push(`${chinese} ${pinyin}`);
        });
        textareaChinese.value = chineseArray.join('\n');
        textareaPinyin.value = pinyinArray.join('\n');
        textareaChineseAndPinyin.value = chineseAndPinyinArray.join('\n');
    };
    updateChineseAndPinyinTextarea = (textareaChineseAndPinyin, textareaChinese, textareaPinyin)=>{
        const copybooks = [];
        const chineseAndPinyinArray = textareaChineseAndPinyin.value.split('\n');
        const chineseAndPinyinLength = chineseAndPinyinArray.length;
        for(let i = 0; i < chineseAndPinyinLength; ++i){
            const pairArray = chineseAndPinyinArray[i].split(' ');
            const chinese = pairArray[0];
            const pinyin = (pairArray.length < 2 ? '' : pairArray[1]).replace(/a/g, 'ɑ').replace(/g/g, 'ɡ');
            copybooks.push({
                chinese,
                pinyin
            });
        }
        const chineseArray = [];
        const pinyinArray = [];
        copybooks.forEach(({ chinese , pinyin  })=>{
            chineseArray.push(chinese);
            pinyinArray.push(pinyin.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ'));
            chineseAndPinyinArray.push(`${chinese} ${pinyin.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ')}`);
        });
        textareaChinese.value = chineseArray.join('\n');
        textareaPinyin.value = pinyinArray.join('\n');
        this.updateCopybooks(copybooks);
    };
    updateChineseOrPinyinTextarea = (textareaChinese, textareaPinyin, textareaChineseAndPinyin)=>{
        const copybooks = [];
        const chineseArray = textareaChinese.value.split('\n');
        const pinyinArray = textareaPinyin.value.split('\n');
        const chineseLength = chineseArray.length;
        const pinyinLength = pinyinArray.length;
        const maxCount = Math.max(chineseLength, pinyinLength);
        for(let i = 0; i < maxCount; ++i){
            const chinese = i < chineseLength ? chineseArray[i] : '';
            const pinyin = (i < pinyinLength ? pinyinArray[i] : '').replace(/a/g, 'ɑ').replace(/g/g, 'ɡ');
            copybooks.push({
                chinese,
                pinyin
            });
        }
        chineseArray.length = 0;
        pinyinArray.length = 0;
        const chineseAndPinyinArray = [];
        copybooks.forEach(({ chinese , pinyin  })=>{
            chineseArray.push(chinese);
            pinyinArray.push(pinyin.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ'));
            chineseAndPinyinArray.push(`${chinese} ${pinyin.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ')}`);
        });
        textareaChinese.value = chineseArray.join('\n');
        textareaPinyin.value = pinyinArray.join('\n');
        textareaChineseAndPinyin.value = chineseAndPinyinArray.join('\n');
        this.updateCopybooks(copybooks);
    };
    updateCopybooks = (copybooks)=>{
        this.data.copybooks.length = 0;
        copybooks.forEach((copybook)=>{
            this.data.copybooks.push(copybook);
        });
        this.countDataAndComputedData();
        this.build();
    };
    onRadioOptionChanged = (propertyName, value)=>{
        switch(propertyName){
            case 'kind':
                break;
            case 'inputMethod':
                switch(value){
                    case 'select':
                        showBlock(getElementById('brickPageCopybookUsableCopybooksWrap'));
                        hide(getElementById('brickPageCopybookCopybookInputWrap'));
                        break;
                    case 'manualInput':
                        hide(getElementById('brickPageCopybookUsableCopybooksWrap'));
                        showBlock(getElementById('brickPageCopybookCopybookInputWrap'));
                        break;
                    default:
                        break;
                }
                break;
            case 'fontSize':
                break;
            case 'color':
                break;
            default:
                break;
        }
    };
    appendCopybookOfGrade1Term1 = ()=>{
        const { usableCopybooksPeopleEducationEdition  } = this;
        usableCopybooksPeopleEducationEdition.push({
            termI18n: {
                en: `K1T1`,
                zh_cn: `一年级上`,
                zh_tw: `一年級上`
            },
            units: [
                {
                    names: {
                        en: `Unit 1`,
                        zh_cn: `第一单元`,
                        zh_tw: `第一單元`
                    },
                    words: [
                        {
                            chinese: `天`,
                            pinyin: `tiān`
                        },
                        {
                            chinese: `地`,
                            pinyin: `dì`
                        },
                        {
                            chinese: `人`,
                            pinyin: `rén`
                        },
                        {
                            chinese: `你`,
                            pinyin: `nǐ`
                        },
                        {
                            chinese: `我`,
                            pinyin: `wǒ`
                        },
                        {
                            chinese: `他`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `一`,
                            pinyin: `yī`
                        },
                        {
                            chinese: `二`,
                            pinyin: `èr`
                        },
                        {
                            chinese: `三`,
                            pinyin: `sān`
                        },
                        {
                            chinese: `四`,
                            pinyin: `sì`
                        },
                        {
                            chinese: `五`,
                            pinyin: `wǔ`
                        },
                        {
                            chinese: `上下`,
                            pinyin: `shàng/xià`
                        },
                        {
                            chinese: `口`,
                            pinyin: `kǒu`
                        },
                        {
                            chinese: `耳`,
                            pinyin: `ěr`
                        },
                        {
                            chinese: `目`,
                            pinyin: `mù`
                        },
                        {
                            chinese: `手`,
                            pinyin: `shǒu`
                        },
                        {
                            chinese: `足`,
                            pinyin: `zú`
                        },
                        {
                            chinese: `站`,
                            pinyin: `zhàn`
                        },
                        {
                            chinese: `坐`,
                            pinyin: `zuò`
                        },
                        {
                            chinese: `日`,
                            pinyin: `rì`
                        },
                        {
                            chinese: `月`,
                            pinyin: `yuè`
                        },
                        {
                            chinese: `水`,
                            pinyin: `shuǐ`
                        },
                        {
                            chinese: `火`,
                            pinyin: `huǒ`
                        },
                        {
                            chinese: `山`,
                            pinyin: `shān`
                        },
                        {
                            chinese: `石`,
                            pinyin: `shí`
                        },
                        {
                            chinese: `田`,
                            pinyin: `tián`
                        },
                        {
                            chinese: `禾`,
                            pinyin: `hé`
                        },
                        {
                            chinese: `对`,
                            pinyin: `duì`
                        },
                        {
                            chinese: `云`,
                            pinyin: `yún`
                        },
                        {
                            chinese: `雨`,
                            pinyin: `yǔ`
                        },
                        {
                            chinese: `风`,
                            pinyin: `fēng`
                        },
                        {
                            chinese: `花`,
                            pinyin: `huā`
                        },
                        {
                            chinese: `鸟`,
                            pinyin: `niǎo`
                        },
                        {
                            chinese: `虫`,
                            pinyin: `chóng`
                        },
                        {
                            chinese: `六`,
                            pinyin: `liù`
                        },
                        {
                            chinese: `七`,
                            pinyin: `qī`
                        },
                        {
                            chinese: `八`,
                            pinyin: `bā`
                        },
                        {
                            chinese: `九`,
                            pinyin: `jiǔ`
                        },
                        {
                            chinese: `十`,
                            pinyin: `shí`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 2`,
                        zh_cn: `第二单元`,
                        zh_tw: `第二單元`
                    },
                    words: [
                        {
                            chinese: `爸`,
                            pinyin: `bà`
                        },
                        {
                            chinese: `妈`,
                            pinyin: `mā`
                        },
                        {
                            chinese: `马`,
                            pinyin: `mǎ`
                        },
                        {
                            chinese: `土`,
                            pinyin: `tǔ`
                        },
                        {
                            chinese: `不`,
                            pinyin: `bù`
                        },
                        {
                            chinese: `画`,
                            pinyin: `huà`
                        },
                        {
                            chinese: `打`,
                            pinyin: `dǎ`
                        },
                        {
                            chinese: `棋`,
                            pinyin: `qí`
                        },
                        {
                            chinese: `鸡`,
                            pinyin: `jī`
                        },
                        {
                            chinese: `字`,
                            pinyin: `zì`
                        },
                        {
                            chinese: `词语`,
                            pinyin: `cí/yǔ`
                        },
                        {
                            chinese: `句子`,
                            pinyin: `jù/zǐ`
                        },
                        {
                            chinese: `桌`,
                            pinyin: `zhuō`
                        },
                        {
                            chinese: `纸`,
                            pinyin: `zhǐ`
                        },
                        {
                            chinese: `文`,
                            pinyin: `wén`
                        },
                        {
                            chinese: `数学`,
                            pinyin: `shù/xué`
                        },
                        {
                            chinese: `音乐`,
                            pinyin: `yīn/yuè`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 3`,
                        zh_cn: `第三单元`,
                        zh_tw: `第三单元`
                    },
                    words: [
                        {
                            chinese: `妹`,
                            pinyin: `mèi`
                        },
                        {
                            chinese: `奶`,
                            pinyin: `nǎi`
                        },
                        {
                            chinese: `小`,
                            pinyin: `xiǎo`
                        },
                        {
                            chinese: `桥`,
                            pinyin: `qiáo`
                        },
                        {
                            chinese: `台`,
                            pinyin: `tái`
                        },
                        {
                            chinese: `雪`,
                            pinyin: `xuě`
                        },
                        {
                            chinese: `儿`,
                            pinyin: `ér`
                        },
                        {
                            chinese: `白`,
                            pinyin: `bái`
                        },
                        {
                            chinese: `草`,
                            pinyin: `cǎo`
                        },
                        {
                            chinese: `家`,
                            pinyin: `jiā`
                        },
                        {
                            chinese: `是`,
                            pinyin: `shì`
                        },
                        {
                            chinese: `车`,
                            pinyin: `chē`
                        },
                        {
                            chinese: `路灯`,
                            pinyin: `lù/dēng`
                        },
                        {
                            chinese: `走`,
                            pinyin: `zǒu`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 4`,
                        zh_cn: `第四单元`,
                        zh_tw: `第四单元`
                    },
                    words: [
                        {
                            chinese: `秋`,
                            pinyin: `qiū`
                        },
                        {
                            chinese: `气`,
                            pinyin: `qì`
                        },
                        {
                            chinese: `了`,
                            pinyin: `le`
                        },
                        {
                            chinese: `树叶`,
                            pinyin: `shù/yè`
                        },
                        {
                            chinese: `片`,
                            pinyin: `piàn`
                        },
                        {
                            chinese: `大`,
                            pinyin: `dà`
                        },
                        {
                            chinese: `飞`,
                            pinyin: `fēi`
                        },
                        {
                            chinese: `会`,
                            pinyin: `huì`
                        },
                        {
                            chinese: `个`,
                            pinyin: `gè`
                        },
                        {
                            chinese: `的`,
                            pinyin: `de`
                        },
                        {
                            chinese: `船`,
                            pinyin: `chuán`
                        },
                        {
                            chinese: `两头`,
                            pinyin: `liǎng/tóu`
                        },
                        {
                            chinese: `在`,
                            pinyin: `zài`
                        },
                        {
                            chinese: `里`,
                            pinyin: `lǐ`
                        },
                        {
                            chinese: `看见`,
                            pinyin: `kàn/jiàn`
                        },
                        {
                            chinese: `闪`,
                            pinyin: `shǎn`
                        },
                        {
                            chinese: `星`,
                            pinyin: `xīng`
                        },
                        {
                            chinese: `江南`,
                            pinyin: `jiāng/nán`
                        },
                        {
                            chinese: `可`,
                            pinyin: `kě`
                        },
                        {
                            chinese: `采莲`,
                            pinyin: `cǎi/lián`
                        },
                        {
                            chinese: `鱼`,
                            pinyin: `yú`
                        },
                        {
                            chinese: `东`,
                            pinyin: `dōng`
                        },
                        {
                            chinese: `西`,
                            pinyin: `xī`
                        },
                        {
                            chinese: `北`,
                            pinyin: `běi`
                        },
                        {
                            chinese: `尖`,
                            pinyin: `jiān`
                        },
                        {
                            chinese: `说`,
                            pinyin: `shuō`
                        },
                        {
                            chinese: `春`,
                            pinyin: `chūn`
                        },
                        {
                            chinese: `青蛙`,
                            pinyin: `qīng/wā`
                        },
                        {
                            chinese: `夏`,
                            pinyin: `xià`
                        },
                        {
                            chinese: `弯`,
                            pinyin: `wān`
                        },
                        {
                            chinese: `皮`,
                            pinyin: `pí`
                        },
                        {
                            chinese: `地`,
                            pinyin: `de`
                        },
                        {
                            chinese: `冬`,
                            pinyin: `dōng`
                        },
                        {
                            chinese: `男女`,
                            pinyin: `nán/nǚ`
                        },
                        {
                            chinese: `开关`,
                            pinyin: `kāi/guān`
                        },
                        {
                            chinese: `正反`,
                            pinyin: `zhèng/fǎn`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 5`,
                        zh_cn: `第五单元`,
                        zh_tw: `第五单元`
                    },
                    words: [
                        {
                            chinese: `远`,
                            pinyin: `yuǎn`
                        },
                        {
                            chinese: `有`,
                            pinyin: `yǒu`
                        },
                        {
                            chinese: `色`,
                            pinyin: `sè`
                        },
                        {
                            chinese: `近`,
                            pinyin: `jìn`
                        },
                        {
                            chinese: `听`,
                            pinyin: `tīng`
                        },
                        {
                            chinese: `无`,
                            pinyin: `wú`
                        },
                        {
                            chinese: `声`,
                            pinyin: `shēng`
                        },
                        {
                            chinese: `去`,
                            pinyin: `qù`
                        },
                        {
                            chinese: `还`,
                            pinyin: `hái`
                        },
                        {
                            chinese: `来`,
                            pinyin: `lái`
                        },
                        {
                            chinese: `多少`,
                            pinyin: `duō/shǎo`
                        },
                        {
                            chinese: `黄牛`,
                            pinyin: `huáng/niú`
                        },
                        {
                            chinese: `只`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `猫`,
                            pinyin: `māo`
                        },
                        {
                            chinese: `边`,
                            pinyin: `biān`
                        },
                        {
                            chinese: `鸭`,
                            pinyin: `yā`
                        },
                        {
                            chinese: `苹果`,
                            pinyin: `píng/guǒ`
                        },
                        {
                            chinese: `杏`,
                            pinyin: `xìng`
                        },
                        {
                            chinese: `桃`,
                            pinyin: `táo`
                        },
                        {
                            chinese: `书包`,
                            pinyin: `shū/bāo`
                        },
                        {
                            chinese: `尺`,
                            pinyin: `chǐ`
                        },
                        {
                            chinese: `作业本`,
                            pinyin: `zuò/yè/běn`
                        },
                        {
                            chinese: `笔`,
                            pinyin: `bǐ`
                        },
                        {
                            chinese: `刀`,
                            pinyin: `dāo`
                        },
                        {
                            chinese: `课`,
                            pinyin: `kè`
                        },
                        {
                            chinese: `早`,
                            pinyin: `zǎo`
                        },
                        {
                            chinese: `校`,
                            pinyin: `xiào`
                        },
                        {
                            chinese: `明`,
                            pinyin: `míng`
                        },
                        {
                            chinese: `力`,
                            pinyin: `lì`
                        },
                        {
                            chinese: `尘`,
                            pinyin: `chén`
                        },
                        {
                            chinese: `从`,
                            pinyin: `cóng`
                        },
                        {
                            chinese: `众`,
                            pinyin: `zhòng`
                        },
                        {
                            chinese: `双`,
                            pinyin: `shuāng`
                        },
                        {
                            chinese: `木`,
                            pinyin: `mù`
                        },
                        {
                            chinese: `林`,
                            pinyin: `lín`
                        },
                        {
                            chinese: `森`,
                            pinyin: `sēn`
                        },
                        {
                            chinese: `条`,
                            pinyin: `tiáo`
                        },
                        {
                            chinese: `心`,
                            pinyin: `xīn`
                        },
                        {
                            chinese: `升国旗`,
                            pinyin: `sheng/guó/qí`
                        },
                        {
                            chinese: `中`,
                            pinyin: `zhōng`
                        },
                        {
                            chinese: `红`,
                            pinyin: `hóng`
                        },
                        {
                            chinese: `歌`,
                            pinyin: `gē`
                        },
                        {
                            chinese: `起立`,
                            pinyin: `qǐ/lì`
                        },
                        {
                            chinese: `么`,
                            pinyin: `me`
                        },
                        {
                            chinese: `美丽`,
                            pinyin: `měi/lì`
                        },
                        {
                            chinese: `午`,
                            pinyin: `wǔ`
                        },
                        {
                            chinese: `晚`,
                            pinyin: `wǎn`
                        },
                        {
                            chinese: `昨`,
                            pinyin: `zuó`
                        },
                        {
                            chinese: `今年`,
                            pinyin: `jīn/nián`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 6`,
                        zh_cn: `第六单元`,
                        zh_tw: `第六单元`
                    },
                    words: [
                        {
                            chinese: `影`,
                            pinyin: `yǐng`
                        },
                        {
                            chinese: `前后`,
                            pinyin: `qián/hòu`
                        },
                        {
                            chinese: `黑狗`,
                            pinyin: `hēi/gǒu`
                        },
                        {
                            chinese: `左右`,
                            pinyin: `zuǒ/yòu`
                        },
                        {
                            chinese: `它`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `好朋友`,
                            pinyin: `hǎo/péng/yǒu`
                        },
                        {
                            chinese: `比`,
                            pinyin: `bǐ`
                        },
                        {
                            chinese: `尾巴`,
                            pinyin: `wěi/bā`
                        },
                        {
                            chinese: `谁`,
                            pinyin: `shuí`
                        },
                        {
                            chinese: `长短`,
                            pinyin: `cháng/duǎn`
                        },
                        {
                            chinese: `把`,
                            pinyin: `bǎ`
                        },
                        {
                            chinese: `伞`,
                            pinyin: `sǎn`
                        },
                        {
                            chinese: `兔`,
                            pinyin: `tù`
                        },
                        {
                            chinese: `最`,
                            pinyin: `zuì`
                        },
                        {
                            chinese: `公`,
                            pinyin: `gōng`
                        },
                        {
                            chinese: `写诗`,
                            pinyin: `xiě/shī`
                        },
                        {
                            chinese: `点`,
                            pinyin: `diǎn`
                        },
                        {
                            chinese: `要`,
                            pinyin: `yào`
                        },
                        {
                            chinese: `过`,
                            pinyin: `guò`
                        },
                        {
                            chinese: `给`,
                            pinyin: `gěi`
                        },
                        {
                            chinese: `当`,
                            pinyin: `dāng`
                        },
                        {
                            chinese: `串`,
                            pinyin: `chuàn`
                        },
                        {
                            chinese: `们`,
                            pinyin: `men`
                        },
                        {
                            chinese: `以`,
                            pinyin: `yǐ`
                        },
                        {
                            chinese: `成`,
                            pinyin: `chéng`
                        },
                        {
                            chinese: `数`,
                            pinyin: `shǔ`
                        },
                        {
                            chinese: `彩`,
                            pinyin: `cǎi`
                        },
                        {
                            chinese: `半`,
                            pinyin: `bàn`
                        },
                        {
                            chinese: `空`,
                            pinyin: `kōng`
                        },
                        {
                            chinese: `问`,
                            pinyin: `wèn`
                        },
                        {
                            chinese: `到`,
                            pinyin: `dào`
                        },
                        {
                            chinese: `方`,
                            pinyin: `fāng`
                        },
                        {
                            chinese: `没`,
                            pinyin: `méi`
                        },
                        {
                            chinese: `更`,
                            pinyin: `gèng`
                        },
                        {
                            chinese: `绿`,
                            pinyin: `lǜ`
                        },
                        {
                            chinese: `出`,
                            pinyin: `chū`
                        },
                        {
                            chinese: `长`,
                            pinyin: `zhǎng`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 7`,
                        zh_cn: `第七单元`,
                        zh_tw: `第七单元`
                    },
                    words: [
                        {
                            chinese: `睡`,
                            pinyin: `shuì`
                        },
                        {
                            chinese: `那`,
                            pinyin: `nà`
                        },
                        {
                            chinese: `海`,
                            pinyin: `hǎi`
                        },
                        {
                            chinese: `真`,
                            pinyin: `zhēn`
                        },
                        {
                            chinese: `老师`,
                            pinyin: `lǎo/shī`
                        },
                        {
                            chinese: `吗`,
                            pinyin: `ma`
                        },
                        {
                            chinese: `同`,
                            pinyin: `tóng`
                        },
                        {
                            chinese: `什`,
                            pinyin: `shén`
                        },
                        {
                            chinese: `才`,
                            pinyin: `cái`
                        },
                        {
                            chinese: `亮`,
                            pinyin: `liàng`
                        },
                        {
                            chinese: `时候`,
                            pinyin: `shí/hòu`
                        },
                        {
                            chinese: `觉得`,
                            pinyin: `jiào/de`
                        },
                        {
                            chinese: `自己`,
                            pinyin: `zì/jǐ`
                        },
                        {
                            chinese: `很`,
                            pinyin: `hěn`
                        },
                        {
                            chinese: `穿衣服`,
                            pinyin: `chuān/yī/fú`
                        },
                        {
                            chinese: `门`,
                            pinyin: `mén`
                        },
                        {
                            chinese: `快`,
                            pinyin: `kuài`
                        },
                        {
                            chinese: `蓝`,
                            pinyin: `lán`
                        },
                        {
                            chinese: `又`,
                            pinyin: `yòu`
                        },
                        {
                            chinese: `笑`,
                            pinyin: `xiào`
                        },
                        {
                            chinese: `着`,
                            pinyin: `zhe`
                        },
                        {
                            chinese: `向`,
                            pinyin: `xiàng`
                        },
                        {
                            chinese: `和`,
                            pinyin: `hé`
                        },
                        {
                            chinese: `贝`,
                            pinyin: `bèi`
                        },
                        {
                            chinese: `娃`,
                            pinyin: `wá`
                        },
                        {
                            chinese: `挂`,
                            pinyin: `guà`
                        },
                        {
                            chinese: `活`,
                            pinyin: `huó`
                        },
                        {
                            chinese: `金`,
                            pinyin: `jīn`
                        },
                        {
                            chinese: `哥`,
                            pinyin: `gē`
                        },
                        {
                            chinese: `姐`,
                            pinyin: `jiě`
                        },
                        {
                            chinese: `弟`,
                            pinyin: `dì`
                        },
                        {
                            chinese: `叔`,
                            pinyin: `shū`
                        },
                        {
                            chinese: `爷`,
                            pinyin: `yé`
                        }
                    ]
                },
                {
                    names: {
                        en: `Unit 8`,
                        zh_cn: `第八单元`,
                        zh_tw: `第八单元`
                    },
                    words: [
                        {
                            chinese: `群`,
                            pinyin: `qún`
                        },
                        {
                            chinese: `竹`,
                            pinyin: `zhú`
                        },
                        {
                            chinese: `牙`,
                            pinyin: `yá`
                        },
                        {
                            chinese: `用`,
                            pinyin: `yòng`
                        },
                        {
                            chinese: `几步`,
                            pinyin: `jǐ/bù`
                        },
                        {
                            chinese: `为`,
                            pinyin: `wéi`
                        },
                        {
                            chinese: `参加`,
                            pinyin: `cān/jiā`
                        },
                        {
                            chinese: `洞`,
                            pinyin: `dòng`
                        },
                        {
                            chinese: `着`,
                            pinyin: `zháo`
                        },
                        {
                            chinese: `乌鸦`,
                            pinyin: `wū/yā`
                        },
                        {
                            chinese: `处`,
                            pinyin: `chù`
                        },
                        {
                            chinese: `找`,
                            pinyin: `zhǎo`
                        },
                        {
                            chinese: `办`,
                            pinyin: `bàn`
                        },
                        {
                            chinese: `旁`,
                            pinyin: `páng`
                        },
                        {
                            chinese: `许`,
                            pinyin: `xǔ`
                        },
                        {
                            chinese: `法`,
                            pinyin: `fǎ`
                        },
                        {
                            chinese: `放`,
                            pinyin: `fàng`
                        },
                        {
                            chinese: `进`,
                            pinyin: `jìn`
                        },
                        {
                            chinese: `高`,
                            pinyin: `gāo`
                        },
                        {
                            chinese: `住`,
                            pinyin: `zhù`
                        },
                        {
                            chinese: `孩`,
                            pinyin: `hái`
                        },
                        {
                            chinese: `玩`,
                            pinyin: `wán`
                        },
                        {
                            chinese: `吧`,
                            pinyin: `ba`
                        },
                        {
                            chinese: `发芽`,
                            pinyin: `fā/yá`
                        },
                        {
                            chinese: `爬`,
                            pinyin: `pá`
                        },
                        {
                            chinese: `呀`,
                            pinyin: `ya`
                        },
                        {
                            chinese: `久`,
                            pinyin: `jiǔ`
                        },
                        {
                            chinese: `回`,
                            pinyin: `huí`
                        },
                        {
                            chinese: `全`,
                            pinyin: `quán`
                        },
                        {
                            chinese: `变`,
                            pinyin: `biàn`
                        },
                        {
                            chinese: `工厂`,
                            pinyin: `gong/chǎng`
                        },
                        {
                            chinese: `医院`,
                            pinyin: `yī/yuàn`
                        },
                        {
                            chinese: `生`,
                            pinyin: `shēng`
                        }
                    ]
                }
            ]
        });
    };
    appendCopybookOfGrade1Term2 = ()=>{
        const { usableCopybooksPeopleEducationEdition  } = this;
        usableCopybooksPeopleEducationEdition.push({
            termI18n: {
                en: `K1T2`,
                zh_cn: `一年级下`,
                zh_tw: `一年級下`
            },
            units: [
                {
                    names: {
                        en: `Literacy 1`,
                        zh_cn: `识字表1`,
                        zh_tw: `識字錶1`
                    },
                    words: [
                        {
                            chinese: `霜`,
                            pinyin: `shuāng`
                        },
                        {
                            chinese: `吹`,
                            pinyin: `chuī`
                        },
                        {
                            chinese: `落`,
                            pinyin: `luò`
                        },
                        {
                            chinese: `降`,
                            pinyin: `jiàng`
                        },
                        {
                            chinese: `飘游`,
                            pinyin: `piāo/yóu`
                        },
                        {
                            chinese: `池`,
                            pinyin: `chí`
                        },
                        {
                            chinese: `入`,
                            pinyin: `rù`
                        },
                        {
                            chinese: `姓氏`,
                            pinyin: `xìng/shì`
                        },
                        {
                            chinese: `李`,
                            pinyin: `lǐ`
                        },
                        {
                            chinese: `张`,
                            pinyin: `zhāng`
                        },
                        {
                            chinese: `古`,
                            pinyin: `gǔ`
                        },
                        {
                            chinese: `吴`,
                            pinyin: `wú`
                        },
                        {
                            chinese: `赵`,
                            pinyin: `zhào`
                        },
                        {
                            chinese: `钱`,
                            pinyin: `qián`
                        },
                        {
                            chinese: `孙`,
                            pinyin: `sūn`
                        },
                        {
                            chinese: `周`,
                            pinyin: `zhōu`
                        },
                        {
                            chinese: `王`,
                            pinyin: `wáng`
                        },
                        {
                            chinese: `官`,
                            pinyin: `guān`
                        },
                        {
                            chinese: `清`,
                            pinyin: `qīng`
                        },
                        {
                            chinese: `晴`,
                            pinyin: `qíng`
                        },
                        {
                            chinese: `眼睛`,
                            pinyin: `yǎn/jīng`
                        },
                        {
                            chinese: `保护`,
                            pinyin: `bǎo/hù`
                        },
                        {
                            chinese: `害`,
                            pinyin: `hài`
                        },
                        {
                            chinese: `事情`,
                            pinyin: `shì/qing`
                        },
                        {
                            chinese: `请`,
                            pinyin: `qǐng`
                        },
                        {
                            chinese: `让`,
                            pinyin: `ràng`
                        },
                        {
                            chinese: `病`,
                            pinyin: `bìng`
                        },
                        {
                            chinese: `相遇`,
                            pinyin: `xiāng/yù`
                        },
                        {
                            chinese: `喜欢`,
                            pinyin: `xǐ/huan`
                        },
                        {
                            chinese: `怕`,
                            pinyin: `pà`
                        },
                        {
                            chinese: `言`,
                            pinyin: `yán`
                        },
                        {
                            chinese: `互`,
                            pinyin: `hù`
                        },
                        {
                            chinese: `令`,
                            pinyin: `lìng`
                        },
                        {
                            chinese: `动`,
                            pinyin: `dòng`
                        },
                        {
                            chinese: `万`,
                            pinyin: `wàn`
                        },
                        {
                            chinese: `纯净`,
                            pinyin: `chún/jìng`
                        },
                        {
                            chinese: `阴`,
                            pinyin: `yīn`
                        },
                        {
                            chinese: `雷电`,
                            pinyin: `léi/diàn`
                        },
                        {
                            chinese: `阵`,
                            pinyin: `zhèn`
                        },
                        {
                            chinese: `冰冻`,
                            pinyin: `bīng/dòng`
                        },
                        {
                            chinese: `夹`,
                            pinyin: `jiá`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 2`,
                        zh_cn: `识字表2`,
                        zh_tw: `識字錶2`
                    },
                    words: [
                        {
                            chinese: `吃`,
                            pinyin: `chī`
                        },
                        {
                            chinese: `忘`,
                            pinyin: `wàng`
                        },
                        {
                            chinese: `井`,
                            pinyin: `jǐng`
                        },
                        {
                            chinese: `村`,
                            pinyin: `cūn`
                        },
                        {
                            chinese: `叫`,
                            pinyin: `jiào`
                        },
                        {
                            chinese: `毛主席`,
                            pinyin: `máo/zhǔ/xí`
                        },
                        {
                            chinese: `乡亲`,
                            pinyin: `xiāng/qīn`
                        },
                        {
                            chinese: `战士`,
                            pinyin: `zhàn/shì`
                        },
                        {
                            chinese: `面`,
                            pinyin: `miàn`
                        },
                        {
                            chinese: `想`,
                            pinyin: `xiǎng`
                        },
                        {
                            chinese: `告诉`,
                            pinyin: `gào/sù`
                        },
                        {
                            chinese: `就`,
                            pinyin: `jiù`
                        },
                        {
                            chinese: `京`,
                            pinyin: `jīng`
                        },
                        {
                            chinese: `安`,
                            pinyin: `ān`
                        },
                        {
                            chinese: `广`,
                            pinyin: `guǎng`
                        },
                        {
                            chinese: `非常`,
                            pinyin: `fēi/cháng`
                        },
                        {
                            chinese: `壮观`,
                            pinyin: `zhuàng/guān`
                        },
                        {
                            chinese: `接`,
                            pinyin: `jiē`
                        },
                        {
                            chinese: `觉`,
                            pinyin: `jiào`
                        },
                        {
                            chinese: `再`,
                            pinyin: `zài`
                        },
                        {
                            chinese: `做`,
                            pinyin: `zuò`
                        },
                        {
                            chinese: `各种`,
                            pinyin: `gè/zhǒng`
                        },
                        {
                            chinese: `样`,
                            pinyin: `yàng`
                        },
                        {
                            chinese: `伙伴`,
                            pinyin: `huǒ/bàn`
                        },
                        {
                            chinese: `却`,
                            pinyin: `què`
                        },
                        {
                            chinese: `也`,
                            pinyin: `yě`
                        },
                        {
                            chinese: `趣`,
                            pinyin: `qù`
                        },
                        {
                            chinese: `这`,
                            pinyin: `zhè`
                        },
                        {
                            chinese: `太阳`,
                            pinyin: `tài/yáng`
                        },
                        {
                            chinese: `道`,
                            pinyin: `dào`
                        },
                        {
                            chinese: `送`,
                            pinyin: `sòng`
                        },
                        {
                            chinese: `忙`,
                            pinyin: `máng`
                        },
                        {
                            chinese: `尝`,
                            pinyin: `cháng`
                        },
                        {
                            chinese: `香甜`,
                            pinyin: `xiāng/tián`
                        },
                        {
                            chinese: `温暖`,
                            pinyin: `wēn/nuǎn`
                        },
                        {
                            chinese: `该`,
                            pinyin: `gāi`
                        },
                        {
                            chinese: `颜`,
                            pinyin: `yán`
                        },
                        {
                            chinese: `因`,
                            pinyin: `yīn`
                        },
                        {
                            chinese: `辆`,
                            pinyin: `liàng`
                        },
                        {
                            chinese: `匹`,
                            pinyin: `pǐ`
                        },
                        {
                            chinese: `册`,
                            pinyin: `cè`
                        },
                        {
                            chinese: `支`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `铅`,
                            pinyin: `qiān`
                        },
                        {
                            chinese: `棵`,
                            pinyin: `kē`
                        },
                        {
                            chinese: `架`,
                            pinyin: `jià`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 3`,
                        zh_cn: `识字表3`,
                        zh_tw: `識字錶3`
                    },
                    words: [
                        {
                            chinese: `块`,
                            pinyin: `kuài`
                        },
                        {
                            chinese: `捉`,
                            pinyin: `zhuō`
                        },
                        {
                            chinese: `急`,
                            pinyin: `jí`
                        },
                        {
                            chinese: `直`,
                            pinyin: `zhí`
                        },
                        {
                            chinese: `河`,
                            pinyin: `hé`
                        },
                        {
                            chinese: `行`,
                            pinyin: `háng`
                        },
                        {
                            chinese: `死`,
                            pinyin: `sǐ`
                        },
                        {
                            chinese: `信`,
                            pinyin: `xìn`
                        },
                        {
                            chinese: `跟`,
                            pinyin: `gēn`
                        },
                        {
                            chinese: `忽`,
                            pinyin: `hū`
                        },
                        {
                            chinese: `喊`,
                            pinyin: `hǎn`
                        },
                        {
                            chinese: `身`,
                            pinyin: `shēn`
                        },
                        {
                            chinese: `只`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `窝`,
                            pinyin: `wō`
                        },
                        {
                            chinese: `孤单`,
                            pinyin: `gū/dān`
                        },
                        {
                            chinese: `种`,
                            pinyin: `zhǒng`
                        },
                        {
                            chinese: `都`,
                            pinyin: `dōu`
                        },
                        {
                            chinese: `邻居`,
                            pinyin: `lín/jū`
                        },
                        {
                            chinese: `招呼`,
                            pinyin: `zhāo/hu`
                        },
                        {
                            chinese: `静`,
                            pinyin: `jìng`
                        },
                        {
                            chinese: `乐`,
                            pinyin: `lè`
                        },
                        {
                            chinese: `怎`,
                            pinyin: `zěn`
                        },
                        {
                            chinese: `独`,
                            pinyin: `dú`
                        },
                        {
                            chinese: `跳绳`,
                            pinyin: `tiào/shéng`
                        },
                        {
                            chinese: `讲`,
                            pinyin: `jiǎng`
                        },
                        {
                            chinese: `得`,
                            pinyin: `dé`
                        },
                        {
                            chinese: `羽`,
                            pinyin: `yǔ`
                        },
                        {
                            chinese: `球`,
                            pinyin: `qiú`
                        },
                        {
                            chinese: `戏`,
                            pinyin: `xì`
                        },
                        {
                            chinese: `排`,
                            pinyin: `pái`
                        },
                        {
                            chinese: `篮`,
                            pinyin: `lán`
                        },
                        {
                            chinese: `连`,
                            pinyin: `lián`
                        },
                        {
                            chinese: `运`,
                            pinyin: `yùn`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 4`,
                        zh_cn: `识字表4`,
                        zh_tw: `識字錶4`
                    },
                    words: [
                        {
                            chinese: `夜`,
                            pinyin: `yè`
                        },
                        {
                            chinese: `思`,
                            pinyin: `sī`
                        },
                        {
                            chinese: `床`,
                            pinyin: `chuáng`
                        },
                        {
                            chinese: `光`,
                            pinyin: `guāng`
                        },
                        {
                            chinese: `疑`,
                            pinyin: `yí`
                        },
                        {
                            chinese: `举`,
                            pinyin: `jǔ`
                        },
                        {
                            chinese: `望`,
                            pinyin: `wàng`
                        },
                        {
                            chinese: `低`,
                            pinyin: `dī`
                        },
                        {
                            chinese: `故`,
                            pinyin: `gù`
                        },
                        {
                            chinese: `胆敢`,
                            pinyin: `dǎn/gǎn`
                        },
                        {
                            chinese: `往`,
                            pinyin: `wǎng`
                        },
                        {
                            chinese: `外`,
                            pinyin: `wài`
                        },
                        {
                            chinese: `勇`,
                            pinyin: `yǒng`
                        },
                        {
                            chinese: `窗`,
                            pinyin: `chuāng`
                        },
                        {
                            chinese: `乱`,
                            pinyin: `luàn`
                        },
                        {
                            chinese: `偏`,
                            pinyin: `piān`
                        },
                        {
                            chinese: `散`,
                            pinyin: `sàn`
                        },
                        {
                            chinese: `原`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `像`,
                            pinyin: `xiàng`
                        },
                        {
                            chinese: `微`,
                            pinyin: `wēi`
                        },
                        {
                            chinese: `端`,
                            pinyin: `duān`
                        },
                        {
                            chinese: `粽`,
                            pinyin: `zòng`
                        },
                        {
                            chinese: `节`,
                            pinyin: `jié`
                        },
                        {
                            chinese: `总`,
                            pinyin: `zǒng`
                        },
                        {
                            chinese: `米`,
                            pinyin: `mǐ`
                        },
                        {
                            chinese: `间`,
                            pinyin: `jiān`
                        },
                        {
                            chinese: `分`,
                            pinyin: `fēn`
                        },
                        {
                            chinese: `豆`,
                            pinyin: `dòu`
                        },
                        {
                            chinese: `肉`,
                            pinyin: `ròu`
                        },
                        {
                            chinese: `带`,
                            pinyin: `dài`
                        },
                        {
                            chinese: `知`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `据`,
                            pinyin: `jù`
                        },
                        {
                            chinese: `念`,
                            pinyin: `niàn`
                        },
                        {
                            chinese: `虹`,
                            pinyin: `hóng`
                        },
                        {
                            chinese: `座`,
                            pinyin: `zuò`
                        },
                        {
                            chinese: `浇`,
                            pinyin: `jiāo`
                        },
                        {
                            chinese: `提`,
                            pinyin: `tí`
                        },
                        {
                            chinese: `洒`,
                            pinyin: `sǎ`
                        },
                        {
                            chinese: `挑`,
                            pinyin: `tiāo`
                        },
                        {
                            chinese: `兴`,
                            pinyin: `xìng`
                        },
                        {
                            chinese: `镜`,
                            pinyin: `jìng`
                        },
                        {
                            chinese: `拿`,
                            pinyin: `ná`
                        },
                        {
                            chinese: `照`,
                            pinyin: `zhào`
                        },
                        {
                            chinese: `千`,
                            pinyin: `qiān`
                        },
                        {
                            chinese: `裙`,
                            pinyin: `qún`
                        },
                        {
                            chinese: `眉`,
                            pinyin: `méi`
                        },
                        {
                            chinese: `鼻`,
                            pinyin: `bí`
                        },
                        {
                            chinese: `嘴`,
                            pinyin: `zuǐ`
                        },
                        {
                            chinese: `脖`,
                            pinyin: `bó`
                        },
                        {
                            chinese: `臂`,
                            pinyin: `bì`
                        },
                        {
                            chinese: `肚`,
                            pinyin: `dù`
                        },
                        {
                            chinese: `腿脚`,
                            pinyin: `tuǐ/jiǎo`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 5`,
                        zh_cn: `识字表5`,
                        zh_tw: `識字錶5`
                    },
                    words: [
                        {
                            chinese: `蜻蜓`,
                            pinyin: `qīng/tíng`
                        },
                        {
                            chinese: `迷`,
                            pinyin: `mí`
                        },
                        {
                            chinese: `藏`,
                            pinyin: `cáng`
                        },
                        {
                            chinese: `造`,
                            pinyin: `zào`
                        },
                        {
                            chinese: `蚂蚁`,
                            pinyin: `mǎ/yǐ`
                        },
                        {
                            chinese: `食`,
                            pinyin: `shí`
                        },
                        {
                            chinese: `粮`,
                            pinyin: `liáng`
                        },
                        {
                            chinese: `蜘蛛网`,
                            pinyin: `zhī/zhū/wǎng`
                        },
                        {
                            chinese: `圆`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `严寒`,
                            pinyin: `yán/hán`
                        },
                        {
                            chinese: `酷暑`,
                            pinyin: `kù/shǔ`
                        },
                        {
                            chinese: `凉`,
                            pinyin: `liáng`
                        },
                        {
                            chinese: `晨`,
                            pinyin: `chén`
                        },
                        {
                            chinese: `细`,
                            pinyin: `xì`
                        },
                        {
                            chinese: `朝霞`,
                            pinyin: `zhāo/xiá`
                        },
                        {
                            chinese: `夕`,
                            pinyin: `xī`
                        },
                        {
                            chinese: `杨`,
                            pinyin: `yáng`
                        },
                        {
                            chinese: `操场`,
                            pinyin: `cāo/chǎng`
                        },
                        {
                            chinese: `拔`,
                            pinyin: `bá`
                        },
                        {
                            chinese: `拍`,
                            pinyin: `pāi`
                        },
                        {
                            chinese: `跑`,
                            pinyin: `pǎo`
                        },
                        {
                            chinese: `踢`,
                            pinyin: `tī`
                        },
                        {
                            chinese: `铃`,
                            pinyin: `líng`
                        },
                        {
                            chinese: `热闹`,
                            pinyin: `rè/nao`
                        },
                        {
                            chinese: `锻炼`,
                            pinyin: `duàn/liàn`
                        },
                        {
                            chinese: `体`,
                            pinyin: `tǐ`
                        },
                        {
                            chinese: `之`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `初`,
                            pinyin: `chū`
                        },
                        {
                            chinese: `性`,
                            pinyin: `xìng`
                        },
                        {
                            chinese: `善`,
                            pinyin: `shàn`
                        },
                        {
                            chinese: `习`,
                            pinyin: `xí`
                        },
                        {
                            chinese: `教`,
                            pinyin: `jiào`
                        },
                        {
                            chinese: `迁`,
                            pinyin: `qiān`
                        },
                        {
                            chinese: `贵`,
                            pinyin: `guì`
                        },
                        {
                            chinese: `专`,
                            pinyin: `zhuān`
                        },
                        {
                            chinese: `幼`,
                            pinyin: `yòu`
                        },
                        {
                            chinese: `玉器`,
                            pinyin: `yù/qì`
                        },
                        {
                            chinese: `义`,
                            pinyin: `yì`
                        },
                        {
                            chinese: `饭`,
                            pinyin: `fàn`
                        },
                        {
                            chinese: `能`,
                            pinyin: `néng`
                        },
                        {
                            chinese: `饱`,
                            pinyin: `bǎo`
                        },
                        {
                            chinese: `茶`,
                            pinyin: `chá`
                        },
                        {
                            chinese: `泡`,
                            pinyin: `pào`
                        },
                        {
                            chinese: `轻`,
                            pinyin: `qīng`
                        },
                        {
                            chinese: `鞭炮`,
                            pinyin: `biān/pào`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 6`,
                        zh_cn: `识字表6`,
                        zh_tw: `識字錶6`
                    },
                    words: [
                        {
                            chinese: `首`,
                            pinyin: `shǒu`
                        },
                        {
                            chinese: `踪迹`,
                            pinyin: `zōng/jì`
                        },
                        {
                            chinese: `浮萍`,
                            pinyin: `fú/píng`
                        },
                        {
                            chinese: `泉流`,
                            pinyin: `quán/liú`
                        },
                        {
                            chinese: `爱`,
                            pinyin: `ài`
                        },
                        {
                            chinese: `柔`,
                            pinyin: `róu`
                        },
                        {
                            chinese: `荷`,
                            pinyin: `hé`
                        },
                        {
                            chinese: `露`,
                            pinyin: `lù`
                        },
                        {
                            chinese: `角`,
                            pinyin: `jiǎo`
                        },
                        {
                            chinese: `珠`,
                            pinyin: `zhū`
                        },
                        {
                            chinese: `摇`,
                            pinyin: `yáo`
                        },
                        {
                            chinese: `躺`,
                            pinyin: `tǎng`
                        },
                        {
                            chinese: `晶`,
                            pinyin: `jīng`
                        },
                        {
                            chinese: `停机`,
                            pinyin: `tíng/jī`
                        },
                        {
                            chinese: `展`,
                            pinyin: `zhǎn`
                        },
                        {
                            chinese: `透`,
                            pinyin: `tòu`
                        },
                        {
                            chinese: `翅膀`,
                            pinyin: `chì/bǎng`
                        },
                        {
                            chinese: `唱`,
                            pinyin: `chàng`
                        },
                        {
                            chinese: `朵`,
                            pinyin: `duǒ`
                        },
                        {
                            chinese: `腰`,
                            pinyin: `yāo`
                        },
                        {
                            chinese: `坡`,
                            pinyin: `pō`
                        },
                        {
                            chinese: `沉`,
                            pinyin: `chén`
                        },
                        {
                            chinese: `伸`,
                            pinyin: `shēn`
                        },
                        {
                            chinese: `潮湿`,
                            pinyin: `cháo/shī`
                        },
                        {
                            chinese: `呢`,
                            pinyin: `ne`
                        },
                        {
                            chinese: `空`,
                            pinyin: `kōng`
                        },
                        {
                            chinese: `闷`,
                            pinyin: `mèn`
                        },
                        {
                            chinese: `消息`,
                            pinyin: `xiāo/xi`
                        },
                        {
                            chinese: `搬`,
                            pinyin: `bān`
                        },
                        {
                            chinese: `响`,
                            pinyin: `xiǎng`
                        },
                        {
                            chinese: `棍`,
                            pinyin: `gùn`
                        },
                        {
                            chinese: `汤`,
                            pinyin: `tāng`
                        },
                        {
                            chinese: `扇`,
                            pinyin: `shàn`
                        },
                        {
                            chinese: `椅`,
                            pinyin: `yǐ`
                        },
                        {
                            chinese: `萤`,
                            pinyin: `yíng`
                        },
                        {
                            chinese: `牵`,
                            pinyin: `qiān`
                        },
                        {
                            chinese: `织`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `斗`,
                            pinyin: `dòu`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 7`,
                        zh_cn: `识字表7`,
                        zh_tw: `識字錶7`
                    },
                    words: [
                        {
                            chinese: `具`,
                            pinyin: `jù`
                        },
                        {
                            chinese: `次`,
                            pinyin: `cì`
                        },
                        {
                            chinese: `丢`,
                            pinyin: `diū`
                        },
                        {
                            chinese: `哪`,
                            pinyin: `nǎ`
                        },
                        {
                            chinese: `新`,
                            pinyin: `xīn`
                        },
                        {
                            chinese: `每`,
                            pinyin: `měi`
                        },
                        {
                            chinese: `平`,
                            pinyin: `píng`
                        },
                        {
                            chinese: `她`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `些`,
                            pinyin: `xiē`
                        },
                        {
                            chinese: `仔`,
                            pinyin: `zǎi`
                        },
                        {
                            chinese: `检查所`,
                            pinyin: `jiǎn/chá/suǒ`
                        },
                        {
                            chinese: `钟`,
                            pinyin: `zhōng`
                        },
                        {
                            chinese: `丁`,
                            pinyin: `dīng`
                        },
                        {
                            chinese: `元`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `迟`,
                            pinyin: `chí`
                        },
                        {
                            chinese: `洗`,
                            pinyin: `xǐ`
                        },
                        {
                            chinese: `背`,
                            pinyin: `bèi`
                        },
                        {
                            chinese: `刚`,
                            pinyin: `gāng`
                        },
                        {
                            chinese: `共`,
                            pinyin: `gòng`
                        },
                        {
                            chinese: `汽`,
                            pinyin: `qì`
                        },
                        {
                            chinese: `决定`,
                            pinyin: `jué/dìng`
                        },
                        {
                            chinese: `已经`,
                            pinyin: `yǐ/jīng`
                        },
                        {
                            chinese: `物`,
                            pinyin: `wù`
                        },
                        {
                            chinese: `虎`,
                            pinyin: `hǔ`
                        },
                        {
                            chinese: `熊`,
                            pinyin: `xióng`
                        },
                        {
                            chinese: `通`,
                            pinyin: `tōng`
                        },
                        {
                            chinese: `注意`,
                            pinyin: `zhù/yì`
                        },
                        {
                            chinese: `遍`,
                            pinyin: `biàn`
                        },
                        {
                            chinese: `百`,
                            pinyin: `bǎi`
                        },
                        {
                            chinese: `舌`,
                            pinyin: `shé`
                        },
                        {
                            chinese: `鬼脸`,
                            pinyin: `guǐ/liǎn`
                        },
                        {
                            chinese: `准`,
                            pinyin: `zhǔn`
                        },
                        {
                            chinese: `第`,
                            pinyin: `dì`
                        },
                        {
                            chinese: `猴`,
                            pinyin: `hóu`
                        },
                        {
                            chinese: `结`,
                            pinyin: `jié`
                        },
                        {
                            chinese: `掰`,
                            pinyin: `bāi`
                        },
                        {
                            chinese: `扛`,
                            pinyin: `káng`
                        },
                        {
                            chinese: `满`,
                            pinyin: `mǎn`
                        },
                        {
                            chinese: `扔`,
                            pinyin: `rēng`
                        },
                        {
                            chinese: `摘`,
                            pinyin: `zhāi`
                        },
                        {
                            chinese: `捧`,
                            pinyin: `pěng`
                        },
                        {
                            chinese: `瓜`,
                            pinyin: `guā`
                        },
                        {
                            chinese: `抱`,
                            pinyin: `bào`
                        },
                        {
                            chinese: `蹦`,
                            pinyin: `bèng`
                        },
                        {
                            chinese: `追`,
                            pinyin: `zhuī`
                        },
                        {
                            chinese: `吵`,
                            pinyin: `chǎo`
                        },
                        {
                            chinese: `胖`,
                            pinyin: `pàng`
                        },
                        {
                            chinese: `岁`,
                            pinyin: `suì`
                        },
                        {
                            chinese: `现`,
                            pinyin: `xiàn`
                        },
                        {
                            chinese: `票`,
                            pinyin: `piào`
                        },
                        {
                            chinese: `交`,
                            pinyin: `jiāo`
                        },
                        {
                            chinese: `弓`,
                            pinyin: `gōng`
                        },
                        {
                            chinese: `甘`,
                            pinyin: `gān`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 8`,
                        zh_cn: `识字表8`,
                        zh_tw: `識字錶8`
                    },
                    words: [
                        {
                            chinese: `棉`,
                            pinyin: `mián`
                        },
                        {
                            chinese: `娘`,
                            pinyin: `niáng`
                        },
                        {
                            chinese: `治`,
                            pinyin: `zhì`
                        },
                        {
                            chinese: `燕`,
                            pinyin: `yàn`
                        },
                        {
                            chinese: `别`,
                            pinyin: `bié`
                        },
                        {
                            chinese: `干`,
                            pinyin: `gàn`
                        },
                        {
                            chinese: `然`,
                            pinyin: `rán`
                        },
                        {
                            chinese: `奇`,
                            pinyin: `qí`
                        },
                        {
                            chinese: `颗`,
                            pinyin: `kē`
                        },
                        {
                            chinese: `瓢`,
                            pinyin: `piáo`
                        },
                        {
                            chinese: `碧`,
                            pinyin: `bì`
                        },
                        {
                            chinese: `吐`,
                            pinyin: `tǔ`
                        },
                        {
                            chinese: `啦`,
                            pinyin: `lā`
                        },
                        {
                            chinese: `咕咚`,
                            pinyin: `gū/dōng`
                        },
                        {
                            chinese: `熟`,
                            pinyin: `shú`
                        },
                        {
                            chinese: `掉`,
                            pinyin: `diào`
                        },
                        {
                            chinese: `吓`,
                            pinyin: `xià`
                        },
                        {
                            chinese: `羊`,
                            pinyin: `yáng`
                        },
                        {
                            chinese: `鹿`,
                            pinyin: `lù`
                        },
                        {
                            chinese: `逃命`,
                            pinyin: `táo/mìng`
                        },
                        {
                            chinese: `象`,
                            pinyin: `xiàng`
                        },
                        {
                            chinese: `野`,
                            pinyin: `yě`
                        },
                        {
                            chinese: `拦`,
                            pinyin: `lán`
                        },
                        {
                            chinese: `领`,
                            pinyin: `lǐng`
                        },
                        {
                            chinese: `壁`,
                            pinyin: `bì`
                        },
                        {
                            chinese: `墙`,
                            pinyin: `qiáng`
                        },
                        {
                            chinese: `蚊`,
                            pinyin: `wén`
                        },
                        {
                            chinese: `咬`,
                            pinyin: `yǎo`
                        },
                        {
                            chinese: `断`,
                            pinyin: `duàn`
                        },
                        {
                            chinese: `您`,
                            pinyin: `nín`
                        },
                        {
                            chinese: `拨`,
                            pinyin: `bō`
                        },
                        {
                            chinese: `甩`,
                            pinyin: `shuǎi`
                        },
                        {
                            chinese: `赶`,
                            pinyin: `gǎn`
                        },
                        {
                            chinese: `房`,
                            pinyin: `fáng`
                        },
                        {
                            chinese: `傻`,
                            pinyin: `shǎ`
                        },
                        {
                            chinese: `转`,
                            pinyin: `zhuǎn`
                        },
                        {
                            chinese: `卫`,
                            pinyin: `wèi`
                        },
                        {
                            chinese: `刷`,
                            pinyin: `shuā`
                        },
                        {
                            chinese: `梳`,
                            pinyin: `shū`
                        },
                        {
                            chinese: `巾`,
                            pinyin: `jīn`
                        },
                        {
                            chinese: `擦`,
                            pinyin: `cā`
                        },
                        {
                            chinese: `皂`,
                            pinyin: `zào`
                        },
                        {
                            chinese: `澡`,
                            pinyin: `zǎo`
                        },
                        {
                            chinese: `盆`,
                            pinyin: `pén`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 1`,
                        zh_cn: `写字表1`,
                        zh_tw: `寫字錶1`
                    },
                    words: [
                        {
                            chinese: `春`,
                            pinyin: `chūn`
                        },
                        {
                            chinese: `冬`,
                            pinyin: `dōng`
                        },
                        {
                            chinese: `风雪`,
                            pinyin: `fēng/xuě`
                        },
                        {
                            chinese: `花`,
                            pinyin: `huā`
                        },
                        {
                            chinese: `飞`,
                            pinyin: `fēi`
                        },
                        {
                            chinese: `入`,
                            pinyin: `rù`
                        },
                        {
                            chinese: `姓`,
                            pinyin: `xìng`
                        },
                        {
                            chinese: `什么`,
                            pinyin: `shén/me`
                        },
                        {
                            chinese: `双`,
                            pinyin: `shuāng`
                        },
                        {
                            chinese: `国王`,
                            pinyin: `guó/wáng`
                        },
                        {
                            chinese: `方`,
                            pinyin: `fāng`
                        },
                        {
                            chinese: `青`,
                            pinyin: `qīng`
                        },
                        {
                            chinese: `清气`,
                            pinyin: `qīng/qì`
                        },
                        {
                            chinese: `晴`,
                            pinyin: `qíng`
                        },
                        {
                            chinese: `情`,
                            pinyin: `qíng`
                        },
                        {
                            chinese: `请`,
                            pinyin: `qǐng`
                        },
                        {
                            chinese: `生`,
                            pinyin: `shēng`
                        },
                        {
                            chinese: `字`,
                            pinyin: `zì`
                        },
                        {
                            chinese: `左右`,
                            pinyin: `zuǒ/yòu`
                        },
                        {
                            chinese: `红`,
                            pinyin: `hóng`
                        },
                        {
                            chinese: `时`,
                            pinyin: `shí`
                        },
                        {
                            chinese: `动`,
                            pinyin: `dòng`
                        },
                        {
                            chinese: `万`,
                            pinyin: `wàn`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 2`,
                        zh_cn: `写字表2`,
                        zh_tw: `寫字錶2`
                    },
                    words: [
                        {
                            chinese: `吃`,
                            pinyin: `chī`
                        },
                        {
                            chinese: `叫`,
                            pinyin: `jiào`
                        },
                        {
                            chinese: `主`,
                            pinyin: `zhǔ`
                        },
                        {
                            chinese: `江`,
                            pinyin: `jiāng`
                        },
                        {
                            chinese: `住`,
                            pinyin: `zhù`
                        },
                        {
                            chinese: `没`,
                            pinyin: `méi`
                        },
                        {
                            chinese: `以`,
                            pinyin: `yǐ`
                        },
                        {
                            chinese: `多`,
                            pinyin: `duō`
                        },
                        {
                            chinese: `会`,
                            pinyin: `huì`
                        },
                        {
                            chinese: `走`,
                            pinyin: `zǒu`
                        },
                        {
                            chinese: `北京`,
                            pinyin: `běi/jīng`
                        },
                        {
                            chinese: `广`,
                            pinyin: `guǎng`
                        },
                        {
                            chinese: `过`,
                            pinyin: `guò`
                        },
                        {
                            chinese: `各种`,
                            pinyin: `gè/zhǒng`
                        },
                        {
                            chinese: `样`,
                            pinyin: `yàng`
                        },
                        {
                            chinese: `伙伴`,
                            pinyin: `huǒ/bàn`
                        },
                        {
                            chinese: `这`,
                            pinyin: `zhè`
                        },
                        {
                            chinese: `太阳`,
                            pinyin: `tài/yáng`
                        },
                        {
                            chinese: `校`,
                            pinyin: `xiào`
                        },
                        {
                            chinese: `金秋`,
                            pinyin: `jīn/qiū`
                        },
                        {
                            chinese: `因为`,
                            pinyin: `yīn/wéi`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 3`,
                        zh_cn: `写字表3`,
                        zh_tw: `寫字錶3`
                    },
                    words: [
                        {
                            chinese: `他`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `地`,
                            pinyin: `dì`
                        },
                        {
                            chinese: `河`,
                            pinyin: `hé`
                        },
                        {
                            chinese: `说`,
                            pinyin: `shuō`
                        },
                        {
                            chinese: `也`,
                            pinyin: `yě`
                        },
                        {
                            chinese: `听`,
                            pinyin: `tīng`
                        },
                        {
                            chinese: `哥`,
                            pinyin: `gē`
                        },
                        {
                            chinese: `单`,
                            pinyin: `dān`
                        },
                        {
                            chinese: `居`,
                            pinyin: `jū`
                        },
                        {
                            chinese: `招呼`,
                            pinyin: `zhāo/hu`
                        },
                        {
                            chinese: `快乐`,
                            pinyin: `kuài/lè`
                        },
                        {
                            chinese: `玩`,
                            pinyin: `wán`
                        },
                        {
                            chinese: `很`,
                            pinyin: `hěn`
                        },
                        {
                            chinese: `当`,
                            pinyin: `dāng`
                        },
                        {
                            chinese: `音`,
                            pinyin: `yīn`
                        },
                        {
                            chinese: `讲`,
                            pinyin: `jiǎng`
                        },
                        {
                            chinese: `行`,
                            pinyin: `háng`
                        },
                        {
                            chinese: `许`,
                            pinyin: `xǔ`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 4`,
                        zh_cn: `写字表4`,
                        zh_tw: `寫字錶4`
                    },
                    words: [
                        {
                            chinese: `思`,
                            pinyin: `sī`
                        },
                        {
                            chinese: `床`,
                            pinyin: `chuáng`
                        },
                        {
                            chinese: `前`,
                            pinyin: `qián`
                        },
                        {
                            chinese: `光`,
                            pinyin: `guāng`
                        },
                        {
                            chinese: `低`,
                            pinyin: `dī`
                        },
                        {
                            chinese: `故乡`,
                            pinyin: `gù/xiāng`
                        },
                        {
                            chinese: `色`,
                            pinyin: `sè`
                        },
                        {
                            chinese: `外`,
                            pinyin: `wài`
                        },
                        {
                            chinese: `看`,
                            pinyin: `kàn`
                        },
                        {
                            chinese: `爸`,
                            pinyin: `bà`
                        },
                        {
                            chinese: `晚`,
                            pinyin: `wǎn`
                        },
                        {
                            chinese: `笑`,
                            pinyin: `xiào`
                        },
                        {
                            chinese: `再`,
                            pinyin: `zài`
                        },
                        {
                            chinese: `午`,
                            pinyin: `wǔ`
                        },
                        {
                            chinese: `节`,
                            pinyin: `jié`
                        },
                        {
                            chinese: `叶`,
                            pinyin: `yè`
                        },
                        {
                            chinese: `米`,
                            pinyin: `mǐ`
                        },
                        {
                            chinese: `真`,
                            pinyin: `zhēn`
                        },
                        {
                            chinese: `分`,
                            pinyin: `fēn`
                        },
                        {
                            chinese: `豆`,
                            pinyin: `dòu`
                        },
                        {
                            chinese: `那`,
                            pinyin: `nà`
                        },
                        {
                            chinese: `看到`,
                            pinyin: `kàn/dào`
                        },
                        {
                            chinese: `高兴`,
                            pinyin: `gāo/xìng`
                        },
                        {
                            chinese: `千`,
                            pinyin: `qiān`
                        },
                        {
                            chinese: `成`,
                            pinyin: `chéng`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 5`,
                        zh_cn: `写字表5`,
                        zh_tw: `寫字錶5`
                    },
                    words: [
                        {
                            chinese: `间`,
                            pinyin: `jiān`
                        },
                        {
                            chinese: `迷`,
                            pinyin: `mí`
                        },
                        {
                            chinese: `造`,
                            pinyin: `zào`
                        },
                        {
                            chinese: `运`,
                            pinyin: `yùn`
                        },
                        {
                            chinese: `池`,
                            pinyin: `chí`
                        },
                        {
                            chinese: `欢`,
                            pinyin: `huān`
                        },
                        {
                            chinese: `网`,
                            pinyin: `wǎng`
                        },
                        {
                            chinese: `古`,
                            pinyin: `gǔ`
                        },
                        {
                            chinese: `凉`,
                            pinyin: `liáng`
                        },
                        {
                            chinese: `细`,
                            pinyin: `xì`
                        },
                        {
                            chinese: `夕`,
                            pinyin: `xī`
                        },
                        {
                            chinese: `李`,
                            pinyin: `lǐ`
                        },
                        {
                            chinese: `语`,
                            pinyin: `yǔ`
                        },
                        {
                            chinese: `香`,
                            pinyin: `xiāng`
                        },
                        {
                            chinese: `打`,
                            pinyin: `dǎ`
                        },
                        {
                            chinese: `拍`,
                            pinyin: `pāi`
                        },
                        {
                            chinese: `跑`,
                            pinyin: `pǎo`
                        },
                        {
                            chinese: `足`,
                            pinyin: `zú`
                        },
                        {
                            chinese: `声`,
                            pinyin: `shēng`
                        },
                        {
                            chinese: `身体`,
                            pinyin: `shēn/tǐ`
                        },
                        {
                            chinese: `之`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `相近`,
                            pinyin: `xiāng/jìn`
                        },
                        {
                            chinese: `习`,
                            pinyin: `xí`
                        },
                        {
                            chinese: `远`,
                            pinyin: `yuǎn`
                        },
                        {
                            chinese: `玉`,
                            pinyin: `yù`
                        },
                        {
                            chinese: `义`,
                            pinyin: `yì`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 6`,
                        zh_cn: `写字表6`,
                        zh_tw: `寫字錶6`
                    },
                    words: [
                        {
                            chinese: `首`,
                            pinyin: `shǒu`
                        },
                        {
                            chinese: `采`,
                            pinyin: `cǎi`
                        },
                        {
                            chinese: `无`,
                            pinyin: `wú`
                        },
                        {
                            chinese: `树`,
                            pinyin: `shù`
                        },
                        {
                            chinese: `爱`,
                            pinyin: `ài`
                        },
                        {
                            chinese: `尖`,
                            pinyin: `jiān`
                        },
                        {
                            chinese: `角`,
                            pinyin: `jiǎo`
                        },
                        {
                            chinese: `亮`,
                            pinyin: `liàng`
                        },
                        {
                            chinese: `机台`,
                            pinyin: `jī/tái`
                        },
                        {
                            chinese: `放`,
                            pinyin: `fàng`
                        },
                        {
                            chinese: `鱼`,
                            pinyin: `yú`
                        },
                        {
                            chinese: `朵`,
                            pinyin: `duǒ`
                        },
                        {
                            chinese: `美`,
                            pinyin: `měi`
                        },
                        {
                            chinese: `直`,
                            pinyin: `zhí`
                        },
                        {
                            chinese: `呀`,
                            pinyin: `ya`
                        },
                        {
                            chinese: `边`,
                            pinyin: `biān`
                        },
                        {
                            chinese: `呢`,
                            pinyin: `ne`
                        },
                        {
                            chinese: `吗`,
                            pinyin: `ma`
                        },
                        {
                            chinese: `吧`,
                            pinyin: `ba`
                        },
                        {
                            chinese: `加`,
                            pinyin: `jiā`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 7`,
                        zh_cn: `写字表7`,
                        zh_tw: `寫字錶7`
                    },
                    words: [
                        {
                            chinese: `文`,
                            pinyin: `wén`
                        },
                        {
                            chinese: `次`,
                            pinyin: `cì`
                        },
                        {
                            chinese: `找`,
                            pinyin: `zhǎo`
                        },
                        {
                            chinese: `平`,
                            pinyin: `píng`
                        },
                        {
                            chinese: `办`,
                            pinyin: `bàn`
                        },
                        {
                            chinese: `让`,
                            pinyin: `ràng`
                        },
                        {
                            chinese: `包`,
                            pinyin: `bāo`
                        },
                        {
                            chinese: `钟`,
                            pinyin: `zhōng`
                        },
                        {
                            chinese: `丁`,
                            pinyin: `dīng`
                        },
                        {
                            chinese: `元`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `共`,
                            pinyin: `gòng`
                        },
                        {
                            chinese: `已经`,
                            pinyin: `yǐ/jīng`
                        },
                        {
                            chinese: `坐`,
                            pinyin: `zuò`
                        },
                        {
                            chinese: `要`,
                            pinyin: `yào`
                        },
                        {
                            chinese: `连`,
                            pinyin: `lián`
                        },
                        {
                            chinese: `百`,
                            pinyin: `bǎi`
                        },
                        {
                            chinese: `还`,
                            pinyin: `hái`
                        },
                        {
                            chinese: `舌`,
                            pinyin: `shé`
                        },
                        {
                            chinese: `点`,
                            pinyin: `diǎn`
                        },
                        {
                            chinese: `块`,
                            pinyin: `kuài`
                        },
                        {
                            chinese: `非`,
                            pinyin: `fēi`
                        },
                        {
                            chinese: `常`,
                            pinyin: `cháng`
                        },
                        {
                            chinese: `往`,
                            pinyin: `wǎng`
                        },
                        {
                            chinese: `瓜`,
                            pinyin: `guā`
                        },
                        {
                            chinese: `进`,
                            pinyin: `jìn`
                        },
                        {
                            chinese: `空`,
                            pinyin: `kōng`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 8`,
                        zh_cn: `写字表8`,
                        zh_tw: `寫字錶8`
                    },
                    words: [
                        {
                            chinese: `病`,
                            pinyin: `bìng`
                        },
                        {
                            chinese: `医`,
                            pinyin: `yī`
                        },
                        {
                            chinese: `别`,
                            pinyin: `bié`
                        },
                        {
                            chinese: `干`,
                            pinyin: `gàn`
                        },
                        {
                            chinese: `奇`,
                            pinyin: `qí`
                        },
                        {
                            chinese: `七`,
                            pinyin: `qī`
                        },
                        {
                            chinese: `星`,
                            pinyin: `xīng`
                        },
                        {
                            chinese: `吓`,
                            pinyin: `xià`
                        },
                        {
                            chinese: `怕`,
                            pinyin: `pà`
                        },
                        {
                            chinese: `跟`,
                            pinyin: `gēn`
                        },
                        {
                            chinese: `家`,
                            pinyin: `jiā`
                        },
                        {
                            chinese: `羊`,
                            pinyin: `yáng`
                        },
                        {
                            chinese: `象`,
                            pinyin: `xiàng`
                        },
                        {
                            chinese: `都`,
                            pinyin: `dōu`
                        },
                        {
                            chinese: `捉`,
                            pinyin: `zhuō`
                        },
                        {
                            chinese: `条`,
                            pinyin: `tiáo`
                        },
                        {
                            chinese: `爬`,
                            pinyin: `pá`
                        },
                        {
                            chinese: `姐`,
                            pinyin: `jiě`
                        },
                        {
                            chinese: `您`,
                            pinyin: `nín`
                        },
                        {
                            chinese: `草`,
                            pinyin: `cǎo`
                        },
                        {
                            chinese: `房`,
                            pinyin: `fáng`
                        }
                    ]
                }
            ]
        });
    };
    appendCopybookOfGrade2Term1 = ()=>{
        const { usableCopybooksPeopleEducationEdition  } = this;
        usableCopybooksPeopleEducationEdition.push({
            termI18n: {
                en: `K2T1`,
                zh_cn: `二年级上`,
                zh_tw: `二年級上`
            },
            units: [
                {
                    names: {
                        en: `Literacy 1`,
                        zh_cn: `识字表1`,
                        zh_tw: `識字錶1`
                    },
                    words: [
                        {
                            chinese: `塘`,
                            pinyin: `táng`
                        },
                        {
                            chinese: `脑袋`,
                            pinyin: `nǎo'dài`
                        },
                        {
                            chinese: `灰`,
                            pinyin: `huī`
                        },
                        {
                            chinese: `哇`,
                            pinyin: `wa`
                        },
                        {
                            chinese: `教`,
                            pinyin: `jiāo`
                        },
                        {
                            chinese: `捕`,
                            pinyin: `bǔ`
                        },
                        {
                            chinese: `迎`,
                            pinyin: `yíng`
                        },
                        {
                            chinese: `阿姨`,
                            pinyin: `ā'yí`
                        },
                        {
                            chinese: `宽`,
                            pinyin: `kuān`
                        },
                        {
                            chinese: `龟`,
                            pinyin: `guī`
                        },
                        {
                            chinese: `顶`,
                            pinyin: `dǐng`
                        },
                        {
                            chinese: `披`,
                            pinyin: `pī`
                        },
                        {
                            chinese: `鼓`,
                            pinyin: `gǔ`
                        },
                        {
                            chinese: `晒`,
                            pinyin: `shài`
                        },
                        {
                            chinese: `极`,
                            pinyin: `jí`
                        },
                        {
                            chinese: `傍`,
                            pinyin: `bàng`
                        },
                        {
                            chinese: `越`,
                            pinyin: `yuè`
                        },
                        {
                            chinese: `滴`,
                            pinyin: `dī`
                        },
                        {
                            chinese: `溪`,
                            pinyin: `xī`
                        },
                        {
                            chinese: `奔`,
                            pinyin: `bēn`
                        },
                        {
                            chinese: `洋`,
                            pinyin: `yáng`
                        },
                        {
                            chinese: `坏`,
                            pinyin: `huài`
                        },
                        {
                            chinese: `淹没`,
                            pinyin: `yān'mò`
                        },
                        {
                            chinese: `冲毁`,
                            pinyin: `chōng'huǐ`
                        },
                        {
                            chinese: `屋`,
                            pinyin: `wū`
                        },
                        {
                            chinese: `灾`,
                            pinyin: `zāi`
                        },
                        {
                            chinese: `猜`,
                            pinyin: `cāi`
                        },
                        {
                            chinese: `植`,
                            pinyin: `zhí`
                        },
                        {
                            chinese: `如`,
                            pinyin: `rú`
                        },
                        {
                            chinese: `为`,
                            pinyin: `wéi`
                        },
                        {
                            chinese: `旅`,
                            pinyin: `lǚ`
                        },
                        {
                            chinese: `备`,
                            pinyin: `bèi`
                        },
                        {
                            chinese: `纷`,
                            pinyin: `fēn`
                        },
                        {
                            chinese: `刺`,
                            pinyin: `cì`
                        },
                        {
                            chinese: `底`,
                            pinyin: `dǐ`
                        },
                        {
                            chinese: `啪`,
                            pinyin: `pā`
                        },
                        {
                            chinese: `炸`,
                            pinyin: `zhà`
                        },
                        {
                            chinese: `离`,
                            pinyin: `lí`
                        },
                        {
                            chinese: `识`,
                            pinyin: `shí`
                        },
                        {
                            chinese: `粗`,
                            pinyin: `cū`
                        },
                        {
                            chinese: `得`,
                            pinyin: `dé`
                        },
                        {
                            chinese: `套`,
                            pinyin: `tào`
                        },
                        {
                            chinese: `帽`,
                            pinyin: `mào`
                        },
                        {
                            chinese: `登`,
                            pinyin: `dēng`
                        },
                        {
                            chinese: `鞋`,
                            pinyin: `xié`
                        },
                        {
                            chinese: `裤`,
                            pinyin: `kù`
                        },
                        {
                            chinese: `图`,
                            pinyin: `tú`
                        },
                        {
                            chinese: `壶`,
                            pinyin: `hú`
                        },
                        {
                            chinese: `帐篷`,
                            pinyin: `zhàng'péng`
                        },
                        {
                            chinese: `指针`,
                            pinyin: `zhǐ'zhēn`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 2`,
                        zh_cn: `识字表2`,
                        zh_tw: `識字錶2`
                    },
                    words: [
                        {
                            chinese: `帆`,
                            pinyin: `fān`
                        },
                        {
                            chinese: `艘`,
                            pinyin: `sōu`
                        },
                        {
                            chinese: `军舰`,
                            pinyin: `jūn'jiàn`
                        },
                        {
                            chinese: `稻`,
                            pinyin: `dào`
                        },
                        {
                            chinese: `园`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `翠`,
                            pinyin: `cuì`
                        },
                        {
                            chinese: `队`,
                            pinyin: `duì`
                        },
                        {
                            chinese: `铜号`,
                            pinyin: `tóng'hào`
                        },
                        {
                            chinese: `梧桐`,
                            pinyin: `wú'tóng`
                        },
                        {
                            chinese: `掌`,
                            pinyin: `zhǎng`
                        },
                        {
                            chinese: `枫`,
                            pinyin: `fēng`
                        },
                        {
                            chinese: `松柏`,
                            pinyin: `sōng'bǎi`
                        },
                        {
                            chinese: `装`,
                            pinyin: `zhuāng`
                        },
                        {
                            chinese: `桦`,
                            pinyin: `huà`
                        },
                        {
                            chinese: `耐`,
                            pinyin: `nài`
                        },
                        {
                            chinese: `守`,
                            pinyin: `shǒu`
                        },
                        {
                            chinese: `疆`,
                            pinyin: `jiāng`
                        },
                        {
                            chinese: `银`,
                            pinyin: `yín`
                        },
                        {
                            chinese: `杉`,
                            pinyin: `shān`
                        },
                        {
                            chinese: `化`,
                            pinyin: `huà`
                        },
                        {
                            chinese: `桂`,
                            pinyin: `guì`
                        },
                        {
                            chinese: `世界`,
                            pinyin: `shì'jiè`
                        },
                        {
                            chinese: `孔雀`,
                            pinyin: `kǒng'què`
                        },
                        {
                            chinese: `锦`,
                            pinyin: `jǐn`
                        },
                        {
                            chinese: `雄鹰`,
                            pinyin: `xióng'yīng`
                        },
                        {
                            chinese: `翔`,
                            pinyin: `xiáng`
                        },
                        {
                            chinese: `雁`,
                            pinyin: `yàn`
                        },
                        {
                            chinese: `丛`,
                            pinyin: `cóng`
                        },
                        {
                            chinese: `深`,
                            pinyin: `shēn`
                        },
                        {
                            chinese: `猛`,
                            pinyin: `měng`
                        },
                        {
                            chinese: `灵`,
                            pinyin: `líng`
                        },
                        {
                            chinese: `休`,
                            pinyin: `xiū`
                        },
                        {
                            chinese: `季`,
                            pinyin: `jì`
                        },
                        {
                            chinese: `蝴蝶`,
                            pinyin: `hú'dié`
                        },
                        {
                            chinese: `麦苗`,
                            pinyin: `mài'miáo`
                        },
                        {
                            chinese: `桑`,
                            pinyin: `sāng`
                        },
                        {
                            chinese: `肥`,
                            pinyin: `féi`
                        },
                        {
                            chinese: `农`,
                            pinyin: `nóng`
                        },
                        {
                            chinese: `归`,
                            pinyin: `guī`
                        },
                        {
                            chinese: `戴`,
                            pinyin: `dài`
                        },
                        {
                            chinese: `场`,
                            pinyin: `cháng `
                        },
                        {
                            chinese: `谷粒`,
                            pinyin: `gǔ'lì`
                        },
                        {
                            chinese: `虽`,
                            pinyin: `suī`
                        },
                        {
                            chinese: `辛苦`,
                            pinyin: `xīn'kǔ`
                        },
                        {
                            chinese: `了`,
                            pinyin: `liǎo`
                        },
                        {
                            chinese: `葡萄`,
                            pinyin: `pú'táo`
                        },
                        {
                            chinese: `紫`,
                            pinyin: `zǐ`
                        },
                        {
                            chinese: `狐狸`,
                            pinyin: `hú'lí`
                        },
                        {
                            chinese: `笨`,
                            pinyin: `bèn`
                        },
                        {
                            chinese: `酸`,
                            pinyin: `suān`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 3`,
                        zh_cn: `识字表3`,
                        zh_tw: `識字錶3`
                    },
                    words: [
                        {
                            chinese: `曹`,
                            pinyin: `cáo`
                        },
                        {
                            chinese: `称`,
                            pinyin: `chēng`
                        },
                        {
                            chinese: `员`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `根`,
                            pinyin: `gēn`
                        },
                        {
                            chinese: `柱`,
                            pinyin: `zhù`
                        },
                        {
                            chinese: `议论`,
                            pinyin: `yì'lùn`
                        },
                        {
                            chinese: `重`,
                            pinyin: `zhòng`
                        },
                        {
                            chinese: `杆`,
                            pinyin: `gǎn`
                        },
                        {
                            chinese: `秤`,
                            pinyin: `chèng`
                        },
                        {
                            chinese: `砍`,
                            pinyin: `kǎn`
                        },
                        {
                            chinese: `线`,
                            pinyin: `xiàn`
                        },
                        {
                            chinese: `止`,
                            pinyin: `zhǐ`
                        },
                        {
                            chinese: `量`,
                            pinyin: `liàng`
                        },
                        {
                            chinese: `玲`,
                            pinyin: `líng`
                        },
                        {
                            chinese: `详`,
                            pinyin: `xiáng`
                        },
                        {
                            chinese: `幅`,
                            pinyin: `fú`
                        },
                        {
                            chinese: `评奖`,
                            pinyin: `píng'jiǎng`
                        },
                        {
                            chinese: `催`,
                            pinyin: `cuī`
                        },
                        {
                            chinese: `脏`,
                            pinyin: `zāng`
                        },
                        {
                            chinese: `伤`,
                            pinyin: `shāng`
                        },
                        {
                            chinese: `报`,
                            pinyin: `bào`
                        },
                        {
                            chinese: `另`,
                            pinyin: `lìng`
                        },
                        {
                            chinese: `及`,
                            pinyin: `jí`
                        },
                        {
                            chinese: `懒`,
                            pinyin: `lǎn`
                        },
                        {
                            chinese: `并`,
                            pinyin: `bìng`
                        },
                        {
                            chinese: `糟`,
                            pinyin: `zāo`
                        },
                        {
                            chinese: `肯`,
                            pinyin: `kěn`
                        },
                        {
                            chinese: `封`,
                            pinyin: `fēng`
                        },
                        {
                            chinese: `削`,
                            pinyin: `xiāo`
                        },
                        {
                            chinese: `锅`,
                            pinyin: `guō`
                        },
                        {
                            chinese: `朝`,
                            pinyin: `cháo`
                        },
                        {
                            chinese: `始`,
                            pinyin: `shǐ`
                        },
                        {
                            chinese: `刮`,
                            pinyin: `guā`
                        },
                        {
                            chinese: `胡`,
                            pinyin: `hú`
                        },
                        {
                            chinese: `修`,
                            pinyin: `xiū`
                        },
                        {
                            chinese: `冷`,
                            pinyin: `lěng`
                        },
                        {
                            chinese: `肩`,
                            pinyin: `jiān`
                        },
                        {
                            chinese: `团`,
                            pinyin: `tuán`
                        },
                        {
                            chinese: `重`,
                            pinyin: `chóng`
                        },
                        {
                            chinese: `完`,
                            pinyin: `wán`
                        },
                        {
                            chinese: `希`,
                            pinyin: `xī`
                        },
                        {
                            chinese: `期`,
                            pinyin: `qī`
                        },
                        {
                            chinese: `结束`,
                            pinyin: `jié'shù`
                        },
                        {
                            chinese: `鲜`,
                            pinyin: `xiān`
                        },
                        {
                            chinese: `哄`,
                            pinyin: `hǒng`
                        },
                        {
                            chinese: `先`,
                            pinyin: `xiān`
                        },
                        {
                            chinese: `梦`,
                            pinyin: `mèng`
                        },
                        {
                            chinese: `闭`,
                            pinyin: `bì`
                        },
                        {
                            chinese: `紧`,
                            pinyin: `jǐn`
                        },
                        {
                            chinese: `润`,
                            pinyin: `rùn`
                        },
                        {
                            chinese: `等`,
                            pinyin: `děng`
                        },
                        {
                            chinese: `累`,
                            pinyin: `lèi`
                        },
                        {
                            chinese: `吸`,
                            pinyin: `xī`
                        },
                        {
                            chinese: `发`,
                            pinyin: `fà`
                        },
                        {
                            chinese: `粘`,
                            pinyin: `zhān`
                        },
                        {
                            chinese: `汗`,
                            pinyin: `hàn`
                        },
                        {
                            chinese: `额`,
                            pinyin: `é`
                        },
                        {
                            chinese: `沙`,
                            pinyin: `shā`
                        },
                        {
                            chinese: `乏`,
                            pinyin: `fá`
                        },
                        {
                            chinese: `弹钢琴`,
                            pinyin: `tán'gāng'qín`
                        },
                        {
                            chinese: `练`,
                            pinyin: `liàn`
                        },
                        {
                            chinese: `捏`,
                            pinyin: `niē`
                        },
                        {
                            chinese: `泥`,
                            pinyin: `ní`
                        },
                        {
                            chinese: `滚`,
                            pinyin: `gǔn`
                        },
                        {
                            chinese: `铁环`,
                            pinyin: `tiě'huán`
                        },
                        {
                            chinese: `荡`,
                            pinyin: `dàng`
                        },
                        {
                            chinese: `滑`,
                            pinyin: `huá`
                        },
                        {
                            chinese: `梯`,
                            pinyin: `tī`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 4`,
                        zh_cn: `识字表4`,
                        zh_tw: `識字錶4`
                    },
                    words: [
                        {
                            chinese: `依`,
                            pinyin: `yī`
                        },
                        {
                            chinese: `尽`,
                            pinyin: `jìn`
                        },
                        {
                            chinese: `欲`,
                            pinyin: `yù`
                        },
                        {
                            chinese: `穷`,
                            pinyin: `qióng`
                        },
                        {
                            chinese: `层`,
                            pinyin: `céng`
                        },
                        {
                            chinese: `瀑布`,
                            pinyin: `pù'bù`
                        },
                        {
                            chinese: `炉`,
                            pinyin: `lú`
                        },
                        {
                            chinese: `烟`,
                            pinyin: `yān`
                        },
                        {
                            chinese: `遥`,
                            pinyin: `yáo`
                        },
                        {
                            chinese: `川`,
                            pinyin: `chuān`
                        },
                        {
                            chinese: `闻名`,
                            pinyin: `wén'míng`
                        },
                        {
                            chinese: `景区`,
                            pinyin: `jǐng'qū`
                        },
                        {
                            chinese: `省`,
                            pinyin: `shěng`
                        },
                        {
                            chinese: `部`,
                            pinyin: `bù`
                        },
                        {
                            chinese: `秀`,
                            pinyin: `xiù`
                        },
                        {
                            chinese: `尤其`,
                            pinyin: `yóu'qí`
                        },
                        {
                            chinese: `仙`,
                            pinyin: `xiān`
                        },
                        {
                            chinese: `巨`,
                            pinyin: `jù`
                        },
                        {
                            chinese: `位`,
                            pinyin: `wèi`
                        },
                        {
                            chinese: `都`,
                            pinyin: `dū`
                        },
                        {
                            chinese: `著`,
                            pinyin: `zhù`
                        },
                        {
                            chinese: `形状`,
                            pinyin: `xíng'zhuàng`
                        },
                        {
                            chinese: `潭`,
                            pinyin: `tán`
                        },
                        {
                            chinese: `湾`,
                            pinyin: `wān`
                        },
                        {
                            chinese: `湖`,
                            pinyin: `hú`
                        },
                        {
                            chinese: `绕`,
                            pinyin: `rào`
                        },
                        {
                            chinese: `茂盛`,
                            pinyin: `mào'shèng`
                        },
                        {
                            chinese: `围`,
                            pinyin: `wéi`
                        },
                        {
                            chinese: `胜`,
                            pinyin: `shèng`
                        },
                        {
                            chinese: `央`,
                            pinyin: `yāng`
                        },
                        {
                            chinese: `岛`,
                            pinyin: `dǎo`
                        },
                        {
                            chinese: `纱`,
                            pinyin: `shā`
                        },
                        {
                            chinese: `童`,
                            pinyin: `tóng`
                        },
                        {
                            chinese: `境`,
                            pinyin: `jìng`
                        },
                        {
                            chinese: `引`,
                            pinyin: `yǐn`
                        },
                        {
                            chinese: `客`,
                            pinyin: `kè `
                        },
                        {
                            chinese: `沟`,
                            pinyin: `gōu`
                        },
                        {
                            chinese: `产`,
                            pinyin: `chǎn`
                        },
                        {
                            chinese: `份`,
                            pinyin: `fèn`
                        },
                        {
                            chinese: `枝`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `搭`,
                            pinyin: `dā`
                        },
                        {
                            chinese: `淡`,
                            pinyin: `dàn`
                        },
                        {
                            chinese: `好`,
                            pinyin: `hào`
                        },
                        {
                            chinese: `够`,
                            pinyin: `qòu`
                        },
                        {
                            chinese: `收`,
                            pinyin: `shōu`
                        },
                        {
                            chinese: `城市`,
                            pinyin: `chéng'shì`
                        },
                        {
                            chinese: `干`,
                            pinyin: `gan`
                        },
                        {
                            chinese: `留`,
                            pinyin: `liú`
                        },
                        {
                            chinese: `钉`,
                            pinyin: `dìng`
                        },
                        {
                            chinese: `利`,
                            pinyin: `lì`
                        },
                        {
                            chinese: `分`,
                            pinyin: `fèn`
                        },
                        {
                            chinese: `味`,
                            pinyin: `wèi`
                        },
                        {
                            chinese: `昌`,
                            pinyin: `chāng`
                        },
                        {
                            chinese: `铺`,
                            pinyin: `pù`
                        },
                        {
                            chinese: `调`,
                            pinyin: `tiáo`
                        },
                        {
                            chinese: `硬卧`,
                            pinyin: `yìng'wò`
                        },
                        {
                            chinese: `限乘`,
                            pinyin: `xiàn'chéng`
                        },
                        {
                            chinese: `售`,
                            pinyin: `shòu`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 5`,
                        zh_cn: `识字表5`,
                        zh_tw: `識字錶5`
                    },
                    words: [
                        {
                            chinese: `沿`,
                            pinyin: `yán`
                        },
                        {
                            chinese: `答`,
                            pinyin: `dá`
                        },
                        {
                            chinese: `渴`,
                            pinyin: `kě`
                        },
                        {
                            chinese: `喝`,
                            pinyin: `hē`
                        },
                        {
                            chinese: `话`,
                            pinyin: `huà`
                        },
                        {
                            chinese: `弄错`,
                            pinyin: `nòng'cuò`
                        },
                        {
                            chinese: `际`,
                            pinyin: `ji`
                        },
                        {
                            chinese: `哪`,
                            pinyin: `na`
                        },
                        {
                            chinese: `抬`,
                            pinyin: `tái`
                        },
                        {
                            chinese: `号`,
                            pinyin: `háo`
                        },
                        {
                            chinese: `堵`,
                            pinyin: `dǔ`
                        },
                        {
                            chinese: `缝`,
                            pinyin: `fèng`
                        },
                        {
                            chinese: `当`,
                            pinyin: `dàng`
                        },
                        {
                            chinese: `鹊`,
                            pinyin: `què`
                        },
                        {
                            chinese: `朗`,
                            pinyin: `lǎng`
                        },
                        {
                            chinese: `衔`,
                            pinyin: `xián`
                        },
                        {
                            chinese: `枯`,
                            pinyin: `kū`
                        },
                        {
                            chinese: `劝`,
                            pinyin: `quàn`
                        },
                        {
                            chinese: `趁`,
                            pinyin: `chèn`
                        },
                        {
                            chinese: `将`,
                            pinyin: `jiāng`
                        },
                        {
                            chinese: `难`,
                            pinyin: `nán`
                        },
                        {
                            chinese: `且`,
                            pinyin: `qiě`
                        },
                        {
                            chinese: `狂`,
                            pinyin: `kuáng`
                        },
                        {
                            chinese: `吼`,
                            pinyin: `hǒu`
                        },
                        {
                            chinese: `复`,
                            pinyin: `fù`
                        },
                        {
                            chinese: `哀`,
                            pinyin: `āi`
                        },
                        {
                            chinese: `葫芦藤`,
                            pinyin: `hú'lú'téng`
                        },
                        {
                            chinese: `谢`,
                            pinyin: `xiè`
                        },
                        {
                            chinese: `啊`,
                            pinyin: `a`
                        },
                        {
                            chinese: `蚜`,
                            pinyin: `yá`
                        },
                        {
                            chinese: `盯`,
                            pinyin: `dīng`
                        },
                        {
                            chinese: `赛`,
                            pinyin: `sài`
                        },
                        {
                            chinese: `感`,
                            pinyin: `gǎn`
                        },
                        {
                            chinese: `怪`,
                            pinyin: `guài`
                        },
                        {
                            chinese: `慢`,
                            pinyin: `màn`
                        },
                        {
                            chinese: `锋`,
                            pinyin: `fēng`
                        },
                        {
                            chinese: `蜜蜂`,
                            pinyin: `mì'fēng`
                        },
                        {
                            chinese: `幕`,
                            pinyin: `mù`
                        },
                        {
                            chinese: `扫墓`,
                            pinyin: `sǎo'mù`
                        },
                        {
                            chinese: `慕`,
                            pinyin: `mù`
                        },
                        {
                            chinese: `抄`,
                            pinyin: `chāo`
                        },
                        {
                            chinese: `炒`,
                            pinyin: `chǎo`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 6`,
                        zh_cn: `识字表6`,
                        zh_tw: `識字錶6`
                    },
                    words: [
                        {
                            chinese: `楼`,
                            pinyin: `lóu`
                        },
                        {
                            chinese: `争`,
                            pinyin: `zhēng`
                        },
                        {
                            chinese: `代`,
                            pinyin: `dài`
                        },
                        {
                            chinese: `临`,
                            pinyin: `lín`
                        },
                        {
                            chinese: `腊`,
                            pinyin: `là`
                        },
                        {
                            chinese: `章`,
                            pinyin: `zhāng`
                        },
                        {
                            chinese: `握`,
                            pinyin: `wò`
                        },
                        {
                            chinese: `视察`,
                            pinyin: `shì'chá`
                        },
                        {
                            chinese: `油`,
                            pinyin: `yóu`
                        },
                        {
                            chinese: `朱德`,
                            pinyin: `zhū'dé`
                        },
                        {
                            chinese: `扁担`,
                            pinyin: `biǎn'dàn`
                        },
                        {
                            chinese: `志`,
                            pinyin: `zhì`
                        },
                        {
                            chinese: `伍`,
                            pinyin: `wǔ`
                        },
                        {
                            chinese: `泽`,
                            pinyin: `zé`
                        },
                        {
                            chinese: `敌`,
                            pinyin: `dí`
                        },
                        {
                            chinese: `陡`,
                            pinyin: `dǒu`
                        },
                        {
                            chinese: `整`,
                            pinyin: `zhěng`
                        },
                        {
                            chinese: `仗`,
                            pinyin: `zhàng`
                        },
                        {
                            chinese: `疼`,
                            pinyin: `téng`
                        },
                        {
                            chinese: `料`,
                            pinyin: `liào`
                        },
                        {
                            chinese: `敬`,
                            pinyin: `jìng`
                        },
                        {
                            chinese: `泼`,
                            pinyin: `pō`
                        },
                        {
                            chinese: `民族`,
                            pinyin: `mín'zú`
                        },
                        {
                            chinese: `度`,
                            pinyin: `dù`
                        },
                        {
                            chinese: `敲`,
                            pinyin: `qiāo`
                        },
                        {
                            chinese: `铺`,
                            pinyin: `pū`
                        },
                        {
                            chinese: `龙`,
                            pinyin: `lóng`
                        },
                        {
                            chinese: `驶`,
                            pinyin: `shǐ`
                        },
                        {
                            chinese: `容`,
                            pinyin: `róng`
                        },
                        {
                            chinese: `踩`,
                            pinyin: `cǎi`
                        },
                        {
                            chinese: `盛`,
                            pinyin: `chéng`
                        },
                        {
                            chinese: `碗`,
                            pinyin: `wǎn`
                        },
                        {
                            chinese: `祝福`,
                            pinyin: `zhù'fú`
                        },
                        {
                            chinese: `健康`,
                            pinyin: `jiàn'kāng`
                        },
                        {
                            chinese: `寿`,
                            pinyin: `shòu`
                        },
                        {
                            chinese: `刘`,
                            pinyin: `liú`
                        },
                        {
                            chinese: `兰`,
                            pinyin: `lán`
                        },
                        {
                            chinese: `派`,
                            pinyin: `pài`
                        },
                        {
                            chinese: `被`,
                            pinyin: `bèi`
                        },
                        {
                            chinese: `血`,
                            pinyin: `xuè`
                        },
                        {
                            chinese: `拉`,
                            pinyin: `lā`
                        },
                        {
                            chinese: `兵`,
                            pinyin: `bīng`
                        },
                        {
                            chinese: `血`,
                            pinyin: `xiě`
                        },
                        {
                            chinese: `挺`,
                            pinyin: `tǐng`
                        },
                        {
                            chinese: `杀`,
                            pinyin: `shā`
                        },
                        {
                            chinese: `烈`,
                            pinyin: `liè`
                        },
                        {
                            chinese: `轿`,
                            pinyin: `jiào`
                        },
                        {
                            chinese: `救`,
                            pinyin: `jiù`
                        },
                        {
                            chinese: `摩托`,
                            pinyin: `mó'tuō`
                        },
                        {
                            chinese: `防`,
                            pinyin: `fáng`
                        },
                        {
                            chinese: `渔`,
                            pinyin: `yú`
                        },
                        {
                            chinese: `货轮`,
                            pinyin: `huò'lún`
                        },
                        {
                            chinese: `科考`,
                            pinyin: `kē'kǎo`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 7`,
                        zh_cn: `识字表7`,
                        zh_tw: `識字錶7`
                    },
                    words: [
                        {
                            chinese: `宿`,
                            pinyin: `sù`
                        },
                        {
                            chinese: `寺`,
                            pinyin: `sì`
                        },
                        {
                            chinese: `危`,
                            pinyin: `wēi`
                        },
                        {
                            chinese: `辰`,
                            pinyin: `chén`
                        },
                        {
                            chinese: `恐`,
                            pinyin: `kǒng`
                        },
                        {
                            chinese: `惊`,
                            pinyin: `jīng`
                        },
                        {
                            chinese: `似`,
                            pinyin: `sì`
                        },
                        {
                            chinese: `庐`,
                            pinyin: `lú`
                        },
                        {
                            chinese: `笼`,
                            pinyin: `lǒng`
                        },
                        {
                            chinese: `盖`,
                            pinyin: `gài`
                        },
                        {
                            chinese: `苍`,
                            pinyin: `cāng`
                        },
                        {
                            chinese: `茫`,
                            pinyin: `máng`
                        },
                        {
                            chinese: `雾`,
                            pinyin: `wù`
                        },
                        {
                            chinese: `淘`,
                            pinyin: `táo`
                        },
                        {
                            chinese: `于`,
                            pinyin: `yú`
                        },
                        {
                            chinese: `暗`,
                            pinyin: `àn`
                        },
                        {
                            chinese: `岸`,
                            pinyin: `àn`
                        },
                        {
                            chinese: `街`,
                            pinyin: `jiē`
                        },
                        {
                            chinese: `梁`,
                            pinyin: `liáng`
                        },
                        {
                            chinese: `甚至`,
                            pinyin: `shèn'zhì`
                        },
                        {
                            chinese: `切`,
                            pinyin: `qiè`
                        },
                        {
                            chinese: `躲`,
                            pinyin: `duǒ`
                        },
                        {
                            chinese: `失`,
                            pinyin: `shī`
                        },
                        {
                            chinese: `添`,
                            pinyin: `tiān`
                        },
                        {
                            chinese: `柴`,
                            pinyin: `chái`
                        },
                        {
                            chinese: `烧`,
                            pinyin: `shāo`
                        },
                        {
                            chinese: `旺`,
                            pinyin: `wàng`
                        },
                        {
                            chinese: `渐`,
                            pinyin: `jiàn`
                        },
                        {
                            chinese: `哎`,
                            pinyin: `āi`
                        },
                        {
                            chinese: `呀`,
                            pinyin: `yā`
                        },
                        {
                            chinese: `冒`,
                            pinyin: `mào`
                        },
                        {
                            chinese: `呛`,
                            pinyin: `qiàng`
                        },
                        {
                            chinese: `烫`,
                            pinyin: `tàng`
                        },
                        {
                            chinese: `终`,
                            pinyin: `zhōng`
                        },
                        {
                            chinese: `浑`,
                            pinyin: `hún`
                        },
                        {
                            chinese: `淋`,
                            pinyin: `lín`
                        },
                        {
                            chinese: `灭`,
                            pinyin: `miè`
                        },
                        {
                            chinese: `激`,
                            pinyin: `jī`
                        },
                        {
                            chinese: `瞧`,
                            pinyin: `qiáo`
                        },
                        {
                            chinese: `滩`,
                            pinyin: `tān`
                        },
                        {
                            chinese: `椰壳`,
                            pinyin: `yē'ké`
                        },
                        {
                            chinese: `漠`,
                            pinyin: `mò`
                        },
                        {
                            chinese: `骆驼`,
                            pinyin: `luò'tuó`
                        },
                        {
                            chinese: `骏`,
                            pinyin: `jùn`
                        },
                        {
                            chinese: `悬崖`,
                            pinyin: `xuán'yá`
                        }
                    ]
                },
                {
                    names: {
                        en: `Literacy 8`,
                        zh_cn: `识字表8`,
                        zh_tw: `識字錶8`
                    },
                    words: [
                        {
                            chinese: `假`,
                            pinyin: `jiǎ`
                        },
                        {
                            chinese: `威`,
                            pinyin: `wēi`
                        },
                        {
                            chinese: `转`,
                            pinyin: `zhuàn`
                        },
                        {
                            chinese: `扯`,
                            pinyin: `chě`
                        },
                        {
                            chinese: `嗓`,
                            pinyin: `sǎng`
                        },
                        {
                            chinese: `兽`,
                            pinyin: `shòu`
                        },
                        {
                            chinese: `违抗`,
                            pinyin: `wéi'kàng`
                        },
                        {
                            chinese: `爪`,
                            pinyin: `zhuǎ`
                        },
                        {
                            chinese: `趟`,
                            pinyin: `tàng`
                        },
                        {
                            chinese: `神`,
                            pinyin: `shén`
                        },
                        {
                            chinese: `猪`,
                            pinyin: `zhū`
                        },
                        {
                            chinese: `纳`,
                            pinyin: `nà`
                        },
                        {
                            chinese: `闷`,
                            pinyin: `mèn`
                        },
                        {
                            chinese: `受`,
                            pinyin: `shòu`
                        },
                        {
                            chinese: `骗`,
                            pinyin: `piàn`
                        },
                        {
                            chinese: `借`,
                            pinyin: `jiè `
                        },
                        {
                            chinese: `筝`,
                            pinyin: `zhēng`
                        },
                        {
                            chinese: `鼠`,
                            pinyin: `shǔ`
                        },
                        {
                            chinese: `折`,
                            pinyin: `zhé`
                        },
                        {
                            chinese: `漂`,
                            pinyin: `piāo`
                        },
                        {
                            chinese: `扎`,
                            pinyin: `zā`
                        },
                        {
                            chinese: `抓`,
                            pinyin: `zhuā`
                        },
                        {
                            chinese: `幸`,
                            pinyin: `xìng`
                        },
                        {
                            chinese: `俩`,
                            pinyin: `liǎ`
                        },
                        {
                            chinese: `但愿`,
                            pinyin: `dàn'yuàn`
                        },
                        {
                            chinese: `哭`,
                            pinyin: `kū`
                        },
                        {
                            chinese: `取`,
                            pinyin: `qǔ`
                        },
                        {
                            chinese: `帮助`,
                            pinyin: `bāng'zhù`
                        },
                        {
                            chinese: `抽`,
                            pinyin: `chōu`
                        },
                        {
                            chinese: `续`,
                            pinyin: `xù`
                        },
                        {
                            chinese: `使劲`,
                            pinyin: `shǐ'jìn`
                        },
                        {
                            chinese: `秧`,
                            pinyin: `yāng`
                        },
                        {
                            chinese: `表示`,
                            pinyin: `biǎo'shì`
                        },
                        {
                            chinese: `摆`,
                            pinyin: `bǎi`
                        },
                        {
                            chinese: `翻`,
                            pinyin: `fān`
                        },
                        {
                            chinese: `仍`,
                            pinyin: `réng`
                        },
                        {
                            chinese: `栽`,
                            pinyin: `zāi`
                        },
                        {
                            chinese: `责`,
                            pinyin: `zé`
                        },
                        {
                            chinese: `狼`,
                            pinyin: `láng`
                        },
                        {
                            chinese: `猩`,
                            pinyin: `xīng`
                        },
                        {
                            chinese: `蛇`,
                            pinyin: `shé`
                        },
                        {
                            chinese: `鹤`,
                            pinyin: `hè`
                        },
                        {
                            chinese: `鸽`,
                            pinyin: `gē`
                        },
                        {
                            chinese: `羚`,
                            pinyin: `líng`
                        },
                        {
                            chinese: `蚯蚓`,
                            pinyin: `qiū'yǐn`
                        },
                        {
                            chinese: `螃蟹`,
                            pinyin: `páng'xiè`
                        },
                        {
                            chinese: `虾`,
                            pinyin: `xiā`
                        },
                        {
                            chinese: `蚕`,
                            pinyin: `cán`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 1`,
                        zh_cn: `写字表1`,
                        zh_tw: `寫字錶1`
                    },
                    words: [
                        {
                            chinese: `两`,
                            pinyin: `liǎng`
                        },
                        {
                            chinese: `哪`,
                            pinyin: `nǎ`
                        },
                        {
                            chinese: `宽`,
                            pinyin: `kuān`
                        },
                        {
                            chinese: `顶`,
                            pinyin: `dǐng`
                        },
                        {
                            chinese: `眼睛`,
                            pinyin: `yǎn'jīng`
                        },
                        {
                            chinese: `肚皮`,
                            pinyin: `dù'pí`
                        },
                        {
                            chinese: `孩`,
                            pinyin: `hái`
                        },
                        {
                            chinese: `跳`,
                            pinyin: `tiào`
                        },
                        {
                            chinese: `变`,
                            pinyin: `biàn`
                        },
                        {
                            chinese: `极`,
                            pinyin: `jí`
                        },
                        {
                            chinese: `片`,
                            pinyin: `piàn`
                        },
                        {
                            chinese: `傍`,
                            pinyin: `bàng`
                        },
                        {
                            chinese: `海洋`,
                            pinyin: `hǎi'yáng`
                        },
                        {
                            chinese: `作`,
                            pinyin: `zuò`
                        },
                        {
                            chinese: `坏`,
                            pinyin: `huài`
                        },
                        {
                            chinese: `给`,
                            pinyin: `gěi`
                        },
                        {
                            chinese: `带`,
                            pinyin: `dài`
                        },
                        {
                            chinese: `法`,
                            pinyin: `fǎ`
                        },
                        {
                            chinese: `如`,
                            pinyin: `rú`
                        },
                        {
                            chinese: `公`,
                            pinyin: `gōng`
                        },
                        {
                            chinese: `它`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `娃`,
                            pinyin: `wá`
                        },
                        {
                            chinese: `她`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `毛`,
                            pinyin: `máo`
                        },
                        {
                            chinese: `更`,
                            pinyin: `gèng`
                        },
                        {
                            chinese: `知识`,
                            pinyin: `zhī'shi`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 2`,
                        zh_cn: `写字表2`,
                        zh_tw: `寫字錶2`
                    },
                    words: [
                        {
                            chinese: `处`,
                            pinyin: `chù`
                        },
                        {
                            chinese: `园`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `桥`,
                            pinyin: `qiáo`
                        },
                        {
                            chinese: `群`,
                            pinyin: `qún`
                        },
                        {
                            chinese: `队旗`,
                            pinyin: `duì'qí`
                        },
                        {
                            chinese: `铜号`,
                            pinyin: `tóng'hào`
                        },
                        {
                            chinese: `领`,
                            pinyin: `lǐng`
                        },
                        {
                            chinese: `巾`,
                            pinyin: `jīn`
                        },
                        {
                            chinese: `杨`,
                            pinyin: `yáng`
                        },
                        {
                            chinese: `壮`,
                            pinyin: `zhuàng`
                        },
                        {
                            chinese: `桐`,
                            pinyin: `tóng`
                        },
                        {
                            chinese: `枫`,
                            pinyin: `fēng`
                        },
                        {
                            chinese: `松柏`,
                            pinyin: `sōngbǎi`
                        },
                        {
                            chinese: `棉`,
                            pinyin: `mián`
                        },
                        {
                            chinese: `杉`,
                            pinyin: `shān`
                        },
                        {
                            chinese: `化`,
                            pinyin: `huà`
                        },
                        {
                            chinese: `桂`,
                            pinyin: `guì`
                        },
                        {
                            chinese: `歌`,
                            pinyin: `gē`
                        },
                        {
                            chinese: `写`,
                            pinyin: `xiě`
                        },
                        {
                            chinese: `丛`,
                            pinyin: `cóng`
                        },
                        {
                            chinese: `深`,
                            pinyin: `shēn`
                        },
                        {
                            chinese: `六`,
                            pinyin: `liù`
                        },
                        {
                            chinese: `熊猫`,
                            pinyin: `xióng'māo`
                        },
                        {
                            chinese: `九`,
                            pinyin: `jiǔ`
                        },
                        {
                            chinese: `朋友`,
                            pinyin: `péng'yǒu`
                        },
                        {
                            chinese: `季`,
                            pinyin: `jì`
                        },
                        {
                            chinese: `吹`,
                            pinyin: `chuī`
                        },
                        {
                            chinese: `肥`,
                            pinyin: `féi`
                        },
                        {
                            chinese: `农`,
                            pinyin: `nóng`
                        },
                        {
                            chinese: `事`,
                            pinyin: `shì`
                        },
                        {
                            chinese: `忙`,
                            pinyin: `máng`
                        },
                        {
                            chinese: `归`,
                            pinyin: `guī`
                        },
                        {
                            chinese: `戴`,
                            pinyin: `dài`
                        },
                        {
                            chinese: `辛苦`,
                            pinyin: `xīn'kǔ`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 3`,
                        zh_cn: `写字表3`,
                        zh_tw: `寫字錶3`
                    },
                    words: [
                        {
                            chinese: `称`,
                            pinyin: `chēng`
                        },
                        {
                            chinese: `柱`,
                            pinyin: `zhù`
                        },
                        {
                            chinese: `底`,
                            pinyin: `dǐ`
                        },
                        {
                            chinese: `杆秤`,
                            pinyin: `gǎn'chèng`
                        },
                        {
                            chinese: `做`,
                            pinyin: `zuò`
                        },
                        {
                            chinese: `岁`,
                            pinyin: `suì`
                        },
                        {
                            chinese: `站`,
                            pinyin: `zhàn`
                        },
                        {
                            chinese: `船`,
                            pinyin: `chuán`
                        },
                        {
                            chinese: `然`,
                            pinyin: `rán`
                        },
                        {
                            chinese: `画幅`,
                            pinyin: `huà'fú`
                        },
                        {
                            chinese: `评奖`,
                            pinyin: `píng'jiǎng`
                        },
                        {
                            chinese: `纸`,
                            pinyin: `zhǐ`
                        },
                        {
                            chinese: `报`,
                            pinyin: `bào`
                        },
                        {
                            chinese: `另`,
                            pinyin: `lìng`
                        },
                        {
                            chinese: `及`,
                            pinyin: `jí`
                        },
                        {
                            chinese: `拿`,
                            pinyin: `ná`
                        },
                        {
                            chinese: `并`,
                            pinyin: `bìng`
                        },
                        {
                            chinese: `封`,
                            pinyin: `fēng`
                        },
                        {
                            chinese: `信`,
                            pinyin: `xìn`
                        },
                        {
                            chinese: `今`,
                            pinyin: `jīn`
                        },
                        {
                            chinese: `支`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `圆珠笔`,
                            pinyin: `yuán'zhū'bǐ`
                        },
                        {
                            chinese: `灯`,
                            pinyin: `dēng`
                        },
                        {
                            chinese: `电影`,
                            pinyin: `diàn'yǐng`
                        },
                        {
                            chinese: `哄`,
                            pinyin: `hǒng`
                        },
                        {
                            chinese: `先`,
                            pinyin: `xiān`
                        },
                        {
                            chinese: `闭`,
                            pinyin: `bì`
                        },
                        {
                            chinese: `脸`,
                            pinyin: `liǎn`
                        },
                        {
                            chinese: `沉`,
                            pinyin: `chén`
                        },
                        {
                            chinese: `发`,
                            pinyin: `fā`
                        },
                        {
                            chinese: `窗`,
                            pinyin: `chuāng`
                        },
                        {
                            chinese: `沙`,
                            pinyin: `shā`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 4`,
                        zh_cn: `写字表4`,
                        zh_tw: `寫字錶4`
                    },
                    words: [
                        {
                            chinese: `依`,
                            pinyin: `yī`
                        },
                        {
                            chinese: `尽`,
                            pinyin: `jìn`
                        },
                        {
                            chinese: `黄`,
                            pinyin: `huáng`
                        },
                        {
                            chinese: `层`,
                            pinyin: `céng`
                        },
                        {
                            chinese: `照`,
                            pinyin: `zhào`
                        },
                        {
                            chinese: `炉`,
                            pinyin: `lú`
                        },
                        {
                            chinese: `烟`,
                            pinyin: `yān`
                        },
                        {
                            chinese: `挂`,
                            pinyin: `guà`
                        },
                        {
                            chinese: `川`,
                            pinyin: `chuān`
                        },
                        {
                            chinese: `南部`,
                            pinyin: `nán'bù`
                        },
                        {
                            chinese: `些`,
                            pinyin: `xiē`
                        },
                        {
                            chinese: `巨`,
                            pinyin: `jù`
                        },
                        {
                            chinese: `位`,
                            pinyin: `wèi`
                        },
                        {
                            chinese: `向`,
                            pinyin: `xiàng`
                        },
                        {
                            chinese: `每`,
                            pinyin: `měi`
                        },
                        {
                            chinese: `升`,
                            pinyin: `shēng`
                        },
                        {
                            chinese: `闪`,
                            pinyin: `shǎn`
                        },
                        {
                            chinese: `狗`,
                            pinyin: `gǒu`
                        },
                        {
                            chinese: `湾`,
                            pinyin: `wān`
                        },
                        {
                            chinese: `名胜`,
                            pinyin: `míng'shèng`
                        },
                        {
                            chinese: `迹`,
                            pinyin: `jì`
                        },
                        {
                            chinese: `央`,
                            pinyin: `yāng`
                        },
                        {
                            chinese: `丽`,
                            pinyin: `lì`
                        },
                        {
                            chinese: `展现`,
                            pinyin: `zhǎn'xiàn`
                        },
                        {
                            chinese: `产`,
                            pinyin: `chǎn`
                        },
                        {
                            chinese: `份`,
                            pinyin: `fèn`
                        },
                        {
                            chinese: `坡`,
                            pinyin: `pō`
                        },
                        {
                            chinese: `枝`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `起`,
                            pinyin: `qǐ`
                        },
                        {
                            chinese: `客`,
                            pinyin: `kè`
                        },
                        {
                            chinese: `老`,
                            pinyin: `lǎo`
                        },
                        {
                            chinese: `收`,
                            pinyin: `shōu`
                        },
                        {
                            chinese: `城市`,
                            pinyin: `chéng'shì`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 5`,
                        zh_cn: `写字表5`,
                        zh_tw: `寫字錶5`
                    },
                    words: [
                        {
                            chinese: `井`,
                            pinyin: `jǐng`
                        },
                        {
                            chinese: `观`,
                            pinyin: `guān`
                        },
                        {
                            chinese: `沿`,
                            pinyin: `yán`
                        },
                        {
                            chinese: `答`,
                            pinyin: `dá`
                        },
                        {
                            chinese: `渴`,
                            pinyin: `kě`
                        },
                        {
                            chinese: `喝`,
                            pinyin: `hē`
                        },
                        {
                            chinese: `话`,
                            pinyin: `huà`
                        },
                        {
                            chinese: `际`,
                            pinyin: `jì`
                        },
                        {
                            chinese: `脚`,
                            pinyin: `jiǎo`
                        },
                        {
                            chinese: `面`,
                            pinyin: `miàn`
                        },
                        {
                            chinese: `阵`,
                            pinyin: `zhèn`
                        },
                        {
                            chinese: `朗`,
                            pinyin: `lǎng`
                        },
                        {
                            chinese: `枯`,
                            pinyin: `kū`
                        },
                        {
                            chinese: `却`,
                            pinyin: `què`
                        },
                        {
                            chinese: `第`,
                            pinyin: `dì`
                        },
                        {
                            chinese: `将`,
                            pinyin: `jiāng`
                        },
                        {
                            chinese: `难`,
                            pinyin: `nán`
                        },
                        {
                            chinese: `纷`,
                            pinyin: `fēn`
                        },
                        {
                            chinese: `棵`,
                            pinyin: `kē`
                        },
                        {
                            chinese: `谢`,
                            pinyin: `xiè`
                        },
                        {
                            chinese: `想`,
                            pinyin: `xiǎng`
                        },
                        {
                            chinese: `盯`,
                            pinyin: `dīng`
                        },
                        {
                            chinese: `言`,
                            pinyin: `yán`
                        },
                        {
                            chinese: `邻`,
                            pinyin: `lín`
                        },
                        {
                            chinese: `治`,
                            pinyin: `zhì`
                        },
                        {
                            chinese: `怪`,
                            pinyin: `guài`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 6`,
                        zh_cn: `写字表6`,
                        zh_tw: `寫字錶6`
                    },
                    words: [
                        {
                            chinese: `楼`,
                            pinyin: `lóu`
                        },
                        {
                            chinese: `年夜`,
                            pinyin: `nián'yè`
                        },
                        {
                            chinese: `披`,
                            pinyin: `pī`
                        },
                        {
                            chinese: `轻`,
                            pinyin: `qīng`
                        },
                        {
                            chinese: `利`,
                            pinyin: `lì`
                        },
                        {
                            chinese: `扁担`,
                            pinyin: `biǎn'dàn`
                        },
                        {
                            chinese: `志`,
                            pinyin: `zhì`
                        },
                        {
                            chinese: `伍`,
                            pinyin: `wǔ`
                        },
                        {
                            chinese: `师`,
                            pinyin: `shī`
                        },
                        {
                            chinese: `军`,
                            pinyin: `jūn`
                        },
                        {
                            chinese: `战士`,
                            pinyin: `zhàn'shì`
                        },
                        {
                            chinese: `忘`,
                            pinyin: `wàng`
                        },
                        {
                            chinese: `泼`,
                            pinyin: `pō`
                        },
                        {
                            chinese: `度`,
                            pinyin: `dù`
                        },
                        {
                            chinese: `龙`,
                            pinyin: `lóng`
                        },
                        {
                            chinese: `炮`,
                            pinyin: `pào`
                        },
                        {
                            chinese: `穿`,
                            pinyin: `chuān`
                        },
                        {
                            chinese: `始`,
                            pinyin: `shǐ`
                        },
                        {
                            chinese: `令`,
                            pinyin: `lìng`
                        },
                        {
                            chinese: `刘`,
                            pinyin: `liú`
                        },
                        {
                            chinese: `民`,
                            pinyin: `mín`
                        },
                        {
                            chinese: `反`,
                            pinyin: `fǎn`
                        },
                        {
                            chinese: `村`,
                            pinyin: `cūn`
                        },
                        {
                            chinese: `被`,
                            pinyin: `bèi`
                        },
                        {
                            chinese: `关`,
                            pinyin: `guān`
                        },
                        {
                            chinese: `道`,
                            pinyin: `dào`
                        },
                        {
                            chinese: `兵`,
                            pinyin: `bīng`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 7`,
                        zh_cn: `写字表7`,
                        zh_tw: `寫字錶7`
                    },
                    words: [
                        {
                            chinese: `危`,
                            pinyin: `wēi`
                        },
                        {
                            chinese: `敢`,
                            pinyin: `gǎn`
                        },
                        {
                            chinese: `惊`,
                            pinyin: `jīng`
                        },
                        {
                            chinese: `阴`,
                            pinyin: `yīn`
                        },
                        {
                            chinese: `似`,
                            pinyin: `sì`
                        },
                        {
                            chinese: `野`,
                            pinyin: `yě`
                        },
                        {
                            chinese: `苍茫`,
                            pinyin: `cāng'máng`
                        },
                        {
                            chinese: `于`,
                            pinyin: `yú`
                        },
                        {
                            chinese: `论`,
                            pinyin: `lùn`
                        },
                        {
                            chinese: `岸`,
                            pinyin: `àn`
                        },
                        {
                            chinese: `屋`,
                            pinyin: `wū`
                        },
                        {
                            chinese: `切`,
                            pinyin: `qiē`
                        },
                        {
                            chinese: `久`,
                            pinyin: `jiǔ`
                        },
                        {
                            chinese: `散步`,
                            pinyin: `sàn'bù`
                        },
                        {
                            chinese: `唱`,
                            pinyin: `chàng`
                        },
                        {
                            chinese: `赶`,
                            pinyin: `gǎn`
                        },
                        {
                            chinese: `旺`,
                            pinyin: `wàng`
                        },
                        {
                            chinese: `旁`,
                            pinyin: `páng`
                        },
                        {
                            chinese: `浑`,
                            pinyin: `hún`
                        },
                        {
                            chinese: `谁`,
                            pinyin: `shuí`
                        },
                        {
                            chinese: `汽`,
                            pinyin: `qì`
                        }
                    ]
                },
                {
                    names: {
                        en: `Writing 8`,
                        zh_cn: `写字表8`,
                        zh_tw: `寫字錶8`
                    },
                    words: [
                        {
                            chinese: `食物`,
                            pinyin: `shí'wù`
                        },
                        {
                            chinese: `爷`,
                            pinyin: `yé`
                        },
                        {
                            chinese: `就`,
                            pinyin: `jiù`
                        },
                        {
                            chinese: `爪`,
                            pinyin: `zhǎo`
                        },
                        {
                            chinese: `神`,
                            pinyin: `shén`
                        },
                        {
                            chinese: `活猪`,
                            pinyin: `huó'zhū`
                        },
                        {
                            chinese: `折`,
                            pinyin: `zhé`
                        },
                        {
                            chinese: `张`,
                            pinyin: `zhāng`
                        },
                        {
                            chinese: `祝`,
                            pinyin: `zhù`
                        },
                        {
                            chinese: `扎`,
                            pinyin: `zhā`
                        },
                        {
                            chinese: `抓`,
                            pinyin: `zhuā`
                        },
                        {
                            chinese: `吵`,
                            pinyin: `chǎo`
                        },
                        {
                            chinese: `但`,
                            pinyin: `dàn`
                        },
                        {
                            chinese: `哭`,
                            pinyin: `kū`
                        },
                        {
                            chinese: `车`,
                            pinyin: `chē`
                        },
                        {
                            chinese: `得`,
                            pinyin: `dé`
                        },
                        {
                            chinese: `秧苗`,
                            pinyin: `yāng'miáo`
                        },
                        {
                            chinese: `汗`,
                            pinyin: `hàn`
                        },
                        {
                            chinese: `急`,
                            pinyin: `jí`
                        },
                        {
                            chinese: `场`,
                            pinyin: `chǎng`
                        },
                        {
                            chinese: `伤`,
                            pinyin: `shāng`
                        },
                        {
                            chinese: `路`,
                            pinyin: `lù`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 1`,
                        zh_cn: `词语1`,
                        zh_tw: `詞語1`
                    },
                    words: [
                        {
                            chinese: `看见`,
                            pinyin: `kàn'jiàn`
                        },
                        {
                            chinese: `哪里`,
                            pinyin: `nǎ'lǐ`
                        },
                        {
                            chinese: `那边`,
                            pinyin: `nà'biān`
                        },
                        {
                            chinese: `头顶`,
                            pinyin: `tóu'dǐng`
                        },
                        {
                            chinese: `眼睛`,
                            pinyin: `yǎn'jīng`
                        },
                        {
                            chinese: `雪白`,
                            pinyin: `xuě'bái`
                        },
                        {
                            chinese: `肚皮`,
                            pinyin: `dù'pí`
                        },
                        {
                            chinese: `孩子`,
                            pinyin: `hái'zi`
                        },
                        {
                            chinese: `天空`,
                            pinyin: `tiān'kōng`
                        },
                        {
                            chinese: `傍晚`,
                            pinyin: `bàng'wǎn`
                        },
                        {
                            chinese: `人们`,
                            pinyin: `rén'men`
                        },
                        {
                            chinese: `冬天`,
                            pinyin: `dōng'tiān`
                        },
                        {
                            chinese: `花朵`,
                            pinyin: `huā'duǒ`
                        },
                        {
                            chinese: `平常`,
                            pinyin: `píng'cháng`
                        },
                        {
                            chinese: `江河`,
                            pinyin: `jiāng'hé`
                        },
                        {
                            chinese: `海洋`,
                            pinyin: `hǎi'yáng`
                        },
                        {
                            chinese: `田地`,
                            pinyin: `tián'dì`
                        },
                        {
                            chinese: `工作`,
                            pinyin: `gōng'zuò`
                        },
                        {
                            chinese: `办法`,
                            pinyin: `bàn'fǎ`
                        },
                        {
                            chinese: `如果`,
                            pinyin: `rú'guǒ`
                        },
                        {
                            chinese: `长大`,
                            pinyin: `zhǎng'dà`
                        },
                        {
                            chinese: `四海为家`,
                            pinyin: `sì'hǎi'wéi'jiā`
                        },
                        {
                            chinese: `娃娃`,
                            pinyin: `wá'wá`
                        },
                        {
                            chinese: `只要`,
                            pinyin: `zhǐ'yào`
                        },
                        {
                            chinese: `皮毛`,
                            pinyin: `pí'máo`
                        },
                        {
                            chinese: `那里`,
                            pinyin: `nà'lǐ`
                        },
                        {
                            chinese: `知识`,
                            pinyin: `zhī'shi`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 2`,
                        zh_cn: `词语2`,
                        zh_tw: `詞語2`
                    },
                    words: [
                        {
                            chinese: `花园`,
                            pinyin: `huā'yuán`
                        },
                        {
                            chinese: `石桥`,
                            pinyin: `shí'qiáo`
                        },
                        {
                            chinese: `队旗`,
                            pinyin: `duì'qí`
                        },
                        {
                            chinese: `铜号`,
                            pinyin: `tóng'hào`
                        },
                        {
                            chinese: `红领巾`,
                            pinyin: `hóng'lǐng'jīn`
                        },
                        {
                            chinese: `欢笑`,
                            pinyin: `huān'xiào`
                        },
                        {
                            chinese: `杨树`,
                            pinyin: `yáng'shù`
                        },
                        {
                            chinese: `树叶`,
                            pinyin: `shù'yè`
                        },
                        {
                            chinese: `枫树`,
                            pinyin: `fēng'shù`
                        },
                        {
                            chinese: `松柏`,
                            pinyin: `sōng'bǎi`
                        },
                        {
                            chinese: `木棉`,
                            pinyin: `mù'mián`
                        },
                        {
                            chinese: `水杉`,
                            pinyin: `shuǐ'shān`
                        },
                        {
                            chinese: `化石`,
                            pinyin: `huà'shí`
                        },
                        {
                            chinese: `金桂`,
                            pinyin: `jīn'guì`
                        },
                        {
                            chinese: `写字`,
                            pinyin: `xiě'zì`
                        },
                        {
                            chinese: `丛林`,
                            pinyin: `cóng'lín`
                        },
                        {
                            chinese: `深处`,
                            pinyin: `shēn'chù`
                        },
                        {
                            chinese: `竹林`,
                            pinyin: `zhúlín`
                        },
                        {
                            chinese: `熊猫`,
                            pinyin: `xióng'māo`
                        },
                        {
                            chinese: `朋友`,
                            pinyin: `péng'you`
                        },
                        {
                            chinese: `四季`,
                            pinyin: `sì'jì`
                        },
                        {
                            chinese: `农事`,
                            pinyin: `nóng'shì`
                        },
                        {
                            chinese: `月光`,
                            pinyin: `yuè'guāng`
                        },
                        {
                            chinese: `辛苦`,
                            pinyin: `xīn'kǔ`
                        },
                        {
                            chinese: `棉衣`,
                            pinyin: `mián'yī`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 3`,
                        zh_cn: `词语3`,
                        zh_tw: `詞語3`
                    },
                    words: [
                        {
                            chinese: `一同`,
                            pinyin: `yì'tóng`
                        },
                        {
                            chinese: `柱子`,
                            pinyin: `zhù'zi`
                        },
                        {
                            chinese: `一边`,
                            pinyin: `yì'biān`
                        },
                        {
                            chinese: `到底`,
                            pinyin: `dào'dǐ`
                        },
                        {
                            chinese: `秤杆`,
                            pinyin: `chèng'gǎn`
                        },
                        {
                            chinese: `力气`,
                            pinyin: `lì'qi`
                        },
                        {
                            chinese: `出来`,
                            pinyin: `chū'lái`
                        },
                        {
                            chinese: `船身`,
                            pinyin: `chuán'shēn`
                        },
                        {
                            chinese: `石头`,
                            pinyin: `shí'tou`
                        },
                        {
                            chinese: `地方`,
                            pinyin: `dì'fāng`
                        },
                        {
                            chinese: `果然`,
                            pinyin: `guǒ'rán`
                        },
                        {
                            chinese: `称呼`,
                            pinyin: `chēng'hu`
                        },
                        {
                            chinese: `做手工`,
                            pinyin: `zuò'shǒu'gōng`
                        },
                        {
                            chinese: `岁月`,
                            pinyin: `suì'yuè`
                        },
                        {
                            chinese: `评奖`,
                            pinyin: `píng'jiǎng`
                        },
                        {
                            chinese: `时间`,
                            pinyin: `shí'jiān`
                        },
                        {
                            chinese: `报纸`,
                            pinyin: `bào'zhǐ`
                        },
                        {
                            chinese: `来不及`,
                            pinyin: `lái'bu'jí`
                        },
                        {
                            chinese: `事情`,
                            pinyin: `shì'qing`
                        },
                        {
                            chinese: `坏事`,
                            pinyin: `huài'shì`
                        },
                        {
                            chinese: `好事`,
                            pinyin: `hǎ'oshì`
                        },
                        {
                            chinese: `一幅画`,
                            pinyin: `yī'fú'huà`
                        },
                        {
                            chinese: `另外`,
                            pinyin: `lìng'wài`
                        },
                        {
                            chinese: `捉拿`,
                            pinyin: `zhuō'ná`
                        },
                        {
                            chinese: `一并`,
                            pinyin: `yí'bìng`
                        },
                        {
                            chinese: `出国`,
                            pinyin: `chū'guó`
                        },
                        {
                            chinese: `今天`,
                            pinyin: `jīn'tiān`
                        },
                        {
                            chinese: `圆珠笔`,
                            pinyin: `yuán'zhū'bǐ`
                        },
                        {
                            chinese: `开心`,
                            pinyin: `kāi'xīn`
                        },
                        {
                            chinese: `以前`,
                            pinyin: `yǐ'qián`
                        },
                        {
                            chinese: `还有`,
                            pinyin: `hái'yǒu`
                        },
                        {
                            chinese: `台灯`,
                            pinyin: `tái'dēng`
                        },
                        {
                            chinese: `一封信`,
                            pinyin: `yī'fēng'xìn`
                        },
                        {
                            chinese: `一支笔`,
                            pinyin: `yī'zhī'bǐ`
                        },
                        {
                            chinese: `这时`,
                            pinyin: `zhè'shí`
                        },
                        {
                            chinese: `阳光`,
                            pinyin: `yáng'guāng`
                        },
                        {
                            chinese: `电影`,
                            pinyin: `diàn'yǐng`
                        },
                        {
                            chinese: `明亮`,
                            pinyin: `míng'liàng`
                        },
                        {
                            chinese: `故事`,
                            pinyin: `gù'shi`
                        },
                        {
                            chinese: `头发`,
                            pinyin: `tóu'fà`
                        },
                        {
                            chinese: `窗外`,
                            pinyin: `chuāng'wài`
                        },
                        {
                            chinese: `哄人`,
                            pinyin: `hǒng'rén`
                        },
                        {
                            chinese: `首先`,
                            pinyin: `shǒu'xiān`
                        },
                        {
                            chinese: `闭眼`,
                            pinyin: `bì'yǎn`
                        },
                        {
                            chinese: `圆脸`,
                            pinyin: `yuán'liǎn`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 4`,
                        zh_cn: `词语4`,
                        zh_tw: `詞語4`
                    },
                    words: [
                        {
                            chinese: `黄山`,
                            pinyin: `huáng'shān`
                        },
                        {
                            chinese: `南部`,
                            pinyin: `nán'bù`
                        },
                        {
                            chinese: `那些`,
                            pinyin: `nà'xiē`
                        },
                        {
                            chinese: `山顶`,
                            pinyin: `shān'dǐng`
                        },
                        {
                            chinese: `一动不动`,
                            pinyin: `yī'dòng'bu'dòng`
                        },
                        {
                            chinese: `云海`,
                            pinyin: `yún'hǎi`
                        },
                        {
                            chinese: `巨石`,
                            pinyin: `jù'shí`
                        },
                        {
                            chinese: `前方`,
                            pinyin: `qián'fāng`
                        },
                        {
                            chinese: `每当`,
                            pinyin: `měi'dāng`
                        },
                        {
                            chinese: `金光闪闪`,
                            pinyin: `jīn'guāng'shǎn'shǎn`
                        },
                        {
                            chinese: `它们`,
                            pinyin: `tā'men`
                        },
                        {
                            chinese: `群山`,
                            pinyin: `qún'shān`
                        },
                        {
                            chinese: `树木`,
                            pinyin: `shù'mù`
                        },
                        {
                            chinese: `名胜古迹`,
                            pinyin: `míng'shèng'gǔ'jì`
                        },
                        {
                            chinese: `中央`,
                            pinyin: `zhōng'yāng`
                        },
                        {
                            chinese: `美丽`,
                            pinyin: `měi'lì`
                        },
                        {
                            chinese: `灯光`,
                            pinyin: `dēng'guāng`
                        },
                        {
                            chinese: `中午`,
                            pinyin: `zhōng'wǔ`
                        },
                        {
                            chinese: `展现`,
                            pinyin: `zhǎn'xiàn`
                        },
                        {
                            chinese: `风光`,
                            pinyin: `fēng'guāng`
                        },
                        {
                            chinese: `出产`,
                            pinyin: `chū'chǎn`
                        },
                        {
                            chinese: `水果`,
                            pinyin: `shuǐ'guǒ`
                        },
                        {
                            chinese: `月份`,
                            pinyin: `yuè'fèn`
                        },
                        {
                            chinese: `山城`,
                            pinyin: `shān'chéng`
                        },
                        {
                            chinese: `枝叶`,
                            pinyin: `zhī'yè`
                        },
                        {
                            chinese: `展开`,
                            pinyin: `zhǎn'kāi`
                        },
                        {
                            chinese: `五光十色`,
                            pinyin: `wǔ'guāng'shí'sè`
                        },
                        {
                            chinese: `好客`,
                            pinyin: `hào'kè`
                        },
                        {
                            chinese: `老乡`,
                            pinyin: `lǎo'xiāng`
                        },
                        {
                            chinese: `城市`,
                            pinyin: `chéng'shì`
                        },
                        {
                            chinese: `空气`,
                            pinyin: `kōng'qì`
                        },
                        {
                            chinese: `水分`,
                            pinyin: `shuǐ'fèn`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 5`,
                        zh_cn: `词语5`,
                        zh_tw: `詞語5`
                    },
                    words: [
                        {
                            chinese: `坐井观天`,
                            pinyin: `zuò'jǐng'guān'tiān`
                        },
                        {
                            chinese: `井沿`,
                            pinyin: `jǐng'yán`
                        },
                        {
                            chinese: `回答`,
                            pinyin: `huí'dá`
                        },
                        {
                            chinese: `口渴`,
                            pinyin: `kǒu'kě`
                        },
                        {
                            chinese: `大话`,
                            pinyin: `dà'huà`
                        },
                        {
                            chinese: `无边无际`,
                            pinyin: `wú'biān'wú'jì`
                        },
                        {
                            chinese: `山脚`,
                            pinyin: `shān'jiǎo`
                        },
                        {
                            chinese: `当作`,
                            pinyin: `dàng'zuò`
                        },
                        {
                            chinese: `前面`,
                            pinyin: `qián'mian`
                        },
                        {
                            chinese: `晴朗`,
                            pinyin: `qíng'lǎng`
                        },
                        {
                            chinese: `枯草`,
                            pinyin: `kū'cǎo`
                        },
                        {
                            chinese: `正好`,
                            pinyin: `zhèng'hǎo`
                        },
                        {
                            chinese: `清早`,
                            pinyin: `qīng'zǎo`
                        },
                        {
                            chinese: `却是`,
                            pinyin: `què'shì`
                        },
                        {
                            chinese: `现在`,
                            pinyin: `xiàn'zài`
                        },
                        {
                            chinese: `将来`,
                            pinyin: `jiāng'lái`
                        },
                        {
                            chinese: `难过`,
                            pinyin: `nán'guò`
                        },
                        {
                            chinese: `大雪纷飞`,
                            pinyin: `dà'xuě'fēn'fēi`
                        },
                        {
                            chinese: `枝头`,
                            pinyin: `zhī'tóu`
                        },
                        {
                            chinese: `一阵风`,
                            pinyin: `yí'zhèn'fēng`
                        },
                        {
                            chinese: `从前`,
                            pinyin: `cóng'qián`
                        },
                        {
                            chinese: `细长`,
                            pinyin: `xì'cháng`
                        },
                        {
                            chinese: `可爱`,
                            pinyin: `kě'ài`
                        },
                        {
                            chinese: `每天`,
                            pinyin: `měi'tiān`
                        },
                        {
                            chinese: `自言自语`,
                            pinyin: `zì'yán'zì'yǔ`
                        },
                        {
                            chinese: `南瓜`,
                            pinyin: `nán'guā`
                        },
                        {
                            chinese: `邻居`,
                            pinyin: `lín'jū`
                        },
                        {
                            chinese: `奇怪`,
                            pinyin: `qí'guài`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 6`,
                        zh_cn: `词语6`,
                        zh_tw: `詞語6`
                    },
                    words: [
                        {
                            chinese: `八角楼`,
                            pinyin: `bā'jiǎo'lóu`
                        },
                        {
                            chinese: `深夜`,
                            pinyin: `shēn'yè`
                        },
                        {
                            chinese: `军衣`,
                            pinyin: `jūn'yī`
                        },
                        {
                            chinese: `星星之火`,
                            pinyin: `xīng'xīng'zhī'huǒ`
                        },
                        {
                            chinese: `沉思`,
                            pinyin: `chén'sī`
                        },
                        {
                            chinese: `胜利`,
                            pinyin: `shèng'lì`
                        },
                        {
                            chinese: `扁担`,
                            pinyin: `biǎn'dan`
                        },
                        {
                            chinese: `同志`,
                            pinyin: `tóng'zhì`
                        },
                        {
                            chinese: `带领`,
                            pinyin: `dài'lǐng`
                        },
                        {
                            chinese: `队伍`,
                            pinyin: `duì'wǔ`
                        },
                        {
                            chinese: `会师`,
                            pinyin: `huì'shī`
                        },
                        {
                            chinese: `红军`,
                            pinyin: `hóng'jūn`
                        },
                        {
                            chinese: `来回`,
                            pinyin: `lái'huí`
                        },
                        {
                            chinese: `战士`,
                            pinyin: `zhàn'shì`
                        },
                        {
                            chinese: `白天`,
                            pinyin: `bái'tiān`
                        },
                        {
                            chinese: `起来`,
                            pinyin: `qǐ'lái`
                        },
                        {
                            chinese: `难忘`,
                            pinyin: `nán'wàng`
                        },
                        {
                            chinese: `泼水节`,
                            pinyin: `pō'shuǐ'jié`
                        },
                        {
                            chinese: `一年一度`,
                            pinyin: `yì'nián'yí'dù`
                        },
                        {
                            chinese: `四面八方`,
                            pinyin: `sì'miàn'bā'fāng`
                        },
                        {
                            chinese: `龙船`,
                            pinyin: `lóng'chuán`
                        },
                        {
                            chinese: `花地`,
                            pinyin: `huā'dì`
                        },
                        {
                            chinese: `欢呼`,
                            pinyin: `huān'hū`
                        },
                        {
                            chinese: `人群`,
                            pinyin: `rén'qún`
                        },
                        {
                            chinese: `欢乐`,
                            pinyin: `huān'lè`
                        },
                        {
                            chinese: `开始`,
                            pinyin: `kāi'shǐ`
                        },
                        {
                            chinese: `柏树枝`,
                            pinyin: `bǎi'shù'zhī`
                        },
                        {
                            chinese: `多么`,
                            pinyin: `duō'me`
                        },
                        {
                            chinese: `年轻`,
                            pinyin: `nián'qīng`
                        },
                        {
                            chinese: `村子`,
                            pinyin: `cūn'zi`
                        },
                        {
                            chinese: `知道`,
                            pinyin: `zhī'dào`
                        },
                        {
                            chinese: `广场`,
                            pinyin: `guǎng'chǎng`
                        },
                        {
                            chinese: `民兵`,
                            pinyin: `mín'bīng`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 7`,
                        zh_cn: `词语7`,
                        zh_tw: `詞語7`
                    },
                    words: [
                        {
                            chinese: `于是`,
                            pinyin: `yú'shì`
                        },
                        {
                            chinese: `无论`,
                            pinyin: `wú'lùn`
                        },
                        {
                            chinese: `船只`,
                            pinyin: `chuán'zhī`
                        },
                        {
                            chinese: `连同`,
                            pinyin: `lián'tóng`
                        },
                        {
                            chinese: `岸边`,
                            pinyin: `àn'biān`
                        },
                        {
                            chinese: `同时`,
                            pinyin: `tóng'shí`
                        },
                        {
                            chinese: `房屋`,
                            pinyin: `fáng'wū`
                        },
                        {
                            chinese: `一切`,
                            pinyin: `yí'qiè`
                        },
                        {
                            chinese: `不久`,
                            pinyin: `bù'jiǔ`
                        },
                        {
                            chinese: `出现`,
                            pinyin: `chū'xiàn`
                        },
                        {
                            chinese: `散步`,
                            pinyin: `sàn'bù`
                        },
                        {
                            chinese: `空地`,
                            pinyin: `kòng'dì`
                        },
                        {
                            chinese: `唱歌`,
                            pinyin: `chàng'gē`
                        },
                        {
                            chinese: `回家`,
                            pinyin: `huí'jiā`
                        },
                        {
                            chinese: `赶快`,
                            pinyin: `gǎn'kuài`
                        },
                        {
                            chinese: `旁边`,
                            pinyin: `páng'biān`
                        },
                        {
                            chinese: `火星`,
                            pinyin: `huǒ'xīng`
                        },
                        {
                            chinese: `连忙`,
                            pinyin: `lián'máng`
                        },
                        {
                            chinese: `浑身`,
                            pinyin: `hún'shēn`
                        },
                        {
                            chinese: `时候`,
                            pinyin: `shí'hou`
                        },
                        {
                            chinese: `谢谢`,
                            pinyin: `xiè'xiè`
                        },
                        {
                            chinese: `水汽`,
                            pinyin: `shuǐ'qì`
                        }
                    ]
                },
                {
                    names: {
                        en: `Words 8`,
                        zh_cn: `词语8`,
                        zh_tw: `詞語8`
                    },
                    words: [
                        {
                            chinese: `食物`,
                            pinyin: `shíwù`
                        },
                        {
                            chinese: `身边`,
                            pinyin: `shēnbiān`
                        },
                        {
                            chinese: `为什么`,
                            pinyin: `wèishénme`
                        },
                        {
                            chinese: `爪子`,
                            pinyin: `zhuǎzi`
                        },
                        {
                            chinese: `面前`,
                            pinyin: `miànqián`
                        },
                        {
                            chinese: `神气活现`,
                            pinyin: `shénqìhuóxiàn`
                        },
                        {
                            chinese: `野猪`,
                            pinyin: `yězhū`
                        },
                        {
                            chinese: `往常`,
                            pinyin: `wǎngcháng`
                        },
                        {
                            chinese: `身后`,
                            pinyin: `shēnhòu`
                        },
                        {
                            chinese: `信以为真`,
                            pinyin: `xìnyǐwéizhēn`
                        },
                        {
                            chinese: `纸船`,
                            pinyin: `zhǐchuán`
                        },
                        {
                            chinese: `松果`,
                            pinyin: `sōngguǒ`
                        },
                        {
                            chinese: `纸条`,
                            pinyin: `zhǐtiáo`
                        },
                        {
                            chinese: `可是`,
                            pinyin: `kěshì`
                        },
                        {
                            chinese: `但是`,
                            pinyin: `dànshì`
                        },
                        {
                            chinese: `屋顶`,
                            pinyin: `wūdǐng`
                        },
                        {
                            chinese: `和好`,
                            pinyin: `héhǎo`
                        },
                        {
                            chinese: `田野`,
                            pinyin: `tiányě`
                        },
                        {
                            chinese: `风车`,
                            pinyin: `fēngchē`
                        },
                        {
                            chinese: `飞快`,
                            pinyin: `fēikuài`
                        },
                        {
                            chinese: `秧苗`,
                            pinyin: `yāngmiáo`
                        },
                        {
                            chinese: `不住`,
                            pinyin: `búzhù`
                        },
                        {
                            chinese: `点头`,
                            pinyin: `diǎntóu`
                        },
                        {
                            chinese: `急忙`,
                            pinyin: `jímáng`
                        },
                        {
                            chinese: `伤心`,
                            pinyin: `shāngxīn`
                        },
                        {
                            chinese: `路边`,
                            pinyin: `lùbiān`
                        },
                        {
                            chinese: `生气`,
                            pinyin: `shēngqì`
                        }
                    ]
                }
            ]
        });
    };
}
