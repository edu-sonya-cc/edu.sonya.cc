document.getElementsByTagName('html')[0].setAttribute('lang', localStorage.getItem('lang') || 'en_us');

function setLang(lang) {
	localStorage.setItem('lang', lang);
	window.location.reload();
}

function appendChangeLangArea() {
	var body = document.getElementsByTagName('body')[0];
	var oldChangeLangArea = document.querySelector('div#change-lang-area');
	if (oldChangeLangArea) {
		return;
	}

	var changeLangArea = document.createElement('div');
	changeLangArea.innerHTML = `
			<en_us>If you want to change the language, please click the button.</en_us>
			<zh_cn>如果您想切换语言，请点击下一行相应按钮。</zh_cn>
			<zh_tw>如果您想切換語言，請點擊下一行相應按鈕。</zh_tw>
			<br />
			<button type="button" onclick="setLang('en_us')"><en_us>En</en_us><zh_cn>Chinese</zh_cn><zh_tw>Traditional</zh_tw></button>
			<button type="button" onclick="setLang('zh_cn')"><en_us>英语</en_us><zh_cn>简体</zh_cn><zh_tw>繁体</zh_tw></button>
			<button type="button" onclick="setLang('zh_tw')"><en_us>英語</en_us><zh_cn>簡體</zh_cn><zh_tw>繁體</zh_tw></button>`;

	body.appendChild(changeLangArea);
}

appendChangeLangArea();