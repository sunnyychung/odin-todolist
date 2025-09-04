import { Project } from "./modules/newProject.js";
import { projectSelected } from "./modules/selectProject.js";

const modalButton = document.getElementById("projectButton");
const projectModal = document.getElementById("newProject");
const closeModal = document.getElementById("closeModal");
const submitButton = document.getElementById("projectSubmit");

modalButton.addEventListener("click", () => {
    projectModal.showModal();
})

closeModal.addEventListener("click", (target) => {
    target.target.parentNode.parentNode.close();
})

submitButton.addEventListener("click", () => {
    const projectName = document.getElementById("projectName").value;
    new Project(projectName);

    projectModal.close();
})

// EventListener for Changing Projects
const projectSelection = document.getElementById("project-select");
projectSelection.addEventListener("change", projectSelected);

// Template Created
const welcome = new Project("welcome");
welcome.createItem("Test", "Test", "Test", 1);
welcome.getItems();

// Testing Project
const project1 = new Project("project1");
project1.createItem("He", "Be", "now", 1);
project1.createItem("lggg", "Be", "now", 1);