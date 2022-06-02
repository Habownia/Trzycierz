// Dodawanie załadowanej strony
window.onload = () => {
	if (window.location.pathname !== '/index.html')
		window.location = window.location + 'index.html';
};

document.querySelector('#hero-btn').addEventListener('click', () => {
	document.querySelector('#hero').classList.toggle('hero-sus');
});

document.querySelector('#people').addEventListener('click', () => {
	document.querySelector('#people-ps').classList.toggle('hidden');
});

document.querySelector('#home').addEventListener('click', () => {
	document.querySelector('#home-ps').classList.toggle('hidden');
});

document.querySelector('#teritory').addEventListener('click', () => {
	document.querySelector('#teritory-ps').classList.toggle('hidden');
});

// DARK MODE
const darkModeBtn = document.querySelector('#dark-mode');

document.querySelector('#dark-mode').addEventListener('click', () => {
	darkModeBtn.classList.toggle('fa-moon');
	darkModeBtn.classList.toggle('fa-sun');
	// BODY
	document.querySelector('#body').classList.toggle('dark-body');
	// NAV
	document.querySelector('#nav').classList.toggle('dark-nav');
	document.querySelector('#nav-a1').classList.toggle('dark-nav-a');
	document.querySelector('#nav-a2').classList.toggle('dark-nav-a');
	document.querySelector('#nav-a3').classList.toggle('dark-nav-a');
	document.querySelector('#nav-a4').classList.toggle('dark-nav-a');
	// ABOUT
	document.querySelector('#about').classList.toggle('dark-about');
	// STATS
	document.querySelector('#stats').classList.toggle('dark-stats');
	document.querySelector('#stats-h2').classList.toggle('dark-stats-h2');
	// HISTORY
	document.querySelector('#history').classList.toggle('dark-history');
	// MAP
	document.querySelector('#map').classList.toggle('dark-map');
	// FOOTER
	document.querySelector('#footer').classList.toggle('dark-footer');
	document.querySelector('#instagram').classList.toggle('dark-instagram');
	document.querySelector('#github').classList.toggle('dark-media');
	document.querySelector('#mail').classList.toggle('dark-media');
});
