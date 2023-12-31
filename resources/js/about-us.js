const video = document.querySelector('video');
const playButton = document.getElementById('circle');
playButton.onclick = () => {
	if (video.paused) {
		video.play();
		video.controls = true;
		playButton.style.display = 'none';
	}
};
video.addEventListener('pause', () => {
	video.controls = false;
	playButton.style.display = 'flex';
});

const valueToDisplay = document.querySelectorAll('.numerical-stats');
const interval = 2500;

const observer = new IntersectionObserver((entries) => {
	entries.forEach((value) => {
		if (value.isIntersecting) {
			let startValue = 0;
			const endValue = parseInt(value.target.getAttribute('data-val'));
			const duration = Math.floor(interval / endValue);
			const counter = setInterval(() => {
				startValue++;
				value.target.textContent = startValue + '+';
				if (endValue == 34) {
					value.target.textContent = startValue + 'M+';
				}
				if (startValue === endValue) {
					clearInterval(counter);
				}
			}, duration);
			observer.unobserve(value.target);
		}
	});
});

valueToDisplay.forEach((value) => {
	observer.observe(value);
});
