class todoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false
    }

    getStatus() {
        console.log(this.checked);
    }

    toggleStatus() {
        this.checked = !this.checked;
    }

    addItem() {
        const list = document.querySelector(".list");

        const item = document.createElement("li");
        item.textContent = this.title;

        list.appendChild(item);
    }
}

class Project {
    constructor(name) {
        this.name = name;
    }

    createItem(itemName, description, dueDate, priority) {
        const newItem = new todoItem(itemName, description, dueDate, priority);
        newItem.addItem();
    }
}

const project1 = new Project("booba");

project1.createItem("He", "Be", "now", 1);