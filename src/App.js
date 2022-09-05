import './style.css';
import _ from 'lodash';

import {
    changePopUp,
} from './modules/UIcontrolls.js'

import {
    createProjectObjm
} from './modules/projects.js'

const projects = [];

document.getElementById('close-popup').addEventListener('click', () => {changePopUp('project-form')})
document.querySelector('#add-project').addEventListener('click', () => {changePopUp('project-form')})
