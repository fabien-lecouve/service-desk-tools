//// IMPORT ////
import { fetchJSONData, element } from "../utils/index.js";
import { getGroup, setProjectId, setLanguageId, setProjectLanguages, getProjectSlug, removeProjectSlug } from "../core/store.js";
import { initProject } from "../data/loader.js";
import { selectMessageBySlug } from "../ui/copy.js";
import { buildMessagesButtons } from "../ui/render.js";

//// CONSTANTES ////
const projects = getGroup();
const languages = await fetchJSONData(`./js/json/languages.json`);
const initProjectId = projects[0].id;

//// FUNCTIONS ////
function buildProjectsButtons() {
    const div = document.getElementById('header__projects');
    div.innerHTML = '';

    projects.forEach(project => {
        const button = element('button', { value: project.id, id: project.id }, project.label);
        button.addEventListener('click', () => selectProject(project.id));

        div.append(button);
    });
}

async function selectProject(projectId) {
    setProjectId(projectId);
    removeProjectSlug();

    const div = document.getElementById('header__projects');
    const buttons = Array.from(div.children);

    toggleActive(buttons, projectId);
    buildLanguagesButtons(projectId);
    await initProject(projectId);
    buildMessagesButtons();
}

function buildLanguagesButtons(projectId) {
    const project = projects.find(p => p.id === projectId);
    const languageId = project.languages[0];
    setProjectLanguages(project.languages);

    const div = document.getElementById('header__languages');
    div.innerHTML = '';

    project.languages.forEach(l => {
        const language = languages.find(lan => lan.id === l);

        const button = element('button', { value: language.id, id: language.id }, language.label);
        button.addEventListener('click', () => selectLanguage(language.id));

        div.append(button);
    });

    selectLanguage(languageId);
}

function selectLanguage(languageId) {
    const projectSlug = getProjectSlug() ?? null;
    setLanguageId(languageId);

    if (projectSlug) {
        selectMessageBySlug(projectSlug);
    }

    const div = document.getElementById('header__languages');
    const buttons = Array.from(div.children);

    toggleActive(buttons, languageId);
}

function toggleActive(buttons, selectedId) {

    buttons.forEach(button => {
        button.classList.remove("active", "inactive");

        selectedId === button.id ? button.classList.add('active') : button.classList.add('inactive')
    });
}

export function buildHeader() {
    removeProjectSlug();
    buildProjectsButtons();

    selectProject(initProjectId);
}