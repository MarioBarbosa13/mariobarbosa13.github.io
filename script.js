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
            projectsTitle: "Projects",
            experienceTitle: "Experience",
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
            projectsTitle: "Projetos",
            experienceTitle: "Experiência",
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
