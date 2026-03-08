//// IMPORT ////
import { fetchJSONData } from "../utils/index.js";
import { setProjectSignatures } from "../core/store.js";

let currentProject = null;
let slugIndex = {};

export async function initProject(projectId) {
    currentProject = await fetchJSONData(`./js/json/${projectId}.json`);
    slugIndex = buildSlugIndex(currentProject);
    setProjectSignatures(currentProject.signatures);
}

function buildSlugIndex(project) {
    const index = {};

    for (const category of Object.values(project.categories)) {

        if (category.buttons) {
            for (const button of category.buttons) {
                index[button.slug] = button;
            }
        }

        if (category.subcategories) {
            for (const subcategory of Object.values(category.subcategories)) {

                if (subcategory.group) {
                    subcategory.group.forEach(group => {
                        for (const button of group.buttons) {
                            index[button.slug] = button;
                        }
                    });
                }
                if (subcategory.buttons) {
                    for (const button of subcategory.buttons) {
                        index[button.slug] = button;
                    }
                }
            }
        }
    }

    return index;
}

export function getProjectData() {
    return currentProject;
}

export function findBySlug(slug) {
    return slugIndex[slug] ?? null;
}