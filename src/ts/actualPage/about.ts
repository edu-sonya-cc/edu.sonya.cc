// import { SITE_IMAGE_PATH } from '../const';
// import { mainImageVersions } from '../version';
// import { createElement, getTitleElement, getMainElement } from '../dom';
// import { ActualPageBase } from './actualPageBase';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/version.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />

class AboutPage extends ActualPageBase {
  private mainContentElement = createElement("div") as HTMLDivElement;
  private topImageElement = createElement("img") as HTMLImageElement;
  private pageSubjectElement = createElement("div") as HTMLDivElement;

  public initTitleElement(): void {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en_us: "Sparks of Fire",
      zh_cn: "星星之火",
      zh_tw: "星星之火",
    };
  }

  public initMainElement = () => {
    const PAGE_NAME = "aboutPage";
    const mainElement = getMainElement();

    const {
      mainContentElement,
      topImageElement,
      pageSubjectElement,
    } = this;
    mainElement.appendChild(topImageElement);
    mainElement.appendChild(mainContentElement);

    topImageElement.id = `${PAGE_NAME}MainImage`;
    topImageElement.className = "topImage";
    topImageElement.src =
      `${SITE_IMAGE_PATH}7about/mainImage.jpg?${mainImageVersions.about}`;

    mainContentElement.id = `${PAGE_NAME}MainContent`;
    mainContentElement.appendChild(pageSubjectElement);

    pageSubjectElement.id = `${PAGE_NAME}Subject`;
    pageSubjectElement.className = "pageSubject";

    ['en_us', 'zh_cn', 'zh_tw'].forEach((lang: string) => {
      const span = createElement(lang) as HTMLSpanElement;
      pageSubjectElement.appendChild(span);

      const image = createElement('img') as HTMLImageElement;
      // image.setAttribute('class', `${PAGE_NAME}SubjectImage`);
      image.setAttribute('class', 'pageSubject');

      const src = `./images/0common/${lang}/7about.png`;
      image.src = src;
      image.alt = src;

      span.appendChild(image);
    });

    // const imageWrap = createElement('div') as HTMLDivElement;
    // mainElement.appendChild(imageWrap);

    // ['en_us', 'zh_cn', 'zh_tw'].forEach((lang) => {
    // 	const span = createElement(lang) as HTMLSpanElement;
    // 	imageWrap.appendChild(span);

    // 	const image = createElement('img') as HTMLImageElement;
    // 	image.id = 'aboutPageContentImage_'.concat(lang);
    // 	image.src = `${SITE_IMAGE_PATH}7about/${lang}.jpg?${aboutPageContentImageVersion}`;

    // 	span.appendChild(image);
    // });

    const contentWrap = createElement("div") as HTMLDivElement;
    contentWrap.id = "aboutPageContent";
    mainContentElement.appendChild(contentWrap);

    [
      {
        lang: "en_us",
        html: `<h3>Seed germination: pure kindness</h3>
	<p>Sonya: "When I grow up, I will be a biologist, astronomer and teacher at the same time... to protect the lovely animals and plants and lead the students to protect our beautiful home - the earth."</p>
	<p></p>
	<p>His father: "When I was young, I was very thoughtful and always wanted to help others. I would like to become a scientist from my ancestors and bring benefits to thousands of people. I'm sorry that I didn't get what I wanted because of changes. Although I'm middle-aged, I haven't forgotten this ambition."</p>
	<p>His mother: "You have good intentions. You have collected many pages. If you don't stop working, you can share the world's best wishes for the website."</p>
	<p>Friends: "I would like to go with you."</p>
	<p></p>
	<p>The Three Character Classic: "At the beginning of human life, human nature is inherently good" - you, I, TA, all people in the world have good intentions in their hearts.</p>
	<p></p>
	<h3>Spark: sincere blessing</h3>
	<p>The earth is home to an increasing population of 8 billion people. Resources are scarce and species are endangered. It is like the sixth biological extinction.</p>
	<p>However, consumerism prevails, the gap between rich and poor increases, and there are extremely poor people who have no food, clothing, shelter, and learning opportunities.</p>
	<p>We wish all the students in the world can have good teachers and friends, have no worries about food and clothing, be safe and healthy, have good luck, study quietly, and achieve this life!</p>
	<p></p>
	<h3>Looking ahead</h3>
	<p>Spruce is a tiny species, which has broken through the ground and become a timber for a hundred years, reaching a hundred meters. It stands tall and protects the world;</p>
	<p>In the dim light of the spark, people gather firewood and gather charity like a torch. It can reach ten thousand hectares and shine through the darkness of the night.</p>`,
      },
      {
        lang: "zh_cn",
        html: `<h3>种子萌芽：纯净善念</h3>
<p>sonya：“等我长大，我要同时当生物学家、天文学家、老师……保护可爱的动植物们，带领学生们共同守护我们美丽的家园——地球。”</p>
<p>其父：“吾幼好思，常欲助人，愿从先祖，成科学家，造福万方。惜因变故，未得如愿，今虽中年，未忘此志。”</p>
<p>其母：“汝有善念，已集诸页，不若暂停工作，并为网站，分享全球，圆满善愿。”</p>
<p>诸友：“愿与同行。”</p>
<p></p>
<p>《三字经》：“人之初，性本善”——您、我、TA，世间诸人，内心深处，皆有善念。</p>
<p></p>
<h3>星星之火：真诚祝福</h3>
<p>地球家园，人口渐增，已达80亿，资源紧缺，物种濒危，俨然第六次生物大灭绝之势。</p>
<p>然则消费主义盛行，贫富差距加大，有极度贫困者，无衣无食、无有居所、无有学习机会。</p>
<p>祝愿天下学童，皆得良师益友，衣食无忧，平安健康，得诸良缘，静心学习，成就此生！</p>
<p></p>
<h3>展望未来</h3>
<p>云杉种微，破土而出，百年成材，可达百米，参天而立，庇佑天下生灵；</p>
<p>星火微光，众人拾柴，集善如炬，可达万顷，绵延长明，照彻长夜黑暗。</p>`,
      },
      {
        lang: "zh_tw",
        html: `<h3>種子萌芽：純淨善念</h3>
<p>sonya：“等我長大，我要同時當生物學家、天文學家、老師……保護可愛的動植物們，帶領學生們共同守護我們美麗的家園——地球。”</p>
<p>其父：“吾幼好思，常欲助人，願從先祖，成科學家，造福萬方。惜因變故，未得如願，今雖中年，未忘此志。”</p>
<p>其母：“汝有善念，已集諸頁，不若暫停工作，並為網站，分享全球，圓滿善願。”</p>
<p>諸友：“願與同行。”</p>
<p></p>
<p>《三字經》：“人之初，性本善”——您、我、TA，世間諸人，內心深處，皆有善念。</p>
<p></p>
<h3>星星之火：真誠祝福</h3>
<p>地球家園，人口漸增，已達80億，資源緊缺，物種瀕危，儼然第六次生物大滅絕之勢。</p>
<p>然則消費主義盛行，貧富差距加大，有極度貧困者，無衣無食、無有居所、無有學習機會。</p>
<p>祝願天下學童，皆得良師益友，衣食無憂，平安健康，得諸良緣，靜心學習，成就此生！</p>
<p></p>
<h3>展望未來</h3>
<p>雲杉種微，破土而出，百年成材，可達百米，參天而立，庇佑天下生靈；</p>
<p>星火微光，眾人拾柴，集善如炬，可達萬頃，綿延長明，照徹長夜黑暗。</p>`,
      },
    ].forEach(({ lang, html }) => {
      const span = createElement(
        lang as keyof HTMLElementTagNameMap,
      ) as HTMLSpanElement;
      contentWrap.appendChild(span);

      span.innerHTML = html;
    });
  };

  public init = () => {
    super.init();
  };
}

const aboutPage = new AboutPage();
aboutPage.init();
