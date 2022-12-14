import {projects} from '../App.js';

function Project(name) {
    this.name = name;
    this.tasks = [];
}

const addTask = (name, date, priority, project) => {
    let newTask = new Task(name, date, priority)

    project.tasks.push(newTask);
};

function Task(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
}

const createProjectObj = name => {
    let project = new Project(name);

    projects.push(project);
};


/**removes projects both from the array and the DOM */
const removeProject = (node, obj) => { 
    projects.splice(obj, 1);

    let parent = document.querySelector('.project-items');
    
    parent.removeChild(node);   
}

const removeTask = (proj, task, node) => {
    proj.tasks.splice(task, 1);

    document.querySelector('.tasks').removeChild(node);
};

export {
    createProjectObj,
    removeProject,
    addTask,
    removeTask,
}