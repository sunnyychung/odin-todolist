import {createProject} from './newProject.js';

function createProjectModal() {
	const projectButton = document.getElementById('projectButton');
	const projectModal = document.getElementById('newProject');
	const projectSubmit = document.getElementById('projectSubmit');

	projectButton.addEventListener('click', () => {
		projectModal.showModal();
	});

	projectSubmit.addEventListener('click', () => {
		const projectName = document.getElementById('projectName').value;
		createProject(projectName);

		projectModal.close();
	});
}

export {createProjectModal};
