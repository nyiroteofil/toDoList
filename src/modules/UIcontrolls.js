import {
    removeProject,
    removeTask,
    addTask,
} from './projects.js'

import {
    projects,
} from '../App.js'

import removeIconSvg from '../images/remove.svg'
import checkMark from '../images/checkmark.svg'
import { format } from 'date-fns';

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

const removeAllChild = (parent) => {
    let container = document.querySelector(`.${parent}`)
    let node = container.firstChild;

    while (node) {
        container.removeChild(container.firstChild);
        node = container.firstChild;
    }
}

const renderProjects = (projects) => {
    removeAllChild('project-items')

    for (let i = 0; i < projects.length; i++) {
        produceProject(i, projects[i]);

        document.querySelectorAll('.project-title')[i].textContent = projects[i].name;
    }
};

const produceProject = (index, obj) => {
    let projectArea = document.createElement('div');
    projectArea.classList.add('project');
    projectArea.addEventListener('click', () => {
        renderProjectTasks(obj);
        addCreateButtonTarget(obj);
    })

    let projectTitle = document.createElement('p');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projects[index].name;

    let removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('remove-project');
    removeProjectBtn.addEventListener('click', () => {
        removeAllChild('tasks');
        removeProject(projectArea, obj);
        document.querySelector('.list-title').textContent = '';
        /**Saves the array that stores the projects */
        localStorage.setItem("projects", JSON.stringify(projects));
    });

    let removeIcon = document.createElement('img');
    removeIcon.src = removeIconSvg;

    /*appending elements*/
    
    let parent = document.querySelector('.project-items');

    parent.appendChild(projectArea);
    projectArea.appendChild(projectTitle);
    projectArea.appendChild(removeProjectBtn);
    removeProjectBtn.appendChild(removeIcon);
}

const clearProjectForm = () => {
    document.getElementById('project-name-input').value = '';
    document.getElementById('project-description-input').value = '';
}

const createNewTask = (obj) => {
    let name = document.querySelector('#task-name').value;
    let date = document.querySelector('#task-date').value;
    let priority;
    let radios = document.getElementsByName('priority');
    radios.forEach(e => {
        if (e.checked) {
            priority = e.value;
        }
    })

    addTask(name, date, priority, obj);

    /**Saves the array that stores the projects */
    localStorage.setItem("projects", JSON.stringify(projects));
}

const renderProjectTasks = (project) => {
    console.log(projects);

    let listTitle = document.querySelector('.list-title')
    listTitle.textContent = project.name;

    removeAllChild('tasks')

    for (let i = 0; i < project.tasks.length; i++) {

        console.log(project.tasks[i].name)

        let parent = document.querySelector('.tasks')

        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        let markerContainer = document.createElement('div');
        markerContainer.classList.add('marker-container');
        let mark = document.createElement('img');
        mark.classList.add('mark');
        mark.src = checkMark;

        mark.addEventListener('click', () => {
            removeTask(project, project.tasks[i], taskContainer);
            localStorage.setItem("projects", JSON.stringify(projects));
        })

        let taskName = document.createElement('p')
        taskName.classList.add('task-name');
        taskName.textContent = project.tasks[i].name;

        let dueTime = document.createElement('p');
        dueTime.classList.add('due-time');
        
        if (project.tasks[i].date === '') {
            dueTime.textContent = 'No time constraint'
        } else {
            dueTime.textContent = format(new Date(project.tasks[i].date), 'd/mm/yyyy');
        }

        switch (project.tasks[i].priority) {
            case 'Low': 
                taskContainer.classList.add('low');
                break;
            case 'Normal':
                taskContainer.classList.add('normal');
                break;
            case 'High':
                taskContainer.classList.add('high');
                break;
        
            default:
                taskContainer.classList.add('normal')
        }

        parent.appendChild(taskContainer);
        taskContainer.appendChild(markerContainer);
        taskContainer.appendChild(taskName);
        markerContainer.appendChild(mark);
        taskContainer.appendChild(dueTime);
    };

    renderAddTaskBtn();
};

const renderAddTaskBtn = () => {
    let btn = document.createElement('button');
    btn.id = 'add-task';
    btn.textContent = 'Add task';

    btn.addEventListener('click', () => {changePopUp('task-form')});

    document.querySelector('.tasks').appendChild(btn);
}

const addCreateButtonTarget = (obj) => {
    let button = document.querySelector('#create-task');
    let parent = document.querySelector('.task-button-container');

    parent.removeChild(button);

    let newButton = document.createElement('button')
    newButton.id = 'create-task';
    newButton.textContent = 'Add';

    newButton.addEventListener('click', () => {createNewTask(obj); renderProjectTasks(obj), clearTaskForm(), changePopUp('task-form')});
    
    parent.insertBefore(newButton, document.querySelector('#close-popup-task'));
}

const clearTaskForm = () => {
    let name = document.querySelector('#task-name');
    let date = document.querySelector('#task-date');
    let radios = document.getElementsByName('priority');

    name.value = '';
    date.value = '';
    radios[1].checked = true;
}

export {
    changePopUp,
    createElement,
    renderProjects,
    removeAllChild,
    clearProjectForm,
};

