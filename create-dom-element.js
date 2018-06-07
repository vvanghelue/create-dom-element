(function () {
	var createDomElement = function (html, onCreated) {
		let element = new DOMParser().parseFromString(html, "text/html").body.firstChild

		if (onCreated) {
			onCreated(element)
		}

		return element
	}

	if (typeof(module) !== 'undefined') {
		module.exports = createDomElement
	} else {
		window.createElement = createDomElement
	}
})()
