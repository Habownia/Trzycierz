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

// Silnia epic 
function siiiiilnia(){
	let liczba = document.getElementById('silnia').value;
	let silnia = 1;
	for (let i = 1; i<=liczba;i++){silnia *= i;}
	document.getElementById('silnia2').innerHTML = silnia;
}

document.addEventListener("keyup",function(e){
	var key = e.which||e.keyCode;
	if(key == 18){
		document.getElementById("alt").innerHTML = "Czemu alt tabujesz?????";
	}
	}
 );