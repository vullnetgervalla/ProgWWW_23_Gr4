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

const interval = 2500;
const observer = new IntersectionObserver((e) => {
	e.forEach((value) => {
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

document.querySelectorAll('.numerical-stats').forEach((value) => {
	observer.observe(value);
});

const teamObserver = new IntersectionObserver((e) => {
	e.forEach((value) => {
		if (value.isIntersecting) {
			value.target.classList.add('animate-team-up');
		}
	});
});

document.querySelectorAll('.member').forEach((value) => {
	teamObserver.observe(value);
})