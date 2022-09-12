import './style.css';
import './effects.css';
import _ from 'lodash';
import 'date-fns';

import {
    changePopUp,
    renderProjects,
    clearProjectForm,
} from './modules/UIcontrolls.js'

import {
    createProjectObj,
} from './modules/projects.js'

let projects = [];

/**fetching the saved projects if there are any */
let json = localStorage.getItem("projects");
if (json) {
        projects = JSON.parse(localStorage.getItem("projects"));
        console.log(projects);
        renderProjects(projects);
}

document.getElementById('close-popup').addEventListener('click', () => {changePopUp('project-form')});
document.querySelector('#close-popup-task').addEventListener('click', () => {changePopUp('task-form')});
document.querySelector('#add-project').addEventListener('click', () => {changePopUp('project-form')});
document.querySelector('#create-project').addEventListener('click', () => {
    let projName = document.querySelector('#project-name-input');

    if (projName.value !== '') {
        createProjectObj(projName.value);
        renderProjects(projects);
        clearProjectForm();
        changePopUp('project-form');

        localStorage.setItem("projects", JSON.stringify(projects));
    }
});

export {
    projects
};