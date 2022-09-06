import {
    projects
} from '../App.js'

const changePopUp = (element) => {
    let container = document.querySelector(`.${element}`);
    
    if (container.classList.contains('show')) {
        container.classList.remove('show');
    } else {
        container.classList.add('show');
    }
};

const createElement = (parent, type, className) => {
    let container = document.querySelector(`.${parent}`)

    let element = document.createElement(type);
    
    if (className !== undefined || className !== '') {
        element.classList.add(className);
    }

    container.appendChild(element);
};

/**This is where I will continue */

const removeAllChild = (parent) => {
    let container = document.querySelector(`.${parent}`)
    let node = container.firstChild;

    while (node) {
        container.removeChild(container.firstChild);
        node = container.firstChild;
    }
}

const renderProjects = () => {
    removeAllChild('project-items')

    for (let i = 0; i < projects.length; i++) {
        /**make the elements manualy by document.createElement */

        document.querySelectorAll('.project-name')[i].textContent = projArr[i].name;
    }
};

export {
    changePopUp,
    createElement,
    renderProjects,
    removeAllChild,
};

