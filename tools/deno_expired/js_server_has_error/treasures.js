// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class TreasuresPage extends ActualPageBase {
    mainContentElement = createElement('div');
    topImageElement = createElement('img');
    pageSubjectElement = createElement('div');
    listElement = createElement('div');
    paginationElement = createElement('div');
    initTitleElement() {
        const titleElement = getTitleElement();
        titleElement.i18n = {
            en: 'Natural Treasures List',
            zh_cn: '物华天宝清单',
            zh_tw: '物華天寶清單'
        };
    }
    initMainElement = ()=>{
        const PAGE_NAME = 'treasuresPage';
        const mainElement = getMainElement();
        mainElement.id = `${PAGE_NAME}Main`;
        const { mainContentElement , topImageElement , pageSubjectElement , listElement , paginationElement  } = this;
        mainElement.appendChild(topImageElement);
        mainElement.appendChild(mainContentElement);
        mainContentElement.id = `${PAGE_NAME}MainContent`;
        mainContentElement.appendChild(pageSubjectElement);
        mainContentElement.appendChild(listElement);
        mainContentElement.appendChild(paginationElement);
        topImageElement.id = `${PAGE_NAME}MainImage`;
        topImageElement.className = 'topImage';
        topImageElement.src = `${SITE_IMAGE_PATH}4treasures/topImage.jpg?${treasuresPageMainImageVersion}`;
        pageSubjectElement.id = `${PAGE_NAME}Subject`;
        pageSubjectElement.className = 'pageSubject';
        pcGlobal.fillListAndPagination(listElement, paginationElement, PageSize.treasuresPage, treasures, PAGE_NAME, (itemElement, data, init)=>{
            if (init) {
                const aElement = createElement('a');
                itemElement.appendChild(aElement);
                aElement.target = '_blank';
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
            } else if (data === null) {
                hide(itemElement);
            } else {
                showBlock(itemElement);
                const { image , link , title , summary  } = data;
                const aElement1 = itemElement.children[0];
                const imageElement1 = aElement1.children[0];
                const rightWrapElement1 = aElement1.children[1];
                const imageUrl = `${SITE_IMAGE_PATH}4treasures/${image}`;
                imageElement1.src = imageUrl;
                imageElement1.alt = imageUrl;
                const titleElement1 = rightWrapElement1.children[0];
                titleElement1.innerHTML = getI18nInnerHTML(title);
                const summaryElement1 = rightWrapElement1.children[2];
                summaryElement1.innerHTML = getI18nInnerHTML(summary);
                aElement1.href = link;
            }
        });
    };
    init = ()=>{
        super.init();
    };
}
const treasuresPage = new TreasuresPage();
treasuresPage.init();
