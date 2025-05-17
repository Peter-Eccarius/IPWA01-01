function check_plz() {
    const plzInput = document.getElementById("plz").value
    const plzOwn = "99";

    if (plzInput.length === 5){
        const plzInputShort = plzInput.substring(0,2);

        if (plzInputShort == plzOwn){
            document.getElementById("plzOutput").innerText = "Prima; die Postleitzahl ist für die Abholung qualifiziert. Fahren Sie fort.";
        }
        else {
            document.getElementById("plzOutput").innerText = "Die Postleitzahl liegt außerhalb unseres Servicebereichs. Wählen Sie eine andere Adresse.";
        }
    }
    else {
        document.getElementById("plzOutput").innerText = "Bitte prüfen Sie die Eingabe. Es muss sich um eine 5-stellige Postleitzahl handeln.";
    }
}