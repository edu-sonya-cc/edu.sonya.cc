<script>
window.onAddFavorite = () => {
	let errorTip = '';
	let title = '';
	switch (getCurrentLang()) {
		case 'en':
			title = 'Add to favorite';
			errorTip =
				'Add to favorite failed, please press Ctrl + D or Command + D, Or manually set in the browser.';
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

	const url = encodeURI(window.location.href);

	// See https://xcysj.blog.csdn.net/article/details/125167025
	// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sidebar
	try {
		window.addFavorite(url, title);
	} catch (e) {
		try {
			window.sidebar.addPanel(title, url, '');
		} catch (e) {
			alert(errorTip);
		}
	}
};

window.onShare = () => {
	console.log('onShare()');
	const url = encodeURI(window.location.href);
	pcGlobal.showShareArea(url);
};
</script>