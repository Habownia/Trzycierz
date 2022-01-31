window.onload = function () {
		if(window.location.pathname == '/sct/')
		window.location = window.location + 'index.html#loaded';
};

let points = 0;

function start() {
	window.scrollTo(0, document.body.scrollHeight);
}

function q1() {
	document.getElementById('q2').style.display = 'inline-block';
}

//Pytanie drugie
function q2a1() {
	points -= 1;
}
function q2a2() {
	points += 0;
}
function q2a3() {
	points += 1;
}

function q2() {
	document.getElementById('q3').style.display = 'inline-block';
	document.getElementById('answers2').innerHTML =
		'<div id="q2a1" class="a a1">420</div><div id="q2a2" class="a a2">69</div><div id="q2a3" class="a a3">505</div>';
	document.getElementById('q2a1').style.border = '3px solid red';
	document.getElementById('q2a2').style.border = '3px solid red';
	document.getElementById('q2a3').style.border = '3px solid green';
}

//Trzecie pytanie
function q3a1() {
	points += 1;
}
function q3a2() {
	points += 0;
}
function q3a3() {
	points -= 1;
}

function q3() {
	document.getElementById('q4').style.display = 'inline-block';
	document.getElementById('answers3').innerHTML =
		'<div id="q3a1" class="a a1">Trzycierskim</div><div id="q3a2" class="a a2">Nowosądeckim</div><div id="q3a3" class="a a3">Podkarpackim</div>';
	document.getElementById('q3a1').style.border = '3px solid green';
	document.getElementById('q3a2').style.border = '3px solid red';
	document.getElementById('q3a3').style.border = '3px solid red';
}

//Czwarta funkcja
function q4a1() {
	points += 1;
}
function q4a2() {
	points -= 1;
}
function q4a3() {
	points += 0;
}

function q4() {
	document.getElementById('q5').style.display = 'inline-block';
	document.getElementById('answers4').innerHTML =
		'<div id="q4a1" class="a a1">Miasto</div><div id="q4a2" class="a a2">Wieś</div><div id="q4a3" class="a a3">Kolonia</div>';
	document.getElementById('q4a1').style.border = '3px solid green';
	document.getElementById('q4a2').style.border = '3px solid red';
	document.getElementById('q4a3').style.border = '3px solid red';
}

//Piąta funkcja
function q5a1() {
	points += 0;
}
function q5a2() {
	points += 1;
}
function q5a3() {
	points += 2;
}

function q5() {
	document.getElementById('q6').style.display = 'inline-block';
	document.getElementById('answers5').innerHTML =
		'<div id="q5a1" class="a a1">Stanisław Trzecierski</div><div id="q5a2" class="a a2">Stanisław Bylina</div><div id="q5a3" class="a a3">Jan Długosz herbu Mikopres</div>';
	document.getElementById('q5a1').style.border = '3px solid red';
	document.getElementById('q5a2').style.border = '3px solid green';
	document.getElementById('q5a3').style.border = '3px solid #a946f0';
}

//Szósta funkcja
function q6a1() {
	points += 0;
}
function q6a2() {
	points += 1;
}
function q6a3() {
	points += 2;
}

function q6() {
	document.getElementById('q7').style.display = 'inline-block';
	document.getElementById('answers6').innerHTML =
		'<div id="q6a1" class="a a1">420 kg</div><div id="q6a2" class="a a2">391.26 ha</div><div id="q6a3" class="a a3">69 mld dolarów</div>';
	document.getElementById('q6a1').style.border = '3px solid red';
	document.getElementById('q6a2').style.border = '3px solid green';
	document.getElementById('q6a3').style.border = '3px solid #a946f0';
}

//Siódma funkcja

function q7a1() {
	points += 2;
}
function q7a2() {
	points += 1;
}
function q7a3() {
	points += 0;
}

function q7() {
	document.getElementById('q8').style.display = 'inline-block';
	document.getElementById('answers7').innerHTML =
		'<div id="q7a1" class="a a1">Trzycierzus</div><div id="q7a2" class="a a2">Trzycierz</div><div id="q7a3" class="a a3">Tżycież</div>';
	document.getElementById('q7a1').style.border = '3px solid #a946f0';
	document.getElementById('q7a2').style.border = '3px solid green';
	document.getElementById('q7a3').style.border = '3px solid red';
}

//Ósma funkcja

function q8a1() {
	points += 1;
}
function q8a2() {
	points += 2;
}
function q8a3() {
	points += 0;
}

function q8() {
	// document.getElementById('q9').style.display = 'inline-block';
	document.getElementById('answers8').innerHTML =
		'<div id="q8a1" class="a a1">33-322</div><div id="q8a2" class="a a2">69-420</div><div id="q8a3" class="a a3">33-312</div>';
	document.getElementById('q8a1').style.border = '3px solid green';
	document.getElementById('q8a2').style.border = '3px solid #a946f0';
	document.getElementById('q8a3').style.border = '3px solid red';
	summary();
}

function summary() {
	document.getElementById('summary').style.display = 'flex';
	window.scrollTo(0, document.body.scrollHeight);
	let d = new Date();
	let day = d.getDate();
	let month = d.getMonth() + 2;
	let year = d.getFullYear();
	let data;
	if (month >= 10) {
		data = day + '.' + month + '.' + year + ' r.';
	} else {
		data = day + '.0' + month + '.' + year + ' r.';
	}
	const end_speech = document.getElementById('prescription');
	const score = document.getElementById('score');
	const award = document.getElementById('award');
	score.innerHTML = 'Twój wynik to ' + points;
	if (points <= 2) {
		end_speech.innerHTML =
			'Fatalnie! Nie pokazuj mi się na oczy. Nie wiedzieć nic o Trzycierzu? Jak mogłeś?';
		award.innerHTML =
			'<a href = "https://www.trzycierz.tk/" style="color: beige; text-decoration: none;"">Idź się czegoś naucz na trzycierz.tk bo ewidentnie nic nie umiesz!</a>';
	}
	if (points > 2 && points <= 6) {
		end_speech.innerHTML =
			'Już coś kapujesz, ale nie jesteś jakiś wybitny. Miałem lepszych uczniów';
		award.innerHTML =
			'<a href = "https://www.trzycierz.tk/" style="color: beige; text-decoration: none;"">Doucz się jeszcze na trzycierz.tk, a zdobędziesz potrzebną ci wiedzę!</a>';
	}

	if (points > 6) {
		alert('Twoja egzekucja została przeniesiona na ' + data);
		end_speech.innerHTML =
			'Widzę, że czegoś się nauczyłeś i nie tak łatwo cię zwieść. Brawo oto twoja nagroda!';
		award.innerHTML =
			'<a href="./img/award.png" download style="color: beige; text-decoration: none;">Twoja nagroda do pobrania 😃😃😃😃</a>';
	}
}

function reload() {
	window.location.reload();
}

//Wkleić przy ostatnim pytaniu
// summary();
// document.getElementById('summary').style.display = 'flex';
// window.scrollTo(0, document.body.scrollHeight);
