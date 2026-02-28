document.addEventListener("DOMContentLoaded", function () {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");
    const toggle = document.getElementById("languageToggle");

    const translations = {

        en: {
            subtitle: "Geospatial Analyst specialized in Remote Sensing and Environmental Monitoring",
            aboutTitle: "About Me",
            aboutText: "Geospatial Analyst specialized in GIS, Remote Sensing and Environmental Data Analysis.",
            educationTitle: "Education",
            educationText: "Bachelor in Geography – UFPE<br>Master's Student in Geography – UFPE (2026)",

            readArticle: "Read Full Article",
            openNotebook: "Open Interactive Notebook",

            articlesTitle: "Articles",
            articles: [
                {
                    title: "Analysis of Vegetation Dynamics and Urban Expansion in Tamandaré–PE",
                    summary: "Remote sensing analysis of land cover and urban growth.",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],

            projectsTitle: "Projects",
            projects: [
                {
                    title: "Banana Production in Pernambuco (2023)",
                    text: "Municipal production analysis with interactive map.",
                    image: "banana_hectares.png",
                    link: "https://colab.research.google.com/drive/1zcZ5I6uQ3Bq31ussrv-QgrkRmELb9UYD?usp=sharing"
                }
            ],

            experienceTitle: "Experience",
            experiences: [
                {
                    title: "Geospatial Analyst (Contract – PJ)",
                    company: "Electrical Utility Company – Brazil",
                    period: "Aug 2025 – Present",
                    bullets: [
                        "Spatial validation using QGIS",
                        "Infrastructure dataset verification",
                        "Python geoprocessing automation"
                    ]
                }
            ],

            skillsTitle: "Technical Skills",
            contactTitle: "Contact"
        },

        pt: {
            subtitle: "Analista de Geoprocessamento especializado em Sensoriamento Remoto",
            aboutTitle: "Sobre Mim",
            aboutText: "Analista de Geoprocessamento especializado em SIG e análise ambiental.",
            educationTitle: "Formação",
            educationText: "Bacharel em Geografia – UFPE<br>Mestrando em Geografia – UFPE (2026)",

            readArticle: "Ler Artigo Completo",
            openNotebook: "Abrir Notebook Interativo",

            articlesTitle: "Artigos",
            articles: [
                {
                    title: "Análise da Dinâmica da Vegetação e Expansão Urbana em Tamandaré–PE",
                    summary: "Análise com sensoriamento remoto.",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],

            projectsTitle: "Projetos",
            projects: [
                {
                    title: "Produção de Banana em Pernambuco (2023)",
                    text: "Análise municipal com mapa interativo.",
                    image: "banana_hectares.png",
                    link: "https://colab.research.google.com/drive/1zcZ5I6uQ3Bq31ussrv-QgrkRmELb9UYD?usp=sharing"
                }
            ],

            experienceTitle: "Experiência",
            experiences: [
                {
                    title: "Analista de Geoprocessamento (Contrato – PJ)",
                    company: "Companhia de Energia Elétrica – Brasil",
                    period: "Ago 2025 – Atual",
                    bullets: [
                        "Validação espacial com QGIS",
                        "Verificação de infraestrutura",
                        "Automação com Python"
                    ]
                }
            ],

            skillsTitle: "Habilidades Técnicas",
            contactTitle: "Contato"
        }
    };

    function renderArticles(lang) {
        const container = document.getElementById("articlesContainer");
        if (!container) return;
        container.innerHTML = "";

        translations[lang].articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "article-card";

            card.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <p>${article.publication}</p>
                <a href="${article.link}" target="_blank">
                    ${translations[lang].readArticle}
                </a>
            `;

            container.appendChild(card);
        });

        document.getElementById("articles-title").innerText = translations[lang].articlesTitle;
    }

    function renderProjects(lang) {
        const container = document.querySelector(".projects-grid");
        if (!container) return;
        container.innerHTML = "";

        translations[lang].projects.forEach(project => {
            const div = document.createElement("div");
            div.className = "project-card";

            div.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.link ? `
                    <a href="${project.link}" target="_blank" class="project-btn">
                        📊 ${translations[lang].openNotebook}
                    </a>
                ` : ""}
            `;

            container.appendChild(div);
        });

        document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
    }

    function renderExperience(lang) {
        const container = document.getElementById("experience-container");
        if (!container) return;
        container.innerHTML = "";

        translations[lang].experiences.forEach(exp => {
            const div = document.createElement("div");
            div.className = "experience-item";

            let bullets = "";
            exp.bullets.forEach(b => bullets += `<li>${b}</li>`);

            div.innerHTML = `
                <p>
                    <strong>${exp.title}</strong><br>
                    ${exp.company}<br>
                    ${exp.period}
                </p>
                <ul>${bullets}</ul>
            `;

            container.appendChild(div);
        });

        document.getElementById("experience-title").innerText = translations[lang].experienceTitle;
    }

    function setLanguage(lang) {

        const t = translations[lang];

        document.getElementById("subtitle").innerText = t.subtitle;
        document.getElementById("about-title").innerText = t.aboutTitle;
        document.getElementById("about-text").innerText = t.aboutText;
        document.getElementById("education-title").innerText = t.educationTitle;
        document.getElementById("education-text").innerHTML = t.educationText;
        document.getElementById("skills-title").innerText = t.skillsTitle;
        document.getElementById("contact-title").innerText = t.contactTitle;

        renderArticles(lang);
        renderProjects(lang);
        renderExperience(lang);

        // controle dos currículos
        if (lang === "pt") {
            if (cvEn) cvEn.style.display = "none";
            if (cvPt) cvPt.style.display = "inline-block";
            if (toggle) toggle.checked = true;
        } else {
            if (cvEn) cvEn.style.display = "inline-block";
            if (cvPt) cvPt.style.display = "none";
            if (toggle) toggle.checked = false;
        }

        localStorage.setItem("siteLanguage", lang);
    }

    const savedLanguage = localStorage.getItem("siteLanguage");
    setLanguage(savedLanguage || (navigator.language.startsWith("pt") ? "pt" : "en"));

    if (toggle) {
        toggle.addEventListener("change", function () {
            setLanguage(this.checked ? "pt" : "en");
        });
    }

});
