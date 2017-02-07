function Menu () {
	// credit: http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
	function getElementOffset (element) {
		var rect = element.getBoundingClientRect (),
			x = window.scrollX? window.scrollX : document.documentElement.scrollLeft,
			y = window.scrolllY? window.scrolllY : document.document.scrollTop;

		return {left: rect.left + x, top: rect.top + y};
	}
}
