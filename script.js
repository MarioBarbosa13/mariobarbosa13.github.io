document.addEventListener("DOMContentLoaded", function () {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");

    // Começa mostrando apenas inglês
    cvPt.style.display = "none";

    const translations = {

        en: {
            subtitle: "Geospatial Analyst specialized in Remote Sensing and Environmental Monitoring",

            aboutTitle: "About Me",
            aboutText: "Geospatial Analyst with experience in remote sensing, environmental monitoring and spatial analysis.",

            educationTitle: "Education",
            educationText: "Bachelor in Geography – Federal University of Pernambuco (UFPE)<br>Master's Student in Geography – UFPE (2026)",

            projectsTitle: "Projects",
            project1Title: "Land Cover Classification – Wyoming",
            project1Text: "Land cover mapping using satellite imagery and GIS techniques.",
            project2Title: "Urban Expansion – Las Vegas Valley",
            project2Text: "Spatial analysis of urban growth patterns using remote sensing.",
            project3Title: "Water Supply Infrastructure Analysis",
            project3Text: "Spatial assessment of water supply infrastructure using GIS tools.",

            experienceTitle: "Experience",
            experienceText: "Administrative Director – MapGeo Jr. (2023–2024)",

            skillsTitle: "Technical Skills",
            contactTitle: "Contact"
        },

        pt: {
            subtitle: "Analista de Geoprocessamento especializado em Sensoriamento Remoto",

            aboutTitle: "Sobre Mim",
            aboutText: "Analista em Geoprocessamento com experiência em sensoriamento remoto e análise espacial.",

            educationTitle: "Formação",
            educationText: "Bacharel em Geografia – Universidade Federal de Pernambuco (UFPE)<br>Mestrando em Geografia – UFPE (2026)",

            projectsTitle: "Projetos",
            project1Title: "Classificação de Uso e Cobertura da Terra – Wyoming",
            project1Text: "Mapeamento de uso da terra com imagens de satélite e SIG.",
            project2Title: "Expansão Urbana – Vale de Las Vegas",
            project2Text: "Análise espacial do crescimento urbano com sensoriamento remoto.",
            project3Title: "Análise da Infraestrutura de Abastecimento de Água",
            project3Text: "Avaliação espacial da infraestrutura de abastecimento utilizando SIG.",

            experienceTitle: "Experiência",
            experienceText: "Diretor Administrativo – MapGeo Jr. (2023–2024)",

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

        document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
        document.getElementById("project1-title").innerText = translations[lang].project1Title;
        document.getElementById("project1-text").innerText = translations[lang].project1Text;
        document.getElementById("project2-title").innerText = translations[lang].project2Title;
        document.getElementById("project2-text").innerText = translations[lang].project2Text;
        document.getElementById("project3-title").innerText = translations[lang].project3Title;
        document.getElementById("project3-text").innerText = translations[lang].project3Text;

        document.getElementById("experience-title").innerText = translations[lang].experienceTitle;
        document.getElementById("experience-text").innerHTML = translations[lang].experienceText;

        document.getElementById("skills-title").innerText = translations[lang].skillsTitle;
        document.getElementById("contact-title").innerText = translations[lang].contactTitle;

        if (lang === "pt") {
            cvEn.style.display = "none";
            cvPt.style.display = "inline-block";
        } else {
            cvEn.style.display = "inline-block";
            cvPt.style.display = "none";
        }
    }

    window.setLanguage = setLanguage;

    // Inicia em inglês
    setLanguage("en");

    // ===== MODAL DE IMAGEM =====

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".project-card img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Fechar com ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });

});
