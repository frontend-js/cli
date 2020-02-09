import Component from '@frontend.js/core'
import styles from "./header.scss"
import template from "./header.html"
import nav from '../nav/index'

const header = new Component({
	root: 'body',
	styles: styles,
	template: template,
	data: {
		name: 'FRONTEND.JS'
	}
})

header.appendChild(nav)
