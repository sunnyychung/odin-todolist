import { Item } from "./newItem.js";
import { clearItems } from "./selectProject.js";
import trashLogo from "../resources/imgs/trash-icon.png";
import dropdownArrow from "../resources/imgs/dropdown-arrow.png";

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

function createItemDOM(desc, due, index) {
    // Checkbox
    const itemChecked = document.createElement("input");
    itemChecked.type = "checkbox";
    itemChecked.name = `itemTitle`;

    // Item Description Info

    const itemTitle = document.createElement("label");
    itemTitle.htmlFor = `itemTitle`;

    // Item Due Info

    const itemDue = document.createElement("p");
    itemDue.textContent = due;

    // Delete Icon

    const deleteItem = document.createElement("input");
    deleteItem.type = "image";
    deleteItem.src = trashLogo;
    deleteItem.height = 20; // REMOVE THIS AFTER FINISHED

    // Dropdown Section

    const dropdownSection = document.createElement("div");
    const dropdownButton= document.createElement("input");
    const dropdownInfo = document.createElement("p");

    dropdownButton.type = "image";
    dropdownButton.src = dropdownArrow;
    dropdownButton.height = 20;

    dropdownInfo.className = "hide"
    dropdownInfo.id = "dropInfo"
    dropdownInfo.textContent = desc;

    dropdownButton.addEventListener("click", () => {
        dropdownInfo.classList.toggle("show");
    })

    dropdownSection.appendChild(dropdownButton);
    dropdownSection.appendChild(dropdownInfo);

    

    return { itemChecked, itemTitle, itemDue, deleteItem, dropdownSection};
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

            const item = document.createElement("li");
            item.id = `item-${index}`;

            const itemDiv = document.createElement("div");
            const { itemChecked, itemTitle, itemDue, deleteItem, dropdownSection } = createItemDOM(element.getDesc(), element.getDue());

            itemTitle.textContent = element.getTitle();

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

            itemDiv.appendChild(itemChecked);
            itemDiv.appendChild(itemTitle);
            itemDiv.appendChild(itemDue);
            itemDiv.appendChild(deleteItem);
            itemDiv.appendChild(dropdownSection);

            item.appendChild(itemDiv);

            domList.appendChild(item);
        })
    }
}

const weapon = new Project("weapon");
weapon.createItem("Hello", "Hello", "Hello", "Hello");

export { projects, createProject, findProject};