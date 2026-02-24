document.addEventListener("DOMContentLoaded", function() {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");

    // Padrão inicial (Inglês)
    cvEn.style.display = "inline-block";
    cvPt.style.display = "none";

    window.setLanguage = function(lang) {

        if(lang === "pt") {

            document.documentElement.lang = "pt";

            document.getElementById("subtitle").innerText =
            "Analista de Geoprocessamento | Sensoriamento Remoto | Análise Ambiental";

            cvEn.style.display = "none";
            cvPt.style.display = "inline-block";
        }

        if(lang === "en") {

            document.documentElement.lang = "en";

            document.getElementById("subtitle").innerText =
            "Geospatial Analyst | Remote Sensing | Environmental Analysis";

            cvEn.style.display = "inline-block";
            cvPt.style.display = "none";
        }
    }

});
