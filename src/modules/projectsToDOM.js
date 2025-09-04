import { addToList } from "./newProject";

function optionToDOM(project) {
    addToList(project);

    const projectSelector = document.getElementById("project-select");
    const projectOption = document.createElement("option");

    projectOption.value = project.name;
    projectOption.textContent = project.name;

    projectSelector.appendChild(projectOption);
}

export { optionToDOM };
