import deleteIcon from "../resources/imgs/crumpled-paper.png";
import dropdownArrow from "../resources/imgs/dropdown-arrow.png";

class Item {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
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

    getPriority() {
        return this.priority;
    }

    getStatus() {
        return this.checked;
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

function createItemDOM(element, index) {
    const item = document.createElement("li");
    item.id = `item-${index}`;
    item.classList.add(element.getPriority());
    
    // Key Info for Item
    const keyInfo = document.createElement("div");
    keyInfo.className = "keyInfo";
        // Checkbox
        const itemChecked = document.createElement("input");
        itemChecked.type = "checkbox";
        itemChecked.id = `itemTitle`;

        if (element.getStatus()) {
            itemChecked.checked = true;
        }

        // Item Title
        const itemTitle = document.createElement("p");
        itemTitle.id = `itemTitle`;

        if (element.getPriority() == "medium") {
            itemTitle.textContent = `📌 ${element.getTitle()}`;
        }
        else if (element.getPriority() == "high") {
            itemTitle.textContent = `❗${element.getTitle()}`;
        }
        else {
            itemTitle.textContent = element.getTitle();
        }


    keyInfo.appendChild(itemChecked);
    keyInfo.appendChild(itemTitle);

    // Item Due Info
    const itemDue = document.createElement("p");
    itemDue.className = "dueDate";
    itemDue.textContent = element.getDue();

    const deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
        // Delete Icon
        const deleteItem = document.createElement("input");
        deleteItem.type = "image";
        deleteItem.src = deleteIcon;
    
    deleteDiv.appendChild(deleteItem);
    
    const dropdownDiv = document.createElement("div");
    dropdownDiv.className = "dropdownDesc"
        // Dropdown Description Section
        const dropdownButton= document.createElement("input");
        const dropdownInfo = document.createElement("p");

        dropdownButton.type = "image";
        dropdownButton.src = dropdownArrow;
        dropdownButton.height = 20;

        dropdownInfo.className = "hide"
        dropdownInfo.id = "dropInfo"
        dropdownInfo.textContent = element.getDesc();

        dropdownButton.addEventListener("click", () => {
            dropdownInfo.classList.toggle("show");
        })

    dropdownDiv.appendChild(dropdownButton);
    dropdownDiv.appendChild(dropdownInfo);

    item.appendChild(keyInfo);
    item.appendChild(itemDue);
    item.appendChild(deleteDiv);
    item.appendChild(dropdownDiv);


    return { item, itemChecked, deleteItem };
}

export { Item, clearItems, createItemDOM };