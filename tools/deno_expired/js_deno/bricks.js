// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BricksPage extends ActualPageBase {
    mainContentElement = createElement('div');
    topImageElement = createElement('img');
    subKindsRowElement = createElement('div');
    listElement = createElement('div');
    paginationElement = createElement('div');
    initTitleElement() {
        const titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: 'List of throwing a brick to attract jade',
            zh_cn: '抛砖引玉清单',
            zh_tw: '拋磚引玉清單'
        };
    }
    initItemElement = (itemElement, PAGE_NAME) => {
        const aElement = createElement('a');
        itemElement.appendChild(aElement);
        aElement.className = `${PAGE_NAME}ItemWrap`;
        const imageElement = createElement('img');
        const rightWrapElement = createElement('div');
        aElement.appendChild(imageElement);
        aElement.appendChild(rightWrapElement);
        imageElement.className = `${PAGE_NAME}ItemImage`;
        rightWrapElement.className = `${PAGE_NAME}ItemRightWrap`;
        const titleElement = createElement('div');
        titleElement.className = `${PAGE_NAME}ItemTitle`;
        rightWrapElement.appendChild(titleElement);
        const hrElement = createElement('hr');
        hrElement.className = `${PAGE_NAME}ItemHr`;
        rightWrapElement.appendChild(hrElement);
        const summaryElement = createElement('span');
        summaryElement.className = `${PAGE_NAME}ItemSummary`;
        rightWrapElement.appendChild(summaryElement);
        const moreElement = createElement('div');
        moreElement.className = 'moreButton primary';
        moreElement.innerHTML = MORE_BUTTON_HTML;
        rightWrapElement.appendChild(moreElement);
    };
    bindNullToItemElement = (itemElement) => {
        hide(itemElement);
    };
    bindDataToItemElement = (itemElement, data) => {
        showBlock(itemElement);
        const {
            id,
            image,
            title,
            summary
        } = data;
        const aElement = itemElement.children[0];
        const imageElement = aElement.children[0];
        const rightWrapElement = aElement.children[1];
        const imageUrl = `${SITE_IMAGE_PATH}2bricks/${image}`;
        imageElement.src = imageUrl;
        imageElement.alt = imageUrl;
        const titleElement = rightWrapElement.children[0];
        titleElement.innerHTML = getI18nInnerHTML(title);
        const summaryElement = rightWrapElement.children[2];
        summaryElement.innerHTML = getI18nInnerHTML(summary);
        aElement.href = `?go=brick&id=${id}`;
    };
    PAGE_NAME = 'bricksPage';
    fillItem = (itemElement, data, init) => {
        if (init) {
            this.initItemElement(itemElement, this.PAGE_NAME);
        } else if (data === null) {
            this.bindNullToItemElement(itemElement);
        } else {
            this.bindDataToItemElement(itemElement, data);
        }
    };
    changeSubKind = (subKind) => {
        console.log(`changeSubKind(${subKind})`, typeof subKind);
        const {
            subKindsRowElement
        } = this;
        const bricksSubKindPageSize = PageSize.bricksPage.subKind;
        const subKindsWrapElement = subKindsRowElement.children[1];
        for (let i = 0; i < bricksSubKindPageSize; ++i) {
            const subKindElement = subKindsWrapElement.children[i];
            if (subKindElement.getAttribute(SUB_KIND_NAME_PROPERTY) === subKind) {
                subKindElement.setAttribute(ACTIVATED_PROPERTY, '');
            } else if (subKindElement.hasAttribute(ACTIVATED_PROPERTY)) {
                subKindElement.removeAttribute(ACTIVATED_PROPERTY);
            }
        }
        const list = [];
        if (subKind.length && subKind !== '0') {
            const fitSubKind = BRICK_SUB_KINDS[parseInt(subKind, 0) - 1].name;
            bricks.filter(({
                subKind
            }) => subKind === fitSubKind).forEach((item) => list.push(item));
        } else {
            bricks.forEach((item) => list.push(item));
        }
        const itemCount = list.length;
        const pageSize = PageSize.bricksPage.list;
        const {
            listElement
        } = this;
        const subKindNamesWrapElement = subKindsRowElement.children[1];
        let currentPage = -1;
        const gotoSubKind = (subKindIndex) => {
            if (subKindIndex > itemCount) {
                subKindIndex = itemCount;
            } else if (subKindIndex < 0) {
                subKindIndex = 0;
            }
            if (currentPage === subKindIndex) {
                return;
            }
            currentPage = subKindIndex;
            const {
                paginationElement,
                fillItem
            } = this;
            pcGlobal.changePaginationParams(list, pageSize, listElement, paginationElement, fillItem);
            pcGlobal.setPageIndex(currentPage);
        };
        const kind = parseInt(PAGE_SUB_KIND, 0);
        const maxIndex = subKindNamesWrapElement.children.length - 1;
        for (let i1 = 0; i1 <= maxIndex; ++i1) {
            const pageNumberElement = subKindNamesWrapElement.children[i1];
            const pageIndexProperty = pageNumberElement.getAttribute(PAGE_PROPERTY);
            if (parseInt(pageIndexProperty, 0) === kind) {
                pageNumberElement.setAttribute(ACTIVATED_PROPERTY, '');
            } else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
                pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
            }
        }
        gotoSubKind(parseInt(subKind, 0));
    };
    fillSubKindWrap = (subKindsRowElement) => {
        const {
            changeSubKind
        } = this;
        const bricksSubKindCount = BRICK_SUB_KINDS.length;
        const bricksSubKindPageSize = PageSize.bricksPage.subKind;
        const leftArrowElement = createElement('span');
        subKindsRowElement.appendChild(leftArrowElement);
        leftArrowElement.innerHTML = '&lt;';
        leftArrowElement.setAttribute('id', 'bricksSubKindRowLeftArrow');
        const subKindsWrapElement = createElement('span');
        subKindsRowElement.appendChild(subKindsWrapElement);
        subKindsWrapElement.setAttribute('id', 'bricksSubKindsWrap');
        const rightArrowElement = createElement('span');
        subKindsRowElement.appendChild(rightArrowElement);
        rightArrowElement.innerHTML = '&gt;';
        rightArrowElement.setAttribute('id', 'bricksSubKindRowRightArrow');
        for (let i = 0; i < bricksSubKindPageSize; ++i) {
            const subKindElement = createElement('span');
            subKindElement.className = 'bricksSubKind';
            subKindsWrapElement.appendChild(subKindElement);
        }
        const bricksSubKindPageCount = Math.ceil(bricksSubKindCount / bricksSubKindPageSize);
        const maxSubKindPageIndex = bricksSubKindPageCount - 1;
        const bricksSubKindCountOfLastPage = bricksSubKindCount - bricksSubKindPageSize * maxSubKindPageIndex;
        let currentPage = -1;
        const gotoPage = (pageIndex) => {
            if (pageIndex > maxSubKindPageIndex) {
                pageIndex = maxSubKindPageIndex;
            } else if (pageIndex < 0) {
                pageIndex = 0;
            }
            if (currentPage === pageIndex) {
                return;
            }
            const bricksSubKindCountOfCurrentPage = pageIndex < maxSubKindPageIndex ? bricksSubKindPageSize : bricksSubKindCountOfLastPage;
            const indexOffset = bricksSubKindPageSize * pageIndex;
            for (let i = 0; i < bricksSubKindCountOfCurrentPage; ++i) {
                const subKindElement = subKindsWrapElement.children[i];
                const bricksSubKind = BRICK_SUB_KINDS[indexOffset + i];
                const {
                    name,
                    title
                } = bricksSubKind;
                subKindElement.innerHTML = getI18nInnerHTML(title);
                subKindElement.setAttribute(SUB_KIND_NAME_PROPERTY, name);
                const kindStr = (BRICK_SUB_KINDS.map(({
                    name
                }) => name).indexOf(name) + 1).toString();
                subKindElement.setAttribute(PAGE_PROPERTY, kindStr);
                subKindElement.onclick = (event) => {
                    if (kindStr === PAGE_SUB_KIND) {
                        return stopEventBubble(event);
                    }
                    window.location.href = window.location.href.split('&')[0].concat(`&kind=${kindStr}&page=1`);
                    return stopEventBubble(event);
                };
            }
            for (let i1 = bricksSubKindPageSize - bricksSubKindCountOfCurrentPage; i1 > 0; --i1) {
                const subKindElement1 = subKindsWrapElement.children[bricksSubKindPageSize - i1];
                subKindElement1.onclick = (event) => {
                    return stopEventBubble(event);
                };
            }
            currentPage = pageIndex;
            if (pageIndex === 0) {
                leftArrowElement.setAttribute('disabled', '');
            } else if (leftArrowElement.hasAttribute('disabled')) {
                leftArrowElement.removeAttribute('disabled');
            }
            if (pageIndex === maxSubKindPageIndex) {
                rightArrowElement.setAttribute('disabled', '');
            } else if (rightArrowElement.hasAttribute('disabled')) {
                rightArrowElement.removeAttribute('disabled');
            }
        };
        if (bricksSubKindPageCount < 2) {
            leftArrowElement.setAttribute('disabled', '');
            rightArrowElement.setAttribute('disabled', '');
        } else {
            leftArrowElement.onclick = (event) => {
                gotoPage(currentPage - 1);
                return stopEventBubble(event);
            };
            rightArrowElement.onclick = (event) => {
                gotoPage(currentPage + 1);
                return stopEventBubble(event);
            };
        }
        gotoPage(Math.floor(Math.max(0, parseInt(PAGE_SUB_KIND, 0) - 1) / 4));
        this.changeSubKind(PAGE_SUB_KIND);
    };
    initMainElement = () => {
        const {
            PAGE_NAME
        } = this;
        const mainElement = getMainElement();
        mainElement.id = `${PAGE_NAME}Main`;
        const {
            mainContentElement,
            topImageElement,
            subKindsRowElement,
            listElement,
            paginationElement
        } = this;
        mainElement.appendChild(topImageElement);
        mainElement.appendChild(subKindsRowElement);
        mainElement.appendChild(mainContentElement);
        mainContentElement.id = `${PAGE_NAME}MainContent`;
        subKindsRowElement.id = `${PAGE_NAME}SubKindsRow`;
        mainContentElement.appendChild(listElement);
        mainContentElement.appendChild(paginationElement);
        topImageElement.id = `${PAGE_NAME}MainImage`;
        topImageElement.className = 'topImage';
        topImageElement.src = `${SITE_IMAGE_PATH}2bricks/topImage.jpg?${bricksPageMainImageVersion}`;
        const pageSize = PageSize.bricksPage.list;
        pcGlobal.fillListAndPagination(listElement, paginationElement, pageSize, bricks.map((item, index) => {
            return {
                id: index + 1,
                ...item
            };
        }), PAGE_NAME, this.fillItem);
        this.fillSubKindWrap(subKindsRowElement);
    };
    init = () => {
        super.init();
    };
}
const bricksPage = new BricksPage();
bricksPage.init();