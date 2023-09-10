function proverakontakt() {

    var imeprezime4 = document.kontakt.imeprezime3.value;
    var imejl4 = document.kontakt.imejl3.value;
    var tekst4 = document.kontakt.pitanje.value;
    
    if (imeprezime4 === null || imeprezime4 === "") {
        alert("Unesite ime i prezime");
        return false;
    }

    else if (imejl4 === null || imejl4 === "") {
        alert("Unesite email");
        return false;
    }

    else if (tekst4 ===null || tekst4 ==="") {
        alert("Unesite pitanje");
        return false;
    }

    else{
        alert("Poruka je uspešno poslata!");
        return true;
    }
}