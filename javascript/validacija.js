$("#potvrdi").click(function(){
    var imeprezime = document.forma.imeprezime.value;
    var imejl = document.forma.imejl.value;
    var tel = document.forma.tel.value;
    var brojKarata = document.forma.karte.value;
    var vreme = document.querySelector('input[name="time"]:checked').value;
    var film = document.getElementById("film").value;

    if (imeprezime === null || imeprezime === "") {
        alert("Unesite ime i prezime");
        return false;
    }
    else if (imejl === null || imejl === "" ) {
        alert("Unesite email");
        return false;
    }
    else if (tel === null || tel === "") {
        alert("Unesite broj telefona");
        return false;
    }
    else if(film === null || film === "") {
        alert("Izaberite film.");
        return false;
    }
    else if(brojKarata === null || brojKarata === "" || brojKarata <= 0) {
        alert("Izaberite odgovarajuci broj karata.");
        return false;
    }
    else {

        /*localStorage.setItem("imejl", imejl);
        localStorage.setItem("tel", tel);
        localStorage.setItem("imeprezime", imeprezime);
        localStorage.setItem("brojKarata", brojKarata);*/

        if(sadrziBroj(imeprezime)) {
            alert("Greska, uneto ime i prezime sadrzi broj.")
            return false;
        }
        
        if(!sadrziMajmunce(imejl)) {
            alert("Greska, unet email ne sadrzi karakter '@'!");
            return false;
        }

        if(sadrziSlovo(tel)) {
            alert("Greska, unet telefon sadrzi ime");
            return false;
        }

        let cena = 0;

        switch(brojKarata) {
            case 1: 
                cena = 1500;
            case 2:
                cena = 2500;
            case 3:
                cena = 3300;
            default:
                cena = 1000 * brojKarata;
        }

        alert("Uspešna registracija!\nIme i prezime: " + imeprezime + "\nEmail: " + imejl + 
        "\nTelefon: " + tel + "\nBroj karata: " + brojKarata + " za film " + film
        + " u " + vreme +":00!\n" + "Cena je " + cena + "!" );
        return true;
    }
})

function sadrziBroj(string) {
    return /\d/.test(string);
}

function sadrziMajmunce(string) {
    return /@/.test(string);
}

function sadrziSlovo(string) {
    return /[a-zA-Z]/.test(string);
}


/*function provera() {

    var imeprezime = document.forma.imeprezime.value;
    var imejl = document.forma.imejl.value;

    if (imeprezime === null || imeprezime === "") {
        alert("Unesite ime i prezime");
        return false;
    }

    else if (
        imejl === null || imejl === ""
    ) {
        alert("Unesite email");
        return false;
    }

    else if (tel === null || tel === "") {
        alert("Unesite broj telefona");
        return false;
    }

    else {
        localStorage.setItem("imejl", imejl);
        localStorage.setItem("tel", tel);
        localStorage.setItem("imeprezime", imeprezime);
        alert("Uspešna registracija!\nIme i prezime: " + imeprezime + "\nEmail: " + imejl + "\nTelefon: " + tel);
        return true;
    }
}*/