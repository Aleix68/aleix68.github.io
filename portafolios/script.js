if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const tabLinks = document.querySelectorAll('.nav-links a, footer a');
const tabPanels = document.querySelectorAll('.tab-panel');
const homePanels = document.querySelectorAll('.home-panel');

function openTab(tabId) {
    tabPanels.forEach(panel => panel.classList.toggle('is-active', panel.id === tabId));
    homePanels.forEach(panel => panel.classList.toggle('is-hidden', Boolean(tabId)));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${tabId}`);
    });
    if (tabId) history.replaceState(null, '', `#${tabId}`);
    else history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
}

tabLinks.forEach(link => {
    link.addEventListener('click', event => {
        const tabId = link.getAttribute('href').slice(1);
        if (tabId === 'top') {
            event.preventDefault();
            openTab(null);
            return;
        }
        if (!document.getElementById(tabId)) return;
        event.preventDefault();
        openTab(tabId);
    });
});

document.querySelectorAll('.brand, .home-link').forEach(homeLink => homeLink.addEventListener('click', event => {
    event.preventDefault();
    openTab(null);
}));

openTab(window.location.hash.slice(1) || null);

const cursor = document.querySelector(".cursor");
const interactiveElements = document.querySelectorAll("a, .project");

window.addEventListener("mousemove", event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
});

interactiveElements.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.style.width = "42px";
        cursor.style.height = "42px";
        cursor.style.background = "rgba(182, 255, 74, .12)";
    });
    element.addEventListener("mouseleave", () => {
        cursor.style.width = "22px";
        cursor.style.height = "22px";
        cursor.style.background = "transparent";
    });
});

const languageButton = document.querySelector(".language-button");
const themeButton = document.querySelector(".theme-button");
const translations = {
    en: {
        ".nav-links a:nth-child(1)": "[ about me ]",
        ".nav-links a:nth-child(2)": "[ projects ]",
        ".nav-links a:nth-child(3)": "[ contact ]",
        ".eyebrow": "<span>01</span> fivem scripts / discord dev",
        ".hero h1": "FiveM & Discord<br><em>made for</em><br><strong>you<span>.</span></strong>",
        ".hero-copy": "I create Discord servers, program bots and develop FiveM scripts that turn ideas into real experiences.",
        ".ticker div": "FIVEM SCRIPTS <span>✳</span> DISCORD SERVERS <span>✳</span> DISCORD BOTS <span>✳</span> FIVEM SCRIPTS <span>✳</span> DISCORD SERVERS <span>✳</span>",
        ".about-section > .section-label": "<span>02</span> who is behind it",
        "#about h2": "Development<br><span>made to measure.</span>",
        "#about p": "I am Góngora, a FiveM script programmer and Discord Dev. I have also worked as staff on other FiveM servers, gaining strong experience in customer support, moderation and general server management. I create Discord servers from scratch, design their structure and develop bots to automate, moderate and grow each community.",
        ".projects-section .section-label": "<span>03</span> things I have built",
        ".project:nth-child(1) .project-meta span:first-child": "01 / fivem",
        ".project:nth-child(2) .project-meta span:first-child": "02 / fivem",
        ".project:nth-child(3) .project-meta span:first-child": "03 / system",
        ".project:nth-child(1) h3": "PAUSE MENU <sup>↗</sup>",
        ".project:nth-child(2) h3": "LOADING SCREEN <sup>↗</sup>",
        ".project:nth-child(3) h3": "MONEY LAUNDERING SYSTEM <sup>↗</sup>",
        ".project:nth-child(1) p": "A clean and functional pause interface to control your experience inside the server.",
        ".project:nth-child(2) p": "A loading screen with music, dynamic images and controls to enter the server in style.",
        ".project:nth-child(3) p": "A complete system to manage operations, locations and laundering processes inside FiveM.",
        ".project-link": "DOWNLOAD <span>↓</span>",
        ".contact-section .section-label": "<span>04</span> open the channel",
        ".contact-section h2": "Do you have<br><em>a project?</em>",
        ".contact-details span": "OPEN MESSAGES / DISCORD",
        "footer a": "BACK TO TOP ↑"
    },
    es: {
        ".nav-links a:nth-child(1)": "[ sobre mí ]",
        ".nav-links a:nth-child(2)": "[ proyectos ]",
        ".nav-links a:nth-child(3)": "[ contacto ]",
        ".eyebrow": "<span>01</span> fivem scripts / discord dev",
        ".hero h1": "FiveM y Discord<br><em>hechos a tu</em><br><strong>medida<span>.</span></strong>",
        ".hero-copy": "Creo servidores de Discord, programo bots y desarrollo scripts FiveM que convierten ideas en experiencias reales.",
        ".ticker div": "FIVEM SCRIPTS <span>✳</span> DISCORD SERVERS <span>✳</span> DISCORD BOTS <span>✳</span> FIVEM SCRIPTS <span>✳</span> DISCORD SERVERS <span>✳</span>",
        ".about-section > .section-label": "<span>02</span> quién está detrás",
        "#about h2": "Desarrollo<br><span>a medida.</span>",
        "#about p": "Soy Góngora, programador de scripts para FiveM y Discord Dev. También he sido staff en otros servidores de FiveM, donde he adquirido mucha experiencia en atención al cliente, moderación y gestión general de servidores. Creo servidores de Discord desde cero, diseño su estructura y desarrollo bots para automatizar, moderar y hacer crecer cada comunidad.",
        ".projects-section .section-label": "<span>03</span> cosas que he construido",
        ".project:nth-child(1) .project-meta span:first-child": "01 / fivem",
        ".project:nth-child(2) .project-meta span:first-child": "02 / fivem",
        ".project:nth-child(3) .project-meta span:first-child": "03 / sistema",
        ".project:nth-child(1) h3": "MENU DE PAUSA <sup>↗</sup>",
        ".project:nth-child(2) h3": "PANTALLA DE CARGA <sup>↗</sup>",
        ".project:nth-child(3) h3": "SISTEMA DE LAVADO DE DINERO <sup>↗</sup>",
        ".project:nth-child(1) p": "Una interfaz de pausa limpia y funcional para controlar tu experiencia dentro del servidor.",
        ".project:nth-child(2) p": "Loading screen con música, imágenes dinámicas y controles para entrar al servidor con estilo.",
        ".project:nth-child(3) p": "Sistema completo para gestionar operaciones, puntos y procesos de lavado dentro de FiveM.",
        ".project-link": "DESCARGAR <span>↓</span>",
        ".contact-section .section-label": "<span>04</span> abre el canal",
        ".contact-section h2": "¿Tienes<br><em>un proyecto?</em>",
        ".contact-details span": "MENSAJES ABIERTOS / DISCORD",
        "footer a": "BACK TO TOP ↑"
    }
};

function setLanguage(language) {
    Object.entries(translations[language]).forEach(([selector, content]) => {
        document.querySelectorAll(selector).forEach(element => element.innerHTML = content);
    });
    languageButton.textContent = language === "es" ? "EN" : "ES";
    languageButton.dataset.language = language === "es" ? "en" : "es";
    languageButton.setAttribute("aria-label", language === "es" ? "Cambiar a inglés" : "Cambiar a español");
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
}

function setTheme(isLight) {
    document.documentElement.classList.toggle("light", isLight);
    themeButton.textContent = isLight ? "☾" : "☼";
    themeButton.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
}

languageButton.addEventListener("click", () => setLanguage(languageButton.dataset.language));
themeButton.addEventListener("click", () => setTheme(!document.documentElement.classList.contains("light")));
setLanguage(localStorage.getItem("portfolio-language") || "es");
setTheme(localStorage.getItem("portfolio-theme") === "light");
