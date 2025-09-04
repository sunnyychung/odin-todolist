import { projects } from "./newProject";

function clearItems() {
    const list = document.querySelector(".list");
    
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function projectSelected(event) {
    clearItems()

    const targetedProject = event.target.value;
    const projectName = projects[targetedProject];

    if (projectName) {
        projectName.getItems();
    }
}

export {projectSelected};