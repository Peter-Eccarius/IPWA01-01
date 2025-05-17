fetch("json/krisengebiete.json")
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById("krisengebiete-dropdown");
        const defaultOption = document.createElement("option");
        defaultOption.textContent = "Bitte wählen";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        dropdown.appendChild(defaultOption);
        data.forEach(element => {
            const option = document.createElement("option");
            option.value = element.Kürzel;
            option.textContent = element.Name;
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error("Fehler beim Verarbeiten der JSON-Datei", error));