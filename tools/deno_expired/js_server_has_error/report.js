// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class ReportPage extends ActualPageBase {
    styleElement = createElement('style');
    reportElement = createElement('div');
    titleElement = getTitleElement();
    initTitleElement() {
        this.titleElement.i18n = {
            en_us: 'Report',
            zh_cn: '报表',
            zh_tw: '報表'
        };
    }
    initMainElement = () => {
        const reportPage = 'reportPage';
        getHeaderElement().remove();
        getFooterElement().remove();
        getMainElement().remove();
        const body = getBodyElement();
        body.setAttribute(REPORT_PROPERTY, '');
        const {
            styleElement,
            reportElement
        } = this;
        styleElement.id = `${reportPage}Style`;
        const headElement = getHeadElement();
        headElement.appendChild(styleElement);
        body.appendChild(reportElement);
        reportElement.id = `${reportPage}Core`;
    };
    updateReport(title, css, html) {
        const {
            styleElement,
            reportElement,
            titleElement
        } = this;
        styleElement.innerHTML = css;
        reportElement.innerHTML = html;
        titleElement.i18n = title;
        titleElement.innerHTML = title[getCurrentLang()];
    }
    getCss() {
        return this.styleElement.innerHTML;
    }
    getHtml() {
        return this.reportElement.innerHTML;
    }
    changeLang(lang) {
        getHtmlElement().setAttribute(LANG_PROPERTY, lang);
    }
    changePaperSize(paperSize) {
        getBodyElement().setAttribute(PAPER_SIZE_PROPERTY, paperSize);
    }
    print() {
        window.print();
    }
    init = () => {
        super.init();
    };
}
const reportPage = new ReportPage();
reportPage.init();
window.addEventListener('message', function (event) {
    const {
        data: {
            command,
            data: {
                title,
                css,
                html,
                lang,
                paperSize
            }
        }
    } = event;
    switch (command) {
        case 'build':
            reportPage.updateReport(title, css, html);
            break;
        case 'changeLang':
            reportPage.changeLang(lang);
            break;
        case 'changePaperSize':
            reportPage.changePaperSize(paperSize);
            break;
        case 'print':
            reportPage.print();
            break;
        default:
            break;
    }
});