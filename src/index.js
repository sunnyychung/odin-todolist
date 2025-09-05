import { Project } from "./modules/newProject.js";
import { changeProjects } from "./modules/selectProject.js";
import { createProjectModal } from "./modules/projectModal.js";
import { createItemModal } from "./modules/itemModal.js";

const closeModal = document.querySelectorAll(".closeModal");

closeModal.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.close();
    });
});

createItemModal();
createProjectModal();
changeProjects();


