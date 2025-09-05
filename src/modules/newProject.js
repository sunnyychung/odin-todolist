import { Item } from "./newItem.js";
import { clearItems } from "./selectProject.js";

let projects = {};

function addToProjects(project) {
    projects[project.name] = project;
}

function findProject(projectName) {
    if (projects[projectName]) {
        return projects[projectName];
    }
}

function projectsToDOM(project) {
    addToProjects(project);

    const projectSelector = document.getElementById("project-select");
    const projectOption = document.createElement("option");

    projectOption.value = project.name;
    projectOption.textContent = project.name;

    projectSelector.appendChild(projectOption);
}

function createProject(projectName) {
    new Project(projectName);
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

        clearItems();
        this.getItems();
    }

    getItems() {
        this.itemList.forEach((element) => {
            const domList = document.querySelector(".list");

            const item = document.createElement("li");
            item.textContent = element.getInfo();

            domList.appendChild(item);
        })
    }
}

export { projects, createProject, findProject};