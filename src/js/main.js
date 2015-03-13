// Menu

function toggleMenu() {
	var menuButton = document.getElementById('menu-button'),
		menuContent = document.querySelector('#main-menu .menu-content'),
		htmlBody = document.querySelector('html, body');

	menuButton.addEventListener('click', function(e) {
	    e.stopPropagation();

		menuButton.classList.toggle('active');
		menuContent.classList.toggle('active');
	});

	htmlBody.addEventListener('click', function() {
	    menuButton.classList.remove('active');
	    menuContent.classList.remove('active');
	});
}

toggleMenu();

// ------------------------------------------------------------
// Generate title span

function generateTitleSpan(str) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz",
		randomName = "",
		titleSpan = document.getElementById('title-span');

	for (var i = 0; i < str.length; i++) {
		var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

		randomName += randomLetter;
	}

	titleSpan.innerHTML = randomName;
	randomName = randomName.split('');

	var tries = 0;
	var generate = setInterval(function() {
		for (var i = 0; i < randomName.length; i++) {
			if (randomName[i] !== str[i]) {
				var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

				randomName[i] = randomLetter;
			}
		}
		titleSpan.innerHTML = randomName.join('');

		if (tries > 15) randomName = str.split('');
		if (randomName == str) {
			clearInterval(generate);
		}

		tries++;
	}, 60);
}

generateTitleSpan('silva');

// ------------------------------------------------------------