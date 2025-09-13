import { projects } from "./newProject";
import { clearItems } from "./newItem";

function changeDisplayedProject(selectedName) {
    const selected = document.querySelector('.selectedProject');

    selected.textContent = selectedName;
}

function projectSelected(selectedName) {
    clearItems()

    const projectName = projects[selectedName];

    if (projectName) {
        projectName.getItems();
        changeDisplayedProject(selectedName);
    }
}

export { projectSelected };