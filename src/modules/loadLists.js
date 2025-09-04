let projects = {};

function addToList(project) {
    projects[project.name] = project;
}

function addToSelect(project) {
    addToList(project);

    const projectSelector = document.getElementById("project-select");
    const projectOption = document.createElement("option");

    projectOption.value = project.name;
    projectOption.textContent = project.name;

    projectSelector.appendChild(projectOption);
}

export {addToSelect, projects};
