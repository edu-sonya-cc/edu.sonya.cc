// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BrickPage extends ActualPageBase {
    pageSubjectElement = createElement('div');
    pageSummaryElement = createElement('div');
    mainContentElement = createElement('div');
    feedbackElement = createElement('div');
    initTitleElement = () => {
        const titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: 'Throwing a brick to attract jade',
            zh_cn: '抛砖引玉',
            zh_tw: '抛磚引玉'
        };
    };
    PAGE_NAME = 'brickPage';
    initMainElement = () => {
        this.appendMainElements();
        const {
            PAGE_NAME,
            mainContentElement,
            previewRegionElement,
            configRegionElement
        } = this;
        mainContentElement.appendChild(previewRegionElement);
        mainContentElement.appendChild(configRegionElement);
        previewRegionElement.id = `${PAGE_NAME}PreviewRegion`;
        configRegionElement.id = `${PAGE_NAME}ConfigRegion`;
        this.appendRegionSubjects(previewRegionElement, configRegionElement);
        this.appendPreviewRegionOtherElements();
        this.appendConfigRegionOtherElements();
        const {
            downloadAreaElement,
            shareAreaElement,
            sponsorElement,
            wechatShareElement
        } = this;
        mainContentElement.appendChild(downloadAreaElement);
        mainContentElement.appendChild(shareAreaElement);
        mainContentElement.appendChild(sponsorElement);
        shareAreaElement.appendChild(wechatShareElement);
        downloadAreaElement.id = `${PAGE_NAME}DownloadArea`;
        shareAreaElement.id = `${PAGE_NAME}ShareArea`;
        sponsorElement.id = `${PAGE_NAME}SponsorImage`;
        const sponsorUrl = `${SITE_IMAGE_PATH}0common/sponsor.jpg`;
        sponsorElement.src = sponsorUrl;
        sponsorElement.alt = sponsorUrl;
        this.loadScript(PAGE_NAME);
    };
    appendMainElements() {
        const {
            PAGE_NAME,
            pageSubjectElement,
            pageSummaryElement,
            mainContentElement,
            feedbackElement
        } = this;
        const mainElement = getMainElement();
        mainElement.id = `${PAGE_NAME}Main`;
        mainElement.appendChild(pageSubjectElement);
        mainElement.appendChild(pageSummaryElement);
        mainElement.appendChild(mainContentElement);
        mainElement.appendChild(feedbackElement);
        pageSubjectElement.id = `${PAGE_NAME}Subject`;
        pageSubjectElement.className = 'pageSubject';
        const brick = bricks.filter((item) => item.id === PAGE_ID)[0] || {
            title: {
                en_us: 'Unknown',
                zh_cn: '未知',
                zh_tw: '未知'
            },
            summary: {
                en_us: 'The id is wrong, please check it.',
                zh_cn: '编号错误，请检查。',
                zh_tw: '編號錯誤，請檢查。'
            }
        };
        const {
            title,
            summary
        } = brick;
        const subjectTextElement = createElement('div');
        subjectTextElement.id = `${PAGE_NAME}SubjectText`;
        subjectTextElement.innerHTML = getI18nInnerHTML(title);
        pageSubjectElement.appendChild(subjectTextElement);
        pageSummaryElement.id = `${PAGE_NAME}Summary`;
        pageSummaryElement.innerHTML = getI18nInnerHTML(summary);
        mainContentElement.id = `${PAGE_NAME}MainContent`;
        feedbackElement.id = `${PAGE_NAME}Feedback`;
    }
    appendRegionSubjects(previewRegionElement, configRegionElement) {
        const {
            PAGE_NAME
        } = this;
        const previewRegionSubjectElement = createElement('div');
        const configRegionSubjectElement = createElement('div');
        previewRegionSubjectElement.className = `${PAGE_NAME}MainContentSubject`;
        configRegionSubjectElement.className = `${PAGE_NAME}MainContentSubject`;
        previewRegionSubjectElement.innerHTML = getI18nInnerHTML({
            en_us: 'Preivew',
            zh_cn: '预览',
            zh_tw: '預覽'
        });
        configRegionSubjectElement.innerHTML = getI18nInnerHTML({
            en_us: 'Config',
            zh_cn: '设置',
            zh_tw: '設置'
        });
        previewRegionElement.appendChild(previewRegionSubjectElement);
        configRegionElement.appendChild(configRegionSubjectElement);
    }
    downloadAreaElement = createElement('div');
    shareAreaElement = createElement('div');
    sponsorElement = createElement('img');
    wechatShareElement = createElement('img');
    previewIframe = createElement('iframe');
    previewRegionElement = createElement('div');
    configRegionElement = createElement('div');
    configCoreWrapElement = createElement('div');
    configCoreToolbarElement = createElement('div');
    appendPreviewRegionOtherElements() {
        const {
            PAGE_NAME,
            previewIframe,
            previewRegionElement
        } = this;
        previewIframe.id = `${PAGE_NAME}Iframe`;
        previewIframe.src = `?go=report`;
        previewIframe.setAttribute('frameBorder', '0');
        previewRegionElement.appendChild(previewIframe);
        getChangeLangNotifyArrayOfCurrentPage().push((lang) => {
            previewIframe.contentWindow?.postMessage({
                command: 'changeLang',
                data: {
                    lang
                }
            }, '*');
        });
        const buildFirst = () => {
            this.reporterPageInited = true;
            const brickCore = window.brickCore;
            if (brickCore && this.brickCorePageInited) {
                brickCore.loadConfig();
            }
        };
        previewIframe.onload = previewIframe.onreadystatechange = function () {
            const {
                readyState
            } = this;
            console.log('iframe onreadystatechange', readyState);
            if (!readyState) {
                buildFirst();
                return;
            }
            switch (readyState) {
                case 'loaded':
                case 'complete':
                    buildFirst();
                    break;
                default:
                    break;
            }
        };
        const toolbarElement = createElement('div');
        toolbarElement.id = `${PAGE_NAME}Toolbar`;
        previewRegionElement.appendChild(toolbarElement);
        const imageUrlPrefix = `${SITE_IMAGE_PATH}3brick/`;
        const toolbarItemI18nArray = [{
                en_us: 'download',
                zh_cn: '下载',
                zh_tw: '下載'
            },
            {
                en_us: 'print',
                zh_cn: '打印',
                zh_tw: '列印'
            },
            {
                en_us: 'share',
                zh_cn: '分享',
                zh_tw: '分享'
            },
            {
                en_us: 'sponsor',
                zh_cn: '赞助',
                zh_tw: '贊助'
            }
        ];
        'download,print,share,sponsor'.split(',').forEach((name, index) => {
            const spanElement = createElement('span');
            spanElement.className = `${PAGE_NAME}ToolbarItem`;
            const imageSrc = `${imageUrlPrefix}${name}.png`;
            const imageElement = createElement('img');
            imageElement.className = `${PAGE_NAME}ToolbarItemImage`;
            imageElement.src = imageSrc;
            imageElement.alt = imageSrc;
            const textElement = createElement('span');
            textElement.className = `${PAGE_NAME}ToolbarItemText`;
            textElement.innerHTML = getI18nInnerHTML(toolbarItemI18nArray[index]);
            spanElement.appendChild(imageElement);
            spanElement.appendChild(textElement);
            toolbarElement.appendChild(spanElement);
            spanElement.onclick = (event) => {
                this.emit(name);
                return stopEventBubble(event);
            };
        });
    }
    appendConfigRegionOtherElements() {
        const {
            PAGE_NAME,
            configRegionElement,
            configCoreWrapElement,
            configCoreToolbarElement,
            appendConfigToolbar
        } = this;
        const configCoreElement = createElement('div');
        configCoreWrapElement.id = `${PAGE_NAME}ConfigCoreWrap`;
        configCoreElement.id = `${PAGE_NAME}ConfigCore`;
        configCoreToolbarElement.id = `${PAGE_NAME}ConfigCoreToolbar`;
        configRegionElement.setAttribute(ID_PROPERTY, PAGE_ID.toString());
        appendConfigToolbar('Build', 'build', {
            en_us: 'Build',
            zh_cn: '生成',
            zh_tw: '生成'
        });
        appendConfigToolbar('LoadDefaultConfig', 'loadDefaultConfig', {
            en_us: 'Use Default',
            zh_cn: '还原',
            zh_tw: '還原'
        });
        appendConfigToolbar('LoadConfigFromLocal', 'loadConfigFromLocal', {
            en_us: 'Load',
            zh_cn: '加载',
            zh_tw: '加載'
        });
        appendConfigToolbar('SaveConfigToLocal', 'saveConfigToLocal', {
            en_us: 'Save',
            zh_cn: '保存',
            zh_tw: '保存'
        });
        configRegionElement.appendChild(configCoreWrapElement);
        configCoreWrapElement.appendChild(configCoreElement);
        configCoreWrapElement.appendChild(configCoreToolbarElement);
    }
    appendConfigToolbar = (idPostfix, eventName, i18n) => {
        const {
            PAGE_NAME,
            configCoreToolbarElement
        } = this;
        const buildElement = createElement('span');
        buildElement.id = `${PAGE_NAME}${idPostfix}`;
        buildElement.className = 'moreButton primary';
        buildElement.innerHTML = getI18nInnerHTML(i18n);
        buildElement.onclick = (event) => {
            this.emit(eventName);
            return stopEventBubble(event);
        };
        configCoreToolbarElement.appendChild(buildElement);
    };
    fileReaderElement = createElement('input');
    emit(eventName) {
        const core = window.brickCore;
        switch (eventName) {
            case 'download':
                core.download();
                break;
            case 'print':
                this.previewIframe.contentWindow?.postMessage({
                    command: 'print',
                    data: {}
                }, '*');
                break;
            case 'share':
                const wechatShareImageSrc = `${SITE_IMAGE_PATH}${ACTUAL_PAGE_NAME}/${PAGE_ID}.png`;
                this.wechatShareElement.setAttribute('src', wechatShareImageSrc);
                this.wechatShareElement.setAttribute('alt', wechatShareImageSrc);
                showInlineFlex(this.shareAreaElement);
                break;
            case 'sponsor':
                showBlock(this.sponsorElement);
                break;
            case 'build':
                core.build();
                break;
            case 'loadConfig':
                core.loadConfig();
                break;
            case 'saveConfig':
                setCurrentPageLocalStorage(JSON.stringify(core.getData()));
                break;
            case 'loadDefaultConfig':
                core.loadDefaultConfig();
                break;
            case 'loadConfigFromLocal':
                this.fileReaderElement.click();
                break;
            case 'saveConfigToLocal':
                const blob = new Blob([
                    JSON.stringify(core.getData())
                ], {
                    type: 'application/json'
                });
                const configFilename = `edu.sonya.cc_brick_${PAGE_ID}_${convertDateToYYYYMMDD_hhmmss(new Date())}.config`;
                if ('msSaveOrOpenBlob' in navigator) {
                    window.navigator.msSaveOrOpenBlob(blob, configFilename);
                } else {
                    const url = window.URL.createObjectURL(blob);
                    const link = createElement('a');
                    link.href = url;
                    link.setAttribute('download', configFilename);
                    link.click();
                }
                break;
            default:
                break;
        }
    }
    brickCorePageInited = false;
    reporterPageInited = false;
    loadScript = (PAGE_NAME) => {
        const version = (bricks.filter(({
            id
        }) => id === PAGE_ID)[0] || {
            version: 'unknown'
        }).version;
        const scriptElement = createElement('script');
        scriptElement.id = `${PAGE_NAME}CoreScript`;
        scriptElement.setAttribute('charset', 'utf-8');
        scriptElement.setAttribute('src', `js/brick/${PAGE_ID}.js?${version}`);
        getHeadElement().appendChild(scriptElement);
        const initCore = () => {
            this.brickCorePageInited = true;
            const brickCore = window.brickCore;
            brickCore.init(this.configCoreWrapElement);
            if (this.reporterPageInited) {
                brickCore.loadConfig();
            }
        };
        scriptElement.onload = scriptElement.onreadystatechange = function () {
            const {
                readyState
            } = this;
            console.log('onreadystatechange', readyState);
            if (!readyState) {
                initCore();
                return;
            }
            switch (readyState) {
                case 'loaded':
                case 'complete':
                    initCore();
                    break;
                default:
                    break;
            }
        };
    };
    init = () => {
        const loadConfigFromLocalCallback = (newData) => {
            const core = window.brickCore;
            core.setData(newData);
        };
        const {
            fileReaderElement
        } = this;
        fileReaderElement.type = 'file';
        fileReaderElement.onchange = () => {
            if (!fileReaderElement.files) {
                return;
            }
            const selectedFile = fileReaderElement.files[0];
            const {
                name,
                size
            } = selectedFile;
            console.log('read file:', name, size);
            const reader = new FileReader();
            reader.readAsText(selectedFile);
            reader.onload = function () {
                const result = this.result;
                const object = JSON.parse(result);
                console.log(result, object);
                loadConfigFromLocalCallback(object);
            };
        };
        super.init();
    };
}
const brickPage = new BrickPage();
brickPage.init();