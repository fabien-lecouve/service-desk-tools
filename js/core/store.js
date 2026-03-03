import { setStorage, getStorage, removeStorage } from "../utils/index.js";

export function setGroup(array) {
    setStorage("selectedGroup", array);
}

export function getGroup() {
    return getStorage("selectedGroup");
}

export function setProjectId(id) {
    setStorage("selectProjectById", id);
}

export function getProjectId() {
    return getStorage("selectProjectById");
}

export function setProjectSlug(slug) {
    setStorage("selectProjectBySlug", slug);
}

export function getProjectSlug() {
    return getStorage("selectProjectBySlug");
}

export function removeProjectSlug() {
    return removeStorage("selectProjectBySlug");
}

export function setLanguageId(id) {
    setStorage("selectedLanguage", id);
}

export function getLanguageId() {
    return getStorage("selectedLanguage");
}

export function setProjectLanguages(array) {
    setStorage("projectLanguages", array);
}

export function getProjectLanguages() {
    return getStorage("projectLanguages");
}

export function setProjectSignatures(array) {
    setStorage("projectSignatures", array);
}

export function getProjectSignatures() {
    return getStorage("projectSignatures");
}

