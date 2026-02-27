document.addEventListener("DOMContentLoaded", function () {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");
    const toggle = document.getElementById("languageToggle");

    const translations = {

        en: {
            subtitle: "Geospatial Analyst specialized in Remote Sensing and Environmental Monitoring",

            aboutTitle: "About Me",
            aboutText: "Geospatial Analyst specialized in GIS, Remote Sensing and Environmental Data Analysis. Skilled in spatial modeling, land use classification and satellite imagery interpretation. Focused on climate variability, environmental monitoring and territorial planning.",

            educationTitle: "Education",
            educationText: "Bachelor in Geography – Federal University of Pernambuco (UFPE)<br>Master's Student in Geography – UFPE (2026)",

            articlesTitle: "Articles",
            articles: [
                {
                    title: "Analysis of Vegetation Dynamics and Urban Expansion in Tamandaré–PE Using Remote Sensing",
                    summary: "This study examines vegetation dynamics and urban expansion in Tamandaré–PE using remote sensing. Satellite imagery analysis highlights land cover changes and urban growth patterns, providing insights for sustainable planning and environmental monitoring.",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],

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
            aboutText: "Analista de Geoprocessamento especializado em SIG, Sensoriamento Remoto e Análise de Dados Ambientais. Experiência em modelagem espacial, classificação de uso e cobertura do solo e interpretação de imagens de satélite. Atuação voltada à variabilidade climática, monitoramento ambiental e planejamento territorial.",

            educationTitle: "Formação",
            educationText: "Bacharel em Geografia – Universidade Federal de Pernambuco (UFPE)<br>Mestrando em Geografia – UFPE (2026)",

            articlesTitle: "Artigos",
            articles: [
                {
                    title: "A Análise da Dinâmica da Vegetação e da Expansão Urbana em Tamandaré–PE por Meio do Sensoriamento Remoto",
                    summary: "Este estudo analisa a dinâmica da vegetação e a expansão urbana em Tamandaré–PE por meio de sensoriamento remoto. A análise de imagens de satélite evidencia mudanças na cobertura do solo e padrões de crescimento urbano, fornecendo informações para planejamento sustentável e monitoramento ambiental.",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],

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

    // Função para renderizar artigos
    function renderArticles(lang) {
        const container = document.getElementById("articlesContainer");
        container.innerHTML = ""; // limpa antes de renderizar

        const articles = translations[lang].articles;

        articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition";

            card.innerHTML = `
                <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
                <p class="text-gray-700 mb-2">${article.summary}</p>
                <p class="text-sm text-gray-500 mb-4">${article.publication}</p>
                <a href="${article.link}" class="text-blue-600 hover:underline font-medium" target="_blank">Read Full Article</a>
            `;

            container.appendChild(card);
        });

        document.getElementById("articles-title").innerText = translations[lang].articlesTitle;
    }

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

        // Renderiza artigos
        renderArticles(lang);

        if (lang === "pt") {
            cvEn.style.display = "none";
            cvPt.style.display = "inline-block";
            toggle.checked = true;
        } else {
            cvEn.style.display = "inline-block";
            cvPt.style.display = "none";
            toggle.checked = false;
        }

        // Salva escolha
        localStorage.setItem("siteLanguage", lang);
    }

    window.setLanguage = setLanguage;

    // ===== DETECTA IDIOMA =====
    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage) {
        setLanguage(savedLanguage);
    } else {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith("pt")) {
            setLanguage("pt");
        } else {
            setLanguage("en");
        }
    }

    // ===== TOGGLE =====
    if (toggle) {
        toggle.addEventListener("change", function () {
            if (this.checked) {
                setLanguage("pt");
            } else {
                setLanguage("en");
            }
        });
    }

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

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });

});
