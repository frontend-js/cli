import Component from '@frontend.js/core'
import styles from "./content.scss"
import template from "./content.html"

export default new Component({
	root: 'body',
	styles: styles,
	template: template,
	data: {
		logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		logoAlt: 'Placeholder Image of Frontend.js Logo',
		content: 'this is some test data'
	}
})
