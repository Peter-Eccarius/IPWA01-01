function AbholungSpeichern() {
    const dropdown = document.getElementById("krisengebiete-dropdown");

    const eingaben = {
        name: document.getElementById("name").value,
        vorname: document.getElementById("vorname").value,
        strasse: document.getElementById("strasse").value,
        plz: document.getElementById("plz").value,
        ort: document.getElementById("ort").value,
        kleidung: document.getElementById("kleidung").value,
        krisenland: dropdown.options[dropdown.selectedIndex].text
    }
    localStorage.setItem("formularDaten",JSON.stringify(eingaben));
    window.location.href = "erfolg_abholung.html"
}

function UebergabeSpeichern() {
    const dropdown = document.getElementById("krisengebiete-dropdown");
    const eingaben = {
        kleidung: document.getElementById("kleidung").value,
        krisenland: dropdown.options[dropdown.selectedIndex].text
    }
    localStorage.setItem("formularDaten",JSON.stringify(eingaben));
    window.location.href = "erfolg_uebergabe.html"
}

function AbholungAnzeigen() {
    const data = localStorage.getItem("formularDaten");
    const dropdown = document.getElementById("krisengebiete-dropdown");
    const eingaben = JSON.parse(data);
    const heute = new Date().toLocaleDateString();
    const jetzt = new Date().toLocaleTimeString();

    document.getElementById("outputName").innerText = eingaben.name;
    document.getElementById("outputVorname").innerText = eingaben.vorname;
    document.getElementById("outputStrasse").innerText = eingaben.strasse;
    document.getElementById("outputOrt").innerText = eingaben.ort;
    document.getElementById("outputPlz").innerText = eingaben.plz;
    document.getElementById("outputKleidung").innerText = eingaben.kleidung;
    document.getElementById("outputKrisenland").innerText = eingaben.krisenland;
    document.getElementById("outputHeute").innerText = heute;
    document.getElementById("outputJetzt").innerText = jetzt;
}

function UebergabeAnzeigen() {
    const data = localStorage.getItem("formularDaten");
    const dropdown = document.getElementById("krisengebiete-dropdown");
    const eingaben = JSON.parse(data);
    const heute = new Date().toLocaleDateString();
    const jetzt = new Date().toLocaleTimeString();

    document.getElementById("outputKleidung").innerText = eingaben.kleidung;
    document.getElementById("outputKrisenland").innerText = eingaben.krisenland;
    document.getElementById("outputHeute").innerText = heute;
    document.getElementById("outputJetzt").innerText = jetzt;
}

