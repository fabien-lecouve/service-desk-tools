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
        const a = element("a", { href: "project.html", class: "menu__link" });

        const h3 = element("h3", {}, group.groupLabel);

        a.append(h3);

        a.addEventListener("click", () => {
            setGroup(group.items);
        });

        nav.append(a);
    });
}

//// INIT ////
clearStorage();
displayNavigation();