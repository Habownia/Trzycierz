const people = document.querySelector('#people');
const peoplePs = document.querySelector('#people-ps');

function peopleClick() {
	peoplePs.classList.toggle('hidden');
}
people.addEventListener('click', peopleClick);

const home = document.querySelector('#home');
const homePs = document.querySelector('#home-ps');

function homeClick() {
	homePs.classList.toggle('hidden');
}
home.addEventListener('click', homeClick);

const teritory = document.querySelector('#teritory');
const teritoryPs = document.querySelector('#teritory-ps');

function teritoryClick() {
	teritoryPs.classList.toggle('hidden');
}
teritory.addEventListener('click', teritoryClick);

// DARK MODE
const darkModeBtn = document.querySelector('#dark-mode');
// body
const body = document.querySelector('#body');
// nav
const nav = document.querySelector('#nav');
const navA1 = document.querySelector('#nav-a1');
const navA2 = document.querySelector('#nav-a2');
const navA3 = document.querySelector('#nav-a3');
const navA4 = document.querySelector('#nav-a4');
// about
const about = document.querySelector('#about');
// stats
const stats = document.querySelector('#stats');
const statsH2 = document.querySelector('#stats-h2');
// history
const history = document.querySelector('#history');
// footer
const footer = document.querySelector('#footer');
const instagram = document.querySelector('#instagram');
const gitHub = document.querySelector('#github');
const mail = document.querySelector('#mail');
function darkMode() {
	darkModeBtn.classList.toggle('fa-moon');
	darkModeBtn.classList.toggle('fa-sun');
	// BODY
	body.classList.toggle('dark-body');
	// NAV
	nav.classList.toggle('dark-nav');
	navA1.classList.toggle('dark-nav-a');
	navA2.classList.toggle('dark-nav-a');
	navA3.classList.toggle('dark-nav-a');
	navA4.classList.toggle('dark-nav-a');
	// ABOUT
	about.classList.toggle('dark-about');
	// STATS
	stats.classList.toggle('dark-stats');
	statsH2.classList.toggle('dark-stats-h2');
	// HISTORY
	history.classList.toggle('dark-history');
	// FOOTER
	footer.classList.toggle('dark-footer');
	instagram.classList.toggle('dark-instagram');
	gitHub.classList.toggle('dark-media');
	mail.classList.toggle('dark-media');
}
darkModeBtn.addEventListener('click', darkMode);
