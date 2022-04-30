let widthOfSite = window.innerWidth;

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

	//sprawdzenie czy div nie przekracza max szerokości ekranu
	if (document.getElementById('result').offsetWidth >= 0.6 * widthOfSite) {
		document.getElementById('result').innerHTML =
			"<b style='color: #ffc527e5'>Spokojne ✋😳</b>";
	}

	if (finalString !== '') {
		//sprawdzanie czy nie ma pustego paragrafu
		document.querySelector('.result-cont').style.border =
			'2px solid rgb(255, 255, 255)';
		document.getElementById('copy').style.display = 'flex';
		document.getElementById('result-cont').style.display = 'flex';
	} else {
		document.getElementById('result-cont').style.display = 'none';
	}
}

document.getElementById('introduce').addEventListener('keyup', (e) => {
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

	let copyAnim = document.getElementById('copy-anim');
	copyAnim.classList.remove('anim-callout'); // reset animation
	void copyAnim.offsetWidth; // trigger reflow
	copyAnim.classList.add('anim-callout');
}

//Losowy cytat z Krzyżaków zrobiony z użyciem JSON

let json = fetch('./quote.JSON')
	.then((response) => response.json())
	.then(
		(json) =>
			(document.getElementById('quote-return').innerHTML =
				json.quote[Math.floor(Math.random() * json.quote.length)])
	);
