// Dodawanie załadowanej strony
window.onload = () => {
	if (window.location.pathname == '/sct/')
		window.location = window.location + 'index.html';
};

document.getElementById('begin').addEventListener('click', () => {
	window.scrollTo(0, document.body.scrollHeight);
});

let points = 0;

function bad() {
	points -= 1;
}

function good() {
	points += 1;
}

function magnif() {
	points += 2;
}

//Blokowanie nabijania nieskończoności punktów
function noPoints(quest) {
	document.querySelectorAll(`[id^="q${quest}a"]`).forEach((item) => {
		item.setAttribute('onclick', '');
	});
}

document.querySelectorAll('[id^="q1a"]').forEach((item) => {
	item.addEventListener('click', () => {
		addEventToInline(1);
	});
});

// Dodawanie event listenera do każdego pytania w bloku
function addInline(quest) {
	document.querySelectorAll(`[id^="q${quest}a"]`).forEach((item) => {
		item.addEventListener('click', addEventToInline(quest));
	});
}

//Dodawanie inline block do nowego pytania
function addEventToInline(quest) {
	document.getElementById(`q${quest + 1}`).style.display = 'inline-block';
}

// Wywalenie onClick z html i zastąpienie js (nwm jak to zrobić xd)
for (let i = 1; i <= document.getElementsByClassName('q').length; i++) {
	document.querySelectorAll(`[id^="q${i + 1}a"]`).forEach((item) => {
		let attr = item.getAttribute('id').match(/q\d/g).toString();
		attr == 'q2'
			? item.addEventListener('click', q2)
			: attr == 'q3'
			? item.addEventListener('click', q3)
			: attr == 'q4'
			? item.addEventListener('click', q4)
			: attr == 'q5'
			? item.addEventListener('click', q5)
			: attr == 'q6'
			? item.addEventListener('click', q6)
			: attr == 'q7'
			? item.addEventListener('click', q7)
			: attr == 'q8'
			? item.addEventListener('click', q8)
			: '';
	});
}

function q2() {
	addInline(2);
	noPoints(2);
	document.getElementById('q2a1').style.border = '3px solid red';
	document.getElementById('q2a2').style.border = '3px solid red';
	document.getElementById('q2a3').style.border = '3px solid green';
}

function q3() {
	addInline(3);
	noPoints(3);
	document.getElementById('q3a1').style.border = '3px solid green';
	document.getElementById('q3a2').style.border = '3px solid red';
	document.getElementById('q3a3').style.border = '3px solid red';
}

function q4() {
	addInline(4);
	noPoints(4);
	document.getElementById('q4a1').style.border = '3px solid green';
	document.getElementById('q4a2').style.border = '3px solid red';
	document.getElementById('q4a3').style.border = '3px solid red';
}

function q5() {
	addInline(5);
	noPoints(5);

	document.getElementById('q5a1').style.border = '3px solid red';
	document.getElementById('q5a2').style.border = '3px solid green';
	document.getElementById('q5a3').style.border = '3px solid #a946f0';
}

function q6() {
	addInline(6);
	noPoints(6);

	document.getElementById('q6a1').style.border = '3px solid red';
	document.getElementById('q6a2').style.border = '3px solid green';
	document.getElementById('q6a3').style.border = '3px solid #a946f0';
}

function q7() {
	addInline(7);
	noPoints(7);

	document.getElementById('q7a1').style.border = '3px solid #a946f0';
	document.getElementById('q7a2').style.border = '3px solid green';
	document.getElementById('q7a3').style.border = '3px solid red';
}

function q8() {
	// addInline(8);
	noPoints(8);

	document.getElementById('q8a1').style.border = '3px solid green';
	document.getElementById('q8a2').style.border = '3px solid #a946f0';
	document.getElementById('q8a3').style.border = '3px solid red';
	summary();
}

function summary() {
	document.getElementById('summary').style.display = 'flex';
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
			'<a href = "https://www.trzycierz.tk/" style="color: #4c48ab; text-decoration: none;"">Idź się czegoś naucz na trzycierz.tk bo ewidentnie nic nie umiesz!</a>';
	}
	if (points > 2 && points <= 6) {
		end_speech.innerHTML =
			'Już coś kapujesz, ale nie jesteś jakiś wybitny. Miałem lepszych uczniów';
		award.innerHTML =
			'<a href = "https://www.trzycierz.tk/" style="color: #4c48ab; text-decoration: none;"">Doucz się jeszcze na trzycierz.tk, a zdobędziesz potrzebną ci wiedzę!</a>';
	}

	if (points > 6) {
		alert('Twoja egzekucja została przeniesiona na ' + data);
		end_speech.innerHTML =
			'Widzę, że czegoś się nauczyłeś i nie tak łatwo cię zwieść. Brawo oto twoja nagroda!';
		award.innerHTML =
			'<a href="./img/award.png" download style="color: #4c48ab; text-decoration: none;">Twoja nagroda do pobrania 😃😃😃😃</a>';
	}
	//scrollowanie na dół strony po skończonym teście
	window.scrollTo(0, document.body.scrollHeight);
}

function reload() {
	window.location.reload();
}

//Wkleić przy ostatnim pytaniu
// summary();
// document.getElementById('summary').style.display = 'flex';
// window.scrollTo(0, document.body.scrollHeight);
