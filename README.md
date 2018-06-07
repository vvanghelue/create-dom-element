# Simple way to create a DOM element using built-in browser DOMParser function

## Installation

```bash
npm install dom-element-create
```

## Example

```javascript

const createDomElement = require('dom-element-create')

const coolElement = createDomElement(`
	<div class="foo">
		<h1>bar</h1>
		<p>hello</p>
	</div>
`)

document.appendChild(coolElement)

```

Or, with callback :

```javascript

const createDomElement = require('dom-element-create')

const coolElement = createDomElement(`
	<div class="foo">
		<h1>bar</h1>
		<p>hello</p>
	</div>
`, (element) => { //element === coolElement
	element.addEventListener('click', () => {
		alert('Hi, folks !')
	})
})

document.appendChild(element)

```