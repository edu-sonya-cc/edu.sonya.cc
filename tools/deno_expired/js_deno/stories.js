// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class StoriesPage extends ActualPageBase {
    mainContentElement = createElement('div');
    topImageElement = createElement('img');
    pageSubjectElement = createElement('div');
    listElement = createElement('div');
    paginationElement = createElement('div');
    initTitleElement() {
        const titleElement = getTitleElement();
        titleElement.i18n = {
            en: 'Growing List',
            zh_cn: '成长足迹清单',
            zh_tw: '成長足迹清單'
        };
    }
    initMainElement = ()=>{
        const PAGE_NAME = 'storiesPage';
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
        topImageElement.src = `${SITE_IMAGE_PATH}5stories/topImage.jpg?${storiesPageMainImageVersion}`;
        pageSubjectElement.id = `${PAGE_NAME}Subject`;
        pageSubjectElement.className = 'pageSubject';
        pcGlobal.fillListAndPagination(listElement, paginationElement, PageSize.storiesPage, stories.map((item, index)=>{
            return {
                id: index + 1,
                ...item
            };
        }), PAGE_NAME, (itemElement, data, init)=>{
            if (init) {
                const titleElement = createElement('div');
                titleElement.className = `${PAGE_NAME}Title`;
                itemElement.appendChild(titleElement);
                const summaryAndDateElement = createElement('div');
                summaryAndDateElement.className = `${PAGE_NAME}SummaryAndDateWrap`;
                itemElement.appendChild(summaryAndDateElement);
                const summaryElement = createElement('span');
                summaryElement.className = `${PAGE_NAME}Summary`;
                summaryAndDateElement.appendChild(summaryElement);
                const storyDateElement = createElement('span');
                storyDateElement.className = `${PAGE_NAME}Date`;
                summaryAndDateElement.appendChild(storyDateElement);
                const hrElement = createElement('hr');
                itemElement.appendChild(hrElement);
                hrElement.className = `${PAGE_NAME}Hr`;
            } else if (data === null) {
                const titleElement1 = itemElement.children[0];
                titleElement1.innerHTML = '';
                const summaryAndDateElement1 = itemElement.children[1];
                const summaryElement1 = summaryAndDateElement1.children[0];
                const storyDateElement1 = summaryAndDateElement1.children[1];
                summaryElement1.innerHTML = '';
                storyDateElement1.innerHTML = '';
                const hrElement1 = itemElement.children[2];
                hide(hrElement1);
                itemElement.onclick = (event)=>{
                    return stopEventBubble(event);
                };
            } else {
                const { id , date , title , summary  } = data;
                const titleElement2 = itemElement.children[0];
                titleElement2.innerHTML = getI18nInnerHTML(title);
                const summaryAndDateElement2 = itemElement.children[1];
                const summaryElement2 = summaryAndDateElement2.children[0];
                const storyDateElement2 = summaryAndDateElement2.children[1];
                summaryElement2.innerHTML = getI18nInnerHTML(summary);
                storyDateElement2.innerHTML = getI18nInnerHTMLFromDate(date);
                const hrElement2 = itemElement.children[2];
                showBlock(hrElement2);
                itemElement.onclick = (event)=>{
                    window.location.href = `?go=story&id=${id}`;
                    return stopEventBubble(event);
                };
            }
        });
    };
    init = ()=>{
        super.init();
    };
}
const storiesPage = new StoriesPage();
storiesPage.init();
