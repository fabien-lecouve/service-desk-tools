//// IMPORT ////
import { findBySlug } from "../data/loader.js";
import { getLanguageId, getProjectId, getProjectLanguages, getProjectSignatures } from "./store.js";
import { courtesies } from "./courtesies.js";

export function buildMessage(slug) {
    const languageId = getLanguageId();
    const projectId = getProjectId();
    const signatures = getProjectSignatures();

    if (!languageId || !projectId) return null;

    const rawMessage = findBySlug(slug);

    const salutation = courtesies.salutation[languageId];
    const message = getTranslatedMessage(rawMessage);
    const closing = courtesies.closing[languageId];
    const signature = signatures[languageId];

    if (!salutation || !message || !closing || !signature) return null;

    if (!rawMessage.type) {
        return salutation + message + closing + signature;
    }

    if (rawMessage.type === "esc") {
        return salutation + message + closing;
    }

    return message;
}

function getTranslatedMessage(rawMessage) {
    const languageId = getLanguageId();

    if (rawMessage.translations?.[languageId]) {
        return rawMessage.translations[languageId];
    }

    for (const l of getProjectLanguages()) {
        if (l !== languageId && rawMessage.translations?.[l]) {
            return rawMessage.translations[l];
        }
    }
}

