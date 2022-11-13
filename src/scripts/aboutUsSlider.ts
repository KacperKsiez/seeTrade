import divNames from "./divNames";

class AboutUsSlider {
	private slider = document.querySelector(divNames.aboutUs.slider) as HTMLElement;
	private isClicked: boolean = false;
	private startPosition: number = 0;
	private scrollLeft: number = 0;

	constructor() {
		this.initListeners();
	}
	initListeners() {
		this.slider.addEventListener("mousedown", this.handleMouseDown);
		this.slider.addEventListener("mouseup", this.handleMouseUp);
		this.slider.addEventListener("mouseleave", this.handleMouseLeave);
		this.slider.addEventListener("mousemove", this.handleMouseMove);
	}
	handleMouseUp = () => {
		this.isClicked = false;
	};
	handleMouseLeave = () => {
		this.isClicked = false;
	};
	handleMouseDown = (e: any) => {
		e.preventDefault();
		this.isClicked = true;
		this.startPosition = e.pageX - this.slider.offsetLeft;
		this.scrollLeft = this.slider.scrollLeft;
	};
	handleMouseMove = (e: any) => {
		e.preventDefault();

		if (!this.isClicked) return;

		const actualX = e.pageX - this.slider.offsetLeft;
		const walk = this.startPosition - actualX;
		this.slider.scrollLeft = this.scrollLeft + walk;
	};
}
const a = new AboutUsSlider();
