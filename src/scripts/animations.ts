import gsap from "gsap";
import divNames, { divNamesNoDots } from "./divNames";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { first, numbers, aboutUs } = divNames;

function firstDivTimeline() {
	const timeline = gsap.timeline({
		defaults: {
			duration: 0.7,
		},
	});

	timeline.from(first.title, {
		delay: 0.4,
		x: -300,
		opacity: 0,
	});

	timeline.from(first.subTitle, {
		x: 200,
		opacity: 0,
	});
}

function numbersTimeline() {
	gsap.from(numbers.title, {
		x: 300,
		opacity: 0,
		delay: 0.2,
		scrollTrigger: {
			trigger: numbers.subTitle,
		},
	});
	gsap.from(numbers.subTitle, {
		x: -300,
		opacity: 0,
		delay: 0.15,
		scrollTrigger: {
			trigger: numbers.subTitle,
		},
	});

	gsap.from(numbers.statName, {
		x: -300,
		opacity: 0,
		delay: 0.15,
		stagger: 0.2,
		scrollTrigger: {
			trigger: numbers.statDesc,
		},
	});
	gsap.from(numbers.statDesc, {
		x: 200,
		opacity: 0,
		stagger: 0.25,

		scrollTrigger: {
			trigger: numbers.statDesc,
		},
	});
}

function aboutUsTimeline() {
	const options = {
		x: 300,
		opacity: 0,
		stagger: 0.4,
		delay: 0.3,

		scrollTrigger: {
			trigger: aboutUs.subTitle,
		},
	};
	const optionsReverseX = {
		x: -300,
		opacity: 0,
		delay: 0.3,
		stagger: 0.4,

		scrollTrigger: {
			trigger: aboutUs.subTitle,
		},
	};

	gsap.from(aboutUs.tile, options);

	gsap.from(aboutUs.title, options);
	gsap.from(aboutUs.subTitle, optionsReverseX);
}

firstDivTimeline();
numbersTimeline();
aboutUsTimeline();
