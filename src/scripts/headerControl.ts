import divNames, { divNamesNoDots } from "./divNames";

class HeaderController {
	private navToggler = document.querySelector(divNames.header.navToggler);
	private navList = document.querySelector(divNames.header.nav);

	constructor() {
		this.initBtns();
	}

	initBtns() {
		this.navToggler.addEventListener("click", () => {
			this.navToggler.classList.toggle(divNamesNoDots.header.iconBurgerOpen);
			this.toggleNav();
		});
	}

	toggleNav() {
		this.navList.classList.toggle(divNamesNoDots.header.navOpened);
	}
}

const ctrl = new HeaderController();
