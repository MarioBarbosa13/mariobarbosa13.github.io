document.addEventListener("DOMContentLoaded", function() {

    window.setLanguage = function(lang) {

        if(lang === "pt") {
            document.documentElement.lang = "pt";

            document.getElementById("subtitle").innerText =
            "Analista de Geoprocessamento | Sensoriamento Remoto | Análise Ambiental";

            document.getElementById("about-title").innerText = "Sobre Mim";
            document.getElementById("about-text").innerText =
            "Analista em Geoprocessamento com experiência em sensoriamento remoto, monitoramento ambiental e análise espacial.";

            document.getElementById("cv-btn").innerText = "Baixar Currículo";
            document.getElementById("cv-btn").href = "pdf/jose-barbosa-cv-pt.pdf";
        }

        if(lang === "en") {
            document.documentElement.lang = "en";

            document.getElementById("subtitle").innerText =
            "Geospatial Analyst | Remote Sensing | Environmental Analysis";

            document.getElementById("about-title").innerText = "About Me";
            document.getElementById("about-text").innerText =
            "Geospatial Analyst with experience in remote sensing and spatial analysis.";

            document.getElementById("cv-btn").innerText = "Download CV";
            document.getElementById("cv-btn").href = "pdf/jose-barbosa-cv-en.pdf";
        }
    }

});
