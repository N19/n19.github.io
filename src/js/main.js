// Menu
var menuButton = document.getElementById('menu-button'),
	menu = document.querySelector('#main-menu .content'),
	htmlBody = document.querySelector('html, body');

menuButton.addEventListener('click', function(e) {
	e.stopPropagation();

	menuButton.classList.toggle('active');
	menu.classList.toggle('open');
});

htmlBody.addEventListener('click', function() {
	menuButton.classList.remove('active');
	menu.classList.remove('open');
});