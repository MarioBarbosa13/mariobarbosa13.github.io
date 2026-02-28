document.addEventListener("DOMContentLoaded", function () {

    const cvEn = document.getElementById("cv-en");
    const cvPt = document.getElementById("cv-pt");
    const toggle = document.getElementById("languageToggle");

    // ===== TEXTOS FIXOS =====
    const translations = {
        en: {
            subtitle: "Geospatial Analyst specialized in Remote Sensing and Environmental Monitoring",
            aboutTitle: "About Me",
            aboutText: "Geospatial Analyst specialized in GIS, Remote Sensing and Environmental Data Analysis...",
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
            aboutText: "Analista de Geoprocessamento especializado em SIG...",
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

    // ===== DADOS DINÂMICOS =====
    const translationsData = {
        en: {
            articles: [
                {
                    title: "Analysis of Vegetation Dynamics...",
                    summary: "Study on vegetation and urban expansion...",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],
            projects: [
                {
                    title: "Banana Production in Pernambuco (2023)",
                    text: "Analysis of banana production...",
                    image: "banana_hectares.png",
                    link: "https://colab.research.google.com/drive/1zcZ5I6uQ3Bq31ussrv-QgrkRmELb9UYD?usp=sharing"
                }
            ],
            experiences: [
                {
                    title: "Geospatial Analyst (Contract – PJ)",
                    company: "Electrical Utility Company – Brazil",
                    period: "Aug 2025 – Present",
                    bullets: [
                        "Spatial validation of networks",
                        "GIS-based quality control"
                    ]
                }
            ]
        },
        pt: {
            articles: [
                {
                    title: "A Análise da Dinâmica da Vegetação...",
                    summary: "Estudo sobre vegetação e expansão urbana...",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],
            projects: [
                {
                    title: "Produção de Banana em Pernambuco (2023)",
                    text: "Análise da produção de banana...",
                    image: "banana_hectares.png",
                    link: "https://colab.research.google.com/drive/1zcZ5I6uQ3Bq31ussrv-QgrkRmELb9UYD?usp=sharing"
                }
            ],
            experiences: [
                {
                    title: "Analista de Geoprocessamento (Contrato – PJ)",
                    company: "Companhia de Energia – Brasil",
                    period: "Ago 2024 – Atual",
                    bullets: [
                        "Validação espacial de redes",
                        "Controle de qualidade SIG"
                    ]
                }
            ]
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
            exp.bullets.forEach(b => bulletsHTML += `<li>${b}</li>`);

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
                    <a href="${project.link}" target="_blank" class="project-btn">
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
            if (!el) return;
            isHTML ? el.innerHTML = value : el.innerText = value;
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

    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage) setLanguage(savedLanguage);
    else setLanguage(navigator.language.startsWith("pt") ? "pt" : "en");

    if (toggle) {
        toggle.addEventListener("change", function () {
            setLanguage(this.checked ? "pt" : "en");
        });
    }

});
