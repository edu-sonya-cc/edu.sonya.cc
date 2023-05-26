// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class StoryPage extends ActualPageBase {
    initTitleElement() {
        const titleElement = getTitleElement();
        titleElement.i18n = {
            en: 'Growing',
            zh_cn: '成长足迹',
            zh_tw: '成長足跡'
        };
    }
    initMainElement = ()=>{
        const mainElement = getMainElement();
        const contentElement = createElement('div');
        mainElement.appendChild(contentElement);
        contentElement.innerHTML = getI18nInnerHTML(stories.filter(({ id  })=>id === PAGE_ID)[0].html);
        contentElement.id = 'storyPageContent';
    };
    init = ()=>{
        super.init();
    };
}
const storyPage = new StoryPage();
storyPage.init();
