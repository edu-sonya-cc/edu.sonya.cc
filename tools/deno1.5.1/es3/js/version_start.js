var __exp;

// https://it.cha138.com/javascript/show-58000.html
if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

// https://www.codenong.com/18919560/
if (!Element.prototype.remove) {
	Element.prototype.remove = function() {
			this.parentElement.removeChild(this);
	};
}
if (!NodeList.prototype.remove) {
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
			for(var i = this.length - 1; i >= 0; i--) {
					if(this[i] && this[i].parentElement) {
							this[i].parentElement.removeChild(this[i]);
					}
			}
	}
}

