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
            readArticle: "Read Full Article",

            projectsTitle: "Projects",
            openNotebook: "Open Interactive Notebook",

            experienceTitle: "Experience",
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
            readArticle: "Ler Artigo Completo",

            projectsTitle: "Projetos",
            openNotebook: "Abrir Notebook Interativo",

            experienceTitle: "Experiência",
            skillsTitle: "Habilidades Técnicas",
            contactTitle: "Contato"
        }
    };

    // ===== RENDER ARTICLES =====
    function renderArticles(lang) {
        const container = document.getElementById("articlesContainer");
        if (!container) return;

        container.innerHTML = "";

        translationsData[lang].articles.forEach(article => {
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

    // ===== RENDER EXPERIENCE =====
    function renderExperience(lang) {
        const container = document.getElementById("experience-container");
        if (!container) return;

        container.innerHTML = "";

        translationsData[lang].experiences.forEach(exp => {
            const div = document.createElement("div");
            div.className = "experience-item";

            let bulletsHTML = "";
            exp.bullets.forEach(b => {
                bulletsHTML += `<li>${b}</li>`;
            });

            div.innerHTML = `
                <p>
                    <strong>${exp.title}</strong><br>
                    ${exp.company}<br>
                    ${exp.period}
                </p>
                <ul>${bulletsHTML}</ul>
            `;

            container.appendChild(div);
        });

        document.getElementById("experience-title").innerText = translations[lang].experienceTitle;
    }

    // ===== RENDER PROJECTS =====
    function renderProjects(lang) {
        const container = document.querySelector(".projects-grid");
        if (!container) return;

        container.innerHTML = "";

        translationsData[lang].projects.forEach(project => {
            const div = document.createElement("div");
            div.className = "project-card";

            div.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.link ? `
                    <a href="${project.link}" 
                       target="_blank" 
                       class="project-btn">
                       📊 ${translations[lang].openNotebook}
                    </a>
                ` : ""}
            `;

            container.appendChild(div);
        });

        document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
    }

    // ===== SET LANGUAGE =====
    function setLanguage(lang) {

        const t = translations[lang];

        function safeSetText(id, value, isHTML = false) {
            const el = document.getElementById(id);
            if (el) {
                if (isHTML) el.innerHTML = value;
                else el.innerText = value;
            }
        }

        safeSetText("subtitle", t.subtitle);
        safeSetText("about-title", t.aboutTitle);
        safeSetText("about-text", t.aboutText);
        safeSetText("education-title", t.educationTitle);
        safeSetText("education-text", t.educationText, true);
        safeSetText("skills-title", t.skillsTitle);
        safeSetText("contact-title", t.contactTitle);

        renderArticles(lang);
        renderExperience(lang);
        renderProjects(lang);

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

    window.setLanguage = setLanguage;

    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage) setLanguage(savedLanguage);
    else setLanguage((navigator.language || navigator.userLanguage).startsWith("pt") ? "pt" : "en");

    if (toggle) {
        toggle.addEventListener("change", function () {
            setLanguage(this.checked ? "pt" : "en");
        });
    }

});
