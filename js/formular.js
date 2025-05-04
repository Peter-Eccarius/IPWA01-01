function speichern() {
    const eingaben = {
        name: document.getElementById("name").value,
        vorname: document.getElementById("vorname").value,
        strasse: document.getElementById("strasse").value,
        plz: document.getElementById("plz").value,
        ort: document.getElementById("ort").value,
        kleidung: document.getElementById("kleidung").value,
    }
    localStorage.setItem("formularDaten",JSON.stringify(eingaben));
    window.location.href = "erfolg.html"
}

function anzeigen() {
    const data = localStorage.getItem("formularDaten");
    const eingaben = JSON.parse(data);
    document.getElementById("output").innerText = eingaben.name;
}