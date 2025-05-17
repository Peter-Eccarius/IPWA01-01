    fetch("header.html") //holt die Datei header.html
    .then(response => response.text()) //Result wird als Text interpretiert
    .then(data => {document.getElementById("header").innerHTML = data}); //data ist der reine Inhalt und wird in das Element "header" als html importiert

    fetch("footer.html")
    .then(response => response.text())
    .then(data => {document.getElementById("footer").innerHTML = data});