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
                    title: "Analysis of Vegetation Dynamics and Urban Expansion in Tamandaré–PE",
                    summary: "Remote sensing analysis of land cover and urban growth.",
                    publication: "Cadernos de Geociências – UFBA, 2025",
                    link: "https://periodicos.ufba.br/index.php/cadgeoc/article/view/68812"
                }
            ],
            projectsTitle: "Projects",
            projects: [
                {
                    title: "Land Cover Classification – Wyoming (2024)",
                    text: "Land cover mapping and spatial classification using satellite imagery and GIS techniques for environmental analysis.",
                    image: "wyoming-cover.jpeg",
                    link: ""
                },
                {
                    title: "Urban Expansion – Las Vegas Valley (2024)",
                    text: "Spatial analysis of urban growth patterns using remote sensing and geospatial data processing.",
                    image: "las vegas valley.jpeg",
                    link: ""
                },
                {
                    title: "Water Supply Infrastructure Analysis in Brazil (2023)",
                    text: "Spatial assessment of water supply infrastructure and service coverage using GIS tools for territorial planning.",
                    image: "agua cobertura.jpeg",
                    link: ""
                },
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
                        "Spatial validation of electrical distribution networks using QGIS",
                        "Verification of poles and infrastructure datasets",
                        "Classification of existing and missing assets",
                        "Spatial quality control and consistency analysis",
                        "Execution of automated geoprocessing tools with Python scripts"
                    ]
                },
                {
                    title: "Administrative Director",
                    company: "MapGeo Jr.",
                    period: "2023 – 2024",
                    bullets: [
                        "Coordination of projects and internal management",
                        "Support in GIS projects and spatial analysis",
                        "Team organization and workflow supervision"
                    ]
                },
                {
                    title: "Undergraduate Research Fellow (FACEPE)",
                    company: "Environmental Diagnosis – Botafogo River Basin (PE)",
                    period: "",
                    bullets: [
                        "Environmental data collection and spatial analysis",
                        "Remote sensing and land use mapping",
                        "Support in technical reports and scientific research"
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
                    title: "Classificação de Cobertura do Solo – Wyoming",
                    text: "Mapeamento e classificação de cobertura do solo usando imagens de satélite e GIS para análise ambiental.",
                    image: "wyoming-cover.jpeg",
                    link: ""
                },
                {
                    title: "Expansão Urbana – Vale de Las Vegas",
                    text: "Análise espacial do crescimento urbano usando sensoriamento remoto e dados geoespaciais.",
                    image: "las vegas valley.jpeg",
                    link: ""
                },
                {
                    title: "Análise de Infraestrutura de Abastecimento de Água",
                    text: "Avaliação espacial da infraestrutura e cobertura de serviços utilizando ferramentas GIS para planejamento territorial.",
                    image: "agua cobertura.jpeg",
                    link: ""
                },
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
    // Funções de renderização
    // ===============================
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
                <a href="${article.link}" target="_blank">${translations[lang].readArticle}</a>
            `;
            container.appendChild(card);
        });
        const articlesTitleEl = document.getElementById("articles-title");
        if (articlesTitleEl) articlesTitleEl.innerText = translations[lang].articlesTitle;
    }

    function renderProjects(lang) {
        const container = document.querySelector(".projects-grid");
        if (!container) return;
        container.innerHTML = "";
        translations[lang].projects.forEach(project => {
            const div = document.createElement("div");
            div.className = "project-card";
            div.innerHTML = `
                <img src="${project.image}" alt="${project.title}" style="cursor:pointer;">
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                ${project.link ? `<a href="${project.link}" target="_blank" class="project-btn">📊 ${translations[lang].openNotebook}</a>` : ""}
            `;
            container.appendChild(div);
        });
        const projectsTitleEl = document.getElementById("projects-title");
        if (projectsTitleEl) projectsTitleEl.innerText = translations[lang].projectsTitle;
    }

    function renderExperience(lang) {
        const container = document.getElementById("experience-container");
        if (!container) return;
        container.innerHTML = "";
        translations[lang].experiences.forEach(exp => {
            const div = document.createElement("div");
            div.className = "experience-item";
            let bullets = "";
            if(exp.bullets && exp.bullets.length) {
                exp.bullets.forEach(b => bullets += `<li>${b}</li>`);
            }
            div.innerHTML = `
                <p><strong>${exp.title}</strong><br>${exp.company}<br>${exp.period}</p>
                <ul>${bullets}</ul>
            `;
            container.appendChild(div);
        });
        const expTitleEl = document.getElementById("experience-title");
        if (expTitleEl) expTitleEl.innerText = translations[lang].experienceTitle;
    }
function renderEducation(lang) {
    const container = document.querySelector(".education-timeline");
    if(!container) return;

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
    if(titleEl) titleEl.innerText = translations[lang].educationTitle;
}
    // ===============================
    // Função para definir idioma
    // ===============================
    function setLanguage(lang) {
        const t = translations[lang];

        const subtitleEl = document.getElementById("subtitle");
        if(subtitleEl) subtitleEl.innerText = t.subtitle;

        const aboutTitleEl = document.getElementById("about-title");
        if(aboutTitleEl) aboutTitleEl.innerText = t.aboutTitle;

        const aboutTextEl = document.getElementById("about-text");
        if(aboutTextEl) aboutTextEl.innerHTML = t.aboutText;

        const educationTitleEl = document.getElementById("education-title");
        if(educationTitleEl) educationTitleEl.innerText = t.educationTitle;

        const educationTextEl = document.getElementById("education-text");
        if(educationTextEl) educationTextEl.innerHTML = t.educationText;

        const skillsTitleEl = document.getElementById("skills-title");
        if(skillsTitleEl) skillsTitleEl.innerText = t.skillsTitle;

        const contactTitleEl = document.getElementById("contact-title");
        if(contactTitleEl) contactTitleEl.innerText = t.contactTitle;

        renderArticles(lang);
        renderProjects(lang);
        renderExperience(lang);

        // CV toggle
        if(lang === "pt") {
            if(cvEn) cvEn.style.display = "none";
            if(cvPt) cvPt.style.display = "inline-block";
            if(toggle) toggle.checked = true;
        } else {
            if(cvEn) cvEn.style.display = "inline-block";
            if(cvPt) cvPt.style.display = "none";
            if(toggle) toggle.checked = false;
        }

        localStorage.setItem("siteLanguage", lang);
    }

    // Inicializa idioma
    const savedLanguage = localStorage.getItem("siteLanguage");
    setLanguage(savedLanguage || (navigator.language.startsWith("pt") ? "pt" : "en"));

    // Toggle de idioma
    if(toggle) {
        toggle.addEventListener("change", function () {
            setLanguage(this.checked ? "pt" : "en");
        });
    }

    // ===============================
    // Modal para zoom das imagens dos projetos
    // ===============================
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = modal ? modal.querySelector(".close") : null;

    const projectsGrid = document.querySelector(".projects-grid");
    if(projectsGrid && modal && modalImg && closeModal) {
        projectsGrid.addEventListener("click", function(e){
            if(e.target.tagName === "IMG") {
                modal.style.display = "block";
                modalImg.src = e.target.src;
                modalImg.alt = e.target.alt;
            }
        });

        closeModal.addEventListener("click", function(){
            modal.style.display = "none";
        });

        modal.addEventListener("click", function(e){
            if(e.target === modal) modal.style.display = "none";
        });
    }

});
