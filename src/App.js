import './style.css';
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

const projects = [];

document.getElementById('close-popup').addEventListener('click', () => {changePopUp('project-form')});
document.querySelector('#close-popup-task').addEventListener('click', () => {changePopUp('task-form')});
document.querySelector('#add-project').addEventListener('click', () => {changePopUp('project-form')});
document.querySelector('#create-project').addEventListener('click', () => {
    let projName = document.querySelector('#project-name-input');

    if (projName.value !== '') {
        createProjectObj(projName.value, document.querySelector('#project-description-input').value, 'projects');
        renderProjects();
        clearProjectForm();
        changePopUp('project-form');
    }
});

function displayProjects() {
    projects.forEach(e => {
        console.log(e);
        console.log(e.tasks);
    })
}


export {
    projects,
};