fetch("data.json").then(function (response) {
    response.json().then(function (data) {

        data.forEach(function (currentitem) {
            currentitem = "Si j'étais " + currentitem
        });

        data.forEach(function (items) {
            var liste = document.querySelector(".liste-analogie");
            liste.innerHTML = liste.innerHTML + "<section id=\"a" + items.numerotation + "\"><div class='illus' style='background-image: url("+ items.image +");'></div><h2 class='titre'>Si j’étais, "
             + items.analogie + "</br></br>je serais " + items.valeursAnalogies + "</br></br>parce que, " + items.raison + "</h2>" + ".\n</section>";
        });

        var envoyer = document.querySelector(".send");
        envoyer.addEventListener("click", function () {

            var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=anchana.fatimarajan&courriel=" + document.querySelector('input#mail').value +
            "&message= Si j'étais" + document.querySelector('input#ifiwas').value +
            "je serais" + document.querySelector('input#iwouldbe').value +
            "parce que" + document.querySelector('input#why').value +
            "lien de l'image" + document.querySelector('input#picture').value;

            fetch(urlVisitee).then(function (response) {
                response.json().then(function (data) {
                    console.log("Réponse reçue : ")
                    console.log(data);
                })
            })
                var liste = document.querySelector(".liste-analogie");
                liste.innerHTML = liste.innerHTML + "<section id=\"p\"><div class='illus'><img src='" + document.querySelector('input#picture').value + "'></div><h2 class='titre'>Si j’étais " + document.querySelector('input#ifiwas').value + ", je serais " + document.querySelector('input#iwouldbe').value + "</h2><h2>" + "parce que, " + document.querySelector('input#why').value + "</h2>" + ".\n</section>";
        })
    })
});

