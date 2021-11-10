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

const discord = document.querySelector('#discord');
const discordPs = document.querySelector('#discord-ps');

function discordClick() {
	discordPs.classList.toggle('hidden');
}
discord.addEventListener('click', discordClick);

