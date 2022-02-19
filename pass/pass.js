function start() {
	const introduce = String(document.getElementById('introduce').value);
	let finalArray = [];

	for (i = 0; i <= introduce.length - 1; i++) {
		let ascii2 = 0;
		let ascii = introduce.charCodeAt(i); //zamiana litery na numer w ascii
		let random =
			Math.floor(Math.random() * 50) - Math.floor(Math.random() * 30);
		ascii2 = ascii + random;
		if (ascii2 > 126) {
			//zamiana złych znaków na te czytelne przez komputer
			random = Math.floor(Math.random() * 20) - Math.floor(Math.random() * 10);
			ascii2 = ascii + random;
			finalArray[i] = String.fromCharCode(ascii2);
		} else {
			finalArray[i] = String.fromCharCode(ascii2);
		}
	}
	let finalString = finalArray.join(''); //łączenie tablicy w stringa
	document.getElementById('result').innerHTML = finalString;

	if (finalString !== '') {
		//sprawdzanie czy nie ma pustego paragrafu
		document.querySelector('.result-cont').style.border =
			'2px solid rgb(255, 255, 255)';
		document.getElementById('copy').style.display = 'flex';
	} else {
		document.getElementById('result-cont').style.display = 'none';
	}
}

document.getElementById('introduce').addEventListener('keyup', function (e) {
	//po kliknięciu Enter pojawia się odpowiedź
	if (e.key === 'Enter') {
		start();
	}
});

function copy() {
	//automatyczne kopiowanie odpowiedzi
	let range = document.createRange();
	range.selectNode(document.getElementById('result'));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
}

//Losowy cyctat z Krzyżaków

randomQuote = [
	'<p class="message">Bóg pobłogosławi wszelkim uczynkom mającym na celu dobro Zakonu.</p> <span class="name">~ Zygfryd de Lowe</span>',
	
	'<p class="message">Kto przeciw Krzyżakowi rękę podnosi, synem ciemności jest.</p> <span  class="name">~ Hugo Danveld</span>',

	'<p class="message">Mieczów ci u nas dostatek, ale i te przyjmuję jako wróżbę zwycięstwa, którą mi sam Bóg przez wasze ręce zsyła.</p> <span  class="name">~ Władysław Jagiełło</span>',

	'<p class="message">Mój ci jest!</p> <span  class="name">~ Danusia</span>',

	'<p class="message">Nie z Tatarami nam, ale z Niemcami na śmierć i życie.</p> <span  class="name">~ Zyndram z Maszkowic</span>',

	'<p class="message">Oto jest ten, który jeszcze dziś rano mniemał się być wyższym nad wszystkie mocarze świata.</p> <span class="name">~ Władysław Jagiełło o Ulryku von Jungingen</span>',

	'<p class="message">Zali cały Zakon tu leży?</p> <span class="name">~ Władysław Jagiełło</span>',
	
	'<p class="message">Toś mi i ty dziecko!...</p> <span  class="name">~ Jurand ze Spychowa</span>',
];

document.getElementById('quote-return').innerHTML =
	randomQuote[Math.floor(Math.random() * randomQuote.length)];
