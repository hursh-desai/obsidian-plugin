import { Plugin} from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		let xDown:number|null = null;
		let yDown:number|null = null;

		const handleTouchStart = (evt:TouchEvent) => {
			console.log("Touch Start");
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};

		const handleTouchMove = (evt:TouchEvent) => {
			if (!xDown || !yDown) {
				return;
			}

			let xUp = evt.touches[0].clientX;
			let yUp = evt.touches[0].clientY;

			let xDiff = xDown - xUp;
			let yDiff = yDown - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
			/*most significant*/
			if (xDiff > 0) {
				/* left swipe */
				console.log("Swiped Left");
				// document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', ctrlKey: true }));
			} else {
				/* right swipe */
				console.log("Swiped Right");
				// document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', ctrlKey: true, shiftKey: true }));
			}
			} else {
			if (yDiff > 0) {
				/* up swipe */
			} else {
				/* down swipe */
			}
			}
			/* reset values */
			xDown = null;
			yDown = null;
		};

		this.registerDomEvent(document, "touchstart", (evt: TouchEvent) => { handleTouchStart(evt)});
		this.registerDomEvent(document, "touchmove", (evt: TouchEvent) => { handleTouchMove(evt)});
		
	}
	onunload() {}
}


