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

// nav
const nav = document.querySelector('#nav');
const navA1 = document.querySelector('#nav-a1');
const navA2 = document.querySelector('#nav-a2');
const navA3 = document.querySelector('#nav-a3');
const navA4 = document.querySelector('#nav-a4');
function darkMode() {
	darkModeBtn.classList.toggle('fa-moon');
	darkModeBtn.classList.toggle('fa-sun');
	// NAV
	nav.classList.toggle('dark-nav');
	navA1.classList.toggle('dark-nav-a');
	navA2.classList.toggle('dark-nav-a');
	navA3.classList.toggle('dark-nav-a');
	navA4.classList.toggle('dark-nav-a');
}
darkModeBtn.addEventListener('click', darkMode);
