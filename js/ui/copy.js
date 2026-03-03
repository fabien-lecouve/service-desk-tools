//// IMPORT ////
import { setProjectSlug } from "../core/store.js";
import { buildMessage } from "../core/messageBuilder.js";

export function selectMessageBySlug(slug) {

    if (!slug) return;

    setProjectSlug(slug);

    const btn = document.getElementById(slug);
    const result = buildMessage(slug);

    copyText(result)
        .then(() => {
            console.log(`✅ Copié : ${slug}`);
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 300);
        })
        .catch(err => console.error('❌ Erreur de copie :', err));
}

function copyText(text) {
    if (navigator.clipboard?.writeText) {
        return navigator.clipboard.writeText(text);
    }
}