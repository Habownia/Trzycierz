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
					//Dodanie do elementu z id x odpowiedniego stylu
					//js interpretuje id jak zmienne globalne
					q2a1.style.border = badAnsw;
					q2a2.style.border = badAnsw;
					q2a3.style.border = goodAnsw;
				});
				break;
			case 'q3':
				item.addEventListener('click', () => {
					addInline(3);
					noPoints(3);
					q3a1.style.border = goodAnsw;
					q3a2.style.border = badAnsw;
					q3a3.style.border = badAnsw;
				});
				break;
			case 'q4':
				item.addEventListener('click', () => {
					addInline(4);
					noPoints(4);
					q4a1.style.border = goodAnsw;
					q4a2.style.border = badAnsw;
					q4a3.style.border = badAnsw;
				});
				break;
			case 'q5':
				item.addEventListener('click', () => {
					addInline(5);
					noPoints(5);
					q5a1.style.border = badAnsw;
					q5a2.style.border = goodAnsw;
					q5a3.style.border = magnifAnsw;
				});
				break;
			case 'q6':
				item.addEventListener('click', () => {
					addInline(6);
					noPoints(6);
					q6a1.style.border = badAnsw;
					q6a2.style.border = goodAnsw;
					q6a3.style.border = magnifAnsw;
				});
				break;
			case 'q7':
				item.addEventListener('click', () => {
					addInline(7);
					noPoints(7);
					q7a1.style.border = magnifAnsw;
					q7a2.style.border = goodAnsw;
					q7a3.style.border = badAnsw;
				});
				break;
			case 'q8':
				item.addEventListener('click', () => {
					// addInline(8);
					noPoints(8);
					q8a1.style.border = goodAnsw;
					q8a2.style.border = magnifAnsw;
					q8a3.style.border = badAnsw;
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

	//appendowanie linku do DOMu
	award.appendChild(link);

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

function reload() {
	window.location.reload();
}

//Wkleić przy ostatnim pytaniu
// summary();
