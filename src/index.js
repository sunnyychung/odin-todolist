import { projects, Project } from "./modules/newProject.js";

class todoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false
    }

    getInfo() {
        return `Title: ${this.title}, Desc: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}, Checked: ${this.checked}`;
    }

    getStatus() {
        console.log(this.checked);
    }

    toggleStatus() {
        this.checked = !this.checked;
    }
}

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

const projectSelection = document.getElementById("project-select");
projectSelection.addEventListener("change", projectSelected)

// Template Created
const welcome = new Project("welcome");
welcome.createItem("Test", "Test", "Test", 1);
welcome.getItems();

// Testing Project
const project1 = new Project("project1");
project1.createItem("He", "Be", "now", 1);
project1.createItem("lggg", "Be", "now", 1);