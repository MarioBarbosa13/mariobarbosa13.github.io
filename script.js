document.addEventListener("DOMContentLoaded", function() {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");

    const translations = {
        en: {
            subtitle: "Geospatial Analyst specialized in Remote Sensing, Environmental Monitoring and Spatial Intelligence",
            aboutTitle: "About Me",
            aboutText: "Geospatial Analyst with experience in remote sensing, environmental monitoring and spatial analysis. Experience with land use classification, NDVI, hydrological analysis and GIS modeling. Research focused on climate variability and agricultural production in Northeastern Brazil.",
            educationTitle: "Education",
            educationText: "Bachelor in Geography – Federal University of Pernambuco (UFPE)<br>Master's Student in Geography – UFPE (2026)",
            experienceTitle: "Experience",
            experienceText: "Administrative Director – MapGeo Jr. (2023–2024)<br>Led project coordination and spatial analysis initiatives, supporting environmental and cartographic solutions.<br><br>Scientific Research Scholarship (FACEPE) – Botafogo River Basin Environmental Diagnosis (PE)<br>Conducted land use classification, NDVI analysis and spatial environmental assessment using GIS and remote sensing techniques.",
            skillsTitle: "Technical Skills",
            contactTitle: "Contact"
            const translations = {
    en: {
        subtitle: "Geospatial Analyst specialized in Remote Sensing, Environmental Monitoring and Spatial Intelligence",
        aboutTitle: "About Me",
        aboutText: "...",
        educationTitle: "Education",
        educationText: "...",
        experienceTitle: "Experience",
        experienceText: "...",
        skillsTitle: "Technical Skills",
        contactTitle: "Contact",
        projectsTitle: "Projects",

        project1Title: "Land Cover Classification – Wyoming",
        project1Text: "Land cover mapping and spatial classification using satellite imagery and GIS techniques for environmental analysis.",

        project2Title: "Urban Expansion – Las Vegas Valley (2024)",
        project2Text: "Spatial analysis of urban growth patterns using remote sensing and geospatial data processing.",

        project3Title: "Brazil Water Supply Infrastructure Analysis",
        project3Text: "Spatial assessment of water supply infrastructure and service coverage using GIS tools for territorial planning."
    },

    pt: {
        subtitle: "Analista de Geoprocessamento especializado em Sensoriamento Remoto, Monitoramento Ambiental e Inteligência Espacial",
        aboutTitle: "Sobre Mim",
        aboutText: "...",
        educationTitle: "Formação",
        educationText: "...",
        experienceTitle: "Experiência",
        experienceText: "...",
        skillsTitle: "Habilidades Técnicas",
        contactTitle: "Contato",
        projectsTitle: "Projetos",

        project1Title: "Classificação de Uso e Cobertura da Terra – Wyoming (Estados Unidos)",
        project1Text: "Mapeamento de uso e cobertura da terra com classificação espacial utilizando imagens de satélite e técnicas de SIG para análise ambiental.",

        project2Title: "Expansão Urbana – Vale de Las Vegas (2024)",
        project2Text: "Análise espacial dos padrões de crescimento urbano utilizando sensoriamento remoto e processamento de dados geoespaciais.",

        project3Title: "Análise da Infraestrutura de Abastecimento de Água no Brasil",
        project3Text: "Avaliação espacial da infraestrutura de abastecimento e cobertura de serviços utilizando ferramentas de SIG para planejamento territorial."
    }
};
        },
        pt: {
            subtitle: "Analista de Geoprocessamento especializado em Sensoriamento Remoto, Monitoramento Ambiental e Inteligência Espacial",
            aboutTitle: "Sobre Mim",
            aboutText: "Analista em Geoprocessamento com experiência em sensoriamento remoto, monitoramento ambiental e análise espacial. Atuação em classificação de uso e cobertura do solo, NDVI, análise hidrográfica e modelagem GIS. Pesquisador com foco em variabilidade climática e produção agrícola no Nordeste do Brasil.",
            educationTitle: "Formação",
            educationText: "Bacharel em Geografia – Universidade Federal de Pernambuco (UFPE)<br>Mestrando em Geografia – UFPE (2026)",
            experienceTitle: "Experiência",
            experienceText: "Diretor Administrativo – MapGeo Jr. (2023–2024)<br>Coordenação de projetos e apoio a análises espaciais aplicadas a soluções ambientais e cartográficas.<br><br>Iniciação Científica FACEPE – Diagnóstico Ambiental da Bacia do Rio Botafogo (PE)<br>Realização de classificação de uso e cobertura do solo, análise de NDVI e avaliação ambiental espacial utilizando SIG e sensoriamento remoto.",
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

    // -----------------------------
    // ANIMAÇÃO AO ROLAR
    // -----------------------------

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

