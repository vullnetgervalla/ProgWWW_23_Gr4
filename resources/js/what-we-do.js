window.onload = () => {
	const maxProjectTitleHeight = Math.max(...Array.from(document.querySelectorAll('.project-title')).map((title) => title.clientHeight));
	
	document.querySelectorAll('.project-title').forEach((title) => {
		if (title.clientHeight < maxProjectTitleHeight) {
			title.style.marginBottom = `${maxProjectTitleHeight - title.clientHeight}px`;
		}
	});
};