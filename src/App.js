import './style.css';
import _ from 'lodash';

import {
    changePopUp,
    renderProjects,
    removeAllChild,
} from './modules/UIcontrolls.js'

import {
    createProjectObj,
} from './modules/projects.js'

const projects = [];

document.getElementById('close-popup').addEventListener('click', () => {changePopUp('project-form')})
document.querySelector('#add-project').addEventListener('click', () => {changePopUp('project-form')})
document.querySelector('#create-project').addEventListener('click', () => {
    let projName = document.querySelector('#project-name-input');

    if (projName.value !== '') {
        removeAllChild('project-items')
        createProjectObj(projName.value, document.querySelector('#project-description-input').value, 'projects');
        renderProjects(projects);
    }
})

export {projects};