import "./style.css";
import { createProjectModal } from "./modules/projectModal.js";
import { createItemModal } from "./modules/itemModal.js";
import { loadAssets } from "./modules/loadProjects.js";

function createModals() {
    const closeModal = document.querySelectorAll(".closeModal");

    closeModal.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.close();
        });
    });

    createItemModal();
    createProjectModal();
}

createModals();
loadAssets();