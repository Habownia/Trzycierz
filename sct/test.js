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

let badAnsw = '3px solid red';
let goodAnsw = '3px solid green';
let magnifAnsw = '3px solid #a946f0';

document.querySelectorAll('.a').forEach((item) => {
	let answ = String(item.className.match(/good|bad|magnif/gi));
	item.addEventListener('click', () => {
		// console.log(document.getElementsByClassName('good'));
		if (answ == 'good') {
			item.style.border = goodAnsw;
			console.log(item);
		}
		if (answ == 'bad') {
			item.style.border = badAnsw;
		}
		if (answ == 'magnif') {
			item.style.border = magnifAnsw;
		}
	});
});

//Blokowanie nabijania nieskończoności punktów
function noPoints(quest) {
	document.querySelectorAll(`[id^="q${quest}a"]`).forEach((item) => {
		item.setAttribute('onclick', '');
	});
}

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
for (let i = 1; i <= document.getElementsByClassName('q').length + 1; i++) {
	document.querySelectorAll(`[id^="q${i}a"]`).forEach((item) => {
		let attr = item.getAttribute('id').match(/q\d/g).toString();
		switch (attr) {
			case 'q1':
				item.addEventListener('click', () => {
					addEventToInline(1);
				});
				break;
			case 'q2':
				item.addEventListener('click', () => {
					addInline(2);
					noPoints(2);
				});
				break;
			case 'q3':
				item.addEventListener('click', () => {
					addInline(3);
					noPoints(3);
				});
				break;
			case 'q4':
				item.addEventListener('click', () => {
					addInline(4);
					noPoints(4);
				});
				break;
			case 'q5':
				item.addEventListener('click', () => {
					addInline(5);
					noPoints(5);
				});
				break;
			case 'q6':
				item.addEventListener('click', () => {
					addInline(6);
					noPoints(6);
				});
				break;
			case 'q7':
				item.addEventListener('click', () => {
					addInline(7);
					noPoints(7);
				});
				break;
			case 'q8':
				item.addEventListener('click', function end() {
					// addInline(8);
					noPoints(8);
					summary();
				});
				break;
		}
	});
}

function summary() {
	document.getElementById('summary').style.display = 'flex';

	const end_speech = document.getElementById('prescription');
	const score = document.getElementById('score');
	const award = document.getElementById('award');
	score.textContent = 'Twój wynik to ' + points;

	//stworzenie linka do podsumowania
	let link = document.createElement('a');
	link.setAttribute('href', 'https://www.trzycierz.tk/');
	link.setAttribute('style', 'color: #4c48ab; text-decoration: none;');
	link.setAttribute('target', '_blank');

	if (points <= 2) {
		end_speech.textContent =
			'Fatalnie! Nie pokazuj mi się na oczy. Nie wiedzieć nic o Trzycierzu? Jak mogłeś?';
		link.textContent =
			'Idź się czegoś naucz na trzycierz.tk bo ewidentnie nic nie umiesz!';
	}
	if (points > 2 && points <= 6) {
		end_speech.textContent =
			'Już coś kapujesz, ale nie jesteś jakiś wybitny. Miałem lepszych uczniów';
		link.textContent =
			'Doucz się jeszcze na trzycierz.tk, a zdobędziesz potrzebną ci wiedzę!';
	}
	if (points > 6) {
		execution();
		end_speech.textContent =
			'Widzę, że czegoś się nauczyłeś i nie tak łatwo cię zwieść. Brawo oto twoja nagroda!';
		link.setAttribute('href', './img/award.png');
		link.setAttribute('download', 'download');
		link.textContent = 'Twoja nagroda do pobrania 😃😃😃😃';
	}

	if (award.innerHTML == '') {
		//appendowanie linku do DOMu
		award.appendChild(link);
	}

	//scrollowanie na dół strony po skończonym teście
	window.scrollTo(0, document.body.scrollHeight);
}

function execution() {
	//alert z egzekucją
	let d = new Date();
	let day = d.getDate();
	let month = d.getMonth() + 2;
	let year = d.getFullYear();
	let data;

	// dodawanie zera przed miesiącem i dniem
	if (month < 10) {
		month = 0 + String(month);
	}
	if (day < 10) {
		day = 0 + String(day);
	}
	data = day + '.' + month + '.' + year + ' r.';

	alert('Twoja egzekucja została przeniesiona na ' + data);
}

//Przyciski

document.getElementById('show-answ').addEventListener('click', () => {
	Array.from(document.getElementsByClassName('good')).forEach((item) => {
		item.style.border = goodAnsw;
		console.log(item);
	});
	Array.from(document.getElementsByClassName('bad')).forEach((item) => {
		item.style.border = badAnsw;
	});
	Array.from(document.getElementsByClassName('magnif')).forEach((item) => {
		item.style.border = magnifAnsw;
	});
});

document.getElementById('reload').addEventListener('click', () => {
	window.location.reload();
});

//Wkleić przy ostatnim pytaniu
// summary();
