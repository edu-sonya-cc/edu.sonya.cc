// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const DOMAIN = 'edu.sonya.cc';
const FILENAME_POSTFIX = DOMAIN.concat('_');
const CURRENT_URL = window.location.href;
const HOME_URL = CURRENT_URL.startsWith('file:///') ? 'file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm' : 'http://edu.sonya.cc/';
(function() {
    const myWindow = window;
    if (!myWindow.top || CURRENT_URL.startsWith('file:///')) return;
    if (!myWindow.top.location.href.startsWith(HOME_URL)) myWindow.top.location.replace(HOME_URL);
})();
const HOME_URL_LENGTH = HOME_URL.length;
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
const getActualPageName = (value)=>ACTUAL_PAGE_NAME_ARRAY[value];
const getActualPageValueByName = (name)=>ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
const PARAMETER_FOR_ACTUAL_PAGE = 'go';
const ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf('?'.concat(PARAMETER_FOR_ACTUAL_PAGE, '=')) > -1 ? getActualPageValueByName(CURRENT_URL.split('?')[1].split('&')[0].split('=')[1]) : ActualPage.home;
const ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
const SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf('/') + 1);
const SITE_IMAGE_PATH = `${SITE_ROOT}images/`;
const SITE_JAVASCRIPT_PATH = `${SITE_ROOT}js/`;
const SITE_CSS_PATH = `${SITE_ROOT}css/`;
const getPageParameterByName = (name, defaultValue)=>{
    return CURRENT_URL.indexOf(`&${name}=`) === -1 ? defaultValue || '' : CURRENT_URL.split('&').slice(1).filter((keyValue)=>keyValue.startsWith(`${name}=`))[0].split('=')[1];
};
const PAGE_SUB_KIND = getPageParameterByName('kind', null);
const PAGE_IDNEX = parseInt(getPageParameterByName('page', '1'), 0) - 1;
const PAGE_ID = parseInt(getPageParameterByName('id', '1'), 0);
const MORE_BUTTON_HTML = '<en>more...</en><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>';
const BRICK_SUB_KINDS = [
    {
        name: '01_chinese',
        title: {
            en: 'Chinese',
            zh_cn: '语文',
            zh_tw: '語文'
        }
    },
    {
        name: '02_math',
        title: {
            en: 'Mathematics',
            zh_cn: '数学',
            zh_tw: '數學'
        }
    },
    {
        name: '03_english',
        title: {
            en: 'English',
            zh_cn: '英语',
            zh_tw: '英語'
        }
    },
    {
        name: '04_programming',
        title: {
            en: 'Programming',
            zh_cn: '编程',
            zh_tw: '程式設計'
        }
    }
];
const ACTIVATED_PROPERTY = 'edu-activated';
const SUB_KIND_NAME_PROPERTY = 'edu-sub-kind-name';
const LANG_PROPERTY = 'edu-lang';
const PAGE_PROPERTY = 'edu-page';
const DEVICE_PROPERTY = 'edu-device';
const REPORT_PROPERTY = 'edu-report';
const ID_PROPERTY = 'edu-id';
const PAPER_SIZE_PROPERTY = 'edu-paper-size';
const REPORT_KIND_PROPERTY = 'edu-report-kind';
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function hide(element) {
    if (element) element.style.display = 'none';
}
function showBlock(element) {
    if (element) element.style.display = 'block';
}
function showInlineBlock(element) {
    if (element) element.style.display = 'inline-block';
}
function showFlex(element) {
    if (element) element.style.display = 'flex';
}
function showInlineFlex(element) {
    if (element) element.style.display = 'inline-flex';
}
function getElementById(id) {
    return document.getElementById(id);
}
function getElementByIdAndTagName(id, _tagName) {
    return document.getElementById(id);
}
function querySelectorAll(selectors) {
    return document.querySelectorAll(selectors);
}
function querySelectorAllByI18n() {
    return document.querySelectorAll('[i18n]');
}
function querySelectorAllByI18nPlaceholder() {
    return document.querySelectorAll('[i18n-placeholder]');
}
function getElementsByTagName(qualifiedName) {
    return document.getElementsByTagName(qualifiedName);
}
function getHeadElement() {
    return document.getElementsByTagName('head')[0];
}
function getHtmlElement() {
    return document.getElementsByTagName('html')[0];
}
function getBodyElement() {
    return document.getElementsByTagName('body')[0];
}
function getTitleElement() {
    return document.getElementsByTagName('title')[0];
}
function getHeaderElement() {
    return document.getElementsByTagName('header')[0];
}
function getFooterElement() {
    return document.getElementsByTagName('footer')[0];
}
function getMainElement() {
    return document.getElementsByTagName('main')[0];
}
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function setAttributesOfA(aElement, link) {
    aElement.setAttribute('href', link);
    if (!link.startsWith('mailto:')) {
        aElement.setAttribute('target', '_blank');
    }
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
const MONTH_NAME_ARRAY = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
function getI18nInnerHTMLFromDate(date) {
    const en = `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const zh_cn = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const zh_tw = zh_cn;
    return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
}
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const LOCAL_STORAGE_KEY_OF_LANG = 'lang';
const LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes('?') ? CURRENT_URL.split('?')[1] : ACTUAL_PAGE_NAME;
const CHANGE_LANG_NOTIFY_ARRAY = [];
const getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || 'zh_cn';
const setCurrentLang = (lang)=>{
    getHtmlElement().setAttribute(LANG_PROPERTY, lang);
    localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
    updateUIByCurrentLang();
};
const updateUIByCurrentLang = ()=>{
    const lang = getCurrentLang();
    CHANGE_LANG_NOTIFY_ARRAY.forEach((func)=>func(lang));
};
const getCurrentPageLocalStorage = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || '';
const setCurrentPageLocalStorage = (newValue)=>localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
const getChangeLangNotifyArrayOfCurrentPage = ()=>CHANGE_LANG_NOTIFY_ARRAY;
const clearChangeLangNotifyArrayOfCurrentPage = ()=>{
    CHANGE_LANG_NOTIFY_ARRAY.length = 0;
};

// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const convertDateToYYYYMMDD_hhmmss = (date)=>{
    return `${date.getFullYear()}${'0'.concat((date.getMonth() + 1).toString()).substr(-2)}${'0'.concat(date.getDate().toString()).substr(-2)}`.concat(`_${'0'.concat(date.getHours().toString()).substr(-2)}${'0'.concat(date.getMinutes().toString()).substr(-2)}${'0'.concat(date.getSeconds().toString()).substr(-2)}`);
};
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
function repeatString(original, times) {
    const array = [];
    for(let i = 0; i <= times; ++i){
        array.push(original);
    }
    return array.join();
}
function getArrayRepeatSameValue(value, times) {
    const array = [];
    for(let i = 0; i < times; ++i){
        array.push(value);
    }
    return array;
}
const getI18nableWithSameContent = (value)=>{
    return {
        en: value,
        zh_cn: value,
        zh_tw: value
    };
};
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

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
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class PcGlobal {
    shareAreaElement = createElement('div');
    wechatShareElement = createElement('img');
    headerElement = getHeaderElement();
    logoElement = createElement('img');
    navElement = createElement('nav');
    footerElement = getFooterElement();
    mainElement = getMainElement();
    topMenuItems = [
        {
            id: 'topMenuHome',
            kind: 'a',
            link: `${HOME_URL}`,
            titles: {
                en: `Home`,
                zh_cn: `首页`,
                zh_tw: `首頁`
            }
        },
        {
            id: 'topMenuBricks',
            kind: 'a',
            link: `${HOME_URL}?go=bricks&kind=0&page=1`,
            titles: {
                en: `Tools`,
                zh_cn: `抛砖引玉`,
                zh_tw: `抛磚引玉`
            }
        },
        {
            id: 'topMenuTreasures',
            kind: 'a',
            link: `${HOME_URL}?go=treasures&page=1`,
            titles: {
                en: `Natural treasures`,
                zh_cn: `物华天宝`,
                zh_tw: `物華天寶`
            }
        },
        {
            id: 'topMenuStories',
            kind: 'a',
            link: `${HOME_URL}?go=stories&page=1`,
            titles: {
                en: `Growings`,
                zh_cn: `成长足迹`,
                zh_tw: `成長足迹`
            }
        },
        {
            id: 'topMenuAbout',
            kind: 'a',
            link: `${HOME_URL}?go=about`,
            titles: {
                en: `About Us`,
                zh_cn: `关于我们`,
                zh_tw: `關於我們`
            }
        },
        {
            id: 'topMenuLanguage',
            kind: 'select',
            link: `onChangeLanuage`,
            titles: {
                en: `Language`,
                zh_cn: `语言`,
                zh_tw: `語言`
            },
            options: '<option value=\'en\'>English</option><option value=\'zh_cn\'>简体</option><option value=\'zh_tw\'>繁體</option>',
            onchange: 'onChangeLanuage'
        },
        {
            id: 'topMenuGithub',
            kind: 'a',
            link: `https://github.com/edu-sonya-cc/edu.sonya.cc`,
            titles: {
                en: ``,
                zh_cn: ``,
                zh_tw: ``
            }
        },
        {
            id: 'topMenuSearch',
            kind: 'button',
            link: ``,
            titles: {
                en: ``,
                zh_cn: ``,
                zh_tw: ``
            },
            onclick: 'onShowSearchRegion'
        }
    ];
    footerHotAreas = [
        {
            id: 'footIcpLink',
            href: 'https://beian.miit.gov.cn/'
        },
        {
            id: 'footPoliceLink',
            href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302035110'
        },
        {
            id: 'footEmailLink',
            href: 'mailto:edu.sonya.cc@foxmail.com'
        },
        {
            id: 'footFavoriteLink',
            href: 'javascript:void(0);',
            onclick: 'onAddFavorite'
        },
        {
            id: 'footShareLink',
            href: 'javascript:void(0);',
            onclick: 'onShare'
        }
    ];
    onAddFavorite = (event)=>{
        let errorTip = '';
        let title = '';
        switch(getCurrentLang()){
            case 'en':
                title = 'Add to favorite';
                errorTip = 'Add to favorite failed, please press Ctrl + D or Command + D, Or manually set in the browser.';
                break;
            case 'zh_cn':
                title = '加入收藏';
                errorTip = '加入收藏失败，请使用组合键Ctrl + D，或Command + D，或手动在浏览器里进行设置。';
                break;
            case 'zh_tw':
                title = '加入收藏';
                errorTip = '加入收藏失敗，請使用複合鍵Ctrl + D，或Command + D，或手動在瀏覽器裏進行設定。';
                break;
            default:
                break;
        }
        let url = encodeURI(window.location.href);
        switch(ACTUAL_PAGE_NAME){
            case 'home':
                url = HOME_URL;
                break;
            case 'about':
            case 'report':
                break;
            case 'brick':
            case 'story':
                url = `${HOME_URL}?go=${ACTUAL_PAGE_NAME}&kind=${this.getPageSubKind()}`;
                break;
            case 'treasures':
            case 'stories':
                url = `${HOME_URL}?go=${ACTUAL_PAGE_NAME}&kind=${this.getPageSubKind()}`;
                break;
            case 'bricks':
                url = `${HOME_URL}?go=${ACTUAL_PAGE_NAME}&kind=${this.getPageSubKind()}&page=${this.getPageIndex()}`;
                break;
            default:
                break;
        }
        try {
            window.external.addFavorite(url, title);
        } catch (e1) {
            try {
                window.sidebar.addPanel(title, url, '');
            } catch (e) {
                alert(errorTip);
            }
        }
        return stopEventBubble(event);
    };
    onShare = (event)=>{
        console.log('onShare()');
        const url = encodeURI(window.location.href);
        const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '' : '/'.concat(url.split('&').slice(1).map((keyValue)=>keyValue.split('=')[1]).join('_'));
        const wechatShareImageSrc = `${SITE_IMAGE_PATH}${ACTUAL_PAGE_NAME}${wechatShareImageSrcPostfix}.png`;
        this.wechatShareElement.setAttribute('src', wechatShareImageSrc);
        this.wechatShareElement.setAttribute('alt', wechatShareImageSrc);
        showInlineFlex(this.shareAreaElement);
        return stopEventBubble(event);
    };
    searchRegionElement = createElement('div');
    onShowSearchRegion = (event)=>{
        console.log('onShowSearchRegion()');
        showBlock(this.searchRegionElement);
        return stopEventBubble(event);
    };
    onChangeLanuage = (event)=>{
        console.log('onChangeLanuage()');
        setCurrentLang(getElementById('topMenuLanguage').value);
        return stopEventBubble(event);
    };
    pageSubKind = PAGE_SUB_KIND;
    getPageSubKind = ()=>this.pageSubKind;
    setPageSubKind = (kind)=>{
        this.pageSubKind = kind;
    };
    pageIndex = PAGE_IDNEX;
    getPageIndex = ()=>this.pageIndex + 1;
    setPageIndex = (index)=>{
        this.pageIndex = index - 1;
    };
    init = ()=>{
        global.init();
        const { shareAreaElement , wechatShareElement , headerElement , logoElement , navElement , topMenuItems , footerElement , footerHotAreas , mainElement , searchRegionElement  } = this;
        mainElement.appendChild(searchRegionElement);
        searchRegionElement.setAttribute('id', 'searchRegion');
        footerElement.appendChild(shareAreaElement);
        shareAreaElement.appendChild(wechatShareElement);
        headerElement.appendChild(logoElement);
        headerElement.appendChild(navElement);
        shareAreaElement.setAttribute('id', 'shareArea');
        wechatShareElement.setAttribute('id', 'wechatShare');
        logoElement.setAttribute('id', 'logo');
        navElement.setAttribute('id', 'menu');
        SITE_ROOT;
        const logoUrl = SITE_IMAGE_PATH.concat('0common/logo.jpg');
        logoElement.setAttribute('src', logoUrl);
        logoElement.setAttribute('alt', logoUrl);
        logoElement.onclick = ()=>{
            window.location.href = HOME_URL;
        };
        const currentLang = getCurrentLang();
        shareAreaElement.onclick = ()=>false;
        footerElement.onclick = ()=>{
            hide(shareAreaElement);
        };
        footerHotAreas.forEach((hotArea)=>{
            const aElement = createElement('a');
            footerElement.appendChild(aElement);
            const { id , href , onclick  } = hotArea;
            aElement.setAttribute('id', id);
            if (!href.startsWith(HOME_URL.substring(0, 20))) {
                setAttributesOfA(aElement, href);
            } else {
                aElement.setAttribute('href', href);
            }
            if (onclick) {
                switch(onclick){
                    case 'onAddFavorite':
                        aElement.onclick = this.onAddFavorite;
                        aElement.setAttribute('rel', 'sidebar');
                        break;
                    case 'onShare':
                        aElement.onclick = this.onShare;
                        break;
                    default:
                        const onclickFunction = window[onclick];
                        aElement.onclick = onclickFunction;
                        break;
                }
            }
        });
        topMenuItems.forEach(({ id , kind , link , titles , options , onclick , onchange  })=>{
            const elementType = kind === 'menu' ? 'a' : kind;
            const menu = createElement(elementType);
            navElement.appendChild(menu);
            menu.setAttribute('id', id);
            const activated = id.substring(7).toLowerCase() === ACTUAL_PAGE_NAME;
            if (activated) {
                menu.setAttribute(ACTIVATED_PROPERTY, '');
            }
            if (kind === 'a') {
                if (!link.startsWith(HOME_URL.substring(0, 20))) {
                    setAttributesOfA(menu, link);
                } else {
                    menu.setAttribute('href', link);
                }
            }
            menu.i18n = titles;
            if (kind === 'menu') {
                const subMenuWrap = createElement('div');
                headerElement.appendChild(subMenuWrap);
                subMenuWrap.setAttribute('id', id.concat('SubMenuWrap'));
                subMenuWrap.setAttribute('class', 'topMenuItemSubMenuWrap');
                menu.onclick = (event)=>{
                    showBlock(subMenuWrap);
                    return stopEventBubble(event);
                };
            }
            if (kind === 'select') {
                menu.innerHTML = options;
                menu.value = currentLang;
                switch(onchange){
                    case 'onChangeLanuage':
                        menu.onchange = this.onChangeLanuage;
                        break;
                    default:
                        break;
                }
            } else {
                menu.innerHTML = getI18nInnerHTML(titles);
            }
            if (onclick) {
                switch(onclick){
                    case 'onShowSearchRegion':
                        menu.onclick = this.onShowSearchRegion;
                        break;
                    default:
                        const onclickFunction = window[onclick];
                        menu.onclick = onclickFunction;
                        break;
                }
            }
        });
        const topMenuLanguage = getElementById('topMenuLanguage');
        topMenuLanguage.value = getCurrentLang();
    };
    fillListAndPagination = (listElement, paginationElement, pageSize, list, pageName, fillItem)=>{
        listElement.id = `${pageName}List`;
        paginationElement.className = 'pagination';
        list.length;
        for(let i = 0; i < pageSize; ++i){
            const itemElement = createElement('div');
            itemElement.className = `${pageName}Item`;
            listElement.appendChild(itemElement);
            fillItem(itemElement, null, true);
        }
        const leftArrowElement = createElement('span');
        paginationElement.appendChild(leftArrowElement);
        leftArrowElement.innerHTML = '&lt;';
        leftArrowElement.id = `${pageName}PaginationLeftArrow`;
        leftArrowElement.className = 'paginationLeftArrow';
        const pageNumbersWrapElement = createElement('span');
        paginationElement.appendChild(pageNumbersWrapElement);
        pageNumbersWrapElement.id = `${pageName}PaginationPageNumbersWrap`;
        pageNumbersWrapElement.className = 'paginationPageNumbersWrap';
        const rightArrowElement = createElement('span');
        paginationElement.appendChild(rightArrowElement);
        rightArrowElement.innerHTML = '&gt;';
        rightArrowElement.id = `${pageName}PaginationRightArrow`;
        rightArrowElement.className = 'paginationRightArrow';
        this.changePaginationParams(list, pageSize, listElement, paginationElement, fillItem);
    };
    changePaginationParams = (list, pageSize, listElement, paginationElement, fillItem)=>{
        const leftArrowElement = paginationElement.children[0];
        const pageNumbersWrapElement = paginationElement.children[1];
        const rightArrowElement = paginationElement.children[2];
        const itemCount = list.length;
        const pageCount = Math.ceil(itemCount / pageSize);
        const pageMaxIndex = pageCount - 1;
        const countOfLastPage = itemCount - pageSize * pageMaxIndex;
        let currentPage = -1;
        const gotoPage = (pageIndex)=>{
            if (pageIndex > pageMaxIndex) pageIndex = pageMaxIndex;
            else if (pageIndex < 0) pageIndex = 0;
            if (currentPage === pageIndex) return;
            const countOfCurrentPage = pageIndex < pageMaxIndex ? pageSize : countOfLastPage;
            const indexOffset = pageSize * pageIndex;
            for(let i = 0; i < countOfCurrentPage; ++i){
                fillItem(listElement.children[i], list[indexOffset + i]);
            }
            for(let i1 = pageSize - 1; i1 >= countOfCurrentPage; --i1){
                fillItem(listElement.children[i1], null);
            }
            currentPage = pageIndex;
            this.pageIndex = pageIndex;
            const pageNumberElementMaxIndex = pageNumbersWrapElement.children.length - 1;
            if (pageCount >= 10) {
                let startIndex = 1, endIndex = pageNumberElementMaxIndex;
                if (pageIndex < 4) {
                    endIndex = pageNumberElementMaxIndex - 1;
                    for(let i2 = startIndex; i2 <= endIndex; ++i2){
                        const pageNumberElement = pageNumbersWrapElement.children[i2];
                        pageNumberElement.innerHTML = (i2 + 1).toString();
                        if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                            pageNumberElement.removeAttribute(PAGE_PROPERTY);
                        }
                    }
                    const rightEllipsisElement = createElement('span');
                    rightEllipsisElement.innerHTML = '...';
                    rightEllipsisElement.setAttribute(PAGE_PROPERTY, '6');
                } else if (pageIndex >= pageMaxIndex - 4) {
                    startIndex = 2;
                    for(let i3 = startIndex; i3 <= endIndex; ++i3){
                        const pageNumberElement1 = pageNumbersWrapElement.children[i3];
                        pageNumberElement1.innerHTML = (i3 + 1).toString();
                        if (pageNumberElement1.hasAttribute(PAGE_PROPERTY)) {
                            pageNumberElement1.removeAttribute(PAGE_PROPERTY);
                        }
                    }
                    const leftEllipsisElement = createElement('span');
                    leftEllipsisElement.innerHTML = '...';
                    leftEllipsisElement.setAttribute(PAGE_PROPERTY, (pageMaxIndex - 4).toString());
                } else {
                    startIndex = 2;
                    endIndex = pageNumberElementMaxIndex - 1;
                    for(let i4 = startIndex; i4 <= endIndex; ++i4){
                        const pageNumberElement2 = pageNumbersWrapElement.children[i4];
                        pageNumberElement2.innerHTML = (i4 + 1).toString();
                        if (pageNumberElement2.hasAttribute(PAGE_PROPERTY)) {
                            pageNumberElement2.removeAttribute(PAGE_PROPERTY);
                        }
                    }
                    const leftEllipsisElement1 = createElement('span');
                    leftEllipsisElement1.innerHTML = '...';
                    leftEllipsisElement1.setAttribute(PAGE_PROPERTY, (pageIndex - 2).toString());
                    const rightEllipsisElement1 = createElement('span');
                    rightEllipsisElement1.innerHTML = '...';
                    rightEllipsisElement1.setAttribute(PAGE_PROPERTY, (pageIndex + 2).toString());
                }
            }
            const pageIndexStr = (pageIndex + 1).toString();
            for(let i5 = 0; i5 <= pageNumberElementMaxIndex; ++i5){
                const pageNumberElement3 = pageNumbersWrapElement.children[i5];
                if (pageNumberElement3.innerHTML === pageIndexStr) {
                    pageNumberElement3.setAttribute(ACTIVATED_PROPERTY, '');
                } else if (pageNumberElement3.hasAttribute(ACTIVATED_PROPERTY)) {
                    pageNumberElement3.removeAttribute(ACTIVATED_PROPERTY);
                }
            }
            if (pageIndex === 0) {
                leftArrowElement.setAttribute('disabled', '');
            } else if (leftArrowElement.hasAttribute('disabled')) {
                leftArrowElement.removeAttribute('disabled');
            }
            if (pageIndex === pageMaxIndex) {
                rightArrowElement.setAttribute('disabled', '');
            } else if (rightArrowElement.hasAttribute('disabled')) {
                rightArrowElement.removeAttribute('disabled');
            }
            const url = window.location.href;
            const pageSeg = `&page=${pageIndexStr}`;
            const fullUrl = url.indexOf('&page=') === -1 ? url.concat(pageSeg) : url.replace(/&page=[0-9]+/g, pageSeg);
            console.log(JSON.stringify({
                url,
                fullUrl
            }));
            if (url !== fullUrl) {
                setTimeout(()=>{
                    window.location.href = fullUrl;
                }, 0);
            }
        };
        switch(pageCount){
            case 0:
            case 1:
                hide(paginationElement);
                break;
            default:
                showBlock(paginationElement);
                leftArrowElement.onclick = (event)=>{
                    gotoPage(currentPage - 1);
                    return stopEventBubble(event);
                };
                rightArrowElement.onclick = (event)=>{
                    gotoPage(currentPage + 1);
                    return stopEventBubble(event);
                };
                pageNumbersWrapElement.innerHTML = '';
                if (pageCount < 10) {
                    for(let i = 0; i < pageCount; ++i){
                        const pageNumberElement = createElement('span');
                        pageNumberElement.innerHTML = (i + 1).toString();
                        pageNumbersWrapElement.appendChild(pageNumberElement);
                    }
                } else {
                    for(let i1 = 0; i1 < 5; ++i1){
                        const pageNumberElement1 = createElement('span');
                        pageNumberElement1.innerHTML = (i1 + 1).toString();
                        pageNumbersWrapElement.appendChild(pageNumberElement1);
                    }
                    const ellipsisElement = createElement('span');
                    ellipsisElement.innerHTML = '...';
                    pageNumbersWrapElement.appendChild(ellipsisElement);
                    const lastPageNumberElement = createElement('span');
                    lastPageNumberElement.innerHTML = pageCount.toString();
                    pageNumbersWrapElement.appendChild(lastPageNumberElement);
                }
                const pageNumberElementCount = pageNumbersWrapElement.children.length;
                for(let i2 = 0; i2 < pageNumberElementCount; ++i2){
                    const pageNumberElement2 = pageNumbersWrapElement.children[i2];
                    pageNumberElement2.onclick = (event)=>{
                        const element = event.target;
                        const innerHTML = element.innerHTML;
                        if (innerHTML === '...') {
                            gotoPage(parseInt(element.getAttribute(PAGE_PROPERTY), 0) - 1);
                        } else {
                            gotoPage(parseInt(innerHTML, 0) - 1);
                        }
                        return stopEventBubble(event);
                    };
                }
                break;
        }
        gotoPage(this.pageIndex);
    };
}
const pcGlobal = new PcGlobal();
document.onclick = ()=>{
    querySelectorAll('.topMenuItemSubMenuWrap,#shareArea,#brickPageShareArea,#brickPageSponsorImage').forEach((element)=>hide(element));
};
class ActualPageBase {
    init() {
        this.initTitleElement();
        const titleElement = getTitleElement();
        getChangeLangNotifyArrayOfCurrentPage().push((lang)=>{
            titleElement.innerHTML = titleElement.i18n[lang];
        });
        this.initMainElement();
        global.bindChangeLangEventForI18nElements();
        setCurrentLang(getCurrentLang());
    }
}// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

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
            const div = document.createElement('div');
            div.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden';
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
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var svgSpace;
(function(svgSpace1) {
    let edu;
    (function(edu) {
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
                        const path = svgSpace.edu.sonya.cc.SvgHelper.createSvgPath();
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke', OUTER_LINE_COLOR);
                        path.setAttribute('d', `M 0, 0 `.concat(`h ${WIDTH_PX} `, `v ${HEIGHT_PX} `, `h -${WIDTH_PX} `, ' z'));
                        svg.appendChild(path);
                    }
                    static appendOuterLine(svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
                        svg.setAttribute('width', `${WIDTH}mm`);
                        svg.setAttribute('height', `${HEIGHT}mm`);
                        const { appendLine  } = svgSpace.edu.sonya.cc.SvgHelper;
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
        })(sonya = edu.sonya || (edu.sonya = {}));
    })(edu = svgSpace1.edu || (svgSpace1.edu = {}));
})(svgSpace || (svgSpace = {}));
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var edu;
(function(edu) {
    let sonya;
    (function(sonya) {
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
                        if (createParameter.id.length === 0) createParameter.id = `svg_index`;
                    });
                    return createParameters.map((createParameter)=>this.create(createParameter));
                }
                create({ id , diceKind , sideLength: SIDE_LENGTH , contents: CONTENTS , outerLineStyle: OUTER_LINE_STYLE , innerLineStyle: INNER_LINE_STYLE , textStyle: TEXT_STYLE , options: OPTIONS  }) {
                    if (id.length === 0) id = 'svg_0';
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
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu || (edu = {}));
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var boxSpace;
(function(boxSpace) {
    let edu;
    (function(edu) {
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
                            if (createParameter.id.length === 0) createParameter.id = `svg_index`;
                        });
                        return createParameters.map((createParameter)=>this.create(createParameter));
                    }
                    create({ id , boxKind , lengths: LENGTHS , contents: CONTENTS , outerLineStyle: OUTER_LINE_STYLE , innerLineStyle: INNER_LINE_STYLE , textStyle: TEXT_STYLE , rotate: ROTATE , move: MOVE , topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE , options: OPTIONS  }) {
                        if (id.length === 0) id = 'svg_0';
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
        })(sonya = edu.sonya || (edu.sonya = {}));
    })(edu = boxSpace.edu || (boxSpace.edu = {}));
})(boxSpace || (boxSpace = {}));
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BrickBase {
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
        if (!this.buildAfterChangeParameter) return;
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
        if (list.length === 0) return '';
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
        if (list.length === 0) return;
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
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

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
        const { list  } = newData;
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
        if (min) input.min = min.toString();
        if (max) input.max = max.toString();
        if (step) input.step = step.toString();
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
                if (trIndex === -1) return stopEventBubble(event);
                const newlist = [];
                this.data.list.forEach((item)=>newlist.push(item));
                switch(index){
                    case 0:
                        if (trIndex === 0) return stopEventBubble(event);
                        const removeItemWhenMoveUp = newlist.splice(trIndex, 1);
                        newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
                        break;
                    case 1:
                        if (trIndex === trCount - 1) return stopEventBubble(event);
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
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class PokerBase extends BrickBase {
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
    countDataAndComputedData = ()=>{
        let { data: { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pokerWidth , pokerHeight , pageMarginTop , pageMarginLeft , pokerWidth: CARD_WIDTH , pokerHeight: CARD_HEIGHT , fontSize , backFontSize , pokerKind  }  } = this;
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
            }
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
        const { pokerWidth , pokerHeight , fontSize , backFontSize , pokerKind  } = newData;
        const { pokerWidthElement , pokerHeightElement , fontSizeElement , backFontSizeElement , pokerKindElementArray  } = this;
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
}
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

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
            en: `Typebook Kind`,
            zh_cn: `字帖类型`,
            zh_tw: `字帖類型`
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
                if (pinyinBillTempLength < leftLength) continue;
                const leftPinyin = pinyinBillTemp.substring(0, leftLength);
                if (this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) continue;
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
            if (!find) return false;
            pinyinBillTempLength = pinyinBillTemp.length;
        }
        return true;
    };
    splitPinyin = (pinyinBill, pinyinArray, charCount)=>{
        pinyinBill = pinyinBill.toLowerCase();
        const isEndOfR = pinyinBill.substr(-1) === 'r';
        let pinyinBillTemp = isEndOfR ? pinyinBill.substr(0, pinyinBill.length - 1) : pinyinBill;
        pinyinBillTemp = pinyinBillTemp.replace(/[āáǎà]/gi, 'ɑ').replace(/[ōóǒò]/gi, 'o').replace(/[ēéěè]/gi, 'e').replace(/[īíǐì]/gi, 'i').replace(/[ūúǔù]/gi, 'u').replace(/[ǖǘǚǜ]/gi, 'ü');
        const array = [];
        let pinyinBillTempLength = pinyinBillTemp.length;
        while(pinyinBillTempLength){
            let find = false;
            for(let leftLength = 6; leftLength > 0; --leftLength){
                if (pinyinBillTempLength < leftLength) continue;
                const leftPinyin = pinyinBillTemp.substring(0, leftLength);
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
            if (!find) break;
            pinyinBillTempLength = pinyinBillTemp.length;
        }
        let offset = 0;
        array.forEach((pinyin)=>{
            const length = pinyin.length;
            pinyinArray.push(pinyinBill.substr(offset, length));
            offset += length;
        });
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
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight , kind , fontSize , color  } = data;
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

		page{position:relative;}
		row.subject{justify-content:flex-start;align-items:flex-start;height:1em;width:${MAX_X}mm;
			position:absolute;top:${MAX_Y - 10}mm;display:inline-flex;}
		.subjectLeft,.subjectCenter,.subjectRight{display:inline-flex;}
		.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}
		.subjectCenter{width:60%;justify-content:center;align-items:flex-end;flex-direction:row;}
		.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}

		.subject{font-size:1em;}
		`;
        const BACKGOUND_SVG_SRC = `http://edu.sonya.cc/images/3brick/1/background/${color}.svg`;
        const PAGE_WIDTH = MAX_X, PAGE_HEIGHT = MAX_Y;
        const HORIZONTAL_SPACE = 1;
        const ROWS_COUNT = Math.floor((PAGE_HEIGHT + 2) / (RECTANGLE_HEIGHT + 2));
        const LANG = getCurrentLang();
        const i18nAnswerFlag = {
            en: 'Answer',
            zh_cn: '答案',
            zh_tw: '答案'
        };
        const i18nSubject = data.kind === 'pinyinToChinese' ? {
            en: 'Writing',
            zh_cn: '写字',
            zh_tw: '寫字'
        } : {
            en: 'Phonetic Notation',
            zh_cn: '注音',
            zh_tw: '注音'
        };
        const { inputMethod , selectedCheckboxIndexArray  } = data;
        const i18nSubtitle = inputMethod === 'select' && selectedCheckboxIndexArray.length === 1 ? this.usableCopybookCheckboxElementArray.filter((checkbox)=>checkbox.checked)[0].names : {
            en: '',
            zh_cn: '',
            zh_tw: ''
        };
        const HTML_SUBJECT = `<span class="subject">${i18nSubject[LANG]}&nbsp;</span>&nbsp;`;
        const HTML_SUBTITLE = `<span class="subtitle">${i18nSubtitle[LANG]}</span>`;
        const pageSubjectRowLeftHtml = '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
        const pageSubjectRowCenterHtml = `<cell class="subjectCenter">${HTML_SUBJECT}${HTML_SUBTITLE}</cell>`;
        const questionPageSubjectRowRightHtml = `<cell class="subjectRight">~reporterPageIndex~/~reporterPageCount~</cell>`;
        const answerPageSubjectRowRightHtml = `<cell class="subjectRight">${i18nAnswerFlag[LANG]}~reporterPageIndex~/~reporterPageCount~</cell>`;
        const pageSubjectRowHtmlStart = `<row class="subject">${pageSubjectRowLeftHtml}${pageSubjectRowCenterHtml}`;
        const questionPageSubjectRowHtml = `${pageSubjectRowHtmlStart}${questionPageSubjectRowRightHtml}</row>`;
        const answerPageSubjectRowHtml = `${pageSubjectRowHtmlStart}${answerPageSubjectRowRightHtml}</row>`;
        const questionPageEndHtml = `${questionPageSubjectRowHtml}</page>`;
        const answerPageEndHtml = `${answerPageSubjectRowHtml}</page>`;
        let questionHtml = '';
        let answerHtml = '';
        let pageIndex = 0;
        let pageIndexStr = '';
        const problemsStartHtml = `<page class="copybookProblemsPage">`;
        const answersStartHtml = `<page class="copybookAnswersPage">`;
        const wordWrapStartHtml = '<div class="wordWrap">';
        const wordWrapEndHtml = '</div>';
        const randomizedCopybooks = this.getRandomizedCopybooks();
        if (randomizedCopybooks.length) {
            let rowIndex = 0;
            let currentRowWidth = 0;
            questionHtml += problemsStartHtml;
            answerHtml += answersStartHtml;
            randomizedCopybooks.forEach(({ chinese , pinyin  })=>{
                pinyin = pinyin.replace(/\//gi, '\'').replace(/a/g, 'ɑ').replace(/g/g, 'ɡ');
                const charArray = chinese.split('');
                const pinyinArray = pinyin.split('\'');
                const charCount = charArray.length;
                if (charCount !== pinyinArray.length) this.fixPinyinArray(pinyin, pinyinArray, charCount);
                if (charCount !== pinyinArray.length) {
                    console.log(chinese, pinyin, pinyinArray, charCount);
                    return;
                }
                const CURRENT_CELL_WIDTH = RECTANGLE_WIDTH * charCount;
                if (currentRowWidth + CURRENT_CELL_WIDTH > PAGE_WIDTH) {
                    if (rowIndex < ROWS_COUNT - 1) {
                        rowIndex += 1;
                    } else {
                        pageIndexStr = (++pageIndex).toString();
                        questionHtml += questionPageEndHtml.replace('~reporterPageIndex~', pageIndexStr).concat(problemsStartHtml);
                        answerHtml += answerPageEndHtml.replace('~reporterPageIndex~', pageIndexStr).concat(answersStartHtml);
                        rowIndex = 0;
                    }
                    currentRowWidth = 0;
                }
                questionHtml += wordWrapStartHtml;
                answerHtml += wordWrapStartHtml;
                charArray.forEach((__char, index)=>{
                    const charStartHtml = `<span class="charWrap">`;
                    const charEndHtml = `</span>`;
                    const backgroundHtml = `<img class="backgound-image" src="${BACKGOUND_SVG_SRC}" alt="${BACKGOUND_SVG_SRC}" />`;
                    const pinyin = pinyinArray[index];
                    const pinyinHtml = `<pinyin ${pinyin.length > 4 ? ' chars="'.concat(pinyin.length.toString(), '"') : ''}>${pinyin.split('').map((__char, index)=>'<pinyin-char'.concat('āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ'.indexOf(__char) > -1 ? ' class="withTone"' : pinyin.length <= 4 && index > 0 && __char === 'ɡ' ? ' class="lastG"' : '', '>', __char, '</pinyin-char>')).join('')}</pinyin>`;
                    const chineseHtml = `<chinese>${__char}</chinese>`;
                    questionHtml += charStartHtml.concat(backgroundHtml, kind === 'pinyinToChinese' ? pinyinHtml : chineseHtml, charEndHtml);
                    answerHtml += charStartHtml.concat(backgroundHtml, pinyinHtml, chineseHtml, charEndHtml);
                });
                questionHtml += wordWrapEndHtml;
                answerHtml += wordWrapEndHtml;
                currentRowWidth += CURRENT_CELL_WIDTH + HORIZONTAL_SPACE;
            });
            pageIndexStr = (++pageIndex).toString();
            questionHtml += questionPageEndHtml.replace('~reporterPageIndex~', pageIndexStr);
            answerHtml += answerPageEndHtml.replace('~reporterPageIndex~', pageIndexStr);
        }
        const questionPageCount = (questionHtml.split('</page>').length - 1).toString();
        const answerPageCount = (answerHtml.split('</page>').length - 1).toString();
        const html = questionHtml.replace(/~reporterPageCount~/g, questionPageCount).concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
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
        if (copybooks.length === 0) return [];
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
        const { data  } = this;
        data.copybooks.length = 0;
        copybooks.forEach((copybook)=>data.copybooks.push(copybook));
        data.selectedCheckboxIndexArray.length = 0;
        selectedCheckboxIndexArray.forEach((selectedCheckboxIndex)=>data.selectedCheckboxIndexArray.push(selectedCheckboxIndex));
        data.kind = kind;
        data.inputMethod = inputMethod;
        data.fontSize = fontSize;
        data.color = color;
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
        const { data  } = this;
        this.appendCopybookOfGrade1Term1();
        this.appendCopybookOfGrade1Term2();
        this.appendCopybookOfGrade2Term1();
        let checkboxIndex = -1;
        const booksWrap = createElement('div');
        booksWrap.id = `${idOrClassPrefix}UsableCopybooksWrap`;
        configCoreElement.appendChild(booksWrap);
        const detailsPeopleEducationEdition = createElement('details');
        booksWrap.appendChild(detailsPeopleEducationEdition);
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
                checkbox.names = names;
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
                    data.selectedCheckboxIndexArray.length = 0;
                    selectedCheckboxIndexArray.forEach((index)=>data.selectedCheckboxIndexArray.push(index));
                    this.updateCopybooks(copybooks);
                };
                checkbox.onchange = checkboxChanged;
                span.onclick = (event)=>{
                    checkbox.checked = !checkbox.checked;
                    checkboxChanged(event);
                    return stopEventBubble(event);
                };
            });
        });
        this.onRadioOptionChanged('inputMethod', data.inputMethod);
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
            const index = parseInt(checkbox.getAttribute('edu-index') || '0', 0);
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
        const { data  } = this;
        data.copybooks.length = 0;
        copybooks.forEach((copybook)=>{
            data.copybooks.push(copybook);
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
                        zh_tw: `第一单元`
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
                            pinyin: `shàng'xià`
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
                        zh_tw: `第二单元`
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
                            pinyin: `cí'yǔ`
                        },
                        {
                            chinese: `句子`,
                            pinyin: `jù'zǐ`
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
                            pinyin: `shù'xué`
                        },
                        {
                            chinese: `音乐`,
                            pinyin: `yīn'yuè`
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
                            pinyin: `lù'dēng`
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
                            pinyin: `shù'yè`
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
                            pinyin: `liǎng'tóu`
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
                            pinyin: `kàn'jiàn`
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
                            pinyin: `jiāng'nán`
                        },
                        {
                            chinese: `可`,
                            pinyin: `kě`
                        },
                        {
                            chinese: `采莲`,
                            pinyin: `cǎi'lián`
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
                            pinyin: `qīng'wā`
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
                            pinyin: `nán'nǚ`
                        },
                        {
                            chinese: `开关`,
                            pinyin: `kāi'guān`
                        },
                        {
                            chinese: `正反`,
                            pinyin: `zhèng'fǎn`
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
                            pinyin: `duō'shǎo`
                        },
                        {
                            chinese: `黄牛`,
                            pinyin: `huáng'niú`
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
                            pinyin: `píng'guǒ`
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
                            pinyin: `shū'bāo`
                        },
                        {
                            chinese: `尺`,
                            pinyin: `chǐ`
                        },
                        {
                            chinese: `作业本`,
                            pinyin: `zuò'yè'běn`
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
                            pinyin: `sheng'guó'qí`
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
                            pinyin: `qǐ'lì`
                        },
                        {
                            chinese: `么`,
                            pinyin: `me`
                        },
                        {
                            chinese: `美丽`,
                            pinyin: `měi'lì`
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
                            pinyin: `jīn'nián`
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
                            pinyin: `qián'hòu`
                        },
                        {
                            chinese: `黑狗`,
                            pinyin: `hēi'gǒu`
                        },
                        {
                            chinese: `左右`,
                            pinyin: `zuǒ'yòu`
                        },
                        {
                            chinese: `它`,
                            pinyin: `tā`
                        },
                        {
                            chinese: `好朋友`,
                            pinyin: `hǎo'péng'yǒu`
                        },
                        {
                            chinese: `比`,
                            pinyin: `bǐ`
                        },
                        {
                            chinese: `尾巴`,
                            pinyin: `wěi'bā`
                        },
                        {
                            chinese: `谁`,
                            pinyin: `shuí`
                        },
                        {
                            chinese: `长短`,
                            pinyin: `cháng'duǎn`
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
                            pinyin: `xiě'shī`
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
                            pinyin: `lǎo'shī`
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
                            pinyin: `shí'hòu`
                        },
                        {
                            chinese: `觉得`,
                            pinyin: `jiào'de`
                        },
                        {
                            chinese: `自己`,
                            pinyin: `zì'jǐ`
                        },
                        {
                            chinese: `很`,
                            pinyin: `hěn`
                        },
                        {
                            chinese: `穿衣服`,
                            pinyin: `chuān'yī'fú`
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
                            pinyin: `jǐ'bù`
                        },
                        {
                            chinese: `为`,
                            pinyin: `wéi`
                        },
                        {
                            chinese: `参加`,
                            pinyin: `cān'jiā`
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
                            pinyin: `wū'yā`
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
                            pinyin: `fā'yá`
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
                            pinyin: `gong'chǎng`
                        },
                        {
                            chinese: `医院`,
                            pinyin: `yī'yuàn`
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
                            pinyin: `piāo'yóu`
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
                            pinyin: `xìng'shì`
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
                            pinyin: `yǎn'jīng`
                        },
                        {
                            chinese: `保护`,
                            pinyin: `bǎo'hù`
                        },
                        {
                            chinese: `害`,
                            pinyin: `hài`
                        },
                        {
                            chinese: `事情`,
                            pinyin: `shì'qing`
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
                            pinyin: `xiāng'yù`
                        },
                        {
                            chinese: `喜欢`,
                            pinyin: `xǐ'huan`
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
                            pinyin: `chún'jìng`
                        },
                        {
                            chinese: `阴`,
                            pinyin: `yīn`
                        },
                        {
                            chinese: `雷电`,
                            pinyin: `léi'diàn`
                        },
                        {
                            chinese: `阵`,
                            pinyin: `zhèn`
                        },
                        {
                            chinese: `冰冻`,
                            pinyin: `bīng'dòng`
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
                            pinyin: `máo'zhǔ'xí`
                        },
                        {
                            chinese: `乡亲`,
                            pinyin: `xiāng'qīn`
                        },
                        {
                            chinese: `战士`,
                            pinyin: `zhàn'shì`
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
                            pinyin: `gào'sù`
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
                            pinyin: `fēi'cháng`
                        },
                        {
                            chinese: `壮观`,
                            pinyin: `zhuàng'guān`
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
                            pinyin: `gè'zhǒng`
                        },
                        {
                            chinese: `样`,
                            pinyin: `yàng`
                        },
                        {
                            chinese: `伙伴`,
                            pinyin: `huǒ'bàn`
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
                            pinyin: `tài'yáng`
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
                            pinyin: `xiāng'tián`
                        },
                        {
                            chinese: `温暖`,
                            pinyin: `wēn'nuǎn`
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
                            pinyin: `gū'dān`
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
                            pinyin: `lín'jū`
                        },
                        {
                            chinese: `招呼`,
                            pinyin: `zhāo'hu`
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
                            pinyin: `tiào'shéng`
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
                            pinyin: `dǎn'gǎn`
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
                            pinyin: `tuǐ'jiǎo`
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
                            pinyin: `qīng'tíng`
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
                            pinyin: `mǎ'yǐ`
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
                            pinyin: `zhī'zhū'wǎng`
                        },
                        {
                            chinese: `圆`,
                            pinyin: `yuán`
                        },
                        {
                            chinese: `严寒`,
                            pinyin: `yán'hán`
                        },
                        {
                            chinese: `酷暑`,
                            pinyin: `kù'shǔ`
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
                            pinyin: `zhāo'xiá`
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
                            pinyin: `cāo'chǎng`
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
                            pinyin: `rè'nao`
                        },
                        {
                            chinese: `锻炼`,
                            pinyin: `duàn'liàn`
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
                            pinyin: `yù'qì`
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
                            pinyin: `biān'pào`
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
                            pinyin: `zōng'jì`
                        },
                        {
                            chinese: `浮萍`,
                            pinyin: `fú'píng`
                        },
                        {
                            chinese: `泉流`,
                            pinyin: `quán'liú`
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
                            pinyin: `tíng'jī`
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
                            pinyin: `chì'bǎng`
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
                            pinyin: `cháo'shī`
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
                            pinyin: `xiāo'xi`
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
                            pinyin: `jiǎn'chá'suǒ`
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
                            pinyin: `jué'dìng`
                        },
                        {
                            chinese: `已经`,
                            pinyin: `yǐ'jīng`
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
                            pinyin: `zhù'yì`
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
                            pinyin: `guǐ'liǎn`
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
                            pinyin: `gū'dōng`
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
                            pinyin: `táo'mìng`
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
                            pinyin: `fēng'xuě`
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
                            pinyin: `shén'me`
                        },
                        {
                            chinese: `双`,
                            pinyin: `shuāng`
                        },
                        {
                            chinese: `国王`,
                            pinyin: `guó'wáng`
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
                            pinyin: `qīng'qì`
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
                            pinyin: `zuǒ'yòu`
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
                            pinyin: `běi'jīng`
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
                            pinyin: `gè'zhǒng`
                        },
                        {
                            chinese: `样`,
                            pinyin: `yàng`
                        },
                        {
                            chinese: `伙伴`,
                            pinyin: `huǒ'bàn`
                        },
                        {
                            chinese: `这`,
                            pinyin: `zhè`
                        },
                        {
                            chinese: `太阳`,
                            pinyin: `tài'yáng`
                        },
                        {
                            chinese: `校`,
                            pinyin: `xiào`
                        },
                        {
                            chinese: `金秋`,
                            pinyin: `jīn'qiū`
                        },
                        {
                            chinese: `因为`,
                            pinyin: `yīn'wéi`
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
                            pinyin: `zhāo'hu`
                        },
                        {
                            chinese: `快乐`,
                            pinyin: `kuài'lè`
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
                            pinyin: `gù'xiāng`
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
                            pinyin: `kàn'dào`
                        },
                        {
                            chinese: `高兴`,
                            pinyin: `gāo'xìng`
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
                            pinyin: `shēn'tǐ`
                        },
                        {
                            chinese: `之`,
                            pinyin: `zhī`
                        },
                        {
                            chinese: `相近`,
                            pinyin: `xiāng'jìn`
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
                            pinyin: `jī'tái`
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
                            pinyin: `yǐ'jīng`
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
                            chinese: `两个`,
                            pinyin: `liǎnggè`
                        },
                        {
                            chinese: `宽广`,
                            pinyin: `kuānguǎng`
                        },
                        {
                            chinese: `跳高`,
                            pinyin: `tiàogāo`
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
                            chinese: `变化`,
                            pinyin: `biànhuà`
                        },
                        {
                            chinese: `极坏`,
                            pinyin: `jíhuài`
                        },
                        {
                            chinese: `照片`,
                            pinyin: `zhàopiàn`
                        },
                        {
                            chinese: `带给`,
                            pinyin: `dàigěi`
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
                        },
                        {
                            chinese: `公园`,
                            pinyin: `gōngyuán`
                        },
                        {
                            chinese: `它们`,
                            pinyin: `tā'men`
                        },
                        {
                            chinese: `她的`,
                            pinyin: `tāde`
                        },
                        {
                            chinese: `更加`,
                            pinyin: `gèngjiā`
                        },
                        {
                            chinese: `四海为家`,
                            pinyin: `sì'hǎi'wéi'jiā`
                        },
                        {
                            chinese: `因为`,
                            pinyin: `yīnwéi`
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
                            chinese: `欢笑`,
                            pinyin: `huān'xiào`
                        },
                        {
                            chinese: `红领巾`,
                            pinyin: `hóng'lǐng'jīn`
                        },
                        {
                            chinese: `到处`,
                            pinyin: `dàochù`
                        },
                        {
                            chinese: `人群`,
                            pinyin: `rén'qún`
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
                            chinese: `壮丽`,
                            pinyin: `zhuànglì`
                        },
                        {
                            chinese: `梧桐`,
                            pinyin: `wútóng`
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
                            chinese: `唱歌`,
                            pinyin: `chàng'gē`
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
                        },
                        {
                            chinese: `吹风`,
                            pinyin: `chuīfēng`
                        },
                        {
                            chinese: `化肥`,
                            pinyin: `huàféi`
                        },
                        {
                            chinese: `农忙`,
                            pinyin: `nóngmáng`
                        },
                        {
                            chinese: `归来`,
                            pinyin: `guīlái`
                        },
                        {
                            chinese: `回归`,
                            pinyin: `huíguī`
                        },
                        {
                            chinese: `爱戴`,
                            pinyin: `àidài`
                        },
                        {
                            chinese: `戴红领巾`,
                            pinyin: `dàihónglǐngjīn`
                        },
                        {
                            chinese: `六十九`,
                            pinyin: `liùshíjiǔ`
                        },
                        {
                            chinese: `披星戴月`,
                            pinyin: `pīxīngdàiyuè`
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
                            chinese: `做事`,
                            pinyin: `zuòshì`
                        },
                        {
                            chinese: `岁月`,
                            pinyin: `suì'yuè`
                        },
                        {
                            chinese: `站立`,
                            pinyin: `zhànlì`
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
                            chinese: `事情`,
                            pinyin: `shì'qing`
                        },
                        {
                            chinese: `好事`,
                            pinyin: `hǎ'oshì`
                        },
                        {
                            chinese: `坏事`,
                            pinyin: `huài'shì`
                        },
                        {
                            chinese: `另外`,
                            pinyin: `lìng'wài`
                        },
                        {
                            chinese: `一并`,
                            pinyin: `yí'bìng`
                        },
                        {
                            chinese: `来不及`,
                            pinyin: `lái'bu'jí`
                        },
                        {
                            chinese: `捉拿`,
                            pinyin: `zhuō'ná`
                        },
                        {
                            chinese: `拿东西`,
                            pinyin: `nádōngxī`
                        },
                        {
                            chinese: `一幅画`,
                            pinyin: `yī'fú'huà`
                        },
                        {
                            chinese: `一封信`,
                            pinyin: `yī'fēng'xìn`
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
                            chinese: `圆珠笔`,
                            pinyin: `yuán'zhū'bǐ`
                        },
                        {
                            chinese: `头发`,
                            pinyin: `tóu'fà`
                        },
                        {
                            chinese: `沙发`,
                            pinyin: `shāfā`
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
                            chinese: `沉思`,
                            pinyin: `chén'sī`
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
                        },
                        {
                            chinese: `红着脸`,
                            pinyin: `hóngzheliǎn`
                        },
                        {
                            chinese: `关闭`,
                            pinyin: `guānbì`
                        },
                        {
                            chinese: `拿着`,
                            pinyin: `názhe`
                        },
                        {
                            chinese: `做手工`,
                            pinyin: `zuò'shǒu'gōng`
                        },
                        {
                            chinese: `一支笔`,
                            pinyin: `yī'zhī'bǐ`
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
                            chinese: `依照`,
                            pinyin: `yīzhào`
                        },
                        {
                            chinese: `尽头`,
                            pinyin: `jìntóu`
                        },
                        {
                            chinese: `黄河`,
                            pinyin: `huánghé`
                        },
                        {
                            chinese: `层次`,
                            pinyin: `céngcì`
                        },
                        {
                            chinese: `香炉`,
                            pinyin: `xiānglú`
                        },
                        {
                            chinese: `香烟`,
                            pinyin: `xiāngyān`
                        },
                        {
                            chinese: `挂住`,
                            pinyin: `guàzhù`
                        },
                        {
                            chinese: `名山大川`,
                            pinyin: `míngshāndàchuān`
                        },
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
                            chinese: `它们`,
                            pinyin: `tā'men`
                        },
                        {
                            chinese: `部位`,
                            pinyin: `bùwèi`
                        },
                        {
                            chinese: `方向`,
                            pinyin: `fāngxiàng`
                        },
                        {
                            chinese: `升旗`,
                            pinyin: `shēngqí`
                        },
                        {
                            chinese: `狗熊`,
                            pinyin: `gǒuxióng`
                        },
                        {
                            chinese: `一动不动`,
                            pinyin: `yī'dòng'bu'dòng`
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
                            chinese: `台湾`,
                            pinyin: `táiwān`
                        },
                        {
                            chinese: `金光闪闪`,
                            pinyin: `jīn'guāng'shǎn'shǎn`
                        },
                        {
                            chinese: `名胜古迹`,
                            pinyin: `míng'shèng'gǔ'jì`
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
                            chinese: `山坡`,
                            pinyin: `shānpō`
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
                        },
                        {
                            chinese: `起来`,
                            pinyin: `qǐ'lái`
                        },
                        {
                            chinese: `收成`,
                            pinyin: `shōuchéng`
                        },
                        {
                            chinese: `收入`,
                            pinyin: `shōurù`
                        },
                        {
                            chinese: `一起`,
                            pinyin: `yìqǐ`
                        },
                        {
                            chinese: `五光十色`,
                            pinyin: `wǔ'guāng'shí'sè`
                        },
                        {
                            chinese: `山城`,
                            pinyin: `shān'chéng`
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
                            chinese: `井口`,
                            pinyin: `jǐngkǒu`
                        },
                        {
                            chinese: `无边无际`,
                            pinyin: `wú'biān'wú'jì`
                        },
                        {
                            chinese: `喝水`,
                            pinyin: `hēshuǐ`
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
                            chinese: `却是`,
                            pinyin: `què'shì`
                        },
                        {
                            chinese: `一阵风`,
                            pinyin: `yí'zhèn'fēng`
                        },
                        {
                            chinese: `第一`,
                            pinyin: `dìyī`
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
                        },
                        {
                            chinese: `一棵树`,
                            pinyin: `yīkēshù`
                        },
                        {
                            chinese: `谢谢`,
                            pinyin: `xiè'xiè`
                        },
                        {
                            chinese: `想法`,
                            pinyin: `xiǎngfǎ`
                        },
                        {
                            chinese: `盯着`,
                            pinyin: `dīngzhe`
                        },
                        {
                            chinese: `治病`,
                            pinyin: `zhìbìng`
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
                            chinese: `过年`,
                            pinyin: `guònián`
                        },
                        {
                            chinese: `轻松`,
                            pinyin: `qīngsōng`
                        },
                        {
                            chinese: `披星戴月`,
                            pinyin: `pīxīngdàiyuè`
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
                            chinese: `龙船`,
                            pinyin: `lóng'chuán`
                        },
                        {
                            chinese: `花炮`,
                            pinyin: `huāpào`
                        },
                        {
                            chinese: `泼水节`,
                            pinyin: `pō'shuǐ'jié`
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
                            chinese: `多么`,
                            pinyin: `duō'me`
                        },
                        {
                            chinese: `柏树枝`,
                            pinyin: `bǎi'shù'zhī`
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
                            chinese: `穿戴`,
                            pinyin: `chuāndài`
                        },
                        {
                            chinese: `口令`,
                            pinyin: `kǒulìng`
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
                        },
                        {
                            chinese: `姓刘`,
                            pinyin: `xìngliú`
                        },
                        {
                            chinese: `造反`,
                            pinyin: `zàofǎn`
                        },
                        {
                            chinese: `关闭`,
                            pinyin: `guānbì`
                        },
                        {
                            chinese: `被子`,
                            pinyin: `bèizi`
                        },
                        {
                            chinese: `棉被`,
                            pinyin: `miánbèi`
                        },
                        {
                            chinese: `花地`,
                            pinyin: `huā'dì`
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
                            chinese: `安危`,
                            pinyin: `ānwēi`
                        },
                        {
                            chinese: `不敢`,
                            pinyin: `bùgǎn`
                        },
                        {
                            chinese: `惊吓`,
                            pinyin: `jīngxià`
                        },
                        {
                            chinese: `阴凉`,
                            pinyin: `yīnliáng`
                        },
                        {
                            chinese: `相似野外`,
                            pinyin: `xiāngsìyěwài`
                        },
                        {
                            chinese: `田野`,
                            pinyin: `tián'yě`
                        },
                        {
                            chinese: `苍天`,
                            pinyin: `cāngtiān`
                        },
                        {
                            chinese: `茫然`,
                            pinyin: `mángrán`
                        },
                        {
                            chinese: `白发苍苍`,
                            pinyin: `báifàcāngcāng`
                        },
                        {
                            chinese: `白茫茫`,
                            pinyin: `báimángmáng`
                        },
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
                        },
                        {
                            chinese: `兴旺`,
                            pinyin: `xīngwàng`
                        },
                        {
                            chinese: `谁的`,
                            pinyin: `shuíde`
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
                            pinyin: `shí'wù`
                        },
                        {
                            chinese: `身边`,
                            pinyin: `shēn'biān`
                        },
                        {
                            chinese: `爪子`,
                            pinyin: `zhuǎ'zi`
                        },
                        {
                            chinese: `面前`,
                            pinyin: `miàn'qián`
                        },
                        {
                            chinese: `野猪`,
                            pinyin: `yě'zhū`
                        },
                        {
                            chinese: `为什么`,
                            pinyin: `wèi'shén'me`
                        },
                        {
                            chinese: `往常身后`,
                            pinyin: `wǎngchángshēnhòu`
                        },
                        {
                            chinese: `爷爷`,
                            pinyin: `yéye`
                        },
                        {
                            chinese: `神气活现`,
                            pinyin: `shén'qì'huó'xiàn`
                        },
                        {
                            chinese: `信以为真`,
                            pinyin: `xìn'yǐ'wéi'zhēn`
                        },
                        {
                            chinese: `就是`,
                            pinyin: `jiùshì`
                        },
                        {
                            chinese: `纸船`,
                            pinyin: `zhǐ'chuán`
                        },
                        {
                            chinese: `松果`,
                            pinyin: `sōng'guǒ`
                        },
                        {
                            chinese: `纸条`,
                            pinyin: `zhǐ'tiáo`
                        },
                        {
                            chinese: `可是`,
                            pinyin: `kě'shì`
                        },
                        {
                            chinese: `但是`,
                            pinyin: `dàn'shì`
                        },
                        {
                            chinese: `屋顶`,
                            pinyin: `wū'dǐng`
                        },
                        {
                            chinese: `和好`,
                            pinyin: `hé'hǎo`
                        },
                        {
                            chinese: `折纸`,
                            pinyin: `zhézhǐ`
                        },
                        {
                            chinese: `纸张`,
                            pinyin: `zhǐzhāng`
                        },
                        {
                            chinese: `祝福`,
                            pinyin: `zhùfú`
                        },
                        {
                            chinese: `包扎`,
                            pinyin: `bāozā`
                        },
                        {
                            chinese: `抓住`,
                            pinyin: `zhuāzhù`
                        },
                        {
                            chinese: `很吵`,
                            pinyin: `hěnchǎo`
                        },
                        {
                            chinese: `哭声`,
                            pinyin: `kūshēng`
                        },
                        {
                            chinese: `田野`,
                            pinyin: `tián'yě`
                        },
                        {
                            chinese: `风车`,
                            pinyin: `fēng'chē`
                        },
                        {
                            chinese: `飞快`,
                            pinyin: `fēi'kuài`
                        },
                        {
                            chinese: `秧苗`,
                            pinyin: `yāng'miáo`
                        },
                        {
                            chinese: `不住`,
                            pinyin: `bú'zhù`
                        },
                        {
                            chinese: `点头`,
                            pinyin: `diǎn'tóu`
                        },
                        {
                            chinese: `急忙`,
                            pinyin: `jí'máng`
                        },
                        {
                            chinese: `伤心`,
                            pinyin: `shāng'xīn`
                        },
                        {
                            chinese: `路边`,
                            pinyin: `lù'biān`
                        },
                        {
                            chinese: `生气`,
                            pinyin: `shēng'qì`
                        },
                        {
                            chinese: `得到`,
                            pinyin: `dédào`
                        },
                        {
                            chinese: `汗水`,
                            pinyin: `hànshuǐ`
                        },
                        {
                            chinese: `场地`,
                            pinyin: `chǎngdì`
                        },
                        {
                            chinese: `跑得很快`,
                            pinyin: `pǎodéhěnkuài`
                        },
                        {
                            chinese: `往常`,
                            pinyin: `wǎng'cháng`
                        },
                        {
                            chinese: `身后`,
                            pinyin: `shēn'hòu`
                        }
                    ]
                }
            ]
        });
    };
}
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BoxBase extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageBox';
    constructor(){
        super({
            topWithoutHalfCircle: false
        }, {});
    }
    updateOtherDataLevel3 = (newData)=>{
        const { topWithoutHalfCircle  } = newData;
        const { data , topWithoutHalfCircleRadioArray  } = this;
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
            }
        ], 'topWithoutHalfCircle', this.topWithoutHalfCircleRadioArray, wrapElement);
    };
    topWithoutHalfCircleRadioArray = [];
    updateOtherDataOfBox = (newData)=>{};
    countDataAndComputedData = ()=>{
        this.countDataAndComputedDataInBrickWithTableBase();
        const { BoxGenerator  } = boxSpace.edu.sonya.cc;
        const boxGenerator = new BoxGenerator();
        const { data , computedData  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginLeft , list , topWithoutHalfCircle  } = data;
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
        list.forEach(({ id , boxKind , lengths , contents , outerLineStyle , innerLineStyle , textStyle , rotate , move , options  })=>{
            const { css: svgCss , svg  } = boxGenerator.create({
                id,
                boxKind,
                lengths,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                rotate,
                move,
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
            }
        ].forEach(({ lengths , contents , textStyle , captionI18n , captionI18nSameSide , otherSize  })=>{
            infosCuboid.push({
                id: '',
                boxKind: BoxKind.cuboid,
                lengths,
                contents,
                outerLineStyle,
                innerLineStyle,
                textStyle,
                rotate: false,
                move: false,
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
                rotate: false,
                move: false,
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
                rotate: false,
                move: false,
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
                rotate: false,
                move: false,
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
            ]
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
                rotate: false,
                move: false,
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
                    rotate: false,
                    move: false,
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
            ]
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
                rotate: false,
                move: false,
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
                    rotate: false,
                    move: false,
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
        const { id , boxKind , lengths , contents , outerLineStyle , innerLineStyle , textStyle , rotate , move , options  } = item;
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
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class DiceBase extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageDice';
    countDataAndComputedData = ()=>{
        this.countDataAndComputedDataInBrickWithTableBase();
        const { DiceGenerator  } = edu.sonya.cc;
        const diceGenerator = new DiceGenerator();
        const { data , computedData  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginLeft , list  } = data;
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
        list.forEach(({ id , diceKind , sideLength , contents , outerLineStyle , innerLineStyle , textStyle , options  })=>{
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
            textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
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
            textStyle: 'font-size:6mm;font-family:"Times New Roman", "Kaiti";font-weight:bold;',
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
        const { id , diceKind , sideLength , contents , outerLineStyle , innerLineStyle , textStyle , options  } = dice;
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
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const DATA_JS_VERSION = '20221223B';
(function() {
    pcGlobal.init();
    const head = getHeadElement();
    const dataScriptElement = createElement('script');
    dataScriptElement.setAttribute('id', 'dataScript');
    dataScriptElement.setAttribute('charset', 'utf-8');
    dataScriptElement.setAttribute('src', `js/data.js?${DATA_JS_VERSION}`);
    head.appendChild(dataScriptElement);
    function loadPageScript() {
        const pageScriptElement = createElement('script');
        pageScriptElement.setAttribute('id', 'pageScript');
        pageScriptElement.setAttribute('charset', 'utf-8');
        pageScriptElement.setAttribute('src', `js/${ACTUAL_PAGE_NAME}.js?${jsVersions[ACTUAL_PAGE_NAME]}`);
        head.appendChild(pageScriptElement);
    }
    dataScriptElement.onload = dataScriptElement.onreadystatechange = function() {
        const { readyState  } = this;
        console.log('onreadystatechange', readyState);
        if (!readyState) {
            loadPageScript();
            return;
        }
        switch(readyState){
            case 'loaded':
            case 'complete':
                loadPageScript();
                break;
            default:
                break;
        }
    };
})();
