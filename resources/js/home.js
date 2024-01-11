document.getElementById('mainVideo').addEventListener('click', () => {
	createVideoModal();

	document.getElementById('video-modal').addEventListener('click', () => {
		const modal = document.getElementById('video-modal');
		document.body.removeChild(modal);
	});

	document.getElementById('videoPlayer').addEventListener('click', (event) => {
		event.stopPropagation();
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			const modal = document.getElementById('video-modal');
			document.body.removeChild(modal);
		}
	});
});

function createVideoModal() {
	const modal = document.createElement('div');
	modal.classList.add('modal');
	modal.id = 'video-modal';
	modal.innerHTML = `
        <video id="videoPlayer" autoplay controls>
            <source src="resources/images/home/mainVideo.mp4" type="video/mp4">

            Your browser does not support HTML5 video.
        </video>
    `;
	document.body.appendChild(modal);
}

function createChart() {
	let element = document.getElementById('circle-char');
	let percentage = 1;
	console.log('ka hya');
	let intervalId = setInterval(() => {
		if (percentage == 101) {
			clearInterval(intervalId);
		} else if (percentage <= 42) {
			element.style.background = `repeating-conic-gradient(from 0deg, #BEF3C0 0deg calc(3.6deg * ${percentage}), #000 calc(3.6deg * ${percentage}) calc(3.6deg * 100))`;
		} else if (percentage > 42 && percentage <= 79) {
			element.style.background = `repeating-conic-gradient( from 0deg, #BEF3C0 0deg calc(3.6deg * 42), #AC94F1 calc(3.6deg * 42) calc(3.6deg * ${percentage}),#000 calc(3.6deg * ${percentage}) calc(3.6deg * 100))`;
		} else if (percentage >= 79 && percentage <= 88) {
			element.style.background = `repeating-conic-gradient( from 0deg, #BEF3C0 0deg calc(3.6deg * 42), #AC94F1 calc(3.6deg * 42) calc(3.6deg * 79), #FFF0CA calc(3.6deg * 79) calc(3.6deg * ${percentage}), #000 calc(3.6deg * ${percentage}) calc(3.6deg * 100))`;
		} else if (percentage >= 88 && percentage <= 96) {
			element.style.background = `repeating-conic-gradient( from 0deg, #BEF3C0 0deg calc(3.6deg * 42), #AC94F1 calc(3.6deg * 42) calc(3.6deg * 79), #FFF0CA calc(3.6deg * 79) calc(3.6deg * 88), #F9CF64 calc(3.6deg * 88) calc(3.6deg * ${percentage}), #000 calc(3.6deg * ${percentage}) calc(3.6deg * 100))`;
		} else if (percentage >= 96 && percentage <= 100) {
			element.style.background = `repeating-conic-gradient( from 0deg, #BEF3C0 0deg calc(3.6deg * 42), #AC94F1 calc(3.6deg * 42) calc(3.6deg * 79), #FFF0CA calc(3.6deg * 79) calc(3.6deg * 88), #F9CF64 calc(3.6deg * 88) calc(3.6deg * 96), #F38FBF calc(3.6deg * 96) calc(3.6deg * ${percentage}), #000 calc(3.6deg * ${percentage}) calc(3.6deg * 100))`;
		}
		percentage++;
	}, 25);
}

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			createChart();
			observer.unobserve(entry.target);
		}
	});
});

observer.observe(document.getElementById('lightred'));
