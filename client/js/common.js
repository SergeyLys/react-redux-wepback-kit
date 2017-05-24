import '../css/styles.scss';

class Common {
	constructor(prop) {
		this.header = header;
	}

	openMenu() {
		console.log(this.header, 'open menu');
	}
}

class Header {
	constructor(header) {
		this.header = header;
		this.openMenu();
	}

	openMenu() {
		document.addEventListener('click', function() {
			console.log(document.getElementById('header'), 'open menu');
		});
	}
}

class StickyHeader extends Common {
	constructor() {
		super(document.getElementById('header'));
		this.method1();
	}

	method1() {
		console.log(this.header);
	}
}

document.addEventListener('DOMContentLoaded', new Sticky());
document.addEventListener('scroll', function() {
	new StickyHeader();
});