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
projects: [
    {
        title: "Land Cover Classification – Wyoming",
        text: "Land cover mapping and spatial classification using satellite imagery and GIS techniques for environmental analysis.",
        image: "wyoming-cover.jpeg"
    },
    {
        title: "Urban Expansion – Las Vegas Valley",
        text: "Spatial analysis of urban growth patterns using remote sensing and geospatial data processing.",
        image: "las vegas valley.jpeg"
    },
    {
        title: "Water Supply Infrastructure Analysis",
        text: "Spatial assessment of water supply infrastructure and service coverage using GIS tools for territorial planning.",
        image: "agua cobertura.jpeg"
    },
    {
        title: "Banana Production in Pernambuco (2023)",
        text: "Analysis of banana production by municipality in Agreste and Zona da Mata. Includes charts, ranking and interactive map.",
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
                        "Verification of pole datasets and infrastructure grid meshes",
                        "Classification of existing and non-existing assets",
                        "GIS-based quality control and spatial consistency analysis",
                        "Execution of automated geoprocessing tools using Python scripts"
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
                    title: "Scientific Research Scholar (FACEPE)",
                    company: "Environmental Diagnosis – Botafogo River Basin (PE)",
                    period: "",
                    bullets: [
                        "Environmental data collection and spatial analysis",
                        "Remote sensing and land use mapping",
                        "Support in technical reporting and scientific research"
                    ]
                }
            ],

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
projects: [
    {
        title: "Classificação de Uso e Cobertura da Terra – Wyoming",
        text: "Mapeamento de uso e cobertura da terra utilizando imagens de satélite e técnicas de SIG para análise ambiental.",
        image: "wyoming-cover.jpeg"
    },
    {
        title: "Expansão Urbana – Vale de Las Vegas",
        text: "Análise espacial dos padrões de crescimento urbano com sensoriamento remoto e processamento geoespacial.",
        image: "las vegas valley.jpeg"
    },
    {
        title: "Análise da Infraestrutura de Abastecimento de Água",
        text: "Avaliação espacial da infraestrutura de abastecimento e cobertura de serviço utilizando ferramentas SIG.",
        image: "agua cobertura.jpeg"
    },
    {
        title: "Produção de Banana em Pernambuco (2023)",
        text: "Análise da produção de banana por município no Agreste e Zona da Mata. Inclui gráficos, ranking e mapa interativo.",
        image: "banana_hectares.png",
        link: "https://colab.research.google.com/drive/1zcZ5I6uQ3Bq31ussrv-QgrkRmELb9UYD?usp=sharing"
    }
],
            experienceTitle: "Experiência",
            experiences: [
                {
                    title: "Analista de Geoprocessamento (Contrato – PJ)",
                    company: "Companhia de Energia Elétrica – Brasil",
                    period: "Ago 2024 – Atual",
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

    // ===== RENDER ARTICLES =====
    function renderArticles(lang) {
        const container = document.getElementById("articlesContainer");
        container.innerHTML = "";

        translations[lang].articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition";
            card.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <p>${article.publication}</p>
                <a href="${article.link}" target="_blank">Read Full Article</a>
            `;
            container.appendChild(card);
        });

        document.getElementById("articles-title").innerText = translations[lang].articlesTitle;
    }

    // ===== RENDER EXPERIENCE =====
    function renderExperience(lang) {
        const container = document.getElementById("experience-container");
        container.innerHTML = "";

        translations[lang].experiences.forEach(exp => {
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
    }
// ===== RENDER PROJECTS =====
function renderProjects(lang) {
    const container = document.querySelector(".projects-grid");
    container.innerHTML = "";

    translations[lang].projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-card";

        div.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.text}</p>
            ${project.link ? `
                <a href="${project.link}" target="_blank">
                    <button>
                        📊 ${lang === "pt" ? "Abrir notebook interativo" : "Open Interactive Notebook"}
                    </button>
                </a>
            ` : ""}
        `;

        container.appendChild(div);
    });
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
        safeSetText("projects-title", t.projectsTitle);
        safeSetText("experience-title", t.experienceTitle);
        safeSetText("skills-title", t.skillsTitle);
        safeSetText("contact-title", t.contactTitle);

        renderArticles(lang);
        renderExperience(lang);
        renderProjects(lang);

        if (lang === "pt") {
            cvEn.style.display = "none";
            cvPt.style.display = "inline-block";
            toggle.checked = true;
        } else {
            cvEn.style.display = "inline-block";
            cvPt.style.display = "none";
            toggle.checked = false;
        }

        localStorage.setItem("siteLanguage", lang);
    }

    window.setLanguage = setLanguage;

    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage) setLanguage(savedLanguage);
    else setLanguage((navigator.language || navigator.userLanguage).startsWith("pt") ? "pt" : "en");

    if (toggle) toggle.addEventListener("change", function () {
        setLanguage(this.checked ? "pt" : "en");
    });

});
