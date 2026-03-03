// script.js
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
            education: [
                {
                    title: "Bachelor in Geography",
                    institution: "Federal University of Pernambuco",
                    period: "2021 – 2025"
                },
                {
                    title: "Master's Student in Geography",
                    institution: "Federal University of Pernambuco",
                    period: "2026 – Present"
                }
            ],
            readArticle: "Read Full Article",
            openNotebook: "Open Interactive Notebook",
            articlesTitle: "Articles",
            articles: [
    {
        title: "Vegetation Dynamics and Urban Expansion in Tamandaré–PE",
        summary: "Remote sensing based analysis.",
        publication: "Cadernos de Geociências – UFBA, 2025",
        link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
    }
],
            projectsTitle: "Projects",
            projects: [
    {
        title: "Land Cover Classification – Wyoming (2024)",
        text: "Land cover mapping and spatial classification using satellite imagery and GIS techniques for environmental analysis."
    },
    {
        title: "Urban Expansion – Las Vegas Valley (2024)",
        text: "Spatial analysis of urban growth patterns using remote sensing and geospatial data processing."
    },
    {
        title: "Water Supply Infrastructure Analysis in Brazil (2023)",
        text: "Spatial assessment of water supply infrastructure and service coverage using GIS tools for territorial planning."
    },
    {
        title: "Banana Production in Pernambuco (2023)",
        text: "Analysis of banana production by municipality in Agreste and Zona da Mata regions. Includes charts, ranking and interactive map."
    }
],
            experienceTitle: "Experience",
            experiences: [
    {
        title: "Geoprocessing Analyst (Contract – PJ)",
        company: "Electric Energy Company – Brazil",
        period: "Aug 2025 – Present",
        bullets: [
            "Spatial validation of electrical distribution networks using QGIS",
            "Verification of pole databases and infrastructure grids",
            "Classification of existing and non-existing assets",
            "Spatial quality control and consistency analysis",
            "Execution of automated geoprocessing tools with Python scripts"
        ]
    },
    {
        title: "Administrative Director",
        company: "MapGeo Jr.",
        period: "2023 – 2024",
        bullets: [
            "Project coordination and internal management",
            "Support in GIS and spatial analysis projects",
            "Team organization and workflow supervision"
        ]
    },
    {
        title: "Scientific Research Fellow (FACEPE)",
        company: "Environmental Diagnosis – Botafogo River Basin (PE)",
        period: "",
        bullets: [
            "Environmental data collection and spatial analysis",
            "Remote sensing and land use mapping",
            "Technical report preparation and scientific research support"
        ]
    }
],
            skillsTitle: "Technical Skills",
            contactTitle: "Contact"
        },
        pt: {
            subtitle: "Analista de Geoprocessamento especializado em Sensoriamento Remoto",
            aboutTitle: "Sobre Mim",
            aboutText: "Analista de Geoprocessamento especializado em SIG, Sensoriamento Remoto e Análise Ambiental. Habilidades em modelagem espacial, classificação de uso e cobertura do solo e interpretação de imagens de satélite. Focado em variabilidade climática, monitoramento ambiental e planejamento territorial.",
            educationTitle: "Formação",
            education: [
                {
                    title: "Bacharel em Geografia",
                    institution: "Universidade Federal de Pernambuco",
                    period: "2021 – 2025"
                },
                {
                    title: "Mestrando em Geografia",
                    institution: "Universidade Federal de Pernambuco",
                    period: "2026 – Atual"
                }
            ],
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
        title: "Classificação de Uso e Cobertura do Solo – Wyoming (2024)",
        text: "Mapeamento de uso e cobertura do solo utilizando imagens de satélite e técnicas de SIG para análise ambiental."
    },
    {
        title: "Expansão Urbana – Las Vegas Valley (2024)",
        text: "Análise espacial do crescimento urbano utilizando sensoriamento remoto e processamento de dados geoespaciais."
    },
    {
        title: "Análise da Infraestrutura de Abastecimento de Água no Brasil (2023)",
        text: "Avaliação espacial da infraestrutura de abastecimento e cobertura dos serviços utilizando ferramentas de SIG."
    },
    {
        title: "Produção de Banana em Pernambuco (2023)",
        text: "Análise da produção de banana por município no Agreste e Zona da Mata. Inclui gráficos, ranking e mapa interativo."
    }
],
            experienceTitle: "Experiência",
            experiences: [
    {
        title: "Analista de Geoprocessamento (Contrato – PJ)",
        company: "Companhia de Energia Elétrica – Brasil",
        period: "Ago 2025 – Atual",
        bullets: [
            "Validação espacial de redes de distribuição elétrica utilizando QGIS",
            "Verificação de bases de postes e malhas de infraestrutura",
            "Classificação de ativos existentes e inexistentes",
            "Controle de qualidade espacial e análise de consistência",
            "Execução de ferramentas automatizadas de geoprocessamento com scripts em Python"
        ]
    },
    {
        title: "Diretor Administrativo",
        company: "MapGeo Jr.",
        period: "2023 – 2024",
        bullets: [
            "Coordenação de projetos e gestão interna",
            "Apoio em projetos de SIG e análise espacial",
            "Organização da equipe e supervisão de fluxos de trabalho"
        ]
    },
    {
        title: "Bolsista de Iniciação Científica (FACEPE)",
        company: "Diagnóstico Ambiental – Bacia do Rio Botafogo (PE)",
        period: "",
        bullets: [
            "Coleta de dados ambientais e análise espacial",
            "Sensoriamento remoto e mapeamento de uso do solo",
            "Apoio na elaboração de relatórios técnicos e pesquisa científica"
        ]
    }
],
            skillsTitle: "Habilidades Técnicas",
            contactTitle: "Contato"
        }
    };

    // ===============================
    // RENDER EDUCATION
    // ===============================
    function renderEducation(lang) {
        const container = document.querySelector(".education-timeline");
        if (!container) return;

        container.innerHTML = "";

        translations[lang].education.forEach(edu => {
            const div = document.createElement("div");
            div.className = "timeline-item";
            div.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${edu.title}</h3>
                    <p>${edu.institution} (${edu.period})</p>
                </div>
            `;
            container.appendChild(div);
        });

        const titleEl = document.getElementById("education-title");
        if (titleEl) titleEl.innerText = translations[lang].educationTitle;
    }

    // ===============================
    // SET LANGUAGE
    // ===============================
    function setLanguage(lang) {
        const t = translations[lang];

        const subtitleEl = document.getElementById("subtitle");
        if (subtitleEl) subtitleEl.innerText = t.subtitle;

        const aboutTitleEl = document.getElementById("about-title");
        if (aboutTitleEl) aboutTitleEl.innerText = t.aboutTitle;

        const aboutTextEl = document.getElementById("about-text");
        if (aboutTextEl) aboutTextEl.innerHTML = t.aboutText;

        const skillsTitleEl = document.getElementById("skills-title");
        if (skillsTitleEl) skillsTitleEl.innerText = t.skillsTitle;

        const contactTitleEl = document.getElementById("contact-title");
        if (contactTitleEl) contactTitleEl.innerText = t.contactTitle;

        const articlesTitleEl = document.getElementById("articles-title");
        if (articlesTitleEl) articlesTitleEl.innerText = t.articlesTitle;

        const projectsTitleEl = document.getElementById("projects-title");
        if (projectsTitleEl) projectsTitleEl.innerText = t.projectsTitle;

        const experienceTitleEl = document.getElementById("experience-title");
        if (experienceTitleEl) experienceTitleEl.innerText = t.experienceTitle;

        renderEducation(lang);
        renderProjects(lang);
        renderArticles(lang);
        renderExperience(lang);
        // CV toggle
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

function renderProjects(lang) {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {
        const title = card.querySelector("h3");
        const text = card.querySelector("p");

        if (translations[lang].projects[index]) {
            title.textContent = translations[lang].projects[index].title;
            text.textContent = translations[lang].projects[index].text;
        }
    });
}
    function renderArticles(lang) {
    const container = document.getElementById("articlesContainer");
    if (!container) return;

    container.innerHTML = "";

    translations[lang].articles.forEach(article => {
        const div = document.createElement("div");
        div.className = "article-card";

        div.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <p><em>${article.publication}</em></p>
            <a href="${article.link}" target="_blank" class="project-btn">
                ${translations[lang].readArticle}
            </a>
        `;

        container.appendChild(div);
    });
}
    function renderExperience(lang) {
    const container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = "";

    translations[lang].experiences.forEach(exp => {
        const div = document.createElement("div");
        div.className = "experience-item";

        let bulletsHTML = "";
        if (exp.bullets && exp.bullets.length > 0) {
            bulletsHTML = "<ul>" + 
                exp.bullets.map(b => `<li>${b}</li>`).join("") +
                "</ul>";
        }

        div.innerHTML = `
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong> ${exp.period ? `| ${exp.period}` : ""}</p>
            ${bulletsHTML}
        `;

        container.appendChild(div);
    });
}
    // ===============================
    // INIT LANGUAGE
    // ===============================
    const savedLanguage = localStorage.getItem("siteLanguage");
    const defaultLang = savedLanguage || (navigator.language.startsWith("pt") ? "pt" : "en");
    setLanguage(defaultLang);

    if (toggle) {
        toggle.addEventListener("change", function () {
            setLanguage(this.checked ? "pt" : "en");
        });
    }

    // ===============================
    // MODAL ZOOM
    // ===============================
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = modal ? modal.querySelector(".close") : null;

    const projectsGrid = document.querySelector(".projects-grid");
    if (projectsGrid && modal && modalImg && closeModal) {
        projectsGrid.addEventListener("click", function (e) {
            if (e.target.tagName === "IMG") {
                modal.style.display = "block";
                modalImg.src = e.target.src;
                modalImg.alt = e.target.alt;
            }
        });

        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) modal.style.display = "none";
        });
    }

});
