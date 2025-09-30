import { Item, createItemDOM } from "./newItem.js";
import { clearItems } from "./newItem.js";
import { projectSelected } from "./selectProject.js";
import { updateStorage } from "./loadProjects.js";
import deleteIcon from "../resources/imgs/crumpled-paper.png";

const projects = {};

function addToProjects(project) {
  projects[project.name] = project;

  updateStorage();
}

function findProject(projectName) {
  if (projects[projectName]) {
    return projects[projectName];
  }
}

function projectsToDOM(project) {
  addToProjects(project);

  const projectSelector = document.getElementById("projectList");
  const projectOption = document.createElement("div");
  projectOption.textContent = project.name;
  projectOption.className = "project";

  const deleteProject = document.createElement("input");
  deleteProject.type = "image";
  deleteProject.src = deleteIcon;

  deleteProject.addEventListener("click", () => {
    delete projects[project.name];
    updateStorage();
    projectOption.remove();
  });

  projectOption.appendChild(deleteProject);

  projectOption.addEventListener("click", (target) => {
    projectSelected(target.target.textContent);
  });

  projectSelector.appendChild(projectOption);

  projectSelected(project.name);
}

function createProject(projectName) {
  return new Project(projectName);
}

class Project {
  constructor(name) {
    this.name = name;
    this.itemList = [];

    projectsToDOM(this);
  }

  createItem(itemName, description, dueDate, priority) {
    const newItem = new Item(itemName, description, dueDate, priority);
    this.itemList.push(newItem);

    updateStorage();
    clearItems();
    this.getItems();
  }

  getItems() {
    this.itemList.forEach((element, index) => {
      const domList = document.querySelector(".list");

      const { item, itemChecked, deleteItem } = createItemDOM(element, index);

      itemChecked.addEventListener("change", () => {
        element.toggleStatus();
        clearItems();
        this.getItems();
      });

      deleteItem.addEventListener("click", () => {
        this.itemList.splice(index, 1);
        clearItems();
        this.getItems();
      });

      domList.appendChild(item);
    });
  }
}

export { projects, createProject, findProject };
