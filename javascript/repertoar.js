let dugme = document.getElementById("promeniPrvi");

dugme.addEventListener('click', handleDugme);

function handleDugme() {
    let objekat = document.getElementById("titlFilma1");
    if(document.getElementById("titlFilma1").innerHTML === "'Schindler's List'") {
        document.getElementById("slika1").src = "../img/12_Angry_Men.jpg";
        document.getElementById("titlFilma1").innerHTML = "'12 Angry Men'";
        document.getElementById("hiperlink1").href = "https://www.imdb.com/title/tt0050083/";
    } else {
        document.getElementById("slika1").src="../img/Schindler's_List.jpg";
        document.getElementById("titlFilma1").innerHTML ="'Schindler's List'";
        document.getElementById("hiperlink1").href = "https://www.imdb.com/title/tt0108052/";
    }
}