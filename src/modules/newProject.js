import { Item, createItemDOM } from "./newItem.js";
import { clearItems } from "./newItem.js";
import { projectSelected } from "./selectProject.js";

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

    const projectSelector = document.getElementById("projectList");
    const projectOption = document.createElement("div");
    projectOption.textContent = project.name;
    projectOption.className = "project";

    projectOption.addEventListener("click", (target) => {
        projectSelected(target.target.textContent);
    })

    projectSelector.appendChild(projectOption);

    projectSelected(project.name);
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
            })

            domList.appendChild(item);
        })
    }
}

const weapon = new Project("weapon");
weapon.createItem("Hello", "Hello", "Hello", "Hello");

export { projects, createProject, findProject};