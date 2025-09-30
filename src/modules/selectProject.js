import {findProject} from './newProject';
import {clearItems} from './newItem';

function changeDisplayedProject(selectedName) {
	const selected = document.querySelector('.selectedProject');

	selected.textContent = selectedName;
}

function projectSelected(selectedName) {
	clearItems();

	const project = findProject(selectedName);

	if (project) {
		project.getItems();
		changeDisplayedProject(selectedName);
	}
}

export {projectSelected};
