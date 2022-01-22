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
    window.scrollTo(0,document.body.scrollHeight);
    document.getElementById('ending_answ').innerHTML = '<div id="a1" class="a a1">Miasto</div><div id="a2" class="a a2">Wieś</div><div id="a3" class="a a3">Kolonia</div>'
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
        end_speech.innerHTML = "Fatalnie! Nie pokazuj mi się na oczy. Nie wiedzieć nic o Trzycierzu? Jak mogłeś?";
        award.innerHTML = '<a href = "https://www.trzycierz.tk/" style="color: beige; text-decoration: none;"">Idź się czegoś naucz na trzycierz.tk bo ewidentnie nic nie umiesz!</a>'
    }
    if(points > 0 && points <= 2){
        end_speech.innerHTML="Już coś kapujesz, ale nie jesteś jakiś wybitny. Miałem lepszych uczniów";
        award.innerHTML = '<a href = "https://www.trzycierz.tk/" style="color: beige; text-decoration: none;"">Doucz się jeszcze na trzycierz.tk, a zdobędziesz potrzebną ci wiedzę!</a>'

    }

    if(points > 2 && points <= 4){
        alert("Twoja egzekucja została przeniesiona na " + data)
        end_speech.innerHTML="Widzę, że czegoś się nauczyłeś i nie tak łatwo cię zwieść. Brawo oto twoja nagroda!";
    award.innerHTML = '<a href="./img/award.png" download style="color: beige; text-decoration: none;">Twoja nagroda do pobrania 😃😃😃😃</a>';
    }
}