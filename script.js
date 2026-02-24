document.addEventListener("DOMContentLoaded", function() {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");

    const translations = {
        en: {
            subtitle: "Geospatial Analyst | Remote Sensing | Environmental Analysis",
            aboutTitle: "About Me",
            aboutText: "Geospatial Analyst with experience in remote sensing, environmental monitoring and spatial analysis. Experience with land use classification, NDVI, hydrological analysis and GIS modeling. Research focused on climate variability and agricultural production in Northeastern Brazil.",
            educationTitle: "Education",
            educationText: "Bachelor in Geography – Federal University of Pernambuco (UFPE)<br>Master's Student in Geography – UFPE (2026)",
            experienceTitle: "Experience",
            experienceText: "Administrative Director – MapGeo Jr. (2023–2024)<br>Scientific Research Scholarship (FACEPE) – Environmental diagnosis of the Botafogo River Basin (PE)",
            skillsTitle: "Technical Skills",
            contactTitle: "Contact"
        },
        pt: {
            subtitle: "Analista de Geoprocessamento | Sensoriamento Remoto | Análise Ambiental",
            aboutTitle: "Sobre Mim",
            aboutText: "Analista em Geoprocessamento com experiência em sensoriamento remoto, monitoramento ambiental e análise espacial. Atuação em classificação de uso e cobertura do solo, NDVI, análise hidrográfica e modelagem GIS. Pesquisador com foco em variabilidade climática e produção agrícola no Nordeste do Brasil.",
            educationTitle: "Formação",
            educationText: "Bacharel em Geografia – Universidade Federal de Pernambuco (UFPE)<br>Mestrando em Geografia – UFPE (2026)",
            experienceTitle: "Experiência",
            experienceText: "Diretor Administrativo – MapGeo Jr. (2023–2024)<br>Iniciação Científica FACEPE – Diagnóstico ambiental da Bacia do Rio Botafogo (PE)",
            skillsTitle: "Habilidades Técnicas",
            contactTitle: "Contato"
        }
    };

    function setLanguage(lang) {

        document.getElementById("subtitle").innerText = translations[lang].subtitle;
        document.getElementById("about-title").innerText = translations[lang].aboutTitle;
        document.getElementById("about-text").innerText = translations[lang].aboutText;
        document.getElementById("education-title").innerText = translations[lang].educationTitle;
        document.getElementById("education-text").innerHTML = translations[lang].educationText;
        document.getElementById("experience-title").innerText = translations[lang].experienceTitle;
        document.getElementById("experience-text").innerHTML = translations[lang].experienceText;
        document.getElementById("skills-title").innerText = translations[lang].skillsTitle;
        document.getElementById("contact-title").innerText = translations[lang].contactTitle;

        if(lang === "pt") {
            cvEn.style.display = "none";
            cvPt.style.display = "inline-block";
        } else {
            cvEn.style.display = "inline-block";
            cvPt.style.display = "none";
        }
    }

    window.setLanguage = setLanguage;

    // Começa em inglês
    setLanguage("en");
}
                          // ANIMAÇÃO AO ROLAR
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
});

