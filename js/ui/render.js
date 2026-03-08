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
        const categoryTitle = element("h2", { class: "section__title" }, category.label);
        const categoryContent = element("div", { class: "section__content" });

        if (category.buttons) {
            category.buttons.forEach(button => {

                const btn = createButton(button);

                categoryContent.append(btn);
            });
        }

        if (category.accent) {
            section.classList.add(`accent-${category.accent}`);
        }

        if (category.subcategories) {
            for (const [subId, sub] of Object.entries(category.subcategories)) {

                const subcategoryContent = element("div", { id: subId, class: "card" });

                if (sub.accent) {
                    subcategoryContent.classList.add(`accent-${sub.accent}`);
                }

                const subcategoryTitle = element("h3", { class: "card__title" }, sub.label);
                const cardContent = element("div", { class: "card__content" });

                if (sub.group) {
                    subcategoryContent.classList.add("card-wide");

                    sub.group.forEach(group => {

                        const groupContainer = element("div", { class: "group" });
                        const groupTitle = element("h4", { class: "group__title" }, group.label);
                        const groupContent = element("div", { class: "group__content" });

                        group.buttons.forEach(button => {
                            const btn = createButton(button)

                            groupContent.append(btn);
                        });

                        groupContainer.append(groupTitle, groupContent);
                        cardContent.append(groupContainer)
                    });
                }

                if (sub.buttons) {

                    const groupContent = element("div", { class: "group__content" });

                    sub.buttons.forEach(button => {
                        const btn = createButton(button)

                        groupContent.append(btn);
                    });
                    cardContent.append(groupContent);
                }


                subcategoryContent.append(subcategoryTitle, cardContent);
                categoryContent.append(subcategoryContent);
            }
        }

        section.append(categoryTitle, categoryContent);
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