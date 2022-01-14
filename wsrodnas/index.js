const Trzycierzpunk = document.querySelector('#Trzycierzpunk');
const video = document.querySelector('#video');

function trzycierzPunk() {
	video.classList.toggle('visible');
	if (video.played) {
		video.pause();
	}
}
Trzycierzpunk.addEventListener('click', trzycierzPunk);

const dayum = document.querySelector('#dayum');

function damn(){
	alert("Damn");
	window.open('https://www.praktycznyegzamin.pl/','_blank');
}

dayum.addEventListener('click', damn);

