import { optionToDOM } from "./projectsToDOM.js";
import { Item } from "./newItem.js";

let projects = {};

function addToList(project) {
    projects[project.name] = project;
}

class Project {
    constructor(name) {
        this.name = name;
        this.itemList = [];

        optionToDOM(this);
    }

    createItem(itemName, description, dueDate, priority) {
        const newItem = new Item(itemName, description, dueDate, priority);
        this.itemList.push(newItem);
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

export { projects, addToList, Project };