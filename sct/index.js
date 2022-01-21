let points = 0;

function q1() {
	document.getElementById('q2').style.display = 'inline-block';
}

//Pytanie drugie
function q2a1() {points -= 1;}
function q2a2() {points += 0;}
function q2a3() {points += 1;}

function q2(){
    document.getElementById('q3').style.display = 'inline-block';
}

//Trzecie pytanie
function q3a1() {points += 1;}
function q3a2() {points += 0;}
function q3a3() {points -= 1;}

function q3(){
    document.getElementById('q4').style.display = 'inline-block';
}

//Czwarta funkcja
function q4a1() {points += 1;}
function q4a2() {points -= 1;}
function q4a3() {points += 0;}

function q4(){
    // document.getElementById('q5').style.display = 'inline-block';
    summary()
    document.getElementById('summary').style.display = 'inline-block';
}



function summary(){
    let d = new Date();
    let day = d.getDate() ;
    let month = d.getMonth() + 2;
    let year = d.getFullYear();
    let data;
    if (month >= 10){
        data = day + "." + month + "." + year + " r.";
    }
    else{
        data = day + ".0" + month + "." + year + " r.";
    }
    const end_speech = document.getElementById('prescription');
    const score = document.getElementById('score');
    const award = document.getElementById('award')
    score.innerHTML="Twój wynik to " + points;
    if(points <= 0){
        end_speech.innerHTML="Fatalnie! Nie pokazuj mi sie na oczy. Nie wiedzieć nic o Trzycierzu? Jak mogłeś?";
    }
    if(points > 0 && points <= 2){
        end_speech.innerHTML="Już coś kapujesz, ale nie jesteś jakiś wybitny. Miałem lepszych uczniów";
    }

    if(points > 2 && points <= 4){
        alert("Twoja egzekucja została przeniesiona na " + data)
        end_speech.innerHTML="Widzę, że czegoś się nauczyłeś i nie tak łatwo cię zwieść. Brawo oto twoja nagroda!";
        award.innerHTML = '<a href="./img/award.png" download style="text-decoration: none; color: beige;">Twoja nagroda do pobrania 😃😃😃😃</a>';
    }
}