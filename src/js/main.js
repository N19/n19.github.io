// Menu
var displayMenu = document.getElementById('display-main-menu'),
	menu = document.querySelector('#main-menu .content'),
	htmlBody = document.querySelector('html, body');

displayMenu.addEventListener('click', function(e) {
	e.stopPropagation();

	displayMenu.classList.toggle('active');
	menu.classList.toggle('open');
});

htmlBody.addEventListener('click', function() {
	displayMenu.classList.remove('active');
	menu.classList.remove('open');
});