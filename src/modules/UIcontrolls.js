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

    let element = document.creteElement(type);
    
    if (className !== undefined || className !== '') {
        element.classList.add(className);
    }

    container.appendChild(element);
};

/**render the projects from the project array in App.js */

/**This is where I will continue */

const renderProjects = () => {
    projects.forEach(e => {
        
    });
};

export {
    changePopUp,
    createElement,
};

