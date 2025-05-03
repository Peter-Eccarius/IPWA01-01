    fetch("header.html") //holt die Datei header.html
    .then(res => res.text()) //Result wird als Text interpretiert
    .then(data => {document.getElementById("header").innerHTML = data}); //data ist der reine Inhalt und wird in das Element "header" alt html importiert

    fetch("footer.html")
    .then(res => res.text())
    .then(data => {document.getElementById("footer").innerHTML = data});