import gsap from "gsap";
import divNames, { divNamesNoDots } from "./divNames";

const timeline = gsap.timeline({
	defaults: {
		duration: 0.7,
	},
});

const { first } = divNames;

timeline.from(first.title, {
	delay: 0.25,
	x: -300,
	opacity: 0,
});
timeline.from(first.subTitle, {
	x: 200,
	opacity: 0,
});
