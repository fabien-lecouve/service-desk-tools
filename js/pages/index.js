//// IMPORT ////
import { fetchJSONData, element } from "../utils/index.js";
import { clearStorage } from "../utils/storage.js";
import { setGroup } from "../core/store.js";

//// FUNCTIONS ////
async function displayNavigation() {
    const nav = document.getElementById("nav");
    nav.innerHTML = "";

    const groups = await fetchJSONData("./js/json/projects.json");

    groups.forEach(group => {
        const a = element("a", { href: "project.html", class: "navbar__link" });

        const h3 = element("h3", { class: "navbar__link--title" }, group.groupLabel);

        const div = element("div", { class: "navbar__link--media" });
        const img = element("img", { src: `images/${group.logoId}`, alt: `Logo de ${group.groupLabel}` });

        div.append(img);
        a.append(h3, div);

        a.addEventListener("click", () => {
            setGroup(group.items);
        });

        nav.append(a);
    });
}

//// INIT ////
clearStorage();
displayNavigation();