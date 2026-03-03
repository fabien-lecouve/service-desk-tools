//// IMPORT ////
import { fetchJSONData, element } from "../utils/index.js";
import { getProjectId } from "../core/store.js";

console.log(getProjectId());

//// CONSTANTES POUR LES BOUTONS DU HEADER ////
const lacoste = document.getElementById('lacoste');
const urgo = document.getElementById('urgo');
const fr = document.getElementById('fr');
const en = document.getElementById('en');

const brandButtons = [lacoste, urgo];
const langButtons = [fr, en];

let currentProject = await fetchJSONData(`./js/json/${getProjectId()}.json`);
console.log(currentProject);

const courtesies = {
    salutation: { fr: "Bonjour,\n\n", en: "Hello,\n\n" },
    closing: { fr: "\n\nCordialement,", en: "\n\nBest regards," }
};


const signatures = {
    lacoste:
    {
        fr: "\nSupport informatique Lacoste\n+33 1 44 58 12 99",
        en: "\nLacoste IT support\n+33 1 44 58 12 99"
    },
    urgo:
    {
        fr: "\nSOS URGO\nSupport & Assistance IT\nURGO Medical And Healthcare\nPortail : https://sos.urgo.groupe.priv/ *\n*Disponible 24/7\nTéléphone : +33 (0)3 80 44 26 55 ou 1000**\n**Du lundi au vendredi, de 6h à 20h",
        en: "\nSOS URGO\nIT Support & Assistance\nURGO Medical And Healthcare\nPortal: https://sos.urgo.groupe.priv/ *\n*Available 24/7\nPhone : +33 (0)3 80 44 26 55 ou 1000**\n**Monday to Friday, 6 AM - 8 PM (Paris time)"
    }
};


//// VARIABLES DE STOCKAGE ////
let brandSelected = null;
let langSelected = null;

//// HEADER ////
function buildProjectButtons()

//// DOM ////
function buildDOMProject(project) {
    const main = document.getElementById("quick-messages");

    if (!project) return;

    main.innerHTML = "";

    for (const [categoryId, category] of Object.entries(project.categories)) {
        const section = element("section", { id: categoryId, class: "section" });
        const h2 = element("h2", {}, category.label);
        const div1 = element("div", { class: "section__notes" });

        for (const [subId, sub] of Object.entries(category.subcategories)) {
            const div2 = element("div", { id: subId });
            const h3 = element("h3", {}, sub.label);
            const div3 = element("div", {});

            sub.buttons.forEach(button => {
                const btn = element(
                    "button",
                    { type: "button", value: button.slug },
                    button.name
                );

                if (button.type === "wn") {
                    btn.classList.add("wn");
                }

                div3.append(btn);
            });

            div2.append(h3, div3);
            div1.append(div2);
        }

        section.append(h2, div1);
        main.append(section);
    }
}

//// UI HELPERS ////
function toggleActive(button, group) {
    group.forEach(btn => { btn.classList.remove('active'); btn.classList.add('inactive'); });
    button.classList.remove('inactive'); button.classList.add('active');
}

function activateButton(e) {
    const target = e.target;
    if (brandButtons.includes(target)) { toggleActive(target, brandButtons); brandSelected = target.id; }
    else if (langButtons.includes(target)) { toggleActive(target, langButtons); langSelected = target.id; }
}

function initButtons() {
    toggleActive(lacoste, brandButtons); brandSelected = 'lacoste';
    toggleActive(fr, langButtons); langSelected = 'fr';
}

[...brandButtons, ...langButtons].forEach(btn => btn.addEventListener('click', activateButton));
window.addEventListener('DOMContentLoaded', initButtons);

//// UTILS ////
function findNote(slug) {
    return notes.find(n => n.slug === slug) || null;
}

function buildMessage(slug) {
    if (!langSelected || !brandSelected) return null;

    const note = findNote(slug);
    if (!note) return null;

    const salutation = courtesies.salutation[langSelected];
    const body = note.translations?.[langSelected];
    const closing = courtesies.closing[langSelected];
    const signature = signatures[brandSelected]?.[langSelected];

    if (!salutation || !body || !closing || !signature) return null;

    if (!note.type) {
        return salutation + body + closing + signature;
    }

    if (note.type === "esc") {
        return salutation + body + closing;
    }

    return body;
}

// Fallback si Clipboard API indisponible
function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.top = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { console.error(e); }
    document.body.removeChild(ta);
}

function copyText(text) {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    legacyCopy(text); return Promise.resolve();
}

//// COPIE (délégation d’événement sur <main>) ////
document.querySelector('main').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const slug = btn.value;
    if (!slug) return;

    const content = buildMessage(slug);
    if (!content) {
        console.warn('Message incomplet (slug/langue/marque manquants).');
        return;
    }

    copyText(content)
        .then(() => {
            console.log(`✅ Copié : ${slug} (${langSelected} / ${brandSelected})`);
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 300);
        })
        .catch(err => console.error('❌ Erreur de copie :', err));
});



//// CODE ////
// buildDOMProject(currentProject);
