function pocniVremeFunkciju() {

    postaviDatum();
    const today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    document.getElementById('vremeT').innerHTML = h + ":" + m + ":" + s;

    setTimeout(pocniVremeFunkciju, 1000);
}

function postaviDatum() {

    const today = new Date();
    let godina = today.getFullYear();
    let mesec = today.getMonth();
    let dan = today.getDate();

    document.getElementById('datum').innerHTML = dan + "/" + (mesec + 1) + "/" + godina;

}