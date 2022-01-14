const Trzycierzpunk = document.querySelector('#Trzycierzpunk');
const video = document.querySelector('#video');

function trzycierzPunk() {
	video.classList.toggle('visible');
	if (video.played) {
		video.pause();
	}
}
Trzycierzpunk.addEventListener('click', trzycierzPunk);
