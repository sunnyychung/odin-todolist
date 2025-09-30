import { projects, createProject } from "./newProject.js";

function populateStorage() {
  createProject("Default");

  localStorage.setItem("projects", JSON.stringify(projects));

  updateStorage();
}

function loadProjects() {
  const stringProjects = localStorage.getItem("projects");

  const parsedProjects = JSON.parse(stringProjects);

  for (const key in parsedProjects) {
    const project = createProject(key);

    parsedProjects[key].itemList.forEach((item) => {
      project.createItem(
        item.title,
        item.description,
        item.dueDate,
        item.priority,
      );
    });
  }
}

function updateStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadAssets() {
  if (!localStorage.getItem("projects")) {
    populateStorage();
  } else {
    loadProjects();
  }
}

export { loadAssets, updateStorage };
