
function loadPage(pageName) {
	fetch(pageName + '.html')
		.then((response) => response.text())
		.then((data) => {
			document.getElementById('content').innerHTML = data;
		});
}

// var externalFrame = document.getElementById('externalFrame');
// externalFrame.addEventListener('load', () => {
// 	var homePage = externalFrame.contentDocument.getElementById('home');
// 	var aboutPage = externalFrame.contentDocument.getElementById('aboutUs');
//   var contactPage = externalFrame.contentDocument.getElementById('contact');
  
// 	homePage.addEventListener('click',() => {
// 		loadPage('index');
//   });
//   aboutPage.addEventListener('click', () => {
//     loadPage('about-us');
//   });
//   contactPage.addEventListener('click', () => {
//     loadPage('contact-us');
//   });
// });
