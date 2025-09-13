class Item {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false
    }

    getTitle() {
        return this.title; 
    }

    getDesc() {
        return this.description;
    }

    getDue() {
        return this.dueDate;
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

export { Item, clearItems };