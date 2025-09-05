import { findProject } from "./newProject.js";

function createItemModal() {
    const itemButton = document.getElementById("itemButton");
    const itemModal = document.getElementById("newItem");
    const itemSubmit = document.getElementById("itemSubmit");

    itemButton.addEventListener("click", () => {
        itemModal.showModal();
    })

    itemSubmit.addEventListener("click", () => {
        const itemName = document.getElementById("itemName").value;
        const itemDesc =  document.getElementById("itemDesc").value;
        const itemDue = document.getElementById("itemDue").value
        const itemPriority = document.querySelector('input[name="priority"]:checked')?.value;
        
        const selectedProject = document.getElementById("project-select").value;
        const projectQuery = findProject(selectedProject);

        projectQuery.createItem(itemName, itemDesc, itemDue, itemPriority);

        itemModal.close();
    })
}

export { createItemModal };