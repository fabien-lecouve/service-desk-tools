//// IMPORT ////
import { element } from "../utils/index.js";
import { getProjectData } from "../data/loader.js";
import { selectMessageBySlug } from "../ui/copy.js";

export function buildMessagesButtons() {
    const project = getProjectData();
    const main = document.getElementById("quick-messages");

    if (!project) return;

    main.innerHTML = "";

    for (const [categoryId, category] of Object.entries(project.categories)) {

        const section = element("section", { id: categoryId, class: "section" });
        const h2 = element("h2", { class: "section__title" }, category.label);
        const div1 = element("div", { class: "section__content" });

        if (category.buttons) {
            category.buttons.forEach(button => {

                const btn = createButton(button);

                div1.append(btn);
            });
        }

        if (category.subcategories) {
            for (const [subId, sub] of Object.entries(category.subcategories)) {

                const div2 = element("div", { id: subId, class: "card" });

                if (sub.accent) {
                    div2.classList.add(`accent-${sub.accent}`);
                }

                const h3 = element("h3", { class: "card__title" }, sub.label);
                const div3 = element("div", { class: "card__content" });

                sub.buttons.forEach(button => {
                    const btn = createButton(button)

                    div3.append(btn);
                });

                div2.append(h3, div3);
                div1.append(div2);
            }
        }

        section.append(h2, div1);
        main.append(section);
    }
}

function createButton(button) {
    const btn = element(
        "button",
        { type: "button", value: button.slug, id: button.slug },
        button.name
    );

    btn.addEventListener("click", () => {
        selectMessageBySlug(button.slug);
    });

    if (button.action) {
        btn.classList.add(`action-${button.action}`);
    }

    if (button.type === "wn") {
        btn.classList.add("accent-orange");
    }

    return btn;
}