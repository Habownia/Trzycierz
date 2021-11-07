const people = document.querySelector('#people');
const peoplePs = document.querySelector('#people-ps');

const home = document.querySelector('#home');
const homePs = document.querySelector('#home-ps');

const teritory = document.querySelector('#teritory');
const teritoryPs = document.querySelector('#teritory-ps');

function peopleClick() {
	peoplePs.classList.toggle('hidden');
}
people.addEventListener('click', peopleClick);

function homeClick() {
	homePs.classList.toggle('hidden');
}
home.addEventListener('click', homeClick);

function teritoryClick() {
	teritoryPs.classList.toggle('hidden');
}
teritory.addEventListener('click', teritoryClick);