import "./style.css";
import { createProjectModal } from "./modules/projectModal.js";
import { createItemModal } from "./modules/itemModal.js";
import { loadAssets } from "./modules/loadProjects.js";
import plusImage from "./resources/imgs/plus.png";

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

document.addEventListener("DOMContentLoaded", () => {
    const plusBtn = document.querySelector('.plus');
    if (plusBtn) {
        plusBtn.src = plusImage;
    }
});

createModals();
loadAssets();