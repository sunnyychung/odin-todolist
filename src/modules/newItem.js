class Item {
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

export { Item };