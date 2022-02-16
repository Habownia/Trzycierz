function start() {
	const introduce = String(document.getElementById('introduce').value);
	let finalArray = [];

	for (i = 0; i <= introduce.length - 1; i++) {
		let ascii2 = 0;
		let ascii = introduce.charCodeAt(i);
		let random =
			Math.floor(Math.random() * 50) - Math.floor(Math.random() * 30);
		ascii2 = ascii + random;
		if (ascii2 > 126) {
			random = Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10);
			ascii2 = ascii + random;
			finalArray[i] = String.fromCharCode(ascii2);
		} else {
			finalArray[i] = String.fromCharCode(ascii2);
		}
	}
	let finalString = finalArray.join('');
	document.getElementById('result').innerHTML = finalString;

	document.querySelector('.copy').style.marginLeft = "10px";
	document.querySelector('.result-cont').style.border = "2px solid rgb(255, 255, 255)"
}

document.getElementById('introduce').addEventListener('keyup', function (e) {
	if (e.key === 'Enter') {
		start();
	}
});

function copy() {
	let range = document.createRange();
	range.selectNode(document.getElementById("result"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range); 
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}